// @ts-ignore
import ThirdParty from "@/markdown/thirdParty/third-party-integrations.mdx";
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";

export default function Page() {
  return (
    <div>
      <ThirdParty />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}
