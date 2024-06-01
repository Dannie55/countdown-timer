import React from "react";

function TimerDisplay({ remainingTime}){
    return(
        <div>
            <h2>Remaining Time: {remainingTime}s</h2>
        </div>
    );
}

export default TimerDisplay