import React, { useState } from "react";
import Welcome from './components/welcome';
import DifficultySection from "./components/difficultySection";
import Quiz from './components/quiz';
import Leaderboard from "./components/leaderboard";
import ExitWarning from "./components/exitWarning";

export default function App() {
    const [state, setState] = useState("welcome"); //control section displayed
    const [leaderboard, setLeaderboard] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQindex, setCurrentQIndex] = useState(0);
    const [exitWarningVisible, setExitWarningVisible] = useState(false); //track visible exit warning

    const handleStartQuiz = () => setState("difficulty");
    const handleViewLeaderboard = () => setState("leaderboard");
    const handleExit = () => setExitWarningVisible(true); //show exit warning

    const startQuiz = (difficulty) => {
        //start quiz logic
        setState("quiz");
    }

    const handleExitConfirm = () => {
        //exit confirmed, reset quiz state
        setState("welcome");
        setExitWarningVisible(false);
    }

    const handleExitCancel = () => {
        setExitWarningVisible(false);
    }

    return (
        <div id="app">
            {state === "welcome" && (
                <Welcome startQuiz={handleStartQuiz} viewLeaderboard={handleViewLeaderboard} />
            )}

            {state === "difficulty" && (
                <DifficultySection startQuiz={startQuiz} />
            )}

            {state === "quiz" && (
                <Quiz score={score} setScore={setScore} currentQindex={currentQindex} setCurrentQIndex={setCurrentQIndex} />
            )}

            {state === "leaderboard" && (
                <Leaderboard leaderboard={leaderboard} />
            )}

            {exitWarningVisible && (
                <ExitWarning exitWarning={handleExitConfirm} exitCancel={handleExitCancel} />
            )}
        </div>
    );
}