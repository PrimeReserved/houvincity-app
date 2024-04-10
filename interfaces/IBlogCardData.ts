export default interface IBlogCardData {
<<<<<<< HEAD
  publishedAt: string;
  _id: string;
   _createdAt: string;
   title: string;
   author:{
       name:string;
       image: string;
   },
   description: string;
   mainImage:{
       asset:{
           _ref(_ref: any): string | import("next/dist/shared/lib/get-img-props").StaticImport;
           url:string;
       };
   };
   slug:{
       current: string;
   };
   body: [object];
}

export default interface IBlogCardProps {
  blogCards: IBlogCardData[];
=======
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
>>>>>>> b361d4b (I worked on the Property Listing Card)
}
