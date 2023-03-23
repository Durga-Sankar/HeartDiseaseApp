from flask import Flask,jsonify,request
from flask_cors import CORS
import joblib
model = joblib.load("Randorm_Forest_Heart_Prediction.h5")
param=[]

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/message", methods=['GET'])
def hello_world():
    return jsonify({'message':'It works'})

@app.route("/api/model" , methods=['POST'] )
def model_param():
   param=[]
   model_p={
   'age':request.json['age'],
   'trestbps':request.json['trestbps'],
   'chol':request.json['chol'],
   'thalach':request.json['thalach'],
   'oldpeak':request.json['oldpeak'],
   'sex_0':request.json['sex_0'],
   'cp_0':request.json['cp_0'],
   'cp_1':request.json['cp_1'],
   'cp_2':request.json['cp_2'],
   'fbs_0':request.json['fbs_0'],
   'restecg_0':request.json['restecg_0'],
   'restecg_1':request.json['restecg_1'],
   'exang_0':request.json['exang_0'],
   'Slope_0':request.json['Slope_0'],
   'Slope_1':request.json['Slope_1'],
   'ca_0':request.json['ca_0'],
   'ca_1':request.json['ca_1'],
   'ca_2':request.json['ca_2'],
   'ca_3':request.json['ca_3'],
   'thal_0':request.json['thal_0'],
   'thal_1':request.json['thal_1'],
   'thal_2':request.json['thal_2'],


    }
   param.append(model_p)
   output=model.predict([[int(model_p['age']), int(model_p['trestbps']), int(model_p['chol']), int(model_p['thalach']), int(model_p['oldpeak']),
   int(model_p['sex_0']),int(model_p['cp_0']),int(model_p['cp_1']),int(model_p['cp_2']),int(model_p['fbs_0']),int(model_p['restecg_0']),int(model_p['restecg_1']),
   int(model_p['exang_0']),int(model_p['Slope_0']),int(model_p['Slope_1']),int(model_p['ca_0']),int(model_p['ca_1']),int(model_p['ca_2']),int(model_p['ca_3'])
   ,int(model_p['thal_0']),int(model_p['thal_1']),int(model_p['thal_2'])]])
   return jsonify({'param':param},{'output':output.tolist()})
   

if __name__=='__main__':
    app.run(debug=True)