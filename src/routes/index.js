// src/routes/index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import layout & pages
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import HomePage from '../pages/Home';
import ProjectListPage from '../pages/Project';
import ProjectDetailPage from '../pages/ProjectDetail';
import TaskDetailPage from '../pages/TaskDetail';
import UserProfilePage from '../pages/UserProfile.jsx';
import NotificationPage from '../pages/Notification';
import TrashPage from '../pages/Trash';

function AppRoutes() {
    return (

        <Routes>
            {/* Các route không có layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/*Các route có layout mặc định*/}
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectListPage />} />
                <Route path="projects/:projectId" element={<ProjectDetailPage />}>
                    <Route path="tasks/:taskId" element={<TaskDetailPage />} />
                </Route>
                <Route path="profile" element={<UserProfilePage />} />
                <Route path="notifications" element={<NotificationPage />} />
                <Route path="trash" element={<TrashPage />} />
            </Route>

            {/* Redirect nếu không đúng đường dẫn */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    );
}

export default AppRoutes;
