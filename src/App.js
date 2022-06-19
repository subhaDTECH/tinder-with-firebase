import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
    
      <Router>
     
        <Switch>
        <Route exact path="/chat/:person">
            <Header backbutton="/chat" />
             <ChatScreen/>
           </Route>
        <Route exact path="/chat">
            <Header backbutton="/" />
            <Chats/>
           </Route>
          <Route exact path="/">
             <Header/>
              <TinderCards/>
              <SwipeButtons/>
          </Route>

         
         
        </Switch>
      </Router>
       {/* tinder_post  */}
       {/* tinder_icon  */}
       {/* chat box  */}
       {/* each chat box  */}
    </div>
  );
}

export default App;
