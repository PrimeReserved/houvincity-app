type Base = {
    _createAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updateAt: string
}

export interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: slug;
    title: string;
    description: string;
    publishedAt: string;
}

export interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: string;
}

export interface Image {
    _type: "image";
    asset: Reference;
}

export interface Reference {
    _ref: string;
    _type: "reference";
}

export interface Slug {
    _type: "slug";
    current: string;
}

export interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"; 
}

export interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

export interface Category extends Base {
    description: string;
    title: string;
}

export interface MainImage {
    _type: "image";
    current: string;
}

export interface News extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    image: Image;
    slug: slug;
    title: string;
    description: string;
    publishedAt: string;
  }

export interface Property extends Base {
    title: string;
    description: string;
    propertyType: string;
    propertyImage: Image;
    fullPropertyImage: Image;
    leftSidePropertyImage: Image;
    rightSidePropertyImage: Image;
    middlePropertyImage: Image;
    youtubeLink: string;
    legalSurvey: string;
    location: string;
    propertySize?: string;
    budget?: string;
    bedrooms: number;
    bathrooms: number;
    slug?: slug;
    body: BlockContent;
  }

  export interface SearchItem {
    title: string;
    path: string;
    content: string;
  }

  export interface UpcomingEvent extends Base {
    slug?: string;
    name: string;
    summary: string;
    description: string;
    date: string;
    start: string;
    end: string;
    thumbnail: Image;
    livestreamURL: string;
    body: BlockContent;
  }
  