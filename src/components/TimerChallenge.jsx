import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();  //리액트에서 dom 에 직접 접근 하기 위함
    const dialog = useRef();

    const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000)
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining <= 0){
        clearInterval(timer.current)  //timer.current 로 접근하는이유 객체가 아닌 값에 접근해야 하기 때문         
        setTimeRemaining(targetTime * 1000)
        dialog.current.open()  //ResulModal 에서 정의 됨
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        },10);
    }

    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }

    return (
        <>
          <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining}
          handleReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'}Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined} >
                    {timerIsActive ? 'Time is Running' : 'Timer is Inactive'}
                </p>
            </section>
        </>
    )
}
