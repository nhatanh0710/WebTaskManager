// src/Components/common/CustomButton.jsx
import React from 'react';

const CustomButton = ({ text, onClick, type = 'button', className = 'btn btn-primary' }) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {text}
        </button>
    );
};

export default CustomButton;
