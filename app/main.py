from flask import Flask, send_file, request, jsonify
from tensorflow import keras
from tensorflow.keras.models import load_model
import spoonacular
#import cv2
from cv2 import resize, imread, imwrite, imshow, imdecode, IMREAD_COLOR, INTER_AREA
#import opencv-python-headless as cv2
import numpy as np
import os
import json
import base64
import time
from werkzeug.utils import secure_filename

print("connecting spoonacular API...")
API_KEY = "a80ce6a267f14f4f86a64efe027f6495"

app = Flask(__name__)
api = spoonacular.API(API_KEY)
print("done")

##home_dir = os.path.expanduser("~")
##UPLOAD_FOLDER = "./upload_images" #changed to host directory
##app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
print("\nloading classifier...")
classifier = load_model('classifierModel')
print("done")

print("\nloading models...")
strawberryModel = load_model('strawberryModel')
onionModel = load_model('onionModel')
carrotModel = load_model('carrotModel')
beetrootModel = load_model('beetrootModel')
cucumberModel = load_model('cucumberModel')
tomatoModel = load_model('tomatoModel')
potatoModel = load_model('potatoModel')
pepperModel = load_model('pepperModel')
print("done")

modelArray = [beetrootModel, carrotModel, cucumberModel, onionModel, pepperModel, potatoModel, strawberryModel, tomatoModel]
classNames = ["beetroot", "carrot", "cucumber", "onion", "pepper", "potato", "strawberry", "tomato"]

@app.route("/")
def home_view():
    return "<h1>HAIID peep & STUFF! \n does this work YET</h1>"


@app.route("/generate_meal_plan_from_diet=<string:dietstring>/", methods = ["GET"])
def get_meal_plan(dietstring):
    response = api.generate_meal_plan(diet=dietstring)
    data = response.json()
    try: meals = data["items"]
    except: return data
    day_meals = [m for m in meals if m['day']==1]

    #return "<h1>" + str(day_meals) + "</h1>"
    resp = jsonify({"message":str(day_meals)})
    resp.headers.add('Access-Control-Allow-Origin', '*')

    return resp
    

@app.route("/recipe_search_str=<string:query>/")
def recipe_search(query):
    response = api.search_recipes_complex(query)
    data = response.json()
    try: img = data['results'][0]['image']
    except:
        return data     #JSON
        #]return data['message']
    #return "<h1>" + str(img) + "</h1>"
    resp = jsonify({'message':str(img)})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp


    


##@app.route("/get_growth_stage", methods = ['POST'])
##def get_growth_stage():
##    new_file = request.files['image']
##    file_name = secure_filename(new_file.filename)
##    #new_file.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))
##    new_file.save(app.config['UPLOAD_FOLDER'] + "/" + file_name)
##    image = np.array([cv2.resize(cv2.imread('upload_images/' + file_name)/255, (224, 224), interpolation = cv2.INTER_AREA)])
##    
##    imageClass = np.argmax(classifier.predict(image)[0])
##
##    model = modelArray[imageClass]
##
##    prediction = model.predict(image)
##
##    if imageClass == 0:
##        progress = (1.5*prediction[0][0] + 4*prediction[0][1] + 7*prediction[0][2])/7
##    elif imageClass == 1:
##        progress = (2*prediction[0][0] + 6.5*prediction[0][1]+ 10*prediction[0][2])/10
##    elif imageClass == 2:
##        progress = (1.5*prediction[0][0] + 4*prediction[0][1] + 7*prediction[0][2] + 9*prediction[0][3])/9
##    elif imageClass == 3:
##        progress = (1.5*prediction[0][0] + 6.5*prediction[0][1] + 11*prediction[0][2])/11
##    elif imageClass == 4:
##        progress = (prediction[0][0] + 2.5*prediction[0][1]+4*prediction[0][2]+6*prediction[0][3])/6
##    elif imageClass == 5:
##        progress = (prediction[0][0] + 3*prediction[0][1] + 6.5*prediction[0][2] + 8*prediction[0][3])/8
##    #elif imageClaass == 6:
##    #    progress = (##*prediction[0][0] + ##*prediction[0][1] + ##*prediction[0][2])/##
##    #elif imageClaass == 7:
##    #    progress = (##*prediction[0][0] + ##*prediction[0][1] + ##*prediction[0][2])/##
##
##    return str(progress)

@app.route('/get_progress', methods = ['POST'])
def get_progress():

    f = json.loads(request.data.decode('utf-8'))

    if 'image' in f:
        fstr = str(f['image'])
        dest = open(fstr, 'rb')
        new_file = dest.read()
    else:
        fstr = str(f['base64'])
        new_file = base64.b64decode(fstr)
    
    # image = open('image.jpg', 'wb+')
    # image.write(new_file)
        
    # cvimage = imread(r'image.jpg')
    # cropped_file = cvimage[290:788, 0:498]
    # imwrite("image1.jpg", cropped_file)
    
    npimg = np.frombuffer(new_file, np.uint8)

    # imwrite("image2.jpg", resize((imdecode(npimg, IMREAD_COLOR)[290:788, 0:498]), (224, 224), interpolation = INTER_AREA))

    image = np.array([resize((imdecode(npimg, IMREAD_COLOR)[290:788, 0:498]/255), (224, 224), interpolation = INTER_AREA)])
   
    
    imageClass = np.argmax(classifier.predict(image)[0])
    model = modelArray[imageClass]
    prediction = model.predict(image)

    value = calculate_progress(prediction, imageClass)

    response = jsonify({"value":value, "species":classNames[imageClass]})
    response.headers.add('Access-Control-Allow-Origin', '*')

    
    return response

def calculate_progress(prediction, imageClass):
    if imageClass == 0:
        progress = (1.5*prediction[0][0] + 4*prediction[0][1] + 7*prediction[0][2])/7
    elif imageClass == 1:
        progress = (2*prediction[0][0] + 6.5*prediction[0][1]+ 10*prediction[0][2])/10
    elif imageClass == 2:
        progress = (1.5*prediction[0][0] + 4*prediction[0][1] + 7*prediction[0][2] + 9*prediction[0][3])/9
    elif imageClass == 3:
        progress = (1.5*prediction[0][0] + 6.5*prediction[0][1] + 11*prediction[0][2])/11
    elif imageClass == 4:
        progress = (4*prediction[0][0] + 10*prediction[0][1] + 14*prediction[0][2])/14
    elif imageClass == 5:
        progress = (4*prediction[0][0] + 10.5*prediction[0][1] + 14.5*prediction[0][2])/14.5
    elif imageClass == 6:
        progress = (prediction[0][0] + 2.5*prediction[0][1]+4*prediction[0][2]+6*prediction[0][3])/6
    elif imageClass == 7:
        progress = (prediction[0][0] + 3*prediction[0][1] + 6.5*prediction[0][2] + 8*prediction[0][3])/8


    return str(progress)



@app.route("/get_recipes", methods = ["GET"])
def get_recipes():
    #inputs
    diet = request.args.get('diet', default='None', type = str)
    user_ingredients = request.args.get('userIngredients',default='flour,egg,milk,banana,honey,golden syrup,butter', type=str)
    allowed_missed_ingredients = request.args.get('allowMissed',default=2, type=int)
    num_recipes_wanted = request.args.get('recipesWanted',default=5, type=int)
    #ADD TEST VALUES SO DONT CALL API!!!!!

    #return diet + user_ingredients+str(allowed_missed_ingredients)+str(num_recipes_wanted)

    valid_recipes = []
    #try:
    while len(valid_recipes) < num_recipes_wanted:
        rec_from_ingr = api.search_recipes_by_ingredients(user_ingredients).json()
        try:
            if rec_from_ingr['status'] == 'failure': return rec_from_ingr
        except: pass
        
        for rec in rec_from_ingr:
            if rec['missedIngredientCount'] <= allowed_missed_ingredients:
                if diet=='None':
                    valid_recipes.append(rec)
                else:
                    rec_details = api.get_recipe_information(rec['id']).json()
                    try:
                        if rec_details['status'] == 'failure': return str(rec_details['message'])
                    except: pass
                    
                    if diet in rec_details['diets']:
                        valid_recipes.append(rec)
##    except Exception as e:
##        #return "Hi there " + str(e) 
   
    #return str(valid_recipes)
    resp = jsonify({'message':valid_recipes})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp
    #resp = jsonify({"message:"

@app.route("/some_thing", methods = ["GET"])
def anything():
    response = jsonify({"message":"greetings from the python server!!!!"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

##@app.route("/generate_meal_plan")
##def get_meal_plan():
##    time_frame = request.args.get('timeFrame', default='None', type = str)
##    diet = request.args.get('diet', default='None', type = str)
##    user_ingredients = request.args.get('userIngredients',default='flour,egg,milk,banana,honey,golden syrup,butter', type=str)
    


#DEBUG MODE!!
if __name__ == '__main__':
    app.run(host='172.16.3.103', port=5000, debug=True)
