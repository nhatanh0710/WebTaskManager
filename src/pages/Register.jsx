import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/Common/InputField.jsx';
import CustomButton from '../components/Common/CustomButton.jsx';
import FormWrapper from '../components/Common/FormWrapper.jsx';
import styles from './Register.module.scss';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, confirmPassword } = formData;

        if (!username || !password || !confirmPassword) {
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if (password !== confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        // Lưu giả lập
        localStorage.setItem('user', JSON.stringify({ username, password }));
        navigate('/login');
    };

    return (
        <>
        <h1 className={styles.heading}>Hệ thống quản lý công việc</h1>
        <FormWrapper>
            <h2 className={styles.title}>Đăng ký</h2>
            {error && <div className={styles.error}>{error}</div>}

            <form onSubmit={handleSubmit}>
                <InputField
                    label="Tên đăng nhập"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nhập tên đăng nhập"
                    type="text"
                />

                <InputField
                    label="Mật khẩu"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nhập mật khẩu"
                    type="password"
                />

                <InputField
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                />

                <CustomButton type="submit" label="Đăng ký" />

                <p className={styles.redirect}>
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
            </form>
        </FormWrapper>
        </>
    );
};

export default Register;
