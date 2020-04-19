import React from "react";
import queryString from "query-string";
import io from "socket.io-client";
import {Link} from "react-router-dom"

const Chat = ({ location }) => {
  const { name } = queryString.parse(location.search);

  return (
     <div className="Full-page">
    <div className="center-content">
    <h3>Hello {name} Welcome </h3>
        <Link to={`/board?name=${name}`}><button className="start">Start Messaging</button></Link>
    </div>
     </div>
  );
};

export default Chat;
