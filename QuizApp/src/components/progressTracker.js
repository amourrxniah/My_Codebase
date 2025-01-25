import React from "react";

const ProgressTracker = ({ currentQIndex, totalQ }) => (
    <div id="progress-tracker" style={{ margin: '20px 0' }}>Question {currentQIndex + 1} of {totalQ}</div>
);

export default ProgressTracker;