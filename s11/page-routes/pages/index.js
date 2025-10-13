import Link from "next/link";

export default function HomePage() {

    const routes = [
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/clients', label: 'Clients' },
    ]

    return (
        <>
            <h1>Home Page</h1>
            {routes.map((route) => (
                <Link href={route.path} key={route.path}><button>{route.label}</button></Link>
            ))}
        </>
    )
}