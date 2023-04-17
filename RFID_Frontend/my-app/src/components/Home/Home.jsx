import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

function Home(){
    const [loginId, setLoginId] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    let navigate = useNavigate()

    function verifyLogin(){
        Axios.post("http://127.0.0.1:5000/login", {login_id: loginId, password: password})
        .then((response)=>{
            if(response.data.success === true){
                navigate("/data")
            }
            else{
                setError(response.data.message)
            }
        })
    }


    return(
        <div className="login">
            <img src="925084241s.jpg" alt="" />
            <h1>RFID Login Portal</h1>
            <div class="v1"></div> 
            <input type="text" placeholder="Login ID" className="loginId" onChange={(event)=>{setLoginId(event.target.value)}}/>
            <input type="password" placeholder="Password" className="loginPass" onChange={(event)=>{setPassword(event.target.value)}}/>
            {error ? <p>{error}</p> : null}
            <button onClick={verifyLogin}>Submit</button>
        </div>
    )
}

export default Home;