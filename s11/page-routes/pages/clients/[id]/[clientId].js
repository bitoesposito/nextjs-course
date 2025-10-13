import { useRouter } from 'next/router'

export default function ClientProjectDetailPage() {
    const clientId = useRouter().query.id
    const projectId = useRouter().query.clientId

    return <h1>Client Project Detail Page {clientId} of {projectId}</h1>
}