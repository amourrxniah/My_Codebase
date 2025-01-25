import React, { useEffect, useState } from "react";

function Timer() {
    const [currentTime, setCurrentTime] = useState(60); //60s timer

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="quiz-timer" class="timer-circle">
          <svg className="timer-svg" viewBox="0 0 36 36">
            <path className="timer-background" d="M18 2.0845..." />
            <path className="timer-progress" d="M18 2.0845..." strokeDashoffset={(currentTime / 60) * 100} />
          </svg>
          <div className="timer-text">{String(Math.floor(currentTime / 60)).padStart(2, '0')}:{String(currentTime % 60).padStart(2, '0')}</div>
        </div>
    );
}

export default Timer;