// @ts-ignore

import Welcome from "@/markdown/welcome.mdx"
import NextPage from "@/components/mdx/NextPage";
import NextWrapper from "@/components/mdx/NextWrapper";
 
export default function Page() {
  return (
    <div>
      <Welcome />
      <NextWrapper>
        <NextPage />
      </NextWrapper>
    </div>
    )
}