import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.VITE_API_URL}`, // 백엔드 서버 주소
});

export default instance;
