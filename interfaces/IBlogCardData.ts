export default interface IBlogCardData {
  mainImage: any;
  title: string;
  slug: {
    current: string;
  };
  author: {
    _ref: string; 
    name?: string; 
    mainImage?: {
      asset: {
        _ref: string;
        alt?: string; 
      };
    };
  };
  body?: string; 
  publishedAt?: string; 
}


export default interface IBlogCardProps {
  article: IBlogCardData;
}
