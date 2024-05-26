import LandingPage from "@/components/LandingPage/LandingPage"
import PropertyProvider from "@/context/PropertyProvider";
import Loading from "@/app/loading"
import Head from "next/head";

const Page: React.FC = () => {

  return (
    <div>
        <Head>
          <title>Houvincity</title>
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          <meta property="og:image:alt" content="About Houvincity" />
          <meta name="twitter:image" content="<generated>" />
          <meta property="twitter:image:alt" content="About Houvincity" />
          <meta name="twitter:image:type" content="<generated>" />
          <meta name="twitter:image:width" content="<generated>" />
          <meta name="twitter:image:height" content="<generated>" />
        </Head>
        
        <PropertyProvider>
          <LandingPage />
        </PropertyProvider>
    </div>
  );
};

export default Page;