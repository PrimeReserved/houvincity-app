export default interface IBlogCardData {
  urlToImage: string;
  author: string;
  content: string;
  title: string;
  description: string;
  publishedAt: string;
}

export default interface IBlogCardProps {
  blogCards: IBlogCardData[];
}
