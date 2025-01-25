import React, { useState } from "react";
import Welcome from './components/welcome';
//import NameModal from "./components/nameModal";
import DifficultySection from "./components/difficultySection";
import Quiz from './components/quiz';
import Leaderboard from "./components/leaderboard";
import ExitWarning from "./components/exitWarning";

export default function App() {
    const [state, setState] = useState("welcome"); //control section displayed
    const [leaderboard, setLeaderboard] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQindex, setCurrentQIndex] = useState(0);

    const handleStartQuiz = () => setState("difficulty");
    const handleViewLeaderboard = () => setState("leaderboard");
    const handleExit = () => setState("exit-warning");

    const startQuiz = (difficulty) => {
        //start quiz logic
        setState("quiz");
    }
}