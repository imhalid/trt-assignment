import TopicHeader from "@/components/topic-header/topic-header"
import Hero from "@/components/hero-content/hero"
import Popular from "@/components/popular/popular"
export default function Home() {
  return (
    <main className="container">
      <TopicHeader />
      <Hero />
      <Popular />
    </main>
  )
}
