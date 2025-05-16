// src/Components/common/FormWrapper.jsx
import React from 'react';

const FormWrapper = ({ title, children, onSubmit }) => {
    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h2 className="mb-4 text-center">{title}</h2>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};

export default FormWrapper;
