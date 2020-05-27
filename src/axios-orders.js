import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burguer-builder-796d0.firebaseio.com/',
});

export default instance;
