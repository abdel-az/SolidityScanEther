from rest_framework.response import Response
from rest_framework.decorators import api_view
import joblib
import os
import sys
import re
from sklearn.feature_extraction.text import TfidfVectorizer


#BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def code_tokenizer(code):
    tokens = re.findall(r'[A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+', code)
    tokens = [t.lower() for t in tokens]
    return tokens


sys.modules['__main__'].code_tokenizer = code_tokenizer


BASE_DIR = os.getcwd()+'\\'+"ml_model"

model = joblib.load(BASE_DIR+"\\Regmodel.pkl")

vectorizer = joblib.load(BASE_DIR+"\\Regvectorizer.pkl")

binarizer = joblib.load(BASE_DIR +"\\Regbinarizer.pkl")

@api_view(['POST'])


def detect_vulnerabilities(request):

    code = request.data.get("path", "")
    print(code)
    if not code :
        return Response({"error": "No code provided"}, status=400)
 

    results = []

    with open(code,'r') as file:
        Data = file.readlines()
        for index, line in enumerate(Data, start=1):
            test_vec = vectorizer.transform([line])
            prediction = model.predict(test_vec)
            predicted_labels = binarizer.inverse_transform(prediction)

            if predicted_labels[0]:
                results.append({
                    "line_number": index,
                    "code": line.strip(),
                    "vulnerability": predicted_labels[0][0]  
                })
    return Response({"vulnerabilities": results}) 

