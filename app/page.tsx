import TopicHeader from "@/components/home-page/topic-header/topic-header";
import Hero from "@/components/home-page/hero-content/hero";
import Popular from "@/components/home-page/popular/popular";
import Articles from "@/components/home-page/articles/articles";
import Header from "@/components/home-page/header/header";

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
