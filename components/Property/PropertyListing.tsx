// "use client"

// import React, { Suspense  } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store'
// import ErrorBoundary from "@/components/ErrorBoundary";
// import SearchProperty from "./SearchPropety";
// import Loading from "@/app/loading";

// export default function PropertyListing() {
//   const properties = useSelector((state: RootState) => state.properties.properties);
 
//   return (
//     <div>
//       <ErrorBoundary>
//         <Suspense fallback={<Loading />}>
//           <SearchProperty properties={properties}/>
//         </Suspense>
//       </ErrorBoundary>
//     </div>
//   );
// }
