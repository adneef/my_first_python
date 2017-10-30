from flask import Flask, request, send_from_directory, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/auto')
# def autoGet():
#     return send_from_directory('./', 'car-clean-mpg.csv')

@app.route('/auto')
def render():
    return send_from_directory('./', 'cylindersVMPG.html')
