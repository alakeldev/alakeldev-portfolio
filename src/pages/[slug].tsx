import { useRouter } from 'next/router'

export default function SlugPage() {
  const { query } = useRouter()
  const slug = Array.isArray(query.slug) ? query.slug.join('/') : query.slug

  return (
    <main style={{padding: 24}}>
      <h1>Dynamic page</h1>
      <p>slug: {String(slug)}</p>
    </main>
  )
}
