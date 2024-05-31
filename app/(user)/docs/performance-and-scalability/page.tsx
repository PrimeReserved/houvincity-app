// @ts-ignore
import Performance from "@/markdown/performance-and-scalability/performance-and-scalability.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";
 
export default function Page() {
  return (
    <div>
      <Performance />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}