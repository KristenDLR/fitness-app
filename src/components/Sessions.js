import { React, useState } from "react";



function Sessions(props){
    let [isToday, setIsToday ] = useState(false);

    //Figma organizes data as left and right may restructure

    const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
    const currentDay = new Date().toLocaleString("en-US", { day : '2-digit'})
   console.log(currentDay)

    function compareDate(){
        if(props.date.split(' ')[0] === currentMonth && props.date.split(" ")[1] === currentDay){
            console.log("match")
            return(
     
            setIsToday = true
            )
        }
    }
    compareDate();

    return (
        <div>
        {isToday=false ? <div style={{display: "none"}} />
        :
    
               <div className="routines">
                    <div className="top">
                        <h3 className="titleRoutine">{props.title}</h3>
                        <h3 className="durationRoutine">{props.duration}</h3>
                    </div>
                    <div className="bottom">
                        <h4 className="dateRoutine"> {props.date} @ {props.time}</h4>
                        {props.status==="completed" && <span role="img" aria-label="check">✅</span>}
                        
                        
                         </div>
                    </div>
               
              }
    </div>
    
    )
}

export default Sessions;