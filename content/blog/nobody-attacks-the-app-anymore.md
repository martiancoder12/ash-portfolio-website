---
title: "Nobody Attacks the App Anymore"
slug: "nobody-attacks-the-app-anymore"
excerpt: "Railway, OpenCode, LiteLLM, ConnectWise — in ten days, the breaches stopped going through anyone's code. They went through custody."
meta_title: "Nobody Attacks the App Anymore"
meta_description: "Railway, OpenCode, LiteLLM, ConnectWise: in ten days the breaches went through custody, not code. Why pooled secrets are the new perimeter — and the standing orders for any team."
tags:
  - Cybersecurity
  - AI security
  - Supply chain
  - API keys
  - Field notes
status: published
published_at: "2026-10-23T16:00:00-04:00"
---

On Wednesday, October 21, Railway emailed its customers: an unauthorized third party may have accessed encrypted environment variables and, for some of them, obtained the decrypted contents — API keys, database credentials, registry tokens. Railway believes the attack is part of a series aimed at platform companies, with the real targets being AI inference providers.

Six days earlier, OpenCode had woken its users to the same morning. Attackers hit a legacy Console system overnight on October 16; API keys stored in workspaces were exposed for 1.4% of Console users, and customers opened their provider dashboards to unauthorized OpenAI, Anthropic and Google charges — hundreds of dollars, in some cases more than $1,700. Anthropic and Google blocked the exposed keys; OpenAI refunded credits; OpenCode reimbursed fees. Keys that had never left a user's own machine — the CLI, the desktop app — were, in OpenCode's words and in fact, structurally unreachable.

The same week, two more variations on the theme. Security researchers flagged critical flaws in LiteLLM, the AI gateway many teams use to manage provider keys: any low-privilege user could escalate to admin, execute code, and — the detail that matters — steal every provider API key the gateway holds. And Microsoft began tracking an active supply-chain attack on ConnectWise Cloud Backup: an attacker stole the backup application's own credential and simply signed in as the app, directly, across 173 Microsoft 365 tenants — inheriting its broad permissions over mail, OneDrive, SharePoint and Teams, with no MFA prompt, because app-only access doesn't get one. In at least one tenant, the app obtained Global Admin and planted credentials on other applications for persistence.

Four incidents, ten days, one shape. Nobody attacked the app. They attacked whoever was holding the keys to it.

## The pattern: custody pooled, so custody is targeted

Each of these custodians exists because of good advice. Keep secrets out of code — so they pooled in Railway's variable store and OpenCode's console. Centralize your AI providers — so their keys pooled in a LiteLLM gateway. Delegate backups to a specialist app — so its credential pooled the permissions of 173 tenants. The recommendations were sound. What they never priced was the concentration they created.

Attackers do arithmetic. A single application's secrets are worth one application's ransom. A custodian's breach is worth every application's secrets at once — and Railway's disclosure says the quiet part aloud: the attackers weren't really after Railway. They were after the AI providers downstream, and Railway was simply where those providers' keys were pooled. The platform was the vault; the vault was the target; the target was never really the vault.

This is not a new shape — it is the shape of the last several months, widening. October alone brought a breach wave across Japan (JR East, JR Kyushu, Bookoff, Big Echo, Skyticket — tens of millions of accounts disclosed within days), a 1.06-million-record exposure at CenterPoint Energy in Texas, and a Danish CPR breach of 8.8 million records that traced back to a two-person IT firm. Concentration is not only a SaaS phenomenon. Anywhere custody pools — a platform, a gateway, a managed app, a tiny vendor holding a nation's registry — the pool becomes the perimeter.

## The prize changed: keys are cash now

There is a reason the attackers shopping these vaults want AI keys specifically. A stolen password authenticates. A stolen database dumps. But an AI API key spends: it is metered money, billed by the token to the victim, that works silently, rarely expires, and converts directly into inference — for resale, for distillation, for whatever the buyer is running. OpenCode called what happened to its users a "distillation attack": the keys weren't the loot, they were the mint. When Railway says the series of attacks aims at "compromising AI inference providers," it is describing a supply chain of stolen compute, and every platform that stores a provider key is a warehouse on that chain.

## The clock changed too

While the custodians were being emptied, the offense got faster. This week brought PHP2Shell: two flaws in PHP itself — the runtime under roughly 70% of the web — rated 9.2, chaining to unauthenticated remote code execution. The bugs date to 2012. What changed is that Wiz, an independent researcher, and OpenAI found that frontier AI models collapsed the distance between an old bug and a working exploit. The NSA's guidance was not "patch soon"; it was patch immediately or take the system offline. Earlier this month, a crew reportedly ran a swarm of 51 AI coding agents to steal over 628,000 Ukrainian records, energy infrastructure among them — caught mainly because their own server leaked the logs.

Put the two halves together and the doctrine writes itself. If exploitation now moves at machine speed, then "wait for confirmation" is a losing strategy — which is precisely what Railway told its customers, in the most important sentence of its October 23 update: workspaces outside the flagged high-risk groups are "not confirmed safe from compromise." Rotate anyway. Rotate on suspicion, because proof now arrives after the keys have been spent.

## What this means moving forward

Some of this is prediction, and I will mark it as such — but the direction is already visible in the responses:

**Static keys are on borrowed time.** The survivors of this month are the architectures where keys never pooled at rest: OpenCode's local keys were unreachable by construction. Expect short-lived, scoped, workload-identity credentials to become the default expectation, and "paste your long-lived API key into our dashboard" to start reading the way "email us your password" reads today.

**The custodian list becomes a standard artifact.** Every team should be able to produce, on demand, the list of who holds its secrets and what each holder can reach — the blast-radius map. This month's victims mostly learned their exposure from a vendor's email. That ordering — vendor first, victim second — is the tell that the map didn't exist.

**Spend governance becomes a security control.** Caps and anomaly alerts on metered keys were billing hygiene; after the distillation attacks, they are intrusion detection. A key with no ceiling is a wallet with no limit, left in someone else's vault.

**Disclosure velocity becomes the trust metric.** Railway published a preliminary report within roughly 48 hours and said "not confirmed safe" out loud; OpenCode confirmed, reimbursed, and named the attack class. Compare the custodians who go quiet. Going forward, how fast and how plainly a platform discloses is its security posture, as legible as any certification.

**Patch latency becomes the perimeter.** PHP2Shell's lesson generalizes: when AI collapses exploit development from weeks to hours, the metric that decides outcomes is how fast you can move — patches, rotations, revocations. The organizations that treat rotation as a drill will treat October as a nuisance. The ones that treat it as an event will keep having events.

And the falsifiable version, so this can be checked later: within a year, at least one major platform in this chain will make ephemeral tokens the default and static API keys the legacy opt-in — and the next breach headline of this size will name a custodian, not the company whose data it was.

## Standing orders

For any team, on any stack, distilled from this month:

- **Rotate on suspicion, not proof.** "May have" is the whole trigger now.
- **Scope every key; cap every key.** One service, one environment, one ceiling.
- **Keep the custodian list.** If a platform holds your secrets, it is in your threat model — write it down before their email does it for you.
- **Prefer keys that expire and keys that never leave home.** Local and ephemeral beat pooled and permanent.
- **Rehearse the rotation.** The drill is the defense; the incident is just the exam.

## Coda

My site's through-line is trust — between humans, as law, as product, as code. October added the missing layer: trust as custody, and custody, it turns out, is where the attacks now live. The code was fine. The repositories were clean. The secrets were exactly where the tutorials said to put them — which is where the attackers went.

So the question stands, sharper than it was a week ago: where do your keys sleep tonight — and who else has a key to that room?

## Sources

- Railway — security disclosure email to customers, Oct 21, 2026; status incident QH8L8B3E (status.railway.com), updates Oct 21–23, 2026, incl. token invalidation, builds restored, preliminary report and the "not confirmed safe" guidance.
- OpenCode — breach disclosure (legacy Console, Oct 16, 2026; 1.4% of Console users; provider-key charges; reimbursements), as reported by BleepingComputer, Oct 20, 2026.
- LiteLLM — CVE-2026-35029 and CVE-2026-59823 (privilege escalation, RCE, provider-key theft), fixed in 1.83.9; Check Point advisory, Oct 2026.
- ConnectWise Cloud Backup — supply-chain attack via the app's own credential; 173 tenants confirmed (Huntress reporting on wider sign-in anomalies); Microsoft tracking (UNC7017); ConnectWise advisory, Oct 19, 2026.
- PHP2Shell — CVE-2026-109618 / CVE-2026-109619 (CVSS 9.2); Wiz and NSA/CISA guidance, Oct 21–22, 2026.
- Context: Japan breach wave and CenterPoint Energy disclosure (Oct 2026 reporting); Danish CPR breach (Danish government confirmation; the "123456" detail is the attacker's own unverified claim and is not relied on here); the 51-agent Ukrainian records theft as reported Oct 2026 (single-source reporting, flagged).
