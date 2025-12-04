import axios from 'axios';

// Tạo một bản sao của axios với cấu hình mặc định
const api = axios.create({
  // Địa chỉ của json-server (bạn đang chạy ở cổng 3000)
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
