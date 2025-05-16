// src/utils/auth.js

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user_info';

/**
 * Lưu token và thông tin người dùng sau khi đăng nhập
 * @param {string} token 
 * @param {object} user 
 */
export const login = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/**
 * Xoá token và thông tin người dùng khỏi localStorage
 */
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

/**
 * Kiểm tra người dùng đã đăng nhập chưa
 * @returns {boolean}
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};

/**
 * Lấy token hiện tại
 * @returns {string|null}
 */
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Lấy thông tin người dùng hiện tại
 * @returns {object|null}
 */
export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
};
