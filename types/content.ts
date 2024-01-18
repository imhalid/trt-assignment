interface Content {
    id: string;
    type: string;
    title: string;
    description: string;
    mainImageUrl: string;
    thumbnailSquare: string;
    categories: Category[];
    metaTitle: string;
    metaDescription: string;
    showName: string;
    showSlug: string;
    path: string;
    publishedDate: string;
    authors: Author[];
    showAuthor: boolean;
    showByLine: boolean;
    showSparkbox: boolean;
}

interface Category {
    contentId: number;
    title: string;
}

interface Author {
    userName: string;
    firstName: string;
    lastName: string;
    path: string;
}
