import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-30c27-default-rtdb.firebaseio.com/'
});

export default instance;

