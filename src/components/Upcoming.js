import React from "react";
const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
const currentDay = new Date().toLocaleString("en-US", { day : '2-digit'})
const currentDate = currentMonth + " " +  currentDay;


//logic for comparing current month and date to sessions.date
//if session.item.date.split(' ')[0]] ==== currentMonth && session.item.date.split(" ")[1] ==== currentDay ? display:none
//!ice box: Currently will hard code this section, if time allows will create a conditional to compare current date with db.js. and OnClick to button
// sort entire sessions array in order 



function Upcoming() {
    return (
        <>
        <h1 className="today">Today</h1>
        <div className="starting">
            <h2 style={{fontSize: "14px"}}> Next Session starting in:</h2>
            <h1 className="time">04:24:01</h1>
            <h2 style={{fontSize: "20px"}}>Vinyasa Yoga - 45 mins</h2>
            <button>Start Now</button>
        </div>
        </>
    )
}

export default Upcoming