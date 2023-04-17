import "./data.css"
import Navbar from "./Navbar"
import ActualData from "./ActualData"
function RFID_data(){
    return (
        <div className="data">
            <Navbar/>
            <ActualData/>
        </div>
    )
}

export default RFID_data;