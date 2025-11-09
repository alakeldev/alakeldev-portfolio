import React, { useRef, useState } from 'react'
import Head from 'next/head'

type SendStatus = { type: 'idle' | 'sending' | 'success' | 'error'; message?: string }

const validateName = (value: string) => {
  const nameRegex = /^[A-Za-z\-\'\s]+$/
  return nameRegex.test(value.trim())
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<SendStatus>({ type: 'idle' })
  const formRef = useRef<HTMLFormElement | null>(null)

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateName(name)) {
      setStatus({ type: 'error', message: 'Please enter a valid name (letters only).' })
      return
    }

    if (message.trim() === '') {
      setStatus({ type: 'error', message: 'Message cannot be empty.' })
      return
    }

    setStatus({ type: 'sending', message: 'Sending message...' })

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey && formRef.current) {
      try {
        const emailjs = await import('emailjs-com')
        await (emailjs as any).sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        resetForm()
      } catch (err) {
        console.error(err)
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
      }
      return
    }

    // Fallback behaviour: log submission (or POST to /api/contact if implemented)
    try {
      console.log('Contact submission (dev):', { name, email, message })
      setStatus({ type: 'success', message: 'Message prepared (not sent). Configure EmailJS or an API route to send.' })
      resetForm()
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', message: 'Failed to submit. Please try again later.' })
    }
  }

  return (
    <main className="py-5" style={{ padding: 24 }}>
      <Head>
        <title>Contact — Abdullah Alakel</title>
      </Head>

      <section className="container">
        <h1 className="mb-4">Contact</h1>

        <form ref={formRef} onSubmit={handleSubmit} className="w-100" aria-label="Contact form">
          <div className="mb-3">
            <label htmlFor="contact-name" className="form-label">
              Name
            </label>
            <input
              id="contact-name"
              name="from_name"
              className="form-control"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact-email" className="form-label">
              Email
            </label>
            <input
              id="contact-email"
              name="from_email"
              className="form-control"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-control"
              rows={6}
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>

        <div className="mt-4" aria-live="polite">
          {status.type === 'sending' && <p className="text-muted">{status.message}</p>}
          {status.type === 'success' && <p className="text-success">{status.message}</p>}
          {status.type === 'error' && <p className="text-danger">{status.message}</p>}
        </div>
      </section>
    </main>
  )
}
