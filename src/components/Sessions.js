import React from "react";


function Sessions(props){
    return (
        
        
               <div className="Routines">
                    <div className="leftRoutine">
                        <h3 className="titleRoutine">{props.title}</h3>
                        <h4 className="dateRoutine">{props.date} @ {props.time}</h4>
                    </div>
                    <div className="rightRoutine">
                        <h3 className="durationRoutine">{props.duration}</h3>
                        {props.status==="completed" && <h3>∫</h3>}
                        
                    </div>
               </div>
    
    )
}

export default Sessions;