from __future__ import print_function, division
import logging
from twisted.internet import reactor
from sllurp.llrp import LLRPClientFactory
from datetime import datetime, date
import pytz
import pymongo
start_time = None

client = pymongo.MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)
RFID_DATA = client["rfid_data"]["student_lists"]
BOOK_DATA = client["rfid_data"]["Book Data"]
IST = pytz.timezone('Asia/Kolkata')


numtags = 0

logger = logging.getLogger(__name__)


def tag_report_cb(llrp_msg):
    global numtags
    datetime_ist = datetime.now(IST)
    tags = llrp_msg.msgdict["RO_ACCESS_REPORT"]["TagReportData"]
    if len(tags):
        access_no = ""
        adding_data = []
        ts = datetime.now()
        for i in tags:
            print('saw tags(s): %s', i)
            EPC_id = i["EPC-96"].decode("utf-8")
            EPC_id = str(EPC_id)
            print(type(EPC_id))
            book_data = BOOK_DATA.find_one({"epc_id": EPC_id.upper()})
            result = RFID_DATA.find_one({"RFID_id":EPC_id, "date": str(date.today())})
            if result:
                if (ts.timestamp() - result["in_time"]) < 15000:
                    pass
                elif result["in_time"] and not result["out_time"]:
                    result["out_time"] = ts.timestamp()
                    result.save()
                else:
                    if book_data:
                        RFID_DATA.insert_one({
                            "RFID_id": EPC_id,
                            "in_time": int(ts.timestamp()),
                            "out_time":None,
                            "date": str(date.today()),
                            "book_name": book_data["title"],
                            "book_author": book_data["author"]
                        })
                    else:
                        print("Unidentified")
            else:
                if book_data:
                    RFID_DATA.insert_one({
                        "RFID_id": EPC_id,
                        "in_time": int(ts.timestamp()),
                        "date": str(date.today()),
                        "book_name": book_data["title"],
                        "book_author": book_data["author"],
                        "out_time":None
                    })
                else:
                    print("unidentified")
        for tag in tags:
            numtags += tag["TagSeenCount"][0]
    else:
        print("no tag seen")

    reactor.stop()


def main():
    global start_time
    fac = LLRPClientFactory(
        reconnect=True,
        tag_content_selector={
            'EnableROSpecID': False,
            'EnableSpecIndex': False,
            'EnableInventoryParameterSpecID': False,
            'EnableAntennaID': True,
            'EnableChannelIndex': True,
            'EnablePeakRSSI': False,
            'EnableFirstSeenTimestamp': True,
            'EnableLastSeenTimestamp': True,
            'EnableTagSeenCount': True,
            'EnableAccessSpecID': False
        }
    )

    fac.addTagReportCallback(tag_report_cb)
    reactor.connectTCP("10.240.0.36", 5084, fac, timeout=3)
    reactor.run()


main()
