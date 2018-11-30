import axios from 'axios';
import Config from "../configs";

const api = axios.create({
    baseURL: Config.api.url
});

export default api;