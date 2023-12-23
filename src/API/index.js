import axios from "axios";

const APIInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
});

export default APIInstance