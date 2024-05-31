// @ts-ignore
import Deployment from "@/markdown/deployment/deployment-and-infrastructure.mdx";
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";

export default function Page() {
  return (
    <div>
      <Deployment />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}
