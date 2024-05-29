interface GlobalSearchResult {
    topQuery: innerResult[];
}

interface innerResult {
    results: innerInnerResult[];
    position: number;
}

interface innerInnerResult {
    id: string;
    title: string;
    image: ImageUrl[];
    type: string;
    description: string;
}