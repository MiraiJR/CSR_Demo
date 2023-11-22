import axiosClient from "../libs/axiosClient";

const ArticleService = {
    getArticles: (query: QueryArticle) => axiosClient.get<any>(`/volumes`, {
        params: {
            ...query,
        }
    }),
}

export default ArticleService;