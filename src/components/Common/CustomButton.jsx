import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = ({ type = 'button', label, onClick }) => {
    return (

        <button type={type} className={styles.button} onClick={onClick}>
            {label}
        </button>


    );
};

export default CustomButton;
