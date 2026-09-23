'use strict';

const DASHBOARD_SOURCE_DATE='23 September 2026';

const DASHBOARD_COURSES=[
 {code:'COMP 248',title:'Object-Oriented Programming I',credits:'3.5',group:'Complementary core',tone:'violet',schedule:'Mon lecture · Wed tutorial · Mon lab',moodle:'https://moodle.concordia.ca/moodle/course/view.php?id=190225',resources:[]},
 {code:'ELEC 275',title:'Principles of Electrical Engineering',credits:'3.5',group:'Engineering core',tone:'purple',schedule:'Tue/Thu lecture · Wed tutorial · Fri lab',moodle:'https://moodle.concordia.ca/moodle/course/view.php?id=190957',resources:[['Lecture Notes','#elec275-lectures'],['Textbook Notes','#elec275-notes'],['Quiz desk','#quiz']]},
 {code:'ENGR 213',title:'Applied Ordinary Differential Equations',credits:'3',group:'Engineering core',tone:'green',schedule:'Tue/Thu lecture · Mon tutorial',moodle:'https://moodle.concordia.ca/moodle/course/view.php?id=190352',resources:[['Lecture Notes','#engr-notes'],['Practice desk','#engr213']]},
 {code:'INSE 201',title:'Security Ethics, Laws, Standards and Compliance',credits:'1.5',group:'Cybersecurity core',tone:'amber',schedule:'Tue lecture',moodle:'https://moodle.concordia.ca/moodle/course/view.php?id=191028',resources:[]},
 {code:'COMP 232',title:'Mathematics for Computer Science',credits:'3',group:'Complementary core',tone:'indigo',schedule:'Tue/Thu lecture · Thu tutorial',moodle:'https://moodle.concordia.ca/moodle/course/view.php?id=190079',resources:[['Lecture Notes','#comp232-notes'],['Week 3','#comp232-week-3']]}
];

const DASHBOARD_WEEK=[
 {day:'Monday',date:'21 Sep',sessions:[['10:15–13:00','COMP 248','Lecture','H 531','violet'],['13:15–14:55','ENGR 213','Tutorial','H 557','green'],['19:45–20:45','COMP 248','Laboratory','H 811','violet']]},
 {day:'Tuesday',date:'22 Sep',sessions:[['08:45–10:00','ELEC 275','Lecture','EV 2.260','purple'],['10:15–11:30','ENGR 213','Lecture','MB 1.210','green'],['14:45–16:00','INSE 201','Lecture','H 110','amber'],['16:15–17:30','COMP 232','Lecture','FB S150','indigo']]},
 {day:'Wednesday',date:'23 Sep',today:true,sessions:[['10:15–12:05','COMP 248','Tutorial','H 907','violet'],['14:45–16:25','ELEC 275','Tutorial','H 513','purple']]},
 {day:'Thursday',date:'24 Sep',sessions:[['08:45–10:00','ELEC 275','Lecture','EV 2.260','purple'],['10:15–11:30','ENGR 213','Lecture','MB 1.210','green'],['16:15–17:30','COMP 232','Lecture','FB S150','indigo'],['20:30–22:10','COMP 232','Tutorial','H 565','indigo']]},
 {day:'Friday',date:'25 Sep',sessions:[['14:45–17:30','ELEC 275','Laboratory','H 832-6','purple']]}
];

const DASHBOARD_TERMS=[
 {id:'fall-2026',year:'Y1',label:'Fall 2026',kind:'Study',credits:'14.5',courses:[['COMP 248','Object-Oriented Programming I','3.5'],['ELEC 275','Principles of Electrical Engineering','3.5'],['ENGR 213','Applied Ordinary Differential Equations','3'],['INSE 201','Security Ethics, Laws, Standards and Compliance','1.5'],['COMP 232','Mathematics for Computer Science','3']]},
 {id:'winter-2027',year:'Y1',label:'Winter 2027',kind:'Study',courses:[['ENGR 233','Applied Advanced Calculus','3'],['H/SS','General Education Humanities/Social Sciences Elective','3'],['INSE 221','Cryptography I','3'],['COMP 249','Object-Oriented Programming II','3.5'],['GROUP','ENGR 245 or MIAE 221','3']]},
 {id:'summer-2027',year:'Y2',label:'Summer 2027',kind:'Study',courses:[['ENGR 201','Professional Practice and Responsibility','1.5'],['ENGR 371','Probability and Statistics in Engineering','3'],['INSE 349','Secure Programming and Software Design','3'],['COMP 352','Data Structures and Algorithms','3'],['SOEN 228','System Hardware','4']]},
 {id:'fall-2027',year:'Y2',label:'Fall 2027',kind:'Co-op',work:'Co-op Work Term 1'},
 {id:'winter-2028',year:'Y2',label:'Winter 2028',kind:'Study',courses:[['ENGR 202','Sustainable Development and Environmental Stewardship','1.5'],['ENGR 391','Numerical Methods in Engineering','3'],['COMP 346','Operating Systems','4'],['INSE 386','Cybersecurity Management and Governance','3'],['ENCS 282','Technical Writing and Communication','3']]},
 {id:'summer-2028',year:'Y3',label:'Summer 2028',kind:'Study',courses:[['INSE 331','Database Security','3'],['INSE 351','Operating System Security','3'],['INSE 387','AI and Machine Learning in Cybersecurity','3'],['INSE 401','Usability and Human Aspects of Security','3'],['COMP 445','Data Communication and Computer Networks','4']]},
 {id:'fall-2028',year:'Y3',label:'Fall 2028',kind:'Study',courses:[['ENGR 301','Engineering Management Principles and Economics','3'],['INSE 390','Cybersecurity Engineering Team Design Project','3'],['INSE 445','Network Security','3'],['INSE 442','Reverse Engineering and Malware Analysis','3'],['INSE 413','Security Auditing and Compliance','3']]},
 {id:'winter-2029',year:'Y3',label:'Winter 2029',kind:'Co-op',work:'Co-op Work Term 2'},
 {id:'summer-2029',year:'Y4',label:'Summer 2029',kind:'Co-op',work:'Co-op Work Term 3'},
 {id:'fall-2029',year:'Y4',label:'Fall 2029',kind:'Study',courses:[['INSE 441','Mobile Security and Privacy','3'],['INSE 412','Cybercrime and Digital Forensics','3'],['INSE 48x','Cybersecurity Engineering Elective 1','3'],['INSE 48x','Cybersecurity Engineering Elective 2','3'],['INSE 490','Capstone Design Project · Part 1','3']]},
 {id:'winter-2030',year:'Y4',label:'Winter 2030',kind:'Study',courses:[['ENGR 392','Impact of Technology on Society','3'],['INSE 452','Penetration Testing and Ethical Hacking','3'],['INSE 48x','Cybersecurity Engineering Elective 3','3'],['INSE 48x','Cybersecurity Engineering Elective 4','3'],['INSE 490','Capstone Design Project · Part 2','3']]}
];

const DASHBOARD_MODULES=[
 {course:'COMP 232',title:'Week 3 · Rules of Inference',meta:'Lecture Notes · Rosen §1.6',href:'#comp232-week-3',tone:'indigo'},
 {course:'ELEC 275',title:'Circuit Fundamentals',meta:'Lecture 1 · seven teaching cards',href:'#elec275-lecture-1',tone:'purple'},
 {course:'ELEC 275',title:'Chapter 1 · Foundations',meta:'Textbook Notes · nine objectives',href:'#elec275-ch-1',tone:'purple'},
 {course:'ENGR 213',title:'Lecture Notes',meta:'Lectures 1–3 · differential equations',href:'#engr-notes',tone:'green'},
 {course:'ENGR 213',title:'Quiz practice desk',meta:'Ten worked problems · recall checks',href:'#engr213',tone:'green'},
 {course:'ELEC 275',title:'Quiz practice desk',meta:'Five problems · two solution paths',href:'#quiz',tone:'purple'}
];

let dashboardView='overview';
let dashboardTerm='fall-2026';

function dashboardIcon(name){
 const icons={
  home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h2M14 14h2M8 18h2"/>',
  route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h3a3 3 0 0 0 3-3V8a3 3 0 0 1 3-3"/>',
  books:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  brain:'<path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5V4.5ZM14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5V4.5Z"/><path d="M9.5 9H7M14.5 12H17M9.5 17v3M14.5 17v3"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  external:'<path d="M15 3h6v6M10 14 21 3M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  source:'<path d="M7 3h10v4H7zM5 7h14v14H5z"/><path d="M9 11h6M9 15h6M9 19h4"/>'
 };
 return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.home}</svg>`;
}

function dashboardCourseCards(){
 return DASHBOARD_COURSES.map(course=>`<article class="dashboard-course-card tone-${course.tone}" data-course="${course.code}" data-search-text="${course.code} ${course.title} ${course.group}"><div class="dashboard-course-head"><span class="dashboard-course-code">${course.code}</span><span>${course.credits} cr</span></div><h3>${course.title}</h3><p>${course.group}</p><div class="dashboard-course-schedule">${course.schedule}</div><div class="dashboard-card-actions">${course.resources.slice(0,2).map(([label,href])=>`<a href="${href}">${label}</a>`).join('')}<a href="${course.moodle}" target="_blank" rel="noopener">Moodle ${dashboardIcon('external')}</a></div></article>`).join('');
}

function dashboardWeek(){
 return DASHBOARD_WEEK.map(day=>`<section class="dashboard-day ${day.today?'is-today':''}" aria-label="${day.day} ${day.date}"><header><span>${day.day}</span><strong>${day.date}</strong></header><div class="dashboard-day-events">${day.sessions.map(([time,course,type,room,tone])=>`<article class="dashboard-event tone-${tone}"><span class="dashboard-event-time">${time}</span><strong>${course}</strong><span>${type}</span><small>${room}</small></article>`).join('')}</div></section>`).join('');
}

function dashboardTermStops(){
 return DASHBOARD_TERMS.map(term=>`<button type="button" class="dashboard-term-stop ${term.kind==='Co-op'?'is-work':''} ${term.id===dashboardTerm?'is-active':''}" data-term="${term.id}" aria-pressed="${term.id===dashboardTerm}"><span>${term.year}</span><strong>${term.label.replace(' 20',' ’')}</strong><small>${term.kind}</small></button>`).join('');
}

function dashboardTermDetail(id=dashboardTerm){
 const term=DASHBOARD_TERMS.find(item=>item.id===id)||DASHBOARD_TERMS[0];
 if(term.kind==='Co-op')return `<div class="dashboard-term-detail is-work"><div><span class="dashboard-kicker">${term.year} · ${term.label}</span><h2>${term.work}</h2><p>Dedicated paid work term in the official September-entry sequence. The following study term resumes in ${DASHBOARD_TERMS[DASHBOARD_TERMS.indexOf(term)+1]?.label||'the next academic session'}.</p></div><div class="dashboard-work-mark">CO-OP</div></div>`;
 return `<div class="dashboard-term-detail"><div class="dashboard-term-title"><div><span class="dashboard-kicker">${term.year} · ${term.label}</span><h2>${term.id==='fall-2026'?'Current study term':'Planned study term'}</h2></div>${term.credits?`<span class="dashboard-credit-orb"><strong>${term.credits}</strong>credits</span>`:''}</div><div class="dashboard-term-courses">${term.courses.map(([code,title,credits])=>`<article><span>${code}</span><strong>${title}</strong><small>${credits} credits</small></article>`).join('')}</div></div>`;
}

function dashboardStudyCards(){
 return DASHBOARD_MODULES.map(module=>`<a class="dashboard-study-card tone-${module.tone}" href="${module.href}" data-search-text="${module.course} ${module.title} ${module.meta}"><span>${module.course}</span><h3>${module.title}</h3><p>${module.meta}</p><strong>Open workspace ${dashboardIcon('arrow')}</strong></a>`).join('');
}

function dashboardSearchItems(){
 const courseItems=DASHBOARD_COURSES.map(course=>({label:`${course.code} · ${course.title}`,meta:'Course workspace',view:'courses'}));
 const moduleItems=DASHBOARD_MODULES.map(module=>({label:`${module.course} · ${module.title}`,meta:module.meta,href:module.href}));
 return [
  {label:'Weekly class schedule',meta:'MyConcordia snapshot',view:'week'},
  {label:'BEng Cybersecurity degree map',meta:'120 credits · eight study terms',view:'degree'},
  {label:'Moodle deadlines',meta:'Assignment 2 and Quiz 2',view:'overview'},
  {label:'Data Centre Opportunity Scan',meta:'Fridays at 4:00 PM · global',view:'career'},
  ...courseItems,...moduleItems
 ];
}

function renderSchoolDashboard(){
 document.body.classList.add('dashboard-mode');
 document.title='School dashboard · Ash’s Study Lab';
 $('#course-label').textContent='SCHOOL DASHBOARD';
 const solved=saved('engr213-solved-v1',{}),engrDone=Object.values(solved).filter(Boolean).length;
 const compDone=typeof compProgress==='function'?Object.values(compProgress()).filter(Boolean).length:0;
 const circuitDone=Object.keys(progress).filter(id=>progress[id]&&lesson(id)?.group==='elec').length;
 main.innerHTML=`<div class="school-dashboard" data-dashboard-active="${dashboardView}">
  <header class="dashboard-topbar">
   <a class="dashboard-brand" href="#study-lab" aria-label="Ash's Study Lab dashboard"><span class="dashboard-brand-mark">a↗</span><span>Ash’s Study Lab<small>School command centre</small></span></a>
   <div class="dashboard-search-wrap"><label class="dashboard-search"><span>${dashboardIcon('search')}</span><input id="dashboard-search" type="search" autocomplete="off" placeholder="Search a course, concept, deadline, or room" aria-label="Search the school dashboard" aria-controls="dashboard-search-results" aria-expanded="false"></label><div id="dashboard-search-results" class="dashboard-search-results" hidden></div></div>
   <div class="dashboard-profile"><button id="dashboard-notifications" class="dashboard-icon-button" type="button" aria-label="Show upcoming Moodle deadlines" aria-expanded="false">${dashboardIcon('bell')}<span class="dashboard-notification-dot" aria-hidden="true"></span></button><div><strong>Ash Kazi</strong><span>BEng Cybersecurity</span></div><span class="dashboard-avatar" aria-hidden="true">AK</span></div>
   <div id="dashboard-notification-popover" class="dashboard-notification-popover" hidden><div class="dashboard-popover-head"><strong>Upcoming from Moodle</strong><button type="button" class="dashboard-icon-button" data-close-notifications aria-label="Close notifications">${dashboardIcon('close')}</button></div><a href="https://moodle.concordia.ca/moodle/mod/assign/view.php?id=4621816" target="_blank" rel="noopener"><span>24 Sep</span><div><strong>Assignment 2</strong><small>COMP 232 · 11:59 PM</small></div></a><a href="https://moodle.concordia.ca/moodle/mod/quiz/view.php?id=4621818" target="_blank" rel="noopener"><span>25 Sep</span><div><strong>Quiz 2 closes</strong><small>COMP 232 · 11:59 PM</small></div></a></div>
  </header>
  <div class="dashboard-shell">
   <nav class="dashboard-rail" aria-label="School dashboard sections">
    <button type="button" data-dashboard-view="overview" aria-label="Overview">${dashboardIcon('home')}<span>Overview</span></button>
    <button type="button" data-dashboard-view="week" aria-label="Week">${dashboardIcon('calendar')}<span>Week</span></button>
    <button type="button" data-dashboard-view="degree" aria-label="Degree map">${dashboardIcon('route')}<span>Degree</span></button>
    <button type="button" data-dashboard-view="courses" aria-label="Courses">${dashboardIcon('books')}<span>Courses</span></button>
    <button type="button" data-dashboard-view="study" aria-label="Study workspaces">${dashboardIcon('brain')}<span>Study</span></button>
    <button type="button" data-dashboard-view="career" aria-label="Career opportunities">${dashboardIcon('briefcase')}<span>Career</span></button>
    <span class="dashboard-rail-spacer"></span>
    <button type="button" id="dashboard-source-settings" aria-label="Data sources">${dashboardIcon('settings')}<span>Sources</span></button>
   </nav>
   <div class="dashboard-content">
    <section class="dashboard-panel" data-dashboard-panel="overview">
     <div class="dashboard-page-head"><div><span class="dashboard-kicker">Wednesday · 23 September 2026</span><h1>Good morning, Ash.</h1><p>Your classes, deadlines, study workspaces, and degree plan in one working view.</p></div><div class="dashboard-source-pills"><button type="button" data-open-sources>${dashboardIcon('source')} Degree map</button><button type="button" data-open-sources>${dashboardIcon('calendar')} MyConcordia</button><button type="button" data-open-sources>${dashboardIcon('books')} Moodle</button></div></div>
     <div class="dashboard-metrics" aria-label="Current academic facts"><article><span>Current term</span><strong>Fall 2026 · 14.5 credits</strong></article><article><span>Course load</span><strong>5 active courses</strong></article><article><span>Degree path</span><strong>120 credits · 8 study terms</strong></article></div>
     <div class="dashboard-overview-grid"><div class="dashboard-primary-column">
      <article class="dashboard-priority"><div><span class="dashboard-kicker">Priority from Moodle</span><h2>COMP 232 · Assignment 2</h2><p>Due Thursday, 24 September at 11:59 PM. Continue from Week 3: Rules of Inference, then move into the submission.</p></div><div class="dashboard-priority-actions"><a class="dashboard-action is-lime" href="#comp232-week-3">Review Week 3 ${dashboardIcon('arrow')}</a><a class="dashboard-text-link" href="https://moodle.concordia.ca/moodle/mod/assign/view.php?id=4621816" target="_blank" rel="noopener">Open assignment ${dashboardIcon('external')}</a></div></article>
      <section class="dashboard-surface"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Today</span><h2>Two campus sessions</h2></div><button type="button" class="dashboard-secondary-action" data-dashboard-view="week">View full week ${dashboardIcon('arrow')}</button></div><div class="dashboard-today-grid"><article><time>10:15</time><div><strong>COMP 248 · Tutorial</strong><span>to 12:05 · Hall Building 907</span></div></article><article><time>14:45</time><div><strong>ELEC 275 · Tutorial</strong><span>to 16:25 · Hall Building 513</span></div></article></div></section>
      <section class="dashboard-surface"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Fall 2026</span><h2>Course workspaces</h2></div><button type="button" class="dashboard-secondary-action" data-dashboard-view="courses">All courses ${dashboardIcon('arrow')}</button></div><div class="dashboard-course-strip">${DASHBOARD_COURSES.map(course=>`<button type="button" class="tone-${course.tone}" data-dashboard-view="courses" data-course-focus="${course.code}"><span>${course.code}</span><strong>${course.title}</strong><small>${course.credits} credits</small></button>`).join('')}</div></section>
     </div><aside class="dashboard-side-column">
      <section class="dashboard-surface dashboard-deadlines"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Moodle</span><h3>Upcoming</h3></div><a href="https://moodle.concordia.ca/moodle/my/" target="_blank" rel="noopener" aria-label="Open Moodle dashboard">${dashboardIcon('external')}</a></div><div class="dashboard-deadline-list"><a href="https://moodle.concordia.ca/moodle/mod/assign/view.php?id=4621816" target="_blank" rel="noopener"><span class="dashboard-date-tile"><strong>24</strong>SEP</span><div><strong>Assignment 2</strong><span>COMP 232 · Thu 11:59 PM</span></div></a><a href="https://moodle.concordia.ca/moodle/mod/quiz/view.php?id=4621818" target="_blank" rel="noopener"><span class="dashboard-date-tile"><strong>25</strong>SEP</span><div><strong>Quiz 2 closes</strong><span>COMP 232 · Fri 11:59 PM</span></div></a></div></section>
      <section class="dashboard-surface dashboard-degree-snapshot"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Degree map</span><h3>Your long view</h3></div><button type="button" class="dashboard-icon-button" data-dashboard-view="degree" aria-label="Open degree map">${dashboardIcon('arrow')}</button></div><div class="dashboard-degree-line" aria-label="Eight study terms and three co-op work terms"><span class="is-current"></span><span></span><span></span><span class="is-work"></span><span></span><span></span><span></span><span class="is-work"></span><span class="is-work"></span><span></span><span></span></div><strong>Study term 1 of 8</strong><p>Three co-op terms are built into the official sequence through Winter 2030.</p><div class="dashboard-next-term"><span>Next · Winter 2027</span><strong>INSE 221 unlocks from COMP 232.</strong></div></section>
      <section class="dashboard-surface dashboard-career-snapshot"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Opportunity radar</span><h3>Data Centre scan</h3></div><span class="dashboard-live-pill"><i></i>Active</span></div><p>Global internships and co-ops matched to cybersecurity engineering and technical product/software experience.</p><div class="dashboard-career-next"><span>Next shortlist</span><strong>Friday · 4:00 PM</strong><small>Montreal time</small></div><button type="button" class="dashboard-secondary-action" data-dashboard-view="career">Open career workspace ${dashboardIcon('arrow')}</button></section>
      <section class="dashboard-surface dashboard-progress-snapshot"><span class="dashboard-kicker">Study Lab progress</span><div><span>COMP 232 notes</span><strong>${compDone} / 17</strong></div><div><span>ENGR 213 problems</span><strong>${engrDone} / 10</strong></div><div><span>ELEC 275 concepts</span><strong>${circuitDone} / 8</strong></div><button type="button" class="dashboard-secondary-action" data-dashboard-view="study">Open study workspaces ${dashboardIcon('arrow')}</button></section>
     </aside></div>
    </section>

    <section class="dashboard-panel" data-dashboard-panel="week" hidden><div class="dashboard-page-head"><div><span class="dashboard-kicker">MyConcordia · 21–27 September</span><h1>Your week on campus</h1><p>Lectures, tutorials, and labs arranged around the Moodle deadlines that need action.</p></div><a class="dashboard-secondary-action" href="https://campus.concordia.ca/" target="_blank" rel="noopener">Open MyConcordia ${dashboardIcon('external')}</a></div><div class="dashboard-week-grid">${dashboardWeek()}</div><div class="dashboard-week-deadlines"><article><span>THU · 11:59 PM</span><strong>COMP 232 Assignment 2</strong><a href="https://moodle.concordia.ca/moodle/mod/assign/view.php?id=4621816" target="_blank" rel="noopener">Open in Moodle ${dashboardIcon('external')}</a></article><article><span>FRI · 11:59 PM</span><strong>COMP 232 Quiz 2 closes</strong><a href="https://moodle.concordia.ca/moodle/mod/quiz/view.php?id=4621818" target="_blank" rel="noopener">Open in Moodle ${dashboardIcon('external')}</a></article></div></section>

    <section class="dashboard-panel" data-dashboard-panel="degree" hidden><div class="dashboard-degree-hero"><div><span class="dashboard-kicker">BEng Cybersecurity Engineering</span><h1>The whole degree, without losing sight of this week.</h1><p>Official September-entry co-op sequence from Fall 2026 through Winter 2030.</p></div><div class="dashboard-degree-orb"><strong>120</strong><span>credits</span></div></div><div class="dashboard-term-map" aria-label="Degree term sequence">${dashboardTermStops()}</div><div id="dashboard-term-detail">${dashboardTermDetail()}</div><div class="dashboard-degree-bottom"><section class="dashboard-surface"><span class="dashboard-kicker">Degree composition</span><h2>Five requirement groups</h2><div class="dashboard-requirements"><div><span>Cybersecurity engineering core</span><strong>49.5</strong></div><div><span>Engineering core</span><strong>30.5</strong></div><div><span>Complementary core</span><strong>25</strong></div><div><span>Cybersecurity electives</span><strong>12</strong></div><div><span>Engineering & natural science</span><strong>3</strong></div></div></section><section class="dashboard-surface"><span class="dashboard-kicker">Source</span><h2>Degree map workbook</h2><p>The sequence follows the 2026–2027 undergraduate calendar and the official CIISE co-op planner.</p><a class="dashboard-action" href="https://docs.google.com/spreadsheets/d/1uDKl7J0DRXKrNxoWTEv3Qc6Z8zDZSIxa/edit?gid=1967125983#gid=1967125983" target="_blank" rel="noopener">Open degree map ${dashboardIcon('external')}</a></section></div></section>

    <section class="dashboard-panel" data-dashboard-panel="courses" hidden><div class="dashboard-page-head"><div><span class="dashboard-kicker">Fall 2026 · 14.5 credits</span><h1>Five courses, one front door.</h1><p>Move between official Moodle spaces and the teaching modules built inside Study Lab.</p></div><a class="dashboard-secondary-action" href="https://moodle.concordia.ca/moodle/my/" target="_blank" rel="noopener">Open Moodle ${dashboardIcon('external')}</a></div><div class="dashboard-course-grid">${dashboardCourseCards()}</div></section>

    <section class="dashboard-panel" data-dashboard-panel="study" hidden><div class="dashboard-page-head"><div><span class="dashboard-kicker">Study Lab</span><h1>Continue where the reasoning gets built.</h1><p>Lecture notes, textbook modules, worked problems, and recall practice across the courses already developed.</p></div><div class="dashboard-study-progress"><span>Saved in this browser</span><strong>${compDone+engrDone+circuitDone} completed checks</strong></div></div><div class="dashboard-study-grid">${dashboardStudyCards()}</div><section class="dashboard-learning-loop"><div><span class="dashboard-kicker">Shared method</span><h2>Every workspace uses the same learning loop.</h2></div><ol><li><span>01</span><strong>Picture it</strong><p>Start with a concrete model.</p></li><li><span>02</span><strong>Work it</strong><p>Reveal one justified step at a time.</p></li><li><span>03</span><strong>Retrieve it</strong><p>Close the answer and rebuild it.</p></li></ol></section></section>

    <section class="dashboard-panel" data-dashboard-panel="career" hidden><div class="dashboard-career-hero"><div><span class="dashboard-kicker">Career operating system</span><h1>Find the data-centre roles worth moving for.</h1><p>A weekly global scan tuned to your cybersecurity engineering studies and technical product/software background.</p><div class="dashboard-career-tags"><span>Cybersecurity</span><span>Cloud & network</span><span>Infrastructure</span><span>Automation & SRE</span><span>Software</span><span>Technical product</span></div></div><div class="dashboard-scan-clock"><span>Next scan</span><strong>FRI</strong><b>4:00</b><small>PM · Montreal</small></div></div><div class="dashboard-career-grid"><article class="dashboard-surface dashboard-scan-status"><div class="dashboard-section-head"><div><span class="dashboard-kicker">Scheduled task</span><h2>Data Centre Opportunity Scan</h2></div><span class="dashboard-live-pill"><i></i>Active</span></div><dl><div><dt>Cadence</dt><dd>Every Friday at 4:00 PM</dd></div><div><dt>Geography</dt><dd>Global · relocation-heavy roles included</dd></div><div><dt>First run</dt><dd>25 September 2026</dd></div><div><dt>Employer proof</dt><dd>Official career pages prioritized</dd></div></dl></article><article class="dashboard-surface dashboard-scan-output"><span class="dashboard-kicker">Every shortlist delivers</span><h2>A decision-ready brief.</h2><ul><li>${dashboardIcon('check')}Best matches ranked by fit and urgency</li><li>${dashboardIcon('check')}Why each role fits your background</li><li>${dashboardIcon('check')}Requirements, eligibility, and deadlines</li><li>${dashboardIcon('check')}Relocation and visa constraints</li><li>${dashboardIcon('check')}Direct application links</li><li>${dashboardIcon('check')}Materially better roles than the prior scan</li></ul></article><article class="dashboard-career-report"><span class="dashboard-kicker">Latest report</span><div class="dashboard-report-empty">${dashboardIcon('briefcase')}<h2>First shortlist is queued.</h2><p>The report area is ready for the inaugural Friday scan. Future scans will explicitly flag stronger opportunities and urgent deadlines.</p><span>Awaiting first run · 25 Sep at 4:00 PM</span></div></article></div></section>
   </div>
  </div>
  <dialog id="dashboard-sources-dialog" class="dashboard-dialog"><form method="dialog"><div class="dashboard-dialog-head"><div><span class="dashboard-kicker">Reference snapshots</span><h2>Connected school sources</h2></div><button class="dashboard-icon-button" value="close" aria-label="Close data sources">${dashboardIcon('close')}</button></div><p class="dashboard-dialog-intro">The dashboard uses a verified ${DASHBOARD_SOURCE_DATE} snapshot. Open the source systems for live changes, submissions, and official records.</p><div class="dashboard-source-list"><a href="https://docs.google.com/spreadsheets/d/1uDKl7J0DRXKrNxoWTEv3Qc6Z8zDZSIxa/edit?gid=1967125983#gid=1967125983" target="_blank" rel="noopener"><span>${dashboardIcon('route')}</span><div><strong>Degree map</strong><small>120-credit co-op sequence · verified workbook</small></div>${dashboardIcon('external')}</a><a href="https://campus.concordia.ca/" target="_blank" rel="noopener"><span>${dashboardIcon('calendar')}</span><div><strong>MyConcordia schedule</strong><small>Weekly classes, rooms, tutorials, and labs</small></div>${dashboardIcon('external')}</a><a href="https://moodle.concordia.ca/moodle/my/" target="_blank" rel="noopener"><span>${dashboardIcon('books')}</span><div><strong>Moodle</strong><small>Five active courses · assignments and quizzes</small></div>${dashboardIcon('external')}</a></div></form></dialog>
 </div>`;
 setupSchoolDashboard();
}

function setupSchoolDashboard(){
 const root=main.querySelector('.school-dashboard');
 const switchView=(view,focusCourse='')=>{
  if(!['overview','week','degree','courses','study','career'].includes(view))return;
  dashboardView=view;
  root.dataset.dashboardActive=view;
  root.querySelectorAll('[data-dashboard-panel]').forEach(panel=>panel.hidden=panel.dataset.dashboardPanel!==view);
  root.querySelectorAll('.dashboard-rail [data-dashboard-view]').forEach(button=>{const active=button.dataset.dashboardView===view;button.classList.toggle('is-active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current')});
  if(focusCourse){const card=root.querySelector(`[data-course="${focusCourse}"]`);if(card){card.classList.add('is-focused');card.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>card.classList.remove('is-focused'),1400)}}
  root.querySelector('.dashboard-content').scrollIntoView({behavior:'instant',block:'start'});
 };
 root.querySelectorAll('[data-dashboard-view]').forEach(button=>button.addEventListener('click',()=>switchView(button.dataset.dashboardView,button.dataset.courseFocus||'')));
 switchView(dashboardView);

 root.querySelectorAll('[data-term]').forEach(button=>button.addEventListener('click',()=>{
  dashboardTerm=button.dataset.term;
  root.querySelectorAll('[data-term]').forEach(item=>{const active=item.dataset.term===dashboardTerm;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});
  root.querySelector('#dashboard-term-detail').innerHTML=dashboardTermDetail(dashboardTerm);
 }));

 const sourceDialog=root.querySelector('#dashboard-sources-dialog');
 const openSources=()=>{if(typeof sourceDialog.showModal==='function')sourceDialog.showModal();else sourceDialog.setAttribute('open','')};
 root.querySelectorAll('[data-open-sources]').forEach(button=>button.addEventListener('click',openSources));
 root.querySelector('#dashboard-source-settings').addEventListener('click',openSources);

 const notifications=root.querySelector('#dashboard-notifications'),popover=root.querySelector('#dashboard-notification-popover');
 const setNotifications=open=>{popover.hidden=!open;notifications.setAttribute('aria-expanded',String(open))};
 notifications.addEventListener('click',()=>setNotifications(popover.hidden));
 root.querySelector('[data-close-notifications]').addEventListener('click',()=>setNotifications(false));

 const search=root.querySelector('#dashboard-search'),results=root.querySelector('#dashboard-search-results'),items=dashboardSearchItems();
 const closeSearch=()=>{results.hidden=true;search.setAttribute('aria-expanded','false')};
 search.addEventListener('input',()=>{
  const query=search.value.trim().toLowerCase();
  if(!query){closeSearch();return}
  const matches=items.filter(item=>(item.label+' '+item.meta).toLowerCase().includes(query)).slice(0,7);
  results.innerHTML=matches.length?matches.map((item,index)=>item.href?`<a href="${item.href}" role="option"><span>${esc(item.label)}</span><small>${esc(item.meta)}</small></a>`:`<button type="button" role="option" data-search-view="${item.view}" data-result-index="${index}"><span>${esc(item.label)}</span><small>${esc(item.meta)}</small></button>`).join(''):'<p>No dashboard matches. Try a course code or topic.</p>';
  results.hidden=false;search.setAttribute('aria-expanded','true');
  results.querySelectorAll('[data-search-view]').forEach(button=>button.addEventListener('click',()=>{switchView(button.dataset.searchView);search.value='';closeSearch()}));
 });
 search.addEventListener('keydown',event=>{if(event.key==='Escape'){search.value='';closeSearch()}});
 root.addEventListener('click',event=>{if(!event.target.closest('.dashboard-search-wrap'))closeSearch();if(!event.target.closest('#dashboard-notifications')&&!event.target.closest('#dashboard-notification-popover'))setNotifications(false)});
}

window.addEventListener('hashchange',()=>{
 const id=location.hash.slice(1)||'study-lab';
 document.body.classList.toggle('dashboard-mode',id==='study-lab');
});
