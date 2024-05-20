// @ts-ignore
import Security from "@/markdown/security-and-data-privacy/security-and-data-privacy.mdx";
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";


export default function Page() {

  return (
    <div>
      <Security />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}
