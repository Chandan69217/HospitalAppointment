import React from "react";
import "./InputFields.css";

const InputField = ({
    label,
    type = "text",
    value,
    placeholder,
    onChange,
    required = false,
    showToggle = false,
    onToggle,
    icon,
    isTextArea = false,
    rows = 4,
}) => {
    return (
        <div className="input-group">
            {label && <label>{label} {required && <span className="required-star">*</span>} </label>}
            <div className="input-wrapper">
                {isTextArea ? (
                    <textarea
                        name={label}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                        rows={rows}
                    />
                ) : (
                    <input
                        name={label}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                    />
                )}
                {showToggle && (
                    <div className="toggle-icon" onClick={onToggle}>
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputField;

