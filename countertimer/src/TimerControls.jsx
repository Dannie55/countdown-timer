import React from "react";

function TimerControls({isCounting, startCountdown, pauseCountdown, resetCountdown, time}) {
    return(
        <div>
            <button onClick={startCountdown} disabled={isCounting || time <= 0}>
                Start
            </button>
            <button onClick={pauseCountdown} disabled={!isCounting}>
                Pause
            </button>
            <button onClick={resetCountdown} disabled= {isCounting}>
                Reset
            </button>
        </div>
    );
}

export default TimerControls