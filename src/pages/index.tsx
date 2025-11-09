import Link from 'next/link'

export default function IndexPage() {
  return (
    <main style={{padding: 24}}>
      <h1>Welcome</h1>
      <p>This is the root page. Try a dynamic route:</p>
      <ul>
        <li><Link href="/hello">/hello</Link></li>
        <li><Link href="/about">/about</Link></li>
      </ul>
    </main>
  )
}
