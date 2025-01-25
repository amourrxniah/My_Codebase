import React from "react";

const DifficultySection = ({ selectDifficulty }) => (
    <div id="difficulty-section" className="section">
        <h1>Select Difficulty</h1>
        <button onClick={() => selectDifficulty("Easy")} className="difficulty-btn">Easy</button>
        <button onClick={() => selectDifficulty("Medium")} className="difficulty-btn">Medium</button>
        <button onClick={() => selectDifficulty("Hard")} className="difficulty-btn">Hard</button>
    </div>
);

export default DifficultySection;