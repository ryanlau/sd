# notes-and-code: Hui Wang, Ryan Lau, Jonathan Song
# SoftDev  
# K19
# 2022-11-04
# time spent: 1.5 hrs 

from flask import Flask, render_template, session, request
import secrets
app = Flask(__name__) 

username = 'rm'
password = 'jimin'

app.secret_key = secrets.token_hex()

@app.route("/", methods=['GET', 'POST'])       
def display():
    if request.method == "GET":
        if 'username' in session:
            return render_template('response.html', method=request.method, username=session['username'])
        return render_template('login.html')
    else:
        if (request.form['username'] == 'rm' and request.form['password'] == 'jimin'):
            session['username'] = request.form['username']
            return render_template('response.html', method=request.method, username=session['username'])
        else:
            if ("rm" != request.form['username']):
                return render_template('login.html', message="bad username!")
            return render_template('login.html', message="bad password!")
            

@app.route("/logout")
def logout():
    session.pop('username', None)
    return render_template('login.html', message="logged out")

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
