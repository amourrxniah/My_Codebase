import React from "react";

function ProgressTracker({ currentQIndex, totalQ }) {
    return (
        <div id="progress-tracker" style={{ margin: '20px 0' }}>
            Question {currentQIndex + 1} of {totalQ}
        </div>
    );
}

export default ProgressTracker;