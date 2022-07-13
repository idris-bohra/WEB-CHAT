import React, { useState } from 'react'
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import '../Css/Join.css'

let user;


const sendUser = () => {
    console.log("hell user")
}


const Login = () => {

    const [name, setname] = useState("");

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>C CHAT</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to= {`/chat/${name}`}>  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
        </div>
    )
}

export {Login}

