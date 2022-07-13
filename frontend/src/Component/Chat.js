import React, { useEffect, useState } from 'react'
import socketIO, { io } from "socket.io-client";
import {useParams} from 'react-router-dom';
import '../Css/Chat.css'
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../Images/closeIcon.png";
import sendLogo from "../Images/send.png";


const ENDPOINT = 'http://localhost:5000';

const Chat = () => {
  
  
  const {user} = useParams();
  
  useEffect(() => {
    const socket =  socketIO(ENDPOINT , {transports : ['websocket']});
    
    socket.on('connect' , ()=>{
      alert('you are connected')
      return
    })

  socket.emit('joined', { user })

  socket.on('messege'  , (data)=>{
    console.log(data.user , data.messege)
  })

  socket.on('userjoined'  , (data)=>{
    console.log(data.messege)
  })

  return () => {
    socket.emit('dissconnect')
    socket.off()

  }

  }, [])

  

    return (
      <div className="chatPage">
      <div className="chatContainer">
          <div className="header">
              <h2>C CHAT</h2>
              <a href="/"> <img src={closeIcon} alt="Close" /></a>
          </div>
          <div className="inputBox">
              <input  type="text" id='chatInput' />
              <button  className="sendBtn"><img src={sendLogo} alt="Send" /></button>
          </div>
        </div>

      </div>
    )
}

export default Chat
