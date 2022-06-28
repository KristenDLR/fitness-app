import React from "react";
const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
const currentDay = new Date().toLocaleString("en-US", { day : '2-digit'})
const currentDate = currentMonth + " " +  currentDay;


//logic for comparing current month and date to sessions.date
//if session.item.date.splice(" ")[0] ==== currentMonth && session.item.date.splice(" ")[1] ==== currentDay ? display:none


function Upcoming() {
    return (
        <>
        <h1>Upcoming</h1>
        </>
    )
}

export default Upcoming