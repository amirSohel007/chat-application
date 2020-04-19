import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import JoinChat from './Components/Join/Join-Chat'
import Chat from './Components/Chat/Chat'
import Board from './Components/Board/Board'

function App() {
  return (
    <div className="main">
    <BrowserRouter>
        <Route exact path="/join" component={JoinChat}></Route>
        <Route exact path="/chat" component={Chat}></Route>
        <Route exact path="/board" component={Board}></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
