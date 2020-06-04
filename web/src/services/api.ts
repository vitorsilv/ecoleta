import axios from "axios";
import { defaultCipherList } from 'constants';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;