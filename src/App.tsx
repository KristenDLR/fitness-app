import React from 'react';
import Sessions from "./components/Sessions";
import './App.css';
import db from "./db";
import Upcoming from './components/Upcoming';
import Schedule from './components/Schedule'

//! temporaroly copied db.js to relocate into src to access


function App() {
  console.log(db.routines);

  const session = db.sessions;

  const sessionsCard = session.map(item => {
    console.log(item.date.split(' ')[0])

      return(
        <Sessions
        title={item.name}
        duration={item.duration}
        time={item.time}
        date={item.date}
        status={item.status}
        />
      )
  })

  const scheduleCard = session.map(item => {
    console.log(item.date.split(' ')[0])

      return(
        <Schedule
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
            <Upcoming />
            {scheduleCard}
          </div>
    </div>
  );
}

export default App;
