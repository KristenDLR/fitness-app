import React from "react";
const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
const currentDay = new Date().toLocaleString("en-US", { day : '2-digit'})
const currentDate = currentMonth + " " +  currentDay;


//logic for comparing current month and date to sessions.date
//if session.item.date.splice(" ")[0] ==== currentMonth && session.item.date.splice(" ")[1] ==== currentDay ? display:none
//!ice box: Currently will hard code this section, if time allows will create a conditional to compare current date with db.js. and OnClick to button
// sort entire sessions array in order 



function Upcoming() {
    return (
        <>
        <h1>Upcoming</h1>
        </>
    )
}

export default Upcoming