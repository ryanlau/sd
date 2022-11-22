# npcs -- Craig Chen, Ryan Lau
# SoftDev
# K20: A RESTful Journey Skyward
# 2022-11-21
# time spent: 0.5 hrs

import requests
from flask import Flask, render_template


with open("key_nasa.txt") as f:
    key = f.read()


app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    response = requests.get(f"https://api.nasa.gov/planetary/apod?api_key={key}")
    response = response.json()

    explanation = response.get("explanation")
    img_url = response.get("url")

    return render_template("main.html", explanation=explanation, img_url=img_url)

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()