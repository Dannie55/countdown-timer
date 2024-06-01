import React, {useState, useEffect, useRef} from "react";
import TimerInput from "./TimerInput.jsx";
import TimerDisplay from "./TimerDisplay.jsx";
import TimerControls from "./TimerControls.jsx"
function App(){
    const [time, setTime] = useState(0);
    const [remainingTime, setRemainingTime]= useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isCounting && remainingTime > 0){
            intervalRef.current = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (remainingTime === 0) {
            clearInterval(intervalRef.current);
            setIsCounting(false);
        }
        
        return () => clearInterval(intervalRef.current);
    }, [isCounting, remainingTime]);

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        setRemainingTime(e.target.value);
    };

    const startCountdown = () => {
        setIsCounting(true);
    };

    const pauseCountdown = () => {
        clearInterval(intervalRef.current);
        setIsCounting(false);
    };

    const resetCountdown = () => {
        clearInterval(intervalRef.current);
        setIsCounting(false);
        setRemainingTime(time);
    };

    return (
        <div className="App">
              <h1>React Countdown timer</h1>
              <TimerInput time={time} handleTimeChange={handleTimeChange} isCounting={isCounting} />
              <TimerDisplay remainingTime={remainingTime} />
              <TimerControls
                isCounting={isCounting}
                startCountdown ={startCountdown}
                pauseCountdown={pauseCountdown}
                resetCountdown={resetCountdown}
                time={time}
                />
        </div>
  
    );

}

export default App