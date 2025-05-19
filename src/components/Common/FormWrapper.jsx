import React from 'react';
import styles from './FormWrapper.module.scss';

const FormWrapper = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default FormWrapper;
