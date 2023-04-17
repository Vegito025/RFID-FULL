from flask import jsonify, request
import mysql.connector
from controllers import app
from datetime import datetime


@app.route("/getdata", methods=["POST"])
def getdata():
    sending_data = []
    mydb = mysql.connector.connect(host="localhost", user="root", passwd="user123", database="rfid_data")
    mycursor = mydb.cursor()
    data = request.get_json()
    from_date = data["from_date"]
    to_date = data["to_date"]

    mycursor.execute(f"SELECT * from gate_17_08_2022 where entry_time between '{from_date}' and '{to_date}'")

    for tb in mycursor:
        sending_data.append({"member_code":tb[1], "entry_date": tb[2], "in_time":tb[5]})

    return jsonify({"success": True, "data": sending_data})