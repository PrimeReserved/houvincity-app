// @ts-ignore
import DevWork from "@/markdown/development-workflow-and-processes/development-workflow-and-processes.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";



export default function Page() {
  return (
    <div>
      <DevWork />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}