import React,{useState,useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import db from "./firebase";

const TinderCards = () => {
    const [people,setPeople]=useState([])
//  get people data from database 
            useEffect(()=>{
                db.collection('people').onSnapshot(snapshot=>{
                    setPeople(snapshot.docs.map(doc=>doc.data()))
                })

            },[])
   

    return (
        <div className="TinderCard_container" >
      {
          people.map((person)=>{
             return (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                 <div className="card" style={{backgroundImage:`url(${person.url})`}}>
                     <h2>{person.name}</h2>
                 </div>
            </TinderCard>
             )
          })
      }
           
            
        </div>
    )
}

export default TinderCards;
