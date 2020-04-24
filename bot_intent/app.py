from flask import Flask, abort, request, redirect, url_for, flash, jsonify
import numpy as np
import pickle as p
import pandas as pd
import json


app = Flask(__name__)



@app.route('/api/v1.0/')
def index():
  return jsonify(text="This is a ML NLP endpoint for our hardware bot")


@app.route('/api/v1.0/intent', methods=['POST'])
def find_intent():
    if not request.json or not 'text' in request.json:
        abort(800)

    user_input = request.json['text']
    print (user_input)
    if user_input.find("ssh") >= 0:
        intent = {
            'intent': "do you want to ssh into the system"
            }
    else:
        intent = {
            'intent': "no intent found"
        }
  
    return jsonify({'task': intent}), 201



@app.route('/api/prediction/', methods=['POST'])
def call_intent_ml():
    return jsonify(text="hi there")

# def makecalc():
#     j_data = request.get_json()
#     prediction = np.array2string(model.predict(j_data))
#     return jsonify(text="hi there")


if __name__ == '__main__':

    modelfile = 'models/final_prediction.pickle'    

    model = p.load(open(modelfile, 'rb'))
    
    app.run(debug=True,host='0.0.0.0')