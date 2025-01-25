import React, { useEffect, useState } from "react";

const Timer = ({ currentTime }) => {
    const [timeLeft, setTimeLeft] = useState(currentTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        
        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timeLeft]);
    
    return <div className="timer">{timeLeft}</div>;
};

export default Timer;