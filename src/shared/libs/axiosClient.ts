import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://newsapi.org/v2",
});

axiosClient.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            apiKey: import.meta.env.VITE_NEWSAPI_KEY,
        };
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
