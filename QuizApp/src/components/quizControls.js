import React from "react";

const QuizControls = ({ Next, Back, Home }) => (
    <div className="quiz-controls">
        <button onClick={Next} className="primary-btn">Next</button>
        <button onClick={Back} className="secondary-btn">Back</button>
        <button onClick={Home} className="secondary-btn">Home</button>
    </div>
);

export default QuizControls;