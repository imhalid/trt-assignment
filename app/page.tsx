import TopicHeader from "@/components/home-page-components/topic-header/topic-header";
import Hero from "@/components/home-page-components/hero-content/hero";
import Popular from "@/components/home-page-components/popular/popular";
import Articles from "@/components/home-page-components/articles/articles";
import Header from "@/components/home-page-components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <TopicHeader />
        <Hero />
        <Popular />
        <Articles />
      </main>
    </>
  );
}
