import React from "react";

const Welcome = ({ startQuiz, viewLeaderboard }) => (
    <div id="welcome-section">
        <h1>Welcome to the Quiz App!</h1>
        <p>Test your knowledge in Science with different levels of difficulty!</p>
        <button onClick={startQuiz} className="primary-btn">Start Quiz</button>
        <button onClick={viewLeaderboard} className="secondary-btn">View LeaderBoard</button>
      </div>
);

export default Welcome;