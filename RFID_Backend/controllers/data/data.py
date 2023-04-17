# import mysql.connector
# from flask import jsonify, request
# from controllers import app
# from datetime import datetime
#
#
# @app.route("/getdate", methods=["POST"])
# def get_data():
#     sending_data = []
#     mydb = mysql.connector.connect(host="localhost", user="root", passwd="user123", database="rfid_data")
#     mycursor = mydb.cursor()
#     data = request.get_json()
#     from_date = data["from_date"]
#     to_date = data["to_date"]
#
#     mycursor.execute(f"SELECT * from gate_17-08-2022 where entry_time between '{from_date}' and '{to_date}'")

    # for tb in mycursor:
    #     new_date = datetime.strftime(tb[1], "%D/%M/%Y")
    #     new_time = datetime.strftime(tb[1], "%H:%M:%S")
    #     sending_data.append([tb[0], new_date, new_time])
    #
    # return jsonify({"success": True, "data": sending_data})