import axios from 'axios';

const api = axios.create({
  baseURL: 'https://livrarianova-dev-bpmr.2.us-1.fl0.io/',
});

export default api