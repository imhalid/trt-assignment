export type VideoSRC = {
  src: string;
};

export type ReadMore = {
  imageUrl: string;
  altText: string;
  title: string;
};
export type NextArticle = {
  imageUrl: string;
  altText: string;
  category: string;
  date: string;
  title: string;
};

export type TagsProps = {
  tags: string[];
};

type Article = {
  id: number;
  imagePath: string;
  title: string;
};

export type RelatedArticlesProps = {
  relatedArticles: Article[];
};

export type HeaderLink = {
  href: string;
  label: string;
};

export interface Content {
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

export interface Category {
  contentId: number;
  title: string;
}

export interface Author {
  userName: string;
  firstName: string;
  lastName: string;
  path: string;
}
