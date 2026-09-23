'use strict';

const INSE201_SOURCE={
  1:{
    label:'Lecture 1 · 8 September 2026',
    title:'Threat modelling with STRIDE',
    sub:'Build a security vocabulary, classify what fails, and trace how attacks combine.',
    meta:['22 official slides','7 concept notes','2 interactive labs'],
    citation:'Clark, J. (2026). L01 STRIDE [Lecture slides]. Concordia University. Supplemented by INSE201 Lecture 1 Notes (Sep 08 2026) and the course outline.'
  },
  2:{
    label:'Lecture 2 · Ethical Frameworks',
    title:'Reason through ethical decisions',
    sub:'Separate facts from value claims, apply four ethical lenses, and synthesize a defensible response.',
    meta:['27 official slides','7 concept notes','2 interactive labs'],
    citation:'Clark, J. (2026). L02 Ethics: Ethical Frameworks L02-L03 [Lecture slides]. Concordia University. Course framing checked against the INSE 201 Fall 2026 outline.'
  }
};

const inseSection=(id,kicker,title,summary,concrete,points,steps,check,citation)=>({id,kicker,title,summary,concrete,points,steps,check,citation});

const INSE201_NOTES={
  1:[
    inseSection('stride-map','FOUNDATION · SECURITY PROPERTIES','STRIDE names the failure. The property explains why it matters.','The CIA triad protects confidentiality, integrity, and availability. STRIDE adds authentication, authorization, and non-repudiation, then names the threat that violates each property. It is a first-pass checklist, not a claim that every attack fits one box.','Think of a building inspection. The checklist does not prove the building is safe, but it stops the inspector from forgetting an entire class of failure.',[
      'Spoofing violates authentication; tampering violates integrity; repudiation violates non-repudiation.',
      'Information disclosure violates confidentiality; denial of service violates availability; elevation of privilege violates authorization.',
      'Classify the observed failure before proposing a control.'
    ],[
      ['Describe the unwanted outcome','State what the attacker can now do or what the defender can no longer guarantee.'],
      ['Name the violated property','Ask whether identity, correctness, evidence, secrecy, service, or permission failed.'],
      ['Map the property to STRIDE','Use the category to widen the search for related attack paths.']
    ],{q:'A malicious site takes over an expired redirect name and receives traffic meant for a trusted service. Which category leads?',options:['Spoofing','Repudiation','Denial of service'],answer:0,why:'The redirect presents a false trusted identity, so authentication fails.'},'L01 slides 3-6; Lecture 1 Notes §§2-3.1.'),
    inseSection('identity-change-evidence','S · T · R','Identity, state, and evidence fail in different ways.','Spoofing makes a false identity look trusted. Tampering changes code, data, or physical functionality. Repudiation lets someone deny an action because the system lacks convincing evidence.','A fake contractor, poisoned training set, and disputed package are three different failures even if each begins with deception.',[
      'Social engineering can be spoofing without a technical exploit.',
      'Tampering can target stored code, data in transit, locks, or a model training set.',
      'Logs and delivery evidence reduce repudiation, while policy handles residual uncertainty.'
    ],[
      ['Fake contractor reaches the server room','The trust signal is false. Classify spoofing and verify identity independently.'],
      ['Training data is poisoned','The attacker changes the system input. Classify tampering and protect provenance.'],
      ['Customer denies a delivered package','The action cannot be proven cleanly. Classify repudiation and preserve evidence.']
    ],{q:'An attacker modifies a machine-learning training set so chosen glasses cause impersonation. What is the primary category?',options:['Tampering','Information disclosure','Elevation of privilege'],answer:0,why:'The attacker changes a data source so the trained system behaves incorrectly.'},'L01 slides 7-9; Lecture 1 Notes §§3.2-3.4.'),
    inseSection('secrecy-service-access','I · D · E','Protect what people can see, use, and control.','Information disclosure exposes data to an unauthorized viewer. Denial of service removes or degrades availability. Elevation of privilege crosses an authorization boundary and grants capabilities the identity should not have.','The Strava heat map revealed a base, repeated PIN guesses can lock out an account, and a derived master key can turn office access into building-wide access.',[
      'Secrets include user data, passwords, keys, cookies, and session identifiers.',
      'DoS can exhaust bandwidth, CPU, memory, an account, a database, or a physical room.',
      'Elevation can move from student to instructor, user to admin, or sandboxed process to host.'
    ],[
      ['Ask who can see it','Unauthorized visibility points to information disclosure.'],
      ['Ask whether the service still works','Loss or degradation of use points to denial of service.'],
      ['Ask whether the actor gained a stronger role','Crossing the permission boundary points to elevation of privilege.']
    ],{q:'A professor derives a building master key using only their authorized office key and lock. Which property fails?',options:['Confidentiality','Authorization','Non-repudiation'],answer:1,why:'Limited access becomes building-wide capability, so authorization fails through elevation of privilege.'},'L01 slides 10-12 and 21; Lecture 1 Notes §§3.5, 3.6, and 3.8.'),
    inseSection('dos-ddos','DENIAL OF SERVICE · SCALE','A distributed flood turns many small senders into one large availability problem.','One attacker rarely exceeds a modern target’s bandwidth. A botnet sends from thousands of unrelated machines, making simple source blocking ineffective. A front-end filtering provider absorbs the flood and forwards legitimate traffic.','A crowd can block a doorway even when no individual is strong enough to hold it shut. Distribution changes the scale and the filtering problem.',[
      'A direct flood has one obvious source; a DDoS flood arrives from many networks.',
      'Cloud cohabitation attacks may exhaust shared computation rather than network bandwidth.',
      'A physical disruption, forced reset, or account lockout can also deny service.'
    ],[
      ['Identify the scarce resource','Bandwidth, computation, storage, credentials, or physical access may be the target.'],
      ['Measure attacker distribution','Many unrelated sources make blocking by origin difficult.'],
      ['Move filtering upstream','A provider with greater capacity can absorb and classify traffic before it reaches the target.']
    ],{q:'SQL injection changes a command and deletes a database. Why can one incident fit two categories?',options:['The injection is tampering and the missing database causes denial of service','Every attack is automatically all six categories','Deletion only affects authentication'],answer:0,why:'The attack step changes data or code, while the resulting unavailable service is a separate effect.'},'L01 slides 11-14; Lecture 1 Notes §§3.6-3.7.'),
    inseSection('amplification','AMPLIFICATION · TCP VS UDP','A forged return address can redirect a large response toward the victim.','Amplification uses a short request, a much longer response, and a spoofed source address. A reflector contributes its bandwidth to the attack. TCP’s handshake blocks the large response when the victim never acknowledges the connection; UDP has no handshake, so legacy services can amplify forged requests.','It resembles mailing a tiny prepaid request card with someone else’s address and causing a catalogue warehouse to ship a heavy box to that person.',[
      'The source-IP forgery is spoofing; the traffic impact is denial of service.',
      'Old NTP monlist requests produced responses roughly 100 times larger than the request.',
      'Monlist is widely patched, but DNS and DNSSEC can still expose amplification paths.'
    ],[
      ['Forge the source address','The request tells the reflector to reply to the victim.'],
      ['Choose an asymmetric service','A small query must generate a large response.'],
      ['Exploit a connectionless path','Without TCP acknowledgement, the reflector sends the response directly to the victim.']
    ],{q:'Why does a spoofed TCP amplification attempt fail before the large response?',options:['TCP encrypts every packet','The victim never completes the three-way handshake','TCP cannot carry web pages'],answer:1,why:'The server’s hello-back reaches a victim that never initiated the connection, so no acknowledgement or large request follows.'},'L01 slides 15-20; Lecture 1 Notes §3.7.'),
    inseSection('toc-tou','RACE CONDITION · CHECK AND USE','A valid check can become meaningless if the checked object changes before use.','A time-of-check versus time-of-use flaw appears when a process verifies one resource, pauses, and later acts on a replacement. Locking keeps the resource stable across check and use, but careless lock ordering can deadlock and create denial of service.','A bouncer checks an adult’s ID, then an underage friend swaps places before entry. Computers can miss the swap when execution pauses between verification and action.',[
      'A forged credential is ordinary spoofing; replacing the approved resource after the check is the race.',
      'The protected sequence is lock, check, authorize, use, then unlock.',
      'A control can create a new threat: deadlock protects integrity but harms availability.'
    ],[
      ['Lock the exact resource','Prevent replacement while the decision is in progress.'],
      ['Check and authorize','Bind the approval to that locked object rather than a reusable name.'],
      ['Use before unlocking','Release only after the action finishes, with a consistent lock order.']
    ],{q:'Which defence most directly closes the check-to-use gap?',options:['Keep the checked resource locked through use','Write more logs after the action','Hide the resource name'],answer:0,why:'The lock prevents malware from replacing the approved object between verification and use.'},'Lecture 1 Notes §3.9; the concept supplements the L01 slide sequence.'),
    inseSection('attack-chains','SYNTHESIS · OVERLAP','Real incidents form chains, so classify each link and each outcome.','STRIDE categories overlap by design. Ransomware tampers with files when it installs and encrypts them, then denies service by withholding access. Successful incidents often combine several vulnerabilities, so defenders inspect the chain one link at a time.','A chain is only as strong as its weakest link. Security analysis asks which failure each link enables and where one control can break the sequence.',[
      'Do not force an incident into one category when different stages violate different properties.',
      'Use STRIDE as a prompt for questions, not as a verdict or risk score.',
      'A complete review follows the path from entry to persistence, impact, evidence, and recovery.'
    ],[
      ['List the incident stages','Separate entry, execution, privilege, discovery, impact, and concealment.'],
      ['Label each violated property','One stage may have multiple labels when it creates multiple failures.'],
      ['Place controls along the chain','Prevention, detection, evidence, containment, and recovery interrupt different links.']
    ],{q:'Which STRIDE pair best captures ransomware installing encryption malware and withholding files?',options:['Spoofing and repudiation','Tampering and denial of service','Information disclosure and authentication'],answer:1,why:'Encryption changes the files, then loss of access harms availability.'},'Lecture 1 Notes §4; STRIDE Study Deck slides 21-23.')
  ],
  2:[
    inseSection('positive-normative','FOUNDATION · TWO KINDS OF CLAIM','Facts describe what may happen. Ethics asks what ought to happen.','A positive claim describes or predicts the world. A normative claim evaluates how people should act using language such as ought, permitted, prohibited, fair, or justified. Ethical modelling needs both, but evidence for a fact cannot by itself prove a value judgment.','A weather forecast can predict rain. It cannot decide whether a university ought to cancel an exam; that decision needs values as well as facts.',[
      '“Paying might restore the data” is positive because it predicts an outcome.',
      '“The university ought to protect important records” is normative because it states an obligation.',
      'Uncertainty belongs in the positive analysis rather than being hidden.'
    ],[
      ['State the ethical question','Frame the decision with ought, should, permitted, or prohibited.'],
      ['Separate facts from values','Mark predictions, constraints, and evidence as positive inputs.'],
      ['Build a justified conclusion','Explain which values and facts support the recommended action.']
    ],{q:'“Recovery from backups could take several weeks.” What kind of claim is it?',options:['Positive','Normative','Neither because it is uncertain'],answer:0,why:'It predicts how the world may behave. Uncertainty does not make a claim normative.'},'L02 slides 3-7.'),
    inseSection('professional-adversary','HUMAN BEHAVIOUR · PREDICTION','Predict the adversary. Evaluate the professional.','The course focuses on the choices cybersecurity professionals control. Defenders usually model adversaries as strategic actors pursuing self-interest, even when the adversary describes a moral cause. Predicting what the attacker will do remains a positive claim; judging the defender’s response requires normative reasoning.','A chess player predicts an opponent’s move without endorsing it. Security analysis makes the same separation between behavioural prediction and ethical approval.',[
      'Adversaries may be criminals, hacktivists, whistleblowers, grey hats, vigilantes, or state actors.',
      'An attacker can claim an ethical framework without becoming the object of the defender’s professional duty analysis.',
      'Good threat modelling asks what the adversary can and is likely to do.'
    ],[
      ['Identify the decision-maker','Separate the professional’s choice from the adversary’s behaviour.'],
      ['Model incentives and constraints','Predict conduct using capabilities, goals, and likely reactions.'],
      ['Evaluate the controlled choice','Apply ethical lenses to what the professional or institution should do.']
    ],{q:'“The attackers have an incentive to provide a working key after payment.” What kind of analysis is this?',options:['A positive prediction','A duty claim','A justice conclusion'],answer:0,why:'It predicts strategic behaviour and does not say what anyone ought to do.'},'L02 slides 8-11.'),
    inseSection('meta-ethics','META-ETHICS · WHAT COUNTS AS RIGHT','People can disagree about whether moral truth is objective, personal, cultural, absent, or unknowable.','Realism holds that a right answer exists independently of belief. Subjectivism makes rightness depend on the individual. Relativism ties it to group norms. Nihilism denies moral rightness. Skepticism allows that a right answer may exist but questions whether we can know it.','Two people can oppose and support paying a ransom for different reasons. Meta-ethics asks what kind of disagreement that is before ordinary ethical analysis begins.',[
      'The course does not require one meta-ethical position.',
      'It has tension with nihilism because the method still expects reasons and justification.',
      'Do not confuse disagreement with proof that no justified answer is possible.'
    ],[
      ['Locate the source of rightness','Independent truth, individual approval, or group norms lead to different positions.'],
      ['Ask whether moral claims can be known','Skepticism challenges knowledge rather than necessarily denying truth.'],
      ['Continue with reasons','The practical task still compares consequences, duties, fairness, and character.']
    ],{q:'“A right answer may exist, but neither person may be able to know it.” Which view is this?',options:['Realism','Skepticism','Nihilism'],answer:1,why:'Skepticism questions access to moral knowledge without necessarily denying moral truth.'},'L02 slide 12.'),
    inseSection('four-lenses','FRAMEWORK · FOUR QUESTIONS','Each ethical lens reveals a different part of the same decision.','The lecture clusters ethical frameworks into consequences, duties and rights, justice and justification, and character and care. The goal is not to declare one lens universally correct, but to use all four to expose reasons, burdens, obligations, and professional qualities.','Four camera angles can show the same incident differently. A strong analysis compares the views instead of choosing the most flattering angle.',[
      'Consequences: which option offers the best balance of benefits and harms?',
      'Duties and rights: what must we do or avoid, and what may people claim from us?',
      'Justice and justification: who carries the burden, and can the decision be defended to them?',
      'Character and care: what would a trustworthy, responsible, and caring professional do?'
    ],[
      ['Run every lens','Write one decision-relevant question from each perspective.'],
      ['Record agreements and tensions','Several lenses may support one option for different reasons or pull in opposite directions.'],
      ['Explain the weighting','A conclusion must say why one reason overrides another in this context.']
    ],{q:'Which lens asks whether you would accept the policy without knowing your role?',options:['Consequences','Justice and justification','Character and care'],answer:1,why:'The veil-of-ignorance test examines how burdens and benefits are distributed.'},'L02 slides 13-15.'),
    inseSection('outcomes-obligations','CONSEQUENCES · DUTIES AND RIGHTS','Outcomes matter, but some actions may remain wrong even when they help.','The consequences lens compares expected benefits and harms, including uncertain and hard-to-measure effects. Duties and rights ask what people are owed and whether some acts remain prohibited despite attractive outcomes. Laws and codes encode parts of those duties but may leave gaps or conflict with ethics.','A ransomware payment may speed recovery while funding extortion. The same fact can support one lens and create a duty conflict in another.',[
      'Do not judge a decision only with hindsight; a sound choice can have a bad outcome by chance.',
      'Universalization asks whether you would accept everyone making the same exception.',
      'Conflicting duties may be overridden with justification, but they should not be ignored.'
    ],[
      ['Estimate expected effects','Include recovery, disruption, future attacks, alternatives, and uncertainty.'],
      ['Name the relevant duties and rights','Privacy, autonomy, honesty, safety, and obligations to avoid funding harm may conflict.'],
      ['Test the exception','Ask whether the rule still works if every similarly placed actor follows it.']
    ],{q:'Why is “nothing useful was found on the unlocked phone” not enough to settle the Apple-FBI ethics?',options:['Outcomes never matter','The result was known before the decision','Duties and precedent must be assessed using what was known when the choice was made'],answer:2,why:'Hindsight cannot replace the ex ante analysis of privacy duties, law-enforcement aims, and precedent.'},'L02 slides 16-19.'),
    inseSection('fairness-character','JUSTICE · CHARACTER AND CARE','A defensible security decision considers burden, process, trust, and human need.','Justice asks who benefits, who bears risk, and whether affected people had a fair role in the process. Character and care ask what honesty, courage, restraint, responsibility, and attention to vulnerable stakeholders require. Care is not mere niceness; it can require advocacy.','Two-factor authentication improves security but can exclude people without smartphones, data plans, or accessible interfaces. A fair design treats those constraints as part of the decision.',[
      'Procedural justice asks who participates, how decisions are communicated, and what remedy follows an error.',
      'A veil-of-ignorance test asks whether you would accept the policy without knowing your role.',
      'Character distinguishes courage from recklessness and literal truth from honest disclosure.'
    ],[
      ['Map benefits and burdens by stakeholder','Do not hide unequal impact inside an average benefit.'],
      ['Inspect the decision process','Participation, notice, appeal, and remedy can be ethically significant.'],
      ['Test professional character','Ask whether the conduct demonstrates honesty, care, restraint, and responsibility.']
    ],{q:'A company truthfully says a breach “might” have been exploited while omitting that it was. Which lens most directly exposes the gap?',options:['Character and care','Consequences only','Positive analysis only'],answer:0,why:'Literal accuracy can still fail the professional virtues of honesty and trustworthy disclosure.'},'L02 slides 20-24.'),
    inseSection('ethics-model','SYNTHESIS · ETHICAL MODELLING','A strong answer shows its question, context, reasons, tensions, and conditions.','Ethical modelling begins with an ethical question inside a sociotechnical context. Positive analysis supplies facts, technical constraints, and laws. Normative analysis applies the four lenses. Synthesis explains reasons and trade-offs, then the output states an answer, method, stakeholder justifications, and uncertainty.','The model works like an engineering design review: define the problem, inspect constraints from several disciplines, resolve tensions, and document why the chosen design is acceptable.',[
      'Technology, stakeholders, and norms define the context rather than sitting outside the ethical problem.',
      'A conclusion may be conditional when key facts remain uncertain.',
      'Different stakeholders may need different justifications for the same recommendation.'
    ],[
      ['Frame one ethical question','Name the actor, decision, affected system, and timing.'],
      ['Run positive and normative analysis','Combine evidence and constraints with the four ethical lenses.'],
      ['Synthesize and communicate','State the recommendation, tensions, stakeholder reasons, conditions, and residual uncertainty.']
    ],{q:'What belongs in the final output of the ethics model?',options:['A verdict without caveats','An answer, method, stakeholder justifications, and conditions or uncertainty','Only a list of facts'],answer:1,why:'The model makes the reasoning auditable and preserves uncertainty that affects the recommendation.'},'L02 slides 25-26.')
  ]
};

const inseProgress=()=>saved('inse201-notes-v1',{});
const inseRoute=id=>id==='inse201-notes'||/^inse201-lecture-[12]$/.test(id);
let inseSteps={};

function inseSwitch(){
  return `<nav class="desk-switch" aria-label="Study desks"><a href="#engr213">ENGR 213 <span>Differential equations</span></a><a href="#comp232-notes">COMP 232 <span>Discrete mathematics</span></a><a href="#quiz">ELEC 275 <span>Circuit analysis</span></a><a href="#inse201-notes" class="selected" aria-current="page">INSE 201 <span>Security ethics</span></a></nav>`;
}

function inseHub(){
  const progress=inseProgress();
  const cards=[1,2].map(number=>{
    const source=INSE201_SOURCE[number],sections=INSE201_NOTES[number];
    const count=sections.filter(section=>progress[`L${number}-${section.id}`]).length;
    return `<a class="notes-lecture-card inse-lecture-card" href="#inse201-lecture-${number}"><div><span>LECTURE ${number}</span><span>${count} / ${sections.length} studied</span></div><h2>${source.title}</h2><p>${source.sub}</p><ul>${sections.map(section=>`<li>${section.title}</li>`).join('')}</ul><strong>Open Lecture ${number} module →</strong></a>`;
  }).join('');
  main.innerHTML=`${inseSwitch()}<section class="notes-hero inse-notes-hero"><div><div class="eyebrow">INSE 201 · LECTURE NOTES</div><h1>Understand the system.<br>Surface the values.<br>Defend the decision.</h1><p>Two source-mapped modules built from Jeremy Clark’s Fall 2026 lectures: STRIDE threat modelling and ethical frameworks for cybersecurity decisions.</p></div><div class="inse-hero-mark" aria-hidden="true"><span>SECURITY</span><strong>S T R I D E</strong><i>ETHICS</i></div></section><div class="notes-lecture-grid inse-lecture-grid">${cards}</div><section class="inse-course-contract"><div><span>COURSE QUESTION</span><h2>Given an engineering decision, what is the ethical response?</h2><p>No single method resolves every dilemma. These modules build technical understanding first, then make the ethical reasoning explicit and testable.</p></div><dl><div><dt>Primary evidence</dt><dd>Lecture slides, spoken-note synthesis, and course outline</dd></div><div><dt>Evaluation style</dt><dd>Conceptual application, not memorized wording</dd></div><div><dt>Course boundary</dt><dd>Cybersecurity ethics; professional regulation remains in ENCS 201</dd></div></dl></section><section class="notes-how"><div><span>HOW TO USE THESE</span><h2>Classify first. Then justify.</h2></div><ol><li>Use Lecture 1 to name the technical failure before discussing its ethics.</li><li>Use Lecture 2 to separate factual predictions from value judgments.</li><li>Run every case through all four ethical lenses.</li><li>Mark a concept studied only when you can explain the reason without the notes.</li></ol></section><section class="notes-reference"><div class="eyebrow">REFERENCE BASIS</div><h2>INSE 201 · Fall 2026</h2><p class="apa-reference">Clark, J. (2026). L01 STRIDE and L02 Ethics [Lecture slides]. Concordia University.</p><p>The official decks determine scope and order. Lecture 1’s developed notes and study deck supply the spoken explanations and worked technical examples. The course outline confirms outcomes, assessment framing, and the two-module sequence.</p></section>`;
  animate('.notes-hero, .notes-lecture-card, .inse-course-contract');
}

function inseReasoning(section){
  return `<div class="note-worked"><div class="note-worked-head"><div><span>REASON IT THROUGH</span><h3>${section.steps[0][0]} to conclusion</h3></div><span class="note-work-count" id="inse-count-${section.id}"></span></div><div class="note-work-steps" id="inse-work-${section.id}"></div><div class="note-work-controls"><button data-inse-back="${section.id}">← Back</button><button data-inse-all="${section.id}">Show all</button><button class="primary" data-inse-next="${section.id}">Reveal next step →</button></div></div>`;
}

function inseCard(section,index,done){
  return `<article class="note-card inse-note-card" id="inse-note-${section.id}" tabindex="-1"><header><div><span>${String(index+1).padStart(2,'0')} · ${section.kicker}</span><h2>${section.title}</h2><p>${section.summary}</p></div><label class="note-done"><input type="checkbox" data-inse-done="${section.id}" ${done[section.id]?'checked':''}> studied</label></header><div class="note-analogy"><span>MAKE IT CONCRETE</span><p>${section.concrete}</p></div><ul class="note-points">${section.points.map(point=>`<li>${point}</li>`).join('')}</ul>${inseReasoning(section)}<div class="note-check" data-inse-check="${section.id}"><span>RETRIEVE IT</span><h3>${section.check.q}</h3><div>${section.check.options.map((option,i)=>`<button data-inse-answer="${section.id}:${i}" aria-pressed="false">${String.fromCharCode(65+i)} · ${option}</button>`).join('')}</div><p role="status"></p></div><p class="note-citation"><span>Mapped source</span>${section.citation}</p></article>`;
}

function inseLectureLabs(number){
  if(number===1)return `<div class="inse-lab-stack"><section class="notes-lab inse-threat-lab"><div><div class="eyebrow">STRIDE CLASSIFIER</div><h2>Name the failure before choosing the control.</h2><p>Select a scenario, then classify its primary threat. The explanation connects the attack to the violated property.</p></div><div><label class="inse-scenario-select">Scenario<select id="inse-threat-scenario"><option value="contractor">A fake contractor reaches the server room</option><option value="training">A poisoned training set changes model output</option><option value="package">A customer denies receiving a delivered package</option><option value="cookie">A stolen cookie exposes an authenticated session</option><option value="flood">A botnet overwhelms a public service</option><option value="grades">A student gains permission to edit grades</option></select></label><div class="inse-threat-buttons">${['Spoofing','Tampering','Repudiation','Information disclosure','Denial of service','Elevation of privilege'].map((label,i)=>`<button data-inse-threat="${i}" aria-pressed="false">${label}</button>`).join('')}</div><p class="notes-readout" id="inse-threat-readout" aria-live="polite">Choose the category that best describes the primary failure.</p></div></section><section class="notes-lab inse-protocol-lab"><div><div class="eyebrow">AMPLIFICATION EXPLORER</div><h2>Why the handshake changes the attack.</h2><p>Switch protocols to see whether a forged-source request reaches the large-response stage.</p></div><div><div class="inse-protocol-buttons"><button data-inse-protocol="tcp" aria-pressed="true">TCP</button><button data-inse-protocol="udp" aria-pressed="false">UDP</button></div><div class="inse-protocol-flow" id="inse-protocol-flow"></div><p class="notes-readout" id="inse-protocol-readout" aria-live="polite"></p></div></section></div>`;
  return `<div class="inse-lab-stack"><section class="notes-lab inse-claim-lab"><div><div class="eyebrow">CLAIM SORTER</div><h2>Fact, prediction, or value judgment?</h2><p>Classify each ransomware statement before using it in an ethical argument.</p></div><div><p class="inse-claim" id="inse-claim-text"></p><div class="inse-claim-actions"><button data-inse-claim="positive">Positive</button><button data-inse-claim="normative">Normative</button><button id="inse-next-claim">Next claim →</button></div><p class="notes-readout" id="inse-claim-readout" aria-live="polite">Choose the kind of claim.</p></div></section><section class="notes-lab inse-lens-lab"><div><div class="eyebrow">FOUR-LENS REVIEW</div><h2>One ransomware question. Four kinds of reason.</h2><p>Select a lens to expose a different part of the university’s decision.</p></div><div><div class="inse-lens-buttons">${['consequences','duties','justice','character'].map((lens,i)=>`<button data-inse-lens="${lens}" aria-pressed="${i===0}">${lens==='duties'?'Duties & rights':lens==='justice'?'Justice':lens==='character'?'Character & care':'Consequences'}</button>`).join('')}</div><article class="inse-lens-output" id="inse-lens-output" aria-live="polite"></article></div></section></div>`;
}

function inseEthicsModel(){
  return `<section class="inse-model"><div><span>ETHICAL MODELLING · REUSABLE WORKFLOW</span><h2>Carry the question through context, analysis, and synthesis.</h2></div><ol><li><b>1</b><strong>Question</strong><p>Who must decide what?</p></li><li><b>2</b><strong>Context</strong><p>Technology, stakeholders, and norms.</p></li><li><b>3</b><strong>Analysis</strong><p>Facts and laws beside the four lenses.</p></li><li><b>4</b><strong>Synthesis</strong><p>Reasons, tensions, and trade-offs.</p></li><li><b>5</b><strong>Output</strong><p>Answer, justification, conditions, uncertainty.</p></li></ol></section>`;
}

function renderInseLecture(number){
  const source=INSE201_SOURCE[number],sections=INSE201_NOTES[number],progress=inseProgress();
  const done=Object.fromEntries(sections.map(section=>[section.id,progress[`L${number}-${section.id}`]]));
  const count=Object.values(done).filter(Boolean).length;
  inseSteps=Object.fromEntries(sections.map(section=>[section.id,0]));
  main.innerHTML=`${inseSwitch()}<nav class="notes-breadcrumb"><a href="#inse201-notes">← All INSE 201 notes</a><div><a href="#inse201-lecture-1" ${number===1?'aria-current="page"':''}>Lecture 1</a><a href="#inse201-lecture-2" ${number===2?'aria-current="page"':''}>Lecture 2</a></div></nav><section class="lecture-head inse-lecture-head"><div class="eyebrow">${source.label.toUpperCase()}</div><h1>${source.title}</h1><p>${source.sub}</p><div class="lecture-meta">${source.meta.map(item=>`<span>${item}</span>`).join('')}<span id="inse-progress">${count} / ${sections.length} studied</span></div></section><nav class="lecture-jumps inse-jumps" aria-label="Lecture ${number} concepts">${sections.map((section,i)=>`<a href="#inse-note-${section.id}" data-inse-jump="${section.id}"><span>${String(i+1).padStart(2,'0')}</span>${section.title}</a>`).join('')}</nav>${inseLectureLabs(number)}${number===2?inseEthicsModel():''}<section class="lecture-notes">${sections.map((section,i)=>inseCard(section,i,done)).join('')}</section><section class="notes-reference"><div class="eyebrow">COMPLETE REFERENCE</div><h2>Source for Lecture ${number}</h2><p class="apa-reference">${source.citation}</p><p>Each concept repeats its mapped slide or note range. The explanations, scenarios, and retrieval checks reorganize the supplied material for study without replacing the original lecture evidence.</p></section><div class="engr-bottom-nav"><a href="#inse201-notes">All INSE 201 notes</a>${number===1?'<a href="#inse201-lecture-2">Lecture 2 · Ethical Frameworks →</a>':'<a href="#inse201-lecture-1">← Lecture 1 · STRIDE</a>'}</div>`;
  wireInseLecture(number,sections);
  animate('.lecture-head, .notes-lab, .note-card');
}

function drawInseSteps(section){
  const host=$(`#inse-work-${section.id}`);if(!host)return;
  const current=inseSteps[section.id]||0;
  host.innerHTML=section.steps.slice(0,current+1).map((item,i)=>`<div class="note-work-step ${i===current?'current':''}"><span>${i+1}</span><div><h4>${item[0]}</h4><p>${item[1]}</p></div></div>`).join('');
  $(`#inse-count-${section.id}`).textContent=`Step ${current+1} of ${section.steps.length}`;
  document.querySelector(`[data-inse-back="${section.id}"]`).disabled=current===0;
  document.querySelector(`[data-inse-next="${section.id}"]`).disabled=current===section.steps.length-1;
  document.querySelector(`[data-inse-all="${section.id}"]`).disabled=current===section.steps.length-1;
}

function wireInseLecture(number,sections){
  const refresh=()=>{const progress=inseProgress();$('#inse-progress').textContent=`${sections.filter(section=>progress[`L${number}-${section.id}`]).length} / ${sections.length} studied`};
  sections.forEach(section=>{
    drawInseSteps(section);
    document.querySelector(`[data-inse-back="${section.id}"]`).onclick=()=>{inseSteps[section.id]=Math.max(0,inseSteps[section.id]-1);drawInseSteps(section)};
    document.querySelector(`[data-inse-next="${section.id}"]`).onclick=()=>{inseSteps[section.id]=Math.min(section.steps.length-1,inseSteps[section.id]+1);drawInseSteps(section);if(motion&&window.gsap)gsap.from(`#inse-work-${section.id} .note-work-step:last-child`,{y:10,opacity:0,duration:.35})};
    document.querySelector(`[data-inse-all="${section.id}"]`).onclick=()=>{inseSteps[section.id]=section.steps.length-1;drawInseSteps(section)};
  });
  main.querySelectorAll('[data-inse-done]').forEach(input=>input.onchange=()=>{const progress=inseProgress();progress[`L${number}-${input.dataset.inseDone}`]=input.checked;persist('inse201-notes-v1',progress);refresh()});
  main.querySelectorAll('[data-inse-answer]').forEach(button=>button.onclick=()=>{
    const [id,indexText]=button.dataset.inseAnswer.split(':'),section=sections.find(item=>item.id===id),index=+indexText,host=button.closest('.note-check');
    host.querySelectorAll('button').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed',String(item===button))});
    button.classList.add(index===section.check.answer?'correct':'wrong');
    host.querySelector('[role="status"]').innerHTML=`<strong>${index===section.check.answer?'Exactly.':'Try again.'}</strong> ${section.check.why}`;
  });
  main.querySelectorAll('[data-inse-jump]').forEach(link=>link.onclick=event=>{event.preventDefault();const target=$(`#inse-note-${link.dataset.inseJump}`);target.scrollIntoView({behavior:'instant'});target.focus({preventScroll:true})});
  wireInseLabs(number);
}

function wireInseLabs(number){
  if(number===1){
    const scenarios={
      contractor:{answer:0,property:'Authentication',why:'The attacker impersonates a trusted contractor. Verify through an independent channel.'},
      training:{answer:1,property:'Integrity',why:'The attacker changes the training data so the model behaves incorrectly.'},
      package:{answer:2,property:'Non-repudiation',why:'The claimant denies an action. Logs, photos, and policy thresholds preserve evidence.'},
      cookie:{answer:3,property:'Confidentiality',why:'The stolen session secret exposes authenticated access to an unauthorized viewer.'},
      flood:{answer:4,property:'Availability',why:'The botnet degrades or removes service by exhausting capacity.'},
      grades:{answer:5,property:'Authorization',why:'The student crosses a permission boundary and gains instructor capability.'}
    };
    main.querySelectorAll('[data-inse-threat]').forEach(button=>button.onclick=()=>{
      const scenario=scenarios[$('#inse-threat-scenario').value],index=+button.dataset.inseThreat,correct=index===scenario.answer;
      main.querySelectorAll('[data-inse-threat]').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed',String(item===button))});
      button.classList.add(correct?'correct':'wrong');
      $('#inse-threat-readout').innerHTML=`<strong>${correct?'Correct · '+scenario.property+' fails':'Recheck the property.'}</strong><span>${scenario.why}</span>`;
    });
    $('#inse-threat-scenario').onchange=()=>{main.querySelectorAll('[data-inse-threat]').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed','false')});$('#inse-threat-readout').textContent='Choose the category that best describes the primary failure.'};
    const drawProtocol=protocol=>{
      const tcp=protocol==='tcp';
      main.querySelectorAll('[data-inse-protocol]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.inseProtocol===protocol)));
      $('#inse-protocol-flow').innerHTML=`<div class="is-attacker"><span>ATTACKER</span><strong>small forged request</strong></div><i>→</i><div class="is-reflector"><span>${tcp?'TCP SERVER':'UDP REFLECTOR'}</span><strong>${tcp?'hello-back':'large response'}</strong></div><i class="${tcp?'is-blocked':''}">${tcp?'×':'→'}</i><div class="is-victim"><span>VICTIM</span><strong>${tcp?'drops hello-back':'receives amplified traffic'}</strong></div>`;
      $('#inse-protocol-readout').innerHTML=tcp?'<strong>Amplification stops.</strong><span>No acknowledgement returns, so the server never accepts a request or sends the large response.</span>':'<strong>Amplification succeeds.</strong><span>UDP sends the response without a handshake. The reflector’s bandwidth now targets the forged source.</span>';
    };
    main.querySelectorAll('[data-inse-protocol]').forEach(button=>button.onclick=()=>drawProtocol(button.dataset.inseProtocol));
    drawProtocol('tcp');
  }else{
    const claims=[
      {text:'Paying might restore the data.',kind:'positive',why:'It predicts a possible outcome.'},
      {text:'The university ought to protect important records.',kind:'normative',why:'It states an obligation.'},
      {text:'Recovery from backups could take several weeks.',kind:'positive',why:'It forecasts a technical timeline.'},
      {text:'The university should disclose the attack to affected people.',kind:'normative',why:'It recommends what the institution ought to do.'},
      {text:'Paying would support criminal activity.',kind:'positive',why:'It describes a causal effect. A separate normative premise is needed to conclude that payment is wrong.'}
    ];
    let claimIndex=0;
    const showClaim=()=>{$('#inse-claim-text').innerHTML=`<span>${claimIndex+1} / ${claims.length}</span>${claims[claimIndex].text}`;$('#inse-claim-readout').textContent='Choose the kind of claim.';main.querySelectorAll('[data-inse-claim]').forEach(button=>button.classList.remove('correct','wrong'))};
    main.querySelectorAll('[data-inse-claim]').forEach(button=>button.onclick=()=>{const claim=claims[claimIndex],correct=button.dataset.inseClaim===claim.kind;main.querySelectorAll('[data-inse-claim]').forEach(item=>item.classList.remove('correct','wrong'));button.classList.add(correct?'correct':'wrong');$('#inse-claim-readout').innerHTML=`<strong>${correct?'Correct · '+claim.kind:'Look at what the sentence asserts.'}</strong><span>${claim.why}</span>`});
    $('#inse-next-claim').onclick=()=>{claimIndex=(claimIndex+1)%claims.length;showClaim()};
    showClaim();
    const lenses={
      consequences:['Benefits and harms','Compare recovery speed, disruption, use of funds, the chance of a working key, and incentives for future attacks.','Do the expected benefits outweigh the direct and systemic harms?'],
      duties:['Obligations and rights','Consider duties to protect research and student data, respect law, avoid funding extortion, and disclose material harm.','Which duty has priority, and what competing duty must still be acknowledged?'],
      justice:['Burden and process','Identify who loses work, who faces service interruption, who decides, and whether affected researchers receive notice or remedy.','Could the decision be justified to each stakeholder without knowing which role you would occupy?'],
      character:['Trust and care','Test whether the response shows honesty, courage, restraint, responsibility, and attention to the people most exposed.','Would a trustworthy institution make and communicate the decision this way?']
    };
    const drawLens=lens=>{const data=lenses[lens];main.querySelectorAll('[data-inse-lens]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.inseLens===lens)));$('#inse-lens-output').innerHTML=`<span>${data[0]}</span><p>${data[1]}</p><strong>${data[2]}</strong>`};
    main.querySelectorAll('[data-inse-lens]').forEach(button=>button.onclick=()=>drawLens(button.dataset.inseLens));
    drawLens('consequences');
  }
}

function renderInseNotes(){
  document.title='INSE 201 lecture notes · Ash’s Study Lab';
  $('#course-label').textContent='INSE 201 / LECTURE NOTES';
  const match=activeId.match(/^inse201-lecture-([12])$/);
  if(match)renderInseLecture(+match[1]);else inseHub();
}
