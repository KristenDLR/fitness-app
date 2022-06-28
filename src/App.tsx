import React from 'react';
import Session from "./components/Sessions";
import './App.css';
import db from "./db";


//! temporaroly copied db.js to relocate into src to access


function App() {
  console.log(db.routines);

  

  const session = db.sessions;

  const sessionsCard = session.map(item => {
      return(
        <Session
        title={item.name}
        duration={item.duration}
        time={item.time}
        date={item.date}
        status={item.status}
        />
      )
  })
//need to add sort for date and status


  return (
    <div className="App">
       <div className="header">
           Sessions
         </div>
         <div className="frame">
            {sessionsCard}
          </div>
    </div>
  );
}

export default App;
