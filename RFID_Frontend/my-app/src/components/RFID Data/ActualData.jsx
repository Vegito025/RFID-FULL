import React from "react";
import "./data.css"
function ActualData(){

    
    return (
        <div className="actual-data-react">
            <div className="wrapper-out-react">
                <div className="wrapper-react">
                    <p>Sr. No</p>
                    <p>RFID No.</p>
                    <p>Student Name</p>
                    <p>Reg No.</p>
                    <p>First Seen</p>
                    <p>Last Seen</p>
                </div>
                <div className="wrapper-2-react">
                    <p>1.</p>
                    <p>123456789</p>
                    <p>Subramanian Iyer</p>
                    <p>40110466</p>
                    <p>12:00:25</p>
                    <p>12:05:25</p>
                </div>
            </div>
        </div>
    )
}

export default ActualData;