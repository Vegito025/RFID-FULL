from flask import Flask, request, jsonify
from controllers import app
from werkzeug.security import check_password_hash, generate_password_hash


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    login_id = data["login_id"]
    password = data["password"]
    hashed_password = generate_password_hash(
        "Firefist#123",
        method="pbkdf2:sha256",
        salt_length=8
    )
    if check_password_hash(hashed_password, password) and login_id == "iyerg100@gmail.com":
        return jsonify({"success": True, "message": "User is valid"})
    return jsonify({"success": False, "message": "Unauthenticated User Detected. Please check your LoginID or Password"})