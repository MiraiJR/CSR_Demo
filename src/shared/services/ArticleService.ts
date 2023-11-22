import axiosClient from "../libs/axiosClient";

const ArticleService = {
    getArticles: (query: QueryArticle) => axiosClient.get<ArticlesResponse>(`/news`, {
        params: {
            ...query,
        }
    }),
}

export default ArticleService;