import TopicHeader from "@/components/topic-header/topic-header";
import Hero from "@/components/hero-content/hero";
import Popular from "@/components/popular/popular";
import Articles from "@/components/articles/articles";
export default function Home() {
  return (
    <main className="container">
      <TopicHeader />
      <Hero />
      <Popular />
      <Articles />
    </main>
  );
}
