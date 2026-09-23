'use strict';

const ELEC275_LECTURE_SOURCES={
  1:{
    date:'8 September 2026',
    title:'Circuit fundamentals: the grammar of every later circuit',
    sub:'Linear modeling, topology, electrical quantities, sources, power, the three laws, and the professor’s series-divider boardwork.',
    range:'Class 1 recording · Circuit Fundamentals slides 1–30 · handwritten workings pp. 1–3'
  }
};

const elec275LectureSection=(id,kicker,title,summary,objective,analogy,math,points,coverage,trap,worked,check,citation)=>({
  id,kicker,title,summary,objective,analogy,math,points,coverage,trap,worked,check,citation,
  outcomeLabel:'LECTURE OUTCOME',lectureDiagram:true
});

const ELEC275_LECTURE_NOTES={
1:[
elec275LectureSection(
  'linear-modeling','CLASS 1 · THE FRAME','Treat the circuit as a model, not a picture.',
  'ELEC 275 teaches a reusable modeling pattern. Choose an across variable, choose a through variable, connect them with a constitutive law, and use conservation to generate enough independent equations. In electrical systems the pair is voltage and current; in another domain the names change, but the reasoning survives.',
  'Explain why KCL, KVL, and an element law form a reusable linear-modeling toolkit rather than three disconnected formulas.',
  'Think of the circuit as a translated sentence. Voltage and current are the nouns, KCL and KVL supply the grammar, and the element law tells how the nouns relate. Mechanical, fluid, and thermal models use the same sentence pattern with a different vocabulary.',
  String.raw`\underbrace{v}_{\text{across}}\xleftrightarrow{\;v=iR\;}\underbrace{i}_{\text{through}},\qquad \text{conservation}+\text{element law}=\text{model}`,
  ['KCL is conservation of charge at a node.','KVL is conservation of energy around a closed path.','Ohm’s law links voltage and current for an ideal resistor.','The professor’s counting rule is practical: n unknowns require n independent equations.'],
  [['Across / through pairs','Electrical: voltage/current. Mechanical: velocity/force. Fluid: pressure/flow rate. Thermal: temperature difference/heat flow.'],['Algorithms come next','Node-voltage and mesh-current analysis are equation generators built from the same three laws.'],['Models are selective','An equivalent circuit keeps the behavior needed for the question and deliberately leaves other physical detail out.']],
  'Do not copy an equation merely because the diagram looks familiar. First name the unknowns, the reference directions, and the physical law that makes each equation legal.',
  {title:'Turn one resistor into a solvable model',steps:[
    ['Name the given and the unknown',String.raw`V_s=12\,\mathrm V,\quad R=4.7\,\mathrm{k\Omega},\quad i=?`,'The model needs one unknown current and therefore one independent relation after KVL fixes the resistor voltage.'],
    ['Use conservation around the loop',String.raw`V_s-v_R=0\quad\Rightarrow\quad v_R=V_s`,'KVL says the source rise equals the resistor drop.'],
    ['Use the element law',String.raw`v_R=iR`,'Ohm’s law is the link between the across and through variables.'],
    ['Solve with units attached',String.raw`i=\frac{12}{4.7\,\mathrm{k\Omega}}=2.553\,\mathrm{mA}`,'Volts divided by kilohms produce milliamps.']
  ],answer:'The loop current is approximately 2.55 mA in the assumed direction.'},
  {q:'Why can the same modeling pattern describe a fluid or mechanical system?',options:['The variables play the same across/through/conservation roles','Every system literally contains resistors','Units are ignored'],answer:0,why:'The physical quantities change, but the mathematical roles and conservation structure remain analogous.'},
  'Davis, Class 1 recording, 00:00–04:44 and 43:35–49:26; Circuit Fundamentals slides 2–4 and 26.'
),
elec275LectureSection(
  'topology','SLIDES 5–9 · TOPOLOGY','Read connectivity before geometry.',
  'A schematic records which terminals share ideal-wire regions. Its shape, scale, bends, and crossing style are secondary. Nodes carry voltages; branches carry currents. Series elements share an unbranched current path, while parallel elements share both endpoint nodes.',
  'Identify nodes, branches, loops, meshes, series connections, and parallel connections after a circuit is redrawn.',
  'A subway map may bend or stretch a line without changing which stations connect. A circuit diagram works the same way: connectivity is the invariant, not the drawing’s physical shape.',
  String.raw`\text{same terminal pairs}\Rightarrow\text{same topology}\Rightarrow\text{same circuit equations}`,
  ['An ideal wire has no voltage drop, so every point on it belongs to one node.','Ground marks the chosen 0 V reference; repeated ground symbols may represent the same node.','A loop is any closed path; a mesh is a loop with no smaller loop inside.','A source drives the segment being studied; the load is the element or subsystem receiving that drive.'],
  [['Network versus circuit','A network is any interconnection; a circuit has at least one closed path in which charge can circulate.'],['Series test','There is no branching node between the elements, so the same current must pass through both.'],['Parallel test','Both terminals of one element connect to the same two nodes as the other element.']],
  'Visual closeness is not a connection rule. Two components drawn side by side may not be parallel, and components drawn far apart may share both nodes.',
  {title:'Count the headlamp circuit without counting bends',steps:[
    ['Color the positive-wire region',String.raw`\text{battery +, lamp 1 top, lamp 2 top}=\text{node }a`,'All three points are joined by ideal wire only.'],
    ['Color the return-wire region',String.raw`\text{battery -, lamp 1 bottom, lamp 2 bottom}=\text{node }b`,'The entire lower return is one second node.'],
    ['Count the distinct colors',String.raw`N=2\ \text{nodes}`,'Crossing either lamp or the battery moves from one node to the other.'],
    ['Classify the lamps',String.raw`\text{lamp 1}\parallel\text{lamp 2}`,'Both lamps connect between nodes a and b.']
  ],answer:'The circuit has two nodes, and the two headlamps are in parallel.'},
  {q:'What survives when a schematic is redrawn?',options:['The exact angles of the wires','Which element terminals share each node','The distance between symbols'],answer:1,why:'Connectivity—and therefore the node and branch relationships—determines circuit behavior.'},
  'Circuit Fundamentals slides 5–9; Rizzoni & Kearns (2022), §1.1, printed pp. 4–10.'
),
elec275LectureSection(
  'quantities','SLIDES 10–13 · REFERENCES','Current is a rate; voltage is a difference.',
  'Charge is the fundamental electrical quantity. Current counts how quickly charge crosses a surface, while voltage measures energy transferred per unit charge between two points. Arrows and polarity marks are chosen references: a negative result reports the opposite physical direction, not a failed calculation.',
  'Use charge, current, voltage, units, and reference directions without treating a negative answer as an error.',
  'Current is like counting people through a doorway per second; voltage is like the height difference between two floors. Moving the building’s zero-height marker changes the floor labels but not the height difference.',
  String.raw`i=\frac{dq}{dt},\qquad 1\,\mathrm A=1\,\mathrm{C/s},\qquad v_{ab}=\frac{dw}{dq}=v_a-v_b`,
  ['Conventional current follows positive charge; electrons in a metal drift the opposite way.','Voltage always needs two points, even when “node voltage” silently means relative to ground.','Changing the reference node changes individual node labels but not any element voltage.','A disconnected battery can hold voltage even though its current is zero.'],
  [['Charge sign','An electron carries −1.602 × 10⁻¹⁹ C. The sign belongs to the carrier; conventional current is defined in the positive-charge direction.'],['Reference freedom','Choose a convenient zero. Only differences influence the circuit.'],['Negative answers','A negative current or voltage means the actual direction or polarity opposes the reference you drew.']],
  'Never write a bare voltage without knowing its endpoints or reference polarity. “5 V” is incomplete unless the two points and direction are already unambiguous.',
  {title:'Translate a flow rate and an energy difference',steps:[
    ['Accumulate charge from steady current',String.raw`q=i\Delta t=(2\,\mathrm A)(3\,\mathrm s)=6\,\mathrm C`,'Amperes are coulombs per second, so seconds cancel.'],
    ['Read a voltage from work per charge',String.raw`v_{ab}=\frac{12\,\mathrm J}{3\,\mathrm C}=4\,\mathrm V`,'A volt is one joule per coulomb.'],
    ['Reverse the voltage reference',String.raw`v_{ba}=-v_{ab}=-4\,\mathrm V`,'Swapping the endpoints reverses the sign without changing the physical situation.']
  ],answer:'Six coulombs cross the surface; the stated energy transfer corresponds to v_ab = 4 V and v_ba = −4 V.'},
  {q:'A calculated current is −2 A. What does the minus sign mean?',options:['Charge disappeared','The actual current is 2 A opposite the chosen arrow','The circuit has no current'],answer:1,why:'The arrow is a reference. A negative value reports that the physical direction is opposite it.'},
  'Circuit Fundamentals slides 10–13; Rizzoni & Kearns (2022), §1.2, printed pp. 10–14.'
),
elec275LectureSection(
  'sources','SLIDES 14–17 · SOURCES','The source fixes one quantity; the circuit sets the other.',
  'An ideal voltage source guarantees its voltage while the connected circuit determines its current. An ideal current source guarantees its current while the circuit determines its voltage. Dependent sources obey the same idea, except their prescribed value is controlled by another circuit variable.',
  'Distinguish ideal voltage, current, and dependent sources and read what each source fixes from its symbol and i–v characteristic.',
  'A centrifugal pump holds a pressure difference while flow depends on the pipes; a positive-displacement pump moves a set flow while pressure depends on the restriction. Ideal electrical sources make the same trade.',
  String.raw`\text{voltage source: }v=V_s\ \forall i,\qquad \text{current source: }i=I_s\ \forall v`,
  ['A circle denotes an independent source; a diamond denotes a dependent source.','The +/− marks specify reference polarity, not whether the solved voltage must be positive.','A vertical line on an i–v plot represents fixed voltage; a horizontal line represents fixed current.','Dependent sources model devices such as transistors and amplifiers and require a controlling relationship.'],
  [['VCVS / CCVS','A voltage source controlled by a voltage or current elsewhere.'],['VCCS / CCCS','A current source controlled by a voltage or current elsewhere.'],['Real-source warning','Real devices have limits and internal effects; the ideal source is a purposeful model.']],
  'Do not ask an ideal voltage source to tell you its current in isolation. The load determines that current; the source supplies whatever the ideal model requires.',
  {title:'Let the load determine the source current',steps:[
    ['Use what the ideal source guarantees',String.raw`v_R=V_s=12\,\mathrm V`,'The resistor is connected across the ideal source.'],
    ['Apply the load law',String.raw`i=\frac{v_R}{R}=\frac{12}{4.7\,\mathrm{k\Omega}}`,'The source does not fix i; the resistor’s i–v law does.'],
    ['Compute the operating point',String.raw`i=2.553\,\mathrm{mA}`,'The pair (12 V, 2.553 mA) satisfies both the source and resistor characteristics.']
  ],answer:'The voltage source fixes 12 V; the 4.7 kΩ load sets the current to about 2.55 mA.'},
  {q:'What does an ideal current source guarantee?',options:['Its terminal voltage','Its current','Its delivered power'],answer:1,why:'The circuit may demand any source voltage in the ideal model, but the source current remains prescribed.'},
  'Circuit Fundamentals slides 14–17; Rizzoni & Kearns (2022), §§1.3–1.4, printed pp. 14–21.'
),
elec275LectureSection(
  'power','SLIDES 18–20, 29 · POWER','Use the sign of p to track energy direction.',
  'Power is the rate of energy transfer. Under the passive sign convention, current entering the positive-referenced terminal gives p=vi: positive power is absorbed and negative power is supplied. A solved circuit must conserve power—the algebraic sum over every element is zero.',
  'Compute signed element power, distinguish supplying from absorbing, and use power balance as an independent error detector.',
  'Treat each element like an account. Positive power is a deposit into the element; negative power is a withdrawal from it. The complete circuit ledger must close exactly.',
  String.raw`p=vi,\qquad \sum_k p_k=0,\qquad \text{total supplied}=\text{total absorbed}`,
  ['If the current reference enters the − terminal, use p=−vi for those references.','A source can absorb power while charging; a resistor under the passive convention absorbs power.','One watt is one joule per second.','Power balance catches sign and arithmetic errors that KCL or KVL alone may not reveal.'],
  [['Quadrant meaning','With passive references, p>0 in quadrants I and III because v and i have the same sign.'],['Supply is negative p','“Supplies 10 W” corresponds to p=−10 W in the algebraic ledger.'],['Ratings matter','A resistor must dissipate less than its rated power with an engineering safety margin.']],
  'Do not decide whether an element supplies or absorbs from its source/resistor symbol. Decide from the chosen voltage/current references and the sign of the computed power.',
  {title:'Audit a source feeding one load',steps:[
    ['Compute the load power',String.raw`p_B=(5\,\mathrm V)(2\,\mathrm A)=+10\,\mathrm W`,'Current enters the load’s positive terminal, so positive power means absorption.'],
    ['Compute the source power',String.raw`p_A=-(5\,\mathrm V)(2\,\mathrm A)=-10\,\mathrm W`,'The same current leaves the source’s positive terminal, so the passive-reference formula is −vi.'],
    ['Close the ledger',String.raw`\sum p=-10+10=0`,'Supplied and absorbed power are equal.']
  ],answer:'Element A supplies 10 W, element B absorbs 10 W, and the algebraic total is 0 W.'},
  {q:'Under passive sign convention, what does p=−8 W mean?',options:['The element supplies 8 W','The element absorbs 8 W','The circuit violates conservation'],answer:0,why:'Negative signed power means energy leaves the element and enters the rest of the circuit.'},
  'Circuit Fundamentals slides 18–20 and 29; Rizzoni & Kearns (2022), §1.4, printed pp. 21–27.'
),
elec275LectureSection(
  'three-laws','SLIDES 21–23, 27–28 · THE THREE LAWS','Balance the node, close the loop, link v to i.',
  'KCL balances currents at a node, KVL balances voltage changes around a loop, and Ohm’s law describes an ideal resistor. They do different jobs. A complete solution usually uses conservation to organize the circuit and an element law to replace unknown branch quantities.',
  'Combine KCL, KVL, and Ohm’s law with one consistent sign convention and verify the resulting circuit independently.',
  'Imagine a road junction inside a mountain loop. KCL counts the cars entering and leaving the junction; KVL checks that the total climb and descent around the loop cancel; Ohm’s law tells how steep one road feels for a given flow.',
  String.raw`\text{KCL: }\sum i=0,\qquad \text{KVL: }\sum v=0,\qquad \text{Ohm: }v=iR`,
  ['For KCL, choose entering-positive or leaving-positive and keep that convention for the whole equation.','For KVL, choose one loop direction; − to + is a rise and + to − is a drop.','With n nodes, only n−1 node equations are independent.','Resistance depends on geometry and material: R=ρℓ/A.'],
  [['KCL boundary','The law applies to a single node or any closed boundary, including a supernode.'],['KVL independence','Use enough independent loops; repeating a dependent loop equation adds no information.'],['Physical resistor','Length raises resistance, cross-sectional area lowers it, and temperature/material may change it.']],
  'A sign convention can be different from somebody else’s and still be correct. The error is changing conventions halfway through the same equation.',
  {title:'One loop, three checks',steps:[
    ['Combine the series resistance',String.raw`R_T=1\,\mathrm{k\Omega}+2\,\mathrm{k\Omega}=3\,\mathrm{k\Omega}`,'There is no branch between the two resistors, so one current flows through both.'],
    ['Find the shared current',String.raw`i=\frac{9\,\mathrm V}{3\,\mathrm{k\Omega}}=3\,\mathrm{mA}`,'KVL plus Ohm’s law gives the loop current.'],
    ['Recover both drops',String.raw`v_1=(3\,\mathrm{mA})(1\,\mathrm{k\Omega})=3\,\mathrm V,\quad v_2=6\,\mathrm V`,'The same series current passes through each resistor.'],
    ['Run the KVL and power checks',String.raw`9-3-6=0,\qquad 27\,\mathrm{mW}=9\,\mathrm{mW}+18\,\mathrm{mW}`,'Both energy checks close.']
  ],answer:'i=3 mA, v₁=3 V, v₂=6 V; both KVL and power balance are satisfied.'},
  {q:'Which law relates the current through a resistor to its voltage?',options:['KCL','KVL','Ohm’s law'],answer:2,why:'KCL and KVL enforce conservation; Ohm’s law is the resistor’s constitutive link.'},
  'Circuit Fundamentals slides 21–23 and 27–28; Rizzoni & Kearns (2022), §§1.5–1.6, printed pp. 27–40.'
),
elec275LectureSection(
  'series-boardwork','HANDWRITTEN WORKINGS · SERIES','Derive the divider from the loop—do not memorize it loose.',
  'The professor’s handwritten sequence starts with a one-resistor loop, adds a second resistor, writes KVL, finds the one shared series current, and only then obtains the voltage-divider expressions. The divider is therefore a consequence of topology, KVL, and Ohm’s law—not a standalone trick.',
  'Reconstruct the voltage-divider rule from the original circuit and state the topology condition that makes it valid.',
  'A fixed budget is divided in proportion to two price tags. The total source voltage is the budget, resistance determines each share, and the shared current is the common exchange rate.',
  String.raw`i=\frac{V_s}{R_1+R_2},\qquad v_1=V_s\frac{R_1}{R_1+R_2},\qquad v_2=V_s\frac{R_2}{R_1+R_2}`,
  ['Series means both resistors carry the same current because no third branch leaves their common node.','KVL gives V_s=v₁+v₂ before any divider formula is written.','The larger series resistance receives the larger voltage magnitude.','A load connected to the midpoint changes the topology and invalidates the unloaded two-resistor divider formula.'],
  [['Open and short limits','As R₂→0, v₂→0. As R₂→∞ relative to R₁, v₂ approaches V_s in the ideal unloaded model.'],['Units check','V/kΩ gives mA; mA·kΩ returns V.'],['Power check','The source power magnitude must equal i²R₁+i²R₂.']],
  'The divider formula is not valid merely because two resistors are drawn beside each other. Confirm the shared-current, unbranched series condition first.',
  {title:'Rebuild the board derivation',steps:[
    ['Write KVL around the loop',String.raw`V_s-v_1-v_2=0`,'The source rise equals the two resistor drops.'],
    ['Use the one shared current',String.raw`v_1=iR_1,\qquad v_2=iR_2`,'The common node has no third branch, so the resistor currents are equal.'],
    ['Solve for current',String.raw`V_s=i(R_1+R_2)\Rightarrow i=\frac{V_s}{R_1+R_2}`,'Substitution turns KVL into one equation in i.'],
    ['Recover each voltage',String.raw`v_1=V_s\frac{R_1}{R_1+R_2},\qquad v_2=V_s\frac{R_2}{R_1+R_2}`,'Each resistor receives its fraction of the total series resistance.'],
    ['Check the budget',String.raw`v_1+v_2=V_s\frac{R_1+R_2}{R_1+R_2}=V_s`,'The result automatically satisfies KVL.']
  ],answer:'The voltage divider follows directly from KVL and the shared series current; it is valid only while the midpoint is not branching into another load.'},
  {q:'What must be true before using the two-resistor voltage-divider formula?',options:['Both resistors have equal values','The resistors carry the same unbranched current','The source current is zero'],answer:1,why:'The derivation substitutes one shared current through both resistors. A branch at their common node breaks that condition.'},
  'Davis, handwritten lecture workings, pp. 1–3; Circuit Fundamentals slides 24–28.'
)
]};

ELEC275_LECTURE_SOURCES[2]={
  date:'Textbook Chapter 2',
  title:'Equivalent networks: keep the behaviour, lose the clutter',
  sub:'Division, reduction, superposition, one-port equivalents, maximum power, measurement loading, and nonlinear operating points.',
  range:'Rizzoni & Kearns · Chapter 2 · printed pp. 79–145 · nine learning objectives'
};

ELEC275_LECTURE_NOTES[2]=[
elec275LectureSection(
  'division','§§2.1–2.2 · DIVISION','Let topology decide what divides.',
  'Series branches share one current, so voltage divides in proportion to resistance. Parallel branches share one voltage, so current divides in inverse proportion to resistance. Both rules are compressed forms of Kirchhoff’s laws plus Ohm’s law—not substitutes for reading the circuit.',
  'Derive and apply voltage and current division in simple series, parallel, and series-parallel networks.',
  'A series path is one conveyor belt carrying the same package through every station; each station takes a voltage share proportional to its resistance. Parallel paths are checkout lanes seeing the same entrance-to-exit pressure; the easier lane carries more current.',
  String.raw`v_k=v_s\frac{R_k}{\sum R},\qquad i_1=i_s\frac{R_2}{R_1+R_2}=i_s\frac{G_1}{G_1+G_2}`,
  ['Voltage division requires the same unbranched current through the series resistors.','Current division requires the branch resistors to share both endpoint nodes.','The larger series resistance receives the larger voltage magnitude.','The smaller parallel resistance carries the larger current magnitude.'],
  [['Series reduction','Series resistances add because their voltage drops add at one shared current.'],['Parallel reduction','Parallel conductances add because branch currents add at one shared voltage.'],['Wheatstone bridge','A balanced bridge has equal divider ratios, so its midpoint voltage difference is zero.']],
  'Never choose a divider formula from visual proximity. Prove the series or parallel topology first; a load attached to a divider midpoint changes the network.',
  {title:'Predict both divider outputs',steps:[
    ['Reduce the series path',String.raw`R_T=2\,\mathrm{k\Omega}+4\,\mathrm{k\Omega}=6\,\mathrm{k\Omega}`,'One unbranched path means the resistances add.'],
    ['Divide the source voltage',String.raw`v_{4k}=12\frac{4}{2+4}=8\,\mathrm V`,'The 4 kΩ resistor receives four of the six resistance parts.'],
    ['Reduce the parallel pair',String.raw`R_P=3\parallel6=\frac{(3)(6)}{3+6}=2\,\mathrm{k\Omega}`,'The equivalent is smaller than the smallest branch resistance.'],
    ['Divide a 6 mA source',String.raw`i_{3k}=6\frac{6}{3+6}=4\,\mathrm{mA},\quad i_{6k}=2\,\mathrm{mA}`,'Current divides inversely: the 3 kΩ path carries twice the 6 kΩ path current.'],
    ['Audit the totals',String.raw`8+4=12\,\mathrm V,\qquad4+2=6\,\mathrm{mA}`,'KVL and KCL both close.']
  ],answer:'The 4 kΩ series resistor has 8 V; the 3 kΩ and 6 kΩ parallel branches carry 4 mA and 2 mA.'},
  {q:'Why does the smaller parallel resistor carry more current?',options:['Both branches share voltage, so i=v/R','The smaller resistor receives more voltage','Current division is proportional to resistance'],answer:0,why:'Parallel branches have the same voltage. Ohm’s law therefore makes current inversely proportional to resistance.'},
  'Rizzoni & Kearns (2022), §§2.1–2.2, printed pp. 80–92.'
),
elec275LectureSection(
  'equivalent-resistance','§2.3 · EQUIVALENT RESISTANCE','Redraw the nodes before reducing the resistors.',
  'Equivalent resistance is the single resistance that presents the same terminal i–v relationship as the original resistor network. The reliable method is to identify the two terminals, redraw ideal-wire nodes clearly, reduce genuine series or parallel groups, and check the result against physical bounds.',
  'Redraw a resistive network and compute the resistance seen between two specified nodes without changing its connectivity.',
  'A tangled transit map becomes solvable when every station with the same name is merged. Redrawing the lines does not change the route; it only makes the connections visible.',
  String.raw`R_{eq}=\frac{v_{test}}{i_{test}},\qquad R_s=\sum R_k,\qquad \frac1{R_p}=\sum_k\frac1{R_k}`,
  ['Equivalent resistance is always defined at a port: name the two terminals first.','Elements are series only when their shared node has no other branch.','Elements are parallel only when both endpoint nodes match.','A test source handles networks that cannot be collapsed by inspection.'],
  [['Redraw legally','Stretch, rotate, and move wires while preserving which terminals share each node.'],['Bound the answer','A parallel equivalent must be below the smallest branch; a series equivalent must exceed every positive term.'],['Independent sources','When finding resistance seen at a port, independent voltage sources become shorts and independent current sources become opens. Dependent sources remain active.']],
  'Do not “add the resistors you can see.” A geometric chain may contain a branching node, and crossed wires are connected only when the schematic marks a junction.',
  {title:'Collapse a series-parallel network',steps:[
    ['Name the port and redraw the nodes',String.raw`a\;\longrightarrow\;2\,\mathrm{k\Omega}\;\longrightarrow\;(6\,\mathrm{k\Omega}\parallel3\,\mathrm{k\Omega})\;\longrightarrow\;b`,'The redrawing exposes one series resistor followed by a true parallel pair.'],
    ['Reduce the parallel block',String.raw`6\parallel3=\frac{18}{9}=2\,\mathrm{k\Omega}`,'The result is below the 3 kΩ smaller branch, as it must be.'],
    ['Add the remaining series resistance',String.raw`R_{ab}=2+2=4\,\mathrm{k\Omega}`,'The two reduced blocks now share an unbranched path.'],
    ['Test the terminal behaviour',String.raw`v_{test}=8\,\mathrm V\Rightarrow i_{test}=\frac8{4\,\mathrm{k\Omega}}=2\,\mathrm{mA}`,'The port responds exactly like one 4 kΩ resistor.']
  ],answer:'The network seen from a–b is equivalent to 4 kΩ.'},
  {q:'What is the safest first move in an awkward resistor network?',options:['Assume nearby resistors are parallel','Identify the port and label every node','Replace every source with a short'],answer:1,why:'Series and parallel relationships are facts about shared nodes, so the terminal pair and topology must come first.'},
  'Rizzoni & Kearns (2022), §2.3, printed pp. 93–99.'
),
elec275LectureSection(
  'superposition','§2.4 · SUPERPOSITION','Ask one independent source at a time.',
  'A linear network’s voltage or current response equals the algebraic sum of the responses produced by each independent source acting alone. Turn off other independent sources by setting their prescribed value to zero; retain dependent sources because they belong to the network law. Compute power only after the total voltage or current is reconstructed.',
  'Apply superposition to a linear circuit containing multiple independent sources while preserving dependent sources.',
  'Noise-cancelling headphones predict several waves separately and add their signed effects. Superposition does the same with source contributions in a linear circuit.',
  String.raw`x=\sum_k x^{(k)},\qquad V_s\to0\Rightarrow\text{short},\qquad I_s\to0\Rightarrow\text{open}`,
  ['Deactivate independent sources; do not physically delete every source symbol.','A zero-valued ideal voltage source is a short circuit.','A zero-valued ideal current source is an open circuit.','Dependent sources stay active because their values are controlled by circuit variables.'],
  [['Signed contributions','A source contribution may oppose the chosen reference; add algebraically.'],['Linear responses only','Use superposition for voltage and current, not directly for power.'],['Final audit','The summed result must satisfy the original circuit with every source restored.']],
  'Power is nonlinear in voltage or current. In general, total power is not the sum of the powers produced by the sources acting separately.',
  {title:'Combine two opposing source contributions',steps:[
    ['Keep the 12 V source; turn off the 6 V source',String.raw`i^{(1)}=\frac{12}{2\,\mathrm{k\Omega}+4\,\mathrm{k\Omega}}=2\,\mathrm{mA}`,'Replacing the other ideal voltage source by a short leaves a 6 kΩ loop.'],
    ['Keep the 6 V source; turn off the 12 V source',String.raw`i^{(2)}=-\frac{6}{6\,\mathrm{k\Omega}}=-1\,\mathrm{mA}`,'Its contribution points opposite the chosen current arrow.'],
    ['Add signed responses',String.raw`i=i^{(1)}+i^{(2)}=1\,\mathrm{mA}`,'Linear responses add algebraically.'],
    ['Compute power from the total',String.raw`p_{4k}=i^2(4\,\mathrm{k\Omega})=4\,\mathrm{mW}`,'Power is evaluated only after the total current is known.']
  ],answer:'The net current is 1 mA in the chosen direction; the 4 kΩ resistor absorbs 4 mW.'},
  {q:'What happens to a dependent source during superposition?',options:['It is always shorted','It is always opened','It remains active'],answer:2,why:'Only independent sources are deactivated. A dependent source is part of the network’s linear relationship and must remain.'},
  'Rizzoni & Kearns (2022), §2.4, printed pp. 100–104.'
),
elec275LectureSection(
  'source-load','§2.5 · SOURCE–LOAD VIEW','Split the problem at one port.',
  'The source–load perspective separates a system into two one-port networks joined at a terminal pair. Their operating point is the voltage and current pair that satisfies both terminal characteristics simultaneously. This turns a complicated network problem into the intersection of two simpler relationships.',
  'Form source and load terminal equations and identify their common operating point graphically or algebraically.',
  'A seller names a supply curve and a buyer names a demand curve. The actual transaction is the point where both agree. Source and load i–v curves negotiate the circuit’s operating point in the same way.',
  String.raw`\text{source: }v=v_T-iR_T,\qquad \text{load: }v=f(i),\qquad \text{operating point}=\text{intersection}`,
  ['The port voltage is shared by source and load.','With consistent references, the current leaving the source enters the load.','Equivalent does not mean internally identical; it means the same terminal i–v behaviour.','The graphical method remains useful when the load relationship is nonlinear.'],
  [['Choose the cut','Separate the network at the two terminals that matter to the design question.'],['Write two characteristics','Express both subnetworks using the same port voltage and current references.'],['Find compatibility','The intersection is the only pair both one-ports can sustain.']],
  'Never compare two i–v equations that use opposite current directions without correcting a sign. The same port reference must be used on both sides.',
  {title:'Find a source–load operating point',steps:[
    ['Write the source characteristic',String.raw`v=10-2i`,'A 10 V Thévenin source with 2 Ω internal resistance loses 2 V per ampere.'],
    ['Write the load characteristic',String.raw`v=3i`,'The 3 Ω load follows Ohm’s law.'],
    ['Enforce the common port voltage',String.raw`10-2i=3i\Rightarrow i=2\,\mathrm A`,'At the connection, both one-ports must report the same voltage.'],
    ['Recover the operating voltage',String.raw`v=(3\,\Omega)(2\,\mathrm A)=6\,\mathrm V`,'The pair (6 V, 2 A) lies on both characteristics.']
  ],answer:'The joined one-ports operate at v = 6 V and i = 2 A.'},
  {q:'When are two one-port networks equivalent?',options:['Their internal schematics look identical','They have the same terminal i–v relationship','They contain the same number of elements'],answer:1,why:'A connected load can observe only the terminal relationship, so identical external behaviour is the definition that matters.'},
  'Rizzoni & Kearns (2022), §2.5, printed pp. 105–107.'
),
elec275LectureSection(
  'source-transformations','§2.6 · SOURCE TRANSFORMATIONS','Swap the source form, preserve the port.',
  'A voltage source in series with a resistance and a current source in parallel with the same resistance are equivalent when they generate the same terminal i–v characteristic. Source transformations expose combinations that can then be reduced, but only when the resistor is in the required series or parallel relationship with the source.',
  'Transform between Thévenin-form and Norton-form sources and use the transformation to simplify a network.',
  'A gift card and a cash allowance can fund the same purchase even though they look different. The conversion is valid only when the budget and constraints produce the same options at the checkout—the port.',
  String.raw`V_T=I_NR_T,\qquad I_N=\frac{V_T}{R_T},\qquad R_N=R_T`,
  ['The source resistance keeps the same numerical value.','Match voltage-source polarity with current-source arrow direction.','The transformation preserves terminal behaviour, not internal current or power.','Dependent sources may also be transformed when their control relation is preserved.'],
  [['Thévenin form','Ideal voltage source in series with R_T.'],['Norton form','Ideal current source in parallel with R_N.'],['Use strategically','Transform a source when doing so creates reducible parallel sources or series sources/resistors.']],
  'A resistor merely drawn beside a source is not necessarily its series or parallel source resistance. Verify the two-terminal connection pattern before transforming.',
  {title:'Transform and solve one loaded source',steps:[
    ['Convert to Norton form',String.raw`V_T=12\,\mathrm V,\ R_T=3\,\Omega\Rightarrow I_N=\frac{12}{3}=4\,\mathrm A`,'The equivalent current source is 4 A in parallel with the same 3 Ω resistance.'],
    ['Attach a 6 Ω load',String.raw`R_N\parallel R_L=3\parallel6=2\,\Omega`,'Both resistances share the source terminal pair.'],
    ['Find the port voltage',String.raw`v=(4\,\mathrm A)(2\,\Omega)=8\,\mathrm V`,'The parallel equivalent converts Norton current to terminal voltage.'],
    ['Recover load current',String.raw`i_L=\frac{8}{6}=\frac43\,\mathrm A`,'The load sees the same 8 V in either source form.']
  ],answer:'The 12 V, 3 Ω source becomes 4 A in parallel with 3 Ω; the 6 Ω load receives 8 V and 4/3 A.'},
  {q:'What must remain unchanged during a source transformation?',options:['The internal source current','The terminal i–v characteristic','The power dissipated inside every element'],answer:1,why:'The two circuits are equivalent at the port, even though their internal variables can differ.'},
  'Rizzoni & Kearns (2022), §2.6, printed pp. 108–110.'
),
elec275LectureSection(
  'thevenin-norton','§2.7 · THÉVENIN / NORTON','Replace any linear one-port with two numbers.',
  'Viewed from a port, any linear resistive network can be represented by a Thévenin voltage source in series with a resistance or a Norton current source in parallel with that resistance. Find open-circuit voltage, short-circuit current, and the resistance seen at the port using the method appropriate to the source mix.',
  'Determine Thévenin and Norton equivalents for networks with independent and dependent sources.',
  'A complex organization may expose only a help-desk promise and a response delay. Users do not need its internal org chart; those two external properties summarize how it behaves when a request is attached.',
  String.raw`V_T=V_{oc},\qquad I_N=I_{sc},\qquad R_T=R_N=\frac{V_{oc}}{I_{sc}}`,
  ['Remove the load before finding the equivalent seen by that load.','Open-circuit voltage is the Thévenin voltage with the output current equal to zero.','Short-circuit current is the Norton current with the output voltage equal to zero.','With dependent sources, apply a test source or use V_oc/I_sc; never deactivate the dependent source.'],
  [['Independent-source method','Deactivate independent sources and compute resistance seen into the port.'],['Test-source method','Apply v_test or i_test and solve R_T=v_test/i_test.'],['Conversion check','The Thévenin and Norton forms must satisfy V_T=I_NR_T.']],
  '“Turn off the sources” means set independent source values to zero. It does not mean erase dependent sources, and it does not apply while finding V_oc or I_sc.',
  {title:'Build both equivalents from terminal tests',steps:[
    ['Measure the open-circuit terminal voltage',String.raw`V_{oc}=18\,\mathrm V\Rightarrow V_T=18\,\mathrm V`,'No load current flows, so the port voltage directly gives the Thévenin source.'],
    ['Measure the short-circuit current',String.raw`I_{sc}=3\,\mathrm A\Rightarrow I_N=3\,\mathrm A`,'A zero-voltage short reveals the Norton current.'],
    ['Infer the equivalent resistance',String.raw`R_T=R_N=\frac{18}{3}=6\,\Omega`,'The ratio follows from the common terminal characteristic.'],
    ['Audit the conversion',String.raw`I_NR_N=(3)(6)=18\,\mathrm V=V_T`,'Both source forms agree at the port.']
  ],answer:'The one-port is 18 V in series with 6 Ω, or equivalently 3 A in parallel with 6 Ω.'},
  {q:'How should R_T be found when dependent sources are present?',options:['Delete the dependent sources','Short every source, including dependent ones','Keep dependent sources and use a test source or V_oc/I_sc'],answer:2,why:'Dependent sources are controlled elements of the network and must remain active while the port resistance is determined.'},
  'Rizzoni & Kearns (2022), §2.7, printed pp. 111–131.'
),
elec275LectureSection(
  'maximum-power','§2.8 · MAXIMUM POWER','Match the load when power—not efficiency—is the goal.',
  'For a linear resistive source represented by its Thévenin equivalent, load power is maximized when the load resistance equals the Thévenin resistance. At that operating point half the source voltage falls across the load, and the same power is dissipated internally, so maximum power transfer is only 50% efficient.',
  'Choose a resistive load for maximum power and distinguish maximum power from maximum efficiency.',
  'Two people pull a cart through a gearbox. If the gearing is too light or too heavy, little useful power reaches the wheels. Matching the load to the source balances force and speed—but it also means equal loss inside the source.',
  String.raw`P_L=\frac{V_T^2R_L}{(R_T+R_L)^2},\qquad R_L=R_T,\qquad P_{L,\max}=\frac{V_T^2}{4R_T}`,
  ['Maximum power occurs at R_L/R_T=1 for a purely resistive DC network.','At the match, V_L=V_T/2 and I=V_T/(2R_T).','The matched source dissipates the same power internally as the load receives.','Power systems often prefer high efficiency over the maximum-power condition.'],
  [['Too small a load','Current is high, but most voltage and power are lost in R_T.'],['Too large a load','Voltage approaches V_T, but current becomes too small.'],['Matched load','The product V_LI_L reaches its maximum.']],
  'Do not conclude that matching always gives the best design. It maximizes load power, not voltage regulation, battery life, or efficiency.',
  {title:'Size the load and compute the maximum',steps:[
    ['Read the equivalent source',String.raw`V_T=24\,\mathrm V,\qquad R_T=6\,\Omega`,'The entire upstream network has already been reduced to two terminal parameters.'],
    ['Match the load',String.raw`R_L=R_T=6\,\Omega`,'The maximum-power theorem fixes the load value.'],
    ['Find current and load voltage',String.raw`I=\frac{24}{6+6}=2\,\mathrm A,\qquad V_L=(2)(6)=12\,\mathrm V`,'At the match, the source voltage splits evenly.'],
    ['Compute delivered power',String.raw`P_{L,\max}=I^2R_L=(2)^2(6)=24\,\mathrm W`,'The closed form 24²/(4·6) gives the same result.'],
    ['State the efficiency',String.raw`P_{R_T}=24\,\mathrm W\Rightarrow\eta=\frac{24}{24+24}=50\%`,'Equal resistances dissipate equal power at the common current.']
  ],answer:'Choose R_L = 6 Ω. The load receives 24 W at 12 V and 2 A; the transfer efficiency is 50%.'},
  {q:'What is true at the maximum-power match?',options:['R_L=0','R_L=R_T and the efficiency is 50%','R_L approaches infinity'],answer:1,why:'Equal source and load resistances maximize the load-power expression and split both voltage and dissipation equally.'},
  'Rizzoni & Kearns (2022), §2.8, printed pp. 132–134.'
),
elec275LectureSection(
  'practical-measurement','§§2.9–2.10 · REAL SOURCES + METERS','Model the instrument before trusting the reading.',
  'Practical voltage sources behave like an ideal voltage source with a small series resistance; practical current sources behave like an ideal current source with a large parallel resistance. Meters also load the circuit: an ammeter adds series resistance, a voltmeter adds parallel resistance, and an ohmmeter reads every available resistive path.',
  'Predict source loading and choose meter connections and internal resistances that minimize measurement disturbance.',
  'A thermometer placed in a tiny cup changes the cup’s temperature slightly. Measurement is an interaction. Good instruments are designed so their added pathway barely changes the quantity they observe.',
  String.raw`v_L=V_s\frac{R_L}{r_s+R_L},\qquad R_A\to0,\qquad R_V\to\infty`,
  ['A strong voltage source has internal resistance much smaller than its normal load.','A strong current source has internal resistance much larger than its normal load.','Connect an ammeter in series and a voltmeter in parallel.','Disconnect power and isolate the intended path before using an ohmmeter.'],
  [['Ammeter loading','Its nonzero series resistance lowers the current being measured.'],['Voltmeter loading','Its finite parallel resistance lowers the voltage being measured.'],['Wattmeter model','It combines an ammeter path for current and a voltmeter path for voltage.']],
  'Never place an ammeter directly across an ideal voltage source: its very low resistance creates a near short circuit. Never measure resistance in an energized network.',
  {title:'Quantify a voltmeter’s loading error',steps:[
    ['Find the undisturbed divider output',String.raw`V_o=10\frac{100\,\mathrm{k\Omega}}{100\,\mathrm{k\Omega}+100\,\mathrm{k\Omega}}=5.00\,\mathrm V`,'Without a meter, equal divider resistors split the source in half.'],
    ['Include the 1 MΩ meter',String.raw`R_{lower}=100\parallel1000=90.91\,\mathrm{k\Omega}`,'The voltmeter becomes a real parallel branch.'],
    ['Recompute the loaded reading',String.raw`V_m=10\frac{90.91}{100+90.91}=4.762\,\mathrm V`,'The meter changes the circuit it observes.'],
    ['Report the measurement error',String.raw`\%\,error=\frac{4.762-5.000}{5.000}\times100=-4.76\%`,'A higher meter resistance would reduce the loading error.']
  ],answer:'The 1 MΩ voltmeter reads about 4.762 V, 4.76% below the undisturbed 5.00 V.'},
  {q:'What internal resistance should an ideal voltmeter have?',options:['Zero','Equal to the load','Infinite'],answer:2,why:'An infinite parallel resistance draws zero current and therefore does not disturb the measured voltage.'},
  'Rizzoni & Kearns (2022), §§2.9–2.10, printed pp. 135–140.'
),
elec275LectureSection(
  'nonlinear-loads','§2.11 · NONLINEAR LOADS','Find the intersection when Ohm’s law is not a line.',
  'Diodes, transistors, sensors, and many physical loads do not have a constant resistance. Reduce the linear source network to a terminal characteristic, write or plot the nonlinear load characteristic, and solve for their intersection. That operating point is the only voltage and current pair that satisfies both sides.',
  'Use load-line analysis or an algebraic characteristic to determine voltage, current, and power for a nonlinear load.',
  'A road speed must satisfy both the engine’s available force and the hill’s required force. Neither curve alone chooses the speed; the intersection does. A nonlinear circuit’s operating point is the same negotiation.',
  String.raw`\text{load line: }i=\frac{V_T-v}{R_T},\qquad \text{device: }i=f(v),\qquad P=vi`,
  ['The load line comes from the linear source equivalent.','Its voltage intercept is V_T and its current intercept is V_T/R_T.','A graphical solution is valid even when f(v) has no convenient inverse.','After finding the intersection, verify the point in both characteristics.'],
  [['Open-circuit intercept','At i=0, the port voltage equals V_T.'],['Short-circuit intercept','At v=0, the current equals V_T/R_T.'],['Multiple intersections','Some nonlinear characteristics can admit multiple operating points; stability then matters.']],
  'Do not replace a nonlinear device by v/i at one point and assume that ratio is constant everywhere. Static resistance at one operating point is not the full i–v characteristic.',
  {title:'Solve a square-law load analytically',steps:[
    ['Write the source load line',String.raw`v=10-2i`,'The 10 V source and 2 Ω Thévenin resistance define every possible terminal pair.'],
    ['Write the nonlinear device law',String.raw`i=0.1v^2`,'The device current grows with the square of its voltage.'],
    ['Substitute one characteristic into the other',String.raw`v=10-0.2v^2\Rightarrow v^2+5v-50=0`,'The operating point must satisfy both equations at once.'],
    ['Choose the physically admissible root',String.raw`v=5\,\mathrm V\quad(\text{reject }v=-10\,\mathrm V)`,'The stated source/load polarity permits the positive-voltage solution.'],
    ['Recover current and power',String.raw`i=0.1(5)^2=2.5\,\mathrm A,\qquad P=vi=12.5\,\mathrm W`,'The pair also satisfies 10−2(2.5)=5 V.']
  ],answer:'The operating point is v = 5 V, i = 2.5 A; the nonlinear load absorbs 12.5 W.'},
  {q:'What defines a nonlinear load’s operating point?',options:['The load curve alone','The source voltage alone','The intersection of source and load characteristics'],answer:2,why:'The connected circuit must satisfy both terminal relationships simultaneously.'},
  'Rizzoni & Kearns (2022), §2.11, printed pp. 141–145.'
)
];

const ELEC275_FIELD_LENSES={
  'linear-modeling':{
    physics:'The circuit is a compact story about fields and moving charge. An electric field establishes a potential difference; mobile charge responds; materials oppose that motion and convert organized electrical energy into heat. The symbols hide the microscopic motion so the transferable structure becomes visible.',
    formula:'v=iR says that, for an ohmic material in its linear operating range, sustaining twice the charge-flow rate requires twice the potential drop. R is the device’s conversion factor between the across effect and the through response.',
    engineer:'Select a model detailed enough for the decision: nominal resistance for a first calculation, then tolerance, temperature coefficient, power rating, wiring resistance, and transient behaviour when the design margin demands them.',
    electrician:'Trace source → protection → conductor → load → return before measuring. The schematic is a functional map; the installation adds terminal IDs, wire colours, enclosure locations, ratings, isolation points, and code requirements.'
  },
  'topology':{
    physics:'In the lumped-circuit approximation, a good conductor settles to nearly one electric potential along each ideal-wire region. Joining terminals forces them to share a node voltage; breaking that conducting path creates a different physical system, no matter how similar the drawing looks.',
    formula:'“Same node” means zero modeled voltage difference. “Series” means charge has no alternate path, so one current crosses both elements. “Parallel” means both elements span the same two potentials, so their voltages are equal.',
    engineer:'Topology is the design skeleton. Engineers redraw cable runs, connectors, relays, and loads as nodes and branches, then check fault paths, redundancy, isolation, and whether a sensor is truly measuring the intended points.',
    electrician:'Continuity testing and point-to-point checks verify the real topology against the drawing. A misplaced jumper, shared neutral, loose termination, or unexpected bond changes the circuit even when every component value is correct.'
  },
  'quantities':{
    physics:'Current is the rate at which charge crosses an imagined surface; voltage is work per unit charge between two points. Electrons drift slowly in metal, but the electromagnetic field that organizes their motion establishes around the circuit very quickly.',
    formula:'i=dq/dt turns “how much charge?” into “how fast is charge crossing?”; v=dw/dq turns energy transfer into joules per coulomb. The sign reports direction relative to the arrow or polarity you chose.',
    engineer:'Translate sensor ranges, conductor ampacity, insulation voltage, and energy budgets into consistent references and units. A signed result is information for the design, not automatically an error.',
    electrician:'Measure voltage across two points and current through a path (or around a conductor with a clamp meter). Establish the reference—line-to-line, line-to-neutral, or line-to-ground—before interpreting a reading.'
  },
  'sources':{
    physics:'A source does not manufacture charge. Chemical reactions, electromagnetic induction, light, or mechanical work separate charge and maintain an electromotive force; the closed external circuit then permits a continuous current. The source converts another energy form into electrical energy.',
    formula:'An ideal voltage source holds v=V_s while the load decides i; an ideal current source holds i=I_s while the network decides v. “Ideal” means the unconstrained partner quantity can become whatever the model requires.',
    engineer:'Start with the ideal source to understand function, then add internal resistance, current limit, regulation, ripple, grounding, thermal limits, and protection to predict real behaviour under normal and fault loads.',
    electrician:'Verify supply type, nominal voltage, phase, polarity, frequency, available fault current, and protective device before connection. A correct open-circuit voltage does not prove the source can support the load.'
  },
  'power':{
    physics:'Energy is carried by the electromagnetic field surrounding conductors and enters a load where the field does work on charge. In a resistor that organized energy becomes lattice vibration—heat. The wires guide the energy transfer; they are not buckets carrying stored power.',
    formula:'p=vi multiplies energy per coulomb by coulombs per second, giving joules per second. With passive references, p>0 means energy enters the element; p<0 means the element is delivering energy to the rest of the circuit.',
    engineer:'Use the power ledger to size sources, conductors, heat sinks, resistors, batteries, and protection. Derate components and check worst-case tolerance and ambient temperature rather than designing exactly at the nameplate limit.',
    electrician:'Compare measured voltage/current with nameplate watts, inspect imbalance and overheating, and use load studies or thermal imaging to find high-resistance joints. De-energize and follow approved procedures before intrusive work.'
  },
  'three-laws':{
    physics:'KCL is the continuity of charge: charge cannot accumulate indefinitely at an ordinary circuit node. KVL is the quasi-static form of Faraday’s law: when changing magnetic flux through the loop is negligible, the net potential change around it is zero. Ohm’s law is a material relation, not a conservation law.',
    formula:'Σi=0 balances charge flow at a boundary; Σv=0 balances energy per charge around a closed path; v=iR states how one ideal resistor responds. Together they supply conservation plus device behaviour.',
    engineer:'Choose node or mesh equations to minimize unknowns, then validate with power and limiting cases. When high frequency, long wiring, or magnetic coupling matters, leave the lumped model and include inductance, capacitance, or field analysis.',
    electrician:'At a junction, measured branch currents should reconcile within instrument accuracy; around an energized control loop, measured drops should account for the supply. Unexpected drop often points to a bad contact, undersized conductor, or overloaded path.'
  },
  'series-boardwork':{
    physics:'With no branch at the midpoint, charge continuity forces the same steady current through both resistors. Each material needs an electric field proportional to its resistance to sustain that current, so the total source voltage divides according to how much field-drop each element requires.',
    formula:'v_k=V_sR_k/(R_1+R_2) says each resistor receives the same fraction of source voltage as its fraction of total series resistance. It is a consequence of KVL and Ohm’s law, not an independent law.',
    engineer:'Use dividers for references and sensing only after checking load impedance, tolerance, input bias current, power, and noise. A following circuit loads the midpoint and changes the ratio.',
    electrician:'Voltage drop along a feeder behaves like an unwanted divider between conductor resistance and the load. Measure source and load-end voltage under load; an excessive difference can expose long runs, undersized cable, or poor terminations.'
  },
  'division':{
    physics:'Topology creates the shared constraint: one charge-flow rate in series, one potential difference in parallel. Ohmic materials then set how the conserved total is apportioned. The divider rules are the visible shadow of charge and energy conservation.',
    formula:'Voltage divides directly with resistance because one current multiplies each R. Current divides inversely with resistance because one voltage is divided by each R; conductance makes that proportionality direct.',
    engineer:'Apply division for bias networks, sensing, shunts, pull-ups, and current sharing, then include loading, component tolerance, temperature, and power dissipation before releasing the design.',
    electrician:'Use expected divider drops to troubleshoot a live series path and expected branch currents to check parallel loads. A zero or full-supply reading often localizes an open, short, or failed connection.'
  },
  'equivalent-resistance':{
    physics:'The external world interacts with a network only through terminal voltage and current. If two internal arrangements demand the same v for every applied i at that port, no attached linear load can distinguish them—even though fields and heating inside may differ.',
    formula:'R_eq=v_test/i_test defines the slope of the port’s i–v line. Series paths add required field-drops; parallel paths add available charge-flow channels, which is why conductances add.',
    engineer:'Reduce a subsystem to estimate loading, voltage drop, fault current, time constants, and source requirements without carrying every internal element through the system calculation.',
    electrician:'Resistance seen from a panel or device terminals can reveal opens, shorts, parallel backfeeds, or unexpected bonds—but only on a verified de-energized circuit with sensitive equipment isolated as required.'
  },
  'superposition':{
    physics:'Maxwell’s equations and linear material laws permit responses to add when the system stays in a linear regime. Each source creates its own field pattern; the real field is their signed sum. Saturation, diodes, and temperature-dependent behaviour break that simple addition.',
    formula:'x=Σx^(k) means add source contributions to a voltage or current using one common reference. Power cannot be superposed because squaring the summed response creates cross-terms.',
    engineer:'Separate DC bias, signal, interference, and fault contributions to understand which source dominates a node. Then recombine them and check that no component leaves its assumed linear range.',
    electrician:'Isolation tests often remove or disable one supply or control signal at a time to locate backfeed and induced-voltage paths. Real systems require approved isolation and awareness that stored or alternate sources may remain energized.'
  },
  'source-load':{
    physics:'Connection forces source and load to share one terminal voltage and one compatible current. The operating point is not chosen by either side alone; it is the state where both physical constitutive behaviours can exist simultaneously.',
    formula:'v=V_T−iR_T describes source voltage sag with delivered current; v=f(i) describes what the load demands. Their intersection is the only pair that satisfies both boundary conditions.',
    engineer:'Use the source–load view for batteries, sensors, amplifiers, motors, and power converters. It makes compatibility, regulation, startup, stability, and operating margin visible before integration.',
    electrician:'Compare supply ratings and measured loaded voltage with equipment inrush and running current. A system that reads correctly with the load disconnected may collapse when a motor, heater, or long feeder is connected.'
  },
  'source-transformations':{
    physics:'The internal field and current distribution can change while the boundary relationship stays identical. Thévenin and Norton forms are two physical stories with the same terminal line: the same open-circuit voltage, short-circuit current, and slope.',
    formula:'V_T=I_NR_T ties together the two intercepts of one linear port characteristic. The resistance is unchanged because it is the characteristic’s slope; only the chosen source representation changes.',
    engineer:'Transform sources to reveal reducible networks, combine parallel current injections, or choose the representation that makes loading and control interaction easiest to calculate.',
    electrician:'A source transformation is mainly a diagnostic mental model: a stiff supply has small series impedance; a current-limited source resembles a Norton form. It helps explain voltage sag and why readings change with the connected load.'
  },
  'thevenin-norton':{
    physics:'Linearity collapses all internal complexity into an affine terminal law: one intercept plus one slope. Open circuit reveals the voltage intercept; short circuit reveals the current intercept; a test source probes the slope while dependent physics remains active.',
    formula:'V_T=V_oc, I_N=I_sc, and R_T=V_oc/I_sc are three views of the same i–v line. Once any two are known, the entire external behaviour of the linear one-port is fixed.',
    engineer:'Replace a board, sensor network, or distribution segment by its equivalent to evaluate many candidate loads quickly, perform sensitivity studies, and define interface requirements between teams.',
    electrician:'Use measured open-circuit voltage plus voltage under a known safe load to estimate source impedance and locate weak batteries, corroded contacts, or long-run drop. Never create a short-circuit test unless an approved procedure and rated equipment explicitly call for it.'
  },
  'maximum-power':{
    physics:'A tiny load draws strong current but collapses terminal voltage; a huge load preserves voltage but barely draws current. Their product peaks between those extremes, exactly when source and load resistances match. The same current then heats both equally.',
    formula:'P_L=V_T²R_L/(R_T+R_L)² contains both competing effects. Differentiation places the peak at R_L=R_T, giving V_L=V_T/2 and 50% efficiency.',
    engineer:'Impedance matching matters in communications, sensing, and some energy-harvesting interfaces. Power distribution usually chooses R_L≫R_T instead, prioritizing regulation and efficiency over the mathematical maximum.',
    electrician:'Treat unexpected source heating and voltage sag as signs of excessive source-path impedance or an overly heavy load. The field goal is normally safe delivery and acceptable drop—not intentional 50% loss.'
  },
  'practical-measurement':{
    physics:'Every measurement couples another physical system to the one observed. A voltmeter creates an extra charge-flow path; an ammeter adds opposition in the measured path. “Non-invasive” means the coupling is small enough to neglect, not literally absent.',
    formula:'R_V→∞ makes voltmeter current approach zero; R_A→0 makes ammeter voltage drop approach zero. The loading formula is just a new divider after the instrument becomes part of the network.',
    engineer:'Specify input impedance, burden voltage, bandwidth, isolation, category rating, and uncertainty so the instrument does not invalidate the model or expose the operator/equipment to unacceptable risk.',
    electrician:'Choose the correct function, terminals, range, and CAT rating; prove the tester on a known source before and after a safety-critical test; connect voltage in parallel and current with an approved series or clamp method.'
  },
  'nonlinear-loads':{
    physics:'Real materials change their response with electric field, temperature, carrier density, magnetic state, or mechanical load. A diode’s carrier barrier, a lamp filament’s heating, and a motor’s back-emf all make the terminal relationship curve rather than remain a fixed slope.',
    formula:'The load line is every v–i pair the linear source can supply; i=f(v) is every pair the device can accept. Their intersection is the self-consistent operating point, and multiple intersections can imply switching or instability.',
    engineer:'Use operating-point and load-line analysis before small-signal linearization. Verify safe operating area, startup path, thermal feedback, and whether the chosen intersection is stable across tolerance and temperature.',
    electrician:'Expect resistance readings on electronic loads to differ from energized behaviour. Diagnose with manufacturer curves, live operating measurements, and approved test procedures rather than forcing a fixed-resistance assumption onto drives, LEDs, and controls.'
  }
};

const ELEC275_TECHNICIAN_INVENTOR_LENSES={
  'linear-modeling':'A technician turns symptoms into a smallest-useful circuit model: rail, ground, path, load, expected drop. An inventor starts with that model on a breadboard, measures where reality departs, then adds parasitics, tolerances, and protection only as evidence demands.',
  'topology':'Board repair is topology archaeology: follow nets through vias, connectors, planes, and zero-ohm links rather than judging by physical closeness. An inventor uses the schematic and PCB netlist as the contract that keeps a prototype’s electrical connectivity intact during layout.',
  'quantities':'A technician asks which node is the reference, whether a rail is present, and where current stops. An inventor uses current consumption, voltage headroom, and energy per operation to decide battery life, regulator choice, and whether a subsystem can coexist on the same supply.',
  'sources':'USB, bench supplies, batteries, regulators, and motherboard rails are practical sources with limits. A technician checks both open-circuit voltage and behaviour under a controlled load; an inventor designs current limiting, decoupling, reverse-polarity protection, and startup sequencing around those limits.',
  'power':'Unexpected heat is information: a shorted capacitor, failing regulator, or overloaded IC turns electrical power into a thermal clue. Inventors build a power tree and budget every rail, then verify it with supply telemetry, current-limited bring-up, and thermal inspection.',
  'three-laws':'Voltage-drop tracing applies KVL along a power path; current injection and return-path reasoning apply KCL at suspect nets. Inventors use the laws to predict test points and design-for-debug features before the PCB exists.',
  'series-boardwork':'Pull-up networks, battery monitors, and ADC inputs are loaded dividers in real electronics. A technician compares measured midpoint voltage with the unloaded prediction; an inventor chooses values that balance accuracy, power draw, noise, and input leakage.',
  'division':'Technicians use divider expectations to locate an open resistor, leaky input, or shorted branch. Inventors use dividers and shunts to translate real-world voltages and currents into safe ADC ranges, then calibrate for tolerance and loading.',
  'equivalent-resistance':'Measuring resistance to ground on an unpowered board gives a quick signature of each rail, but parallel semiconductor paths complicate interpretation. An inventor estimates the equivalent load a regulator or sensor output will see before connecting subsystems.',
  'superposition':'A technician separates DC rail level, ripple, injected signal, and noise coupling to identify which source creates the symptom. An inventor intentionally layers bias and signal paths, then verifies that the combined waveform keeps every device in its linear range.',
  'source-load':'A power adapter can show nominal voltage until a laptop draws current; a logic output can collapse into an excessive load. Technicians load-test interfaces, while inventors compare drive capability, input demand, inrush, and startup timing before joining modules.',
  'source-transformations':'Technicians may not redraw the source formally, but they reason in the same terms: “stiff voltage with series loss” versus “limited current with shunt leakage.” Inventors choose the form that best exposes how an interface will behave under changing loads.',
  'thevenin-norton':'A technician can estimate a suspicious rail’s source impedance from no-load and known-load readings without opening every upstream block. An inventor publishes a simple output model so another module designer can predict loading without knowing the full circuit.',
  'maximum-power':'Wireless links, antennas, sensors, and some energy harvesters care about matching; digital power rails usually care about low source impedance instead. Technicians distinguish a deliberate match from a fault that wastes half the power, while inventors optimize for the actual mission.',
  'practical-measurement':'A 10× oscilloscope probe, logic analyzer, DMM, or current shunt can alter a sensitive node. Technicians choose probes and grounding carefully; inventors add buffered test points, current-sense footprints, and safe measurement access during design.',
  'nonlinear-loads':'Motherboard semiconductors, LEDs, protection diodes, and motors cannot be diagnosed as fixed resistors. Technicians compare diode-mode and powered readings with known-good behaviour; inventors sweep devices, find the operating point, and design margin around temperature and part variation.'
};

for(const lecture of Object.values(ELEC275_LECTURE_NOTES))for(const section of lecture){
  section.fieldLens=ELEC275_FIELD_LENSES[section.id]||null;
  if(section.fieldLens)section.fieldLens.technician=ELEC275_TECHNICIAN_INVENTOR_LENSES[section.id];
}

const elec275LectureProgress=()=>saved('elec275-lecture-notes-v1',{});
let elec275LectureStepState={};

function elec275LectureDiagram(section){let body='',title='';
  if(section.id==='linear-modeling'){
    title='Across and through variables connected by an element law';
    body=box(70,110,190,105)+box(335,110,190,105)+box(600,110,190,105)+text(165,145,'ACROSS','small teal')+text(165,180,'voltage v','large')+text(430,145,'LINK','small teal')+text(430,180,'v = iR','large')+text(695,145,'THROUGH','small teal')+text(695,180,'current i','large')+arrow(265,162,330,162)+arrow(530,162,595,162)+text(430,268,'conservation organizes · element laws connect','label');
  }else if(section.id==='topology'){
    title='Two headlamps connected in parallel across a two-node battery circuit';
    body=wire('M130 75 H735 M130 275 H735')+source(130,75,275,'12 V')+resistor(420,75,420,275,'lamp 1')+resistor(650,75,650,275,'lamp 2')+node(250,75,'node a')+node(250,275,'node b')+text(535,330,'two ideal-wire regions → two nodes','small muted');
  }else if(section.id==='quantities'){
    title='Current through a conducting element and voltage between its terminals';
    body=wire('M90 175 H300 M560 175 H770')+box(300,115,260,120)+arrow(145,145,260,145)+text(200,123,'i = dq/dt','label teal')+text(325,158,'+','large teal')+text(535,158,'−','large teal')+text(430,188,'conducting element','large')+text(430,275,'v = energy per charge from − to +','label teal')+text(430,315,'arrow and polarity are chosen references','small muted');
  }else if(section.id==='sources'){
    title='Ideal voltage and current sources showing what each one fixes';
    body=source(210,85,270,'Vs')+wire('M210 85 H330 M210 270 H330')+text(210,42,'VOLTAGE SOURCE','small teal')+text(210,318,'v fixed · i set by load','label')+source(650,85,270,'Is',true)+wire('M530 85 H650 M530 270 H650')+text(650,42,'CURRENT SOURCE','small teal')+text(650,318,'i fixed · v set by circuit','label')+arrow(300,120,300,210)+text(326,170,'i ?','label teal')+text(550,170,'v ?','label teal');
  }else if(section.id==='power'){
    title='Passive sign convention and a closed source-load power ledger';
    body=wire('M70 160 H300 M560 160 H790')+box(300,105,260,115)+arrow(125,130,255,130)+text(190,108,'i enters +','label teal')+text(326,145,'+','large teal')+text(534,145,'−','large teal')+text(430,180,'ELEMENT','large')+text(240,286,'p < 0 · supplies','label')+text(620,286,'p > 0 · absorbs','label')+text(430,330,'Σp = 0 closes the energy ledger','small muted');
  }else if(section.id==='three-laws'){
    title='A node current balance beside a one-loop voltage balance';
    body=node(245,175,'node a')+wire('M80 175 H245 M245 175 H410 M245 60 V175 M245 175 V290')+arrow(90,145,205,145)+arrow(370,205,270,205)+arrow(215,270,215,200)+text(140,125,'3 A in','label teal')+text(340,235,'1.5 A out','label teal')+text(170,290,'i₃ out','label teal')+wire('M515 75 H790 V275 H515 Z')+source(515,75,275,'9 V')+resistor(590,75,715,75,'R1')+resistor(790,120,790,230,'R2')+text(650,315,'KVL around one direction','small muted');
  }else if(section.id==='series-boardwork'){
    title='Professor’s two-resistor series loop and voltage-divider references';
    body=wire('M120 70 H730 V275 H120 Z')+source(120,70,275,'Vs')+resistor(255,70,430,70,'R1')+resistor(730,110,730,235,'R2')+arrow(480,42,615,42)+text(548,24,'i','label teal')+text(300,125,'+ v1 −','label teal')+text(665,175,'+','large teal')+text(665,220,'−','large teal')+text(625,198,'v2','label teal')+node(730,70,'midpoint')+text(430,325,'same current → voltages divide by resistance','small muted');
  }else if(section.id==='division'){
    title='Series voltage division beside parallel current division';
    body=wire('M65 80 H370 V270 H65 Z')+source(65,80,270,'Vs')+resistor(135,80,235,80,'R1')+resistor(370,120,370,230,'R2')+text(220,315,'SERIES · same current','small teal')+source(535,80,270,'Is',true)+wire('M535 80 H800 M535 270 H800')+resistor(655,80,655,270,'R1')+resistor(790,80,790,270,'R2')+text(680,315,'PARALLEL · same voltage','small teal');
  }else if(section.id==='equivalent-resistance'){
    title='A resistor network collapsing into one terminal-equivalent resistance';
    body=node(70,165,'a')+wire('M70 165 H120')+resistor(120,165,270,165,'2 kΩ')+wire('M270 165 H330 M330 80 V250 M330 80 H520 M330 250 H520')+resistor(370,80,500,80,'6 kΩ')+resistor(370,250,500,250,'3 kΩ')+wire('M520 80 V250 M520 165 H565')+arrow(575,165,665,165)+resistor(690,165,810,165,'4 kΩ')+node(825,165,'b')+text(620,125,'REDUCE','small teal');
  }else if(section.id==='superposition'){
    title='Two source perspectives adding to one signed response';
    body=box(55,75,210,170)+box(325,75,210,170)+box(595,75,210,170)+text(160,112,'SOURCE 1 ONLY','small teal')+text(160,165,'i¹ = +2 mA','large')+text(430,112,'SOURCE 2 ONLY','small teal')+text(430,165,'i² = −1 mA','large')+text(700,112,'ALL SOURCES','small teal')+text(700,165,'i = +1 mA','large')+text(290,165,'+','large teal')+text(565,165,'=','large teal')+text(430,300,'add voltage/current contributions · calculate power afterward','small muted');
  }else if(section.id==='source-load'){
    title='Source and load one-ports joined at a shared terminal pair';
    body=box(80,85,260,170)+box(520,85,260,170)+text(210,125,'SOURCE ONE-PORT','small teal')+text(210,175,'v = VT − iRT','large')+text(650,125,'LOAD ONE-PORT','small teal')+text(650,175,'v = f(i)','large')+wire('M340 125 H520 M340 215 H520')+arrow(390,100,470,100)+text(430,78,'i','label teal')+text(430,180,'same v','label teal')+text(430,305,'operating point satisfies both terminal characteristics','small muted');
  }else if(section.id==='source-transformations'){
    title='Equivalent Thévenin and Norton source forms';
    body=source(125,80,260,'VT')+resistor(125,80,310,80,'RT')+wire('M310 80 H350 M125 260 H350')+text(235,310,'THÉVENIN','small teal')+text(430,170,'⇄','large teal')+source(610,80,260,'IN',true)+wire('M560 80 H780 M560 260 H780')+resistor(750,80,750,260,'RN')+text(670,310,'NORTON','small teal');
  }else if(section.id==='thevenin-norton'){
    title='A complex linear one-port replaced by Thévenin and Norton equivalents';
    body=box(45,75,230,180)+text(160,120,'LINEAR','small teal')+text(160,160,'NETWORK','large')+text(160,205,'many elements','small muted')+wire('M275 110 H330 M275 220 H330')+arrow(345,165,420,165)+source(500,80,250,'VT')+resistor(500,80,690,80,'RT')+wire('M690 80 H760 M500 250 H760')+text(630,305,'same port i–v behaviour','small teal');
  }else if(section.id==='maximum-power'){
    title='Thévenin source feeding a matched load';
    body=source(110,70,270,'VT')+wire('M110 70 H720 V270 H110')+resistor(225,70,400,70,'RT')+resistor(720,110,720,235,'RL')+arrow(450,42,590,42)+text(520,22,'i','label teal')+text(430,155,'MATCH','small teal')+text(430,195,'RL = RT','large')+text(430,315,'maximum load power · 50% efficiency','small muted');
  }else if(section.id==='practical-measurement'){
    title='A practical voltmeter loading the branch it measures';
    body=source(100,65,275,'Vs')+wire('M100 65 H720 V275 H100')+resistor(245,65,405,65,'R1')+resistor(530,65,530,275,'R2')+wire('M530 65 H720 M530 275 H720')+resistor(720,65,720,275,'Rm')+text(635,155,'VOLTMETER','small teal')+text(635,195,'Rm ∥ R2','large')+text(430,320,'the instrument becomes part of the circuit','small muted');
  }else if(section.id==='nonlinear-loads'){
    title='Source load line intersecting a nonlinear device characteristic';
    body=line(120,270,760,270)+line(120,270,120,45)+arrow(120,270,760,270)+arrow(120,270,120,45)+`<path d="M145 245 C300 235 390 195 485 95 C535 45 620 35 735 30" fill="none" stroke="#b85ad2" stroke-width="4"/>`+line(150,60,700,250,'#00695c',4)+node(455,150)+text(485,135,'operating point','label teal','start')+text(675,225,'source line','small teal')+text(650,58,'device i–v','small')+text(765,292,'v','label')+text(100,48,'i','label');
  }
  return `<div class="note-concept-diagram" tabindex="0">${svg(body,title)}</div><p class="diagram-hint note-diagram-hint">On a small screen, scroll the circuit sideways to inspect every label.</p>`;
}

function renderElec275LectureHubLegacy(){const progress=elec275LectureProgress(),sections=ELEC275_LECTURE_NOTES[1],count=sections.filter(s=>progress[`L1-${s.id}`]).length,source=ELEC275_LECTURE_SOURCES[1];main.innerHTML=`${elecSwitch()}<section class="notes-hero"><div><div class="eyebrow">ELEC 275 · LECTURE NOTES</div><h1>Hear the thread.<br>Rebuild the board.<br>Check the physics.</h1><p>The professor’s recording, the developed Circuit Fundamentals deck, and the handwritten series-circuit workings are fused into one study path. The lecture voice leads; the textbook page remains the deeper chapter reference.</p></div><div class="notes-loop" aria-label="The lecture-notes learning loop"><span>01</span><strong>Frame</strong><i>→</i><span>02</span><strong>Rebuild</strong><i>→</i><span>03</span><strong>Audit</strong></div></section><div class="notes-lecture-grid elec275-lecture-grid"><a class="notes-lecture-card" href="#elec275-lecture-1"><div><span>LECTURE 1</span><span>${count} / ${sections.length} studied</span></div><h2>${source.title}</h2><p>${source.sub}</p><ul>${sections.map(s=>`<li>${s.title}</li>`).join('')}</ul><strong>Open Lecture 1 notes →</strong></a><div class="notes-lecture-card" style="opacity:.55;pointer-events:none" aria-disabled="true"><div><span>LECTURE 2</span><span>awaiting source</span></div><h2>Node-voltage and mesh-current methods</h2><p>The next lecture module will follow the next recording or boardwork set placed in the course folder.</p><ul><li>Supernodes and supermeshes</li><li>Method selection</li><li>Independent physical checks</li></ul><strong>Source needed</strong></div></div><section class="notes-how"><div><span>HOW TO USE THESE</span><h2>Reconstruct, then cross-check.</h2></div><ol><li>Read the professor’s claim and name the physical role it plays.</li><li>Redraw the circuit and mark arrows and polarities before calculating.</li><li>Reveal one boardwork step at a time and predict the next line.</li><li>Use KCL, KVL, units, or power balance to audit the result independently.</li></ol></section><section class="notes-reference"><h2>Reference basis</h2><p>The lecture recording and merged notes preserve what was actually said in Class 1. The 30-slide Circuit Fundamentals deck organizes the technical topic; the three handwritten pages preserve the professor’s original one-resistor and series-divider development. Rizzoni &amp; Kearns supplies the deeper formal reference.</p><p><a href="#elec275-ch-1">Open the comprehensive Chapter 1 textbook module →</a></p></section>`;animate('.notes-hero, .notes-lecture-card, .notes-how')}

function renderElec275LectureLab(){const diagram=svg(wire('M90 70 H770 V275 H90 Z')+source(90,70,275,'Vs')+resistor(255,70,430,70,'R1')+resistor(770,110,770,235,'R2')+arrow(475,42,625,42)+text(550,24,'i','label teal')+text(335,125,'v1','label teal')+text(710,180,'v2','label teal'),'Interactive two-resistor series divider');return `<section class="notes-lab elec275-lecture-lab"><div><div class="eyebrow">REBUILD THE HANDWRITTEN BOARDWORK</div><h2>Change the source and both resistors.</h2><p>One unbranched current sets both voltage drops. Watch KVL and the power balance close for every choice.</p></div><div class="elec275-referee"><div class="elec275-referee-stage" tabindex="0">${diagram}</div><div class="elec275-referee-controls elec275-divider-controls"><label><span>Source <strong id="lecture-vs-val">9 V</strong></span><input id="lecture-vs" type="range" min="1" max="24" step="1" value="9" aria-label="Source voltage in volts"></label><label><span>R₁ <strong id="lecture-r1-val">1 kΩ</strong></span><input id="lecture-r1" type="range" min="0.5" max="10" step="0.5" value="1" aria-label="Resistance R1 in kilohms"></label><label><span>R₂ <strong id="lecture-r2-val">2 kΩ</strong></span><input id="lecture-r2" type="range" min="0.5" max="10" step="0.5" value="2" aria-label="Resistance R2 in kilohms"></label></div><div class="notes-readout" id="lecture-divider-readout" aria-live="polite"></div></div></section>`}

function drawElec275LectureSteps(section){const host=$(`#e275-work-${section.id}`);if(!host)return;const current=elec275LectureStepState[section.id]||0;host.innerHTML=section.worked.steps.slice(0,current+1).map((s,i)=>`<div class="note-work-step ${i===current?'current':''}"><span>${i+1}</span><div><h4>${s[0]}</h4>${engrMath(s[1])}<p>${s[2]}</p></div></div>`).join('');$(`#e275-work-count-${section.id}`).textContent=`Step ${current+1} of ${section.worked.steps.length}`;document.querySelector(`[data-e275-back="${section.id}"]`).disabled=current===0;document.querySelector(`[data-e275-next="${section.id}"]`).disabled=current===section.worked.steps.length-1;document.querySelector(`[data-e275-all="${section.id}"]`).disabled=current===section.worked.steps.length-1}

function wireElec275Lecture(number,sections){const refresh=()=>{const progress=elec275LectureProgress(),count=sections.filter(s=>progress[`L${number}-${s.id}`]).length,percent=count/sections.length*100;$('#elec275-lecture-progress').textContent=`${count} / ${sections.length} studied`;const bar=$('#elec275-lecture-progress-bar');bar.setAttribute('aria-valuenow',String(count));bar.querySelector('span').style.width=percent+'%'};sections.forEach(section=>{drawElec275LectureSteps(section);document.querySelector(`[data-e275-back="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=Math.max(0,elec275LectureStepState[section.id]-1);drawElec275LectureSteps(section)};document.querySelector(`[data-e275-next="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=Math.min(section.worked.steps.length-1,elec275LectureStepState[section.id]+1);drawElec275LectureSteps(section)};document.querySelector(`[data-e275-all="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=section.worked.steps.length-1;drawElec275LectureSteps(section)}});main.querySelectorAll('[data-e275-done]').forEach(input=>input.onchange=()=>{const progress=elec275LectureProgress();progress[`L${number}-${input.dataset.e275Done}`]=input.checked;persist('elec275-lecture-notes-v1',progress);refresh()});main.querySelectorAll('[data-e275-answer]').forEach(button=>button.onclick=()=>{const [id,indexText]=button.dataset.e275Answer.split(':'),section=sections.find(s=>s.id===id),index=+indexText,host=button.closest('.note-check');host.querySelectorAll('button').forEach(b=>{b.classList.remove('correct','wrong');b.setAttribute('aria-pressed',String(b===button))});button.classList.add(index===section.check.answer?'correct':'wrong');host.querySelector('[role="status"]').innerHTML=`<strong>${index===section.check.answer?'Exactly.':'Try again.'}</strong> ${section.check.why}`});main.querySelectorAll('[data-e275-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=$(`#note-${a.dataset.e275Jump}`);target.scrollIntoView({behavior:'instant'});target.focus({preventScroll:true})});const vs=$('#lecture-vs'),r1=$('#lecture-r1'),r2=$('#lecture-r2'),draw=()=>{const V=+vs.value,R1=+r1.value,R2=+r2.value,I=V/(R1+R2),V1=I*R1,V2=I*R2,P=V*I,P1=I*I*R1,P2=I*I*R2;$('#lecture-vs-val').textContent=fmt(V)+' V';$('#lecture-r1-val').textContent=fmt(R1)+' kΩ';$('#lecture-r2-val').textContent=fmt(R2)+' kΩ';$('#lecture-divider-readout').innerHTML=`<strong>i = ${fmt(I,3)} mA · v₁ = ${fmt(V1,3)} V · v₂ = ${fmt(V2,3)} V</strong><span>KVL: ${fmt(V,3)} − ${fmt(V1,3)} − ${fmt(V2,3)} = ${fmt(V-V1-V2,6)} V</span><span>Power: source ${fmt(P,3)} mW = R₁ ${fmt(P1,3)} mW + R₂ ${fmt(P2,3)} mW</span>`};vs.oninput=draw;r1.oninput=draw;r2.oninput=draw;draw()}

function renderElec275Lecture(number){const source=ELEC275_LECTURE_SOURCES[number],sections=ELEC275_LECTURE_NOTES[number],progress=elec275LectureProgress(),done=Object.fromEntries(sections.map(s=>[s.id,progress[`L${number}-${s.id}`]])),count=Object.values(done).filter(Boolean).length,percent=count/sections.length*100;elec275LectureStepState=Object.fromEntries(sections.map(s=>[s.id,0]));main.innerHTML=`${elecSwitch()}<nav class="notes-breadcrumb"><a href="#elec275-lectures">← All lecture notes</a><div><a href="#elec275-lecture-1" aria-current="page">Lecture 1</a><span style="opacity:.55">Lecture 2 · awaiting source</span></div></nav><section class="lecture-head"><div class="eyebrow">ELEC 275 · LECTURE ${number} · ${source.date.toUpperCase()}</div><h1>${source.title}</h1><p>${source.sub}</p><div class="lecture-meta"><span>${source.range}</span><span id="elec275-lecture-progress">${count} / ${sections.length} studied</span></div></section><section class="lecture-throughline"><div><span>MODEL</span><strong>Choose across and through variables.</strong></div><i>→</i><div><span>LABEL</span><strong>Mark nodes, arrows, and polarities.</strong></div><i>→</i><div><span>CONSERVE</span><strong>Write KCL and KVL.</strong></div><i>→</i><div><span>LINK</span><strong>Apply the element law.</strong></div><i>→</i><div><span>AUDIT</span><strong>Check units and power.</strong></div></section><section class="elec275-command"><div><div class="eyebrow">THE LECTURE IN ONE SENTENCE</div><h2>Connectivity chooses the equations; signs tell the story.</h2><p>The first half establishes the modeling language. The second half reconstructs the professor’s one-loop and divider work from the laws instead of memorizing a loose formula.</p></div><div><div class="elec275-progress-track" id="elec275-lecture-progress-bar" role="progressbar" aria-label="Lecture 1 topics studied" aria-valuemin="0" aria-valuemax="${sections.length}" aria-valuenow="${count}"><span style="width:${percent}%"></span></div><div class="elec275-route-grid"><a href="#note-linear-modeling" data-e275-jump="linear-modeling"><span>01 · READ THE LANGUAGE</span><strong>Model, topology, references, sources, and power</strong></a><a href="#note-three-laws" data-e275-jump="three-laws"><span>02 · REBUILD THE BOARD</span><strong>KCL, KVL, Ohm’s law, and the series divider</strong></a></div></div></section><nav class="lecture-jumps elec275-chapter-jumps" aria-label="Lecture ${number} concepts">${sections.map((s,i)=>`<a href="#note-${s.id}" data-e275-jump="${s.id}"><span>${String(i+1).padStart(2,'0')}</span><strong>${s.kicker.split(' · ')[0]}</strong>${s.title}</a>`).join('')}</nav>${renderElec275LectureLab()}<section class="lecture-notes">${sections.map((s,i)=>elec275Card(s,i,done)).join('')}</section><section class="elec275-synthesis lecture-rules"><div><div class="eyebrow">PROFESSOR’S OPERATING RULES</div><h2>What should survive the lecture.</h2><p>These are the habits the recording emphasizes—not extra decoration around the formulas.</p></div><ol><li><span>01</span><strong>Practice makes permanent</strong><p>Solve mixed problems so choosing the method becomes part of the practice.</p></li><li><span>02</span><strong>Assume references</strong><p>A negative result means opposite to the arrow or polarity you chose.</p></li><li><span>03</span><strong>Count equations</strong><p>n unknowns need n independent equations; dependent equations add no information.</p></li><li><span>04</span><strong>Check by another law</strong><p>Use KCL, KVL, units, limiting behavior, or power balance independently.</p></li><li><span>05</span><strong>Use SPICE as a checker</strong><p>If simulation and hand work disagree, confirm that both describe the same circuit.</p></li><li><span>06</span><strong>Read topology first</strong><p>Redraw ugly schematics without changing which terminals share nodes.</p></li></ol></section><section class="notes-reference"><div class="eyebrow">COMPLETE REFERENCES</div><h2>Sources for Lecture ${number}</h2><p class="apa-reference">Davis, D. (2026, September 8). ELEC 275 Class 1: Course introduction and framing [Lecture recording and merged notes]. Concordia University.</p><p class="apa-reference">Davis, D. (2026). Circuit fundamentals [Developed lecture slides]. ELEC 275, Concordia University.</p><p class="apa-reference">Davis, D. (2026). Lecture workings: One-loop and series-resistor analysis [Handwritten notes].</p><p class="apa-reference">${ELEC_APA}</p><p>The recording determines what was actually said in Class 1. The developed slide deck structures the technical topic, the handwritten pages anchor the boardwork, and the textbook is the formal reference. Where the orientation recording only previewed a law, the note labels the slide or textbook expansion rather than presenting it as recorded coverage.</p></section><div class="engr-bottom-nav"><a href="#elec275-lectures">All lecture notes</a><a href="#elec275-ch-1">Chapter 1 textbook notes →</a><a href="#quiz">Quiz practice →</a></div>`;wireElec275Lecture(number,sections);animate('.lecture-head, .lecture-throughline, .note-card')}

function renderElec275LecturesLegacy(){const match=activeId.match(/^elec275-lecture-(\d+)$/);if(match&&ELEC275_LECTURE_NOTES[+match[1]]){document.title=`ELEC 275 Lecture ${match[1]} notes · Ash’s Study Lab`;$('#course-label').textContent=`ELEC 275 / LECTURE ${match[1]} NOTES`;renderElec275Lecture(+match[1])}else{document.title='ELEC 275 lecture notes · Ash’s Study Lab';$('#course-label').textContent='ELEC 275 / LECTURE NOTES';renderElec275LectureHub()}}

/* Chapter 2 is textbook-led because no lecture deck or recording was supplied. */
function renderElec275LectureHub(){
  const progress=elec275LectureProgress();
  const cards=[1,2].map(number=>{const source=ELEC275_LECTURE_SOURCES[number],sections=ELEC275_LECTURE_NOTES[number],count=sections.filter(s=>progress[`L${number}-${s.id}`]).length,preview=number===1?sections:sections.slice(0,4);return `<a class="notes-lecture-card" href="#elec275-lecture-${number}"><div><span>LECTURE ${number}</span><span>${count} / ${sections.length} studied</span></div><h2>${source.title}</h2><p>${source.sub}</p><ul>${preview.map(s=>`<li>${s.title}</li>`).join('')}${number===2?'<li>+ five more chapter objectives</li>':''}</ul><strong>Open Lecture ${number} notes →</strong></a>`}).join('');
  main.innerHTML=`${elecSwitch()}<section class="notes-hero"><div><div class="eyebrow">ELEC 275 · LECTURE NOTES</div><h1>See the network.<br>Reduce the clutter.<br>Prove the result.</h1><p>Lecture 1 reconstructs the professor’s circuit-fundamentals material. Lecture 2 turns the complete Chapter 2 textbook arc into the same picture → worked reasoning → retrieval system.</p></div><div class="notes-loop" aria-label="The lecture-notes learning loop"><span>01</span><strong>Frame</strong><i>→</i><span>02</span><strong>Rebuild</strong><i>→</i><span>03</span><strong>Audit</strong></div></section><div class="notes-lecture-grid elec275-lecture-grid">${cards}</div><section class="notes-how"><div><span>HOW TO USE THESE</span><h2>Predict before revealing.</h2></div><ol><li>Name the two terminals or the current/voltage reference before touching the algebra.</li><li>Redraw the network until every series and parallel claim is visible from the nodes.</li><li>Reveal one worked step at a time and state the law that makes it legal.</li><li>Audit with limits, units, KCL/KVL, terminal behaviour, or power balance.</li></ol></section><section class="notes-reference"><h2>Reference basis</h2><p>Lecture 2 is explicitly textbook-led: it follows all nine Chapter 2 learning objectives in Rizzoni &amp; Kearns, printed pages 79–145. The explanatory analogies, diagrams, worked examples, and retrieval prompts are original teaching aids; the source text is cited at card level.</p><p><a href="#elec275-ch-1">Open the comprehensive Chapter 1 textbook module →</a></p></section>`;
  animate('.notes-hero, .notes-lecture-card, .notes-how');
}

function renderElec275LectureTwoLab(){
  const diagram=svg(source(110,70,270,'VT')+wire('M110 70 H735 V270 H110')+resistor(220,70,400,70,'RT')+resistor(735,110,735,235,'RL')+arrow(445,42,590,42)+text(520,22,'iL','label teal')+text(430,158,'THE PORT','small teal')+text(430,198,'same behaviour','large')+text(430,315,'change the load · watch voltage, current, power, and efficiency','small muted'),'Interactive Thevenin source and variable load');
  return `<section class="notes-lab elec275-lecture-lab"><div><div class="eyebrow">THÉVENIN LOAD WORKBENCH</div><h2>Move the load through the match.</h2><p>Watch voltage regulation, delivered power, and efficiency pull in different directions. The power peak occurs at R<sub>L</sub> = R<sub>T</sub>.</p></div><div class="elec275-referee"><div class="elec275-referee-stage" tabindex="0">${diagram}</div><div class="elec275-referee-controls elec275-divider-controls"><label><span>V<sub>T</sub> <strong id="lecture2-vt-val">24 V</strong></span><input id="lecture2-vt" type="range" min="2" max="48" step="1" value="24" aria-label="Thevenin voltage in volts"></label><label><span>R<sub>T</sub> <strong id="lecture2-rt-val">6 Ω</strong></span><input id="lecture2-rt" type="range" min="1" max="20" step="1" value="6" aria-label="Thevenin resistance in ohms"></label><label><span>R<sub>L</sub> <strong id="lecture2-rl-val">6 Ω</strong></span><input id="lecture2-rl" type="range" min="1" max="40" step="1" value="6" aria-label="Load resistance in ohms"></label></div><div class="notes-readout" id="lecture2-load-readout" aria-live="polite"></div></div></section>`;
}

function wireElec275LectureTwo(sections){
  const refresh=()=>{const progress=elec275LectureProgress(),count=sections.filter(s=>progress[`L2-${s.id}`]).length,percent=count/sections.length*100;$('#elec275-lecture-progress').textContent=`${count} / ${sections.length} studied`;const bar=$('#elec275-lecture-progress-bar');bar.setAttribute('aria-valuenow',String(count));bar.querySelector('span').style.width=percent+'%'};
  sections.forEach(section=>{drawElec275LectureSteps(section);document.querySelector(`[data-e275-back="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=Math.max(0,elec275LectureStepState[section.id]-1);drawElec275LectureSteps(section)};document.querySelector(`[data-e275-next="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=Math.min(section.worked.steps.length-1,elec275LectureStepState[section.id]+1);drawElec275LectureSteps(section)};document.querySelector(`[data-e275-all="${section.id}"]`).onclick=()=>{elec275LectureStepState[section.id]=section.worked.steps.length-1;drawElec275LectureSteps(section)}});
  main.querySelectorAll('[data-e275-done]').forEach(input=>input.onchange=()=>{const progress=elec275LectureProgress();progress[`L2-${input.dataset.e275Done}`]=input.checked;persist('elec275-lecture-notes-v1',progress);refresh()});
  main.querySelectorAll('[data-e275-answer]').forEach(button=>button.onclick=()=>{const [id,indexText]=button.dataset.e275Answer.split(':'),section=sections.find(s=>s.id===id),index=+indexText,host=button.closest('.note-check');host.querySelectorAll('button').forEach(b=>{b.classList.remove('correct','wrong');b.setAttribute('aria-pressed',String(b===button))});button.classList.add(index===section.check.answer?'correct':'wrong');host.querySelector('[role="status"]').innerHTML=`<strong>${index===section.check.answer?'Exactly.':'Try again.'}</strong> ${section.check.why}`});
  main.querySelectorAll('[data-e275-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=$(`#note-${a.dataset.e275Jump}`);target.scrollIntoView({behavior:'instant'});target.focus({preventScroll:true})});
  const vt=$('#lecture2-vt'),rt=$('#lecture2-rt'),rl=$('#lecture2-rl'),draw=()=>{const V=+vt.value,Rs=+rt.value,R=+rl.value,I=V/(Rs+R),VL=I*R,PL=I*I*R,Pin=V*I,eff=Pin?PL/Pin*100:0,ratio=R/Rs,peak=V*V/(4*Rs),verdict=Math.abs(ratio-1)<.001?'Matched: maximum load power.':ratio<1?'Load is below the power match: current rises, voltage regulation worsens.':'Load is above the power match: efficiency rises, delivered power falls.';$('#lecture2-vt-val').textContent=fmt(V)+' V';$('#lecture2-rt-val').textContent=fmt(Rs)+' Ω';$('#lecture2-rl-val').textContent=fmt(R)+' Ω';$('#lecture2-load-readout').innerHTML=`<strong>I<sub>L</sub> = ${fmt(I,3)} A · V<sub>L</sub> = ${fmt(VL,3)} V · P<sub>L</sub> = ${fmt(PL,3)} W</strong><span>${verdict}</span><span>R<sub>L</sub>/R<sub>T</sub> = ${fmt(ratio,2)} · efficiency = ${fmt(eff,1)}% · theoretical P<sub>max</sub> = ${fmt(peak,3)} W</span>`};
  vt.oninput=draw;rt.oninput=draw;rl.oninput=draw;draw();
}

function renderElec275LectureTwo(){
  const number=2,source=ELEC275_LECTURE_SOURCES[number],sections=ELEC275_LECTURE_NOTES[number],progress=elec275LectureProgress(),done=Object.fromEntries(sections.map(s=>[s.id,progress[`L${number}-${s.id}`]])),count=Object.values(done).filter(Boolean).length,percent=count/sections.length*100;
  elec275LectureStepState=Object.fromEntries(sections.map(s=>[s.id,0]));
  main.innerHTML=`${elecSwitch()}<nav class="notes-breadcrumb"><a href="#elec275-lectures">← All lecture notes</a><div><a href="#elec275-lecture-1">Lecture 1</a><a href="#elec275-lecture-2" aria-current="page">Lecture 2</a></div></nav><section class="lecture-head"><div class="eyebrow">ELEC 275 · LECTURE 2 · TEXTBOOK-LED</div><h1>${source.title}</h1><p>${source.sub}</p><div class="lecture-meta"><span>${source.range}</span><span id="elec275-lecture-progress">${count} / ${sections.length} studied</span></div></section><section class="lecture-throughline"><div><span>READ</span><strong>Name the port and topology.</strong></div><i>→</i><div><span>REDUCE</span><strong>Expose an equivalent network.</strong></div><i>→</i><div><span>PRESERVE</span><strong>Keep the same terminal i–v law.</strong></div><i>→</i><div><span>SOLVE</span><strong>Attach the load and calculate.</strong></div><i>→</i><div><span>AUDIT</span><strong>Check limits, power, and units.</strong></div></section><section class="elec275-command"><div><div class="eyebrow">THE CHAPTER IN ONE SENTENCE</div><h2>Simplify the network without changing what the load can observe.</h2><p>Chapter 2 starts with resistor reduction, generalizes “equivalent” to one-port terminal behaviour, and ends by using that viewpoint on power transfer, real instruments, and nonlinear devices.</p></div><div><div class="elec275-progress-track" id="elec275-lecture-progress-bar" role="progressbar" aria-label="Lecture 2 topics studied" aria-valuemin="0" aria-valuemax="${sections.length}" aria-valuenow="${count}"><span style="width:${percent}%"></span></div><div class="elec275-route-grid"><a href="#note-division" data-e275-jump="division"><span>01 · BUILD THE REDUCTION TOOLS</span><strong>Division, equivalent resistance, and superposition</strong></a><a href="#note-thevenin-norton" data-e275-jump="thevenin-norton"><span>02 · THINK AT THE PORT</span><strong>Source forms, Thévenin/Norton, loading, and nonlinear operation</strong></a></div></div></section><nav class="lecture-jumps elec275-chapter-jumps" aria-label="Lecture 2 concepts">${sections.map((s,i)=>`<a href="#note-${s.id}" data-e275-jump="${s.id}"><span>${String(i+1).padStart(2,'0')}</span><strong>${s.kicker.split(' · ')[0]}</strong>${s.title}</a>`).join('')}</nav>${renderElec275LectureTwoLab()}<section class="lecture-notes">${sections.map((s,i)=>elec275Card(s,i,done)).join('')}</section><section class="elec275-synthesis lecture-rules"><div><div class="eyebrow">CHAPTER 2 OPERATING RULES</div><h2>What should survive the lecture.</h2><p>These six checks prevent most equivalent-network mistakes.</p></div><ol><li><span>01</span><strong>Name the port</strong><p>“Equivalent” always means equivalent as seen from a specified terminal pair.</p></li><li><span>02</span><strong>Prove the topology</strong><p>Series and parallel are node relationships, not drawing styles.</p></li><li><span>03</span><strong>Preserve dependent sources</strong><p>Deactivate independent sources only when the chosen method calls for it.</p></li><li><span>04</span><strong>Separate response from power</strong><p>Superpose voltage or current first; compute power from the total.</p></li><li><span>05</span><strong>Treat meters as elements</strong><p>The reading is trustworthy only when instrument loading is negligible or modeled.</p></li><li><span>06</span><strong>Check the endpoints</strong><p>Open, short, zero, infinity, and matched-load limits reveal impossible answers quickly.</p></li></ol></section><section class="notes-reference"><div class="eyebrow">COMPLETE REFERENCE</div><h2>Source for Lecture 2</h2><p class="apa-reference">${ELEC_APA}</p><p>This lecture module follows Chapter 2, “Equivalent Networks,” printed pages 79–145, including all nine stated learning objectives. Its explanations, diagrams, worked values, and retrieval checks are original study aids; they summarize and teach from the textbook rather than republishing its pages.</p></section><div class="engr-bottom-nav"><a href="#elec275-lectures">All lecture notes</a><a href="#elec275-lecture-1">← Lecture 1</a><a href="#quiz">Quiz practice →</a></div>`;
  wireElec275LectureTwo(sections);animate('.lecture-head, .lecture-throughline, .note-card');
}

function renderElec275Lectures(){const match=activeId.match(/^elec275-lecture-(\d+)$/),number=match?+match[1]:0;if(number&&ELEC275_LECTURE_NOTES[number]){document.title=`ELEC 275 Lecture ${number} notes · Ash’s Study Lab`;$('#course-label').textContent=`ELEC 275 / LECTURE ${number} NOTES`;if(number===2)return renderElec275LectureTwo();return renderElec275Lecture(number)}document.title='ELEC 275 lecture notes · Ash’s Study Lab';$('#course-label').textContent='ELEC 275 / LECTURE NOTES';renderElec275LectureHub()}
