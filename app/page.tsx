import TopicHeader from "@/components/topic-header/topic-header";
import Hero from "@/components/hero-content/hero";
import Popular from "@/components/popular/popular";
import Articles from "@/components/articles/articles";
import Pagination from "@/components/pagination/pagination";
import Header from "@/components/header/header";
export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalElements = 100;
  const elementsPerPage = 16;
  const totalPage = Math.ceil(totalElements / elementsPerPage);
  console.log("currentpage", currentPage);

  return (
    <>
      <Header />
      <main className="container">
        <TopicHeader />
        <Hero />
        <Popular />
        <Articles />
        {/* <Pagination totalPage={totalPage} /> */}
      </main>
    </>
  );
}
