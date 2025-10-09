import Link from "next/link";

export default function Header() {
  return (
    <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem'}}>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." style={{width: '5rem', height: '5rem'}} />
      <h1 style={{fontSize: '2rem', margin: '0'}}>NEXTJS</h1>
    </Link>
  )
}