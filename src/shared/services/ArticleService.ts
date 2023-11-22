import axiosClient from "../libs/axiosClient";

const ArticleService = {
    getArticles: (query: QueryArticle) => axiosClient.get<ArticlesResponse>(`/everything`, {
        params: {
            ...query,
        }
    }),
}

export default ArticleService;