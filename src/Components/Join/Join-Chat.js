import React, { useState } from "react";
import { NavLink} from "react-router-dom";

const JoinChat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="full-wrapper">
      <div className="half-screen">
        <div className="content-container">
          <h3>Looking for chatmate ?</h3>
          <p>
            We have build a platfrom where you can find random friends and
            create room over here and chat with them and find amazing people
          </p>
        </div>
      </div>
      <div className="login-box">
        <h3>Sign in chatroom</h3>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(event) => setName(event.target.value)}
        />
     
      <NavLink onClick={(event) => (!name) ? event.preventDefault() : "null"} to={`/chat?name=${name}`} className="wd-100"><button>Join Chat</button></NavLink>
      </div>
    </div>
  );
};

export default JoinChat;
