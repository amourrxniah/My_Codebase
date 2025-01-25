import React, { useState } from "react";
import Welcome from './components/welcome';
import Quiz from './components/quiz';
import Leaderboard from "./components/leaderboard";

function App() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [leaderboardVisible, setLeaderboardVisible] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    const viewLeaderboard = () => {
        setLeaderboardVisible(true);
    };

    const restartQuiz = () => {
        setLeaderboardVisible(false)
        setQuizStarted(false);
    };

    return (
        <div id="app">
            {!quizStarted && !leaderboardVisible && <Welcome startQuiz={startQuiz} viewLeaderboard={viewLeaderboard} />}
            {quizStarted && <Quiz />}
            {leaderboardVisible && <Leaderboard restartQuiz={restartQuiz} />}
        </div>
    );
}

export default App;