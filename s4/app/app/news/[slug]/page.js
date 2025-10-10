'use client'

import { DUMMY_NEWS } from "@/dummy-news";

import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }){

  const newsItemId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.id === newsItemId);

  if (!newsItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.id}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill/>
        </Link>
        <h1>{newsItem.title}</h1>
        <time>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}