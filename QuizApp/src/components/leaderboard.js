import React from "react";

const Leaderboard = ({ leaderboard }) => (
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
            <tbody>
                {leaderboard.map((entry, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="primar-btn">Restart</button>
        </div>
    );

export default Leaderboard;