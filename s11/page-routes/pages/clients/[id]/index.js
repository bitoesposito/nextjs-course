import { useRouter } from 'next/router'

export default function ClientDetailPage() {
    const router = useRouter()

    console.log(router.query)

    function loadProjectHandler() {
        router.push(`/clients/${router.query.id}/project1`)
    }

    return (
        <>
            <h1>Client Detail Page {router.query.id}</h1>
            <button onClick={loadProjectHandler}>Load Project 1</button>
        </>
    )
}