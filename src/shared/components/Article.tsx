interface itemProps {
    article: Article
}

const emptyImage = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";

const ArticleComponent = ({ article }: itemProps) => {

    return (
        <div className='relative'>
            <img src={article.image_url ?? emptyImage} alt={article.title} className='w-full h-[200px] object-cover' />
            <h2>{article.title}</h2>
        </div>
    )
}

export default ArticleComponent;