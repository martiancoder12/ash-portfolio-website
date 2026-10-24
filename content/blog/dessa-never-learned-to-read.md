---
title: "This AI Never Learned to Read. It Learned to Talk Anyway."
slug: "dessa-never-learned-to-read"
excerpt: "Block's tiny Toronto-born lab built a voice model out of pure conversation — no text, no transcripts, no cheat sheet. It laughs, it interrupts, it eavesdrops on emotion. Now comes the hard part: proving it."
meta_title: "This AI Never Learned to Read. It Learned to Talk Anyway."
meta_description: "Block's Dessa learned to talk from pure conversation — no text, no transcripts. Why a Toronto-born voice model matters, what it deletes, and the receipts still missing."
tags:
  - AI
  - voice AI
  - Block
  - Toronto
  - cybersecurity
status: published
published_at: "2026-10-24T17:00:00-04:00"
---

![Illustration: a head in profile built from waveform bars, an ear at its centre, a red sound wave flowing in](/blog/dessa-never-learned-to-read/imagery/illus-01-head-waveform.webp)

*Illustration for ashfaaqkazi.ca. A mind made of sound, learning the way minds do: through the ear.*

---

The first thing Dessa does, in one of Block's demo recordings, is laugh at the wrong moment. Which is to say, the right one.

Not after the joke lands. Not on cue, the way every voice assistant you've ever owned laughs, a full beat too late and a full shade too loud. Dessa laughs *mid-sentence*, while the human is still talking, the way you do when something gets you before you've decided to be gotten. Then, in another recording, someone blanks on a movie title — and Dessa finishes their sentence. In a third, it gets surprised, and gasps "oh my god" under its breath before answering, in a voice that sounds genuinely, almost embarrassingly, moved.

Nobody is steering it. That's Block's whole point. Dessa decides what to say, when to say it, and how to sound saying it. And here's the part that makes engineers sit up: it learned to do all of that without ever reading a word.

![FIG. 00 — The signal, before anyone types it: a waveform, and everything a transcript deletes](/blog/dessa-never-learned-to-read/visuals/visual-01-hero-waveform.png)

*The waveform is the message. The transcript is what's left after the message is gone.*

![Carousel slide 1 of 6 — the cover: “This Toronto-built AI never learned to read.”](/blog/dessa-never-learned-to-read/carousel-wired/slide-01.png)

*This story also runs as a* [six-slide carousel on Instagram](https://www.instagram.com/p/De4_tmbDg8W/?img_index=1)*. The slides run through this post, one per section — start here, or just read.*

---

**THE ANNOUNCEMENT**

## OK, so what actually happened?

On October 23, Block — Jack Dorsey's company, the payments giant behind Square and Cash App — took the wraps off Dessa, a speech model with one deeply weird design decision at its center. Every voice AI on the market today is a relay race: your voice gets transcribed into text, a language model thinks in text, and a synthetic voice reads the result out loud. Dessa skips the middle of the race entirely. Audio in, audio out. Block trained it, in the company's words, "from scratch on nothing but human conversation. Sounds! No text, no pretrained models."

As far as Block knows — and credit where due, that hedge is doing real work in their announcement — Dessa is the first AI you can have a realistic live conversation with that learned this way. Dorsey, never a man to undersell, called it "the most authentic full-duplex speech model ever built."

Full-duplex, in telecom-speak, means both sides can talk at once, like a phone call rather than a walkie-talkie. Most voice AI is strictly walkie-talkie: your turn, an awkward silence while the machinery transcribes and thinks, then its turn. Dessa listens while it talks. It interrupts. It drops little backchannels — *yeah, got it, ooh* — the conversational grunts that signal a listener is actually with you. Block says it thinks faster than real time and runs locally on a MacBook Pro with an M4 Max chip or better. The whole thing, the company says, was trained on a single NVIDIA GB200 NVL72 rack — one rack, in an era when frontier models are supposed to require a small nation's power grid.

![Carousel slide 2 of 6 — The Facts: no text, no transcript, no cheat sheet](/blog/dessa-never-learned-to-read/carousel-wired/slide-02.png)

---

**THE IDEA**

## Your voice assistant is just typing at you

Here is the idea at the heart of Dessa, and it's a good one, whether or not Dessa itself turns out to be the future: transcription is lossy. Brutally, comically lossy.

Speech carries two channels at once. There's the words, and then there's everything the words are riding on — stress, pace, pitch, a sigh, a smirk you can hear, a voice cracking half a second before the sentence admits anything is wrong. Text keeps the first channel and deletes the second. Run a conversation through a transcript and you're left with, as Block puts it, a system that "can't hear how you feel" — which, the company argues, isn't just annoying. It's dangerous.

Block's favorite example is a single sentence: *"I didn't say she stole my CUDA code."* Say it seven times, stressing a different word each time, and you've delivered seven different accusations — it wasn't *me*, I never *said* it, she didn't *steal* it, it's not *my* code. A transcript writes all seven down identically. A listener hears seven different fights. Dessa's bet is that a model fed only sound never gets the chance to throw that information away — and that what we call a "natural" conversation is mostly that second channel: the timing, the overlap, the noise that's actually signal.

![FIG. 01 — Two ways to build a voice: the pipeline, where emotion, sarcasm, timing and laughter are deleted at the transcript, versus Dessa, with no text step](/blog/dessa-never-learned-to-read/visuals/visual-02-pipeline.png)

![FIG. 02 — Same words, different stress: I / SAY / STOLE / MY](/blog/dessa-never-learned-to-read/visuals/visual-04-stress.png)

![FIG. 03 — Half-duplex versus full-duplex: turn-taking with silences versus overlapping speech, where the overlap is the conversation](/blog/dessa-never-learned-to-read/visuals/visual-03-full-duplex.png)

It learned, if Block is right, the way babies do. Babies crack speech long before they crack reading. Which raises a question that sounds like a dorm-room hypothetical until a payments company spends a rack of NVIDIA hardware answering it: how much of language is actually *in* the text, and how much was the text just a convenient storage format?

![Illustration: a small child silhouette listening as swirling ribbons of waveform conversation flow into its head](/blog/dessa-never-learned-to-read/imagery/illus-02-child-listening.webp)

*Illustration for ashfaaqkazi.ca. Nobody hands a baby a transcript.*

![Carousel slide 3 of 6 — Why It Matters: text is a terrible translator](/blog/dessa-never-learned-to-read/carousel-wired/slide-03.png)

---

**THE BACKSTORY**

## The Toronto plot twist

The name Dessa is not new, and the backstory is better than the launch.

Dessa was a Toronto startup, founded in 2016 as DeepLearni.ng by Eric Kin-Ho Lee, Ragavan Thurairatnam, Vincent Wong, and Stephen Piron — deep learning's early local wave, bank clients, $9 million raised. In February 2020, Square bought it, undisclosed terms, team staying put in Toronto because, as Square said at the time, Toronto is "a global hub for machine learning research and development." The startup became famous, briefly, for two things at once: a startlingly convincing audio deepfake of Joe Rogan, and open-source work on *detecting* deepfakes. It built the fake, then built the fake-detector, which is either responsible or extremely on-brand for 2019. Probably both.

Six years later, the name is back on a frontier claim. Today's Dessa is a very small research lab *inside* Block — six researchers, a few interns — founded by former members of that Toronto team, led by Thurairatnam, and reporting directly to Dorsey. That's a quietly unusual outcome for an acquisition. The usual story is acqui-hire, rebrand, dissolve. This one kept its name, kept its people, and ended up holding one of the parent company's weirdest research bets.

![FIG. 04 — The Toronto timeline: 2016 DeepLearni.ng founded, 2020 Square buys it, 2026 the lab returns inside Block](/blog/dessa-never-learned-to-read/visuals/visual-05-toronto-timeline.png)

And it is a research bet, not a product. There is no app, no API, no price. There's a waitlist, and the first keys go to a small group of AI safety researchers. Hold onto that detail, too. It matters in a minute.

![Carousel slide 4 of 6 — The Plot Twist: Toronto built it. Twice.](/blog/dessa-never-learned-to-read/carousel-wired/slide-04.png)

---

**THE PARADOX**

## It can hear you cry. It can also fake a voice. Discuss.

Block lists three reasons for building Dessa: curiosity, better understanding between humans and machines, and safety. The safety pitch writes itself, in the company's own framing: AI is getting more powerful and more independent, "and it's still nearly deaf to the emotion in our voices. Imagine being in serious pain while a voice AI has no idea and just keeps going."

Fair. Now flip it over.

A machine that talks like this — that pauses, emotes, interrupts, sounds *hurt* — is also a machine that can be believed. The reaction to the launch split down exactly that seam within hours: researchers marveling at the demos, fraud watchers pointing out that a fluent, interruptible, emotionally convincing synthetic voice is, functionally, the phone scam's final form. Voice has doubled as identity evidence for as long as there have been telephones. *I know his voice. It was him.* That heuristic does not survive speech models that learned directly from human conversation. It barely survives this announcement.

> *The voice on the phone was the identity check. Not anymore.*

![Illustration: a man on a vintage telephone, facing a second face formed entirely from a red sound waveform](/blog/dessa-never-learned-to-read/imagery/illus-03-voice-not-id.webp)

*Illustration for ashfaaqkazi.ca. The voice on the phone was the identity check. Not anymore.*

Block, to its credit, seems to know it — hence the gated rollout, safety researchers first, no public toy to play with. And the lineage helps: a lab descended from people who published deepfake detection is, at minimum, a lab that has thought about the receiving end of synthetic voice before. But "we're being careful with ours" is not a solution to the technology. It's a head start.

![Carousel slide 5 of 6 — The Verdict: your voice is no longer ID](/blog/dessa-never-learned-to-read/carousel-wired/slide-05.png)

---

**THE RECEIPTS**

## Before you get too excited: the receipts problem

WIRED rule of thumb: the more cinematic the demo, the more boring the questions you should ask. So, boringly:

There is no technical paper. No published weights, no parameter count, no benchmark table, no measured latency figures, no list of supported languages. Everything we know about how *well* Dessa works comes from recordings Block selected and released, which Block says were recorded live and unsteered, subtitles added after the fact. Selected by the seller, however honestly, is selected by the seller.

The demos, sampled by other ears, are also not flawless. The Verge heard conversations that were mostly natural but at times "a little awkward and uncanny" — including a clip in which the model decides, inexplicably and with total confidence, that the person it's talking to is named Ronaldo. (He was not Ronaldo.)

And "first" needs its footnotes. Researchers have built text-free speech models before — Meta's dGSLM, in 2022, learned from raw phone conversations with no text or labels and could already produce laughter and turn-taking. Full-duplex rivals exist too, like Kyutai's Moshi, though Moshi cheats, in the nicest sense: it thinks in text internally while it talks. Dessa's claim is narrower and spicier than the headlines — not the first speech model without text, but the first one, supposedly, that you'd mistake for a person in live conversation. (*As far as we know.* Block's words. Keep them attached.)

Here's the genuinely interesting number, if it holds up: Block says Dessa learned language from "hundreds of times fewer words" than a text model needs. Efficiency claims are where AI announcements go to be exaggerated, and this one arrives with no denominator attached. But if a speech-only model really is that much more sample-efficient — and if it can pick up languages the way children do, from sound, including languages with almost no written footprint online — then the text-first era starts to look less like a law of nature and more like a historical accident. We trained models on text because text is what we had lying around, digitized. Conversation is what we actually are.

---

**THE KICKER**

## The kicker

Somewhere in Toronto, a team that once cloned a podcaster's voice for a demo is now trying to teach a machine to talk the way that podcaster's listeners learned to talk: by ear, in the dark, with no book.

Within a year, this claim either gets its paperwork — a paper, independent evaluations, outsiders putting Dessa through its paces — or "trained only on speech" quietly goes from headline to footnote. My money, for what it's worth, is on the paperwork arriving; teams don't gate a bluff behind safety researchers.

Until then, Dessa is exactly what Block says it is, no more and no less: a research preview with a beautiful idea inside it. The idea being that we spent a decade teaching machines to read, and then bolted voices onto them as an afterthought — and maybe the voice was the intelligence all along.

You learned to talk by listening. The question was never really whether a machine could. It's whether we'll know, the next time the phone rings, which one of you did.

![Carousel slide 6 of 6 — The Kicker: would you know it wasn't human?](/blog/dessa-never-learned-to-read/carousel-wired/slide-06.png)

*The carousel is live on Instagram —* [@martiancoder12](https://www.instagram.com/p/De4_tmbDg8W/?img_index=1)*. The blog is the receipts; the slides are the story.*

---

**Sources & notes**

- Block, "Dessa — the Conversation Model trained only on speech," block.xyz/dessa, October 23, 2026: all capability claims (speech-only training, full-duplex, faster-than-real-time inference, local on MacBook Pro M4 Max+, training on one NVIDIA GB200 NVL72, "hundreds of times fewer words," the CUDA-code example, the safety framing, team description and safety-first access) are Block's own; no paper, weights, API or benchmarks published as of October 24, 2026.
- The Verge, coverage of the October 23, 2026 announcement: demos "a little awkward and uncanny"; the "Ronaldo" misidentification.
- CoinDesk, "Jack Dorsey's new voice AI is impressing users and alarming fraud watchers," October 24, 2026.
- VentureBeat, "Square acquires deepfake research firm Dessa," February 2020 — Toronto-based, formerly DeepLearni.ng, founded 2016, $9M raised 2017, the Rogan voice clone and detection work; acquisition date February 7, 2020 per CB Insights, terms undisclosed.
- Prior art: Meta AI, dGSLM (2022), textless dialogue from raw conversation audio; Kyutai, Moshi, full-duplex with an internal text monologue.
