'use client'

export default function Error({ error }) {
  return (
    <div className="error">
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  )
}