'use client'
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from "next/navigation";
import { GET_ARTICLES } from '@/lib/api';
const ITEMS_PER_PAGE = 16;

export default function Pagination({totalPage} : {totalPage: number})  {
     const pathname = usePathname();
     const searchParams = useSearchParams();
     const currentPage = Number(searchParams.get("page")) || 1;

     const createPageURL = (pageNumber: number | string) => {
       const params = new URLSearchParams(searchParams);
       params.set("page", pageNumber.toString());
       return `${pathname}?${params.toString()}`;
     };
     
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const newArticles = await GET_ARTICLES({ start, end });
      setArticles(newArticles);
    };

    fetchArticles();
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  return (
    <div>
        <h1>Page {page}</h1>
        {articles}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};