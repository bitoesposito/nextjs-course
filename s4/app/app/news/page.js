import NewsList from "@/components/news-list";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage(){

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </main>
  )
}