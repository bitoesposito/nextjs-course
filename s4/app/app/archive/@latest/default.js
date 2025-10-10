import NewsList from "@/components/news-list";

import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {

  const news = getLatestNews();

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={news} />
    </>
  )
}