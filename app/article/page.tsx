import Header from "@/components/home-page/header/header"
import ArticleTop from "@/components/article-components/article-top/article-top"

export default function Page() {
    return (
      <>
        <Header backgroundColor="#005D99" searchIconBackground="#0089CC" divider={false} />
        <main className="container">
          <ArticleTop />
        </main>
      </>
    );
}