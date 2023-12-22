import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:8000`, // 백엔드 서버 주소
});

export default instance;
