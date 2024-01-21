import Header from "@/components/home-page/header/header"
import Article from "@/components/article-components/article/article"

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