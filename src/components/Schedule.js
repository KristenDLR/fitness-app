import { React, useState } from "react";



function Schedule(props){

    return (
        <div>
 
        {props.status==="upcoming" &&
    
               <div className="routines">
                    <div className="top">
                        <h3 className="titleRoutine">{props.title}</h3>
                        <h3 className="durationRoutine">{props.duration}</h3>
                    </div>
                    <div className="bottom">
                        <h4 className="dateRoutine"> {props.date} @ {props.time}</h4>

                         </div>
                    </div>
               
              }
    </div>
    
    )
}

export default Schedule