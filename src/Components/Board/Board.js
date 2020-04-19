import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import queryString from "query-string";
import ScrollToBottom from 'react-scroll-to-bottom';

const Board = ({ location }) => {
    const { name } = queryString.parse(location.search);
    const hostURL = "https://websocket-chat-app-react.herokuapp.com/";
    const socket = io(hostURL);
    const [message, setMessage] = useState([]);
    const emitObject = {name, message}

const send = () => {
        socket.emit("message", emitObject);
        const messageBox = document.querySelector('.message-input');
        messageBox.innerText = ""
    }

    useEffect(()=> {
      socket.on("message", (responce) => {
        let messageContainer = document.querySelector('.messages-content');
        let messagelist = `<div class="message new"> <span>${responce.name}</span>${responce.message}</div> `
        messageContainer.innerHTML += messagelist;
    },[]);
    })



    return(
        <div>
        <div className="chat">
        <div className="chat-title">
          <h1>{name}</h1>
          <h2>Supah</h2>
          <figure className="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt=""/></figure>
        </div>
        <div className="messages">
        <ScrollToBottom>
          <div className="messages-content">
          </div>
          </ScrollToBottom>
        </div>
        <div className="message-box">
          <textarea type="text" className="message-input" onChange={ (event)=> setMessage(event.target.value)} placeholder="Type message..."></textarea>
          <button type="submit" className="message-submit" onClick={() => send()}>Send</button>
        </div>
      </div>
      <div className="bg"></div>
      </div>
    )
}

export default Board
