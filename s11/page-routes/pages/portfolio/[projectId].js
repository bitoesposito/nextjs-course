'use client'

import { useRouter } from 'next/router'

export default function PortfolioPorjectPage() {

    const projectId = useRouter().query.projectId

    return (
        <>
            <h1>Portfolio Porject page {projectId}</h1>
        </>
    )
}