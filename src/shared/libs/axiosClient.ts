import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

axiosClient.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            key: import.meta.env.VITE_API_KEY,
        };
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
