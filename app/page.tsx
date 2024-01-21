import TopicHeader from "@/components/home-page/topic-header/topic-header";
import Hero from "@/components/home-page/hero-content/hero";
import Popular from "@/components/home-page/popular/popular";
import Articles from "@/components/home-page/articles/articles";
import Pagination from "@/components/home-page/pagination/pagination";
import Header from "@/components/home-page/header/header";
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
