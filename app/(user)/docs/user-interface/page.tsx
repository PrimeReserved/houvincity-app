import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";
// @ts-ignore
import UserInterface from "@/markdown/user-interface/user-interface.mdx";

export default function Page() {
  return (
    <div>
      <UserInterface />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
  );
}
