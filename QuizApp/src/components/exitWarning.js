import React from "react";

const ExitWarning = ({ exitWarning, exitCancel }) => (
    <div id="exit-warning" className="modal" style={{ display: "flex" }}>
        <div className="modal-content1">
            <h2>Are you sure you want to exit?</h2>
            <button onClick={exitWarning} className="primary-btn">YES</button>
            <button onClick={exitCancel} className="secondary-btn">NO</button>
        </div>
    </div>
);

export default ExitWarning;