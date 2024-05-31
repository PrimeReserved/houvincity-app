// @ts-ignore
import Stack from "@/markdown/technology-stack/stack.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";


export default function Page() {
  return (
    <div>
      <Stack />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}