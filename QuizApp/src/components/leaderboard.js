import React from "react";

function Leaderboard({ restartQuiz }) {
    return (
    <div id="leaderboard-section" className="section">
        <h2>LeaderBoard</h2>
        <table id="leaderboard">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <button onClick={restartQuiz} className="primary-btn">Restart</button>
        </div>
    );
}

export default Leaderboard;