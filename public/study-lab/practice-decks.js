'use strict';

const PRACTICE_DECK_IDS=['D1','D2'];
const PRACTICE_DECK_META={
 D1:{title:'Circuit Concepts & Network Reduction',short:'Circuit concepts',description:'Circuit structure, charge and energy, sources, power, Kirchhoff’s laws, Ohm’s law, division, equivalent resistance, and practical sources.',scope:'Rizzoni §§1.1–1.6, §§2.1–2.3, and selected §2.9',sourceCount:112,originalCount:44,total:156,counts:{example:18,cyu:11,homework:83,mcq:24,short:12,long:8}},
 D2:{title:'Nodal, Mesh & Superposition',short:'Nodal & mesh',description:'Node-voltage and mesh-current methods, source transformations, superposition, and systematic DC network equations.',scope:'Nodal, mesh, source-transformation, and superposition methods',sourceCount:83,originalCount:56,total:139,counts:{example:12,cyu:12,homework:59,mcq:30,short:14,long:12}}
};
const PRACTICE_TOTAL=PRACTICE_DECK_IDS.reduce((sum,id)=>sum+PRACTICE_DECK_META[id].total,0);
const practiceViews=Object.fromEntries(PRACTICE_DECK_IDS.map(id=>[id,{lane:'all',topic:'all',status:'all',query:''}]));
const practiceBlankState=()=>({completed:{},attempts:{},revealed:{}});
const practiceStorageKey=deck=>`elec275-practice-${deck.toLowerCase()}-v1`;

function practiceParseRoute(id){
 if(id==='elec275-practice')return{type:'shelf'};
 if(id==='elec275-practice-simulation')return{type:'simulation'};
 const match=/^elec275-practice-d([1-2])(?:\/([A-Za-z0-9.-]+))?$/.exec(id);
 if(!match)return null;
 const deck=`D${match[1]}`,suffix=match[2]||'';
 return{type:suffix==='timed'?'timed':suffix?'question':'deck',deck,qid:suffix&&suffix!=='timed'?suffix:null};
}
function practiceRoute(id){return Boolean(practiceParseRoute(id))}
function practiceQuestions(deck='D1'){
 switch(deck){
  case'D1':return typeof ELEC275_D1_QUESTIONS!=='undefined'&&Array.isArray(ELEC275_D1_QUESTIONS)?ELEC275_D1_QUESTIONS:[];
  case'D2':return typeof ELEC275_D2_QUESTIONS!=='undefined'&&Array.isArray(ELEC275_D2_QUESTIONS)?ELEC275_D2_QUESTIONS:[];
  default:return[];
 }
}
function practiceDeckReady(deck){return practiceQuestions(deck).length===PRACTICE_DECK_META[deck].total}
function practiceStore(deck='D1'){
 const key=practiceStorageKey(deck);let state=null,migrate=false;
 try{
  const raw=localStorage.getItem(key);
  if(raw)state=JSON.parse(raw);
  else if(deck==='D1'){
   const legacy=localStorage.getItem('elec275-practice-v1');
   if(legacy){state=JSON.parse(legacy);migrate=true}
  }
 }catch{state=null}
 const blank=practiceBlankState();
 if(!state||typeof state!=='object')state=blank;
 for(const field of['completed','attempts','revealed'])if(!state[field]||typeof state[field]!=='object'||Array.isArray(state[field]))state[field]={};
 if(migrate){try{localStorage.setItem(key,JSON.stringify(state))}catch{}}
 return state;
}
function practiceSave(deck,state){try{localStorage.setItem(practiceStorageKey(deck),JSON.stringify(state))}catch{}}
function practiceDeckProgress(deck){
 const state=practiceStore(deck),questions=practiceQuestions(deck),meta=PRACTICE_DECK_META[deck];
 return{done:questions.filter(q=>state.completed[q.id]).length,total:meta.total,loaded:questions.length,attempted:questions.filter(q=>Number.isInteger(state.attempts[q.id])||state.revealed[q.id]>0).length,label:`${deck} questions mastered`,detail:`${meta.sourceCount} source + ${meta.originalCount} original`};
}
function practiceProgress(){
 let done=0,attempted=0,ready=0;
 for(const deck of PRACTICE_DECK_IDS){const progress=practiceDeckProgress(deck);done+=progress.done;attempted+=progress.attempted;if(practiceDeckReady(deck))ready+=1}
 return{done,total:PRACTICE_TOTAL,attempted,ready,label:'Practice Deck mastery',detail:`${attempted} attempted · ${ready} / ${PRACTICE_DECK_IDS.length} decks loaded · ${PRACTICE_TOTAL} questions`};
}
function practiceMath(tex){if(!tex)return'';return`<div class="practice-math">${window.katex?window.katex.renderToString(tex,{displayMode:true,throwOnError:true}):esc(tex)}</div>`}
function practiceKind(q){return{example:'Worked example',cyu:'Check Your Understanding',homework:'Homework',mcq:'Multiple choice',short:'Short answer',long:'Long answer'}[q.kind]||q.kind}
function practiceSource(q,deck){return q.source?`${q.source.label} · ${q.source.section.startsWith('§')?q.source.section:`§${q.source.section}`} · PDF p. ${q.source.page}`:`Original exam practice · ${deck}`}
function practiceSelect(deck,id){const questions=practiceQuestions(deck),q=questions.find(item=>item.id===id)||questions[0];if(q)location.hash=`elec275-practice-${deck.toLowerCase()}/${q.id}`}
function practiceFiltered(deck){
 const{lane,topic,status,query}=practiceViews[deck],state=practiceStore(deck),needle=query.trim().toLowerCase();
 return practiceQuestions(deck).filter(q=>(lane==='all'||(lane==='source'?q.lane==='source':q.kind===lane))&&(topic==='all'||q.topic===topic)&&(status==='all'||(status==='completed'?state.completed[q.id]:!state.completed[q.id]))&&(!needle||`${q.id} ${q.title} ${q.prompt} ${q.source?.label||''}`.toLowerCase().includes(needle)));
}
function practiceListItem(q,selected,deck){
 const state=practiceStore(deck);
 return`<button class="practice-ledger-item ${q.id===selected?.id?'is-active':''}" data-practice-open="${q.id}" ${q.id===selected?.id?'aria-current="true"':''}><span class="practice-ledger-id">${q.id}</span><span><strong>${esc(q.title)}</strong><small>${practiceKind(q)} · ${q.time} min</small></span><i class="${state.completed[q.id]?'is-done':''}" aria-label="${state.completed[q.id]?'Mastered':'Not mastered'}">${state.completed[q.id]?'✓':'○'}</i></button>`;
}
function practiceFigure(q,deck){
 if(!q.figure)return'';
 if(q.figure.svg)return`<figure class="practice-figure"><div tabindex="0" aria-label="${esc(q.figure.alt)}">${q.figure.svg}</div><figcaption>${esc(q.figure.caption||q.figure.alt)}</figcaption></figure>`;
 return`<details class="practice-source-figure"><summary>View the source figure and notation</summary><img loading="lazy" src="assets/elec275-practice/${deck.toLowerCase()}/page-${q.figure.page}.jpg" alt="${esc(q.figure.alt)}" width="1237" height="1600"><p>${esc(q.figure.caption||'Source page retained so diagram geometry and mathematical glyphs can be checked directly.')}</p></details>`;
}
function practiceOptions(q,deck){
 if(q.kind!=='mcq')return'';
 const state=practiceStore(deck),attempt=state.attempts[q.id],checked=Number.isInteger(attempt);
 return`<div class="practice-options" role="group" aria-label="Answer choices for ${deck} ${q.id}">${q.options.map((option,i)=>`<button data-practice-choice="${i}" class="${checked?(i===q.correctIndex?'is-correct':i===attempt?'is-wrong':''):''}" aria-pressed="${attempt===i}"><span>${String.fromCharCode(65+i)}</span>${esc(option)}</button>`).join('')}</div><button class="primary practice-check" data-practice-check="${q.id}" ${checked?'disabled':''}>${checked?'Answer checked':'Check answer'}</button><div class="practice-choice-feedback" role="status">${checked?`<strong>${attempt===q.correctIndex?'Correct.':'Not quite — follow the full derivation below.'}</strong><p>${esc(q.optionFeedback[attempt])}</p>`:'Choose an option, then check it. Every distractor has a reason.'}</div>${checked?`<details class="practice-distractors" open><summary>Why each option is right or wrong</summary><ol>${q.options.map((option,i)=>`<li><strong>${String.fromCharCode(65+i)}.</strong> ${esc(q.optionFeedback[i])}</li>`).join('')}</ol></details>`:''}`;
}
function practiceSolution(q,deck){
 const state=practiceStore(deck),revealed=state.revealed[q.id]||0,steps=q.steps||[];
 return`<section class="practice-section practice-solution" id="practice-solution"><div class="practice-section-head"><div><span>ROSEN-STYLE REASONING · M2E</span><h2>Build the answer, do not guess it.</h2></div><span>${Math.min(revealed,steps.length)} / ${steps.length} steps</span></div>${revealed?`<div class="practice-answer"><span>FINAL ANSWER</span><strong>${esc(q.answer)}</strong></div><div class="practice-translation"><strong>Read the mathematics aloud.</strong><p>${esc(q.readAloud)}</p><p><b>Symbols and roles:</b> ${esc(q.symbols)}</p></div><div class="practice-steps">${steps.slice(0,revealed).map((step,i)=>`<article><span>${i+1}</span><div><h3>${esc(step.title)}</h3>${practiceMath(step.math)}<p>${esc(step.why)}</p></div></article>`).join('')}</div>`:'<p class="practice-hidden-note">Solve on paper first. Reveal the final answer and the first justified step when you are ready to compare methods.</p>'}<div class="practice-step-controls"><button data-practice-hide="${q.id}" ${revealed?'':'disabled'}>Hide solution</button><button data-practice-step="${q.id}" ${revealed>=steps.length?'disabled':''}>${revealed?'Reveal next step →':'Reveal answer & first step →'}</button><button class="primary" data-practice-all="${q.id}" ${revealed>=steps.length?'disabled':''}>Show full solution</button></div>${revealed>=steps.length?`<div class="practice-verification"><div><span>INDEPENDENT CHECK</span><p>${esc(q.verification)}</p></div><div><span>TRAP TO CATCH</span><p>${esc(q.trap)}</p></div></div>${q.fastCheck?`<p class="practice-fast-check"><strong>Fast exam check:</strong> ${esc(q.fastCheck)}</p>`:''}${q.marks?`<details class="practice-mark-scheme" open><summary>Mark scheme · ${q.marks.reduce((n,row)=>n+row[1],0)} marks</summary><table><thead><tr><th>Creditworthy work</th><th>Marks</th></tr></thead><tbody>${q.marks.map(row=>`<tr><td>${esc(row[0])}</td><td>${row[1]}</td></tr>`).join('')}</tbody></table></details>`:''}`:''}</section>`;
}
function practiceQuestion(q,deck){
 const state=practiceStore(deck),questions=practiceFiltered(deck),index=questions.findIndex(item=>item.id===q.id),previous=questions[index-1],next=questions[index+1];
 return`<article class="practice-question"><header class="practice-question-head"><div><div class="eyebrow">${q.id} · ${practiceKind(q).toUpperCase()}</div><h1>${esc(q.title)}</h1><p>${practiceSource(q,deck)}</p></div><label class="practice-mastered"><input type="checkbox" data-practice-complete="${q.id}" ${state.completed[q.id]?'checked':''}> mastered</label></header><div class="practice-meta"><span>${q.difficulty}</span><span>Target ${q.time} min</span><span>${q.calculator}</span><span>${esc(q.topic)}</span></div><section class="practice-section practice-prompt" id="practice-prompt"><span class="practice-label">ORIENT · READ BEFORE SOLVING</span><p class="practice-prompt-text">${esc(q.prompt)}</p>${q.parts?`<ol class="practice-parts">${q.parts.map(part=>`<li>${esc(part)}</li>`).join('')}</ol>`:''}${practiceFigure(q,deck)}<div class="practice-givens"><div><span>KNOWN</span><p>${esc(q.givens)}</p></div><div><span>FIND</span><p>${esc(q.unknowns)}</p></div><div><span>ASSUME / REMEMBER</span><p>${esc(q.assumptions)}</p></div></div>${practiceOptions(q,deck)}</section>${practiceSolution(q,deck)}<footer class="practice-question-nav"><button data-practice-open="${previous?.id||''}" ${previous?'':'disabled'}>← Previous in filter</button><a href="#elec275-practice">All Practice Decks</a><button data-practice-open="${next?.id||''}" ${next?'':'disabled'}>Next in filter →</button></footer></article>`;
}

function practiceHash(text){let hash=2166136261;for(const char of String(text)){hash^=char.charCodeAt(0);hash=Math.imul(hash,16777619)}return hash>>>0}
function practiceRank(items,seed){return[...items].sort((a,b)=>practiceHash(`${seed}:${a.deck||''}:${a.q?.id||a.id}`)-practiceHash(`${seed}:${b.deck||''}:${b.q?.id||b.id}`)||String(a.q?.id||a.id).localeCompare(String(b.q?.id||b.id)))}
function practicePick(items,count,seed,chosen){
 const picked=[];
 for(let n=0;n<count;n+=1){
  const candidates=practiceRank(items.filter(item=>!chosen.includes(item)&&!picked.includes(item)),`${seed}:${n}`);
  if(!candidates.length)break;
  const usedTopics=new Set([...chosen,...picked].map(item=>item.topic));
  const item=candidates.find(candidate=>!usedTopics.has(candidate.topic))||candidates[0];
  picked.push(item);
 }
 return picked;
}
function practiceTimedItems(deck){
 const bank=practiceQuestions(deck),chosen=[];
 for(const[group,count] of[['mcq',2],['short',1],['long',1],['source',2]]){
  const pool=bank.filter(q=>group==='source'?q.lane==='source':q.kind===group);
  chosen.push(...practicePick(pool,count,`${deck}:timed:${group}`,chosen));
 }
 return chosen.map(q=>({deck,q}));
}
function practiceSimulationItems(){
 const chosen=[],has=item=>chosen.some(selected=>selected.deck===item.deck&&selected.q.id===item.q.id);
 for(const deck of PRACTICE_DECK_IDS.filter(practiceDeckReady)){
  const bank=practiceQuestions(deck);
  for(const group of['mcq','source']){
   const pool=bank.filter(q=>group==='source'?q.lane==='source':q.kind===group).map(q=>({deck,q}));
   const picked=practiceRank(pool,`simulation:${deck}:${group}`)[0];
   if(picked)chosen.push(picked);
  }
 }
 const all=PRACTICE_DECK_IDS.filter(practiceDeckReady).flatMap(deck=>practiceQuestions(deck).map(q=>({deck,q})));
 for(const kind of['short','long']){
  const item=practiceRank(all.filter(item=>item.q.kind===kind&&!has(item)),`simulation:${kind}`)[0];
  if(item)chosen.push(item);
 }
 while(chosen.reduce((sum,item)=>sum+item.q.time,0)<120){
  const elapsed=chosen.reduce((sum,item)=>sum+item.q.time,0),remaining=120-elapsed;
  const candidates=all.filter(item=>!has(item)&&item.q.time<=remaining);
  if(!candidates.length)break;
  const counts=Object.fromEntries(PRACTICE_DECK_IDS.map(deck=>[deck,chosen.filter(item=>item.deck===deck).length]));
  const fewest=Math.min(...candidates.map(item=>counts[item.deck]));
  const fair=candidates.filter(item=>counts[item.deck]===fewest);
  const usedTopics=new Set(chosen.map(item=>`${item.deck}:${item.q.topic}`));
  const fresh=fair.filter(item=>!usedTopics.has(`${item.deck}:${item.q.topic}`));
  const next=practiceRank(fresh.length?fresh:fair,'simulation:fill')[0];
  chosen.push(next);
 }
 return chosen;
}
function practiceSetPage(title,kicker,description,items,target,algorithm){
 const minutes=items.reduce((sum,item)=>sum+item.q.time,0),decks=new Set(items.map(item=>item.deck));
 document.title=`${title} · ELEC 275 Practice Decks`;$('#course-label').textContent='ELEC 275 / TIMED PRACTICE';
 main.innerHTML=`${elecSwitch()}<nav class="practice-breadcrumb"><a href="#elec275-practice">← Practice Decks</a><span>${esc(title)}</span></nav><section class="practice-set-head"><div><div class="eyebrow">${esc(kicker)}</div><h1>${esc(title)}</h1><p>${esc(description)}</p></div><div><strong>${target} min</strong><span>${items.length} questions · ${decks.size} decks</span><small>${minutes} min of stated question targets</small></div></section><section class="practice-set-method"><span>DETERMINISTIC CURATION</span><p>${esc(algorithm)}</p><p>These are recombinations of existing item IDs, never additional bank questions. Open any row for its complete prompt, progressive solution, independent check, and mastery control.</p></section>${items.length?`<ol class="practice-set-list">${items.map((item,index)=>`<li><span>${String(index+1).padStart(2,'0')}</span><div><small>${item.deck} · ${item.q.id} · ${practiceKind(item.q)} · ${item.q.lane==='source'?'Source':'Original'}</small><h2>${esc(item.q.title)}</h2><p>${esc(item.q.topic)} · target ${item.q.time} min</p></div><a href="#elec275-practice-${item.deck.toLowerCase()}/${item.q.id}">Full question & solution →</a></li>`).join('')}</ol>`:'<section class="practice-empty-large"><h2>No completed deck records are loaded yet.</h2><p>This set will populate automatically when the released question-bank globals become available.</p></section>'}<footer class="practice-question-nav"><a href="#elec275-practice">All released decks · ${PRACTICE_TOTAL} questions</a><a href="#elec275-practice-simulation">Two-hour midterm simulation →</a></footer>`;
}
function renderPracticeTimed(deck){
 practiceSetPage(`${deck} short timed set`,`${deck} · ${PRACTICE_DECK_META[deck].title}`,`A compact paper-first set drawn only from ${deck}’s completed item IDs. Work without reveals, then follow each link to check the full reasoning.`,practiceTimedItems(deck),45,'Bank order is canonical. Fixed FNV-1a hashes provide a stable order; the selector takes two MCQs, one short answer, one long answer, and two source items, preferring a new topic at each pick. The 45-minute session target is independent of the summed per-question targets shown above.');
}
function renderPracticeSimulation(){
 const loaded=PRACTICE_DECK_IDS.filter(practiceDeckReady).length;
 practiceSetPage('Two-hour midterm simulation','CUMULATIVE · D1–D2',`A cumulative DC simulation across the released D1 and D2 banks (${loaded} / ${PRACTICE_DECK_IDS.length} loaded). The deterministic selection uses only validated question records.`,practiceSimulationItems(),120,'For each complete deck, stable FNV-1a ranking selects one MCQ and one source item. One short and one long answer are added globally. Remaining places are filled up to the 120-minute target while minimizing deck-count imbalance and preferring unused deck–topic pairs. No new questions are authored.');
}

function renderPracticeShelf(){
 const progress=practiceProgress();document.title='ELEC 275 Practice Decks · Ash’s Study Lab';$('#course-label').textContent='ELEC 275 / PRACTICE DECKS';
 main.innerHTML=`${elecSwitch()}<section class="practice-hero"><div><div class="eyebrow">ELEC 275 · TWO PRACTICE DECKS</div><h1>Source coverage.<br>Exam judgment.<br>Full reasoning.</h1><p>Two decks join every allocated textbook item to original exam practice. Work on paper, reveal one justified move at a time, and finish with an independent circuit check.</p><div class="practice-hero-links"><a class="primary" href="#elec275-practice-simulation">Two-hour midterm simulation →</a><span>Deterministic timed recombinations · no duplicate bank</span></div></div><div class="practice-hero-stat"><strong>${progress.done} / ${PRACTICE_TOTAL}</strong><span>Practice Deck questions mastered</span><small>Saved separately by deck in this browser</small></div></section><section class="practice-deck-grid" aria-label="Two ELEC 275 Practice Decks">${PRACTICE_DECK_IDS.map(deck=>{const meta=PRACTICE_DECK_META[deck],deckProgress=practiceDeckProgress(deck);return`<a class="practice-deck-card is-live" href="#elec275-practice-${deck.toLowerCase()}"><div><span>${deck} · ${deckProgress.loaded} / ${meta.total} RECORDS LOADED</span><strong>${deckProgress.done} / ${meta.total}</strong></div><h2>${meta.title}</h2><p>${meta.description}</p><ul><li>${meta.sourceCount} source + ${meta.originalCount} original = <b>${meta.total}</b></li><li>${meta.counts.example} examples · ${meta.counts.cyu} CYU · ${meta.counts.homework} homework</li><li>${meta.counts.mcq} MCQ · ${meta.counts.short} short · ${meta.counts.long} long</li></ul><strong>Open ${deck} →</strong><span class="practice-deck-timed" data-href="#elec275-practice-${deck.toLowerCase()}/timed">Short timed set · 45 min</span></a>`}).join('')}</section><section class="practice-method"><div><span>THE WORKFLOW</span><h2>Four passes. One honest mastery check.</h2><p>DC and switched-DC scope only: no AC steady state, phasors, AC power, or magnetic materials.</p></div><ol><li><b>Orient.</b> Name the knowns, target, references, and permitted method.</li><li><b>Translate.</b> Say the equation in English and define every symbol and unit.</li><li><b>Work.</b> Justify each circuit law and algebra move without skipping the setup.</li><li><b>Verify.</b> Use KCL, KVL, power balance, limits, units, or an independent method.</li></ol></section>`;
 main.querySelectorAll('.practice-deck-timed').forEach(link=>link.onclick=event=>{event.preventDefault();event.stopPropagation();location.hash=link.dataset.href.slice(1)});
 animate('.practice-deck-card');
}
function practiceRefresh(deck,qid){renderPracticeDeckView(deck,qid);if(typeof renderModuleToc==='function')renderModuleToc()}
function renderPracticeDeckView(deck,qid){
 const questions=practiceQuestions(deck),meta=PRACTICE_DECK_META[deck];
 if(qid&&questions.length&&!questions.some(q=>q.id===qid)){location.hash=`elec275-practice-${deck.toLowerCase()}/${questions[0].id}`;return}
 const selected=questions.find(q=>q.id===qid)||questions[0],progress=practiceDeckProgress(deck),view=practiceViews[deck],filtered=practiceFiltered(deck),topics=[...new Set(questions.map(q=>q.topic))];
 document.title=selected?`${selected.id} · ${deck} Practice Deck`:`${deck} · ELEC 275 Practice Deck`;$('#course-label').textContent=`ELEC 275 / PRACTICE DECK / ${deck}`;
 main.innerHTML=`${elecSwitch()}<nav class="practice-breadcrumb"><a href="#elec275-practice">← Practice Decks</a><span>${deck} · ${meta.title}</span></nav><section class="practice-d1-head"><div><div class="eyebrow">DECK ${deck} · ${meta.total} FULLY SOLVED QUESTIONS</div><h1>${meta.title}</h1><p>${meta.scope}. No AC steady state, phasors, AC power, or magnetic materials.</p><div class="practice-deck-actions"><a href="#elec275-practice-${deck.toLowerCase()}/timed">45-minute timed set →</a><a href="#elec275-practice-simulation">Cumulative simulation →</a></div></div><div><strong>${progress.done} / ${meta.total}</strong><span>mastered</span><progress max="${meta.total}" value="${progress.done}" aria-label="${deck} mastery progress"></progress><small>${progress.attempted} attempted · ${meta.sourceCount} source + ${meta.originalCount} original</small></div></section><section class="practice-controls" aria-label="Filter ${deck} questions"><label>Lane or type<select data-practice-filter="lane"><option value="all">All ${meta.total} questions</option><option value="source">Source Mastery · ${meta.sourceCount}</option><option value="mcq">Original MCQ · ${meta.counts.mcq}</option><option value="short">Original short · ${meta.counts.short}</option><option value="long">Original long · ${meta.counts.long}</option></select></label><label>Topic<select data-practice-filter="topic"><option value="all">All topics</option>${topics.map(topic=>`<option value="${esc(topic)}">${esc(topic)}</option>`).join('')}</select></label><label>Status<select data-practice-filter="status"><option value="all">Any status</option><option value="remaining">Not mastered</option><option value="completed">Mastered</option></select></label><label class="practice-search">Find a question<input type="search" data-practice-filter="query" placeholder="ID, title, or source" value="${esc(view.query)}"></label></section><div class="practice-workspace"><aside class="practice-ledger"><div><strong>${filtered.length} shown</strong><span>${progress.loaded} / ${meta.total} loaded</span></div>${filtered.map(q=>practiceListItem(q,selected,deck)).join('')||'<p class="practice-empty">No questions match these filters, or this deck’s records are still loading.</p>'}<button class="practice-clear" data-practice-clear>Clear filters</button></aside><div class="practice-detail">${selected?practiceQuestion(selected,deck):`<section class="practice-empty-large"><h1>${deck} records are loading.</h1><p>The route and ${meta.total}-question progress denominator are ready. The ledger, timed set, and question links populate automatically when <code>ELEC275_${deck}_QUESTIONS</code> is available.</p><a href="#elec275-practice">Return to all six decks →</a></section>`}</div></div>`;
 main.querySelectorAll('[data-practice-filter]').forEach(control=>{if(control.dataset.practiceFilter!=='query')control.value=view[control.dataset.practiceFilter];control.oninput=()=>{view[control.dataset.practiceFilter]=control.value;renderPracticeDeckView(deck,selected?.id);const restored=main.querySelector(`[data-practice-filter="${control.dataset.practiceFilter}"]`);if(restored){restored.focus();if(control.dataset.practiceFilter==='query')restored.setSelectionRange(restored.value.length,restored.value.length)}}});
 main.querySelectorAll('[data-practice-open]').forEach(button=>button.onclick=()=>{if(button.dataset.practiceOpen)practiceSelect(deck,button.dataset.practiceOpen)});
 const clear=main.querySelector('[data-practice-clear]');if(clear)clear.onclick=()=>{practiceViews[deck]={lane:'all',topic:'all',status:'all',query:''};renderPracticeDeckView(deck,selected?.id)};
 main.querySelectorAll('[data-practice-choice]').forEach(button=>button.onclick=()=>{main.querySelectorAll('[data-practice-choice]').forEach(item=>{item.classList.remove('is-selected');item.setAttribute('aria-pressed',String(item===button))});button.classList.add('is-selected')});
 const check=main.querySelector('[data-practice-check]');if(check)check.onclick=()=>{const chosen=main.querySelector('[data-practice-choice].is-selected');if(!chosen){main.querySelector('.practice-choice-feedback').textContent='Choose an option first.';return}const state=practiceStore(deck);state.attempts[selected.id]=+chosen.dataset.practiceChoice;state.revealed[selected.id]=Math.max(1,state.revealed[selected.id]||0);practiceSave(deck,state);practiceRefresh(deck,selected.id)};
 main.querySelectorAll('[data-practice-step],[data-practice-all],[data-practice-hide]').forEach(button=>button.onclick=()=>{const state=practiceStore(deck);if(button.dataset.practiceHide!==undefined)state.revealed[selected.id]=0;else if(button.dataset.practiceAll!==undefined)state.revealed[selected.id]=selected.steps.length;else state.revealed[selected.id]=Math.min(selected.steps.length,(state.revealed[selected.id]||0)+1);practiceSave(deck,state);practiceRefresh(deck,selected.id)});
 const complete=main.querySelector('[data-practice-complete]');if(complete)complete.onchange=()=>{const state=practiceStore(deck);state.completed[selected.id]=complete.checked;practiceSave(deck,state);practiceRefresh(deck,selected.id)};
}
function renderPracticeDeck(id){
 const route=practiceParseRoute(id);if(!route){location.hash='study-lab';return}
 if(route.type==='shelf')return renderPracticeShelf();
 if(route.type==='simulation')return renderPracticeSimulation();
 if(route.type==='timed')return renderPracticeTimed(route.deck);
 return renderPracticeDeckView(route.deck,route.qid);
}
