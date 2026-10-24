import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { supabase, type PostComment } from '@/lib/supabase'

const MAX_NAME = 80
const MAX_BODY = 2000

function formatCommentDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid rgba(13,13,12,0.14)',
  borderRadius: 10,
  background: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: 14.5,
  lineHeight: 1.5,
  color: '#262623',
  boxSizing: 'border-box',
} as const

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<PostComment[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [website, setWebsite] = useState('') // honeypot — humans never fill this
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const loadComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('id, created_at, post_slug, author_name, body')
      .eq('post_slug', slug)
      .order('created_at', { ascending: true })
    if (!error && data) setComments(data as PostComment[])
    setLoading(false)
  }, [slug])

  useEffect(() => {
    setLoading(true)
    loadComments()
  }, [loadComments])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const trimmedBody = body.trim()
    if (!trimmedBody) return

    // Honeypot tripped: silently accept without storing (spam bots)
    if (website) {
      setBody('')
      setName('')
      setFeedback('Thanks — your comment has been posted.')
      return
    }

    setSubmitting(true)
    setFeedback(null)
    const { error } = await supabase.from('comments').insert({
      post_slug: slug,
      author_name: name.trim().slice(0, MAX_NAME) || 'Anonymous',
      body: trimmedBody.slice(0, MAX_BODY),
    })
    setSubmitting(false)

    if (error) {
      setFeedback('Something went wrong posting your comment. Please try again.')
      return
    }
    setBody('')
    setName('')
    setFeedback('Thanks — your comment has been posted.')
    loadComments()
  }

  return (
    <section style={{ marginTop: 'clamp(34px,4vw,48px)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        Comments{loading ? '' : ` (${comments.length})`}
      </div>

      <div style={{ marginTop: 20 }}>
        {loading && (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>Loading…</p>
        )}
        {!loading && comments.length === 0 && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: '#74746E' }}>No comments yet — be the first.</p>
        )}
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            style={{
              padding: '16px 0',
              borderTop: index === 0 ? '1px solid rgba(13,13,12,0.08)' : undefined,
              borderBottom: '1px solid rgba(13,13,12,0.08)',
              marginTop: index === 0 ? 0 : -1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: '#262623' }}>{comment.author_name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8A83' }}>{formatCommentDate(comment.created_at)}</span>
            </div>
            <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.66, color: '#4A4A46', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{comment.body}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={MAX_NAME}
            placeholder="Name (optional)"
            aria-label="Name (optional)"
            style={inputStyle}
          />
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            maxLength={MAX_BODY}
            placeholder="Leave a comment — no account needed."
            aria-label="Comment"
            required
            rows={4}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 96 }}
          />
          {/* Honeypot: hidden from humans, catches bots */}
          <input
            type="text"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button
              type="submit"
              disabled={submitting || !body.trim()}
              className="d-hover-fade"
              style={{
                minHeight: 44,
                padding: '0 18px',
                borderRadius: 10,
                border: 'none',
                background: submitting || !body.trim() ? '#8A8A83' : '#0D0D0C',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                fontSize: 13.5,
                fontWeight: 600,
                cursor: submitting || !body.trim() ? 'default' : 'pointer',
              }}
            >
              {submitting ? 'Posting…' : 'Post comment'}
            </button>
            {feedback && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#4A4A46' }}>{feedback}</span>}
          </div>
          <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 12, color: '#8A8A83' }}>
            Comments appear immediately and are public. Be kind.
          </p>
        </div>
      </form>
    </section>
  )
}
