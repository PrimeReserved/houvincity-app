export default interface IBlogCardData {
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
  article: IBlogCardData;
}
