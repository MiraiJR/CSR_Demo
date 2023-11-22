interface itemProps {
    article: Article
}

const ArticleComponent = ({ article }: itemProps) => {

    return (
        <div className='relative'>
            <img src={article.urlToImage} alt={article.title} className='w-full h-[200px] object-cover'/>
            <h2>{article.title}</h2>
        </div>
    )
}

export default ArticleComponent;