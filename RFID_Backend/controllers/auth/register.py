from werkzeug.security import generate_password_hash
from controllers import app
from flask import jsonify, request, json
import mysql.connector


@app.route("/register", methods=["POST"])
def register():
    mydb = mysql.connector.connect(host="localhost", user="root", passwd="user123", database="rfid_data")
    mycursor = mydb.cursor()
    data = request.get_json()
    name = data["name"]
    login_id = data["login_id"]
    password = data["password"]
    confirm_password = data["confirm_password"]

    hashed_password = generate_password_hash(
        password,
        method="pbkdf2:sha256",
        salt_length=8
    )
    if password == confirm_password:
        sql_form = "INSERT INTO users(name, login_id, password) values(%s, %s, %s)"
        adding_data = [(name, login_id, hashed_password)]
        mycursor.executemany(sql_form, adding_data)
        mydb.commit()

    return jsonify({"success": True, "message": "User created successfully"})

