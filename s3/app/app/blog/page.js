import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <p><Link href="/blog/post-1">First Post</Link></p>
      <p><Link href="/blog/post-2">Second Post</Link></p>
      <p><Link href="/blog/post-3">Third Post</Link></p>
    </main>
  )
}