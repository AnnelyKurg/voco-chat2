import React, {useEffect} from "react";
import './App.css';
import Chat from "./Components/chat/Chat";
import {connectToServer} from "./socket-service";



function App() {
    useEffect(() => {
        connectToServer()
            .then((message)=> {
                console.log(message);
            });
    }, []);

  return (
    <div className="app">
        <Chat/>

        <div className="btn-container">
            <input placeholder="autor"/>
            <input placeholder="sõnum"/>
            <button className="buttonSend">Saada</button>
        </div>

    </div>
  );
}

export default App;
