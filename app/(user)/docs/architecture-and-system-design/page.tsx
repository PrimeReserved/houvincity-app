// @ts-ignore
import Architecture from "@/markdown/architecture/system-design-architecture.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";
 
export default function Page() {
  return (
    <div>
      <Architecture />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}