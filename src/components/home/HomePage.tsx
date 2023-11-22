import { useEffect, useState } from "react";
import ArticleService from "../../shared/services/ArticleService";
import ArticleComponent from "../../shared/components/Article";

const HomePage = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const { data } = await ArticleService.getArticles({ q: "bitcoin" });

                setArticles(data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        getArticles();
    }, [])

    return (
        <div className="flex grid grid-cols-5 gap-3">
            {
                articles.map((article, _index) => (
                    <ArticleComponent article={article} key={_index} />
                ))
            }
        </div>
    )
}

export default HomePage;