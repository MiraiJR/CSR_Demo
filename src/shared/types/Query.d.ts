interface QueryArticle {
    q?: string;
    from?: string;
    sortBy?: string;
    country?: string;
    category?: string;
    page?: number;
    size?: number;
    maxResults?: number;
    startIndex?: number;
    projection?: string;
}
