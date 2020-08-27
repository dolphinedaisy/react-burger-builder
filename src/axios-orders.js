import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-store-27675.firebaseio.com/"
});

export default instance;
