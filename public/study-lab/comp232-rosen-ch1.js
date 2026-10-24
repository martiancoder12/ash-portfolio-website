/* Reusable Rosen chapter reader, practice desk, and deterministic checkers. */
(function rosenChapterModule(global) {
  'use strict';

  function createRosenChapter(options) {
    const config = {
      chapterNumber: 1,
      routePrefix: 'comp232-rosen-ch1',
      storageKey: 'comp232-rosen-ch1-v1',
      sectionCount: 0,
      pageSize: 12,
      courseLabel: 'COMP 232 / ROSEN',
      overviewEyebrow: '',
      overviewSubtitle: 'A source-faithful reader with progressive worked examples, notation translation, and deliberately paced practice.',
      overviewMapTitle: null,
      sectionHints: {},
      ...options,
    };
    const PAGE_SIZE = config.pageSize;
    const ui = { sets: Object.create(null) };
    const fallbackEsc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const escapeHTML = (value) => (typeof esc === 'function' ? esc(value == null ? '' : value) : fallbackEsc(value == null ? '' : value));
    const injected = (value, fallback) => typeof value === 'function' ? value() : (value === undefined ? fallback : value);
    const content = () => injected(config.content, null);
    const exercises = () => injected(config.exercises, []) || [];
    const sectionCount = () => content() && Array.isArray(content().sections) ? content().sections.length : config.sectionCount;
    const sectionRoute = (index) => `${config.routePrefix}-s${index + 1}`;
    const routePattern = new RegExp(`^${config.routePrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-s([1-9]\\d*)$`);

    function blankStore() {
      return { version: 1, drafts: {}, results: {}, hints: {}, revealed: {}, examples: {}, sections: {} };
    }
    function loadStore() {
      const base = blankStore();
      const raw = typeof saved === 'function' ? saved(config.storageKey, base) : base;
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return base;
      for (const key of Object.keys(base)) {
        if (key === 'version') continue;
        if (!raw[key] || typeof raw[key] !== 'object' || Array.isArray(raw[key])) raw[key] = {};
      }
      raw.version = 1;
      return raw;
    }
    let store = loadStore();
    function saveStore() {
      if (typeof persist === 'function') persist(config.storageKey, store);
    }
    function setUI(setId) {
      if (!ui.sets[setId]) ui.sets[setId] = { query: '', difficulty: 'all', status: 'all', page: 1 };
      return ui.sets[setId];
    }
    function answerRecords() {
      const records = injected(config.answers, []);
      if (!records) return [];
      if (Array.isArray(records)) return records;
      if (Array.isArray(records.answers)) return records.answers;
      if (typeof records === 'object') return Object.values(records);
      return [];
    }
    function answerMap() {
      const map = new Map();
      for (const record of answerRecords()) if (record && typeof record.id === 'string') map.set(record.id, record);
      return map;
    }
    function math(tex, display) {
      if (typeof engrMath === 'function') {
        try { return engrMath(tex, display); } catch { /* Text remains available below. */ }
      }
      return `<code>${escapeHTML(tex)}</code>`;
    }
    function routeId() {
      const id = global.location ? global.location.hash.slice(1) : config.routePrefix;
      return route(id) ? id : config.routePrefix;
    }
    function route(id) {
      if (typeof id !== 'string') return false;
      if ([config.routePrefix, `${config.routePrefix}-review`, `${config.routePrefix}-projects`].includes(id)) return true;
      const match = id.match(routePattern);
      return Boolean(match && Number(match[1]) <= sectionCount());
    }
    function sectionForRoute(id) {
      const match = typeof id === 'string' && id.match(routePattern);
      const data = content();
      return match && data && Array.isArray(data.sections) ? data.sections[Number(match[1]) - 1] || null : null;
    }
    function exerciseStatus(id) {
      const result = store.results[id];
      if (result && (result.status === 'correct' || result.status === 'self-checked')) return 'completed';
      if ((result && result.status) || Object.keys(store.drafts[id] || {}).some((part) => String(store.drafts[id][part]).trim())) return 'attempted';
      return 'unanswered';
    }
    function progress() {
      const list = exercises();
      const completed = list.filter((exercise) => exerciseStatus(exercise.id) === 'completed').length;
      const attempted = list.filter((exercise) => exerciseStatus(exercise.id) === 'attempted').length;
      const sectionsStudied = Object.values(store.sections).filter(Boolean).length;
      return {
        completed, done: completed, attempted, unanswered: list.length - completed - attempted,
        total: list.length, sectionsStudied, totalSections: sectionCount(),
        percent: list.length ? Math.round((completed / list.length) * 100) : 0,
      };
    }

  /* ---------- Deterministic answer checking ---------- */
  function normalizeText(value) {
    return String(value == null ? '' : value).normalize('NFKC').toLowerCase()
      .replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[−–—]/g, '-')
      .replace(/\s+/g, ' ').trim();
  }
  function looksLikeProse(value) {
    const text = String(value).trim();
    const words = text.split(/\s+/).filter(Boolean);
    return text.length > 160 || words.length > 14 || /[.!?](?:["'”’)]*)\s+\S/.test(text);
  }
  function parseNumber(value) {
    const text = normalizeText(value).replace(/½/g, '1/2').replace(/⅓/g, '1/3').replace(/⅔/g, '2/3')
      .replace(/¼/g, '1/4').replace(/¾/g, '3/4').replace(/\s+/g, '');
    const number = '[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e[+-]?\\d+)?';
    const match = text.match(new RegExp(`^(${number})(?:\\/(${number}))?$`, 'i'));
    if (!match) return null;
    const numerator = Number(match[1]);
    const denominator = match[2] === undefined ? 1 : Number(match[2]);
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return null;
    return numerator / denominator;
  }
  function checkNumber(actual, expected) {
    const a = parseNumber(actual), e = parseNumber(expected);
    if (a === null || e === null) return false;
    return Math.abs(a - e) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(e));
  }
  function splitTopLevel(text) {
    const parts = [];
    let depth = 0, start = 0;
    for (let i = 0; i < text.length; i += 1) {
      if ('{[('.includes(text[i])) depth += 1;
      if ('}])'.includes(text[i])) depth -= 1;
      if (depth < 0) return null;
      if ((text[i] === ',' || text[i] === ';') && depth === 0) {
        parts.push(text.slice(start, i)); start = i + 1;
      }
    }
    if (depth !== 0) return null;
    parts.push(text.slice(start));
    return parts;
  }
  function canonicalSet(value) {
    const text = normalizeText(value);
    if (/^(?:∅|\{\}|empty set)$/.test(text)) return '{}';
    if (!text.startsWith('{') || !text.endsWith('}')) return null;
    const inner = text.slice(1, -1).trim();
    if (!inner) return '{}';
    const rawParts = splitTopLevel(inner);
    if (!rawParts || rawParts.some((part) => !part.trim())) return null;
    const elements = rawParts.map((part) => {
      const trimmed = part.trim();
      if (trimmed.startsWith('{')) {
        const nested = canonicalSet(trimmed);
        return nested === null ? null : `s:${nested}`;
      }
      const number = parseNumber(trimmed);
      if (number !== null) return `n:${Object.is(number, -0) ? 0 : number}`;
      const truth = canonicalTruth(trimmed);
      if (truth !== null) return `t:${truth}`;
      return `x:${normalizeText(trimmed)}`;
    });
    if (elements.some((element) => element === null)) return null;
    return `{${[...new Set(elements)].sort().join(',')}}`;
  }
  function checkSet(actual, expected) {
    const a = canonicalSet(actual), e = canonicalSet(expected);
    return a !== null && e !== null && a === e;
  }
  function canonicalTruth(value) {
    const text = normalizeText(value).replace(/\s+/g, '');
    if (['t', 'true', '⊤', '1'].includes(text)) return 'T';
    if (['f', 'false', '⊥', '0'].includes(text)) return 'F';
    return null;
  }
  function canonicalTruthList(value) {
    const text = String(value).trim();
    const single = canonicalTruth(text);
    if (single) return single;
    const pieces = text.split(/\s*,\s*|\s+/).filter(Boolean);
    if (!pieces.length) return null;
    const values = pieces.map(canonicalTruth);
    return values.every(Boolean) ? values.join(',') : null;
  }
  function checkTruth(actual, expected) {
    const a = canonicalTruthList(actual), e = canonicalTruthList(expected);
    return a !== null && e !== null && a === e;
  }

  const LOGIC_ALIASES = [
    [/<\s*-\s*>|<\s*=\s*>|↔|⇔/g, ' ↔ '], [/-\s*>|=\s*>|→|⇒/g, ' → '],
    [/\/\\/g, ' ∧ '], [/\\\//g, ' ∨ '], [/&&|&|∧/g, ' ∧ '],
    [/\|\||\||∨/g, ' ∨ '], [/⊕|⨁|\^/g, ' ⊕ '], [/¬|~|!/g, ' ¬ '],
    [/⊤/g, ' true '], [/⊥/g, ' false '],
  ];
  function logicTokens(value) {
    let text = String(value).normalize('NFKC');
    for (const [pattern, replacement] of LOGIC_ALIASES) text = text.replace(pattern, replacement);
    const tokens = [];
    const pattern = /\s*(\(|\)|↔|→|∧|∨|⊕|¬|[A-Za-z_][A-Za-z0-9_]*|[01])/gy;
    let index = 0;
    while (index < text.length) {
      pattern.lastIndex = index;
      const match = pattern.exec(text);
      if (!match) {
        if (/^\s*$/.test(text.slice(index))) break;
        throw new Error(`Unexpected logic syntax near “${text.slice(index, index + 12).trim()}”.`);
      }
      index = pattern.lastIndex;
      let token = match[1];
      const lower = token.toLowerCase();
      if (['not', 'neg'].includes(lower)) token = '¬';
      else if (['and', 'nand'].includes(lower)) { if (lower === 'nand') throw new Error('NAND is not a supported infix alias.'); token = '∧'; }
      else if (lower === 'or') token = '∨';
      else if (lower === 'xor') token = '⊕';
      else if (['implies', 'implication'].includes(lower)) token = '→';
      else if (['iff', 'xnor'].includes(lower)) token = '↔';
      else if (['true', 't'].includes(lower)) token = '1';
      else if (['false', 'f'].includes(lower)) token = '0';
      tokens.push(token);
    }
    if (!tokens.length) throw new Error('Enter a propositional expression.');
    return tokens;
  }
  function parseLogic(value) {
    const tokens = logicTokens(value);
    const variables = [...new Set(tokens.filter((token) => /^[A-Za-z_]/.test(token) && !['1', '0'].includes(token)))].sort();
    if (variables.length > 12) throw new Error('Logic checking supports at most 12 variables.');
    let cursor = 0;
    const peek = () => tokens[cursor];
    const take = () => tokens[cursor++];
    function primary() {
      const token = take();
      if (token === '¬') return { type: 'not', value: primary() };
      if (token === '(') {
        const node = biconditional();
        if (take() !== ')') throw new Error('Missing closing parenthesis.');
        return node;
      }
      if (token === '1' || token === '0') return { type: 'constant', value: token === '1' };
      if (token && /^[A-Za-z_]/.test(token)) return { type: 'variable', value: token };
      throw new Error(token ? `Expected a variable or parenthesis, found “${token}”.` : 'Expression ends too early.');
    }
    function conjunction() {
      let node = primary();
      while (peek() === '∧') { take(); node = { type: 'and', left: node, right: primary() }; }
      return node;
    }
    function disjunction() {
      let node = conjunction();
      while (peek() === '∨') { take(); node = { type: 'or', left: node, right: conjunction() }; }
      return node;
    }
    function exclusiveOr() {
      let node = disjunction();
      while (peek() === '⊕') { take(); node = { type: 'xor', left: node, right: disjunction() }; }
      return node;
    }
    function implication() {
      const left = exclusiveOr();
      if (peek() === '→') { take(); return { type: 'implies', left, right: implication() }; }
      return left;
    }
    function biconditional() {
      let node = implication();
      while (peek() === '↔') { take(); node = { type: 'iff', left: node, right: implication() }; }
      return node;
    }
    const ast = biconditional();
    if (cursor !== tokens.length) throw new Error(`Unexpected token “${tokens[cursor]}”.`);
    return { ast, variables };
  }
  function evaluateLogic(node, assignment) {
    switch (node.type) {
      case 'constant': return node.value;
      case 'variable': return assignment[node.value];
      case 'not': return !evaluateLogic(node.value, assignment);
      case 'and': return evaluateLogic(node.left, assignment) && evaluateLogic(node.right, assignment);
      case 'or': return evaluateLogic(node.left, assignment) || evaluateLogic(node.right, assignment);
      case 'xor': return evaluateLogic(node.left, assignment) !== evaluateLogic(node.right, assignment);
      case 'implies': return !evaluateLogic(node.left, assignment) || evaluateLogic(node.right, assignment);
      case 'iff': return evaluateLogic(node.left, assignment) === evaluateLogic(node.right, assignment);
      default: throw new Error('Unknown logic node.');
    }
  }
  function checkLogic(actual, expected) {
    try {
      const a = parseLogic(actual), e = parseLogic(expected);
      const variables = [...new Set([...a.variables, ...e.variables])].sort();
      const rows = 2 ** variables.length;
      for (let row = 0; row < rows; row += 1) {
        const assignment = {};
        variables.forEach((name, index) => { assignment[name] = Boolean(row & (2 ** index)); });
        if (evaluateLogic(a.ast, assignment) !== evaluateLogic(e.ast, assignment)) {
          return { ok: true, equivalent: false, variables, counterexample: assignment };
        }
      }
      return { ok: true, equivalent: true, variables };
    } catch (error) {
      return { ok: false, equivalent: false, error: error.message };
    }
  }
  function defaultCheckAuto(actual, record) {
    const checker = record.checker || 'text';
    const candidates = [record.answer, ...(Array.isArray(record.accepted) ? record.accepted : [])].filter((answer) => typeof answer === 'string' && answer.trim());
    if (!candidates.length) return { status: 'unavailable', correct: false, message: 'No authored answer is available for automatic checking.' };
    if (!String(actual).trim()) return { status: 'incorrect', correct: false, message: 'Write an answer before checking.' };
    if (checker === 'rubric' || record.mode === 'rubric') return { status: 'review', correct: false, message: 'This answer requires model-answer self-review.' };
    if (checker === 'text' && (looksLikeProse(actual) || candidates.some(looksLikeProse))) {
      return { status: 'review', correct: false, message: 'Long-form text is never credited by string matching. Use model-answer self-review.' };
    }
    if (checker === 'logic') {
      let lastError = '';
      for (const candidate of candidates) {
        const result = checkLogic(actual, candidate);
        if (result.ok && result.equivalent) return { status: 'correct', correct: true, message: 'Equivalent for every truth assignment.' };
        if (result.error) lastError = result.error;
      }
      return lastError
        ? { status: 'invalid', correct: false, message: lastError }
        : { status: 'incorrect', correct: false, message: 'Not equivalent yet. Check a counterexample row in your truth table.' };
    }
    const comparators = { number: checkNumber, set: checkSet, truth: checkTruth, text: (a, e) => normalizeText(a) === normalizeText(e), ...config.checkers };
    const compare = comparators[checker];
    if (!compare) return { status: 'invalid', correct: false, message: `Unsupported checker: ${checker}` };
    const correct = candidates.some((candidate) => compare(actual, candidate));
    return { status: correct ? 'correct' : 'incorrect', correct, message: correct ? 'Correct.' : 'Not yet. Revise your answer and check again.' };
  }
  function checkAuto(actual, record) {
    if (typeof config.checkerBehavior === 'function') {
      const checked = config.checkerBehavior(actual, record, defaultCheckAuto);
      if (checked !== undefined) return checked;
    }
    return defaultCheckAuto(actual, record);
  }

  /* ---------- Rendering helpers ---------- */
  function sourceDetails(source, label) {
    if (!source || !Array.isArray(source.pages) || !source.pages.length) return '';
    const pageRange = source.printedPageStart === source.printedPageEnd
      ? `printed page ${source.printedPageStart}` : `printed pages ${source.printedPageStart}–${source.printedPageEnd}`;
    return `<details class="rosen-ch1-source"><summary>Original source · ${escapeHTML(pageRange)}</summary><p>Use the scan for exact symbols, layout, tables, and figures. PDF page numbers are printed page + 23.</p>${source.pages.map((page) => `<figure><img loading="lazy" src="${escapeHTML(page.asset)}" width="${escapeHTML(page.width || 1500)}" alt="${escapeHTML(label)} — original printed page ${page.printedPage}, PDF page ${page.pdfPage}"><figcaption>Printed page ${page.printedPage} · PDF page ${page.pdfPage}</figcaption></figure>`).join('')}</details>`;
  }
  function solutionSteps(text) {
    const clean = String(text || '').replace(/◂/g, '').trim();
    if (!clean) return [];
    const steps = clean.split(/(?<=[.!?]["'”’]?)\s+(?=[A-Z0-9“"'(¬∀∃])/).filter(Boolean);
    return steps.length ? steps : [clean];
  }
  const SECTION_HINTS = config.sectionHints;
  function m2ePanel(section) {
    const number = section ? section.number : String(config.chapterNumber);
    const expression = typeof config.m2eExpression === 'function'
      ? config.m2eExpression(section, number)
      : (config.m2eExpression || '¬p ∧ (p ∨ q) → q');
    return `<aside class="rosen-ch1-m2e" aria-labelledby="rosen-ch1-m2e-${escapeHTML(number)}"><div><span class="rosen-ch1-kicker">M2E · MATHS → ENGLISH</span><h2 id="rosen-ch1-m2e-${escapeHTML(number)}">Say the notation before you manipulate it.</h2><p>Translate each symbol into spoken English, identify every variable’s role, then reproduce the method on paper.</p><div class="rosen-ch1-formula">${math(expression, true)}</div></div><div class="rosen-ch1-m2e-work"><label for="rosen-ch1-notation-${escapeHTML(number)}">Notation to translate</label><div class="rosen-ch1-inline-controls"><input id="rosen-ch1-notation-${escapeHTML(number)}" data-rosen-notation-input value="${escapeHTML(expression)}" autocomplete="off"><button type="button" data-rosen-action="translate">Translate to English</button></div><p class="rosen-ch1-translation" data-rosen-translation aria-live="polite">Press Translate to hear the expression in words.</p><ol><li><strong>Read:</strong> say each symbol and name its role.</li><li><strong>Reproduce:</strong> cover the page and write the rule or method unaided.</li><li><strong>Ground:</strong> test one concrete case and one boundary case.</li><li><strong>Audit:</strong> explain why each operation is legal, then check independently.</li></ol></div></aside>`;
  }
  function translateNotation(value) {
    let text = String(value).normalize('NFKC');
    const replacements = [
      [/∀/g, ' for every '], [/∃/g, ' there exists '], [/∄/g, ' there does not exist '],
      [/¬|~/g, ' not '], [/∧|&&|&/g, ' and '], [/∨|\|\||\|/g, ' or, inclusive, '],
      [/⊕|\^/g, ' exclusive or '], [/↔|<=>|<->/g, ' if and only if '], [/→|=>|->/g, ' implies '],
      [/∈/g, ' is an element of '], [/∉/g, ' is not an element of '], [/⊆/g, ' is a subset of '],
      [/⊂/g, ' is a proper subset of '], [/∪/g, ' union '], [/∩/g, ' intersection '],
      [/∅/g, ' the empty set '], [/≡/g, ' is logically equivalent to '], [/≠/g, ' is not equal to '],
      [/≤/g, ' is less than or equal to '], [/≥/g, ' is greater than or equal to '],
      [/⇒/g, ' implies '], [/⇔/g, ' if and only if '],
    ];
    for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement);
    return text.replace(/([PQpqrs])\s*\(\s*([^)]*)\)/g, '$1 of $2').replace(/\s+/g, ' ').trim();
  }
  function renderExample(block) {
    const state = store.examples[block.id] || { attempted: false, hint: false, steps: 0, draft: '' };
    const steps = solutionSteps(block.solution);
    return `<article class="rosen-ch1-example" id="${escapeHTML(block.id)}"><div class="rosen-ch1-card-heading"><span>${escapeHTML(block.label || `Example ${block.number}`)}</span><span>${block.hasSolution ? `${steps.length} solution step${steps.length === 1 ? '' : 's'}` : 'Textbook discussion'}</span></div><h3>${escapeHTML(block.title || block.label)}</h3><p>${escapeHTML(block.prompt || block.text)}</p>${block.hasSolution ? `<label for="${escapeHTML(block.id)}-attempt">Your attempt before revealing the solution</label><textarea id="${escapeHTML(block.id)}-attempt" rows="3" data-rosen-example-draft="${escapeHTML(block.id)}" placeholder="Write the setup, notation, and reasoning in your own words.">${escapeHTML(state.draft || '')}</textarea><div class="rosen-ch1-actions"><button type="button" data-rosen-action="example-attempt" data-id="${escapeHTML(block.id)}" aria-pressed="${Boolean(state.attempted)}">${state.attempted ? 'Attempt saved ✓' : 'Save my attempt'}</button><button type="button" data-rosen-action="example-hint" data-id="${escapeHTML(block.id)}" aria-expanded="${Boolean(state.hint)}">${state.hint ? 'Hide hint' : 'Attempt / hint first'}</button><button type="button" data-rosen-action="example-step" data-id="${escapeHTML(block.id)}" ${!state.attempted && !state.hint ? 'disabled title="Save an attempt or open the hint first"' : ''}>${state.steps >= steps.length ? 'Replay solution' : 'Reveal next step →'}</button></div>${state.hint ? `<div class="rosen-ch1-hint" role="note"><strong>Manual start.</strong> ${escapeHTML(SECTION_HINTS[block.section] || SECTION_HINTS.review)}</div>` : ''}${state.steps ? `<ol class="rosen-ch1-solution-steps" aria-label="Progressive textbook solution">${steps.slice(0, state.steps).map((step) => `<li>${escapeHTML(step)}</li>`).join('')}</ol><p class="rosen-ch1-step-status" role="status">Step ${Math.min(state.steps, steps.length)} of ${steps.length}. ${state.steps >= steps.length ? 'Close the solution and reproduce it on paper.' : 'Predict the next operation before revealing it.'}</p>` : ''}` : '<p class="rosen-ch1-note">This example has no separately labelled textbook solution; its complete discussion remains above.</p>'}${sourceDetails(block.source, block.label || 'Worked example')}</article>`;
  }
  function renderBlock(block) {
    if (!block || block.kind === 'running-header' || block.kind === 'section-heading') return '';
    const label = block.kind.replace(/-/g, ' ');
    if (block.kind === 'example') return renderExample(block);
    if (block.kind === 'subsection-heading') return `<div class="rosen-ch1-subsection-heading" id="${escapeHTML(block.id)}"><span>${escapeHTML(block.number)}</span><h2>${escapeHTML(block.title)}</h2>${sourceDetails(block.source, block.text)}</div>`;
    if (block.kind === 'text') return `<div class="rosen-ch1-text" id="${escapeHTML(block.id)}"><p>${escapeHTML(block.text)}</p>${sourceDetails(block.source, 'Textbook passage')}</div>`;
    if (block.kind === 'figure-group') {
      const figures = (block.figureIds || []).map((id) => content().artifacts.figures.find((figure) => figure.id === id)).filter(Boolean);
      return figures.map(renderBlock).join('') || `<figure><figcaption>${escapeHTML(block.text)}</figcaption>${sourceDetails(block.source, block.text)}</figure>`;
    }
    if (block.kind === 'figure') return `<figure class="rosen-ch1-figure" id="${escapeHTML(block.id)}"><figcaption>${escapeHTML(block.caption || block.text)}</figcaption><p>The visual is preserved in the original source-page scan.</p>${sourceDetails(block.source, block.caption || 'Textbook figure')}</figure>`;
    if (block.kind === 'table') return `<figure class="rosen-ch1-table" id="${escapeHTML(block.id)}"><figcaption>Table ${escapeHTML(block.number)} · source transcription</figcaption><pre>${escapeHTML(block.rawText || block.text)}</pre><p>The source text is flattened; use the scan for the exact rows and columns.</p>${sourceDetails(block.source, `Table ${block.number}`)}</figure>`;
    if (block.kind === 'biography') return `<details class="rosen-ch1-biography" id="${escapeHTML(block.id)}"><summary>Biography · ${escapeHTML(block.name || 'Historical figure')}</summary><p>${escapeHTML(block.text)}</p>${sourceDetails(block.source, block.name || 'Biography')}</details>`;
    if (block.kind === 'key-term') {
      const split = String(block.text).indexOf(':');
      return `<div class="rosen-ch1-key-term" id="${escapeHTML(block.id)}"><dt>${escapeHTML(split >= 0 ? block.text.slice(0, split) : block.term)}</dt><dd>${escapeHTML(split >= 0 ? block.text.slice(split + 1).trim() : block.text)}</dd>${sourceDetails(block.source, block.term || 'Key term')}</div>`;
    }
    if (['end-matter-heading', 'terms-heading', 'results-heading'].includes(block.kind)) return `<h2 class="rosen-ch1-end-heading" id="${escapeHTML(block.id)}">${escapeHTML(block.text)}</h2>${sourceDetails(block.source, block.text)}`;
    if (block.kind === 'result-group') return `<li class="rosen-ch1-result" id="${escapeHTML(block.id)}">${escapeHTML(block.text)}${sourceDetails(block.source, 'Key result')}</li>`;
    const title = block.kind === 'definition' ? `Definition ${block.number}` : block.kind === 'remark' ? `Remark ${block.number}` : block.kind === 'theorem' ? `Theorem ${block.number}` : label;
    return `<aside class="rosen-ch1-callout rosen-ch1-${escapeHTML(block.kind)}" id="${escapeHTML(block.id)}"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(block.text || block.rawText || '')}</p>${sourceDetails(block.source, title)}</aside>`;
  }
  function sectionCounts(number) {
    const all = exercises().filter((exercise) => exercise.section === number);
    return { total: all.length, completed: all.filter((exercise) => exerciseStatus(exercise.id) === 'completed').length };
  }
  function chapterHeader(eyebrow, title, subtitle) {
    const currentProgress = progress();
    const prefix = config.routePrefix;
    return `<header class="rosen-ch1-hero"><div><span class="rosen-ch1-kicker">${escapeHTML(eyebrow)}</span><h1>${escapeHTML(title)}</h1><p>${escapeHTML(subtitle)}</p></div><div class="rosen-ch1-progress-card" aria-label="Chapter practice progress"><strong>${currentProgress.completed}<span> / ${currentProgress.total}</span></strong><span>exercises completed</span><progress max="${currentProgress.total}" value="${currentProgress.completed}">${currentProgress.percent}%</progress><small>${currentProgress.attempted} in progress · ${currentProgress.sectionsStudied}/${currentProgress.totalSections} sections marked studied</small></div></header><nav class="rosen-ch1-route-nav" aria-label="Chapter routes"><a href="#${prefix}">Chapter map</a>${content().sections.map((section, index) => `<a href="#${sectionRoute(index)}" ${routeId() === sectionRoute(index) ? 'aria-current="page"' : ''}>${section.number}</a>`).join('')}<a href="#${prefix}-review" ${routeId() === `${prefix}-review` ? 'aria-current="page"' : ''}>Review</a><a href="#${prefix}-projects" ${routeId() === `${prefix}-projects` ? 'aria-current="page"' : ''}>Projects</a></nav>`;
  }
  function renderOverview() {
    const inventory = content().inventory;
    return `${chapterHeader(config.overviewEyebrow, content().title, config.overviewSubtitle)}${m2ePanel(null)}<section class="rosen-ch1-map" aria-labelledby="rosen-ch1-map-title"><div class="rosen-ch1-section-title"><span class="rosen-ch1-kicker">CHAPTER MAP</span><h2 id="rosen-ch1-map-title">${escapeHTML(config.overviewMapTitle || `${sectionCount()} sections. One reasoning toolkit.`)}</h2></div><div class="rosen-ch1-map-grid">${content().sections.map((section, index) => { const counts = sectionCounts(section.number); return `<a class="rosen-ch1-map-card" href="#${config.routePrefix}-s${index + 1}"><span>${section.number} · printed ${section.source.printedPageStart}–${section.source.printedPageEnd}</span><h3>${escapeHTML(section.title)}</h3><p>${section.subsections.length} subsections · ${counts.total} exercises</p><strong>${counts.completed} completed · Open section →</strong></a>`; }).join('')}</div></section><section class="rosen-ch1-inventory" aria-labelledby="rosen-ch1-inventory-title"><h2 id="rosen-ch1-inventory-title">Complete chapter inventory</h2><dl>${[['Sections', inventory.sections], ['Subsections', inventory.subsections], ['Examples', inventory.examples], ['Worked solutions', inventory.exampleSolutions], ['Definitions', inventory.definitions], ['Tables', inventory.tables], ['Figures', inventory.figures], ['Biographies', inventory.biographies], ['Remarks', inventory.remarks], ['Exercises', inventory.totalExercises], ['Key terms', inventory.keyTerms], ['Source pages', inventory.pageAssets]].map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl><p>Every display block is rendered in its source section. Original scans remain available for exact notation and visual layout.</p></section><section class="rosen-ch1-introduction"><h2>Chapter opening</h2>${content().introduction.blocks.map(renderBlock).join('')}</section><nav class="rosen-ch1-end-links" aria-label="End matter"><a href="#${config.routePrefix}-review"><strong>Review & synthesis</strong><span>${inventory.reviewQuestions} review questions · ${inventory.supplementaryExercises} supplementary exercises · key terms and results</span></a><a href="#${config.routePrefix}-projects"><strong>Projects & exploration</strong><span>${inventory.computerProjects} computer projects · ${inventory.computationsAndExplorations} explorations · ${inventory.writingProjects} writing projects</span></a></nav>`;
  }

  function exerciseParts(answer) {
    return answer && Array.isArray(answer.parts) && answer.parts.length ? answer.parts : (answer ? [answer] : []);
  }
  function partMode(answer, part) {
    return part.mode || (answer && answer.mode) || 'rubric';
  }
  function resultFor(id) {
    return store.results[id] || { status: 'unanswered', parts: {}, messages: {} };
  }
  function overallResult(answer, parts) {
    if (!parts.length) return 'unanswered';
    if (parts.every((part) => part === 'correct' || part === 'self-checked')) {
      return parts.some((part) => part === 'self-checked') ? 'self-checked' : 'correct';
    }
    return 'attempted';
  }
  function renderExercise(exercise, answers) {
    const answer = answers.get(exercise.id);
    const parts = exerciseParts(answer);
    const result = resultFor(exercise.id);
    const status = exerciseStatus(exercise.id);
    const draft = store.drafts[exercise.id] || {};
    const hintCount = store.hints[exercise.id] || 0;
    const hints = answer ? [...(answer.hints || []), ...parts.flatMap((part) => part.hints || [])] : [];
    const revealed = Boolean(store.revealed[exercise.id]);
    const contexts = exercise.contextIds.map((id) => content().exerciseSets.flatMap((set) => set.contexts).find((context) => context.id === id)).filter(Boolean);
    const visual = content().artifacts.exerciseVisuals.find((item) => item.exerciseId === exercise.id);
    const set = content().exerciseSets.find((item) => item.id === exercise.setId);
    return `<article class="rosen-ch1-exercise" id="${escapeHTML(exercise.id)}" data-exercise-id="${escapeHTML(exercise.id)}"><header><div><span class="rosen-ch1-kicker">${escapeHTML(set ? set.title : exercise.set)}</span><h4>Exercise ${exercise.number}${exercise.stars ? ` · ${'★'.repeat(exercise.stars)}` : ''}</h4></div><span class="rosen-ch1-status rosen-ch1-status-${status}">${status}</span></header>${contexts.map((context) => `<aside class="rosen-ch1-context"><strong>Shared instructions</strong><p>${escapeHTML(context.text)}</p>${sourceDetails(context.source, 'Shared exercise instructions')}</aside>`).join('')}<p class="rosen-ch1-prompt">${escapeHTML(exercise.prompt)}</p>${visual ? `<aside class="rosen-ch1-visual-note">${escapeHTML(visual.description)}${sourceDetails(visual.source, 'Exercise visual')}</aside>` : ''}${!answer ? '<p class="rosen-ch1-unavailable" role="note"><strong>Answer not authored yet.</strong> Your draft is saved, but automatic checking, hints, and the model solution are unavailable. Nothing will be marked correct.</p>' : ''}<div class="rosen-ch1-answer-parts">${answer ? parts.map((part, index) => {
      const mode = partMode(answer, part);
      const partResult = result.parts[index] || '';
      const label = parts.length > 1 ? `Part ${part.label || index + 1}` : (mode === 'rubric' ? 'Your proof or written answer' : 'Your answer');
      const partHints = [...(answer.hints || []), ...(part.hints || [])];
      return `<section class="rosen-ch1-part" data-part-index="${index}"><label for="${escapeHTML(exercise.id)}-part-${index}">${escapeHTML(label)} <span>${mode === 'rubric' ? 'model-answer review' : `${part.checker || answer.checker || 'text'} check`}</span></label><textarea id="${escapeHTML(exercise.id)}-part-${index}" rows="${mode === 'rubric' ? 5 : 3}" data-rosen-draft="${escapeHTML(exercise.id)}" data-part="${index}" placeholder="${mode === 'rubric' ? 'Write the complete reasoning; string matching is not used.' : 'Enter a concise mathematical answer.'}">${escapeHTML(draft[index] || '')}</textarea>${partResult ? `<p class="rosen-ch1-feedback rosen-ch1-feedback-${escapeHTML(partResult)}" role="status">${escapeHTML((result.messages && result.messages[index]) || (partResult === 'self-checked' ? 'Self-assessment confirmed against the model answer.' : partResult))}</p>` : ''}${revealed ? `<div class="rosen-ch1-model"><strong>Model answer</strong><p>${escapeHTML(part.answer || answer.answer)}</p><strong>Worked solution</strong><p>${escapeHTML(part.solution || answer.solution)}</p>${part.readAloud || answer.readAloud ? `<p><strong>Read aloud:</strong> ${escapeHTML(part.readAloud || answer.readAloud)}</p>` : ''}${mode === 'rubric' ? `<fieldset class="rosen-ch1-rubric" data-rubric="${escapeHTML(exercise.id)}" data-part="${index}"><legend>Explicit self-check · credit is yours to confirm</legend>${(part.rubric || answer.rubric || ['My response contains the essential reasoning in the model solution.']).map((criterion, criterionIndex) => `<label><input type="checkbox" data-rosen-rubric-check> <span>${escapeHTML(criterion)}</span></label>`).join('')}<button type="button" data-rosen-action="self-check" data-id="${escapeHTML(exercise.id)}" data-part="${index}" disabled>I have checked every criterion; confirm my self-assessment</button></fieldset>` : ''}</div>` : ''}${partHints.length && hintCount ? '' : ''}</section>`;
    }).join('') : `<label for="${escapeHTML(exercise.id)}-draft">Your saved working</label><textarea id="${escapeHTML(exercise.id)}-draft" rows="4" data-rosen-draft="${escapeHTML(exercise.id)}" data-part="0">${escapeHTML(draft[0] || '')}</textarea>`}</div><div class="rosen-ch1-actions"><button type="button" data-rosen-action="${answer && parts.every((part) => partMode(answer, part) === 'rubric') ? 'reveal' : 'check'}" data-id="${escapeHTML(exercise.id)}" ${!answer ? 'disabled' : ''}>${!answer ? 'Checking unavailable' : parts.every((part) => partMode(answer, part) === 'rubric') ? 'Review model answer' : 'Check answer'}</button><button type="button" data-rosen-action="hint" data-id="${escapeHTML(exercise.id)}" ${!hints.length ? 'disabled' : ''}>${hintCount ? `Hint ${Math.min(hintCount, hints.length)}/${hints.length}` : 'Show a hint'}</button><button type="button" data-rosen-action="reveal" data-id="${escapeHTML(exercise.id)}" ${!answer ? 'disabled' : ''}>${revealed ? 'Hide model solution' : 'Reveal solution'}</button></div>${hintCount && hints.length ? `<ol class="rosen-ch1-hints" aria-label="Hints">${hints.slice(0, hintCount).map((hint) => `<li>${escapeHTML(hint)}</li>`).join('')}</ol>` : ''}${answer && revealed && !parts.length ? `<div class="rosen-ch1-model"><p>${escapeHTML(answer.answer)}</p><p>${escapeHTML(answer.solution)}</p></div>` : ''}${answer && (answer.startHere || answer.verify) ? `<details class="rosen-ch1-study-method"><summary>Manual study method</summary>${answer.startHere ? `<p><strong>Start here:</strong> ${escapeHTML(answer.startHere)}</p>` : ''}${answer.verify ? `<p><strong>Verify independently:</strong> ${escapeHTML(answer.verify)}</p>` : ''}</details>` : ''}${sourceDetails(exercise.source, `Exercise ${exercise.number}`)}</article>`;
  }
  function filteredExercises(set, config) {
    const query = normalizeText(config.query);
    return set.exerciseIds.map((id) => exercises().find((exercise) => exercise.id === id)).filter(Boolean).filter((exercise) => {
      if (config.difficulty !== 'all' && exercise.difficulty !== config.difficulty) return false;
      if (config.status !== 'all' && exerciseStatus(exercise.id) !== config.status) return false;
      if (query && !normalizeText(exercise.prompt).includes(query) && !String(exercise.number).includes(query)) return false;
      return true;
    });
  }
  function renderExerciseSet(set, answers) {
    const config = setUI(set.id);
    const filtered = filteredExercises(set, config);
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    config.page = Math.min(Math.max(1, config.page), pages);
    const start = (config.page - 1) * PAGE_SIZE;
    const visible = filtered.slice(start, start + PAGE_SIZE);
    const completed = set.exerciseIds.filter((id) => exerciseStatus(id) === 'completed').length;
    return `<section class="rosen-ch1-exercise-set" id="${escapeHTML(set.id)}" aria-labelledby="${escapeHTML(set.id)}-title"><div class="rosen-ch1-set-heading"><div><span class="rosen-ch1-kicker">PRACTICE SET · ${completed}/${set.count} COMPLETE</span><h2 id="${escapeHTML(set.id)}-title">${escapeHTML(set.title)}</h2></div><span>Up to ${PAGE_SIZE} exercises per page</span></div><div class="rosen-ch1-filters" data-set="${escapeHTML(set.id)}"><label>Search exercises<input type="search" data-rosen-filter="query" data-set="${escapeHTML(set.id)}" value="${escapeHTML(config.query)}" placeholder="Words or exercise number"></label><label>Difficulty<select data-rosen-filter="difficulty" data-set="${escapeHTML(set.id)}">${[['all', 'All levels'], ['standard', 'Standard'], ['challenging', 'Challenging'], ['very-challenging', 'Very challenging']].map(([value, label]) => `<option value="${value}" ${config.difficulty === value ? 'selected' : ''}>${label}</option>`).join('')}</select></label><label>Progress<select data-rosen-filter="status" data-set="${escapeHTML(set.id)}">${[['all', 'All progress'], ['unanswered', 'Unanswered'], ['attempted', 'In progress'], ['completed', 'Completed']].map(([value, label]) => `<option value="${value}" ${config.status === value ? 'selected' : ''}>${label}</option>`).join('')}</select></label><button type="button" data-rosen-action="clear-filters" data-set="${escapeHTML(set.id)}">Clear filters</button></div><p class="rosen-ch1-filter-summary" role="status">${filtered.length} matching exercise${filtered.length === 1 ? '' : 's'} · page ${config.page} of ${pages}</p><div class="rosen-ch1-exercise-list">${visible.length ? visible.map((exercise) => renderExercise(exercise, answers)).join('') : '<p class="rosen-ch1-empty">No exercises match these filters. Clear a filter or try another search.</p>'}</div>${pages > 1 ? `<nav class="rosen-ch1-pagination" aria-label="${escapeHTML(set.title)} pages"><button type="button" data-rosen-action="page" data-set="${escapeHTML(set.id)}" data-page="${config.page - 1}" ${config.page === 1 ? 'disabled' : ''}>← Previous</button><span>Page ${config.page} / ${pages}</span><button type="button" data-rosen-action="page" data-set="${escapeHTML(set.id)}" data-page="${config.page + 1}" ${config.page === pages ? 'disabled' : ''}>Next →</button></nav>` : ''}</section>`;
  }
  function renderSection(section, index, answers) {
    const set = content().exerciseSets.find((item) => item.id === section.exerciseSetId);
    const hasNext = index < content().sections.length - 1;
    return `${chapterHeader(`SECTION ${section.number} · PRINTED PAGES ${section.source.printedPageStart}–${section.source.printedPageEnd}`, section.title, `${section.subsections.length} subsections · ${sectionCounts(section.number).total} exercises · one active section rendered at a time`)}${m2ePanel(section)}<label class="rosen-ch1-studied"><input type="checkbox" data-rosen-section-done="${escapeHTML(section.number)}" ${store.sections[section.number] ? 'checked' : ''}> I have studied this section and can reproduce its core method on paper.</label><div class="rosen-ch1-reader-layout"><nav class="rosen-ch1-subsection-nav" aria-label="Section ${section.number} subsections">${section.subsections.map((subsection) => `<button type="button" data-rosen-action="jump" data-target="${escapeHTML(subsection.id)}">${escapeHTML(subsection.number)} ${escapeHTML(subsection.title)}</button>`).join('')}</nav><div class="rosen-ch1-narrative">${section.blocks.map(renderBlock).join('')}${section.subsections.map((subsection) => `<section class="rosen-ch1-subsection" aria-label="${escapeHTML(subsection.number)} ${escapeHTML(subsection.title)}">${subsection.blocks.map(renderBlock).join('')}</section>`).join('')}</div></div>${set ? renderExerciseSet(set, answers) : ''}<nav class="rosen-ch1-next" aria-label="Adjacent chapter routes"><a href="${index ? `#${sectionRoute(index - 1)}` : `#${config.routePrefix}`}">← ${index ? `Section ${content().sections[index - 1].number}` : 'Chapter map'}</a><a href="${hasNext ? `#${sectionRoute(index + 1)}` : `#${config.routePrefix}-review`}">${hasNext ? `Section ${content().sections[index + 1].number}` : 'Review & synthesis'} →</a></nav>`;
  }
  function renderEndMatter(kind, answers) {
    const review = kind === 'review';
    const sets = content().exerciseSets.filter((set) => review ? ['review', 'supplementary'].includes(set.set) : ['computer-projects', 'computations-explorations', 'writing-projects'].includes(set.set));
    const endBlocks = content().endMatter.blocks;
    const reviewBlocks = `<section class="rosen-ch1-end-matter">${endBlocks.filter((block) => ['end-matter-heading', 'terms-heading'].includes(block.kind)).map(renderBlock).join('')}<dl>${endBlocks.filter((block) => block.kind === 'key-term').map(renderBlock).join('')}</dl>${endBlocks.filter((block) => block.kind === 'results-heading').map(renderBlock).join('')}<ol>${content().endMatter.resultGroups.map(renderBlock).join('')}</ol></section>`;
    const lastSection = content().sections[content().sections.length - 1];
    return `${chapterHeader(review ? 'END MATTER · REVIEW & SYNTHESIS' : 'END MATTER · PROJECTS & EXPLORATION', review ? 'Review the language. Test the reasoning.' : 'Build, explore, and explain.', review ? 'Key terms and results, review questions, and supplementary exercises—with drafts and checking kept local.' : 'Open-ended work remains honest: authored rubrics use model answers and explicit self-assessment, never prose string matching.')}${review ? reviewBlocks : m2ePanel(null)}${sets.map((set) => renderExerciseSet(set, answers)).join('')}<nav class="rosen-ch1-next"><a href="${review ? `#${sectionRoute(content().sections.length - 1)}` : `#${config.routePrefix}-review`}">← ${review ? `Section ${lastSection.number}` : 'Review & synthesis'}</a><a href="${review ? `#${config.routePrefix}-projects` : `#${config.routePrefix}`}">${review ? 'Projects & exploration' : 'Chapter map'} →</a></nav>`;
  }
  function setupDelegated(host) {
    const delegatedKey = config.delegatedKey || `rosenCh${config.chapterNumber}Delegated`;
    const owns = (target) => {
      const reader = target.closest && target.closest('.rosen-ch1-reader');
      return reader && reader.dataset.rosenChapter === config.routePrefix;
    };
    if (host.dataset[delegatedKey] === 'true') return;
    host.dataset[delegatedKey] = 'true';
    host.addEventListener('input', (event) => {
      const target = event.target;
      if (!owns(target)) return;
      if (target.matches('[data-rosen-draft]')) {
        const id = target.dataset.rosenDraft, part = target.dataset.part || '0';
        if (!store.drafts[id]) store.drafts[id] = {};
        store.drafts[id][part] = target.value;
        saveStore();
      } else if (target.matches('[data-rosen-example-draft]')) {
        const id = target.dataset.rosenExampleDraft;
        store.examples[id] = { attempted: false, hint: false, steps: 0, draft: '', ...(store.examples[id] || {}), draft: target.value };
        saveStore();
      } else if (target.matches('[data-rosen-filter="query"]')) {
        const config = setUI(target.dataset.set);
        config.query = target.value; config.page = 1;
        render();
        const replacement = host.querySelector(`[data-rosen-filter="query"][data-set="${target.dataset.set}"]`);
        if (replacement) { replacement.focus(); replacement.setSelectionRange(replacement.value.length, replacement.value.length); }
      }
    });
    host.addEventListener('change', (event) => {
      const target = event.target;
      if (!owns(target)) return;
      if (target.matches('[data-rosen-filter="difficulty"],[data-rosen-filter="status"]')) {
        const config = setUI(target.dataset.set);
        config[target.dataset.rosenFilter] = target.value; config.page = 1;
        render();
      } else if (target.matches('[data-rosen-section-done]')) {
        store.sections[target.dataset.rosenSectionDone] = target.checked;
        saveStore(); render();
      } else if (target.matches('[data-rosen-rubric-check]')) {
        const fieldset = target.closest('[data-rubric]');
        const checks = [...fieldset.querySelectorAll('[data-rosen-rubric-check]')];
        fieldset.querySelector('[data-rosen-action="self-check"]').disabled = !checks.every((check) => check.checked);
      }
    });
    host.addEventListener('click', (event) => {
      const button = event.target.closest ? event.target.closest('[data-rosen-action]') : null;
      if (!button || !owns(button) || button.disabled) return;
      const action = button.dataset.rosenAction;
      const id = button.dataset.id;
      if (action === 'translate') {
        const panel = button.closest('.rosen-ch1-m2e');
        const value = panel.querySelector('[data-rosen-notation-input]').value;
        panel.querySelector('[data-rosen-translation]').textContent = translateNotation(value) || 'Enter notation to translate.';
        return;
      }
      if (action === 'page') {
        const config = setUI(button.dataset.set);
        config.page = Number(button.dataset.page);
        render();
        const heading = host.querySelector(`#${button.dataset.set}-title`);
        if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); }
        return;
      }
      if (action === 'clear-filters') {
        ui.sets[button.dataset.set] = { query: '', difficulty: 'all', status: 'all', page: 1 };
        render(); return;
      }
      if (action === 'jump') {
        const target = global.document.getElementById(button.dataset.target);
        if (!target) return;
        const reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const allowMotion = typeof motion !== 'undefined' ? motion : !reduced;
        target.scrollIntoView({ behavior: allowMotion && !reduced ? 'smooth' : 'instant', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        return;
      }
      if (action.startsWith('example-')) {
        const state = store.examples[id] || { attempted: false, hint: false, steps: 0, draft: '' };
        const block = content().artifacts.examples.find((example) => example.id === id);
        if (action === 'example-attempt') state.attempted = true;
        if (action === 'example-hint') state.hint = !state.hint;
        if (action === 'example-step') {
          const total = solutionSteps(block.solution).length;
          state.steps = state.steps >= total ? 1 : state.steps + 1;
        }
        store.examples[id] = state; saveStore(); render();
        const next = host.querySelector(`[data-rosen-action="${action}"][data-id="${id}"]`);
        if (next) next.focus();
        return;
      }
      const answers = answerMap(), answer = answers.get(id);
      if (!answer) return;
      const parts = exerciseParts(answer);
      if (!store.results[id]) store.results[id] = { status: 'unanswered', parts: {}, messages: {} };
      const result = store.results[id];
      if (action === 'hint') {
        const hints = [...(answer.hints || []), ...parts.flatMap((part) => part.hints || [])];
        store.hints[id] = Math.min((store.hints[id] || 0) + 1, hints.length);
      } else if (action === 'reveal') {
        store.revealed[id] = !store.revealed[id];
      } else if (action === 'check') {
        const draft = store.drafts[id] || {};
        parts.forEach((part, index) => {
          if (partMode(answer, part) === 'rubric') {
            if (!result.parts[index]) { result.parts[index] = 'review'; result.messages[index] = 'Reveal the model answer and complete every self-check criterion.'; }
          } else {
            const checked = checkAuto(draft[index] || '', { ...answer, ...part, mode: partMode(answer, part) });
            result.parts[index] = checked.status;
            result.messages[index] = checked.message;
          }
        });
        result.status = overallResult(answer, Object.values(result.parts));
        if (parts.some((part) => partMode(answer, part) === 'rubric')) store.revealed[id] = true;
      } else if (action === 'self-check') {
        const index = Number(button.dataset.part);
        result.parts[index] = 'self-checked';
        result.messages[index] = 'Self-assessment confirmed against every rubric criterion.';
        result.status = overallResult(answer, parts.map((_, partIndex) => result.parts[partIndex] || 'review'));
      }
      saveStore(); render();
      const focusTarget = host.querySelector(`[data-rosen-action="${action}"][data-id="${id}"]`) || host.querySelector(`#${id}`);
      if (focusTarget) { if (!focusTarget.matches('button,input,textarea,a')) focusTarget.setAttribute('tabindex', '-1'); focusTarget.focus(); }
    });
  }
  function render() {
    const host = global.document && global.document.querySelector(config.hostSelector || '#main');
    const data = content();
    if (!host || !data) return false;
    store = loadStore();
    const id = routeId();
    const answers = answerMap();
    let body;
    if (id === config.routePrefix) body = renderOverview();
    else if (id === `${config.routePrefix}-review`) body = renderEndMatter('review', answers);
    else if (id === `${config.routePrefix}-projects`) body = renderEndMatter('projects', answers);
    else {
      const section = sectionForRoute(id);
      const index = data.sections.indexOf(section);
      body = renderSection(section, index, answers);
    }
    host.innerHTML = `<div class="rosen-ch1-reader" data-rosen-chapter="${escapeHTML(config.routePrefix)}" data-route="${escapeHTML(id)}">${body}</div>`;
    global.document.title = `${id === config.routePrefix ? data.title : id === `${config.routePrefix}-review` ? `Chapter ${config.chapterNumber} Review` : id === `${config.routePrefix}-projects` ? `Chapter ${config.chapterNumber} Projects` : `${sectionForRoute(id).number} ${sectionForRoute(id).title}`} · Rosen · Study Lab`;
    const courseLabel = global.document.querySelector('#course-label');
    if (courseLabel) courseLabel.textContent = config.courseLabel;
    setupDelegated(host);
    return true;
  }

    const checker = Object.freeze({
      normalizeText, parseNumber, checkNumber, canonicalSet, checkSet, checkTruth,
      parseLogic, checkLogic, checkAuto, translateNotation,
    });
    return Object.freeze({ route, render, progress, checker });
  }

  const chapter1 = createRosenChapter({
    chapterNumber: 1,
    routePrefix: 'comp232-rosen-ch1',
    storageKey: 'comp232-rosen-ch1-v1',
    sectionCount: 8,
    courseLabel: 'COMP 232 / ROSEN CHAPTER 1',
    overviewEyebrow: 'COMP 232 · ROSEN, EIGHTH EDITION · CHAPTER 1',
    overviewMapTitle: 'Eight sections. One reasoning toolkit.',
    content: () => (typeof ROSEN_CH1_CONTENT !== 'undefined' ? ROSEN_CH1_CONTENT : null),
    exercises: () => (typeof ROSEN_CH1_EXERCISES !== 'undefined' ? ROSEN_CH1_EXERCISES : []),
    answers: () => (typeof ROSEN_CH1_ANSWERS !== 'undefined' ? ROSEN_CH1_ANSWERS : []),
    m2eExpression: (section, number) => number === '1.4' ? '∀x ∃y (P(x,y) → Q(x,y))' : number === '1.5' ? '∃y ∀x (x + y = 0)' : '¬p ∧ (p ∨ q) → q',
    sectionHints: {
      '1.1': 'Name each proposition first. Translate one connective at a time, then check the truth conditions.',
      '1.2': 'Write the atomic statements separately before translating the sentence or circuit.',
      '1.3': 'Choose an equivalence law for each rewrite. For a non-equivalence, find one counterexample row.',
      '1.4': 'State the domain, predicate, variable, and quantifier before forming the English sentence.',
      '1.5': 'Read quantifiers from left to right. Ask which later variables are allowed to depend on earlier ones.',
      '1.6': 'Match the premises to an inference-rule pattern, then justify every conclusion line.',
      '1.7': 'Identify the statement form and choose direct, contrapositive, or contradiction reasoning before writing.',
      '1.8': 'Try a small case, look for structure or an invariant, and audit the proof’s domain and edge cases.',
      review: 'Define every symbol, make a small truth table or example, and justify each inference by name.',
      projects: 'Specify inputs and outputs first, then test boundary cases and explain the method independently.',
    },
  });
  const chapter2 = createRosenChapter({
    chapterNumber: 2,
    routePrefix: 'comp232-rosen-ch2',
    storageKey: 'comp232-rosen-ch2-v1',
    sectionCount: 6,
    courseLabel: 'COMP 232 / ROSEN CHAPTER 2',
    overviewEyebrow: 'COMP 232 · ROSEN, EIGHTH EDITION · CHAPTER 2',
    content: () => (typeof ROSEN_CH2_CONTENT !== 'undefined' ? ROSEN_CH2_CONTENT : null),
    exercises: () => (typeof ROSEN_CH2_EXERCISES !== 'undefined' ? ROSEN_CH2_EXERCISES : []),
    answers: () => (typeof ROSEN_CH2_ANSWERS !== 'undefined' ? ROSEN_CH2_ANSWERS : []),
  });

  global.createRosenChapter = createRosenChapter;
  global.RosenChapterEngine = Object.freeze({ create: createRosenChapter });
  global.rosenCh1Route = chapter1.route;
  global.renderRosenCh1 = chapter1.render;
  global.rosenCh1Progress = chapter1.progress;
  global.rosenCh1Checker = chapter1.checker;
  global.rosenCh2Route = chapter2.route;
  global.renderRosenCh2 = chapter2.render;
  global.rosenCh2Progress = chapter2.progress;
  global.rosenCh2Checker = chapter2.checker;
})(typeof window !== 'undefined' ? window : globalThis);
