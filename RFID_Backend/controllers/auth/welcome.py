from flask import Flask, jsonify
from controllers import app

@app.route("/")
def welcome():
    return jsonify({"success":True, "message": "Welcome To RFID BACKEND"})