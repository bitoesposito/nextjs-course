import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        { id: 'vito', name: 'Vito' },
        { id: 'john', name: 'John' },
        { id: 'jane', name: 'Jane' },
    ]

    return (
        <>
        <h1>Clients Page</h1>
        {clients.map((client) => (
            <Link href={`/clients/${client.id}`} key={client.id}><button>{client.name}</button></Link>
        ))}
        </>
    )
}