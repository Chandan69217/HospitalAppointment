import React from "react";
import "./DialogBox.css";

const DialogBox = ({ message, type = "info", onClose }) => {
    if (!message) return null;

    return (
        <div className="dialog-overlay">
            <div className={`dialog-box ${type}`}>
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default DialogBox;
