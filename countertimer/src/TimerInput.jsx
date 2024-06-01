import React from "react";

function TimerInput({time, handleTimeChange, isCounting}){
    return(
        <div>
            <input 
            type="text" 
            value={time}
            onChange={handleTimeChange}
            disabled={isCounting}
            />
        </div>
    );
}

export default TimerInput