'use client';

export default function Error({ error }) {
  // Non gestire l'errore NEXT_NOT_FOUND, lascia che Next.js gestisca notFound()
  if (error.message === 'NEXT_NOT_FOUND') {
    throw error;
  }

  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </main>
  )
}