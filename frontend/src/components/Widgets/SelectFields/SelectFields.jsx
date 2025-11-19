import React from "react";
import "./SelectFields.css";

const SelectField = ({
    label,
    value,
    onChange,
    options = [],
    required = false,
    variant = "primary",
}) => {
    return (
        <div className="select-group">
            {label && (
                <label className="label">
                    {label} {required && <span>*</span>}
                </label>
            )}
            <div className={`select-wrapper ${variant}`}>
                <select name={label} value={value} onChange={onChange} required={required}>
                    <option value="">Select {label?.toLowerCase()}</option>
                    {options.map((opt, index) => (
                        <option key={index} value={opt.value || opt}>
                            {opt.label || opt}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectField;
