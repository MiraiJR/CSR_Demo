import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://newsdata.io/api/1",
});

axiosClient.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            apikey: import.meta.env.VITE_NEWSAPI_KEY,
        };
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
