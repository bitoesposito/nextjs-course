import Link from "next/link";

export default function PortfolioPage() {

    const projects = [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' },
    ]

    return (
        <>
            <h1>Portfolio Page</h1>
            {projects.map((project) => (
                <Link href={`/portfolio/${project.id}`} key={project.id}><button>{project.name}</button></Link>
            ))}
        </>
    )
}