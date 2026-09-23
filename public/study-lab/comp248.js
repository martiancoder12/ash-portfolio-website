'use strict';

const COMP248_SOURCE={
  1:{
    label:'Lecture 1 · Introduction and Java Basics',
    title:'From a problem to a running Java program',
    sub:'Think algorithmically, understand Java’s execution pipeline, and diagnose the three ways a program can fail.',
    meta:['25 official slides','7 concept notes','2 interactive labs'],
    citation:'Houari, N. (2026). COMP 248 L01: Introduction and Java Basics [Lecture slides]. Concordia University.'
  },
  2:{
    label:'Lecture 2 · Java Fundamentals and Console Input',
    title:'Build correct expressions and console programs',
    sub:'Choose types deliberately, trace changing state, read input safely, and predict exactly what Java evaluates.',
    meta:['100 official slides','10 concept notes','2 interactive labs'],
    citation:'Houari, N. (2026). COMP 248 L02: Java Fundamentals and Console Input [Lecture slides]. Concordia University.'
  }
};

const javaSection=(id,kicker,title,summary,concrete,points,steps,check,citation,code='')=>({id,kicker,title,summary,concrete,points,steps,check,citation,code});

const COMP248_NOTES={
  1:[
    javaSection('intent-machine','FOUNDATION · WHY PROGRAM','Programming translates a human goal into operations a machine can execute.','A computer does not infer intent. It follows an exact sequence of encoded instructions, so the programmer must turn an informal goal into unambiguous, finite work.','Giving directions to a literal-minded robot exposes every hidden assumption: “make tea” is not one instruction but a sequence of measurable actions.',[
      'Natural language is expressive but often ambiguous; machine instructions must be exact.',
      'A programming language gives humans a structured notation that software can translate.',
      'Correctness begins with a precise understanding of the problem, not with typing Java.'
    ],[
      ['Name the input and desired output','For three temperatures, the inputs are three numbers and the output is their arithmetic mean.'],
      ['Expose the transformation','Add the values, divide the sum by three, and retain enough precision.'],
      ['Write only executable decisions','Every word should correspond to an operation, value, or control decision the machine can perform.']
    ],{q:'Why is “calculate the answer” not yet a useful algorithm step?',options:['It does not state an executable transformation','Java cannot calculate numbers','Algorithms must use Java syntax'],answer:0,why:'The phrase hides the operations and values needed to produce the result.'},'L01 slides 3–5; Morelli & Walde §§0.1–0.4.','input → exact operations → output'),
    javaSection('java-pipeline','JAVA · PORTABILITY','Java source becomes portable bytecode before a JVM executes it.','The Java compiler checks a .java source file and produces .class bytecode. A platform-specific Java Virtual Machine loads and executes that same bytecode, which is why Java can be portable across operating systems.','A musical score is written once, then performed by different orchestras. Bytecode is the common score; each platform supplies its own JVM performer.',[
      'Source code is human-readable text stored in a .java file.',
      'javac compiles source into JVM bytecode stored in a .class file.',
      'The java launcher asks the local JVM to load and execute the compiled class.'
    ],[
      ['Save the source','Hello.java contains a class named Hello and its main method.'],
      ['Compile once','javac Hello.java checks syntax and emits Hello.class when compilation succeeds.'],
      ['Run through the JVM','java Hello loads bytecode; the JVM translates its instructions for the current machine.']
    ],{q:'Which artifact is designed to travel between platforms?',options:['The JVM bytecode in the .class file','The processor’s native machine code','The IDE window'],answer:0,why:'The bytecode is platform-neutral; each platform uses its own JVM to execute it.'},'L01 slides 6–10; Morelli & Walde §§0.5–0.6; Goodrich et al. §1.9.2.','Hello.java → javac → Hello.class → JVM'),
    javaSection('algorithm-pseudocode','DESIGN · REPRESENTATION','An algorithm is the solution; pseudocode is one way to express it before code.','An algorithm is a finite, ordered, unambiguous method for solving a class of problems. Pseudocode records that logic in structured everyday language without committing to Java punctuation or library details. The program is the executable implementation.','An architect separates the building plan from the materials used to construct it. The algorithm is the plan; Java is one construction material.',[
      'An algorithm must terminate and produce the intended result for valid inputs.',
      'Pseudocode lets you inspect logic without being distracted by braces or semicolons.',
      'The same algorithm can be implemented in Java, Python, or another language.'
    ],[
      ['Algorithm','Receive three temperatures and compute their average.'],
      ['Pseudocode','READ t1, t2, t3; SET average ← (t1 + t2 + t3) / 3; DISPLAY average.'],
      ['Java program','Declare variables, read values, evaluate the expression, and print the result using Java syntax.']
    ],{q:'What changes when pseudocode becomes Java?',options:['The solution logic must become Java’s exact syntax and operations','The mathematical answer changes','The algorithm stops being finite'],answer:0,why:'Implementation commits the design to the rules and facilities of a particular language.'},'L01 slides 11–13; Morelli & Walde §§1.1–1.3.','READ t1, t2, t3\nSET average ← (t1 + t2 + t3) / 3\nDISPLAY average'),
    javaSection('development-cycle','PROCESS · FOUR STEPS','Develop in four passes: understand, design, implement, then test and repair.','The lecture’s four-step method prevents code from becoming the place where the problem is first understood. Testing is not a final ceremony; failures feed information back into design and implementation.','A chef reads the order, plans the preparation, cooks, then tastes and adjusts. Starting with the pan before understanding the order creates rework.',[
      'Understand: identify inputs, outputs, rules, and edge cases.',
      'Design: write and inspect the algorithm before Java syntax.',
      'Implement: translate the design into readable code.',
      'Test and fix: choose cases that can reveal errors, then debug the cause.'
    ],[
      ['Understand','Should the temperature average preserve decimals? What happens with negative values?'],
      ['Design and implement','Choose double values and translate the average formula into Java.'],
      ['Test and revise','Try 10, 20, 30; then decimals and negative values. Compare actual output with the predicted result.']
    ],{q:'Which step should decide whether decimal averages matter?',options:['Understand the problem','Compile the class','Format the final output'],answer:0,why:'Precision is a requirement that should be recognized before choosing types or expressions.'},'L01 slides 14–17; Morelli & Walde §§1.1–1.5; Goodrich et al. §1.9.','Understand → Design → Implement → Test & fix'),
    javaSection('program-anatomy','STRUCTURE · CLASS AND MAIN','A minimal Java application nests executable statements inside main, inside a class.','A class header names the class and opens its body. The main method is the conventional entry point for a standalone program. Statements in the method body perform work in sequence. Braces show containment; indentation makes that structure visible.','A postal address narrows from country to city to street. Java narrows from class to method to statement so the runtime knows where the program begins.',[
      'A public class named Hello normally lives in Hello.java.',
      'public static void main(String[] args) is the application entry point introduced in the lecture.',
      'System.out.println(...) sends a value followed by a line break to standard output.'
    ],[
      ['Enter the class','public class Hello { opens the class body.'],
      ['Enter the method','main receives command-line strings and opens the executable block.'],
      ['Execute the statement','println evaluates its argument, displays it, and moves to the next line.']
    ],{q:'Where must a println statement go in this first program?',options:['Inside the main method body','Before the class header','Inside the file name'],answer:0,why:'The JVM begins this standalone program at main, where executable statements are placed.'},'L01 slides 18–20; Morelli & Walde §§1.4–1.6.','public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, COMP 248!");\n    }\n}'),
    javaSection('error-types','DEBUGGING · THREE FAILURE MODES','Compilation, execution, and correctness can fail independently.','A compile-time error violates Java’s form and prevents bytecode from being produced. A run-time error occurs while valid bytecode executes. A logical error finishes normally but computes the wrong result. The visible symptom tells you where to investigate first.','A sentence can be ungrammatical, a recipe can crash when an ingredient is missing, or a finished dish can taste wrong. Those are different debugging problems.',[
      'Compile-time: missing semicolon, misspelled identifier, or unmatched brace.',
      'Run-time: an exceptional condition occurs only while the program executes.',
      'Logical: the algorithm or expression is wrong even though Java accepts and runs it.'
    ],[
      ['Observe the phase','Did compilation fail, did execution stop, or did a result appear?'],
      ['Read the evidence','Use compiler diagnostics, exception messages, and expected-versus-actual output.'],
      ['Repair the cause','Change the smallest responsible rule, then repeat the same test.']
    ],{q:'A program prints 15 when the correct average is 20. What kind of error leads?',options:['Logical error','Compile-time error','Run-time error'],answer:0,why:'The program completed, but its algorithm or expression produced the wrong value.'},'L01 slides 21–23; Morelli & Walde §1.8; Goodrich et al. §1.9.5.','compile-time ≠ run-time ≠ logical'),
    javaSection('edit-compile-run','WORKFLOW · ITERATION','Programming is an evidence loop: edit, compile, run, inspect, and repeat.','An IDE collects an editor, compiler controls, console, and debugger in one workspace, but it does not remove the underlying cycle. Small changes and short feedback loops make each failure easier to localize.','A scientist changes one variable, reruns the experiment, and compares the result. Editing many unrelated lines at once destroys that evidence.',[
      'Save before compiling so the compiler sees the current source.',
      'Fix the first meaningful compiler error before chasing later cascades.',
      'A debugger can pause execution and expose variable state, but you still need a prediction to judge it.'
    ],[
      ['Edit one intention','Make a small, coherent change and save the source.'],
      ['Compile before running','No new bytecode exists until javac accepts the source.'],
      ['Compare and loop','Run a chosen test, compare against the prediction, and use the difference to choose the next edit.']
    ],{q:'Why fix the first compiler message before the tenth?',options:['One early syntax error can cause many later diagnostics','Only the first message is ever accurate','Java permits only one error per file'],answer:0,why:'A missing delimiter or brace can confuse the parser and create a cascade of secondary messages.'},'L01 slides 23–25; Morelli & Walde §§1.7–1.8; Goodrich et al. §1.9.','edit → save → compile → run → inspect → repeat')
  ],
  2:[
    javaSection('comments-identifiers','READABILITY · NAMES AND COMMENTS','Style makes code readable; Java’s lexical rules make it valid.','Comments document intent and are ignored during execution. Identifiers name program elements and may use letters, digits, underscores, and dollar signs, but cannot begin with a digit or reuse a reserved word. Whitespace and indentation expose structure for humans.','Labels in a workshop do not change how a machine runs, but clear labels prevent the operator from using the wrong control.',[
      '// comments to the end of a line; /* ... */ spans a block; /** ... */ supports documentation tools.',
      'Java is case-sensitive: total, Total, and TOTAL are different identifiers.',
      'Prefer meaningful lowerCamelCase variable names and consistent indentation.'
    ],[
      ['Check legality','2total is illegal because it begins with a digit; class is illegal because it is reserved.'],
      ['Check meaning','t may compile, but temperatureCelsius communicates more.'],
      ['Check consistency','Indent nested blocks the same way so braces and ownership are visible.']
    ],{q:'Which is a valid and readable variable name?',options:['temperatureCelsius','2temperature','class'],answer:0,why:'It begins with a letter, is not reserved, and communicates the value’s role.'},'L02 slides 3–14; Goodrich et al. §§1.1 and 1.9.3.','// explain why, not the obvious\ndouble temperatureCelsius = 21.5;'),
    javaSection('primitive-types','DATA · EIGHT PRIMITIVES','A primitive type defines a value’s representation, range, and operations.','Java’s eight primitive types are byte, short, int, long, float, double, char, and boolean. Integer types store whole values, floating types approximate real values, char stores one Unicode code unit, and boolean stores true or false.','Choosing a container is part of the model: a light switch needs two states, while a temperature reading needs fractional values.',[
      'int is the usual whole-number type; double is the usual decimal type.',
      'Floating-point values are approximations, so arithmetic can expose roundoff.',
      'char literals use single quotes; boolean values are true and false, not 1 and 0.'
    ],[
      ['Model the domain','A count of students is whole; a measured voltage may be fractional.'],
      ['Choose a suitable type','Use int for the count and double for the voltage.'],
      ['Respect representation','Do not expect every decimal fraction to have an exact binary floating-point form.']
    ],{q:'Which declaration best models 3.75 volts?',options:['double voltage = 3.75;','int voltage = 3.75;','boolean voltage = 3.75;'],answer:0,why:'double represents fractional numeric values and accepts the literal without narrowing.'},'L02 slides 15–31; Morelli & Walde §§5.1–5.2; Goodrich et al. §1.1.','byte short int long · float double · char · boolean'),
    javaSection('variables-constants','STATE · DECLARE, INITIALIZE, PROTECT','Variables name mutable storage; constants name values that must not change.','A declaration assigns a type and name. Initialization supplies the first value. Later assignment replaces a variable’s value. A local variable must be initialized before it is read. final prevents reassignment and is conventionally named in UPPER_SNAKE_CASE.','A labelled whiteboard square can be erased and rewritten; a printed conversion chart should be fixed. Variables and constants express that difference.',[
      'Declaration: int score; initialization: score = 0; combined: int score = 0;',
      'Assignment replaces the old value; it does not assert mathematical equality.',
      'Use final for values such as a conversion factor or fixed tax rate.'
    ],[
      ['Declare the storage','double radius; tells Java the type and name.'],
      ['Initialize before use','radius = 2.5; supplies a defined first value.'],
      ['Protect invariants','final double PI = 3.141592653589793; prevents accidental reassignment.']
    ],{q:'What does x = x + 1 mean in Java?',options:['Read the old x, add one, then replace x','Prove x equals x plus one','Declare a new constant'],answer:0,why:'The right side is evaluated first; the result is stored back in the left-side variable.'},'L02 slides 32–39; Morelli & Walde §§5.1–5.2; Goodrich et al. §1.1.','int score = 0;\nscore = score + 1;\nfinal int MAX_SCORE = 100;'),
    javaSection('scanner-input','INPUT · IMPORT AND TOKENS','Scanner converts console text into typed tokens.','java.util.Scanner must be imported or named fully. A Scanner connected to System.in reads a stream of text. nextInt, nextDouble, and similar methods parse the next token; close releases the scanner, though closing System.in also closes the underlying input stream.','A ticket window serves one token at a time. The method you call tells the clerk what shape of token to accept next.',[
      'Create with Scanner input = new Scanner(System.in); after importing java.util.Scanner.',
      'nextInt() reads an integer token; nextDouble() reads a decimal token; next() reads one word.',
      'Java 10+ can infer a local variable type with var, but the value still has one fixed compile-time type.'
    ],[
      ['Import the class','import java.util.Scanner; makes the short class name available.'],
      ['Create one scanner','Attach a Scanner object to System.in and reuse it.'],
      ['Prompt, read, validate','Tell the user what is expected, call the matching method, and handle invalid assumptions.']
    ],{q:'Which method reads the next whole-number token?',options:['nextInt()','println()','charAt()'],answer:0,why:'nextInt parses the next token as an int.'},'L02 slides 40–50; Morelli & Walde §2.6; Goodrich et al. §§1.6 and 1.8.','import java.util.Scanner;\nScanner input = new Scanner(System.in);\nint age = input.nextInt();'),
    javaSection('console-output','OUTPUT · BUILD THE MESSAGE','print stays on the current line; println finishes the line.','Java evaluates the expression passed to print or println before displaying it. When either operand of + is a String, + concatenates text. Parentheses force arithmetic to happen before concatenation. Escape sequences and text blocks represent formatting inside string data.','A label maker first assembles the full label, then prints it. The order of assembly determines whether numbers are added or merely placed side by side.',[
      'System.out.print leaves the cursor on the same line; println appends a line terminator.',
      '"Total: " + 2 + 3 produces Total: 23; "Total: " + (2 + 3) produces Total: 5.',
      '\\n inserts a newline, \\t a tab, and \\" a quote; text blocks support readable multiline text.'
    ],[
      ['Evaluate left to right','Once Java has a String on the left, subsequent + operations concatenate.'],
      ['Group intended arithmetic','Parenthesize 2 + 3 so it is evaluated before meeting the label.'],
      ['Choose layout deliberately','Use print for prompts, println for completed lines, and escapes or text blocks for structure.']
    ],{q:'What prints from System.out.println("Sum: " + 2 + 3);?',options:['Sum: 23','Sum: 5','A compile-time error'],answer:0,why:'Evaluation reaches a String first, so both numbers are concatenated from left to right.'},'L02 slides 51–57; Morelli & Walde §1.6; Goodrich et al. §1.6.1.','System.out.println("Sum: " + (2 + 3));'),
    javaSection('assignment-swap','STATE TRACE · ASSIGNMENT','Trace assignments in order because each statement changes the next statement’s inputs.','The assignment operator stores the evaluated right-hand result in the variable on the left. To swap two values, a temporary variable preserves the first value before it is overwritten.','Moving water between two full glasses needs a third glass. Without temporary storage, the first pour destroys one original value.',[
      'Only a writable variable may appear on the left of =.',
      'The right-hand expression is evaluated using the current state before assignment.',
      'A three-line swap is temp = a; a = b; b = temp;.'
    ],[
      ['Preserve a','temp = a copies the original a before any overwrite.'],
      ['Move b into a','a = b changes a, but original a is safe in temp.'],
      ['Restore into b','b = temp completes the exchange with both original values preserved.']
    ],{q:'Starting with a = 4 and b = 9, what remains after a = b; b = a;?',options:['a = 9 and b = 9','a = 9 and b = 4','a = 4 and b = 9'],answer:0,why:'The first statement destroys 4; the second copies the already-updated 9.'},'L02 slides 58–62; Morelli & Walde §5.3.','int temp = a;\na = b;\nb = temp;'),
    javaSection('arithmetic-precedence','EXPRESSIONS · EVALUATION ORDER','Types and precedence determine an arithmetic expression’s result.','Java evaluates multiplication, division, and remainder before addition and subtraction, with equal-precedence operators generally associating left to right. If both division operands are integers, the fractional part is discarded. The remainder operator returns what remains after integer division.','A calculator following the wrong grouping can execute every key correctly and still return the wrong answer. Parentheses record the intended structure.',[
      '7 / 2 is 3 because both operands are int; 7.0 / 2 is 3.5.',
      '7 % 2 is 1 and is useful for parity and cyclic patterns.',
      'Use parentheses to communicate intent even when precedence already gives the desired result.'
    ],[
      ['Resolve parentheses','Evaluate the innermost grouped expression first.'],
      ['Apply multiplicative operators','Process *, /, and % from left to right.'],
      ['Finish additive operators','Process + and - from left to right, tracking the operand types at each division.']
    ],{q:'What is the int result of 10 - 6 / 4?',options:['9','1','8.5'],answer:0,why:'Integer 6 / 4 becomes 1 first, then 10 - 1 gives 9.'},'L02 slides 63–72; Morelli & Walde §5.3; Goodrich et al. §§1.4.1–1.4.2.','int result = 10 - 6 / 4; // 9'),
    javaSection('updates','SHORTHAND · READ THE TIMING','Compound assignment and increment operators compress a state change, but timing still matters.','x += y is shorthand for an assignment based on x’s current value. ++ and -- change a variable by one. Prefix changes the variable before its value is used in the surrounding expression; postfix supplies the old value first, then changes it.','Stamping a ticket before inspection versus after inspection changes which count the inspector sees, even if the counter ends at the same value.',[
      'x += 3 expresses x = x + 3; similar forms exist for -, *, /, and %.',
      'Used alone, ++x and x++ have the same final effect.',
      'Inside a larger expression, prefix and postfix can produce different results; prefer simple statements while learning.'
    ],[
      ['Read the current state','Let x = 4 before evaluating the expression.'],
      ['Apply the timing rule','y = x++ assigns 4 to y, then changes x to 5.'],
      ['Compare prefix','y = ++x would change x to 5 first, then assign 5 to y.']
    ],{q:'If x is 4, what are y and x after y = x++;?',options:['y = 4, x = 5','y = 5, x = 5','y = 4, x = 4'],answer:0,why:'Postfix yields the old value to the expression, then performs the increment.'},'L02 slides 73–78; Morelli & Walde §5.3; Goodrich et al. §1.4.1.','int x = 4;\nint y = x++; // y is 4, x is 5'),
    javaSection('conversion-casting','TYPES · WIDEN OR NARROW','Java promotes compatible values safely; narrowing requires an explicit cast.','A widening conversion moves a value into a type that can represent at least its original range or precision category and often happens automatically. Narrowing can lose magnitude or fractional information, so Java requires an explicit cast. Casting changes the value used by the expression, not the declared type of the original variable.','Pouring a cup into a bucket is safe. Pouring a bucket into a cup may spill, so Java requires you to state that risk explicitly.',[
      'Mixed arithmetic promotes the narrower operand before evaluating the operation.',
      'double d = 5; widens automatically; int n = (int) 5.9; explicitly narrows to 5.',
      'Casting one operand before division can force real division: (double) 7 / 2 gives 3.5.'
    ],[
      ['Inspect operand types','7 and 2 are int, so division would be integer division.'],
      ['Cast before the operation','(double) 7 converts the left operand to 7.0.'],
      ['Promote and evaluate','Java promotes 2 to double and returns 3.5. Casting after 7 / 2 would only turn the already-truncated 3 into 3.0.']
    ],{q:'Which expression produces 3.5?',options:['(double) 7 / 2','(double) (7 / 2)','7 / 2'],answer:0,why:'The cast occurs before division, so one operand is double and Java performs real division.'},'L02 slides 79–87; Morelli & Walde §5.3; Goodrich et al. §1.4.2.','double average = (double) total / count;'),
    javaSection('strings','OBJECTS · TEXT AND LINE BOUNDARIES','Strings are immutable objects, and Scanner must cross into them deliberately.','A String represents a sequence of characters. Literals such as "Java" create string values, and variables hold references to them. Methods return information or new strings rather than changing the original. When nextLine follows a token read, it first consumes the pending remainder of the current line—which may be empty.','Editing a printed label means printing a replacement, while taking one word from an envelope does not remove the envelope. Immutability explains the label; the input buffer explains the line boundary.',[
      'length() returns the character count; charAt(i) uses a zero-based index; substring and replace return new strings.',
      'Use equals for content comparison; == compares references and will be studied more deeply with objects.',
      'After nextInt(), use one nextLine() to clear the pending line remainder before reading a new full line.'
    ],[
      ['Start with a reference','String course = "COMP 248"; refers to an immutable string.'],
      ['Transform or cross the boundary','A String method returns a new value; after nextInt(), a clearing nextLine consumes the pending remainder.'],
      ['Store the intended result','Assign a returned string when you want the transformation, or call nextLine again to capture the next full input line.']
    ],{q:'Why can nextLine return an empty string immediately after nextInt?',options:['It consumes the unconsumed remainder of the current line','Strings cannot follow integers','Scanner closes automatically'],answer:0,why:'Token readers leave the line separator, so nextLine consumes that empty remainder before the next full line.'},'L02 slides 88–100; Morelli & Walde §§2.1–2.6; Goodrich et al. §§1.3 and 1.6.','String name = "Java";\nint size = name.length(); // 4\ninput.nextLine(); // clear remainder')
  ]
};

const comp248Progress=()=>saved('comp248-notes-v1',{});
const comp248Route=id=>id==='comp248-notes'||/^comp248-lecture-[12]$/.test(id);
let comp248Steps={};

function comp248Switch(){
  return `<nav class="desk-switch" aria-label="Study desks"><a href="#comp248-notes" class="selected" aria-current="page">COMP 248 <span>Java programming</span></a><a href="#comp232-notes">COMP 232 <span>Discrete mathematics</span></a><a href="#quiz">ELEC 275 <span>Circuit analysis</span></a><a href="#inse201-notes">INSE 201 <span>Security ethics</span></a></nav>`;
}

function comp248Hub(){
  const progress=comp248Progress();
  const cards=[1,2].map(number=>{
    const source=COMP248_SOURCE[number],sections=COMP248_NOTES[number];
    const count=sections.filter(section=>progress[`L${number}-${section.id}`]).length;
    return `<a class="notes-lecture-card comp248-lecture-card" href="#comp248-lecture-${number}"><div><span>LECTURE ${number}</span><span>${count} / ${sections.length} studied</span></div><h2>${source.title}</h2><p>${source.sub}</p><ul>${sections.map(section=>`<li>${section.title}</li>`).join('')}</ul><strong>Open Lecture ${number} module →</strong></a>`;
  }).join('');
  main.innerHTML=`${comp248Switch()}<section class="notes-hero comp248-notes-hero"><div><div class="eyebrow">COMP 248 · LECTURE NOTES</div><h1>Read the problem.<br>Trace the state.<br>Make Java obey.</h1><p>Two source-mapped modules built from Nora Houari’s Fall 2026 decks and checked against two Java textbooks. Learn the mental model first, then make every expression and input boundary predictable.</p></div><div class="comp248-hero-code" aria-hidden="true"><span>public static void</span><strong>main</strong><i>(String[] args)</i><b>{ think(); code(); test(); }</b></div></section><div class="notes-lecture-grid comp248-lecture-grid">${cards}</div><section class="comp248-course-contract"><div><span>COURSE QUESTION</span><h2>What does Java know at this exact line?</h2><p>Good beginners do not guess at code. They track types, values, evaluation order, and the next input token until the program’s behaviour becomes explainable.</p></div><dl><div><dt>Primary evidence</dt><dd>125 lecture slides across L01 and L02</dd></div><div><dt>Textbook support</dt><dd>Morelli & Walde Chapters 0–2 and 5; Goodrich et al. Chapter 1</dd></div><div><dt>Practice model</dt><dd>Predict first, execute second, explain the difference</dd></div></dl></section><section class="notes-how"><div><span>HOW TO USE THESE</span><h2>Predict before you press Run.</h2></div><ol><li>Use Lecture 1 to connect an algorithm to source, bytecode, and execution.</li><li>Use Lecture 2 to trace types, values, operators, input, and strings.</li><li>Reveal each reasoning step only after writing your prediction.</li><li>Mark a concept studied when you can explain the output without the notes.</li></ol></section><section class="notes-reference"><div class="eyebrow">REFERENCE BASIS</div><h2>COMP 248 · Fall 2026</h2><p class="apa-reference">Houari, N. (2026). COMP 248 L01 and L02 [Lecture slides]. Concordia University.</p><p>Primary companion: Morelli, R., & Walde, R. (2017). <i>Java, Java, Java: Object-Oriented Problem Solving</i> (3rd ed., open-source edition). Technical cross-check: Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). <i>Data Structures and Algorithms in Java</i> (6th ed.). Wiley.</p></section>`;
  animate('.notes-hero, .notes-lecture-card, .comp248-course-contract');
}

function comp248Reasoning(section){
  return `<div class="note-worked"><div class="note-worked-head"><div><span>TRACE IT</span><h3>${section.steps[0][0]} to result</h3></div><span class="note-work-count" id="comp248-count-${section.id}"></span></div><div class="note-work-steps" id="comp248-work-${section.id}"></div><div class="note-work-controls"><button data-comp248-back="${section.id}">← Back</button><button data-comp248-all="${section.id}">Show all</button><button class="primary" data-comp248-next="${section.id}">Reveal next step →</button></div></div>`;
}

function comp248Card(section,index,done){
  return `<article class="note-card comp248-note-card" id="comp248-note-${section.id}" tabindex="-1"><header><div><span>${String(index+1).padStart(2,'0')} · ${section.kicker}</span><h2>${section.title}</h2><p>${section.summary}</p></div><label class="note-done"><input type="checkbox" data-comp248-done="${section.id}" ${done[section.id]?'checked':''}> studied</label></header><div class="note-analogy"><span>MAKE IT CONCRETE</span><p>${section.concrete}</p></div>${section.code?`<pre class="comp248-code"><code>${esc(section.code)}</code></pre>`:''}<ul class="note-points">${section.points.map(point=>`<li>${point}</li>`).join('')}</ul>${comp248Reasoning(section)}<div class="note-check" data-comp248-check="${section.id}"><span>RETRIEVE IT</span><h3>${section.check.q}</h3><div>${section.check.options.map((option,i)=>`<button data-comp248-answer="${section.id}:${i}" aria-pressed="false">${String.fromCharCode(65+i)} · ${esc(option)}</button>`).join('')}</div><p role="status"></p></div><p class="note-citation"><span>Mapped source</span>${section.citation}</p></article>`;
}

function comp248Labs(number){
  if(number===1)return `<div class="comp248-lab-stack"><section class="notes-lab comp248-pipeline-lab"><div><div class="eyebrow">JAVA PIPELINE INSPECTOR</div><h2>Follow one program from text to execution.</h2><p>Select an artifact to see who creates it, who can read it, and what can fail there.</p></div><div><div class="comp248-pipeline" aria-label="Java execution pipeline">${[['source','Hello.java'],['compiler','javac'],['bytecode','Hello.class'],['jvm','JVM + output']].map(([id,label],i)=>`<button data-comp248-stage="${id}" aria-pressed="${i===0}"><span>${String(i+1).padStart(2,'0')}</span>${label}</button>`).join('<i>→</i>')}</div><article id="comp248-pipeline-output" class="comp248-lab-output" aria-live="polite"></article></div></section><section class="notes-lab comp248-error-lab"><div><div class="eyebrow">ERROR CLINIC</div><h2>Diagnose the phase before changing the code.</h2><p>Select a symptom, then classify it as compile-time, run-time, or logical.</p></div><div><label class="comp248-error-select">Symptom<select id="comp248-error-scenario"><option value="semicolon">javac reports “';' expected”</option><option value="divide">The program stops with ArithmeticException</option><option value="average">The program prints 15 instead of the expected 20</option></select></label><div class="comp248-error-buttons"><button data-comp248-error="compile">Compile-time</button><button data-comp248-error="runtime">Run-time</button><button data-comp248-error="logical">Logical</button></div><p class="notes-readout" id="comp248-error-readout" aria-live="polite">Choose the phase that best explains the symptom.</p></div></section></div>`;
  return `<div class="comp248-lab-stack"><section class="notes-lab comp248-expression-lab"><div><div class="eyebrow">EXPRESSION EXPLORER</div><h2>Predict the value and its type.</h2><p>Switch expressions to expose integer division, precedence, concatenation, and casting.</p></div><div><label class="comp248-expression-select">Expression<select id="comp248-expression"><option value="intDivision">7 / 2</option><option value="realDivision">7.0 / 2</option><option value="castBefore">(double) 7 / 2</option><option value="castAfter">(double) (7 / 2)</option><option value="precedence">10 - 6 / 4</option><option value="concat">"Sum: " + 2 + 3</option><option value="grouped">"Sum: " + (2 + 3)</option></select></label><article id="comp248-expression-output" class="comp248-expression-output" aria-live="polite"></article></div></section><section class="notes-lab comp248-scanner-lab"><div><div class="eyebrow">SCANNER BOUNDARY SIMULATOR</div><h2>See why nextLine looks skipped.</h2><p>The buffer view shows what remains after nextInt and how the clearing read repairs the sequence.</p></div><div><div class="comp248-scanner-tabs"><button data-comp248-scanner="trap" aria-pressed="true">Without the fix</button><button data-comp248-scanner="fix" aria-pressed="false">With the fix</button></div><div id="comp248-scanner-flow" class="comp248-scanner-flow" aria-live="polite"></div><p class="notes-readout" id="comp248-scanner-readout"></p></div></section></div>`;
}

function renderComp248Lecture(number){
  const source=COMP248_SOURCE[number],sections=COMP248_NOTES[number],progress=comp248Progress();
  const done=Object.fromEntries(sections.map(section=>[section.id,progress[`L${number}-${section.id}`]]));
  const count=Object.values(done).filter(Boolean).length;
  comp248Steps=Object.fromEntries(sections.map(section=>[section.id,0]));
  main.innerHTML=`${comp248Switch()}<nav class="notes-breadcrumb"><a href="#comp248-notes">← All COMP 248 notes</a><div><a href="#comp248-lecture-1" ${number===1?'aria-current="page"':''}>Lecture 1</a><a href="#comp248-lecture-2" ${number===2?'aria-current="page"':''}>Lecture 2</a></div></nav><section class="lecture-head comp248-lecture-head"><div class="eyebrow">${source.label.toUpperCase()}</div><h1>${source.title}</h1><p>${source.sub}</p><div class="lecture-meta">${source.meta.map(item=>`<span>${item}</span>`).join('')}<span id="comp248-progress">${count} / ${sections.length} studied</span></div></section><nav class="lecture-jumps comp248-jumps" aria-label="Lecture ${number} concepts">${sections.map((section,i)=>`<a href="#comp248-note-${section.id}" data-comp248-jump="${section.id}"><span>${String(i+1).padStart(2,'0')}</span>${section.title}</a>`).join('')}</nav>${comp248Labs(number)}<section class="lecture-notes">${sections.map((section,i)=>comp248Card(section,i,done)).join('')}</section><section class="notes-reference"><div class="eyebrow">COMPLETE REFERENCES</div><h2>Sources for Lecture ${number}</h2><p class="apa-reference">${source.citation}</p><p class="apa-reference">Morelli, R., & Walde, R. (2017). <i>Java, Java, Java: Object-Oriented Problem Solving</i> (3rd ed., open-source edition).</p><p class="apa-reference">Goodrich, M. T., Tamassia, R., & Goldwasser, M. H. (2014). <i>Data Structures and Algorithms in Java</i> (6th ed.). Wiley.</p><p>Each concept identifies its exact lecture range and companion sections. The lecture decks determine scope and sequence; the books deepen explanations without pulling later-course material into these modules.</p></section><div class="engr-bottom-nav"><a href="#comp248-notes">All COMP 248 notes</a>${number===1?'<a href="#comp248-lecture-2">Lecture 2 · Java Fundamentals →</a>':'<a href="#comp248-lecture-1">← Lecture 1 · Java Basics</a>'}</div>`;
  wireComp248Lecture(number,sections);
  animate('.lecture-head, .notes-lab, .note-card');
}

function drawComp248Steps(section){
  const host=$(`#comp248-work-${section.id}`);if(!host)return;
  const current=comp248Steps[section.id]||0;
  host.innerHTML=section.steps.slice(0,current+1).map((item,i)=>`<div class="note-work-step ${i===current?'current':''}"><span>${i+1}</span><div><h4>${item[0]}</h4><p>${item[1]}</p></div></div>`).join('');
  $(`#comp248-count-${section.id}`).textContent=`Step ${current+1} of ${section.steps.length}`;
  document.querySelector(`[data-comp248-back="${section.id}"]`).disabled=current===0;
  document.querySelector(`[data-comp248-next="${section.id}"]`).disabled=current===section.steps.length-1;
  document.querySelector(`[data-comp248-all="${section.id}"]`).disabled=current===section.steps.length-1;
}

function wireComp248Lecture(number,sections){
  const refresh=()=>{const progress=comp248Progress();$('#comp248-progress').textContent=`${sections.filter(section=>progress[`L${number}-${section.id}`]).length} / ${sections.length} studied`};
  sections.forEach(section=>{
    drawComp248Steps(section);
    document.querySelector(`[data-comp248-back="${section.id}"]`).onclick=()=>{comp248Steps[section.id]=Math.max(0,comp248Steps[section.id]-1);drawComp248Steps(section)};
    document.querySelector(`[data-comp248-next="${section.id}"]`).onclick=()=>{comp248Steps[section.id]=Math.min(section.steps.length-1,comp248Steps[section.id]+1);drawComp248Steps(section);if(motion&&window.gsap)gsap.from(`#comp248-work-${section.id} .note-work-step:last-child`,{y:10,opacity:0,duration:.35})};
    document.querySelector(`[data-comp248-all="${section.id}"]`).onclick=()=>{comp248Steps[section.id]=section.steps.length-1;drawComp248Steps(section)};
  });
  main.querySelectorAll('[data-comp248-done]').forEach(input=>input.onchange=()=>{const progress=comp248Progress();progress[`L${number}-${input.dataset.comp248Done}`]=input.checked;persist('comp248-notes-v1',progress);refresh();queueMicrotask(renderModuleToc)});
  main.querySelectorAll('[data-comp248-answer]').forEach(button=>button.onclick=()=>{
    const [id,indexText]=button.dataset.comp248Answer.split(':'),section=sections.find(item=>item.id===id),index=+indexText,host=button.closest('.note-check');
    host.querySelectorAll('button').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed',String(item===button))});
    button.classList.add(index===section.check.answer?'correct':'wrong');
    host.querySelector('[role="status"]').innerHTML=`<strong>${index===section.check.answer?'Exactly.':'Trace it again.'}</strong> ${section.check.why}`;
  });
  main.querySelectorAll('[data-comp248-jump]').forEach(link=>link.onclick=event=>{event.preventDefault();const target=$(`#comp248-note-${link.dataset.comp248Jump}`);target.scrollIntoView({behavior:'instant'});target.focus({preventScroll:true})});
  wireComp248Labs(number);
}

function wireComp248Labs(number){
  if(number===1){
    const stages={
      source:{title:'Hello.java · source code',owner:'Created by the programmer',body:'Human-readable Java text. javac reads it. A syntax error stops the pipeline here before new bytecode exists.'},
      compiler:{title:'javac · compiler',owner:'Checks and translates',body:'The compiler validates Java’s grammar and types, then translates accepted source into JVM instructions.'},
      bytecode:{title:'Hello.class · bytecode',owner:'Created by javac',body:'Portable JVM bytecode, not source text and not a particular processor’s native code.'},
      jvm:{title:'JVM · execution',owner:'Loads and runs bytecode',body:'The platform-specific JVM executes the portable class. Run-time failures and program output appear at this stage.'}
    };
    const drawStage=id=>{const stage=stages[id];main.querySelectorAll('[data-comp248-stage]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.comp248Stage===id)));$('#comp248-pipeline-output').innerHTML=`<span>${stage.owner}</span><h3>${stage.title}</h3><p>${stage.body}</p>`};
    main.querySelectorAll('[data-comp248-stage]').forEach(button=>button.onclick=()=>drawStage(button.dataset.comp248Stage));drawStage('source');
    const errors={semicolon:{answer:'compile',why:'The compiler cannot parse a required statement terminator, so no new .class file is produced.'},divide:{answer:'runtime',why:'The source compiled, but integer division by zero triggers an exception during execution.'},average:{answer:'logical',why:'Execution completed normally, but the implemented formula or state produces the wrong answer.'}};
    main.querySelectorAll('[data-comp248-error]').forEach(button=>button.onclick=()=>{const scenario=errors[$('#comp248-error-scenario').value],correct=button.dataset.comp248Error===scenario.answer;main.querySelectorAll('[data-comp248-error]').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed',String(item===button))});button.classList.add(correct?'correct':'wrong');$('#comp248-error-readout').innerHTML=`<strong>${correct?'Correct diagnosis.':'Wrong phase.'}</strong><span>${scenario.why}</span>`});
    $('#comp248-error-scenario').onchange=()=>{main.querySelectorAll('[data-comp248-error]').forEach(item=>{item.classList.remove('correct','wrong');item.setAttribute('aria-pressed','false')});$('#comp248-error-readout').textContent='Choose the phase that best explains the symptom.'};
  }else{
    const expressions={
      intDivision:{expression:'7 / 2',value:'3',type:'int',why:'Both operands are int, so Java discards the fractional part.'},
      realDivision:{expression:'7.0 / 2',value:'3.5',type:'double',why:'The double operand promotes 2 before division.'},
      castBefore:{expression:'(double) 7 / 2',value:'3.5',type:'double',why:'The cast happens before division, forcing floating-point arithmetic.'},
      castAfter:{expression:'(double) (7 / 2)',value:'3.0',type:'double',why:'7 / 2 becomes the int 3 first; the cast only converts that result.'},
      precedence:{expression:'10 - 6 / 4',value:'9',type:'int',why:'Integer division gives 1 before subtraction occurs.'},
      concat:{expression:'"Sum: " + 2 + 3',value:'"Sum: 23"',type:'String',why:'Evaluation reaches a String immediately, then concatenates left to right.'},
      grouped:{expression:'"Sum: " + (2 + 3)',value:'"Sum: 5"',type:'String',why:'Parentheses complete the integer addition before concatenation.'}
    };
    const drawExpression=()=>{const item=expressions[$('#comp248-expression').value];$('#comp248-expression-output').innerHTML=`<code>${esc(item.expression)}</code><i>evaluates to</i><strong>${esc(item.value)}</strong><span>type · ${item.type}</span><p>${item.why}</p>`};$('#comp248-expression').onchange=drawExpression;drawExpression();
    const drawScanner=mode=>{const fix=mode==='fix';main.querySelectorAll('[data-comp248-scanner]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.comp248Scanner===mode)));$('#comp248-scanner-flow').innerHTML=`<div><span>INPUT BUFFER</span><code>20↵<br>Ash Kazi↵</code></div><i>→</i><div><span>nextInt()</span><strong>20</strong><small>buffer begins with ↵</small></div><i>→</i>${fix?'<div class="is-clear"><span>nextLine()</span><strong>""</strong><small>clears the remainder</small></div><i>→</i>':''}<div class="${fix?'is-good':'is-trap'}"><span>name = nextLine()</span><strong>${fix?'"Ash Kazi"':'""'}</strong><small>${fix?'reads the next full line':'consumes only ↵'}</small></div>`;$('#comp248-scanner-readout').innerHTML=fix?'<strong>Boundary repaired.</strong><span>The clearing read consumes the current line before the program asks for the name.</span>':'<strong>The name looks skipped.</strong><span>nextLine correctly returns the empty remainder after the integer token.</span>'};
    main.querySelectorAll('[data-comp248-scanner]').forEach(button=>button.onclick=()=>drawScanner(button.dataset.comp248Scanner));drawScanner('trap');
  }
}

function renderComp248Notes(){
  document.title='COMP 248 lecture notes · Ash’s Study Lab';
  $('#course-label').textContent='COMP 248 / LECTURE NOTES';
  const match=activeId.match(/^comp248-lecture-([12])$/);
  if(match)renderComp248Lecture(+match[1]);else comp248Hub();
}
