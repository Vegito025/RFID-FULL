# import mysql.connector
#
# mydb = mysql.connector.connect(host="localhost", user="root", passwd="user123", database="rfid_data")
#
# mycursor = mydb.cursor()
#
# mycursor.execute("select * from rfid_tag where epc_id=''")
# access_no = ""
# adding_data = []
# for tb in mycursor:
#     access_no = tb[1]
#
# mycursor.execute(f"select * from book20072022 where access_no='{access_no}'")
#
# for details in mycursor:
#     adding_data.append((details[1], "245", details[0]))
#
# # sqlform = "insert into attendance (name, intime, access_no) values(%s,%s, %s)"
# #
# # mycursor.executemany(sqlform, adding_data)
# # mydb.commit()
#
# mycursor.execute(f"Update attendance set outtime='370' where access_no='{access_no}'")
# mydb.commit()
#
#
#
#
#
#
from datetime import datetime
timestamp = 1658392861078000/1000000
print(datetime.fromtimestamp(timestamp))
date = str(datetime.fromtimestamp(timestamp))
print(type(date))