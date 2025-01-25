import React, { useState } from "react";

const NameModal = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        //submit name logic
    };

    return (
        <div id="name-modal" style={{ display: "flex" }}>
            <div className="modal-content">
                <h2>Enter Your Name</h2>
                <input type="text" id="name-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"></input>
                <button onClick={handleSubmit} className="primary-btn">Submit</button>
            </div>
        </div>
    );
};

export default NameModal;