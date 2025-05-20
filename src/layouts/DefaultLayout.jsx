import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
