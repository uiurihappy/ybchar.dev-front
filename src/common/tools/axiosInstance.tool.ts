import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ybchar.shop', // 백엔드 서버 주소
});

export default instance;
