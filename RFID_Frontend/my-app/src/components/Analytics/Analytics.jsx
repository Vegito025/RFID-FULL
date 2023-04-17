import "./Analytics.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Chart from "./Chart-react";
import Pie_Chart from "./Pie_Chart"
import Line_Chart from "./Line_Chart";

function Analytics(){
    const [departName, setDepartName] = useState("Department")
    const [year, setYear] = useState("Select Year")
    const [type, setType] = useState("Type")
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    return (
        <div className="analytics">
            <h1>Welcome to Analytics</h1>

            <input type="text" name="register_no" id="register_no" placeholder="Register Number"/>
            <p className="from_date">From:</p>
            <input type="date" name="date" id="date" onChange={(event)=>{setFromDate(event.target.value)}}/>
            <p className="to_date">To:</p>
            <input type="date" name="" id="date" onChange={(event)=>{setToDate(event.target.value)}}/>
            <DropdownButton title={departName} variant="outline-warning" style={{paddingLeft: "30%", paddingTop:"2%", width: "20%"}} onSelect={(event)=>{setDepartName(event)}}>
                <Dropdown.Item eventKey="Computer Science And Engineering">Computer Science And Engineering</Dropdown.Item>
                <Dropdown.Item eventKey="Electronics And Communication Engineer">Electronics And Communication Engineer</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title={year} variant="outline-info" style={{paddingLeft: "30%", paddingTop:"2%", width: "20%"}} onSelect={(event)=>{setYear(event)}}>
                <Dropdown.Item eventKey="Select Year">Select Year</Dropdown.Item>
                <Dropdown.Item eventKey="First">First</Dropdown.Item>
                <Dropdown.Item eventKey="Second">Second</Dropdown.Item>
                <Dropdown.Item eventKey="Third">Third</Dropdown.Item>
                <Dropdown.Item eventKey="Fourth">Fourth</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title={type} variant="outline-light" style={{paddingLeft: "30%", paddingTop:"2%", width: "20%"}} onSelect={(event)=>{setType(event)}}>
                <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
                <Dropdown.Item eventKey="Chart">Chart</Dropdown.Item>
                <Dropdown.Item eventKey="Table">Table</Dropdown.Item>
            </DropdownButton>
            <Button variant="success" className="analytics-submit">Submit</Button>
            <Chart/>
            <Pie_Chart/> 
            <Line_Chart/>

        </div>
        
    )
}

export default Analytics;