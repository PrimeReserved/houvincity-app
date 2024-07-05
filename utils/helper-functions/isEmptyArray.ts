import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";


interface isEmptyProps {
  blogs?: any[];
  news?: any[];
  properties?: any[];
  events?: any[]
}


export default function isEmptyArray({ blogs, news, properties, events, loading, error }: Readonly<any>) {
    const isEmptyArray = (arr: any[]) => !Array.isArray(arr) || arr.length === 0;
  
    if (isEmptyArray(blogs) || isEmptyArray(news) || isEmptyArray(properties) || isEmptyArray(events) ) {
      return null;
    }
  
    if (loading) {
      return Loading.pulse();
    }
  
    if (error) {
      return Report.warning('An Error Occurred', error, 'close', { width: '360px' });
    }
} 