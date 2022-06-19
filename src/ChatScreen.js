import { Avatar } from '@material-ui/core';
import React ,{useState}from 'react';
import Button from '@material-ui/core/Button';
import "./ChatScreen.css";

const ChatScreen = () => {
    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([
        {
            name:'ankitaroy',
            message:'i love you ❤️',
            image:'https://cdn.pixabay.com/photo/2020/02/05/06/24/cat-4820202_1280.jpg'

        },
        {
            name:'ankitaroy',
            message:'i love you ❤️',
            image:"https://cdn.pixabay.com/photo/2020/02/05/06/24/cat-4820202_1280.jpg"
        },
        {
            name:'ankitaroy',
            message:'how are you ❤️',
            image:"https://cdn.pixabay.com/photo/2020/02/05/06/24/cat-4820202_1280.jpg"
        },
        {
            message:"wowo working"
        }
    
    ]);
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("hii")
        setMessages([...messages,{message:input}]);
        setInput("");
    }
    return (
        <div className="chatscreen">
        <h3 className="chatscreen_connect_text">you are connected with Raj</h3>
        {
            messages.map((message)=>{
                return (
                    
                        message.name ? (<div className="chatscreen_message">
                        <Avatar src={message.image} />
                        <p className="chat_message">{message.message}</p>

                        </div>

                        ):(
                        <div className="chatscreen_message">
                        
                        <p className="chat_user_message">{message.message}</p>

                        </div>
                        )
                    
               
                
                )
                
                
            })
        }

     <form  className="message_sender">
         <input
         onChange={(e)=>setInput(e.target.value)} 
          value={input} type="text " placeholder="Type a Message....." />
         <Button type="submit" onClick={sendMessage} variant="contained" color="secondary">
           send
      </Button>
     </form>
            
        </div>
    )
}

export default ChatScreen;
