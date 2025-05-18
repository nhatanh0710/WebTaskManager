// Lưu thông tin người dùng vào localStorage
export const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

// Xoá thông tin người dùng
export const logout = () => {
    localStorage.removeItem('user');
};

// Lấy thông tin người dùng hiện tại
export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

// Kiểm tra đã đăng nhập chưa
export const isAuthenticated = () => {
    return !!localStorage.getItem('user');
};
