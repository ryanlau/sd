# notes-and-code: Hui Wang, Ryan Lau, Jonathan Song
# SoftDev
# K12 -- flask forms
# 2022-10-17
# time spent: 1 hrs

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

app = Flask(__name__)    #create Flask object


"""THINGS TO DO
- [x] visible to your visitor as a rendered page in the browser,
- [x] produced via template,
- [x] include username entered,
- [x] include request method used,
- [x] include your greeting to this person
- [x] showcase your clearest breakdown of the differences between a GET and POST request (generalizations welcome, but give treatment specifically to handling these in the context of a Flask app, using the shared codebase you all started from)
- [x] display team name and roster on landing page and response page.
"""


@app.route("/", methods=['GET', 'POST']) #, methods=['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)

    if request.method == "GET":
        return render_template('login.html')
    else:
        return render_template('response.html', method=request.method, username=request.form['username'])

    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
