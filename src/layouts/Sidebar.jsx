import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaBell, FaTrash } from 'react-icons/fa';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
                            <FaHome className={styles.icon} /> Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>
                            <FaProjectDiagram className={styles.icon} /> Dự án
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>
                            <FaUser className={styles.icon} /> Hồ sơ người dùng
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notifications" className={({ isActive }) => isActive ? styles.active : ''}>
                            <FaBell className={styles.icon} /> Thông báo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/trash" className={({ isActive }) => isActive ? styles.active : ''}>
                            <FaTrash className={styles.icon} /> Thùng rác
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
