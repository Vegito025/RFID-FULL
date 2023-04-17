import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"

function Register(){
    const [loginName, setLoginName] = useState(null)
    const [loginId, setLoginId] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm_password, setConfirmPassword] = useState(null)
    let navigate = useNavigate();

    async function sendUser(){
        console.log(loginName, loginId, password)
        await Axios.post("http://127.0.0.1:5000/register", {name: loginName, login_id: loginId, password: password, confirm_password: confirm_password})
        .then((response)=>{
            if(response.data.success === true){
                navigate("/")
            }
        })    
    }

    return (
        <div className="register">
            <img src="925084241s.jpg" alt="" />
            <div class="v1"></div>
            <h1>RFID Register Portal</h1>
            <input type="text" placeholder="Name" onChange={(event)=>{
                setLoginName(event.target.value)
            }} className="RegisterName"/>
            <input type="text" placeholder="Login ID" onChange={(event)=>{
                setLoginId(event.target.value)
            }} className="RegisterId"/>
            <input type="password" placeholder="Password" onChange={(event)=>{
                setPassword(event.target.value)
            }} className="RegisterPass"/>
            <input type="password" placeholder="Confirm Password" onChange={(event)=>{
                setConfirmPassword(event.target.value)
            }} className="RegisterConPass"/>
            <button onClick={sendUser}>Submit</button>
        </div>
    )
}

export default Register;