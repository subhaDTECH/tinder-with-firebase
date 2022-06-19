import { Avatar } from '@material-ui/core';
import React from 'react';
import {Link} from "react-router-dom";
import "./Chat.css";

const Chat = ({ profileimg,name,message,timestamp}) => {
    return (
        //no space in link 
        <Link className="Each_chat" to={`/chat/${name} `}>
             <div className="chat">
          <Avatar className="avatar_img" src={profileimg}/>
          <div className="chat__info">
              <h2>{name}</h2>
               <p>{message}</p>

          </div>
          <p className="time_text">{timestamp}</p>
            
        </div>
        </Link>
        
    )
}

export default Chat;
