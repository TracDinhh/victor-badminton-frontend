import { reactive } from 'vue';

const savedUser = localStorage.getItem('user');

// Tạo state reactive
const state = reactive({
    user: savedUser ? JSON.parse(savedUser) : null
});

export const authStore = reactive({
    // 1. Truy cập vào user
    get user() {
        return state.user;
    },

    // 2. Kiểm tra xem có phải Admin không?
    // Logic: User tồn tại VÀ trong mảng role có chứa 'ROLE_ADMIN'
    get isAdmin() {
        return state.user && state.user.role && state.user.role.includes('ROLE_ADMIN');
    },

    // 3. Hàm Login
    login(userData) {
        state.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
    },

    // 4. Hàm Logout
    logout() {
        state.user = null;
        localStorage.removeItem('user');
    }
});
