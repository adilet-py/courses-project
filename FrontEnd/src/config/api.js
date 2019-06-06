import axios from 'axios';
import ls from 'local-storage';

console.log(ls.get('accessToken'));

export default axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ls.get('accessToken') || ''
    }
});