import React, { useState } from 'react';
import { questions } from './questions';
import Timer from './timer';
import ProgressTracker from './progressTracker';
import LeaderBoard from './leaderboard';
import NameModal from './nameModal';
import QuizControls from './quizControls';

const Quiz = () => {
    const [currentQindex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentQ, setCurrentQ] = useState(questions.Easy);
    const [quizOver, setQuizOver] = useState(false);
    const [nameModalVisible, setNameModalVisible] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);

    const startQuiz = (difficulty) => {
        setCurrentQ(questions[difficulty]);
    };

    const handleNext = () => {
        if (currentQindex < currentQ.length - 1) {
            setCurrentQIndex(currentQindex + 1);
        } else {
            setQuizOver(true);
            setNameModalVisible(true);
        }
    };

    const handleBack = () => {
        if (currentQindex > 0) {
            setCurrentQIndex(currentQindex - 1);
        }
    };

    const handleHome = () => {
        setQuizOver(false);
        setCurrentQIndex(0);
        setNameModalVisible(false);
    };

    return (
        <div id='quiz-section' className='section' style={{ display: quizOver ? 'none' : 'block'}}>
            <ProgressTracker currentQIndex={currentQindex} totalQ={currentQ.length} />
            <h2>{currentQ[currentQindex].category}</h2>
            <h3>{currentQ[currentQindex].difficulty}</h3>
            <p>{currentQ[currentQindex].question}</p>

            <div id='options'>
                {currentQ[currentQindex].options.map((option, index) => (
                    <button key={index} className='option-btn'>{option}</button>
                ))}
            </div>

            <QuizControls Next={handleNext} Back={handleBack} Home={handleHome} /> 
        </div>
    );
};

export default Quiz;