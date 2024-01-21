import Header from "@/components/home-page/header/header"
import Article from "@/components/article-components/article/article"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Early US voting numbers indicate record turnout for November election",
  description: "TRT World (Demo)",
};

export default function Page() {
    return (
      <>
        <Header backgroundColor="#005D99" searchIconBackground="#0089CC" divider={false} />
        <main className="container">
          <Article />
        </main>
      </>
    );
}