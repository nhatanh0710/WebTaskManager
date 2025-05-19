// src/Components/common/InputField.jsx
import React from 'react';
import styles from './InputField.module.scss'
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
        <div className={styles.group}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={styles.input}
            />
        </div >
    );
};

export default InputField;
