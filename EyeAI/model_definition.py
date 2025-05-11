# %%
from langchain_core.output_parsers import StrOutputParser
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
import torch
from torch.utils.data import Dataset
from sklearn.model_selection import train_test_split
from torchvision import transforms
from torch.utils.data import DataLoader
import torch.nn.functional as F
import torch.nn as nn
import torch.optim as optim
import pandas as pd
import os
from torchvision import transforms
from PIL import Image
from torchvision import models
#import optuna

# %%
label_to_idx = {
    "Cataract":0,
    "Dry_AMD":1,
    "Glaucoma":2,
    "Hypertensive_Retinopathy":3,
    "Mild_DR":4,
    "Moderate_DR":5,
    "Normal_Fundus":6,
    "Pathological_Myopia":7,
    "Proliferate_DR":8,
    "Severe_DR":9,
    "Wet_AMD":10,
}

# %%


# %%


# %%


# %%
device = torch.device("cuda" if torch.cuda.is_available() else 'cpu')
device
# %%
load_dotenv()
# %%
def do_all(diagnosis, history, language = "en"):
    
    if diagnosis == "normal":
        if language == "en":
            print("Congratulations, you are normal!")
            return
        elif language == "hi":
            print("बधाई हो, आप बिलकुल ठीक हैं")
            return

    parser = StrOutputParser()
    llm = ChatOpenAI()
    
    if diagnosis == "Mild_DR" or diagnosis == "Moderate_DR" or diagnosis == "Proliferate_DR" or diagnosis == "Severe_DR":
        file = "diabetic_retinopathy.txt"
    elif diagnosis == "Glaucoma":
        file = "glaucoma.txt"
    elif diagnosis == "Cataract":
        file = "cataract.txt"
    elif diagnosis == "Dry_AMD" or diagnosis == "Wet_AMD":
        file = "amd_txt.txt"
    elif diagnosis == "Hypertensive_Retinopathy":
        file = "hypertensive_retinopathy.txt"
        
    with open(file, 'r', encoding = 'utf-8') as file:
        text = file.read() 
    text = text.replace(r"\n\n", '\n')
    
    splitter = RecursiveCharacterTextSplitter(chunk_size = 1000, chunk_overlap = 200)
    chunks = splitter.create_documents([text])
    embeddings = OpenAIEmbeddings(model = "text-embedding-3-small")
    vector_store = FAISS.from_documents(chunks, embeddings)
    retriever = vector_store.as_retriever(search_type = "similarity", search_kwargs = {'k':10})
    
    summary_prompt = PromptTemplate(
        template = """
        You have to summarize the patient's history into short pointers(only the parts useful for querying documents): {history}
        """,
        input_variables = ['history']
    )
    summary_chain = summary_prompt | llm | parser
    summary = summary_chain.invoke({"history":history})
    
    academia = retriever.invoke(summary)
    causes_academia = "\n\n\n".join([ac.page_content for ac in academia])

    causes_prompt = PromptTemplate(
        template = """
        You are an assistant who gives the causes given the following diagnosis: {diagnosis}, 
        And the following patient history : {context}
        You have the following medical academia to infer a cause : {academia}
        """,
        input_variables=['diagnosis', 'context', 'academia']
    )
    cause_chain = causes_prompt | llm | parser
    cause = cause_chain.invoke({"diagnosis":diagnosis, "context":summary, "academia": causes_academia})

    refrence = retriever.invoke(f'Treatment methods for {diagnosis}')
    treatment_academia = "\n\n".join([ac.page_content for ac in refrence])

    treatment_prompt = PromptTemplate(
        template = """
        You are a helpful assistant and your role is to give the treatment(in pointers) for the following diagnosis: {diagnosis}
        You are given the following sets of causes: {causes}
        Use the following academia as reference: {reference}
        """,
        input_variables = ['causes','diagnosis', 'reference']
    )
    treatment_chain = treatment_prompt | llm | parser
    treatment = treatment_chain.invoke({'causes': cause, "diagnosis":diagnosis, "reference": treatment_academia})

    translate_prompt = PromptTemplate(
        template = "Convert the following text to hindi: {text}",
        input_variables = ['text']
    )
    translator = translate_prompt | llm | parser
    
    if language == "hi":
        cause = translator.invoke({"text":cause})
        treatment = translator.invoke({'text':treatment})
        return treatment, cause
        # print("कारण: \n")
        # print(cause, "\n\n")
        # print("इलाज: \n")
        # print(treatment, "\n\n")
    elif language == "en":
        return treatment, cause
        # print('Cause: \n')
        # print(cause, "\n\n")
        # print('Treatment: \n')
        # print(treatment)

# %%
label_to_idx = {
    "Cataract":0,
    "Dry_AMD":1,
    "Glaucoma":2,
    "Hypertensive_Retinopathy":3,
    "Mild_DR":4,
    "Moderate_DR":5,
    "Normal_Fundus":6,
    "Pathological_Myopia":7,
    "Proliferate_DR":8,
    "Severe_DR":9,
    "Wet_AMD":10,
}
idx_to_label = {w:v for v,w in label_to_idx.items()}
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    transforms.Resize((224,224))
])

# %%
vgg16 = models.vgg16(weights='VGG16_Weights.IMAGENET1K_V1')
for param in vgg16.parameters():
    param.requires_grad = False
vgg16.to(device)

# %%
class CNN(nn.Module):
    def __init__(self, dropout_rate = 0.45):
        super().__init__()
        
        # self.features = base_model.features

        # base_model = models.vgg19(pretrained=True)
        self.features = vgg16.features

        # # Optional: freeze pretrained layers
        # for param in self.features.parameters():
        #     param.requires_grad = False

        self.avgpool = nn.AdaptiveAvgPool2d((4, 4))


        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(512*4*4,1024),
            nn.BatchNorm1d(1024),
            nn.ReLU(),
            nn.Dropout(dropout_rate),

            nn.Linear(1024,512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(dropout_rate),

            nn.Linear(512, 11)
        )
        

    def forward(self, X):
        x = self.features(X)
        x = self.avgpool(x)
        x = self.classifier(x)
        return x

# %%
model = CNN()
model.to(device)

# %%
checkpoint = torch.load('disone.pth')

model = CNN()  # Make sure CNN matches the model architecture you trained
model.load_state_dict(checkpoint['model_state_dict'])  # ✅ Correct key
model.to(device)
model.eval()

# Also extract label mappings if needed:
idx_to_label = checkpoint['idx_to_label']
label_to_idx = checkpoint['label_to_idx']

# %%
def do_inference(image_path, idx_to_label, model):
    img = Image.open(image_path)
    img = img.convert("RGB")
    img = transform(img)
    img = img.unsqueeze(0)
    img = img.to(device)
    
    logits = model(img)
    probabilities = F.softmax(logits, dim =1)
    prob, prediction = torch.max(probabilities, dim=1)
    return float(prob), idx_to_label[int(prediction)]

# %%
prob, diagnosis = do_inference(r'C:\Users\satvi\Desktop\Ocular_Academia\dataset\glaucoma\_34_836194.jpg', idx_to_label, model)

# %%
history = """
Doctor, I’ve been having trouble with my eyes lately, and I’m worried it might be something serious.

Over the past few months, I’ve noticed that my peripheral vision isn’t as sharp as it used to be—it’s like I’m looking through a tunnel sometimes. I’ve also been getting frequent headaches, especially around my brow and temples, and my eyes often feel achy or strained.

A few times, I’ve had sudden blurry vision in one eye, along with halos around lights, particularly at night. My right eye seems worse—colors don’t look as vivid, and sometimes there’s a dull pain behind it.
"""

# %%
do_all(diagnosis, history, language = "en")

# %%


# %%



