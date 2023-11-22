type Article = {
    description: string;
    content: string;
    article_id: string;
    title: string;
    link: string;
    keywords: string[] | null;
    creator: string;
    video_url: string;
    pubDate: Date;
    image_url: string | null,
    source_id: string;
    source_priority: number;
    country: string[]
    category: string[],
    language: string;
}
