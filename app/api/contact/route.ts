import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_SUBMIT_MS = 3000
const MAX_MESSAGE_LENGTH = 5000

export async function POST(req: NextRequest) {
  const { name, email, message, company, loadedAt } = await req.json()

  // Honeypot: real visitors never fill this hidden field; bots usually do.
  // Time-trap: a form submitted faster than a human could type it is almost certainly a bot.
  // Both are silently accepted (no error) so bots don't learn to adapt.
  const isBot =
    (typeof company === 'string' && company.trim() !== '') ||
    (typeof loadedAt !== 'number' || Date.now() - loadedAt < MIN_SUBMIT_MS)

  if (isBot) {
    return NextResponse.json({ ok: true })
  }

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !EMAIL_RE.test(email) ||
    typeof message !== 'string' || !message.trim() || message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json({ error: 'Missing or invalid fields.' }, { status: 400 })
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Contact form is missing RESEND_API_KEY / CONTACT_TO_EMAIL env vars.')
    return NextResponse.json({ error: 'Contact form is not configured yet.' }, { status: 500 })
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: 'Harshikashree Portfolio <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New booking inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br />')}</p>`,
    })

    if (error) {
      console.error('Resend failed to send contact form email:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact form email:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
