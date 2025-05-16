// src/Components/common/InputField.jsx
import React from 'react';

const InputField = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="mb-3">
            {label && <label className="form-label">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-control"
            />
        </div>
    );
};

export default InputField;
