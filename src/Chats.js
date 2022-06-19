import React from 'react';
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
    return (
        <div className="chats">
           <Chat
               profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGWNYmCmThUAcYV-QBGEry8_vQQrfcn329A&usqp=CAU"
               name="Raj"
               message="Great content "
               timestamp="14 miniutes ago"

           />
           <Chat
               profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGWNYmCmThUAcYV-QBGEry8_vQQrfcn329A&usqp=CAU"
               name="duley.subha"
               message="wow man this is great"
               timestamp="34 miniutes ago"

           />
           <Chat
               profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGWNYmCmThUAcYV-QBGEry8_vQQrfcn329A&usqp=CAU"
               name="Lappa.subha"
               message="broooo man this is great"
               timestamp="30 miniutes ago"

           />

           
        </div>
    )
}

export default Chats;
