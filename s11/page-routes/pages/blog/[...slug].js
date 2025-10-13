import { useRouter } from "next/router";

export default function BlogPostPage() {
    const router = useRouter()

    console.log(router.query)

    return (
        <>
            <h1>Blog Post Page</h1>
            <p>{router.query.slug}</p>
        </>
    )
}