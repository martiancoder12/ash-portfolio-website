import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    title: 'Check the constant function first',
    equation: 'y(x) ≡ −1  ⇒  y′ = 0',
    reason: 'Think of a flat road at height −1. Moving along x never changes the height y. The symbol ≡ means y stays −1 for every x, not just at one point.',
  },
  {
    title: 'Verify it in the original equation',
    equation: '0 = x(−1 + 1) = x · 0 = 0',
    reason: 'The derivative on the left is zero. The required slope x(y + 1) on the right is also zero, whatever x is. Both sides agree everywhere, so y ≡ −1 is a constant, or equilibrium, solution.',
  },
  {
    title: 'Separate the remaining solutions',
    equation: 'dy / (y + 1) = x dx,  with y ≠ −1',
    reason: 'Dividing by y + 1 assumes it is nonzero. If y ≡ −1, the divided equation y′/(y + 1) = x would contain 0/0. The original equation accepts this solution; the division step excludes it. Keep the checked constant solution separately.',
  },
  {
    title: 'Integrate both sides',
    equation: 'ln|y + 1| = x²/2 + K',
    reason: 'The left integral is ln|y + 1|, and the right integral is x²/2 plus a constant K. The logarithm still requires y + 1 ≠ 0.',
  },
  {
    title: 'Exponentiate and absorb the sign',
    equation: 'y = Ceˣ²⁄² − 1,  initially C ≠ 0',
    reason: 'First |y + 1| = eᴷ · e^(x²/2). Then y + 1 = ±eᴷ · e^(x²/2). Rename ±eᴷ as C and subtract 1. Since eᴷ is strictly positive, this derivation initially gives only nonzero C.',
  },
  {
    title: 'Restore the solution we checked',
    equation: 'C = 0  ⇒  y(x) = −1',
    reason: 'Setting C = 0 in the final formula recovers the constant solution. The complete family is y = C exp(x²/2) − 1 for any real C, on all real x. C is fixed in every member of the family; y itself is constant only when C = 0. We never divide by zero or take ln 0.',
  },
]

export default function StudyConstantSolution() {
  const [x, setX] = useState(0)
  const [step, setStep] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const section = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash !== '#constant-solutions') return
    const frame = requestAnimationFrame(() => section.current?.scrollIntoView({ block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="constant-solutions" ref={section} className="study-constant" aria-labelledby="constant-title">
      <p className="study-constant-kicker">ENGR 213 · Make this step click</p>
      <h2 id="constant-title">Why is y = −1 a solution?</h2>
      <p className="study-constant-lead">A solution is an entire function. Here, <strong>y(x) = −1 means y stays at −1 as x changes</strong>. Its graph is a horizontal line, so its derivative is zero everywhere.</p>
      <p className="study-constant-equation" aria-label="Original equation: y prime equals x times y plus one">Original equation: <span>y′ = xy + x = x(y + 1)</span></p>

      <div className="study-constant-grid">
        <figure className="study-constant-figure">
          <figcaption>Move x. The height does not change.</figcaption>
          <svg viewBox="0 0 640 195" role="img" aria-label={`The horizontal solution y = −1, with a point at x = ${x}. Its slope is zero.`}>
            <line x1="55" y1="58" x2="600" y2="58" stroke="#b9c9c1" />
            <line x1="325" y1="18" x2="325" y2="160" stroke="#b9c9c1" />
            <line x1="55" y1="116" x2="595" y2="116" stroke="#26715D" strokeWidth="3" />
            <circle cx={55 + (x + 3) * 90} cy="116" r="8" fill="#185FA5" stroke="white" strokeWidth="2" />
            <g fill="#4A4A46" fontSize="24" fontFamily="inherit">
              <text x="32" y="121" textAnchor="end">−1</text>
              <text x="55" y="185" textAnchor="middle">−3</text>
              <text x="325" y="185" textAnchor="middle">0</text>
              <text x="595" y="185" textAnchor="middle">3</text>
              <text x="605" y="64">x</text>
              <text x="338" y="30">y</text>
            </g>
          </svg>
          <label className="study-constant-slider" htmlFor="constant-x"><span>Position x <output htmlFor="constant-x">{x.toFixed(1)}</output></span><input id="constant-x" type="range" min="-3" max="3" step="0.1" value={x} onChange={event => setX(Number(event.target.value))} /></label>
          <p className="study-constant-readout" aria-live="polite">At x = {x.toFixed(1)}: <strong>y = −1</strong>, y′ = 0, and {x < 0 ? `(${x.toFixed(1)})` : x.toFixed(1)} × (−1 + 1) = 0.</p>
        </figure>
        <div className="study-constant-explanation">
          <h3>Why division can hide it</h3>
          <p>To separate the variables, we divide by <strong>y + 1</strong>. But at y = −1, that factor is zero. Division therefore assumes y ≠ −1 and temporarily leaves out the horizontal-line solution.</p>
          <p><strong>Check the zero case before dividing.</strong> Set y + 1 = 0, try y ≡ −1 in the original equation, and record it when both sides agree.</p>
          <p>Also notice: at x = 0, the slope is zero for <em>every</em> y. A constant solution needs zero slope for <em>every x</em>, not just at that one position.</p>
        </div>
      </div>

      <div className="study-constant-walkthrough">
        <div className="study-constant-step-head"><h3>Follow the reasoning.</h3><span>Step {step + 1} of {steps.length}</span></div>
        <p className="study-constant-predict">Predict the next move before revealing it. Earlier steps stay visible so you can follow the algebra.</p>
        <ol className="study-constant-steps" aria-live="polite" aria-relevant="additions">
          {steps.slice(0, step + 1).map((item, index) => (
            <li key={item.title}>
              <span className="study-constant-step-number" aria-hidden="true">{index + 1}</span>
              <div><h4>{item.title}</h4><p className="study-constant-math">{index === 4 ? <>y = Ce<sup>x²/2</sup> − 1, initially C ≠ 0</> : item.equation}</p><p>{item.reason}</p></div>
            </li>
          ))}
        </ol>
        <div className="study-constant-controls">
          <button type="button" onClick={() => setStep(current => Math.max(0, current - 1))} disabled={step === 0}>← Back</button>
          <button type="button" onClick={() => setStep(steps.length - 1)} disabled={step === steps.length - 1}>Show all steps</button>
          <button type="button" className="study-constant-next" onClick={() => setStep(current => Math.min(steps.length - 1, current + 1))} disabled={step === steps.length - 1}>Reveal next step →</button>
        </div>
      </div>

      <div className="study-constant-recall">
        <p className="study-constant-kicker">Retrieve it from memory</p>
        <h3>Before dividing y′ = x(y − 3) by y − 3, which constant solution should you check?</h3>
        <div className="study-constant-controls" role="group" aria-label="Choose the constant solution">
          {[0, 3, -3].map(value => <button key={value} type="button" aria-pressed={answer === value} onClick={() => setAnswer(value)}>y = {value < 0 ? '−3' : value}</button>)}
        </div>
        <p className="study-constant-feedback" role="status">{answer === null ? 'Set the factor you would divide by equal to zero.' : answer === 3 ? 'Exactly. y ≡ 3 has derivative 0, and x(3 − 3) = 0 for every x. Record it before dividing.' : 'Try again: y − 3 = 0 gives y = 3. Then check that constant function in the original equation.'}</p>
      </div>
      <p className="study-constant-source">Textbook reference: Dennis G. Zill, <cite>Advanced Engineering Mathematics</cite> (2016), §2.2, “Losing a Solution,” printed pages 45–46. The example here applies that rule to y′ = x(y + 1).</p>
    </section>
  )
}
