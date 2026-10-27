'use strict';

// COMP 248 Planning Lab: short teaching excerpts, not full assignment source.
const COMP248_PLAN_PROGRAMS={
  q1:{
    label:'Q1 · Escape Room',short:'Escape Room',first:'setup',
    intro:'A sequence of puzzle decisions updates one remembered score, then maps that score to an outcome.',
    nodes:[
      {id:'setup',kind:'start',label:'Start + create state',story:'As a player, I need a consistent starting score and an input reader.',code:'Scanner keyboard = new Scanner(System.in);\ndouble score = 100.0;\ndouble multiplier;\nint points;',say:'Create a keyboard Scanner. Score gets 100. Prepare multiplier and points.',state:'score = 100.0; multiplier and points are not ready yet.',why:'The program must remember score across all three puzzles. multiplier and points receive values before they are read.',tools:'Scanner · double · int · assignment'},
      {id:'difficulty',kind:'decision',label:'Choose difficulty',story:'As a player, I want my difficulty to scale every later point change.',code:'if (difficultyChoice == 1) {\n    multiplier = 1.0;\n} else if (difficultyChoice == 2) {\n    multiplier = 1.5;\n} else {\n    multiplier = 2.0;\n}',say:'If choice is 1, use 1.0; otherwise, if choice is 2, use 1.5; otherwise, use 2.0.',state:'INPUT difficultyChoice → multiplier and difficultyName are assigned.',why:'The assignment guarantees choices 1–3. After the first two conditions fail, else represents Hard. Every path assigns the same required state.',tools:'nextInt · == · if / else if / else'},
      {id:'name',kind:'input',label:'Cross the input boundary',story:'As a player, I want to enter my full name for the final result.',code:'keyboard.nextLine();\nString adventurerName = keyboard.nextLine();',say:'Consume the leftover line ending, then read the next full line into adventurer name.',state:'adventurerName = the full typed name.',why:'nextInt leaves the Enter key unread. The first nextLine clears that remainder; the second reads the intended name.',tools:'nextInt → nextLine boundary · String'},
      {id:'lock',kind:'decision',label:'Evaluate the lock',story:'As a player, I want my lock answer translated into base points.',code:'if (lockAnswer == 30) {\n    points = 0;\n} else if (lockAnswer >= 25 && lockAnswer <= 35) {\n    points = -10;\n} else if (lockAnswer >= 15 && lockAnswer <= 45) {\n    points = -20;\n} else {\n    points = -30;\n}',say:'Exact 30; otherwise 25 through 35; otherwise 15 through 45; otherwise everything else.',state:'INPUT lockAnswer → points ∈ {0, −10, −20, −30}.',why:'The bands overlap, so exact → narrow → wide is essential. Only the first true branch runs. && requires both endpoints to pass.',tools:'== · >= · <= · && · ordered branches'},
      {id:'score1',kind:'update',label:'Update score once',story:'As a player, I want the lock result scaled and added to my current score.',code:'score = score + points * multiplier;',say:'Score gets the old score plus points times multiplier.',state:'old score + (points × multiplier) → new score.',why:'Multiplication happens before addition. Assignment then replaces score. points keeps its branch value; score carries the accumulated result.',tools:'* · + · = · state update'},
      {id:'colour',kind:'decision',label:'Normalize + classify colour',story:'As a player, I want any capitalization of a colour to receive the same rule.',code:'String colourChoice = keyboard.next().toUpperCase();\nif (colourChoice.equals("GREEN")) {\n    points = 15;\n} else if (colourChoice.equals("RED") || colourChoice.equals("YELLOW")) {\n    points = -15;\n} else if (colourChoice.equals("BLUE")) {\n    points = -10;\n} else {\n    points = -20;\n}',say:'Read one word and make it uppercase. Then compare its String contents with each named colour.',state:'INPUT colour → normalized colourChoice and new points.',why:'Normalization produces one canonical form. .equals compares contents; || accepts either RED or YELLOW. The score update follows this node.',tools:'next · toUpperCase · equals · ||'},
      {id:'score2',kind:'update',label:'Reuse the update pattern',story:'As a player, I want the colour result added to the score I already earned.',code:'score = score + points * multiplier;',say:'Score gets its current value plus the newly assigned points times multiplier.',state:'The lock result is preserved; the colour result is added.',why:'The same update expression works because points changed while score and multiplier kept their current values. Resetting score here would destroy earlier work.',tools:'reuse · accumulator · current state'},
      {id:'year',kind:'decision',label:'Evaluate the year',story:'As a player, I want exact and nearby year answers mapped to their point bands.',code:'if (yearAnswer == 1974) {\n    points = 20;\n} else if (yearAnswer >= 1969 && yearAnswer <= 1979) {\n    points = -10;\n} else if (yearAnswer >= 1964 && yearAnswer <= 1984) {\n    points = -20;\n} else {\n    points = -35;\n}',say:'Exact 1974; otherwise within 5; otherwise within 10; otherwise outside.',state:'INPUT yearAnswer → points ∈ {20, −10, −20, −35}.',why:'This is the lock pattern with different values. Earlier failed branches supply the “but not in the narrower band” part without another condition.',tools:'exact before interval · inclusive bounds'},
      {id:'score3',kind:'update',label:'Complete the score',story:'As a player, I want the year result included in my final score.',code:'score = score + points * multiplier;',say:'Apply the same update for the third and final puzzle.',state:'score now contains all three scaled puzzle results.',why:'A repeated state-update pattern is easier to trace when each decision has already assigned points.',tools:'state → final accumulated value'},
      {id:'outcome',kind:'decision',label:'Map score to outcome',story:'As a player, I want my final score translated into a meaningful outcome.',code:'if (score >= 110.0) {\n    outcome = "MASTER";\n} else if (score >= 80.0) {\n    outcome = "ESCAPED";\n} else if (score >= 50.0) {\n    outcome = "BARELY OUT";\n} else {\n    outcome = "TRAPPED";\n}',say:'At least 110; otherwise at least 80; otherwise at least 50; otherwise trapped.',state:'score → one outcome String; score itself does not change.',why:'Descending thresholds create non-overlapping bands. Reaching >=80 proves score <110 because the higher branch already failed.',tools:'>= · descending thresholds · boundary tests'},
      {id:'hall',kind:'decision',label:'Report + optional save',story:'As a player, I want to see my result and choose whether to record it.',code:'System.out.printf("Final score : %.2f%n", score);\nString save = keyboard.next().toLowerCase();\nif (save.equals("yes")) {\n    System.out.println("Recorded");\n} else {\n    System.out.println("Not recorded");\n}',say:'Print score to two decimals; read and lowercase the answer; branch on yes.',state:'Output uses score and outcome. save controls only the closing message.',why:'Formatting changes display, not score. Normalization again prevents capitalization from changing the branch.',tools:'printf · %.2f · %n · toLowerCase · println'},
      {id:'end',kind:'end',label:'Close cleanly',story:'As a player, I want the program to finish after my chosen path.',code:'keyboard.close();',say:'Close the keyboard Scanner.',state:'No further input is read.',why:'Every path reaches the end with a defined outcome; only the purchase of a Hall of Fame message differs.',tools:'close · end of main'}
    ]
  },
  q2:{
    label:'Q2 · ARTM Fare Calculator',short:'ARTM Fare',first:'setup',
    intro:'A ticket switch selects one purchase path; shared variables carry that path into one guarded receipt.',
    nodes:[
      {id:'setup',kind:'start',label:'Start + prepare shared state',story:'As a customer, I need one calculator that can carry any valid ticket choice.',code:'Scanner keyboard = new Scanner(System.in);\nString ticketType = "";\nString zone = "";\ndouble unitPrice = 0.0;\nint quantity = 0;\nboolean validPurchase = false;',say:'Create the Scanner and initialize every shared purchase box.',state:'No purchase yet; validPurchase = false.',why:'Switch branches assign these shared variables. The false guard prevents Exit, invalid, and restricted paths from printing a receipt.',tools:'String · double · int · boolean · initial state'},
      {id:'menu',kind:'input',label:'Read customer + ticket',story:'As a customer, I want to identify myself and choose a ticket type.',code:'String customerName = keyboard.nextLine();\nint ticketChoice = keyboard.nextInt();',say:'Read the full-line customer name, then the integer ticket choice.',state:'customerName and ticketChoice now guide the purchase.',why:'The input method matches the data: a name may contain spaces; a menu choice is one whole number.',tools:'nextLine · nextInt · matching types'},
      {id:'switch',kind:'decision',label:'Select the ticket story',story:'As a customer, I want only the instructions for my selected ticket to run.',code:'switch (ticketChoice) {\n    case 1: // Single Trip\n        break;\n    case 2: // 10-Trip Package\n        break;\n    case 3: // Monthly Pass\n        break;\n    case 4: // Reduced Monthly Pass\n        break;\n    case 5: // Exit\n        break;\n    default: // Invalid\n}',say:'Switch on ticket choice; enter the matching case; at break, leave the switch.',state:'ticketChoice selects one entry point and one ticket story.',why:'Exact menu values fit switch. break prevents fall-through into another ticket story. default handles values with no matching case.',tools:'switch · case · break · default',branches:['1 Single','2 10-Trip','3 Monthly','4 Reduced','5 Exit','default Invalid']},
      {id:'zones',kind:'decision',label:'Select the zone fare',story:'As a customer, I want my zone normalized and mapped to the correct unit price.',code:'zone = keyboard.next().toUpperCase();\nif (zone.equals("A")) {\n    unitPrice = 3.75;\n} else if (zone.equals("AB")) {\n    unitPrice = 5.00;\n} else if (zone.equals("ABC")) {\n    unitPrice = 7.00;\n} else {\n    unitPrice = 9.50;\n}',say:'Read and uppercase the zone; compare contents A, AB, ABC; otherwise use ABCD.',state:'zone and unitPrice are assigned for the selected ticket.',why:'Valid zones are guaranteed. Each ticket story supplies its own fare table, so the same zone names can produce different prices.',tools:'next · toUpperCase · equals · else-if chain'},
      {id:'quantity',kind:'input',label:'Read or update quantity',story:'As a customer, I want the quantity to include every item I am buying.',code:'quantity = keyboard.nextInt();\n// Single Trip + yes:\nquantity = quantity + keyboard.nextInt();',say:'Read the initial quantity; for return trips, add the next integer to the old quantity.',state:'quantity = initial items + any return trips.',why:'Plain assignment would overwrite initial trips. Addition preserves them. The 10-Trip non-A path asks for no quantity.',tools:'nextInt · read old value → add → assign'},
      {id:'valid',kind:'decision',label:'Guard the receipt',story:'As a customer, I want a receipt only when my purchase is valid.',code:'if (validPurchase) {\n    // calculate and print the receipt\n}',say:'If valid purchase is true, execute the receipt block; otherwise skip it.',state:'Valid ticket stories set true. Exit, invalid, and restricted paths leave false.',why:'A boolean guard separates purchase processing from menu handling and prevents meaningless $0 receipts.',tools:'boolean · if guard · skipped block'},
      {id:'subtotal',kind:'update',label:'Calculate subtotal',story:'As a customer, I want the unit price multiplied by how many items I chose.',code:'double subtotal = unitPrice * quantity;\ndouble loyaltyDiscount = 0.0;',say:'Subtotal gets unit price times quantity; discount starts at zero.',state:'unitPrice × quantity → subtotal; default discount = 0.',why:'Starting discount at zero gives every non-qualifying path a defined value without another branch.',tools:'double · * · initialization'},
      {id:'discount',kind:'decision',label:'Apply the qualifying discount',story:'As a monthly customer buying at least 3 months, I want 5% deducted.',code:'if (ticketChoice == 3 && quantity >= 3) {\n    loyaltyDiscount = subtotal * 0.05;\n}\ndouble total = subtotal - loyaltyDiscount;',say:'If choice is Monthly AND quantity is at least 3, discount gets 5% of subtotal; total gets subtotal minus discount.',state:'subtotal − loyaltyDiscount → total.',why:'Both conditions must be true. Keep full precision for calculation; printf rounds only the displayed amounts.',tools:'== · >= · && · * · − · unrounded state'},
      {id:'receipt',kind:'output',label:'Print the selected receipt',story:'As a customer, I want enough detail to verify the price, quantity, discount, and total.',code:'System.out.printf("Unit price : $%.2f%n", unitPrice);\nif (ticketChoice == 3) {\n    System.out.printf("Subtotal : $%.2f%n", subtotal);\n}\nSystem.out.printf("Total : $%.2f%n", total);',say:'Print money with two decimals; show Monthly details only for choice 3.',state:'Variables stay unchanged; formatted text becomes output.',why:'Output is branch-dependent too. %.2f controls display precision; %n inserts a newline; %% prints a literal percent in the discount label.',tools:'printf · placeholders · conditional output'},
      {id:'end',kind:'end',label:'Close the calculator',story:'As a customer, I want a polite ending appropriate to my path.',code:'keyboard.close();',say:'Close the Scanner after all selected-path output is complete.',state:'Execution reaches the end without calculating on invalid paths.',why:'The shared guard and switch cases decide which messages exist before main ends.',tools:'close · path verification'}
    ]
  }
};

const COMP248_PLAN_TRACES={
  q1:{
    medium:{label:'Medium · complete score path',steps:[
      {node:'setup',code:'double score = 100.0;',state:'score = 100.0',output:'Welcome text',why:'Start with the required initial state.'},
      {node:'difficulty',code:'difficultyChoice = 2 → multiplier = 1.5',state:'score = 100.0 · multiplier = 1.5',output:'Name prompt',why:'The first condition fails; choice == 2 succeeds.'},
      {node:'name',code:'keyboard.nextLine(); adventurerName = keyboard.nextLine();',state:'adventurerName = “Ash”',output:'Waits for full name',why:'Clear Enter, then read the intended full line.'},
      {node:'lock',code:'lockAnswer = 25 → points = -10',state:'points = −10 · multiplier = 1.5',output:'Lock result',why:'Exact fails; 25 >= 25 and 25 <= 35 are both true.'},
      {node:'score1',code:'score = 100.0 + (-10 * 1.5)',state:'score = 85.0',output:'Nothing extra',why:'The scaled lock result updates the old score.'},
      {node:'colour',code:'"green" → "GREEN" → points = 15',state:'points = 15 · score = 85.0',output:'Colour result',why:'Normalization makes the GREEN content comparison true.'},
      {node:'score2',code:'score = 85.0 + (15 * 1.5)',state:'score = 107.5',output:'Nothing extra',why:'The colour result accumulates onto the lock result.'},
      {node:'year',code:'yearAnswer = 1972 → points = -10',state:'points = −10 · score = 107.5',output:'Year result',why:'Not exact, but inside 1969–1979 inclusive.'},
      {node:'score3',code:'score = 107.5 + (-10 * 1.5)',state:'score = 92.5',output:'Nothing extra',why:'All three puzzle results are now accumulated.'},
      {node:'outcome',code:'92.5 >= 110 false; 92.5 >= 80 true',state:'outcome = ESCAPED · score = 92.5',output:'Final result begins',why:'The second threshold is the first true branch.'},
      {node:'hall',code:'save = "no" → else',state:'score = 92.5 · outcome = ESCAPED',output:'Final score : 92.50\nOutcome : ESCAPED\nNot recorded',why:'Formatting displays two decimals; no changes the score.'},
      {node:'end',code:'keyboard.close();',state:'Final state preserved',output:'Closing message',why:'The traced path is complete.'}
    ]},
    perfect:{label:'Easy · perfect and 110+ boundary',steps:[
      {node:'setup',code:'score = 100.0',state:'score = 100.0',output:'Welcome',why:'Begin with the initial score.'},
      {node:'difficulty',code:'choice = 1 → multiplier = 1.0',state:'multiplier = 1.0',output:'Name prompt',why:'Easy leaves point values unscaled.'},
      {node:'name',code:'Read full-line name',state:'adventurerName = “Test”',output:'Lock prompt',why:'The clearing read prevents skipped input.'},
      {node:'lock',code:'lockAnswer = 30 → points = 0',state:'points = 0',output:'Lock opens',why:'Exact equality must be checked before the surrounding bands.'},
      {node:'score1',code:'score = 100 + 0 × 1.0',state:'score = 100.0',output:'Nothing extra',why:'Zero points leave score unchanged.'},
      {node:'colour',code:'GREEN → points = 15',state:'points = 15',output:'Panel opens',why:'The first colour comparison is true.'},
      {node:'score2',code:'score = 100 + 15',state:'score = 115.0',output:'Nothing extra',why:'Score crosses the 110 threshold here.'},
      {node:'year',code:'1974 → points = 20',state:'points = 20',output:'Vault opens',why:'The exact year branch wins.'},
      {node:'score3',code:'score = 115 + 20',state:'score = 135.0',output:'Nothing extra',why:'The final accumulated score is 135.'},
      {node:'outcome',code:'135 >= 110 → true',state:'outcome = MASTER',output:'Final result',why:'The highest threshold is tested first.'},
      {node:'hall',code:'save = yes',state:'score = 135.0',output:'Final score : 135.00\nOutcome : MASTER\nRecorded',why:'The yes branch prints the recording message.'},
      {node:'end',code:'close',state:'Complete',output:'Closing message',why:'End of trace.'}
    ]}
  },
  q2:{
    marie:{label:'Marie · Monthly AB × 3',steps:[
      {node:'setup',code:'validPurchase = false',state:'unitPrice = 0 · quantity = 0 · valid = false',output:'Welcome',why:'No receipt exists until a valid path proves itself.'},
      {node:'menu',code:'customerName = Marie; ticketChoice = 3',state:'choice = 3',output:'Menu',why:'The integer 3 selects Monthly.'},
      {node:'switch',code:'case 3 matches → enter; later break exits',state:'ticketType = Monthly Pass',output:'Zone prompt',why:'Only the Monthly story runs.'},
      {node:'zones',code:'AB → unitPrice = 164.50',state:'zone = AB · unitPrice = 164.50',output:'Months prompt',why:'A fails; AB content comparison succeeds.'},
      {node:'quantity',code:'quantity = 3',state:'quantity = 3 month(s)',output:'Nothing extra',why:'This quantity reaches the discount boundary.'},
      {node:'valid',code:'validPurchase == true',state:'valid = true',output:'Enter receipt block',why:'Monthly is a valid purchase path.'},
      {node:'subtotal',code:'subtotal = 164.50 * 3',state:'subtotal = 493.50 · discount = 0',output:'Nothing yet',why:'Calculate before formatting.'},
      {node:'discount',code:'discount = 493.50 * 0.05; total = 493.50 - 24.675',state:'discount = 24.675 · total = 468.825',output:'Nothing yet',why:'Choice 3 and quantity >=3 are both true.'},
      {node:'receipt',code:'printf with %.2f',state:'Stored values unchanged',output:'Subtotal : $493.50\nDiscount : -$24.68\nTotal : $468.83',why:'Display rounds the unrounded stored values.'},
      {node:'end',code:'close',state:'Complete',output:'Closing message',why:'End of valid purchase path.'}
    ]},
    sophia:{label:'Sophia · Single AB + return',steps:[
      {node:'setup',code:'Initial shared state',state:'quantity = 0 · valid = false',output:'Welcome',why:'Prepare state.'},
      {node:'menu',code:'ticketChoice = 1',state:'choice = 1',output:'Menu',why:'Single Trip selected.'},
      {node:'switch',code:'case 1',state:'ticketType = Single Trip',output:'Zone prompt',why:'Only case 1 runs.'},
      {node:'zones',code:'ab → AB → unitPrice = 5.00',state:'zone = AB · unitPrice = 5.00',output:'Trips prompt',why:'Normalization enables the AB comparison.'},
      {node:'quantity',code:'quantity = 1; quantity = 1 + 1',state:'quantity = 2',output:'Return-trip prompt',why:'The return is added, not substituted.'},
      {node:'valid',code:'validPurchase = true',state:'valid = true',output:'Receipt begins',why:'Single Trip is valid.'},
      {node:'subtotal',code:'subtotal = 5.00 * 2',state:'subtotal = 10.00 · discount = 0',output:'Nothing yet',why:'Both trips use the unit fare.'},
      {node:'discount',code:'choice == 3 is false',state:'total = 10.00',output:'Nothing yet',why:'No Monthly discount applies.'},
      {node:'receipt',code:'Print Single receipt',state:'Unchanged',output:'Quantity : 2\nTotal : $10.00',why:'No Monthly subtotal or discount line is printed.'},
      {node:'end',code:'close',state:'Complete',output:'Closing message',why:'End of trace.'}
    ]},
    restricted:{label:'Mateo · restricted 10-Trip AB',steps:[
      {node:'setup',code:'validPurchase = false',state:'valid = false',output:'Welcome',why:'The guard starts closed.'},
      {node:'menu',code:'ticketChoice = 2',state:'choice = 2',output:'Menu',why:'10-Trip selected.'},
      {node:'switch',code:'case 2',state:'ticketType = 10-Trip Package',output:'Zone prompt',why:'Only the package story runs.'},
      {node:'zones',code:'zone = AB; zone.equals("A") is false',state:'zone = AB · unitPrice = 0',output:'Restriction message',why:'The package is available only for Zone A.'},
      {node:'valid',code:'validPurchase remains false',state:'valid = false · quantity = 0',output:'No quantity prompt · no receipt',why:'The entire calculation block is skipped.'},
      {node:'end',code:'close',state:'Complete',output:'Closing message',why:'A rejected path still ends cleanly.'}
    ]}
  }
};

const COMP248_PLAN_TOOLS=[
  {id:'nextline',cat:'input',code:'keyboard.nextLine()',say:'keyboard dot next-line',use:'Read a whole name, sentence, or line including spaces.',avoid:'Immediately after nextInt unless you first consume the leftover line ending.',programs:['q1','q2']},
  {id:'next',cat:'input',code:'keyboard.next()',say:'keyboard dot next',use:'Read one token: one colour, zone, or yes/no answer.',avoid:'A full name containing spaces; next returns only the first token.',programs:['q1','q2']},
  {id:'nextint',cat:'input',code:'keyboard.nextInt()',say:'keyboard dot next-int',use:'Read a menu choice, answer, quantity, or year as an int.',avoid:'Decimal input or nonnumeric text; the token must represent an integer.',programs:['q1','q2']},
  {id:'types',cat:'state',code:'String · int · double · boolean',say:'String, integer, double, boolean',use:'Match storage to text, whole values, decimal values, and true/false state.',avoid:'Choosing int for money or boolean for a numeric score.',programs:['q1','q2']},
  {id:'assignment',cat:'state',code:'score = score + points * multiplier;',say:'score gets old score plus points times multiplier',use:'Update an accumulator while preserving earlier work.',avoid:'Reading = as mathematical equality or accidentally resetting the accumulator.',programs:['q1','q2']},
  {id:'numericcompare',cat:'decision',code:'==  !=  <  <=  >  >=',say:'equal, not equal, less, at most, greater, at least',use:'Ask numeric or menu-value questions that return boolean.',avoid:'Using = when a comparison is required.',programs:['q1','q2']},
  {id:'equals',cat:'decision',code:'text.equals("YES")',say:'text dot equals YES',use:'Compare String contents exactly, including case.',avoid:'Using == for String content or calling a method on a null reference.',programs:['q1','q2']},
  {id:'normalize',cat:'decision',code:'keyboard.next().toUpperCase()\nkeyboard.next().toLowerCase()',say:'read one token, then normalize its case',use:'Make yes/YES or ab/AB reach the same content comparison.',avoid:'Discarding the returned String; Strings are immutable.',programs:['q1','q2']},
  {id:'andor',cat:'decision',code:'a >= low && a <= high\na.equals("RED") || a.equals("YELLOW")',say:'both with AND; either with OR',use:'&& requires every condition; || requires at least one.',avoid:'Writing low <= a <= high as one Java expression; split it with &&.',programs:['q1','q2']},
  {id:'if',cat:'decision',code:'if / else if / else',say:'if; otherwise if; otherwise',use:'Classify ranges, overlapping rules, or different question shapes.',avoid:'Testing a wide band before its exact or narrow special case.',programs:['q1','q2']},
  {id:'switch',cat:'decision',code:'switch / case / break / default',say:'switch on one value; enter a case; break to leave',use:'Select among exact menu choices with case-specific instructions.',avoid:'Forgetting break and falling into the next ticket story.',programs:['q2']},
  {id:'guard',cat:'decision',code:'if (validPurchase) { … }',say:'if valid purchase is true',use:'Protect calculations and output that belong only to valid paths.',avoid:'Printing a default $0 receipt for Exit or invalid input.',programs:['q2']},
  {id:'print',cat:'output',code:'System.out.print(...)\nSystem.out.println(...)',say:'print; print-line',use:'print keeps the cursor; println prints then adds a newline.',avoid:'Predicting output without tracking the cursor and \\n escapes.',programs:['q1','q2']},
  {id:'printf',cat:'output',code:'System.out.printf("$%.2f%n", total);',say:'print-formatted: dollar, two decimals, newline',use:'Control displayed precision and layout without changing stored values.',avoid:'Rounding intermediate arithmetic merely to match the displayed receipt.',programs:['q1','q2']}
];

const COMP248_PLAN_EDGES={
  q1:[
    {id:'lock30',case:'Lock answer = 30',options:['0 points: exact branch','−10: narrow band','−20: wide band'],answer:0,why:'Exact is tested first, even though 30 also belongs to both numeric bands.'},
    {id:'lock35',case:'Lock answer = 35',options:['0 points','−10 points','−20 points'],answer:1,why:'35 is included in 25–35. Test 36 to verify the outside of that boundary.'},
    {id:'lock15',case:'Lock answer = 15',options:['−10 points','−20 points','−30 points'],answer:1,why:'The narrow 25–35 test fails; the wide 15–45 test succeeds inclusively.'},
    {id:'score110',case:'Final score = 110',options:['MASTER','ESCAPED','BARELY OUT'],answer:0,why:'>= includes the endpoint. Exactly 110 belongs to MASTER.'},
    {id:'score80',case:'Final score = 80',options:['MASTER','ESCAPED','BARELY OUT'],answer:1,why:'110 fails; 80 >=80 succeeds. The failed higher branch supplies the upper bound.'},
    {id:'green',case:'Colour input = gReEn',options:['+15 after normalization','−20 as unknown','Compile-time error'],answer:0,why:'toUpperCase returns GREEN; .equals then compares matching contents.'}
  ],
  q2:[
    {id:'month2',case:'Monthly AB, quantity = 2',options:['5% discount','No discount','Restricted purchase'],answer:1,why:'quantity >=3 is false. The discount remains 0 and no discount line prints.'},
    {id:'month3',case:'Monthly AB, quantity = 3',options:['5% discount','No discount','Exit without receipt'],answer:0,why:'Choice ==3 and quantity >=3 are both true; the endpoint qualifies.'},
    {id:'packageAB',case:'10-Trip Package, zone = AB',options:['Charge $34.25','Reject without quantity or receipt','Treat as Single Trip'],answer:1,why:'Only A is valid. validPurchase stays false and no quantity is read.'},
    {id:'return',case:'Single AB: 1 initial + yes + 1 return',options:['quantity = 1','quantity = 2','quantity = 10'],answer:1,why:'quantity = old quantity + return input = 1 + 1 = 2; total = $10.00.'},
    {id:'exit',case:'Menu choice = 5',options:['Print $0 receipt','Print Exit message only','Ask for a zone'],answer:1,why:'Exit leaves validPurchase false, so no zone, calculation, or receipt follows.'},
    {id:'invalid',case:'Menu choice = 6',options:['default invalid message','Monthly receipt','Infinite menu loop'],answer:0,why:'No case matches, so default runs. There is no loop in this one-pass program.'}
  ]
};

const COMP248_PLAN_PRACTICE_FIELDS=[
  ['contract','Contract','Inputs, required output, and assumptions'],
  ['stories','User stories','Two to four “As a customer…” stories in execution order'],
  ['state','State / variables','Names, types, initial values, and purposes'],
  ['decisions','Decisions','Questions, true/false paths, and branch order'],
  ['tools','Java tools','Scanner methods, types, comparisons, selection, and output'],
  ['tests','Edge-case tests','Ordinary, boundary, just-outside, representation, and output cases']
];

let comp248Plan={program:'q1',view:'flow',node:'setup',trace:'medium',traceIndex:0,toolFilter:'all',edgeAnswers:{}};

function comp248PlanProgramToggle(){
  const current=comp248Plan.program;
  return `<div class="plan-program-toggle" aria-label="Choose program">${Object.entries(COMP248_PLAN_PROGRAMS).map(([id,p])=>`<button type="button" data-plan-program="${id}" aria-pressed="${current===id}" class="${current===id?'active':''}">${p.label}</button>`).join('')}</div>`;
}

function comp248PlanTabs(){
  return `<nav class="plan-tabs" aria-label="Planning lab views">${[['flow','01 · Process flow'],['tools','02 · Java toolkit'],['edges','03 · Edge cases'],['exam','04 · Midterm paper mode']].map(([id,label])=>`<button type="button" data-plan-view="${id}" class="${comp248Plan.view===id?'active':''}" aria-pressed="${comp248Plan.view===id}">${label}</button>`).join('')}</nav>`;
}

function comp248PlanNodeDetail(program){
  const node=program.nodes.find(n=>n.id===comp248Plan.node)||program.nodes[0];
  return `<article class="plan-node-detail" aria-live="polite"><div class="plan-detail-kind">${node.kind.toUpperCase()} · USER STORY → JAVA</div><h3>${node.label}</h3><blockquote>${node.story}</blockquote><pre><code>${esc(node.code)}</code></pre><div class="plan-say"><span>SAY IT</span><p>${node.say}</p></div><dl><div><dt>State / execution</dt><dd>${node.state}</dd></div><div><dt>Why this works</dt><dd>${node.why}</dd></div><div><dt>Tools identified</dt><dd>${node.tools}</dd></div></dl></article>`;
}

const COMP248_PLAN_FLOW_COLOURS={slate:'#756d80',green:'#4f8b45',blue:'#377da5',amber:'#bd7a22',red:'#b85252',violet:'#7957a6'};

function comp248PlanFlowText(lines,x,y,className){
  const rows=Array.isArray(lines)?lines:[lines];
  return `<text class="${className}" x="${x}" y="${y}" text-anchor="middle">${rows.map((line,i)=>`<tspan x="${x}" dy="${i?16:0}">${esc(line)}</tspan>`).join('')}</text>`;
}

function comp248PlanFlowWrap(label,max=20){
  const lines=[];let line='';
  label.split(' ').forEach(word=>{if((line+' '+word).trim().length>max&&line){lines.push(line);line=word}else line=(line+' '+word).trim()});
  if(line)lines.push(line);return lines;
}

function comp248PlanFlowSize(node){
  return node.kind==='decision'?{w:220,h:94}:node.kind==='start'||node.kind==='end'?{w:190,h:58}:{w:200,h:60};
}

function comp248PlanFlowNode(node,x,y){
  const {w,h}=comp248PlanFlowSize(node),lines=comp248PlanFlowWrap(node.label,node.kind==='decision'?18:22);let shape='';
  if(node.kind==='decision')shape=`<polygon class="plan-node-shape plan-flow-diamond" points="${x},${y-h/2} ${x+w/2},${y} ${x},${y+h/2} ${x-w/2},${y}"/>`;
  else if(node.kind==='input')shape=`<polygon class="plan-node-shape" points="${x-w/2+18},${y-h/2} ${x+w/2},${y-h/2} ${x+w/2-18},${y+h/2} ${x-w/2},${y+h/2}"/>`;
  else shape=`<rect class="plan-node-shape" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${node.kind==='start'||node.kind==='end'?h/2:9}"/>`;
  return `<g class="plan-node kind-${node.kind}" data-plan-node="${node.id}" role="button" tabindex="0" aria-label="${esc(node.kind+': '+node.label)}" aria-pressed="${comp248Plan.node===node.id}"><title>${esc(node.label)} — select for the M2E teaching drawer</title>${shape}${comp248PlanFlowText(lines,x,y-(lines.length-1)*8+5,'plan-node-label')}</g>`;
}

function comp248PlanFlowEdge(d,tone='slate',to=''){
  return `<path class="plan-flow-edge tone-${tone}" d="${d}" marker-end="url(#plan-arrow-${tone})" data-plan-edge-to="${to}"/>`;
}

function comp248PlanFlowChip(branch,x,y,w){
  const lines=Array.isArray(branch.label)?branch.label:[branch.label];
  return `<g class="plan-flow-chip tone-${branch.tone||'slate'}"><rect x="${x-w/2}" y="${y-25}" width="${w}" height="50" rx="9"/>${comp248PlanFlowText(lines,x,y-(lines.length-1)*8+4,'plan-chip-label')}</g>`;
}

function comp248PlanFlowChipRow(branches,y){
  const n=branches.length,w=n>=6?125:n===4?170:n===3?190:n===2?240:220,gap=n>=6?15:n===4?20:n===3?35:n===2?80:0,total=n*w+(n-1)*gap,start=(900-total)/2+w/2;
  return {items:branches.map((branch,i)=>({...branch,x:start+i*(w+gap),y,w})),markup:branches.map((branch,i)=>comp248PlanFlowChip(branch,start+i*(w+gap),y,w)).join('')};
}

function comp248PlanFlowConnect(from,to,tone='slate'){
  const a=comp248PlanFlowSize(from.node),b=comp248PlanFlowSize(to.node);
  return comp248PlanFlowEdge(`M ${from.x} ${from.y+a.h/2} V ${to.y-b.h/2}`,tone,to.node.id);
}

function comp248PlanFlowFan(from,to,branches){
  const row=comp248PlanFlowChipRow(branches,from.y+115),a=comp248PlanFlowSize(from.node),b=comp248PlanFlowSize(to.node),top=to.y-b.h/2,merge=top-20;
  const edges=row.items.map(item=>comp248PlanFlowEdge(`M ${from.x} ${from.y+a.h/2} V ${from.y+68} H ${item.x} V ${item.y-25}`,item.tone,from.node.id)+comp248PlanFlowEdge(`M ${item.x} ${item.y+25} V ${merge} H ${to.x} V ${top}`,item.tone,to.node.id)).join('');
  return {edges,chips:row.markup};
}

function comp248PlanFlowEdgeLabel(label,x,y,tone){
  const width=label.length*6.3+18;
  return `<g class="plan-flow-edge-label tone-${tone}"><rect x="${x-width/2}" y="${y-11}" width="${width}" height="22" rx="6"/>${comp248PlanFlowText(label,x,y+4,'plan-edge-label-text')}</g>`;
}

function comp248PlanQ1Diagram(program){
  const byId=Object.fromEntries(program.nodes.map(node=>[node.id,node])),at=(id,y)=>({node:byId[id],x:450,y}),positions=[at('setup',50),at('difficulty',170),at('name',410),at('lock',530),at('score1',770),at('colour',890),at('score2',1130),at('year',1250),at('score3',1490),at('outcome',1610),at('hall',1850),at('end',2090)],p=Object.fromEntries(positions.map(item=>[item.node.id,item]));
  let edges=['setup>difficulty','name>lock','score1>colour','score2>year','score3>outcome'].map(pair=>{const[a,b]=pair.split('>');return comp248PlanFlowConnect(p[a],p[b])}).join(''),chips='';
  const fans=[
    ['difficulty','name',[{label:['1 · Easy','× 1.0'],tone:'blue'},{label:['2 · Medium','× 1.5'],tone:'amber'},{label:['3 · Hard','× 2.0'],tone:'violet'}]],
    ['lock','score1',[{label:['Exactly 30','0 points'],tone:'green'},{label:['25 through 35','−10 points'],tone:'blue'},{label:['15 through 45','−20 points'],tone:'amber'},{label:['Otherwise','−30 points'],tone:'red'}]],
    ['colour','score2',[{label:['GREEN','+15 points'],tone:'green'},{label:['RED or YELLOW','−15 points'],tone:'red'},{label:['BLUE','−10 points'],tone:'blue'},{label:['Otherwise','−20 points'],tone:'amber'}]],
    ['year','score3',[{label:['Exactly 1974','+20 points'],tone:'green'},{label:['Within 5 years','−10 points'],tone:'blue'},{label:['Within 10 years','−20 points'],tone:'amber'},{label:['Otherwise','−35 points'],tone:'red'}]],
    ['outcome','hall',[{label:['Score ≥ 110','MASTER'],tone:'green'},{label:['Score ≥ 80','ESCAPED'],tone:'blue'},{label:['Score ≥ 50','BARELY OUT'],tone:'amber'},{label:['Otherwise','TRAPPED'],tone:'red'}]],
    ['hall','end',[{label:['YES','Record result'],tone:'green'},{label:['NO','Do not record'],tone:'slate'}]]
  ];
  fans.forEach(([a,b,branches])=>{const fan=comp248PlanFlowFan(p[a],p[b],branches);edges+=fan.edges;chips+=fan.chips});
  return {height:2170,edges,chips,nodes:positions.map(item=>comp248PlanFlowNode(item.node,item.x,item.y)).join('')};
}

function comp248PlanQ2Diagram(program){
  const byId=Object.fromEntries(program.nodes.map(node=>[node.id,node])),at=(id,y)=>({node:byId[id],x:450,y}),positions=[at('setup',50),at('menu',165),at('switch',290),at('zones',550),at('quantity',795),at('valid',935),at('subtotal',1085),at('discount',1215),at('receipt',1470),at('end',1605)],p=Object.fromEntries(positions.map(item=>[item.node.id,item]));
  let edges=comp248PlanFlowConnect(p.setup,p.menu)+comp248PlanFlowConnect(p.menu,p.switch)+comp248PlanFlowConnect(p.quantity,p.valid)+comp248PlanFlowConnect(p.subtotal,p.discount)+comp248PlanFlowConnect(p.receipt,p.end),chips='',labels='';
  const switchRow=comp248PlanFlowChipRow([{label:['1 · Single','purchase'],tone:'green'},{label:['2 · 10-Trip','zone rule'],tone:'blue'},{label:['3 · Monthly','purchase'],tone:'green'},{label:['4 · Reduced','purchase'],tone:'green'},{label:['5 · Exit','no receipt'],tone:'red'},{label:['Default','invalid'],tone:'red'}],405);
  chips+=switchRow.markup;
  switchRow.items.forEach((item,i)=>{edges+=comp248PlanFlowEdge(`M 450 337 V 360 H ${item.x} V 380`,item.tone,'switch');if(i<4)edges+=comp248PlanFlowEdge(`M ${item.x} 430 V 473 H 450 V 503`,item.tone,'zones');else{const lane=i===4?835:875;edges+=comp248PlanFlowEdge(`M ${item.x} 430 V 458 H ${lane} V 865 H 450 V 888`,item.tone,'valid')}});
  const zoneRow=comp248PlanFlowChipRow([{label:['Fare assigned','continue to quantity'],tone:'green'},{label:['Restricted 10-Trip','skip quantity'],tone:'red'}],665);
  chips+=zoneRow.markup;
  edges+=comp248PlanFlowEdge('M 450 597 V 618 H 300 V 640','green','zones')+comp248PlanFlowEdge('M 450 597 V 618 H 600 V 640','red','zones')+comp248PlanFlowEdge('M 300 690 V 745 H 450 V 765','green','quantity')+comp248PlanFlowEdge('M 600 690 V 720 H 790 V 850 H 450 V 888','red','valid');
  edges+=comp248PlanFlowEdge('M 450 982 V 1055','green','subtotal')+comp248PlanFlowEdge('M 560 935 H 920 V 1605 H 545','red','end');
  labels+=comp248PlanFlowEdgeLabel('TRUE · valid purchase',565,1015,'green')+comp248PlanFlowEdgeLabel('FALSE · skip receipt',735,918,'red');
  const discountFan=comp248PlanFlowFan(p.discount,p.receipt,[{label:['Monthly AND quantity ≥ 3','5% discount'],tone:'green'},{label:['Every other path','discount = 0'],tone:'blue'}]);edges+=discountFan.edges;chips+=discountFan.chips;
  return {height:1690,edges,chips:chips,labels,nodes:positions.map(item=>comp248PlanFlowNode(item.node,item.x,item.y)).join('')};
}

function comp248PlanFlowDiagram(program){
  const diagram=program===COMP248_PLAN_PROGRAMS.q1?comp248PlanQ1Diagram(program):comp248PlanQ2Diagram(program),markers=Object.entries(COMP248_PLAN_FLOW_COLOURS).map(([tone,colour])=>`<marker id="plan-arrow-${tone}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 8 4 L 0 8 Z" fill="${colour}"/></marker>`).join('');
  return `<div class="plan-flow-legend" aria-label="Flowchart legend"><span><i class="legend-start"></i>Start / end</span><span><i class="legend-input"></i>Input</span><span><i class="legend-decision"></i>Decision</span><span><i class="legend-update"></i>Update</span><span><i class="legend-output"></i>Output</span><strong>Coloured connectors = alternative paths</strong></div><div class="plan-flow-scroll" tabindex="0" aria-label="Scrollable ${esc(program.label)} decision flowchart"><svg class="plan-flow-svg" viewBox="0 0 900 ${diagram.height}" aria-label="${esc(program.label)} branching process flow"><title>${esc(program.label)} — Visio-style decision flowchart</title><desc>Standard flowchart shapes show the program sequence. Decision diamonds fan out into coloured alternative paths. Select any shape to read its user story, Java, pronunciation, and state reasoning.</desc><defs>${markers}</defs><g class="plan-flow-connectors">${diagram.edges}</g><g>${diagram.chips||''}${diagram.labels||''}</g><g class="plan-flow-nodes">${diagram.nodes}</g></svg></div><p class="plan-flow-hint">Select any shape for its teaching drawer. On a small screen, swipe the diagram sideways to inspect every branch.</p>`;
}

function comp248PlanFlowView(){
  const program=COMP248_PLAN_PROGRAMS[comp248Plan.program],traces=COMP248_PLAN_TRACES[comp248Plan.program];
  if(!traces[comp248Plan.trace])comp248Plan.trace=Object.keys(traces)[0];
  return `${comp248PlanProgramToggle()}<section class="plan-intro"><div><span>THE SHARED DESIGN LOOP</span><h2>Follow the branches. Then trace the state.</h2></div><p>${program.intro} Every diamond asks a question; every coloured path shows what can happen next.</p></section><div class="plan-flow-layout"><section class="plan-flow-map" aria-label="${program.label} process flow">${comp248PlanFlowDiagram(program)}</section><aside id="plan-node-detail" class="plan-detail-column">${comp248PlanNodeDetail(program)}</aside></div><section class="plan-trace-lab"><div class="plan-section-head"><div><span>GUIDED PAPER TRACE</span><h2>Which instruction is running, and what does Java know?</h2></div><label>Input path<select id="plan-trace-scenario">${Object.entries(traces).map(([id,t])=>`<option value="${id}" ${comp248Plan.trace===id?'selected':''}>${t.label}</option>`).join('')}</select></label></div><p class="plan-trace-rule">Predict the next state before pressing Next. The active shape and incoming connectors follow your chosen input path. Output stays separate from internal variables.</p><div id="plan-trace-card"></div></section>`;
}

function comp248PlanDrawTrace(){
  const host=$('#plan-trace-card');if(!host)return;
  const trace=COMP248_PLAN_TRACES[comp248Plan.program][comp248Plan.trace],steps=trace.steps,index=Math.min(comp248Plan.traceIndex,steps.length-1),step=steps[index];
  host.innerHTML=`<article class="plan-trace-card"><div class="plan-trace-progress"><span>Step ${index+1} of ${steps.length}</span><progress max="${steps.length}" value="${index+1}"></progress></div><div class="plan-trace-grid"><section><span>CURRENT INSTRUCTION</span><pre><code>${esc(step.code)}</code></pre><p>${step.why}</p></section><section class="plan-state-box"><span>STATE NOW</span><strong>${step.state}</strong><small>OUTPUT SEPARATELY</small><pre>${esc(step.output)}</pre></section></div><div class="plan-trace-controls"><button type="button" id="plan-trace-back" ${index===0?'disabled':''}>← Back</button><button type="button" id="plan-trace-restart">Restart</button><button type="button" class="primary" id="plan-trace-next" ${index===steps.length-1?'disabled':''}>Predict, then Next →</button></div></article>`;
  const visited=steps.slice(0,index+1).map(s=>s.node);
  document.querySelectorAll('[data-plan-node]').forEach(button=>{button.classList.toggle('is-visited',visited.includes(button.dataset.planNode));button.classList.toggle('is-current',step.node===button.dataset.planNode)});
  document.querySelectorAll('[data-plan-edge-to]').forEach(path=>{path.classList.toggle('is-visited',visited.includes(path.dataset.planEdgeTo));path.classList.toggle('is-current',step.node===path.dataset.planEdgeTo)});
  $('#plan-trace-back').onclick=()=>{comp248Plan.traceIndex=Math.max(0,index-1);comp248PlanDrawTrace()};
  $('#plan-trace-restart').onclick=()=>{comp248Plan.traceIndex=0;comp248PlanDrawTrace()};
  $('#plan-trace-next').onclick=()=>{comp248Plan.traceIndex=Math.min(steps.length-1,index+1);comp248PlanDrawTrace()};
}

function comp248PlanToolkitView(){
  const program=COMP248_PLAN_PROGRAMS[comp248Plan.program],tools=COMP248_PLAN_TOOLS.filter(t=>t.programs.includes(comp248Plan.program)&&(comp248Plan.toolFilter==='all'||t.cat===comp248Plan.toolFilter));
  return `${comp248PlanProgramToggle()}<section class="plan-intro"><div><span>TOOL SELECTION, NOT SYNTAX GUESSING</span><h2>Start with the job. Then choose the notation.</h2></div><p>This inventory covers the Java tools used by ${program.label}. Ask what the program needs before reaching for a familiar-looking expression.</p></section><div class="plan-tool-filters" aria-label="Filter Java tools">${[['all','All tools'],['input','Input'],['state','State'],['decision','Decisions'],['output','Output']].map(([id,label])=>`<button type="button" data-plan-tool-filter="${id}" class="${comp248Plan.toolFilter===id?'active':''}" aria-pressed="${comp248Plan.toolFilter===id}">${label}</button>`).join('')}</div><div class="plan-tool-grid">${tools.map(tool=>`<article class="plan-tool-card"><span>${tool.cat.toUpperCase()}</span><pre><code>${esc(tool.code)}</code></pre><p class="plan-tool-say">“${tool.say}”</p><dl><div><dt>Use it when…</dt><dd>${tool.use}</dd></div><div><dt>Avoid / check…</dt><dd>${tool.avoid}</dd></div></dl></article>`).join('')}</div><section class="plan-design-check"><h3>The five-question tool check</h3><ol><li>What kind of input or value is this?</li><li>Must the program remember it later?</li><li>Is this an action, a returned value, or a condition?</li><li>Does this tool change state, produce output, or only answer true/false?</li><li>Which boundary proves that I chose the right tool?</li></ol></section>`;
}

function comp248PlanEdgeView(){
  const program=COMP248_PLAN_PROGRAMS[comp248Plan.program],cases=COMP248_PLAN_EDGES[comp248Plan.program];
  return `${comp248PlanProgramToggle()}<section class="plan-intro"><div><span>DERIVE TESTS FROM THE RULES</span><h2>Do not merely try “a normal input.”</h2></div><p>Every condition creates a test obligation. Commit to the expected branch before revealing the reasoning.</p></section><div class="plan-edge-method">${[['01','Ordinary','One normal case per branch'],['02','Boundary','Exactly at each limit'],['03','Just outside','Immediately below and above'],['04','Invalid','Unexpected menu/type/rule'],['05','Representation','Case, spacing, token/line form'],['06','Accumulation','Preserve earlier state'],['07','Output','Only the selected path prints']].map(([n,t,d])=>`<article><span>${n}</span><strong>${t}</strong><p>${d}</p></article>`).join('')}</div><div class="plan-edge-grid">${cases.map(item=>{const key=comp248Plan.program+':'+item.id,chosen=comp248Plan.edgeAnswers[key];return `<article class="plan-edge-card"><span>TEST CASE</span><h3>${item.case}</h3><div>${item.options.map((option,i)=>`<button type="button" data-plan-edge="${item.id}:${i}" class="${chosen===i?(i===item.answer?'correct':'wrong'):''}" aria-pressed="${chosen===i}">${option}</button>`).join('')}</div>${chosen!==undefined?`<p class="plan-edge-feedback" role="status"><strong>${chosen===item.answer?'Correct path.':'Trace the conditions again.'}</strong> ${item.why}</p>`:'<p class="plan-edge-prompt">What should happen?</p>'}</article>`}).join('')}</div><section class="plan-test-template"><h3>Your universal test-table row</h3><code>TEST INPUT → EXPECTED BRANCH → EXPECTED STATE → EXPECTED OUTPUT → REASON</code><p>For a numeric boundary b, consider b−1, b, and b+1 whenever those values are meaningful. For an ordered chain, also test inputs that belong to more than one written interval so you can prove branch order.</p></section>`;
}

function comp248PlanExamView(){
  const data=saved('comp248-planning-worksheet-v1',{});
  return `<section class="plan-intro"><div><span>THE COMPILER-FREE DESIGN CONTRACT</span><h2>Plan in English. Trace on paper. Implement last.</h2></div><p>Use this sequence for new Lecture 01–04 programming problems. Your worksheet saves in this browser; Print creates a paper copy.</p></section><div class="plan-paper-loop">${['1 · Contract','2 · Stories','3 · State','4 · Decisions','5 · Tools','6 · Updates + output','7 · Edge tests','8 · Hand trace','9 · Code'].map((x,i)=>`<span>${x}${i<8?'<i>→</i>':''}</span>`).join('')}</div><section class="plan-practice"><div class="plan-section-head"><div><span>ORIGINAL PRACTICE · CINEMA ORDER</span><h2>Design before revealing the model plan.</h2></div><button type="button" id="plan-print">Print worksheet</button></div><div class="plan-problem"><strong>Requirements</strong><p>Read customer age, ticket quantity, and member yes/no. Base price is $12; ages under 18 or at least 65 pay $8. Four or more tickets receive 10% off the subtotal. A member then receives another $2 off. Print unit price, discount, member deduction, and total to two decimals.</p></div><div class="plan-worksheet">${COMP248_PLAN_PRACTICE_FIELDS.map(([id,label,hint])=>`<label><span>${label}</span><small>${hint}</small><textarea rows="3" data-plan-field="${id}" placeholder="Write your plan in English first…">${esc(data[id]||'')}</textarea></label>`).join('')}</div><div class="plan-practice-actions"><button type="button" class="primary" id="plan-check">Check my planning coverage</button><button type="button" id="plan-clear">Clear my worksheet</button></div><p id="plan-check-feedback" role="status"></p><details id="plan-model" class="plan-model"><summary>Reveal one possible model plan — after writing yours</summary><div><dl><dt>State</dt><dd>age:int; quantity:int; unitPrice:double; subtotal:double; discount:double; memberDeduction:double; total:double; memberAnswer:String.</dd><dt>Decisions</dt><dd>if age &lt;18 || age &gt;=65 → 8, else 12. Independently, if quantity &gt;=4 → 10% of subtotal. Normalize member answer; if yes → $2 deduction.</dd><dt>Tools</dt><dd>nextInt, next, toLowerCase, equals, ||, &gt;=, if/else, arithmetic assignment, printf with %.2f.</dd><dt>Essential tests</dt><dd>Ages 17/18 and 64/65; quantities 3/4; member yes/no in mixed case; verify discount before the member deduction; ensure output has two decimals.</dd><dt>Hand oracle</dt><dd>Age 17, quantity 4, YES → unit $8; subtotal $32; discount $3.20; member deduction $2; total $26.80.</dd></dl></div></details></section><section class="plan-exam-checklist"><h3>Before you write Java in the exam</h3><ul><li>Every user story has input, state, decision, update, or output attached.</li><li>Every variable has a type, initial value, and purpose.</li><li>Every condition has true and false paths and a rejoin point.</li><li>Overlapping rules are ordered deliberately.</li><li>Every branch has a normal test; every numeric boundary has an endpoint test.</li><li>You have predicted one complete trace before pressing Run.</li></ul></section>`;
}

function comp248PlanDrawBody(){
  const host=$('#comp248-plan-body');if(!host)return;
  if(comp248Plan.view==='tools')host.innerHTML=comp248PlanToolkitView();
  else if(comp248Plan.view==='edges')host.innerHTML=comp248PlanEdgeView();
  else if(comp248Plan.view==='exam')host.innerHTML=comp248PlanExamView();
  else host.innerHTML=comp248PlanFlowView();
  document.querySelectorAll('[data-plan-view]').forEach(button=>{button.classList.toggle('active',button.dataset.planView===comp248Plan.view);button.setAttribute('aria-pressed',String(button.dataset.planView===comp248Plan.view))});
  host.querySelectorAll('[data-plan-program]').forEach(button=>button.onclick=()=>{comp248Plan.program=button.dataset.planProgram;comp248Plan.node=COMP248_PLAN_PROGRAMS[comp248Plan.program].first;comp248Plan.trace=Object.keys(COMP248_PLAN_TRACES[comp248Plan.program])[0];comp248Plan.traceIndex=0;comp248PlanDrawBody()});
  host.querySelectorAll('[data-plan-node]').forEach(button=>{const select=()=>{comp248Plan.node=button.dataset.planNode;host.querySelectorAll('[data-plan-node]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));$('#plan-node-detail').innerHTML=comp248PlanNodeDetail(COMP248_PLAN_PROGRAMS[comp248Plan.program])};button.onclick=select;button.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select()}}});
  const scenario=$('#plan-trace-scenario');if(scenario)scenario.onchange=()=>{comp248Plan.trace=scenario.value;comp248Plan.traceIndex=0;comp248PlanDrawTrace()};
  if(comp248Plan.view==='flow')comp248PlanDrawTrace();
  host.querySelectorAll('[data-plan-tool-filter]').forEach(button=>button.onclick=()=>{comp248Plan.toolFilter=button.dataset.planToolFilter;comp248PlanDrawBody()});
  host.querySelectorAll('[data-plan-edge]').forEach(button=>button.onclick=()=>{const [id,index]=button.dataset.planEdge.split(':');comp248Plan.edgeAnswers[comp248Plan.program+':'+id]=+index;comp248PlanDrawBody()});
  host.querySelectorAll('[data-plan-field]').forEach(field=>field.oninput=()=>{const data=saved('comp248-planning-worksheet-v1',{});data[field.dataset.planField]=field.value;persist('comp248-planning-worksheet-v1',data)});
  const print=$('#plan-print');if(print)print.onclick=()=>window.print();
  const clear=$('#plan-clear');if(clear)clear.onclick=()=>{persist('comp248-planning-worksheet-v1',{});comp248PlanDrawBody()};
  const check=$('#plan-check');if(check)check.onclick=()=>{const missing=COMP248_PLAN_PRACTICE_FIELDS.filter(([id])=>!($(`[data-plan-field="${id}"]`).value.trim())).map(([,label])=>label);$('#plan-check-feedback').innerHTML=missing.length?`<strong>Keep planning.</strong> Complete: ${missing.join(', ')}.`:'<strong>Plan captured.</strong> Now compare your coverage with the model, then hand-trace the $26.80 oracle before writing Java.';if(!missing.length)$('#plan-model').open=true};
  queueMicrotask(renderModuleToc);
}

function renderComp248Planning(){
  document.title='From Problem to Program · COMP 248';
  $('#course-label').textContent='COMP 248 / PLANNING LAB';
  if(!COMP248_PLAN_PROGRAMS[comp248Plan.program])comp248Plan.program='q1';
  main.innerHTML=`${comp248Switch()}<section class="plan-hero"><div><span>COMP 248 · FROM PROBLEM TO PROGRAM</span><h1>Do not start with Java.<br><em>Start with the plan.</em></h1><p>Interactive process flows for Q1 and Q2 become one reusable method: user stories, state, tools, decisions, edge cases, and paper traces.</p></div><div class="plan-hero-formula" aria-label="Problem solving framework"><span>PROBLEM</span><i>→</i><span>STORIES</span><i>→</i><span>STATE</span><i>→</i><span>DECISIONS</span><i>→</i><span>JAVA</span><i>→</i><span>TESTS</span></div></section>${comp248PlanTabs()}<div id="comp248-plan-body"></div>`;
  document.querySelectorAll('[data-plan-view]').forEach(button=>button.onclick=()=>{comp248Plan.view=button.dataset.planView;comp248PlanDrawBody()});
  comp248PlanDrawBody();
  animate('.plan-hero, .plan-tabs, .plan-intro');
}
