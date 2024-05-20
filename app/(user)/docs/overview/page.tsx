// @ts-ignore
import Overview from "@/markdown/overview/overview.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";
 
export default function Page() {

  return (
    <div>
      <Overview />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}