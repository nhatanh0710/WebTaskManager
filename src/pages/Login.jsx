import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/utils/auth';
import { Link } from 'react-router-dom';

import InputField from '../components/Common/InputField.jsx';
import CustomButton from '../components/Common/CustomButton.jsx';
import FormWrapper from '../components/Common/FormWrapper.jsx';

import styles from './Login.module.scss';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { username, password } = formData;

        if (!username || !password) {
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if (username === 'admin' && password === 'admin') {
            login({ username, token: 'fake-jwt-token' });
            navigate('/');
        } else {
            setError('Sai tài khoản hoặc mật khẩu');
        }
    };

    return (
        <>
            <h1 className={styles.heading}>Hệ thống quản lý công việc</h1>
            <FormWrapper>
                <h2 className={styles.title}>Đăng nhập</h2>
                {error && <div className={styles.error}>{error}</div>}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <InputField
                        label="Tên đăng nhập"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Nhập tên đăng nhập"
                    />
                    <InputField
                        label="Mật khẩu"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu"
                    />
                    <CustomButton type="submit" label="Đăng nhập" />
                    <p className={styles.redirect}>
                        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};

export default LoginPage;
