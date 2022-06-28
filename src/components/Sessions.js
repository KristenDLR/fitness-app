import React from "react";



function Sessions(props){

    //Figma organizes data as left and right may restructure

    

    return (
        
        
               <div className="routines">
                    <div className="top">
                        <h3 className="titleRoutine">{props.title}</h3>
                        <h3 className="durationRoutine">{props.duration}</h3>
                    </div>
                    <div className="bottom">
                        <h4 className="dateRoutine">{props.date} @ {props.time}</h4>
                        {props.status==="completed" && <span role="img" aria-label="sheep">✅</span>}
                        
                        
                    </div>
               </div>
    
    )
}

export default Sessions;