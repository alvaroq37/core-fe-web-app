import axios from 'axios';

const consumeService = axios.create({
  baseURL: 'http://localhost:9292',
});

export default consumeService;
