// Generated deterministically by tools/build-rosen-ch1-answers.mjs. Do not hand-edit.
const ROSEN_CH1_ANSWERS = [
  {
    "id": "rosen-ch1-ex-1-1-001",
    "mode": "rubric",
    "answer": "a) Proposition; true. b) Proposition; false. c) Proposition; true. d) Proposition; false. e) Not a proposition. f) Not a proposition.",
    "solution": "A proposition is a declarative sentence with a definite truth value. Boston is Massachusetts's capital, Miami is not Florida's capital, 2 + 3 = 5, and 5 + 7 ≠ 10. The equation in (e) has an unspecified variable, and (f) is a command rather than a declarative sentence.",
    "hints": [
      "First ask of each sentence: is it declarative, and does it have one definite truth value without assigning anything to a variable?"
    ],
    "rubric": [
      "Classifies (a), (b), (c), and (d) as propositions and (e) and (f) as not propositions.",
      "Gives truth values in order for (a)–(d): true, false, true, false.",
      "Explains that (e) lacks a definite truth value because x is unspecified and that (f) is imperative."
    ],
    "startHere": "Test (e) with x = 9 and then x = 1. Different truth values show why the open sentence is not a proposition.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Proposition; true.",
        "solution": "It is declarative, and Boston is the capital of Massachusetts.",
        "rubric": [
          "States that it is a proposition and that its truth value is true."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Proposition; false.",
        "solution": "It is declarative, but Tallahassee, not Miami, is Florida's capital.",
        "rubric": [
          "States that it is a proposition and that its truth value is false."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Proposition; true.",
        "solution": "The arithmetic statement is declarative and 2 + 3 = 5.",
        "rubric": [
          "States that it is a proposition and that its truth value is true."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Proposition; false.",
        "solution": "The statement is declarative, but 5 + 7 = 12, not 10.",
        "rubric": [
          "States that it is a proposition and that its truth value is false."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "Until x is specified, x + 2 = 11 has no definite truth value.",
        "rubric": [
          "States that it is not a proposition and refers to the unspecified variable x."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "It is a command, not a declarative sentence that can be true or false.",
        "rubric": [
          "States that it is not a proposition because it is a command."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-002",
    "mode": "rubric",
    "answer": "a) Not a proposition. b) Not a proposition. c) Proposition; false. d) Not a proposition. e) Proposition; false. f) Not a proposition.",
    "solution": "Commands and questions are not propositions, and equations with unspecified variables have no definite truth value. There are black flies in Maine, so (c) is a false proposition; the green-cheese claim in (e) is also a false proposition.",
    "hints": [
      "Separate sentence type from truth: first identify commands, questions, and open sentences; only then assess the remaining claims."
    ],
    "rubric": [
      "Classifies (a), (b), (d), and (f) as not propositions and (c) and (e) as propositions.",
      "Gives both (c) and (e) the truth value false.",
      "Explains that x and n are unspecified in (d) and (f)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "It is an imperative sentence, a command.",
        "rubric": [
          "States that it is not a proposition because it is a command."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "It is a question, not a declarative sentence.",
        "rubric": [
          "States that it is not a proposition because it is a question."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Proposition; false.",
        "solution": "It makes a definite claim, and the claim is false because black flies do occur in Maine.",
        "rubric": [
          "States that it is a proposition and that its truth value is false."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "Its truth depends on the unspecified value of x.",
        "rubric": [
          "States that it is not a proposition and identifies x as unspecified."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Proposition; false.",
        "solution": "It is a definite declarative claim, and the moon is not made of green cheese.",
        "rubric": [
          "States that it is a proposition and that its truth value is false."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Not a proposition.",
        "solution": "Its truth depends on the unspecified value of n.",
        "rubric": [
          "States that it is not a proposition and identifies n as unspecified."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-003",
    "mode": "rubric",
    "answer": "a) Linda is not younger than Sanjay. b) Mei does not make more money than Isabella. c) Moshe is not taller than Monica. d) Abby is not richer than Ricardo.",
    "solution": "Negate each entire comparison. In particular, ‘not younger’ includes being the same age or older; it does not mean only ‘older.’ The same boundary-care applies to the other strict comparisons.",
    "hints": [
      "Negate the strict relation itself; remember that equality is included in the negation of ‘more than’ or ‘less than.’"
    ],
    "rubric": [
      "Negates all four comparisons without reversing their direction.",
      "Uses forms equivalent to not younger, not more, not taller, and not richer, respectively, allowing equality in each negation."
    ],
    "verify": "For (a), test equal ages: the original is false and its negation is true, as required.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Linda is not younger than Sanjay (she is the same age or older).",
        "solution": "The negation of ‘younger than’ is ‘not younger than,’ which includes equality.",
        "rubric": [
          "States not younger, or equivalently at least as old, rather than only older."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Mei does not make more money than Isabella.",
        "solution": "Negating ‘makes more’ gives ‘does not make more,’ including equal earnings.",
        "rubric": [
          "States that Mei makes no more than Isabella, without claiming she necessarily makes less."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Moshe is not taller than Monica.",
        "solution": "The negation includes equal height and shorter height.",
        "rubric": [
          "States not taller, or equivalently at most as tall."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Abby is not richer than Ricardo.",
        "solution": "Negating ‘richer’ gives ‘not richer,’ including equal wealth.",
        "rubric": [
          "States not richer, or equivalently no richer, rather than only poorer."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-004",
    "mode": "rubric",
    "answer": "a) Janice does not have more Facebook friends than Juan. b) Quincy is not smarter than Venkat. c) Zelda does not drive more miles to school than Paola. d) Briana does not sleep longer than Gloria.",
    "solution": "Place negation on each complete comparison. ‘Not more’ permits equality; it should not automatically be replaced by ‘less.’",
    "hints": [
      "For each ‘more than’ claim, write ‘not more than’ and check that the tied case makes the negation true."
    ],
    "rubric": [
      "Provides all four negations with the original subjects and comparison objects unchanged.",
      "Does not replace any negation by the strictly opposite comparison; equality remains possible."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Janice does not have more Facebook friends than Juan.",
        "solution": "This says Janice has the same number or fewer, exactly the failure of ‘more.’",
        "rubric": [
          "Negates the comparison while preserving Janice and Juan and allowing equality."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Quincy is not smarter than Venkat.",
        "solution": "The negation of ‘smarter than’ is ‘not smarter than.’",
        "rubric": [
          "States not smarter rather than necessarily less smart."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Zelda does not drive more miles to school than Paola.",
        "solution": "The original is false when Zelda drives the same distance or fewer miles.",
        "rubric": [
          "States no more miles and preserves the comparison with Paola."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Briana does not sleep longer than Gloria.",
        "solution": "This includes sleeping for the same duration or for less time.",
        "rubric": [
          "States not longer and allows equal sleep duration."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-005",
    "mode": "rubric",
    "answer": "a) Mei does not have an MP3 player. b) There is pollution in New Jersey. c) 2 + 1 ≠ 3. d) The summer in Maine is not hot or not sunny (possibly both).",
    "solution": "Negate each whole proposition. In (b), ‘no pollution’ becomes ‘some pollution exists.’ In (d), the original is a conjunction, so by De Morgan's law its negation is ‘not hot OR not sunny,’ not ‘not hot AND not sunny.’",
    "hints": [
      "Look for hidden structure: ‘no’ signals an existence claim when negated, and ‘hot and sunny’ is a conjunction."
    ],
    "rubric": [
      "Gives correct negations for (a)–(c).",
      "For (b), asserts that some pollution exists rather than merely denying the wording.",
      "For (d), uses inclusive OR between ‘not hot’ and ‘not sunny.’"
    ],
    "readAloud": "Read ‘not (hot and sunny)’ as ‘it is not true that both hold’: at least one of hot or sunny must fail.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Mei does not have an MP3 player.",
        "solution": "This directly denies possession.",
        "rubric": [
          "States that Mei does not have an MP3 player."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There is some pollution in New Jersey.",
        "solution": "The failure of ‘there is no pollution’ means at least some pollution exists.",
        "rubric": [
          "Asserts the existence of some pollution in New Jersey."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "2 + 1 ≠ 3.",
        "solution": "Negating equality gives inequality, even though the original equality is actually true.",
        "rubric": [
          "Uses 2 + 1 is not equal to 3, or an equivalent statement."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "The summer in Maine is not hot or not sunny (or both).",
        "solution": "Negating hot ∧ sunny gives ¬hot ∨ ¬sunny.",
        "rubric": [
          "Uses OR and negates both component properties; does not require both to fail."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-006",
    "mode": "rubric",
    "answer": "a) Jennifer and Teja are not friends. b) There are not 13 items in a baker's dozen. c) Abby sent at most 100 text messages yesterday. d) 121 is not a perfect square.",
    "solution": "Negate each statement without changing its subject. For (c), the negation of ‘more than 100’ is ‘100 or fewer,’ so 100 is included. A negation need not be true; (b) and (d) are negations even though they are false.",
    "hints": [
      "Pay special attention to the strict threshold in (c): what happens when the count is exactly 100?"
    ],
    "rubric": [
      "Negates all four propositions without claiming the negations must be true.",
      "For (c), uses at most 100, 100 or fewer, or not more than 100, including exactly 100."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Jennifer and Teja are not friends.",
        "solution": "This denies the single claim that they are friends.",
        "rubric": [
          "States that Jennifer and Teja are not friends."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There are not 13 items in a baker's dozen.",
        "solution": "Negating the count claim does not require computing its actual truth value.",
        "rubric": [
          "States that a baker's dozen does not contain 13 items, or an equivalent inequality."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Abby sent at most 100 text messages yesterday.",
        "solution": "Not more than 100 means fewer than 100 or exactly 100.",
        "rubric": [
          "Includes exactly 100 as well as fewer than 100."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "121 is not a perfect square.",
        "solution": "This is the direct negation, irrespective of the fact that 121 = 11².",
        "rubric": [
          "States that 121 is not a perfect square."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-007",
    "mode": "rubric",
    "answer": "a) Steve has at most 100 GB of free disk space on his laptop. b) Zach does not block e-mails from Jennifer, or he does not block texts from Jennifer (or both). c) 7 · 11 · 13 ≠ 999. d) Diane did not ride her bicycle exactly 100 miles on Sunday.",
    "solution": "Negate each proposition as a whole. In (a), ‘not more than 100’ includes exactly 100. In (b), negating a conjunction requires OR: at least one category is not blocked. In (d), deny that the distance was exactly 100 miles rather than asserting a particular different distance.",
    "hints": [
      "Before negating, decide whether the sentence contains a strict inequality, a conjunction, or an exact equality."
    ],
    "rubric": [
      "Negates all four statements while preserving their subjects and conditions.",
      "Includes exactly 100 GB in (a).",
      "Uses OR between the two negated blocking claims in (b).",
      "Denies exactly 100 miles in (d) without inventing another distance."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Steve has at most 100 GB of free disk space on his laptop.",
        "solution": "The complement of more than 100 GB is 100 GB or less.",
        "rubric": [
          "Uses at most 100 GB, no more than 100 GB, or an equivalent condition including 100."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Zach does not block e-mails from Jennifer or does not block texts from Jennifer (possibly both).",
        "solution": "By De Morgan's law, ¬(E ∧ T) = ¬E ∨ ¬T.",
        "rubric": [
          "Negates both components and joins them with inclusive OR."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "7 · 11 · 13 ≠ 999.",
        "solution": "The negation of equality is inequality; the original product is actually 1001.",
        "rubric": [
          "States that the product is not equal to 999."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Diane did not ride her bicycle exactly 100 miles on Sunday.",
        "solution": "This denies the stated distance without specifying what distance she rode.",
        "rubric": [
          "Denies that Sunday's bicycle ride was exactly 100 miles."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-008",
    "mode": "auto",
    "answer": "a) True. b) True. c) False. d) False. e) False.",
    "solution": "Compare the given specifications first. B has the most RAM. For (b), C's 5 MP camera exceeds B's 4 MP, so the OR is true. In (c), B's 4 MP camera does not exceed A's 8 MP, so the AND is false. In (d), the antecedent is true but 4 > 5 is false, making the conditional false. In (e), the two sides of the biconditional are false and true, respectively.",
    "hints": [
      "Make a small RAM/ROM/camera table for A, B, and C, then evaluate the atomic comparisons before applying AND, OR, →, or ↔."
    ],
    "startHere": "For (d), a conditional is false only when its antecedent is true and its consequent is false.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "B has 288 MB RAM, more than A's 256 MB and C's 128 MB."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "The camera comparison 5 MP > 4 MP is true, so the disjunction is true even though 32 GB > 64 GB is false."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "The conjunction contains the false claim 4 MP > 8 MP, so the whole conjunction is false."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "B has more RAM and ROM than C, but its 4 MP camera is not higher resolution than C's 5 MP camera: true → false is false."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "A has more RAM than B is false, while B has more RAM than A is true; a biconditional with unequal sides is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-009",
    "mode": "auto",
    "answer": "a) False. b) True. c) True. d) True. e) True.",
    "solution": "Acme has the largest revenue, Nadir the smallest profit, and Quixote the largest profit. Thus (a) is false; (b) is true ∧ true; (c) is false ∨ true; (d) has a false antecedent because Quixote does not have the smallest profit, so it is true; and (e) is true ↔ true.",
    "hints": [
      "Record the revenue and profit rankings separately before reading the compound statements."
    ],
    "verify": "For (d), use the conditional's only false case: a false antecedent already guarantees a true conditional.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "Acme's revenue of $138 billion, not Quixote's $111 billion, is largest."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Nadir's $5 billion profit is lowest and Acme's $138 billion revenue is largest, so both conjuncts are true."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Quixote's $13 billion profit is largest, so the OR statement is true although Acme does not have the largest profit."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "The antecedent is false because Nadir has the smallest profit; therefore the conditional is vacuously true."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Both sides are true: Nadir has the smallest profit and Acme has the largest revenue."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-010",
    "mode": "rubric",
    "answer": "a) I did not buy a lottery ticket this week. b) I bought a lottery ticket this week or I won the million dollar jackpot (or both). c) If I bought a lottery ticket this week, then I won the million dollar jackpot. d) I bought a lottery ticket this week and I won the million dollar jackpot. e) I bought a lottery ticket this week if and only if I won the million dollar jackpot. f) If I did not buy a lottery ticket this week, then I did not win the million dollar jackpot. g) I did not buy a lottery ticket this week and I did not win the million dollar jackpot. h) I did not buy a lottery ticket this week, or I bought a lottery ticket this week and won the million dollar jackpot.",
    "solution": "Substitute the given English statements for p and q, preserving every connective and the grouping in (h). Read ¬ as not, ∧ as and, ∨ as inclusive or, → as if–then, and ↔ as if and only if.",
    "hints": [
      "Translate the symbols before writing fluent English; in (h), the outer operation is OR and p ∧ q is grouped on its right."
    ],
    "rubric": [
      "Each part preserves the stated proposition letters' meanings and all negations.",
      "Uses inclusive OR for ∨, correct direction for each conditional, and a biconditional for ↔.",
      "Preserves the grouping ¬p ∨ (p ∧ q) in (h)."
    ],
    "readAloud": "In (h), read the formula as ‘not p, or the combination p and q,’ not as a single negation of everything after it.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "I did not buy a lottery ticket this week.",
        "solution": "¬p negates p.",
        "rubric": [
          "Denies buying a lottery ticket this week."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "I bought a lottery ticket this week or I won the million dollar jackpot (or both).",
        "solution": "p ∨ q is an inclusive disjunction.",
        "rubric": [
          "Joins buying the ticket and winning the jackpot with inclusive OR."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If I bought a lottery ticket this week, then I won the million dollar jackpot.",
        "solution": "p is the antecedent and q the consequent.",
        "rubric": [
          "Uses if buying this week, then winning the jackpot, in that direction."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "I bought a lottery ticket this week and I won the million dollar jackpot.",
        "solution": "p ∧ q asserts both components.",
        "rubric": [
          "Asserts both buying the ticket this week and winning the jackpot."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "I bought a lottery ticket this week if and only if I won the million dollar jackpot.",
        "solution": "p ↔ q expresses equivalence in both directions.",
        "rubric": [
          "Connects the two statements with if and only if."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If I did not buy a lottery ticket this week, then I did not win the million dollar jackpot.",
        "solution": "Both antecedent and consequent are negated, and the arrow runs from ¬p to ¬q.",
        "rubric": [
          "Negates both components and keeps not buying as the condition for not winning."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "I did not buy a lottery ticket this week and I did not win the million dollar jackpot.",
        "solution": "¬p ∧ ¬q asserts both negations.",
        "rubric": [
          "Uses AND between not buying this week and not winning."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "I did not buy a lottery ticket this week, or I bought a lottery ticket this week and won the million dollar jackpot.",
        "solution": "The main connective is ∨; its right operand is the conjunction p ∧ q.",
        "rubric": [
          "Uses OR between not buying and the conjunction of buying this week and winning."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-011",
    "mode": "rubric",
    "answer": "a) Sharks have not been spotted near the shore. b) Swimming at the New Jersey shore is allowed and sharks have been spotted near the shore. c) Swimming at the New Jersey shore is not allowed or sharks have been spotted near the shore. d) If swimming at the New Jersey shore is allowed, then sharks have not been spotted near the shore. e) If sharks have not been spotted near the shore, then swimming at the New Jersey shore is allowed. f) If swimming at the New Jersey shore is not allowed, then sharks have not been spotted near the shore. g) Swimming at the New Jersey shore is allowed if and only if sharks have not been spotted near the shore. h) Swimming at the New Jersey shore is not allowed, and either swimming there is allowed or sharks have not been spotted near the shore.",
    "solution": "Replace p by ‘swimming at the New Jersey shore is allowed’ and q by ‘sharks have been spotted near the shore.’ Preserve negation scopes, conditional directions, and the conjunction outside the parentheses in (h).",
    "hints": [
      "Mark the main connective first; for (h), it is the ∧ between ¬p and (p ∨ ¬q)."
    ],
    "rubric": [
      "Uses the correct meanings of p and q in every part.",
      "Preserves every negation and the direction of every conditional or biconditional.",
      "For (h), uses AND at the outer level and inclusive OR inside the parentheses."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Sharks have not been spotted near the shore.",
        "solution": "Negate q.",
        "rubric": [
          "Denies that sharks have been spotted near the shore."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Swimming at the New Jersey shore is allowed and sharks have been spotted near the shore.",
        "solution": "Join p and q with AND.",
        "rubric": [
          "Asserts both swimming is allowed and sharks have been spotted."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Swimming at the New Jersey shore is not allowed or sharks have been spotted near the shore (or both).",
        "solution": "Join ¬p and q with inclusive OR.",
        "rubric": [
          "Negates only swimming permission and uses inclusive OR with sharks spotted."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If swimming at the New Jersey shore is allowed, then sharks have not been spotted near the shore.",
        "solution": "Use p as antecedent and ¬q as consequent.",
        "rubric": [
          "Keeps allowed as the condition and no sharks spotted as the result."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If sharks have not been spotted near the shore, then swimming at the New Jersey shore is allowed.",
        "solution": "The arrow runs from ¬q to p.",
        "rubric": [
          "Uses no sharks spotted as the antecedent and swimming allowed as the consequent."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If swimming at the New Jersey shore is not allowed, then sharks have not been spotted near the shore.",
        "solution": "Both sides are negated; do not reverse them.",
        "rubric": [
          "Uses not allowed as antecedent and no sharks spotted as consequent."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "Swimming at the New Jersey shore is allowed if and only if sharks have not been spotted near the shore.",
        "solution": "Use a biconditional between p and ¬q.",
        "rubric": [
          "Connects swimming allowed and no sharks spotted with if and only if."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "Swimming at the New Jersey shore is not allowed, and either swimming there is allowed or sharks have not been spotted near the shore.",
        "solution": "Translate ¬p ∧ (p ∨ ¬q) while retaining its nested structure.",
        "rubric": [
          "Asserts swimming is not allowed AND the inclusive disjunction of swimming allowed or no sharks spotted."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-012",
    "mode": "rubric",
    "answer": "a) The election is not decided. b) The election is decided or the votes have been counted (or both). c) The election is not decided and the votes have been counted. d) If the votes have been counted, then the election is decided. e) If the votes have not been counted, then the election is not decided. f) If the election is not decided, then the votes have not been counted. g) The election is decided if and only if the votes have been counted. h) The votes have not been counted, or the election is not decided and the votes have been counted.",
    "solution": "Substitute p = ‘the election is decided’ and q = ‘the votes have been counted.’ The arrows in (d)–(f) have different directions, and (h) has OR outside the grouped conjunction.",
    "hints": [
      "For each conditional, circle the antecedent immediately before the arrow and the consequent immediately after it."
    ],
    "rubric": [
      "Preserves the meanings of p and q and every negation.",
      "Keeps the conditional directions q → p, ¬q → ¬p, and ¬p → ¬q distinct.",
      "For (h), uses inclusive OR between ¬q and the conjunction ¬p ∧ q."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The election is not decided.",
        "solution": "Translate ¬p by negating p.",
        "rubric": [
          "Denies that the election is decided."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "The election is decided or the votes have been counted (or both).",
        "solution": "Translate p ∨ q as inclusive OR.",
        "rubric": [
          "Uses inclusive OR between decided and votes counted."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "The election is not decided and the votes have been counted.",
        "solution": "Translate ¬p ∧ q as a conjunction.",
        "rubric": [
          "Asserts not decided AND votes counted."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If the votes have been counted, then the election is decided.",
        "solution": "q is the antecedent and p the consequent.",
        "rubric": [
          "Uses votes counted as the condition and election decided as the result."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If the votes have not been counted, then the election is not decided.",
        "solution": "Negate q in the antecedent and p in the consequent.",
        "rubric": [
          "Uses votes not counted as antecedent and election not decided as consequent."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If the election is not decided, then the votes have not been counted.",
        "solution": "The arrow runs from ¬p to ¬q.",
        "rubric": [
          "Uses election not decided as antecedent and votes not counted as consequent."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "The election is decided if and only if the votes have been counted.",
        "solution": "Translate p ↔ q as a biconditional.",
        "rubric": [
          "Connects decided and votes counted with if and only if."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "The votes have not been counted, or the election is not decided and the votes have been counted.",
        "solution": "Translate ¬q ∨ (¬p ∧ q), preserving the parentheses.",
        "rubric": [
          "Uses inclusive OR at the outer level and AND between election not decided and votes counted."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-013",
    "mode": "auto",
    "answer": "a) p ∧ q. b) p ∧ ¬q. c) ¬p ∧ ¬q. d) p ∨ q. e) p → q. f) (p ∨ q) ∧ (p → ¬q). g) p ↔ q.",
    "solution": "Use ‘but’ as AND, inclusive ‘either…or…(or both)’ as OR, and keep conditional direction explicit. In (f), conjoin the initial inclusive disjunction with the conditional ‘if below freezing, then not snowing.’ ‘Necessary and sufficient’ gives a biconditional in (g).",
    "hints": [
      "Underline condition words: ‘if’ introduces an antecedent, while ‘necessary and sufficient’ requires both directions."
    ],
    "readAloud": "Here p means below freezing and q means snowing. Read p → ¬q as ‘if below freezing, then not snowing.’",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "p ∧ q",
        "accepted": [
          "p∧q",
          "q ∧ p",
          "q∧p"
        ],
        "checker": "logic",
        "solution": "Both below freezing and snowing are asserted."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "p ∧ ¬q",
        "accepted": [
          "p∧¬q",
          "¬q ∧ p",
          "¬q∧p"
        ],
        "checker": "logic",
        "solution": "‘But’ functions as AND, and snowing is negated."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "¬p ∧ ¬q",
        "accepted": [
          "¬p∧¬q",
          "¬q ∧ ¬p",
          "¬q∧¬p",
          "¬(p ∨ q)",
          "¬(p∨q)"
        ],
        "checker": "logic",
        "solution": "Both component propositions are negated and conjoined."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "p ∨ q",
        "accepted": [
          "p∨q",
          "q ∨ p",
          "q∨p"
        ],
        "checker": "logic",
        "solution": "The phrase ‘or both’ explicitly makes the disjunction inclusive."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "p → q",
        "accepted": [
          "p→q",
          "¬p ∨ q",
          "¬p∨q",
          "q ∨ ¬p",
          "q∨¬p"
        ],
        "checker": "logic",
        "solution": "Below freezing is the antecedent and snowing is the consequent."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "(p ∨ q) ∧ (p → ¬q)",
        "accepted": [
          "(p∨q)∧(p→¬q)",
          "(p → ¬q) ∧ (p ∨ q)",
          "(p→¬q)∧(p∨q)",
          "(p ∨ q) ∧ (¬p ∨ ¬q)",
          "(p∨q)∧(¬p∨¬q)"
        ],
        "checker": "logic",
        "solution": "The sentence asserts the inclusive OR and, separately, that below freezing implies not snowing."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "p ↔ q",
        "accepted": [
          "p↔q",
          "q ↔ p",
          "q↔p",
          "(p → q) ∧ (q → p)",
          "(p→q)∧(q→p)"
        ],
        "checker": "logic",
        "solution": "Necessary and sufficient means each condition implies the other."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-014",
    "mode": "rubric",
    "answer": "a) If you have the flu, then you miss the final examination. b) You do not miss the final examination if and only if you pass the course. c) If you miss the final examination, then you do not pass the course. d) You have the flu, or you miss the final examination, or you pass the course (inclusive or). e) If you have the flu, then you do not pass the course, or if you miss the final examination, then you do not pass the course. f) You have the flu and miss the final examination, or you do not miss the final examination and pass the course.",
    "solution": "Substitute the definitions of p, q, and r without changing the formulas. For (e), the main connective is OR between two conditionals. For (f), it is OR between two conjunctions.",
    "hints": [
      "Identify the outermost connective before translating; parentheses show which smaller statements must stay grouped."
    ],
    "rubric": [
      "Uses p = have the flu, q = miss the final, and r = pass the course throughout.",
      "Preserves all negations and conditional directions.",
      "For (e), translates an OR of two conditionals; for (f), an OR of two conjunctions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If you have the flu, then you miss the final examination.",
        "solution": "p → q makes having the flu the antecedent.",
        "rubric": [
          "Uses if flu, then miss final, in that direction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "You do not miss the final examination if and only if you pass the course.",
        "solution": "¬q ↔ r is a biconditional with negation only on q.",
        "rubric": [
          "Connects not missing the final and passing with if and only if."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If you miss the final examination, then you do not pass the course.",
        "solution": "q → ¬r negates only the consequent.",
        "rubric": [
          "Uses missing the final as condition and not passing as result."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "You have the flu, or you miss the final examination, or you pass the course (or any combination).",
        "solution": "p ∨ q ∨ r is an inclusive three-way disjunction.",
        "rubric": [
          "Joins all three statements with inclusive OR."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If you have the flu, then you do not pass the course, or if you miss the final examination, then you do not pass the course.",
        "solution": "Translate each implication separately, then join them with inclusive OR.",
        "rubric": [
          "Preserves both implications p → ¬r and q → ¬r and joins them with OR."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "You have the flu and miss the final examination, or you do not miss the final examination and pass the course.",
        "solution": "The two operands are p ∧ q and ¬q ∧ r.",
        "rubric": [
          "Uses OR between flu-and-miss-final and not-miss-final-and-pass."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-015",
    "mode": "auto",
    "answer": "a) ¬p. b) p ∧ ¬q. c) p → q. d) ¬p → ¬q. e) p → q. f) q ∧ ¬p. g) q → p.",
    "solution": "The phrase ‘q if p’ and ‘p is sufficient for q’ both give p → q. ‘Whenever q, p’ gives q → p. ‘But’ is AND. Preserve the separate negations in (d) and the order q ∧ ¬p in (f).",
    "hints": [
      "Do not assume the first clause in English is always the antecedent: in ‘q if p,’ p is the condition."
    ],
    "verify": "For (g), rewrite ‘Whenever you get a ticket, you drive over 65’ as ‘If you get a ticket, then you drive over 65.’",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "¬p",
        "accepted": [
          "not p"
        ],
        "checker": "logic",
        "solution": "The statement simply negates driving over 65 miles per hour."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "p ∧ ¬q",
        "accepted": [
          "p∧¬q",
          "¬q ∧ p",
          "¬q∧p"
        ],
        "checker": "logic",
        "solution": "‘But’ joins driving too fast with not receiving a ticket."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "p → q",
        "accepted": [
          "p→q",
          "¬p ∨ q",
          "¬p∨q"
        ],
        "checker": "logic",
        "solution": "‘q if p’ means if p then q."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "¬p → ¬q",
        "accepted": [
          "¬p→¬q",
          "p ∨ ¬q",
          "p∨¬q"
        ],
        "checker": "logic",
        "solution": "Not driving over 65 is the antecedent; not getting a ticket is the consequent."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "p → q",
        "accepted": [
          "p→q",
          "¬p ∨ q",
          "¬p∨q"
        ],
        "checker": "logic",
        "solution": "A sufficient condition is the antecedent of a conditional."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "q ∧ ¬p",
        "accepted": [
          "q∧¬p",
          "¬p ∧ q",
          "¬p∧q"
        ],
        "checker": "logic",
        "solution": "The sentence asserts both getting a ticket and not driving over 65."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "q → p",
        "accepted": [
          "q→p",
          "¬q ∨ p",
          "¬q∨p",
          "p ∨ ¬q",
          "p∨¬q"
        ],
        "checker": "logic",
        "solution": "‘Whenever q, p’ means if q then p, the reverse direction from (c)."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-016",
    "mode": "auto",
    "answer": "a) r ∧ ¬q. b) p ∧ q ∧ r. c) r → p. d) p ∧ ¬q ∧ r. e) (p ∧ q) → r. f) r ↔ (q ∨ p).",
    "solution": "In (c), getting an A on the final is necessary for getting an A in the class, so r → p. In (e), the conjunction p ∧ q is sufficient for r, so (p ∧ q) → r. In (f), the biconditional connects r to the inclusive disjunction q ∨ p.",
    "hints": [
      "Translate necessary as ‘result → necessary condition’ and sufficient as ‘sufficient condition → result.’"
    ],
    "readAloud": "For (e), read the formula as ‘if both p and q, then r’; the conjunction is the whole antecedent.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "r ∧ ¬q",
        "accepted": [
          "r∧¬q",
          "¬q ∧ r",
          "¬q∧r"
        ],
        "checker": "logic",
        "solution": "Getting an A in the class is r, and not doing every exercise is ¬q; ‘but’ means AND."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "p ∧ q ∧ r",
        "accepted": [
          "p∧q∧r",
          "(p ∧ q) ∧ r",
          "(p∧q)∧r",
          "r ∧ q ∧ p",
          "r∧q∧p"
        ],
        "checker": "logic",
        "solution": "All three propositions are asserted."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "r → p",
        "accepted": [
          "r→p",
          "¬r ∨ p",
          "¬r∨p",
          "p ∨ ¬r",
          "p∨¬r"
        ],
        "checker": "logic",
        "solution": "To get r, p is necessary; therefore r cannot be true unless p is true."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "p ∧ ¬q ∧ r",
        "accepted": [
          "p∧¬q∧r",
          "(p ∧ ¬q) ∧ r",
          "(p∧¬q)∧r",
          "r ∧ p ∧ ¬q",
          "r∧p∧¬q"
        ],
        "checker": "logic",
        "solution": "The sentence asserts all three: A on the final, not every exercise, and A in the class."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "(p ∧ q) → r",
        "accepted": [
          "(p∧q)→r",
          "¬(p ∧ q) ∨ r",
          "¬(p∧q)∨r",
          "¬p ∨ ¬q ∨ r",
          "¬p∨¬q∨r"
        ],
        "checker": "logic",
        "solution": "The combined condition p ∧ q is sufficient for r."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "r ↔ (q ∨ p)",
        "accepted": [
          "r↔(q∨p)",
          "r ↔ (p ∨ q)",
          "r↔(p∨q)",
          "(q ∨ p) ↔ r",
          "(q∨p)↔r",
          "(r → (q ∨ p)) ∧ ((q ∨ p) → r)",
          "(r→(q∨p))∧((q∨p)→r)"
        ],
        "checker": "logic",
        "solution": "‘If and only if’ links r with the inclusive alternative of doing every exercise or getting an A on the final."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-017",
    "mode": "auto",
    "answer": "a) r ∧ ¬p. b) ¬p ∧ q ∧ r. c) r → (q ↔ ¬p). d) ¬q ∧ ¬p ∧ r. e) (q → (¬r ∧ ¬p)) ∧ ¬((¬r ∧ ¬p) → q). f) (p ∧ r) → ¬q.",
    "solution": "Translate ‘but’ and ‘and’ as conjunctions. In (c), the entire biconditional q ↔ ¬p is the consequent of r. In (e), let C = ¬r ∧ ¬p; necessary gives q → C, while not sufficient adds ¬(C → q). In (f), ‘whenever p and r, not q’ gives (p ∧ r) → ¬q.",
    "hints": [
      "For (e), name the combined condition C = no ripe berries AND no bears; then translate necessary and not sufficient separately."
    ],
    "verify": "Necessary alone would be q → C. The extra factor ¬(C → q) is essential because it rules out treating C as enough to guarantee q.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "r ∧ ¬p",
        "accepted": [
          "r∧¬p",
          "¬p ∧ r",
          "¬p∧r"
        ],
        "checker": "logic",
        "solution": "Ripe berries and no bears seen are both asserted."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "¬p ∧ q ∧ r",
        "accepted": [
          "¬p∧q∧r",
          "(¬p ∧ q) ∧ r",
          "(¬p∧q)∧r",
          "r ∧ q ∧ ¬p",
          "r∧q∧¬p"
        ],
        "checker": "logic",
        "solution": "All three components hold: no bears, safe hiking, and ripe berries."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "r → (q ↔ ¬p)",
        "accepted": [
          "r→(q↔¬p)",
          "r → (¬p ↔ q)",
          "r→(¬p↔q)",
          "¬r ∨ (q ↔ ¬p)",
          "¬r∨(q↔¬p)"
        ],
        "checker": "logic",
        "solution": "If berries are ripe, then safe hiking is equivalent to no bears having been seen."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "¬q ∧ ¬p ∧ r",
        "accepted": [
          "¬q∧¬p∧r",
          "¬p ∧ ¬q ∧ r",
          "¬p∧¬q∧r",
          "r ∧ ¬p ∧ ¬q",
          "r∧¬p∧¬q"
        ],
        "checker": "logic",
        "solution": "The sentence asserts unsafe hiking, no bears, and ripe berries."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "(q → (¬r ∧ ¬p)) ∧ ¬((¬r ∧ ¬p) → q)",
        "accepted": [
          "(q→(¬r∧¬p))∧¬((¬r∧¬p)→q)",
          "(q → (¬p ∧ ¬r)) ∧ ¬((¬p ∧ ¬r) → q)",
          "(q→(¬p∧¬r))∧¬((¬p∧¬r)→q)"
        ],
        "checker": "logic",
        "solution": "Safety implies the combined condition, but the combined condition does not imply safety."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "(p ∧ r) → ¬q",
        "accepted": [
          "(p∧r)→¬q",
          "(r ∧ p) → ¬q",
          "(r∧p)→¬q",
          "¬(p ∧ r) ∨ ¬q",
          "¬(p∧r)∨¬q",
          "¬p ∨ ¬r ∨ ¬q",
          "¬p∨¬r∨¬q"
        ],
        "checker": "logic",
        "solution": "The conjunction of bears seen and ripe berries is the antecedent; unsafe hiking is the consequent."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-018",
    "mode": "auto",
    "answer": "a) True. b) False. c) True. d) False.",
    "solution": "A biconditional is true exactly when its two sides have the same truth value. The side pairs are T–T, T–F, F–F, and F–T, respectively.",
    "hints": [
      "Evaluate each arithmetic or factual claim separately, then compare the two truth values; do not look for a causal connection."
    ],
    "readAloud": "Read ↔ as ‘if and only if’: it says the two sides match in truth value.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Both 2 + 2 = 4 and 1 + 1 = 2 are true, so the biconditional is true."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "The left side is true but 2 + 3 = 4 is false, so the sides differ."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Both sides are false, and false ↔ false is true."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "0 > 1 is false while 2 > 1 is true, so the biconditional is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-019",
    "mode": "auto",
    "answer": "a) False. b) True. c) True. d) True.",
    "solution": "A conditional is false only for true antecedent and false consequent. The antecedent–consequent pairs are T–F, F–T, F–F, and F–F, respectively; only (a) is false.",
    "hints": [
      "Check the antecedent first. If it is false, the conditional is automatically true regardless of the consequent."
    ],
    "verify": "Do not confuse a true material conditional with a true conclusion: in (c), the conclusion 2 + 2 = 5 is false even though the conditional is true.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "The antecedent 1 + 1 = 2 is true and the consequent 2 + 2 = 5 is false."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "The antecedent 1 + 1 = 3 is false, so the conditional is vacuously true."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "The false antecedent makes the conditional true even though the consequent is also false."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Monkeys cannot fly, so the antecedent is false and the conditional is true."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-020",
    "mode": "auto",
    "answer": "a) True. b) True. c) False. d) True.",
    "solution": "Parts (a) and (b) have false antecedents and are therefore true. Part (c) is true → false, hence false. Part (d) is true → true, hence true.",
    "hints": [
      "Use the single false row of p → q: p true and q false."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Because 1 + 1 = 3 is false, the conditional is vacuously true."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "The antecedent is false, so it does not matter that dogs cannot fly."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "false",
          "F"
        ],
        "checker": "truth",
        "solution": "The antecedent 1 + 1 = 2 is true, but the consequent that dogs can fly is false."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "true",
          "T"
        ],
        "checker": "truth",
        "solution": "Both 2 + 2 = 4 and 1 + 2 = 3 are true."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-021",
    "mode": "rubric",
    "answer": "a) Exclusive or: normally exactly one beverage, coffee or tea, comes with dinner. b) Inclusive or: satisfying either requirement suffices, including both. c) Inclusive or: either course can satisfy the prerequisite, and having both also qualifies. d) Exclusive or: payment is intended in one currency or the other, not a combination of both.",
    "solution": "Inclusive OR permits both alternatives; exclusive OR requires exactly one. A password meeting both criteria still qualifies, and a student with both courses still meets the prerequisite. The beverage and payment contexts conventionally offer one choice.",
    "hints": [
      "Ask whether the both-alternatives case is allowed by the statement's ordinary meaning."
    ],
    "rubric": [
      "Classifies (a) and (d) as exclusive OR and (b) and (c) as inclusive OR.",
      "Explains each classification by whether both alternatives may hold, not merely by naming a type."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Exclusive OR: the dinner includes coffee or tea, conventionally one but not both.",
        "solution": "The wording presents alternative included beverages.",
        "rubric": [
          "Identifies exclusive OR and explains that exactly one beverage is intended."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Inclusive OR: the password qualifies if it has at least three digits, at least eight characters, or both.",
        "solution": "Meeting both conditions does not disqualify the password.",
        "rubric": [
          "Identifies inclusive OR and explicitly allows both conditions."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Inclusive OR: either number theory or cryptography satisfies the prerequisite, and taking both also satisfies it.",
        "solution": "The second qualifying course does not cancel the prerequisite.",
        "rubric": [
          "Identifies inclusive OR and explains that either or both courses qualify."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Exclusive OR: payment is intended to be in U.S. dollars or euros, one currency rather than both.",
        "solution": "The ordinary payment context treats these as alternative currencies.",
        "rubric": [
          "Identifies exclusive OR and explains the one-currency interpretation."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-022",
    "mode": "rubric",
    "answer": "a) Inclusive or: experience with either language qualifies, including experience with both. b) Exclusive or: lunch includes exactly one of soup or salad. c) Inclusive or: either document is acceptable, and having both is also acceptable. d) Exclusive or: the alternatives are presented as publishing or failing to publish and perishing, not both.",
    "solution": "Test the both-case. Extra programming experience or an extra acceptable document does not hurt, whereas the lunch wording offers one included side. ‘Publish or perish’ presents two exclusive outcomes.",
    "hints": [
      "For (a) and (c), ask whether satisfying both conditions would violate the requirement."
    ],
    "rubric": [
      "Classifies (a) and (c) as inclusive OR and (b) and (d) as exclusive OR.",
      "Gives a both-case or exactly-one explanation for every part."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Inclusive OR: C++ experience, Java experience, or both satisfy the requirement.",
        "solution": "Knowing both languages still meets the requirement.",
        "rubric": [
          "Identifies inclusive OR and allows experience with both languages."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Exclusive OR: the included lunch choice is soup or salad, not both.",
        "solution": "The meal includes one of the two alternatives.",
        "rubric": [
          "Identifies exclusive OR and states that exactly one included side is intended."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Inclusive OR: a passport or voter registration card is sufficient, and presenting both is acceptable.",
        "solution": "Each document independently meets the entry requirement.",
        "rubric": [
          "Identifies inclusive OR and allows either or both documents."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Exclusive OR: the saying contrasts publishing with perishing as alternative outcomes.",
        "solution": "The idiomatic warning intends one outcome or the other.",
        "rubric": [
          "Identifies exclusive OR and explains the exactly-one-outcome reading."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-023",
    "mode": "rubric",
    "answer": "a) Inclusive: calculus, computer science, or both qualifies; exclusive: exactly one of the two qualifies. Inclusive is intended. b) Inclusive: the buyer may receive both $2000 cash and a 2% loan; exclusive: exactly one benefit is available. Exclusive is intended. c) Inclusive: the dinner could include both two items from A and three from B; exclusive: exactly one of those selections is included. Exclusive is intended. d) Inclusive: school closes for either condition, including both; exclusive: school closes when exactly one condition holds but not when both hold. Inclusive is intended.",
    "solution": "For each sentence, explicitly separate the both-case from the exactly-one-case. Course prerequisites and closure conditions do not stop applying when both conditions hold. Promotional benefits and included menu selections conventionally offer one alternative.",
    "hints": [
      "Write two columns headed ‘both allowed’ and ‘exactly one,’ then test the both-conditions scenario in each real-world context."
    ],
    "rubric": [
      "For every part, correctly states both the inclusive and exclusive meanings.",
      "Identifies inclusive as intended in (a) and (d), and exclusive as intended in (b) and (c).",
      "For (d), makes clear that exclusive OR would oddly leave school open when both severe conditions hold."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Inclusive means calculus or computer science or both qualifies; exclusive means exactly one qualifies. Inclusive is intended.",
        "solution": "Having both courses would not normally remove eligibility.",
        "rubric": [
          "Defines both readings and selects inclusive because both courses still qualify."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Inclusive means both the $2000 cash and 2% loan may be received; exclusive means exactly one benefit is received. Exclusive is intended.",
        "solution": "The promotion conventionally offers a choice between benefits.",
        "rubric": [
          "Defines both readings and selects exclusive for the one-benefit offer."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Inclusive means the dinner may include both selections; exclusive means it includes either two items from column A or three from column B, but not both. Exclusive is intended.",
        "solution": "The menu describes alternative included selections.",
        "rubric": [
          "Defines both readings and selects exclusive for the menu choice."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Inclusive means either weather condition closes school, including both together; exclusive means exactly one closes school and both together do not. Inclusive is intended.",
        "solution": "The second dangerous condition cannot undo the closure caused by the first.",
        "rubric": [
          "Defines both readings and selects inclusive, including closure when both conditions hold."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-024",
    "mode": "rubric",
    "answer": "a) If you get promoted, then you wash the boss's car. b) If winds blow from the south, then a spring thaw occurs. c) If you bought the computer less than a year ago, then the warranty is good. d) If Willy cheats, then he gets caught. e) If you can access the website, then you pay a subscription fee. f) If you know the right people, then you get elected. g) If Carol is on a boat, then she gets seasick.",
    "solution": "For ‘q is necessary for p,’ write p → q. For ‘p is sufficient for q,’ write p → q. ‘Whenever’ and ‘implies’ also identify the antecedent, while ‘p only if q’ means p → q.",
    "hints": [
      "Label the event that is guaranteed as the consequent; necessary conditions go after the arrow, sufficient conditions before it."
    ],
    "rubric": [
      "Every answer is an English if–then statement with the correct antecedent and consequent.",
      "Preserves the necessary direction in (a), the only-if direction in (e), and the sufficient direction in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If you get promoted, then you wash the boss's car.",
        "solution": "Washing is necessary for promotion, so promotion implies washing.",
        "rubric": [
          "Uses promotion as antecedent and washing the boss's car as consequent."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If winds blow from the south, then a spring thaw occurs.",
        "solution": "‘Imply’ makes south winds the antecedent.",
        "rubric": [
          "Uses south winds as antecedent and spring thaw as consequent."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If you bought the computer less than a year ago, then the warranty is good.",
        "solution": "A sufficient condition goes before the arrow.",
        "rubric": [
          "Uses purchase less than a year ago as antecedent and good warranty as consequent."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If Willy cheats, then he gets caught.",
        "solution": "‘Whenever he cheats’ identifies the condition.",
        "rubric": [
          "Uses cheating as antecedent and getting caught as consequent."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If you can access the website, then you pay a subscription fee.",
        "solution": "‘p only if q’ translates to p → q.",
        "rubric": [
          "Uses website access as antecedent and paying the fee as consequent, not conversely."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If you know the right people, then you get elected.",
        "solution": "Getting elected follows from knowing the right people.",
        "rubric": [
          "Uses knowing the right people as antecedent and election as consequent."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "If Carol is on a boat, then she gets seasick.",
        "solution": "‘Whenever she is on a boat’ supplies the antecedent.",
        "rubric": [
          "Uses being on a boat as antecedent and seasickness as consequent."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-025",
    "mode": "rubric",
    "answer": "a) If the wind blows from the northeast, then it snows. b) If it stays warm for a week, then the apple trees will bloom. c) If the Pistons win the championship, then they beat the Lakers. d) If you get to the top of Long's Peak, then you walk eight miles. e) If you are world famous, then you get tenure as a professor. f) If you drive more than 400 miles, then you will need to buy gasoline. g) If your guarantee is good, then you bought your CD player less than 90 days ago. h) If the water is not too cold, then Jan will go swimming. i) If people believe in science, then we will have a future.",
    "solution": "Convert necessary conditions to result → condition and sufficient/provided-that conditions to condition → result. ‘Unless the water is too cold’ means the swimming claim holds when the water is not too cold. Parts (b) and (f) already express the required direction.",
    "hints": [
      "For ‘unless,’ try replacing it with ‘if not’ and check the resulting sentence against the original."
    ],
    "rubric": [
      "All nine answers have correct if–then direction and preserve the original conditions.",
      "Uses getting to the top → walking eight miles in (d), good guarantee → recent purchase in (g), and water not too cold → Jan swims in (h)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If the wind blows from the northeast, then it snows.",
        "solution": "‘Whenever’ marks northeast wind as the condition.",
        "rubric": [
          "Uses northeast wind as antecedent and snow as consequent."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If it stays warm for a week, then the apple trees will bloom.",
        "solution": "The given ‘if’ clause is the antecedent.",
        "rubric": [
          "Uses staying warm for a week as antecedent and blooming as consequent."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If the Pistons win the championship, then they beat the Lakers.",
        "solution": "The first claim implies the second.",
        "rubric": [
          "Uses winning the championship as antecedent and beating the Lakers as consequent."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If you get to the top of Long's Peak, then you walk eight miles.",
        "solution": "Walking eight miles is necessary for reaching the top.",
        "rubric": [
          "Uses reaching the top as antecedent and walking eight miles as consequent."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If you are world famous, then you get tenure as a professor.",
        "solution": "Being world famous is stated to be sufficient for tenure.",
        "rubric": [
          "Uses world fame as antecedent and tenure as consequent."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If you drive more than 400 miles, then you will need to buy gasoline.",
        "solution": "The statement is already in if–then form.",
        "rubric": [
          "Preserves driving more than 400 miles as antecedent and needing gasoline as consequent."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "If your guarantee is good, then you bought your CD player less than 90 days ago.",
        "solution": "‘Only if’ makes recent purchase a necessary condition.",
        "rubric": [
          "Uses good guarantee as antecedent and purchase less than 90 days ago as consequent."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "If the water is not too cold, then Jan will go swimming.",
        "solution": "‘Jan swims unless C’ is equivalent to ‘if not C, Jan swims.’",
        "rubric": [
          "Negates water too cold in the antecedent and uses Jan swimming as consequent."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "If people believe in science, then we will have a future.",
        "solution": "‘Provided that’ introduces the antecedent.",
        "rubric": [
          "Uses belief in science as antecedent and having a future as consequent."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-026",
    "mode": "rubric",
    "answer": "a) If I remember to send you the address, then you send me an e-mail message. b) If you were born in the United States, then you are a citizen of this country. c) If you keep your textbook, then it will be a useful reference in your future courses. d) If the Red Wings' goalie plays well, then the Red Wings will win the Stanley Cup. e) If you get the job, then you had the best credentials. f) If there is a storm, then the beach erodes. g) If you log on to the server, then you have a valid password. h) If you do not begin your climb too late, then you will reach the summit. i) If you are among the first 100 customers tomorrow, then you will get a free ice cream cone.",
    "solution": "Apply the standard conditional patterns. ‘Only if’ and necessary place the required condition after the implication; sufficient and provided-that place it before. ‘Unless you begin too late’ becomes ‘if you do not begin too late.’",
    "hints": [
      "For (a), do not reverse ‘only if’: remembering to send the address implies the e-mail condition."
    ],
    "rubric": [
      "All nine answers are if–then statements with correct direction.",
      "Correctly handles only-if in (a), sufficient in (b), necessary in (g), and unless in (h)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If I remember to send you the address, then you send me an e-mail message.",
        "solution": "‘p only if q’ means p → q.",
        "rubric": [
          "Uses remembering to send the address as antecedent and receiving the e-mail message as consequent."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If you were born in the United States, then you are a citizen of this country.",
        "solution": "Birth in the United States is given as a sufficient condition.",
        "rubric": [
          "Uses birth in the United States as antecedent and citizenship as consequent."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If you keep your textbook, then it will be a useful reference in your future courses.",
        "solution": "Keep the original if-clause as antecedent.",
        "rubric": [
          "Uses keeping the textbook as antecedent and future usefulness as consequent."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If the Red Wings' goalie plays well, then the Red Wings will win the Stanley Cup.",
        "solution": "‘q if p’ means if p then q.",
        "rubric": [
          "Uses the goalie playing well as antecedent and winning the Stanley Cup as consequent."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If you get the job, then you had the best credentials.",
        "solution": "Getting the job is the claim that implies the credentials claim.",
        "rubric": [
          "Uses getting the job as antecedent and having the best credentials as consequent."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "If there is a storm, then the beach erodes.",
        "solution": "‘Whenever there is a storm’ identifies the antecedent.",
        "rubric": [
          "Uses a storm as antecedent and beach erosion as consequent."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "If you log on to the server, then you have a valid password.",
        "solution": "A valid password is necessary for logging on.",
        "rubric": [
          "Uses logging on as antecedent and having a valid password as consequent."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "If you do not begin your climb too late, then you will reach the summit.",
        "solution": "Replace ‘unless C’ with ‘if not C.’",
        "rubric": [
          "Uses not beginning too late as antecedent and reaching the summit as consequent."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "If you are among the first 100 customers tomorrow, then you will get a free ice cream cone.",
        "solution": "‘Provided that’ introduces the sufficient condition.",
        "rubric": [
          "Uses being among tomorrow's first 100 customers as antecedent and receiving a free cone as consequent."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-027",
    "mode": "rubric",
    "answer": "a) It is hot outside if and only if you buy an ice cream cone. b) You win the contest if and only if you have the only winning ticket. c) You get promoted if and only if you have connections. d) You watch television if and only if your mind will decay. e) The trains run late if and only if I take the train.",
    "solution": "Two conditionals in opposite directions combine into a biconditional. ‘Necessary and sufficient,’ ‘and conversely,’ and ‘exactly those days when’ also express two-way equivalence.",
    "hints": [
      "Check that both directions are present: p → q together with q → p becomes p ↔ q."
    ],
    "rubric": [
      "Every answer is a single English biconditional joining the correct two statements.",
      "No answer weakens the relationship to a one-way conditional."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "It is hot outside if and only if you buy an ice cream cone.",
        "solution": "The two supplied implications are hot → buy and buy → hot.",
        "rubric": [
          "Connects hot outside and buying an ice cream cone with if and only if."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "You win the contest if and only if you have the only winning ticket.",
        "solution": "Necessary and sufficient gives both directions.",
        "rubric": [
          "Connects winning the contest and having the only winning ticket with if and only if."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "You get promoted if and only if you have connections.",
        "solution": "The two only-if statements supply promotion → connections and connections → promotion.",
        "rubric": [
          "Connects promotion and connections with if and only if."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "You watch television if and only if your mind will decay.",
        "solution": "‘And conversely’ adds mind decay → television watching.",
        "rubric": [
          "Connects watching television and mind decay with if and only if."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "The trains run late if and only if I take the train.",
        "solution": "‘Exactly those days when’ makes the two day-conditions equivalent.",
        "rubric": [
          "Connects trains running late and the speaker taking the train with if and only if."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-028",
    "mode": "rubric",
    "answer": "a) You get an A in this course if and only if you learn how to solve discrete mathematics problems. b) You read the newspaper every day if and only if you are informed. c) It is a weekend day if and only if it rains. d) You can see the wizard if and only if the wizard is not in. e) My airplane flight is late if and only if I have to catch a connecting flight.",
    "solution": "Each sentence gives two-way dependence. Write either order of the two sides, joined by ‘if and only if.’ ‘Exactly when’ in (e) is another biconditional marker.",
    "hints": [
      "Find the two conditions being matched, then join them with ‘if and only if’ without adding causation."
    ],
    "rubric": [
      "All five answers express the correct biconditionals.",
      "Preserves ‘not in’ in (d) and the connecting-flight condition in (e)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "You get an A in this course if and only if you learn how to solve discrete mathematics problems.",
        "solution": "Necessary and sufficient yields equivalence.",
        "rubric": [
          "Connects getting an A and learning to solve discrete mathematics problems with if and only if."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "You read the newspaper every day if and only if you are informed.",
        "solution": "‘And conversely’ supplies the reverse implication.",
        "rubric": [
          "Connects daily newspaper reading and being informed with if and only if."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "It is a weekend day if and only if it rains.",
        "solution": "Weekend → rain and rain → weekend combine into equivalence.",
        "rubric": [
          "Connects being a weekend day and raining with if and only if."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "You can see the wizard if and only if the wizard is not in.",
        "solution": "The two only-if statements provide both directions.",
        "rubric": [
          "Connects seeing the wizard and the wizard not being in with if and only if."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "My airplane flight is late if and only if I have to catch a connecting flight.",
        "solution": "‘Exactly when’ equates the two circumstances.",
        "rubric": [
          "Connects flight lateness and having to catch a connecting flight with if and only if."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-029",
    "mode": "rubric",
    "answer": "For each original p → q: converse q → p; contrapositive ¬q → ¬p; inverse ¬p → ¬q. a) Converse: If I ski tomorrow, then it snows today. Contrapositive: If I do not ski tomorrow, then it does not snow today. Inverse: If it does not snow today, then I will not ski tomorrow. b) Original: If there is going to be a quiz, then I come to class. Converse: If I come to class, then there is going to be a quiz. Contrapositive: If I do not come to class, then there is not going to be a quiz. Inverse: If there is not going to be a quiz, then I do not come to class. c) Original: If a positive integer is prime, then it has no divisors other than 1 and itself. Converse: If a positive integer has no divisors other than 1 and itself, then it is prime. Contrapositive: If a positive integer has a divisor other than 1 and itself, then it is not prime. Inverse: If a positive integer is not prime, then it has a divisor other than 1 and itself.",
    "solution": "First rewrite (b) and (c) explicitly as p → q. Converse swaps p and q; contrapositive swaps and negates both; inverse negates both without swapping.",
    "hints": [
      "Write a three-row recipe: swap only; swap and negate; negate only."
    ],
    "readAloud": "The contrapositive says ‘if not q, then not p.’ It is not the same as the converse, which says ‘if q, then p.’",
    "rubric": [
      "For every part, gives all three requested statements in the correct order or clearly labels them.",
      "Uses q → p for converse, ¬q → ¬p for contrapositive, and ¬p → ¬q for inverse.",
      "Correctly rewrites ‘whenever’ in (b) and ‘only if’ in (c) before transforming."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Converse: If I ski tomorrow, then it snows today. Contrapositive: If I do not ski tomorrow, then it does not snow today. Inverse: If it does not snow today, then I will not ski tomorrow.",
        "solution": "Set p = snow today and q = ski tomorrow, then apply swap, swap-and-negate, and negate-only.",
        "rubric": [
          "Converse is ski tomorrow → snow today.",
          "Contrapositive is not ski tomorrow → not snow today.",
          "Inverse is not snow today → not ski tomorrow."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Converse: If I come to class, then there is going to be a quiz. Contrapositive: If I do not come to class, then there is not going to be a quiz. Inverse: If there is not going to be a quiz, then I do not come to class.",
        "solution": "The original is quiz → come to class, not come to class → quiz.",
        "rubric": [
          "Converse is come to class → quiz.",
          "Contrapositive is not come to class → no quiz.",
          "Inverse is no quiz → not come to class."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Converse: If a positive integer has no divisors other than 1 and itself, then it is prime. Contrapositive: If a positive integer has a divisor other than 1 and itself, then it is not prime. Inverse: If a positive integer is not prime, then it has a divisor other than 1 and itself.",
        "solution": "‘Prime only if no other divisors’ is prime → no other divisors.",
        "rubric": [
          "Converse is no other divisors → prime.",
          "Contrapositive is has another divisor → not prime.",
          "Inverse is not prime → has another divisor."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-030",
    "mode": "rubric",
    "answer": "a) Converse: If I stay at home, then it snows tonight. Contrapositive: If I do not stay at home, then it does not snow tonight. Inverse: If it does not snow tonight, then I will not stay at home. b) Original: If it is a sunny summer day, then I go to the beach. Converse: If I go to the beach, then it is a sunny summer day. Contrapositive: If I do not go to the beach, then it is not a sunny summer day. Inverse: If it is not a sunny summer day, then I do not go to the beach. c) Original: If I stay up late, then I sleep until noon. Converse: If I sleep until noon, then I stay up late. Contrapositive: If I do not sleep until noon, then I do not stay up late. Inverse: If I do not stay up late, then I do not sleep until noon.",
    "solution": "Rewrite the originals as p → q. Then use q → p for converse, ¬q → ¬p for contrapositive, and ¬p → ¬q for inverse. In (c), sleeping until noon is necessary when staying up late, so staying up late is the antecedent.",
    "hints": [
      "Do not negate individual words mechanically; negate the whole atomic statement, such as ‘it is not a sunny summer day.’"
    ],
    "rubric": [
      "Provides correctly labelled converse, contrapositive, and inverse for all three parts.",
      "Uses sunny summer day → beach in (b) and stay up late → sleep until noon in (c) as the originals."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Converse: If I stay at home, then it snows tonight. Contrapositive: If I do not stay at home, then it does not snow tonight. Inverse: If it does not snow tonight, then I will not stay at home.",
        "solution": "Use p = snow tonight and q = stay home.",
        "rubric": [
          "Converse is stay home → snow tonight.",
          "Contrapositive is not stay home → not snow tonight.",
          "Inverse is not snow tonight → not stay home."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Converse: If I go to the beach, then it is a sunny summer day. Contrapositive: If I do not go to the beach, then it is not a sunny summer day. Inverse: If it is not a sunny summer day, then I do not go to the beach.",
        "solution": "‘Whenever’ makes sunny summer day the antecedent and beach the consequent.",
        "rubric": [
          "Converse is beach → sunny summer day.",
          "Contrapositive is not beach → not sunny summer day.",
          "Inverse is not sunny summer day → not beach."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Converse: If I sleep until noon, then I stay up late. Contrapositive: If I do not sleep until noon, then I do not stay up late. Inverse: If I do not stay up late, then I do not sleep until noon.",
        "solution": "The original is stay up late → sleep until noon.",
        "rubric": [
          "Converse is sleep until noon → stay up late.",
          "Contrapositive is not sleep until noon → not stay up late.",
          "Inverse is not stay up late → not sleep until noon."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-031",
    "mode": "auto",
    "answer": "a) 2 rows. b) 16 rows. c) 64 rows. d) 16 rows.",
    "solution": "With n distinct propositional variables, a full truth table has 2^n rows. Count p only in (a); p,q,r,s in (b); p,q,r,s,t,u in (c); and p,q,r,t in (d), since repeated t does not add a variable.",
    "hints": [
      "List the distinct variables before counting; repetition and negation do not create new variables."
    ],
    "startHere": "Each new independent variable doubles the number of possible truth assignments.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "checker": "number",
        "solution": "There is one variable, so 2¹ = 2 rows."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "16",
        "accepted": [
          "16"
        ],
        "checker": "number",
        "solution": "The variables are p,q,r,s, so 2⁴ = 16 rows."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "64",
        "accepted": [
          "64"
        ],
        "checker": "number",
        "solution": "There are six distinct variables p,q,r,s,t,u, so 2⁶ = 64 rows."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "16",
        "accepted": [
          "16"
        ],
        "checker": "number",
        "solution": "The distinct variables are p,q,r,t, so 2⁴ = 16 rows."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-032",
    "mode": "auto",
    "answer": "a) 4 rows. b) 8 rows. c) 64 rows. d) 32 rows.",
    "solution": "Count distinct variables and use 2^n rows: two variables in (a), three in (b), six in (c), and five in (d). In (d), repeated r and t are counted only once.",
    "hints": [
      "Write each variable only once in a set before applying 2^n."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "4",
        "accepted": [
          "4"
        ],
        "checker": "number",
        "solution": "The variables are p and q, giving 2² = 4 rows."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "8",
        "accepted": [
          "8"
        ],
        "checker": "number",
        "solution": "The variables are p,s,t, giving 2³ = 8 rows."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "64",
        "accepted": [
          "64"
        ],
        "checker": "number",
        "solution": "The variables are p,r,s,t,u,v, giving 2⁶ = 64 rows."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "32",
        "accepted": [
          "32"
        ],
        "checker": "number",
        "solution": "The distinct variables are p,q,r,s,t, giving 2⁵ = 32 rows."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-033",
    "mode": "rubric",
    "answer": "Using row order TT, TF, FT, FF for two variables: a) p: T,F; p ∧ ¬p: F,F. b) p: T,F; p ∨ ¬p: T,T. c) TT:T, TF:F, FT:T, FF:F. d) TT:T, TF:F, FT:F, FF:T. e) TT:T, TF:T, FT:T, FF:T. f) TT:T, TF:T, FT:F, FF:T.",
    "solution": "Evaluate inner negations and connectives before outer ones. Parts (a) and (b) are a contradiction and a tautology. In (e), p → q and ¬q → ¬p are contrapositives, so their biconditional is always true. In (f), the only false row is p=F,q=T, where p → q is true but q → p is false.",
    "hints": [
      "Write columns for p and q in the fixed order TT, TF, FT, FF, then add one column for each inner expression."
    ],
    "rubric": [
      "Uses correct input rows and gives output sequences (a) FF for p=T,F; (b) TT for p=T,F; (c) TFTF; (d) TFFT; (e) TTTT; (f) TTFT.",
      "Shows or correctly accounts for intermediate values of negations, conjunctions, disjunctions, and implications."
    ],
    "verify": "A conjunction with p and ¬p can never be true; a disjunction with p and ¬p can never be false.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Rows p=T,F give p ∧ ¬p = F,F.",
        "solution": "One of p and ¬p is false in every row, so the conjunction is always false.",
        "rubric": [
          "Outputs F for p=T and F for p=F."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Rows p=T,F give p ∨ ¬p = T,T.",
        "solution": "One of p and ¬p is true in every row, so the disjunction is always true.",
        "rubric": [
          "Outputs T for p=T and T for p=F."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For (p,q)=TT,TF,FT,FF: (p ∨ ¬q) → q = T,F,T,F.",
        "solution": "The conditional fails only when q is false and p ∨ ¬q is true, namely TF and FF.",
        "rubric": [
          "Gives the ordered outputs T,F,T,F for TT,TF,FT,FF."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ∨ q) → (p ∧ q) = T,F,F,T.",
        "solution": "When exactly one input is true, the antecedent is true and the consequent false; otherwise the conditional is true.",
        "rubric": [
          "Gives the ordered outputs T,F,F,T."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p → q) ↔ (¬q → ¬p) = T,T,T,T.",
        "solution": "The two conditionals have identical truth values in every row, so their biconditional is always true.",
        "rubric": [
          "Gives T in all four rows."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p → q) → (q → p) = T,T,F,T.",
        "solution": "In row FT the antecedent p → q is true and consequent q → p is false; every other row is true.",
        "rubric": [
          "Gives the ordered outputs T,T,F,T."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-034",
    "mode": "rubric",
    "answer": "For one-variable parts, rows are p=T,F; for two-variable parts, TT,TF,FT,FF. a) F,T. b) F,F. c) F,F,T,F. d) T,T,T,T. e) F,F,F,T. f) T,T,T,T.",
    "solution": "Recall p ⊕ q is true exactly when p and q differ. In (c), p ⊕ (p ∨ q) is true only for p=F,q=T. In (d), p ∧ q implies p ∨ q in every row. In (f), p ↔ ¬q is the negation of p ↔ q, so their XOR is always true.",
    "hints": [
      "For XOR, write T whenever the two operands differ and F whenever they match."
    ],
    "rubric": [
      "Gives the exact ordered outputs: (a) FT for p=T,F; (b) FF for p=T,F; (c) FFTF; (d) TTTT; (e) FFFT; (f) TTTT.",
      "Correctly treats ⊕ as exclusive OR and respects all parentheses."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Rows p=T,F give p → ¬p = F,T.",
        "solution": "When p=T the conditional is T→F=false; when p=F it is F→T=true.",
        "rubric": [
          "Outputs F,T in that order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Rows p=T,F give p ↔ ¬p = F,F.",
        "solution": "p and ¬p always have opposite truth values, so their biconditional is false.",
        "rubric": [
          "Outputs F,F in that order."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: p ⊕ (p ∨ q) = F,F,T,F.",
        "solution": "Only p=F,q=T makes p and p ∨ q differ.",
        "rubric": [
          "Gives ordered outputs F,F,T,F."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ∧ q) → (p ∨ q) = T,T,T,T.",
        "solution": "Whenever p ∧ q is true, p ∨ q is also true; all other antecedents are false.",
        "rubric": [
          "Gives T in all four rows."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (q → ¬p) ↔ (p ↔ q) = F,F,F,T.",
        "solution": "Comparing the two sides row by row leaves both sides equal only at p=F,q=F.",
        "rubric": [
          "Gives ordered outputs F,F,F,T."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ↔ q) ⊕ (p ↔ ¬q) = T,T,T,T.",
        "solution": "The two biconditionals always have opposite truth values.",
        "rubric": [
          "Gives T in all four rows."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-035",
    "mode": "rubric",
    "answer": "For two-variable parts use TT,TF,FT,FF; for (e) use TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF. a) F,T,T,T. b) T,F,F,T. c) F,T,T,F. d) T,T,T,T. e) F,T,T,F,F,T,T,F. f) T,F,F,T.",
    "solution": "Compute each XOR from unequal operands. In (c), (p ∨ q) ⊕ (p ∧ q) reduces to p ⊕ q. In (e), ¬p ↔ ¬r is equivalent to p ↔ r, so the whole expression reduces to q ⊕ r; it is false when q and r agree and true when they differ. In (f), p ⊕ ¬q is the negation of p ⊕ q, so the implication has the same values as p ↔ q.",
    "hints": [
      "Build separate columns for p∨q, p∧q, and p⊕q; many parts can then be read from those columns."
    ],
    "rubric": [
      "Gives ordered outputs (a) FTTT; (b) TFFT; (c) FTTF; (d) TTTT; (e) FTTF FTTF in the stated three-variable row order; (f) TFFT.",
      "Uses eight distinct input rows for (e) and applies XOR only after evaluating its operands."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ∨ q) → (p ⊕ q) = F,T,T,T.",
        "solution": "At TT the antecedent is true and XOR false; at FF the antecedent is false; the mixed rows are true.",
        "rubric": [
          "Gives ordered outputs F,T,T,T."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ⊕ q) → (p ∧ q) = T,F,F,T.",
        "solution": "The mixed rows have true antecedent and false consequent; TT and FF are true.",
        "rubric": [
          "Gives ordered outputs T,F,F,T."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ∨ q) ⊕ (p ∧ q) = F,T,T,F.",
        "solution": "OR and AND differ only when exactly one input is true.",
        "rubric": [
          "Gives ordered outputs F,T,T,F."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ↔ q) ⊕ (¬p ↔ q) = T,T,T,T.",
        "solution": "The two biconditionals have opposite values in every row.",
        "rubric": [
          "Gives T in all four rows."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF: (p ↔ q) ⊕ (¬p ↔ ¬r) = F,T,T,F,F,T,T,F.",
        "solution": "Because ¬p ↔ ¬r is equivalent to p ↔ r, the expression reduces to q ⊕ r. It is false when q and r agree, including the mixed rows TFF and FTT, and true when q and r differ.",
        "rubric": [
          "Gives ordered outputs F,T,T,F,F,T,T,F for all eight stated rows."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ⊕ q) → (p ⊕ ¬q) = T,F,F,T.",
        "solution": "When p⊕q is true, its antecedent is true but p⊕¬q is false; when p⊕q is false, the implication is true.",
        "rubric": [
          "Gives ordered outputs T,F,F,T."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-036",
    "mode": "rubric",
    "answer": "Rows are p=T,F for (a)–(b), and (p,q)=TT,TF,FT,FF otherwise. a) F,F. b) T,T. c) T,F,F,T. d) F,T,T,F. e) T,T,T,T. f) F,F,F,F.",
    "solution": "Use A ⊕ A = F and A ⊕ ¬A = T. Thus p⊕¬q equals p↔q, while ¬p⊕¬q equals p⊕q. In (e), p⊕q and p⊕¬q are complementary, so their OR is always true and their AND always false.",
    "hints": [
      "Before making rows, simplify repeated XOR patterns: identical operands give F; complementary operands give T."
    ],
    "rubric": [
      "Gives ordered outputs (a) FF and (b) TT for p=T,F; (c) TFFT; (d) FTTF; (e) TTTT; (f) FFFF.",
      "Correctly handles negation on each side of XOR."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Rows p=T,F give p ⊕ p = F,F.",
        "solution": "Identical operands never differ.",
        "rubric": [
          "Outputs F,F."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Rows p=T,F give p ⊕ ¬p = T,T.",
        "solution": "Complementary operands always differ.",
        "rubric": [
          "Outputs T,T."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: p ⊕ ¬q = T,F,F,T.",
        "solution": "The XOR is true exactly when p and q have the same value.",
        "rubric": [
          "Outputs T,F,F,T."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: ¬p ⊕ ¬q = F,T,T,F.",
        "solution": "Negating both inputs does not change whether they differ.",
        "rubric": [
          "Outputs F,T,T,F."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ⊕ q) ∨ (p ⊕ ¬q) = T,T,T,T.",
        "solution": "The two XOR expressions are complementary, so at least one is true.",
        "rubric": [
          "Outputs T in every row."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ⊕ q) ∧ (p ⊕ ¬q) = F,F,F,F.",
        "solution": "The two conjuncts can never be true simultaneously.",
        "rubric": [
          "Outputs F in every row."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-037",
    "mode": "rubric",
    "answer": "Using (p,q)=TT,TF,FT,FF: a) F,T,T,T. b) F,T,T,F. c) T,T,T,T. d) T,F,T,F. e) T,T,T,T. f) T,T,T,T.",
    "solution": "For (c), at least one of p and ¬p is false, making at least one conditional true; for (d), both conditionals hold exactly when q is true. For (e), either p or ¬p has the same truth value as q. For (f), ¬p ↔ ¬q is equivalent to p ↔ q.",
    "hints": [
      "Exploit the complementary pair p and ¬p before calculating rows."
    ],
    "rubric": [
      "Gives ordered outputs (a) FTTT; (b) FTTF; (c) TTTT; (d) TFTF; (e) TTTT; (f) TTTT.",
      "Evaluates both p→q and ¬p→q separately where required."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: p → ¬q = F,T,T,T.",
        "solution": "Only TT gives true antecedent and false consequent.",
        "rubric": [
          "Outputs F,T,T,T."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: ¬p ↔ q = F,T,T,F.",
        "solution": "The biconditional is true when p and q differ.",
        "rubric": [
          "Outputs F,T,T,F."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p → q) ∨ (¬p → q) = T,T,T,T.",
        "solution": "One antecedent is false in each row, so at least one disjunct is true.",
        "rubric": [
          "Outputs T in every row."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p → q) ∧ (¬p → q) = T,F,T,F.",
        "solution": "When q is false, the conditional whose antecedent is true makes the conjunction false.",
        "rubric": [
          "Outputs T,F,T,F."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (p ↔ q) ∨ (¬p ↔ q) = T,T,T,T.",
        "solution": "Exactly one of p and ¬p matches q in every row.",
        "rubric": [
          "Outputs T in every row."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For TT,TF,FT,FF: (¬p ↔ ¬q) ↔ (p ↔ q) = T,T,T,T.",
        "solution": "The two inner biconditionals always have the same truth value.",
        "rubric": [
          "Outputs T in every row."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-038",
    "mode": "rubric",
    "answer": "Using rows TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF: a) T,T,T,T,T,T,T,F. b) T,F,T,F,T,F,F,F. c) T,T,T,F,T,F,T,F. d) T,F,F,F,F,F,F,F. e) F,T,F,T,F,T,F,F. f) T,T,F,T,F,T,F,T.",
    "solution": "Evaluate the parenthesized p–q operation first, then combine with r or ¬r. For example, (b) is true exactly when r=T and at least one of p,q is true; (d) requires all three variables true; (f) is false only when r=T and p∧q=F.",
    "hints": [
      "Reuse two base columns p∨q and p∧q across all six tables, and negate only r where shown."
    ],
    "rubric": [
      "Uses the eight stated input rows in order and gives outputs (a) TTTTTTTF; (b) TFTFTFFF; (c) TTTFTFTF; (d) TFFFFFFF; (e) FTFTFTFF; (f) TTFTFTFT.",
      "Does not interchange AND and OR or apply ¬r to the wrong operand."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Outputs T,T,T,T,T,T,T,F.",
        "solution": "The three-way OR is false only for p=q=r=F.",
        "rubric": [
          "Gives TTTTTTTF in the stated row order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Outputs T,F,T,F,T,F,F,F.",
        "solution": "Both r and p∨q must be true.",
        "rubric": [
          "Gives TFTFTFFF in the stated row order."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Outputs T,T,T,F,T,F,T,F.",
        "solution": "The result is true if r is true or if both p and q are true.",
        "rubric": [
          "Gives TTTFTFTF in the stated row order."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Outputs T,F,F,F,F,F,F,F.",
        "solution": "The three-way AND holds only at TTT.",
        "rubric": [
          "Gives TFFFFFFF in the stated row order."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Outputs F,T,F,T,F,T,F,F.",
        "solution": "The result requires r=F and p∨q=T.",
        "rubric": [
          "Gives FTFTFTFF in the stated row order."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Outputs T,T,F,T,F,T,F,T.",
        "solution": "The result is true when r=F or p∧q=T; it is false at TFT, FTT, and FFT.",
        "rubric": [
          "Gives TTFTFTFT in the stated row order."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-039",
    "mode": "rubric",
    "answer": "Using rows TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF: a) T,F,T,T,T,T,T,T. b) T,T,T,T,T,F,T,T. c) T,T,T,T,T,T,T,T. d) T,T,F,F,T,F,T,F. e) T,T,T,F,F,T,T,T. f) T,F,T,F,F,T,F,T.",
    "solution": "Translate conditionals mentally as ¬antecedent ∨ consequent and evaluate parentheses first. In (c), when p=T the first conditional controls and when p=F the second is automatically true; inspection gives all T. In (f), ¬p↔¬q equals p↔q, so compare that value with q↔r.",
    "hints": [
      "Use the only false conditional row T→F; this is faster than expanding every conditional into a full separate table."
    ],
    "rubric": [
      "Gives ordered outputs (a) TFTTTTTT; (b) TTTTTFTT; (c) TTTTTTTT; (d) TTFF TFTF without changing row order; (e) TTTFFTTT; (f) TFTFFTFT.",
      "Correctly evaluates negations and nested conditional or biconditional structure."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Outputs T,F,T,T,T,T,T,T.",
        "solution": "Only TTF has p=T and ¬q∨r=F.",
        "rubric": [
          "Gives TFTTTTTT in the stated row order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Outputs T,T,T,T,T,F,T,T.",
        "solution": "Only FTF makes ¬p=T while q→r is T→F=false.",
        "rubric": [
          "Gives TTTTTFTT in the stated row order."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Outputs T,T,T,T,T,T,T,T.",
        "solution": "Row-by-row evaluation shows at least one of p→q and ¬p→r is true in every assignment.",
        "rubric": [
          "Gives T in all eight rows."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Outputs T,T,F,F,T,F,T,F.",
        "solution": "For p=T the result is q; for p=F it is r, producing the listed rows.",
        "rubric": [
          "Gives TTFFTFTF in the stated row order."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Outputs T,T,T,F,F,T,T,T.",
        "solution": "The OR is false only at TFF and FTT, where both biconditionals are false.",
        "rubric": [
          "Gives TTTFFTTT in the stated row order."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Outputs T,F,T,F,F,T,F,T.",
        "solution": "Compare p↔q with q↔r in each row and take their biconditional.",
        "rubric": [
          "Gives TFTFFTFT in the stated row order."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-040",
    "mode": "rubric",
    "answer": "With columns A=p→q, B=A→r, and result B→s, using rows TTTT,TTTF,TTFT,TTFF,TFTT,TFTF,TFFT,TFFF,FTTT,FTTF,FTFT,FTFF,FFTT,FFTF,FFFT,FFFF, the result is T,F,T,T,T,F,T,F,T,F,T,T,T,F,T,T.",
    "solution": "Build A=p→q, then B=A→r, and finally B→s. A false B makes the result true immediately; when B is true, the result equals s. The false results occur at TTTF, TFTF, TFFF, FTTF, and FFTF.",
    "hints": [
      "Use three computed columns A, B, and result rather than trying to evaluate the whole nested formula in one step."
    ],
    "readAloud": "Read the formula as ‘if the statement “if p implies q, then r” holds, then s.’",
    "rubric": [
      "Uses all 16 four-variable rows in the stated order.",
      "Gives the exact result sequence T F T T T F T F T F T T T F T T.",
      "Correctly computes intermediate A=p→q and B=A→r, including vacuous-truth cases."
    ],
    "verify": "The five false rows must have B=T and s=F; checking TTTF, TFTF, TFFF, FTTF, and FFTF confirms this condition."
  },
  {
    "id": "rosen-ch1-ex-1-1-041",
    "mode": "rubric",
    "answer": "Using rows TTTT,TTTF,TTFT,TTFF,TFTT,TFTF,TFFT,TFFF,FTTT,FTTF,FTFT,FTFF,FFTT,FFTF,FFFT,FFFF, the value of (p ↔ q) ↔ (r ↔ s) is T,F,F,T,F,T,T,F,F,T,T,F,T,F,F,T.",
    "solution": "First compute A=p↔q and B=r↔s; the result is A↔B, true when A and B match. Equivalently, the expression is true exactly when the four inputs contain an even number of false values.",
    "hints": [
      "Split the formula into A=p↔q and B=r↔s, then compare A and B."
    ],
    "rubric": [
      "Uses all 16 input rows in the stated order.",
      "Gives the exact output sequence T F F T F T T F F T T F T F F T.",
      "Correctly evaluates both inner biconditionals before the outer biconditional."
    ],
    "verify": "Rows with 0, 2, or 4 false inputs are true; rows with 1 or 3 false inputs are false."
  },
  {
    "id": "rosen-ch1-ex-1-1-042",
    "mode": "rubric",
    "answer": "The expression is true exactly when p,q,r all have the same truth value: true for TTT and FFF, and false for every mixed assignment.",
    "solution": "Rewrite the factors as q→p, r→q, and p→r. If all three variables are true, each implication is true; if all are false, each is also true. Conversely, if the conjunction is true and any variable is true, following the cycle q→p→r→q shows all are true. If any variable is false, the reverse implications force all three to be false. Therefore no mixed assignment can satisfy the conjunction.",
    "hints": [
      "Rewrite p∨¬q as q→p, and do the same for the other two factors; look for a cycle of implications."
    ],
    "rubric": [
      "Explains why TTT and FFF make all three factors true.",
      "Shows that a satisfying assignment cannot mix truth values, using the implication cycle or an equivalent direct argument.",
      "Concludes both directions: same truth value implies true, and true implies same truth value.",
      "Does not rely on a truth table."
    ],
    "readAloud": "The clauses say q implies p, r implies q, and p implies r: truth and falsity must each travel around the whole cycle.",
    "verify": "For a mixed example, p=T,q=F,r=T makes r→q equal T→F, so the conjunction is false."
  },
  {
    "id": "rosen-ch1-ex-1-1-043",
    "mode": "rubric",
    "answer": "The expression is true exactly for mixed assignments, where at least one of p,q,r is true and at least one is false; it is false for TTT and FFF.",
    "solution": "The first factor p∨q∨r says at least one variable is true. The second factor ¬p∨¬q∨¬r says at least one variable is false. Their conjunction therefore requires both kinds of value. If all three are true, the second factor is false; if all three are false, the first factor is false.",
    "hints": [
      "Translate each disjunction into an English ‘at least one’ condition before combining them with AND."
    ],
    "rubric": [
      "Identifies the first factor as ‘at least one true’ and the second as ‘at least one false.’",
      "Explains that their conjunction holds exactly for mixed assignments.",
      "Separately explains why all-true makes the second factor false and all-false makes the first factor false.",
      "Does not use a truth table."
    ],
    "verify": "The two uniform assignments fail opposite factors; every one of the other six assignments has both a true and a false variable."
  },
  {
    "id": "rosen-ch1-ex-1-1-044",
    "mode": "rubric",
    "answer": "The double conjunction is true if and only if at most one of p₁,p₂,…,pₙ is true.",
    "solution": "For every i<j, the clause ¬pᵢ∨¬pⱼ is equivalent to ¬(pᵢ∧pⱼ), so it forbids pᵢ and pⱼ from both being true. The outer conjunctions include every unordered pair exactly once. If at most one proposition is true, every pair clause is true. Conversely, if all pair clauses are true, two distinct true propositions would make their pair clause false; hence no such pair can exist and at most one is true. For n=1, the empty conjunction is vacuously true, matching ‘at most one.’",
    "hints": [
      "Read one clause first: ¬pᵢ∨¬pⱼ means ‘not both pᵢ and pⱼ.’ Then ask what requiring this for every pair accomplishes."
    ],
    "readAloud": "The nested conjunction means: for every choice of two different indices i and j, not both p-sub-i and p-sub-j are true.",
    "rubric": [
      "Explains one pair clause as not both pᵢ and pⱼ.",
      "Notes that the indices i<j cover every unordered pair.",
      "Proves both directions: at most one true makes all clauses true, and all clauses true prevents any two true propositions.",
      "Preserves indices and does not confuse at most one with exactly one."
    ],
    "verify": "If p₂ and p₅ were both true, the included clause ¬p₂∨¬p₅ would be F∨F=F, falsifying the entire conjunction."
  },
  {
    "id": "rosen-ch1-ex-1-1-045",
    "mode": "rubric",
    "answer": "(p₁ ∨ p₂ ∨ ⋯ ∨ pₙ) ∧ ⋀ᵢ₌₁ⁿ⁻¹ ⋀ⱼ₌ᵢ₊₁ⁿ (¬pᵢ ∨ ¬pⱼ)",
    "checker": "rubric",
    "solution": "Exactly one means at least one AND at most one. The disjunction p₁∨p₂∨⋯∨pₙ enforces at least one true proposition. Appending the Exercise 44 conjunction enforces at most one. Together they leave exactly one true proposition.",
    "hints": [
      "Combine an ‘at least one’ condition with the ‘at most one’ formula from Exercise 44 using AND."
    ],
    "startHere": "Write the two requirements separately before forming the final conjunction.",
    "verify": "With zero true propositions the large disjunction is false; with two or more true, some pairwise clause is false; with exactly one true, both factors are true.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p₁ ∨ p₂ ∨ ⋯ ∨ pₙ) ∧ ⋀ᵢ₌₁ⁿ⁻¹ ⋀ⱼ₌ᵢ₊₁ⁿ (¬pᵢ ∨ ¬pⱼ)",
      "Explains the required reasoning and cases: Exactly one means at least one AND at most one. The disjunction p₁∨p₂∨⋯∨pₙ enforces at least one true proposition. Appending the Exercise 44 conjunction enforces at most one. Together they leave exactly one true proposition."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-046",
    "mode": "auto",
    "answer": "Starting each part independently with x=1: a) 2. b) 1. c) 2. d) 1. e) 2.",
    "solution": "Evaluate each condition at x=1; execute x:=x+1 only if it is true. (a) 1+2=3 is true. (b) 1+1=3 and 2·1+2=3 are both false, so OR is false. (c) 2·1+3=5 and 3·1+4=7 are both true, so AND is true. (d) both XOR operands are true, so XOR is false. (e) 1<2 is true.",
    "hints": [
      "Reset x to 1 at the start of every part, and write T or F beside each atomic condition before applying OR, AND, or XOR."
    ],
    "startHere": "The assignment x:=x+1 means replace the current x by its current value plus 1; it is not an equation to solve.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "checker": "number",
        "solution": "The condition 1+2=3 is true, so x becomes 1+1=2."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1",
        "accepted": [
          "1"
        ],
        "checker": "number",
        "solution": "Both 2=3 and 4=3 are false; false OR false is false, so x stays 1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "checker": "number",
        "solution": "Both 5=5 and 7=7 are true; true AND true is true, so x becomes 2."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "1",
        "accepted": [
          "1"
        ],
        "checker": "number",
        "solution": "Both 2=2 and 3=3 are true; true XOR true is false, so x stays 1."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "2",
        "accepted": [
          "2"
        ],
        "checker": "number",
        "solution": "The condition 1<2 is true, so x becomes 2."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-1-047",
    "mode": "auto",
    "answer": "a) OR 111 1111; AND 000 0000; XOR 111 1111. b) OR 1111 1010; AND 1010 0000; XOR 0101 1010. c) OR 10 0111 1001; AND 00 0100 0000; XOR 10 0011 1001. d) OR 11 1111 1111; AND 00 0000 0000; XOR 11 1111 1111.",
    "solution": "Align equal-length strings and operate column by column: OR gives 1 if at least one bit is 1; AND gives 1 only if both are 1; XOR gives 1 if the bits differ. Spaces only group bits and do not change their positions.",
    "hints": [
      "Write the second string directly below the first and calculate one output column at a time, keeping leading zeros."
    ],
    "readAloud": "For XOR, read each aligned column as ‘one or the other, but not both.’",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "OR=1111111; AND=0000000; XOR=1111111",
        "accepted": [
          "OR 111 1111, AND 000 0000, XOR 111 1111",
          "1111111, 0000000, 1111111",
          "OR=111 1111; AND=000 0000; XOR=111 1111"
        ],
        "checker": "text",
        "solution": "At every position either the first or second string has a 1, but they never both have a 1; therefore OR and XOR are all 1s and AND is all 0s."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "OR=11111010; AND=10100000; XOR=01011010",
        "accepted": [
          "OR 1111 1010, AND 1010 0000, XOR 0101 1010",
          "11111010, 10100000, 01011010",
          "OR=1111 1010; AND=1010 0000; XOR=0101 1010"
        ],
        "checker": "text",
        "solution": "Combining 11110000 and 10101010 column by column gives OR 11111010, AND 10100000, and XOR 01011010."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "OR=1001111001; AND=0001000000; XOR=1000111001",
        "accepted": [
          "OR 10 0111 1001, AND 00 0100 0000, XOR 10 0011 1001",
          "1001111001, 0001000000, 1000111001",
          "OR=10 0111 1001; AND=00 0100 0000; XOR=10 0011 1001"
        ],
        "checker": "text",
        "solution": "Only the fourth bit from the left is 1 in both inputs. OR includes every 1 from either input; XOR removes that shared fourth-bit 1 from the OR result."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "OR=1111111111; AND=0000000000; XOR=1111111111",
        "accepted": [
          "OR 11 1111 1111, AND 00 0000 0000, XOR 11 1111 1111",
          "1111111111, 0000000000, 1111111111",
          "OR=11 1111 1111; AND=00 0000 0000; XOR=11 1111 1111"
        ],
        "checker": "text",
        "solution": "The second string is all zeros, so OR and XOR reproduce the first string and AND is all zeros."
      }
    ],
    "verify": "For each pair, XOR=1 exactly where OR=1 and AND=0; this checks all three outputs together."
  },
  {
    "id": "rosen-ch1-ex-1-1-048",
    "mode": "auto",
    "answer": "a) 1 1000. b) 0 1101. c) 1 1001. d) 1 1011.",
    "solution": "Evaluate parentheses first using the same column-wise OR, AND, and XOR rules. a) 01011∨11011=11011, then 11000∧11011=11000. b) 01111∧10101=00101, then 00101∨01000=01101. c) 01010⊕11011=10001, then 10001⊕01000=11001. d) 11011∨01010=11011 and 10001∨11011=11011, whose AND is 11011.",
    "hints": [
      "Respect the parentheses and retain all five bits, including leading zeros."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "11000",
        "accepted": [
          "1 1000",
          "11000"
        ],
        "checker": "text",
        "solution": "The parenthesized OR is 11011; AND with 11000 leaves 11000."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "01101",
        "accepted": [
          "0 1101",
          "01101"
        ],
        "checker": "text",
        "solution": "The parenthesized AND is 00101; OR with 01000 gives 01101."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "11001",
        "accepted": [
          "1 1001",
          "11001"
        ],
        "checker": "text",
        "solution": "The first XOR gives 10001; XOR with 01000 gives 11001."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "11011",
        "accepted": [
          "1 1011",
          "11011"
        ],
        "checker": "text",
        "solution": "Both parenthesized OR expressions equal 11011, so their AND is 11011."
      }
    ],
    "verify": "Repeat each final operation one column at a time and confirm that the output length remains five bits."
  },
  {
    "id": "rosen-ch1-ex-1-1-049",
    "mode": "rubric",
    "answer": "Fred is not happy has truth value 0.2; John is not happy has truth value 0.6.",
    "solution": "The shared fuzzy-logic context assigns 0.8 to ‘Fred is happy’ and 0.4 to ‘John is happy.’ Fuzzy negation subtracts the original truth value from 1: 1−0.8=0.2 and 1−0.4=0.6.",
    "hints": [
      "Use the stated values 0.8 for Fred and 0.4 for John, then apply the fuzzy negation formula 1−v to each."
    ],
    "rubric": [
      "Uses Fred happy = 0.8 and John happy = 0.4 from the shared context.",
      "Gives Fred not happy = 0.2 using 1−0.8.",
      "Gives John not happy = 0.6 using 1−0.4."
    ],
    "readAloud": "A fuzzy truth value is a degree of truth between zero and one, not a probability that must be rounded to true or false.",
    "verify": "Each statement and its negation sum to 1: 0.8+0.2=1 and 0.4+0.6=1."
  },
  {
    "id": "rosen-ch1-ex-1-1-050",
    "mode": "rubric",
    "answer": "Fred and John are happy has truth value 0.4. Neither Fred nor John is happy has truth value 0.2.",
    "solution": "With Fred happy = 0.8 and John happy = 0.4, fuzzy conjunction uses the minimum: min(0.8,0.4)=0.4. ‘Neither’ means not Fred happy AND not John happy. Their negations have values 0.2 and 0.6, so min(0.2,0.6)=0.2.",
    "hints": [
      "Translate ‘neither A nor B’ as ‘not A AND not B,’ then use the fuzzy conjunction rule min."
    ],
    "rubric": [
      "Computes Fred and John happy as min(0.8,0.4)=0.4.",
      "Interprets neither as a conjunction of both negations, not as a disjunction.",
      "Uses negation values 0.2 and 0.6 and computes min(0.2,0.6)=0.2."
    ],
    "verify": "The second answer is not 1−0.4: fuzzy ‘neither’ is ¬F∧¬J, whose value must be calculated from the two negations."
  },
  {
    "id": "rosen-ch1-ex-1-1-051",
    "mode": "rubric",
    "answer": "Fred is happy, or John is happy has truth value 0.8. Fred is not happy, or John is not happy has truth value 0.6.",
    "solution": "Fuzzy disjunction uses the maximum. For Fred happy OR John happy, max(0.8,0.4)=0.8. The negations have values 1−0.8=0.2 and 1−0.4=0.6, so their disjunction has value max(0.2,0.6)=0.6.",
    "hints": [
      "First list the two operand values for each OR, then choose the larger value rather than adding them."
    ],
    "rubric": [
      "Computes the first disjunction as max(0.8,0.4)=0.8.",
      "Computes the negations as 0.2 and 0.6.",
      "Computes the second disjunction as max(0.2,0.6)=0.6 and does not add truth values."
    ],
    "verify": "Every result stays in [0,1], and each disjunction is at least as true as either of its operands."
  },
  {
    "id": "rosen-ch1-ex-1-1-052",
    "mode": "rubric",
    "answer": "No. In classical propositional logic, ‘This statement is false’ is not a proposition because assigning it either truth value produces a contradiction.",
    "solution": "Let S be the assertion. If S is true, then what it says is correct, so S is false. If S is false, then its claim that it is false is incorrect, so S is true. Neither assignment is consistent, so it has no definite truth value and is a liar paradox rather than a proposition.",
    "hints": [
      "Try assigning T first, then F; a proposition must be able to hold one truth value consistently."
    ],
    "rubric": [
      "Answers no in classical propositional logic.",
      "Shows that assuming true forces false.",
      "Shows that assuming false forces true.",
      "Concludes there is no consistent definite truth value rather than calling it both true and false."
    ],
    "readAloud": "The problem is self-reference: the sentence talks about its own truth value.",
    "verify": "The two cases T→F and F→T exhaust classical truth values, and both fail."
  },
  {
    "id": "rosen-ch1-ex-1-1-053",
    "mode": "rubric",
    "answer": "a) Exactly statement 99 is true; the other 99 statements are false. b) Statements 1 through 50 are true and statements 51 through 100 are false, so exactly 50 statements are false. c) No consistent assignment of truth values exists for 99 statements.",
    "solution": "a) All statements make mutually incompatible exact counts, so at most one is true. Zero true would make all 100 false, making statement 100 true; hence exactly one is true and 99 are false, so statement 99 is the true one. b) Let F be the actual number of false statements. ‘At least n are false’ is true exactly for n≤F, so statements 1,…,F are true and the remaining 100−F are false. Consistency requires F=100−F, hence F=50. c) The same argument with 99 statements requires F=99−F, or 2F=99, impossible for an integer F.",
    "hints": [
      "Let F denote the actual total number of false statements, then compare that count with the truth pattern the statements force."
    ],
    "startHere": "For (b), if exactly F statements are false, precisely statements 1 through F are true; use this to count the false ones another way.",
    "rubric": [
      "(a) concludes statement 99 alone is true and explains why exactly 99 statements are false.",
      "(b) derives F=100−F and identifies statements 1–50 as true and 51–100 as false.",
      "(c) derives 2F=99 and concludes no consistent truth assignment exists because F must be an integer.",
      "Uses self-consistency rather than merely testing a single statement."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Statement 99 is true and every other statement is false; there are exactly 99 false statements.",
        "solution": "At most one exact-count claim can be true. All 100 cannot be false, because then statement 100 would be true. Thus exactly one statement is true, leaving 99 false, which makes statement 99 the true statement.",
        "rubric": [
          "States that only statement 99 is true and the other 99 are false.",
          "Rules out all statements being false using statement 100.",
          "Explains why exactly one true statement forces the count 99."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Statements 1–50 are true and statements 51–100 are false.",
        "solution": "If F statements are false, statements n≤F are true and statements n>F are false. This creates 100−F false statements, so F=100−F and F=50.",
        "rubric": [
          "Identifies the true set as statements 1–50 and false set as 51–100.",
          "Derives and uses F=100−F to obtain F=50."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There is no consistent assignment of truth values.",
        "solution": "With 99 statements, the same reasoning gives F=99−F, hence 2F=99. Since no integer F satisfies this equation, the list is self-contradictory.",
        "rubric": [
          "Concludes no consistent truth-value assignment exists.",
          "Derives 2F=99 and uses the integrality of the false-statement count."
        ]
      }
    ],
    "verify": "For (b), exactly 50 false statements make ‘at least n false’ true for n=1,…,50 and false for n=51,…,100, reproducing the assumed count."
  },
  {
    "id": "rosen-ch1-ex-1-1-054",
    "mode": "rubric",
    "answer": "No. Such a barber cannot exist under the stated rule, because applying it to the barber himself gives a contradiction.",
    "solution": "Ask whether the barber shaves himself. If he does, then he is a self-shaver, but the rule says he shaves only people who do not shave themselves, so he must not shave himself. If he does not shave himself, then the rule says he shaves every such person, including himself, so he does shave himself. Both possibilities are impossible; this is the barber paradox.",
    "hints": [
      "Apply the ‘those and only those who do not shave themselves’ rule to one particular person: the barber."
    ],
    "rubric": [
      "Answers that no such barber can exist under the stated conditions.",
      "Analyzes the case in which the barber shaves himself and derives that he does not.",
      "Analyzes the case in which he does not shave himself and derives that he does.",
      "Uses the contradiction to reject both exhaustive cases."
    ],
    "readAloud": "‘Those and only those’ gives both directions: he shaves every non-self-shaver, and he shaves nobody who shaves himself.",
    "verify": "The two possible answers to ‘Does he shave himself?’ each imply their opposite, leaving no consistent case."
  },
  {
    "id": "rosen-ch1-ex-1-2-001",
    "mode": "auto",
    "answer": "e → a",
    "accepted": [
      "e -> a",
      "¬a → ¬e",
      "not a -> not e",
      "¬e ∨ a",
      "a ∨ ¬e"
    ],
    "checker": "logic",
    "solution": "“Cannot edit unless you are an administrator” means that being an administrator is necessary for editing. Thus editing implies administrator: e → a. Equivalently, ¬a → ¬e.",
    "hints": [
      "Translate “P only if Q” as P → Q.",
      "Here “unless you are an administrator” supplies the necessary condition a."
    ],
    "readAloud": "Read e arrow a as “if you can edit the entry, then you are an administrator.”",
    "startHere": "Identify editing as the claimed possibility and administrator status as the requirement.",
    "verify": "If a is false, the formula forces e to be false; if e is false, it imposes no extra claim, as required."
  },
  {
    "id": "rosen-ch1-ex-1-2-002",
    "mode": "auto",
    "answer": "m → (e ∨ p)",
    "accepted": [
      "m -> (e or p)",
      "m → (p ∨ e)",
      "¬m ∨ e ∨ p",
      "(m ∧ ¬e) → p",
      "¬(e ∨ p) → ¬m"
    ],
    "checker": "logic",
    "solution": "“Only if” makes the condition after it necessary. Seeing the movie therefore requires being over 18 or having parental permission, so m → (e ∨ p). The disjunction is inclusive, so having both qualifications is allowed.",
    "hints": [
      "The arrow begins at m, not at e ∨ p.",
      "Group the two alternative permissions with OR before forming the conditional."
    ],
    "readAloud": "If you can see the movie, then you are over eighteen or you have a parent’s permission.",
    "startHere": "Write the necessary condition as the parenthesized expression e ∨ p.",
    "verify": "When m is true and both e and p are false, the formula is false; every other case is permitted."
  },
  {
    "id": "rosen-ch1-ex-1-2-003",
    "mode": "auto",
    "answer": "g → (r ∧ ¬m ∧ ¬b)",
    "accepted": [
      "g -> (r and not m and not b)",
      "g → (r ∧ ¬b ∧ ¬m)",
      "g → (r ∧ ¬(m ∨ b))",
      "¬g ∨ (r ∧ ¬m ∧ ¬b)",
      "(r ∧ ¬m ∧ ¬b) ∨ ¬g"
    ],
    "checker": "logic",
    "solution": "Graduation requires all three conditions: completed major requirements r, no university debt ¬m, and no overdue book ¬b. Combine these with AND and make them necessary for g.",
    "hints": [
      "“Only if” gives g → (requirements).",
      "Negate m and b because both propositions are worded as problems that must not exist."
    ],
    "readAloud": "If you can graduate, then you completed your major requirements, you do not owe money, and you do not have an overdue book.",
    "startHere": "List the three required conditions separately before joining them with ∧.",
    "verify": "With g true, setting any one of r, ¬m, or ¬b false makes the right side false, blocking graduation as intended."
  },
  {
    "id": "rosen-ch1-ex-1-2-004",
    "mode": "auto",
    "answer": "w → (d ∨ s)",
    "accepted": [
      "w -> (d or s)",
      "w → (s ∨ d)",
      "(w ∧ ¬s) → d",
      "¬w ∨ d ∨ s",
      "(w → d) ∨ s",
      "¬(d ∨ s) → ¬w"
    ],
    "checker": "logic",
    "solution": "A user must either pay the daily fee or be a subscriber. Since this condition is required to use the network, w → (d ∨ s). Equivalently, a nonsubscriber who uses the network must pay: (w ∧ ¬s) → d.",
    "hints": [
      "“Unless you are a subscriber” introduces the alternative s.",
      "Use OR for the two ways to satisfy the access requirement."
    ],
    "readAloud": "If you can use the airport wireless network, then you pay the daily fee or you are a subscriber.",
    "startHere": "Separate the access claim w from its two possible qualifications d and s.",
    "verify": "The formula rejects w true with both d and s false, while allowing either payment or subscription."
  },
  {
    "id": "rosen-ch1-ex-1-2-005",
    "mode": "auto",
    "answer": "e → (a ∧ (b ∨ p) ∧ r)",
    "accepted": [
      "e -> (a and (b or p) and r)",
      "e → (a ∧ r ∧ (b ∨ p))",
      "e → ((a ∧ (b ∨ p)) ∧ r)",
      "¬e ∨ (a ∧ (b ∨ p) ∧ r)",
      "(a ∧ (b ∨ p) ∧ r) ∨ ¬e"
    ],
    "checker": "logic",
    "solution": "Eligibility requires age a, residence r, and one of the two birth-citizenship conditions b or p. Therefore e → (a ∧ (b ∨ p) ∧ r). Parentheses around b ∨ p preserve the intended alternative.",
    "hints": [
      "Age and residence are separately required; the birth conditions form one OR group.",
      "“Only if” places the entire requirement group to the right of e →."
    ],
    "readAloud": "If you are eligible, then you are at least thirty-five, and you were born in the United States or both parents were citizens at your birth, and you have lived in the country for at least fourteen years.",
    "startHere": "Bracket b ∨ p first, then add the mandatory a and r conditions with AND.",
    "verify": "When e is true, the right side succeeds only with a and r true and at least one of b or p true."
  },
  {
    "id": "rosen-ch1-ex-1-2-006",
    "mode": "auto",
    "answer": "u → ((b32 ∧ g1 ∧ r1 ∧ h16) ∨ (b64 ∧ g2 ∧ r2 ∧ h32))",
    "accepted": [
      "u -> ((b32 and g1 and r1 and h16) or (b64 and g2 and r2 and h32))",
      "u → ((b64 ∧ g2 ∧ r2 ∧ h32) ∨ (b32 ∧ g1 ∧ r1 ∧ h16))",
      "¬u ∨ (b32 ∧ g1 ∧ r1 ∧ h16) ∨ (b64 ∧ g2 ∧ r2 ∧ h32)",
      "(u ∧ ¬(b32 ∧ g1 ∧ r1 ∧ h16)) → (b64 ∧ g2 ∧ r2 ∧ h32)"
    ],
    "checker": "logic",
    "solution": "There are two sufficient hardware packages: the 32-bit package b32 ∧ g1 ∧ r1 ∧ h16, or the 64-bit package b64 ∧ g2 ∧ r2 ∧ h32. An upgrade requires at least one package, giving the displayed conditional.",
    "hints": [
      "Build each processor’s four-part requirement with AND.",
      "Join the two complete packages with OR, then use u → because of “only if.”"
    ],
    "readAloud": "If you can upgrade, then either all four 32-bit requirements hold or all four 64-bit requirements hold.",
    "startHere": "Write the 32-bit conjunction and 64-bit conjunction on separate lines before combining them.",
    "verify": "With u true, at least one complete conjunction must be true; mixing only some conditions from each package does not satisfy the formula."
  },
  {
    "id": "rosen-ch1-ex-1-2-007",
    "mode": "auto",
    "answer": "a) q → p; b) q ∧ ¬p; c) q → p; d) ¬q → ¬p.",
    "solution": "In (a) and (c), an unknown-system message q makes scanning p necessary, so both are q → p. In (b), “but” is AND, giving q ∧ ¬p. In (d), both conditions are negated and “when” gives the conditional ¬q → ¬p.",
    "hints": [
      "“Whenever” introduces the antecedent.",
      "“But” is logically AND; “necessary” identifies the consequent."
    ],
    "readAloud": "p means scanned for viruses and q means sent from an unknown system. An arrow points from the triggering condition to the required result.",
    "startHere": "For each sentence, mark the condition first and the claimed result second.",
    "verify": "Parts (a) and (c) have the same logical meaning, while (d) concerns ¬q and must not be confused with the converse p → q.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "q → p",
        "accepted": [
          "q -> p",
          "¬q ∨ p",
          "¬p → ¬q"
        ],
        "checker": "logic",
        "solution": "“Whenever q, p” means q → p.",
        "hints": [
          "The unknown-system condition is the antecedent."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "q ∧ ¬p",
        "accepted": [
          "q and not p",
          "¬p ∧ q",
          "q ∧ (¬p)"
        ],
        "checker": "logic",
        "solution": "The sentence asserts q and the negation of p, so q ∧ ¬p.",
        "hints": [
          "Replace “but” with AND and negate the scanning proposition."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "q → p",
        "accepted": [
          "q -> p",
          "p ∨ ¬q",
          "¬p → ¬q"
        ],
        "checker": "logic",
        "solution": "For an unknown-system message, scanning is necessary; therefore q → p.",
        "hints": [
          "A necessary condition belongs after the arrow."
        ]
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "¬q → ¬p",
        "accepted": [
          "not q -> not p",
          "q ∨ ¬p",
          "p → q"
        ],
        "checker": "logic",
        "solution": "The condition is ¬q and its claimed result is ¬p, hence ¬q → ¬p.",
        "hints": [
          "Negate each proposition separately; do not reverse the arrow."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-008",
    "mode": "auto",
    "answer": "a) r ∧ ¬p; b) (r ∧ p) → q; c) ¬r → ¬q; d) (¬p ∧ r) → q.",
    "solution": "Part (a) joins payment with no valid password using AND. In (b), payment and a valid password together trigger access. In (c), no payment implies denied access ¬q. In (d), the conjunction ¬p ∧ r is the antecedent and q is the consequent.",
    "hints": [
      "“Whenever” and “if” introduce antecedents.",
      "Access denied is ¬q, and “but” is AND."
    ],
    "readAloud": "p is a valid password, q is access granted, and r is the subscription fee paid.",
    "startHere": "Underline each compound condition before choosing the arrow direction.",
    "verify": "Check that (b) and (d) have different antecedents: p ∧ r versus ¬p ∧ r.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "r ∧ ¬p",
        "accepted": [
          "r and not p",
          "¬p ∧ r",
          "(¬p) ∧ r"
        ],
        "checker": "logic",
        "solution": "Payment r is asserted and valid password p is denied: r ∧ ¬p.",
        "hints": [
          "“But” has the same truth-functional meaning as “and.”"
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "(r ∧ p) → q",
        "accepted": [
          "(p ∧ r) → q",
          "r -> (p -> q)",
          "¬(r ∧ p) ∨ q"
        ],
        "checker": "logic",
        "solution": "The joint condition r ∧ p implies access q.",
        "hints": [
          "Parenthesize the two-part condition before adding the arrow."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "¬r → ¬q",
        "accepted": [
          "not r -> not q",
          "r ∨ ¬q",
          "q → r"
        ],
        "checker": "logic",
        "solution": "No payment ¬r implies no access ¬q.",
        "hints": [
          "Negate both payment and access; access denied is not a new variable."
        ]
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "(¬p ∧ r) → q",
        "accepted": [
          "(r ∧ ¬p) → q",
          "¬(¬p ∧ r) ∨ q",
          "(¬p) -> (r -> q)"
        ],
        "checker": "logic",
        "solution": "The stated condition is no valid password together with payment, and the claimed result is access: (¬p ∧ r) → q.",
        "hints": [
          "Keep ¬p inside the antecedent; q remains positive."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-009",
    "mode": "auto",
    "answer": "No; the specifications are inconsistent.",
    "accepted": [
      "No",
      "Inconsistent",
      "The specifications are not consistent."
    ],
    "checker": "text",
    "solution": "Let m, n, k, i mean multiuser, normal, kernel functioning, and interrupt mode. The last two specifications give ¬i and ¬m → i, so m must be true. From m ↔ n and n → k, both n and k are true. But ¬k ∨ i together with ¬i forces ¬k, contradicting k. No truth assignment satisfies all five specifications.",
    "hints": [
      "Start with the explicit fact “not in interrupt mode.”",
      "Use ¬m → i to prove m, then follow the chain to k and ¬k."
    ],
    "readAloud": "Consistent means that at least one assignment of truth values makes every specification true at once.",
    "startHere": "Write the five formulas m ↔ n, n → k, ¬k ∨ i, ¬m → i, and ¬i.",
    "verify": "The deduction forces k and ¬k simultaneously, so no satisfying assignment exists."
  },
  {
    "id": "rosen-ch1-ex-1-2-010",
    "mode": "auto",
    "answer": "Yes; the specifications are consistent.",
    "accepted": [
      "Yes",
      "Consistent",
      "The specifications can all be true together."
    ],
    "checker": "text",
    "solution": "Let u, a, s denote upgrading, file-system access, and saving new files. The formulas are u → ¬a, a → s, and ¬s → ¬u. One satisfying assignment is u = false, a = false, s = false: every conditional has a false antecedent. Therefore the specifications are consistent; this assignment is a witness, not a claim that these are the only possible values.",
    "hints": [
      "To prove consistency, find one assignment satisfying every conditional.",
      "Try making all three antecedents false."
    ],
    "readAloud": "u arrow not a means that an upgrade blocks access; a arrow s links access to saving; not s arrow not u says failed saving rules out an upgrade.",
    "startHere": "Translate each sentence, then test u, a, and s all false.",
    "verify": "At u = a = s = false, the three antecedents u, a, and ¬s are false, false, and true respectively, and the third consequent ¬u is true; all three conditionals hold."
  },
  {
    "id": "rosen-ch1-ex-1-2-011",
    "mode": "rubric",
    "answer": "Yes; the specifications are consistent. They force the router not to send packets, not to support the new address space, and not to have the latest release installed.",
    "checker": "rubric",
    "solution": "Let s, a, l mean can send, supports the address space, and has the latest release. The formulas are s → a, a → l, l → s, and ¬a. Since ¬a and s → a force ¬s, and ¬a with a → l does not by itself force ¬l, use l → s: if l were true then s would be true, contradicting ¬s. Thus l is false. The assignment s = a = l = false satisfies all four specifications.",
    "hints": [
      "Use the explicit ¬a with s → a first.",
      "After deriving ¬s, apply modus tollens to l → s."
    ],
    "readAloud": "The three conditionals form a cycle from sending to support to the latest release and back to sending, while support is explicitly false.",
    "startHere": "Label s, a, and l, then write s → a, a → l, l → s, ¬a.",
    "verify": "With all three variables false, s → a and a → l have false antecedents, l → s also has a false antecedent, and ¬a is true.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Yes; the specifications are consistent. They force the router not to send packets, not to support the new address space, and not to have the latest release installed.",
      "Explains the required reasoning and cases: Let s, a, l mean can send, supports the address space, and has the latest release. The formulas are s → a, a → l, l → s, and ¬a. Since ¬a and s → a force ¬s, and ¬a with a → l does not by itself force ¬l, use l → s: if l were true then s would be true, contradicting ¬s. Thus l is false. The assignment s = a = l = false satisfies all four specifications."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-012",
    "mode": "rubric",
    "answer": "Yes; the specifications are consistent, with the file system locked, new messages queued, the system not functioning normally, and messages not sent to the buffer.",
    "checker": "rubric",
    "solution": "Let l mean locked, q queued, n normal, and b sent to the buffer. The specifications are ¬l → q, ¬l ↔ n, ¬q → b, ¬l → b, and ¬b. From ¬b and ¬q → b, q must be true. From ¬b and ¬l → b, ¬l must be false, so l is true. Since ¬l is false, the biconditional ¬l ↔ n requires n to be false. The unique satisfying assignment is l = true, q = true, n = false, b = false.",
    "hints": [
      "Use ¬b with both conditionals whose consequent is b.",
      "The converse in the second specification makes it a biconditional, not just ¬l → n."
    ],
    "readAloud": "Not locked if and only if normal means that unlocked and normal always have the same truth value.",
    "startHere": "Write ¬l ↔ n carefully and derive q and l from the final fact ¬b.",
    "verify": "At l = true, q = true, n = false, b = false, both sides of ¬l ↔ n are false and every other specification is satisfied.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Yes; the specifications are consistent, with the file system locked, new messages queued, the system not functioning normally, and messages not sent to the buffer.",
      "Explains the required reasoning and cases: Let l mean locked, q queued, n normal, and b sent to the buffer. The specifications are ¬l → q, ¬l ↔ n, ¬q → b, ¬l → b, and ¬b. From ¬b and ¬q → b, q must be true. From ¬b and ¬l → b, ¬l must be false, so l is true. Since ¬l is false, the biconditional ¬l ↔ n requires n to be false. The unique satisfying assignment is l = true, q = true, n = false, b = false."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-013",
    "mode": "rubric",
    "answer": "New Jersey: beaches AND \"New Jersey\". Isle of Jersey: beaches AND Jersey AND (\"English Channel\" OR \"Channel Islands\"); equivalently, use beaches AND Jersey AND NOT \"New Jersey\" if the search engine reliably excludes that phrase.",
    "solution": "The first query requires both the topic and the full place name. For the island, Jersey alone is ambiguous, so add an island-specific qualifier or exclude the phrase New Jersey. Phrase quotation keeps multiword place names together.",
    "hints": [
      "AND narrows a search by requiring both terms.",
      "Distinguish Jersey from New Jersey with a positive island qualifier or a phrase exclusion."
    ],
    "startHere": "Begin with beaches AND the place name, then address the ambiguity in the second query.",
    "verify": "Check that the second query does not treat New Jersey as its target and still requires beaches.",
    "rubric": [
      "Gives a New Jersey query requiring beaches and the complete phrase New Jersey.",
      "Gives an Isle of Jersey query requiring beaches and Jersey while adding an English Channel/Channel Islands qualifier or explicitly excluding New Jersey.",
      "Uses Boolean grouping or quotation so multiword names and alternatives are interpreted correctly.",
      "Does not confuse the two requested searches."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-014",
    "mode": "rubric",
    "answer": "West Virginia: hiking AND \"West Virginia\". Virginia but not West Virginia: hiking AND Virginia AND NOT \"West Virginia\".",
    "solution": "The first query requires hiking and the complete state name. The second requires Virginia but excludes documents containing the phrase West Virginia, which implements the requested distinction under Boolean keyword semantics.",
    "hints": [
      "Quote the multiword state names.",
      "Use NOT only on West Virginia in the second query, not on Virginia or hiking."
    ],
    "startHere": "Write hiking AND Virginia, then decide what positive or negative phrase distinguishes the two states.",
    "verify": "The second expression still requires hiking and Virginia while rejecting the unwanted phrase.",
    "rubric": [
      "First query requires hiking and West Virginia as a complete place name.",
      "Second query requires hiking and Virginia and excludes West Virginia.",
      "Boolean operators and phrase grouping are applied to the correct terms.",
      "Both requested searches are answered distinctly."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-015",
    "mode": "rubric",
    "answer": "Ethiopian restaurants (\"New York\" OR \"New Jersey\")",
    "solution": "Require the restaurant type and group the two acceptable locations with OR. The parentheses ensure that the location group applies as a unit rather than making New Jersey an unrelated standalone search.",
    "hints": [
      "Use OR between the locations, not between Ethiopian restaurants and a location.",
      "Parenthesize the location alternatives and quote each multiword name."
    ],
    "startHere": "Combine New York and New Jersey first as one location condition.",
    "verify": "A matching page must concern Ethiopian restaurants and at least one of the two locations.",
    "rubric": [
      "Requires Ethiopian restaurants as the subject.",
      "Includes both New York and New Jersey as acceptable locations using OR.",
      "Groups the location alternatives correctly and preserves the multiword phrases.",
      "Does not require both locations simultaneously."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-016",
    "mode": "rubric",
    "answer": "men (shoes OR boots) -work",
    "solution": "The query requires men, allows either shoes or boots, and excludes work using Google’s minus-sign exclusion. Equivalent Boolean notation is men AND (shoes OR boots) AND NOT work.",
    "hints": [
      "Group shoes OR boots before adding exclusions.",
      "In Google syntax, -work excludes work; in Boolean syntax, use AND NOT work."
    ],
    "startHere": "Write the product alternatives first, then attach the men requirement and work exclusion.",
    "verify": "The query must not become men shoes OR boots -work without grouping, because that would not apply every condition to both product types.",
    "rubric": [
      "Requires the men category.",
      "Allows either shoes or boots through an OR group.",
      "Excludes work using valid Google minus syntax or explicit Boolean NOT.",
      "Uses grouping so all conditions apply to both shoes and boots."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-017",
    "mode": "mixed",
    "answer": "a) No. b) Yes, but the treasure is not uniquely determined: Trunk 2 or Trunk 3. c) Yes; Trunk 1. d) No.",
    "solution": "Evaluate the inscriptions for each single treasure location. Trunk 1 gives (F,T,T), exactly two true; Trunk 2 gives (F,F,T), exactly one true; Trunk 3 gives (T,F,F), exactly one true. Thus zero or three true inscriptions are impossible, two true forces Trunk 1, and one true permits Trunk 2 or Trunk 3.",
    "hints": [
      "Make three rows, one for each possible treasure trunk.",
      "The third inscription “This trunk is empty” refers to Trunk 3 and is false only when the treasure is there."
    ],
    "readAloud": "The inscriptions say treasure in three, treasure in one, and trunk three is empty. Count true inscriptions in each case.",
    "startHere": "Build the truth pattern for treasure in Trunk 1, then repeat for Trunks 2 and 3.",
    "verify": "The three patterns FTT, FFT, and TFF have counts two, one, and one respectively, matching all four answers.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "No; the Queen could not truthfully say this.",
        "accepted": [
          "No",
          "Impossible",
          "No possible treasure location makes all three inscriptions false."
        ],
        "checker": "text",
        "solution": "Every treasure location makes at least one inscription true, so all false is impossible.",
        "hints": [
          "Check the minimum count among FTT, FFT, and TFF."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Yes; the treasure could be in Trunk 2 or Trunk 3, so its trunk is not uniquely determined.",
        "checker": "rubric",
        "solution": "Exactly one inscription is true in the Trunk 2 and Trunk 3 cases.",
        "hints": [
          "There are two rows with exactly one T."
        ],
        "rubric": [
          "Gives a response equivalent to the authored model answer: Yes; the treasure could be in Trunk 2 or Trunk 3, so its trunk is not uniquely determined.",
          "Explains the required reasoning and cases: Exactly one inscription is true in the Trunk 2 and Trunk 3 cases."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Yes; the treasure is in Trunk 1.",
        "accepted": [
          "Yes, Trunk 1",
          "Trunk 1 only"
        ],
        "checker": "text",
        "solution": "Only treasure in Trunk 1 gives the pattern FTT, with exactly two true inscriptions.",
        "hints": [
          "Find the only pattern containing two Ts."
        ]
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "No; the Queen could not truthfully say this.",
        "accepted": [
          "No",
          "Impossible",
          "No location makes all three inscriptions true."
        ],
        "checker": "text",
        "solution": "No truth pattern is TTT, so all three true is impossible.",
        "hints": [
          "Compare each row with TTT."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-018",
    "mode": "mixed",
    "answer": "a) No. b) Yes; treasures in Trunks 1 and 3. c) Yes, but not uniquely: Trunks 1 and 2, or Trunks 2 and 3. d) No.",
    "solution": "For treasure pairs (1,2), (1,3), and (2,3), the inscription truth patterns are respectively FTT, FTF, and TFT. Their true counts are two, one, and two. Consequently zero and three true inscriptions are impossible, exactly one forces (1,3), and exactly two allows (1,2) or (2,3).",
    "hints": [
      "There are only three ways to choose two treasure trunks.",
      "The first inscription says Trunk 1 is empty, so it is true only for the pair (2,3)."
    ],
    "readAloud": "The three inscriptions are trunk one empty, treasure in trunk one, and treasure in trunk two.",
    "startHere": "List the pairs 12, 13, and 23, then evaluate all three inscriptions for each pair.",
    "verify": "FTT, FTF, and TFT give exactly the stated count matches; no row has count zero or three.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "No; the Queen could not truthfully say this.",
        "accepted": [
          "No",
          "Impossible",
          "No treasure pair makes every inscription false."
        ],
        "checker": "text",
        "solution": "Each possible treasure pair makes at least one inscription true.",
        "hints": [
          "Look for an FFF row; none exists."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Yes; the treasures are in Trunks 1 and 3.",
        "accepted": [
          "Yes, Trunks 1 and 3",
          "Trunks 1 and 3 only"
        ],
        "checker": "text",
        "solution": "The pair (1,3) alone produces FTF, exactly one true inscription.",
        "hints": [
          "Select the row whose only T is in the middle."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Yes; either Trunks 1 and 2 or Trunks 2 and 3, so the pair is not uniquely determined.",
        "checker": "rubric",
        "solution": "The pairs (1,2) and (2,3) produce FTT and TFT, each with two true inscriptions.",
        "hints": [
          "Two rows have exactly two Ts."
        ],
        "rubric": [
          "Gives a response equivalent to the authored model answer: Yes; either Trunks 1 and 2 or Trunks 2 and 3, so the pair is not uniquely determined.",
          "Explains the required reasoning and cases: The pairs (1,2) and (2,3) produce FTT and TFT, each with two true inscriptions."
        ]
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "No; the Queen could not truthfully say this.",
        "accepted": [
          "No",
          "Impossible",
          "No pair makes all three inscriptions true."
        ],
        "checker": "text",
        "solution": "No possible pair produces TTT.",
        "hints": [
          "The first two inscriptions about Trunk 1 cannot both be true."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-019",
    "mode": "rubric",
    "answer": "Point to one branch and ask, “If I asked you whether this branch leads to the ruins, would you say yes?” Take that branch on “Yes” and the other branch on “No.”",
    "solution": "The nested question cancels the effect of lying. If the indicated branch leads to the ruins, a truth-teller answers yes; a liar would answer no to the inner question and therefore lies about that hypothetical answer by saying yes. If it does not lead to the ruins, both types answer no by the same reasoning. Thus the outer answer reliably identifies the branch without revealing the villager’s type.",
    "hints": [
      "Ask about the villager’s answer to another question so that lying is applied twice.",
      "Test your question in four cases: truth-teller/liar crossed with ruins/jungle."
    ],
    "startHere": "Choose a particular branch and build a yes/no question whose answer is yes exactly when that branch leads to the ruins.",
    "verify": "Make a four-row table. For both villager types, the response is yes for the ruins branch and no for the jungle branch.",
    "rubric": [
      "Supplies exactly one well-formed yes/no question about a designated branch.",
      "Explains the truth-teller’s responses for both possible destinations.",
      "Explains the liar’s responses for both destinations, including why the nested formulation reverses the lie.",
      "States an actionable rule mapping yes/no to the correct branch.",
      "Does not rely on knowing whether the villager is a truth-teller or liar."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-020",
    "mode": "rubric",
    "answer": "a) Both types answer “No,” so the question gives no information. b) Ask a question with a known answer, such as “Is 2 + 2 = 4?” A truth-teller says “Yes” and a liar says “No.”",
    "solution": "For “Are you a liar?”, the truth-teller truthfully denies being a liar, while the liar falsely denies it. Both say no. A factual question whose correct answer is known separates them because the truth-teller must give the correct answer and the liar must give the incorrect one.",
    "hints": [
      "For (a), calculate the answer separately for each type.",
      "For (b), use an objective fact rather than asking the cannibal to describe his own truthfulness."
    ],
    "startHere": "Make a two-row table with columns cannibal type, true answer, and spoken answer.",
    "verify": "The proposed factual question produces different responses, yes versus no, which is exactly what is needed for identification.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Both a truth-teller and a liar answer “No.”",
        "solution": "The truth-teller is not a liar and says no. The liar is a liar, so the true answer would be yes, but he lies and says no. Identical answers cannot distinguish the types.",
        "hints": [
          "Do not assume the liar will openly admit lying."
        ],
        "rubric": [
          "States that both types answer no.",
          "Correctly explains the truth-teller’s answer.",
          "Correctly explains why the liar also answers no.",
          "Concludes that identical answers provide no distinguishing information."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Ask “Is 2 + 2 = 4?” Yes identifies a truth-teller; no identifies a liar.",
        "solution": "The correct answer is known to be yes. The truth-teller must say yes, whereas the liar must say no, so the response determines the type.",
        "hints": [
          "Any simple question with a definitely known true answer works."
        ],
        "rubric": [
          "Gives one answerable question with a known objective truth value.",
          "Correctly maps one response to the truth-teller and the opposite response to the liar.",
          "The question works without any assumption about the cannibal’s type."
        ]
      }
    ],
    "rubric": [
      "States that both types answer no.",
      "Correctly explains the truth-teller’s answer.",
      "Correctly explains why the liar also answers no.",
      "Concludes that identical answers provide no distinguishing information.",
      "Gives one answerable question with a known objective truth value.",
      "Correctly maps one response to the truth-teller and the opposite response to the liar.",
      "The question works without any assumption about the cannibal’s type."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-021",
    "mode": "auto",
    "answer": "The first and second professors want coffee; the third does not.",
    "accepted": [
      "Coffee for professors 1 and 2 only",
      "First and second want coffee, third does not",
      "Yes, yes, no for professors 1, 2, and 3"
    ],
    "checker": "text",
    "solution": "Each professor knows his or her own preference. If the first did not want coffee, the first would know that not everyone wanted it and would answer no; “I do not know” therefore means the first wants coffee. The second has heard this deduction, so the second’s “I do not know” likewise means the second wants coffee. The third can then answer no only because the third does not want coffee. The hostess serves the first two only.",
    "hints": [
      "An “I do not know” answer to “everyone?” reveals that the speaker personally wants coffee.",
      "Process the professors in speaking order because each hears the earlier answers."
    ],
    "startHere": "Ask what the first professor would have answered if the first did not want coffee.",
    "verify": "Preferences yes, yes, no make the first two uncertain before hearing the third and make the third’s negative answer correct."
  },
  {
    "id": "rosen-ch1-ex-1-2-022",
    "mode": "rubric",
    "answer": "The allowable combinations are: no one; Jasmine only; Jasmine and Kanti only.",
    "checker": "rubric",
    "solution": "Let J, S, K denote attendance. The rules are J → ¬S, S → K, and K → J. If S attends, then K and hence J attend, but J → ¬S contradicts S. Therefore Samir cannot attend. If K attends, J must attend. The remaining possibilities with S false are exactly (J,K) = (false,false), (true,false), and (true,true), all of which satisfy the rules.",
    "hints": [
      "Translate “Samir only if Kanti” as S → K and “Kanti not unless Jasmine” as K → J.",
      "First prove Samir impossible by following S → K → J → ¬S."
    ],
    "readAloud": "J, S, and K are true when Jasmine, Samir, and Kanti attend. The three rules prohibit J with S, require K after S, and require J after K.",
    "startHere": "Test whether Samir can attend; then enumerate the four possibilities for Jasmine and Kanti.",
    "verify": "The three listed combinations satisfy all rules; every omitted combination either includes Samir or has Kanti without Jasmine.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: The allowable combinations are: no one; Jasmine only; Jasmine and Kanti only.",
      "Explains the required reasoning and cases: Let J, S, K denote attendance. The rules are J → ¬S, S → K, and K → J. If S attends, then K and hence J attend, but J → ¬S contradicts S. Therefore Samir cannot attend. If K attends, J must attend. The remaining possibilities with S false are exactly (J,K) = (false,false), (true,false), and (true,true), all of which satisfy the rules."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-023",
    "mode": "auto",
    "answer": "A is a knight and B is a knave.",
    "accepted": [
      "A knight, B knave",
      "A = knight; B = knave",
      "Knight A and knave B"
    ],
    "checker": "text",
    "solution": "If A were a knave, A’s statement “at least one of us is a knave” would be true, which a knave cannot say. Therefore A is a knight. A’s statement is then true, so at least one is a knave; since A is not, B must be the knave.",
    "hints": [
      "Test A as a knave first; the statement would become true.",
      "Once A is a knight, use the truth of A’s statement to identify B."
    ],
    "startHere": "Remember the invariant: knight status and statement truth match, while knave status and statement truth are opposite.",
    "verify": "A knight truthfully says at least one is a knave, and B knave makes that statement true."
  },
  {
    "id": "rosen-ch1-ex-1-2-024",
    "mode": "auto",
    "answer": "A is a knave and B is a knight.",
    "accepted": [
      "A knave, B knight",
      "A = knave; B = knight",
      "Knave A and knight B"
    ],
    "checker": "text",
    "solution": "B’s statement is “A is a knave.” If B is a knight, A is a knave, and A’s claim that both are knights is false, so this case works. If B is a knave, B’s statement is false, making A a knight; but then A’s claim that both are knights is false, impossible for a knight. Only the first case remains.",
    "hints": [
      "Split into two cases according to B’s type.",
      "B’s statement directly determines A’s type once B’s truthfulness is known."
    ],
    "startHere": "Assume B is a knight and check both statements; then repeat with B as a knave.",
    "verify": "With A knave and B knight, A’s conjunction is false and B’s statement is true, exactly as required."
  },
  {
    "id": "rosen-ch1-ex-1-2-025",
    "mode": "auto",
    "answer": "A and B are both knights.",
    "accepted": [
      "A knight, B knight",
      "Both knights",
      "A = B = knight"
    ],
    "checker": "text",
    "solution": "Write A’s statement as ¬A ∨ B, where A and B mean “is a knight.” If A were a knave, ¬A would be true, so the whole disjunction would be true—impossible for a knave. Hence A is a knight. The statement must be true, but ¬A is now false, so B must be true.",
    "hints": [
      "A knave cannot say “I am a knave or …” because the first disjunct would already be true.",
      "After establishing A knight, determine which disjunct must make the OR true."
    ],
    "readAloud": "Not A or B means either A is a knave or B is a knight; at least one disjunct must be true when A speaks truthfully.",
    "startHere": "Translate A’s sentence to ¬A ∨ B and test A = false.",
    "verify": "If both are knights, ¬A ∨ B is false ∨ true = true, so A’s truthful statement is consistent."
  },
  {
    "id": "rosen-ch1-ex-1-2-026",
    "mode": "rubric",
    "answer": "No type can be determined; all four combinations are possible: both knights, A knight/B knave, A knave/B knight, or both knaves.",
    "checker": "rubric",
    "solution": "A knight saying “I am a knight” makes a true statement, and a knave saying it makes a false statement. Both types can therefore utter this sentence. Neither statement constrains the speaker’s type or the other person, so all four assignments work.",
    "hints": [
      "Check the sentence separately for a knight and for a knave.",
      "A statement is uninformative when both types can say it consistently."
    ],
    "startHere": "For one speaker, verify that “I am a knight” is true for a knight and false for a knave.",
    "verify": "Each of the four type pairs gives each speaker a statement with exactly the required truth value.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: No type can be determined; all four combinations are possible: both knights, A knight/B knave, A knave/B knight, or both knaves.",
      "Explains the required reasoning and cases: A knight saying “I am a knight” makes a true statement, and a knave saying it makes a false statement. Both types can therefore utter this sentence. Neither statement constrains the speaker’s type or the other person, so all four assignments work."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-027",
    "mode": "auto",
    "answer": "A is a knave and B is a knight.",
    "accepted": [
      "A knave, B knight",
      "A = knave; B = knight",
      "Knave A and knight B"
    ],
    "checker": "text",
    "solution": "A cannot be a knight, because then “we are both knaves” would be false. So A is a knave. A’s statement must be false, meaning they are not both knaves; with A already a knave, B must be a knight.",
    "hints": [
      "A knight cannot truthfully call both people knaves.",
      "Negating “both are knaves” gives “at least one is a knight.”"
    ],
    "startHere": "Determine A’s type from the self-defeating nature of a knight saying both are knaves.",
    "verify": "The actual pair knave/knight makes “both knaves” false, exactly what A the knave must say."
  },
  {
    "id": "rosen-ch1-ex-1-2-028",
    "mode": "rubric",
    "answer": "Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
    "checker": "rubric",
    "solution": "Exactly one person has each type; the knight’s statement is true, the knave’s false, and the spy’s unrestricted. If C were the knight, “I am the spy” would be false, impossible; if C were the knave, that statement would also be false, which is allowed. Test the six assignments. Only A = knight, B = spy, C = knave works: A truthfully says C is the knave, B truthfully says A is the knight, and C falsely claims to be the spy. The spy may tell the truth.",
    "hints": [
      "Enumerate the six permutations of knight, knave, spy rather than assuming the spy lies.",
      "C cannot be the knight because the knight cannot truthfully claim to be the spy."
    ],
    "startHere": "Use three checks per assignment: knight statement true, knave statement false, and all three types used once.",
    "verify": "The stated assignment passes all checks; the other five assignments either force a knight to lie or a knave to tell the truth.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
      "Explains the required reasoning and cases: Exactly one person has each type; the knight’s statement is true, the knave’s false, and the spy’s unrestricted. If C were the knight, “I am the spy” would be false, impossible; if C were the knave, that statement would also be false, which is allowed. Test the six assignments. Only A = knight, B = spy, C = knave works: A truthfully says C is the knave, B truthfully says A is the knight, and C falsely claims to be the spy. The spy may tell the truth."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-029",
    "mode": "rubric",
    "answer": "Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
    "checker": "rubric",
    "solution": "B’s “I am the knave” cannot be said by the knight (false) or by the knave (true), so B must be the spy and the statement is a lie, making B not the knave. C’s “B is the knight” is then false, so C cannot be the knight; since B is the spy, C must be the knave. A is therefore the knight, and A’s “I am the knight” is true.",
    "hints": [
      "Focus on B’s self-description: neither knight nor knave can consistently say it.",
      "A spy can lie, so B can be the spy while falsely claiming knave status."
    ],
    "startHere": "Prove B is the spy, then use the falsity of C’s statement about B.",
    "verify": "A’s statement is true, B’s is false as permitted for a spy, and C’s is false as required for the knave.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
      "Explains the required reasoning and cases: B’s “I am the knave” cannot be said by the knight (false) or by the knave (true), so B must be the spy and the statement is a lie, making B not the knave. C’s “B is the knight” is then false, so C cannot be the knight; since B is the spy, C must be the knave. A is therefore the knight, and A’s “I am the knight” is true."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-030",
    "mode": "auto",
    "answer": "There are no solutions.",
    "accepted": [
      "No solutions",
      "Impossible",
      "No assignment of knight, knave, and spy is consistent"
    ],
    "checker": "text",
    "solution": "No knight can truthfully say “I am the knave,” and no knave can falsely say it because for the knave it is true. Only the spy could utter the sentence, by lying. But all three people say it, and there is only one spy, so no assignment satisfies the shared context.",
    "hints": [
      "Classify who could possibly utter “I am the knave.”",
      "There is only one spy, but three people make the same statement."
    ],
    "startHere": "Test the sentence for knight, knave, and spy separately.",
    "verify": "At most the single spy can make the statement, never all three people; hence the case list is empty."
  },
  {
    "id": "rosen-ch1-ex-1-2-031",
    "mode": "rubric",
    "answer": "Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
    "checker": "rubric",
    "solution": "C cannot be the knight, since “I am the spy” would be false. If C were the spy, the same statement would be true, which is permitted, so test assignments rather than excluding that possibility. B says A is telling the truth, which is equivalent here to A being the knight. The unique consistent assignment is A knight, B spy, C knave: A and B make true statements, while C’s spy claim is false. The other assignment with C spy, A knight, B knave fails because B’s statement would then be true, which a knave cannot make.",
    "hints": [
      "B’s statement has the same truth value as “A is the knight.”",
      "Remember that C being the spy is not ruled out merely because C’s statement would then be true."
    ],
    "startHere": "Enumerate the six role assignments and compare B’s statement with A’s actual role.",
    "verify": "Only (knight, spy, knave) gives the knight a true statement and the knave a false statement; uniqueness follows after all six cases.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
      "Explains the required reasoning and cases: C cannot be the knight, since “I am the spy” would be false. If C were the spy, the same statement would be true, which is permitted, so test assignments rather than excluding that possibility. B says A is telling the truth, which is equivalent here to A being the knight. The unique consistent assignment is A knight, B spy, C knave: A and B make true statements, while C’s spy claim is false. The other assignment with C spy, A knight, B knave fails because B’s statement would then be true, which a knave cannot make."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-032",
    "mode": "rubric",
    "answer": "Unique solution: A is the knave, B is the spy (normal), and C is the knight.",
    "checker": "rubric",
    "solution": "In the unique assignment, A falsely says “I am the knight,” as required for the knave. B says “A is not the knave,” which is false and is allowed because B is the spy. C truthfully says “B is not the knave,” as required for the knight. Checking the six permutations shows no other assignment works: whenever B is the knave, B’s statement must be false, forcing A to be the knave too, violating uniqueness of types; the remaining cases fail the knight’s truth condition.",
    "hints": [
      "If B were the knave, B’s false statement would force A to be the knave as well—impossible.",
      "Test the proposed assignment first, then eliminate the other five role permutations."
    ],
    "startHere": "Translate B’s statement as A ≠ knave and C’s as B ≠ knave, then enumerate roles.",
    "verify": "The statement truth values in order are false, false, true, matching A knave, B spy, C knight.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Unique solution: A is the knave, B is the spy (normal), and C is the knight.",
      "Explains the required reasoning and cases: In the unique assignment, A falsely says “I am the knight,” as required for the knave. B says “A is not the knave,” which is false and is allowed because B is the spy. C truthfully says “B is not the knave,” as required for the knight. Checking the six permutations shows no other assignment works: whenever B is the knave, B’s statement must be false, forcing A to be the knave too, violating uniqueness of types; the remaining cases fail the knight’s truth condition."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-033",
    "mode": "rubric",
    "answer": "Not unique: every one of the six assignments of knight, knave, and spy to A, B, and C is possible.",
    "checker": "rubric",
    "solution": "For each speaker, “I am the knight” is true if the speaker is the knight, false if the speaker is the knave, and may be either true or false if the speaker is the spy. Here every speaker says the sentence, so the knight speaks truthfully, the knave lies, and the spy lies. This imposes no restriction on who occupies which role, so all 3! = 6 assignments work.",
    "hints": [
      "The sentence is compatible with all three types; do not infer that the speaker must be a knight.",
      "Count all permutations after checking that no statement creates an additional restriction."
    ],
    "startHere": "Check the truth value of “I am the knight” for each of the three possible roles.",
    "verify": "In every permutation the knight’s sentence is true and the knave’s is false; the remaining person is the spy, who may lie.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Not unique: every one of the six assignments of knight, knave, and spy to A, B, and C is possible.",
      "Explains the required reasoning and cases: For each speaker, “I am the knight” is true if the speaker is the knight, false if the speaker is the knave, and may be either true or false if the speaker is the spy. Here every speaker says the sentence, so the knight speaks truthfully, the knave lies, and the spy lies. This imposes no restriction on who occupies which role, so all 3! = 6 assignments work."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-034",
    "mode": "rubric",
    "answer": "Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
    "checker": "rubric",
    "solution": "C says “A is the spy.” A and B each deny being the spy. In the unique assignment A knight, B spy, C knave, A’s denial is true, B’s denial is false (allowed for the spy), and C’s claim is false (required for the knave). To see uniqueness, note that if C were the knight, A would have to be the spy, making A’s denial false even though A would then be the spy and B the knave; B’s denial would be true, impossible for the knave. The other permutations fail the same truth-role checks.",
    "hints": [
      "Evaluate the three statements as A ≠ spy, B ≠ spy, and A = spy.",
      "The first and third statements have opposite truth values."
    ],
    "startHere": "Use A = spy as a case split, then assign the knight and knave consistently with their statements.",
    "verify": "For (knight, spy, knave), the statement values are true, false, false; exhaustive permutation checking leaves no alternative.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Unique solution: A is the knight, B is the spy (normal), and C is the knave.",
      "Explains the required reasoning and cases: C says “A is the spy.” A and B each deny being the spy. In the unique assignment A knight, B spy, C knave, A’s denial is true, B’s denial is false (allowed for the spy), and C’s claim is false (required for the knave). To see uniqueness, note that if C were the knight, A would have to be the spy, making A’s denial false even though A would then be the spy and B the knave; B’s denial would be true, impossible for the knave. The other permutations fail the same truth-role checks."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-035",
    "mode": "auto",
    "answer": "There are no solutions.",
    "accepted": [
      "No solutions",
      "Impossible",
      "No consistent role assignment exists"
    ],
    "checker": "text",
    "solution": "The knave is, by definition, not the spy. Therefore the knave’s statement “I am not the spy” would be true, violating the rule that a knave always lies. This contradiction occurs regardless of who is assigned the knave role, so there are no solutions.",
    "hints": [
      "You do not need all six permutations: focus only on whoever is the knave.",
      "The statement is true for both knight and knave because neither is the spy."
    ],
    "startHere": "Evaluate “I am not the spy” from the knave’s perspective.",
    "verify": "Every legal assignment contains exactly one knave, and that person would be forced to tell the truth, so the solution set is empty."
  },
  {
    "id": "rosen-ch1-ex-1-2-036",
    "mode": "rubric",
    "answer": "a) Jones was the murderer. b) Jones was the murderer.",
    "solution": "Test each possible guilty man using the innocent men’s statements. If Smith were guilty, innocent Jones says he was out of town, but innocent Williams says he saw Jones with Cooper that day: contradiction. If Williams were guilty, innocent Smith says Cooper was Jones’s friend, but innocent Jones says he did not know Cooper: contradiction. If Jones was guilty, Smith and Williams are innocent; their statements are compatible, and Jones’s claims may be false. Thus Jones is forced in both versions.",
    "hints": [
      "Ignore the guilty person’s statements when testing a candidate, because they may be false.",
      "Look for direct contradictions between pairs of innocent witnesses."
    ],
    "startHere": "Make three cases—Smith, Jones, Williams guilty—and mark the other two men’s statements as true.",
    "verify": "Only Jones guilty leaves no contradiction among the innocent men, and Williams’s statement that Smith or Jones did it remains true.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Jones was the murderer.",
        "checker": "rubric",
        "solution": "Smith guilty makes innocent Jones’s alibi conflict with innocent Williams’s sighting; Williams guilty makes innocent Smith’s friendship claim conflict with innocent Jones’s claim not to know Cooper. Jones guilty is the only consistent case.",
        "hints": [
          "Use contradictions among the two men presumed innocent in each case."
        ],
        "rubric": [
          "Gives a response equivalent to the authored model answer: Jones was the murderer.",
          "Explains the required reasoning and cases: Smith guilty makes innocent Jones’s alibi conflict with innocent Williams’s sighting; Williams guilty makes innocent Smith’s friendship claim conflict with innocent Jones’s claim not to know Cooper. Jones guilty is the only consistent case."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Jones was the murderer.",
        "checker": "rubric",
        "solution": "The same innocent-witness contradictions eliminate Smith and Williams. With Jones guilty, innocent Smith and Williams can both be truthful, so Jones is determined.",
        "hints": [
          "Part (b) uses the same requirement that every innocent statement be true."
        ],
        "rubric": [
          "Gives a response equivalent to the authored model answer: Jones was the murderer.",
          "Explains the required reasoning and cases: The same innocent-witness contradictions eliminate Smith and Williams. With Jones guilty, innocent Smith and Williams can both be truthful, so Jones is determined."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: Jones was the murderer.",
      "Explains the required reasoning and cases: Smith guilty makes innocent Jones’s alibi conflict with innocent Williams’s sighting; Williams guilty makes innocent Smith’s friendship claim conflict with innocent Jones’s claim not to know Cooper. Jones guilty is the only consistent case.",
      "Gives a response equivalent to the authored model answer: Jones was the murderer.",
      "Explains the required reasoning and cases: The same innocent-witness contradictions eliminate Smith and Williams. With Jones guilty, innocent Smith and Williams can both be truthful, so Jones is determined."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-037",
    "mode": "rubric",
    "answer": "Yes. Fred is paid the most, Maggie is in the middle, and Janice is paid the least.",
    "checker": "rubric",
    "solution": "Suppose Fred were not highest. The first fact would make Janice highest. Janice would then not be lowest, so the second fact would make Maggie highest, contradicting Janice highest. Therefore Fred is highest. Janice cannot be highest now; if she were not lowest, Maggie would be highest, contradicting Fred. Hence Janice is lowest and Maggie is in the middle.",
    "hints": [
      "Assume Fred is not highest and derive two different highest-paid people.",
      "After proving Fred highest, apply the second fact to Janice."
    ],
    "readAloud": "Fred greater than Maggie greater than Janice compares salary from highest to lowest.",
    "startHere": "Use a contradiction argument on the antecedent “Fred is not highest.”",
    "verify": "Fred highest and Janice lowest make both conditional facts true, and the only remaining position for Maggie is middle.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Yes. Fred is paid the most, Maggie is in the middle, and Janice is paid the least.",
      "Explains the required reasoning and cases: Suppose Fred were not highest. The first fact would make Janice highest. Janice would then not be lowest, so the second fact would make Maggie highest, contradicting Janice highest. Therefore Fred is highest. Janice cannot be highest now; if she were not lowest, Maggie would be highest, contradicting Fred. Hence Janice is lowest and Maggie is in the middle."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-038",
    "mode": "rubric",
    "answer": "Yes. Kevin and Vijay are chatting; Heather, Randy, and Abby are not chatting.",
    "checker": "rubric",
    "solution": "Heather cannot be chatting: that would force Abby and Kevin, Abby would force Randy, and Kevin would force Vijay; then Randy and Vijay would both chat, violating their exclusive OR. Thus Heather is absent. Kevin or Heather forces Kevin, and Vijay ↔ Kevin forces Vijay. Exactly one of Randy or Vijay then forces Randy absent. Abby → Randy with Randy absent forces Abby absent. All five statuses are determined.",
    "hints": [
      "Start by supposing Heather chats and follow the implications to a contradiction.",
      "After Heather is eliminated, the remaining rules force Kevin and Vijay, then Randy and Abby."
    ],
    "readAloud": "Randy XOR Vijay means exactly one chats; Vijay biconditional Kevin means their chatting statuses match.",
    "startHere": "Test Heather = true and trace Heather → Abby ∧ Kevin, Abby → Randy, Kevin ↔ Vijay.",
    "verify": "Kevin and Vijay chatting, all others absent, satisfies Kevin∨Heather, Randy XOR Vijay, Abby→Randy, Vijay↔Kevin, and Heather→Abby∧Kevin.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: Yes. Kevin and Vijay are chatting; Heather, Randy, and Abby are not chatting.",
      "Explains the required reasoning and cases: Heather cannot be chatting: that would force Abby and Kevin, Abby would force Randy, and Kevin would force Vijay; then Randy and Vijay would both chat, violating their exclusive OR. Thus Heather is absent. Kevin or Heather forces Kevin, and Vijay ↔ Kevin forces Vijay. Exactly one of Randy or Vijay then forces Randy absent. Abby → Randy with Randy absent forces Abby absent. All five statuses are determined."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-039",
    "mode": "rubric",
    "answer": "The butler and cook are lying. The gardener and handyman cannot each be determined: at least one is telling the truth, and the possibilities are gardener truthful/handyman lying, gardener lying/handyman truthful, or both truthful.",
    "checker": "rubric",
    "solution": "Let B,C,G,H mean truthful. The facts are B→C, ¬(C∧G), G∨H, and H→¬C. Suppose C true. Then ¬(C∧G) makes G false, so G∨H makes H true, and H→¬C makes C false, a contradiction. Therefore C is false. B→C then forces B false. The remaining conditions reduce only to G∨H, giving (G,H) = (true,false), (false,true), or (true,true).",
    "hints": [
      "Assume the cook is truthful and derive a contradiction through gardener and handyman.",
      "Once C is false, use B→C; do not overinterpret G∨H as exclusive OR."
    ],
    "readAloud": "G or H is inclusive: at least one of gardener and handyman tells the truth, and both may do so.",
    "startHere": "Write the four formulas and test C = true.",
    "verify": "All three listed (G,H) pairs satisfy G∨H with B and C false; (false,false) is the only excluded pair.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: The butler and cook are lying. The gardener and handyman cannot each be determined: at least one is telling the truth, and the possibilities are gardener truthful/handyman lying, gardener lying/handyman truthful, or both truthful.",
      "Explains the required reasoning and cases: Let B,C,G,H mean truthful. The facts are B→C, ¬(C∧G), G∨H, and H→¬C. Suppose C true. Then ¬(C∧G) makes G false, so G∨H makes H true, and H→¬C makes C false, a contradiction. Therefore C is false. B→C then forces B false. The remaining conditions reduce only to G∨H, giving (G,H) = (true,false), (false,true), or (true,true)."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-040",
    "mode": "auto",
    "answer": "a) John did it. b) Carlos did it.",
    "solution": "Carlos says Diana did it, while Diana says Carlos lied, so exactly one of Carlos and Diana is truthful and the other lies. In (a), exactly one truth overall therefore forces Alice and John both to lie. John’s denial is false, so John did it; Diana is the sole truth-teller. In (b), exactly one lie overall means three truthful speakers. Since one of Carlos/Diana already lies, Alice and John must both tell the truth. Alice’s accusation is true, so Carlos did it, and John’s denial is also true.",
    "hints": [
      "First prove that exactly one of Carlos and Diana is truthful and the other lies.",
      "Then use the required total number of truthful speakers to fix Alice’s and John’s truth values."
    ],
    "startHere": "Let A,J,C,D name the culprits. The four statements have truth values C, ¬J, D, and ¬D.",
    "verify": "For (a), John guilty gives statement values false, false, false, true: exactly one truth. For (b), Carlos guilty gives true, true, false, true: exactly three truths and one lie.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "John did it.",
        "accepted": [
          "John",
          "John was responsible",
          "John accessed the system"
        ],
        "checker": "text",
        "solution": "Exactly one of Carlos/Diana is already truthful. To have exactly one truth overall, Alice and John must both lie. John’s “I did not do it” is therefore false, so John did it; Diana is the sole truth-teller.",
        "hints": [
          "The sole truth-teller must be Carlos or Diana, forcing John to lie."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Carlos did it.",
        "accepted": [
          "Carlos",
          "Carlos was responsible",
          "Carlos accessed the system"
        ],
        "checker": "text",
        "solution": "Exactly one of Carlos/Diana lies. To have exactly one lie overall, Alice and John must both tell the truth. Alice’s statement “Carlos did it” is therefore true, and John’s denial is also true.",
        "hints": [
          "Three people must be truthful, so Alice cannot be lying."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-041",
    "mode": "auto",
    "answer": "The lady is behind the second door; the tiger is behind the first.",
    "accepted": [
      "Door 2",
      "Second door",
      "Lady in room 2, tiger in room 1"
    ],
    "checker": "text",
    "solution": "If the first sign were true, room 1 would contain the lady and room 2 the tiger, which would also make the second sign’s “one lady and one tiger” claim true. That violates the requirement that exactly one sign be true. Therefore the first sign is false and the second true. The second sign guarantees one lady and one tiger, and the false first sign rules out lady-in-room-1/tiger-in-room-2, leaving tiger in room 1 and the lady in room 2.",
    "hints": [
      "Notice that a true first sign would automatically make the second sign true.",
      "Use exactly one true sign to decide which sign is false before locating the lady."
    ],
    "startHere": "Test the possibility that the first sign is the true one.",
    "verify": "Tiger first and lady second makes the detailed first sign false and the general second sign true, exactly one of each."
  },
  {
    "id": "rosen-ch1-ex-1-2-042",
    "mode": "rubric",
    "answer": "The Japanese man owns the zebra, and the Norwegian drinks mineral water.\nHouse 1: Norwegian, yellow, diplomat, fox, mineral water.\nHouse 2: Italian, blue, physician, horse, tea.\nHouse 3: Englishman, red, photographer, snails, milk.\nHouse 4: Spaniard, white, violinist, dog, orange juice.\nHouse 5: Japanese man, green, painter, zebra, coffee.",
    "solution": "Number houses 1–5 from left to right. Put the Norwegian in house 1 and blue in house 2; put milk in house 3. Since green is immediately right of white and green drinks coffee, the available color patterns reduce to white-green in houses 3–4 or 4–5. Test 3–4: yellow must be house 1 and red house 5, so house 2 is the horse. The drink and nationality clues then force orange juice/violinist in house 5, and assigning Spanish dog, Japanese painter, photographer/snails, and physician leads to photographer with the horse or dog rather than snails; eliminate this case. Therefore white-green is 4–5. House 1 is yellow (the Norwegian cannot be the Englishman in red), house 3 is red/English, house 1 is the diplomat, and house 2 has the horse. Propagating drinks, nationalities, jobs, and the fox-next-to-physician condition gives the five-row solution in the answer. Read the zebra and mineral-water entries from that table.",
    "hints": [
      "Use house numbers as the table index, not nationality as the primary ordering.",
      "The green/white adjacency plus coffee and milk leaves only two color placements; test each rather than guessing.",
      "Keep pet-owner and job attributes in separate columns so photographer/snails and physician/fox adjacency are easy to check."
    ],
    "startHere": "Create five house columns and rows for nationality, color, job, pet, and drink. Fill Norwegian=1, blue=2, and milk=3 first.",
    "verify": "Check every clue against the final table: red/English=3; Spanish/dog=4; Japanese/painter=5; Italian/tea=2; Norwegian=1; white=4 immediately before green=5; photographer/snails=3; diplomat/yellow=1; milk=3; coffee/green=5; blue=2 next to Norwegian=1; violinist/orange juice=4; fox=1 next to physician=2; horse=2 next to diplomat=1. All nationalities, jobs, pets, colors, and drinks are distinct.",
    "rubric": [
      "Identifies the Japanese man as the zebra owner and the Norwegian as the mineral-water drinker.",
      "Provides a complete, internally consistent five-house assignment or an equivalent derivation establishing those two facts.",
      "Uses the immediate/adjacent clues with correct left-right direction: green immediately right of white, and pets next to the specified jobs.",
      "Does not swap milk, coffee, tea, orange juice, and mineral water among houses.",
      "Verification covers all fourteen clues and the distinctness of each attribute category."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-043",
    "mode": "auto",
    "answer": "Yes: exactly 1 senator is honest and 49 are corrupt.",
    "accepted": [
      "1 honest, 49 corrupt",
      "One honest and forty-nine corrupt",
      "Honest = 1; corrupt = 49"
    ],
    "checker": "text",
    "solution": "At least one honest senator is given. If two or more were honest, choosing any two honest senators would give a pair with neither member corrupt, contradicting the rule that every pair contains at least one corrupt senator. Hence there cannot be more than one honest senator. Exactly one is honest, and the other 50 − 1 = 49 are corrupt.",
    "hints": [
      "The pairwise condition says there cannot be a pair of two honest senators.",
      "Combine the lower bound “at least one” with the upper bound “at most one.”"
    ],
    "startHere": "Suppose two senators are honest and apply the condition to that particular pair.",
    "verify": "With one honest senator, every pair has at most one honest member and therefore at least one corrupt member; the initial existence condition also holds."
  },
  {
    "id": "rosen-ch1-ex-1-2-044",
    "mode": "auto",
    "answer": "a) ¬p ∨ ¬q (equivalently ¬(p ∧ q)). b) ¬(p ∨ (¬p ∧ q)), equivalently ¬p ∧ ¬q.",
    "solution": "Read each gate from inputs to output. In (a), the inverters produce ¬p and ¬q and the OR gate combines them. In (b), the AND gate produces ¬p ∧ q; the OR combines that with p; the final inverter negates the entire OR. By absorption, p ∨ (¬p ∧ q) ≡ p ∨ q, so the output simplifies to ¬(p ∨ q) ≡ ¬p ∧ ¬q.",
    "hints": [
      "Label every intermediate wire before simplifying.",
      "A final inverter applies to the whole expression entering it, not just the last variable."
    ],
    "readAloud": "Part a is not p OR not q. Part b is the negation of p OR the quantity not p AND q.",
    "startHere": "For each diagram, write the inverter outputs first and then follow the arrows into the next gate.",
    "verify": "For (b), p ∨ (¬p ∧ q) is true exactly when p or q is true; after negation, the output is true only when both p and q are false.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "¬p ∨ ¬q",
        "accepted": [
          "not p or not q",
          "¬(p ∧ q)",
          "¬q ∨ ¬p",
          "not (p and q)"
        ],
        "checker": "logic",
        "solution": "The two inverters feed ¬p and ¬q into an OR gate, producing ¬p ∨ ¬q.",
        "hints": [
          "The final gate is OR, not AND."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "¬(p ∨ (¬p ∧ q))",
        "accepted": [
          "not (p or (not p and q))",
          "¬p ∧ ¬q",
          "¬(p ∨ q)",
          "not p and not q"
        ],
        "checker": "logic",
        "solution": "The gates produce ¬p ∧ q, then p ∨ (¬p ∧ q), then its negation. The simplified output is ¬p ∧ ¬q.",
        "hints": [
          "Include the outermost inversion; absorption gives an optional simplification."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-045",
    "mode": "auto",
    "answer": "a) ¬(p ∧ (q ∨ ¬r)), equivalently ¬p ∨ (¬q ∧ r). b) (¬p ∧ ¬q) ∨ (p ∧ r).",
    "solution": "In (a), the lower OR produces q ∨ ¬r, the AND combines it with p, and the output inverter gives ¬(p ∧ (q ∨ ¬r)). De Morgan’s laws yield ¬p ∨ ¬(q ∨ ¬r) ≡ ¬p ∨ (¬q ∧ r). In (b), the top AND gives ¬p ∧ ¬q and the bottom AND gives p ∧ r; the final OR combines them without any further inversion.",
    "hints": [
      "Distinguish the output inverter in (a) from the input inverters in (b).",
      "Parenthesize q ∨ ¬r before combining it with p using AND."
    ],
    "readAloud": "Part a negates the whole conjunction p AND the quantity q OR not r. Part b is the OR of two AND branches.",
    "startHere": "Label the output of every gate separately, then read the final gate from left to right.",
    "verify": "In (a), the uninverted AND is true only for p true and q∨¬r true, so its output is the complement; in (b), either branch being true makes the final OR true.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "¬(p ∧ (q ∨ ¬r))",
        "accepted": [
          "not (p and (q or not r))",
          "¬p ∨ (¬q ∧ r)",
          "¬p ∨ ¬(q ∨ ¬r)",
          "(¬p) ∨ ((¬q) ∧ r)"
        ],
        "checker": "logic",
        "solution": "The gate sequence is q ∨ ¬r, then p ∧ (q ∨ ¬r), then final negation.",
        "hints": [
          "The last triangle with a bubble negates the entire AND output."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "(¬p ∧ ¬q) ∨ (p ∧ r)",
        "accepted": [
          "(not p and not q) or (p and r)",
          "(p ∧ r) ∨ (¬p ∧ ¬q)",
          "((¬p) ∧ (¬q)) ∨ (p ∧ r)"
        ],
        "checker": "logic",
        "solution": "The upper branch computes ¬p ∧ ¬q, the lower computes p ∧ r, and the OR gate forms their disjunction.",
        "hints": [
          "There is no output inverter; stop after the final OR."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-046",
    "mode": "rubric",
    "answer": "Invert r to obtain ¬r and q to obtain ¬q. Feed p and ¬r into one AND gate, and ¬q and r into a second AND gate. Feed the two AND outputs into one OR gate. Output: (p ∧ ¬r) ∨ (¬q ∧ r).",
    "solution": "Build the two product terms independently: AND(p, NOT r) and AND(NOT q, r). Then take their OR. In netlist form: n1 = ¬r; n2 = ¬q; a1 = p ∧ n1; a2 = n2 ∧ r; out = a1 ∨ a2. This uses exactly the permitted gate types and preserves the input r both inverted for the first branch and uninverted for the second.",
    "hints": [
      "Read the expression as an OR of two AND terms.",
      "Only r in the first term and q in the second term are inverted; do not invert every input."
    ],
    "readAloud": "The output is p and not r, or not q and r. The outer OR waits for two completed AND branches.",
    "startHere": "Draw three input rails p, q, r and branch them so r can reach both an inverter and the lower AND gate.",
    "verify": "Trace four revealing inputs: p=1,r=0 makes the first branch true; q=0,r=1 makes the second true; p=0,q=1 makes both false regardless of r; each term otherwise matches the original expression.",
    "rubric": [
      "Uses an inverter on r for the p ∧ ¬r branch and an inverter on q for the ¬q ∧ r branch.",
      "One AND gate has exactly p and ¬r as inputs.",
      "A second AND gate has exactly ¬q and r as inputs.",
      "A final OR gate combines the two AND outputs without an extra inversion.",
      "The constructed circuit uses only inputs p,q,r and permitted inverters, AND gates, and OR gates."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-2-047",
    "mode": "rubric",
    "answer": "Construct NOT p, NOT q, and NOT r. Form x = ¬p ∨ ¬r with an OR gate; form y = x ∧ ¬q with an AND gate. Form z = q ∨ r with an OR gate; form w = ¬p ∧ z with an AND gate, reusing the ¬p signal. The final output is y ∨ w through an OR gate: ((¬p ∨ ¬r) ∧ ¬q) ∨ (¬p ∧ (q ∨ r)).",
    "solution": "A gate-by-gate netlist is: n1=¬p; n2=¬q; n3=¬r; o1=n1∨n3; a1=o1∧n2; o2=q∨r; a2=n1∧o2; out=a1∨a2. The first AND branch implements (¬p∨¬r)∧¬q and the second implements ¬p∧(q∨r). Sharing n1 between o1 and a2 is valid fan-out and avoids needless duplication.",
    "hints": [
      "Build the two inner OR expressions before their respective AND gates.",
      "The outermost operation is OR between the two large parenthesized branches.",
      "You may reuse ¬p in both branches; fan-out does not change its value."
    ],
    "readAloud": "First branch: not p OR not r, then AND not q. Second branch: not p AND the quantity q OR r. Finally OR the branches.",
    "startHere": "Write seven wire labels n1,n2,n3,o1,a1,o2,a2,out and implement the expression from the innermost parentheses outward.",
    "verify": "Substitute the wire definitions backward: a1=((¬p∨¬r)∧¬q), a2=(¬p∧(q∨r)), and out=a1∨a2, exactly the required formula. Spot-check p=q=r=0: both branches are true, so output is true; p=q=r=1: both are false, so output is false.",
    "rubric": [
      "Produces ¬p, ¬q, and ¬r and uses them on the correct branches.",
      "Computes ¬p ∨ ¬r before ANDing that result with ¬q.",
      "Computes q ∨ r before ANDing that result with ¬p.",
      "Combines the two completed branches with a final OR gate and no extra inversion.",
      "Uses only the specified gate types and preserves all three input variables with correct fan-out and grouping."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-001",
    "mode": "rubric",
    "answer": "All six equivalences hold: p∧T≡p, p∨F≡p, p∧F≡F, p∨T≡T, p∨p≡p, and p∧p≡p.",
    "solution": "Read ∧ as ‘and’, ∨ as ‘or’, T as always true, and F as always false. For each part, substitute p=T and p=F. The two sides give, respectively, (T,T), (F,F), (F,F), (T,T), (T,T), and (T,T) in the two rows, so each pair of columns agrees.",
    "hints": [
      "Only two rows are needed because p is the sole variable.",
      "Evaluate both sides separately for p=T and p=F."
    ],
    "accepted": [
      "All six are logically equivalent.",
      "All six hold.",
      "All six verified."
    ],
    "checker": "text",
    "readAloud": "The symbols T and F are constant true and constant false. Check each claimed equivalence in both possible cases for p.",
    "verify": "Make a two-row table for each part and compare the two relevant columns entry by entry.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "p∧T≡p",
        "checker": "rubric",
        "solution": "For p=T, both sides are T; for p=F, both sides are F.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∧T≡p",
          "Explains the required reasoning and cases: For p=T, both sides are T; for p=F, both sides are F."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p∨F≡p",
        "checker": "rubric",
        "solution": "For p=T, both sides are T; for p=F, both sides are F.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∨F≡p",
          "Explains the required reasoning and cases: For p=T, both sides are T; for p=F, both sides are F."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "p∧F≡F",
        "checker": "rubric",
        "solution": "A conjunction with F is F in both rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∧F≡F",
          "Explains the required reasoning and cases: A conjunction with F is F in both rows."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "p∨T≡T",
        "checker": "rubric",
        "solution": "A disjunction with T is T in both rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∨T≡T",
          "Explains the required reasoning and cases: A disjunction with T is T in both rows."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "p∨p≡p",
        "checker": "rubric",
        "solution": "The rows give T∨T=T and F∨F=F.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∨p≡p",
          "Explains the required reasoning and cases: The rows give T∨T=T and F∨F=F."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "p∧p≡p",
        "checker": "rubric",
        "solution": "The rows give T∧T=T and F∧F=F.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∧p≡p",
          "Explains the required reasoning and cases: The rows give T∧T=T and F∧F=F."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∧T≡p",
      "Explains the required reasoning and cases: For p=T, both sides are T; for p=F, both sides are F.",
      "Gives a response equivalent to the authored model answer: p∨F≡p",
      "Explains the required reasoning and cases: For p=T, both sides are T; for p=F, both sides are F.",
      "Gives a response equivalent to the authored model answer: p∧F≡F",
      "Explains the required reasoning and cases: A conjunction with F is F in both rows.",
      "Gives a response equivalent to the authored model answer: p∨T≡T",
      "Explains the required reasoning and cases: A disjunction with T is T in both rows.",
      "Gives a response equivalent to the authored model answer: p∨p≡p",
      "Explains the required reasoning and cases: The rows give T∨T=T and F∨F=F.",
      "Gives a response equivalent to the authored model answer: p∧p≡p",
      "Explains the required reasoning and cases: The rows give T∧T=T and F∧F=F."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-002",
    "mode": "rubric",
    "answer": "¬(¬p)≡p.",
    "solution": "Negation reverses the truth value. If p=T, then ¬p=F and ¬(¬p)=T; if p=F, then ¬p=T and ¬(¬p)=F. The final value always equals p.",
    "hints": [
      "Apply negation twice, starting from the inside."
    ],
    "checker": "rubric",
    "readAloud": "The negation of the negation of p has the same truth value as p.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬(¬p)≡p.",
      "Explains the required reasoning and cases: Negation reverses the truth value. If p=T, then ¬p=F and ¬(¬p)=T; if p=F, then ¬p=T and ¬(¬p)=F. The final value always equals p."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-003",
    "mode": "rubric",
    "answer": "Both commutative laws hold: p∨q≡q∨p and p∧q≡q∧p.",
    "solution": "Use rows (p,q)=(T,T),(T,F),(F,T),(F,F). For part (a), both columns are T,F,T,T; for part (b), both are T,F,F,F. Thus changing operand order changes no truth value.",
    "hints": [
      "List all four truth assignments to p and q.",
      "Compare columns rather than relying on the visual order of the operands."
    ],
    "accepted": [
      "Both commutative laws are verified.",
      "Both equivalences hold."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "p∨q≡q∨p",
        "checker": "rubric",
        "solution": "Both disjunction columns are T,F,T,T in the standard four rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∨q≡q∨p",
          "Explains the required reasoning and cases: Both disjunction columns are T,F,T,T in the standard four rows."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p∧q≡q∧p",
        "checker": "rubric",
        "solution": "Both conjunction columns are T,F,F,F in the standard four rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∧q≡q∧p",
          "Explains the required reasoning and cases: Both conjunction columns are T,F,F,F in the standard four rows."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∨q≡q∨p",
      "Explains the required reasoning and cases: Both disjunction columns are T,F,T,T in the standard four rows.",
      "Gives a response equivalent to the authored model answer: p∧q≡q∧p",
      "Explains the required reasoning and cases: Both conjunction columns are T,F,F,F in the standard four rows."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-004",
    "mode": "rubric",
    "answer": "Both associative laws hold: (p∨q)∨r≡p∨(q∨r) and (p∧q)∧r≡p∧(q∧r).",
    "solution": "Construct the eight rows for p,q,r. Each side of (a) is false exactly in the FFF row, and each side of (b) is true exactly in the TTT row. All other corresponding entries agree.",
    "hints": [
      "Eight rows cover all assignments to three variables.",
      "A disjunction needs only one true input; a conjunction is true only when every input is true."
    ],
    "accepted": [
      "Both associative laws are verified.",
      "Both equivalences hold."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(p∨q)∨r≡p∨(q∨r)",
        "checker": "rubric",
        "solution": "Both sides are F only when p=q=r=F and T in the other seven rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (p∨q)∨r≡p∨(q∨r)",
          "Explains the required reasoning and cases: Both sides are F only when p=q=r=F and T in the other seven rows."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(p∧q)∧r≡p∧(q∧r)",
        "checker": "rubric",
        "solution": "Both sides are T only when p=q=r=T and F in the other seven rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (p∧q)∧r≡p∧(q∧r)",
          "Explains the required reasoning and cases: Both sides are T only when p=q=r=T and F in the other seven rows."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p∨q)∨r≡p∨(q∨r)",
      "Explains the required reasoning and cases: Both sides are F only when p=q=r=F and T in the other seven rows.",
      "Gives a response equivalent to the authored model answer: (p∧q)∧r≡p∧(q∧r)",
      "Explains the required reasoning and cases: Both sides are T only when p=q=r=T and F in the other seven rows."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-005",
    "mode": "rubric",
    "answer": "p∧(q∨r)≡(p∧q)∨(p∧r).",
    "solution": "In the eight-row table ordered TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF, both sides have truth values T,T,T,F,F,F,F,F. The left side requires p and at least one of q,r; the right side requires at least one of the conjunctions p∧q or p∧r, which is the same condition.",
    "hints": [
      "The left side can be true only when p=T.",
      "With p=T, compare q∨r with the two conjunctions."
    ],
    "checker": "rubric",
    "verify": "The shared output column is T,T,T,F,F,F,F,F in standard row order.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∧(q∨r)≡(p∧q)∨(p∧r).",
      "Explains the required reasoning and cases: In the eight-row table ordered TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF, both sides have truth values T,T,T,F,F,F,F,F. The left side requires p and at least one of q,r; the right side requires at least one of the conjunctions p∧q or p∧r, which is the same condition."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-006",
    "mode": "rubric",
    "answer": "¬(p∧q)≡¬p∨¬q.",
    "solution": "For rows TT,TF,FT,FF, p∧q is T,F,F,F, so its negation is F,T,T,T. The column for ¬p∨¬q is also F,T,T,T. Thus ‘not both’ means that at least one operand is false.",
    "hints": [
      "Negate the whole conjunction, not just one variable.",
      "The left side is false only in the TT row."
    ],
    "checker": "rubric",
    "readAloud": "Not (p and q) is equivalent to (not p) or (not q).",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬(p∧q)≡¬p∨¬q.",
      "Explains the required reasoning and cases: For rows TT,TF,FT,FF, p∧q is T,F,F,F, so its negation is F,T,T,T. The column for ¬p∨¬q is also F,T,T,T. Thus ‘not both’ means that at least one operand is false."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-007",
    "mode": "rubric",
    "answer": "a) Jan is not rich or Jan is not happy. b) Carlos will not bicycle tomorrow and will not run tomorrow. c) Mei does not walk to class and does not take the bus to class. d) Ibrahim is not smart or is not hard working.",
    "solution": "Use ¬(A∧B)≡¬A∨¬B for (a) and (d), and ¬(A∨B)≡¬A∧¬B for (b) and (c). In words, negating ‘and’ produces ‘or’ between the negated claims; negating ‘or’ produces ‘and’.",
    "hints": [
      "First mark whether the original joins the two claims with AND or OR.",
      "Negate both component claims and change the connective using De Morgan’s law."
    ],
    "checker": "rubric",
    "rubric": [
      "Each part negates both component propositions.",
      "AND is changed to OR and OR to AND as required; no original connective is left unchanged.",
      "The English statements preserve the people, actions, and time reference from the prompt."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Jan is not rich or Jan is not happy.",
        "checker": "rubric",
        "solution": "The original is R∧H, so its negation is ¬R∨¬H.",
        "rubric": [
          "States that Jan is not rich or not happy, using inclusive OR."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Carlos will not bicycle tomorrow and will not run tomorrow.",
        "checker": "rubric",
        "solution": "The original is B∨R, so its negation is ¬B∧¬R.",
        "rubric": [
          "Denies both bicycling and running tomorrow and joins the denials with AND."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Mei does not walk to class and does not take the bus to class.",
        "checker": "rubric",
        "solution": "The original is W∨B, so its negation is ¬W∧¬B.",
        "rubric": [
          "Denies both ways of getting to class and joins the denials with AND."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Ibrahim is not smart or is not hard working.",
        "checker": "rubric",
        "solution": "The original is S∧H, so its negation is ¬S∨¬H.",
        "rubric": [
          "States that at least one of smart and hard working is false, using OR."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-008",
    "mode": "rubric",
    "answer": "a) Kwame will not take a job in industry and will not go to graduate school. b) Yoshiko does not know Java or does not know calculus. c) James is not young or is not strong. d) Rita will move neither to Oregon nor to Washington (equivalently, she will not move to Oregon and will not move to Washington).",
    "solution": "For (a) and (d), negate A∨B to obtain ¬A∧¬B. For (b) and (c), negate A∧B to obtain ¬A∨¬B. The negation of a disjunction requires both alternatives to fail; the negation of a conjunction requires only at least one component to fail.",
    "hints": [
      "Identify the main connective before negating the individual claims.",
      "For (d), ‘neither … nor …’ means both destinations are excluded."
    ],
    "checker": "rubric",
    "rubric": [
      "Every component proposition is negated.",
      "The connective is switched according to De Morgan’s laws in every part.",
      "The wording preserves both alternatives in each original statement."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Kwame will not take a job in industry and will not go to graduate school.",
        "checker": "rubric",
        "solution": "¬(I∨G)≡¬I∧¬G.",
        "rubric": [
          "Excludes both the industry job and graduate school, using AND or an equivalent neither/nor construction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Yoshiko does not know Java or does not know calculus.",
        "checker": "rubric",
        "solution": "¬(J∧C)≡¬J∨¬C.",
        "rubric": [
          "Says that Yoshiko lacks knowledge of at least one of Java and calculus, using OR."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "James is not young or is not strong.",
        "checker": "rubric",
        "solution": "¬(Y∧S)≡¬Y∨¬S.",
        "rubric": [
          "Says that at least one of young and strong is false, using OR."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Rita will move neither to Oregon nor to Washington.",
        "checker": "rubric",
        "solution": "¬(O∨W)≡¬O∧¬W.",
        "rubric": [
          "Excludes Oregon and Washington simultaneously; does not merely say she will not move to one of them."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-009",
    "mode": "auto",
    "answer": "a) ¬p∨¬q. b) (p∧¬q)∨r. c) ¬p∨¬q.",
    "solution": "Use A→B≡¬A∨B. For (a), substitute B=¬q. For (b), ¬(p→q)∨r≡¬(¬p∨q)∨r≡(p∧¬q)∨r. For (c), the result before simplification is ¬(q∨p)∨(¬p∨¬q), which simplifies to (¬p∧¬q)∨¬p∨¬q≡¬p∨¬q by absorption.",
    "hints": [
      "Replace every A→B by ¬A∨B, including conditionals nested inside other conditionals.",
      "De Morgan’s laws and absorption can simplify the resulting conditional-free expression."
    ],
    "accepted": [
      "a) ¬p∨¬q; b) (p∧¬q)∨r; c) ¬p∨¬q",
      "a) ¬p∨¬q; b) ¬(¬p∨q)∨r; c) ¬(p∨q)∨¬p∨¬q"
    ],
    "checker": "text",
    "startHere": "Write A→B≡¬A∨B and identify A and B at the outermost conditional first.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "¬p∨¬q",
        "accepted": [
          "¬q∨¬p",
          "¬(p∧q)"
        ],
        "checker": "logic",
        "solution": "p→¬q≡¬p∨¬q."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "(p∧¬q)∨r",
        "accepted": [
          "r∨(p∧¬q)",
          "¬(¬p∨q)∨r"
        ],
        "checker": "logic",
        "solution": "(p→q)→r≡¬(¬p∨q)∨r≡(p∧¬q)∨r."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "¬p∨¬q",
        "accepted": [
          "¬q∨¬p",
          "¬(p∧q)",
          "¬(p∨q)∨(¬p∨¬q)"
        ],
        "checker": "logic",
        "solution": "Eliminating both inner conditionals and the outer conditional gives ¬(p∨q)∨(¬p∨¬q), which absorbs to ¬p∨¬q."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-010",
    "mode": "auto",
    "answer": "a) p∨¬q. b) ¬p. c) p∨q.",
    "solution": "Using A→B≡¬A∨B gives (a) ¬(¬p)∨¬q≡p∨¬q. For (b), ¬(p∨q)∨¬p≡(¬p∧¬q)∨¬p≡¬p. For (c), ¬(¬p∨¬q)∨(p∨q)≡(p∧q)∨p∨q≡p∨q by absorption.",
    "hints": [
      "Negating ¬p produces p.",
      "After removing conditionals, use De Morgan’s laws and absorption to simplify."
    ],
    "accepted": [
      "a) p∨¬q; b) ¬p; c) p∨q",
      "a) p∨¬q; b) ¬(p∨q)∨¬p; c) ¬(¬p∨¬q)∨(p∨q)"
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "p∨¬q",
        "accepted": [
          "¬q∨p",
          "¬(¬p∧q)"
        ],
        "checker": "logic",
        "solution": "¬p→¬q≡¬(¬p)∨¬q≡p∨¬q."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "¬p",
        "accepted": [
          "¬(p∨q)∨¬p",
          "(¬p∧¬q)∨¬p"
        ],
        "checker": "logic",
        "solution": "(p∨q)→¬p≡¬(p∨q)∨¬p≡¬p by De Morgan and absorption."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "p∨q",
        "accepted": [
          "q∨p",
          "(p∧q)∨(p∨q)",
          "¬(¬p∨¬q)∨(p∨q)"
        ],
        "checker": "logic",
        "solution": "Removing conditionals yields ¬(¬p∨¬q)∨(p∨q), equivalent to (p∧q)∨p∨q and then to p∨q."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-011",
    "mode": "auto",
    "answer": "All six conditional statements are tautologies; every final truth-table column contains only T.",
    "solution": "Evaluate each final column over all assignments. (a) p∧q cannot be true unless p is true. (b) If p is true, p∨q is true. (c) If ¬p is true, p is false and p→q is true. (d) If p∧q is true, q is true, so p→q is true. (e),(f) If ¬(p→q) is true, then p→q is false, which forces p=T and q=F; hence p and ¬q are true. These case checks agree with the all-T final columns.",
    "hints": [
      "A conditional is false only when its hypothesis is T and conclusion is F.",
      "For (e) and (f), the only way to falsify p→q is p=T,q=F."
    ],
    "accepted": [
      "All six are tautologies.",
      "Every statement in Exercise 11 is a tautology.",
      "All final columns are all T."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; p∧q is true only in the TT row, where p is true."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; whenever p=T, p∨q=T."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; when ¬p=T, p=F and therefore p→q=T."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; p∧q=T makes q=T and hence p→q=T."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; the hypothesis is true only for p=T,q=F, where the conclusion p is true."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "Final column T,T,T,T"
        ],
        "checker": "text",
        "solution": "The final column is T,T,T,T; the hypothesis is true only for p=T,q=F, where ¬q is true."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-012",
    "mode": "auto",
    "answer": "All four conditional statements are tautologies; every final truth-table column contains only T.",
    "solution": "For (a), ¬p and p∨q together force q. For (b), p→q and q→r force p→r. For (c), p and p→q force q. For (d), if p∨q holds, at least one of p,q holds; the corresponding conditional then forces r. Exhaustive tables over the relevant variables therefore have all-T final columns.",
    "hints": [
      "In each part, assume the entire hypothesis is true and trace what it forces.",
      "Part (d) can be checked in two cases: p true or q true."
    ],
    "accepted": [
      "All four are tautologies.",
      "Every statement in Exercise 12 is a tautology.",
      "All final columns are all T."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "All final entries T"
        ],
        "checker": "text",
        "solution": "The final column is all T: ¬p makes p false, so p∨q can be true only when q is true."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "All final entries T"
        ],
        "checker": "text",
        "solution": "The eight-row final column is all T: if p is true, the two conditional premises force q and then r."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "All final entries T"
        ],
        "checker": "text",
        "solution": "The final column is all T: p and p→q together force q."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Tautology",
        "accepted": [
          "T",
          "True",
          "All final entries T"
        ],
        "checker": "text",
        "solution": "The eight-row final column is all T: p∨q gives a true disjunct, and its conditional premise gives r."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-013",
    "mode": "rubric",
    "answer": "Every conditional in Exercise 11 is a tautology because its hypothesis cannot be true while its conclusion is false.",
    "solution": "(a) If p∧q=T, then p=T. (b) If p=T, then p∨q=T. (c) If ¬p=T, then p=F, so p→q=T. (d) If p∧q=T, then q=T and p→q=T. (e) If ¬(p→q)=T, then p→q=F, so p=T. (f) Under the same hypothesis, p→q=F forces q=F, hence ¬q=T. No truth tables are needed.",
    "hints": [
      "Suppose the hypothesis is T and show that the conclusion must also be T.",
      "For (e) and (f), use the unique falsifying assignment of an inner conditional."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses the T-hypothesis/F-conclusion criterion rather than constructing truth tables.",
      "Gives a valid hypothesis-to-conclusion argument for every part (a)–(f).",
      "Correctly derives p=T,q=F from ¬(p→q)=T in parts (e) and (f)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(p∧q)→p is a tautology.",
        "checker": "rubric",
        "solution": "A true hypothesis p∧q makes p true, so the conclusion cannot be false.",
        "rubric": [
          "Explains that p∧q=T forces p=T."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p→(p∨q) is a tautology.",
        "checker": "rubric",
        "solution": "If p=T, the disjunction p∨q is true.",
        "rubric": [
          "Explains that a true p makes the conclusion true."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬p→(p→q) is a tautology.",
        "checker": "rubric",
        "solution": "If ¬p=T, then p=F; a conditional with false hypothesis p is true.",
        "rubric": [
          "Uses ¬p=T to infer p=F and then p→q=T."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(p∧q)→(p→q) is a tautology.",
        "checker": "rubric",
        "solution": "If p∧q=T, then q=T, so p→q=T regardless of p.",
        "rubric": [
          "Derives q=T from the hypothesis and uses it to establish p→q=T."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "¬(p→q)→p is a tautology.",
        "checker": "rubric",
        "solution": "The hypothesis says p→q is false; this is possible only with p=T,q=F, so p=T.",
        "rubric": [
          "Identifies p=T,q=F as the only falsifying case of p→q."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬(p→q)→¬q is a tautology.",
        "checker": "rubric",
        "solution": "The hypothesis forces p=T,q=F; therefore ¬q=T.",
        "rubric": [
          "Uses q=F in the unique falsifying case of p→q to conclude ¬q=T."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-014",
    "mode": "rubric",
    "answer": "Every conditional in Exercise 12 is a tautology because a true hypothesis forces a true conclusion.",
    "solution": "(a) ¬p gives p=F; then p∨q=T forces q=T. (b) If the hypothesis is T and p=T, then q=T by p→q and r=T by q→r; if p=F, p→r=T. (c) p=T and p→q=T force q=T. (d) p∨q=T gives p=T or q=T; in either case the corresponding conditional premise gives r=T. Hence no part has a true hypothesis and false conclusion.",
    "hints": [
      "Assume all conjuncts in the hypothesis are true simultaneously.",
      "For (b), split on p; for (d), split on which disjunct in p∨q is true."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses direct hypothesis/conclusion reasoning rather than truth tables.",
      "Covers all four parts and all necessary cases.",
      "Correctly uses the conditional premises to derive the required conclusion."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[¬p∧(p∨q)]→q is a tautology.",
        "checker": "rubric",
        "solution": "A true hypothesis gives p=F and p∨q=T, which together force q=T.",
        "rubric": [
          "Combines ¬p with p∨q to derive q."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[(p→q)∧(q→r)]→(p→r) is a tautology.",
        "checker": "rubric",
        "solution": "Assume both premises. If p=T, they yield q=T and then r=T; if p=F, p→r is automatically true.",
        "rubric": [
          "Handles both truth values of p and uses transitivity when p=T."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[p∧(p→q)]→q is a tautology.",
        "checker": "rubric",
        "solution": "A true hypothesis supplies both p=T and p→q=T, forcing q=T.",
        "rubric": [
          "Applies modus ponens to the two conjuncts."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "[(p∨q)∧(p→r)∧(q→r)]→r is a tautology.",
        "checker": "rubric",
        "solution": "At least one of p,q is true under the hypothesis; either p→r or q→r then forces r=T.",
        "rubric": [
          "Uses proof by cases over p∨q and derives r in each case."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-015",
    "mode": "rubric",
    "answer": "All six formulas reduce to T by logical identities.",
    "solution": "Use A→B≡¬A∨B, De Morgan, commutativity, and negation laws. (a) ¬(p∧q)∨p≡¬p∨¬q∨p≡T. (b) ¬p∨(p∨q)≡T. (c) p∨(¬p∨q)≡T. (d) ¬(p∧q)∨(¬p∨q)≡¬p∨¬q∨¬p∨q≡T. (e) (p→q)∨p≡¬p∨q∨p≡T. (f) (p→q)∨¬q≡¬p∨q∨¬q≡T.",
    "hints": [
      "Eliminate every conditional with A→B≡¬A∨B.",
      "Reassociate and commute terms to expose X∨¬X, which is T."
    ],
    "checker": "rubric",
    "rubric": [
      "Presents chains of named logical identities rather than truth tables.",
      "Eliminates conditionals correctly, including the outer negations in (e) and (f).",
      "Reduces every part to T using valid negation and identity laws."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(p∧q)→p≡T.",
        "checker": "rubric",
        "solution": "(p∧q)→p≡¬(p∧q)∨p≡¬p∨¬q∨p≡T∨¬q≡T.",
        "rubric": [
          "Shows a valid identity chain ending in T."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p→(p∨q)≡T.",
        "checker": "rubric",
        "solution": "p→(p∨q)≡¬p∨p∨q≡T∨q≡T.",
        "rubric": [
          "Shows a valid identity chain ending in T."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬p→(p→q)≡T.",
        "checker": "rubric",
        "solution": "¬p→(p→q)≡p∨(¬p∨q)≡(p∨¬p)∨q≡T.",
        "rubric": [
          "Handles both conditionals and derives T."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(p∧q)→(p→q)≡T.",
        "checker": "rubric",
        "solution": "The formula is ¬(p∧q)∨¬p∨q≡¬p∨¬q∨¬p∨q≡T.",
        "rubric": [
          "Uses De Morgan and q∨¬q to derive T."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "¬(p→q)→p≡T.",
        "checker": "rubric",
        "solution": "¬(p→q)→p≡(p→q)∨p≡¬p∨q∨p≡T.",
        "rubric": [
          "Correctly removes the double negation around p→q and derives T."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬(p→q)→¬q≡T.",
        "checker": "rubric",
        "solution": "¬(p→q)→¬q≡(p→q)∨¬q≡¬p∨q∨¬q≡T.",
        "rubric": [
          "Correctly removes the outer conditional and derives T using q∨¬q."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-016",
    "mode": "rubric",
    "answer": "All four formulas reduce to T by logical identities.",
    "solution": "(a) ¬p∧(p∨q)≡¬p∧q, so the formula becomes (¬p∧q)→q≡p∨¬q∨q≡T. (b) After eliminating conditionals, the negated hypothesis and conclusion give (p∧¬q)∨(q∧¬r)∨¬p∨r. Combining (p∧¬q)∨¬p≡¬p∨¬q and (q∧¬r)∨r≡q∨r yields ¬p∨¬q∨q∨r≡T. (c) p∧(p→q)≡p∧q, hence the formula is ¬(p∧q)∨q≡T. (d) The hypothesis is equivalent to r∧(p∨q); thus the conditional is ¬[r∧(p∨q)]∨r≡¬r∨¬(p∨q)∨r≡T.",
    "hints": [
      "Simplify a hypothesis before negating it when possible.",
      "Useful simplifications are ¬p∧(p∨q)≡¬p∧q and p∧(¬p∨q)≡p∧q."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses logical identities, not truth tables, throughout.",
      "Correctly simplifies each hypothesis and eliminates every conditional.",
      "Supplies a valid chain to T for all four parts, including the case-free simplification in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[¬p∧(p∨q)]→q≡T.",
        "checker": "rubric",
        "solution": "¬p∧(p∨q)≡(¬p∧p)∨(¬p∧q)≡¬p∧q. Then (¬p∧q)→q≡p∨¬q∨q≡T.",
        "rubric": [
          "Derives ¬p∧q and then reduces the conditional to T."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[(p→q)∧(q→r)]→(p→r)≡T.",
        "checker": "rubric",
        "solution": "The formula expands to (p∧¬q)∨(q∧¬r)∨¬p∨r, which is equivalent to ¬p∨¬q∨q∨r and hence T.",
        "rubric": [
          "Shows the expansion and a valid simplification exposing q∨¬q."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[p∧(p→q)]→q≡T.",
        "checker": "rubric",
        "solution": "p∧(¬p∨q)≡p∧q; therefore the whole formula is ¬(p∧q)∨q≡¬p∨¬q∨q≡T.",
        "rubric": [
          "Simplifies the hypothesis to p∧q and derives T."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "[(p∨q)∧(p→r)∧(q→r)]→r≡T.",
        "checker": "rubric",
        "solution": "The hypothesis simplifies to r∧(p∨q). The formula is then ¬[r∧(p∨q)]∨r≡¬r∨¬(p∨q)∨r≡T.",
        "rubric": [
          "Justifies the hypothesis simplification and reduces the resulting conditional to T."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-017",
    "mode": "rubric",
    "answer": "Both absorption laws hold: p∨(p∧q)≡p and p∧(p∨q)≡p.",
    "solution": "In rows TT,TF,FT,FF, part (a) gives p∧q=T,F,F,F and then p∨(p∧q)=T,T,F,F, identical to p. Part (b) gives p∨q=T,T,T,F and then p∧(p∨q)=T,T,F,F, also identical to p.",
    "hints": [
      "The right-hand column in each part is simply the column for p.",
      "Use the four rows TT,TF,FT,FF."
    ],
    "accepted": [
      "Both absorption laws are verified.",
      "Both equivalences hold."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "p∨(p∧q)≡p",
        "checker": "rubric",
        "solution": "The output column T,T,F,F equals p in all four rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∨(p∧q)≡p",
          "Explains the required reasoning and cases: The output column T,T,F,F equals p in all four rows."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p∧(p∨q)≡p",
        "checker": "rubric",
        "solution": "The output column T,T,F,F equals p in all four rows.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p∧(p∨q)≡p",
          "Explains the required reasoning and cases: The output column T,T,F,F equals p in all four rows."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∨(p∧q)≡p",
      "Explains the required reasoning and cases: The output column T,T,F,F equals p in all four rows.",
      "Gives a response equivalent to the authored model answer: p∧(p∨q)≡p",
      "Explains the required reasoning and cases: The output column T,T,F,F equals p in all four rows."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-018",
    "mode": "rubric",
    "answer": "No. It is not a tautology; p=F,q=T is a counterexample.",
    "solution": "With p=F and q=T, ¬p=T and p→q=T, so the hypothesis ¬p∧(p→q) is true. But ¬q=F, making the outer conditional T→F, which is F.",
    "hints": [
      "Try to make the outer conditional false: its hypothesis must be T and ¬q must be F.",
      "Set q=T, then choose p to make both hypothesis conjuncts true."
    ],
    "checker": "rubric",
    "startHere": "To falsify A→B, require A=T and B=F; here B=¬q, so start with q=T.",
    "verify": "Substitute p=F,q=T into the original expression and obtain T→F=F.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: No. It is not a tautology; p=F,q=T is a counterexample.",
      "Explains the required reasoning and cases: With p=F and q=T, ¬p=T and p→q=T, so the hypothesis ¬p∧(p→q) is true. But ¬q=F, making the outer conditional T→F, which is F."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-019",
    "mode": "auto",
    "answer": "Tautology",
    "solution": "Suppose the hypothesis is true. Then q=F and p→q=T. If p were T, the conditional would give q=T, a contradiction; therefore p=F and ¬p=T. Thus the outer conditional cannot have a true hypothesis and false conclusion.",
    "hints": [
      "Assume ¬q and p→q are both true.",
      "Test what happens if p were true."
    ],
    "accepted": [
      "Yes",
      "Tautology",
      "It is a tautology",
      "True"
    ],
    "checker": "text",
    "verify": "This is modus tollens: ¬q and p→q jointly imply ¬p."
  },
  {
    "id": "rosen-ch1-ex-1-3-020",
    "mode": "rubric",
    "answer": "p↔q≡(p∧q)∨(¬p∧¬q).",
    "solution": "The biconditional is true exactly when p and q have the same truth value: TT or FF. The conjunction p∧q covers TT, while ¬p∧¬q covers FF; their disjunction covers exactly those same two rows.",
    "hints": [
      "List the rows in which p↔q is true.",
      "Describe TT and FF with separate conjunctions."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p↔q≡(p∧q)∨(¬p∧¬q).",
      "Explains the required reasoning and cases: The biconditional is true exactly when p and q have the same truth value: TT or FF. The conjunction p∧q covers TT, while ¬p∧¬q covers FF; their disjunction covers exactly those same two rows."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-021",
    "mode": "rubric",
    "answer": "¬(p↔q)≡p↔¬q.",
    "solution": "¬(p↔q) is true exactly when p and q differ. Also, p↔¬q is true when p and ¬q agree, which again means p and q differ. Both sides are true in precisely rows TF and FT.",
    "hints": [
      "Negating a biconditional selects the rows where the inputs differ.",
      "Compare p with ¬q, not with q."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬(p↔q)≡p↔¬q.",
      "Explains the required reasoning and cases: ¬(p↔q) is true exactly when p and q differ. Also, p↔¬q is true when p and ¬q agree, which again means p and q differ. Both sides are true in precisely rows TF and FT."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-022",
    "mode": "rubric",
    "answer": "p→q≡¬q→¬p.",
    "solution": "Eliminating conditionals gives p→q≡¬p∨q and ¬q→¬p≡q∨¬p. These are identical up to commutativity. Equivalently, each is false only in the row p=T,q=F.",
    "hints": [
      "Rewrite both conditionals as disjunctions.",
      "This is the contrapositive equivalence."
    ],
    "checker": "rubric",
    "readAloud": "If p then q is equivalent to if not q then not p.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p→q≡¬q→¬p.",
      "Explains the required reasoning and cases: Eliminating conditionals gives p→q≡¬p∨q and ¬q→¬p≡q∨¬p. These are identical up to commutativity. Equivalently, each is false only in the row p=T,q=F."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-023",
    "mode": "rubric",
    "answer": "¬p↔q≡p↔¬q.",
    "solution": "The left side is true when ¬p and q agree, namely when p and q differ. The right side is true when p and ¬q agree, also exactly when p and q differ. Both have true rows TF and FT.",
    "hints": [
      "Evaluate what equality with a negated variable says about the original p and q."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬p↔q≡p↔¬q.",
      "Explains the required reasoning and cases: The left side is true when ¬p and q agree, namely when p and q differ. The right side is true when p and ¬q agree, also exactly when p and q differ. Both have true rows TF and FT."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-024",
    "mode": "rubric",
    "answer": "¬(p⊕q)≡p↔q.",
    "solution": "Exclusive OR p⊕q is true exactly when p and q differ, so its negation is true exactly when they agree. That is precisely the truth condition for p↔q.",
    "hints": [
      "⊕ means exclusive OR: true for different inputs.",
      "A biconditional is true for equal inputs."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬(p⊕q)≡p↔q.",
      "Explains the required reasoning and cases: Exclusive OR p⊕q is true exactly when p and q differ, so its negation is true exactly when they agree. That is precisely the truth condition for p↔q."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-025",
    "mode": "rubric",
    "answer": "¬(p↔q)≡¬p↔q.",
    "solution": "The left side is true when p and q differ. The right side is true when ¬p and q agree, which also occurs exactly when p and q differ. The true rows for both are TF and FT.",
    "hints": [
      "Use the same ‘different inputs’ condition as in Exercise 21.",
      "Negating one input reverses which rows make a biconditional true."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬(p↔q)≡¬p↔q.",
      "Explains the required reasoning and cases: The left side is true when p and q differ. The right side is true when ¬p and q agree, which also occurs exactly when p and q differ. The true rows for both are TF and FT."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-026",
    "mode": "rubric",
    "answer": "(p→q)∧(p→r)≡p→(q∧r).",
    "solution": "The left side is (¬p∨q)∧(¬p∨r), which distributes to ¬p∨(q∧r). This is exactly the conditional-free form of p→(q∧r).",
    "hints": [
      "Replace both conditionals on the left by disjunctions.",
      "Factor out ¬p using (A∨B)∧(A∨C)≡A∨(B∧C)."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p→q)∧(p→r)≡p→(q∧r).",
      "Explains the required reasoning and cases: The left side is (¬p∨q)∧(¬p∨r), which distributes to ¬p∨(q∧r). This is exactly the conditional-free form of p→(q∧r)."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-027",
    "mode": "rubric",
    "answer": "(p→r)∧(q→r)≡(p∨q)→r.",
    "solution": "The left side is (¬p∨r)∧(¬q∨r)≡(¬p∧¬q)∨r≡¬(p∨q)∨r, which is the right side.",
    "hints": [
      "Factor r from the two disjunctions after eliminating conditionals.",
      "Use ¬p∧¬q≡¬(p∨q)."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p→r)∧(q→r)≡(p∨q)→r.",
      "Explains the required reasoning and cases: The left side is (¬p∨r)∧(¬q∨r)≡(¬p∧¬q)∨r≡¬(p∨q)∨r, which is the right side."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-028",
    "mode": "rubric",
    "answer": "(p→q)∨(p→r)≡p→(q∨r).",
    "solution": "Eliminating conditionals on the left gives (¬p∨q)∨(¬p∨r)≡¬p∨q∨r≡¬p∨(q∨r), which is the right side.",
    "hints": [
      "Remove duplicate occurrences of ¬p with the idempotent law."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p→q)∨(p→r)≡p→(q∨r).",
      "Explains the required reasoning and cases: Eliminating conditionals on the left gives (¬p∨q)∨(¬p∨r)≡¬p∨q∨r≡¬p∨(q∨r), which is the right side."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-029",
    "mode": "rubric",
    "answer": "(p→r)∨(q→r)≡(p∧q)→r.",
    "solution": "The left side becomes (¬p∨r)∨(¬q∨r)≡¬p∨¬q∨r≡¬(p∧q)∨r, exactly the right side.",
    "hints": [
      "After eliminating conditionals, combine ¬p∨¬q using De Morgan’s law."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: (p→r)∨(q→r)≡(p∧q)→r.",
      "Explains the required reasoning and cases: The left side becomes (¬p∨r)∨(¬q∨r)≡¬p∨¬q∨r≡¬(p∧q)∨r, exactly the right side."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-030",
    "mode": "rubric",
    "answer": "¬p→(q→r)≡q→(p∨r).",
    "solution": "For the left side, q→r≡¬q∨r, so the outer conditional becomes p∨¬q∨r. The right side becomes ¬q∨(p∨r), the same disjunction up to order and grouping.",
    "hints": [
      "Work from the inner conditional outward.",
      "The left outer hypothesis is ¬p, so its negation is p."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬p→(q→r)≡q→(p∨r).",
      "Explains the required reasoning and cases: For the left side, q→r≡¬q∨r, so the outer conditional becomes p∨¬q∨r. The right side becomes ¬q∨(p∨r), the same disjunction up to order and grouping."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-031",
    "mode": "rubric",
    "answer": "p↔q≡(p→q)∧(q→p).",
    "solution": "If p and q agree, both conditionals are true. If they differ, one conditional has a true hypothesis and false conclusion, so the conjunction is false. Thus both sides are true exactly in TT and FF.",
    "hints": [
      "Check TT,TF,FT,FF and evaluate both conditional directions.",
      "A biconditional combines ‘if’ and ‘only if’."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p↔q≡(p→q)∧(q→p).",
      "Explains the required reasoning and cases: If p and q agree, both conditionals are true. If they differ, one conditional has a true hypothesis and false conclusion, so the conjunction is false. Thus both sides are true exactly in TT and FF."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-032",
    "mode": "rubric",
    "answer": "p↔q≡¬p↔¬q.",
    "solution": "Negating both variables reverses each truth value but preserves whether the two values are equal. Therefore p and q agree exactly when ¬p and ¬q agree, so the two biconditionals have identical columns.",
    "hints": [
      "Biconditionals test equality, and negating both sides preserves equality."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p↔q≡¬p↔¬q.",
      "Explains the required reasoning and cases: Negating both variables reverses each truth value but preserves whether the two values are equal. Therefore p and q agree exactly when ¬p and ¬q agree, so the two biconditionals have identical columns."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-033",
    "mode": "auto",
    "answer": "Tautology",
    "solution": "Assume (p→q)∧(q→r) is true. To make p→r false would require p=T and r=F. Then p→q forces q=T, and q→r forces r=T, contradicting r=F. Therefore the whole conditional is never false.",
    "hints": [
      "Suppose the conclusion p→r is false; this fixes p=T and r=F.",
      "Use the two premises to derive a contradiction."
    ],
    "accepted": [
      "Tautology",
      "Yes",
      "True",
      "T"
    ],
    "checker": "text",
    "verify": "This is hypothetical syllogism: p→q and q→r together imply p→r."
  },
  {
    "id": "rosen-ch1-ex-1-3-034",
    "mode": "auto",
    "answer": "Tautology",
    "solution": "Assume p∨q and ¬p∨r are true. If p=T, then ¬p=F, so the second premise forces r=T. If p=F, the first premise forces q=T. In either case q∨r=T, proving the conditional is always true.",
    "hints": [
      "Split into the cases p=T and p=F.",
      "Use a different premise in each case."
    ],
    "accepted": [
      "Tautology",
      "Yes",
      "True",
      "T"
    ],
    "checker": "text",
    "verify": "This is the resolution rule; q∨r is the resolvent."
  },
  {
    "id": "rosen-ch1-ex-1-3-035",
    "mode": "rubric",
    "answer": "They are not logically equivalent. For p=F,q=F,r=F, (p→q)→r is F, whereas p→(q→r) is T.",
    "solution": "At p=q=r=F, p→q=T, so the left expression is T→F=F. On the right, p=F makes p→(q→r) true regardless of the consequent. One row with different values disproves equivalence.",
    "hints": [
      "Try r=F and p=F.",
      "Evaluate the inner conditionals first and keep the different groupings."
    ],
    "checker": "rubric",
    "rubric": [
      "States that the expressions are not logically equivalent.",
      "Supplies a valid counterexample such as p=F,q=F,r=F (p=F,q=T,r=F also works).",
      "Correctly evaluates the two expressions as F and T, respectively, on the chosen witness."
    ],
    "startHere": "A single truth assignment with different output values is enough to disprove equivalence."
  },
  {
    "id": "rosen-ch1-ex-1-3-036",
    "mode": "rubric",
    "answer": "They are not logically equivalent. For p=F,q=T,r=F, (p∧q)→r is T, but (p→r)∧(q→r) is F.",
    "solution": "With p=F,q=T,r=F, p∧q=F, so the left conditional is vacuously T. On the right, p→r=T but q→r=F, so the conjunction is F. The differing outputs prove non-equivalence.",
    "hints": [
      "Make p∧q false while exactly one of p,q is true.",
      "Choose r=F so that one conditional on the right fails."
    ],
    "checker": "rubric",
    "rubric": [
      "States non-equivalence and gives a valid counterexample.",
      "Uses p=F,q=T,r=F or p=T,q=F,r=F, or another verified witness.",
      "Evaluates the left side as T and right side as F for the witness."
    ],
    "verify": "The counterexample must not have p=q=F, because then both conditionals on the right would be true."
  },
  {
    "id": "rosen-ch1-ex-1-3-037",
    "mode": "rubric",
    "answer": "They are not logically equivalent. For p=F,q=F,r=T,s=F, (p→q)→(r→s) is F, whereas (p→r)→(q→s) is T.",
    "solution": "At p=q=F,r=T,s=F, p→q=T and r→s=F, so the first expression is T→F=F. Also p→r=T and q→s=T (because q=F), so the second is T→T=T.",
    "hints": [
      "Make the first outer conditional false by forcing r=T,s=F and p→q=T.",
      "Check the second expression on that same assignment before changing any values."
    ],
    "checker": "rubric",
    "rubric": [
      "States non-equivalence and supplies a valid truth assignment.",
      "Correctly evaluates all four inner conditionals for the assignment.",
      "Shows that the two outer expressions have different truth values; p=F,q=F,r=T,s=F gives F versus T."
    ],
    "verify": "There are exactly two differing assignments: p=F,q=T,r=F,s=F gives T versus F, and p=F,q=F,r=T,s=F gives F versus T."
  },
  {
    "id": "rosen-ch1-ex-1-3-038",
    "mode": "auto",
    "answer": "a) p∧¬q. b) p∨(q∧(r∨F)). c) (p∨¬q)∧(q∨T).",
    "solution": "The dual is structural: replace every ∨ by ∧, every ∧ by ∨, every T by F, and every F by T, while leaving variables and negations unchanged. Apply those replacements exactly, without simplifying the resulting expression.",
    "hints": [
      "Do not negate variables when forming a dual.",
      "Swap constants as well as connectives, and do not simplify afterward."
    ],
    "accepted": [
      "a) p∧¬q; b) p∨(q∧(r∨F)); c) (p∨¬q)∧(q∨T)"
    ],
    "checker": "text",
    "readAloud": "Dualization exchanges AND with OR and T with F. Negation signs stay exactly where they are.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "p∧¬q",
        "accepted": [
          "(p∧¬q)"
        ],
        "checker": "text",
        "solution": "Replace ∨ with ∧; leave ¬q unchanged."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "p∨(q∧(r∨F))",
        "accepted": [
          "p∨(q∧(r∨F))",
          "(p∨(q∧(r∨F)))"
        ],
        "checker": "text",
        "solution": "Swap both connectives and replace T by F."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "(p∨¬q)∧(q∨T)",
        "accepted": [
          "(p∨¬q)∧(q∨T)",
          "((p∨¬q)∧(q∨T))"
        ],
        "checker": "text",
        "solution": "Swap ∧ and ∨ throughout, and replace F by T."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-039",
    "mode": "auto",
    "answer": "a) p∨¬q∨¬r. b) (p∨q∨r)∧s. c) (p∧T)∨(q∧F).",
    "solution": "Swap ∧ and ∨ at every occurrence, swap T and F, and preserve all negations and parentheses. The results shown are the exact duals, not simplified equivalents.",
    "hints": [
      "Dualization is not negation.",
      "In (c), F becomes T and T becomes F."
    ],
    "accepted": [
      "a) p∨¬q∨¬r; b) (p∨q∨r)∧s; c) (p∧T)∨(q∧F)"
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "p∨¬q∨¬r",
        "accepted": [
          "(p∨¬q)∨¬r",
          "p∨(¬q∨¬r)"
        ],
        "checker": "text",
        "solution": "Replace both conjunctions by disjunctions; retain the negations."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "(p∨q∨r)∧s",
        "accepted": [
          "((p∨q)∨r)∧s",
          "(p∨(q∨r))∧s"
        ],
        "checker": "text",
        "solution": "Replace the inner conjunctions by disjunctions and the outer disjunction by a conjunction."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "(p∧T)∨(q∧F)",
        "accepted": [
          "((p∧T)∨(q∧F))"
        ],
        "checker": "text",
        "solution": "Swap both connectives and interchange the two constants."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-040",
    "mode": "rubric",
    "answer": "s*=s exactly when s contains no ∧, ∨, T, or F; that is, s is built from one propositional variable using only negations (including p itself and ¬p).",
    "solution": "If the outermost connective is ∧ or ∨, dualization changes it, so the expression cannot remain syntactically identical; T and F likewise change. Applying the same reasoning recursively inside negations shows that only a variable with zero or more negations remains. Conversely, dualization leaves every such expression unchanged.",
    "hints": [
      "Equality here is syntactic equality of expressions, not merely logical equivalence.",
      "Look at the outermost symbol and then reason recursively."
    ],
    "checker": "rubric",
    "rubric": [
      "Identifies exactly the expressions formed from a single variable using only negations.",
      "Excludes ∧,∨,T,F and distinguishes syntactic equality from logical equivalence.",
      "Justifies both directions: dualization changes any forbidden symbol and leaves all remaining expressions unchanged."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-041",
    "mode": "rubric",
    "answer": "(s*)*=s for every compound proposition s under the stated dualization rules.",
    "solution": "Dualizing twice swaps ∨→∧→∨, ∧→∨→∧, T→F→T, and F→T→F, while never changing variables or negations. More formally, use structural induction: variables and constants return to themselves, a negation is preserved recursively, and each binary connective is restored after two swaps. Therefore every original symbol is recovered.",
    "hints": [
      "Track each kind of symbol through two replacements.",
      "A structural-induction proof checks atoms, negation, conjunction, and disjunction."
    ],
    "checker": "rubric",
    "rubric": [
      "States that two dualizations restore every connective and constant.",
      "Accounts for variables and negations being unchanged.",
      "Gives a complete structural argument or induction covering all permitted forms of s."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-042",
    "mode": "rubric",
    "answer": "The Table 6 pairs are: identity p∧T≡p with p∨F≡p; domination p∨T≡T with p∧F≡F; idempotent p∨p≡p with p∧p≡p; commutative p∨q≡q∨p with p∧q≡q∧p; associative (p∨q)∨r≡p∨(q∨r) with (p∧q)∧r≡p∧(q∧r); distributive p∨(q∧r)≡(p∨q)∧(p∨r) with p∧(q∨r)≡(p∧q)∨(p∧r); De Morgan ¬(p∧q)≡¬p∨¬q with ¬(p∨q)≡¬p∧¬q; absorption p∨(p∧q)≡p with p∧(p∨q)≡p; and negation p∨¬p≡T with p∧¬p≡F.",
    "solution": "For each listed pair, dualizing both sides of either equivalence produces the other equivalence. For example, the dual of p∧T≡p is p∨F≡p, and the dual of ¬(p∧q)≡¬p∨¬q is ¬(p∨q)≡¬p∧¬q. The same direct symbol swaps establish every remaining pair. Double negation is excluded because it has no separate partner in the table.",
    "hints": [
      "Dualize both the left and right sides of an equivalence.",
      "Check the nine named pairs, including the negation laws."
    ],
    "checker": "rubric",
    "rubric": [
      "Correctly pairs identity, domination, idempotent, commutative, associative, distributive, De Morgan, absorption, and negation laws.",
      "Shows or accurately states that dualizing both sides of one law yields its partner.",
      "Excludes only double negation and does not omit the negation-law pair."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-043",
    "mode": "rubric",
    "answer": "If s≡t, then s*≡t*: dualization preserves logical equivalence.",
    "solution": "For any expression u using only ∧,∨,¬, let ū denote u after replacing every propositional variable p by ¬p. A structural induction gives u*≡¬ū. Now suppose s≡t. Replacing all variables by their negations preserves equivalence, so s̄≡t̄: any assignment to the negated variables corresponds to an assignment to the original variables. Negating both sides preserves equivalence, hence ¬s̄≡¬t̄, and therefore s*≡t*.",
    "hints": [
      "Relate u* to the negation of u after substituting ¬p for each variable p.",
      "Use the identity u*≡¬ū, then negate two equivalent substituted expressions."
    ],
    "checker": "rubric",
    "rubric": [
      "Introduces a correct variable-negation substitution and states u*≡¬ū.",
      "Explains why s≡t implies the substituted expressions are equivalent.",
      "Negates both sides to conclude s*≡t*, with a valid structural justification of the key identity."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-044",
    "mode": "auto",
    "answer": "p∧q∧¬r",
    "solution": "Read the conjunction as ‘p is true AND q is true AND r is false’. It is true in exactly the TTF row. In every other row, at least one conjunct is false, so the whole proposition is false.",
    "hints": [
      "Include p and q unnegated because they must be true.",
      "Include ¬r because r must be false, then conjoin all three literals."
    ],
    "accepted": [
      "(p∧q)∧¬r",
      "p∧(q∧¬r)",
      "q∧p∧¬r",
      "¬r∧p∧q"
    ],
    "checker": "logic",
    "readAloud": "p and q and not r is true only for the assignment p true, q true, r false.",
    "verify": "Substitute T,T,F to get T; changing any one input makes at least one conjunct F."
  },
  {
    "id": "rosen-ch1-ex-1-3-045",
    "mode": "auto",
    "answer": "(p∧q∧¬r)∨(p∧¬q∧r)∨(¬p∧q∧r)",
    "solution": "Exactly two variables are true in the three assignments TTF, TFT, and FTT. The three conjunctions select those rows respectively, and their disjunction selects their union. Every other assignment either has fewer than two true variables and falsifies all positive-literal requirements, or has all three true and falsifies each included negation.",
    "hints": [
      "There are three ways to choose the one false variable.",
      "Write one conjunction for each assignment, then take their disjunction."
    ],
    "accepted": [
      "(p∧¬q∧r)∨(¬p∧q∧r)∨(p∧q∧¬r)",
      "(¬p∧q∧r)∨(p∧¬q∧r)∨(p∧q∧¬r)"
    ],
    "checker": "logic",
    "readAloud": "The expression says: p and q but not r, OR p and r but not q, OR q and r but not p.",
    "verify": "Check that only TTF, TFT, and FTT make exactly one disjunct true."
  },
  {
    "id": "rosen-ch1-ex-1-3-046",
    "mode": "rubric",
    "answer": "For each true row α, form the minterm mα=ℓ1∧⋯∧ℓn, where ℓi=pi if pi=T in α and ℓi=¬pi if pi=F in α. The required proposition is the disjunction of all mα for true rows (and F if there are no true rows).",
    "solution": "A minterm mα is true at its own row α because every literal is true there. At any other row β, some variable has a different value, so the corresponding literal of mα is false and the whole conjunction is false. Therefore each mα selects exactly one row. Taking the disjunction over precisely the rows where the specified function is T makes the result T on those rows and F elsewhere. If no rows are T, use the empty disjunction F; if all rows are T, include all 2^n minterms.",
    "hints": [
      "First construct a conjunction that selects one particular truth-table row.",
      "Use p for a T entry and ¬p for an F entry, then combine the row selectors with OR."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines the correct literal for every variable in a row's minterm.",
      "Proves each minterm is true at exactly its designated row.",
      "Takes the disjunction over exactly the true rows and handles the all-false table with F.",
      "Concludes that the constructed DNF has the specified truth table."
    ],
    "readAloud": "A minterm is a conjunction that names one complete row by stating whether each variable is true or false."
  },
  {
    "id": "rosen-ch1-ex-1-3-047",
    "mode": "rubric",
    "answer": "{¬,∧,∨} is functionally complete.",
    "solution": "Every truth table has the disjunctive normal form constructed in Exercise 46. That expression uses only negations, conjunctions, and disjunctions; the all-false table is represented by F≡p∧¬p, which also uses only these operators. Since every compound proposition has a truth table, every compound proposition is equivalent to one using only ¬,∧,∨.",
    "hints": [
      "Functional completeness means representing every possible truth table, not just the examples in this section.",
      "Invoke Exercise 46 and account for the all-false table."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses DNF to represent an arbitrary truth table with only ¬,∧,∨.",
      "Handles the all-false table, for example with p∧¬p.",
      "Concludes functional completeness for all compound propositions."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-048",
    "mode": "rubric",
    "answer": "{¬,∧} is functionally complete.",
    "solution": "By De Morgan’s law and double negation, p∨q≡¬(¬p∧¬q). Starting with any DNF expression from Exercise 46, replace every disjunction in this way; conjunctions and negations are already permitted. The all-false case is p∧¬p. Thus {¬,∧} expresses everything that {¬,∧,∨} expresses, so it is functionally complete by Exercise 47.",
    "hints": [
      "Eliminate OR rather than trying to eliminate AND.",
      "Use p∨q≡¬(¬p∧¬q), then cite Exercises 46–47."
    ],
    "checker": "rubric",
    "rubric": [
      "Derives or correctly states p∨q≡¬(¬p∧¬q).",
      "Explains replacement of all disjunctions in an arbitrary DNF expression.",
      "Uses the functional completeness of {¬,∧,∨} and accounts for the constant-false case."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-049",
    "mode": "rubric",
    "answer": "{¬,∨} is functionally complete.",
    "solution": "By De Morgan’s law and double negation, p∧q≡¬(¬p∨¬q). Replace every conjunction in an arbitrary DNF expression using this identity; disjunctions and negations need no replacement. Represent F by ¬(p∨¬p). Hence {¬,∨} can express every truth table and is functionally complete.",
    "hints": [
      "Find an AND-free form of p∧q using De Morgan’s law.",
      "Reduce the claim to Exercise 47."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses p∧q≡¬(¬p∨¬q) to eliminate conjunction.",
      "Applies the replacement to an arbitrary DNF representation.",
      "Concludes functional completeness and handles the all-false table with only ¬ and ∨."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-050",
    "mode": "auto",
    "answer": "F,T,T,T",
    "solution": "NAND is false only when both inputs are true. Therefore the TT row gives F, and each of TF, FT, FF gives T. Equivalently, p∣q=¬(p∧q).",
    "hints": [
      "NAND means ‘not both true’.",
      "Put F in the TT row and T in every other row."
    ],
    "accepted": [
      "F,T,T,T"
    ],
    "checker": "truth",
    "readAloud": "In standard row order TT, TF, FT, FF, the NAND output is false, true, true, true."
  },
  {
    "id": "rosen-ch1-ex-1-3-051",
    "mode": "rubric",
    "answer": "p∣q≡¬(p∧q).",
    "solution": "In standard row order TT,TF,FT,FF, both p∣q and ¬(p∧q) output F,T,T,T. NAND is false exactly when p∧q is true, and true exactly when p∧q is false.",
    "hints": [
      "Compare the NAND table from Exercise 50 with the negated AND column."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∣q≡¬(p∧q).",
      "Explains the required reasoning and cases: In standard row order TT,TF,FT,FF, both p∣q and ¬(p∧q) output F,T,T,T. NAND is false exactly when p∧q is true, and true exactly when p∧q is false."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-052",
    "mode": "auto",
    "answer": "F,F,F,T",
    "solution": "NOR is true only when both inputs are false. Thus TT,TF,FT all give F and FF gives T. Equivalently, p↓q=¬(p∨q).",
    "hints": [
      "NOR means ‘neither one is true’.",
      "Only the FF row has output T."
    ],
    "accepted": [
      "F,F,F,T"
    ],
    "checker": "truth",
    "readAloud": "In standard row order TT, TF, FT, FF, the NOR output is false, false, false, true."
  },
  {
    "id": "rosen-ch1-ex-1-3-053",
    "mode": "rubric",
    "answer": "p↓q≡¬(p∨q).",
    "solution": "In standard row order TT,TF,FT,FF, p∨q is T,T,T,F, so its negation is F,F,F,T. This is exactly the NOR column.",
    "hints": [
      "Negate the entire disjunction p∨q and compare all four rows."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p↓q≡¬(p∨q).",
      "Explains the required reasoning and cases: In standard row order TT,TF,FT,FF, p∨q is T,T,T,F, so its negation is F,F,F,T. This is exactly the NOR column."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-054",
    "mode": "rubric",
    "answer": "a) p↓p≡¬p. b) (p↓q)↓(p↓q)≡p∨q. c) Since NOR alone expresses both negation and disjunction, {↓} is functionally complete.",
    "solution": "(a) p↓p≡¬(p∨p)≡¬p. (b) Let x=p↓q≡¬(p∨q); then x↓x≡¬x≡p∨q. (c) Parts (a) and (b) construct ¬p and p∨q using only ↓. Exercise 49 shows {¬,∨} is functionally complete, so replacing each of those operators by its NOR construction shows {↓} is also functionally complete.",
    "hints": [
      "Use p↓q≡¬(p∨q).",
      "For (b), NOR an expression with itself to negate it.",
      "For (c), combine the two constructions with Exercise 49."
    ],
    "checker": "rubric",
    "rubric": [
      "Establishes both NOR identities in parts (a) and (b).",
      "Uses those identities to simulate ¬ and ∨ entirely with NOR.",
      "Cites the functional completeness of {¬,∨} to conclude {↓} is functionally complete."
    ],
    "readAloud": "NORing p with itself gives not p. NORing p NOR q with itself undoes the outer negation and gives p or q.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "p↓p≡¬p",
        "checker": "rubric",
        "solution": "p↓p≡¬(p∨p)≡¬p by idempotence.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: p↓p≡¬p",
          "Explains the required reasoning and cases: p↓p≡¬(p∨p)≡¬p by idempotence."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(p↓q)↓(p↓q)≡p∨q",
        "checker": "rubric",
        "solution": "With x=p↓q, x↓x≡¬x≡¬(¬(p∨q))≡p∨q.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (p↓q)↓(p↓q)≡p∨q",
          "Explains the required reasoning and cases: With x=p↓q, x↓x≡¬x≡¬(¬(p∨q))≡p∨q."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "{↓} is functionally complete.",
        "checker": "rubric",
        "solution": "NOR alone constructs negation by (a) and disjunction by (b); because {¬,∨} is functionally complete, every truth table has a NOR-only representation.",
        "rubric": [
          "Explicitly combines parts (a),(b) with Exercise 49 to prove functional completeness."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-055",
    "mode": "rubric",
    "answer": "((p↓p)↓q)↓((p↓p)↓q).",
    "solution": "First p↓p≡¬p. Next, (p↓p)↓q≡¬(¬p∨q). NOR this result with itself to negate it: ((p↓p)↓q)↓((p↓p)↓q)≡¬p∨q≡p→q. Only ↓ is used.",
    "hints": [
      "Construct ¬p as p↓p.",
      "Use x∨y≡(x↓y)↓(x↓y) with x=¬p and y=q."
    ],
    "checker": "rubric",
    "readAloud": "First form not p as p NOR p. NOR that result with q, then NOR the resulting expression with itself to obtain not p or q.",
    "verify": "In standard TT,TF,FT,FF row order, both the NOR-only expression and p→q give F,T,T,T.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ((p↓p)↓q)↓((p↓p)↓q).",
      "Explains the required reasoning and cases: First p↓p≡¬p. Next, (p↓p)↓q≡¬(¬p∨q). NOR this result with itself to negate it: ((p↓p)↓q)↓((p↓p)↓q)≡¬p∨q≡p→q. Only ↓ is used."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-056",
    "mode": "rubric",
    "answer": "{∣} is functionally complete.",
    "solution": "NAND gives negation because p∣p≡¬(p∧p)≡¬p. It also gives conjunction because (p∣q)∣(p∣q)≡¬(¬(p∧q))≡p∧q. Exercise 48 shows {¬,∧} is functionally complete, so replacing ¬ and ∧ by these NAND-only constructions proves {∣} functionally complete.",
    "hints": [
      "Use p∣p to construct ¬p.",
      "NAND p∣q with itself to recover p∧q, then cite Exercise 48."
    ],
    "checker": "rubric",
    "rubric": [
      "Derives ¬p≡p∣p.",
      "Derives p∧q≡(p∣q)∣(p∣q) or an equivalent NAND-only construction of a complete basis.",
      "Uses the completeness of {¬,∧} to conclude that NAND alone is functionally complete."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-057",
    "mode": "rubric",
    "answer": "p∣q≡q∣p.",
    "solution": "Using p∣q≡¬(p∧q), commutativity of ∧ gives p∣q≡¬(p∧q)≡¬(q∧p)≡q∣p. Both columns are F,T,T,T in standard row order.",
    "hints": [
      "Translate NAND to negated conjunction and use commutativity of AND."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a response equivalent to the authored model answer: p∣q≡q∣p.",
      "Explains the required reasoning and cases: Using p∣q≡¬(p∧q), commutativity of ∧ gives p∣q≡¬(p∧q)≡¬(q∧p)≡q∣p. Both columns are F,T,T,T in standard row order."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-058",
    "mode": "rubric",
    "answer": "NAND is not associative. For p=F,q=T,r=T, p∣(q∣r)=T but (p∣q)∣r=F.",
    "solution": "With p=F,q=T,r=T, q∣r=F, so p∣(q∣r)=F∣F=T. On the other side, p∣q=T, so (p∣q)∣r=T∣T=F. Different truth values on one assignment disprove associativity.",
    "hints": [
      "Try p=F and q=r=T.",
      "Evaluate the inner NAND separately on each side."
    ],
    "checker": "rubric",
    "rubric": [
      "States that NAND is not associative and provides a valid counterexample.",
      "Correctly evaluates both nested expressions for the witness.",
      "For p=F,q=T,r=T, obtains left T and right F."
    ],
    "verify": "Useful algebraic readings are p∣(q∣r)≡¬p∨(q∧r) and (p∣q)∣r≡(p∧q)∨¬r."
  },
  {
    "id": "rosen-ch1-ex-1-3-059",
    "mode": "auto",
    "answer": "16",
    "solution": "Two variables produce 2^2=4 truth-table rows. Each row independently has two possible output values, T or F, so the number of complete output columns is 2^4=16. These include the constant-T and constant-F tables.",
    "hints": [
      "First count rows, then count choices for the entire output column.",
      "There are four rows and two independent choices per row."
    ],
    "accepted": [
      "16"
    ],
    "checker": "number",
    "readAloud": "Two variables give four rows, and each of the four entries can independently be true or false, giving two to the fourth power, sixteen."
  },
  {
    "id": "rosen-ch1-ex-1-3-060",
    "mode": "rubric",
    "answer": "Logical equivalence is transitive: p≡q and q≡r imply p≡r.",
    "solution": "Fix any assignment of truth values to all variables. From p≡q, the values of p and q agree; from q≡r, the values of q and r agree. Therefore the values of p and r agree on that assignment. Since the assignment was arbitrary, p and r are logically equivalent.",
    "hints": [
      "Work one truth assignment at a time and chain the two equal truth values."
    ],
    "checker": "rubric",
    "rubric": [
      "Considers an arbitrary truth assignment.",
      "Uses both hypotheses to chain the truth value of p through q to r.",
      "Concludes equivalence for every assignment, not just one example."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-061",
    "mode": "rubric",
    "answer": "Let D mean the directory database is opened, M mean the monitor is put in a closed state, and I mean the system is in its initial state. An equivalent specification is I∨¬D∨M: ‘The system is in its initial state, or the directory database is not opened, or the monitor is put in a closed state.’",
    "solution": "The nested conditionals can be read as ¬I→(D→M) (the alternative grouping D→(¬I→M) has the same simplification). Eliminating conditionals gives I∨(¬D∨M), hence I∨¬D∨M. In ordinary English, at least one of the three listed conditions must hold.",
    "hints": [
      "Name the three atomic propositions before translating.",
      "Use A→B≡¬A∨B twice and simplify ¬¬I to I."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines or clearly identifies the three atomic propositions.",
      "Obtains a formula equivalent to I∨¬D∨M with no conditionals.",
      "Gives an understandable disjunctive English specification preserving the initial-state, database, and monitor conditions."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-062",
    "mode": "auto",
    "answer": "5",
    "solution": "With p=q=T and r=F, the five values are p∨¬q=T, ¬p∨q=T, q∨r=T, q∨¬r=T, and ¬q∨¬r=T. Since there are only five disjunctions, this witness proves the maximum is 5. In fact, the first two clauses force p=q, and the last three then force q=T and r=F, so this satisfying assignment is unique.",
    "hints": [
      "The first two clauses together require p and q to have the same value.",
      "Try p=q=T and choose r to satisfy q∨r and ¬q∨¬r."
    ],
    "accepted": [
      "5"
    ],
    "checker": "number",
    "verify": "Substitute T,T,F into all five clauses; each contains at least one true literal."
  },
  {
    "id": "rosen-ch1-ex-1-3-063",
    "mode": "auto",
    "answer": "9",
    "solution": "Substitute p=F,q=F,r=T,s=F. Clauses 1–4 and 7 contain a true negated literal (¬q, ¬p, or both); clauses 5,8,9 contain r=T; clause 6 contains ¬s=T. Thus all nine are true simultaneously, and 9 is necessarily the maximum. Other witnesses include (F,T,T,T), (T,F,F,F), and (T,T,F,F).",
    "hints": [
      "Try p=F,q=F,r=T,s=F and inspect the clauses in groups.",
      "Since only nine clauses are listed, one assignment satisfying all of them settles the maximum."
    ],
    "accepted": [
      "9"
    ],
    "checker": "number",
    "verify": "Label the clauses 1–9 in prompt order and mark a true literal in every clause under F,F,T,F."
  },
  {
    "id": "rosen-ch1-ex-1-3-064",
    "mode": "rubric",
    "answer": "If A is unsatisfiable, ¬A is a tautology; if A is a tautology, ¬A is unsatisfiable.",
    "solution": "Unsatisfiable means A=F under every truth assignment, so ¬A=T under every assignment and is a tautology. Conversely, tautology means A=T under every assignment, so ¬A=F under every assignment and is unsatisfiable. Negation simply interchanges the all-F and all-T columns.",
    "hints": [
      "Translate ‘unsatisfiable’ into ‘false under every assignment’.",
      "Negation swaps T and F in every row."
    ],
    "checker": "rubric",
    "rubric": [
      "Correctly uses the definitions of unsatisfiable and tautology.",
      "Proves both directions stated in the exercise for every truth assignment.",
      "Does not confuse unsatisfiable with merely being false for one assignment."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-065",
    "mode": "auto",
    "answer": "a) Satisfiable, witnessed by p=F,q=F. b) Unsatisfiable. c) Unsatisfiable.",
    "solution": "(a) At p=q=F, p∨¬q, ¬p∨q, and ¬p∨¬q are all true. (b) p→q and p→¬q together force ¬p; ¬p→q and ¬p→¬q together force p, a contradiction. (c) p↔q requires p=q, while ¬p↔q requires ¬p=q, equivalently p≠q; these cannot hold together.",
    "hints": [
      "Satisfiable means at least one assignment makes the entire formula true.",
      "For (b), use the first pair to force ¬p and the second pair to force p.",
      "For (c), translate the biconditionals into equality and difference conditions."
    ],
    "accepted": [
      "a) Satisfiable; b) Unsatisfiable; c) Unsatisfiable",
      "Satisfiable, unsatisfiable, unsatisfiable"
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Satisfiable; p=F,q=F",
        "accepted": [
          "Satisfiable",
          "Yes",
          "SAT",
          "p=F,q=F"
        ],
        "checker": "text",
        "solution": "p=q=F makes all three disjunctions true, so this is a satisfying assignment."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Unsatisfiable",
        "accepted": [
          "Not satisfiable",
          "No",
          "UNSAT"
        ],
        "checker": "text",
        "solution": "The first two conditionals imply ¬p, while the last two imply p; no assignment satisfies both requirements."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Unsatisfiable",
        "accepted": [
          "Not satisfiable",
          "No",
          "UNSAT"
        ],
        "checker": "text",
        "solution": "The two biconditionals simultaneously demand p=q and p≠q, which is impossible."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-066",
    "mode": "auto",
    "answer": "All three are satisfiable. Witnesses: a) p=q=r=s=F; b) p=q=r=s=F; c) p=F,q=T,r=F,s=F.",
    "solution": "For (a), p=q=r=s=F makes every clause true: clauses 1,3,5 contain ¬r or ¬s, clause 2 contains ¬q and ¬s, and clause 4 contains ¬p,¬q,¬s. For (b), the same all-F assignment makes clauses 1,2,4 true through ¬p, and clauses 3,5,6 true through ¬q,¬r,¬s. For (c), p=F,q=T,r=F,s=F satisfies clauses 1 and 3 through q, clauses 2 and 6 through ¬q or ¬s, and clauses 4,5,7,8 through ¬p.",
    "hints": [
      "A single satisfying assignment is enough for each part.",
      "Try all variables false for (a) and (b); for (c), try p=F,q=T,r=F,s=F."
    ],
    "accepted": [
      "All three are satisfiable",
      "Satisfiable, satisfiable, satisfiable",
      "a) SAT; b) SAT; c) SAT"
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Satisfiable; p=q=r=s=F",
        "accepted": [
          "Satisfiable",
          "Yes",
          "SAT",
          "p=F,q=F,r=F,s=F"
        ],
        "checker": "text",
        "solution": "The all-F assignment satisfies each of the five clauses, so the conjunction is satisfiable."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Satisfiable; p=q=r=s=F",
        "accepted": [
          "Satisfiable",
          "Yes",
          "SAT",
          "p=F,q=F,r=F,s=F"
        ],
        "checker": "text",
        "solution": "The all-F assignment satisfies each of the six clauses, so the conjunction is satisfiable."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Satisfiable; p=F,q=T,r=F,s=F",
        "accepted": [
          "Satisfiable",
          "Yes",
          "SAT",
          "p=F,q=T,r=F,s=F"
        ],
        "checker": "text",
        "solution": "This assignment gives every one of the eight clauses at least one true literal, so the conjunction is satisfiable."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-067",
    "mode": "auto",
    "answer": "Q=Q1∧Q2∧Q3∧Q4∧Q5 encodes exactly one queen per row and no shared row, column, or diagonal. a) n=2: no solutions. b) n=3: no solutions. c) n=4: exactly two solutions, with row positions by column (2,4,1,3) and (3,1,4,2).",
    "solution": "Let p(i,j) mean a queen occupies row i,column j. Q1=∧_{i=1}^n∨_{j=1}^n p(i,j); Q2=∧_{i=1}^n∧_{j=1}^{n-1}∧_{k=j+1}^n(¬p(i,j)∨¬p(i,k)); Q3=∧_{j=1}^n∧_{i=1}^{n-1}∧_{k=i+1}^n(¬p(i,j)∨¬p(k,j)); Q4=∧_{i=2}^n∧_{j=1}^{n-1}∧_{k=1}^{min(i-1,n-j)}(¬p(i,j)∨¬p(i-k,j+k)); Q5=∧_{i=1}^{n-1}∧_{j=1}^{n-1}∧_{k=1}^{min(n-i,n-j)}(¬p(i,j)∨¬p(i+k,j+k)). Q1 gives at least one queen per row, Q2 at most one per row, Q3 at most one per column, and Q4,Q5 forbid pairs on the two diagonal directions. Satisfying assignments for n=2 and n=3 do not exist. For n=4, the satisfying placements are {(2,1),(4,2),(1,3),(3,4)} and {(3,1),(1,2),(4,3),(2,4)}, written as (row,column) pairs.",
    "hints": [
      "Combine at-least-one-per-row, at-most-one-per-row, at-most-one-per-column, and two diagonal constraints.",
      "For n=4, write row numbers in column order; the two solutions are reversals of one another."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines p(i,j) and gives a correct Q=Q1∧Q2∧Q3∧Q4∧Q5 or an equivalent complete pairwise encoding.",
      "Includes at-least-one and at-most-one row constraints, column constraints, and both diagonal directions.",
      "Reports no solutions for n=2 and n=3.",
      "Reports exactly the two n=4 solutions (2,4,1,3) and (3,1,4,2), with an unambiguous coordinate convention."
    ],
    "readAloud": "p of i,j means there is a queen in row i and column j. A satisfying assignment of Q is exactly a nonattacking placement.",
    "verify": "For each 4-queens tuple, all rows and columns are distinct, and all values of row+column and row−column are distinct.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "No solutions for n=2",
        "accepted": [
          "None",
          "0",
          "No placements",
          "Q is unsatisfiable for n=2"
        ],
        "checker": "text",
        "solution": "One queen per row and column forces either row tuple (1,2) or (2,1). The first puts both queens on a main diagonal and the second puts both on an anti-diagonal, so Q is unsatisfiable."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No solutions for n=3",
        "accepted": [
          "None",
          "0",
          "No placements",
          "Q is unsatisfiable for n=3"
        ],
        "checker": "text",
        "solution": "One queen per row and column leaves six row tuples: (1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1). Checking these six shows at least one attacking diagonal pair in each, so no assignment satisfies Q."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{(2,4,1,3),(3,1,4,2)}",
        "accepted": [
          "{(3,1,4,2),(2,4,1,3)}"
        ],
        "checker": "set",
        "solution": "Backtracking by the queen's row in column 1 gives no completion from row 1, the unique completion (2,4,1,3) from row 2, the unique completion (3,1,4,2) from row 3, and none from row 4. Thus these are exactly the two placements; tuples list rows in columns 1,2,3,4."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-068",
    "mode": "rubric",
    "answer": "Qodd=Q∧(∨_{i∈{1,3,…,m}}p(i,1)), where m is the largest odd integer not exceeding n.",
    "solution": "The original Q already enforces every n-queens constraint. The extra disjunction says that at least one p(i,1) with odd row index i is true, so the queen in column 1 lies in an odd-numbered row. Because Q already guarantees exactly one queen in that column, no further restriction is needed. Equivalently, write Q∧∨_{k=1}^{⌈n/2⌉}p(2k-1,1).",
    "hints": [
      "Keep Q unchanged and conjoin one new restriction.",
      "Column 1 is j=1; allowed row indices are 1,3,5,… up to n."
    ],
    "checker": "rubric",
    "rubric": [
      "Conjoins Q with a disjunction over p(i,1) for odd i only.",
      "Uses the correct row/column order and covers all odd rows from 1 through n.",
      "Explains that satisfying assignments of the new formula are exactly the desired n-queens solutions."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-3-069",
    "mode": "rubric",
    "answer": "Use 64 variables p(i,j,n), i,j,n∈{1,2,3,4}, meaning ‘cell (i,j) contains n’. Conjoin the given entries, exactly-one-number-per-cell constraints, and row, column, and 2×2-block coverage constraints; a satisfying assignment is precisely a Sudoku solution.",
    "solution": "Assert each given p(i,j,n). For every cell assert ∨_{n=1}^4p(i,j,n) and, for all n<n′, ¬p(i,j,n)∨¬p(i,j,n′), giving at least one and at most one number. Assert rows by ∧_{i=1}^4∧_{n=1}^4∨_{j=1}^4p(i,j,n), columns by ∧_{j=1}^4∧_{n=1}^4∨_{i=1}^4p(i,j,n), and blocks by ∧_{r=0}^1∧_{s=0}^1∧_{n=1}^4∨_{i=1}^2∨_{j=1}^2p(2r+i,2s+j,n). Conjoin all these propositions and the givens. A SAT solver's true variables then specify each cell's number; the constraints make this a valid 4×4 Sudoku solution.",
    "hints": [
      "Use three indices: row, column, and candidate number.",
      "Encode givens, cell uniqueness, and all row/column/block requirements, then conjoin them."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines all 64 p(i,j,n) variables with the correct meaning.",
      "Includes given values plus at-least-one and at-most-one-number constraints for every cell.",
      "Includes correct every-number constraints for all four rows, four columns, and four 2×2 blocks.",
      "Explains how a satisfying assignment decodes to a complete valid grid."
    ],
    "startHere": "The atom p(i,j,n) is a yes/no statement: ‘the number n is in row i, column j’."
  },
  {
    "id": "rosen-ch1-ex-1-3-070",
    "mode": "auto",
    "answer": "∧_{i=1}^{9}∧_{j=1}^{9}∨_{n=1}^{9}p(i,j,n).",
    "solution": "For a fixed cell (i,j), the disjunction ∨_{n=1}^9p(i,j,n) says that at least one of the numbers 1 through 9 occurs there. Taking the conjunction over all 9 rows and 9 columns asserts this for every one of the 81 cells. This is an at-least-one constraint; it does not by itself prevent multiple numbers in a cell.",
    "hints": [
      "First write ‘cell (i,j) has at least one number’ for fixed i,j.",
      "Then require that disjunction for all 81 choices of (i,j)."
    ],
    "accepted": [
      "⋀_{i=1}^9⋀_{j=1}^9⋁_{n=1}^9 p(i,j,n)",
      "AND over i,j=1..9 of OR over n=1..9 p(i,j,n)",
      "⋀_{i,j=1}^{9}⋁_{n=1}^{9}p(i,j,n)"
    ],
    "checker": "text",
    "readAloud": "For every row i and every column j, at least one of p(i,j,1) through p(i,j,9) is true.",
    "verify": "Expanding the two outer conjunctions gives exactly 81 nine-literal disjunctions, one per cell."
  },
  {
    "id": "rosen-ch1-ex-1-3-071",
    "mode": "auto",
    "answer": "∧_{j=1}^{9}∧_{n=1}^{9}∨_{i=1}^{9}p(i,j,n).",
    "solution": "Fix column j and number n. The disjunction ∨_{i=1}^9p(i,j,n) says n occurs in at least one of the nine cells in that column. Conjoin over n=1,…,9 to require every number in column j, then conjoin over j=1,…,9 to cover every column. There are 9×9=81 such nine-literal disjunctions.",
    "hints": [
      "Hold j and n fixed and vary the row index i.",
      "After constructing one column-number clause, quantify over all j and n."
    ],
    "accepted": [
      "⋀_{j=1}^9⋀_{n=1}^9⋁_{i=1}^9 p(i,j,n)",
      "AND over j,n=1..9 of OR over i=1..9 p(i,j,n)",
      "⋀_{j,n=1}^{9}⋁_{i=1}^{9}p(i,j,n)"
    ],
    "checker": "text",
    "readAloud": "For every column j and every number n, some row i has p(i,j,n) true.",
    "verify": "Each fixed column has nine clauses, one per number, and there are nine columns."
  },
  {
    "id": "rosen-ch1-ex-1-3-072",
    "mode": "auto",
    "answer": "∧_{r=0}^{2}∧_{s=0}^{2}∧_{n=1}^{9}∨_{i=1}^{3}∨_{j=1}^{3}p(3r+i,3s+j,n).",
    "solution": "The pair (r,s) with r,s∈{0,1,2} selects one of the nine 3×3 blocks. For fixed r,s,n, the double disjunction over i,j∈{1,2,3} says number n occurs in at least one of that block's nine cells p(3r+i,3s+j,n). Conjoin over all nine numbers and all nine block positions. The result has 9×9=81 block-number clauses, each with nine literals.",
    "hints": [
      "Use r,s∈{0,1,2} to select the block's upper-left region.",
      "Within the selected block, rows are 3r+i and columns are 3s+j for i,j∈{1,2,3}."
    ],
    "accepted": [
      "⋀_{r=0}^2⋀_{s=0}^2⋀_{n=1}^9⋁_{i=1}^3⋁_{j=1}^3 p(3r+i,3s+j,n)",
      "AND over r,s=0..2 and n=1..9 of OR over i,j=1..3 p(3r+i,3s+j,n)"
    ],
    "checker": "text",
    "readAloud": "For every block selected by r and s, and for every number n, at least one cell in that block contains n.",
    "verify": "The nine (r,s) pairs select disjoint blocks; each block-number pair contributes one clause over exactly nine cells."
  },
  {
    "id": "rosen-ch1-ex-1-4-001",
    "mode": "auto",
    "answer": "a) True; b) True; c) False.",
    "accepted": [
      "a) T; b) T; c) F",
      "P(0)=true, P(4)=true, P(6)=false"
    ],
    "checker": "truth",
    "solution": "Substitute each value into x ≤ 4: 0 ≤ 4 and 4 ≤ 4 are true, but 6 ≤ 4 is false.",
    "hints": [
      "Replace x by the given number; remember that ≤ includes equality."
    ],
    "readAloud": "P of x means x is less than or equal to four.",
    "verify": "Check the boundary case x = 4 separately: it makes the statement true.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "P(0) is 0 ≤ 4, which is true."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "P(4) is 4 ≤ 4, true because equality is allowed."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "P(6) is 6 ≤ 4, which is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-002",
    "mode": "auto",
    "answer": "a) True; b) False; c) False; d) False.",
    "accepted": [
      "a) T; b) F; c) F; d) F",
      "Only P(orange) is true."
    ],
    "checker": "truth",
    "solution": "Inspect the letters in each word. Only orange contains the letter a; lemon, true, and false do not.",
    "hints": [
      "Search for the letter a itself, not the sound of a vowel."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "The word orange contains a."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The word lemon has no a."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The word true has no a."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The word false has no a."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-003",
    "mode": "auto",
    "answer": "a) True; b) False; c) False; d) False.",
    "accepted": [
      "a) T; b) F; c) F; d) F",
      "Only Q(Denver, Colorado) is true."
    ],
    "checker": "truth",
    "solution": "Denver is Colorado's capital. Detroit is not Michigan's capital (Lansing is), the arguments in (c) are reversed, and New York City is not New York State's capital (Albany is).",
    "hints": [
      "The order matters: the first argument must be the capital city and the second the state."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Denver is the capital of Colorado."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Lansing, not Detroit, is Michigan's capital."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Massachusetts is a state, not a city, and Boston is its capital; the arguments are reversed."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Albany, not New York City, is the capital of New York State."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-004",
    "mode": "auto",
    "answer": "a) x = 0; b) x = 1; c) x = 1.",
    "accepted": [
      "a) 0; b) 1; c) 1",
      "0, 1, 1"
    ],
    "checker": "text",
    "solution": "The assignment runs only when x > 1. For x = 0 it does not run; for x = 1 it does not run because 1 > 1 is false; for x = 2 it runs and replaces 2 by 1.",
    "hints": [
      "Test the guard before changing x. If the guard is false, x keeps its old value."
    ],
    "startHere": "Read if P(x) then x := 1 as: if x is greater than 1, assign 1 to x.",
    "verify": "The only starting value that satisfies the guard is 2.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "0",
        "accepted": [
          "0"
        ],
        "checker": "number",
        "solution": "Since 0 > 1 is false, no assignment occurs and x remains 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1",
        "accepted": [
          "1"
        ],
        "checker": "number",
        "solution": "Since 1 > 1 is false, no assignment occurs and x remains 1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1",
        "accepted": [
          "1"
        ],
        "checker": "number",
        "solution": "Since 2 > 1 is true, the assignment sets x to 1."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-005",
    "mode": "rubric",
    "answer": "a) Some student spends more than five hours every weekday in class. b) Every student spends more than five hours every weekday in class. c) Some student does not spend more than five hours every weekday in class. d) No student spends more than five hours every weekday in class.",
    "solution": "Read ∃ as “there is at least one” and ∀ as “every.” In (c) and (d), negate only P(x), not the domain.",
    "hints": [
      "Translate the quantifier first, then P(x) or ¬P(x)."
    ],
    "rubric": [
      "Each part preserves the stated domain of all students.",
      "Existential and universal quantifiers are translated correctly.",
      "Negation in (c) and (d) applies to the class-time claim, with (d) meaning no students satisfy it."
    ],
    "readAloud": "There exists x, P of x; for all x, P of x; there exists x, not P of x; for all x, not P of x.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There is at least one student who spends more than five hours every weekday in class.",
        "solution": "∃x requires one witnessing student.",
        "rubric": [
          "States that at least one student satisfies the full class-time condition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every student spends more than five hours every weekday in class.",
        "solution": "∀x applies P(x) to every student.",
        "rubric": [
          "States that every student satisfies the full class-time condition."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "At least one student does not spend more than five hours every weekday in class.",
        "solution": "The existential quantifier remains outside the negation.",
        "rubric": [
          "Claims existence of a student who fails the condition, not that every student fails it."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "No student spends more than five hours every weekday in class.",
        "solution": "Every student satisfies ¬P(x).",
        "rubric": [
          "States that all students fail the condition, equivalently no student satisfies it."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-006",
    "mode": "rubric",
    "answer": "a) Some student at your school has visited North Dakota. b) Every student at your school has visited North Dakota. c) No student at your school has visited North Dakota. d) Some student at your school has not visited North Dakota. e) Not every student at your school has visited North Dakota. f) No student at your school has visited North Dakota.",
    "solution": "The outer negations in (c) and (e) negate the whole quantified statement; the inner negations in (d) and (f) negate only N(x). Thus (c) and (f) agree, as do (d) and (e).",
    "hints": [
      "Keep track of whether ¬ appears before the quantifier or before N(x)."
    ],
    "rubric": [
      "All six translations use students at the school as the domain.",
      "Quantifier strength and negation scope are correct in every part.",
      "The equivalences (c) ≡ (f) and (d) ≡ (e) are preserved."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "At least one student at your school has visited North Dakota.",
        "solution": "An existential claim needs one example.",
        "rubric": [
          "Correct existential translation and domain."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every student at your school has visited North Dakota.",
        "solution": "A universal claim covers every student.",
        "rubric": [
          "Correct universal translation and domain."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "No student at your school has visited North Dakota.",
        "solution": "¬∃xN(x) denies the existence of a visitor.",
        "rubric": [
          "Denies any visitor; does not merely say not everyone visited."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "At least one student at your school has not visited North Dakota.",
        "solution": "∃x¬N(x) requires a nonvisitor.",
        "rubric": [
          "Correctly asserts at least one nonvisitor."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Not every student at your school has visited North Dakota.",
        "solution": "¬∀xN(x) says the universal claim fails, so at least one nonvisitor exists in a nonempty domain.",
        "rubric": [
          "Equivalent to part (d), not to no students having visited."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "No student at your school has visited North Dakota.",
        "solution": "Every student satisfies ¬N(x).",
        "rubric": [
          "Equivalent to part (c)."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-007",
    "mode": "rubric",
    "answer": "a) Every comedian is funny. b) Every person is a comedian and is funny. c) There is a person who, if they are a comedian, is funny. d) Some comedian is funny.",
    "solution": "An implication restricts the claim to cases where C(x) is true; a conjunction makes both claims about the same x. In particular, (c) does not assert that a comedian exists.",
    "hints": [
      "Translate → as “if … then …” and ∧ as “and”; do not turn (c) into “some comedian is funny.”"
    ],
    "rubric": [
      "All translations use the domain of all people.",
      "The implication in (a) and (c) is not replaced by conjunction.",
      "Parts (b) and (d) require both properties for the same person, and (c) makes no existence claim about comedians."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "All comedians are funny.",
        "solution": "For every person, comedian implies funny.",
        "rubric": [
          "Universal conditional restricted to comedians."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every person is a comedian and every person is funny.",
        "solution": "Both conjuncts must hold for each person.",
        "rubric": [
          "States that all people have both properties."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There is a person such that if that person is a comedian, then that person is funny.",
        "solution": "This is an existentially quantified conditional, not a claim that some comedian exists.",
        "rubric": [
          "Preserves ∃ and the conditional; does not change it to part (d)."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a comedian who is funny.",
        "solution": "One person must be both a comedian and funny.",
        "rubric": [
          "Existence of one person with both properties."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-008",
    "mode": "rubric",
    "answer": "a) Every rabbit hops. b) Every animal is a rabbit and hops. c) There is an animal such that if it is a rabbit, it hops. d) Some rabbit hops.",
    "solution": "The universal conditional in (a) says rabbits hop. The existential conditional in (c) is weaker than (d), which requires an actual hopping rabbit.",
    "hints": [
      "Use the animal domain and preserve the difference between implication and conjunction."
    ],
    "rubric": [
      "Every part keeps the domain of all animals.",
      "Conditionals remain conditionals and conjunctions require both properties.",
      "Part (c) does not assert the existence of a rabbit."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "All rabbits hop.",
        "solution": "R(x) → H(x) is required for every animal.",
        "rubric": [
          "Universal conditional about rabbits."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every animal is a rabbit and hops.",
        "solution": "Both properties are asserted of every animal.",
        "rubric": [
          "Universal conjunction with both properties."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There is an animal for which being a rabbit implies that it hops.",
        "solution": "The whole conditional is under ∃x.",
        "rubric": [
          "Existential conditional, without claiming a rabbit exists."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a rabbit that hops.",
        "solution": "A single animal satisfies both R and H.",
        "rubric": [
          "Existence of a hopping rabbit."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-009",
    "mode": "rubric",
    "answer": "a) ∃x(P(x) ∧ Q(x)); b) ∃x(P(x) ∧ ¬Q(x)); c) ∀x(P(x) ∨ Q(x)); d) ¬∃x(P(x) ∨ Q(x)), equivalently ∀x(¬P(x) ∧ ¬Q(x)).",
    "accepted": [
      "a) ∃x(P∧Q); b) ∃x(P∧¬Q); c) ∀x(P∨Q); d) ∀x¬(P∨Q)",
      "a) exists x(P and Q); b) exists x(P and not Q); c) all x(P or Q); d) not exists x(P or Q)"
    ],
    "checker": "logic",
    "solution": "“Some” uses ∃, “every” uses ∀, “but” is conjunction with negation, and “no” negates an existential. De Morgan's law gives the alternative in (d).",
    "hints": [
      "The domain already contains only students, so no extra student predicate is needed.",
      "For (d), negate the entire claim that a student knows at least one of the two."
    ],
    "readAloud": "P means can speak Russian; Q means knows C plus plus.",
    "verify": "In (d), both knowledge claims must be false for every student.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(P(x) ∧ Q(x))",
        "checker": "rubric",
        "solution": "One student has both abilities.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(P(x) ∧ Q(x))",
          "Explains the required reasoning and cases: One student has both abilities."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(P(x) ∧ ¬Q(x))",
        "checker": "rubric",
        "solution": "“But doesn't” contributes ∧¬Q(x).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(P(x) ∧ ¬Q(x))",
          "Explains the required reasoning and cases: “But doesn't” contributes ∧¬Q(x)."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(P(x) ∨ Q(x))",
        "checker": "rubric",
        "solution": "Every student has at least one of the two abilities.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x) ∨ Q(x))",
          "Explains the required reasoning and cases: Every student has at least one of the two abilities."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬∃x(P(x) ∨ Q(x))",
        "checker": "rubric",
        "solution": "No student has either ability; De Morgan gives ∀x(¬P(x)∧¬Q(x)).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x(P(x) ∨ Q(x))",
          "Explains the required reasoning and cases: No student has either ability; De Morgan gives ∀x(¬P(x)∧¬Q(x))."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(P(x) ∧ Q(x))",
      "Explains the required reasoning and cases: One student has both abilities.",
      "Gives a response equivalent to the authored model answer: ∃x(P(x) ∧ ¬Q(x))",
      "Explains the required reasoning and cases: “But doesn't” contributes ∧¬Q(x).",
      "Gives a response equivalent to the authored model answer: ∀x(P(x) ∨ Q(x))",
      "Explains the required reasoning and cases: Every student has at least one of the two abilities.",
      "Gives a response equivalent to the authored model answer: ¬∃x(P(x) ∨ Q(x))",
      "Explains the required reasoning and cases: No student has either ability; De Morgan gives ∀x(¬P(x)∧¬Q(x))."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-010",
    "mode": "rubric",
    "answer": "a) ∃x(C(x) ∧ D(x) ∧ F(x)); b) ∀x(C(x) ∨ D(x) ∨ F(x)); c) ∃x(C(x) ∧ F(x) ∧ ¬D(x)); d) ¬∃x(C(x) ∧ D(x) ∧ F(x)); e) ∃xC(x) ∧ ∃xD(x) ∧ ∃xF(x).",
    "accepted": [
      "a) ∃x(C∧D∧F); b) ∀x(C∨D∨F); c) ∃x(C∧F∧¬D); d) ∀x¬(C∧D∧F); e) ∃xC∧∃xD∧∃xF",
      "a) exists all three; b) all at least one; c) exists cat ferret not dog; d) no all three; e) separate existence for each animal"
    ],
    "checker": "logic",
    "solution": "Use one existential witness when the same student must have all listed pets. In (e), use three existential statements because the three animal owners may be different students.",
    "hints": [
      "Decide whether the properties belong to one student or may belong to different students.",
      "“No student” is ¬∃, or equivalently ∀ with a negated body."
    ],
    "verify": "Part (e) must not be a single ∃x(C(x)∧D(x)∧F(x)); that would repeat part (a).",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ D(x) ∧ F(x))",
        "checker": "rubric",
        "solution": "A single student has all three pets.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ D(x) ∧ F(x))",
          "Explains the required reasoning and cases: A single student has all three pets."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(C(x) ∨ D(x) ∨ F(x))",
        "checker": "rubric",
        "solution": "Each student has at least one of the animals.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x) ∨ D(x) ∨ F(x))",
          "Explains the required reasoning and cases: Each student has at least one of the animals."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ F(x) ∧ ¬D(x))",
        "checker": "rubric",
        "solution": "The same student has a cat and ferret and lacks a dog.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ F(x) ∧ ¬D(x))",
          "Explains the required reasoning and cases: The same student has a cat and ferret and lacks a dog."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬∃x(C(x) ∧ D(x) ∧ F(x))",
        "checker": "rubric",
        "solution": "Deny any student having all three.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x(C(x) ∧ D(x) ∧ F(x))",
          "Explains the required reasoning and cases: Deny any student having all three."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃xC(x) ∧ ∃xD(x) ∧ ∃xF(x)",
        "checker": "rubric",
        "solution": "There is a cat owner, a dog owner, and a ferret owner; these need not be the same student.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃xC(x) ∧ ∃xD(x) ∧ ∃xF(x)",
          "Explains the required reasoning and cases: There is a cat owner, a dog owner, and a ferret owner; these need not be the same student."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ D(x) ∧ F(x))",
      "Explains the required reasoning and cases: A single student has all three pets.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x) ∨ D(x) ∨ F(x))",
      "Explains the required reasoning and cases: Each student has at least one of the animals.",
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ F(x) ∧ ¬D(x))",
      "Explains the required reasoning and cases: The same student has a cat and ferret and lacks a dog.",
      "Gives a response equivalent to the authored model answer: ¬∃x(C(x) ∧ D(x) ∧ F(x))",
      "Explains the required reasoning and cases: Deny any student having all three.",
      "Gives a response equivalent to the authored model answer: ∃xC(x) ∧ ∃xD(x) ∧ ∃xF(x)",
      "Explains the required reasoning and cases: There is a cat owner, a dog owner, and a ferret owner; these need not be the same student."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-011",
    "mode": "auto",
    "answer": "a) True; b) True; c) False; d) False; e) True; f) False.",
    "accepted": [
      "T, T, F, F, T, F",
      "a) T; b) T; c) F; d) F; e) T; f) F"
    ],
    "checker": "truth",
    "solution": "Over the integers, x = x² means x(x−1)=0, so only x=0 and x=1 satisfy P(x). Thus P(0) and P(1) are true, P(2) and P(−1) false, an integer witness exists, and not every integer is a witness.",
    "hints": [
      "Solve x = x² by factoring, then use the solution set for the quantified parts."
    ],
    "verify": "The exact integer solution set is {0, 1}; existence needs one solution, universality needs every integer.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "0 = 0²."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "1 = 1²."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "2 ≠ 2² = 4."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "−1 ≠ (−1)² = 1."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "x = 0 (or 1) is an integer witness."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "For example, x = 2 does not satisfy P(x)."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-012",
    "mode": "auto",
    "answer": "a) True; b) True; c) False; d) True; e) False; f) True; g) False.",
    "accepted": [
      "T, T, F, T, F, T, F",
      "a) T; b) T; c) F; d) T; e) F; f) T; g) F"
    ],
    "checker": "truth",
    "solution": "Simplify x+1 > 2x to 1 > x. Thus Q(x) is true exactly for integers x<1. Both witnesses and counterexamples exist: 0 and −1 satisfy Q, while 1 does not.",
    "hints": [
      "Simplify the inequality once before substituting or evaluating quantifiers."
    ],
    "readAloud": "Q of x says x plus one is greater than two x, which simplifies to x is less than one.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "0+1 > 2·0 because 1>0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "−1+1 > 2(−1) because 0>−2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "1+1 > 2·1 is false because 2>2 is false."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "x=0 is a witness."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "x=1 is a counterexample."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "x=1 witnesses ¬Q(x)."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Q(0) is true, so ¬Q(0) is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-013",
    "mode": "auto",
    "answer": "a) True; b) True; c) True; d) False.",
    "accepted": [
      "T, T, T, F",
      "a) T; b) T; c) T; d) F"
    ],
    "checker": "truth",
    "solution": "Adding 1 always makes an integer larger. Both equations in (b) and (c) have n=0 as a witness. In (d), 3n≤4n is equivalent to n≥0, which fails for negative integers.",
    "hints": [
      "For existential statements, look for a simple witness such as 0; for universal statements, test negative values too."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "n+1−n=1>0 for every integer n."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "At n=0, 2n=3n=0."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "At n=0, n=−n=0."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "For n=−1, 3n=−3 and 4n=−4, so −3≤−4 is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-014",
    "mode": "auto",
    "answer": "a) True; b) True; c) True; d) False.",
    "accepted": [
      "T, T, T, F",
      "a) T; b) T; c) T; d) F"
    ],
    "checker": "truth",
    "solution": "For (a), x=−1 works. For (b), x=1/2 works because 1/16<1/4. Squaring removes a sign in (c). In (d), 2x>x is equivalent to x>0, so x=0 or any negative real is a counterexample.",
    "hints": [
      "Existence requires only one real witness; universality can be defeated by one real counterexample."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "(−1)³=−1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "At x=1/2, x⁴=1/16<1/4=x². (At x=0, 0<0 would be false, so 0 is not a witness.)"
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "(−x)²=(−1)²x²=x² for every real x."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "At x=0, 2x=x=0, so 2x>x is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-015",
    "mode": "auto",
    "answer": "a) True; b) False; c) True; d) False.",
    "accepted": [
      "T, F, T, F",
      "a) T; b) F; c) T; d) F"
    ],
    "checker": "truth",
    "solution": "Squares are nonnegative. No integer square equals 2. For integers, n²≥n because n(n−1)≥0: the factors are both nonnegative for n≥1 and both nonpositive for n≤0. No square is negative.",
    "hints": [
      "Do not use real-number witnesses such as √2 when the domain is integers.",
      "For (c), examine n(n−1) over consecutive integers."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Every integer square is at least 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Integer squares near 2 are 1²=1 and 2²=4; negative integers give the same squares, so none equals 2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "n²−n=n(n−1)≥0 for every integer n."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "No integer square is below 0."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-016",
    "mode": "auto",
    "answer": "a) True; b) False; c) True; d) False.",
    "accepted": [
      "T, F, T, F",
      "a) T; b) F; c) T; d) F"
    ],
    "checker": "truth",
    "solution": "Real witnesses x=√2 establish (a), while x²=−1 has no real solution. Since x²≥0, x²+2≥2≥1. The universal claim in (d) fails at x=0 and x=1.",
    "hints": [
      "Use the real domain: √2 is available, but imaginary solutions are not."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "x=√2 is real and x²=2."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "A real square cannot be negative."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "x²+2≥2 for all real x, hence it is at least 1."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "At x=0 (also x=1), x²=x."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-017",
    "mode": "rubric",
    "answer": "a) P(0)∨P(1)∨P(2)∨P(3)∨P(4); b) P(0)∧P(1)∧P(2)∧P(3)∧P(4); c) ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4); d) ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4); e) ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4); f) ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4).",
    "accepted": [
      "a) disjunction P(0) through P(4); b) conjunction P(0) through P(4); c) disjunction of negations; d) conjunction of negations; e) same as d; f) same as c",
      "a P0∨P1∨P2∨P3∨P4; b P0∧P1∧P2∧P3∧P4; c ¬P0∨¬P1∨¬P2∨¬P3∨¬P4; d ¬P0∧¬P1∧¬P2∧¬P3∧¬P4; e same d; f same c"
    ],
    "checker": "logic",
    "solution": "On a finite domain, ∃ is a disjunction over all elements and ∀ is a conjunction. Negating existence gives a conjunction of negations; negating universality gives a disjunction of negations.",
    "hints": [
      "List all five domain elements; do not omit 0.",
      "Use De Morgan's laws for (e) and (f)."
    ],
    "readAloud": "There exists means at least one listed case is true; for all means every listed case is true.",
    "verify": "Parts (c) and (f) match, and parts (d) and (e) match.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(0)∨P(1)∨P(2)∨P(3)∨P(4)",
        "checker": "rubric",
        "solution": "At least one listed proposition must be true.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(0)∨P(1)∨P(2)∨P(3)∨P(4)",
          "Explains the required reasoning and cases: At least one listed proposition must be true."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(0)∧P(1)∧P(2)∧P(3)∧P(4)",
        "checker": "rubric",
        "solution": "All five propositions must be true.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(0)∧P(1)∧P(2)∧P(3)∧P(4)",
          "Explains the required reasoning and cases: All five propositions must be true."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
        "checker": "rubric",
        "solution": "At least one listed value must fail P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
          "Explains the required reasoning and cases: At least one listed value must fail P."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
        "checker": "rubric",
        "solution": "Every listed value must fail P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
          "Explains the required reasoning and cases: Every listed value must fail P."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
        "checker": "rubric",
        "solution": "Negate the disjunction in (a), turning it into a conjunction of negations.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
          "Explains the required reasoning and cases: Negate the disjunction in (a), turning it into a conjunction of negations."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
        "checker": "rubric",
        "solution": "Negate the conjunction in (b), turning it into a disjunction of negations.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
          "Explains the required reasoning and cases: Negate the conjunction in (b), turning it into a disjunction of negations."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(0)∨P(1)∨P(2)∨P(3)∨P(4)",
      "Explains the required reasoning and cases: At least one listed proposition must be true.",
      "Gives a response equivalent to the authored model answer: P(0)∧P(1)∧P(2)∧P(3)∧P(4)",
      "Explains the required reasoning and cases: All five propositions must be true.",
      "Gives a response equivalent to the authored model answer: ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
      "Explains the required reasoning and cases: At least one listed value must fail P.",
      "Gives a response equivalent to the authored model answer: ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
      "Explains the required reasoning and cases: Every listed value must fail P.",
      "Gives a response equivalent to the authored model answer: ¬P(0)∧¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)",
      "Explains the required reasoning and cases: Negate the disjunction in (a), turning it into a conjunction of negations.",
      "Gives a response equivalent to the authored model answer: ¬P(0)∨¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)",
      "Explains the required reasoning and cases: Negate the conjunction in (b), turning it into a disjunction of negations."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-018",
    "mode": "rubric",
    "answer": "a) P(−2)∨P(−1)∨P(0)∨P(1)∨P(2); b) P(−2)∧P(−1)∧P(0)∧P(1)∧P(2); c) ¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2); d) ¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2); e) same as (d); f) same as (c).",
    "accepted": [
      "Existential becomes disjunction and universal conjunction over -2,-1,0,1,2; negations distributed by De Morgan",
      "a P-2∨P-1∨P0∨P1∨P2; b P-2∧P-1∧P0∧P1∧P2; c/f disjunction of negations; d/e conjunction of negations"
    ],
    "checker": "logic",
    "solution": "Expand ∃ over −2,−1,0,1,2 with ∨ and ∀ with ∧. Then apply De Morgan's laws to the outer negations.",
    "hints": [
      "Preserve the negative signs in P(−2) and P(−1)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(−2)∨P(−1)∨P(0)∨P(1)∨P(2)",
        "checker": "rubric",
        "solution": "The existential is a five-way disjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(−2)∨P(−1)∨P(0)∨P(1)∨P(2)",
          "Explains the required reasoning and cases: The existential is a five-way disjunction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(−2)∧P(−1)∧P(0)∧P(1)∧P(2)",
        "checker": "rubric",
        "solution": "The universal is a five-way conjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(−2)∧P(−1)∧P(0)∧P(1)∧P(2)",
          "Explains the required reasoning and cases: The universal is a five-way conjunction."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
        "checker": "rubric",
        "solution": "At least one negated proposition is true.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
          "Explains the required reasoning and cases: At least one negated proposition is true."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
        "checker": "rubric",
        "solution": "All five negated propositions are true.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
          "Explains the required reasoning and cases: All five negated propositions are true."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
        "checker": "rubric",
        "solution": "This is the negation of (a), so it equals (d).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
          "Explains the required reasoning and cases: This is the negation of (a), so it equals (d)."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
        "checker": "rubric",
        "solution": "This is the negation of (b), so it equals (c).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
          "Explains the required reasoning and cases: This is the negation of (b), so it equals (c)."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(−2)∨P(−1)∨P(0)∨P(1)∨P(2)",
      "Explains the required reasoning and cases: The existential is a five-way disjunction.",
      "Gives a response equivalent to the authored model answer: P(−2)∧P(−1)∧P(0)∧P(1)∧P(2)",
      "Explains the required reasoning and cases: The universal is a five-way conjunction.",
      "Gives a response equivalent to the authored model answer: ¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
      "Explains the required reasoning and cases: At least one negated proposition is true.",
      "Gives a response equivalent to the authored model answer: ¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
      "Explains the required reasoning and cases: All five negated propositions are true.",
      "Gives a response equivalent to the authored model answer: ¬P(−2)∧¬P(−1)∧¬P(0)∧¬P(1)∧¬P(2)",
      "Explains the required reasoning and cases: This is the negation of (a), so it equals (d).",
      "Gives a response equivalent to the authored model answer: ¬P(−2)∨¬P(−1)∨¬P(0)∨¬P(1)∨¬P(2)",
      "Explains the required reasoning and cases: This is the negation of (b), so it equals (c)."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-019",
    "mode": "rubric",
    "answer": "a) P(1)∨P(2)∨P(3)∨P(4)∨P(5); b) P(1)∧P(2)∧P(3)∧P(4)∧P(5); c) ¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)∧¬P(5); d) ¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5); e) [P(1)∧P(2)∧P(4)∧P(5)]∨[¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)].",
    "accepted": [
      "a disjunction; b conjunction; c conjunction of negations; d disjunction of negations; e conjunction excluding P3 OR disjunction of all negations",
      "e) (P1∧P2∧P4∧P5)∨(¬P1∨¬P2∨¬P3∨¬P4∨¬P5)"
    ],
    "checker": "logic",
    "solution": "Expand the finite quantifiers as usual. In (e), x=3 makes x≠3 false, so its implication is automatically true and contributes no P(3) conjunct to the first expansion.",
    "hints": [
      "For an implication in (e), check which domain element makes its hypothesis false.",
      "Keep the outer ∨ between the two expansions in (e)."
    ],
    "verify": "The first bracket in (e) omits P(3); the second bracket includes ¬P(3).",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(1)∨P(2)∨P(3)∨P(4)∨P(5)",
        "checker": "rubric",
        "solution": "Existence becomes disjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1)∨P(2)∨P(3)∨P(4)∨P(5)",
          "Explains the required reasoning and cases: Existence becomes disjunction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(1)∧P(2)∧P(3)∧P(4)∧P(5)",
        "checker": "rubric",
        "solution": "Universality becomes conjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1)∧P(2)∧P(3)∧P(4)∧P(5)",
          "Explains the required reasoning and cases: Universality becomes conjunction."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)∧¬P(5)",
        "checker": "rubric",
        "solution": "Negating existence requires every case to fail.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)∧¬P(5)",
          "Explains the required reasoning and cases: Negating existence requires every case to fail."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)",
        "checker": "rubric",
        "solution": "Negating universality requires at least one failure.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)",
          "Explains the required reasoning and cases: Negating universality requires at least one failure."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "[P(1)∧P(2)∧P(4)∧P(5)]∨[¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)]",
        "checker": "rubric",
        "solution": "The universal contributes P(1),P(2),P(4),P(5); the existential contributes the disjunction of all five negations.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: [P(1)∧P(2)∧P(4)∧P(5)]∨[¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)]",
          "Explains the required reasoning and cases: The universal contributes P(1),P(2),P(4),P(5); the existential contributes the disjunction of all five negations."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(1)∨P(2)∨P(3)∨P(4)∨P(5)",
      "Explains the required reasoning and cases: Existence becomes disjunction.",
      "Gives a response equivalent to the authored model answer: P(1)∧P(2)∧P(3)∧P(4)∧P(5)",
      "Explains the required reasoning and cases: Universality becomes conjunction.",
      "Gives a response equivalent to the authored model answer: ¬P(1)∧¬P(2)∧¬P(3)∧¬P(4)∧¬P(5)",
      "Explains the required reasoning and cases: Negating existence requires every case to fail.",
      "Gives a response equivalent to the authored model answer: ¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)",
      "Explains the required reasoning and cases: Negating universality requires at least one failure.",
      "Gives a response equivalent to the authored model answer: [P(1)∧P(2)∧P(4)∧P(5)]∨[¬P(1)∨¬P(2)∨¬P(3)∨¬P(4)∨¬P(5)]",
      "Explains the required reasoning and cases: The universal contributes P(1),P(2),P(4),P(5); the existential contributes the disjunction of all five negations."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-020",
    "mode": "rubric",
    "answer": "a) P(−5)∨P(−3)∨P(−1)∨P(1)∨P(3)∨P(5); b) P(−5)∧P(−3)∧P(−1)∧P(1)∧P(3)∧P(5); c) P(−5)∧P(−3)∧P(−1)∧P(3)∧P(5); d) P(1)∨P(3)∨P(5); e) [¬P(−5)∨¬P(−3)∨¬P(−1)∨¬P(1)∨¬P(3)∨¬P(5)]∧[P(−5)∧P(−3)∧P(−1)].",
    "accepted": [
      "a disjunction all six; b conjunction all six; c conjunction excluding P1; d P1∨P3∨P5; e disjunction of all six negations AND P-5∧P-3∧P-1",
      "c) all P except P(1); d) positive cases only; e) at least one failure and all negative cases true"
    ],
    "checker": "logic",
    "solution": "Filter the domain according to each condition before expanding. For (c), x=1 gives a true implication without P(1); for (d), only 1,3,5 are nonnegative; for (e), only −5,−3,−1 are negative.",
    "hints": [
      "The domain has six elements, but conditions in (c), (d), and (e) remove some contributions.",
      "In (e), preserve the outer ∧ between the existential and universal expansions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(−5)∨P(−3)∨P(−1)∨P(1)∨P(3)∨P(5)",
        "checker": "rubric",
        "solution": "Disjoin all six cases.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(−5)∨P(−3)∨P(−1)∨P(1)∨P(3)∨P(5)",
          "Explains the required reasoning and cases: Disjoin all six cases."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(−5)∧P(−3)∧P(−1)∧P(1)∧P(3)∧P(5)",
        "checker": "rubric",
        "solution": "Conjoin all six cases.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(−5)∧P(−3)∧P(−1)∧P(1)∧P(3)∧P(5)",
          "Explains the required reasoning and cases: Conjoin all six cases."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "P(−5)∧P(−3)∧P(−1)∧P(3)∧P(5)",
        "checker": "rubric",
        "solution": "At x=1 the implication is vacuously true; all other cases require P(x).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(−5)∧P(−3)∧P(−1)∧P(3)∧P(5)",
          "Explains the required reasoning and cases: At x=1 the implication is vacuously true; all other cases require P(x)."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "P(1)∨P(3)∨P(5)",
        "checker": "rubric",
        "solution": "Only positive domain values satisfy x≥0, and each such existential case requires P(x).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1)∨P(3)∨P(5)",
          "Explains the required reasoning and cases: Only positive domain values satisfy x≥0, and each such existential case requires P(x)."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "[¬P(−5)∨¬P(−3)∨¬P(−1)∨¬P(1)∨¬P(3)∨¬P(5)]∧[P(−5)∧P(−3)∧P(−1)]",
        "checker": "rubric",
        "solution": "The first factor says some case fails P; the second says P holds at all three negative values.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: [¬P(−5)∨¬P(−3)∨¬P(−1)∨¬P(1)∨¬P(3)∨¬P(5)]∧[P(−5)∧P(−3)∧P(−1)]",
          "Explains the required reasoning and cases: The first factor says some case fails P; the second says P holds at all three negative values."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(−5)∨P(−3)∨P(−1)∨P(1)∨P(3)∨P(5)",
      "Explains the required reasoning and cases: Disjoin all six cases.",
      "Gives a response equivalent to the authored model answer: P(−5)∧P(−3)∧P(−1)∧P(1)∧P(3)∧P(5)",
      "Explains the required reasoning and cases: Conjoin all six cases.",
      "Gives a response equivalent to the authored model answer: P(−5)∧P(−3)∧P(−1)∧P(3)∧P(5)",
      "Explains the required reasoning and cases: At x=1 the implication is vacuously true; all other cases require P(x).",
      "Gives a response equivalent to the authored model answer: P(1)∨P(3)∨P(5)",
      "Explains the required reasoning and cases: Only positive domain values satisfy x≥0, and each such existential case requires P(x).",
      "Gives a response equivalent to the authored model answer: [¬P(−5)∨¬P(−3)∨¬P(−1)∨¬P(1)∨¬P(3)∨¬P(5)]∧[P(−5)∧P(−3)∧P(−1)]",
      "Explains the required reasoning and cases: The first factor says some case fails P; the second says P holds at all three negative values."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-021",
    "mode": "rubric",
    "answer": "Examples: a) True domain: the students enrolled in one discrete mathematics class. False domain: that class together with a student not studying discrete mathematics. b) True: a domain of people aged 30 and 40. False: people aged 20 and 30. c) True: two siblings with the same mother. False: two people with different mothers. d) True: a domain containing only one person (vacuously). False: two siblings who share a grandmother.",
    "solution": "A domain is part of the statement's meaning. Choose membership deliberately, then test the universal claim on every pair; a one-person domain makes claims about two different people vacuously true.",
    "hints": [
      "You may choose a small finite domain.",
      "For (c) and (d), check every pair of different people, not just one convenient pair."
    ],
    "rubric": [
      "Each part supplies one explicit domain making the statement true and another making it false.",
      "The truth and falsity claims are justified by the properties of everyone or every pair in the chosen domains.",
      "Parts (c) and (d) correctly handle pairs of different people; a vacuous one-person true domain is acceptable in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True: all students in a discrete mathematics class. False: those students plus one student who is not studying discrete mathematics.",
        "solution": "The added nonstudent of the subject is a counterexample in the false domain.",
        "rubric": [
          "Both domains and their different truth outcomes are correct."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "True: {a 30-year-old, a 40-year-old}. False: {a 20-year-old, a 30-year-old}.",
        "solution": "The 20-year-old defeats the universal claim in the second domain.",
        "rubric": [
          "Ages in each domain justify the stated truth value; older than 21 is strict."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: {Ana, Ben}, where they have the same mother. False: {Ana, Chen}, where their mothers differ.",
        "solution": "Check the mother of each person in each pair.",
        "rubric": [
          "True domain has one common mother for every pair; false domain has a pair with different mothers."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "True: {Ana}, vacuously because there are no two different people. False: {Ana, Ben}, siblings with the same grandmother.",
        "solution": "The false domain provides the forbidden pair; the singleton makes the universal pair condition vacuously true.",
        "rubric": [
          "Correctly addresses different-person pairs and gives valid true and false domains."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-022",
    "mode": "rubric",
    "answer": "Examples: a) True: a domain of two Hindi speakers. False: a Hindi speaker and a non-Hindi speaker. b) True: {a 20-year-old, a 30-year-old}. False: {an 18-year-old, a 19-year-old}. c) True: {Alex A., Alex B.}. False: {Alex, Beth}. d) True: four people in which one knows the other three. False: three people none of whom knows anyone else.",
    "solution": "For universal claims, every domain member must pass; for existential claims, one witness is enough. In (d), “more than two other people” means at least three distinct others.",
    "hints": [
      "For (b), falsity requires everyone to be 21 or younger, since it is an existence claim.",
      "For (d), a two-person domain also makes the statement false."
    ],
    "rubric": [
      "Every part gives explicit true and false domains with the claimed outcomes.",
      "Universal versus existential requirements are applied correctly.",
      "Part (d) uses at least three other people for a witness and excludes such a witness in the false domain."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True: {two people who both speak Hindi}. False: {one Hindi speaker, one person who does not speak Hindi}.",
        "solution": "The non-Hindi speaker defeats universality.",
        "rubric": [
          "Correct true and false domains for a universal language claim."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "True: {a 30-year-old, a 20-year-old}. False: {an 18-year-old, a 19-year-old}.",
        "solution": "The 30-year-old is an existential witness; no one in the false domain is over 21.",
        "rubric": [
          "True domain has someone strictly over 21; false domain has nobody over 21."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: {Alex A., Alex B.}. False: {Alex, Beth}.",
        "solution": "Same first names make the pair condition true; different names make it false.",
        "rubric": [
          "Correct same-name true domain and different-name false domain."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "True: {Ana, Ben, Chen, Dev}, where Ana knows Ben, Chen, and Dev. False: {Ana, Ben, Chen}, where nobody knows anyone.",
        "solution": "Ana knows three others in the true domain; the false domain has no witness.",
        "rubric": [
          "Witness knows at least three distinct others; false domain contains no such person."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-023",
    "mode": "rubric",
    "answer": "Let H,F,B,M,L mean respectively speaks Hindi, is friendly, was born in California, has been in a movie, and has taken logic programming; in the all-people domain let C(x) mean x is in your class. a) ∃xH(x); ∃x(C(x)∧H(x)). b) ∀xF(x); ∀x(C(x)→F(x)). c) ∃x¬B(x); ∃x(C(x)∧¬B(x)). d) ∃xM(x); ∃x(C(x)∧M(x)). e) ¬∃xL(x), or ∀x¬L(x); ¬∃x(C(x)∧L(x)), or ∀x(C(x)→¬L(x)).",
    "accepted": [
      "Class domain: a ∃H; b ∀F; c ∃¬B; d ∃M; e ∀¬L. All people: restrict existentials with C∧ and universals with C→",
      "a exists class Hindi; b all class friendly; c exists class not California; d exists class movie; e no class logic programming"
    ],
    "checker": "logic",
    "solution": "When the domain is already the class, use the property directly. Over all people, existential class statements need C(x)∧…, while universal class statements need C(x)→….",
    "hints": [
      "Use conjunction to restrict an existential and implication to restrict a universal.",
      "For (e), negate the whole existence statement."
    ],
    "startHere": "C(x) means x belongs to your class; it is needed only in the all-people domain.",
    "verify": "No all-people existential should be ∃x(C(x)→…), and no universal should be ∀x(C(x)∧…).",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Class domain: ∃xH(x). All people: ∃x(C(x)∧H(x)).",
        "checker": "rubric",
        "solution": "The wider domain must select a class member who speaks Hindi.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃xH(x). All people: ∃x(C(x)∧H(x)).",
          "Explains the required reasoning and cases: The wider domain must select a class member who speaks Hindi."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Class domain: ∀xF(x). All people: ∀x(C(x)→F(x)).",
        "checker": "rubric",
        "solution": "People outside the class make the conditional vacuously true.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∀xF(x). All people: ∀x(C(x)→F(x)).",
          "Explains the required reasoning and cases: People outside the class make the conditional vacuously true."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Class domain: ∃x¬B(x). All people: ∃x(C(x)∧¬B(x)).",
        "checker": "rubric",
        "solution": "The witness must be in class and not California-born.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃x¬B(x). All people: ∃x(C(x)∧¬B(x)).",
          "Explains the required reasoning and cases: The witness must be in class and not California-born."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Class domain: ∃xM(x). All people: ∃x(C(x)∧M(x)).",
        "checker": "rubric",
        "solution": "One class member must have movie experience.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃xM(x). All people: ∃x(C(x)∧M(x)).",
          "Explains the required reasoning and cases: One class member must have movie experience."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Class domain: ¬∃xL(x) ≡ ∀x¬L(x). All people: ¬∃x(C(x)∧L(x)) ≡ ∀x(C(x)→¬L(x)).",
        "checker": "rubric",
        "solution": "No class member has taken logic programming.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ¬∃xL(x) ≡ ∀x¬L(x). All people: ¬∃x(C(x)∧L(x)) ≡ ∀x(C(x)→¬L(x)).",
          "Explains the required reasoning and cases: No class member has taken logic programming."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: Class domain: ∃xH(x). All people: ∃x(C(x)∧H(x)).",
      "Explains the required reasoning and cases: The wider domain must select a class member who speaks Hindi.",
      "Gives a response equivalent to the authored model answer: Class domain: ∀xF(x). All people: ∀x(C(x)→F(x)).",
      "Explains the required reasoning and cases: People outside the class make the conditional vacuously true.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃x¬B(x). All people: ∃x(C(x)∧¬B(x)).",
      "Explains the required reasoning and cases: The witness must be in class and not California-born.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃xM(x). All people: ∃x(C(x)∧M(x)).",
      "Explains the required reasoning and cases: One class member must have movie experience.",
      "Gives a response equivalent to the authored model answer: Class domain: ¬∃xL(x) ≡ ∀x¬L(x). All people: ¬∃x(C(x)∧L(x)) ≡ ∀x(C(x)→¬L(x)).",
      "Explains the required reasoning and cases: No class member has taken logic programming."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-024",
    "mode": "rubric",
    "answer": "Let P,F,W,Q,R mean has a cell phone, has seen a foreign movie, can swim, can solve quadratic equations, and wants to be rich; let C(x) mean x is in your class. a) ∀xP(x); ∀x(C(x)→P(x)). b) ∃xF(x); ∃x(C(x)∧F(x)). c) ∃x¬W(x); ∃x(C(x)∧¬W(x)). d) ∀xQ(x); ∀x(C(x)→Q(x)). e) ∃x¬R(x); ∃x(C(x)∧¬R(x)).",
    "accepted": [
      "Class domain: a ∀P; b ∃F; c ∃¬W; d ∀Q; e ∃¬R. All people: C restricts using implication for a,d and conjunction for b,c,e",
      "a all class phone; b some class foreign movie; c some class cannot swim; d all class quadratics; e some class not rich desire"
    ],
    "checker": "logic",
    "solution": "Use the class domain directly. Over all people, select class members with C(x), using → for “every” and ∧ for “some.” Negate the stated ability or desire where required.",
    "hints": [
      "“Cannot swim” is ¬W(x), and “does not want to be rich” is ¬R(x).",
      "Only include C(x) in the second, all-people version."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Class domain: ∀xP(x). All people: ∀x(C(x)→P(x)).",
        "checker": "rubric",
        "solution": "Every class member has a phone.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∀xP(x). All people: ∀x(C(x)→P(x)).",
          "Explains the required reasoning and cases: Every class member has a phone."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Class domain: ∃xF(x). All people: ∃x(C(x)∧F(x)).",
        "checker": "rubric",
        "solution": "One class member has seen a foreign movie.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃xF(x). All people: ∃x(C(x)∧F(x)).",
          "Explains the required reasoning and cases: One class member has seen a foreign movie."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Class domain: ∃x¬W(x). All people: ∃x(C(x)∧¬W(x)).",
        "checker": "rubric",
        "solution": "The witness is a class member who cannot swim.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃x¬W(x). All people: ∃x(C(x)∧¬W(x)).",
          "Explains the required reasoning and cases: The witness is a class member who cannot swim."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Class domain: ∀xQ(x). All people: ∀x(C(x)→Q(x)).",
        "checker": "rubric",
        "solution": "Every class member can solve quadratics.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∀xQ(x). All people: ∀x(C(x)→Q(x)).",
          "Explains the required reasoning and cases: Every class member can solve quadratics."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Class domain: ∃x¬R(x). All people: ∃x(C(x)∧¬R(x)).",
        "checker": "rubric",
        "solution": "Some class member does not want to be rich.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃x¬R(x). All people: ∃x(C(x)∧¬R(x)).",
          "Explains the required reasoning and cases: Some class member does not want to be rich."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: Class domain: ∀xP(x). All people: ∀x(C(x)→P(x)).",
      "Explains the required reasoning and cases: Every class member has a phone.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃xF(x). All people: ∃x(C(x)∧F(x)).",
      "Explains the required reasoning and cases: One class member has seen a foreign movie.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃x¬W(x). All people: ∃x(C(x)∧¬W(x)).",
      "Explains the required reasoning and cases: The witness is a class member who cannot swim.",
      "Gives a response equivalent to the authored model answer: Class domain: ∀xQ(x). All people: ∀x(C(x)→Q(x)).",
      "Explains the required reasoning and cases: Every class member can solve quadratics.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃x¬R(x). All people: ∃x(C(x)∧¬R(x)).",
      "Explains the required reasoning and cases: Some class member does not want to be rich."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-025",
    "mode": "rubric",
    "answer": "Over all people, let F(x) mean x is your friend and P(x) mean x is perfect. a) ¬∃xP(x) ≡ ∀x¬P(x); b) ¬∀xP(x) ≡ ∃x¬P(x); c) ∀x(F(x)→P(x)); d) ∃x(F(x)∧P(x)); e) ∀x(F(x)∧P(x)); f) ¬∀xF(x)∨∃x¬P(x), equivalently ∃x¬F(x)∨∃x¬P(x).",
    "accepted": [
      "a ∀¬P; b ∃¬P; c ∀(F→P); d ∃(F∧P); e ∀(F∧P); f ∃¬F∨∃¬P",
      "a no perfect people; b some not perfect; c friends imply perfect; d some friend perfect; e all friend and perfect; f not all friends or some imperfect"
    ],
    "checker": "logic",
    "solution": "“No one” denies existence; “not everyone” denies universality. Friendship restricts the universal in (c) with implication and the existential in (d) with conjunction. In (e), both properties apply to every person.",
    "hints": [
      "Do not confuse “no one is perfect” with “not everyone is perfect.”",
      "In (f), keep the outer disjunction."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "¬∃xP(x), equivalently ∀x¬P(x)",
        "checker": "rubric",
        "solution": "There is no perfect person.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃xP(x), equivalently ∀x¬P(x)",
          "Explains the required reasoning and cases: There is no perfect person."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "¬∀xP(x), equivalently ∃x¬P(x)",
        "checker": "rubric",
        "solution": "At least one person is not perfect.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∀xP(x), equivalently ∃x¬P(x)",
          "Explains the required reasoning and cases: At least one person is not perfect."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(F(x)→P(x))",
        "checker": "rubric",
        "solution": "Every friend must be perfect; nonfriends are unrestricted.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(F(x)→P(x))",
          "Explains the required reasoning and cases: Every friend must be perfect; nonfriends are unrestricted."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x(F(x)∧P(x))",
        "checker": "rubric",
        "solution": "One person is both your friend and perfect.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(F(x)∧P(x))",
          "Explains the required reasoning and cases: One person is both your friend and perfect."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀x(F(x)∧P(x))",
        "checker": "rubric",
        "solution": "Every person has both properties; the separated form is equivalent.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(F(x)∧P(x))",
          "Explains the required reasoning and cases: Every person has both properties; the separated form is equivalent."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬∀xF(x)∨∃x¬P(x)",
        "checker": "rubric",
        "solution": "The first clause says someone is not your friend; the second says someone is imperfect.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∀xF(x)∨∃x¬P(x)",
          "Explains the required reasoning and cases: The first clause says someone is not your friend; the second says someone is imperfect."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬∃xP(x), equivalently ∀x¬P(x)",
      "Explains the required reasoning and cases: There is no perfect person.",
      "Gives a response equivalent to the authored model answer: ¬∀xP(x), equivalently ∃x¬P(x)",
      "Explains the required reasoning and cases: At least one person is not perfect.",
      "Gives a response equivalent to the authored model answer: ∀x(F(x)→P(x))",
      "Explains the required reasoning and cases: Every friend must be perfect; nonfriends are unrestricted.",
      "Gives a response equivalent to the authored model answer: ∃x(F(x)∧P(x))",
      "Explains the required reasoning and cases: One person is both your friend and perfect.",
      "Gives a response equivalent to the authored model answer: ∀x(F(x)∧P(x))",
      "Explains the required reasoning and cases: Every person has both properties; the separated form is equivalent.",
      "Gives a response equivalent to the authored model answer: ¬∀xF(x)∨∃x¬P(x)",
      "Explains the required reasoning and cases: The first clause says someone is not your friend; the second says someone is imperfect."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-026",
    "mode": "rubric",
    "answer": "Three forms for each: (1) domain people at school/class as appropriate; (2) domain all people with membership predicate S(x) for school or C(x) for class; (3) domain all people using A(x,school)/A(x,class) for affiliation and binary relation predicates. a) (1) ∃xU(x), U=visited Uzbekistan; (2) ∃x(S(x)∧U(x)); (3) ∃x(A(x,school)∧V(x,Uzbekistan)), V(x,y)=x visited y. b) (1) ∀x(H(x)∧K(x)), H=studied calculus, K=studied C++; (2) ∀x(C(x)→(H(x)∧K(x))); (3) ∀x(A(x,class)→(T(x,calculus)∧T(x,C++))), T(x,y)=x studied y. c) (1) ¬∃x(B(x)∧M(x)), B=owns bicycle, M=owns motorcycle; (2) ¬∃x(S(x)∧B(x)∧M(x)); (3) ¬∃x(A(x,school)∧O(x,bicycle)∧O(x,motorcycle)), O(x,y)=x owns y. d) (1) ∃x¬H(x), H=happy; (2) ∃x(S(x)∧¬H(x)); (3) ∃x(A(x,school)∧¬H(x)). e) (1) ∀xB(x), B=born in twentieth century; (2) ∀x(S(x)→B(x)); (3) ∀x(A(x,school)→Y(x,twentieth century)), Y(x,y)=x was born in y.",
    "accepted": [
      "Each part accepts equivalent forms with domain school/class, all people plus unary membership, and binary affiliation/relations; existential restrictions use ∧ and universal restrictions use →",
      "a school some Uzbekistan; b class all calculus and C++; c school no both bike motorcycle; d school some unhappy; e school all twentieth century, each in three domain forms"
    ],
    "checker": "logic",
    "solution": "The three constructions are: a narrow domain; all people with a unary membership predicate; and all people with a binary affiliation predicate plus binary relation predicates where useful. Equivalent predicate names and variable renaming are acceptable.",
    "hints": [
      "Give three genuinely different domain/predicate formulations, not just three spellings of one formula.",
      "Use the same affiliation restriction pattern throughout: ∃ with ∧ and ∀ with →."
    ],
    "verify": "Every formula must still mention the school or class in the wide-domain versions.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃xU(x) on school people; ∃x(S(x)∧U(x)) on all people; ∃x(A(x,school)∧V(x,Uzbekistan)) with binary affiliation and visitation.",
        "checker": "rubric",
        "solution": "The witness belongs to the school and visited Uzbekistan in every formulation.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃xU(x) on school people; ∃x(S(x)∧U(x)) on all people; ∃x(A(x,school)∧V(x,Uzbekistan)) with binary affiliation and visitation.",
          "Explains the required reasoning and cases: The witness belongs to the school and visited Uzbekistan in every formulation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(H(x)∧K(x)) on class people; ∀x(C(x)→(H(x)∧K(x))) on all people; ∀x(A(x,class)→(T(x,calculus)∧T(x,C++))) with binary relations.",
        "checker": "rubric",
        "solution": "Every class member studied both subjects.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(H(x)∧K(x)) on class people; ∀x(C(x)→(H(x)∧K(x))) on all people; ∀x(A(x,class)→(T(x,calculus)∧T(x,C++))) with binary relations.",
          "Explains the required reasoning and cases: Every class member studied both subjects."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬∃x(B(x)∧M(x)) on school people; ¬∃x(S(x)∧B(x)∧M(x)) on all people; ¬∃x(A(x,school)∧O(x,bicycle)∧O(x,motorcycle)) with binary relations.",
        "checker": "rubric",
        "solution": "No school person owns both vehicles; universal negated forms are equivalent.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x(B(x)∧M(x)) on school people; ¬∃x(S(x)∧B(x)∧M(x)) on all people; ¬∃x(A(x,school)∧O(x,bicycle)∧O(x,motorcycle)) with binary relations.",
          "Explains the required reasoning and cases: No school person owns both vehicles; universal negated forms are equivalent."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x¬H(x) on school people; ∃x(S(x)∧¬H(x)) on all people; ∃x(A(x,school)∧¬H(x)) with binary affiliation.",
        "checker": "rubric",
        "solution": "The unhappy witness must be affiliated with the school.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x¬H(x) on school people; ∃x(S(x)∧¬H(x)) on all people; ∃x(A(x,school)∧¬H(x)) with binary affiliation.",
          "Explains the required reasoning and cases: The unhappy witness must be affiliated with the school."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀xB(x) on school people; ∀x(S(x)→B(x)) on all people; ∀x(A(x,school)→Y(x,twentieth century)) with binary affiliation and birth-period relation.",
        "checker": "rubric",
        "solution": "Every school person was born in the twentieth century.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀xB(x) on school people; ∀x(S(x)→B(x)) on all people; ∀x(A(x,school)→Y(x,twentieth century)) with binary affiliation and birth-period relation.",
          "Explains the required reasoning and cases: Every school person was born in the twentieth century."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃xU(x) on school people; ∃x(S(x)∧U(x)) on all people; ∃x(A(x,school)∧V(x,Uzbekistan)) with binary affiliation and visitation.",
      "Explains the required reasoning and cases: The witness belongs to the school and visited Uzbekistan in every formulation.",
      "Gives a response equivalent to the authored model answer: ∀x(H(x)∧K(x)) on class people; ∀x(C(x)→(H(x)∧K(x))) on all people; ∀x(A(x,class)→(T(x,calculus)∧T(x,C++))) with binary relations.",
      "Explains the required reasoning and cases: Every class member studied both subjects.",
      "Gives a response equivalent to the authored model answer: ¬∃x(B(x)∧M(x)) on school people; ¬∃x(S(x)∧B(x)∧M(x)) on all people; ¬∃x(A(x,school)∧O(x,bicycle)∧O(x,motorcycle)) with binary relations.",
      "Explains the required reasoning and cases: No school person owns both vehicles; universal negated forms are equivalent.",
      "Gives a response equivalent to the authored model answer: ∃x¬H(x) on school people; ∃x(S(x)∧¬H(x)) on all people; ∃x(A(x,school)∧¬H(x)) with binary affiliation.",
      "Explains the required reasoning and cases: The unhappy witness must be affiliated with the school.",
      "Gives a response equivalent to the authored model answer: ∀xB(x) on school people; ∀x(S(x)→B(x)) on all people; ∀x(A(x,school)→Y(x,twentieth century)) with binary affiliation and birth-period relation.",
      "Explains the required reasoning and cases: Every school person was born in the twentieth century."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-027",
    "mode": "rubric",
    "answer": "Use (1) school/class domain, (2) all people with S(x)/C(x) membership, and (3) all people with binary affiliation A(x,school)/A(x,class). a) ∃xV(x); ∃x(S(x)∧V(x)); ∃x(A(x,school)∧L(x,Vietnam)), L=lived in. b) ∃x¬H(x); ∃x(S(x)∧¬H(x)); ∃x(A(x,school)∧¬K(x,Hindi)), K=can speak. c) ∃x(J(x)∧P(x)∧Cplusplus(x)); ∃x(S(x)∧J(x)∧P(x)∧Cplusplus(x)); ∃x(A(x,school)∧K(x,Java)∧K(x,Prolog)∧K(x,C++)), K=knows. d) ∀xT(x); ∀x(C(x)→T(x)); ∀x(A(x,class)→E(x,Thai food)), E=enjoys. e) ∃x¬Hockey(x); ∃x(C(x)∧¬Hockey(x)); ∃x(A(x,class)∧¬Plays(x,hockey)).",
    "accepted": [
      "Equivalent predicate names and three domain constructions accepted; a some school Vietnam, b some school not Hindi, c some school all three languages, d all class Thai, e some class not hockey",
      "Each answer must include narrow domain, all people unary membership, and binary affiliation/relation forms with correct quantifier restriction"
    ],
    "checker": "logic",
    "solution": "Vary the domain and predicate arity systematically. A single existential witness must have every property listed in (c), while the universal in (d) restricts only class members.",
    "hints": [
      "State what each predicate means in your own formulation.",
      "Do not replace the three-language conjunction in (c) with three unrelated witnesses."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "School domain: ∃xV(x). All people: ∃x(S(x)∧V(x)). Binary: ∃x(A(x,school)∧L(x,Vietnam)).",
        "checker": "rubric",
        "solution": "One school student has lived in Vietnam.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: School domain: ∃xV(x). All people: ∃x(S(x)∧V(x)). Binary: ∃x(A(x,school)∧L(x,Vietnam)).",
          "Explains the required reasoning and cases: One school student has lived in Vietnam."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "School domain: ∃x¬H(x). All people: ∃x(S(x)∧¬H(x)). Binary: ∃x(A(x,school)∧¬K(x,Hindi)).",
        "checker": "rubric",
        "solution": "One school student cannot speak Hindi.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: School domain: ∃x¬H(x). All people: ∃x(S(x)∧¬H(x)). Binary: ∃x(A(x,school)∧¬K(x,Hindi)).",
          "Explains the required reasoning and cases: One school student cannot speak Hindi."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "School domain: ∃x(J(x)∧P(x)∧Cplusplus(x)). All people: ∃x(S(x)∧J(x)∧P(x)∧Cplusplus(x)). Binary: ∃x(A(x,school)∧K(x,Java)∧K(x,Prolog)∧K(x,C++)).",
        "checker": "rubric",
        "solution": "The same student must know all three languages.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: School domain: ∃x(J(x)∧P(x)∧Cplusplus(x)). All people: ∃x(S(x)∧J(x)∧P(x)∧Cplusplus(x)). Binary: ∃x(A(x,school)∧K(x,Java)∧K(x,Prolog)∧K(x,C++)).",
          "Explains the required reasoning and cases: The same student must know all three languages."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Class domain: ∀xT(x). All people: ∀x(C(x)→T(x)). Binary: ∀x(A(x,class)→E(x,Thai food)).",
        "checker": "rubric",
        "solution": "Every class member enjoys Thai food.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∀xT(x). All people: ∀x(C(x)→T(x)). Binary: ∀x(A(x,class)→E(x,Thai food)).",
          "Explains the required reasoning and cases: Every class member enjoys Thai food."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Class domain: ∃x¬Hockey(x). All people: ∃x(C(x)∧¬Hockey(x)). Binary: ∃x(A(x,class)∧¬Plays(x,hockey)).",
        "checker": "rubric",
        "solution": "One class member does not play hockey.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Class domain: ∃x¬Hockey(x). All people: ∃x(C(x)∧¬Hockey(x)). Binary: ∃x(A(x,class)∧¬Plays(x,hockey)).",
          "Explains the required reasoning and cases: One class member does not play hockey."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: School domain: ∃xV(x). All people: ∃x(S(x)∧V(x)). Binary: ∃x(A(x,school)∧L(x,Vietnam)).",
      "Explains the required reasoning and cases: One school student has lived in Vietnam.",
      "Gives a response equivalent to the authored model answer: School domain: ∃x¬H(x). All people: ∃x(S(x)∧¬H(x)). Binary: ∃x(A(x,school)∧¬K(x,Hindi)).",
      "Explains the required reasoning and cases: One school student cannot speak Hindi.",
      "Gives a response equivalent to the authored model answer: School domain: ∃x(J(x)∧P(x)∧Cplusplus(x)). All people: ∃x(S(x)∧J(x)∧P(x)∧Cplusplus(x)). Binary: ∃x(A(x,school)∧K(x,Java)∧K(x,Prolog)∧K(x,C++)).",
      "Explains the required reasoning and cases: The same student must know all three languages.",
      "Gives a response equivalent to the authored model answer: Class domain: ∀xT(x). All people: ∀x(C(x)→T(x)). Binary: ∀x(A(x,class)→E(x,Thai food)).",
      "Explains the required reasoning and cases: Every class member enjoys Thai food.",
      "Gives a response equivalent to the authored model answer: Class domain: ∃x¬Hockey(x). All people: ∃x(C(x)∧¬Hockey(x)). Binary: ∃x(A(x,class)∧¬Plays(x,hockey)).",
      "Explains the required reasoning and cases: One class member does not play hockey."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-028",
    "mode": "rubric",
    "answer": "Over all things, let T(x)=x is one of your tools, C(x)=x is in the correct place, E(x)=x is in excellent condition. a) ∃x¬C(x); b) ∀x(T(x)→(C(x)∧E(x))); c) ∀x(C(x)∧E(x)); d) ¬∃x(C(x)∧E(x)) ≡ ∀x(¬C(x)∨¬E(x)); e) ∃x(T(x)∧¬C(x)∧E(x)).",
    "accepted": [
      "a exists not C; b all T implies C and E; c all C and E; d no C and E; e exists T and not C and E",
      "a ∃¬C; b ∀(T→C∧E); c ∀(C∧E); d ∀(¬C∨¬E); e ∃(T∧¬C∧E)"
    ],
    "checker": "logic",
    "solution": "“Something” and “one” use ∃; “all” and “everything” use ∀. Tools restrict a universal with implication, while a particular tool is selected by conjunction. “Nothing” negates existence of the full conjunction.",
    "hints": [
      "In (e), the same tool is misplaced and in excellent condition.",
      "Part (d) does not say that everything fails both conditions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x¬C(x)",
        "checker": "rubric",
        "solution": "At least one thing is not correctly placed.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x¬C(x)",
          "Explains the required reasoning and cases: At least one thing is not correctly placed."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(T(x)→(C(x)∧E(x)))",
        "checker": "rubric",
        "solution": "Every tool has both properties.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(T(x)→(C(x)∧E(x)))",
          "Explains the required reasoning and cases: Every tool has both properties."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(C(x)∧E(x))",
        "checker": "rubric",
        "solution": "Everything has both properties.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x)∧E(x))",
          "Explains the required reasoning and cases: Everything has both properties."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬∃x(C(x)∧E(x))",
        "checker": "rubric",
        "solution": "Nothing has both properties simultaneously.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x(C(x)∧E(x))",
          "Explains the required reasoning and cases: Nothing has both properties simultaneously."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x(T(x)∧¬C(x)∧E(x))",
        "checker": "rubric",
        "solution": "One tool is both misplaced and in excellent condition.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(T(x)∧¬C(x)∧E(x))",
          "Explains the required reasoning and cases: One tool is both misplaced and in excellent condition."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x¬C(x)",
      "Explains the required reasoning and cases: At least one thing is not correctly placed.",
      "Gives a response equivalent to the authored model answer: ∀x(T(x)→(C(x)∧E(x)))",
      "Explains the required reasoning and cases: Every tool has both properties.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x)∧E(x))",
      "Explains the required reasoning and cases: Everything has both properties.",
      "Gives a response equivalent to the authored model answer: ¬∃x(C(x)∧E(x))",
      "Explains the required reasoning and cases: Nothing has both properties simultaneously.",
      "Gives a response equivalent to the authored model answer: ∃x(T(x)∧¬C(x)∧E(x))",
      "Explains the required reasoning and cases: One tool is both misplaced and in excellent condition."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-029",
    "mode": "rubric",
    "answer": "Over propositions, let T(x)=x is a tautology, C(x)=x is a contradiction, and N(x)=x is a contingency. a) ∃xT(x); b) ∀x(C(x)→T(¬x)); c) ∃x∃y(N(x)∧N(y)∧T(x∨y)); d) ∀x∀y((T(x)∧T(y))→T(x∧y)).",
    "accepted": [
      "a exists T; b all C implies negation T; c exists x,y N and N and T(x or y); d all x,y T and T implies T(x and y)",
      "a some tautology; b negation of every contradiction tautology; c two contingencies whose disjunction can be tautology; d conjunction of tautologies tautology"
    ],
    "checker": "logic",
    "solution": "Quantify over propositions. Part (b) is universal over contradictions; (c) needs two contingency witnesses and a tautological disjunction; (d) is universal over every pair of tautologies.",
    "hints": [
      "“Can be” in (c) signals existence, not universality.",
      "In (d), both premises T(x) and T(y) must appear before the implication."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃xT(x)",
        "checker": "rubric",
        "solution": "At least one proposition is a tautology.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃xT(x)",
          "Explains the required reasoning and cases: At least one proposition is a tautology."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(C(x)→T(¬x))",
        "checker": "rubric",
        "solution": "For every contradiction x, its negation is a tautology.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x)→T(¬x))",
          "Explains the required reasoning and cases: For every contradiction x, its negation is a tautology."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x∃y(N(x)∧N(y)∧T(x∨y))",
        "checker": "rubric",
        "solution": "There are two contingencies whose disjunction is a tautology; x and y need not be distinct.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(N(x)∧N(y)∧T(x∨y))",
          "Explains the required reasoning and cases: There are two contingencies whose disjunction is a tautology; x and y need not be distinct."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x∀y((T(x)∧T(y))→T(x∧y))",
        "checker": "rubric",
        "solution": "Whenever both propositions are tautologies, their conjunction is a tautology.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((T(x)∧T(y))→T(x∧y))",
          "Explains the required reasoning and cases: Whenever both propositions are tautologies, their conjunction is a tautology."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃xT(x)",
      "Explains the required reasoning and cases: At least one proposition is a tautology.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x)→T(¬x))",
      "Explains the required reasoning and cases: For every contradiction x, its negation is a tautology.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(N(x)∧N(y)∧T(x∨y))",
      "Explains the required reasoning and cases: There are two contingencies whose disjunction is a tautology; x and y need not be distinct.",
      "Gives a response equivalent to the authored model answer: ∀x∀y((T(x)∧T(y))→T(x∧y))",
      "Explains the required reasoning and cases: Whenever both propositions are tautologies, their conjunction is a tautology."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-030",
    "mode": "rubric",
    "answer": "a) P(1,3)∨P(2,3)∨P(3,3); b) P(1,1)∧P(1,2)∧P(1,3); c) ¬P(2,1)∨¬P(2,2)∨¬P(2,3); d) ¬P(1,2)∧¬P(2,2)∧¬P(3,2).",
    "accepted": [
      "a disjunction x=1,2,3 at y=3; b conjunction y=1,2,3 at x=1; c disjunction negations at x=2; d conjunction negations at y=2",
      "a P13∨P23∨P33; b P11∧P12∧P13; c ¬P21∨¬P22∨¬P23; d ¬P12∧¬P22∧¬P32"
    ],
    "checker": "logic",
    "solution": "Expand only the quantified variable, holding the fixed argument constant. Use ∨ for ∃ and ∧ for ∀; retain the negation inside each term where present.",
    "hints": [
      "Check which argument is fixed before listing the three cases."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(1,3)∨P(2,3)∨P(3,3)",
        "checker": "rubric",
        "solution": "Vary x and keep y=3.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1,3)∨P(2,3)∨P(3,3)",
          "Explains the required reasoning and cases: Vary x and keep y=3."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(1,1)∧P(1,2)∧P(1,3)",
        "checker": "rubric",
        "solution": "Vary y and keep x=1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1,1)∧P(1,2)∧P(1,3)",
          "Explains the required reasoning and cases: Vary y and keep x=1."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬P(2,1)∨¬P(2,2)∨¬P(2,3)",
        "checker": "rubric",
        "solution": "At least one y case at x=2 fails P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(2,1)∨¬P(2,2)∨¬P(2,3)",
          "Explains the required reasoning and cases: At least one y case at x=2 fails P."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬P(1,2)∧¬P(2,2)∧¬P(3,2)",
        "checker": "rubric",
        "solution": "Every x case at y=2 fails P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬P(1,2)∧¬P(2,2)∧¬P(3,2)",
          "Explains the required reasoning and cases: Every x case at y=2 fails P."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(1,3)∨P(2,3)∨P(3,3)",
      "Explains the required reasoning and cases: Vary x and keep y=3.",
      "Gives a response equivalent to the authored model answer: P(1,1)∧P(1,2)∧P(1,3)",
      "Explains the required reasoning and cases: Vary y and keep x=1.",
      "Gives a response equivalent to the authored model answer: ¬P(2,1)∨¬P(2,2)∨¬P(2,3)",
      "Explains the required reasoning and cases: At least one y case at x=2 fails P.",
      "Gives a response equivalent to the authored model answer: ¬P(1,2)∧¬P(2,2)∧¬P(3,2)",
      "Explains the required reasoning and cases: Every x case at y=2 fails P."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-031",
    "mode": "rubric",
    "answer": "a) Q(0,0,0)∧Q(0,1,0); b) Q(0,1,1)∨Q(1,1,1)∨Q(2,1,1); c) ¬Q(0,0,0)∨¬Q(0,0,1); d) ¬Q(0,0,1)∨¬Q(1,0,1)∨¬Q(2,0,1).",
    "accepted": [
      "a conjunction y=0,1; b disjunction x=0,1,2; c disjunction negations z=0,1; d disjunction negations x=0,1,2",
      "a Q000∧Q010; b Q011∨Q111∨Q211; c ¬Q000∨¬Q001; d ¬Q001∨¬Q101∨¬Q201"
    ],
    "checker": "logic",
    "solution": "Expand the quantified coordinate over its own domain: x has three values, while y and z each have two. Fixed coordinates remain unchanged.",
    "hints": [
      "Do not expand all three variables; only the quantified one varies."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Q(0,0,0)∧Q(0,1,0)",
        "checker": "rubric",
        "solution": "Vary y over 0,1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Q(0,0,0)∧Q(0,1,0)",
          "Explains the required reasoning and cases: Vary y over 0,1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Q(0,1,1)∨Q(1,1,1)∨Q(2,1,1)",
        "checker": "rubric",
        "solution": "Vary x over 0,1,2.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: Q(0,1,1)∨Q(1,1,1)∨Q(2,1,1)",
          "Explains the required reasoning and cases: Vary x over 0,1,2."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬Q(0,0,0)∨¬Q(0,0,1)",
        "checker": "rubric",
        "solution": "Vary z and negate each case.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬Q(0,0,0)∨¬Q(0,0,1)",
          "Explains the required reasoning and cases: Vary z and negate each case."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬Q(0,0,1)∨¬Q(1,0,1)∨¬Q(2,0,1)",
        "checker": "rubric",
        "solution": "Vary x, holding y=0 and z=1, and negate each case.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬Q(0,0,1)∨¬Q(1,0,1)∨¬Q(2,0,1)",
          "Explains the required reasoning and cases: Vary x, holding y=0 and z=1, and negate each case."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: Q(0,0,0)∧Q(0,1,0)",
      "Explains the required reasoning and cases: Vary y over 0,1.",
      "Gives a response equivalent to the authored model answer: Q(0,1,1)∨Q(1,1,1)∨Q(2,1,1)",
      "Explains the required reasoning and cases: Vary x over 0,1,2.",
      "Gives a response equivalent to the authored model answer: ¬Q(0,0,0)∨¬Q(0,0,1)",
      "Explains the required reasoning and cases: Vary z and negate each case.",
      "Gives a response equivalent to the authored model answer: ¬Q(0,0,1)∨¬Q(1,0,1)∨¬Q(2,0,1)",
      "Explains the required reasoning and cases: Vary x, holding y=0 and z=1, and negate each case."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-032",
    "mode": "rubric",
    "answer": "a) ∀x(D(x)→F(x)); negation ∃x(D(x)∧¬F(x)): some dog does not have fleas. b) ∃x(H(x)∧A(x)); negation ∀x(H(x)→¬A(x)): no horse can add. c) ∀x(K(x)→C(x)); negation ∃x(K(x)∧¬C(x)): some koala cannot climb. d) ¬∃x(M(x)∧F(x)) (or ∀x(M(x)→¬F(x))); negation ∃x(M(x)∧F(x)): some monkey can speak French. e) ∃x(P(x)∧S(x)∧C(x)); negation ∀x(P(x)→(¬S(x)∨¬C(x))): for every pig, it cannot swim or cannot catch fish (possibly both).",
    "solution": "First choose predicates matching the animal and property. Negate with ¬∀xR(x)≡∃x¬R(x), ¬∃xR(x)≡∀x¬R(x), and ¬(A→B)≡A∧¬B; then read the result naturally.",
    "hints": [
      "The negation of “all D are F” must include an actual D witness.",
      "In (e), negate the conjunction S(x)∧C(x) with De Morgan's law."
    ],
    "rubric": [
      "Each original statement has a correct quantified formalization.",
      "Each negation has no negation symbol to the left of a quantifier and preserves the correct domain restriction.",
      "Each English negation is natural and equivalent, including the inclusive-or meaning in (e)."
    ],
    "readAloud": "To negate for all, produce there exists a counterexample. To negate there exists, require every case to fail.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Original ∀x(D(x)→F(x)); negation ∃x(D(x)∧¬F(x)): some dog does not have fleas.",
        "solution": "A universal conditional is refuted by a dog without fleas.",
        "rubric": [
          "Correct original, pushed-in negation, and English counterexample."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Original ∃x(H(x)∧A(x)); negation ∀x(H(x)→¬A(x)): no horse can add.",
        "solution": "Every horse must fail the ability.",
        "rubric": [
          "Correct original, universal negation, and English."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Original ∀x(K(x)→C(x)); negation ∃x(K(x)∧¬C(x)): some koala cannot climb.",
        "solution": "One nonclimbing koala refutes the original.",
        "rubric": [
          "Correct original, existential negation, and English."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Original ¬∃x(M(x)∧F(x)); negation ∃x(M(x)∧F(x)): some monkey can speak French.",
        "solution": "Negating “no monkey” produces a monkey witness.",
        "rubric": [
          "Correct original and affirmative existential negation in symbols and English."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Original ∃x(P(x)∧S(x)∧C(x)); negation ∀x(P(x)→(¬S(x)∨¬C(x))): every pig cannot swim or cannot catch fish (possibly both).",
        "solution": "For each pig, at least one of the two abilities must fail.",
        "rubric": [
          "Correct original; negation applies De Morgan to both abilities; English does not require both to fail."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-033",
    "mode": "rubric",
    "answer": "a) ∃x(O(x)∧L(x)); negation ∀x(O(x)→¬L(x)): no old dog can learn new tricks. b) ¬∃x(R(x)∧C(x)); negation ∃x(R(x)∧C(x)): some rabbit knows calculus. c) ∀x(B(x)→F(x)); negation ∃x(B(x)∧¬F(x)): some bird cannot fly. d) ¬∃x(D(x)∧T(x)); negation ∃x(D(x)∧T(x)): some dog can talk. e) With C(x)=x is in this class, F(x)=knows French, R(x)=knows Russian: ¬∃x(C(x)∧F(x)∧R(x)); negation ∃x(C(x)∧F(x)∧R(x)): someone in this class knows both French and Russian.",
    "solution": "Formalize “some” as ∃ with conjunction and “no” as negated existence. Push negation through the quantifier and through any conditional, then translate exactly what remains.",
    "hints": [
      "In (a), O(x) should mean x is an old dog, so the negation still talks only about old dogs.",
      "In (e), the original denies a person who knows both languages, not two separate people."
    ],
    "rubric": [
      "All five originals are correctly quantified with suitable predicates and domains.",
      "Every negation is pushed inside quantifiers and connectives correctly.",
      "All English negations preserve class membership in (e) and the both-languages condition."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Original ∃x(O(x)∧L(x)); negation ∀x(O(x)→¬L(x)): no old dog can learn new tricks.",
        "solution": "Every old dog must fail L.",
        "rubric": [
          "Correct original, negation restricted to old dogs, and English."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Original ¬∃x(R(x)∧C(x)); negation ∃x(R(x)∧C(x)): some rabbit knows calculus.",
        "solution": "A single rabbit witness negates the denial.",
        "rubric": [
          "Correct original and existential negation in symbols and English."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Original ∀x(B(x)→F(x)); negation ∃x(B(x)∧¬F(x)): some bird cannot fly.",
        "solution": "A nonflying bird is a counterexample.",
        "rubric": [
          "Correct original, counterexample form, and English."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Original ¬∃x(D(x)∧T(x)); negation ∃x(D(x)∧T(x)): some dog can talk.",
        "solution": "Existence of a talking dog negates “there is no dog.”",
        "rubric": [
          "Correct original and affirmative negation in symbols and English."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Original ¬∃x(C(x)∧F(x)∧R(x)); negation ∃x(C(x)∧F(x)∧R(x)): someone in this class knows French and Russian.",
        "solution": "One class member with both language skills negates the original.",
        "rubric": [
          "Correct class restriction and both-language conjunction throughout."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-034",
    "mode": "rubric",
    "answer": "a) Negation ∀x(D(x)→O(x)): all drivers obey the speed limit. b) Negation ∃x(S(x)∧¬R(x)): some Swedish movie is not serious. c) Negation ∃xK(x): someone can keep a secret. d) Negation ∀x(C(x)→G(x)): everyone in this class has a good attitude.",
    "solution": "Identify the originals as ∃x(D∧¬O), ∀x(S→R), ¬∃xK, and ∃x(C∧¬G), respectively. Negate and move ¬ inward; then translate.",
    "hints": [
      "“Some drivers do not” negates to “all drivers do,” not “some drivers do.”",
      "The negation of “all Swedish movies are serious” needs a Swedish counterexample."
    ],
    "rubric": [
      "Each negation uses the correct quantifier and predicate restriction.",
      "Negations of conditionals and conjunctions are logically correct.",
      "Each English statement expresses the same negation without merely prefixing “it is not the case that.”"
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(D(x)→O(x)): every driver obeys the speed limit.",
        "solution": "¬∃x(D(x)∧¬O(x))≡∀x(D(x)→O(x)).",
        "rubric": [
          "Universal obedience conditional and matching English."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(S(x)∧¬R(x)): some Swedish movie is not serious.",
        "solution": "¬∀x(S(x)→R(x))≡∃x(S(x)∧¬R(x)).",
        "rubric": [
          "Existential Swedish counterexample and matching English."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃xK(x): someone can keep a secret.",
        "solution": "Negating ¬∃xK(x) leaves ∃xK(x).",
        "rubric": [
          "Affirmative existential and matching English."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(C(x)→G(x)): everyone in this class has a good attitude.",
        "solution": "¬∃x(C(x)∧¬G(x))≡∀x(C(x)→G(x)).",
        "rubric": [
          "Universal class-restricted good attitude and matching English."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-035",
    "mode": "rubric",
    "answer": "a) ∃x(x≤1); b) ∃x(x>2); c) ∀x(x<4); d) ∀x(x≥0); e) ∃x(x≥−1∧x≤2); f) ∀x(x≥4∧x≤7).",
    "accepted": [
      "a exists x x<=1; b exists x x>2; c all x x<4; d all x x>=0; e exists x -1<=x<=2; f all x 4<=x<=7",
      "a ∃x(x≤1), b ∃x(x>2), c ∀x(x<4), d ∀x(x≥0), e ∃x(−1≤x∧x≤2), f ∀x(4≤x∧x≤7)"
    ],
    "checker": "logic",
    "solution": "Swap ∀↔∃ and negate each comparison: >( becomes ≤, ≤ becomes >, ≥ becomes <, and < becomes ≥. Negating a disjunction gives a conjunction.",
    "hints": [
      "Do not leave any ¬ symbol in the final answer.",
      "The negation of x<−1 or x>2 is the closed interval −1≤x≤2."
    ],
    "readAloud": "Negate a quantifier by switching its type, then reverse every comparison, including equality boundaries.",
    "verify": "Check endpoints: e includes −1 and 2; f includes 4 and 7.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(x≤1)",
        "checker": "rubric",
        "solution": "Negate universal and x>1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(x≤1)",
          "Explains the required reasoning and cases: Negate universal and x>1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(x>2)",
        "checker": "rubric",
        "solution": "Negate universal and x≤2.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(x>2)",
          "Explains the required reasoning and cases: Negate universal and x≤2."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(x<4)",
        "checker": "rubric",
        "solution": "Negate existential and x≥4.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x<4)",
          "Explains the required reasoning and cases: Negate existential and x≥4."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(x≥0)",
        "checker": "rubric",
        "solution": "Negate existential and x<0.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x≥0)",
          "Explains the required reasoning and cases: Negate existential and x<0."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x(x≥−1∧x≤2)",
        "checker": "rubric",
        "solution": "Switch to ∃ and apply De Morgan to the disjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(x≥−1∧x≤2)",
          "Explains the required reasoning and cases: Switch to ∃ and apply De Morgan to the disjunction."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∀x(x≥4∧x≤7)",
        "checker": "rubric",
        "solution": "Switch to ∀ and negate both comparisons.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x≥4∧x≤7)",
          "Explains the required reasoning and cases: Switch to ∀ and negate both comparisons."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(x≤1)",
      "Explains the required reasoning and cases: Negate universal and x>1.",
      "Gives a response equivalent to the authored model answer: ∃x(x>2)",
      "Explains the required reasoning and cases: Negate universal and x≤2.",
      "Gives a response equivalent to the authored model answer: ∀x(x<4)",
      "Explains the required reasoning and cases: Negate existential and x≥4.",
      "Gives a response equivalent to the authored model answer: ∀x(x≥0)",
      "Explains the required reasoning and cases: Negate existential and x<0.",
      "Gives a response equivalent to the authored model answer: ∃x(x≥−1∧x≤2)",
      "Explains the required reasoning and cases: Switch to ∃ and apply De Morgan to the disjunction.",
      "Gives a response equivalent to the authored model answer: ∀x(x≥4∧x≤7)",
      "Explains the required reasoning and cases: Switch to ∀ and negate both comparisons."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-036",
    "mode": "rubric",
    "answer": "a) ∃x(x≤−2∨x≥3); b) ∃x(x<0∨x≥5); c) ∀x(x<−4∨x>1); d) ∀x(x≤−5∨x≥−1).",
    "accepted": [
      "a exists outside closed-open interval; b exists x<0 or x>=5; c all x<-4 or x>1; d all x<=-5 or x>=-1",
      "a ∃x(x≤−2∨x≥3), b ∃x(x<0∨x≥5), c ∀x(x<−4∨x>1), d ∀x(x≤−5∨x≥−1)"
    ],
    "checker": "logic",
    "solution": "Negate chained inequalities by negating each component and changing ∧ to ∨. Strict/nonstrict boundaries must be reversed exactly.",
    "hints": [
      "The negation of a<x<b is x≤a or x≥b.",
      "The negation of a≤x≤b is x<a or x>b."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(x≤−2∨x≥3)",
        "checker": "rubric",
        "solution": "Negate −2<x<3 and switch ∀ to ∃.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(x≤−2∨x≥3)",
          "Explains the required reasoning and cases: Negate −2<x<3 and switch ∀ to ∃."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(x<0∨x≥5)",
        "checker": "rubric",
        "solution": "Negate 0≤x<5, preserving strictness correctly.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(x<0∨x≥5)",
          "Explains the required reasoning and cases: Negate 0≤x<5, preserving strictness correctly."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(x<−4∨x>1)",
        "checker": "rubric",
        "solution": "Negate −4≤x≤1 and switch ∃ to ∀.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x<−4∨x>1)",
          "Explains the required reasoning and cases: Negate −4≤x≤1 and switch ∃ to ∀."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(x≤−5∨x≥−1)",
        "checker": "rubric",
        "solution": "Negate −5<x<−1 and switch ∃ to ∀.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x≤−5∨x≥−1)",
          "Explains the required reasoning and cases: Negate −5<x<−1 and switch ∃ to ∀."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(x≤−2∨x≥3)",
      "Explains the required reasoning and cases: Negate −2<x<3 and switch ∀ to ∃.",
      "Gives a response equivalent to the authored model answer: ∃x(x<0∨x≥5)",
      "Explains the required reasoning and cases: Negate 0≤x<5, preserving strictness correctly.",
      "Gives a response equivalent to the authored model answer: ∀x(x<−4∨x>1)",
      "Explains the required reasoning and cases: Negate −4≤x≤1 and switch ∃ to ∀.",
      "Gives a response equivalent to the authored model answer: ∀x(x≤−5∨x≥−1)",
      "Explains the required reasoning and cases: Negate −5<x<−1 and switch ∃ to ∀."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-037",
    "mode": "mixed",
    "answer": "a) No counterexample exists; the statement is true for all integers. b) x=0. c) x=0 (or any integer other than 1).",
    "accepted": [
      "a) none, true; b) 0; c) 0 or any x≠1",
      "a no counterexample; b x=0; c x=2"
    ],
    "checker": "text",
    "solution": "For integers, x²−x=x(x−1)≥0, so (a) has no counterexample. In (b), 0 is neither positive nor negative. In (c), any integer other than 1 defeats the claim.",
    "hints": [
      "A universally true statement has no counterexample; prove (a) rather than forcing a value.",
      "Test zero in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "No counterexample; the statement is true.",
        "accepted": [
          "None",
          "No counterexample exists",
          "True for all integers"
        ],
        "checker": "text",
        "solution": "For n≥1 both n and n−1 are nonnegative; for n≤0 both are nonpositive. Thus n(n−1)≥0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "0",
        "accepted": [
          "0"
        ],
        "checker": "number",
        "solution": "At 0, both x>0 and x<0 are false."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "x = 0",
        "checker": "rubric",
        "solution": "For example, x=0 makes x=1 false; every integer except 1 works.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: x = 0",
          "Explains the required reasoning and cases: For example, x=0 makes x=1 false; every integer except 1 works."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-038",
    "mode": "auto",
    "answer": "a) x=0 (or x=1); b) x=√2 (or x=−√2); c) x=0.",
    "accepted": [
      "a) 0 or 1; b) sqrt(2) or -sqrt(2); c) 0",
      "a x=1; b x=√2; c x=0"
    ],
    "checker": "text",
    "solution": "A counterexample makes the inner statement false. Thus solve x²=x for (a), x²=2 for (b), and |x|≤0 for (c) within the real domain.",
    "hints": [
      "You need values where equality holds in (a) and (b), and where the strict inequality fails in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "0",
        "accepted": [
          "0",
          "1"
        ],
        "checker": "number",
        "solution": "At x=0, x²=x; x=1 also works."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "x = √2",
        "accepted": [
          "sqrt(2)",
          "√2",
          "-sqrt(2)",
          "−√2",
          "1.4142135623730951"
        ],
        "checker": "text",
        "solution": "At x=√2 (or −√2), x²=2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "0",
        "accepted": [
          "0"
        ],
        "checker": "number",
        "solution": "|0|=0, so |x|>0 is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-039",
    "mode": "rubric",
    "answer": "a) ∀x[(M(x)>25000∨F(x)>25)→E(x)], where M=miles that year, F=flights that year, E=elite. b) ∀x[((Man(x)∧T(x)<3)∨(Woman(x)∧T(x)<3.5))→Q(x)]. c) ∀x(D(x)→[(H(x)≥60∨(H(x)≥45∧T(x)))∧∀c(R(x,c)→G(x,c)≥B)]), where D=master's degree, H=course hours, T=thesis, R=required course, G=grade. d) ∃s∃sem[S(s)∧H(s,sem)>21∧∀c(Takes(s,c,sem)→A(s,c,sem))].",
    "accepted": [
      "Equivalent one-way qualification/requirement conditionals with strict thresholds and correct grouping; d must have one student and one semester with more than 21 credits and all A grades",
      "a (miles>25000 or flights>25) implies elite; b (man and time<3 or woman and time<3.5) implies qualifies; c degree implies (hours>=60 or hours>=45 and thesis) and all required grades>=B; d exists student semester credits>21 and all grades A"
    ],
    "checker": "logic",
    "solution": "Translate “if” as a condition sufficient for qualification, and “must … to receive” as conditions necessary for the degree. Preserve strict inequalities (>25,000, >25, <3, <3.5, >21) and inclusive thresholds (≥60, ≥45, no lower than B).",
    "hints": [
      "Parenthesize the hour/thesis requirement before adding the grade requirement.",
      "In (d), use one semester for both the credit total and the all-A claim."
    ],
    "verify": "Do not reverse the arrows or change strict inequalities to nonstrict ones.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x[(M(x)>25000∨F(x)>25)→E(x)]",
        "checker": "rubric",
        "solution": "Either annual activity threshold is sufficient for elite status.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x[(M(x)>25000∨F(x)>25)→E(x)]",
          "Explains the required reasoning and cases: Either annual activity threshold is sufficient for elite status."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x[((Man(x)∧T(x)<3)∨(Woman(x)∧T(x)<3.5))→Q(x)]",
        "checker": "rubric",
        "solution": "Apply the sex-specific best-time threshold; the split conjunction is equivalent.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x[((Man(x)∧T(x)<3)∨(Woman(x)∧T(x)<3.5))→Q(x)]",
          "Explains the required reasoning and cases: Apply the sex-specific best-time threshold; the split conjunction is equivalent."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(D(x)→[(H(x)≥60∨(H(x)≥45∧T(x)))∧∀c(R(x,c)→G(x,c)≥B)])",
        "checker": "rubric",
        "solution": "A master's degree requires the hour/thesis alternative and at least B in every required course.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(D(x)→[(H(x)≥60∨(H(x)≥45∧T(x)))∧∀c(R(x,c)→G(x,c)≥B)])",
          "Explains the required reasoning and cases: A master's degree requires the hour/thesis alternative and at least B in every required course."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃s∃m[S(s)∧H(s,m)>21∧∀c(Takes(s,c,m)→A(s,c,m))]",
        "checker": "rubric",
        "solution": "One student in one semester has over 21 credits and A grades in all courses taken that semester.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃s∃m[S(s)∧H(s,m)>21∧∀c(Takes(s,c,m)→A(s,c,m))]",
          "Explains the required reasoning and cases: One student in one semester has over 21 credits and A grades in all courses taken that semester."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x[(M(x)>25000∨F(x)>25)→E(x)]",
      "Explains the required reasoning and cases: Either annual activity threshold is sufficient for elite status.",
      "Gives a response equivalent to the authored model answer: ∀x[((Man(x)∧T(x)<3)∨(Woman(x)∧T(x)<3.5))→Q(x)]",
      "Explains the required reasoning and cases: Apply the sex-specific best-time threshold; the split conjunction is equivalent.",
      "Gives a response equivalent to the authored model answer: ∀x(D(x)→[(H(x)≥60∨(H(x)≥45∧T(x)))∧∀c(R(x,c)→G(x,c)≥B)])",
      "Explains the required reasoning and cases: A master's degree requires the hour/thesis alternative and at least B in every required course.",
      "Gives a response equivalent to the authored model answer: ∃s∃m[S(s)∧H(s,m)>21∧∀c(Takes(s,c,m)→A(s,c,m))]",
      "Explains the required reasoning and cases: One student in one semester has over 21 credits and A grades in all courses taken that semester."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-040",
    "mode": "rubric",
    "answer": "a) Some system is open. b) Every system is malfunctioning or in a diagnostic state. c) Some system is open or some system is in a diagnostic state. d) Some system is not available. e) No system is working.",
    "solution": "S(x,y) is read as “x is in state y.” Expand ∃ as “some system” and ∀ as “every system,” preserving the scope of each ∨ and ¬.",
    "hints": [
      "In (c), the two existential quantifiers are separate; do not require one system to have both states.",
      "In (e), every system is not working, which means none is working."
    ],
    "rubric": [
      "Every part uses systems and states correctly.",
      "Quantifier and connective scope is preserved, especially separate witnesses in (c).",
      "Negation in (d) means at least one unavailable system and in (e) means no working systems."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There is a system in the open state.",
        "solution": "∃x requires one open system.",
        "rubric": [
          "Correct existential English translation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every system is malfunctioning or in a diagnostic state.",
        "solution": "For each system, at least one of the two state predicates holds.",
        "rubric": [
          "Universal inclusive-or translation."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There is an open system or there is a system in a diagnostic state.",
        "solution": "The disjunction joins two existential propositions.",
        "rubric": [
          "Preserves two separate existential clauses without requiring the same system."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a system that is not available.",
        "solution": "∃x¬S(x,available) requires an unavailable system.",
        "rubric": [
          "Existential negated-state translation."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "No system is working.",
        "solution": "All systems satisfy ¬S(x,working).",
        "rubric": [
          "Equivalent to no working system, not merely not all working."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-041",
    "mode": "rubric",
    "answer": "a) If some printer is out of service and busy, then some print job is lost. b) If every printer is busy, then some print job is queued. c) If some print job is both queued and lost, then some printer is out of service. d) If every printer is busy and every print job is queued, then some print job is lost.",
    "solution": "The main connective in each part is →. Translate its antecedent fully before translating its consequent; conjunction inside an existential refers to the same printer or job.",
    "hints": [
      "Read each formula as “If [left side], then [right side].”",
      "In (d), the antecedent has two universal claims joined by and."
    ],
    "rubric": [
      "Each translation has the correct conditional direction.",
      "Printer/job predicates are translated accurately.",
      "Quantifier scope and conjunctions are preserved, including the same busy out-of-service printer in (a) and same queued lost job in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If there is a printer that is out of service and busy, then there is a lost print job.",
        "solution": "One printer satisfies F∧B; the conclusion is ∃jL(j).",
        "rubric": [
          "Correct same-printer antecedent and lost-job consequent."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If all printers are busy, then at least one print job is queued.",
        "solution": "The universal claim is only in the antecedent.",
        "rubric": [
          "Correct universal antecedent and existential consequent."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If there is a print job that is queued and lost, then there is a printer out of service.",
        "solution": "One job satisfies Q∧L; conclusion concerns a printer.",
        "rubric": [
          "Correct same-job antecedent and printer consequent."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "If all printers are busy and all print jobs are queued, then some print job is lost.",
        "solution": "Both universal antecedents must hold before the existential consequent is asserted.",
        "rubric": [
          "Both universal clauses and conditional direction are correct."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-042",
    "mode": "rubric",
    "answer": "a) F<30→∀uW(u), where F=free hard-disk MB and W(u)=warning sent to user u. b) E→[∀d(D(d)→¬O(d))∧∀f(F(f)→¬C(f))], E=system errors detected, O=can open, C=can close. c) ∃uL(u)→¬B, where L=logged on and B=file system can be backed up. d) (M≥8∧S≥56)→V, with M=available memory MB, S=connection kbps, V=video on demand can be delivered.",
    "accepted": [
      "a free<30 implies all users warned; b errors implies no directory openable and no file closable; c exists logged-on user implies not backup; d memory>=8 and speed>=56 implies video",
      "a F<30→∀uW(u); b E→(¬∃d(D∧O)∧¬∃f(F∧C)); c ∃uL(u)→¬B; d (M≥8∧S≥56)→V"
    ],
    "checker": "logic",
    "solution": "English “when” and “if” introduce antecedents. “No” denies the relevant capability for every directory/file, and “at least” becomes ≥.",
    "hints": [
      "In (c), the existence of a logged-on user is the antecedent, not the conclusion.",
      "Keep both resource conditions in (d) joined by ∧."
    ],
    "verify": "The strict threshold is <30 in (a), while (d) uses ≥8 and ≥56.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "F<30→∀uW(u)",
        "checker": "rubric",
        "solution": "Low disk space implies a warning for every user.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: F<30→∀uW(u)",
          "Explains the required reasoning and cases: Low disk space implies a warning for every user."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "E→[∀d(D(d)→¬O(d))∧∀f(F(f)→¬C(f))]",
        "checker": "rubric",
        "solution": "Detected errors prohibit both operations universally.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: E→[∀d(D(d)→¬O(d))∧∀f(F(f)→¬C(f))]",
          "Explains the required reasoning and cases: Detected errors prohibit both operations universally."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃uL(u)→¬B",
        "checker": "rubric",
        "solution": "A currently logged-on user prevents backup.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃uL(u)→¬B",
          "Explains the required reasoning and cases: A currently logged-on user prevents backup."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(M≥8∧S≥56)→V",
        "checker": "rubric",
        "solution": "Both minimum resource conditions suffice for delivery.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (M≥8∧S≥56)→V",
          "Explains the required reasoning and cases: Both minimum resource conditions suffice for delivery."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: F<30→∀uW(u)",
      "Explains the required reasoning and cases: Low disk space implies a warning for every user.",
      "Gives a response equivalent to the authored model answer: E→[∀d(D(d)→¬O(d))∧∀f(F(f)→¬C(f))]",
      "Explains the required reasoning and cases: Detected errors prohibit both operations universally.",
      "Gives a response equivalent to the authored model answer: ∃uL(u)→¬B",
      "Explains the required reasoning and cases: A currently logged-on user prevents backup.",
      "Gives a response equivalent to the authored model answer: (M≥8∧S≥56)→V",
      "Explains the required reasoning and cases: Both minimum resource conditions suffice for delivery."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-043",
    "mode": "rubric",
    "answer": "a) ∃d(D(d)∧F(d)>10)→∃m(M(m)∧S(m)), with F=free KB and S=can save. b) A→∀m(Q(m)→T(m)), A=active alert, Q=queued, T=transmitted. c) ∀s((System(s)∧s≠main_console)→Tracks(diagnostic_monitor,s)). d) ∀p[(Participant(p)∧¬SpecialList(host,p))→Billed(p)].",
    "accepted": [
      "a disk with free>10 implies some message savable; b active alert implies all queued transmitted; c all systems except main console tracked; d all participants not special-listed billed",
      "a ∃d(D∧F>10)→∃m(M∧S); b A→∀m(Q→T); c ∀s(s≠main_console→Tracks(s)); d ∀p((P∧¬L)→B)"
    ],
    "checker": "logic",
    "solution": "Translate sufficient conditions with →. In (a), the disk condition implies an actually savable message, which also preserves the nonempty-message context. In (c), exclude exactly the main console; in (d), negate only special-list membership.",
    "hints": [
      "Use >10, not ≥10, in (a).",
      "“Except” means the main console is excluded from the universal tracking claim.",
      "The host's list predicate takes the participant as an argument."
    ],
    "verify": "Do not accidentally require every message to be savable in (a), or bill listed participants in (d).",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃d(D(d)∧F(d)>10)→∃m(M(m)∧S(m))",
        "checker": "rubric",
        "solution": "If a sufficiently free disk exists, at least one message can be saved.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃d(D(d)∧F(d)>10)→∃m(M(m)∧S(m))",
          "Explains the required reasoning and cases: If a sufficiently free disk exists, at least one message can be saved."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A→∀m(Q(m)→T(m))",
        "checker": "rubric",
        "solution": "An active alert causes every queued message to be transmitted.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: A→∀m(Q(m)→T(m))",
          "Explains the required reasoning and cases: An active alert causes every queued message to be transmitted."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀s((System(s)∧s≠main_console)→Tracks(diagnostic_monitor,s))",
        "checker": "rubric",
        "solution": "Every system other than the main console is tracked.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀s((System(s)∧s≠main_console)→Tracks(diagnostic_monitor,s))",
          "Explains the required reasoning and cases: Every system other than the main console is tracked."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀p[(Participant(p)∧¬SpecialList(host,p))→Billed(p)]",
        "checker": "rubric",
        "solution": "Exactly unlisted conference participants are asserted to have been billed.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀p[(Participant(p)∧¬SpecialList(host,p))→Billed(p)]",
          "Explains the required reasoning and cases: Exactly unlisted conference participants are asserted to have been billed."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃d(D(d)∧F(d)>10)→∃m(M(m)∧S(m))",
      "Explains the required reasoning and cases: If a sufficiently free disk exists, at least one message can be saved.",
      "Gives a response equivalent to the authored model answer: A→∀m(Q(m)→T(m))",
      "Explains the required reasoning and cases: An active alert causes every queued message to be transmitted.",
      "Gives a response equivalent to the authored model answer: ∀s((System(s)∧s≠main_console)→Tracks(diagnostic_monitor,s))",
      "Explains the required reasoning and cases: Every system other than the main console is tracked.",
      "Gives a response equivalent to the authored model answer: ∀p[(Participant(p)∧¬SpecialList(host,p))→Billed(p)]",
      "Explains the required reasoning and cases: Exactly unlisted conference participants are asserted to have been billed."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-044",
    "mode": "rubric",
    "answer": "a) ∀u(U(u)→∃m(M(m)∧A(u,m))), where M=electronic mailbox and A=has access. b) L→∀g(G(g)→A(g,system_mailbox)), L=file system locked. c) D(firewall)→D(proxy_server). d) (100≤T≤500∧¬D(proxy_server))→∃r(R(r)∧N(r)), T=throughput kbps, R=router, N=functioning normally.",
    "accepted": [
      "a all users have some mailbox access; b locked implies all group can access system mailbox; c firewall diagnostic implies proxy diagnostic; d throughput between inclusive and proxy not diagnostic implies some normal router",
      "a ∀u∃m(U(u)→(M(m)∧A(u,m))); b L→∀g(G→A); c F→P; d (100≤T≤500∧¬P)→∃r(R∧N)"
    ],
    "checker": "logic",
    "solution": "“Only if” reverses the informal reading: firewall diagnostic implies proxy diagnostic. “Between” is represented by inclusive bounds here. The final antecedent contains both throughput and non-diagnostic proxy conditions.",
    "hints": [
      "For (a), each user needs access to at least one mailbox.",
      "For (c), “F only if P” is F→P, not P→F.",
      "Keep ¬D(proxy_server) inside the antecedent of (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀u(U(u)→∃m(M(m)∧A(u,m)))",
        "checker": "rubric",
        "solution": "Every user has at least one accessible electronic mailbox.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀u(U(u)→∃m(M(m)∧A(u,m)))",
          "Explains the required reasoning and cases: Every user has at least one accessible electronic mailbox."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "L→∀g(G(g)→A(g,system_mailbox))",
        "checker": "rubric",
        "solution": "A locked file system is sufficient for everyone in the group to access the system mailbox.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: L→∀g(G(g)→A(g,system_mailbox))",
          "Explains the required reasoning and cases: A locked file system is sufficient for everyone in the group to access the system mailbox."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "D(firewall)→D(proxy_server)",
        "checker": "rubric",
        "solution": "“Only if” makes proxy diagnosis necessary for firewall diagnosis.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: D(firewall)→D(proxy_server)",
          "Explains the required reasoning and cases: “Only if” makes proxy diagnosis necessary for firewall diagnosis."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(100≤T∧T≤500∧¬D(proxy_server))→∃r(R(r)∧N(r))",
        "checker": "rubric",
        "solution": "Under both network conditions, at least one router functions normally.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (100≤T∧T≤500∧¬D(proxy_server))→∃r(R(r)∧N(r))",
          "Explains the required reasoning and cases: Under both network conditions, at least one router functions normally."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀u(U(u)→∃m(M(m)∧A(u,m)))",
      "Explains the required reasoning and cases: Every user has at least one accessible electronic mailbox.",
      "Gives a response equivalent to the authored model answer: L→∀g(G(g)→A(g,system_mailbox))",
      "Explains the required reasoning and cases: A locked file system is sufficient for everyone in the group to access the system mailbox.",
      "Gives a response equivalent to the authored model answer: D(firewall)→D(proxy_server)",
      "Explains the required reasoning and cases: “Only if” makes proxy diagnosis necessary for firewall diagnosis.",
      "Gives a response equivalent to the authored model answer: (100≤T∧T≤500∧¬D(proxy_server))→∃r(R(r)∧N(r))",
      "Explains the required reasoning and cases: Under both network conditions, at least one router functions normally."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-045",
    "mode": "rubric",
    "answer": "No. A domain {a,b} with P(a)=false, P(b)=true, Q(a)=false, Q(b)=false makes ∀x(P(x)→Q(x)) false but (∀xP(x)→∀xQ(x)) true.",
    "solution": "On this interpretation, the pointwise conditional fails at b, so the first formula is false. But ∀xP(x) is false because P(a) is false, making the second implication vacuously true. Different truth values prove non-equivalence.",
    "hints": [
      "Try to make the second implication vacuously true by making ∀xP(x) false.",
      "Use two elements so one P-failure does not prevent a separate P→Q failure."
    ],
    "rubric": [
      "States that the formulas are not logically equivalent.",
      "Gives a concrete domain and truth assignments for P and Q.",
      "Correctly evaluates the first formula as false and the second as true on that interpretation."
    ],
    "startHere": "The second formula can be true merely because ∀xP(x) is false; the first formula has no such global antecedent.",
    "verify": "Check element a and b separately rather than treating P and Q as single propositions."
  },
  {
    "id": "rosen-ch1-ex-1-4-046",
    "mode": "rubric",
    "answer": "No. On {a,b}, let P be true only at a and Q be true only at b. Then ∀x(P(x)↔Q(x)) is false, while ∀xP(x)↔∀xQ(x) is true because both sides are false.",
    "solution": "At a, P(a)↔Q(a) is true↔false, hence false, so the first universal statement is false. Each of ∀xP(x) and ∀xQ(x) is false because each predicate fails at one element; false↔false is true.",
    "hints": [
      "Let the two predicates have opposite truth patterns on a two-element domain."
    ],
    "rubric": [
      "States non-equivalence.",
      "Provides a valid counter-interpretation with opposite pointwise patterns.",
      "Evaluates both universally quantified biconditionals correctly, including false↔false=true."
    ],
    "verify": "The distinguishing feature is that the second formula compares two global truth values, not truth values element by element."
  },
  {
    "id": "rosen-ch1-ex-1-4-047",
    "mode": "rubric",
    "answer": "The formulas are logically equivalent: ∃x(P(x)∨Q(x)) ≡ ∃xP(x)∨∃xQ(x).",
    "solution": "If the left side is true, choose a witness a. P(a) or Q(a) holds, so respectively ∃xP(x) or ∃xQ(x) holds. Conversely, if the right side is true, choose a witness for whichever existential holds; the same element witnesses P(x)∨Q(x), proving the left side.",
    "hints": [
      "Prove both directions and reuse the same witnessing element.",
      "The order of quantification does not create a two-witness problem here because the right side is a disjunction."
    ],
    "rubric": [
      "Proves left-to-right by selecting one witness and splitting the disjunction.",
      "Proves right-to-left using a witness from either existential.",
      "Concludes equivalence for arbitrary domains and predicates; the empty-domain case also gives false on both sides."
    ],
    "startHere": "Read both sides as “some element satisfies at least one of P and Q.”"
  },
  {
    "id": "rosen-ch1-ex-1-4-048",
    "mode": "rubric",
    "answer": "Both equivalences hold when A contains no free x and the domain is nonempty. a) (∀xP(x))∨A ≡ ∀x(P(x)∨A). b) (∃xP(x))∨A ≡ ∃x(P(x)∨A).",
    "solution": "Because A is independent of x, its truth value is fixed. If A is true, both sides of each equivalence are true (nonemptiness supplies an element on the right). If A is false, each side reduces to the displayed quantification of P(x).",
    "hints": [
      "Split into A true and A false; do not distribute quantifiers blindly.",
      "Explicitly use nonemptiness when A is true in the existential case and when reducing a true universal body."
    ],
    "rubric": [
      "Both parts use the fact that A has no free x and has a fixed truth value.",
      "The A=true and A=false cases establish both directions of both equivalences.",
      "The nonempty-domain assumption is explicitly used, preventing an empty-domain counterexample."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(∀xP(x))∨A ≡ ∀x(P(x)∨A).",
        "solution": "If A is true, both are true; if false, both are exactly ∀xP(x). Nonemptiness ensures the right universal behaves as stated in the standard domain setting.",
        "rubric": [
          "Correct case argument for both truth values of A and no-free-x condition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∃xP(x))∨A ≡ ∃x(P(x)∨A).",
        "solution": "If A is true, nonemptiness supplies a witness for P(x)∨A; if false, both reduce to ∃xP(x).",
        "rubric": [
          "Correct both-direction argument and explicit nonempty witness when A is true."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-049",
    "mode": "rubric",
    "answer": "Both hold for nonempty domains and A without free x. a) (∀xP(x))∧A ≡ ∀x(P(x)∧A). b) (∃xP(x))∧A ≡ ∃x(P(x)∧A).",
    "solution": "If A is false, both sides of each equivalence are false; nonemptiness is needed for the universal right side in (a). If A is true, remove the true conjunct A, reducing each pair to the same quantification of P(x).",
    "hints": [
      "Again split on A, but now conjunction makes A=false the simplifying case.",
      "Use nonemptiness to see why ∀x(P(x)∧A) is false when A is false."
    ],
    "rubric": [
      "Establishes both equivalences by complete A=true/A=false cases.",
      "Uses no free x in A correctly.",
      "Explicitly uses nonemptiness where needed, especially (a) with A=false."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(∀xP(x))∧A ≡ ∀x(P(x)∧A).",
        "solution": "A=false makes both false because the domain is nonempty; A=true reduces both to ∀xP(x).",
        "rubric": [
          "Complete case proof with nonempty-domain observation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∃xP(x))∧A ≡ ∃x(P(x)∧A).",
        "solution": "A=false makes both false; A=true reduces both to ∃xP(x), using the same witness in the forward and reverse directions.",
        "rubric": [
          "Complete case proof with correct existential witness handling."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-050",
    "mode": "rubric",
    "answer": "a) ∀x(A→P(x)) ≡ A→∀xP(x). b) ∃x(A→P(x)) ≡ A→∃xP(x), assuming nonempty domains and no free x in A.",
    "solution": "Rewrite A→P(x) as ¬A∨P(x). By Exercise 48, ∀x(¬A∨P(x))≡¬A∨∀xP(x)≡A→∀xP(x), and ∃x(¬A∨P(x))≡¬A∨∃xP(x)≡A→∃xP(x).",
    "hints": [
      "Move the implication's antecedent A into a disjunction before using null quantification.",
      "The final conversion is ¬A∨B≡A→B."
    ],
    "rubric": [
      "Correctly rewrites each implication and applies the appropriate disjunction/null-quantification equivalence.",
      "Derives both target forms without changing quantifier type.",
      "States or uses nonemptiness and the absence of free x in A."
    ],
    "readAloud": "A arrow P of x means not A or P of x; A does not depend on x, so it can move outside the quantifier.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(A→P(x))≡∀x(¬A∨P(x))≡¬A∨∀xP(x)≡A→∀xP(x).",
        "solution": "Use the universal/disjunction null-quantification law, then rewrite the implication.",
        "rubric": [
          "Valid equivalence chain for the universal case with assumptions."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(A→P(x))≡∃x(¬A∨P(x))≡¬A∨∃xP(x)≡A→∃xP(x).",
        "solution": "Use the existential/disjunction law; nonemptiness is essential when A is false.",
        "rubric": [
          "Valid equivalence chain for existential case with nonempty-domain use."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-051",
    "mode": "rubric",
    "answer": "a) ∀x(P(x)→A) ≡ ∃xP(x)→A. b) ∃x(P(x)→A) ≡ ∀xP(x)→A, for nonempty domains and A without free x.",
    "solution": "Rewrite P(x)→A as ¬P(x)∨A. Then ∀x(¬P(x)∨A)≡∀x¬P(x)∨A≡¬∃xP(x)∨A≡∃xP(x)→A. Similarly, ∃x(¬P(x)∨A)≡∃x¬P(x)∨A≡¬∀xP(x)∨A≡∀xP(x)→A.",
    "hints": [
      "The quantifier on P flips after negating P: ∀¬P becomes ¬∃P and ∃¬P becomes ¬∀P.",
      "Use Exercise 48 after rewriting the implication."
    ],
    "rubric": [
      "Both derivations correctly rewrite P(x)→A and use null quantification.",
      "Quantifier negation laws produce ∃xP(x) in (a) and ∀xP(x) in (b).",
      "The nonempty-domain and no-free-x assumptions are respected."
    ],
    "verify": "Notice the apparent reversal: a universal conditional corresponds to an existential antecedent, and vice versa.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(P(x)→A)≡∀x¬P(x)∨A≡¬∃xP(x)∨A≡∃xP(x)→A.",
        "solution": "Move A outside, then rewrite ∀x¬P(x) as ¬∃xP(x).",
        "rubric": [
          "Complete valid equivalence chain with quantifier negation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(P(x)→A)≡∃x¬P(x)∨A≡¬∀xP(x)∨A≡∀xP(x)→A.",
        "solution": "Move A outside using nonemptiness, then rewrite ∃x¬P(x) as ¬∀xP(x).",
        "rubric": [
          "Complete valid equivalence chain with nonempty-domain and quantifier-negation steps."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-052",
    "mode": "rubric",
    "answer": "They are not equivalent. On {a,b}, set P(a)=true, P(b)=false, Q(a)=false, Q(b)=true. Then ∀xP(x)∨∀xQ(x) is false, but ∀x(P(x)∨Q(x)) is true.",
    "solution": "Neither predicate holds everywhere, so the first disjunction is false. Yet at each element one of P or Q holds: P at a and Q at b. Thus the second universal statement is true, giving different truth values.",
    "hints": [
      "Let different elements supply the P-witness and Q-witness.",
      "Make neither predicate universally true."
    ],
    "rubric": [
      "States non-equivalence and gives a concrete domain and predicate assignments.",
      "Correctly evaluates the left formula as false.",
      "Correctly evaluates the right formula as true by checking every domain element."
    ],
    "startHere": "The right side allows P and Q to cover different elements; the left side demands one predicate to cover all elements."
  },
  {
    "id": "rosen-ch1-ex-1-4-053",
    "mode": "rubric",
    "answer": "They are not equivalent. On {a,b}, let P hold only at a and Q hold only at b. Then ∃xP(x)∧∃xQ(x) is true, but ∃x(P(x)∧Q(x)) is false.",
    "solution": "The witnesses a and b establish the two separate existentials. No single element satisfies both predicates, so the right-hand existential has no witness.",
    "hints": [
      "Use different witnesses for the two existential claims on the left."
    ],
    "rubric": [
      "States non-equivalence and supplies a valid interpretation.",
      "Shows two separate witnesses make the left side true.",
      "Shows absence of a common witness makes the right side false."
    ],
    "verify": "The left side does not require the two x's to denote the same element; the right side does."
  },
  {
    "id": "rosen-ch1-ex-1-4-054",
    "mode": "auto",
    "answer": "a) False; b) False; c) True; d) False.",
    "accepted": [
      "F, F, T, F",
      "a) F; b) F; c) T; d) F"
    ],
    "checker": "truth",
    "solution": "Uniqueness requires exactly one integer witness. There are infinitely many x>1, and x²=1 has two solutions ±1. The equation x+3=2x gives only x=3. The last equation simplifies to 0=1 and has no solution.",
    "hints": [
      "Zero solutions and more than one solution both make ∃! false."
    ],
    "readAloud": "There exists unique x means exactly one domain element satisfies the condition.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "For example, 2 and 3 both satisfy x>1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Both x=1 and x=−1 satisfy x²=1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Subtract x: 3=x, so x=3 is the unique solution."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Subtracting x gives 0=1, so there is no witness, hence not a unique one."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-055",
    "mode": "auto",
    "answer": "a) True (always valid); b) False (not always valid); c) True (always valid).",
    "accepted": [
      "T, F, T",
      "a) True; b) False; c) True"
    ],
    "checker": "truth",
    "solution": "A unique witness is in particular a witness, proving (a). Universality does not imply uniqueness: on a two-element domain with P true everywhere, the antecedent of (b) is true and its consequent false. A unique x satisfying ¬P supplies an x where P fails, so not every x satisfies P, proving (c).",
    "hints": [
      "Interpret these as general logical claims about arbitrary P and domains.",
      "For (b), use a domain with at least two elements and P true at both."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "∃!xP(x) includes existence, so ∃xP(x) follows."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "On {a,b}, let P(a)=P(b)=true. Then ∀xP(x) is true but ∃!xP(x) is false."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "The unique ¬P witness is also a counterexample to ∀xP(x), so ¬∀xP(x) follows."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-056",
    "mode": "rubric",
    "answer": "[P(1)∧¬P(2)∧¬P(3)]∨[¬P(1)∧P(2)∧¬P(3)]∨[¬P(1)∧¬P(2)∧P(3)].",
    "checker": "rubric",
    "solution": "Exactly one proposition must be true. Form three cases—only P(1), only P(2), or only P(3)—and disjoin them. Each case must affirm its selected proposition and negate the other two.",
    "hints": [
      "“Unique” requires both existence and no second witness.",
      "An existence clause plus pairwise exclusions is an equivalent formulation."
    ],
    "verify": "Each of the three brackets has exactly one unnegated P.",
    "readAloud": "P of one and not P of two and not P of three, or P of two only, or P of three only.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: [P(1)∧¬P(2)∧¬P(3)]∨[¬P(1)∧P(2)∧¬P(3)]∨[¬P(1)∧¬P(2)∧P(3)].",
      "Explains the required reasoning and cases: Exactly one proposition must be true. Form three cases—only P(1), only P(2), or only P(3)—and disjoin them. Each case must affirm its selected proposition and negate the other two."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-057",
    "mode": "auto",
    "answer": "a) yes; b) no; c) X = juana and X = kiko; d) Y = math273 and Y = cs301; e) Y = juana and Y = kiko.",
    "accepted": [
      "a yes; b no; c juana, kiko; d math273, cs301; e juana, kiko",
      "a) true; b) false; c) juana/kiko; d) math273/cs301; e) juana/kiko"
    ],
    "checker": "text",
    "solution": "Use instructor(grossman,cs301) and the enrollment facts. Juana and Kiko take cs301; Kiko takes math273 and cs301. Grossman teaches every cs301 enrollee, namely Juana and Kiko. Patel teaches ee222, not cs301.",
    "hints": [
      "For teaches(grossman,Y), first find Grossman's course, then everyone enrolled in it.",
      "Return all matching variable bindings, not only the first."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "yes",
        "accepted": [
          "true",
          "Yes"
        ],
        "checker": "text",
        "solution": "instructor(chan,math273) is a stated fact."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "no",
        "accepted": [
          "false",
          "No"
        ],
        "checker": "text",
        "solution": "Patel teaches ee222; Grossman teaches cs301."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "X = juana; X = kiko",
        "accepted": [
          "juana, kiko",
          "X=juana and X=kiko"
        ],
        "checker": "text",
        "solution": "Those are the two stated cs301 enrollments."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Y = math273; Y = cs301",
        "accepted": [
          "math273, cs301",
          "Y=math273 and Y=cs301"
        ],
        "checker": "text",
        "solution": "Kiko has both enrollment facts."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Y = juana; Y = kiko",
        "accepted": [
          "juana, kiko",
          "Y=juana and Y=kiko"
        ],
        "checker": "text",
        "solution": "Grossman teaches cs301, whose enrollees are Juana and Kiko."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-058",
    "mode": "auto",
    "answer": "a) no; b) yes; c) X = cs301; d) X = grossman; e) X = chan.",
    "accepted": [
      "a no; b yes; c cs301; d grossman; e chan",
      "a false; b true; c X=cs301; d X=grossman; e X=chan"
    ],
    "checker": "text",
    "solution": "Kevin is enrolled only in math273, while Kiko is enrolled in math273. Grossman is the cs301 instructor. Kevin takes math273, whose instructor is Chan, so teaches(X,kevin) returns Chan.",
    "hints": [
      "Match constants against facts exactly; for the teaches query, chain through Kevin's course."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "no",
        "accepted": [
          "false",
          "No"
        ],
        "checker": "text",
        "solution": "Kevin's listed enrollment is math273, not ee222."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "yes",
        "accepted": [
          "true",
          "Yes"
        ],
        "checker": "text",
        "solution": "enrolled(kiko,math273) is a fact."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "X = cs301",
        "accepted": [
          "cs301",
          "X=cs301"
        ],
        "checker": "text",
        "solution": "The matching fact is instructor(grossman,cs301)."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "X = grossman",
        "accepted": [
          "grossman",
          "X=grossman"
        ],
        "checker": "text",
        "solution": "Grossman is the stated cs301 instructor."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "X = chan",
        "accepted": [
          "chan",
          "X=chan"
        ],
        "checker": "text",
        "solution": "Kevin takes math273 and Chan teaches math273."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-059",
    "mode": "auto",
    "answer": "sibling(X,Y) :- mother(M,X), mother(M,Y), father(F,X), father(F,Y).",
    "accepted": [
      "sibling(X,Y) :- mother(M,Y), mother(M,X), father(F,Y), father(F,X).",
      "sibling(X,Y) :- mother(M,X), mother(M,Y), father(F,X), father(F,Y), X \\= Y.",
      "sibling(X,Y) :- mother(M,X), father(F,X), mother(M,Y), father(F,Y)."
    ],
    "checker": "text",
    "solution": "A Prolog comma means conjunction. The shared variable M forces the same mother for X and Y, and shared F forces the same father. If self-siblings must be excluded, append X \\= Y; the textbook's core rule needs only the four parent conditions.",
    "hints": [
      "Reuse M and F rather than introducing separate mother/father variables for each person.",
      "Use the argument orders mother(parent,child) and father(parent,child)."
    ],
    "verify": "Both mother calls must contain M and both father calls F; otherwise common parentage is not enforced.",
    "startHere": "Read the rule as: X and Y are siblings if M mothers both and F fathers both."
  },
  {
    "id": "rosen-ch1-ex-1-4-060",
    "mode": "rubric",
    "answer": "grandfather(X,Y) :- father(X,Z), father(Z,Y).\ngrandfather(X,Y) :- father(X,Z), mother(Z,Y).",
    "checker": "rubric",
    "solution": "X must be the father of an intermediate parent Z of Y. Z can be Y's father (paternal grandfather) or mother (maternal grandfather), so use two rules or a parenthesized disjunction.",
    "hints": [
      "Introduce one shared intermediate variable Z.",
      "Include both father-father and father-mother paths."
    ],
    "verify": "Every path starts with father(X,Z), ensuring X is male and a parent of Z, and ends with Z as Y's parent.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: grandfather(X,Y) :- father(X,Z), father(Z,Y).\ngrandfather(X,Y) :- father(X,Z), mother(Z,Y).",
      "Explains the required reasoning and cases: X must be the father of an intermediate parent Z of Y. Z can be Y's father (paternal grandfather) or mother (maternal grandfather), so use two rules or a parenthesized disjunction."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-061",
    "mode": "rubric",
    "answer": "a) ∀x(P(x)→¬Q(x)); b) ∀x(Q(x)→R(x)); c) ∀x(P(x)→¬R(x)); d) No, (c) does not follow.",
    "solution": "“No professors are …” becomes a universal conditional with a negated conclusion. The premises only connect professor to not ignorant and ignorant to vain; they do not connect professors to vanity. A professor who is neither ignorant nor vain satisfies (a) and (b) but refutes (c).",
    "hints": [
      "Use ¬∃x(P(x)∧Q(x)) as an equivalent form in (a).",
      "For (d), try a non-ignorant, non-vain professor."
    ],
    "rubric": [
      "Part (d) explicitly says the conclusion does not follow.",
      "A justification identifies the missing implication or gives a model satisfying (a),(b) but not (c)."
    ],
    "readAloud": "P is professor, Q is ignorant, R is vain. No professors ignorant means every professor is not ignorant.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(P(x)→¬Q(x))",
        "checker": "rubric",
        "solution": "Every professor is not ignorant.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→¬Q(x))",
          "Explains the required reasoning and cases: Every professor is not ignorant."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(Q(x)→R(x))",
        "checker": "rubric",
        "solution": "Ignorance implies vanity for every person.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Q(x)→R(x))",
          "Explains the required reasoning and cases: Ignorance implies vanity for every person."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(P(x)→¬R(x))",
        "checker": "rubric",
        "solution": "Every professor is not vain.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→¬R(x))",
          "Explains the required reasoning and cases: Every professor is not vain."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "No. A professor who is neither ignorant nor vain satisfies (a) and (b), but violates (c).",
        "solution": "The premises are true for such a professor; Q→R places no constraint because Q is false, while P→¬R is false.",
        "rubric": [
          "Says no and supplies a counterexample or equally clear explanation of the missing connection."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-062",
    "mode": "rubric",
    "answer": "a) ∀x(P(x)→Q(x)); b) ∃x(R(x)∧¬Q(x)); c) ∃x(R(x)∧¬P(x)); d) Yes, (c) follows from (a) and (b).",
    "solution": "By (b), choose an excuse e that is unsatisfactory. If e were a clear explanation, (a) would make it satisfactory, a contradiction. Therefore e is an excuse that is not a clear explanation, witnessing (c).",
    "hints": [
      "For (d), start with the witness supplied by (b) and test what (a) would imply if it were clear."
    ],
    "rubric": [
      "Part (d) says yes and uses one unsatisfactory excuse from (b).",
      "The justification applies P→Q to show that this excuse cannot be P, yielding exactly (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(P(x)→Q(x))",
        "checker": "rubric",
        "solution": "Clear explanations are satisfactory.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→Q(x))",
          "Explains the required reasoning and cases: Clear explanations are satisfactory."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(R(x)∧¬Q(x))",
        "checker": "rubric",
        "solution": "One text is an excuse and unsatisfactory.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(R(x)∧¬Q(x))",
          "Explains the required reasoning and cases: One text is an excuse and unsatisfactory."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x(R(x)∧¬P(x))",
        "checker": "rubric",
        "solution": "One excuse is not a clear explanation.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(R(x)∧¬P(x))",
          "Explains the required reasoning and cases: One excuse is not a clear explanation."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Yes. The unsatisfactory excuse from (b) cannot be a clear explanation, because (a) would then make it satisfactory.",
        "solution": "That same witness satisfies R(e)∧¬P(e), so (c) follows.",
        "rubric": [
          "Correct yes verdict and valid witness/contradiction reasoning."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-063",
    "mode": "rubric",
    "answer": "a) ∀x(P(x)→¬Q(x)); b) ∀x(R(x)→¬S(x)); c) ∀x(¬Q(x)→S(x)); d) ∀x(P(x)→¬R(x)); e) Yes, (d) follows from (a)–(c).",
    "solution": "Take any baby x. By (a), x is illogical; by (c), x is despised. If x could manage a crocodile, (b) would imply x is not despised, a contradiction. Hence no baby can manage a crocodile, which is (d), the requested correct conclusion.",
    "hints": [
      "For (e), chain baby → illogical → despised, then use the contrapositive of (b).",
      "The contrapositive of R→¬S is S→¬R."
    ],
    "rubric": [
      "Part (e) gives the correct yes verdict.",
      "The justification derives baby→illogical→despised and uses R→¬S or S→¬R to conclude baby→¬R.",
      "The conclusion is exactly (d), with no claim that babies exist required."
    ],
    "readAloud": "P baby, Q logical, R able to manage a crocodile, S despised.",
    "verify": "This is a universal conditional proof: assume an arbitrary x is a baby, not that a baby exists.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(P(x)→¬Q(x))",
        "checker": "rubric",
        "solution": "Every baby is not logical.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→¬Q(x))",
          "Explains the required reasoning and cases: Every baby is not logical."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(R(x)→¬S(x))",
        "checker": "rubric",
        "solution": "Anyone able to manage a crocodile is not despised.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(R(x)→¬S(x))",
          "Explains the required reasoning and cases: Anyone able to manage a crocodile is not despised."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(¬Q(x)→S(x))",
        "checker": "rubric",
        "solution": "Every illogical person is despised.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(¬Q(x)→S(x))",
          "Explains the required reasoning and cases: Every illogical person is despised."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(P(x)→¬R(x))",
        "checker": "rubric",
        "solution": "Every baby cannot manage a crocodile.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→¬R(x))",
          "Explains the required reasoning and cases: Every baby cannot manage a crocodile."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Yes. From P(x)→¬Q(x) and ¬Q(x)→S(x), a baby is despised. Since R(x)→¬S(x) is equivalent to S(x)→¬R(x), the baby cannot manage a crocodile. Thus (d) follows and is the correct conclusion.",
        "solution": "The three conditionals compose after contraposing (b).",
        "rubric": [
          "Correct yes and complete chain using contraposition, ending at ∀x(P(x)→¬R(x))."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-4-064",
    "mode": "rubric",
    "answer": "a) ∀x(P(x)→¬S(x)); b) ∀x(R(x)→S(x)); c) ∀x(Q(x)→P(x)); d) ∀x(Q(x)→¬R(x)); e) Yes, (d) follows from (a)–(c).",
    "solution": "Let x be one of my poultry. By (c), x is a duck; by (a), x is unwilling to waltz. If x were an officer, (b) would make x willing to waltz, a contradiction. Therefore x is not an officer, establishing (d).",
    "hints": [
      "“No officers decline to waltz” means every officer is willing: R(x)→S(x).",
      "For (e), use S(x)→¬R(x), the contrapositive of (b)."
    ],
    "rubric": [
      "Part (e) says yes and derives poultry→duck→not willing.",
      "The argument uses officer→willing or its contrapositive to derive poultry→not officer.",
      "The conclusion matches (d) and preserves the Lewis Carroll predicate meanings."
    ],
    "readAloud": "P duck, Q my poultry, R officer, S willing to waltz.",
    "verify": "Do not translate (b) as R(x)→¬S(x); declining is the negation of willingness.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(P(x)→¬S(x))",
        "checker": "rubric",
        "solution": "Every duck is unwilling to waltz.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(P(x)→¬S(x))",
          "Explains the required reasoning and cases: Every duck is unwilling to waltz."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(R(x)→S(x))",
        "checker": "rubric",
        "solution": "No officer declines, so every officer is willing.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(R(x)→S(x))",
          "Explains the required reasoning and cases: No officer declines, so every officer is willing."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(Q(x)→P(x))",
        "checker": "rubric",
        "solution": "All my poultry are ducks.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Q(x)→P(x))",
          "Explains the required reasoning and cases: All my poultry are ducks."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(Q(x)→¬R(x))",
        "checker": "rubric",
        "solution": "None of my poultry are officers.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Q(x)→¬R(x))",
          "Explains the required reasoning and cases: None of my poultry are officers."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Yes. Poultry are ducks by (c), hence unwilling to waltz by (a). Officers are willing by (b), so unwilling poultry cannot be officers. Thus (d) follows and is the correct conclusion.",
        "solution": "Formally, Q→P→¬S and R→S, whose contrapositive is ¬S→¬R; therefore Q→¬R.",
        "rubric": [
          "Correct yes verdict and valid chain using contraposition to reach Q→¬R."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-001",
    "mode": "rubric",
    "answer": "a) For every real number x, there is a real number y greater than x. b) The product of any two nonnegative real numbers is nonnegative. c) For every pair of real numbers x and y, there is a real number z equal to their product xy.",
    "solution": "Read quantifiers from left to right: ∀ means “for every” and ∃ means “there exists.” In (a), y may depend on x. In (b), the implication restricts the claim to nonnegative x and y. In (c), choose z = xy.",
    "hints": [
      "Translate each quantifier before translating the predicate.",
      "Check whether an existential choice is shared or may depend on earlier variables."
    ],
    "rubric": [
      "Part (a) states universal x followed by existence of a larger y.",
      "Part (b) states nonnegativity of both factors implies a nonnegative product.",
      "Part (c) states that every real product xy is itself a real number z."
    ],
    "readAloud": "For all x there exists y such that x is less than y; for all x and y, nonnegative x and y imply a nonnegative product; for all x and y there exists z equal to x times y.",
    "startHere": "Replace ∀x with “for every real x” and ∃y with “there is a real y,” preserving their order.",
    "verify": "For (a), y = x + 1 always works; for (c), z = xy always works.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For every real number x, there exists a real number y such that x < y.",
        "solution": "The existential quantifier is inside ∀x, so y can be chosen after x; for example, y = x + 1.",
        "hints": [
          "Read ∀x before ∃y."
        ],
        "rubric": [
          "Conveys that every real x has some larger real y."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For all real numbers x and y, if x ≥ 0 and y ≥ 0, then xy ≥ 0; that is, the product of two nonnegative reals is nonnegative.",
        "solution": "The hypothesis is (x ≥ 0) ∧ (y ≥ 0), and the conclusion is xy ≥ 0.",
        "hints": [
          "Keep the implication’s hypothesis and conclusion separate."
        ],
        "rubric": [
          "Includes both nonnegative hypotheses and the nonnegative-product conclusion for all real x and y."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For every two real numbers x and y, there exists a real number z such that xy = z.",
        "solution": "The required z is the product xy, so this expresses closure of the reals under multiplication.",
        "hints": [
          "The equation names z as the product."
        ],
        "rubric": [
          "States universal x and y and existence of a real z equal to xy."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-002",
    "mode": "rubric",
    "answer": "a) There is a real number x such that xy = y for every real y. b) If x is nonnegative and y is negative, then x − y is positive, for all real x and y. c) For every real x and y, there is a real z such that x = y + z.",
    "solution": "Translate in quantifier order. In (a), one fixed x works for all y (x = 1). In (b), subtracting a negative y adds its absolute value. In (c), z = x − y works.",
    "hints": [
      "Distinguish “there is one x for all y” from “for each x there is a y.”",
      "Use the equations to identify natural witnesses."
    ],
    "rubric": [
      "Part (a) requires a single real x satisfying xy = y for all real y.",
      "Part (b) preserves x ≥ 0, y < 0, and the conclusion x − y > 0.",
      "Part (c) says every real x and y admit a real z with x = y + z."
    ],
    "verify": "The witnesses x = 1 in (a) and z = x − y in (c) verify those translations.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There exists a real number x such that for every real number y, xy = y.",
        "solution": "The fixed witness is x = 1, since 1·y = y for every y.",
        "hints": [
          "∃x comes before ∀y."
        ],
        "rubric": [
          "Expresses one shared x and universal y with xy = y."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For all real x and y, if x ≥ 0 and y < 0, then x − y > 0.",
        "solution": "Since y < 0, −y > 0; hence x − y = x + (−y) > 0.",
        "hints": [
          "Read the arrow as “if … then ….”"
        ],
        "rubric": [
          "Gives the universal conditional with the exact signs and strict conclusion."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For every real x and y, there exists a real z such that x = y + z.",
        "solution": "Choose z = x − y, which is real whenever x and y are real.",
        "hints": [
          "Solve x = y + z for z."
        ],
        "rubric": [
          "States universal x and y and existence of z satisfying x = y + z."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-003",
    "mode": "rubric",
    "answer": "a) Some student in the class has sent an email to some student in the class. b) Some student has sent an email to every student in the class. c) Every student has sent an email to at least one student. d) There is one student who has received an email from every student. e) Every student has received an email from at least one student. f) Every student has sent an email to every student in the class.",
    "solution": "Q(x,y) has sender x first and recipient y second. Quantifier order determines whether a person is shared: ∃x∀y uses one sender, whereas ∀y∃x permits a different sender for each recipient.",
    "hints": [
      "Label the first variable “sender” and the second “recipient.”",
      "For ∃ followed by ∀, look for one shared person."
    ],
    "rubric": [
      "Each part preserves sender/recipient order.",
      "Each part preserves the exact quantifier order and whether a witness is shared.",
      "All six statements concern students in the class."
    ],
    "readAloud": "Q of x,y means x emailed y. Read ∃x∀y as one sender to every recipient, but ∀y∃x as every recipient has some sender.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There exist students x and y in the class such that x has sent y an email.",
        "solution": "Both quantifiers are existential, so only one emailing pair is required.",
        "rubric": [
          "States that at least one student emailed at least one student."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There is a student in the class who has sent an email to every student in the class.",
        "solution": "Choose one sender x first, then require Q(x,y) for every y.",
        "rubric": [
          "Requires one shared sender who emailed every student."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Every student in the class has sent an email to at least one student in the class.",
        "solution": "For each sender x, some recipient y exists; recipients may differ.",
        "rubric": [
          "Requires every student to be a sender to at least one recipient."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a student in the class such that every student in the class has sent that student an email.",
        "solution": "The shared existential y is the recipient of email from every x.",
        "rubric": [
          "Requires one shared recipient emailed by every student."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Every student in the class has received an email from at least one student in the class.",
        "solution": "For each recipient y, choose some sender x; senders may differ.",
        "rubric": [
          "Requires every student to be a recipient from at least one sender."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Every student in the class has sent an email to every student in the class.",
        "solution": "Both variables range universally over the class, covering every ordered pair.",
        "rubric": [
          "Requires Q(x,y) for every ordered pair of students."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-004",
    "mode": "rubric",
    "answer": "a) Some student in the class has taken some computer science course. b) Some student has taken every computer science course at the school. c) Every student in the class has taken at least one computer science course. d) There is a computer science course that every student in the class has taken. e) Every computer science course has been taken by at least one student in the class. f) Every student in the class has taken every computer science course at the school.",
    "solution": "Here x ranges over class students and y over computer science courses. The same quantifier patterns as in Exercise 3 apply, with P(x,y) meaning student x took course y.",
    "hints": [
      "Keep the two domains distinct.",
      "In (d), the course is shared; in (c), courses may differ by student."
    ],
    "rubric": [
      "Each translation preserves the student/course argument order and domains.",
      "Parts (b) and (d) require shared witnesses, while (c) and (e) allow dependent witnesses.",
      "Part (f) covers every student–course pair."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "At least one student in the class has taken at least one computer science course at the school.",
        "solution": "Two existential quantifiers assert one student–course pair.",
        "rubric": [
          "States existence of a class student and a CS course taken by that student."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There is a student in the class who has taken every computer science course at the school.",
        "solution": "One x is chosen before universally ranging over y.",
        "rubric": [
          "Requires one student to have taken all CS courses."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Every student in the class has taken at least one computer science course at the school.",
        "solution": "For every x there is some y, possibly different for each x.",
        "rubric": [
          "Requires each student to have taken some CS course."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a computer science course at the school that every student in the class has taken.",
        "solution": "The existential y names one common course for all x.",
        "rubric": [
          "Requires one common CS course taken by every class student."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Every computer science course at the school has been taken by at least one student in the class.",
        "solution": "For each course y, some student x has taken it.",
        "rubric": [
          "Requires each CS course to have a class student who took it."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Every student in the class has taken every computer science course at the school.",
        "solution": "Universal quantifiers require P(x,y) for all student–course pairs.",
        "rubric": [
          "Requires every class student to have taken every CS course."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-005",
    "mode": "rubric",
    "answer": "a) Sarah Smith has visited www.att.com. b) Some student at the school has visited www.imdb.org. c) José Orez has visited some website. d) Ashok Puri and Cindy Yoon have both visited at least one common website. e) There is a student other than David Belcher who has visited every website that David Belcher has visited. f) There are two different students who have visited exactly the same websites.",
    "solution": "Translate the predicates literally and observe scope. In (d), one y makes both conjuncts true, so the website is common. In (e), the implication only imposes a requirement when David visited z. In (f), the biconditional requires agreement in both directions for every z.",
    "hints": [
      "A shared existential variable inside a conjunction denotes the same object in both conjuncts.",
      "Read ↔ as “exactly when” or “if and only if.”"
    ],
    "rubric": [
      "Parts (a)–(d) correctly identify the named visitors and websites, including the common website in (d).",
      "Part (e) requires a student distinct from David and includes every site David visited, without requiring the converse.",
      "Part (f) requires two distinct students with identical website-visiting sets."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Sarah Smith has visited www.att.com.",
        "solution": "No quantifiers remain; substitute both constants into W.",
        "rubric": [
          "Gives exactly Sarah Smith’s visit to www.att.com."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "At least one student at the school has visited www.imdb.org.",
        "solution": "∃x asserts a student visitor for the fixed website.",
        "rubric": [
          "States that some school student visited www.imdb.org."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "José Orez has visited at least one website.",
        "solution": "The fixed first argument is José Orez and y ranges over websites.",
        "rubric": [
          "States that José Orez visited some website."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There is a website that both Ashok Puri and Cindy Yoon have visited.",
        "solution": "The same existentially chosen y occurs in both conjuncts.",
        "rubric": [
          "Requires one common website visited by both named students."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "There is a student y other than David Belcher such that y has visited every website that David Belcher has visited.",
        "solution": "For every z, W(David,z) implies W(y,z); no reverse implication is given.",
        "rubric": [
          "Includes distinctness from David and the one-directional inclusion of David’s visited sites."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "There are two different students x and y such that, for every website z, x has visited z if and only if y has visited z.",
        "solution": "The biconditional for all z says their sets of visited websites are identical.",
        "rubric": [
          "Requires two distinct students and exactly the same visited websites."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-006",
    "mode": "rubric",
    "answer": "a) Randy Goldberg is enrolled in CS 252. b) Some student is enrolled in Math 695. c) Carol Sitea is enrolled in at least one class. d) Some student is enrolled in both Math 222 and CS 252. e) There are two different students such that every class in which the first is enrolled is also one in which the second is enrolled. f) There are two different students enrolled in exactly the same classes.",
    "solution": "C(x,z) means x is enrolled in z. In (e), the implication gives a one-way inclusion of class schedules. In (f), the biconditional gives equality of schedules; x ≠ y ensures the students are distinct.",
    "hints": [
      "For (e), translate only the direction shown by →.",
      "For (f), combine ↔ for every class with x ≠ y."
    ],
    "rubric": [
      "Parts (a)–(d) preserve the fixed classes and shared student in (d).",
      "Part (e) gives two distinct students and a one-way enrollment inclusion.",
      "Part (f) gives two distinct students with identical class enrollments."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Randy Goldberg is enrolled in CS 252.",
        "solution": "Substitute the two constants into C.",
        "rubric": [
          "States the exact enrollment fact."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "At least one student at the school is enrolled in Math 695.",
        "solution": "∃x supplies a student enrolled in the fixed class.",
        "rubric": [
          "States existence of a Math 695 student."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Carol Sitea is enrolled in at least one class.",
        "solution": "The class y is existentially quantified.",
        "rubric": [
          "States that Carol Sitea has some enrollment."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Some student is enrolled in both Math 222 and CS 252.",
        "solution": "One x satisfies both enrollment predicates.",
        "rubric": [
          "Requires the same student to take both named classes."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "There are two different students x and y such that every class taken by x is also taken by y.",
        "solution": "For all z, C(x,z) → C(y,z); the converse is not required.",
        "rubric": [
          "Includes distinct students and precisely the forward enrollment inclusion."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "There are two different students who are enrolled in exactly the same classes.",
        "solution": "For every z, their enrollment truth values agree.",
        "rubric": [
          "Includes distinct students and identical enrollment sets."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-007",
    "mode": "rubric",
    "answer": "a) Abdallah Hussein does not like Japanese cuisine. b) Some student likes Korean cuisine, and every student likes Mexican cuisine. c) There is a cuisine liked by Monique Arsenault or Jay Johnson (or both). d) For every two different students, there is a cuisine that they do not both like. e) There are two students who like exactly the same cuisines. f) For every pair of students, there is a cuisine about which they agree: either both like it or both do not like it.",
    "solution": "The conjunction in (b) has two separate quantified statements, so the Korean-food lover need not be universal. In (d), x ≠ z makes the consequent relevant only for distinct students. In (e), one pair agrees on every cuisine; in (f), each pair need agree on only some cuisine, which may vary by pair.",
    "hints": [
      "Do not merge quantifiers across the top-level conjunction in (b).",
      "Compare the scope of ∀y in (e) with ∃y in (f)."
    ],
    "rubric": [
      "Parts (a)–(c) preserve negation, the separate conjuncts, and the shared cuisine respectively.",
      "Part (d) applies to distinct students and asserts existence of a cuisine not liked by both.",
      "Part (e) requires one pair with identical cuisine preferences.",
      "Part (f) requires every pair to agree on at least one cuisine, not necessarily all cuisines."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Abdallah Hussein does not like Japanese cuisine.",
        "solution": "¬ negates the single predicate T.",
        "rubric": [
          "States the exact negative preference."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "At least one student likes Korean cuisine, and every student likes Mexican cuisine.",
        "solution": "The two sides of ∧ are evaluated separately.",
        "rubric": [
          "Includes existential Korean liking and universal Mexican liking as a conjunction."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There is a cuisine that Monique Arsenault likes or Jay Johnson likes (possibly both).",
        "solution": "One y satisfies at least one side of the disjunction.",
        "rubric": [
          "Uses one cuisine and inclusive or between the two named students."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For every two distinct students x and z, there exists a cuisine y such that x and z do not both like y.",
        "solution": "If x ≠ z, ¬(T(x,y) ∧ T(z,y)) rules out joint liking for some y.",
        "rubric": [
          "Preserves distinctness, existential cuisine, and negation of joint liking."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "There exist students x and z who like exactly the same cuisines.",
        "solution": "For every y, T(x,y) and T(z,y) have the same truth value.",
        "rubric": [
          "Requires one pair whose preferences agree for every cuisine."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For every students x and z, there is some cuisine y that either both like or both dislike.",
        "solution": "The biconditional can be true through agreement in either truth value; y may depend on x and z.",
        "rubric": [
          "Requires every pair to agree on at least one cuisine without requiring total agreement."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-008",
    "mode": "rubric",
    "answer": "a) ∃x∃y Q(x,y). b) ¬∃x∃y Q(x,y). c) ∃x(Q(x,Jeopardy!) ∧ Q(x,Wheel of Fortune)). d) ∀y∃x Q(x,y). e) ∃x∃z(x ≠ z ∧ Q(x,Jeopardy!) ∧ Q(z,Jeopardy!)).",
    "solution": "Use existence for “some,” universal quantification for “every,” and a distinctness condition for “at least two.” In (b), “no student” negates the entire existence claim. In (d), each show may have a different student contestant.",
    "hints": [
      "Translate “at least two” using two unequal students.",
      "For “every show,” begin with ∀y, not ∃y."
    ],
    "readAloud": "Q of x,y means student x has been a contestant on show y.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x∃y Q(x,y)",
        "checker": "rubric",
        "solution": "One student x and one show y establish the existence claim.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y Q(x,y)",
          "Explains the required reasoning and cases: One student x and one show y establish the existence claim."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "¬∃x∃y Q(x,y)",
        "checker": "rubric",
        "solution": "Saying no such student–show pair exists is the negation of part (a), equivalently ∀x∀y¬Q(x,y).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x∃y Q(x,y)",
          "Explains the required reasoning and cases: Saying no such student–show pair exists is the negation of part (a), equivalently ∀x∀y¬Q(x,y)."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x(Q(x,Jeopardy!) ∧ Q(x,Wheel of Fortune))",
        "checker": "rubric",
        "solution": "The same existential x must occur in both show predicates.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(Q(x,Jeopardy!) ∧ Q(x,Wheel of Fortune))",
          "Explains the required reasoning and cases: The same existential x must occur in both show predicates."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀y∃x Q(x,y)",
        "checker": "rubric",
        "solution": "For each show y, choose a student x who appeared on it.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y∃x Q(x,y)",
          "Explains the required reasoning and cases: For each show y, choose a student x who appeared on it."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x∃z(x ≠ z ∧ Q(x,Jeopardy!) ∧ Q(z,Jeopardy!))",
        "checker": "rubric",
        "solution": "Two existential students plus x ≠ z guarantee at least two distinct contestants.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃z(x ≠ z ∧ Q(x,Jeopardy!) ∧ Q(z,Jeopardy!))",
          "Explains the required reasoning and cases: Two existential students plus x ≠ z guarantee at least two distinct contestants."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x∃y Q(x,y)",
      "Explains the required reasoning and cases: One student x and one show y establish the existence claim.",
      "Gives a response equivalent to the authored model answer: ¬∃x∃y Q(x,y)",
      "Explains the required reasoning and cases: Saying no such student–show pair exists is the negation of part (a), equivalently ∀x∀y¬Q(x,y).",
      "Gives a response equivalent to the authored model answer: ∃x(Q(x,Jeopardy!) ∧ Q(x,Wheel of Fortune))",
      "Explains the required reasoning and cases: The same existential x must occur in both show predicates.",
      "Gives a response equivalent to the authored model answer: ∀y∃x Q(x,y)",
      "Explains the required reasoning and cases: For each show y, choose a student x who appeared on it.",
      "Gives a response equivalent to the authored model answer: ∃x∃z(x ≠ z ∧ Q(x,Jeopardy!) ∧ Q(z,Jeopardy!))",
      "Explains the required reasoning and cases: Two existential students plus x ≠ z guarantee at least two distinct contestants."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-009",
    "mode": "rubric",
    "answer": "a) ∀x L(x,Jerry). b) ∀x∃y L(x,y). c) ∃y∀x L(x,y). d) ¬∃x∀y L(x,y). e) ∃y¬L(Lydia,y). f) ∃y∀x¬L(x,y). g) ∃y(∀xL(x,y) ∧ ∀z(∀xL(x,z) → z=y)). h) ∃y∃z(y≠z ∧ L(Lynn,y) ∧ L(Lynn,z) ∧ ∀w(L(Lynn,w) → w=y ∨ w=z)). i) ∀xL(x,x). j) ∃x∀y(L(x,y) → y=x).",
    "solution": "Order determines dependency: (b) allows each person to love a different somebody, while (c) names one person loved by everybody. “Exactly one” needs existence and uniqueness; “exactly two” needs two distinct witnesses and exclusion of every other possibility.",
    "hints": [
      "For exactly one, say that any object with the property equals the witness.",
      "For “no one besides himself,” use L(x,y) → y=x."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x L(x,Jerry)",
        "checker": "rubric",
        "solution": "Jerry is the fixed second argument for every person x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x L(x,Jerry)",
          "Explains the required reasoning and cases: Jerry is the fixed second argument for every person x."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x∃y L(x,y)",
        "checker": "rubric",
        "solution": "For each x, some loved person y exists.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∃y L(x,y)",
          "Explains the required reasoning and cases: For each x, some loved person y exists."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃y∀x L(x,y)",
        "checker": "rubric",
        "solution": "One shared y is loved by all x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∀x L(x,y)",
          "Explains the required reasoning and cases: One shared y is loved by all x."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬∃x∀y L(x,y)",
        "checker": "rubric",
        "solution": "Exclude the existence of a person x who loves every y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x∀y L(x,y)",
          "Explains the required reasoning and cases: Exclude the existence of a person x who loves every y."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃y ¬L(Lydia,y)",
        "checker": "rubric",
        "solution": "Some person y is not loved by Lydia.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y ¬L(Lydia,y)",
          "Explains the required reasoning and cases: Some person y is not loved by Lydia."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∃y∀x ¬L(x,y)",
        "checker": "rubric",
        "solution": "Choose the unloved person y, then require every x not to love y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∀x ¬L(x,y)",
          "Explains the required reasoning and cases: Choose the unloved person y, then require every x not to love y."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∃y(∀x L(x,y) ∧ ∀z(∀x L(x,z) → z=y))",
        "checker": "rubric",
        "solution": "y is universally loved, and any universally loved z must equal y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y(∀x L(x,y) ∧ ∀z(∀x L(x,z) → z=y))",
          "Explains the required reasoning and cases: y is universally loved, and any universally loved z must equal y."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "∃y∃z(y≠z ∧ L(Lynn,y) ∧ L(Lynn,z) ∧ ∀w(L(Lynn,w) → w=y ∨ w=z))",
        "checker": "rubric",
        "solution": "y and z are two distinct loved people, and no third w is loved.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∃z(y≠z ∧ L(Lynn,y) ∧ L(Lynn,z) ∧ ∀w(L(Lynn,w) → w=y ∨ w=z))",
          "Explains the required reasoning and cases: y and z are two distinct loved people, and no third w is loved."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "∀x L(x,x)",
        "checker": "rubric",
        "solution": "Use x in both argument positions to express self-love.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x L(x,x)",
          "Explains the required reasoning and cases: Use x in both argument positions to express self-love."
        ]
      },
      {
        "label": "j",
        "mode": "rubric",
        "answer": "∃x∀y(L(x,y) → y=x)",
        "checker": "rubric",
        "solution": "Anyone y loved by x must be x; self-love is permitted but not required.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(L(x,y) → y=x)",
          "Explains the required reasoning and cases: Anyone y loved by x must be x; self-love is permitted but not required."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x L(x,Jerry)",
      "Explains the required reasoning and cases: Jerry is the fixed second argument for every person x.",
      "Gives a response equivalent to the authored model answer: ∀x∃y L(x,y)",
      "Explains the required reasoning and cases: For each x, some loved person y exists.",
      "Gives a response equivalent to the authored model answer: ∃y∀x L(x,y)",
      "Explains the required reasoning and cases: One shared y is loved by all x.",
      "Gives a response equivalent to the authored model answer: ¬∃x∀y L(x,y)",
      "Explains the required reasoning and cases: Exclude the existence of a person x who loves every y.",
      "Gives a response equivalent to the authored model answer: ∃y ¬L(Lydia,y)",
      "Explains the required reasoning and cases: Some person y is not loved by Lydia.",
      "Gives a response equivalent to the authored model answer: ∃y∀x ¬L(x,y)",
      "Explains the required reasoning and cases: Choose the unloved person y, then require every x not to love y.",
      "Gives a response equivalent to the authored model answer: ∃y(∀x L(x,y) ∧ ∀z(∀x L(x,z) → z=y))",
      "Explains the required reasoning and cases: y is universally loved, and any universally loved z must equal y.",
      "Gives a response equivalent to the authored model answer: ∃y∃z(y≠z ∧ L(Lynn,y) ∧ L(Lynn,z) ∧ ∀w(L(Lynn,w) → w=y ∨ w=z))",
      "Explains the required reasoning and cases: y and z are two distinct loved people, and no third w is loved.",
      "Gives a response equivalent to the authored model answer: ∀x L(x,x)",
      "Explains the required reasoning and cases: Use x in both argument positions to express self-love.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(L(x,y) → y=x)",
      "Explains the required reasoning and cases: Anyone y loved by x must be x; self-love is permitted but not required."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-010",
    "mode": "rubric",
    "answer": "a) ∀x F(x,Fred). b) ∀y F(Evelyn,y). c) ∀x∃y F(x,y). d) ¬∃x∀y F(x,y). e) ∀y∃x F(x,y). f) ¬∃x(F(x,Fred) ∧ F(x,Jerry)). g) ∃y∃z(y≠z ∧ F(Nancy,y) ∧ F(Nancy,z) ∧ ∀w(F(Nancy,w) → w=y ∨ w=z)). h) ∃y(∀xF(x,y) ∧ ∀z(∀xF(x,z) → z=y)). i) ∀x¬F(x,x). j) ∃x∃y(y≠x ∧ F(x,y) ∧ ∀z((z≠x ∧ F(x,z)) → z=y)).",
    "solution": "In (e), “everyone can be fooled” makes the fooled person y universal and the fooler x existential. Exact counts require both witnesses and an exclusion clause. In (j), count only people other than x.",
    "hints": [
      "Reverse argument order when moving from “x fools y” to “y is fooled by x.”",
      "In (j), restrict the uniqueness clause to z ≠ x."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x F(x,Fred)",
        "checker": "rubric",
        "solution": "Every person x can fool the fixed person Fred.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x F(x,Fred)",
          "Explains the required reasoning and cases: Every person x can fool the fixed person Fred."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀y F(Evelyn,y)",
        "checker": "rubric",
        "solution": "Evelyn is the fixed fooler for every y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y F(Evelyn,y)",
          "Explains the required reasoning and cases: Evelyn is the fixed fooler for every y."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x∃y F(x,y)",
        "checker": "rubric",
        "solution": "Each person x can fool at least one possibly different y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∃y F(x,y)",
          "Explains the required reasoning and cases: Each person x can fool at least one possibly different y."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "¬∃x∀y F(x,y)",
        "checker": "rubric",
        "solution": "No single x can fool every y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x∀y F(x,y)",
          "Explains the required reasoning and cases: No single x can fool every y."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀y∃x F(x,y)",
        "checker": "rubric",
        "solution": "For every fooled person y, some fooler x exists.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y∃x F(x,y)",
          "Explains the required reasoning and cases: For every fooled person y, some fooler x exists."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "¬∃x(F(x,Fred) ∧ F(x,Jerry))",
        "checker": "rubric",
        "solution": "Exclude anyone who satisfies both fooling claims simultaneously.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬∃x(F(x,Fred) ∧ F(x,Jerry))",
          "Explains the required reasoning and cases: Exclude anyone who satisfies both fooling claims simultaneously."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∃y∃z(y≠z ∧ F(Nancy,y) ∧ F(Nancy,z) ∧ ∀w(F(Nancy,w) → w=y ∨ w=z))",
        "checker": "rubric",
        "solution": "Two distinct people are fooled and every fooled w is one of them.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∃z(y≠z ∧ F(Nancy,y) ∧ F(Nancy,z) ∧ ∀w(F(Nancy,w) → w=y ∨ w=z))",
          "Explains the required reasoning and cases: Two distinct people are fooled and every fooled w is one of them."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "∃y(∀x F(x,y) ∧ ∀z(∀x F(x,z) → z=y))",
        "checker": "rubric",
        "solution": "There is a universally foolable y, and any other universally foolable z equals y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y(∀x F(x,y) ∧ ∀z(∀x F(x,z) → z=y))",
          "Explains the required reasoning and cases: There is a universally foolable y, and any other universally foolable z equals y."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "∀x ¬F(x,x)",
        "checker": "rubric",
        "solution": "For every x, self-fooling is false.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x ¬F(x,x)",
          "Explains the required reasoning and cases: For every x, self-fooling is false."
        ]
      },
      {
        "label": "j",
        "mode": "rubric",
        "answer": "∃x∃y(y≠x ∧ F(x,y) ∧ ∀z((z≠x ∧ F(x,z)) → z=y))",
        "checker": "rubric",
        "solution": "x can fool one other person y, and every other person x can fool must equal y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(y≠x ∧ F(x,y) ∧ ∀z((z≠x ∧ F(x,z)) → z=y))",
          "Explains the required reasoning and cases: x can fool one other person y, and every other person x can fool must equal y."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x F(x,Fred)",
      "Explains the required reasoning and cases: Every person x can fool the fixed person Fred.",
      "Gives a response equivalent to the authored model answer: ∀y F(Evelyn,y)",
      "Explains the required reasoning and cases: Evelyn is the fixed fooler for every y.",
      "Gives a response equivalent to the authored model answer: ∀x∃y F(x,y)",
      "Explains the required reasoning and cases: Each person x can fool at least one possibly different y.",
      "Gives a response equivalent to the authored model answer: ¬∃x∀y F(x,y)",
      "Explains the required reasoning and cases: No single x can fool every y.",
      "Gives a response equivalent to the authored model answer: ∀y∃x F(x,y)",
      "Explains the required reasoning and cases: For every fooled person y, some fooler x exists.",
      "Gives a response equivalent to the authored model answer: ¬∃x(F(x,Fred) ∧ F(x,Jerry))",
      "Explains the required reasoning and cases: Exclude anyone who satisfies both fooling claims simultaneously.",
      "Gives a response equivalent to the authored model answer: ∃y∃z(y≠z ∧ F(Nancy,y) ∧ F(Nancy,z) ∧ ∀w(F(Nancy,w) → w=y ∨ w=z))",
      "Explains the required reasoning and cases: Two distinct people are fooled and every fooled w is one of them.",
      "Gives a response equivalent to the authored model answer: ∃y(∀x F(x,y) ∧ ∀z(∀x F(x,z) → z=y))",
      "Explains the required reasoning and cases: There is a universally foolable y, and any other universally foolable z equals y.",
      "Gives a response equivalent to the authored model answer: ∀x ¬F(x,x)",
      "Explains the required reasoning and cases: For every x, self-fooling is false.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(y≠x ∧ F(x,y) ∧ ∀z((z≠x ∧ F(x,z)) → z=y))",
      "Explains the required reasoning and cases: x can fool one other person y, and every other person x can fool must equal y."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-011",
    "mode": "rubric",
    "answer": "a) A(Lois,Professor Michaels). b) ∀x(S(x) → A(x,Professor Gross)). c) ∀x(F(x) → (A(x,Professor Miller) ∨ A(Professor Miller,x))). d) ∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y))). e) ∃x(F(x) ∧ ∀y(S(y) → ¬A(y,x))). f) ∃x(S(x) ∧ ∀y(F(y) → A(x,y))). g) ∃x(F(x) ∧ ∀y((F(y) ∧ y≠x) → A(x,y))). h) ∃x(S(x) ∧ ∀y(F(y) → ¬A(y,x))).",
    "solution": "Because the common domain contains everyone associated with the school, use S and F to restrict students and faculty. “Every student” uses →; “some student” uses ∧. Argument order distinguishes asking from being asked.",
    "hints": [
      "Use implications with universal restricted domains and conjunctions with existential ones.",
      "In (g), explicitly exclude the faculty member x from “every other faculty member.”"
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A(Lois,Professor Michaels)",
        "checker": "rubric",
        "solution": "This is a single unquantified asking fact.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: A(Lois,Professor Michaels)",
          "Explains the required reasoning and cases: This is a single unquantified asking fact."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(S(x) → A(x,Professor Gross))",
        "checker": "rubric",
        "solution": "Restrict the universal claim to students with S(x).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(S(x) → A(x,Professor Gross))",
          "Explains the required reasoning and cases: Restrict the universal claim to students with S(x)."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(F(x) → (A(x,Professor Miller) ∨ A(Professor Miller,x)))",
        "checker": "rubric",
        "solution": "The two disjuncts represent the two possible asking directions.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(F(x) → (A(x,Professor Miller) ∨ A(Professor Miller,x)))",
          "Explains the required reasoning and cases: The two disjuncts represent the two possible asking directions."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y)))",
        "checker": "rubric",
        "solution": "Choose a student x who asks no faculty member y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y)))",
          "Explains the required reasoning and cases: Choose a student x who asks no faculty member y."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x(F(x) ∧ ∀y(S(y) → ¬A(y,x)))",
        "checker": "rubric",
        "solution": "Choose faculty x; every student y fails to ask x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(F(x) ∧ ∀y(S(y) → ¬A(y,x)))",
          "Explains the required reasoning and cases: Choose faculty x; every student y fails to ask x."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∃x(S(x) ∧ ∀y(F(y) → A(x,y)))",
        "checker": "rubric",
        "solution": "One student x asks every faculty member y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → A(x,y)))",
          "Explains the required reasoning and cases: One student x asks every faculty member y."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∃x(F(x) ∧ ∀y((F(y) ∧ y≠x) → A(x,y)))",
        "checker": "rubric",
        "solution": "The condition F(y) ∧ y≠x limits y to other faculty members.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(F(x) ∧ ∀y((F(y) ∧ y≠x) → A(x,y)))",
          "Explains the required reasoning and cases: The condition F(y) ∧ y≠x limits y to other faculty members."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "∃x(S(x) ∧ ∀y(F(y) → ¬A(y,x)))",
        "checker": "rubric",
        "solution": "One student x is never the recipient of a question from faculty y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → ¬A(y,x)))",
          "Explains the required reasoning and cases: One student x is never the recipient of a question from faculty y."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: A(Lois,Professor Michaels)",
      "Explains the required reasoning and cases: This is a single unquantified asking fact.",
      "Gives a response equivalent to the authored model answer: ∀x(S(x) → A(x,Professor Gross))",
      "Explains the required reasoning and cases: Restrict the universal claim to students with S(x).",
      "Gives a response equivalent to the authored model answer: ∀x(F(x) → (A(x,Professor Miller) ∨ A(Professor Miller,x)))",
      "Explains the required reasoning and cases: The two disjuncts represent the two possible asking directions.",
      "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → ¬A(x,y)))",
      "Explains the required reasoning and cases: Choose a student x who asks no faculty member y.",
      "Gives a response equivalent to the authored model answer: ∃x(F(x) ∧ ∀y(S(y) → ¬A(y,x)))",
      "Explains the required reasoning and cases: Choose faculty x; every student y fails to ask x.",
      "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → A(x,y)))",
      "Explains the required reasoning and cases: One student x asks every faculty member y.",
      "Gives a response equivalent to the authored model answer: ∃x(F(x) ∧ ∀y((F(y) ∧ y≠x) → A(x,y)))",
      "Explains the required reasoning and cases: The condition F(y) ∧ y≠x limits y to other faculty members.",
      "Gives a response equivalent to the authored model answer: ∃x(S(x) ∧ ∀y(F(y) → ¬A(y,x)))",
      "Explains the required reasoning and cases: One student x is never the recipient of a question from faculty y."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-012",
    "mode": "rubric",
    "answer": "a) ¬I(Jerry). b) ¬C(Rachel,Chelsea). c) ¬C(Jan,Sharon). d) ∀x¬C(x,Bob). e) ∀x(x≠Joseph → C(Sanjay,x)). f) ∃x¬I(x). g) ¬∀xI(x), equivalently ∃x¬I(x). h) ∃x(I(x) ∧ ∀y(I(y) → y=x)). i) ∃x(¬I(x) ∧ ∀y(y≠x → I(y))). j) ∀x(I(x) → ∃y(y≠x ∧ C(x,y))). k) ∃x(I(x) ∧ ∀y(y≠x → ¬C(x,y))). l) ∃x∃y(x≠y ∧ ¬C(x,y)). m) ∃x∀yC(x,y). n) ∃x∃y∃z(x≠y ∧ ¬C(x,z) ∧ ¬C(y,z)). o) ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (C(x,z) ∨ C(y,z)))).",
    "solution": "Use x≠y for distinct students. Exactly one connected student requires a witness and uniqueness; everyone except one requires one disconnected witness and connectedness for all others. In (n), the same z is shared by both non-chat claims.",
    "hints": [
      "For “the same person,” reuse one variable z in both predicates.",
      "For “between them,” use a disjunction inside the universal over everyone else."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "¬I(Jerry)",
        "checker": "rubric",
        "solution": "Negate Jerry’s connection predicate.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬I(Jerry)",
          "Explains the required reasoning and cases: Negate Jerry’s connection predicate."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "¬C(Rachel,Chelsea)",
        "checker": "rubric",
        "solution": "Negate the chatting predicate for the named pair.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬C(Rachel,Chelsea)",
          "Explains the required reasoning and cases: Negate the chatting predicate for the named pair."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬C(Jan,Sharon)",
        "checker": "rubric",
        "solution": "Jan and Sharon have not chatted with each other.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬C(Jan,Sharon)",
          "Explains the required reasoning and cases: Jan and Sharon have not chatted with each other."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x ¬C(x,Bob)",
        "checker": "rubric",
        "solution": "No class member x chatted with Bob.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x ¬C(x,Bob)",
          "Explains the required reasoning and cases: No class member x chatted with Bob."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀x(x≠Joseph → C(Sanjay,x))",
        "checker": "rubric",
        "solution": "Every x other than Joseph has chatted with Sanjay.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x≠Joseph → C(Sanjay,x))",
          "Explains the required reasoning and cases: Every x other than Joseph has chatted with Sanjay."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∃x ¬I(x)",
        "checker": "rubric",
        "solution": "At least one student lacks a connection.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x ¬I(x)",
          "Explains the required reasoning and cases: At least one student lacks a connection."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∃x ¬I(x)",
        "checker": "rubric",
        "solution": "“Not everyone” is logically equivalent to “someone does not.”",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x ¬I(x)",
          "Explains the required reasoning and cases: “Not everyone” is logically equivalent to “someone does not.”"
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "∃x(I(x) ∧ ∀y(I(y) → y=x))",
        "checker": "rubric",
        "solution": "x has a connection and every connected y must be that same x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(I(x) ∧ ∀y(I(y) → y=x))",
          "Explains the required reasoning and cases: x has a connection and every connected y must be that same x."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "∃x(¬I(x) ∧ ∀y(y≠x → I(y)))",
        "checker": "rubric",
        "solution": "One student x lacks a connection and every other student has one.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(¬I(x) ∧ ∀y(y≠x → I(y)))",
          "Explains the required reasoning and cases: One student x lacks a connection and every other student has one."
        ]
      },
      {
        "label": "j",
        "mode": "rubric",
        "answer": "∀x(I(x) → ∃y(y≠x ∧ C(x,y)))",
        "checker": "rubric",
        "solution": "For every connected x, choose another student y who chatted with x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(I(x) → ∃y(y≠x ∧ C(x,y)))",
          "Explains the required reasoning and cases: For every connected x, choose another student y who chatted with x."
        ]
      },
      {
        "label": "k",
        "mode": "rubric",
        "answer": "∃x(I(x) ∧ ∀y(y≠x → ¬C(x,y)))",
        "checker": "rubric",
        "solution": "Some connected x has no chat with any different student y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(I(x) ∧ ∀y(y≠x → ¬C(x,y)))",
          "Explains the required reasoning and cases: Some connected x has no chat with any different student y."
        ]
      },
      {
        "label": "l",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ ¬C(x,y))",
        "checker": "rubric",
        "solution": "Two distinct students form a non-chatting pair.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ¬C(x,y))",
          "Explains the required reasoning and cases: Two distinct students form a non-chatting pair."
        ]
      },
      {
        "label": "m",
        "mode": "rubric",
        "answer": "∃x∀y C(x,y)",
        "checker": "rubric",
        "solution": "One student x has chatted with every y, including x if the domain is read literally.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y C(x,y)",
          "Explains the required reasoning and cases: One student x has chatted with every y, including x if the domain is read literally."
        ]
      },
      {
        "label": "n",
        "mode": "rubric",
        "answer": "∃x∃y∃z(x≠y ∧ ¬C(x,z) ∧ ¬C(y,z))",
        "checker": "rubric",
        "solution": "Two distinct students x and y share a person z with whom neither chatted.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y∃z(x≠y ∧ ¬C(x,z) ∧ ¬C(y,z))",
          "Explains the required reasoning and cases: Two distinct students x and y share a person z with whom neither chatted."
        ]
      },
      {
        "label": "o",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (C(x,z) ∨ C(y,z))))",
        "checker": "rubric",
        "solution": "For each other student z, at least one of the two selected students chatted with z.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (C(x,z) ∨ C(y,z))))",
          "Explains the required reasoning and cases: For each other student z, at least one of the two selected students chatted with z."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬I(Jerry)",
      "Explains the required reasoning and cases: Negate Jerry’s connection predicate.",
      "Gives a response equivalent to the authored model answer: ¬C(Rachel,Chelsea)",
      "Explains the required reasoning and cases: Negate the chatting predicate for the named pair.",
      "Gives a response equivalent to the authored model answer: ¬C(Jan,Sharon)",
      "Explains the required reasoning and cases: Jan and Sharon have not chatted with each other.",
      "Gives a response equivalent to the authored model answer: ∀x ¬C(x,Bob)",
      "Explains the required reasoning and cases: No class member x chatted with Bob.",
      "Gives a response equivalent to the authored model answer: ∀x(x≠Joseph → C(Sanjay,x))",
      "Explains the required reasoning and cases: Every x other than Joseph has chatted with Sanjay.",
      "Gives a response equivalent to the authored model answer: ∃x ¬I(x)",
      "Explains the required reasoning and cases: At least one student lacks a connection.",
      "Gives a response equivalent to the authored model answer: ∃x ¬I(x)",
      "Explains the required reasoning and cases: “Not everyone” is logically equivalent to “someone does not.”",
      "Gives a response equivalent to the authored model answer: ∃x(I(x) ∧ ∀y(I(y) → y=x))",
      "Explains the required reasoning and cases: x has a connection and every connected y must be that same x.",
      "Gives a response equivalent to the authored model answer: ∃x(¬I(x) ∧ ∀y(y≠x → I(y)))",
      "Explains the required reasoning and cases: One student x lacks a connection and every other student has one.",
      "Gives a response equivalent to the authored model answer: ∀x(I(x) → ∃y(y≠x ∧ C(x,y)))",
      "Explains the required reasoning and cases: For every connected x, choose another student y who chatted with x.",
      "Gives a response equivalent to the authored model answer: ∃x(I(x) ∧ ∀y(y≠x → ¬C(x,y)))",
      "Explains the required reasoning and cases: Some connected x has no chat with any different student y.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ¬C(x,y))",
      "Explains the required reasoning and cases: Two distinct students form a non-chatting pair.",
      "Gives a response equivalent to the authored model answer: ∃x∀y C(x,y)",
      "Explains the required reasoning and cases: One student x has chatted with every y, including x if the domain is read literally.",
      "Gives a response equivalent to the authored model answer: ∃x∃y∃z(x≠y ∧ ¬C(x,z) ∧ ¬C(y,z))",
      "Explains the required reasoning and cases: Two distinct students x and y share a person z with whom neither chatted.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (C(x,z) ∨ C(y,z))))",
      "Explains the required reasoning and cases: For each other student z, at least one of the two selected students chatted with z."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-013",
    "mode": "rubric",
    "answer": "a) ¬M(Chou,Koko). b) ¬M(Arlene,Sarah) ∧ ¬T(Arlene,Sarah). c) ¬M(Deborah,José). d) ∀xM(x,Ken). e) ∀x¬T(x,Nina). f) ∀x(T(x,Avi) ∨ M(x,Avi)). g) ∃x∀y(y≠x → M(x,y)). h) ∃x∀y(y≠x → (M(x,y) ∨ T(x,y))). i) ∃x∃y(x≠y ∧ M(x,y) ∧ M(y,x)). j) ∃xM(x,x). k) ∃x∀y(y≠x → (¬M(y,x) ∧ ¬T(y,x))). l) ∀x∃y(y≠x ∧ (M(y,x) ∨ T(y,x))). m) ∃x∃y(x≠y ∧ M(x,y) ∧ T(y,x)). n) ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z)))).",
    "solution": "M is directional, so receiving email reverses its arguments. “Everyone else” and “another student” require inequality. In (m), the direction is deliberately opposite for email and telephone. In (n), every other student must be covered by at least one of four directional contact possibilities.",
    "hints": [
      "Write sender/caller first and recipient second.",
      "For mutual contact in (i), use both M(x,y) and M(y,x)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "¬M(Chou,Koko)",
        "checker": "rubric",
        "solution": "Negate the named email fact.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬M(Chou,Koko)",
          "Explains the required reasoning and cases: Negate the named email fact."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "¬M(Arlene,Sarah) ∧ ¬T(Arlene,Sarah)",
        "checker": "rubric",
        "solution": "“Neither … nor” requires both contact types to be false.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬M(Arlene,Sarah) ∧ ¬T(Arlene,Sarah)",
          "Explains the required reasoning and cases: “Neither … nor” requires both contact types to be false."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "¬M(Deborah,José)",
        "checker": "rubric",
        "solution": "Deborah is sender and José is recipient.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ¬M(Deborah,José)",
          "Explains the required reasoning and cases: Deborah is sender and José is recipient."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x M(x,Ken)",
        "checker": "rubric",
        "solution": "Every student x is a sender to Ken.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x M(x,Ken)",
          "Explains the required reasoning and cases: Every student x is a sender to Ken."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀x ¬T(x,Nina)",
        "checker": "rubric",
        "solution": "No student x telephoned Nina.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x ¬T(x,Nina)",
          "Explains the required reasoning and cases: No student x telephoned Nina."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∀x(T(x,Avi) ∨ M(x,Avi))",
        "checker": "rubric",
        "solution": "For each student x, at least one contact method to Avi occurred.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(T(x,Avi) ∨ M(x,Avi))",
          "Explains the required reasoning and cases: For each student x, at least one contact method to Avi occurred."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∃x∀y(y≠x → M(x,y))",
        "checker": "rubric",
        "solution": "One sender x emailed every different student y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → M(x,y))",
          "Explains the required reasoning and cases: One sender x emailed every different student y."
        ]
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "∃x∀y(y≠x → (M(x,y) ∨ T(x,y)))",
        "checker": "rubric",
        "solution": "One x contacted every other y by at least one method.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → (M(x,y) ∨ T(x,y)))",
          "Explains the required reasoning and cases: One x contacted every other y by at least one method."
        ]
      },
      {
        "label": "i",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ M(x,y) ∧ M(y,x))",
        "checker": "rubric",
        "solution": "Distinct x and y emailed in both directions.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ M(x,y) ∧ M(y,x))",
          "Explains the required reasoning and cases: Distinct x and y emailed in both directions."
        ]
      },
      {
        "label": "j",
        "mode": "rubric",
        "answer": "∃x M(x,x)",
        "checker": "rubric",
        "solution": "Using x twice expresses self-email.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x M(x,x)",
          "Explains the required reasoning and cases: Using x twice expresses self-email."
        ]
      },
      {
        "label": "k",
        "mode": "rubric",
        "answer": "∃x∀y(y≠x → (¬M(y,x) ∧ ¬T(y,x)))",
        "checker": "rubric",
        "solution": "For one x, every other y neither emailed nor called x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → (¬M(y,x) ∧ ¬T(y,x)))",
          "Explains the required reasoning and cases: For one x, every other y neither emailed nor called x."
        ]
      },
      {
        "label": "l",
        "mode": "rubric",
        "answer": "∀x∃y(y≠x ∧ (M(y,x) ∨ T(y,x)))",
        "checker": "rubric",
        "solution": "Each recipient x has some other y who emailed or called x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∃y(y≠x ∧ (M(y,x) ∨ T(y,x)))",
          "Explains the required reasoning and cases: Each recipient x has some other y who emailed or called x."
        ]
      },
      {
        "label": "m",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ M(x,y) ∧ T(y,x))",
        "checker": "rubric",
        "solution": "One student emails the other, and the second telephones the first.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ M(x,y) ∧ T(y,x))",
          "Explains the required reasoning and cases: One student emails the other, and the second telephones the first."
        ]
      },
      {
        "label": "n",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z))))",
        "checker": "rubric",
        "solution": "Two distinct students cover every other z through email or telephone by at least one of them.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z))))",
          "Explains the required reasoning and cases: Two distinct students cover every other z through email or telephone by at least one of them."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ¬M(Chou,Koko)",
      "Explains the required reasoning and cases: Negate the named email fact.",
      "Gives a response equivalent to the authored model answer: ¬M(Arlene,Sarah) ∧ ¬T(Arlene,Sarah)",
      "Explains the required reasoning and cases: “Neither … nor” requires both contact types to be false.",
      "Gives a response equivalent to the authored model answer: ¬M(Deborah,José)",
      "Explains the required reasoning and cases: Deborah is sender and José is recipient.",
      "Gives a response equivalent to the authored model answer: ∀x M(x,Ken)",
      "Explains the required reasoning and cases: Every student x is a sender to Ken.",
      "Gives a response equivalent to the authored model answer: ∀x ¬T(x,Nina)",
      "Explains the required reasoning and cases: No student x telephoned Nina.",
      "Gives a response equivalent to the authored model answer: ∀x(T(x,Avi) ∨ M(x,Avi))",
      "Explains the required reasoning and cases: For each student x, at least one contact method to Avi occurred.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → M(x,y))",
      "Explains the required reasoning and cases: One sender x emailed every different student y.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → (M(x,y) ∨ T(x,y)))",
      "Explains the required reasoning and cases: One x contacted every other y by at least one method.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ M(x,y) ∧ M(y,x))",
      "Explains the required reasoning and cases: Distinct x and y emailed in both directions.",
      "Gives a response equivalent to the authored model answer: ∃x M(x,x)",
      "Explains the required reasoning and cases: Using x twice expresses self-email.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(y≠x → (¬M(y,x) ∧ ¬T(y,x)))",
      "Explains the required reasoning and cases: For one x, every other y neither emailed nor called x.",
      "Gives a response equivalent to the authored model answer: ∀x∃y(y≠x ∧ (M(y,x) ∨ T(y,x)))",
      "Explains the required reasoning and cases: Each recipient x has some other y who emailed or called x.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ M(x,y) ∧ T(y,x))",
      "Explains the required reasoning and cases: One student emails the other, and the second telephones the first.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ ∀z((z≠x ∧ z≠y) → (M(x,z) ∨ T(x,z) ∨ M(y,z) ∨ T(y,z))))",
      "Explains the required reasoning and cases: Two distinct students cover every other z through email or telephone by at least one of them."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-014",
    "mode": "rubric",
    "answer": "Using C(x) for “x is a student in this class”: a) ∃x(C(x) ∧ Speak(x,Hindi)). b) ∀x(C(x) → ∃y Play(x,y)). c) ∃x(C(x) ∧ Visit(x,Alaska) ∧ ¬Visit(x,Hawaii)). d) ∀x(C(x) → ∃y Learn(x,y)), where y ranges over programming languages. e) ∃x(C(x) ∧ ∃d(Department(d) ∧ ∀y(Offer(d,y) → Take(x,y)))). f) ∃x(C(x) ∧ ∃y(C(y) ∧ y≠x ∧ SameTown(x,y) ∧ ∀z((C(z) ∧ z≠x ∧ SameTown(x,z)) → z=y))). g) ∀x(C(x) → ∃y∃g(C(y) ∧ y≠x ∧ ChatIn(x,y,g))).",
    "solution": "Define Speak(x,l), Play(x,s), Visit(x,p), Learn(x,l), Offer(d,c), Take(x,c), SameTown(x,y), and ChatIn(x,y,g) in the obvious way. Universal students are restricted by implication and existential students by conjunction. Part (f) combines one distinct same-town witness with a uniqueness condition.",
    "hints": [
      "Define a predicate for each new kind of object before writing the quantifiers.",
      "For exactly one other student, include z≠x and force every same-town z to equal the witness."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ Speak(x,Hindi))",
        "checker": "rubric",
        "solution": "Choose a class student who speaks Hindi.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ Speak(x,Hindi))",
          "Explains the required reasoning and cases: Choose a class student who speaks Hindi."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(C(x) → ∃y Play(x,y))",
        "checker": "rubric",
        "solution": "For every class student x, choose some sport y that x plays.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y Play(x,y))",
          "Explains the required reasoning and cases: For every class student x, choose some sport y that x plays."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ Visit(x,Alaska) ∧ ¬Visit(x,Hawaii))",
        "checker": "rubric",
        "solution": "One student satisfies class membership, an Alaska visit, and no Hawaii visit.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ Visit(x,Alaska) ∧ ¬Visit(x,Hawaii))",
          "Explains the required reasoning and cases: One student satisfies class membership, an Alaska visit, and no Hawaii visit."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(C(x) → ∃y Learn(x,y))",
        "checker": "rubric",
        "solution": "Each class student has learned at least one programming language y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y Learn(x,y))",
          "Explains the required reasoning and cases: Each class student has learned at least one programming language y."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ ∃d(Department(d) ∧ ∀y(Offer(d,y) → Take(x,y))))",
        "checker": "rubric",
        "solution": "One student x and one department d are shared across all courses y offered by d.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ ∃d(Department(d) ∧ ∀y(Offer(d,y) → Take(x,y))))",
          "Explains the required reasoning and cases: One student x and one department d are shared across all courses y offered by d."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ ∃y(C(y) ∧ y≠x ∧ SameTown(x,y) ∧ ∀z((C(z) ∧ z≠x ∧ SameTown(x,z)) → z=y)))",
        "checker": "rubric",
        "solution": "x has one other classmate y from the same town, and every other such classmate z must equal y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ ∃y(C(y) ∧ y≠x ∧ SameTown(x,y) ∧ ∀z((C(z) ∧ z≠x ∧ SameTown(x,z)) → z=y)))",
          "Explains the required reasoning and cases: x has one other classmate y from the same town, and every other such classmate z must equal y."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∀x(C(x) → ∃y∃g(C(y) ∧ y≠x ∧ ChatIn(x,y,g)))",
        "checker": "rubric",
        "solution": "For each class student x, some other classmate y and chat group g witness the conversation.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y∃g(C(y) ∧ y≠x ∧ ChatIn(x,y,g)))",
          "Explains the required reasoning and cases: For each class student x, some other classmate y and chat group g witness the conversation."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ Speak(x,Hindi))",
      "Explains the required reasoning and cases: Choose a class student who speaks Hindi.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y Play(x,y))",
      "Explains the required reasoning and cases: For every class student x, choose some sport y that x plays.",
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ Visit(x,Alaska) ∧ ¬Visit(x,Hawaii))",
      "Explains the required reasoning and cases: One student satisfies class membership, an Alaska visit, and no Hawaii visit.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y Learn(x,y))",
      "Explains the required reasoning and cases: Each class student has learned at least one programming language y.",
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ ∃d(Department(d) ∧ ∀y(Offer(d,y) → Take(x,y))))",
      "Explains the required reasoning and cases: One student x and one department d are shared across all courses y offered by d.",
      "Gives a response equivalent to the authored model answer: ∃x(C(x) ∧ ∃y(C(y) ∧ y≠x ∧ SameTown(x,y) ∧ ∀z((C(z) ∧ z≠x ∧ SameTown(x,z)) → z=y)))",
      "Explains the required reasoning and cases: x has one other classmate y from the same town, and every other such classmate z must equal y.",
      "Gives a response equivalent to the authored model answer: ∀x(C(x) → ∃y∃g(C(y) ∧ y≠x ∧ ChatIn(x,y,g)))",
      "Explains the required reasoning and cases: For each class student x, some other classmate y and chat group g witness the conversation."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-015",
    "mode": "rubric",
    "answer": "a) ∀x(CSstudent(x) → Need(x,DiscreteMathematics)). b) ∃x(Class(x) ∧ ∃y(PersonalComputer(y) ∧ Own(x,y))). c) ∀x(Class(x) → ∃y(CScourse(y) ∧ Take(x,y))). d) ∃x(Class(x) ∧ ∃y(CScourse(y) ∧ Take(x,y))). e) ∀x(Class(x) → ∀b(Building(b) → BeenIn(x,b))). f) ∃x(Class(x) ∧ ∃b(Building(b) ∧ ∀r(RoomIn(r,b) → BeenIn(x,r)))). g) ∀x(Class(x) → ∀b(Building(b) → ∃r(RoomIn(r,b) ∧ BeenIn(x,r)))).",
    "solution": "The key contrast is scope: (f) selects one building before universally covering all its rooms, while (g) universally selects each building before finding a possibly different room in it. Use Building and RoomIn to keep objects and their relationship explicit.",
    "hints": [
      "Compare where ∃b occurs in (f) and (g).",
      "Use “some student” with ∧ and “every student” with →."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x(CSstudent(x) → Need(x,DiscreteMathematics))",
        "checker": "rubric",
        "solution": "Every computer science student needs the specified discrete mathematics course.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(CSstudent(x) → Need(x,DiscreteMathematics))",
          "Explains the required reasoning and cases: Every computer science student needs the specified discrete mathematics course."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(Class(x) ∧ ∃y(PersonalComputer(y) ∧ Own(x,y)))",
        "checker": "rubric",
        "solution": "Choose a class student x and a personal computer y owned by x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃y(PersonalComputer(y) ∧ Own(x,y)))",
          "Explains the required reasoning and cases: Choose a class student x and a personal computer y owned by x."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(Class(x) → ∃y(CScourse(y) ∧ Take(x,y)))",
        "checker": "rubric",
        "solution": "Every class student has some computer science course y that x took.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∃y(CScourse(y) ∧ Take(x,y)))",
          "Explains the required reasoning and cases: Every class student has some computer science course y that x took."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x(Class(x) ∧ ∃y(CScourse(y) ∧ Take(x,y)))",
        "checker": "rubric",
        "solution": "Some class student x has taken at least one CS course y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃y(CScourse(y) ∧ Take(x,y)))",
          "Explains the required reasoning and cases: Some class student x has taken at least one CS course y."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀x(Class(x) → ∀b(Building(b) → BeenIn(x,b)))",
        "checker": "rubric",
        "solution": "For every class student and every campus building, the student has been in that building.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∀b(Building(b) → BeenIn(x,b)))",
          "Explains the required reasoning and cases: For every class student and every campus building, the student has been in that building."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "∃x(Class(x) ∧ ∃b(Building(b) ∧ ∀r(RoomIn(r,b) → BeenIn(x,r))))",
        "checker": "rubric",
        "solution": "Some student has one building b for which every room r has been visited by that student.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃b(Building(b) ∧ ∀r(RoomIn(r,b) → BeenIn(x,r))))",
          "Explains the required reasoning and cases: Some student has one building b for which every room r has been visited by that student."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "∀x(Class(x) → ∀b(Building(b) → ∃r(RoomIn(r,b) ∧ BeenIn(x,r))))",
        "checker": "rubric",
        "solution": "For every student and building, some room in that building has been visited; rooms may differ by building.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∀b(Building(b) → ∃r(RoomIn(r,b) ∧ BeenIn(x,r))))",
          "Explains the required reasoning and cases: For every student and building, some room in that building has been visited; rooms may differ by building."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x(CSstudent(x) → Need(x,DiscreteMathematics))",
      "Explains the required reasoning and cases: Every computer science student needs the specified discrete mathematics course.",
      "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃y(PersonalComputer(y) ∧ Own(x,y)))",
      "Explains the required reasoning and cases: Choose a class student x and a personal computer y owned by x.",
      "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∃y(CScourse(y) ∧ Take(x,y)))",
      "Explains the required reasoning and cases: Every class student has some computer science course y that x took.",
      "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃y(CScourse(y) ∧ Take(x,y)))",
      "Explains the required reasoning and cases: Some class student x has taken at least one CS course y.",
      "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∀b(Building(b) → BeenIn(x,b)))",
      "Explains the required reasoning and cases: For every class student and every campus building, the student has been in that building.",
      "Gives a response equivalent to the authored model answer: ∃x(Class(x) ∧ ∃b(Building(b) ∧ ∀r(RoomIn(r,b) → BeenIn(x,r))))",
      "Explains the required reasoning and cases: Some student has one building b for which every room r has been visited by that student.",
      "Gives a response equivalent to the authored model answer: ∀x(Class(x) → ∀b(Building(b) → ∃r(RoomIn(r,b) ∧ BeenIn(x,r))))",
      "Explains the required reasoning and cases: For every student and building, some room in that building has been visited; rooms may differ by building."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-016",
    "mode": "rubric",
    "answer": "Let C(x), M(x), CS(x), So(x), J(x) denote class membership, mathematics major, computer science major, sophomore, and junior; let Major(x,m) and InYear(x,y) give major and year. a) ∃x(C(x) ∧ J(x)); true. b) ∀x(C(x) → CS(x)); false. c) ∃x(C(x) ∧ ¬M(x) ∧ ¬J(x)); true. d) ∀x(C(x) → (So(x) ∨ CS(x))); false. e) ∃m∀y(Year(y) → ∃x(C(x) ∧ Major(x,m) ∧ InYear(x,y))); false.",
    "solution": "There are four juniors, so (a) is true. The freshman mathematics major refutes both (b) and (d). A sophomore or senior computer science major witnesses (c). Computer science has no freshman and mathematics has no senior, so no major has a student in every year.",
    "hints": [
      "Make a small major-by-year table before deciding truth values.",
      "For (e), test mathematics and computer science separately across freshman, sophomore, junior, and senior years."
    ],
    "rubric": [
      "Each part includes a quantified expression and its truth value.",
      "Part (a) is existential and true; part (b) is universal and false; part (c) is existential and true.",
      "Part (d) is the stated inclusive disjunction and is false because of the freshman mathematics major.",
      "Part (e) uses one major shared across all four years and is false for the stated enrollment."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ J(x)); true.",
        "solution": "Two mathematics juniors and two computer science juniors are listed.",
        "rubric": [
          "Uses an existential junior statement and marks it true."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(C(x) → CS(x)); false.",
        "solution": "The freshman mathematics major is a class student who is not a CS major.",
        "rubric": [
          "Uses a universal CS-major statement and marks it false with a valid reason."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x(C(x) ∧ ¬M(x) ∧ ¬J(x)); true.",
        "solution": "Any CS sophomore, or the CS senior, is neither a mathematics major nor a junior.",
        "rubric": [
          "Negates both mathematics major and junior under an existential and marks it true."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(C(x) → (So(x) ∨ CS(x))); false.",
        "solution": "The freshman mathematics major is neither a sophomore nor a CS major.",
        "rubric": [
          "Uses the universal inclusive or and marks it false with the freshman counterexample."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃m∀y(Year(y) → ∃x(C(x) ∧ Major(x,m) ∧ InYear(x,y))); false.",
        "solution": "CS lacks a freshman, while mathematics lacks a senior; hence neither major works for every year.",
        "rubric": [
          "Places the major existential outside the universal years and marks the statement false with both major failures."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-017",
    "mode": "rubric",
    "answer": "a) ∀u(User(u) → ∃m(Mailbox(m) ∧ Access(u,m) ∧ ∀n((Mailbox(n) ∧ Access(u,n)) → n=m))). b) (∃p(Process(p) ∧ ∀e(Error(e) → RunDuring(p,e)))) → KernelCorrect. c) ∀u∀w((CampusUser(u) ∧ EduWebsite(w)) → CanAccess(u,w)). d) ∃x∃y(x≠y ∧ System(x) ∧ System(y) ∧ ∀r(RemoteServer(r) → (Monitor(x,r) ∧ Monitor(y,r))) ∧ ∀z((System(z) ∧ ∀r(RemoteServer(r) → Monitor(z,r))) → (z=x ∨ z=y))).",
    "solution": "Exactly one mailbox per user combines a mailbox witness with uniqueness for that user. “Only if” translates P → Q. Exactly two systems requires two distinct universal monitors and a clause excluding any third such system.",
    "hints": [
      "Translate “P only if Q” as P → Q.",
      "For (d), uniqueness applies to systems that monitor every remote server, not to all systems."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀u(User(u) → ∃m(Mailbox(m) ∧ Access(u,m) ∧ ∀n((Mailbox(n) ∧ Access(u,n)) → n=m)))",
        "checker": "rubric",
        "solution": "Each user has an accessible mailbox m, and every accessible mailbox n for that user equals m.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀u(User(u) → ∃m(Mailbox(m) ∧ Access(u,m) ∧ ∀n((Mailbox(n) ∧ Access(u,n)) → n=m)))",
          "Explains the required reasoning and cases: Each user has an accessible mailbox m, and every accessible mailbox n for that user equals m."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∃p(Process(p) ∧ ∀e(Error(e) → RunDuring(p,e)))) → KernelCorrect",
        "checker": "rubric",
        "solution": "If there exists a process that runs through every error condition, then the kernel is working correctly; this is the “only if” direction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (∃p(Process(p) ∧ ∀e(Error(e) → RunDuring(p,e)))) → KernelCorrect",
          "Explains the required reasoning and cases: If there exists a process that runs through every error condition, then the kernel is working correctly; this is the “only if” direction."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀u∀w((CampusUser(u) ∧ EduWebsite(w)) → CanAccess(u,w))",
        "checker": "rubric",
        "solution": "The access claim is restricted to campus users and .edu websites.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀u∀w((CampusUser(u) ∧ EduWebsite(w)) → CanAccess(u,w))",
          "Explains the required reasoning and cases: The access claim is restricted to campus users and .edu websites."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y ∧ System(x) ∧ System(y) ∧ ∀r(RemoteServer(r) → (Monitor(x,r) ∧ Monitor(y,r))) ∧ ∀z((System(z) ∧ ∀r(RemoteServer(r) → Monitor(z,r))) → (z=x ∨ z=y)))",
        "checker": "rubric",
        "solution": "x and y are distinct universal monitors, and any universal monitor z must be one of them.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ System(x) ∧ System(y) ∧ ∀r(RemoteServer(r) → (Monitor(x,r) ∧ Monitor(y,r))) ∧ ∀z((System(z) ∧ ∀r(RemoteServer(r) → Monitor(z,r))) → (z=x ∨ z=y)))",
          "Explains the required reasoning and cases: x and y are distinct universal monitors, and any universal monitor z must be one of them."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀u(User(u) → ∃m(Mailbox(m) ∧ Access(u,m) ∧ ∀n((Mailbox(n) ∧ Access(u,n)) → n=m)))",
      "Explains the required reasoning and cases: Each user has an accessible mailbox m, and every accessible mailbox n for that user equals m.",
      "Gives a response equivalent to the authored model answer: (∃p(Process(p) ∧ ∀e(Error(e) → RunDuring(p,e)))) → KernelCorrect",
      "Explains the required reasoning and cases: If there exists a process that runs through every error condition, then the kernel is working correctly; this is the “only if” direction.",
      "Gives a response equivalent to the authored model answer: ∀u∀w((CampusUser(u) ∧ EduWebsite(w)) → CanAccess(u,w))",
      "Explains the required reasoning and cases: The access claim is restricted to campus users and .edu websites.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x≠y ∧ System(x) ∧ System(y) ∧ ∀r(RemoteServer(r) → (Monitor(x,r) ∧ Monitor(y,r))) ∧ ∀z((System(z) ∧ ∀r(RemoteServer(r) → Monitor(z,r))) → (z=x ∨ z=y)))",
      "Explains the required reasoning and cases: x and y are distinct universal monitors, and any universal monitor z must be one of them."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-018",
    "mode": "rubric",
    "answer": "a) ∀f(Fault(f) → ∃c(Console(c) ∧ AccessibleDuring(c,f))). b) (∀u(User(u) → ∃m(Message(m) ∧ Sent(u,m) ∧ InArchive(m))) → ∀u(User(u) → ∃a(EmailAddress(u,a) ∧ Retrievable(a))). c) ∀b(SecurityBreach(b) → (∃m(Mechanism(m) ∧ Detect(m,b)) ↔ ∃p(Process(p) ∧ ¬Compromised(p)))). d) ∀x∀y((Endpoint(x) ∧ Endpoint(y) ∧ x≠y) → ∃p∃q(p≠q ∧ Connect(p,x,y) ∧ Connect(q,x,y))). e) ∃a(Administrator(a) ∧ ∀u(User(u) → KnowsPassword(a,u)) ∧ ∀x(x≠a → ¬∀u(User(u) → KnowsPassword(x,u)))).",
    "solution": "Part (b) is a conditional: the archive hypothesis implies retrievability for every user. In (c), keep the biconditional inside the universal over breaches. In (d), p≠q ensures two distinct paths. In (e), the administrator knows all passwords and everyone else fails the universal knowledge claim.",
    "hints": [
      "Identify whether “if and only if” governs the whole statement or sits under a quantifier.",
      "For “no one … except,” assert the exception positively and negate the claim for everyone else."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀f(Fault(f) → ∃c(Console(c) ∧ AccessibleDuring(c,f)))",
        "checker": "rubric",
        "solution": "For each fault condition f, some console c is accessible during it.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀f(Fault(f) → ∃c(Console(c) ∧ AccessibleDuring(c,f)))",
          "Explains the required reasoning and cases: For each fault condition f, some console c is accessible during it."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∀u(User(u) → ∃m(Message(m) ∧ Sent(u,m) ∧ InArchive(m))) → ∀u(User(u) → ∃a(EmailAddress(u,a) ∧ Retrievable(a))))",
        "checker": "rubric",
        "solution": "If every user has an archived sent message, then every user has a retrievable email address.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (∀u(User(u) → ∃m(Message(m) ∧ Sent(u,m) ∧ InArchive(m))) → ∀u(User(u) → ∃a(EmailAddress(u,a) ∧ Retrievable(a))))",
          "Explains the required reasoning and cases: If every user has an archived sent message, then every user has a retrievable email address."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀b(SecurityBreach(b) → (∃m(Mechanism(m) ∧ Detect(m,b)) ↔ ∃p(Process(p) ∧ ¬Compromised(p))))",
        "checker": "rubric",
        "solution": "For every breach, existence of a detecting mechanism is equivalent to existence of an uncompromised process.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀b(SecurityBreach(b) → (∃m(Mechanism(m) ∧ Detect(m,b)) ↔ ∃p(Process(p) ∧ ¬Compromised(p))))",
          "Explains the required reasoning and cases: For every breach, existence of a detecting mechanism is equivalent to existence of an uncompromised process."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x∀y((Endpoint(x) ∧ Endpoint(y) ∧ x≠y) → ∃p∃q(p≠q ∧ Connect(p,x,y) ∧ Connect(q,x,y)))",
        "checker": "rubric",
        "solution": "Every distinct endpoint pair has two distinct connecting paths p and q.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((Endpoint(x) ∧ Endpoint(y) ∧ x≠y) → ∃p∃q(p≠q ∧ Connect(p,x,y) ∧ Connect(q,x,y)))",
          "Explains the required reasoning and cases: Every distinct endpoint pair has two distinct connecting paths p and q."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃a(Administrator(a) ∧ ∀u(User(u) → KnowsPassword(a,u)) ∧ ∀x(x≠a → ¬∀u(User(u) → KnowsPassword(x,u))))",
        "checker": "rubric",
        "solution": "An administrator knows every user password; each other person does not know all user passwords.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃a(Administrator(a) ∧ ∀u(User(u) → KnowsPassword(a,u)) ∧ ∀x(x≠a → ¬∀u(User(u) → KnowsPassword(x,u))))",
          "Explains the required reasoning and cases: An administrator knows every user password; each other person does not know all user passwords."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀f(Fault(f) → ∃c(Console(c) ∧ AccessibleDuring(c,f)))",
      "Explains the required reasoning and cases: For each fault condition f, some console c is accessible during it.",
      "Gives a response equivalent to the authored model answer: (∀u(User(u) → ∃m(Message(m) ∧ Sent(u,m) ∧ InArchive(m))) → ∀u(User(u) → ∃a(EmailAddress(u,a) ∧ Retrievable(a))))",
      "Explains the required reasoning and cases: If every user has an archived sent message, then every user has a retrievable email address.",
      "Gives a response equivalent to the authored model answer: ∀b(SecurityBreach(b) → (∃m(Mechanism(m) ∧ Detect(m,b)) ↔ ∃p(Process(p) ∧ ¬Compromised(p))))",
      "Explains the required reasoning and cases: For every breach, existence of a detecting mechanism is equivalent to existence of an uncompromised process.",
      "Gives a response equivalent to the authored model answer: ∀x∀y((Endpoint(x) ∧ Endpoint(y) ∧ x≠y) → ∃p∃q(p≠q ∧ Connect(p,x,y) ∧ Connect(q,x,y)))",
      "Explains the required reasoning and cases: Every distinct endpoint pair has two distinct connecting paths p and q.",
      "Gives a response equivalent to the authored model answer: ∃a(Administrator(a) ∧ ∀u(User(u) → KnowsPassword(a,u)) ∧ ∀x(x≠a → ¬∀u(User(u) → KnowsPassword(x,u))))",
      "Explains the required reasoning and cases: An administrator knows every user password; each other person does not know all user passwords."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-019",
    "mode": "rubric",
    "answer": "Over ℤ: a) ∀x∀y((x<0 ∧ y<0) → x+y<0). b) ∃x∃y(x>0 ∧ y>0 ∧ x−y≤0). c) ∀x∀y(x²+y² ≥ (x+y)²). d) ∀x∀y(|xy| = |x||y|).",
    "solution": "“Not necessarily positive” is an existence claim for a nonnegative counterexample, not a universal claim that the difference is nonpositive. Parts (c) and (d) are direct universal translations; no truth-value judgment is requested.",
    "hints": [
      "Negate a universal conditional by producing a case where its hypothesis holds and conclusion fails.",
      "Keep the domain ℤ in mind, but do not add positivity unless the sentence states it."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x∀y((x<0 ∧ y<0) → x+y<0)",
        "checker": "rubric",
        "solution": "Both negative hypotheses imply a negative sum.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → x+y<0)",
          "Explains the required reasoning and cases: Both negative hypotheses imply a negative sum."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x∃y(x>0 ∧ y>0 ∧ x−y≤0)",
        "checker": "rubric",
        "solution": "There are positive integers whose difference is zero or negative.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x>0 ∧ y>0 ∧ x−y≤0)",
          "Explains the required reasoning and cases: There are positive integers whose difference is zero or negative."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x∀y(x²+y² ≥ (x+y)²)",
        "checker": "rubric",
        "solution": "This is the literal formalization of the stated inequality for all integers.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y(x²+y² ≥ (x+y)²)",
          "Explains the required reasoning and cases: This is the literal formalization of the stated inequality for all integers."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x∀y(|xy| = |x||y|)",
        "checker": "rubric",
        "solution": "Universally equate the absolute value of the product with the product of absolute values.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y(|xy| = |x||y|)",
          "Explains the required reasoning and cases: Universally equate the absolute value of the product with the product of absolute values."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → x+y<0)",
      "Explains the required reasoning and cases: Both negative hypotheses imply a negative sum.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x>0 ∧ y>0 ∧ x−y≤0)",
      "Explains the required reasoning and cases: There are positive integers whose difference is zero or negative.",
      "Gives a response equivalent to the authored model answer: ∀x∀y(x²+y² ≥ (x+y)²)",
      "Explains the required reasoning and cases: This is the literal formalization of the stated inequality for all integers.",
      "Gives a response equivalent to the authored model answer: ∀x∀y(|xy| = |x||y|)",
      "Explains the required reasoning and cases: Universally equate the absolute value of the product with the product of absolute values."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-020",
    "mode": "rubric",
    "answer": "Over ℤ: a) ∀x∀y((x<0 ∧ y<0) → xy>0). b) ∀x∀y((x>0 ∧ y>0) → (x+y)/2>0). c) ∃x∃y(x<0 ∧ y<0 ∧ x−y≥0). d) ∀x∀y(|x+y| ≤ |x|+|y|).",
    "solution": "The average of positive integers is expressed as (x+y)/2 even when that value need not be an integer. “Not necessarily negative” means there exist negative x and y whose difference is nonnegative. Part (d) is the triangle inequality.",
    "hints": [
      "Do not require the average itself to belong to ℤ.",
      "Use ≥0 for the failure of a strict negative conclusion."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x∀y((x<0 ∧ y<0) → xy>0)",
        "checker": "rubric",
        "solution": "Two negative factors imply a positive product.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → xy>0)",
          "Explains the required reasoning and cases: Two negative factors imply a positive product."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x∀y((x>0 ∧ y>0) → (x+y)/2>0)",
        "checker": "rubric",
        "solution": "Positive x and y give a positive sum and hence a positive average.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((x>0 ∧ y>0) → (x+y)/2>0)",
          "Explains the required reasoning and cases: Positive x and y give a positive sum and hence a positive average."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x∃y(x<0 ∧ y<0 ∧ x−y≥0)",
        "checker": "rubric",
        "solution": "A nonnegative difference for some negative x,y shows the difference is not necessarily negative.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(x<0 ∧ y<0 ∧ x−y≥0)",
          "Explains the required reasoning and cases: A nonnegative difference for some negative x,y shows the difference is not necessarily negative."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x∀y(|x+y| ≤ |x|+|y|)",
        "checker": "rubric",
        "solution": "The formal statement is the universal triangle inequality.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y(|x+y| ≤ |x|+|y|)",
          "Explains the required reasoning and cases: The formal statement is the universal triangle inequality."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → xy>0)",
      "Explains the required reasoning and cases: Two negative factors imply a positive product.",
      "Gives a response equivalent to the authored model answer: ∀x∀y((x>0 ∧ y>0) → (x+y)/2>0)",
      "Explains the required reasoning and cases: Positive x and y give a positive sum and hence a positive average.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(x<0 ∧ y<0 ∧ x−y≥0)",
      "Explains the required reasoning and cases: A nonnegative difference for some negative x,y shows the difference is not necessarily negative.",
      "Gives a response equivalent to the authored model answer: ∀x∀y(|x+y| ≤ |x|+|y|)",
      "Explains the required reasoning and cases: The formal statement is the universal triangle inequality."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-021",
    "mode": "rubric",
    "answer": "∀n(n>0 → ∃a∃b∃c∃d(n = a²+b²+c²+d²)), with n,a,b,c,d ranging over integers.",
    "checker": "rubric",
    "solution": "Restrict n to positive integers. For each such n, four integer witnesses are required; their squares need not be nonzero or distinct.",
    "hints": [
      "Put positivity in the hypothesis of an implication.",
      "Use four independent existential variables for the four integers."
    ],
    "readAloud": "For every integer n, if n is positive, there exist integers a,b,c,d whose squares sum to n.",
    "verify": "The quantifier order allows the four witnesses to depend on n, exactly as required.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀n(n>0 → ∃a∃b∃c∃d(n = a²+b²+c²+d²)), with n,a,b,c,d ranging over integers.",
      "Explains the required reasoning and cases: Restrict n to positive integers. For each such n, four integer witnesses are required; their squares need not be nonzero or distinct."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-022",
    "mode": "rubric",
    "answer": "∃n(n>0 ∧ ∀a∀b∀c(n ≠ a²+b²+c²)), with all variables ranging over integers.",
    "checker": "rubric",
    "solution": "Choose one positive integer n and deny all possible representations by three integer squares. The universal triple inside the conjunction says no choice of a,b,c works.",
    "hints": [
      "“Not the sum of three squares” must hold for every possible integer triple.",
      "The positive n is existential; the candidate summands are universal."
    ],
    "verify": "Negating ∃a∃b∃c(n=a²+b²+c²) gives ∀a∀b∀c(n≠a²+b²+c²).",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃n(n>0 ∧ ∀a∀b∀c(n ≠ a²+b²+c²)), with all variables ranging over integers.",
      "Explains the required reasoning and cases: Choose one positive integer n and deny all possible representations by three integer squares. The universal triple inside the conjunction says no choice of a,b,c works."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-023",
    "mode": "rubric",
    "answer": "Over ℝ: a) ∀x∀y((x<0 ∧ y<0) → xy>0). b) ∀x(x−x=0). c) ∀x(x>0 → ∃y∃z(y≠z ∧ y²=x ∧ z²=x ∧ ∀w(w²=x → w=y ∨ w=z))). d) ∀x(x<0 → ¬∃y(y²=x)).",
    "solution": "Exactly two square roots requires two distinct witnesses and exclusion of every third root. A real square root y of x satisfies y²=x; negative x rules out every real y.",
    "hints": [
      "For exactly two, include y≠z and a universal “no other” clause.",
      "Define square roots through y²=x, not y=x²."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀x∀y((x<0 ∧ y<0) → xy>0)",
        "checker": "rubric",
        "solution": "Universal negative real factors have a positive product.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → xy>0)",
          "Explains the required reasoning and cases: Universal negative real factors have a positive product."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(x−x=0)",
        "checker": "rubric",
        "solution": "The same real x is subtracted from itself.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x−x=0)",
          "Explains the required reasoning and cases: The same real x is subtracted from itself."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(x>0 → ∃y∃z(y≠z ∧ y²=x ∧ z²=x ∧ ∀w(w²=x → w=y ∨ w=z)))",
        "checker": "rubric",
        "solution": "For each positive x, y and z are distinct roots and every root w equals one of them.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x>0 → ∃y∃z(y≠z ∧ y²=x ∧ z²=x ∧ ∀w(w²=x → w=y ∨ w=z)))",
          "Explains the required reasoning and cases: For each positive x, y and z are distinct roots and every root w equals one of them."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(x<0 → ¬∃y(y²=x))",
        "checker": "rubric",
        "solution": "For every negative real x, no real y has square x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x(x<0 → ¬∃y(y²=x))",
          "Explains the required reasoning and cases: For every negative real x, no real y has square x."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x∀y((x<0 ∧ y<0) → xy>0)",
      "Explains the required reasoning and cases: Universal negative real factors have a positive product.",
      "Gives a response equivalent to the authored model answer: ∀x(x−x=0)",
      "Explains the required reasoning and cases: The same real x is subtracted from itself.",
      "Gives a response equivalent to the authored model answer: ∀x(x>0 → ∃y∃z(y≠z ∧ y²=x ∧ z²=x ∧ ∀w(w²=x → w=y ∨ w=z)))",
      "Explains the required reasoning and cases: For each positive x, y and z are distinct roots and every root w equals one of them.",
      "Gives a response equivalent to the authored model answer: ∀x(x<0 → ¬∃y(y²=x))",
      "Explains the required reasoning and cases: For every negative real x, no real y has square x."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-024",
    "mode": "rubric",
    "answer": "a) There is a real number x such that x+y=y for every real y; zero is an additive identity. b) A nonnegative real number minus a negative real number is positive. c) There are nonpositive real numbers x and y such that x−y>0 (so x>y). d) For all real x and y, xy≠0 exactly when both x≠0 and y≠0; a real product is nonzero precisely when both factors are nonzero.",
    "solution": "Translate the quantifiers and connectives directly. In (a), x=0 witnesses the statement. In (c), the inequalities allow zero but the conclusion forces x>y. In (d), ↔ joins both directions of the zero-product property.",
    "hints": [
      "Read ↔ as two directions, not just one.",
      "In (c), preserve the nonpositive conditions rather than replacing them with negative."
    ],
    "rubric": [
      "Each part gives an English mathematical statement with the correct real domain and quantifier dependency.",
      "Part (a) uses one x for all y; part (c) allows nonpositive values and keeps x−y>0.",
      "Part (d) states both directions of the equivalence."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There exists a real x such that for every real y, x+y=y.",
        "solution": "This says an additive identity exists; x=0 works.",
        "rubric": [
          "States one shared real x satisfying x+y=y for all real y."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For all real x and y, if x≥0 and y<0, then x−y>0.",
        "solution": "Subtracting the negative y produces a positive result.",
        "rubric": [
          "Preserves the universal conditional and all three inequalities."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There exist real numbers x≤0 and y≤0 such that x−y>0.",
        "solution": "For example, x=0 and y=−1 satisfy the statement.",
        "rubric": [
          "States existence of two nonpositive reals with positive difference."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For all real x and y, x and y are both nonzero if and only if their product xy is nonzero.",
        "solution": "This is the zero-product property together with the fact that a product of nonzero reals is nonzero.",
        "rubric": [
          "States the biconditional between both factors nonzero and product nonzero."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-025",
    "mode": "rubric",
    "answer": "a) There is a real x such that xy=y for every real y; a multiplicative identity exists. b) The product of any two negative real numbers is positive. c) There are real x and y such that x²>y and x<y. d) For every real x and y, there is a real z equal to x+y; the sum of two reals is real.",
    "solution": "Read each predicate after its quantifier prefix. The witnesses x=1 in (a) and z=x+y in (d) clarify meaning. In (c), both inequalities must hold for the same pair.",
    "hints": [
      "Do not turn the conjunction in (c) into two separate existence claims.",
      "In (d), z is the sum, not an arbitrary unrelated real."
    ],
    "rubric": [
      "Part (a) states one multiplicative identity for all real y.",
      "Part (b) states the universal negative-factor conditional.",
      "Part (c) requires one pair satisfying both x²>y and x<y.",
      "Part (d) states closure of real addition with z=x+y."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There exists a real number x such that xy=y for every real number y.",
        "solution": "The witness x=1 satisfies 1·y=y.",
        "rubric": [
          "States one shared x with xy=y for all real y."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For all real x and y, if x<0 and y<0, then xy>0.",
        "solution": "This is the familiar product-of-two-negatives fact.",
        "rubric": [
          "Preserves universal negative factors and positive product."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "There exist real numbers x and y such that x²>y and x<y.",
        "solution": "Both inequalities are required simultaneously; for example, x=2 and y=3 work because 2²=4>3 and 2<3.",
        "rubric": [
          "States one real pair satisfying both strict inequalities."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For every real x and y, there exists a real z such that x+y=z.",
        "solution": "Choose z=x+y, expressing closure under addition.",
        "rubric": [
          "States universal x,y and existence of real z equal to their sum."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-026",
    "mode": "auto",
    "answer": "a) False. b) True. c) False. d) False. e) True. f) True. g) True. h) False. i) False.",
    "solution": "Simplify Q(x,y): x+y=x−y ⇔ 2y=0 ⇔ y=0 over the integers. Thus Q is true exactly when y=0, regardless of x. This gives Q(1,1) false, Q(2,0) true, existence whenever y can be 0, and failure for universal claims over all y.",
    "hints": [
      "Simplify the equation before interpreting any quantifiers.",
      "Q(x,y) depends only on whether y=0."
    ],
    "verify": "Substitute y=0 to obtain x=x for every x; substitute y=1 to obtain x+1=x−1, which is impossible.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "1+1=2 but 1−1=0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "2+0=2−0=2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "Q(1,y) requires y=0 for every integer y, which fails at y=1."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "Q(x,2) would require 2=0, independent of x."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose any integer x and y=0."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For every x, choose y=0."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "The single value y=0 works for every x."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For y=1, no integer x can satisfy Q(x,1)."
      },
      {
        "label": "i",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "Any pair with y≠0 is a counterexample."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-027",
    "mode": "auto",
    "answer": "a) True. b) True. c) True. d) True. e) True. f) False. g) False. h) True. i) False.",
    "solution": "Witnesses: (a) m=n²+1; (b) n=−1 because m²≥0; (c) m=−n; (d) n=1; (e) (n,m)=(1,2); (h) (n,m)=(3,1). For (f), the only squares not exceeding 6 are 0,1,4, and no two sum to 6. For (g), adding equations gives 2n=5, impossible for integer n. For (i), n=1,m=0 requires p=1/2, not an integer.",
    "hints": [
      "Try explicit small witnesses before attempting a general argument.",
      "For integer averages, test whether m+n can be odd."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For each n, m=n²+1 is an integer greater than n²."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose n=−1; every integer square m² is nonnegative."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For each n, choose m=−n."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose n=1, so nm=m for all m."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "1²+2²=5."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "The only integer squares not exceeding 6 are 0, 1, and 4. No two of these sum to 6, so no integers n and m can satisfy n²+m²=6."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "The equations force n=5/2 and m=3/2, not integers."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "n=3,m=1 gives 3+1=4 and 3−1=2."
      },
      {
        "label": "i",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For n=1,m=0, p=(1+0)/2=1/2, which is not an integer."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-028",
    "mode": "auto",
    "answer": "a) True. b) False. c) True. d) False. e) True. f) False. g) True. h) False. i) False. j) True.",
    "solution": "Witnesses: (a) y=x²; (c) x=0; (e) y=1/x for x≠0; (g) y=1−x; (j) z=(x+y)/2. (b) fails for negative x. (d) contradicts commutativity. (f) would require one fixed x to be 1/y for every nonzero y. In (h), doubling the first equation gives 2x+4y=4, incompatible with 5. In (i), the simultaneous equations force x=y=1, so they cannot work for every x.",
    "hints": [
      "Distinguish a witness that may depend on x from one fixed x that must work universally.",
      "Solve the simultaneous equations in (h) and (i) before deciding."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For every real x, choose y=x²."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For x=−1, no real y satisfies y²=−1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose x=0; then xy=0 for every y."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "Real addition is commutative, so x+y=y+x for all x,y."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For each nonzero x, choose y=1/x."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For y=1 and y=2, the required x would have to be both 1 and 1/2."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For every x, choose y=1−x."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "The first equation implies 2x+4y=4, contradicting 2x+4y=5."
      },
      {
        "label": "i",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "Adding appropriately gives 3x=3, so x=1 and then y=1; the claim fails for every other x."
      },
      {
        "label": "j",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For all real x,y, the real z=(x+y)/2 works."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-029",
    "mode": "rubric",
    "answer": "a) ⋀_{x=1}^{3}⋀_{y=1}^{3}P(x,y). b) ⋁_{x=1}^{3}⋁_{y=1}^{3}P(x,y). c) ⋁_{x=1}^{3}(P(x,1)∧P(x,2)∧P(x,3)). d) ⋀_{y=1}^{3}(P(1,y)∨P(2,y)∨P(3,y)). Expanded explicitly: (a) P(1,1)∧P(1,2)∧P(1,3)∧P(2,1)∧P(2,2)∧P(2,3)∧P(3,1)∧P(3,2)∧P(3,3); (b) the disjunction of the same nine terms; (c) [P(1,1)∧P(1,2)∧P(1,3)]∨[P(2,1)∧P(2,2)∧P(2,3)]∨[P(3,1)∧P(3,2)∧P(3,3)]; (d) [P(1,1)∨P(2,1)∨P(3,1)]∧[P(1,2)∨P(2,2)∨P(3,2)]∧[P(1,3)∨P(2,3)∨P(3,3)].",
    "solution": "A universal quantifier over a finite domain becomes a conjunction; an existential quantifier becomes a disjunction. Preserve nesting: ∃x∀y is a disjunction of three conjunctions, while ∀y∃x is a conjunction of three disjunctions.",
    "hints": [
      "Expand the outer quantifier first to preserve grouping.",
      "Use ∧ for ∀ and ∨ for ∃."
    ],
    "readAloud": "There exists x for all y means at least one entire row is true. For all y there exists x means every column has at least one true entry.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P(1,1)∧P(1,2)∧P(1,3)∧P(2,1)∧P(2,2)∧P(2,3)∧P(3,1)∧P(3,2)∧P(3,3)",
        "checker": "rubric",
        "solution": "All nine ordered pairs must satisfy P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1,1)∧P(1,2)∧P(1,3)∧P(2,1)∧P(2,2)∧P(2,3)∧P(3,1)∧P(3,2)∧P(3,3)",
          "Explains the required reasoning and cases: All nine ordered pairs must satisfy P."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P(1,1)∨P(1,2)∨P(1,3)∨P(2,1)∨P(2,2)∨P(2,3)∨P(3,1)∨P(3,2)∨P(3,3)",
        "checker": "rubric",
        "solution": "At least one of the nine ordered pairs must satisfy P.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: P(1,1)∨P(1,2)∨P(1,3)∨P(2,1)∨P(2,2)∨P(2,3)∨P(3,1)∨P(3,2)∨P(3,3)",
          "Explains the required reasoning and cases: At least one of the nine ordered pairs must satisfy P."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(P(1,1)∧P(1,2)∧P(1,3))∨(P(2,1)∧P(2,2)∧P(2,3))∨(P(3,1)∧P(3,2)∧P(3,3))",
        "checker": "rubric",
        "solution": "Some fixed x works for all three values of y.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (P(1,1)∧P(1,2)∧P(1,3))∨(P(2,1)∧P(2,2)∧P(2,3))∨(P(3,1)∧P(3,2)∧P(3,3))",
          "Explains the required reasoning and cases: Some fixed x works for all three values of y."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(P(1,1)∨P(2,1)∨P(3,1))∧(P(1,2)∨P(2,2)∨P(3,2))∧(P(1,3)∨P(2,3)∨P(3,3))",
        "checker": "rubric",
        "solution": "For each fixed y, at least one of the three x values works.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (P(1,1)∨P(2,1)∨P(3,1))∧(P(1,2)∨P(2,2)∨P(3,2))∧(P(1,3)∨P(2,3)∨P(3,3))",
          "Explains the required reasoning and cases: For each fixed y, at least one of the three x values works."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: P(1,1)∧P(1,2)∧P(1,3)∧P(2,1)∧P(2,2)∧P(2,3)∧P(3,1)∧P(3,2)∧P(3,3)",
      "Explains the required reasoning and cases: All nine ordered pairs must satisfy P.",
      "Gives a response equivalent to the authored model answer: P(1,1)∨P(1,2)∨P(1,3)∨P(2,1)∨P(2,2)∨P(2,3)∨P(3,1)∨P(3,2)∨P(3,3)",
      "Explains the required reasoning and cases: At least one of the nine ordered pairs must satisfy P.",
      "Gives a response equivalent to the authored model answer: (P(1,1)∧P(1,2)∧P(1,3))∨(P(2,1)∧P(2,2)∧P(2,3))∨(P(3,1)∧P(3,2)∧P(3,3))",
      "Explains the required reasoning and cases: Some fixed x works for all three values of y.",
      "Gives a response equivalent to the authored model answer: (P(1,1)∨P(2,1)∨P(3,1))∧(P(1,2)∨P(2,2)∨P(3,2))∧(P(1,3)∨P(2,3)∨P(3,3))",
      "Explains the required reasoning and cases: For each fixed y, at least one of the three x values works."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-030",
    "mode": "rubric",
    "answer": "a) ∀y∀x¬P(x,y). b) ∃x∀y¬P(x,y). c) ∀y(¬Q(y) ∨ ∃xR(x,y)). d) ∀y(∀x¬R(x,y) ∧ ∃x¬S(x,y)). e) ∀y(∃x∀z¬T(x,y,z) ∧ ∀x∃z¬U(x,y,z)).",
    "solution": "Push ¬ inward one level at a time. Negation swaps ∃ with ∀ and applies De Morgan’s laws: ¬(A∧B)≡¬A∨¬B and ¬(A∨B)≡¬A∧¬B. Double negations cancel, leaving negation only immediately before predicates.",
    "hints": [
      "Work from the outermost connective inward.",
      "Negating ∀x¬R gives ∃xR, not ∃x¬R."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀y∀x¬P(x,y)",
        "checker": "rubric",
        "solution": "Negating both existential quantifiers changes them to universals.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y∀x¬P(x,y)",
          "Explains the required reasoning and cases: Negating both existential quantifiers changes them to universals."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x∀y¬P(x,y)",
        "checker": "rubric",
        "solution": "Negate ∀x then ∃y, reversing each quantifier.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y¬P(x,y)",
          "Explains the required reasoning and cases: Negate ∀x then ∃y, reversing each quantifier."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀y(¬Q(y) ∨ ∃xR(x,y))",
        "checker": "rubric",
        "solution": "De Morgan gives ¬Q(y)∨¬∀x¬R(x,y), and the second term becomes ∃xR(x,y).",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y(¬Q(y) ∨ ∃xR(x,y))",
          "Explains the required reasoning and cases: De Morgan gives ¬Q(y)∨¬∀x¬R(x,y), and the second term becomes ∃xR(x,y)."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀y(∀x¬R(x,y) ∧ ∃x¬S(x,y))",
        "checker": "rubric",
        "solution": "Negate the disjunction and then both inner quantifiers.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y(∀x¬R(x,y) ∧ ∃x¬S(x,y))",
          "Explains the required reasoning and cases: Negate the disjunction and then both inner quantifiers."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∀y(∃x∀z¬T(x,y,z) ∧ ∀x∃z¬U(x,y,z))",
        "checker": "rubric",
        "solution": "Negation changes the top disjunction to conjunction and reverses every quantifier in each branch.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀y(∃x∀z¬T(x,y,z) ∧ ∀x∃z¬U(x,y,z))",
          "Explains the required reasoning and cases: Negation changes the top disjunction to conjunction and reverses every quantifier in each branch."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀y∀x¬P(x,y)",
      "Explains the required reasoning and cases: Negating both existential quantifiers changes them to universals.",
      "Gives a response equivalent to the authored model answer: ∃x∀y¬P(x,y)",
      "Explains the required reasoning and cases: Negate ∀x then ∃y, reversing each quantifier.",
      "Gives a response equivalent to the authored model answer: ∀y(¬Q(y) ∨ ∃xR(x,y))",
      "Explains the required reasoning and cases: De Morgan gives ¬Q(y)∨¬∀x¬R(x,y), and the second term becomes ∃xR(x,y).",
      "Gives a response equivalent to the authored model answer: ∀y(∀x¬R(x,y) ∧ ∃x¬S(x,y))",
      "Explains the required reasoning and cases: Negate the disjunction and then both inner quantifiers.",
      "Gives a response equivalent to the authored model answer: ∀y(∃x∀z¬T(x,y,z) ∧ ∀x∃z¬U(x,y,z))",
      "Explains the required reasoning and cases: Negation changes the top disjunction to conjunction and reverses every quantifier in each branch."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-031",
    "mode": "rubric",
    "answer": "a) ∃x∀y∃z¬T(x,y,z). b) (∃x∀y¬P(x,y)) ∧ (∃x∀y¬Q(x,y)). c) ∃x∀y(¬P(x,y) ∨ ∀z¬R(x,y,z)). d) ∃x∀y(P(x,y) ∧ ¬Q(x,y)).",
    "solution": "First negate the entire statement, then move negation inward. In (b), De Morgan changes ∨ to ∧. In (d), use ¬(P→Q)≡P∧¬Q.",
    "hints": [
      "Negate quantifiers in their original order.",
      "For an implication, keep its hypothesis and negate its conclusion."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x∀y∃z¬T(x,y,z)",
        "checker": "rubric",
        "solution": "Each of the three quantifiers reverses under negation.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y∃z¬T(x,y,z)",
          "Explains the required reasoning and cases: Each of the three quantifiers reverses under negation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∃x∀y¬P(x,y)) ∧ (∃x∀y¬Q(x,y))",
        "checker": "rubric",
        "solution": "Negating the disjunction produces a conjunction of the two negated quantified statements.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (∃x∀y¬P(x,y)) ∧ (∃x∀y¬Q(x,y))",
          "Explains the required reasoning and cases: Negating the disjunction produces a conjunction of the two negated quantified statements."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x∀y(¬P(x,y) ∨ ∀z¬R(x,y,z))",
        "checker": "rubric",
        "solution": "The inner conjunction becomes a disjunction, and ∃z becomes ∀z.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(¬P(x,y) ∨ ∀z¬R(x,y,z))",
          "Explains the required reasoning and cases: The inner conjunction becomes a disjunction, and ∃z becomes ∀z."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x∀y(P(x,y) ∧ ¬Q(x,y))",
        "checker": "rubric",
        "solution": "Negating P→Q yields P∧¬Q after reversing the outer quantifiers.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∀y(P(x,y) ∧ ¬Q(x,y))",
          "Explains the required reasoning and cases: Negating P→Q yields P∧¬Q after reversing the outer quantifiers."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x∀y∃z¬T(x,y,z)",
      "Explains the required reasoning and cases: Each of the three quantifiers reverses under negation.",
      "Gives a response equivalent to the authored model answer: (∃x∀y¬P(x,y)) ∧ (∃x∀y¬Q(x,y))",
      "Explains the required reasoning and cases: Negating the disjunction produces a conjunction of the two negated quantified statements.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(¬P(x,y) ∨ ∀z¬R(x,y,z))",
      "Explains the required reasoning and cases: The inner conjunction becomes a disjunction, and ∃z becomes ∀z.",
      "Gives a response equivalent to the authored model answer: ∃x∀y(P(x,y) ∧ ¬Q(x,y))",
      "Explains the required reasoning and cases: Negating P→Q yields P∧¬Q after reversing the outer quantifiers."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-032",
    "mode": "rubric",
    "answer": "a) ∀z∃y∃x¬T(x,y,z). b) (∀x∀y¬P(x,y)) ∨ (∃x∃y¬Q(x,y)). c) ∀x∀y((Q(x,y)∧¬Q(y,x)) ∨ (¬Q(x,y)∧Q(y,x))). d) ∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y)).",
    "solution": "Apply quantifier negation and De Morgan’s laws. In (c), the negation of a biconditional is exclusive disagreement: A∧¬B or ¬A∧B, where A=Q(x,y) and B=Q(y,x).",
    "hints": [
      "The negation of A↔B is not merely ¬A↔¬B.",
      "In (d), negating the disjunction gives a conjunction."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀z∃y∃x¬T(x,y,z)",
        "checker": "rubric",
        "solution": "Reverse ∃z, ∀y, and ∀x in that order.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀z∃y∃x¬T(x,y,z)",
          "Explains the required reasoning and cases: Reverse ∃z, ∀y, and ∀x in that order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(∀x∀y¬P(x,y)) ∨ (∃x∃y¬Q(x,y))",
        "checker": "rubric",
        "solution": "Negating the top conjunction gives a disjunction of the negated branches.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (∀x∀y¬P(x,y)) ∨ (∃x∃y¬Q(x,y))",
          "Explains the required reasoning and cases: Negating the top conjunction gives a disjunction of the negated branches."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x∀y((Q(x,y)∧¬Q(y,x)) ∨ (¬Q(x,y)∧Q(y,x)))",
        "checker": "rubric",
        "solution": "After reversing the quantifiers, require the two Q predicates to have opposite truth values.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∀y((Q(x,y)∧¬Q(y,x)) ∨ (¬Q(x,y)∧Q(y,x)))",
          "Explains the required reasoning and cases: After reversing the quantifiers, require the two Q predicates to have opposite truth values."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y))",
        "checker": "rubric",
        "solution": "Reverse all three quantifiers and negate each side of the inner disjunction.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y))",
          "Explains the required reasoning and cases: Reverse all three quantifiers and negate each side of the inner disjunction."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀z∃y∃x¬T(x,y,z)",
      "Explains the required reasoning and cases: Reverse ∃z, ∀y, and ∀x in that order.",
      "Gives a response equivalent to the authored model answer: (∀x∀y¬P(x,y)) ∨ (∃x∃y¬Q(x,y))",
      "Explains the required reasoning and cases: Negating the top conjunction gives a disjunction of the negated branches.",
      "Gives a response equivalent to the authored model answer: ∀x∀y((Q(x,y)∧¬Q(y,x)) ∨ (¬Q(x,y)∧Q(y,x)))",
      "Explains the required reasoning and cases: After reversing the quantifiers, require the two Q predicates to have opposite truth values.",
      "Gives a response equivalent to the authored model answer: ∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y))",
      "Explains the required reasoning and cases: Reverse all three quantifiers and negate each side of the inner disjunction."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-033",
    "mode": "rubric",
    "answer": "a) ∃x∃y¬P(x,y). b) ∃y∀x¬P(x,y). c) ∃y∃x(¬P(x,y) ∧ ¬Q(x,y)). d) (∀x∀yP(x,y)) ∨ (∃x∃y¬Q(x,y)). e) ∃x(∀y∃z¬P(x,y,z) ∨ ∀z∃y¬P(x,y,z)).",
    "solution": "Move each outer negation inward, reversing quantifiers and applying De Morgan. In (d), ¬∃x∃y¬P becomes ∀x∀yP. In (e), negate the two branches separately and preserve their different variable orders.",
    "hints": [
      "Cancel double negation after pushing through a quantifier.",
      "Keep track of which inner quantifier binds y and which binds z in (e)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x∃y¬P(x,y)",
        "checker": "rubric",
        "solution": "Both universal quantifiers become existential.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y¬P(x,y)",
          "Explains the required reasoning and cases: Both universal quantifiers become existential."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃y∀x¬P(x,y)",
        "checker": "rubric",
        "solution": "Negation reverses ∀y and ∃x.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∀x¬P(x,y)",
          "Explains the required reasoning and cases: Negation reverses ∀y and ∃x."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃y∃x(¬P(x,y) ∧ ¬Q(x,y))",
        "checker": "rubric",
        "solution": "The negated disjunction becomes a conjunction of negated predicates.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃y∃x(¬P(x,y) ∧ ¬Q(x,y))",
          "Explains the required reasoning and cases: The negated disjunction becomes a conjunction of negated predicates."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(∀x∀yP(x,y)) ∨ (∃x∃y¬Q(x,y))",
        "checker": "rubric",
        "solution": "Negate the conjunction and simplify ¬∃x∃y¬P to ∀x∀yP.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: (∀x∀yP(x,y)) ∨ (∃x∃y¬Q(x,y))",
          "Explains the required reasoning and cases: Negate the conjunction and simplify ¬∃x∃y¬P to ∀x∀yP."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃x(∀y∃z¬P(x,y,z) ∨ ∀z∃y¬P(x,y,z))",
        "checker": "rubric",
        "solution": "The outer ∀x becomes ∃x, the conjunction becomes a disjunction, and both inner quantifier pairs reverse.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(∀y∃z¬P(x,y,z) ∨ ∀z∃y¬P(x,y,z))",
          "Explains the required reasoning and cases: The outer ∀x becomes ∃x, the conjunction becomes a disjunction, and both inner quantifier pairs reverse."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x∃y¬P(x,y)",
      "Explains the required reasoning and cases: Both universal quantifiers become existential.",
      "Gives a response equivalent to the authored model answer: ∃y∀x¬P(x,y)",
      "Explains the required reasoning and cases: Negation reverses ∀y and ∃x.",
      "Gives a response equivalent to the authored model answer: ∃y∃x(¬P(x,y) ∧ ¬Q(x,y))",
      "Explains the required reasoning and cases: The negated disjunction becomes a conjunction of negated predicates.",
      "Gives a response equivalent to the authored model answer: (∀x∀yP(x,y)) ∨ (∃x∃y¬Q(x,y))",
      "Explains the required reasoning and cases: Negate the conjunction and simplify ¬∃x∃y¬P to ∀x∀yP.",
      "Gives a response equivalent to the authored model answer: ∃x(∀y∃z¬P(x,y,z) ∨ ∀z∃y¬P(x,y,z))",
      "Explains the required reasoning and cases: The outer ∀x becomes ∃x, the conjunction becomes a disjunction, and both inner quantifier pairs reverse."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-034",
    "mode": "rubric",
    "answer": "True on the common domain {0,1}; false on {0,1,2}.",
    "solution": "The statement says that whenever x and y are different, every domain element z is either x or y; equivalently, the domain has at most two elements. On {0,1}, any distinct x,y exhaust the domain. On {0,1,2}, take x=0,y=1,z=2: the hypothesis x≠y holds, but z is neither x nor y.",
    "hints": [
      "The inner ∀z says the chosen x and y cover the entire domain.",
      "For the false case, choose z to be a third element."
    ],
    "rubric": [
      "Gives a nonempty domain of size at most two for truth and a domain of size at least three for falsity.",
      "Explains or exhibits why distinct x,y cover the true domain.",
      "Provides a concrete x,y,z counterexample in the false domain."
    ],
    "verify": "The key boundary is domain size two versus three, not the particular names of the elements."
  },
  {
    "id": "rosen-ch1-ex-1-5-035",
    "mode": "rubric",
    "answer": "True on the integers ℤ; false on {0,1,2}.",
    "solution": "The statement requires a fourth element w different from any three chosen elements. On ℤ, after choosing x,y,z, infinitely many choices for w remain. On {0,1,2}, choose x=0,y=1,z=2; no w in the domain differs from all three.",
    "hints": [
      "The statement asks whether the domain always has an element outside any set of at most three elements.",
      "A three-element domain fails when x,y,z exhaust it."
    ],
    "rubric": [
      "Gives any domain with at least four elements for truth, including infinite domains.",
      "Gives a domain with at most three elements for falsity.",
      "Justifies truth by existence of a distinct w and falsity by an exhausting choice of x,y,z."
    ],
    "verify": "Any domain of size at least four works for truth; any nonempty domain of size at most three works for falsity."
  },
  {
    "id": "rosen-ch1-ex-1-5-036",
    "mode": "rubric",
    "answer": "a) Original: ¬∃xL(x), where L(x) means x lost more than $1000. Negation: ∃xL(x). English: Someone has lost more than $1000 playing the lottery. b) Original: ∃x(C(x)∧E1(x)), where C(x) means x is in the class and E1(x) says x chatted with exactly one other class student. Negation: ∀x(C(x)→¬E1(x)). English: Every student in the class has chatted with either zero or at least two other students. c) Original: ∀x(C(x)→¬E2(x)), where E2(x) says x emailed exactly two other class students. Negation: ∃x(C(x)∧E2(x)). English: Some class student has emailed exactly two other class students. d) Original: ∃x(Student(x)∧∀e(Exercise(e)→S(x,e))), where Student(x) means x is a student. Negation: ∀x(Student(x)→∃e(Exercise(e)∧¬S(x,e))). English: Every student has at least one unsolved exercise in the book. e) Original: ¬∃x(Student(x)∧∀s(Section(s)→∃e(ExerciseIn(e,s)∧S(x,e)))). Negation: ∃x(Student(x)∧∀s(Section(s)→∃e(ExerciseIn(e,s)∧S(x,e)))). English: Some student has solved at least one exercise in every section.",
    "solution": "For (b), E1(x) abbreviates ∃y(C(y)∧y≠x∧H(x,y)∧∀z((C(z)∧z≠x∧H(x,z))→z=y)). For (c), E2(x) abbreviates ∃y∃z(C(y)∧C(z)∧y≠x∧z≠x∧y≠z∧M(x,y)∧M(x,z)∧∀w((C(w)∧w≠x∧M(x,w))→(w=y∨w=z))). Parts (d) and (e) use Student(x), not the class-only predicate C(x), because those parts do not restrict their student domain to this class. Negating an exactly-one condition yields zero or at least two, not “more than one.” Push negation through quantifiers before writing the English form.",
    "hints": [
      "Define counting abbreviations explicitly, then negate existence/uniqueness correctly.",
      "“No student” becomes “some student” in the negation."
    ],
    "rubric": [
      "Each part contains a faithful quantified original, an equivalent negation with no negation left of a quantifier, and natural English for that negation.",
      "Parts (b) and (c) preserve other-student exclusions and exact-count semantics.",
      "Part (d) negates universal exercise coverage to existence of an unsolved exercise for each student.",
      "Part (e) preserves one student shared across all sections and at least one solved exercise per section."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Original: ¬∃xL(x). Negation: ∃xL(x). English: Someone has lost more than one thousand dollars playing the lottery.",
        "solution": "The original denies existence; its negation asserts existence.",
        "rubric": [
          "Gives the existential negation and correct English without “it is not the case that.”"
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Original: ∃x(C(x)∧E1(x)). Negation: ∀x(C(x)→¬E1(x)), with E1(x)=∃y(C(y)∧y≠x∧H(x,y)∧∀z((C(z)∧z≠x∧H(x,z))→z=y)). English: Every class student has chatted with zero or at least two other class students.",
        "solution": "Negating exactly one leaves zero or at least two; the expanded E1 enforces one witness and no other.",
        "rubric": [
          "Includes exact-one existence and uniqueness, excludes self, and gives the zero-or-at-least-two negation."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Original: ∀x(C(x)→¬E2(x)). Negation: ∃x(C(x)∧E2(x)), where E2(x) means x emailed exactly two other class students as defined by two distinct witnesses and exclusion of all others. English: Some class student has emailed exactly two other class students.",
        "solution": "The original is “no student has exactly two,” so its negation supplies one student with exactly two.",
        "rubric": [
          "Includes the class restriction, exact-two meaning with other-student exclusions, and the existential English negation."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Original: ∃x(Student(x)∧∀e(Exercise(e)→S(x,e))). Negation: ∀x(Student(x)→∃e(Exercise(e)∧¬S(x,e))). English: Every student has at least one exercise in the book that they have not solved.",
        "solution": "Negation turns the outer existential into universal and the inner universal into existential. Student(x) keeps the domain as all students rather than adding an unstated class restriction.",
        "rubric": [
          "Correctly reverses both quantifiers, states an unsolved exercise for every student, and does not restrict the domain to this class."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Original: ¬∃x(Student(x)∧∀s(Section(s)→∃e(ExerciseIn(e,s)∧S(x,e)))). Negation: ∃x(Student(x)∧∀s(Section(s)→∃e(ExerciseIn(e,s)∧S(x,e)))). English: Some student has solved at least one exercise in every section of the book.",
        "solution": "Negating “no student” yields existence without changing the inner section/exercise structure or adding a class restriction.",
        "rubric": [
          "Preserves the shared student from the unrestricted student domain, universal sections, existential exercise per section, and correct English."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-037",
    "mode": "rubric",
    "answer": "a) Original: ∀x(C(x)→M2(x)), where M2(x) means x has taken exactly two mathematics classes at the school. Negation: ∃x(C(x)∧¬M2(x)). English: Some class student has taken fewer than two or more than two mathematics classes. b) Original: ∃x∀y((Country(y)∧y≠Libya)→V(x,y)). Negation: ∀x∃y(Country(y)∧y≠Libya∧¬V(x,y)). English: For every person, there is some country other than Libya that the person has not visited. c) Original: ¬∃x∀m(Himalayan(m)→Climb(x,m)). Negation: ∃x∀m(Himalayan(m)→Climb(x,m)). English: Someone has climbed every mountain in the Himalayas. d) Original: ∀x(Actor(x)→(With(x,Bacon)∨∃y(With(x,y)∧With(y,Bacon)))). Negation: ∃x(Actor(x)∧¬With(x,Bacon)∧∀y(¬With(x,y)∨¬With(y,Bacon))). English: Some movie actor has neither appeared with Kevin Bacon nor appeared with anyone who has appeared with Kevin Bacon.",
    "solution": "For (a), M2(x)=∃u∃v(MathClass(u)∧MathClass(v)∧u≠v∧Taken(x,u)∧Taken(x,v)∧∀w((MathClass(w)∧Taken(x,w))→(w=u∨w=v))). Negating exactly two gives fewer than two or more than two. In (b), ¬(D→V) becomes D∧¬V. In (d), De Morgan produces a conjunction and the negated existential becomes universal.",
    "hints": [
      "Negate “every country except Libya” by retaining Country(y) and y≠Libya in a conjunction.",
      "For (d), rule out both direct and two-step connections."
    ],
    "rubric": [
      "Each part gives the original quantification, an inward-pushed negation, and a faithful English negation.",
      "Part (a) interprets failure of exactly two as fewer or more, not merely more.",
      "Part (b) keeps Libya excluded in the counterexample country.",
      "Part (d) denies direct collaboration and all possible intermediate collaborators."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Original: ∀x(C(x)→M2(x)). Negation: ∃x(C(x)∧¬M2(x)). English: Some student in the class has taken fewer than two or more than two mathematics classes at the school.",
        "solution": "M2 includes two distinct class witnesses and a no-third-class clause; its negation means any count other than two.",
        "rubric": [
          "Defines exact-two semantics and gives the correct existential negation and English."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Original: ∃x∀y((Country(y)∧y≠Libya)→V(x,y)). Negation: ∀x∃y(Country(y)∧y≠Libya∧¬V(x,y)). English: Every person has left at least one country other than Libya unvisited.",
        "solution": "For each person x, some qualifying country witnesses failure of visitation.",
        "rubric": [
          "Reverses both quantifiers, converts the failed implication to a conjunction, and retains the Libya exclusion."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Original: ¬∃x∀m(Himalayan(m)→Climb(x,m)). Negation: ∃x∀m(Himalayan(m)→Climb(x,m)). English: Someone has climbed every mountain in the Himalayas.",
        "solution": "Removing the outer negation yields the existential assertion directly.",
        "rubric": [
          "Gives one person who climbed every Himalayan mountain and the corresponding formula."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Original: ∀x(Actor(x)→(With(x,Bacon)∨∃y(With(x,y)∧With(y,Bacon)))). Negation: ∃x(Actor(x)∧¬With(x,Bacon)∧∀y(¬With(x,y)∨¬With(y,Bacon))). English: Some movie actor has not been in a movie with Kevin Bacon and has not been in a movie with anyone who has been in one with Kevin Bacon.",
        "solution": "Failure of the disjunction requires both the direct link and every possible two-step link to fail.",
        "rubric": [
          "Includes actor existence, no direct Bacon link, and universal exclusion of an intermediate collaborator."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-038",
    "mode": "rubric",
    "answer": "a) ∃x(C(x)∧¬L(x)): Some student in the class does not like mathematics. b) ∀x(C(x)→S(x)): Every student in the class has seen a computer. c) ∀x(C(x)→∃y(MathCourse(y)∧¬T(x,y))): For every class student, there is at least one mathematics course at the school that the student has not taken. d) ∀x(C(x)→∃b(Building(b)∧∀r(RoomIn(r,b)→¬BeenIn(x,r)))): For every class student, there is some campus building in whose every room the student has never been.",
    "solution": "Negate each proposition and move negation inward. “Some student has never seen a computer” negates to “every student has seen a computer.” In (d), the original student/building/room structure ∃x∀b∃r becomes ∀x∃b∀r, and room visitation is negated.",
    "hints": [
      "Swap every quantifier when forming the negation.",
      "In (d), each student may have a different unvisited building."
    ],
    "rubric": [
      "Each part gives both a quantified negation and a natural English equivalent.",
      "Part (b) asserts that every student has seen a computer, not merely that some student has.",
      "Part (c) allows a different missed course per student.",
      "Part (d) gives each student a building and denies visitation to every room of that building."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(C(x)∧¬L(x)). Some student in this class does not like mathematics.",
        "solution": "Negating ∀x(C(x)→L(x)) produces a student satisfying C(x) and not L(x).",
        "rubric": [
          "Gives the existential counterexample formula and English."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀x(C(x)→S(x)), where S(x) means x has seen a computer. Every student in this class has seen a computer.",
        "solution": "Negating “some student has never seen one” requires universal prior exposure.",
        "rubric": [
          "Gives universal seen-a-computer coverage in formula and English."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x(C(x)→∃y(MathCourse(y)∧¬T(x,y))). Every student in this class has at least one mathematics course at the school that they have not taken.",
        "solution": "The original ∃x∀y becomes ∀x∃y under negation.",
        "rubric": [
          "Requires an untaken math course for every class student."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀x(C(x)→∃b(Building(b)∧∀r(RoomIn(r,b)→¬BeenIn(x,r)))). For every class student, there is a campus building such that the student has never been in any of its rooms.",
        "solution": "Reverse all three quantifiers and negate room visitation.",
        "rubric": [
          "Preserves per-student building dependence and universal non-visitation of that building’s rooms."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-039",
    "mode": "rubric",
    "answer": "a) x=1,y=−1. b) x=−1. c) x=1,y=0.",
    "solution": "(a) 1²=(−1)² but 1≠−1. (b) When x=−1, no integer y has y²=−1. (c) With x=1,y=0, xy=0 but x=1, so xy≥x is false.",
    "hints": [
      "For equal squares, try opposite signs.",
      "For a nonnegative square, choose a negative right-hand side.",
      "For a product inequality, test zero and negative factors."
    ],
    "rubric": [
      "Each part supplies a valid integer counterexample or an equally valid alternative.",
      "Part (a) makes x²=y² true and x=y false.",
      "Part (b) chooses x with no integer square root.",
      "Part (c) makes xy<x."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "x=1, y=−1.",
        "solution": "The implication’s hypothesis is true because both squares equal 1, but its conclusion is false.",
        "rubric": [
          "Any distinct integers with equal squares, such as opposite nonzero values, are accepted."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "x=−1.",
        "solution": "Integer squares are nonnegative, so no y satisfies y²=−1.",
        "rubric": [
          "Any negative integer x is a valid counterexample."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "x=1, y=0.",
        "solution": "Then xy=0 and x=1, so xy≥x becomes 0≥1.",
        "rubric": [
          "Any integers satisfying xy<x are accepted, with substitution shown."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-040",
    "mode": "rubric",
    "answer": "a) x=0. b) x=−101. c) x=1,y=1.",
    "solution": "(a) For x=0, no integer y can satisfy 0=1/y: y=0 is undefined, and every nonzero integer reciprocal is nonzero. (b) For x=−101, the inequality becomes y²+101<100, or y²<−1, impossible. (c) x=y=1 gives x²=y³=1, contradicting the claimed inequality.",
    "hints": [
      "Zero has no reciprocal.",
      "Make x+100 negative in (b).",
      "For (c), try equal small integers."
    ],
    "rubric": [
      "Each part gives a valid integer counterexample and a verification.",
      "Part (a) chooses an integer with no reciprocal of the required integer form.",
      "Part (b) makes y²−x<100 impossible for every integer y.",
      "Part (c) supplies x,y with x²=y³."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "x=0.",
        "solution": "There is no integer y with 0=1/y.",
        "rubric": [
          "x=0 is accepted; any alternative must be shown to lack an integer y satisfying the equation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "x=−101.",
        "solution": "Then y²−x=y²+101≥101 for every integer y, so it cannot be below 100.",
        "rubric": [
          "Any x≤−101 works because y²−x≥−x≥101."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "x=1, y=1.",
        "solution": "Both x² and y³ equal 1, so x²≠y³ is false.",
        "rubric": [
          "Any integer pair with x²=y³, including x=y=0 or suitable perfect powers, is accepted."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-041",
    "mode": "rubric",
    "answer": "∀x∀y∀z((xy)z = x(yz)), where x,y,z range over real numbers.",
    "checker": "rubric",
    "solution": "Associativity says the two ways of grouping a product of three real numbers are equal, for every choice of x,y,z.",
    "hints": [
      "Use three universal variables and change only the grouping parentheses."
    ],
    "readAloud": "For all real x,y,z, x times y grouped first, then times z, equals x times the product y times z.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x∀y∀z((xy)z = x(yz)), where x,y,z range over real numbers.",
      "Explains the required reasoning and cases: Associativity says the two ways of grouping a product of three real numbers are equal, for every choice of x,y,z."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-042",
    "mode": "rubric",
    "answer": "∀x∀y∀z(x(y+z)=xy+xz ∧ (x+y)z=xz+yz), where x,y,z range over real numbers.",
    "checker": "rubric",
    "solution": "Include both left distributivity, x(y+z)=xy+xz, and right distributivity, (x+y)z=xz+yz, universally over the reals.",
    "hints": [
      "The plural “laws” calls for both left and right distribution."
    ],
    "verify": "Each equation expands one product into the sum of two products without changing term order within each product.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀x∀y∀z(x(y+z)=xy+xz ∧ (x+y)z=xz+yz), where x,y,z range over real numbers.",
      "Explains the required reasoning and cases: Include both left distributivity, x(y+z)=xy+xz, and right distributivity, (x+y)z=xz+yz, universally over the reals."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-043",
    "mode": "rubric",
    "answer": "∀a∀b(a≠0 → ∃x(ax+b=0 ∧ ∀y(ay+b=0 → y=x))), over real a,b,x,y.",
    "checker": "rubric",
    "solution": "The polynomial is ax+b with a≠0. Existence gives a root x, and the universal clause says every root y equals x, giving exactly one real root.",
    "hints": [
      "Represent a linear polynomial by ax+b and impose a≠0.",
      "Exactly one root requires existence plus uniqueness."
    ],
    "verify": "Algebraically, x=−b/a exists because a≠0, and ay+b=0 forces y=−b/a=x.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀a∀b(a≠0 → ∃x(ax+b=0 ∧ ∀y(ay+b=0 → y=x))), over real a,b,x,y.",
      "Explains the required reasoning and cases: The polynomial is ax+b with a≠0. Existence gives a root x, and the universal clause says every root y equals x, giving exactly one real root."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-044",
    "mode": "rubric",
    "answer": "∀a∀b∀c(a≠0 → ∀x∀y∀z((ax²+bx+c=0 ∧ ay²+by+c=0 ∧ az²+bz+c=0) → (x=y ∨ x=z ∨ y=z))), over real numbers.",
    "checker": "rubric",
    "solution": "For each genuine quadratic ax²+bx+c with a≠0, any three real roots x,y,z cannot all be distinct. At least two must coincide, which expresses at most two roots.",
    "hints": [
      "To say “at most two,” rule out three pairwise-distinct roots.",
      "Require a≠0 so the polynomial is genuinely quadratic."
    ],
    "verify": "If three roots were pairwise different, all three disjuncts x=y, x=z, y=z would fail; the universal implication rules that out.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∀a∀b∀c(a≠0 → ∀x∀y∀z((ax²+bx+c=0 ∧ ay²+by+c=0 ∧ az²+bz+c=0) → (x=y ∨ x=z ∨ y=z))), over real numbers.",
      "Explains the required reasoning and cases: For each genuine quadratic ax²+bx+c with a≠0, any three real roots x,y,z cannot all be distinct. At least two must coincide, which expresses at most two roots."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-045",
    "mode": "auto",
    "answer": "a) True. b) False. c) True.",
    "solution": "The statement says every x in the domain has a multiplicative inverse y=1/x in that same domain. Every nonzero real and every positive real has such an inverse. The nonzero integers do not: x=2 would require y=1/2, which is not an integer.",
    "hints": [
      "The required inverse must belong to the stated domain.",
      "Test x=2 for the nonzero integers."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For every nonzero real x, y=1/x is a nonzero real and xy=1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For x=2, no nonzero integer y satisfies 2y=1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "For every positive real x, y=1/x is also positive real and xy=1."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-046",
    "mode": "auto",
    "answer": "a) False. b) True. c) True.",
    "solution": "One fixed x must be a lower bound for all squares y² in the domain. On positive reals, squares can be arbitrarily close to 0, so no positive x satisfies x≤y² for every y. On integers, x=0 works because y²≥0. On nonzero reals, x=−1 works because y²≥0>−1.",
    "hints": [
      "The existential x is chosen before the universal y, so one x must work for all squares.",
      "Check whether the domain contains zero and whether it contains negative numbers."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "false",
        "accepted": [
          "False",
          "F"
        ],
        "checker": "text",
        "solution": "For any positive x, choose positive y<√x; then y²<x."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose x=0; every integer square is nonnegative."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "true",
        "accepted": [
          "True",
          "T"
        ],
        "checker": "text",
        "solution": "Choose x=−1, a nonzero real; every nonzero real y has y²>0, so x≤y²."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-047",
    "mode": "rubric",
    "answer": "¬∃x∀yP(x,y) ≡ ∀x¬∀yP(x,y) ≡ ∀x∃y¬P(x,y).",
    "solution": "First apply the quantifier-negation law ¬∃xA(x)≡∀x¬A(x), taking A(x)=∀yP(x,y). Then apply ¬∀yB(y)≡∃y¬B(y), taking B(y)=P(x,y). Because corresponding quantifiers use the same domains, both transformations preserve meaning.",
    "hints": [
      "Move the negation through one quantifier at a time.",
      "Treat ∀yP(x,y) as a single predicate of x in the first step."
    ],
    "rubric": [
      "Uses ¬∃xA≡∀x¬A to obtain ∀x¬∀yP(x,y).",
      "Uses ¬∀yA≡∃y¬A to obtain ∀x∃y¬P(x,y).",
      "States that the equivalences preserve the specified common domains and therefore proves logical equivalence."
    ],
    "readAloud": "There is no x that works for every y means that for every x, some y makes P fail.",
    "verify": "The two formulas assert the same failure condition: each x has a counterexample y."
  },
  {
    "id": "rosen-ch1-ex-1-5-048",
    "mode": "rubric",
    "answer": "∀xP(x)∨∀xQ(x) ≡ ∀x∀y(P(x)∨Q(y)) on a nonempty common domain.",
    "solution": "Forward: if ∀xP(x), then P(x) holds for every x, so P(x)∨Q(y) holds for all x,y; similarly if ∀xQ(x), Q(y) holds for every y. Conversely, suppose the right side holds but the left side fails. Then there are a,b with ¬P(a) and ¬Q(b). Taking x=a,y=b makes P(x)∨Q(y) false, a contradiction. Hence the left side must hold.",
    "hints": [
      "For the forward direction, handle the two disjuncts separately.",
      "For the converse, negate the disjunction to obtain witnesses ¬P(a) and ¬Q(b)."
    ],
    "rubric": [
      "Proves the forward implication for both ∀xP(x) and ∀xQ(x).",
      "Proves the reverse implication, for example by contradiction using a with ¬P(a) and b with ¬Q(b).",
      "Uses the same nonempty domain and concludes logical equivalence without incorrectly swapping mixed quantifiers."
    ],
    "verify": "The two universal variables allow independent counterexample choices a and b, which is exactly why the new variable y is needed."
  },
  {
    "id": "rosen-ch1-ex-1-5-049",
    "mode": "rubric",
    "answer": "a) ∀xP(x)∧∃xQ(x) ≡ ∀x∃y(P(x)∧Q(y)). b) ∀xP(x)∨∃xQ(x) ≡ ∀x∃y(P(x)∨Q(y)). Both equivalences use the same nonempty domain.",
    "solution": "(a) If the left side holds, choose a Q-witness c; for every x choose y=c. Conversely, the right side gives P(x) for every x, and at any x0 it gives some y with Q(y). (b) If ∀xP(x), any y works because the domain is nonempty; if Q(c), choose y=c for every x. Conversely, if ∀xP(x) holds, the left side is immediate. Otherwise choose a with ¬P(a); applying the right side at x=a forces some y with Q(y), hence ∃xQ(x).",
    "hints": [
      "Reuse one Q-witness for every x in the forward directions.",
      "For the reverse direction of (b), split on whether ∀xP(x) holds."
    ],
    "rubric": [
      "Part (a) proves both directions and extracts ∃yQ(y) using a domain element.",
      "Part (b) proves both directions, including the nonempty-domain witness when ∀xP(x) holds and the ¬P(a) argument for the converse.",
      "All steps preserve the quantifier order ∀x∃y and common nonempty domain."
    ],
    "readAloud": "Prenex normal form places all quantifiers first, followed by one quantifier-free predicate.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∀xP(x)∧∃xQ(x) ≡ ∀x∃y(P(x)∧Q(y)).",
        "solution": "A single c with Q(c) can serve as y for every x. Conversely, P(x) follows for every x, and instantiating at any x0 yields some y with Q(y).",
        "rubric": [
          "Gives a shared Q-witness in the forward direction and derives both left conjuncts in the reverse direction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∀xP(x)∨∃xQ(x) ≡ ∀x∃y(P(x)∨Q(y)).",
        "solution": "Forward, either any y works under ∀P or a Q-witness works. Conversely, if ∀P fails at a, the right side at x=a forces Q(y) for some y.",
        "rubric": [
          "Handles both forward cases and proves the converse using a P-counterexample; notes nonemptiness where needed."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-050",
    "mode": "rubric",
    "answer": "a) ∃x(P(x)∨Q(x)∨A). b) ∃x∃y(¬P(x)∧¬Q(y)). c) ∀x∃y(¬P(x)∨Q(y)), equivalently ∀x∃y(P(x)→Q(y)). In each answer, every quantifier appears before a quantifier-free matrix, as required for prenex normal form (PNF).",
    "solution": "(a) Combine the two existential statements as ∃x(P(x)∨Q(x)); the quantifier-free proposition A can remain inside the matrix. (b) Negate to ∃x¬P(x)∧∃x¬Q(x), rename one bound variable, and move both existential quantifiers to the front. (c) Rename the second x to y and rewrite the implication: ¬∃xP(x)∨∃yQ(y) ≡ ∀x¬P(x)∨∃yQ(y) ≡ ∀x∃y(¬P(x)∨Q(y)).",
    "hints": [
      "Rename bound variables before combining quantifier scopes.",
      "PNF means all quantifiers come first and the remaining predicate contains no quantifiers."
    ],
    "readAloud": "Prenex normal form: first the entire quantifier prefix, then a quantifier-free matrix.",
    "verify": "Check each prefix and matrix separately: no quantifier remains inside parentheses after the prefix.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x(P(x) ∨ Q(x) ∨ A)",
        "checker": "rubric",
        "solution": "Existential quantification distributes over disjunction, and A is already quantifier-free.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x(P(x) ∨ Q(x) ∨ A)",
          "Explains the required reasoning and cases: Existential quantification distributes over disjunction, and A is already quantifier-free."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x∃y(¬P(x) ∧ ¬Q(y))",
        "checker": "rubric",
        "solution": "The negation is ∃x¬P(x)∧∃x¬Q(x); rename the second x and place both existential quantifiers first.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∃x∃y(¬P(x) ∧ ¬Q(y))",
          "Explains the required reasoning and cases: The negation is ∃x¬P(x)∧∃x¬Q(x); rename the second x and place both existential quantifiers first."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀x∃y(¬P(x) ∨ Q(y))",
        "checker": "rubric",
        "solution": "Rewrite the implication as ¬∃xP(x)∨∃yQ(y), negate the first quantifier, and move the prefix outward.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: ∀x∃y(¬P(x) ∨ Q(y))",
          "Explains the required reasoning and cases: Rewrite the implication as ¬∃xP(x)∨∃yQ(y), negate the first quantifier, and move the prefix outward."
        ]
      }
    ],
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(P(x) ∨ Q(x) ∨ A)",
      "Explains the required reasoning and cases: Existential quantification distributes over disjunction, and A is already quantifier-free.",
      "Gives a response equivalent to the authored model answer: ∃x∃y(¬P(x) ∧ ¬Q(y))",
      "Explains the required reasoning and cases: The negation is ∃x¬P(x)∧∃x¬Q(x); rename the second x and place both existential quantifiers first.",
      "Gives a response equivalent to the authored model answer: ∀x∃y(¬P(x) ∨ Q(y))",
      "Explains the required reasoning and cases: Rewrite the implication as ¬∃xP(x)∨∃yQ(y), negate the first quantifier, and move the prefix outward."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-5-051",
    "mode": "rubric",
    "answer": "Use structural induction. Atomic predicates, propositional variables, T, and F are already in PNF. Rename bound variables so all are distinct and no bound variable is free elsewhere. Replace A→B by ¬A∨B and A↔B by (A∧B)∨(¬A∧¬B). Push negations inward with ¬∃xA≡∀x¬A, ¬∀xA≡∃x¬A, De Morgan’s laws, and double-negation elimination. For induction, if A and B have PNF equivalents, form PNF equivalents of ¬A, A∧B, and A∨B by the preceding rules and by pulling quantifiers outward after renaming: (QxA)∧B≡Qx(A∧B), A∧(QxB)≡Qx(A∧B), (QxA)∨B≡Qx(A∨B), and A∨(QxB)≡Qx(A∨B), where x is not free in B or A respectively and Q is ∀ or ∃. For QxA, prepend Qx to the PNF prefix of A. Every step preserves equivalence on a nonempty domain, so structural induction yields an equivalent PNF statement.",
    "solution": "The base cases need no quantifier prefix. In the inductive cases, the induction hypothesis supplies PNF forms for immediate substatements. Alpha-renaming prevents variable capture, the negation rules preserve meaning, and the nonempty-domain quantifier movement rules put the prefix first without changing the matrix. Connectives can therefore be handled recursively until the whole statement has the required form Q1x1…QkxkM, with M quantifier-free.",
    "hints": [
      "Start with atomic statements as the induction base.",
      "Rename before moving a quantifier across another subformula.",
      "Remember that quantifier movement across ∧ and ∨ relies on a nonempty domain and the moved variable not being free in the other subformula."
    ],
    "rubric": [
      "States a structural-induction base case for quantifier-free atomic statements.",
      "Includes alpha-renaming to prevent capture and gives valid inductive treatment of quantified statements.",
      "Handles negation by swapping quantifiers and applying De Morgan and double-negation rules.",
      "Handles conjunction and disjunction by pulling quantifiers outward with the required free-variable and nonempty-domain conditions.",
      "Handles implication and biconditional through equivalent connective forms and concludes an equivalent PNF with quantifier-free matrix."
    ],
    "readAloud": "PNF is a quantifier prefix followed by a quantifier-free matrix. The construction recursively transforms each substatement and then moves the prefixes to the front.",
    "verify": "Every rule is an equivalence, every variable conflict is removed before movement, and the final formula has no quantifier outside the leading prefix."
  },
  {
    "id": "rosen-ch1-ex-1-5-052",
    "mode": "rubric",
    "answer": "∃x(P(x) ∧ ∀y(P(y) → y=x)).",
    "checker": "rubric",
    "solution": "The existential conjunct P(x) guarantees at least one object with the property. The universal implication guarantees uniqueness: every object y with the property must equal that witness x.",
    "hints": [
      "Combine existence with a “no different object” clause.",
      "Use a fresh variable y for the uniqueness condition."
    ],
    "readAloud": "There exists x such that P of x holds, and for every y, if P of y holds then y equals x.",
    "verify": "If two objects a,b both satisfied P, the uniqueness clause with witness a would force b=a; the existence clause ensures at least one such object.",
    "rubric": [
      "Gives a response equivalent to the authored model answer: ∃x(P(x) ∧ ∀y(P(y) → y=x)).",
      "Explains the required reasoning and cases: The existential conjunct P(x) guarantees at least one object with the property. The universal implication guarantees uniqueness: every object y with the property must equal that witness x."
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-001",
    "mode": "rubric",
    "answer": "Let h mean “Socrates is human” and m mean “Socrates is mortal.” The form is h → m, h, therefore m. It is modus ponens and is valid; if both premises are true, the conclusion must be true.",
    "solution": "The first premise says that h is sufficient for m. The second premise establishes h, so modus ponens gives m. Validity concerns this guaranteed transmission of truth: when h → m and h are both true, m cannot be false.",
    "hints": [
      "Replace each repeated English statement by one propositional variable.",
      "Look for the pattern “if p then q,” together with p."
    ],
    "rubric": [
      "Defines variables and gives the form h → m, h, therefore m.",
      "Names modus ponens and identifies the argument as valid.",
      "States that true premises force a true conclusion, rather than claiming the premises are independently known to be true."
    ],
    "readAloud": "h arrow m means: if Socrates is human, then Socrates is mortal. We also have h, so we may conclude m.",
    "startHere": "Underline the repeated antecedent “Socrates is human” and the repeated consequent “Socrates is mortal.”",
    "verify": "Try to make the conclusion false while both premises are true: m false makes h → m false whenever h is true, so no such case exists."
  },
  {
    "id": "rosen-ch1-ex-1-6-002",
    "mode": "rubric",
    "answer": "Let e mean “George has eight legs” and s mean “George is a spider.” The form is ¬e → ¬s, s, therefore e. This is modus tollens, valid; true premises force the conclusion to be true.",
    "solution": "The second premise s is equivalent to ¬(¬s), so it denies the consequent of ¬e → ¬s. Modus tollens therefore gives ¬(¬e), hence e. Equivalently, take the contrapositive s → e and apply modus ponens.",
    "hints": [
      "Use e for the positive statement “George has eight legs.”",
      "A spider premise denies “not a spider,” which is the consequent of the conditional."
    ],
    "rubric": [
      "Gives the exact form ¬e → ¬s, s, therefore e, with consistent meanings for e and s.",
      "Identifies modus tollens and validity, or correctly uses the contrapositive followed by modus ponens.",
      "Concludes that e is true whenever both premises are true."
    ],
    "readAloud": "If not e, then not s. But s is true, so not e must be false; therefore e is true.",
    "verify": "Use the contrapositive: ¬e → ¬s is equivalent to s → e; then s and s → e give e directly."
  },
  {
    "id": "rosen-ch1-ex-1-6-003",
    "mode": "auto",
    "answer": "a) Addition. b) Simplification. c) Modus ponens. d) Modus tollens. e) Hypothetical syllogism.",
    "solution": "Match each argument to its form: p therefore p ∨ q; p ∧ q therefore p; p → q and p therefore q; p → q and ¬q therefore ¬p; and p → q with q → r therefore p → r.",
    "hints": [
      "Ignore the subject matter and compare only the connectives and the positions of repeated statements.",
      "For a chain of two conditionals, check whether the consequent of the first is the antecedent of the second."
    ],
    "readAloud": "Addition adds an alternative; simplification selects a conjunct; modus ponens affirms the antecedent; modus tollens denies the consequent; hypothetical syllogism links conditionals.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Addition",
        "accepted": [
          "addition rule",
          "disjunction introduction"
        ],
        "checker": "text",
        "solution": "From p, addition permits p ∨ q, where q is the computer-science-major claim."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Simplification",
        "accepted": [
          "conjunction elimination"
        ],
        "checker": "text",
        "solution": "From p ∧ q, simplification permits p."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Modus ponens",
        "accepted": [
          "modus ponendo ponens",
          "affirming the antecedent"
        ],
        "checker": "text",
        "solution": "The rain premise affirms the antecedent of rain → closed, yielding closed."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Modus tollens",
        "accepted": [
          "modus tollendo tollens",
          "denying the consequent"
        ],
        "checker": "text",
        "solution": "The university being open denies the consequent of snow → closed, yielding no snow."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Hypothetical syllogism",
        "accepted": [
          "hypothetical syllogism rule",
          "transitivity of implication"
        ],
        "checker": "text",
        "solution": "Swimming → too much sun and too much sun → sunburn chain to swimming → sunburn."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-004",
    "mode": "auto",
    "answer": "a) Simplification. b) Disjunctive syllogism. c) Modus ponens. d) Addition. e) Hypothetical syllogism.",
    "solution": "The forms are p ∧ q therefore q; p ∨ q with ¬p therefore q; p with p → q therefore q; p therefore p ∨ q; and p → q with q → r therefore p → r.",
    "hints": [
      "In (b), “less than 100 degrees” denies the first alternative “hotter than 100 degrees.”",
      "Decide whether the argument selects from a conjunction, eliminates a disjunct, or follows a conditional."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Simplification",
        "accepted": [
          "conjunction elimination"
        ],
        "checker": "text",
        "solution": "The conjunction gives either conjunct; here the marsupial conjunct is selected."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "Disjunctive syllogism",
        "accepted": [
          "disjunctive syllogism rule",
          "elimination of a disjunct"
        ],
        "checker": "text",
        "solution": "The temperature premise negates the first disjunct, leaving dangerous pollution."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Modus ponens",
        "accepted": [
          "modus ponendo ponens",
          "affirming the antecedent"
        ],
        "checker": "text",
        "solution": "Linda's excellent swimming is the antecedent of the lifeguard conditional."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Addition",
        "accepted": [
          "addition rule",
          "disjunction introduction"
        ],
        "checker": "text",
        "solution": "From Steve working at a computer company, addition gives that statement or his being a beach bum."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Hypothetical syllogism",
        "accepted": [
          "hypothetical syllogism rule",
          "transitivity of implication"
        ],
        "checker": "text",
        "solution": "The shared middle statement is answering all the exercises, so the two conditionals form one chain."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-005",
    "mode": "rubric",
    "answer": "Randy will not get the job follows by two applications of modus ponens.",
    "solution": "Let w, d, and j mean Randy works hard, Randy is a dull boy, and Randy gets the job. The premises are w, w → d, and d → ¬j. From w and w → d, modus ponens gives d. From d and d → ¬j, a second application of modus ponens gives ¬j.",
    "hints": [
      "Use the unconditional premise “Randy works hard” first.",
      "The conclusion of the first modus ponens step becomes the antecedent needed for the second."
    ],
    "rubric": [
      "Derives “Randy is a dull boy” from the first two premises by modus ponens.",
      "Uses that derived statement with the final conditional to obtain “Randy will not get the job” by modus ponens.",
      "Keeps the negation on getting the job."
    ],
    "startHere": "Write w → d above d → ¬j and notice that the derived d is the bridge between them."
  },
  {
    "id": "rosen-ch1-ex-1-6-006",
    "mode": "rubric",
    "answer": "It rained follows by modus tollens, simplification, another modus tollens, De Morgan’s law, and disjunctive syllogism.",
    "solution": "Let r, f, s, l, and t denote rain, fog, the race being held, the demonstration going on, and the trophy being awarded. The premises are (¬r ∨ ¬f) → (s ∧ l), s → t, and ¬t. From s → t and ¬t, modus tollens gives ¬s. The first conditional cannot have a true consequent, since s ∧ l would give s by simplification. Thus modus tollens gives ¬(¬r ∨ ¬f), equivalently r ∧ f by De Morgan’s law and double negation. Simplification gives r. More formally, ¬s implies ¬(s ∧ l), because s ∧ l would contradict ¬s.",
    "hints": [
      "Start at the negative fact ¬t and work backward through s → t.",
      "After rejecting s ∧ l, negate the disjunction ¬r ∨ ¬f using De Morgan’s law."
    ],
    "rubric": [
      "Derives ¬s from s → t and ¬t by modus tollens.",
      "Explains why ¬s rejects the consequent s ∧ l and applies modus tollens to the first premise.",
      "Transforms ¬(¬r ∨ ¬f) into r ∧ f and extracts r.",
      "Uses only justified inference steps and reaches “It rained.”"
    ],
    "readAloud": "The antecedent is “not raining or not foggy,” and the consequent is “the race is held and the demonstration goes on.” Negating the whole consequent lets us negate the whole antecedent.",
    "verify": "The derivation gives r ∧ f, which makes ¬r ∨ ¬f false, so the first premise places no further requirement; both conditional premises are also consistent with ¬t and ¬s."
  },
  {
    "id": "rosen-ch1-ex-1-6-007",
    "mode": "auto",
    "answer": "Universal instantiation and modus ponens",
    "accepted": [
      "universal instantiation, then modus ponens",
      "universal modus ponens"
    ],
    "checker": "text",
    "solution": "From ∀x(Man(x) → Mortal(x)), universal instantiation gives Man(Socrates) → Mortal(Socrates). Together with Man(Socrates), modus ponens gives Mortal(Socrates). The combined pattern is also called universal modus ponens.",
    "hints": [
      "First specialize “all men” to Socrates; then use the fact that Socrates is a man."
    ],
    "readAloud": "For every x, if x is a man then x is mortal. Instantiate x with Socrates, then affirm the antecedent.",
    "verify": "The two named stages are specialization of a universal statement followed by the ordinary propositional rule p → q, p therefore q."
  },
  {
    "id": "rosen-ch1-ex-1-6-008",
    "mode": "auto",
    "answer": "Universal instantiation and modus tollens",
    "accepted": [
      "universal instantiation, then modus tollens",
      "universal modus tollens"
    ],
    "checker": "text",
    "solution": "“No man is an island” means ∀x(Man(x) → ¬Island(x)). Universal instantiation gives Man(Manhattan) → ¬Island(Manhattan). Since Island(Manhattan) denies the consequent, modus tollens gives ¬Man(Manhattan). This combination is universal modus tollens.",
    "hints": [
      "Rewrite “No man is an island” as “If x is a man, then x is not an island.”",
      "Manhattan being an island negates the conditional’s consequent."
    ],
    "readAloud": "If Manhattan were a man, it would not be an island. It is an island, so it is not a man."
  },
  {
    "id": "rosen-ch1-ex-1-6-009",
    "mode": "rubric",
    "answer": "a) I did not take Tuesday off; I took Thursday off; it rained Thursday. b) I did not eat spicy foods, and there was no thunder while I slept. c) I am clever; no lottery conclusion follows. d) Ralph is not a computer science major; no major conclusion follows for Ann. e) If something is good for corporations, then it is good for you; the buying-stuff conditional does not establish that you actually buy stuff. f) Mice gnaw their food, and rabbits are not rodents; nothing about bats gnawing follows.",
    "solution": "Apply modus tollens to negative consequents, disjunctive syllogism to an excluded alternative, and universal modus ponens or tollens to the quantified premises. Do not reverse conditionals: having a computer does not imply being a CS major, and not being a rodent does not imply not gnawing.",
    "hints": [
      "For each conditional, check whether another premise affirms its antecedent or denies its consequent.",
      "A disjunction gives a definite alternative only after the other alternative is eliminated.",
      "Do not infer a converse from Ann’s computer, the lottery conditional, or the statement about bats."
    ],
    "rubric": [
      "Each part lists every stated relevant conclusion and names valid rules supporting it.",
      "No part affirms a consequent, denies an antecedent, or treats an unused premise as extra information.",
      "Weather and day-off conclusions in (a) are attached to the correct days."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "I did not take Tuesday off; therefore I took Thursday off; moreover, it rained Thursday.",
        "solution": "Sunny Tuesday rules out rain or snow there, so taking Tuesday off would contradict off → rain ∨ snow; modus tollens gives ¬off(Tuesday). Disjunctive syllogism with off(Tuesday) ∨ off(Thursday) gives off(Thursday). Modus ponens gives rain(Thursday) ∨ snow(Thursday), and disjunctive syllogism with ¬snow(Thursday) gives rain(Thursday).",
        "rubric": [
          "Derives no Tuesday day off by modus tollens, using sunny Tuesday to reject rain or snow.",
          "Derives Thursday off by disjunctive syllogism.",
          "Derives Thursday rain using off → rain ∨ snow and ¬snow(Thursday)."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "I did not eat spicy foods, and there was no thunder while I slept.",
        "solution": "Both conditionals have “I have strange dreams” as consequent. Modus tollens with ¬dreams negates each antecedent separately.",
        "rubric": [
          "Obtains both negative conclusions.",
          "Identifies modus tollens for each conditional and does not claim a causal relationship between spicy food and thunder."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "I am clever. No conclusion about winning the lottery follows.",
        "solution": "Clever ∨ lucky and ¬lucky give clever by disjunctive syllogism. The conditional lucky → win has a false antecedent, so modus ponens does not apply.",
        "rubric": [
          "Derives clever by disjunctive syllogism.",
          "Does not infer either winning or not winning the lottery."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Ralph is not a computer science major. Ann’s having a personal computer gives no conclusion about her major.",
        "solution": "Instantiate every CS major → has a PC at Ralph; universal modus tollens with ¬PC(Ralph) gives ¬CS(Ralph). For Ann, the consequent is affirmed, which is not a valid inference rule.",
        "rubric": [
          "Concludes Ralph is not a CS major by universal modus tollens.",
          "Explicitly avoids affirming the consequent for Ann."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "If something is good for corporations, then it is good for you. No unconditional conclusion that you buy lots of stuff follows.",
        "solution": "Let C, U, Y, and B denote good for corporations, good for the United States, good for you, and buying lots of stuff. Hypothetical syllogism applied to C → U and U → Y gives C → Y. The separate premise C → B remains conditional because C is not asserted.",
        "rubric": [
          "Derives C → Y by hypothetical syllogism.",
          "Retains C → B as conditional and does not assert B without C."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Mice gnaw their food, and rabbits are not rodents. Whether bats gnaw their food is undetermined.",
        "solution": "Universal modus ponens applied to rodents → gnaw and mice being rodents gives mice gnaw. Universal modus tollens with rabbits not gnawing gives rabbits are not rodents. The premise that bats are not rodents denies an antecedent and gives no gnawing conclusion.",
        "rubric": [
          "Derives both positive conclusions with universal modus ponens and universal modus tollens.",
          "Does not infer that bats do not gnaw."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-010",
    "mode": "rubric",
    "answer": "a) I was not sore and did not play hockey. b) No new relevant conclusion about Monday or Friday follows. c) Dragonflies have six legs, and spiders are not insects. d) Homer is not a student; Maggie’s account does not determine whether she is a student. e) Tofu does not taste good; not eating tofu is already a premise, and nothing further about cheeseburgers follows. f) I am hallucinating and see elephants running down the road.",
    "solution": "Use modus tollens when a consequent is denied, disjunctive syllogism when one alternative is excluded, and universal instantiation before applying a propositional rule. Some supplied facts are irrelevant or merely repeat a derivable conclusion.",
    "hints": [
      "In (b), working Friday still permits sunny Friday, so lack of partial sun does not rule out working.",
      "Separate genuine new conclusions from facts already listed as premises."
    ],
    "rubric": [
      "All valid conclusions are supported by named inference rules.",
      "Part (b) is not overinterpreted, and no invalid converses are used in (d) or (e).",
      "All irrelevant premises are treated as irrelevant rather than forced into a conclusion."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "I was not sore the next day, and I did not play hockey.",
        "solution": "From sore → whirlpool and ¬whirlpool, modus tollens gives ¬sore. From hockey → sore and ¬sore, another modus tollens gives ¬hockey.",
        "rubric": [
          "Derives ¬sore first and then ¬hockey.",
          "Names modus tollens for both steps."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "No new relevant conclusion about whether I worked Monday or Friday can be drawn.",
        "solution": "Working Friday would imply sunny Friday ∨ partly sunny Friday. The premise ¬partlySunny(Friday) eliminates only one alternative; sunny Friday could still hold. Tuesday’s weather concerns a different day and does not affect the Monday/Friday disjunction.",
        "rubric": [
          "States that no new day-off or work conclusion follows.",
          "Explains why Friday could still be a sunny workday and why Tuesday’s weather is irrelevant."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Dragonflies have six legs, and spiders are not insects.",
        "solution": "Universal instantiation and modus ponens applied to dragonflies give six legs. For spiders, denying six legs gives not insects by universal modus tollens. Their eating dragonflies is unused.",
        "rubric": [
          "Gives both conclusions and the appropriate universal inference rules.",
          "Does not use the eating premise to make an unsupported classification."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Homer is not a student. Maggie’s account does not establish that she is a student.",
        "solution": "Every student → account instantiated at Homer, together with ¬account(Homer), gives ¬student(Homer) by universal modus tollens. Maggie affirms only the consequent.",
        "rubric": [
          "Derives the Homer conclusion by universal modus tollens.",
          "Avoids affirming the consequent for Maggie."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Tofu does not taste good. The premises also imply that you do not eat tofu, but this was already stated; no new conclusion about cheeseburgers follows.",
        "solution": "Healthy → ¬tastesGood instantiated at tofu and healthy(tofu) give ¬tastesGood(tofu) by universal modus ponens. “You only eat what tastes good” means eat → tastesGood, so modus tollens gives ¬eat(tofu), duplicating a premise. Cheeseburgers not being healthy denies an antecedent and yields no taste conclusion.",
        "rubric": [
          "Derives that tofu does not taste good.",
          "Recognizes that not eating tofu follows but is already a premise.",
          "Does not infer that cheeseburgers taste good or bad from their not being healthy."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "I am hallucinating, and I see elephants running down the road.",
        "solution": "Dreaming ∨ hallucinating and ¬dreaming give hallucinating by disjunctive syllogism. Then hallucinating → elephants gives elephants by modus ponens.",
        "rubric": [
          "Derives hallucinating by disjunctive syllogism.",
          "Uses modus ponens to derive seeing elephants."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-011",
    "mode": "rubric",
    "answer": "The implication follows by conditional proof: if all pᵢ are true, then q → r must be true.",
    "solution": "Assume p₁,…,pₙ are all true. To show q → r, consider q. If q is false, q → r is true vacuously. If q is true, then p₁,…,pₙ,q are all true; the given valid argument therefore makes r true. Thus r is true whenever q is true under the original premises, so q → r is true. Hence the argument with conclusion q → r is valid.",
    "hints": [
      "Fix the case in which every original premise pᵢ is true.",
      "To establish q → r, temporarily assume q and use the supplied valid argument to obtain r."
    ],
    "rubric": [
      "Assumes all original premises and explains why only this case matters for validity.",
      "Uses the truth of q together with the augmented valid argument to derive r.",
      "Concludes q → r, including the vacuous q-false case or an equivalent conditional-proof justification."
    ],
    "readAloud": "Given the p premises, I must prove “if q then r.” Assume q as well; the known valid argument now yields r, so q guarantees r.",
    "startHere": "Translate validity into: whenever all premises are true, the conclusion must also be true.",
    "verify": "If q is false the conditional is true automatically; if q is true the augmented argument forces r. These are the only two cases."
  },
  {
    "id": "rosen-ch1-ex-1-6-012",
    "mode": "rubric",
    "answer": "Assume q. Then u and t follow, then p, then p ∧ t, then r ∨ s, and finally r. Exercise 11 therefore gives q → r.",
    "solution": "Add q as a temporary premise. Modus ponens with q → (u ∧ t) gives u ∧ t; simplification gives u and t. Modus ponens with u → p gives p, and conjunction gives p ∧ t. Modus ponens with (p ∧ t) → (r ∨ s) gives r ∨ s. Disjunctive syllogism with ¬s gives r. Since q was added to derive r, Exercise 11 yields q → r from the original premises.",
    "hints": [
      "Exercise 11 tells you to add q temporarily and aim for r.",
      "After obtaining u ∧ t, simplify it and build p ∧ t for the first premise."
    ],
    "rubric": [
      "Adds q as a temporary assumption and invokes Exercise 11 at the end.",
      "Derives u ∧ t, u, t, p, and p ∧ t in a valid order with appropriate rules.",
      "Derives r ∨ s and then r using ¬s by disjunctive syllogism.",
      "Concludes q → r from the original premises."
    ],
    "startHere": "Write the target r at the bottom and work backward: r can come from r ∨ s together with ¬s.",
    "verify": "Every derived line is either a premise, the temporary q, or obtained by simplification, conjunction, modus ponens, or disjunctive syllogism from earlier lines."
  },
  {
    "id": "rosen-ch1-ex-1-6-013",
    "mode": "rubric",
    "answer": "a) Universal instantiation, modus ponens, conjunction as needed, existential generalization. b) Existential instantiation, universal instantiation, modus ponens, existential generalization. c) Universal instantiation twice, then modus ponens. d) Existential instantiation, universal instantiation, modus ponens, conjunction, existential generalization.",
    "solution": "For universal premises, instantiate at the named person or at the witness supplied by existential instantiation. Use modus ponens to specialize the consequence, retain class or location membership with conjunction when required, and finish with existential generalization when the conclusion says “someone.”",
    "hints": [
      "An existential premise supplies a witness with no special properties beyond those stated.",
      "Before existential generalization, make sure the witness satisfies every conjunct in the conclusion."
    ],
    "rubric": [
      "Every part explains the inference steps rather than merely asserting the conclusion.",
      "Universal statements are instantiated at the correct object, and existential witnesses remain the same through each derivation.",
      "Existential conclusions retain required class or New Jersey membership."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Instantiate the JAVA rule at Doug, apply modus ponens to conclude Doug can get a high-paying job, conjoin this with Doug’s class membership, and use existential generalization.",
        "solution": "Doug is in the class and knows JAVA. Universal instantiation gives knowsJAVA(Doug) → highJob(Doug); modus ponens gives highJob(Doug). Conjunction with class(Doug), followed by existential generalization, gives someone in the class who can get a high-paying job.",
        "rubric": [
          "Uses universal instantiation and modus ponens for Doug.",
          "Preserves class membership and applies existential generalization to obtain someone."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Use existential instantiation for the whale watcher, instantiate the pollution rule at that same witness, apply modus ponens, and then use existential generalization.",
        "solution": "Let c be a class member who enjoys whale watching, supplied by existential instantiation. Universal instantiation gives whale(c) → cares(c); modus ponens gives cares(c). Conjoin class(c) with cares(c) and existentially generalize.",
        "rubric": [
          "Introduces one existential witness and uses it consistently.",
          "Derives pollution concern by universal instantiation and modus ponens.",
          "Obtains a class member who cares by conjunction and existential generalization."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Use universal instantiation for Zeke in both universal premises, then modus ponens.",
        "solution": "The 93-student premise instantiated at Zeke gives ownsPC(Zeke). The second premise instantiated at Zeke gives ownsPC(Zeke) → canWordProcess(Zeke). Modus ponens gives the conclusion.",
        "rubric": [
          "Instantiates both universal claims specifically at Zeke.",
          "Uses modus ponens and reaches Zeke’s word-processing ability."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Use existential instantiation for the New Jersey resident who has never seen the ocean, universal instantiation and modus ponens for the distance claim, then conjunction and existential generalization.",
        "solution": "Let c be in New Jersey and never have seen the ocean. Universal instantiation gives NJ(c) → within50(c), and modus ponens gives within50(c). Conjoin within50(c) with neverSeen(c); existential generalization yields the required someone.",
        "rubric": [
          "Uses a single existential witness with both stated properties.",
          "Derives the within-50-miles property by universal instantiation and modus ponens.",
          "Combines distance and never having seen the ocean before existential generalization."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-014",
    "mode": "rubric",
    "answer": "a) Universal instantiation, modus ponens, conjunction as needed, existential generalization. b) Universal instantiation and modus ponens for each roommate, then conjunction. c) Existential instantiation, universal instantiation, modus ponens, conjunction, existential generalization. d) Existential instantiation, universal instantiation, modus ponens, conjunction, existential generalization.",
    "solution": "Specialize every universal statement to a named person or existential witness. Use the corresponding atomic fact with modus ponens. When the conclusion is existential, generalize only after the witness has all required properties; for the five roommates, repeat the universal argument five times.",
    "hints": [
      "“Someone” in a conclusion signals existential generalization at the last step.",
      "In (b), one universal rule must be instantiated separately for each of the five named roommates."
    ],
    "rubric": [
      "Each derivation identifies the correct instantiation, modus ponens, and final generalization or conjunction steps.",
      "No existential witness is changed midway through a derivation.",
      "The Linda, coal-miner, and Louvre conclusions preserve all properties required by their existential conclusions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Instantiate the red-convertible rule at Linda, use modus ponens, combine the ticket conclusion with Linda’s class membership, and existentially generalize.",
        "solution": "Linda owns a red convertible and is in the class. Universal instantiation and modus ponens give speedingTicket(Linda). Conjunction with class(Linda), then existential generalization, gives someone in the class with a speeding ticket.",
        "rubric": [
          "Derives Linda’s ticket using universal instantiation and modus ponens.",
          "Retains class membership and uses existential generalization."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For each of Melissa, Aaron, Ralph, Veneesha, and Keeshawn, instantiate the algorithms rule and apply modus ponens; conjoin the five results.",
        "solution": "Each named roommate has taken discrete mathematics. Universal instantiation at that roommate gives discrete(x) → algorithms(x), and modus ponens gives algorithms(x). Repeating for all five and combining the conclusions establishes that all five can take algorithms.",
        "rubric": [
          "Covers all five named roommates explicitly or by an clearly stated fivefold repetition.",
          "Uses universal instantiation and modus ponens for each."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Use existential instantiation for the coal-miner movie, instantiate the Sayles rule at that movie, apply modus ponens, conjoin the properties, and existentially generalize.",
        "solution": "The production premise supplies a movie c about coal miners produced by Sayles. Universal instantiation gives SaylesProduced(c) → wonderful(c), so modus ponens gives wonderful(c). Conjoin wonderful(c) with coalMinerMovie(c) and use existential generalization.",
        "rubric": [
          "Introduces one movie that is both by Sayles and about coal miners.",
          "Derives wonderful by universal instantiation and modus ponens.",
          "Concludes a wonderful coal-miner movie by existential generalization."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Use existential instantiation for the class member who went to France, then universal instantiation, modus ponens, conjunction to retain class membership, and existential generalization.",
        "solution": "Let c be the class member who has been to France. Universal instantiation gives France(c) → Louvre(c); modus ponens gives Louvre(c). Conjunction retains class(c) with Louvre(c), and existential generalization then yields someone in this class who has visited the Louvre.",
        "rubric": [
          "Uses the same class member throughout.",
          "Derives the Louvre visit by universal instantiation and modus ponens, retains class membership by conjunction, then existentially generalizes."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-015",
    "mode": "rubric",
    "answer": "a) Correct, by universal modus ponens. b) Incorrect: affirming the consequent. c) Incorrect: denying the antecedent. d) Correct, by universal modus tollens.",
    "solution": "Write each universal premise as a conditional. A named instance of the antecedent permits the consequent; a negated instance of the consequent permits the negated antecedent. Merely having the consequent, or lacking the antecedent, does not reverse the conditional.",
    "hints": [
      "For each part, identify whether the second premise matches the antecedent, the consequent, or a negation of one of them.",
      "For an invalid argument, give a situation where the premises are true and the conclusion false."
    ],
    "rubric": [
      "All four correctness classifications are correct.",
      "Valid parts name universal modus ponens or universal modus tollens and show the correct instantiation.",
      "Invalid parts name the logical error and explain or exhibit a counterexample."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Correct: universal instantiation followed by modus ponens (universal modus ponens).",
        "solution": "Instantiate student(x) → understandsLogic(x) at Xavier. The premise student(Xavier) gives understandsLogic(Xavier) by modus ponens.",
        "rubric": [
          "Marks the argument correct and identifies universal modus ponens.",
          "Uses Xavier as the instance of the universal student rule."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Incorrect: affirming the consequent.",
        "solution": "CS(x) → takesDiscrete(x) does not imply takesDiscrete(x) → CS(x). Natasha could be a non-CS major taking discrete mathematics, making both premises true and the conclusion false.",
        "rubric": [
          "Marks the argument incorrect and names affirming the consequent.",
          "Explains that a non-CS student could take discrete mathematics."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Incorrect: denying the antecedent.",
        "solution": "Parrot(x) → likesFruit(x) says nothing about nonparrots. The pet could be a nonparrot that likes fruit, so the premises can be true while the conclusion is false.",
        "rubric": [
          "Marks the argument incorrect and names denying the antecedent.",
          "Explains that nonparrots may also like fruit."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Correct: universal instantiation followed by modus tollens (universal modus tollens).",
        "solution": "Instantiate eatsGranolaDaily(x) → healthy(x) at Linda. Since ¬healthy(Linda), modus tollens gives ¬eatsGranolaDaily(Linda).",
        "rubric": [
          "Marks the argument correct and identifies universal modus tollens.",
          "Uses Linda’s lack of health to deny the consequent."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-016",
    "mode": "rubric",
    "answer": "a) Correct, by universal modus tollens. b) Incorrect: denying the antecedent. c) Incorrect: affirming the consequent. d) Correct, by universal modus ponens.",
    "solution": "The valid arguments either affirm an instantiated antecedent or deny an instantiated consequent. The invalid ones treat a one-way conditional as though it were reversible.",
    "hints": [
      "A convertible is fun does not say that only convertibles are fun.",
      "Liking every action movie does not say that action movies are the only movies Quincy likes."
    ],
    "rubric": [
      "All four validity classifications are correct.",
      "The two invalid arguments include the named fallacy and a counterexample or equivalent explanation.",
      "The two valid arguments identify the correct universal rule and instantiation."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Correct: universal modus tollens.",
        "solution": "Instantiate enrolled(x) → livedInDorm(x) at Mia. Mia’s never having lived in a dormitory denies the consequent, so modus tollens gives ¬enrolled(Mia).",
        "rubric": [
          "Marks the argument correct and names universal modus tollens.",
          "Correctly denies the dormitory consequent for Mia."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Incorrect: denying the antecedent.",
        "solution": "Convertible(x) → fun(x) does not entail ¬convertible(x) → ¬fun(x). Isaac’s nonconvertible could still be fun to drive.",
        "rubric": [
          "Marks the argument incorrect and names denying the antecedent.",
          "Explains that a nonconvertible can be fun."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Incorrect: affirming the consequent.",
        "solution": "ActionMovie(x) → QuincyLikes(x) cannot be reversed. Eight Men Out could be a non-action movie that Quincy also likes, making the premises true and conclusion false.",
        "rubric": [
          "Marks the argument incorrect and names affirming the consequent.",
          "Explains that Quincy may like movies outside the action category."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Correct: universal modus ponens.",
        "solution": "Instantiate lobsterman(x) → setsAtLeastDozenTraps(x) at Hamilton. Hamilton being a lobsterman affirms the antecedent, yielding the trap conclusion by modus ponens.",
        "rubric": [
          "Marks the argument correct and names universal modus ponens.",
          "Uses Hamilton as the instance and preserves “at least a dozen.”"
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-017",
    "mode": "rubric",
    "answer": "Existential instantiation does not justify choosing Lola. The premise says only that some domain element is happy, not that every named individual is happy.",
    "solution": "From ∃xH(x), one may introduce a fresh witness c and assert H(c), with no additional assumptions about c. Lola is a previously specified individual and need not be such a witness. For a counterexample, let only Ada be happy and Lola unhappy: ∃xH(x) is true while H(Lola) is false.",
    "hints": [
      "Does “someone is happy” identify who that someone is?",
      "Existential instantiation requires a new, otherwise unrestricted name for a witness."
    ],
    "rubric": [
      "Identifies the invalid existential instantiation from ∃xH(x) to H(Lola).",
      "Explains the fresh-witness requirement or that the premise does not specify Lola.",
      "Supplies a counterexample or an equivalent truth-based explanation."
    ],
    "readAloud": "There exists an x such that H of x means at least one thing is happy; it does not name Lola as that thing.",
    "verify": "A domain with one happy person other than Lola satisfies the premise but falsifies the conclusion."
  },
  {
    "id": "rosen-ch1-ex-1-6-018",
    "mode": "rubric",
    "answer": "The step from ∃sS(s,Max) to S(Max,Max) is unjustified. Existential instantiation gives S(c,Max) for some fresh witness c, not necessarily Max.",
    "solution": "The premise says something is shorter than Max. Introduce c with S(c,Max); there is no basis for replacing c by Max. Thus S(Max,Max) cannot be inferred, and the later existential generalization to ∃xS(x,x) rests on that false step. A domain with one person shorter than Max but Max not shorter than himself is a counterexample.",
    "hints": [
      "The existentially quantified variable is the first argument of S, while Max is fixed in the second argument.",
      "An existential witness cannot be assumed to have an extra identity such as c = Max."
    ],
    "rubric": [
      "Pinpoints the invalid step to S(Max,Max), rather than blaming existential generalization itself.",
      "States that existential instantiation yields S(c,Max) for an unspecified fresh c.",
      "Explains why no self-shortening conclusion follows, optionally with a counterexample."
    ],
    "readAloud": "There exists s such that s is shorter than Max. The witness is the shorter thing; nothing says that witness is Max.",
    "verify": "Let c be shorter than Max and impose no shorter-than relation from Max to Max. The premise holds, but S(Max,Max) fails."
  },
  {
    "id": "rosen-ch1-ex-1-6-019",
    "mode": "rubric",
    "answer": "a) Invalid: affirming the consequent; n = −2 is a counterexample. b) Valid: modus tollens. c) Invalid: denying the antecedent; n = −3 is a counterexample.",
    "solution": "Translate each numerical statement into p → q and inspect the second premise. In (a), n² > 1 is q, not p. In (b), n² ≤ 9 is ¬q and n ≤ 3 is ¬p, exactly modus tollens. In (c), n ≤ 2 is ¬p, which does not imply ¬q for real numbers.",
    "hints": [
      "For real n, a large square does not reveal whether n itself is positive or negative.",
      "In (b), rewrite n² ≤ 9 as ¬(n² > 9) and n ≤ 3 as ¬(n > 3)."
    ],
    "rubric": [
      "All three validity decisions and named inference patterns are correct.",
      "Part (b) explicitly matches modus tollens including both negations.",
      "Parts (a) and (c) include valid numerical counterexamples or equivalent explanations involving negative n."
    ],
    "readAloud": "For real numbers, n squared greater than a positive bound means the absolute value of n is large; it does not by itself make n positive.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Invalid: affirming the consequent. Take n = −2; then n² = 4 > 1, but n > 1 is false.",
        "solution": "The conditional is n > 1 → n² > 1. Assuming its consequent n² > 1 does not establish its antecedent n > 1, as the negative counterexample shows.",
        "rubric": [
          "Identifies affirming the consequent and invalidity.",
          "Uses n = −2 or another n ≤ −1 with n² > 1 to refute validity."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Valid by modus tollens.",
        "solution": "Let p be n > 3 and q be n² > 9. The premises are p → q and ¬q, since n² ≤ 9 is ¬q. Modus tollens gives ¬p, namely n ≤ 3.",
        "rubric": [
          "Identifies validity and modus tollens.",
          "Correctly translates both inequalities as negations of q and p."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Invalid: denying the antecedent. Take n = −3; then n ≤ 2 is true, but n² = 9 ≤ 4 is false.",
        "solution": "The conditional n > 2 → n² > 4 gives no information when n > 2 is false. Negative numbers can have arbitrarily large squares.",
        "rubric": [
          "Identifies denying the antecedent and invalidity.",
          "Uses n = −3 or another negative n with square greater than 4."
        ]
      }
    ],
    "verify": "Check (a) at n = −2 and (c) at n = −3; for (b), the contrapositive is n² ≤ 9 → n ≤ 3, which is exactly the supplied argument."
  },
  {
    "id": "rosen-ch1-ex-1-6-020",
    "mode": "rubric",
    "answer": "a) Invalid: affirming the consequent; a = −1 is a counterexample. b) Valid, by universal instantiation and modus ponens.",
    "solution": "In (a), the premise is x > 0 → x² > 0. The assertion a² > 0 affirms the consequent and cannot imply a > 0. In (b), instantiate x² ≠ 0 → x ≠ 0 at a, then use the given a² ≠ 0 to obtain a ≠ 0.",
    "hints": [
      "A positive square has both a positive and a negative square root.",
      "In (b), the second premise matches the antecedent after substituting a for x."
    ],
    "rubric": [
      "Classifies (a) as invalid and supplies a negative counterexample.",
      "Classifies (b) as valid and justifies it with universal instantiation and modus ponens.",
      "Distinguishes positivity of a square from positivity of its real base."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Invalid: affirming the consequent. For a = −1, a² = 1 is positive but a is not positive.",
        "solution": "The universal premise only guarantees a positive square from a positive base. It does not assert the converse, and negative reals provide counterexamples.",
        "rubric": [
          "Identifies invalidity and affirming the consequent.",
          "Gives a = −1 or another negative real counterexample."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Valid: universal instantiation followed by modus ponens.",
        "solution": "Universal instantiation at a gives a² ≠ 0 → a ≠ 0. The premise a² ≠ 0 then yields a ≠ 0 by modus ponens.",
        "rubric": [
          "Identifies validity and the two inference steps.",
          "Uses a consistently as the instantiation."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-021",
    "mode": "rubric",
    "answer": "Existential instantiation, universal instantiation, modus ponens, conjunction, and existential generalization establish the conclusion.",
    "solution": "From ∃x(P(x) ∧ ¬R(x)), existential instantiation gives a creature c with P(c) and ¬R(c); simplification separates these facts. Universal instantiation of ∀x(P(x) → Q(x)) gives P(c) → Q(c), and modus ponens gives Q(c). Conjunction gives Q(c) ∧ ¬R(c), and existential generalization gives ∃x(Q(x) ∧ ¬R(x)): some fierce creature does not drink coffee.",
    "hints": [
      "Start with “some lions do not drink coffee” because it supplies a particular witnessing creature.",
      "Use that same creature for the universal lion rule and for the final conjunction."
    ],
    "rubric": [
      "Introduces one existential witness that is a lion and does not drink coffee.",
      "Uses universal instantiation and modus ponens to show that witness is fierce.",
      "Combines fierceness with not drinking coffee and applies existential generalization to reach the exact conclusion."
    ],
    "readAloud": "P means lion, Q means fierce, and R means drinks coffee. From P of c and not R of c, derive Q of c, then conclude Q and not R for that same c.",
    "startHere": "Choose c as the lion mentioned by the existential premise and track the three facts P(c), Q(c), and ¬R(c)."
  },
  {
    "id": "rosen-ch1-ex-1-6-022",
    "mode": "rubric",
    "answer": "Universal instantiation, modus ponens, universal modus tollens (using contrapositives), and universal generalization establish ∀x(P(x) → ¬Q(x)): hummingbirds are small.",
    "solution": "Let P, Q, R, S mean hummingbird, large, lives on honey, and richly colored. Fix an arbitrary bird c and assume P(c). From P(c) → S(c), modus ponens gives S(c). The premise ¬R(c) → ¬S(c), together with S(c), gives R(c) by modus tollens. “No large birds live on honey” gives Q(c) → ¬R(c), so R(c) gives ¬Q(c), again by modus tollens. Thus P(c) → ¬Q(c) by conditional proof, and universal generalization gives ∀x(P(x) → ¬Q(x)). Equivalently, use contrapositives S(c) → R(c) and R(c) → ¬Q(c) in a chain.",
    "hints": [
      "Rewrite “birds that do not live on honey are dull” as ¬R → ¬S, whose contrapositive is S → R.",
      "Rewrite “no large birds live on honey” as Q → ¬R, whose contrapositive is R → ¬Q."
    ],
    "rubric": [
      "Correctly translates the three universal premises and fixes an arbitrary hummingbird or assumes P(c).",
      "Derives S(c), then R(c), then ¬Q(c) using valid contrapositive or modus tollens steps.",
      "Discharges P(c) to obtain P(c) → ¬Q(c) and applies universal generalization.",
      "Concludes that hummingbirds are not large, equivalently small in the intended large/small terminology."
    ],
    "readAloud": "Richly colored implies lives on honey by the contrapositive of the dull-color rule; living on honey implies not large by the contrapositive of the no-large-birds rule.",
    "verify": "Chain the three conditionals P → S, S → R, and R → ¬Q. The outer result is P → ¬Q, exactly the required conclusion."
  },
  {
    "id": "rosen-ch1-ex-1-6-023",
    "mode": "rubric",
    "answer": "Simplification is invalid on the displayed disjunction in lines 2 and 4. Even if the intended premise were the conjunction stated in the prose, line 5 is invalid because a second existential instantiation requires a fresh witness, not necessarily the same c. The claimed conclusion does not follow.",
    "solution": "Simplification applies to p ∧ q, not p ∨ q, so neither ∃xP(x) nor ∃xQ(x) follows from the displayed ∃xP(x) ∨ ∃xQ(x). Under the intended stronger premise ∃xP(x) ∧ ∃xQ(x), lines 2 and 4 would be valid, but P(c) and Q(c) need not hold for the same object: from ∃xQ(x) one must use a fresh d and write Q(d). For a countermodel, use domain {a,b}, with P true only at a and Q true only at b. Then ∃xP(x) ∧ ∃xQ(x) is true but ∃x(P(x) ∧ Q(x)) is false.",
    "hints": [
      "Check the connective in line 1 before accepting a rule labeled simplification.",
      "Two separate existential quantifiers can have different witnesses."
    ],
    "rubric": [
      "Identifies that simplification cannot be applied to the disjunction printed in line 1.",
      "Identifies the reused-witness error at line 5 under the conjunction interpretation in the prose.",
      "Explains that separate P and Q witnesses need not coincide, with a countermodel or equivalent reasoning.",
      "Does not treat the displayed malformed derivation as a proof of the stated implication."
    ],
    "startHere": "Translate the intended premise as “something has P and something has Q,” then ask whether those two somethings must be identical.",
    "verify": "In the two-element countermodel, a witnesses P and b witnesses Q, while neither element has both properties."
  },
  {
    "id": "rosen-ch1-ex-1-6-024",
    "mode": "rubric",
    "answer": "Lines 3 and 5 misuse simplification: P(c) ∨ Q(c) yields neither P(c) nor Q(c). Consequently the universal generalizations and final conclusion are unsupported; the displayed last line also does not match the claimed disjunction.",
    "solution": "Universal instantiation in line 2 is valid, but simplification applies to a conjunction, not a disjunction. From P(c) ∨ Q(c), only one of the alternatives must hold, and different c may satisfy different alternatives. For a countermodel, take domain {a,b}, let P hold only at a and Q hold only at b. Then ∀x(P(x) ∨ Q(x)) is true, but both ∀xP(x) and ∀xQ(x) are false, so ∀xP(x) ∨ ∀xQ(x) is false. Also, conjunction of universally quantified statements would produce (∀xP(x)) ∧ (∀xQ(x)), not the asserted conclusion.",
    "hints": [
      "A disjunction guarantees at least one alternative, not a particular one.",
      "Try a two-element domain where one element supplies P and the other supplies Q."
    ],
    "rubric": [
      "Identifies both invalid simplification steps from the disjunction.",
      "Explains why the subsequent universal generalizations do not repair the error.",
      "Provides a countermodel or clear argument showing the premise can be true while the claimed disjunctive conclusion is false.",
      "Notes any final-line mismatch without confusing conjunction with disjunction."
    ],
    "readAloud": "For every x, P of x or Q of x means each object has at least one property. It does not mean one fixed property holds for every object.",
    "verify": "At a use P true and Q false; at b use P false and Q true. Every object satisfies P ∨ Q, but neither property is universal."
  },
  {
    "id": "rosen-ch1-ex-1-6-025",
    "mode": "rubric",
    "answer": "Universal instantiation followed by modus tollens proves ¬P(a).",
    "solution": "Instantiate ∀x(P(x) → Q(x)) at the particular element a to obtain P(a) → Q(a). The second premise is ¬Q(a). Modus tollens therefore gives ¬P(a). This justifies universal modus tollens.",
    "hints": [
      "Replace x by the particular element a throughout the universal conditional.",
      "The premise ¬Q(a) denies the consequent of the instantiated conditional."
    ],
    "rubric": [
      "Explicitly derives P(a) → Q(a) by universal instantiation.",
      "Combines it with ¬Q(a) using modus tollens.",
      "Concludes ¬P(a) for the same element a."
    ],
    "readAloud": "For all x, P of x implies Q of x. At a, this says P of a implies Q of a; but Q of a is false, so P of a must be false.",
    "verify": "If P(a) were true, modus ponens would give Q(a), contradicting ¬Q(a)."
  },
  {
    "id": "rosen-ch1-ex-1-6-026",
    "mode": "rubric",
    "answer": "For an arbitrary c, instantiate both universals at c, apply hypothetical syllogism, and then use universal generalization.",
    "solution": "Let c be an arbitrary element of the common domain. Universal instantiation gives P(c) → Q(c) and Q(c) → R(c). Hypothetical syllogism gives P(c) → R(c). Since c was arbitrary and no special assumptions were made about it, universal generalization yields ∀x(P(x) → R(x)).",
    "hints": [
      "Choose one arbitrary domain element and specialize both premises to that same element.",
      "The consequent Q(c) of the first conditional is the antecedent of the second."
    ],
    "rubric": [
      "Introduces an arbitrary c in the common domain.",
      "Uses universal instantiation for both conditionals and hypothetical syllogism at c.",
      "Justifies universal generalization and obtains exactly ∀x(P(x) → R(x))."
    ],
    "readAloud": "At an arbitrary c, P implies Q and Q implies R; therefore P implies R. Since c was arbitrary, the result holds for every x.",
    "startHere": "Write the two conditionals vertically with Q(c) as the shared middle statement."
  },
  {
    "id": "rosen-ch1-ex-1-6-027",
    "mode": "rubric",
    "answer": "For arbitrary c, derive P(c), R(c), Q(c), and S(c), conjoin R(c) ∧ S(c), and universally generalize.",
    "solution": "Let c be arbitrary. Universal instantiation of the second premise gives P(c) ∧ R(c), so simplification gives P(c) and R(c). Universal instantiation of the first premise gives P(c) → (Q(c) ∧ S(c)); modus ponens gives Q(c) ∧ S(c), and simplification gives S(c). Conjunction gives R(c) ∧ S(c). Universal generalization gives ∀x(R(x) ∧ S(x)).",
    "hints": [
      "The second premise directly supplies P(c) as well as R(c).",
      "Use P(c) to unlock Q(c) ∧ S(c), then retain only S(c) for the requested conjunction."
    ],
    "rubric": [
      "Instantiates both universal premises at one arbitrary c.",
      "Derives P(c) and R(c) by simplification and Q(c) ∧ S(c) by modus ponens.",
      "Uses conjunction to obtain R(c) ∧ S(c) and universal generalization for the final result."
    ],
    "startHere": "At arbitrary c, make a checklist of the two target facts R(c) and S(c); R comes from the second premise and S from the first.",
    "verify": "Every line follows from UI, simplification, modus ponens, or conjunction; no property is generalized before c is known to be arbitrary."
  },
  {
    "id": "rosen-ch1-ex-1-6-028",
    "mode": "rubric",
    "answer": "For arbitrary c, assume ¬R(c). Modus tollens and De Morgan’s law give P(c) ∨ ¬Q(c); resolving this with P(c) ∨ Q(c) gives P(c). Thus ¬R(c) → P(c), and universal generalization finishes the proof.",
    "solution": "Fix arbitrary c and instantiate both premises: P(c) ∨ Q(c) and (¬P(c) ∧ Q(c)) → R(c). To prove the conditional, assume ¬R(c). Modus tollens gives ¬(¬P(c) ∧ Q(c)), equivalently P(c) ∨ ¬Q(c) by De Morgan’s law and double negation. Resolution of P(c) ∨ Q(c) with P(c) ∨ ¬Q(c) yields P(c) (or use a two-case disjunction argument). Discharging the assumption gives ¬R(c) → P(c); universal generalization gives the required universal statement.",
    "hints": [
      "To prove an implication, temporarily assume its antecedent ¬R(c).",
      "After modus tollens, De Morgan’s law produces P(c) ∨ ¬Q(c), which can be resolved with the first premise."
    ],
    "rubric": [
      "Fixes arbitrary c and correctly instantiates both universal premises.",
      "Assumes ¬R(c), applies modus tollens, and transforms the negated conjunction into P(c) ∨ ¬Q(c).",
      "Validly combines that disjunction with P(c) ∨ Q(c) to derive P(c).",
      "Discharges the conditional assumption and applies universal generalization to reach the exact conclusion."
    ],
    "readAloud": "The second premise says: if not P and Q, then R. Assuming not R rules out “not P and Q”; together with “P or Q,” this forces P.",
    "verify": "Case check: if P(c) is true the target holds; if P(c) is false, the first premise forces Q(c), making ¬P(c) ∧ Q(c) true, hence R(c) true, so ¬R(c) is impossible."
  },
  {
    "id": "rosen-ch1-ex-1-6-029",
    "mode": "rubric",
    "answer": "Existential instantiation gives c with ¬P(c). Then disjunctive syllogism twice gives Q(c) and S(c); modus tollens gives ¬R(c), and existential generalization gives ∃x¬R(x).",
    "solution": "From ∃x¬P(x), introduce a fresh witness c with ¬P(c). Instantiate ∀x(P(x) ∨ Q(x)) at c; disjunctive syllogism with ¬P(c) gives Q(c). Instantiate ∀x(¬Q(x) ∨ S(x)) at c; since Q(c) rules out ¬Q(c), disjunctive syllogism gives S(c). Instantiate ∀x(R(x) → ¬S(x)) at c. Because S(c) contradicts ¬S(c), modus tollens gives ¬R(c). Existential generalization gives ∃x¬R(x).",
    "hints": [
      "Use the existential premise first so that the same witness c can be tracked through every universal premise.",
      "From S(c) and R(c) → ¬S(c), deny the consequent to obtain ¬R(c)."
    ],
    "rubric": [
      "Introduces a fresh c satisfying ¬P(c) and uses that same c throughout.",
      "Derives Q(c) and S(c) by two correctly explained disjunctive syllogisms.",
      "Derives ¬R(c) by modus tollens and finishes with existential generalization.",
      "Does not incorrectly generalize from the existential premise to all x."
    ],
    "readAloud": "Some x has not P. Call one such x c. The first two disjunctions then force Q of c and S of c; the last conditional forces not R of c.",
    "startHere": "Make a four-row trace for c: start with ¬P(c), then fill in Q(c), S(c), and ¬R(c) in that order."
  },
  {
    "id": "rosen-ch1-ex-1-6-030",
    "mode": "rubric",
    "answer": "Resolving the two premises on “Allen is a good boy” yields “Hillary is a good girl or David is happy.”",
    "solution": "Let A mean Allen is a good boy, H mean Hillary is a good girl, and D mean David is happy. “Allen is a bad boy” is ¬A, so the premises are ¬A ∨ H and A ∨ D. They contain the complementary literals A and ¬A. Resolution cancels these and combines the remaining literals to give H ∨ D, exactly the conclusion.",
    "hints": [
      "Treat “bad boy” as the negation of the propositional variable “Allen is a good boy.”",
      "Cancel the complementary Allen literals and retain the other two disjuncts."
    ],
    "rubric": [
      "Defines or clearly identifies the complementary Allen literals ¬A and A.",
      "Represents the premises as ¬A ∨ H and A ∨ D.",
      "Uses one resolution step on A and obtains exactly H ∨ D."
    ],
    "readAloud": "Not A or H, together with A or D, resolves on A to give H or D.",
    "startHere": "Write A above the first premise’s “bad boy” phrase as a reminder to negate that literal.",
    "verify": "If A is true, the first premise forces H; if A is false, the second forces D. In either case H ∨ D is true."
  },
  {
    "id": "rosen-ch1-ex-1-6-031",
    "mode": "rubric",
    "answer": "Two resolution steps yield “Yvette does not get wet.”",
    "solution": "Let R mean it is raining, U mean Yvette has her umbrella, and W mean Yvette gets wet. The premises are ¬R ∨ U, ¬U ∨ ¬W, and R ∨ ¬W. Resolve the first and third on R to obtain U ∨ ¬W. Resolve this with ¬U ∨ ¬W on U to obtain ¬W ∨ ¬W, which simplifies to ¬W.",
    "hints": [
      "First eliminate R using the two clauses that contain R and ¬R.",
      "The resulting clause and the umbrella clause then eliminate U; duplicate ¬W is just ¬W."
    ],
    "rubric": [
      "Correctly translates all three statements into clauses, using W for getting wet and ¬W for not getting wet.",
      "Resolves on R to derive U ∨ ¬W.",
      "Resolves on U and simplifies duplicate literals to conclude ¬W."
    ],
    "readAloud": "Not R or U, and R or not W, resolve to U or not W. Combine this with not U or not W to get not W.",
    "verify": "Case split on R: if R is false, U follows and then ¬W; if R is true, the third premise directly gives ¬W."
  },
  {
    "id": "rosen-ch1-ex-1-6-032",
    "mode": "rubric",
    "answer": "Resolution gives (p ∧ ¬p) → F. Since F → (p ∧ ¬p) is vacuously true, p ∧ ¬p and F imply each other, so p ∧ ¬p ≡ F.",
    "solution": "The resolution tautology is ((p ∨ q) ∧ (¬p ∨ r)) → (q ∨ r). Substitute q = F and r = F. Because p ∨ F ≡ p, ¬p ∨ F ≡ ¬p, and F ∨ F ≡ F, this becomes (p ∧ ¬p) → F. Conversely, F → (p ∧ ¬p) is true because its hypothesis F is false. The two conditionals establish the biconditional p ∧ ¬p ↔ F, hence the required equivalence.",
    "hints": [
      "Start with resolution in the form ((p ∨ q) ∧ (¬p ∨ r)) → (q ∨ r).",
      "An equivalence needs both directions; resolution supplies one, and the false-antecedent fact supplies the other."
    ],
    "rubric": [
      "States the resolution rule and substitutes q = r = F correctly.",
      "Simplifies the result to (p ∧ ¬p) → F.",
      "Uses F → (p ∧ ¬p) being vacuously true to establish the reverse direction and concludes equivalence."
    ],
    "readAloud": "Resolution says that if p or q and not p or r, then q or r. With q and r both false, p and not p would imply falsehood.",
    "verify": "Truth-table check: p ∧ ¬p is false whether p is true or false, matching F in every row."
  },
  {
    "id": "rosen-ch1-ex-1-6-033",
    "mode": "rubric",
    "answer": "Resolution derives q from the first two clauses and ¬q from the last two; resolving q with ¬q gives the empty clause, so the proposition is unsatisfiable.",
    "solution": "Resolve p ∨ q with ¬p ∨ q on p to obtain q ∨ q ≡ q. Resolve p ∨ ¬q with ¬p ∨ ¬q on p to obtain ¬q ∨ ¬q ≡ ¬q. Finally resolve q and ¬q to obtain the empty clause, a contradiction. Resolution preserves satisfiability, so no truth assignment satisfies the original conjunction.",
    "hints": [
      "Pair the clauses by their second literal: the first two both contain q, and the last two both contain ¬q.",
      "Deriving both q and ¬q is a contradiction; the final resolvent is the empty clause."
    ],
    "rubric": [
      "Derives q by resolving the first two clauses on p.",
      "Derives ¬q by resolving the last two clauses on p.",
      "Resolves q and ¬q to the empty clause and concludes unsatisfiability."
    ],
    "readAloud": "The first pair of clauses forces q; the second pair forces not q. Both cannot hold, so there is no satisfying assignment.",
    "verify": "For q true, the clause p ∨ ¬q forces p true while ¬p ∨ ¬q forces p false; for q false, the first two clauses similarly force both p values. All four assignments fail."
  },
  {
    "id": "rosen-ch1-ex-1-6-034",
    "mode": "rubric",
    "answer": "Let L mean logic is difficult, M mean many students like logic, and E mean mathematics is easy. The premises are L ∨ ¬M and E → ¬L (equivalently ¬E ∨ ¬L). a) Valid. b) Invalid. c) Invalid. d) Valid. e) Valid.",
    "solution": "For (a), M and L ∨ ¬M give L by disjunctive syllogism; the contrapositive of E → ¬L is L → ¬E, so ¬E follows. For (b), even with ¬E, choose E false, M true, L true: the premises hold but ¬M is false. For (c), choose E true, L false, M false: both premises hold but ¬E ∨ L is false. Part (d), ¬L ∨ ¬E, is exactly the clause form of the second premise. Part (e) has consequent ¬E ∨ ¬L, already true by (d), so ¬M → (¬E ∨ ¬L) is valid regardless of ¬M.",
    "hints": [
      "Translate “or not many” as L ∨ ¬M, not ¬(L ∨ M).",
      "A conditional with a consequent already entailed by the premises is itself entailed.",
      "For an invalid conclusion, exhibit truth values satisfying all premises and any added hypothesis while falsifying the conclusion."
    ],
    "rubric": [
      "Defines L, M, E and translates both premises correctly.",
      "Correctly classifies all five proposed conclusions as valid, invalid, invalid, valid, valid.",
      "Justifies (a), (d), and (e) by valid inference or equivalence.",
      "Supplies countermodels for (b) and (c), including any extra hypothesis stated in the part."
    ],
    "readAloud": "L or not M means logic is difficult or not many students like logic. E arrow not L means if mathematics is easy, logic is not difficult.",
    "startHere": "Convert E → ¬L into the clause ¬E ∨ ¬L immediately; this makes parts (d) and (e) especially visible.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Valid: with M as an added hypothesis, ¬E follows.",
        "solution": "M and L ∨ ¬M give L by disjunctive syllogism. Then L and E → ¬L give ¬E by modus tollens, equivalently modus ponens on the contrapositive L → ¬E.",
        "rubric": [
          "Derives L from M and the first premise.",
          "Uses the second premise validly to conclude mathematics is not easy."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Invalid: ¬E does not imply ¬M from the premises.",
        "solution": "Take E = false, M = true, L = true. Then the extra hypothesis ¬E holds, L ∨ ¬M is true through L, and E → ¬L is vacuously true, but the proposed conclusion ¬M is false.",
        "rubric": [
          "Marks the conclusion invalid.",
          "Gives the countermodel E false, M true, L true, or an equivalent one, and checks that it satisfies the premises and ¬E."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Invalid: ¬E ∨ L does not follow.",
        "solution": "Take E = true, L = false, M = false. The first premise is true through ¬M and the second is true because ¬L is true, but ¬E ∨ L is false.",
        "rubric": [
          "Marks the conclusion invalid.",
          "Gives E true, L false, M false or an equivalent countermodel and verifies both premises."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Valid: ¬L ∨ ¬E is equivalent to the second premise E → ¬L.",
        "solution": "Use p → q ≡ ¬p ∨ q with p = E and q = ¬L. Thus E → ¬L ≡ ¬E ∨ ¬L, which is the proposed disjunction up to commutativity.",
        "rubric": [
          "Marks the conclusion valid.",
          "Uses the implication-to-disjunction equivalence with the negation on E, not on L alone."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Valid: the consequent ¬E ∨ ¬L is already entailed, so ¬M → (¬E ∨ ¬L) follows.",
        "solution": "Part (d) establishes ¬E ∨ ¬L from the second premise. A conditional whose consequent is true under the premises is true under them, regardless of whether ¬M holds. Addition also gives (¬E ∨ ¬L) ∨ M, equivalent to ¬M → (¬E ∨ ¬L).",
        "rubric": [
          "Marks the conclusion valid.",
          "Explains that the consequent is already guaranteed, or gives the equivalent addition/implication derivation."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-6-035",
    "mode": "rubric",
    "answer": "The argument is valid: Superman does not exist follows by modus tollens, De Morgan’s law, a two-case disjunction argument, and another modus tollens.",
    "solution": "Let A, W, P, I, M, and E mean Superman is able, willing, prevents evil, is impotent, is malevolent, and exists. The premises are (A ∧ W) → P, ¬A → I, ¬W → M, ¬P, and E → (¬I ∧ ¬M). From ¬P and the first premise, modus tollens gives ¬(A ∧ W), hence ¬A ∨ ¬W. If ¬A, then I by modus ponens; if ¬W, then M by modus ponens. Therefore I ∨ M. But E would give ¬I ∧ ¬M, contradicting I ∨ M; formally, modus tollens applied to E → (¬I ∧ ¬M) and ¬(¬I ∧ ¬M) gives ¬E.",
    "hints": [
      "Use ¬P with the first premise to show that Superman is unable or unwilling.",
      "The two middle conditionals turn those alternatives into impotent or malevolent, exactly what existence rules out."
    ],
    "rubric": [
      "Defines propositional variables and translates all five premises accurately, including E → (¬I ∧ ¬M).",
      "Derives ¬A ∨ ¬W from (A ∧ W) → P and ¬P by modus tollens and De Morgan’s law.",
      "Derives I ∨ M by cases or resolution from ¬A → I and ¬W → M.",
      "Uses the existence premise and modus tollens to conclude ¬E, identifying the argument as valid."
    ],
    "readAloud": "If Superman is able and willing, he prevents evil. He does not, so he is not able or not willing. Those cases make him impotent or malevolent; existence excludes both, so he does not exist.",
    "startHere": "Work backward from the target ¬E: to use modus tollens on the existence premise, derive the negation of ¬I ∧ ¬M, namely I ∨ M.",
    "verify": "Check both branches of ¬A ∨ ¬W: inability gives I and unwillingness gives M. Either branch contradicts the properties required if E were true."
  },
  {
    "id": "rosen-ch1-ex-1-7-001",
    "mode": "rubric",
    "answer": "If m and n are odd integers, write m = 2a + 1 and n = 2b + 1 for integers a and b. Then m + n = 2(a + b + 1), which is even.",
    "solution": "Use the definition of odd, expand the sum, and factor out 2. Since a + b + 1 is an integer, the result has the required form 2k.",
    "hints": [
      "Write each odd integer as 2 times an integer plus 1.",
      "After adding, factor the expression as 2 times an integer."
    ],
    "rubric": [
      "Represents two arbitrary odd integers as 2a + 1 and 2b + 1.",
      "Expands their sum and rewrites it as 2(a + b + 1).",
      "Concludes evenness because a + b + 1 is an integer."
    ],
    "readAloud": "Two a plus one means one more than an even integer; adding two such expressions leaves a multiple of two.",
    "startHere": "Translate “odd” into the algebraic form 2k + 1 before doing any arithmetic.",
    "verify": "For example, 7 = 2(3) + 1 and 11 = 2(5) + 1, and their sum 18 = 2(9) is even."
  },
  {
    "id": "rosen-ch1-ex-1-7-002",
    "mode": "rubric",
    "answer": "If m and n are even integers, write m = 2a and n = 2b for integers a and b. Then m + n = 2(a + b), so m + n is even.",
    "solution": "Substitute the definition of even for both integers and factor 2 from the sum. The integer a + b supplies the required multiplier.",
    "hints": [
      "An even integer has the form 2k.",
      "Factor 2 from 2a + 2b."
    ],
    "rubric": [
      "Represents arbitrary even integers as 2a and 2b.",
      "Derives m + n = 2(a + b).",
      "Explicitly concludes that the sum is even."
    ],
    "startHere": "Replace “even” by “2 times an integer” for each addend.",
    "verify": "The calculation remains valid for negative and zero even integers because a and b may be any integers."
  },
  {
    "id": "rosen-ch1-ex-1-7-003",
    "mode": "rubric",
    "answer": "Let n be even, so n = 2k for some integer k. Then n² = (2k)² = 4k² = 2(2k²), and 2k² is an integer. Therefore n² is even.",
    "solution": "A direct proof starts with n = 2k and squares both sides. Factoring 4k² as 2(2k²) displays n² in the definition of an even integer.",
    "hints": [
      "Set n = 2k and square the whole expression.",
      "Write 4k² as 2 times an integer."
    ],
    "rubric": [
      "Uses n = 2k for an arbitrary even integer n.",
      "Correctly computes n² = 4k² = 2(2k²).",
      "Concludes evenness using integrality of 2k²."
    ],
    "readAloud": "The square of two k is four k squared, which is two times two k squared.",
    "verify": "Check the form on n = −4: n² = 16 = 2(8), as predicted."
  },
  {
    "id": "rosen-ch1-ex-1-7-004",
    "mode": "rubric",
    "answer": "Let n be even, so n = 2k for some integer k. Its additive inverse is −n = −2k = 2(−k). Because −k is an integer, −n is even.",
    "solution": "Negate the standard representation n = 2k. The resulting multiplier −k is still an integer, which proves the claim directly.",
    "hints": [
      "Negate both sides of n = 2k.",
      "Remember that the negative of an integer is an integer."
    ],
    "rubric": [
      "Starts with an arbitrary even n = 2k.",
      "Derives −n = 2(−k).",
      "Uses integrality of −k to conclude that −n is even."
    ],
    "verify": "The proof includes n = 0, whose additive inverse 0 is even."
  },
  {
    "id": "rosen-ch1-ex-1-7-005",
    "mode": "rubric",
    "answer": "A direct proof gives the result. Write m + n = 2a and n + p = 2b. Adding yields m + 2n + p = 2(a + b), so m + p = 2(a + b − n), an even integer.",
    "solution": "Assume both hypotheses, add their even representations, and subtract 2n. Since a + b − n is an integer, m + p is even. The proof proceeds directly from the hypotheses, so it is a direct proof.",
    "hints": [
      "Represent m + n and n + p as 2a and 2b.",
      "Add the equations, then isolate m + p."
    ],
    "rubric": [
      "Correctly introduces integer witnesses for both even hypotheses.",
      "Derives m + p = 2(a + b − n) or an equivalent expression.",
      "Concludes that m + p is even and identifies the method as a direct proof."
    ],
    "startHere": "The target m + p is the sum of the two given expressions minus 2n.",
    "verify": "The subtracted term 2n is even, so it cannot change the parity of the result."
  },
  {
    "id": "rosen-ch1-ex-1-7-006",
    "mode": "rubric",
    "answer": "Let m = 2a + 1 and n = 2b + 1 be odd integers. Then mn = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1. Since 2ab + a + b is an integer, mn is odd.",
    "solution": "Multiply the two algebraic forms for odd integers. Separate the result into an even part plus 1, which exactly matches the definition of odd.",
    "hints": [
      "Expand (2a + 1)(2b + 1).",
      "Group every term except the final 1 inside 2(…)."
    ],
    "rubric": [
      "Uses two arbitrary odd integers 2a + 1 and 2b + 1.",
      "Expands and factors the product as 2(2ab + a + b) + 1.",
      "Concludes that the product is odd."
    ],
    "readAloud": "The product is two times an integer plus one, which is precisely the form of an odd integer.",
    "verify": "For m = n = 3, the formula gives 2(2·1·1 + 1 + 1) + 1 = 9."
  },
  {
    "id": "rosen-ch1-ex-1-7-007",
    "mode": "rubric",
    "answer": "Every odd integer n has the form n = 2k + 1 for some integer k. But (k + 1)² − k² = k² + 2k + 1 − k² = 2k + 1 = n. Thus n is the difference of the squares (k + 1)² and k².",
    "solution": "Write the arbitrary odd integer as 2k + 1 and use consecutive integers k + 1 and k. Their squares differ by exactly 2k + 1, giving a constructive direct proof.",
    "hints": [
      "Expand (k + 1)² − k².",
      "Match the result 2k + 1 to the general form of an odd integer."
    ],
    "rubric": [
      "Represents every odd integer as 2k + 1 with k an integer.",
      "Computes (k + 1)² − k² = 2k + 1.",
      "Explicitly identifies the two squares whose difference is the given odd integer."
    ],
    "startHere": "Work backward from the hint: simplify the difference of consecutive squares first.",
    "verify": "For −5 = 2(−3) + 1, the construction gives (−2)² − (−3)² = 4 − 9 = −5."
  },
  {
    "id": "rosen-ch1-ex-1-7-008",
    "mode": "rubric",
    "answer": "Every integer square is congruent to 0 or 1 modulo 4. If n is a perfect square, then n + 2 is therefore congruent to 2 or 3 modulo 4. Neither residue is possible for a perfect square, so n + 2 is not a perfect square.",
    "solution": "Use a parity split to justify the residue fact: (2k)² = 4k² ≡ 0 (mod 4), while (2k + 1)² = 4(k² + k) + 1 ≡ 1 (mod 4). Adding 2 shifts these to 2 and 3, neither of which can occur for a square.",
    "hints": [
      "Square an even integer 2k and an odd integer 2k + 1 modulo 4.",
      "What residues can n + 2 have if n has residue 0 or 1 modulo 4?"
    ],
    "rubric": [
      "Establishes that integer squares are only 0 or 1 modulo 4.",
      "Deduces that n + 2 is 2 or 3 modulo 4 when n is a square.",
      "Concludes that these residues rule out n + 2 being a perfect square."
    ],
    "readAloud": "Modulo four means keep only the remainder after division by four; squares leave only remainder zero or one.",
    "verify": "The argument covers n = 0 as well: n + 2 = 2 has residue 2 and is not a square."
  },
  {
    "id": "rosen-ch1-ex-1-7-009",
    "mode": "rubric",
    "answer": "Let x be irrational and r rational. Suppose x + r were rational. Then x = (x + r) − r would be the difference of two rational numbers and hence rational, contradicting the irrationality of x. Therefore x + r is irrational.",
    "solution": "Assume the negation of the desired conclusion. Closure of the rationals under subtraction forces x to be rational, which contradicts the hypothesis.",
    "hints": [
      "Assume x + r is rational and isolate x.",
      "Use the fact that a difference of rational numbers is rational."
    ],
    "rubric": [
      "Assumes for contradiction that x + r is rational while x is irrational and r is rational.",
      "Derives x = (x + r) − r and uses closure of rationals under subtraction.",
      "States the contradiction and concludes that x + r is irrational."
    ],
    "startHere": "Negate only the conclusion “x + r is irrational,” retaining both hypotheses.",
    "verify": "The same rearrangement explains why the nonzero assumption is unnecessary for addition: subtracting any rational r is always valid."
  },
  {
    "id": "rosen-ch1-ex-1-7-010",
    "mode": "rubric",
    "answer": "Let x = a/b and y = c/d be rational, where a, b, c, d are integers and b, d ≠ 0. Then xy = ac/(bd). Here ac and bd are integers and bd ≠ 0, so xy is rational.",
    "solution": "Substitute the fraction forms of two rational numbers and multiply numerators and denominators. The product denominator is nonzero because neither b nor d is zero.",
    "hints": [
      "Write the rationals as a/b and c/d.",
      "Check that bd is a nonzero integer."
    ],
    "rubric": [
      "Uses integer fraction representations with nonzero denominators.",
      "Derives xy = ac/(bd).",
      "Notes that ac and bd are integers and bd ≠ 0, then concludes rationality."
    ],
    "readAloud": "A rational number is an integer divided by a nonzero integer; multiplying two such fractions produces another such fraction.",
    "verify": "The proof also covers zero and negative rationals because the numerators may be any integers."
  },
  {
    "id": "rosen-ch1-ex-1-7-011",
    "mode": "rubric",
    "answer": "The statement is false. For example, √2 and √8 are irrational, but √2·√8 = √16 = 4 is rational. Equivalently, √2·√2 = 2.",
    "solution": "A universal claim is disproved by one counterexample. Both factors in √2·√2 = 2 are irrational, yet their product is the integer 2.",
    "hints": [
      "Try multiplying an irrational number by itself.",
      "Can √2·√2 be irrational?"
    ],
    "rubric": [
      "States that the claim is false.",
      "Supplies specific irrational factors whose product is rational.",
      "Correctly evaluates the product and identifies it as a counterexample."
    ],
    "verify": "For √2·√8, neither radicand 2 nor 8 is a perfect square, so both factors are irrational, while the product is 4."
  },
  {
    "id": "rosen-ch1-ex-1-7-012",
    "mode": "rubric",
    "answer": "The statement is true. Let r be nonzero rational and x irrational. If rx were rational, then x = (rx)/r would be a quotient of rational numbers with nonzero divisor r, hence rational. This contradiction proves that rx is irrational.",
    "solution": "Use contradiction and divide by the nonzero rational factor. Without r ≠ 0, division would be invalid; indeed 0·x = 0 is rational.",
    "hints": [
      "Assume rx is rational, then solve for x.",
      "Where does the proof use r ≠ 0?"
    ],
    "rubric": [
      "States that the proposition is true and assumes rx rational for contradiction.",
      "Divides by the nonzero rational r to express x as a rational quotient.",
      "Obtains the contradiction that x is rational and concludes rx is irrational."
    ],
    "startHere": "The irrational x is trapped inside rx; undo the multiplication using the nonzero hypothesis.",
    "verify": "Test the boundary r = 0: the proof fails exactly where division by r fails, and the implication would be false without nonzero r."
  },
  {
    "id": "rosen-ch1-ex-1-7-013",
    "mode": "rubric",
    "answer": "Let x be irrational; in particular x ≠ 0. Suppose 1/x = a/b were rational, with a, b integers and b ≠ 0. Since 1/x ≠ 0, a ≠ 0. Then x = b/a is rational, a contradiction. Therefore 1/x is irrational.",
    "solution": "Take the reciprocal of the assumed rational value of 1/x. The numerator a must be nonzero, so b/a is a valid rational representation of x, contradicting the hypothesis.",
    "hints": [
      "Assume 1/x = a/b and explain why a ≠ 0.",
      "Take reciprocals to obtain x = b/a."
    ],
    "rubric": [
      "Uses x ≠ 0 and assumes a rational representation for 1/x.",
      "Justifies that the numerator is nonzero before taking the reciprocal.",
      "Derives that x is rational, states the contradiction, and concludes 1/x is irrational."
    ],
    "verify": "Both reciprocal steps are legal because x and a are nonzero."
  },
  {
    "id": "rosen-ch1-ex-1-7-014",
    "mode": "rubric",
    "answer": "Write x = a/b with integers a, b and b ≠ 0. Since x ≠ 0, a ≠ 0. Therefore 1/x = b/a, which is rational because a and b are integers and a ≠ 0.",
    "solution": "Invert the fraction representation directly. The hypothesis x ≠ 0 ensures that the old numerator a becomes a nonzero denominator.",
    "hints": [
      "Write x = a/b and determine why a cannot be zero.",
      "Compute the reciprocal of a/b."
    ],
    "rubric": [
      "Uses a valid rational representation x = a/b.",
      "Uses x ≠ 0 to establish a ≠ 0.",
      "Derives 1/x = b/a and concludes rationality with a nonzero denominator."
    ],
    "startHere": "Track which integer becomes the denominator after taking the reciprocal.",
    "verify": "The condition b ≠ 0 comes from x being rational; the separate condition a ≠ 0 comes from x ≠ 0."
  },
  {
    "id": "rosen-ch1-ex-1-7-015",
    "mode": "rubric",
    "answer": "Use contraposition. If √x is rational, then x = (√x)² is the product of two rational numbers and is therefore rational. Thus, if x is irrational and positive, √x must be irrational.",
    "solution": "The contrapositive replaces “x irrational implies √x irrational” with “√x rational implies x rational.” Squaring a rational square root proves that contrapositive.",
    "hints": [
      "Prove the contrapositive by assuming √x is rational.",
      "Square √x and use closure of the rationals under multiplication."
    ],
    "rubric": [
      "States or correctly uses the contrapositive.",
      "Derives x = (√x)² and concludes x is rational when √x is rational.",
      "Concludes the original statement, respecting x > 0 so the real square root is defined."
    ],
    "readAloud": "The square root of x, squared, returns x; rationality is preserved by this squaring step.",
    "verify": "The argument also shows the converse direction often confused with it: a rational square root cannot come from an irrational radicand."
  },
  {
    "id": "rosen-ch1-ex-1-7-016",
    "mode": "rubric",
    "answer": "Prove the contrapositive. If none of x, y, z is odd, then all three are even, so write x = 2a, y = 2b, z = 2c. Then x + y + z = 2(a + b + c) is even. Hence an odd sum forces at least one addend to be odd.",
    "solution": "Negating “at least one is odd” gives “all are even.” Their sum is even, contradicting the possibility of an odd sum under that assumption and proving the contrapositive.",
    "hints": [
      "The negation of “at least one is odd” is “all are even.”",
      "Add three expressions of the form 2k."
    ],
    "rubric": [
      "Correctly assumes all three integers are even for the contrapositive.",
      "Derives that their sum is 2(a + b + c), hence even.",
      "Concludes that an odd sum requires at least one odd addend."
    ],
    "startHere": "Rewrite the desired conclusion as an existential statement and negate it carefully.",
    "verify": "Parity confirms the stronger pattern: a sum of three integers is odd precisely when it contains one or three odd addends."
  },
  {
    "id": "rosen-ch1-ex-1-7-017",
    "mode": "rubric",
    "answer": "For contraposition, assume x < 1 and y < 1. Adding these strict inequalities gives x + y < 2. Therefore, if x + y ≥ 2, it cannot be that both x < 1 and y < 1; hence x ≥ 1 or y ≥ 1.",
    "solution": "Negate the disjunction x ≥ 1 or y ≥ 1 as x < 1 and y < 1. Their sum contradicts x + y ≥ 2, establishing the contrapositive x + y < 2.",
    "hints": [
      "Negate “x ≥ 1 or y ≥ 1” using De Morgan’s law.",
      "Add the two resulting strict inequalities."
    ],
    "rubric": [
      "Forms the correct contrapositive: x < 1 and y < 1 imply x + y < 2.",
      "Adds the strict inequalities correctly.",
      "Concludes the original disjunction without reversing either inequality."
    ],
    "readAloud": "Not (x at least one or y at least one) means x below one and y below one.",
    "verify": "Boundary case x = y = 1 gives sum 2 and satisfies the conclusion; both being below 1 is what forces the sum below 2."
  },
  {
    "id": "rosen-ch1-ex-1-7-018",
    "mode": "rubric",
    "answer": "Use contraposition. If neither m nor n is even, both are odd. Write m = 2a + 1 and n = 2b + 1. Then mn = 2(2ab + a + b) + 1 is odd. Therefore an even product mn requires m or n to be even.",
    "solution": "The negation of “m even or n even” is “m odd and n odd.” The product of two odd integers is odd, which is the required contrapositive.",
    "hints": [
      "Assume both factors are odd.",
      "Use or expand the standard product-of-odd-integers calculation."
    ],
    "rubric": [
      "Correctly negates the conclusion and assumes both integers are odd.",
      "Shows their product has the form 2k + 1 and is odd.",
      "Uses contraposition to conclude at least one factor is even when mn is even."
    ],
    "verify": "The converse need not be proved: the requested implication only goes from even product to an even factor."
  },
  {
    "id": "rosen-ch1-ex-1-7-019",
    "mode": "rubric",
    "answer": "a) Contraposition: if n is odd, then n³ is odd, so n³ + 5 is even. b) Contradiction: assume n³ + 5 is odd and n is odd; then n³ is odd, making n³ + 5 even, contrary to the assumption.",
    "solution": "Both parts use the same parity fact in different logical structures. An odd n gives n³ = n·n·n odd, and adding the odd integer 5 gives an even sum. Part (a) proves the contrapositive; part (b) keeps the original hypothesis and adds the negated conclusion.",
    "hints": [
      "First show that odd n makes n³ + 5 even.",
      "For contradiction, retain n³ + 5 odd while also assuming n odd."
    ],
    "rubric": [
      "Part (a) uses the contrapositive with n odd as its assumption and derives n³ + 5 even.",
      "Part (b) assumes both n³ + 5 odd and n odd and reaches an explicit even/odd contradiction.",
      "Both parts justify that odd n implies odd n³ and that odd plus odd is even."
    ],
    "readAloud": "n cubed means n times n times n; odd times odd times odd is odd, and adding five makes the total even.",
    "startHere": "Separate the logical setup from the shared arithmetic fact: odd n forces n³ + 5 to be even.",
    "verify": "For n = 3, n³ + 5 = 32, confirming the parity calculation used in both proofs.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Suppose n is odd. Then n³ is odd because it is a product of odd integers, and n³ + 5 is even because it is a sum of two odd integers. This proves the contrapositive, so the original implication holds.",
        "solution": "Assume the negation of the conclusion, n odd, and derive the negation of the hypothesis, n³ + 5 even.",
        "hints": [
          "The contrapositive starts with n odd, not with n³ + 5 odd."
        ],
        "rubric": [
          "Correctly frames a contraposition proof and derives n³ + 5 even from n odd."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Assume n³ + 5 is odd but n is odd. Then n³ is odd, so n³ + 5 is even. It cannot be both odd and even, a contradiction; therefore n must be even.",
        "solution": "Assume the original hypothesis and the negation of the conclusion simultaneously. The parity calculation makes those assumptions incompatible.",
        "hints": [
          "Do not negate the given hypothesis; add n odd to it and seek a contradiction."
        ],
        "rubric": [
          "Assumes n³ + 5 odd together with n odd and derives the contradiction that n³ + 5 is even."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-7-020",
    "mode": "rubric",
    "answer": "a) Contraposition: if n is odd, then 3n is odd and 3n + 2 is odd. b) Contradiction: assume 3n + 2 is even and n is odd; then 3n + 2 is odd because odd 3n plus even 2 is odd, contradicting the assumption.",
    "solution": "For (a), assume n odd; since 3n is odd and 2 is even, 3n + 2 is odd, proving the contrapositive. For (b), assume 3n + 2 even and n odd; the latter forces 3n + 2 odd, contradicting the former.",
    "hints": [
      "Odd times odd is odd, so odd n makes 3n odd.",
      "An odd integer plus an even integer is odd."
    ],
    "rubric": [
      "Part (a) derives 3n + 2 odd from n odd and identifies this as the contrapositive.",
      "Part (b) assumes 3n + 2 even and n odd, derives 3n + 2 odd, and states the contradiction.",
      "Both parts use correct parity for multiplication by 3 and addition of 2."
    ],
    "startHere": "Determine the parity of 3n + 2 when n is odd before choosing the contradiction statement.",
    "verify": "For n = 3, 3n + 2 = 11, which is odd, exactly as the proofs require.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Assume n is odd. Then 3n is odd, and because 2 is even, 3n + 2 is odd. Thus n odd implies 3n + 2 odd; by contraposition, 3n + 2 even implies n even.",
        "solution": "Negate both sides of the implication and reverse their order, then use parity directly.",
        "hints": [
          "The negation of “n is even” is “n is odd” for an integer."
        ],
        "rubric": [
          "Gives a valid contraposition proof deriving odd 3n + 2 from odd n."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Assume 3n + 2 is even and, for contradiction, n is odd. Then 3n is odd and 3n + 2 is odd, contradicting the assumption that it is even. Hence n is even.",
        "solution": "Keep the hypothesis 3n + 2 even and add n odd. The resulting parity is incompatible with the hypothesis.",
        "hints": [
          "Use both assumptions; n odd supplies the opposite parity."
        ],
        "rubric": [
          "Gives a valid contradiction proof with the explicit even/odd incompatibility."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-7-021",
    "mode": "rubric",
    "answer": "P(0) is the statement “If 0 is a positive integer greater than 1, then 0² > 0.” Its hypothesis is false, so the conditional is vacuously true. This is a vacuous proof.",
    "solution": "Substitute n = 0 and evaluate the hypothesis before the conclusion. Since 0 is not a positive integer greater than 1, the implication has a false antecedent and is true vacuously.",
    "hints": [
      "Substitute 0 into the hypothesis first.",
      "A conditional with a false hypothesis is true regardless of its conclusion."
    ],
    "rubric": [
      "Correctly substitutes n = 0 into P(n).",
      "Identifies the hypothesis as false and the conditional as vacuously true.",
      "Names the proof method as vacuous proof."
    ],
    "readAloud": "P of zero says: if zero is a positive integer greater than one, then zero squared exceeds zero.",
    "verify": "Do not infer anything from the false conclusion 0² > 0; truth of an implication with false hypothesis does not depend on that conclusion."
  },
  {
    "id": "rosen-ch1-ex-1-7-022",
    "mode": "rubric",
    "answer": "P(1) says “If 1 is a positive integer, then 1² ≥ 1.” The conclusion is true because 1² = 1 ≥ 1, so the conditional is true. This is a trivial proof.",
    "solution": "After substitution, establish the conclusion directly: 1² = 1. Since the conclusion is true, the implication is true independently of its hypothesis; this is called a trivial proof.",
    "hints": [
      "Evaluate 1² and compare it with 1.",
      "A proof that establishes a conditional by showing its conclusion true is trivial, not vacuous."
    ],
    "rubric": [
      "Correctly states or uses P(1).",
      "Shows 1² = 1 ≥ 1 and concludes the implication is true.",
      "Identifies the method as a trivial proof."
    ],
    "verify": "The hypothesis is also true here, but the named method is based on proving the conclusion outright."
  },
  {
    "id": "rosen-ch1-ex-1-7-023",
    "mode": "rubric",
    "answer": "For n = 1, the conclusion is (a + b)¹ ≥ a¹ + b¹. Both sides equal a + b, so the inequality holds with equality for all positive a and b. Therefore P(1) is true by a trivial proof.",
    "solution": "Substitute n = 1 and simplify all exponents. The conclusion is universally true as an equality, so the conditional is proved by establishing its conclusion, a trivial proof.",
    "hints": [
      "Replace every exponent n by 1.",
      "Compare the simplified left and right sides."
    ],
    "rubric": [
      "Substitutes n = 1 throughout the proposition.",
      "Shows (a + b)¹ = a¹ + b¹ = a + b, so the conclusion holds.",
      "States that P(1) is true and identifies a trivial proof."
    ],
    "readAloud": "Anything to the first power is itself, so both sides of the claimed inequality are simply a plus b.",
    "verify": "Positivity of a and b is unnecessary for this particular equality, though it remains part of the stated hypothesis."
  },
  {
    "id": "rosen-ch1-ex-1-7-024",
    "mode": "rubric",
    "answer": "By the pigeonhole principle, placing three socks into two color categories forces one category to contain at least two socks. That category supplies either a blue pair or a black pair.",
    "solution": "Alternatively, if no color occurs twice, each of blue and black can occur at most once, accounting for at most two socks. This contradicts the selection of three socks.",
    "hints": [
      "Treat blue and black as two pigeonholes.",
      "How many socks could be selected without getting two of one color?"
    ],
    "rubric": [
      "Identifies the two colors as categories and applies pigeonhole or an equivalent contradiction.",
      "Shows that at least two of the three selected socks share a color.",
      "Concludes that the shared color gives a blue or black pair."
    ],
    "startHere": "Count the maximum number of socks possible under the assumption that neither color forms a pair.",
    "verify": "With only two socks, one of each color avoids a pair; the third sock is exactly what forces repetition."
  },
  {
    "id": "rosen-ch1-ex-1-7-025",
    "mode": "rubric",
    "answer": "If at most nine chosen days fell on each of the seven weekdays, there would be at most 7·9 = 63 days altogether. Since 64 days were chosen, some weekday must occur at least ten times.",
    "solution": "This is a proof by contradiction using the generalized pigeonhole principle. Negating “at least ten on one weekday” gives at most nine on every weekday, which cannot accommodate 64 selections.",
    "hints": [
      "Assume every weekday occurs at most nine times.",
      "Compute the largest possible total under that assumption."
    ],
    "rubric": [
      "Uses the seven weekdays and assumes at most nine occurrences per weekday.",
      "Computes the upper bound 7·9 = 63.",
      "Contrasts 63 with 64 and concludes at least ten days share a weekday."
    ],
    "readAloud": "Seven groups with at most nine in each can hold only sixty-three days, one short of the sixty-four chosen.",
    "verify": "The bound is sharp: 63 days can be distributed as nine on each weekday, and the 64th forces a tenth occurrence."
  },
  {
    "id": "rosen-ch1-ex-1-7-026",
    "mode": "rubric",
    "answer": "If no month contained at least three chosen days, each of the 12 months would contain at most two. That allows at most 12·2 = 24 days, contradicting the choice of 25. Therefore some month contains at least three.",
    "solution": "Negate the conclusion and count the maximum possible selections across the 12 months. The total is at most 24, one fewer than required.",
    "hints": [
      "Assume each month appears at most twice.",
      "Multiply 12 months by the maximum two choices per month."
    ],
    "rubric": [
      "Assumes at most two chosen days per month.",
      "Derives the total upper bound 24.",
      "Uses the 25-day total to conclude that some month occurs at least three times."
    ],
    "verify": "The generalized pigeonhole calculation gives ⌈25/12⌉ = 3, matching the contradiction argument."
  },
  {
    "id": "rosen-ch1-ex-1-7-027",
    "mode": "rubric",
    "answer": "Suppose r = a/b in lowest terms satisfies r³ + r + 1 = 0, with a, b integers and b ≠ 0. Multiplying by b³ gives a³ + ab² + b³ = 0. If a and b are not both even, the left side is odd: when exactly one is odd, exactly one of its three terms is odd; when both are odd, all three terms are odd. Hence the left side cannot equal 0. If both are even, a/b is not in lowest terms. Thus no such rational r exists.",
    "solution": "Clear denominators, then examine the four parity cases. Three cases make a³ + ab² + b³ odd, contradicting equality to even 0; the remaining even/even case contradicts the lowest-terms assumption.",
    "hints": [
      "After substitution, multiply by b³ to obtain a³ + ab² + b³ = 0.",
      "Check odd/odd, odd/even, even/odd, and even/even separately."
    ],
    "rubric": [
      "Assumes a lowest-terms rational root a/b and correctly derives a³ + ab² + b³ = 0.",
      "Analyzes all parity cases, showing the left side is odd unless a and b are both even.",
      "Rules out both even using lowest terms and concludes no rational root exists."
    ],
    "readAloud": "The cleared equation is a cubed plus a times b squared plus b cubed equals zero; parity means whether each term is odd or even.",
    "startHere": "Write the integer equation first, then make a four-row mental parity table for a and b.",
    "verify": "Odd plus odd plus odd is odd, and odd plus even plus even is odd; in every lowest-terms case the sum therefore cannot be 0."
  },
  {
    "id": "rosen-ch1-ex-1-7-028",
    "mode": "rubric",
    "answer": "If n is even, then 7n is even and 7n + 4 is even. Conversely, if 7n + 4 is even, then 7n = (7n + 4) − 4 is even. Since 7 is odd, n must be even; otherwise odd n would make 7n odd. Thus n is even if and only if 7n + 4 is even.",
    "solution": "Prove both directions. The forward direction uses closure under addition of even integers; the reverse subtracts 4 and then uses that a product with odd factor 7 can be even only when n is even.",
    "hints": [
      "For the reverse direction, first subtract 4.",
      "If 7n is even and 7 is odd, what must n be?"
    ],
    "rubric": [
      "Proves n even implies 7n + 4 even.",
      "Proves 7n + 4 even implies 7n even and then n even.",
      "Explicitly connects both directions with if and only if."
    ],
    "verify": "Check n = 2k and n = 2k + 1: 7n + 4 = 14k + 4 is even in the first case and 14k + 11 is odd in the second."
  },
  {
    "id": "rosen-ch1-ex-1-7-029",
    "mode": "rubric",
    "answer": "If n is odd, then 5n is odd and 5n + 6 is odd because 6 is even. Conversely, if 5n + 6 is odd, then 5n = (5n + 6) − 6 is odd. Since 5 is odd, n must be odd; an even n would make 5n even. Therefore n is odd if and only if 5n + 6 is odd.",
    "solution": "For the forward implication, combine odd 5n with even 6. For the reverse, isolate 5n and rule out even n, leaving n odd because n is an integer.",
    "hints": [
      "Subtract 6 for the converse.",
      "Use odd × odd = odd and odd × even = even."
    ],
    "rubric": [
      "Proves odd n implies odd 5n + 6.",
      "Proves odd 5n + 6 implies odd 5n and then odd n.",
      "States the completed biconditional."
    ],
    "verify": "For n = 2k, 5n + 6 = 10k + 6 is even; for n = 2k + 1, it is 10k + 11, which is odd."
  },
  {
    "id": "rosen-ch1-ex-1-7-030",
    "mode": "rubric",
    "answer": "If m² = n², then m² − n² = 0, so (m − n)(m + n) = 0. A zero product gives m − n = 0 or m + n = 0, hence m = n or m = −n. Conversely, either m = n or m = −n immediately gives m² = n².",
    "solution": "Move both squares to one side and factor a difference of squares for the forward direction. For the reverse, square each of the two proposed relationships.",
    "hints": [
      "Rewrite m² = n² as m² − n² = 0.",
      "Factor using A² − B² = (A − B)(A + B)."
    ],
    "rubric": [
      "Factors m² − n² as (m − n)(m + n) and applies the zero-product property.",
      "Derives exactly m = n or m = −n.",
      "Proves the converse by squaring either equality."
    ],
    "readAloud": "A difference of two squares factors as the difference of the numbers times their sum.",
    "verify": "The case m = n = 0 satisfies both alternatives, which is allowed by the inclusive word “or.”"
  },
  {
    "id": "rosen-ch1-ex-1-7-031",
    "mode": "rubric",
    "answer": "The statement is true. From mn = 1, neither integer is zero and |m|·|n| = 1. Since these absolute values are positive integers, |m| = |n| = 1. The product is positive, so m and n have the same sign; therefore (m,n) = (1,1) or (−1,−1).",
    "solution": "Taking absolute values reduces the problem to two positive integers whose product is 1. Both must be 1. The sign of mn then rules out the mixed-sign possibilities (1,−1) and (−1,1).",
    "hints": [
      "Take absolute values: |m||n| = 1.",
      "After finding absolute value 1 for both, use mn > 0 to compare signs."
    ],
    "rubric": [
      "States the claim is true and derives |m| = |n| = 1 using positive integer factors.",
      "Uses positive product to establish equal signs.",
      "Concludes exactly (1,1) or (−1,−1) and no mixed-sign pair."
    ],
    "verify": "Both proposed pairs multiply to 1, while (1,−1) and (−1,1) multiply to −1."
  },
  {
    "id": "rosen-ch1-ex-1-7-032",
    "mode": "rubric",
    "answer": "All three statements are equivalent to a < b. Indeed, (a + b)/2 − a = (b − a)/2 and b − (a + b)/2 = (b − a)/2. Thus the average exceeds a exactly when b − a > 0, and is below b under exactly the same condition.",
    "solution": "Let m = (a + b)/2. The two identities m − a = (b − a)/2 and b − m = (b − a)/2 show (i) ⇒ (ii), (i) ⇒ (iii), and the converses by multiplying the positive denominator 2 back through each inequality.",
    "hints": [
      "Subtract a from the average, and subtract the average from b.",
      "Both differences simplify to (b − a)/2."
    ],
    "rubric": [
      "Uses the average (a + b)/2 and derives at least one correct difference identity.",
      "Establishes both directions relating a < b to the average exceeding a.",
      "Establishes both directions relating a < b to the average being below b, thereby proving all three equivalent."
    ],
    "readAloud": "The distance from a to the midpoint and the distance from the midpoint to b are both half of b minus a.",
    "verify": "For a = 2 and b = 8, the average 5 satisfies 2 < 5 < 8; reversing a and b reverses both comparisons."
  },
  {
    "id": "rosen-ch1-ex-1-7-033",
    "mode": "rubric",
    "answer": "Each statement is equivalent to x being even. First, 3x + 2 is even iff 3x is even iff x is even. Second, x + 5 is odd iff x is even, since even + odd is odd and odd + odd is even. Third, x² is even iff x is even: the forward direction is immediate, and if x were odd then x² would be odd.",
    "solution": "Translate all three conditions to the single parity condition on x. For (i), subtract even 2 and use the odd multiplier 3; for (ii), compare parity with 5; for (iii), use the contrapositive that odd x has odd square.",
    "hints": [
      "Show that each statement holds exactly when x is even.",
      "For (iii), rule out x odd by computing the parity of its square."
    ],
    "rubric": [
      "Proves both directions of the equivalence between (i) and x even.",
      "Proves both directions between (ii) and x even.",
      "Proves both directions between (iii) and x even and concludes all three are equivalent."
    ],
    "startHere": "Instead of proving six separate implications, compare each statement with the common condition “x is even.”",
    "verify": "Substitute x = 2k and x = 2k + 1: the three statements are all true in the first case and all false in the second."
  },
  {
    "id": "rosen-ch1-ex-1-7-034",
    "mode": "rubric",
    "answer": "All three statements are equivalent. If x is rational, then x/2 and 3x − 1 are rational by closure of the rationals. Conversely, if x/2 is rational, then x = 2(x/2) is rational; if 3x − 1 is rational, then x = ((3x − 1) + 1)/3 is rational.",
    "solution": "Use invertible rational operations. Multiplying by 2 and taking the affine transformation x ↦ 3x − 1 preserve rationality, and their inverse operations recover x without introducing irrational values.",
    "hints": [
      "For each transformed expression, show how to recover x using rational operations.",
      "Division by 2 or 3 is valid because both are nonzero rationals."
    ],
    "rubric": [
      "Shows x rational implies both x/2 and 3x − 1 rational.",
      "Shows rational x/2 implies x rational.",
      "Shows rational 3x − 1 implies x rational and concludes equivalence."
    ],
    "readAloud": "Three x minus one can be undone by adding one and dividing by three; rational operations preserve rationality.",
    "verify": "The recovery formulas are exact: 2(x/2) = x and ((3x − 1) + 1)/3 = x."
  },
  {
    "id": "rosen-ch1-ex-1-7-035",
    "mode": "rubric",
    "answer": "Each statement is equivalent to x being irrational. If 3x + 2 were rational, then x = ((3x + 2) − 2)/3 would be rational; hence x irrational implies 3x + 2 irrational. Conversely, if x were rational then 3x + 2 would be rational, so irrationality of 3x + 2 implies irrationality of x. Similarly, x/2 is rational iff x = 2(x/2) is rational, so x/2 is irrational iff x is irrational.",
    "solution": "Prove rational versions of the contrapositives. The transformations x ↦ 3x + 2 and x ↦ x/2, together with their inverses, preserve rationality; therefore they also preserve irrationality in both directions.",
    "hints": [
      "If 3x + 2 were rational, solve for x.",
      "If x/2 were rational, multiply by 2."
    ],
    "rubric": [
      "Establishes both directions of irrationality equivalence between x and 3x + 2 using rational inverse operations.",
      "Establishes both directions between x and x/2.",
      "Concludes that all three statements are equivalent rather than proving only one direction."
    ],
    "startHere": "Work with rationality in the contrapositive; irrationality is then obtained by negating both sides.",
    "verify": "The inverse formulas ((3x + 2) − 2)/3 = x and 2(x/2) = x prevent any one-direction gap."
  },
  {
    "id": "rosen-ch1-ex-1-7-036",
    "mode": "rubric",
    "answer": "No. Squaring can introduce extraneous solutions because it is not reversible without checking signs. The candidate x = −1 gives √(2(−1)² − 1) = 1, not −1, so it does not satisfy the original equation. The candidate x = 1 works, and the only solution is x = 1.",
    "solution": "The algebra correctly finds the candidates ±1 for the squared equation, but step (5) does not establish that both solve the original. Since a principal square root is nonnegative, any solution must have x ≥ 0; substitution retains 1 and rejects −1.",
    "hints": [
      "Substitute each candidate into the original equation, not the squared equation.",
      "Can a nonnegative square root equal −1?"
    ],
    "rubric": [
      "States that the reasoning is incomplete or incorrect as a solution procedure.",
      "Explains that squaring may introduce extraneous roots or that the original requires x ≥ 0.",
      "Checks both candidates and concludes that x = 1 is the only solution."
    ],
    "readAloud": "The left side is a principal square root, so it is never negative; this immediately rejects x equals negative one.",
    "startHere": "Distinguish finding candidates after squaring from proving those candidates satisfy the original equation.",
    "verify": "At x = 1 both sides equal 1; at x = −1 the left side is 1 and the right side is −1."
  },
  {
    "id": "rosen-ch1-ex-1-7-037",
    "mode": "rubric",
    "answer": "No. The algebra produces candidates x = 1 and x = 6, but x = 6 is extraneous: √9 = 3 while 3 − 6 = −3. At x = 1, √4 = 2 and 3 − 1 = 2. Therefore the only solution is x = 1.",
    "solution": "Squaring both sides loses sign information. The original equation also requires 3 − x ≥ 0 because it equals a nonnegative square root, which excludes 6. Direct substitution confirms 1 and rejects 6.",
    "hints": [
      "Test x = 6 in the original unsquared equation.",
      "The right side 3 − x must be nonnegative."
    ],
    "rubric": [
      "Identifies the reasoning as incomplete because squaring introduces candidates.",
      "Evaluates both candidates in the original equation or applies 3 − x ≥ 0.",
      "Concludes x = 1 is the only solution and x = 6 is extraneous."
    ],
    "readAloud": "Square root of x plus three equals three minus x; both sides must have the same nonnegative value.",
    "verify": "The two sides at x = 1 are both 2, while at x = 6 they are 3 and −3, which have equal squares but are unequal."
  },
  {
    "id": "rosen-ch1-ex-1-7-038",
    "mode": "rubric",
    "answer": "The three biconditionals link every proposition into one equivalence class. Since p1 ↔ p3 and p2 ↔ p3, transitivity gives p1 ↔ p2. Also p1 ↔ p4 is given. Thus p1 is equivalent to each of p2, p3, p4, and transitivity then gives equivalence between every pair.",
    "solution": "Logical equivalence is transitive. Use p3 as a bridge between p1 and p2, while p4 is directly linked to p1; consequently all four always have the same truth value.",
    "hints": [
      "Chain p2 ↔ p3 ↔ p1.",
      "Once every proposition is equivalent to p1, use p1 as a common bridge."
    ],
    "rubric": [
      "Uses p1 ↔ p3 and p2 ↔ p3 to derive p1 ↔ p2.",
      "Includes p4 through the given p1 ↔ p4.",
      "Invokes transitivity or equal truth values to conclude all four propositions are pairwise equivalent."
    ],
    "readAloud": "A biconditional means two propositions always share a truth value, and these shared values can be chained.",
    "verify": "The links form a connected chain p4—p1—p3—p2, so no proposition is left isolated."
  },
  {
    "id": "rosen-ch1-ex-1-7-039",
    "mode": "rubric",
    "answer": "The implications form the cycle p1 → p4 → p2 → p5 → p3 → p1. Following the cycle forward from any proposition reaches every other proposition; following it backward proves the reverse implications. Therefore every pair implies each other, so p1, p2, p3, p4, and p5 are equivalent.",
    "solution": "For example, p1 implies p2 through p4, and p2 implies p1 through p5 and p3, giving p1 ↔ p2. The same cyclic chaining works for every pair.",
    "hints": [
      "Draw the five arrows and notice the single directed cycle.",
      "To prove a biconditional, follow the cycle in each direction."
    ],
    "rubric": [
      "Recognizes or displays the complete implication cycle in the correct order.",
      "Uses chaining of implications to obtain paths in both directions between arbitrary propositions.",
      "Concludes pairwise biconditionals and hence equivalence of all five."
    ],
    "startHere": "Arrange the propositions as p1, p4, p2, p5, p3 around a circle and follow the arrows.",
    "verify": "Every vertex has one outgoing and one incoming proved link, so all five are reachable from one another."
  },
  {
    "id": "rosen-ch1-ex-1-7-040",
    "mode": "rubric",
    "answer": "Seven is a counterexample. If 7 = a² + b² + c², each square must be at most 7, so each is one of 0, 1, or 4. Without a 4, the sum is at most 3; with exactly one 4, it is at most 6; with two or more 4s, it exceeds 7. No sum of three values from {0,1,4} equals 7, so 7 is not a sum of three integer squares.",
    "solution": "Bound the size of every square by the target 7, leaving only 0, 1, and 4. Exhaust the few possible combinations: using one 4 leaves 3 to be made from at most two 1s, which is impossible; two 4s already exceed 7.",
    "hints": [
      "No square in a representation of 7 can exceed 7.",
      "Try the only available square values 0, 1, and 4."
    ],
    "rubric": [
      "Provides 7 or another valid positive integer counterexample.",
      "Justifies nonrepresentability rather than merely asserting it; for 7, restricts squares to 0, 1, and 4.",
      "Correctly exhausts the relevant sums and concludes the universal statement is false."
    ],
    "startHere": "Test small positive integers and list only square values that could fit under the current total.",
    "verify": "The closest sums are 4 + 1 + 1 = 6 and 4 + 4 + 0 = 8, skipping 7."
  },
  {
    "id": "rosen-ch1-ex-1-7-041",
    "mode": "rubric",
    "answer": "Let A = (a1 + ··· + an)/n. Suppose, for contradiction, that every ai < A. Adding these n strict inequalities gives a1 + ··· + an < nA = a1 + ··· + an, which is impossible. Therefore at least one ai ≥ A. This is a proof by contradiction.",
    "solution": "Negate the existence claim by assuming every number is strictly below the average. Summing all n inequalities makes the total strictly less than itself, so the assumption must be false.",
    "hints": [
      "Assume ai < A for every i, where A is the average.",
      "Add all n inequalities and simplify nA."
    ],
    "rubric": [
      "Defines the average and assumes every ai is strictly below it.",
      "Sums to obtain the contradiction that the total is strictly less than itself.",
      "Concludes at least one ai is greater than or equal to the average and identifies contradiction."
    ],
    "readAloud": "A is the sum divided by n; if every entry lies strictly below A, their sum must lie strictly below n times A.",
    "startHere": "Negate “at least one is at least the average” as “every one is strictly below the average.”",
    "verify": "Equality is necessary in the conclusion: for 2, 2, 2, every entry equals the average 2, and none is strictly greater."
  },
  {
    "id": "rosen-ch1-ex-1-7-042",
    "mode": "rubric",
    "answer": "Form ten sums S1,…,S10, where Si adds the three integers starting at position i and proceeding around the circle. Each of the ten integers appears in exactly three sums, so S1 + ··· + S10 = 3(1 + ··· + 10) = 165. Their average is 16.5. By Exercise 41, some Si ≥ 16.5; because Si is an integer, Si ≥ 17.",
    "solution": "Use overlapping consecutive triples, including the triples wrapping around the end of the circle. Counting each integer three times gives total 165 and average 16.5; the maximum-sum result and integrality complete the proof.",
    "hints": [
      "Define one triple sum for each of the ten starting positions.",
      "Each integer occurs in exactly three triple sums; what is their average?"
    ],
    "rubric": [
      "Defines ten consecutive-triple sums around the circle, including wraparound.",
      "Shows each integer is counted three times and computes total 165 and average 16.5.",
      "Applies Exercise 41 and uses integrality to conclude some triple sum is at least 17."
    ],
    "readAloud": "Each of the ten circle entries belongs to three overlapping triples, so the triple totals together sum to three times fifty-five.",
    "startHere": "Do not partition the circle into disjoint triples; use all ten overlapping consecutive triples.",
    "verify": "The counting factor is exactly 3, and 165/10 = 16.5, so an integer triple sum cannot satisfy the conclusion by being only 16."
  },
  {
    "id": "rosen-ch1-ex-1-7-043",
    "mode": "rubric",
    "answer": "All four statements are equivalent to n being even. If n is even, n + 1 is odd; conversely, if n + 1 is odd, n = (n + 1) − 1 is even. Also, if n is even, 3n is even and 3n + 1 is odd; conversely, if 3n + 1 is odd, 3n is even, and because 3 is odd, n is even. Finally, 3n is even exactly when n is even.",
    "solution": "A clean implication cycle is (i) ⇒ (ii) ⇒ (iii) ⇒ (iv) ⇒ (i). The step (ii) ⇒ (iii) uses n even to make 3n even; (iii) ⇒ (iv) subtracts 1; and (iv) ⇒ (i) uses the odd factor 3.",
    "hints": [
      "Prove the cycle (i) → (ii) → (iii) → (iv) → (i).",
      "An even product 3n with odd multiplier 3 forces n even."
    ],
    "rubric": [
      "Proves (i) iff (ii) or the corresponding links in a valid equivalence cycle.",
      "Relates (iii) to the parity of 3n and proves its required implication or implications.",
      "Proves that even 3n implies even n and closes a cycle establishing all four equivalent."
    ],
    "startHere": "Use n even as the common parity fact, or follow the four-link cycle rather than proving twelve implications separately.",
    "verify": "For n = 2k, the expressions are even, 2k + 1 odd, 6k + 1 odd, and 6k even; for n = 2k + 1, all four statements fail."
  },
  {
    "id": "rosen-ch1-ex-1-7-044",
    "mode": "rubric",
    "answer": "Each statement is equivalent to n being odd. First, n² is odd iff n is odd: odd n has odd square, and even n has even square. Second, 1 − n is even iff n is odd, since 1 − (2k + 1) = −2k, while even n makes 1 − n odd. Third, n³ is odd iff n is odd by the same parity argument for powers. Fourth, n² + 1 is even iff n² is odd, hence iff n is odd. Therefore all four are equivalent.",
    "solution": "Use the exhaustive parity split n = 2k or n = 2k + 1. In the even case, n² and n³ are even, 1 − n is odd, and n² + 1 is odd. In the odd case, n² and n³ are odd, 1 − n is even, and n² + 1 is even. Thus the four statements have identical truth conditions.",
    "hints": [
      "Show that each statement is true exactly when n is odd.",
      "Check both parity cases n = 2k and n = 2k + 1."
    ],
    "rubric": [
      "Establishes that n² and n³ are odd exactly when n is odd, including both directions.",
      "Establishes that 1 − n is even exactly when n is odd.",
      "Relates n² + 1 even to n² odd and concludes all four statements are equivalent."
    ],
    "readAloud": "Squaring or cubing preserves parity; one minus n flips parity, and adding one to n squared flips it again.",
    "startHere": "Make a small parity table for even n and odd n with four columns, one for each statement.",
    "verify": "At n = 2 all four statements are false; at n = 3 all four are true: 9 odd, −2 even, 27 odd, and 10 even."
  },
  {
    "id": "rosen-ch1-ex-1-8-001",
    "mode": "rubric",
    "answer": "For n = 1, 2, 3, 4, the values of n² + 1 are 2, 5, 10, 17 and the values of 2ⁿ are 2, 4, 8, 16, respectively. Thus n² + 1 ≥ 2ⁿ in every allowed case.",
    "solution": "Use proof by exhaustion. Check n = 1: 2 ≥ 2; n = 2: 5 ≥ 4; n = 3: 10 ≥ 8; n = 4: 17 ≥ 16. These are all four positive integers in the stated range.",
    "hints": [
      "The right-hand side is 2 raised to the power n, not 2 times n.",
      "There are only four cases; make a two-column table."
    ],
    "rubric": [
      "Checks exactly n = 1, 2, 3, and 4.",
      "Uses n² + 1 and 2ⁿ correctly in every case.",
      "Concludes the inequality from all four numerical comparisons."
    ],
    "readAloud": "Prove that n squared plus one is at least two to the n, for n from one through four.",
    "verify": "The four left sides exceed or equal the corresponding right sides, with equality at n = 1."
  },
  {
    "id": "rosen-ch1-ex-1-8-002",
    "mode": "rubric",
    "answer": "No positive integer x satisfies x² = 10.",
    "solution": "If 1 ≤ x ≤ 3, then x² ≤ 9 < 10. If x ≥ 4, then x² ≥ 16 > 10. These cases include every positive integer, so x² can never equal 10.",
    "hints": [
      "Split at x = 4 and compare x² with 10 in each interval."
    ],
    "rubric": [
      "Covers all positive integers using the cases x ≤ 3 and x ≥ 4.",
      "Shows x² < 10 in the first case and x² > 10 in the second."
    ],
    "verify": "The consecutive squares 3² = 9 and 4² = 16 bracket 10."
  },
  {
    "id": "rosen-ch1-ex-1-8-003",
    "mode": "rubric",
    "answer": "No positive integer x satisfies x³ = 100.",
    "solution": "If 1 ≤ x ≤ 4, then x³ ≤ 64 < 100. If x ≥ 5, then x³ ≥ 125 > 100. The two cases exhaust all positive integers, proving the claim.",
    "hints": [
      "Compare 4³ and 5³ with 100."
    ],
    "rubric": [
      "Uses exhaustive cases x ≤ 4 and x ≥ 5.",
      "Derives x³ < 100 and x³ > 100, respectively."
    ],
    "verify": "100 lies strictly between the consecutive cubes 64 and 125."
  },
  {
    "id": "rosen-ch1-ex-1-8-004",
    "mode": "rubric",
    "answer": "No perfect cube c³ < 1000 is the sum a³ + b³ of two positive integer cubes.",
    "solution": "Suppose c³ = a³ + b³ with c ≤ 9 and, without loss of generality, a ≤ b < c. Since a³ ≤ b³, we need 2b³ ≥ c³. For c = 2, 3, 4 this already forces b ≥ c, impossible. For c = 5, 6, 7, 8, 9 it forces b = c − 1. The respective values c³ − (c−1)³ are 61, 91, 127, 169, 217, none of which is a positive perfect cube. Exhaustion therefore rules out every c < 10.",
    "hints": [
      "Assume a ≤ b < c and use a³ ≤ b³ to narrow b.",
      "Only c = 5 through 9 leave a candidate, namely b = c − 1."
    ],
    "rubric": [
      "Reduces to c ≤ 9 and orders a ≤ b < c without loss of generality.",
      "Justifies why only b = c − 1 remains for c = 5 through 9 and why smaller c are impossible.",
      "Checks 61, 91, 127, 169, and 217 are not positive cubes and concludes no example exists."
    ],
    "verify": "The possible differences lie strictly between consecutive cubes: 61 between 3³ and 4³, 91 and 127 between 4³ and 5³, and 169 and 217 between 5³ and 6³."
  },
  {
    "id": "rosen-ch1-ex-1-8-005",
    "mode": "rubric",
    "answer": "max(x,y) + min(x,y) = x + y for all real x and y.",
    "solution": "If x ≥ y, then max(x,y) = x and min(x,y) = y, so their sum is x + y. If x < y, the maximum is y and the minimum is x, again giving x + y. Equality x = y is covered by the first case.",
    "hints": [
      "In each case, name which input is the maximum and which is the minimum."
    ],
    "rubric": [
      "Treats x ≥ y and x < y separately.",
      "Substitutes the correct maximum and minimum in both cases.",
      "Notes or ensures that the cases cover all real pairs."
    ],
    "verify": "The left side always adds the same two numbers as the right side, merely in a possibly different order."
  },
  {
    "id": "rosen-ch1-ex-1-8-006",
    "mode": "rubric",
    "answer": "Both nested minima equal min(a,b,c), so min(a,min(b,c)) = min(min(a,b),c).",
    "solution": "The value min(a,min(b,c)) is the least of a, b, and c: it is no greater than all three, and any number no greater than all three is no greater than it. The same argument applies to min(min(a,b),c). Equivalently, split according to which of a, b, c is least; both expressions return that same least value in every case.",
    "hints": [
      "Interpret the nested expression as the least of all three numbers.",
      "A case proof can use the six possible orderings, grouping ties arbitrarily."
    ],
    "rubric": [
      "Shows both expressions equal the common least value of a, b, c, or exhausts all orderings.",
      "Handles ties and does not assume a strict ordering.",
      "Concludes associativity of min for all real triples."
    ],
    "readAloud": "The minimum of a and the minimum of b and c equals the minimum of the minimum of a and b, and c.",
    "verify": "Test (a,b,c) = (3,1,2): both expressions equal 1; test a = b = c to confirm ties cause no issue."
  },
  {
    "id": "rosen-ch1-ex-1-8-007",
    "mode": "rubric",
    "answer": "min(x,y) = (x + y − |x−y|)/2 and max(x,y) = (x + y + |x−y|)/2.",
    "solution": "The formulas are symmetric in x and y, so without loss of generality assume x ≥ y. Then |x−y| = x−y. Substitution gives (x+y−(x−y))/2 = y = min(x,y) and (x+y+(x−y))/2 = x = max(x,y). The case x ≤ y follows by interchanging the names x and y.",
    "hints": [
      "Explain why symmetry permits the assumption x ≥ y.",
      "Under that assumption, replace |x−y| by x−y."
    ],
    "rubric": [
      "Explicitly justifies without loss of generality by symmetry.",
      "Correctly simplifies both formulas when x ≥ y.",
      "States that interchanging x and y proves the remaining case, including equality."
    ],
    "verify": "For x = 7 and y = 2, the formulas give (9−5)/2 = 2 and (9+5)/2 = 7."
  },
  {
    "id": "rosen-ch1-ex-1-8-008",
    "mode": "rubric",
    "answer": "If x and y have opposite parity, then 5x + 5y is odd.",
    "solution": "The expression and hypothesis are symmetric, so without loss of generality let x = 2k be even and y = 2m+1 be odd. Then 5x+5y = 10k+10m+5 = 2(5k+5m+2)+1, which is odd. The other case follows by swapping x and y.",
    "hints": [
      "Write the even integer as 2k and the odd one as 2m+1.",
      "Factor the final expression as twice an integer plus one."
    ],
    "rubric": [
      "Uses symmetry to justify choosing x even and y odd.",
      "Expands 5x+5y correctly.",
      "Displays the result as 2q+1 for an integer q and covers the swapped case."
    ],
    "verify": "The expression is 5(x+y); the sum of opposite-parity integers is odd and 5 times an odd integer is odd."
  },
  {
    "id": "rosen-ch1-ex-1-8-009",
    "mode": "rubric",
    "answer": "For all real x and y, |x+y| ≤ |x|+|y|.",
    "solution": "If x and y have the same sign or either is zero, then |x+y| = |x|+|y|. If they have opposite signs, assume without loss of generality that |x| ≥ |y|. Then |x+y| = |x|−|y| ≤ |x|+|y|. These sign cases cover every real pair.",
    "hints": [
      "Split into same-sign and opposite-sign cases.",
      "For opposite signs, compare the magnitudes and assume |x| ≥ |y| without loss of generality."
    ],
    "rubric": [
      "Covers same signs, opposite signs, and zero without gaps.",
      "Proves equality for same signs and the required inequality for opposite signs.",
      "Justifies any magnitude-ordering assumption and concludes |x+y| ≤ |x|+|y|."
    ],
    "readAloud": "The absolute value of x plus y is no greater than the absolute value of x plus the absolute value of y.",
    "verify": "Examples (2,3) and (2,−3) give equality 5 = 5 and strict inequality 1 ≤ 5, respectively."
  },
  {
    "id": "rosen-ch1-ex-1-8-010",
    "mode": "rubric",
    "answer": "The integer 1 works because the sum of the positive integers not exceeding 1 is 1. The proof is constructive.",
    "solution": "Exhibit n = 1. Its only positive integer not exceeding it is 1, whose sum is 1, so the required equality holds. Supplying this explicit witness makes the existence proof constructive.",
    "hints": [
      "Test the smallest positive integer before looking for a formula."
    ],
    "rubric": [
      "Gives a valid positive integer and checks the defining equality.",
      "Identifies the displayed-witness proof as constructive."
    ],
    "verify": "For n = 1, the required sum and the integer itself are both 1, so the witness satisfies the original condition exactly."
  },
  {
    "id": "rosen-ch1-ex-1-8-011",
    "mode": "rubric",
    "answer": "The 100 integers 10001, 10002, …, 10100 are not perfect squares. This proof is constructive.",
    "solution": "We have 100² = 10000 and 101² = 10201. Every listed integer n satisfies 10000 < n < 10201, so it lies strictly between consecutive perfect squares and cannot itself be a square. There are exactly 10100−10001+1 = 100 integers in the list.",
    "hints": [
      "Look between 100² and 101², whose difference is 201.",
      "Count endpoints carefully."
    ],
    "rubric": [
      "Exhibits 100 explicit consecutive positive integers, or an equivalent valid block.",
      "Bounds them strictly between consecutive squares.",
      "Counts exactly 100 and calls the proof constructive."
    ],
    "verify": "The next square after 10000 is 10201, leaving 200 nonsquares between them; the chosen block uses 100 of these."
  },
  {
    "id": "rosen-ch1-ex-1-8-012",
    "mode": "rubric",
    "answer": "At least one of N = 2·10⁵⁰⁰+15 and N+1 = 2·10⁵⁰⁰+16 is not a perfect square. The usual either/or proof is nonconstructive.",
    "solution": "Suppose both were perfect squares. They would be consecutive positive squares, say m² and (m+1)². Their difference is 2m+1 > 1, whereas (N+1)−N = 1, a contradiction. Thus at least one is not a square. This argument does not identify which one, so it is nonconstructive as presented.",
    "hints": [
      "Assume both are squares and subtract them.",
      "Consecutive positive squares differ by more than 1."
    ],
    "rubric": [
      "Uses the fact that the two displayed integers are consecutive.",
      "Rules out both being squares using the gap between consecutive positive squares.",
      "Labels the non-identifying existence proof nonconstructive."
    ],
    "verify": "One can additionally identify N as nonsquare because N ≡ 3 (mod 4), but that stronger constructive observation is not needed for the requested either/or proof."
  },
  {
    "id": "rosen-ch1-ex-1-8-013",
    "mode": "rubric",
    "answer": "The consecutive integers 8 and 9 work: 8 = 2³ and 9 = 3².",
    "solution": "Exhibit the pair (8,9). They are consecutive, one is a perfect cube, and the other is a perfect square, proving the existential statement constructively.",
    "hints": [
      "List small cubes and squares and look for entries one unit apart."
    ],
    "rubric": [
      "Provides a pair of consecutive integers.",
      "Correctly identifies one as a cube and the other as a square."
    ],
    "verify": "9−8 = 1, 2³ = 8, and 3² = 9."
  },
  {
    "id": "rosen-ch1-ex-1-8-014",
    "mode": "rubric",
    "answer": "Among any three real numbers, some two have a nonnegative product. This proof is nonconstructive.",
    "solution": "If any number is zero, its product with either other number is zero. Otherwise each number is positive or negative; with three numbers and only two signs, two have the same sign. Their product is positive. The argument guarantees a pair without calculating or identifying which of the three enormous numbers is which, so it is nonconstructive.",
    "hints": [
      "Use the two categories positive and negative, and handle zero separately.",
      "Do not evaluate the displayed numbers."
    ],
    "rubric": [
      "Handles zero or incorporates it correctly.",
      "Uses pigeonhole reasoning to obtain two numbers of the same sign.",
      "Concludes their product is nonnegative and identifies the proof as nonconstructive without evaluating the numbers."
    ],
    "verify": "The product of two positives or two negatives is positive, while any product involving zero is zero."
  },
  {
    "id": "rosen-ch1-ex-1-8-015",
    "mode": "rubric",
    "answer": "True. Take x = 2 and y = ½log₂3; then x is rational, y is irrational, and xʸ = √3 is irrational.",
    "solution": "First, log₂3 is irrational: if it equaled p/q in lowest terms with q > 0, then 2ᵖ = 3ᵠ, impossible by unique prime factorization. Hence y = ½log₂3 is also irrational. Nevertheless 2ʸ = 2^(log₂3)/2 = √3, which is irrational.",
    "hints": [
      "Choose an irrational exponent using a logarithm.",
      "Arrange for 2 raised to twice that exponent to equal 3."
    ],
    "rubric": [
      "Gives rational x and irrational y with xʸ irrational.",
      "Justifies irrationality of the chosen exponent and of the resulting power.",
      "Uses a valid example such as x = 2, y = ½log₂3."
    ],
    "readAloud": "The expression x to the power y uses exponentiation; it is not x times y.",
    "verify": "Squaring the resulting value gives (2ʸ)² = 2^(2y) = 3, so the value is √3."
  },
  {
    "id": "rosen-ch1-ex-1-8-016",
    "mode": "rubric",
    "answer": "False. The rational numbers a = 2 and b = 1/2 give aᵇ = 2^(1/2) = √2, which is irrational.",
    "solution": "A single counterexample disproves the universal claim. Both 2 and 1/2 are rational, but raising 2 to the power 1/2 produces the irrational number √2.",
    "hints": [
      "Interpret the exponent 1/2 as a square root."
    ],
    "rubric": [
      "States the claim is false.",
      "Supplies rational a and b for which aᵇ is irrational.",
      "Correctly evaluates or identifies the counterexample, such as 2^(1/2) = √2."
    ],
    "readAloud": "The claim says a rational number raised to a rational power is always rational; one counterexample is enough.",
    "verify": "√2 is irrational by the standard contradiction proof, so all hypotheses hold while the conclusion fails."
  },
  {
    "id": "rosen-ch1-ex-1-8-017",
    "mode": "rubric",
    "answer": "Each formula says both that some element satisfies P and that no distinct element does; hence each expresses ∃!xP(x).",
    "solution": "Unique existence has two ingredients: existence of a witness and uniqueness of that witness. Formula (a) uses a biconditional to make satisfying P exactly equivalent to being the selected x. Formula (b) conjoins an existence clause with a separate uniqueness clause. Formula (c) puts both requirements on one existential witness.",
    "hints": [
      "Check every formula for an existence component and a uniqueness component.",
      "In (a), the biconditional gives both directions."
    ],
    "rubric": [
      "All three parts establish existence.",
      "All three parts establish that any satisfying element equals the witness.",
      "Part (a) uses both directions of P(y) ↔ x=y; parts (b) and (c) correctly parse their scopes."
    ],
    "readAloud": "There exists a unique x such that P of x means there is a witness, and every witness must equal it.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃x∀y(P(y) ↔ x=y) asserts that some x exists and that an arbitrary y satisfies P exactly when y=x. Thus x satisfies P and is the only such element.",
        "solution": "Take y=x in the biconditional to get P(x). For uniqueness, P(y) implies y=x.",
        "rubric": [
          "Derives P(x) by substituting y=x.",
          "Derives uniqueness from P(y) → y=x."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "The first conjunct ∃xP(x) gives existence; ∀x∀y(P(x)∧P(y) → x=y) says any two satisfying elements are equal, giving uniqueness.",
        "solution": "Apply the uniqueness clause with one variable set to an existing witness and the other to any satisfying element.",
        "rubric": [
          "Separately identifies the existence and uniqueness conjuncts.",
          "Explains why any satisfying element equals the witness."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "The existential witness satisfies P(x), and ∀y(P(y) → x=y) forces every satisfying y to equal that same x.",
        "solution": "Both existence and uniqueness are inside the scope of the same existential quantifier.",
        "rubric": [
          "Uses the same existential witness for existence and uniqueness.",
          "Correctly reads the implication for arbitrary y."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-8-018",
    "mode": "rubric",
    "answer": "The unique solution is x = (c−b)/a.",
    "solution": "Existence: substituting x = (c−b)/a gives ax+b = a(c−b)/a+b = c, valid because a ≠ 0. Uniqueness: if ax+b=c, subtract b and divide by a, forcing x=(c−b)/a.",
    "hints": [
      "Solve by subtracting b, then explain why division by a is legal.",
      "For uniqueness, show any solution must equal your displayed witness."
    ],
    "rubric": [
      "Displays x=(c−b)/a and verifies it satisfies the equation.",
      "Uses a ≠ 0 when dividing.",
      "Proves no other solution is possible."
    ],
    "verify": "Substitution gives c directly, and the algebraic rearrangement is reversible when a is nonzero."
  },
  {
    "id": "rosen-ch1-ex-1-8-019",
    "mode": "rubric",
    "answer": "The unique integer is c = (a+b)/2, the midpoint of a and b.",
    "solution": "Because a and b are odd, a+b is even, so c=(a+b)/2 is an integer. It satisfies a−c=(a−b)/2 and b−c=(b−a)/2, which have equal absolute values. Conversely, |a−c|=|b−c| implies (a−c)²=(b−c)²; factoring gives (a−b)(a+b−2c)=0. Since a ≠ b, c=(a+b)/2, proving uniqueness.",
    "hints": [
      "Equal distances on the number line make c a midpoint when a ≠ b.",
      "Square and factor to prove uniqueness algebraically."
    ],
    "rubric": [
      "Shows the midpoint is an integer using oddness of a and b.",
      "Verifies equal distances at the midpoint.",
      "Derives uniqueness using a ≠ b."
    ],
    "verify": "The factored equation offers only c as the second solution because the factor a−b is nonzero."
  },
  {
    "id": "rosen-ch1-ex-1-8-020",
    "mode": "rubric",
    "answer": "There is exactly one integer n with |r−n| < 1/2: the integer nearest to r.",
    "solution": "The intervals (n−1/2,n+1/2), as n ranges over the integers, cover every real number except half-integers m+1/2. Since r is irrational, it is not a half-integer, so it lies in exactly one such interval. Its integer n is the required unique witness.",
    "hints": [
      "Draw intervals of radius 1/2 around consecutive integers.",
      "Explain why irrational r cannot lie on a shared boundary."
    ],
    "rubric": [
      "Shows existence using a nearest integer or the covering intervals.",
      "Shows the relevant intervals are disjoint, proving uniqueness.",
      "Uses irrationality to exclude the half-integer boundary cases."
    ],
    "verify": "Consecutive intervals meet only at n+1/2, and strict distance <1/2 excludes that endpoint even apart from irrationality."
  },
  {
    "id": "rosen-ch1-ex-1-8-021",
    "mode": "rubric",
    "answer": "The unique integer is k = (n−1)/2.",
    "solution": "The equation is n=(k−2)+(k+3)=2k+1, so k=(n−1)/2. Since n is odd, n−1 is even and this k is an integer. Every solution must satisfy the same rearrangement, so it is unique.",
    "hints": [
      "Combine the two k terms before solving.",
      "Use oddness to show the resulting k is integral."
    ],
    "rubric": [
      "Derives n=2k+1 and k=(n−1)/2.",
      "Proves k is an integer because n is odd.",
      "States that the forced formula establishes uniqueness."
    ],
    "verify": "For this k, k−2=(n−5)/2 and k+3=(n+5)/2, whose sum is n."
  },
  {
    "id": "rosen-ch1-ex-1-8-022",
    "mode": "rubric",
    "answer": "Take n = ⌊x⌋ and ε = x−⌊x⌋. These are unique.",
    "solution": "By the floor definition, n ≤ x < n+1, so 0 ≤ x−n < 1; thus n=⌊x⌋ and ε=x−n work. If x=n+ε with 0≤ε<1, then n≤x<n+1. Exactly one integer n satisfies those bounds, namely ⌊x⌋, and then ε=x−n is forced.",
    "hints": [
      "Read 0≤ε<1 as 0≤x−n<1.",
      "The integer part is the floor, including for negative x."
    ],
    "rubric": [
      "Uses n=floor(x), ε=x−n and verifies 0≤ε<1.",
      "Derives n≤x<n+1 from any proposed representation.",
      "Proves both n and ε are uniquely determined."
    ],
    "readAloud": "Write x as an integer n plus a fractional part epsilon, where epsilon is at least zero and less than one.",
    "verify": "For x=−1.25, n=−2 and ε=0.75, not n=−1 and ε=−0.25."
  },
  {
    "id": "rosen-ch1-ex-1-8-023",
    "mode": "rubric",
    "answer": "Take n = ⌈x⌉ and ε = ⌈x⌉−x. These are unique.",
    "solution": "The ceiling satisfies x≤n<x+1, hence 0≤n−x<1, so ε=n−x works. Conversely, x=n−ε and 0≤ε<1 imply x≤n<x+1. Only n=⌈x⌉ satisfies these inequalities, and ε=n−x is then forced.",
    "hints": [
      "This time n−x, rather than x−n, must lie in [0,1).",
      "The required integer is the ceiling."
    ],
    "rubric": [
      "Uses n=ceiling(x), ε=n−x and verifies the range of ε.",
      "Derives x≤n<x+1 for any representation.",
      "Establishes uniqueness of both n and ε."
    ],
    "verify": "If x is already an integer, then n=x and ε=0, which is allowed by the inclusive lower bound."
  },
  {
    "id": "rosen-ch1-ex-1-8-024",
    "mode": "rubric",
    "answer": "For nonzero real x, x² + 1/x² ≥ 2.",
    "solution": "Start with (x−1/x)² ≥ 0. Expanding gives x²−2+1/x² ≥ 0; adding 2 yields x²+1/x² ≥ 2. This is forward reasoning from a true inequality to the desired conclusion.",
    "hints": [
      "Expand the suggested square, keeping the middle term −2.",
      "Add 2 to both sides."
    ],
    "rubric": [
      "Starts from (x−1/x)²≥0.",
      "Expands and rearranges correctly to the target inequality.",
      "Does not divide by x² in an invalid way and respects x≠0."
    ],
    "verify": "Equality occurs when x−1/x=0, namely x=±1, and both sides then equal 2."
  },
  {
    "id": "rosen-ch1-ex-1-8-025",
    "mode": "rubric",
    "answer": "Conjecture: for positive x and y, 2xy/(x+y) ≤ √(xy), with equality exactly when x=y.",
    "solution": "For example, x=1,y=4 gives harmonic mean 8/5 and geometric mean 2. In general, (x+y)²−4xy=(x−y)²≥0, so x+y≥2√(xy). Dividing the positive quantity 2xy/(x+y) by √(xy) or cross-multiplying gives 2xy/(x+y)≤√(xy). Equality requires (x−y)²=0, hence x=y.",
    "hints": [
      "Test an unequal pair and an equal pair.",
      "Cross-multiply only after noting all quantities are positive; use (x−y)²≥0."
    ],
    "rubric": [
      "States harmonic mean ≤ geometric mean for positive reals.",
      "Includes sample computations supporting the conjecture.",
      "Proves the inequality using (x−y)²≥0 or an equivalent valid argument and identifies equality at x=y."
    ],
    "readAloud": "The harmonic mean is two x y divided by x plus y; the geometric mean is the square root of x y.",
    "verify": "At x=y=a, both means equal a; for unequal positive values, the squared difference makes the inequality strict."
  },
  {
    "id": "rosen-ch1-ex-1-8-026",
    "mode": "rubric",
    "answer": "Conjecture: for positive x and y, (x+y)/2 ≤ √((x²+y²)/2), with equality exactly when x=y.",
    "solution": "For example, x=1,y=3 gives arithmetic mean 2 and quadratic mean √5>2. Since (x−y)²≥0, we have 2xy≤x²+y². Adding x²+y² gives (x+y)²≤2(x²+y²), so ((x+y)/2)²≤(x²+y²)/2. Both means are nonnegative, so taking square roots proves the conjecture; equality occurs precisely when x=y.",
    "hints": [
      "Compare squares to avoid manipulating square roots prematurely.",
      "Use (x−y)²≥0 to relate 2xy with x²+y²."
    ],
    "rubric": [
      "States arithmetic mean ≤ quadratic mean for positive reals.",
      "Provides sample computations.",
      "Proves the squared inequality and takes nonnegative square roots correctly, including the equality condition."
    ],
    "verify": "At x=y=a both means equal a; otherwise the strict squared difference gives strict inequality."
  },
  {
    "id": "rosen-ch1-ex-1-8-027",
    "mode": "rubric",
    "answer": "The final integer is always odd.",
    "solution": "Replacing j and k by |j−k| preserves the parity of the sum on the board because |j−k| ≡ j−k ≡ j+k (mod 2). Initially the sum is 1+2+⋯+2n = n(2n+1), which is odd because n is odd. Therefore the sum remains odd at every step, and the final single integer must be odd.",
    "hints": [
      "Track parity, not the actual values.",
      "Compare |j−k| with j+k modulo 2, then compute the initial sum."
    ],
    "rubric": [
      "Identifies sum parity as an invariant under each replacement.",
      "Computes the initial sum as n(2n+1) and shows it is odd for odd n.",
      "Concludes the last remaining integer is odd."
    ],
    "verify": "For n=1 the board starts with 1,2 and must end with |1−2|=1, which is odd."
  },
  {
    "id": "rosen-ch1-ex-1-8-028",
    "mode": "rubric",
    "answer": "Nine zeros can never be reached from the initial five ones and four zeros.",
    "solution": "A new bit is 0 exactly when its two neighboring old bits agree. Thus a predecessor of nine zeros must have all nine bits equal, so it is either nine zeros or nine ones. Also, every configuration produced by the rule has an even number of ones: modulo 2, the sum of new bits is twice the sum of old bits. Hence nine ones can never occur after a move. If nine zeros appeared, repeatedly stepping backward would force nine zeros at every preceding produced state and ultimately at the initial state, contradicting the five ones initially present.",
    "hints": [
      "Work backward: what arrangements produce nine zeros?",
      "Also prove that nine ones cannot be a produced configuration by counting ones modulo 2."
    ],
    "rubric": [
      "Shows an immediate predecessor of nine zeros must be all zeros or all ones.",
      "Uses the circular nine-bit rule to show every produced state has evenly many ones, excluding nine ones.",
      "Extends the backward argument to contradict the initial five ones and four zeros."
    ],
    "verify": "The parity sum works because around a circle each old bit occurs in exactly two new-bit calculations, so those contributions cancel modulo 2."
  },
  {
    "id": "rosen-ch1-ex-1-8-029",
    "mode": "rubric",
    "answer": "The last decimal digit of an integer's fourth power is always one of 0, 1, 5, or 6.",
    "solution": "Only the last digit r of the integer matters. For r=0,1,2,3,4,5,6,7,8,9, the last digits of r⁴ are respectively 0,1,6,1,6,5,6,1,6,1. These ten exhaustive cases produce exactly the set {0,1,5,6}.",
    "hints": [
      "Reduce the integer modulo 10.",
      "Make a table for the ten possible final digits."
    ],
    "rubric": [
      "States the exact possible set {0,1,5,6}.",
      "Justifies reduction to the ten last-digit cases.",
      "Computes all ten fourth-power residues correctly and concludes the conjecture."
    ],
    "verify": "Examples 2⁴=16, 3⁴=81, 5⁴=625, and 10⁴=10000 exhibit 6, 1, 5, and 0."
  },
  {
    "id": "rosen-ch1-ex-1-8-030",
    "mode": "rubric",
    "answer": "The possible final two digits of an integer square are 00, 01, 04, 09, 16, 21, 24, 25, 29, 36, 41, 44, 49, 56, 61, 64, 69, 76, 81, 84, 89, and 96.",
    "solution": "Work modulo 100. Every residue is r or 100−r for some 0≤r≤50, and (100−r)²≡r² (mod 100); symmetry also permits restricting to 0≤r≤25. Squaring r=0,…,25 modulo 100 gives 00,01,04,09,16,25,36,49,64,81,00,21,44,69,96,25,56,89,24,61,00,41,84,29,76,25. Removing duplicates and sorting gives the displayed list.",
    "hints": [
      "Use n² modulo 100 and the symmetry (100−r)²≡r².",
      "A table for r=0 through 25 is enough; retain leading zeros."
    ],
    "rubric": [
      "Gives exactly the 22 possible two-digit endings with leading zeros preserved.",
      "Explains why residue cases modulo 100 suffice and uses symmetry or an equivalent exhaustive method.",
      "Shows enough computations to verify that no endings are omitted or added."
    ],
    "readAloud": "Final two digits means the residue modulo one hundred, so endings such as zero four must keep the leading zero.",
    "verify": "There are 22 listed residues; every entry occurs in the r=0,…,25 table, and that table covers all integers by symmetry."
  },
  {
    "id": "rosen-ch1-ex-1-8-031",
    "mode": "rubric",
    "answer": "No positive integer n satisfies n²+n³=100.",
    "solution": "Since n²+n³ is increasing for positive n and n=5 already gives 150>100, only n=1,2,3,4 need checking. Their values are 2,12,36,80, respectively, none equal to 100.",
    "hints": [
      "Bound n above before testing cases.",
      "Evaluate n²(1+n) for n=1 through 4."
    ],
    "rubric": [
      "Shows n≥5 is impossible.",
      "Checks n=1,2,3,4 with values 2,12,36,80.",
      "Concludes no positive integer solution exists."
    ],
    "verify": "At n=4 the value is 80 and at n=5 it is 150, so monotonicity leaves no skipped possibility."
  },
  {
    "id": "rosen-ch1-ex-1-8-032",
    "mode": "rubric",
    "answer": "There are no integers x and y satisfying 2x²+5y²=14.",
    "solution": "The bounds give |x|≤2 and |y|≤1. If y=0, then x²=7, impossible for an integer. If |y|=1, then 2x²=9, again impossible. These are all possible integer cases, so no solution exists.",
    "hints": [
      "Use the nonnegative terms to bound each variable.",
      "Only y=0 and y=±1 need consideration."
    ],
    "rubric": [
      "Derives finite bounds covering every integer solution.",
      "Rules out y=0 using x²=7.",
      "Rules out |y|=1 using 2x²=9 and concludes exhaustion."
    ],
    "verify": "Squaring removes the sign ambiguity, so checking y=0 and |y|=1 covers y=±1 as well."
  },
  {
    "id": "rosen-ch1-ex-1-8-033",
    "mode": "rubric",
    "answer": "There are no positive integer solutions to x⁴+y⁴=625.",
    "solution": "Both variables are at most 5, and neither can be 5 because then the other fourth power would be 0. Thus x,y∈{1,2,3,4}, whose fourth powers are 1,16,81,256. A sum of two entries from this list is at most 512 and equals 625 only if one entry were 625−256=369, 625−81=544, 625−16=609, or 625−1=624; none is in the list. Hence all positive cases fail.",
    "hints": [
      "Bound x and y by 4 after excluding 5.",
      "Compare with the finite list 1,16,81,256."
    ],
    "rubric": [
      "Reduces to x,y in {1,2,3,4} and excludes 5 correctly.",
      "Uses the fourth powers 1,16,81,256 to exhaust all possible sums.",
      "Concludes that none sums to 625."
    ],
    "verify": "The maximum remaining sum is 256+256=512<625, so after excluding 5 the impossibility is immediate."
  },
  {
    "id": "rosen-ch1-ex-1-8-034",
    "mode": "rubric",
    "answer": "Infinitely many positive integer solutions exist; for t≥1 take (x,y,z)=(2t+1, 2t(t+1), 2t²+2t+1).",
    "solution": "Use m=t+1 and n=t in the suggested identities. Then x=m²−n²=2t+1, y=2mn=2t(t+1), and z=m²+n²=2t²+2t+1, all positive integers. Direct expansion gives (m²−n²)²+(2mn)²=(m²+n²)². Different t give different x, so this is an infinite family.",
    "hints": [
      "Choose consecutive m and n to guarantee positive x.",
      "Expand (m²−n²)²+(2mn)² and compare with (m²+n²)²."
    ],
    "rubric": [
      "Gives an infinite explicit family of positive integer triples.",
      "Verifies x²+y²=z² algebraically.",
      "Explains why the family contains infinitely many distinct solutions."
    ],
    "verify": "For t=1,2,3 the triples are (3,4,5), (5,12,13), and (7,24,25)."
  },
  {
    "id": "rosen-ch1-ex-1-8-035",
    "mode": "rubric",
    "answer": "At least one of a, b, c is at most ∛n.",
    "solution": "Suppose instead that a>∛n, b>∛n, and c>∛n. Multiplying these positive inequalities gives abc>n, contradicting abc=n. Therefore at least one factor must satisfy the claimed inequality.",
    "hints": [
      "Negate the three-way disjunction: all three factors would exceed ∛n.",
      "Multiply the inequalities."
    ],
    "rubric": [
      "Uses contradiction or an equivalent contrapositive.",
      "Correctly multiplies three positive inequalities to get abc>n.",
      "Concludes at least one factor is ≤∛n."
    ],
    "verify": "If all factors were equal, each would be exactly ∛n; making every factor larger necessarily enlarges their product."
  },
  {
    "id": "rosen-ch1-ex-1-8-036",
    "mode": "rubric",
    "answer": "∛2 is irrational.",
    "solution": "Suppose ∛2=p/q in lowest terms, with p,q integers and q≠0. Then p³=2q³, so p³ and hence p are even. Write p=2k. Substitution gives 8k³=2q³, so q³=4k³ is even; therefore q is even too. This contradicts p/q being in lowest terms.",
    "hints": [
      "Cube a hypothetical reduced fraction.",
      "Show first that p is even, then derive that q is even."
    ],
    "rubric": [
      "Assumes a reduced rational representation and clears the cube root correctly.",
      "Derives evenness of p and then q with valid algebra.",
      "Uses the common factor 2 to contradict lowest terms."
    ],
    "verify": "The conclusion q³=4k³ is even, so q must be even because the cube of an odd integer is odd."
  },
  {
    "id": "rosen-ch1-ex-1-8-037",
    "mode": "rubric",
    "answer": "For any rationals a<b, the number z=a+(b−a)/√2 is irrational and satisfies a<z<b.",
    "solution": "Because 0<1/√2<1, z lies strictly between a and b. If z were rational, then √2=(b−a)/(z−a) would be a quotient of rational numbers and hence rational, a contradiction. Thus z is the required irrational number.",
    "hints": [
      "Move a positive fraction of the distance from a to b.",
      "Choose the fraction 1/√2 and prove the result irrational by contradiction."
    ],
    "rubric": [
      "Constructs an explicit number strictly between arbitrary rationals a<b.",
      "Proves the constructed number irrational using irrationality of √2.",
      "Checks both strict inequalities."
    ],
    "verify": "Write z=(1−t)a+tb with t=1/√2; 0<t<1 immediately gives a<z<b."
  },
  {
    "id": "rosen-ch1-ex-1-8-038",
    "mode": "rubric",
    "answer": "Between a rational a and an irrational b, the midpoint z=(a+b)/2 is irrational and lies strictly between them.",
    "solution": "The midpoint of two distinct numbers lies strictly between them, whether a<b or b<a. If z were rational, then b=2z−a would be rational, contradicting the hypothesis. Therefore z is an irrational number between a and b.",
    "hints": [
      "Try the midpoint.",
      "If the midpoint were rational, solve for b and obtain a contradiction."
    ],
    "rubric": [
      "Uses a valid point strictly between the rational and irrational numbers.",
      "Proves that point irrational by contradiction.",
      "Handles either ordering a<b or b<a."
    ],
    "verify": "For a<b, a<(a+b)/2<b; reversing a and b gives the analogous inequalities."
  },
  {
    "id": "rosen-ch1-ex-1-8-039",
    "mode": "rubric",
    "answer": "The sum is maximized by sorting both sequences in nondecreasing order and minimized by sorting one in nondecreasing order and the other in nonincreasing order.",
    "solution": "Use pairwise exchanges. For values a≤b and c≤d, ac+bd≥ad+bc because ac+bd−ad−bc=(b−a)(d−c)≥0. Thus an inversion relative to sorted order can be swapped without decreasing the sum; repeating gives the sorted-sorted maximum. Reversing one sequence changes the exchange inequality's direction and gives the opposite-order minimum.",
    "hints": [
      "Compare ac+bd with ad+bc when a≤b and c≤d.",
      "Factor their difference as (b−a)(d−c)."
    ],
    "rubric": [
      "Both parts use a valid exchange argument or equivalent rearrangement reasoning.",
      "Part (a) shows similarly sorted orders maximize S.",
      "Part (b) shows oppositely sorted orders minimize S and addresses all orderings, not just examples."
    ],
    "readAloud": "S pairs each x sub i with a y value and adds the products; sorting controls which sizes are paired together.",
    "verify": "The identity ac+bd−ad−bc=(b−a)(d−c) is nonnegative for similarly ordered pairs and nonpositive when the second pair is oppositely ordered.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "S is maximized when both sequences are in nondecreasing order.",
        "solution": "If a≤b but the paired y-values occur as d>c, swapping them changes S by (b−a)(d−c)≥0. Repeated swaps remove all inversions without decreasing S, ending at nondecreasing order in both sequences.",
        "rubric": [
          "Derives the nonnegative exchange change with correct signs.",
          "Explains why repeated exchanges prove a global maximum at similarly sorted orders."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "S is minimized when one sequence is nondecreasing and the other nonincreasing.",
        "solution": "If a≤b and c≤d but the current pairing is ac+bd rather than ad+bc, swapping to the opposite pairing changes the sum by −(b−a)(d−c)≤0. Repeating yields opposite sorted orders and proves the global minimum.",
        "rubric": [
          "Uses the exchange identity to show opposite pairing does not increase S.",
          "Concludes a global minimum at opposite sorted orders."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-8-040",
    "mode": "rubric",
    "answer": "Yes. States (8-jug,5-jug,3-jug) can evolve as (8,0,0)→(3,5,0)→(3,2,3)→(6,2,0)→(6,0,2)→(1,5,2)→(1,4,3), leaving exactly 4 gallons in the 5-gallon jug.",
    "solution": "At each arrow, pour from one jug into another until the source is empty or the destination is full. Check that every amount stays within its jug's capacity and that the three entries always total 8. The final state has 4 gallons in the middle jug.",
    "hints": [
      "Represent a state by the ordered triple of amounts in the 8-, 5-, and 3-gallon jugs.",
      "Aim to leave 2 gallons in the 5-gallon jug and fill the 3-gallon jug; then create space for 2 more gallons."
    ],
    "rubric": [
      "Gives a finite legal pouring sequence from (8,0,0) to a state containing 4 gallons.",
      "Every pour respects source contents and destination capacities.",
      "The sequence conserves the total of 8 gallons and identifies where the 4 gallons are measured."
    ],
    "verify": "The successive triples all sum to 8, and the last is (1,4,3), with no capacity exceeded."
  },
  {
    "id": "rosen-ch1-ex-1-8-041",
    "mode": "rubric",
    "answer": "a) 6→3→10→5→16→8→4→2→1. b) 7→22→11→34→17→52→26→13→40→20→10→5→16→8→4→2→1. c) 17→52→26→13→40→20→10→5→16→8→4→2→1. d) 21→64→32→16→8→4→2→1.",
    "solution": "Apply 3n+1 to odd n and n/2 to even n, recording every result until 1 first appears. Parts (b) and (c) join the same tail at 17, and part (a) joins it at 10.",
    "hints": [
      "Write one term at a time; do not combine the odd and even steps.",
      "Stop when the sequence first reaches 1."
    ],
    "rubric": [
      "Each part follows the 3x+1 and halving rules exactly and reaches 1."
    ],
    "readAloud": "If n is even, replace it by n over two; if n is odd, replace it by three n plus one. Repeat until one appears.",
    "verify": "Every displayed odd-to-even transition uses 3n+1, and every even transition divides by 2.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "6→3→10→5→16→8→4→2→1",
        "checker": "rubric",
        "solution": "Since 6 is even, first halve it to get 3. Then apply the odd rule to 3 and 5, halving every even term, to obtain 6→3→10→5→16→8→4→2→1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 6→3→10→5→16→8→4→2→1",
          "Explains the required reasoning and cases: Since 6 is even, first halve it to get 3. Then apply the odd rule to 3 and 5, halving every even term, to obtain 6→3→10→5→16→8→4→2→1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "7→22→11→34→17→52→26→13→40→20→10→5→16→8→4→2→1",
        "checker": "rubric",
        "solution": "Apply the odd rule to 7, 11, 17, 13, and 5, halving whenever the current term is even, until reaching 1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 7→22→11→34→17→52→26→13→40→20→10→5→16→8→4→2→1",
          "Explains the required reasoning and cases: Apply the odd rule to 7, 11, 17, 13, and 5, halving whenever the current term is even, until reaching 1."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "17→52→26→13→40→20→10→5→16→8→4→2→1",
        "checker": "rubric",
        "solution": "Starting at 17 gives 52, then repeated halving and the odd step at 13 produce the listed tail to 1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 17→52→26→13→40→20→10→5→16→8→4→2→1",
          "Explains the required reasoning and cases: Starting at 17 gives 52, then repeated halving and the odd step at 13 produce the listed tail to 1."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "21→64→32→16→8→4→2→1",
        "checker": "rubric",
        "solution": "The odd step gives 3(21)+1=64=2⁶, so six halvings then lead directly to 1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 21→64→32→16→8→4→2→1",
          "Explains the required reasoning and cases: The odd step gives 3(21)+1=64=2⁶, so six halvings then lead directly to 1."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-8-042",
    "mode": "mixed",
    "answer": "a) 16→8→4→2→1. b) 11→34→17→52→26→13→40→20→10→5→16→8→4→2→1. c) 35→106→53→160→80→40→20→10→5→16→8→4→2→1. d) 113→340→170→85→256→128→64→32→16→8→4→2→1.",
    "solution": "Trace the parity rule separately for each starting integer. Every sequence reaches the power-of-two tail 16→8→4→2→1, so all four instances verify the conjecture.",
    "hints": [
      "Check the parity of the current term before every step.",
      "Once a sequence reaches a previously verified tail, you may quote that tail."
    ],
    "rubric": [
      "All four sequences obey the parity rule and terminate at 1 without omitted transitions."
    ],
    "verify": "The final odd steps are 5→16 in parts (b) and (c), and 85→256 in part (d); powers of two then halve to 1.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "16→8→4→2→1",
        "accepted": [
          "16 -> 8 -> 4 -> 2 -> 1",
          "16, 8, 4, 2, 1"
        ],
        "checker": "text",
        "solution": "Since 16=2⁴, four successive halvings give 8,4,2,1."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "11→34→17→52→26→13→40→20→10→5→16→8→4→2→1",
        "checker": "rubric",
        "solution": "Apply the odd rule at 11,17,13,5 and halve at every even term, obtaining the listed sequence.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 11→34→17→52→26→13→40→20→10→5→16→8→4→2→1",
          "Explains the required reasoning and cases: Apply the odd rule at 11,17,13,5 and halve at every even term, obtaining the listed sequence."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "35→106→53→160→80→40→20→10→5→16→8→4→2→1",
        "checker": "rubric",
        "solution": "The steps 35→106→53→160 are followed by halving to 5; then 5→16 and the power-of-two tail reaches 1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 35→106→53→160→80→40→20→10→5→16→8→4→2→1",
          "Explains the required reasoning and cases: The steps 35→106→53→160 are followed by halving to 5; then 5→16 and the power-of-two tail reaches 1."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "113→340→170→85→256→128→64→32→16→8→4→2→1",
        "checker": "rubric",
        "solution": "Odd steps produce 113→340 and 85→256; all intermediate even terms are halved, and 256=2⁸ then reaches 1.",
        "rubric": [
          "Gives a response equivalent to the authored model answer: 113→340→170→85→256→128→64→32→16→8→4→2→1",
          "Explains the required reasoning and cases: Odd steps produce 113→340 and 85→256; all intermediate even terms are halved, and 256=2⁸ then reaches 1."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-8-043",
    "mode": "rubric",
    "answer": "Yes, the board can be tiled.",
    "solution": "Assume the two removed corners are at the ends of the top row. The six remaining squares in that row form three horizontal dominoes. Each of the other seven rows is unchanged and has eight squares, so tile each with four horizontal dominoes. Other adjacent-corner placements follow by rotation or reflection.",
    "hints": [
      "Remove the corners from one row and tile what remains of that row first.",
      "Then handle each full row independently."
    ],
    "rubric": [
      "States that a tiling exists and supplies an explicit construction or unambiguous diagram.",
      "Covers all 62 remaining squares exactly once with dominoes.",
      "Accounts for adjacent-corner positions by symmetry if necessary."
    ],
    "verify": "The construction uses 3+7·4=31 dominoes, exactly the number needed to cover 62 squares."
  },
  {
    "id": "rosen-ch1-ex-1-8-044",
    "mode": "rubric",
    "answer": "Yes, an 8×8 board with all four corners removed can be tiled by dominoes.",
    "solution": "Tile the six squares remaining in the top row with three horizontal dominoes and likewise the six in the bottom row. Each of the six middle rows is full, so use four horizontal dominoes per row. This covers every remaining square exactly once.",
    "hints": [
      "Treat the shortened top and bottom rows separately from the six full middle rows."
    ],
    "rubric": [
      "States tileability and gives a valid explicit construction or clear diagram.",
      "Correctly handles both six-square outer rows and all six full middle rows.",
      "Covers all 60 squares exactly once using 30 nonoverlapping dominoes."
    ],
    "verify": "The count is 3+3+6·4=30 dominoes, covering 60 squares."
  },
  {
    "id": "rosen-ch1-ex-1-8-045",
    "mode": "rubric",
    "answer": "Every rectangular checkerboard with an even number of squares can be tiled by dominoes.",
    "solution": "Let the dimensions be m and n. If mn is even, at least one dimension is even; without loss of generality suppose n is even. In each of the m rows, pair columns 1–2, 3–4, …, (n−1)–n with horizontal dominoes. If m is even instead, rotate the construction and use vertical dominoes.",
    "hints": [
      "An even product means at least one side length is even.",
      "Pair consecutive squares along that even dimension."
    ],
    "rubric": [
      "Deduces that at least one rectangle dimension is even.",
      "Gives a complete pairing construction along an even dimension.",
      "Uses no unproved assumption about which dimension is even and covers all squares exactly once."
    ],
    "verify": "When n is even, each row uses n/2 dominoes, for mn/2 total, exactly matching the board area."
  },
  {
    "id": "rosen-ch1-ex-1-8-046",
    "mode": "rubric",
    "answer": "No, a 5×5 board with three corners removed cannot be tiled by dominoes.",
    "solution": "All four corners of a 5×5 checkerboard have the same color, say black. The original board has 13 black and 12 white squares. Removing three corners leaves 10 black and 12 white squares. Every domino covers one square of each color, so any tiled region must have equal color counts; therefore no tiling exists.",
    "hints": [
      "Check the colors of all four corners on an odd-sized board.",
      "Compare color counts after the removals."
    ],
    "rubric": [
      "Identifies all corners as having the same color and obtains 10 versus 12 after removal.",
      "States that every domino covers one square of each color.",
      "Uses the unequal color counts to rule out a tiling."
    ],
    "verify": "There are 22 squares left, so area alone does not rule out a tiling; the two-square color imbalance is decisive."
  },
  {
    "id": "rosen-ch1-ex-1-8-047",
    "mode": "rubric",
    "answer": "No domino tiling exists for the 4×4 board with squares 1 and 16 removed.",
    "solution": "Exhaust the two possible covers of square 2, writing (i,j) for the domino covering squares i and j. Case A: (2,3) forces, in order, (4,8), (12,11), (7,6), (5,9), and (15,14); now square 10 has no uncovered neighbor. Case B: (2,6) forces (5,9), then (13,14), then (10,11); now square 15 has no uncovered neighbor. These are the only initial cases, and every later placement is forced, so no tiling exists.",
    "hints": [
      "Start with (2,3) or (2,6), and always choose the lowest-numbered uncovered square next.",
      "A forced dead end occurs when an uncovered square has no uncovered adjacent partner."
    ],
    "rubric": [
      "Splits on the only two dominoes that can cover square 2.",
      "In the (2,3) branch derives the forced chain (4,8),(12,11),(7,6),(5,9),(15,14), or an equivalent exhaustive subcase analysis, and isolates square 10.",
      "In the (2,6) branch derives (5,9),(13,14),(10,11), or an equivalent exhaustive analysis, and isolates square 15.",
      "Uses nonoverlapping placements and concludes no tiling exists."
    ],
    "verify": "In Case A, square 10's neighbors 6, 9, 11, and 14 are already covered. In Case B, square 15's neighbors 11, 14, and 16 are covered or removed. Thus both exhaustive branches fail; the same-color corner imbalance independently confirms the result."
  },
  {
    "id": "rosen-ch1-ex-1-8-048",
    "mode": "rubric",
    "answer": "After removing any one white and one black square, the remaining 62 squares can always be tiled by dominoes.",
    "solution": "The barriers in the figure describe a single closed serpentine tour through all 64 squares: successive squares on the tour are adjacent, and colors alternate around the tour. Delete the two removed squares from this cycle. The cycle splits into two possibly empty open paths. Because the removed squares have opposite colors, each path contains an even number of squares; tile each path by pairing its squares consecutively. Every remaining square lies on exactly one path, so this is a domino tiling.",
    "hints": [
      "Follow the closed tour indicated by the barrier diagram rather than trying arbitrary row tilings.",
      "Removing two vertices from a cycle leaves two possibly empty paths; use opposite colors to show both have even length."
    ],
    "rubric": [
      "Interprets the figure as a closed adjacent-square tour through all 64 cells.",
      "Explains that deleting the two removed cells leaves two possibly empty paths covering the remaining board.",
      "Uses alternating colors and opposite-color removals to prove both paths have even length.",
      "Pairs consecutive cells along each path to obtain a valid domino tiling."
    ],
    "readAloud": "The picture gives a loop through every square. Cutting out one square of each color leaves one or two even-length chains, and each chain can be paired into dominoes.",
    "verify": "An alternating cycle has equal colors at even graph distance. Opposite-color cuts therefore leave an even number of vertices on each of the two segments, so no path has an unpaired endpoint."
  },
  {
    "id": "rosen-ch1-ex-1-8-049",
    "mode": "rubric",
    "answer": "Remove the two squares adjacent to a corner, plus any two other squares of the corner's color. This uses two squares of each color and leaves the corner isolated, so no domino tiling is possible.",
    "solution": "Using rows and columns numbered 1 through 8, remove (1,2) and (2,1), which are white if corner (1,1) is black. Also remove black squares (1,3) and (2,2), for example. Exactly two white and two black squares have been removed. The remaining corner (1,1) now has no adjacent remaining square, so it cannot be covered by a domino.",
    "hints": [
      "Balanced color counts are necessary but not sufficient; try isolating a square.",
      "Delete both neighbors of a corner, then choose the other two deletions to meet the color totals."
    ],
    "rubric": [
      "Specifies removing exactly two white and two black squares, with coordinates or a clear diagram.",
      "Leaves at least one remaining square isolated or gives another rigorous obstruction.",
      "Concludes that no domino tiling exists despite balanced total colors."
    ],
    "verify": "A corner has only two neighbors. Once both are removed, no legal domino placement can include that corner."
  },
  {
    "id": "rosen-ch1-ex-1-8-050",
    "mode": "rubric",
    "answer": "Exactly the squares (3,3), (3,6), (6,3), and (6,6), up to the board's rotations and reflections, can be removed to permit a straight-triomino tiling.",
    "solution": "Color the board by (r+c) mod 3 and separately by (r−c) mod 3, using zero-based indices. Every straight triomino covers one square of each color. In the full 8×8 board, the surplus color in the first coloring is 1 and in the second is 0. A removed square must therefore satisfy r+c≡1 and r−c≡0 (mod 3), giving precisely (r,c)=(2,2),(2,5),(5,2),(5,5), or the stated one-based positions. Tileability is shown by rotations of an explicit 21-triomino diagram for removal (3,3): rows F D C C C A A A / F D E E E G G G / F D ## O P P P H / I I I O Q Q Q H / J J J O R R R H / K K K N S T U B / M M M N S T U B / L L L N S T U B, where each letter occurs in three collinear consecutive cells and ## is removed.",
    "hints": [
      "Use two independent 3-colorings, one along diagonals r+c and one along r−c.",
      "After narrowing to four positions, construct one tiling and rotate it."
    ],
    "rubric": [
      "Derives necessary residue conditions from both 3-colorings and explains the one-of-each-color property.",
      "Finds exactly (3,3),(3,6),(6,3),(6,6), with no extra candidates.",
      "Provides a valid explicit tiling for one case and uses board symmetries for the others."
    ],
    "readAloud": "A straight triomino is three consecutive squares in a row or column. The symbols r plus c and r minus c describe its two diagonal colorings.",
    "verify": "The supplied diagram has 21 letters, each labeling exactly one horizontal or vertical triomino, plus the single removed cell; all 64 board positions are accounted for."
  },
  {
    "id": "rosen-ch1-ex-1-8-051",
    "mode": "rubric",
    "answer": "a) The five free tetrominoes are I, O, T, L, and skew S/Z. b) I, O, T, and L can each tile the 8×8 checkerboard; the skew tetromino cannot.",
    "solution": "Represent I by four squares in a row, O by a 2×2 block, T by three squares with one attached at the middle, L by three in a line with one attached at an end, and S by two staggered dominoes. I tiles each row in two groups of four; O tiles by 2×2 blocks. In each following grid, every letter labels one tetromino. T tiling: G G G K L A A A / H G K K L L A B / H H J K L O B B / H J J J O O P B / I I I N M O P P / E I N N M M P C / E E F N M D C C / E F F F D D D C. L tiling: M M M N B B B A / M N N N B A A A / O O O P E E E D / O P P P E D D D / K L L L G G G F / K L J J G F F F / K K I J H H H C / I I I J H C C C. For skew S/Z, inspect the top-right square (1,8). Its only possible coverings are {(1,8),(2,7),(2,8),(3,7)} or {(1,7),(1,8),(2,6),(2,7)}. In the first case, the rightmost uncovered top-row cell successively forces horizontal skew tiles beginning at columns 6, 4, and 2, ultimately leaving (1,1) uncoverable. In the second, analogous forced tiles beginning at columns 5 and 3 leave (1,2) uncoverable. Thus even the top row cannot be completed.",
    "hints": [
      "Count shapes up to rotation and reflection.",
      "Use labeled grids for T and L; for S/Z, exhaust the two possible covers of a top corner and follow forced placements along the top row."
    ],
    "rubric": [
      "Part (a) depicts all and only the five free tetrominoes: I,O,T,L,S/Z.",
      "Part (b) gives valid explicit tilings or repeatable constructions for I,O,T,L.",
      "Part (b) exhausts both possible skew-tile coverings of a corner and follows the forced top-row placements to a contradiction."
    ],
    "verify": "Each T or L diagram has 16 letters A through P, each occurring as one valid tetromino, and covers all 64 cells. Both skew boundary branches end with an uncovered top-row cell having no legal placement.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "I: XXXX. O: XX/XX. T: XXX/.X. L: XXX/X.. Skew S: .XX/XX. (each X is one square, up to rotation and reflection).",
        "solution": "Enumerate connected four-square shapes while identifying rotations and reflections. These five are the only free tetrominoes.",
        "rubric": [
          "Shows five distinct connected four-square shapes.",
          "Includes I,O,T,L,S/Z and identifies rotations and reflections appropriately."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "I, O, T, and L tile the standard 8×8 checkerboard; skew S/Z does not.",
        "solution": "Tile I by length-4 row segments and O by 2×2 blocks; use the explicit T and L grids in the full solution. For S/Z, the two possible covers of (1,8) each force a sequence of top-row tiles that ends with (1,1) or (1,2) uncoverable, so no full-board tiling exists.",
        "rubric": [
          "Correctly classifies all five shapes.",
          "Supplies or describes verifiable tilings for I,O,T,L.",
          "Exhausts the two skew corner cases and derives a forced top-row contradiction."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-1-8-052",
    "mode": "rubric",
    "answer": "No, a 10×10 checkerboard cannot be tiled by straight tetrominoes.",
    "solution": "Color square (r,c), using zero-based indices, by (r+c) mod 4. Every horizontal or vertical straight tetromino covers four consecutive values of r+c and therefore exactly one square of each color. The 10×10 board has color counts 25,26,25,24 for colors 0,1,2,3, respectively, not 25 of each. Since 25 tetrominoes would require equal counts, no tiling exists.",
    "hints": [
      "Color diagonals cyclically with four colors using (r+c) mod 4.",
      "Compare the board's four color counts with what 25 straight tetrominoes would require."
    ],
    "rubric": [
      "Defines a valid four-coloring modulo r+c or an equivalent invariant.",
      "Shows every straight tetromino covers exactly one square of each color.",
      "Computes unequal board color counts 25,26,25,24 and uses them to disprove tileability."
    ],
    "verify": "Area alone permits 25 tiles, but those tiles would cover 25 squares of every color; the actual diagonal-color counts do not match."
  },
  {
    "id": "rosen-ch1-ex-review-001",
    "mode": "mixed",
    "answer": "a) The negation of p is the proposition ¬p, which is true exactly when p is false. b) This is not a boring course.",
    "solution": "Negation reverses truth value; it does not require finding an opposite adjective. Add “not” to the original statement.",
    "hints": [
      "Think of negation as switching T to F and F to T.",
      "Negate the whole claim, not just the word “boring.”"
    ],
    "readAloud": "Not p is true precisely when p is false.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The negation of a proposition p is ¬p (“not p”); it has the opposite truth value from p.",
        "solution": "If p is true, ¬p is false; if p is false, ¬p is true.",
        "rubric": [
          "Defines ¬p as “not p.”",
          "States that p and ¬p always have opposite truth values."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "This is not a boring course",
        "accepted": [
          "This course is not boring",
          "It is not the case that this is a boring course"
        ],
        "checker": "text",
        "solution": "Place “not” before “a boring course,” equivalently say that the course is not boring."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-002",
    "mode": "rubric",
    "answer": "a) In rows TT, TF, FT, FF for (p,q): p∨q is T,T,T,F; p∧q is T,F,F,F; p⊕q is F,T,T,F; p→q is T,F,T,T; p↔q is T,F,F,T. b) Disjunction: I’ll go to the movies tonight or I’ll finish my discrete mathematics homework (or both). Conjunction: I’ll go to the movies tonight and I’ll finish my discrete mathematics homework. Exclusive or: Either I’ll go to the movies tonight or I’ll finish my discrete mathematics homework, but not both. Conditional: If I go to the movies tonight, then I’ll finish my discrete mathematics homework. Biconditional: I’ll go to the movies tonight if and only if I finish my discrete mathematics homework.",
    "solution": "Use inclusive or for disjunction, both-true for conjunction, exactly-one-true for exclusive or, false only T→F for conditional, and equal truth values for biconditional. Then substitute the two English propositions without changing those meanings.",
    "hints": [
      "List the four (p,q) rows before defining each connective.",
      "For part (b), preserve “but not both” in the exclusive or."
    ],
    "rubric": [
      "Part (a) gives the correct four-row truth pattern for each of the five connectives.",
      "Disjunction is inclusive; exclusive or excludes the both-true case.",
      "The conditional is false only when p is true and q is false; the biconditional requires matching truth values.",
      "Part (b) supplies all five English statements with movie-going as p and homework as q."
    ],
    "readAloud": "p or q; p and q; p exclusive-or q; if p then q; p if and only if q.",
    "verify": "Check the TF row: only disjunction, exclusive or, and the biconditional’s negation behave differently from conjunction; the conditional is false there.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For (p,q)=TT,TF,FT,FF: p∨q=(T,T,T,F), p∧q=(T,F,F,F), p⊕q=(F,T,T,F), p→q=(T,F,T,T), and p↔q=(T,F,F,T).",
        "solution": "Evaluate each connective independently on all four assignments.",
        "rubric": [
          "All five truth patterns are complete and correct in a clearly stated row order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "p∨q: I’ll go to the movies tonight or finish my discrete mathematics homework, possibly both. p∧q: I’ll do both. p⊕q: I’ll do exactly one of the two. p→q: If I go to the movies tonight, then I’ll finish my discrete mathematics homework. p↔q: I’ll go to the movies tonight if and only if I finish my discrete mathematics homework.",
        "solution": "Replace p and q in each connective’s standard English reading.",
        "rubric": [
          "Includes correct disjunction, conjunction, exclusive or, conditional, and biconditional statements.",
          "Keeps inclusive or distinct from exactly-one exclusive or."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-003",
    "mode": "rubric",
    "answer": "a) Five readings are: if p, then q; p implies q; q if p; q whenever p; p only if q. Others include q is necessary for p and p is sufficient for q. b) For p→q, the converse is q→p and the contrapositive is ¬q→¬p. c) Converse: If I go for a walk in the woods, then it is sunny tomorrow. Contrapositive: If I do not go for a walk in the woods, then it is not sunny tomorrow.",
    "solution": "In p→q, p is the hypothesis and q the conclusion. Converse swaps them; contrapositive swaps and negates both. Apply those operations mechanically to the sunny/walk statement.",
    "hints": [
      "Underline p and q before swapping anything.",
      "Contrapositive means reverse direction and negate both sides."
    ],
    "rubric": [
      "Part (a) gives at least five correct English forms without reversing hypothesis and conclusion.",
      "Part (b) defines converse as q→p and contrapositive as ¬q→¬p.",
      "Part (c) correctly swaps for the converse and swaps and negates for the contrapositive."
    ],
    "startHere": "Write p = “it is sunny tomorrow” and q = “I will go for a walk in the woods.”",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If p, then q; p implies q; q if p; q whenever p; p only if q; q is necessary for p; p is sufficient for q.",
        "solution": "Each wording preserves p as a sufficient condition and q as the resulting necessary condition.",
        "rubric": [
          "Provides at least five distinct, logically correct readings of p→q."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "The converse of p→q is q→p; its contrapositive is ¬q→¬p.",
        "solution": "Converse swaps; contrapositive swaps and negates.",
        "rubric": [
          "Both definitions have the correct order and negations."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Converse: If I go for a walk in the woods, then it is sunny tomorrow. Contrapositive: If I do not go for a walk in the woods, then it is not sunny tomorrow.",
        "solution": "Substitute the named weather and walking propositions into q→p and ¬q→¬p.",
        "rubric": [
          "Gives the correct converse.",
          "Gives the correct contrapositive with both components negated."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-004",
    "mode": "rubric",
    "answer": "a) Two propositions are logically equivalent when they have the same truth value under every assignment of truth values to their variables. b) Compare their complete truth tables, or transform one into the other using established logical equivalences. c) First, ¬p∨(r→¬q) ≡ ¬p∨(¬r∨¬q) ≡ ¬p∨¬q∨¬r by implication and associativity/commutativity. Second, both expressions are false only in the row p=T,q=T,r=T and true in the other seven rows, so their truth tables agree.",
    "solution": "For the algebraic method, replace r→¬q with ¬r∨¬q, then reorder and regroup the disjunctions. For the truth-table method, observe that the second expression is the negation of p∧q∧r; the first has the same unique false row.",
    "hints": [
      "Use A→B ≡ ¬A∨B.",
      "A disjunction is false only when every disjunct is false."
    ],
    "rubric": [
      "Defines logical equivalence over every truth assignment.",
      "Names truth tables and equivalence transformations as valid methods.",
      "Algebraically derives ¬p∨¬q∨¬r using implication and valid disjunction laws.",
      "Independently verifies equivalence by truth tables or by identifying the unique false row."
    ],
    "readAloud": "Not p, or the implication r implies not q.",
    "verify": "At p=q=r=T both sides are F; at every other assignment at least one outer negated disjunct is T.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "They have identical truth values for every possible truth assignment to their propositional variables.",
        "solution": "Equivalence means agreement row by row, not merely in one situation.",
        "rubric": [
          "States same truth value in every possible case."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Construct and compare truth tables, or use a chain of known logical equivalences to rewrite one expression as the other.",
        "solution": "Both methods establish agreement in all cases.",
        "rubric": [
          "Includes truth-table comparison and algebraic use of logical equivalences."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Algebra: ¬p∨(r→¬q) ≡ ¬p∨(¬r∨¬q) ≡ ¬p∨¬q∨¬r. Truth table: both are false exactly when p=q=r=T and true otherwise.",
        "solution": "The first derivation uses implication and associativity/commutativity; the second checks all eight rows via the unique false row.",
        "rubric": [
          "Supplies a valid equivalence derivation.",
          "Supplies a separate complete truth-table or case-based verification."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-005",
    "mode": "mixed",
    "answer": "a) For each T row, form the conjunction of literals that is true exactly in that row; take the disjunction of these conjunctions (use F if there are none). b) This constructs every possible truth table using only ¬,∧,∨, so those operators are functionally complete. c) Yes: NAND alone, and also NOR alone, is functionally complete.",
    "solution": "A T row with p=T,q=F contributes p∧¬q, for example. The disjunction is true precisely on the selected rows. NAND suffices because ¬p≡p NAND p and p∧q can be negated with NAND; disjunction follows using negation and conjunction.",
    "hints": [
      "Use p for T and ¬p for F in each row conjunction.",
      "Functional completeness means every truth function can be built."
    ],
    "rubric": [
      "Part (a) constructs one correct minterm per true row and disjoins them.",
      "Part (b) connects representability of every truth table to functional completeness.",
      "Part (c) identifies NAND or NOR as a singleton functionally complete operator."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For every row whose output is T, conjoin each variable or its negation according to that row. Disjoin all these row conjunctions; if no output is T, use a contradiction.",
        "solution": "Each conjunction selects exactly one input row, so the disjunction reproduces the table.",
        "rubric": [
          "Uses the correct literal signs in every minterm.",
          "Disjoins exactly the minterms for true rows and handles the all-false table."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Every truth table has a disjunctive-normal-form representation built solely from ¬,∧,∨; hence these operators express every truth function.",
        "solution": "The construction in (a) is uniform for arbitrary tables.",
        "rubric": [
          "Explicitly concludes that arbitrary truth functions are constructible from only ¬,∧,∨."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "NAND",
        "accepted": [
          "NOR",
          "Yes, NAND",
          "Yes, NOR",
          "Yes: NAND (also NOR)"
        ],
        "checker": "text",
        "solution": "NAND alone is functionally complete; NOR alone also works."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-006",
    "mode": "rubric",
    "answer": "∀xP(x) says P(x) is true for every x in the domain; ∃xP(x) says P(x) is true for at least one x. Their negations are ¬∀xP(x)≡∃x¬P(x) and ¬∃xP(x)≡∀x¬P(x).",
    "solution": "To negate “every,” exhibit at least one failure; to negate “some,” require every element to fail. The domain stays unchanged.",
    "hints": [
      "Move negation past a quantifier by switching ∀ and ∃.",
      "Negate the predicate as well as changing the quantifier."
    ],
    "rubric": [
      "Correctly defines universal quantification over the whole domain.",
      "Correctly defines existential quantification as at least one domain element.",
      "Gives both De Morgan negation equivalences with the predicate negated."
    ],
    "readAloud": "For all x, P of x; there exists x such that P of x.",
    "verify": "The four forms cover “all pass,” “some fail,” “some pass,” and “all fail.”"
  },
  {
    "id": "rosen-ch1-ex-review-007",
    "mode": "rubric",
    "answer": "a) ∃x∀yP(x,y) requires one fixed x that works with every y; ∀y∃xP(x,y) allows x to depend on y. b) On the integers, let P(x,y) be x=y. Then ∃x∀y(x=y) is false, but ∀y∃x(x=y) is true by choosing x=y.",
    "solution": "Read quantifiers left to right. An outer existential chooses before the inner universal; an inner existential may choose after each outer universal value. Equality supplies the required asymmetry.",
    "hints": [
      "Ask whether one witness must work universally.",
      "Try P(x,y): x=y on a domain with at least two elements."
    ],
    "rubric": [
      "Explains the shared-x versus y-dependent-x distinction.",
      "Provides a predicate and domain for which the two formulas have different truth values.",
      "Correctly evaluates both formulas for that example."
    ],
    "startHere": "Circle the existential quantifier in each formula and note whether it occurs before or after the universal quantifier.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The first says some single x satisfies P(x,y) for all y; the second says each y has some x, possibly a different x for each y.",
        "solution": "Quantifier order controls whether the existential witness is shared.",
        "rubric": [
          "Identifies one fixed witness in the first and potentially dependent witnesses in the second."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Let the domain be integers and P(x,y): x=y. The first formula is false; the second is true by taking x=y.",
        "solution": "No integer equals every integer, but each integer equals itself.",
        "rubric": [
          "Gives a valid counterexample with opposite truth values and a short verification."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-008",
    "mode": "rubric",
    "answer": "An argument is valid when, whenever all its premises are true, its conclusion must also be true. Let p = “the earth is flat” and q = “you can sail off the edge.” The premises are p→q and ¬q. By modus tollens, ¬p follows: the earth is not flat.",
    "solution": "Validity concerns the logical form, not whether the premises are factually true. The displayed argument has the valid form p→q, ¬q, therefore ¬p.",
    "hints": [
      "Name the two atomic propositions.",
      "A false consequent together with a true conditional forces a false hypothesis."
    ],
    "rubric": [
      "Defines validity as truth of the conclusion in every case where all premises are true.",
      "Symbolizes the premises as p→q and ¬q.",
      "Uses modus tollens to conclude ¬p."
    ],
    "verify": "The only row making p→q and ¬q simultaneously true has p=F, so the conclusion ¬p is true there."
  },
  {
    "id": "rosen-ch1-ex-review-009",
    "mode": "rubric",
    "answer": "Let Z(x) mean x is a zebra and S(x) mean x has stripes. From ∀x(Z(x)→S(x)), universal instantiation gives Z(Mark)→S(Mark). Together with Z(Mark), modus ponens gives S(Mark).",
    "solution": "Instantiate the universal premise at Mark, then apply modus ponens to the instantiated conditional and the second premise.",
    "hints": [
      "Replace the general x by Mark first.",
      "After instantiation, use the standard “if p and p→q, then q” rule."
    ],
    "rubric": [
      "Represents the universal zebra premise correctly.",
      "Applies universal instantiation to Mark.",
      "Applies modus ponens and concludes Mark has stripes."
    ]
  },
  {
    "id": "rosen-ch1-ex-review-010",
    "mode": "rubric",
    "answer": "a) Direct: assume p and derive q. Contraposition: prove ¬q→¬p. Contradiction: assume p and ¬q and derive a contradiction. b) Direct: if n=2k, then n+4=2(k+2). Contraposition: if n+4 is odd, then n=(n+4)−4 is odd. Contradiction: if n is even but n+4 is odd, then n=2k gives n+4=2(k+2), both even and odd, impossible.",
    "solution": "All three proofs use parity and closure under integer arithmetic. In the contradiction proof, the negation of p→q is p∧¬q, so assume n even and n+4 odd simultaneously.",
    "hints": [
      "Write even n as 2k.",
      "For contraposition, begin with n+4 odd, not with n odd.",
      "For contradiction, retain both n even and n+4 odd until they clash."
    ],
    "rubric": [
      "Correctly describes all three proof strategies for p→q.",
      "Direct proof writes n=2k and factors n+4=2(k+2).",
      "Contraposition proves odd n+4 implies odd n.",
      "Contradiction assumes even n and odd n+4 and derives the parity conflict."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A direct proof assumes p and derives q; contraposition proves ¬q→¬p; contradiction assumes p∧¬q and derives an impossibility.",
        "solution": "These establish the conditional through its definition, its contrapositive, and exclusion of its only false case.",
        "rubric": [
          "All three definitions use the correct assumptions and target."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Direct: n=2k ⇒ n+4=2(k+2). Contraposition: n+4 odd ⇒ n=(n+4)−4 odd. Contradiction: n even and n+4 odd would give n+4=2(k+2), contradicting oddness.",
        "solution": "Each route proves the same parity implication with a different logical structure.",
        "rubric": [
          "Presents a valid direct proof, contrapositive proof, and contradiction proof."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-011",
    "mode": "rubric",
    "answer": "a) Prove both p→q and q→p. b) If 3n+2 is odd, then 3n is odd, so n is odd; hence 9n+5 is odd+odd, which is even. Conversely, if 9n+5 is even, then 9n is odd, so n is odd; hence 3n+2 is odd+even, which is odd.",
    "solution": "A biconditional needs both directions. Parity of a product with an odd coefficient matches parity of n, while adding an even constant preserves parity and adding 5 reverses it.",
    "hints": [
      "Split “if and only if” into two implications.",
      "An integer n is even exactly when 3n (or 9n) is even."
    ],
    "rubric": [
      "Part (a) requires proofs of both conditional directions.",
      "Forward direction derives odd n from odd 3n+2 and concludes 9n+5 even.",
      "Reverse direction derives odd n from even 9n+5 and concludes 3n+2 odd."
    ],
    "verify": "Test n even and n odd: (3n+2,9n+5) has parities (even,odd) for even n and (odd,even) for odd n.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Prove p→q and q→p separately; together they establish p↔q.",
        "solution": "The biconditional is equivalent to the conjunction of the two conditionals.",
        "rubric": [
          "States both required directions."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "3n+2 odd ⇒ 3n odd ⇒ n odd ⇒ 9n+5 even; conversely, 9n+5 even ⇒ 9n odd ⇒ n odd ⇒ 3n+2 odd.",
        "solution": "Use parity of odd multiples and parity changes under adding odd or even constants.",
        "rubric": [
          "Proves the forward and reverse implications with valid parity reasoning."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-012",
    "mode": "rubric",
    "answer": "No. The implications give p3→p1→p2 and p4→p2 but provide no path back from p1 or p2 to p3 or p4. One sufficient collection is p1→p2, p2→p3, p3→p4, and p4→p1, a cycle through all four statements.",
    "solution": "Statements connected by a directed cycle of valid implications must share truth value. The proposed three implications do not form such a cycle; a four-edge cycle does.",
    "hints": [
      "Draw an arrow diagram.",
      "To prove all four equivalent, every statement must reach every other by following arrows."
    ],
    "rubric": [
      "Answers that the displayed implications are insufficient.",
      "Explains the missing reverse reachability or absence of a cycle.",
      "Gives a valid alternative collection whose implication paths connect all four in both directions."
    ]
  },
  {
    "id": "rosen-ch1-ex-review-013",
    "mode": "mixed",
    "answer": "a) Exhibit a counterexample: a domain element c for which P(c) is false. b) n=1 is a counterexample because 1²=1<2=2·1.",
    "solution": "The negation of ∀nP(n) is ∃n¬P(n). Testing the smallest positive integer already disproves the displayed inequality.",
    "hints": [
      "A single failing example disproves a universal claim.",
      "Try n=1 before doing algebra."
    ],
    "readAloud": "The claim says n squared is at least 2 n for every positive integer n.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Find some c in the domain such that P(c) is false; this proves ∃x¬P(x), equivalent to ¬∀xP(x).",
        "solution": "One counterexample is enough to refute a universal proposition.",
        "rubric": [
          "Requires a concrete domain element and verifies that the predicate fails there."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1",
        "accepted": [
          "1.0",
          "+1"
        ],
        "checker": "number",
        "solution": "At n=1, n²=1 but 2n=2, so n²≥2n is false."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-review-014",
    "mode": "rubric",
    "answer": "A constructive existence proof explicitly supplies a witness and verifies it; a nonconstructive proof establishes that a witness exists without identifying one. Constructive example: 2 proves ∃x∈ℤ(x²=4). Nonconstructive example: there are irrational a,b with aᵇ rational: if (√2)^(√2) is rational, use a=b=√2; otherwise use a=(√2)^(√2) and b=√2, giving aᵇ=2. The case split proves existence without deciding which case holds.",
    "solution": "The first example names 2. The second covers both possibilities for (√2)^(√2), and each possibility yields a pair, but the argument need not determine which pair is the witness.",
    "hints": [
      "Ask whether the proof tells you an actual object.",
      "A proof by cases can guarantee a witness without selecting a unique case."
    ],
    "rubric": [
      "Distinguishes explicit construction from existence without an identified witness.",
      "Gives and verifies a constructive example.",
      "Gives a valid nonconstructive example and explains why no particular witness is identified."
    ]
  },
  {
    "id": "rosen-ch1-ex-review-015",
    "mode": "rubric",
    "answer": "Prove existence and uniqueness. Existence: show ∃xP(x), often by exhibiting a witness. Uniqueness: if P(x) and P(y) both hold, show x=y; equivalently, prove ∃x(P(x)∧∀y(P(y)→y=x)).",
    "solution": "Existence alone permits many witnesses; uniqueness alone could hold vacuously. Both components are necessary for “exactly one.”",
    "hints": [
      "Translate “unique” as “one exists, and no two different ones exist.”",
      "Assume two arbitrary witnesses and show they are equal."
    ],
    "rubric": [
      "Includes a proof that at least one x satisfies P(x).",
      "Includes a proof that any two satisfying elements are identical, or an equivalent exclusion of a second witness."
    ]
  },
  {
    "id": "rosen-ch1-ex-review-016",
    "mode": "rubric",
    "answer": "Split according to the signs of x and y. If both are nonnegative or both are negative, xy≥0 and direct expansion gives |xy|=xy=|x||y| (in the both-negative case, |x||y|=(−x)(−y)=xy). If exactly one is negative, xy≤0 and |xy|=−xy, which equals |x||y|. Zero is included in the nonnegative cases. These exhaustive cases prove the identity for all real x,y.",
    "solution": "Use |a|=a when a≥0 and |a|=−a when a<0. Four sign combinations cover every ordered pair, and algebraic expansion in each case yields the same product of absolute values.",
    "hints": [
      "Use exhaustive cases based on x≥0 or x<0 and y≥0 or y<0.",
      "Track the sign of xy before removing its absolute value."
    ],
    "rubric": [
      "Chooses exhaustive sign cases and includes zero correctly.",
      "Uses the definition of absolute value in each case.",
      "Verifies |xy|=|x||y| for same-sign and opposite-sign pairs, completing the proof."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-001",
    "mode": "auto",
    "answer": "a) q→p. b) q∧p. c) ¬q∨¬p. d) q↔p.",
    "solution": "“q only if p” means q→p. “Necessary and sufficient” gives both directions, hence a biconditional. “Either not q or not p” is an inclusive disjunction of negations.",
    "hints": [
      "In “A only if B,” A is the hypothesis.",
      "Necessary and sufficient means if and only if."
    ],
    "readAloud": "p is doing every exercise; q is getting an A.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "q→p",
        "accepted": [
          "q -> p",
          "¬p→¬q"
        ],
        "checker": "logic",
        "solution": "Getting an A only if every exercise is done translates as q→p."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "q∧p",
        "accepted": [
          "p∧q",
          "q and p"
        ],
        "checker": "logic",
        "solution": "Both propositions are asserted."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "¬q∨¬p",
        "accepted": [
          "not q or not p",
          "¬(q∧p)"
        ],
        "checker": "logic",
        "solution": "The two negated alternatives are joined by inclusive or."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "q↔p",
        "accepted": [
          "q iff p",
          "(q→p)∧(p→q)"
        ],
        "checker": "logic",
        "solution": "Necessary and sufficient conditions give both implications."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-002",
    "mode": "auto",
    "answer": "F,T,F,T,F,F,T,T",
    "accepted": [
      "F T F T F F T T",
      "false,true,false,true,false,false,true,true"
    ],
    "checker": "truth",
    "solution": "In the standard row order (p,q,r)=TTT,TTF,TFT,TFF,FTT,FTF,FFT,FFF, evaluate p∨q and p∧¬r separately. The implication is false only when the first is T and the second is F, giving F,T,F,T,F,F,T,T.",
    "hints": [
      "Use the eight rows in binary order.",
      "An implication is false only in a T→F situation."
    ],
    "readAloud": "Evaluate open parenthesis p or q close parenthesis implies open parenthesis p and not r close parenthesis.",
    "verify": "The output is T in rows TTF,TFF,FFT,FFF and F in the other four rows."
  },
  {
    "id": "rosen-ch1-ex-supplementary-003",
    "mode": "rubric",
    "answer": "a) The hypothesis ¬q∧(p→q) yields ¬p by modus tollens, so the implication is always true. b) The hypothesis (p∨q)∧¬p yields q by disjunctive syllogism, so that implication is always true.",
    "solution": "An implication whose hypothesis forces its conclusion cannot have a T hypothesis and F conclusion. The two inference rules therefore establish tautologies directly.",
    "hints": [
      "Assume each outer hypothesis and derive its conclusion.",
      "Part (a) is modus tollens; part (b) is disjunctive syllogism."
    ],
    "rubric": [
      "Part (a) derives ¬p from ¬q and p→q, establishing the tautology.",
      "Part (b) derives q from p∨q and ¬p, establishing the tautology."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "From ¬q and p→q, modus tollens gives ¬p; hence (¬q∧(p→q))→¬p is a tautology.",
        "solution": "Whenever the hypothesis is true, the conclusion is forced.",
        "rubric": [
          "Correctly applies modus tollens and connects it to tautology."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "From p∨q and ¬p, disjunctive syllogism gives q; hence ((p∨q)∧¬p)→q is a tautology.",
        "solution": "The hypothesis eliminates p from the disjunction, leaving q.",
        "rubric": [
          "Correctly applies disjunctive syllogism and connects it to tautology."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-004",
    "mode": "rubric",
    "answer": "a) Converse: If I drive to work, then it rains today. Contrapositive: If I do not drive to work, then it does not rain today. Inverse: If it does not rain today, then I will not drive to work. b) Converse: If x≥0, then |x|=x. Contrapositive: If x<0, then |x|≠x. Inverse: If |x|≠x, then x<0. c) Converse: If n²>9, then n>3. Contrapositive: If n²≤9, then n≤3. Inverse: If n≤3, then n²≤9.",
    "solution": "For p→q, use q→p for converse, ¬q→¬p for contrapositive, and ¬p→¬q for inverse. Negate ≥ as <, > as ≤, and = as ≠.",
    "hints": [
      "Write the three symbolic patterns before substituting words.",
      "Do not negate either part when forming the converse."
    ],
    "rubric": [
      "Each part gives converse q→p, contrapositive ¬q→¬p, and inverse ¬p→¬q.",
      "Mathematical inequalities and equalities are negated correctly.",
      "No converse or inverse is mistakenly claimed equivalent to the original."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Converse: driving to work implies rain today. Contrapositive: not driving to work implies no rain today. Inverse: no rain today implies not driving to work.",
        "solution": "Apply swap, swap-and-negate, and negate-only respectively.",
        "rubric": [
          "All three English conditionals have the correct order and negation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Converse: x≥0→|x|=x. Contrapositive: x<0→|x|≠x. Inverse: |x|≠x→x<0.",
        "solution": "The negation of x≥0 is x<0.",
        "rubric": [
          "All three forms correctly transform |x|=x→x≥0."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Converse: n²>9→n>3. Contrapositive: n²≤9→n≤3. Inverse: n≤3→n²≤9.",
        "solution": "The negation of strict > is ≤ in both places.",
        "rubric": [
          "All three forms have correct variable order, powers, and inequality negations."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-005",
    "mode": "auto",
    "answer": "¬q→¬p; p→q; ¬p→¬q",
    "accepted": [
      "not q -> not p; p -> q; not p -> not q",
      "(¬q→¬p),(p→q),(¬p→¬q)"
    ],
    "checker": "text",
    "solution": "The inverse is ¬p→¬q, whose converse is ¬q→¬p. The converse is q→p, whose converse is p→q. The contrapositive is ¬q→¬p, whose converse is ¬p→¬q.",
    "hints": [
      "Perform one named transformation at a time.",
      "Converse swaps the two sides without negating them."
    ],
    "verify": "The three results are respectively the original contrapositive, the original statement, and the original inverse."
  },
  {
    "id": "rosen-ch1-ex-supplementary-006",
    "mode": "auto",
    "answer": "p→q; ¬q→¬p; q→p",
    "accepted": [
      "p -> q; not q -> not p; q -> p",
      "(p→q),(¬q→¬p),(q→p)"
    ],
    "checker": "text",
    "solution": "Inverting twice restores p→q. The inverse of the converse q→p is ¬q→¬p. The inverse of the contrapositive ¬q→¬p is q→p.",
    "hints": [
      "Inverse negates both sides but preserves their order.",
      "Double negation cancels."
    ],
    "verify": "The results are the original statement, its contrapositive, and its converse, respectively."
  },
  {
    "id": "rosen-ch1-ex-supplementary-007",
    "mode": "auto",
    "answer": "(p∧q∧r∧¬s)∨(p∧q∧¬r∧s)∨(p∧¬q∧r∧s)∨(¬p∧q∧r∧s)",
    "accepted": [
      "(¬p∧q∧r∧s)∨(p∧¬q∧r∧s)∨(p∧q∧¬r∧s)∨(p∧q∧r∧¬s)"
    ],
    "checker": "logic",
    "solution": "There are four ways to choose which variable is false. Form the conjunction for each choice, with exactly one negated variable, and disjoin the four conjunctions.",
    "hints": [
      "List the four possible false variables when exactly three are true.",
      "Each disjunct should contain all four variables, exactly one negated."
    ],
    "verify": "Each disjunct selects one exactly-three row; no all-true or fewer-than-three row satisfies any disjunct."
  },
  {
    "id": "rosen-ch1-ex-supplementary-008",
    "mode": "rubric",
    "answer": "Let j mean Sergei takes the job, b mean he gets a bonus, and h mean he receives a higher salary. The premises give j→b, j→h, b→¬h, and j. Modus ponens yields b and h; b with b→¬h yields ¬h. Thus h and ¬h both follow, so the statements are inconsistent.",
    "solution": "The job premise activates both conditionals with hypothesis j. The bonus then activates the third conditional, forcing both h and its negation.",
    "hints": [
      "Derive b and h from j first.",
      "Use b→¬h to obtain the contradiction."
    ],
    "rubric": [
      "Correctly symbolizes or clearly identifies all four premises.",
      "Derives the bonus and higher salary from taking the job.",
      "Derives no higher salary from the bonus and explicitly identifies the h/¬h contradiction."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-009",
    "mode": "rubric",
    "answer": "Let d mean Miranda takes discrete mathematics, g mean she graduates, q mean she is qualified, and r mean she reads the book. From ¬d and ¬d→¬g, infer ¬g; from ¬g→¬q, infer ¬q. But r and r→q give q. Therefore q∧¬q follows, so the statements are inconsistent.",
    "solution": "The final premise supplies both ¬d and r. Following the two conditional chains produces ¬q from the first and q from the second.",
    "hints": [
      "Split “does not take … but reads” into two facts.",
      "Derive ¬q through non-graduation and q through reading."
    ],
    "rubric": [
      "Uses ¬d and r from the final premise.",
      "Derives ¬g and then ¬q by valid modus ponens steps.",
      "Derives q from r and r→q and states the resulting inconsistency."
    ],
    "readAloud": "The obligato context begins after this exercise: accepting an assertion commits to it; rejecting commits to its negation, and every prefix of commitments must remain consistent."
  },
  {
    "id": "rosen-ch1-ex-supplementary-010",
    "mode": "auto",
    "answer": "RRR, ARR, AAR, AAA",
    "accepted": [
      "reject reject reject; accept reject reject; accept accept reject; accept accept accept",
      "RRR; ARR; AAR; AAA"
    ],
    "checker": "text",
    "solution": "A/R means accept/reject in round order. Checking consistency after every new commitment leaves RRR (model p=T,q=F), ARR (p=F,q=F,r=T), AAR (p=F,q=F,r=F), and AAA (q=T). The other four sequences create an inconsistent prefix.",
    "hints": [
      "Rejecting p→q commits to p∧¬q.",
      "Rejecting ¬(p∨r)∨q commits to (p∨r)∧¬q.",
      "Test consistency after each round, not only after round three."
    ],
    "readAloud": "R means reject and A means accept; each three-letter sequence is read in the teacher’s round order.",
    "verify": "The passing sequences in lexicographic A-before-R order are AAA, AAR, ARR, RRR."
  },
  {
    "id": "rosen-ch1-ex-supplementary-011",
    "mode": "auto",
    "answer": "AAAA, AARA, RAAA, RARA, RRAR, RRRR",
    "accepted": [
      "AAAA; AARA; RAAA; RARA; RRAR; RRRR",
      "AAAA AARA RAAA RARA RRAR RRRR"
    ],
    "checker": "text",
    "solution": "Using A=accept and R=reject, exhaustive consistency checks after each prefix give exactly AAAA, AARA, RAAA, RARA, RRAR, RRRR. For example, rejecting the first assertion forces p∧(¬q∨¬r), while accepting it forces p→(q∧r); subsequent choices must be tested against those commitments rather than independently.",
    "hints": [
      "Carry every earlier commitment into later rounds.",
      "Rejecting ¬r means accepting r; accepting ¬r means r is false.",
      "Enumerate the 16 answer sequences and eliminate a branch as soon as its commitments are unsatisfiable."
    ],
    "readAloud": "Each four-letter sequence records accept or reject decisions for the four assertions in order.",
    "verify": "Respective satisfying models include AAAA:(p=T,q=F,r=F), AARA:(p=T,q=F,r=T), RAAA:(p=F,q=F,r=F), RARA:(p=F,q=F,r=T), RRAR:(p=F,q=T,r=F), RRRR:(p=F,q=T,r=T)."
  },
  {
    "id": "rosen-ch1-ex-supplementary-012",
    "mode": "rubric",
    "answer": "At each round, if adding the assertion keeps all commitments consistent, accept it; otherwise reject it. Because the previous commitments are consistent, they cannot logically force both the assertion and its negation. Thus at least one choice preserves consistency. Repeating this rule maintains a consistent set through every round, so the student passes.",
    "solution": "This is an induction on rounds. The empty commitment set is consistent. Given a consistent prefix, consistency of at least one extension follows: if adding A were inconsistent, the prefix would prove ¬A; if adding ¬A were also inconsistent, it would prove A, making the prefix itself inconsistent.",
    "hints": [
      "Choose according to the consistency of the extended commitment set.",
      "Use induction: show one safe choice exists at every round."
    ],
    "rubric": [
      "Gives a definite accept/reject strategy based on preserving consistency.",
      "Justifies why at least one of an assertion or its negation can consistently extend a consistent prefix.",
      "Explains that repeating the strategy preserves consistency through all rounds."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-013",
    "mode": "auto",
    "answer": "Aaron is a knave; Crystal is a knight; Bohan cannot be determined",
    "accepted": [
      "Aaron knave, Crystal knight, Bohan undetermined",
      "Aaron is a knave and Crystal is a knight, but Bohan may be either"
    ],
    "checker": "text",
    "solution": "Aaron cannot be a knight, since his own statement would then make him a knave. So Aaron is a knave and not all three are knaves. If Bohan is a knight, his statement forces Crystal to be a knight. If Bohan is a knave, his statement is false, and Crystal must be a knight to falsify Aaron’s statement. Both assignments work: (knave,knight,knight) and (knave,knave,knight).",
    "hints": [
      "Start with Aaron’s self-referential claim.",
      "Test Bohan as knight and as knave separately; remember knights tell truth and knaves lie."
    ],
    "verify": "In the first assignment exactly one person is a knave; in the second there are two, so Bohan’s statement is respectively true and false as required."
  },
  {
    "id": "rosen-ch1-ex-supplementary-014",
    "mode": "auto",
    "answer": "Anita, Boris, and Carmen are all knaves",
    "accepted": [
      "All three are knaves",
      "Anita knave; Boris knave; Carmen knave"
    ],
    "checker": "text",
    "solution": "Anita cannot be a knight because her statement says she is a knave. Thus Anita is a knave and her conjunction is false. Its first conjunct is true, so “Boris is a knight” must be false; Boris is a knave. Boris’s claim of exactly one knight must then be false. With Anita and Boris already knaves, Carmen cannot be a knight, so Carmen is also a knave.",
    "hints": [
      "A knight cannot truthfully call herself a knave.",
      "A false conjunction with one true conjunct forces the other conjunct to be false."
    ],
    "verify": "With all three knaves, Anita’s conjunction and Boris’s exactly-one-knight statement are both false."
  },
  {
    "id": "rosen-ch1-ex-supplementary-015",
    "mode": "auto",
    "answer": "Brenda",
    "accepted": [
      "Brenda committed the crime",
      "Brenda was guilty"
    ],
    "checker": "text",
    "solution": "Amy cannot be guilty: the criminal is a knight, but a guilty Amy’s statement “I am innocent” would be false. Hence Amy is innocent and her statement is true, so Brenda’s statement that Amy speaks truly is also true. Claire cannot be guilty either: then Claire would be the only knight, Brenda would be a non-knight and, by Claire’s true statement, not normal, hence a knave; but Brenda’s statement is true. Therefore Brenda is the criminal.",
    "hints": [
      "Test Amy and Claire as the possible knight-criminal.",
      "A knave cannot make Brenda’s true statement about Amy."
    ],
    "verify": "Brenda can be the truthful knight-criminal; Amy and Claire are the two non-knights, and Claire’s statement “Brenda is not normal” is false if Claire is a knave or is permissible if she is a normal."
  },
  {
    "id": "rosen-ch1-ex-supplementary-016",
    "mode": "rubric",
    "answer": "Suppose S is a proposition and S means S→U, where U means “unicorns live.” If S were false, then S→U would be true vacuously; but that is exactly what S says, so S would be true, a contradiction. Therefore S is true. Since S is equivalent to S→U, modus ponens gives U. Thus unicorns live follows. If this were an ordinary propositional system with a fixed truth value for U, the construction would force an arbitrary U to be true; the self-referential S therefore cannot consistently be a proposition.",
    "solution": "First rule out S false using vacuous truth of the conditional. Then use the truth of S and the conditional it asserts to derive U. The paradox comes from allowing S to refer to its own truth condition while treating it as an ordinary proposition.",
    "hints": [
      "Let U abbreviate “unicorns live” and write S↔(S→U).",
      "Assume S is false and use the fact that a false hypothesis makes a conditional true."
    ],
    "rubric": [
      "Shows that assuming S false makes S→U true and hence makes S true, a contradiction.",
      "Concludes S true and derives U using S↔(S→U).",
      "Explains that this self-referential assignment is inconsistent with treating S as an ordinary proposition."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-017",
    "mode": "rubric",
    "answer": "The argument is valid: premises p and ¬p cannot both be true, so there is no case with all premises true and the conclusion false. Equivalently, p∧¬p yields a contradiction, from which any conclusion follows by explosion. This does not show that the conclusion is true; validity from inconsistent premises says nothing about the conclusion’s actual truth.",
    "solution": "Check the definition of validity rather than trying to derive a fact about rainbows. Since the premise set is unsatisfiable, the validity condition holds vacuously.",
    "hints": [
      "Can both premises be true together?",
      "Distinguish valid reasoning from a sound argument with true premises."
    ],
    "rubric": [
      "Identifies the premises as contradictory and the argument as valid.",
      "Explains validity via no true-premise/false-conclusion case or explosion.",
      "Explicitly states that the conclusion is not thereby proved true."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-018",
    "mode": "auto",
    "answer": "F,T",
    "accepted": [
      "F T",
      "false,true",
      "false true"
    ],
    "checker": "truth",
    "solution": "Consecutive indices have opposite parity, so every pᵢ∧pᵢ₊₁ contains one false conjunct; the disjunction of all 100 is F. Every pᵢ∨pᵢ₊₁ contains one true disjunct, so the conjunction of all 100 is T.",
    "hints": [
      "Compare each proposition with the next index, not with p₁ alone.",
      "A disjunction is F only if every term is F; a conjunction is T only if every term is T."
    ],
    "readAloud": "First take the or, from i equals 1 to 100, of p sub i and p sub i plus 1; then take the and of p sub i or p sub i plus 1.",
    "verify": "Each adjacent pair is either (T,F) or (F,T), giving AND=F and OR=T."
  },
  {
    "id": "rosen-ch1-ex-supplementary-019",
    "mode": "rubric",
    "answer": "Use variables xᵢⱼₖ for 1≤i,j,k≤16, meaning cell (i,j) contains symbol k. Require every cell to contain exactly one symbol; every row and every column to contain each symbol exactly once; and every 4×4 block to contain each symbol exactly once. Add unit clauses xᵢⱼₖ for each given clue. The puzzle solutions are exactly the satisfying assignments.",
    "solution": "For cell exactness, use xᵢⱼ₁∨⋯∨xᵢⱼ₁₆ plus pairwise clauses ¬xᵢⱼₖ∨¬xᵢⱼₗ for k<l. Apply analogous at-least-one and at-most-one constraints to each row-symbol, column-symbol, and block-symbol set, where block starts are i=1,5,9,13 and j=1,5,9,13.",
    "hints": [
      "Use one Boolean variable for each cell-symbol possibility.",
      "Encode “exactly one” as at least one and no two.",
      "Do not forget fixed clues or the 4×4 block constraints."
    ],
    "rubric": [
      "Defines 16³ cell-symbol Boolean variables with clear indices.",
      "Enforces exactly one symbol per cell.",
      "Enforces every symbol exactly once in every row, column, and 4×4 block.",
      "Adds givens and identifies satisfying assignments with valid completed puzzles."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-020",
    "mode": "rubric",
    "answer": "a) ∃xP(x). b) ¬∀xP(x), equivalently ∃x¬P(x). c) ∀yQ(y). d) ∀xP(x). e) ∃y¬Q(y).",
    "solution": "P quantifies over students and Q over classes. “Not every” becomes “some do not,” while a class with no calculus-knowing student is the negation of Q.",
    "hints": [
      "Keep student variables with P and class variables with Q.",
      "Negate Q(y), not P(x), for part (e)."
    ],
    "rubric": [
      "Parts (a) and (b) correctly quantify P over students.",
      "Parts (c) and (e) correctly quantify Q over classes with the required negation in (e).",
      "Part (d) expresses universal calculus knowledge as ∀xP(x)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∃xP(x).",
        "solution": "Some student means at least one x satisfies P.",
        "rubric": [
          "Uses existential student quantification of P."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x¬P(x), equivalently ¬∀xP(x).",
        "solution": "Negating “every student knows” yields some student who does not.",
        "rubric": [
          "Gives a correct negated-universal or existential-negative form."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∀yQ(y).",
        "solution": "Q already says class y contains a calculus-knowing student.",
        "rubric": [
          "Universally quantifies Q over classes."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∀xP(x).",
        "solution": "The statement requires every student to know calculus.",
        "rubric": [
          "Universally quantifies P over students."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "∃y¬Q(y).",
        "solution": "Choose a class for which “contains a calculus-knowing student” is false.",
        "rubric": [
          "Uses an existential class and negates Q."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-021",
    "mode": "auto",
    "answer": "a) F. b) T. c) F. d) T. e) F. f) T.",
    "solution": "4 does not divide 5, while 2 divides 4. Not every pair divides; m=1 divides every n, proving (d). No positive n is divisible by every m (take m=n+1), proving (e) false. Finally 1 divides every n.",
    "hints": [
      "P(m,n) has divisor m first and dividend n second.",
      "For (d), test m=1; for (e), compare n with n+1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "F",
        "accepted": [
          "false",
          "0"
        ],
        "checker": "truth",
        "solution": "5 is not an integer multiple of 4."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "4=2·2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "F",
        "accepted": [
          "false",
          "0"
        ],
        "checker": "truth",
        "solution": "P(4,5) is a counterexample."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "Choose m=1; then n=n·1 for every n."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "F",
        "accepted": [
          "false",
          "0"
        ],
        "checker": "truth",
        "solution": "For any candidate n, m=n+1 cannot divide n."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "1 divides every positive integer n."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-022",
    "mode": "auto",
    "answer": "{0,1}",
    "accepted": [
      "{a,b}",
      " {0, 1} "
    ],
    "checker": "set",
    "solution": "The formula says there are two distinct elements x,y and every z equals one of them. Any domain containing exactly two elements works, such as {0,1}.",
    "hints": [
      "The formula characterizes a domain with exactly two elements.",
      "Choose two distinct objects and no others."
    ],
    "readAloud": "There exist x and y, different from each other, such that every z equals x or y.",
    "verify": "Take x=0 and y=1; every z in {0,1} satisfies z=x or z=y."
  },
  {
    "id": "rosen-ch1-ex-supplementary-023",
    "mode": "auto",
    "answer": "{0}",
    "accepted": [
      "{0,1,2}",
      "∅",
      "{}",
      "{a,b,c}"
    ],
    "checker": "set",
    "solution": "The formula is true exactly on two-element domains. A one-element domain such as {0} makes it false; any domain with zero, one, or at least three elements also works.",
    "hints": [
      "Avoid exactly two elements.",
      "Two distinct witnesses cannot exist in a one-element domain."
    ],
    "verify": "In {0}, x≠y is impossible."
  },
  {
    "id": "rosen-ch1-ex-supplementary-024",
    "mode": "rubric",
    "answer": "¬∃y∃x₁∃x₂∃x₃∃x₄(x₁≠x₂∧x₁≠x₃∧x₁≠x₄∧x₂≠x₃∧x₂≠x₄∧x₃≠x₄∧G(x₁,y)∧G(x₂,y)∧G(x₃,y)∧G(x₄,y)).",
    "solution": "More than three means at least four distinct grandmothers for one person y. Existentially name four, require all six pairs to be distinct, apply G to each, and negate the whole existence claim.",
    "hints": [
      "G(x,y) has grandmother x first and person y second.",
      "Four witnesses need pairwise-distinctness conditions, not just one inequality."
    ],
    "readAloud": "There do not exist a person y and four distinct x values, all grandmothers of y.",
    "rubric": [
      "Uses four grandmother witnesses for a single person.",
      "Requires all four witnesses to be pairwise distinct.",
      "Negates the existence claim so no person has four or more grandmothers."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-025",
    "mode": "rubric",
    "answer": "∀y∃x₁∃x₂(x₁≠x₂∧P(x₁,y)∧P(x₂,y)∧∀z(P(z,y)→(z=x₁∨z=x₂))).",
    "solution": "For each person y, exhibit two distinct parents and exclude every third possibility. Both the witnesses and the uniqueness clause are necessary for exactly two.",
    "hints": [
      "Start with ∀y for everyone.",
      "Exactly two needs two distinct witnesses plus a “no other parent” clause."
    ],
    "rubric": [
      "Universally quantifies over all people y.",
      "Provides two distinct biological parents with correct argument order.",
      "Ensures every biological parent equals one of those two witnesses."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-026",
    "mode": "auto",
    "answer": "a) T. b) T. c) T. d) F.",
    "solution": "Over the reals, x²=−1 has zero solutions; |x|=0 has exactly x=0; x²=2 has exactly x=±√2; x=|x| holds for every x≥0, infinitely many values, not exactly three.",
    "hints": [
      "Count all real solutions, including negative ones.",
      "For (d), describe the solution set before counting."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "Real squares are nonnegative, so exactly zero values satisfy x²=−1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "Only x=0 has absolute value zero."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "T",
        "accepted": [
          "true",
          "1"
        ],
        "checker": "truth",
        "solution": "Exactly √2 and −√2 satisfy x²=2."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "F",
        "accepted": [
          "false",
          "0"
        ],
        "checker": "truth",
        "solution": "Every nonnegative real satisfies x=|x|, so there are not exactly three."
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-027",
    "mode": "rubric",
    "answer": "a) ¬∃xP(x). b) ∃x(P(x)∧∀y(P(y)→y=x)). c) ∃x∃y(x≠y∧P(x)∧P(y)∧∀z(P(z)→z=x∨z=y)). d) ∃x∃y∃z(x≠y∧x≠z∧y≠z∧P(x)∧P(y)∧P(z)∧∀w(P(w)→w=x∨w=y∨w=z)).",
    "solution": "Exact zero excludes a witness. Exact n requires n distinct witnesses satisfying P and a final universal clause excluding every other satisfying value.",
    "hints": [
      "Do not forget distinctness among witnesses.",
      "The last universal clause is what turns “at least n” into “exactly n.”"
    ],
    "rubric": [
      "Part (a) excludes all satisfying values.",
      "Part (b) gives one witness and excludes every different satisfying value.",
      "Part (c) gives two distinct witnesses and excludes every third.",
      "Part (d) gives three pairwise-distinct witnesses and excludes every fourth."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "¬∃xP(x), equivalently ∀x¬P(x).",
        "solution": "Exactly zero means no domain value satisfies P.",
        "rubric": [
          "Correctly expresses nonexistence."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∃x(P(x)∧∀y(P(y)→y=x)).",
        "solution": "One witness exists and every witness equals it.",
        "rubric": [
          "Includes existence and uniqueness."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "∃x∃y(x≠y∧P(x)∧P(y)∧∀z(P(z)→z=x∨z=y)).",
        "solution": "Two distinct witnesses exist and no other z satisfies P.",
        "rubric": [
          "Includes two distinct witnesses and the exclusion clause."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "∃x∃y∃z(x≠y∧x≠z∧y≠z∧P(x)∧P(y)∧P(z)∧∀w(P(w)→w=x∨w=y∨w=z)).",
        "solution": "Three pairwise-distinct witnesses exist and every P-witness is one of them.",
        "rubric": [
          "Includes three distinct witnesses and excludes all others."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-028",
    "mode": "rubric",
    "answer": "Assume ∃x∀yP(x,y). Choose a particular a such that ∀yP(a,y). For any y, existential instantiation at that y gives P(a,y), and then existential generalization gives ∃xP(x,y). Since y was arbitrary, ∀y∃xP(x,y) follows. Thus the conditional is true whenever its hypothesis is true and is vacuously true otherwise, so it is a tautology.",
    "solution": "The same witness a that works universally can serve as the existential witness for every y. The reverse need not hold because there x may vary with y.",
    "hints": [
      "Name the single x supplied by the hypothesis.",
      "Reuse that same witness after introducing an arbitrary y."
    ],
    "rubric": [
      "Extracts one fixed witness a from the existential-universal hypothesis.",
      "Shows P(a,y) for arbitrary y and concludes ∃xP(x,y).",
      "Generalizes over y and concludes the conditional is always true."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-029",
    "mode": "rubric",
    "answer": "If ∃x(P(x)→Q(x)) is true, choose a with P(a)→Q(a). Whenever ∀xP(x) is true, P(a) holds, hence Q(a), so ∃xQ(x); therefore ∀xP(x)→∃xQ(x) is true. Conversely, if ∃x(P(x)→Q(x)) is false, then every x satisfies P(x)∧¬Q(x), making ∀xP(x) true and ∃xQ(x) false, so the second formula is also false. Hence they always agree.",
    "solution": "One direction uses the witness a. The other negates the existential implication and uses ¬(P→Q)≡P∧¬Q to force the conditional to have true hypothesis and false conclusion.",
    "hints": [
      "Use the same existential witness in the first direction.",
      "Negate P→Q as P∧¬Q for the reverse truth-value comparison."
    ],
    "rubric": [
      "Shows existential-implication truth makes the conditional true using a fixed witness.",
      "Shows existential-implication falsity makes ∀xP true and ∃xQ false.",
      "Concludes both formulas have identical truth values in every interpretation."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-030",
    "mode": "rubric",
    "answer": "No. On the integers, take P(x,y) to mean x=y. Then ∀y∃xP(x,y) is true because for each y choose x=y. But ∃x∀yP(x,y) is false because no single integer x equals every integer y.",
    "solution": "The premise permits x to depend on y; the desired conclusion requires one common x. Equality provides a counterexample to sharing that witness.",
    "hints": [
      "Let each y choose its own x.",
      "Use a domain with at least two elements and P(x,y): x=y."
    ],
    "rubric": [
      "Answers no and supplies a specific predicate and domain.",
      "Verifies the premise by choosing x depending on y.",
      "Verifies that no single x works for all y in the conclusion."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-031",
    "mode": "rubric",
    "answer": "No. On the integers, let P(x,y) mean y=x. Then ∀x∃yP(x,y) is true by choosing y=x for each x. But ∃x∀yP(x,y) claims that one fixed x has every y equal to x, which is false.",
    "solution": "The inner existential y may vary with x, while the proposed conclusion wrongly moves x outside the universal quantifier. The equality relation blocks a universal x.",
    "hints": [
      "Choose y after x in the premise.",
      "Check whether any fixed x could work simultaneously for all y."
    ],
    "rubric": [
      "Answers no with an explicit domain and predicate.",
      "Correctly verifies ∀x∃yP(x,y).",
      "Correctly refutes ∃x∀yP(x,y) using lack of a shared x."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-032",
    "mode": "rubric",
    "answer": "a) It snows today and I will not go skiing tomorrow. b) Some person in this class does not understand mathematical induction. c) Every student in this class likes discrete mathematics. d) There is a mathematics class in which no student falls asleep during lectures.",
    "solution": "Negate p→q as p∧¬q. Negating ∀ produces ∃ with a negated predicate; negating ∃ produces ∀ with a negated predicate. In (d), both quantifier changes occur.",
    "hints": [
      "Do not turn an implication into another implication when negating it.",
      "For (d), “every class has some sleeper” becomes “some class has no sleeper.”"
    ],
    "rubric": [
      "Part (a) keeps the snow hypothesis true and negates only the skiing conclusion.",
      "Parts (b) and (c) switch quantifiers and predicates correctly.",
      "Part (d) asserts existence of a class with universally no sleeping students."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "It snows today, and I will not go skiing tomorrow.",
        "solution": "¬(p→q)≡p∧¬q.",
        "rubric": [
          "Uses conjunction with snow true and skiing false."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "At least one person in this class does not understand mathematical induction.",
        "solution": "Negating every gives some counterexample.",
        "rubric": [
          "States existence of a class member who does not understand."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Every student in this class likes discrete mathematics.",
        "solution": "Negating some-do-not gives all-do.",
        "rubric": [
          "Universally states liking for the whole class."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There exists a mathematics class in which every student does not fall asleep during lectures (no student falls asleep).",
        "solution": "Switch ∀class∃student to ∃class∀student and negate sleeping.",
        "rubric": [
          "Includes one exceptional class and absence of any sleeping student there."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-033",
    "mode": "rubric",
    "answer": "Let S(x) mean x is a student in this class, D(y) mean y is a department in the school, C(z,y) mean z is a course in department y, and T(x,z) mean x has taken z. Then ∀x(S(x)→∀y(D(y)→∃z(C(z,y)∧T(x,z)))).",
    "solution": "For each student and each department, the chosen course may differ, so ∃z belongs inside both universal quantifiers. Conjunction is used with the existential course; implications restrict the universal student and department domains.",
    "hints": [
      "The course witness comes after both the student and department.",
      "For every department, require a course in that same department."
    ],
    "readAloud": "For every student x in this class, for every department y, there exists a course z in y that x has taken.",
    "rubric": [
      "Defines or clearly uses predicates with correct domains and argument roles.",
      "Places existential course quantification inside universal student and department quantification.",
      "Requires the selected course to belong to the current department and to have been taken by the current student."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-034",
    "mode": "rubric",
    "answer": "Let C(c) mean c is a college in the United States, B(b,c) mean b is a building on c’s campus, R(r,b) mean r is a room in b, and W(r) mean r is painted white. Then ∃c∃b(C(c)∧B(b,c)∧∀r(R(r,b)→W(r))).",
    "solution": "Existentially choose the college and building, then universally quantify every room in that particular building. The implication restricts the white-paint claim to rooms of b.",
    "hints": [
      "Bind the room predicate to the chosen building.",
      "Use ∃ for the college and building but ∀ for rooms."
    ],
    "rubric": [
      "Selects a U.S. college and a building on that college’s campus.",
      "Universally quantifies rooms in the selected building.",
      "Requires every such room to be painted white, without imposing conditions on other rooms."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-035",
    "mode": "rubric",
    "answer": "Let S(x) mean x is a student in this class, M(y) mean y is a mathematics class at this school, and T(x,y) mean x has taken y. With uniqueness quantifiers: ∃!x(S(x)∧∃!y(M(y)∧T(x,y))). Define E(x) as S(x)∧∃y(M(y)∧T(x,y)∧∀z((M(z)∧T(x,z))→z=y)). Without ∃!: ∃x(E(x)∧∀w(E(w)→w=x)).",
    "solution": "The inner uniqueness counts mathematics classes taken by x; the outer uniqueness counts students with that property. Expanding E(x) supplies one course witness and excludes every other course, while the outer formula supplies one student and excludes every other E-student.",
    "hints": [
      "There are two separate “exactly one” claims.",
      "Define E(x) to avoid losing the inner uniqueness when expanding the outer one."
    ],
    "rubric": [
      "Gives a correct nested ∃! expression for one student with exactly one mathematics class.",
      "Expansion gives a student witness with a unique taken mathematics class.",
      "Expansion excludes every other student having exactly one such class and preserves all domains and predicates."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-036",
    "mode": "rubric",
    "answer": "From P(x), P(y), x≠y, and ∀z(P(z)→(z=x∨z=y)), infer that exactly two domain elements satisfy P. In English: if two distinct elements have property P and every element with property P is one of those two, then exactly two elements have property P.",
    "solution": "The first three premises prove at least two; the universal premise proves at most two. Together they justify exactly two.",
    "hints": [
      "Separate the “at least two” premises from the “at most two” premise.",
      "Distinctness of x and y is essential."
    ],
    "rubric": [
      "Includes P(x), P(y), and x≠y as premises establishing at least two.",
      "Includes the universal exclusion premise establishing at most two.",
      "States the exactly-two conclusion clearly in English."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-037",
    "mode": "rubric",
    "answer": "Universal instantiation gives P(a)→Q(a) and Q(a)→R(a). By hypothetical syllogism, P(a)→R(a). From this and the premise ¬R(a), modus tollens gives ¬P(a).",
    "solution": "Instantiate both universal premises at the named domain element a, combine the conditionals, and reject P(a) because its consequence R(a) is false.",
    "hints": [
      "Instantiate at a before applying propositional inference rules.",
      "Use hypothetical syllogism followed by modus tollens."
    ],
    "rubric": [
      "Correctly instantiates both universal implications at a.",
      "Derives P(a)→R(a) by hypothetical syllogism.",
      "Uses ¬R(a) and modus tollens to conclude ¬P(a)."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-038",
    "mode": "rubric",
    "answer": "Prove the contrapositive: if x is rational, then x³ is rational. Write x=a/b with integers a,b and b≠0. Then x³=a³/b³, where a³ and b³ are integers and b³≠0. Hence x³ is rational. Therefore, if x³ is irrational, x must be irrational.",
    "solution": "The desired statement is easier through its contrapositive because rational numbers are closed under multiplication and nonzero denominators remain nonzero when cubed.",
    "hints": [
      "Contrapose to “x rational implies x³ rational.”",
      "Cube the numerator and denominator separately."
    ],
    "rubric": [
      "States and proves the contrapositive, or gives an equivalent valid contradiction proof.",
      "Represents rational x as an integer ratio with nonzero denominator.",
      "Shows x³ is such a ratio and draws the irrationality conclusion."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-039",
    "mode": "rubric",
    "answer": "The statement is false. Let x=∛2. Then x³=2 is rational, but x²=2^(2/3) is irrational. Indeed, if 2^(2/3)=a/b for integers a,b with b≠0, then cubing gives 4b³=a³. The exponent of the prime 2 is congruent to 2 modulo 3 on the left but to 0 modulo 3 on the right, which is impossible.",
    "solution": "The counterexample x=∛2 makes the consequent rational. To verify the hypothesis, x²=2^(2/3); if it equaled a/b, cubing would give 4b³=a³, impossible by comparing powers of 2 modulo 3.",
    "hints": [
      "Choose x so that x³ is rational by construction.",
      "For the counterexample x=∛2, verify that x² is irrational rather than assuming it."
    ],
    "rubric": [
      "Identifies the implication as false and gives x=∛2 or an equivalent counterexample.",
      "Shows x³ is rational.",
      "Correctly justifies that x²=2^(2/3) is irrational, for example by prime-exponent comparison."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-040",
    "mode": "rubric",
    "answer": "Let m=⌊√n⌋. Then m is a nonnegative integer and m≤√n<m+1. Squaring nonnegative quantities gives m²≤n<(m+1)², proving existence. For uniqueness, suppose m₁,m₂ both satisfy the inequalities. Then m₁≤√n<m₁+1 and m₂≤√n<m₂+1, so both equal ⌊√n⌋; hence m₁=m₂.",
    "solution": "The integer part of √n is forced by the two-sided inequality. Construct m using the floor function and use the same floor characterization to prove no second integer works.",
    "hints": [
      "Take nonnegative square roots of m²≤n<(m+1)².",
      "The inequalities say exactly that m is the floor of √n."
    ],
    "rubric": [
      "Constructs a nonnegative integer m satisfying both inequalities.",
      "Justifies squaring or square-rooting using nonnegativity.",
      "Proves any two possible values are equal, establishing uniqueness."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-041",
    "mode": "rubric",
    "answer": "Choose m=10^500+1. Then m²=(10^500+1)²=10^1000+2·10^500+1>10^1000. This is a constructive existence proof because it explicitly exhibits and verifies an integer m.",
    "solution": "The boundary m=10^500 would give equality, so add 1. Expanding the square makes the strict inequality immediate.",
    "hints": [
      "Do not choose exactly 10^500; it gives equality.",
      "An explicit witness makes the proof constructive."
    ],
    "rubric": [
      "Provides an explicit integer witness whose square is strictly greater than 10^1000.",
      "Verifies the strict inequality correctly.",
      "Identifies the proof as constructive."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-042",
    "mode": "rubric",
    "answer": "50 works: 50=1²+7²=1+49 and 50=5²+5²=25+25. These are different sums of squares of positive integers.",
    "solution": "Exhibit the number and verify both decompositions directly. The first uses squares 1 and 49; the second uses 25 twice.",
    "hints": [
      "Try a number with multiple representations as a sum of two squares.",
      "Check that every squared term is positive."
    ],
    "rubric": [
      "Names a positive integer and gives two genuinely different decompositions.",
      "Uses squares of positive integers and verifies both sums arithmetically."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-043",
    "mode": "rubric",
    "answer": "23 is a counterexample. Nonnegative cubes not exceeding 23 are 0,1,8. To make 23 with at most two 8s (three would exceed 23), the remaining 23,15,or7 units would respectively require 23,15,or7 cubes equal to 1. Using 0,1,or2 cubes of value 8 therefore requires at least 23,16,or9 total cubes; eight cannot suffice.",
    "solution": "Check the only possible numbers of 8-cubes. With two 8s, 23−16=7 requires seven 1-cubes in addition, totaling nine. Fewer 8s require even more cubes; zeros only increase the count.",
    "hints": [
      "Only 0³,1³,2³ are relevant.",
      "Start with the largest possible cubes: 8+8 leaves 7."
    ],
    "rubric": [
      "Selects 23 or another verified counterexample.",
      "Restricts to relevant cube values and covers the possible uses of 8.",
      "Shows eight nonnegative cubes cannot sum to the chosen value."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-044",
    "mode": "rubric",
    "answer": "23 is a counterexample. The cube term can only be 0,1,or8, leaving respectively 23,22,or15 to be written as a sum of at most two nonnegative squares. None works: 23 and 15 are congruent to 3 mod 4 and are not sums of two squares; for 22, checking squares 0,1,4,9,16 gives complements 22,21,18,13,6, none a square.",
    "solution": "Only three cube choices need checking. For completeness, direct square checks also rule out 23 (complements 23,22,19,14,7) and 15 (complements 15,14,11,6).",
    "hints": [
      "Subtract each possible cube 0,1,8.",
      "For each remainder, check whether it is one square or a sum of two squares."
    ],
    "rubric": [
      "Uses 23 or another valid counterexample.",
      "Checks all possible nonnegative cube terms not exceeding it.",
      "Proves no remainder is representable by at most two squares."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-045",
    "mode": "rubric",
    "answer": "223 is a counterexample. The only positive fifth powers not exceeding 223 are 1 and 32. If k of the 36 terms equal 32 and the rest are 0 or1, then k≤6. With k=6, the remaining value is 223−192=31, requiring 31 ones and thus 37 nonzero terms. Any smaller k requires even more terms, so 36 fifth powers cannot suffice.",
    "solution": "Maximizing the use of 32 minimizes the term count. Even six 32s leave 31, and 6+31=37>36; using zeros cannot reduce the count.",
    "hints": [
      "The next fifth power after 2⁵=32 is 3⁵=243, already too large.",
      "Use as many 32s as possible and count the remaining ones."
    ],
    "rubric": [
      "Identifies 223 or another valid counterexample.",
      "Notes that only fifth powers 0,1,32 can occur.",
      "Shows the most efficient representation still needs more than 36 terms."
    ]
  },
  {
    "id": "rosen-ch1-ex-supplementary-046",
    "mode": "rubric",
    "answer": "Suppose √2+√3=r were rational. Squaring gives r²=5+2√6, so √6=(r²−5)/2 would be rational. But 6 is a positive integer that is not a perfect square, so the assumed theorem says √6 is irrational. This contradiction proves √2+√3 is irrational.",
    "solution": "Isolate √6 after squaring. Rational numbers are closed under subtraction, multiplication, and division by 2, so rational r would force rational √6, contradicting the theorem.",
    "hints": [
      "Square the sum to combine the two radicals.",
      "Isolate √6 and apply the given theorem with n=6."
    ],
    "rubric": [
      "Assumes the sum is rational and squares it correctly as 5+2√6.",
      "Uses closure of rationals to deduce √6 would be rational.",
      "Applies the theorem to nonsquare 6 and states the contradiction and conclusion."
    ]
  },
  {
    "id": "rosen-ch1-ex-computer-projects-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model program reads two Boolean values p and q and prints p ∧ q, p ∨ q, p ⊕ q, p → q, and p ↔ q. Its complete four-row reference output is: T,T → T,T,F,T,T; T,F → F,T,T,F,F; F,T → F,T,T,T,F; F,F → F,F,F,T,T, with each tuple ordered as conjunction, disjunction, XOR, conditional, biconditional.",
    "solution": "Translate the symbols before coding: ∧ means AND; ∨ means inclusive OR; ⊕ is true exactly when the inputs differ; p → q means “if p then q” and is equivalent to ¬p ∨ q; p ↔ q is true exactly when the inputs agree. Parse input explicitly as Boolean values rather than relying on language-specific truthiness. A loop over (T,T), (T,F), (F,T), (F,F) can also print a truth table, but the required interface must still accept given values.",
    "hints": [
      "Make a four-row paper truth table first; one row is enough to distinguish most operator mistakes.",
      "For the conditional, check the only false case: p is true and q is false.",
      "XOR tests difference, while the biconditional tests equality."
    ],
    "rubric": [
      "Program accepts two truth values through a documented input format and reports all five requested operations in a clearly labelled order.",
      "Conjunction and inclusive disjunction match the full four-row truth table.",
      "Exclusive OR is true exactly when p and q differ.",
      "Conditional is false only for p=T, q=F, and biconditional is true exactly when p and q agree.",
      "Submission includes reproducible tests for all four input pairs and handles invalid input or documents the accepted input domain."
    ],
    "readAloud": "Read p arrow q as “if p, then q,” and p double-arrow q as “p if and only if q.” The circle-plus is exclusive OR: one input or the other, but not both.",
    "startHere": "Write the headings p, q, p∧q, p∨q, p⊕q, p→q, p↔q on paper and fill the row p=T, q=F before programming.",
    "verify": "Run all four input pairs and diff the five outputs against the reference tuples above. In particular, confirm F→T and F→F are both true, and that XOR and biconditional always have opposite values."
  },
  {
    "id": "rosen-ch1-ex-computer-projects-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model implementation validates two equal-length strings containing only 0 and 1, then processes corresponding positions from left to right. At each index it emits 1 for AND only when both bits are 1, for OR when at least one bit is 1, and for XOR when the bits differ. Example: a=1010 and b=1100 produce AND=1000, OR=1110, XOR=0110.",
    "solution": "“Bitwise” means position by position, with no carrying and no conversion of the whole string to an integer. For index i, compute a[i] AND b[i], a[i] OR b[i], and a[i] XOR b[i]. Concatenating the three output characters preserves the original length n. The empty-string case may be supported or rejected, but the choice must be explicit.",
    "hints": [
      "Line the two strings up in two rows and solve one column at a time.",
      "Do not interpret 1010 as the integer one thousand ten or convert the strings to decimal.",
      "XOR is 1 for column pairs 01 and 10 only."
    ],
    "rubric": [
      "Reads two bit strings and checks equal lengths and binary digits, or clearly documents equivalent preconditions.",
      "Produces all three outputs in the requested bit-string form and preserves position order and length.",
      "Uses the correct per-position rules for AND, inclusive OR, and XOR without arithmetic carries.",
      "Includes the worked example 1010/1100 plus tests covering all four column possibilities and a length-one input.",
      "Tests rejection or defined handling of unequal lengths and non-binary input."
    ],
    "startHere": "Write 1010 above 1100 and solve the four columns independently; keep three separate output rows labelled AND, OR, and XOR.",
    "verify": "Check the example output 1000, 1110, 0110. Then test 0/0, 0/1, 1/0, and 1/1 as one-bit strings: AND gives 0,0,0,1; OR gives 0,1,1,1; XOR gives 0,1,1,0."
  },
  {
    "id": "rosen-ch1-ex-computer-projects-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model solution parses a compound proposition into an expression tree, collects its distinct propositional variables, enumerates every truth assignment, and evaluates the formula for each. It reports satisfiable together with at least one witnessing assignment, or unsatisfiable only after all 2^k assignments fail. Required supported syntax and precedence must be documented. Expected checks include p = satisfiable (p=T), p∧¬p = unsatisfiable, and (p∨q)∧(¬p∨q) = satisfiable with q=T.",
    "solution": "Use a grammar such as formula → formula ↔ formula | formula → formula | formula ∨ formula | formula ⊕ formula | formula ∧ formula | ¬formula | variable | (formula), while resolving associativity and precedence explicitly. “Satisfiable” means at least one assignment makes the whole formula true. For k variables, row r can assign variable j from bit j of r; evaluate recursively, short-circuiting only if it cannot change the final result. An empty or malformed expression is an input error, not an unsatisfiable proposition.",
    "hints": [
      "List variables without duplicates before deciding how many rows you need.",
      "For k variables, the assignments run from 0 through 2^k−1 in binary.",
      "Test a contradiction as well as a satisfiable formula; stopping at the first true row is valid only for the satisfiable answer."
    ],
    "rubric": [
      "Defines accepted propositional syntax, operator precedence, parentheses, and malformed-input behavior.",
      "Builds or otherwise implements a structurally correct evaluator for every supported connective, including negation and nested formulas.",
      "Extracts exactly the distinct variables and systematically covers all 2^k assignments without duplicates or omissions.",
      "Returns a correct Boolean satisfiability decision and a valid witness when satisfiable; reports unsatisfiable only after exhaustive failure.",
      "Tests tautology, contradiction, negation, implication/biconditional if supported, repeated variables, parentheses, and a multi-variable formula; recomputes at least one reported witness independently."
    ],
    "readAloud": "“Satisfiable” means “there exists an assignment of truth values that makes the proposition true.” It does not mean true under every assignment.",
    "startHere": "Before writing a parser, hand-evaluate (p∨q)∧(¬p∨q) on the four assignments and circle the rows where it is true.",
    "verify": "For each reported witness, substitute its values into the original formula and evaluate by hand. Cross-check small formulas against a separately written truth table, and verify that p∧¬p examines and rejects all rows rather than confusing syntax errors with unsatisfiability."
  },
  {
    "id": "rosen-ch1-ex-computer-projects-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For fuzzy truth values p,q ∈ [0,1], a model program outputs p∨q=max(p,q) and p∧q=min(p,q). For example, p=0.2 and q=0.7 give disjunction 0.7 and conjunction 0.2; p=q=0.4 gives 0.4 for both. Inputs outside the closed interval [0,1] should be rejected or handled according to an explicitly documented policy.",
    "solution": "A fuzzy truth value is a degree of truth between 0 and 1 inclusive, not a probability. The max rule implements disjunction and the min rule implements conjunction in the fuzzy-logic convention used by the referenced exercises. Avoid ordinary Boolean operators, rounding to 0 or 1, multiplication for conjunction, and addition for disjunction.",
    "hints": [
      "The result need not become more extreme than either input.",
      "Disjunction chooses the larger degree; conjunction chooses the smaller degree.",
      "Test equal values and the endpoints 0 and 1 as well as fractional inputs."
    ],
    "rubric": [
      "Accepts real-valued p and q in [0,1] with clear numeric input and output.",
      "Computes disjunction as max(p,q) and conjunction as min(p,q), preserving fractional values.",
      "Does not substitute Boolean, probabilistic, product, or sum rules for the requested fuzzy operations.",
      "Includes 0.2/0.7, equal-input, and endpoint tests, and checks out-of-range handling."
    ],
    "readAloud": "p and q are real degrees of truth from zero through one. Read max(p,q) as “the larger of the two truth degrees” and min(p,q) as “the smaller.”",
    "startHere": "Place 0.2 and 0.7 on a number line. Select the larger value for OR and the smaller for AND before writing any code.",
    "verify": "Confirm the sample pair produces 0.7 and 0.2 in that order. Also test (0,1), (1,1), and (0.4,0.4), and confirm that no valid input produces an output below 0 or above 1."
  },
  {
    "id": "rosen-ch1-ex-computer-projects-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model interactive Chomp program accepts positive m,n, displays an m-by-n cookie board with one designated poisoned cookie, alternates legal moves, updates the board, and declares the loser when a player takes the poison. A legal ordinary move selects a remaining non-poison cookie and removes it together with every remaining cookie above and to its right under a stated coordinate convention. The program rejects absent/out-of-range selections and exposes move history or a replayable transcript.",
    "solution": "Represent coordinates (x,y) with x increasing rightward and y increasing upward, and poison at (1,1). After choosing (a,b), remove every remaining cookie with x≥a and y≥b. Thus the poison is always available only as the losing move, and the game ends immediately when it is selected. Keep the rule that a move must select a currently remaining cookie; a display that merely marks cookies without enforcing removal is incomplete. A two-player mode satisfies the prompt; an optional computer opponent is separate from rule enforcement.",
    "hints": [
      "Draw a 2×2 board and label the poison before designing the state update.",
      "One move removes an upper-right rectangle, not just the chosen cookie.",
      "Test both an illegal move on an already removed square and the final poison move."
    ],
    "rubric": [
      "Accepts arbitrary positive integer dimensions and initializes/displays the correct board and poison location.",
      "Alternates players and accepts only selections that are in range, currently present, and consistent with the stated rules.",
      "Implements the upper-right removal rule exactly and renders or reports the resulting state after every move.",
      "Ends immediately when poison is taken and assigns the loss to the correct player, without allowing further moves.",
      "Provides reproducible interactive tests for a small game, invalid input, repeated selection of a removed cookie, and non-rectangular states created during play."
    ],
    "startHere": "Paper-trace a 2×2 game: record the board, current player, chosen coordinate, and removed coordinates after each move.",
    "verify": "On a 2×2 board, a move at the non-poison far corner (2,2) must remove only that cookie, leaving an L of three cookies. From that L, removing (1,2) or (2,1) must also remove no poison; taking (1,1) must immediately end the game with the mover losing."
  },
  {
    "id": "rosen-ch1-ex-computer-projects-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model tiler represents a board as a set of available unit cells and each polyomino as normalized coordinate sets for its allowed rotations/reflections. It generates placements wholly inside the board and uses exact-cover backtracking: choose an uncovered cell or unused piece, try a compatible placement, recurse, and undo on failure. It must support dominoes, straight and L triominoes, and user-supplied larger polyominoes; output includes a labelled cell grid or coordinate placement list, or a justified no-tiling result after exhaustive search.",
    "solution": "First check area: board area must equal the sum of areas of the required tile multiset. Every placement must cover only available, currently uncovered cells. If each piece type may be reused, make that a setting; if the task gives a fixed multiset, track individual piece IDs. Deduplicate symmetric orientations so straight pieces are not artificially duplicated. Selecting the uncovered cell with fewest legal placements improves search but does not change correctness. Coloring invariants may prune only when proved valid; they must not replace exhaustive search for a no-solution claim.",
    "hints": [
      "Start with dominoes on a 2×2 board before adding more shapes.",
      "Normalize a shape by translating its minimum row and column to zero, then deduplicate its rotations/reflections.",
      "A backtracking step must remove exactly the same placement it added."
    ],
    "rubric": [
      "Accepts arbitrary board portions, including holes/disconnected regions, and represents dominoes, both triomino shapes, and larger polyominoes correctly.",
      "Generates all required rotations/reflections or a clearly documented fixed-orientation subset, with duplicate orientations removed.",
      "Enforces full coverage, no overlap, no out-of-board placement, and the stated piece-reuse policy.",
      "Backtracking restores state correctly and terminates with a tiling or a genuinely exhaustive no-tiling result within the searched specification.",
      "Validates output independently and tests a tileable rectangle, a shape requiring an L triomino, a board with a hole, an area mismatch, and a small untileable board of compatible area."
    ],
    "startHere": "Encode a 2×2 board as coordinates (0,0), (0,1), (1,0), (1,1), and list every horizontal and vertical domino placement by hand.",
    "verify": "For every returned tiling, check that the total covered-cell count equals board area, every board cell occurs exactly once, and each labelled component matches an allowed orientation of its piece. Confirm that a 1×3 board tiles with the straight triomino but not with only the L triomino, and that a 3-square L board has the reverse result."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The smallest possible sum is 1³+2³+⋯+9³=2025, so every positive integer below 2025 is an immediate example. In fact, 2025 is representable, while 2026 through 2295 are not; the next smallest representable value is 2296=1³+2³+⋯+8³+10³. A model exploration reports these exact boundary results and, for larger finite searches, records its bound, algorithm, and nonrepresentable values without claiming that a finite run proves a universal statement.",
    "solution": "The nine integers must be positive and pairwise different; repetitions and zero are not allowed. For any nine distinct positive integers a1<⋯<a9, necessarily ai≥i, so the sum is at least 2025. If the set is not {1,…,9}, the smallest possible increase is obtained by replacing 9 with 10, giving 2296; any other change is at least as large. This explains the full initial gap. For computational exploration, generate combinations rather than ordered tuples, store each sum once, and compare a requested range with the generated set.",
    "hints": [
      "Find the smallest legal sum before searching randomly.",
      "Use combinations of nine distinct integers, not nine nested loops that permit repeats.",
      "State the largest possible summand needed for a target N: its cube cannot exceed N."
    ],
    "rubric": [
      "Uses exactly nine pairwise different positive integers and rejects zero and repeated values.",
      "Identifies 2025 as the minimum and correctly concludes that all positive integers below it are nonrepresentable.",
      "Correctly reports the gap 2026–2295 and verifies the representation of 2296, or provides equivalently justified additional exact results.",
      "Search implementation enumerates combinations without redundant permutations and bounds summands soundly for the chosen target range.",
      "Clearly separates exact mathematical conclusions from finite computational evidence and independently checks every displayed representation."
    ],
    "readAloud": "The expression a cubed means a×a×a. “Nine different positive integers” imposes both positivity and pairwise distinctness.",
    "startHere": "Choose the nine smallest allowable integers, 1 through 9, and calculate their cube sum before writing a search.",
    "verify": "Compute 2025 from the nine consecutive cubes and 2296 by replacing 729 with 1000. For any program output, check that it contains nine distinct positive bases and that the recomputed sum equals the claimed integer; document the search bound for any larger gap list."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A valid example is 80: it is greater than 79 and cannot be written as the sum of exactly 18 fourth powers of positive integers. More generally, a model program builds the set of sums using exactly k terms by layered set addition, S0={0} and Sk={s+a⁴ : s∈S(k−1), a≥1}, retaining only sums in the target range, then reports values >79 absent from S18. The exploration must distinguish exactly 18 terms from at most 18 terms.",
    "solution": "For 80, suppose exactly 18 positive bases are used. Any base of 3 or more contributes at least 81, already exceeding 80, so every base is 1 or 2. If k bases equal 2 and the other 18−k bases equal 1, the sum is 16k+(18−k)=18+15k. This cannot equal 80 because 80−18=62 is not divisible by 15. Repetitions are allowed here because the prompt does not say different. Layered dynamic programming avoids storing all ordered 18-tuples and enforces the exact term count.",
    "hints": [
      "Positive bases start at 1; using 0 would silently change “exactly 18” into “at most 18.”",
      "Build reachable sums for 1 term, then 2 terms, and so on through 18.",
      "For a small target such as 80, only bases 1 and 2 need consideration."
    ],
    "rubric": [
      "Searches only integers greater than 79 and uses exactly 18 positive-integer fourth powers with repetitions permitted.",
      "Provides 80 as a valid nonrepresentable example with a correct proof, or another example with equally rigorous verification.",
      "Uses a sound exact-count algorithm and does not merge results for fewer than 18 terms.",
      "Bounds bases by a⁴≤target and reports the finite target range and implementation details.",
      "Includes positive controls, such as 18=18·1⁴ and 33=2⁴+17·1⁴, to show that the representability search accepts valid sums."
    ],
    "startHere": "On paper, assume an 18-term representation of 80. Explain why only 1⁴=1 and 2⁴=16 can occur, then write the total as 18+15k.",
    "verify": "Confirm that no integer k makes 18+15k=80 and that 0≤k≤18. Test the program on 18 and 33, which must be representable, and on 80, which must not appear in S18; do not use the exclusion of 79 as evidence that 80 was tested."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Model output begins with 1729=1³+12³=9³+10³, 4104=2³+16³=9³+15³, 20683=10³+27³=19³+24³, 39312=2³+34³=15³+33³, 40033=9³+34³=16³+33³, and 64232=17³+39³=26³+36³. A model search enumerates unordered pairs a≤b of positive integers, maps each a³+b³ to its pairs, and reports sums having at least two distinct pairs; reversing a pair does not count as a different way.",
    "solution": "For a finite bound N, require a≤b and a³+b³≤N, so both bases are at most the integer cube root of N. Store pairs in canonical order and compare sets of pairs, not strings. The examples include scaled families and genuinely different pairs; either is valid under the prompt, but a report should say which bound was searched. “As many as you can” requires reproducible output and a stated search limit, not an unsupported claim that the list is complete beyond that limit.",
    "hints": [
      "Use a≤b to avoid counting (a,b) and (b,a) twice.",
      "Use a dictionary keyed by the sum, with a set of base pairs as its value.",
      "Check the famous 1729 example before running a large search."
    ],
    "rubric": [
      "Finds multiple positive integers with at least two genuinely different unordered representations as sums of two positive cubes.",
      "Includes and verifies 1729 plus at least three additional correct examples, or a comparably strong reproducible result list.",
      "Does not count reversed pairs, zero, negative bases, or duplicate identical pairs as different representations.",
      "Uses sound finite bounds, states N, and makes no unjustified claim of completeness outside the searched range.",
      "Recomputes every displayed equation and removes duplicate output records."
    ],
    "readAloud": "The pair (a,b) represents a cubed plus b cubed. Two ways are different when the unordered pairs of bases differ, not merely when their written order changes.",
    "startHere": "Verify 1³+12³=1+1728=1729 and 9³+10³=729+1000=1729, then design the search around that known positive control.",
    "verify": "For each output line, independently evaluate both sums, confirm equality with the target, and check that the two sorted base pairs are unequal. Confirm the program reports exactly one record per integer and prints its search bound."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model exploration implements recursive win/loss analysis for Chomp states and reports strategies as moves to losing states, not just a win/loss label. Useful verified examples are: every 1×n board with n>1 is a first-player win by removing all cookies except poison; every 2×n rectangle is a first-player win by moving at (n,2), leaving row lengths n and n−1; and a square board has the standard move at (2,2), after which equal arms can be maintained by diagonal mirroring. The report should state which configurations were exhaustively computed and avoid presenting the general rectangle existence argument as an explicit strategy.",
    "solution": "For a fixed poison convention, a position is losing (a P-position) if every legal move either takes poison and loses or leaves a winning position for the opponent; it is winning (an N-position) if some legal move leaves a P-position. Memoize canonical row-length representations to avoid recomputation. A winning move certificate names the move and supplies the resulting state for independent evaluation. The general finite rectangular strategy-stealing theorem shows a first-player win but does not construct the move; small computed tables and explicit families should be labelled separately.",
    "hints": [
      "Define a position by the cookies still present, not by the dimensions of the original rectangle.",
      "A winning move is one that leaves a losing position for the other player.",
      "Memoize states, but do not memoize across different poison or move rules."
    ],
    "rubric": [
      "States Chomp rules and win/loss recurrence consistently, including poison handling and terminal positions.",
      "Computes classifications for several genuinely different initial configurations and supplies at least one explicit winning move for each claimed win.",
      "Correctly includes small explicit strategies such as 1×n and 2×n, or equivalent independently verified strategy tables.",
      "Distinguishes constructive strategies from the nonconstructive strategy-stealing existence result for general rectangles.",
      "Validates memoized results by exhaustive recomputation on small boards and provides reproducible state/move transcripts."
    ],
    "startHere": "Enumerate every position reachable from a 2×2 board and label positions backward from the poison-only terminal state.",
    "verify": "Check each proposed winning move by enumerating every legal opponent response and confirming a winning reply exists. For 2×n, confirm the displayed move leaves row lengths n and n−1; cross-check all states reachable from 2×2 and 2×3 against an independent recursive table."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The 12 free pentominoes are conventionally labelled F, I, L, P, N, T, U, V, W, X, Y, and Z. A model construction starts with one square and repeatedly adds an edge-adjacent empty square, normalizing every shape under translation, rotation, and reflection and deduplicating at each size. The free-polyomino counts through size five are 1,1,2,5,12; final output draws or lists coordinates for all 12 five-cell connected shapes with exactly one representative per equivalence class.",
    "solution": "A pentomino has five unit squares joined edge to edge; corner-only contact does not make a connected polyomino. To normalize, generate all rotations and reflections, translate each so its minimum x and y coordinates are zero, sort its cells, and choose the lexicographically smallest encoding. “Different” here means free equivalence, so reflected and rotated copies are not additional pentominoes. Named labels are a check on recognizable output, but connectivity, cell count, and equivalence-class verification are the substantive requirements.",
    "hints": [
      "Generate the two free triominoes and five free tetrominoes first to test normalization.",
      "Include reflections as well as rotations, or you will count chiral pairs separately.",
      "Every final shape must have five cells and one edge-connected component."
    ],
    "rubric": [
      "Constructs exactly 12 distinct free pentominoes, conventionally identifiable as F,I,L,P,N,T,U,V,W,X,Y,Z.",
      "Every displayed shape has exactly five unit squares and is edge-connected.",
      "Canonicalization handles translation, all rotations, and reflections, so no output pair is equivalent under these symmetries.",
      "Generation is complete through systematic edge expansion or another justified exhaustive method rather than hand-picking familiar shapes.",
      "Includes intermediate count checks 1,1,2,5,12 and an independent pairwise equivalence check on final output."
    ],
    "startHere": "Draw the straight triomino and L triomino, then add one edge-adjacent square in every possible position and merge rotated/reflected duplicates.",
    "verify": "Count five cells in every output, flood-fill each shape to confirm connectivity, and compare every pair under all eight square symmetries. Confirm the set matches the 12 standard labels and that the size-four intermediate set has five shapes."
  },
  {
    "id": "rosen-ch1-ex-computations-explorations-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Up to rotation, the 60-cell rectangles tileable with each of the 12 pentominoes exactly once are 3×20, 4×15, 5×12, and 6×10. The other integer factor rectangles, 1×60 and 2×30, cannot accommodate the X pentomino. A model computational submission supplies a valid placement certificate for each of the four tileable dimensions and uses exhaustive exact-cover search or the geometric obstruction to justify exclusion of the others.",
    "solution": "Area 60 gives candidate dimensions 1×60, 2×30, 3×20, 4×15, 5×12, and 6×10, with transposes handled by rotation. Since 12×5=60, every pentomino is used exactly once. Generate legal placements of every orientation on each candidate board and solve exact cover with constraints “every board cell covered once” and “every pentomino used once.” Output a grid whose letters identify the 12 pieces. Merely finding a tiling does not by itself establish that all factor pairs were considered, so the final report must include the candidate list and exclusions.",
    "hints": [
      "List factor pairs before searching; area alone does not prove tileability.",
      "The X pentomino needs width and height at least three.",
      "Use both cell constraints and one-placement-per-piece constraints in exact cover."
    ],
    "rubric": [
      "Considers every integer rectangle of area 60 up to rotation and uses each of the 12 pentominoes exactly once per proposed tiling.",
      "Reports exactly 3×20, 4×15, 5×12, and 6×10 as tileable, with a valid reproducible placement certificate for each.",
      "Excludes 1×60 and 2×30 using the X-pentomino dimension obstruction and does not omit any factor pair.",
      "Exact-cover implementation enforces no gaps, no overlaps, legal orientations, board boundaries, and single use of every piece.",
      "Independently validates all four 60-cell grids/placement lists and distinguishes computational certificates from unsupported visual claims."
    ],
    "startHere": "Factor 60 into six unordered dimension pairs and draw the X pentomino to see why height one or two is impossible.",
    "verify": "For each certificate, count 60 cells, exactly five cells per letter, and all 12 standard pentomino labels; compare each letter’s occupied coordinates to an allowed orientation. Check that the final dimension list contains all four positive results and no 1- or 2-row rectangle."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay explains a paradox as an apparently acceptable argument leading to contradiction or an untenable conclusion. It distinguishes the simplified Liar sentence “This sentence is false” from Epimenides’ historical “All Cretans are liars,” which requires extra assumptions to yield a strict paradox. Jourdain’s card has two sides whose truth claims refer to each other, preventing a consistent classical assignment. The barber paradox shows that no barber can shave exactly all and only those people in the stated domain who do not shave themselves: substituting the barber gives a contradiction. The essay then compares responses such as rejecting the impossible existential setup, restricting or stratifying self-reference, and using nonclassical truth treatments, while noting that there is no single universally accepted resolution of every paradox.",
    "solution": "Organize one section per example with three steps: exact formulation, derivation of the problem, and proposed response. For the barber, let B be the barber and S(x,y) mean x shaves y; the specification implies S(B,B)↔¬S(B,B). For the card, write the two statements explicitly rather than vaguely calling them self-referential. For Epimenides, explain why “all Cretans are liars” can simply be false if some Cretan tells the truth, unless strengthened. Outside references should support both the historical formulations and the philosophical responses.",
    "hints": [
      "Do not assume that every version of Epimenides’ statement is formally identical to the one-line Liar paradox.",
      "For the barber, ask what happens when x is the barber.",
      "Separate diagnosis of the contradiction from a proposed philosophical resolution."
    ],
    "rubric": [
      "Accurately formulates Epimenides, Jourdain’s card, and the barber paradox and explains the reasoning in each rather than merely naming them.",
      "Notes the important assumptions distinguishing Epimenides’ report from the strict Liar paradox.",
      "Derives the barber’s self-contradiction and explains why the proposed barber cannot exist under the specification.",
      "Compares at least two resolution approaches with their scope and limitations, without claiming a universal uncontested solution.",
      "Uses credible outside sources with complete citations, clear organization, and careful distinction between historical claims and formal reconstructions."
    ],
    "startHere": "Make a three-row table with columns “statement,” “why it is troublesome,” and “proposed response,” beginning with the exact wording of each paradox.",
    "verify": "Check each explanation against a cited source and test the formal barber condition with the barber substituted for the customer. Ensure every claimed resolution is attributed and that the essay does not silently strengthen Epimenides’ original statement."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay introduces fuzzy sets and degrees of membership or truth in [0,1], then explains fuzzy control through linguistic IF–THEN rules, fuzzification, rule inference, aggregation, and defuzzification. It develops concrete applications such as appliance and camera control, industrial process control, transportation systems, and decision support, using sources to verify exactly how fuzzy methods are used in each example. It contrasts fuzziness (vagueness or graded membership) with probability (uncertainty about occurrence), and evaluates benefits—simple expression of expert rules and smooth control—against limitations—rule design, tuning, validation, and the fact that fuzzy logic is not automatically superior to conventional control or machine learning.",
    "solution": "Choose two or three well-documented applications rather than listing product names without explanation. For each, identify the measured inputs, a sample linguistic rule, the fuzzy inference stage, and the real-world output. Consult at least one recent general-audience book as requested, and supplement it with current technical or vendor-independent sources for claims about present use. “Recent” should be justified relative to the submission date, with edition and publication details included.",
    "hints": [
      "One concrete rule such as “IF temperature is high THEN fan speed is high” is more explanatory than a bare application list.",
      "Do not call a membership degree the probability that an event occurs.",
      "Include limitations and cite evidence for any claim that an application is currently deployed."
    ],
    "rubric": [
      "Explains graded membership/truth and the main stages of a fuzzy-rule system accurately.",
      "Describes at least two practical applications in enough detail to connect inputs, fuzzy rules/inference, and outputs.",
      "Correctly distinguishes fuzziness from probability and avoids exaggerating what fuzzy logic guarantees.",
      "Discusses both practical benefits and limitations using application-specific reasoning.",
      "Consults and cites at least one genuinely recent general-audience book plus appropriate supporting sources, with publication details and traceable claims."
    ],
    "readAloud": "A membership value μA(x)=0.7 is read “x has membership 0.7 in fuzzy set A,” not “there is a 70 percent chance that x is in A.”",
    "startHere": "Select one application and write its input, one IF–THEN rule, and output in plain English before expanding to the essay.",
    "verify": "Trace each application claim to a cited source, verify the book’s edition/date and general-audience character, and reread every numeric membership statement to ensure it is not described probabilistically."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay defines SAT: given Boolean variables and constraints, decide whether an assignment makes all constraints true. It then models several practical problems, for example scheduling/timetabling, hardware or software verification, planning, configuration, and combinatorial design. A scheduling example uses a variable x(c,t,r) meaning course c is scheduled at time t in room r, with clauses ensuring each course gets a slot, no room/time double booking, no instructor/time conflict, and satisfaction of availability or capacity restrictions. The essay explains that a satisfying assignment decodes into a schedule, while UNSAT means the encoded constraints have no solution, and discusses encoding size and solver efficiency.",
    "solution": "The key skill is translating real entities into variables and constraints, not merely saying that SAT is used in an industry. Include one worked miniature encoding with a satisfying assignment and explain at least one other application at the same structural level. Note that practical tools often use CNF, SAT solvers, or SMT extensions, and that a model is only as faithful as its constraints; an unsatisfiable encoding may indicate over-constrained requirements or an encoding error.",
    "hints": [
      "Name exactly what each Boolean variable means before writing clauses.",
      "For allocation problems, separate “at least one” constraints from “at most one” constraints.",
      "Explain what a satisfying assignment means in the original real-world problem."
    ],
    "rubric": [
      "Defines Boolean satisfiability and the meaning of SAT and UNSAT accurately.",
      "Describes at least three practical problem domains, with a detailed variable-and-constraint encoding for at least one.",
      "Explains how a satisfying assignment is decoded into a practical solution and how constraints reflect real requirements.",
      "Includes a small concrete example or clauses that are logically correct, not just a list of applications.",
      "Discusses modeling/encoding limitations and uses credible outside sources with citations."
    ],
    "startHere": "Choose two courses, two times, and one room. Define x(c,t) and write the clauses for assigning every course and preventing simultaneous room use.",
    "verify": "Take one satisfying assignment from the miniature example and check every clause by substitution. Then decode it into the original schedule and confirm that no real-world constraint has been omitted or reversed; check application claims against cited sources."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model response encodes a single round-robin tournament in which every pair of teams plays exactly once. One useful variable is x(i,j,r), meaning teams i and j play in round r, for i<j. Constraints require every unordered pair {i,j} to occur in exactly one round, every team to play at most once per round (exactly once for a full even-team schedule), and optionally venue or availability restrictions. With n teams, there are n(n−1)/2 matches; for even n, n−1 rounds and n/2 matches per round give the expected totals. A satisfying assignment is read directly as the fixture table; UNSAT shows that the chosen round and constraint set cannot produce a tournament.",
    "solution": "Write the pair requirement as ∨r x(i,j,r) plus pairwise ¬x(i,j,r)∨¬x(i,j,s) for r<s. For each team i and round r, require at most one x(i,j,r) over all j≠i; if every team must play every round, add an at-least-one clause. For odd n, a bye or dummy team is needed for a balanced all-round schedule, so do not blindly require every real team to play each round. A two- or four-team worked example demonstrates the encoding and decoding.",
    "hints": [
      "Use i<j so a match is not encoded twice as i versus j and j versus i.",
      "“Exactly once” needs both at-least-one and at-most-one conditions.",
      "Handle odd team numbers explicitly with byes or a dummy team."
    ],
    "rubric": [
      "Defines match variables and a round-robin format precisely, avoiding duplicate representations of the same fixture.",
      "Enforces exactly one round for every pair and at most one match per team per round, with correct stronger constraints when full rounds are intended.",
      "Explains how to decode a satisfying assignment into the schedule and interprets UNSAT correctly.",
      "Includes correct match/round counts and addresses odd versus even numbers of teams.",
      "Provides a small verified fixture example and cites outside sources for SAT encoding or tournament scheduling."
    ],
    "readAloud": "Read x(i,j,r) as “team i plays team j in round r.” The condition i<j is a naming convention that gives each unordered pair one variable family.",
    "startHere": "Use teams A,B,C,D and three candidate rounds. List all six pairs, then decide which variables must be true for a valid schedule with two matches in each round.",
    "verify": "In the sample schedule, check that all six pairs for four teams occur once and that every team appears exactly once per round. With four teams, confirm three rounds and two matches per round."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay explains manual Sudoku reasoning in increasing difficulty: cross-hatching and scanning; naked singles, where a cell has only one candidate; hidden singles, where a digit can occur in only one cell of a row, column, or box; candidate pencil marks; locked candidates (pointing and claiming); naked/hidden pairs; and, for advanced puzzles, X-Wing or chains. Each technique is tied to the invariant that every row, column, and 3×3 box contains digits 1–9 exactly once, and at least one technique is demonstrated step by step on a small grid fragment.",
    "solution": "Distinguish filling a value from eliminating a candidate. A naked single is obvious from one cell’s candidate list; a hidden single may have several pencil marks in that cell but is the only place for a digit within a unit. For locked candidates, if a digit’s candidates inside a box lie in one row, that digit can be eliminated from that row outside the box. Explain why elimination is valid before applying it, and avoid presenting guessing or backtracking as a necessary human technique.",
    "hints": [
      "Use “unit” for a row, column, or box to avoid repeating the same logic three times.",
      "A hidden single concerns a digit’s possible locations, not a cell with one pencil mark.",
      "Show the candidates before and after one elimination."
    ],
    "rubric": [
      "Accurately describes at least four distinct noncomputer techniques, including both naked and hidden singles and at least one intermediate technique.",
      "Explains the logical reason each technique preserves Sudoku constraints rather than giving only names.",
      "Provides a correct worked grid or candidate-list example with explicit before/after reasoning.",
      "Distinguishes candidate elimination, value placement, and speculative guessing/backtracking.",
      "Uses clear diagrams or notation and cites credible outside Sudoku technique sources."
    ],
    "startHere": "Choose one nearly complete row, list the candidates for each empty cell, and find both a naked single and a hidden single if the fragment permits.",
    "verify": "Recheck the worked example against all three unit types and ensure no placed digit repeats in a row, column, or box. For every elimination, identify the exact unit and candidate set that forces it; verify technique descriptions against the cited sources."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay identifies WFF’N PROOF as Layman Allen’s instructional game system for modern logic and uses its published rules as the primary source. It explains that a well-formed formula (WFF) is a grammatically valid logical expression, describes the game’s symbol cubes/components, legal formula construction, goals, turns, and challenges, and then explains how later proof play adds inference rules and derivation of a goal from premises. Examples should include an introductory WFF-building game and a more advanced proof-oriented game from the set, with a short legal play sequence or formula/proof example and exact names verified against the manual or edition being cited.",
    "solution": "Keep three ideas separate: syntax (whether an expression is a WFF), semantics (truth), and proof (whether a conclusion follows by permitted rules). A useful illustration is that p→q and p permit q by modus ponens, but the essay should connect any example to the game’s actual components and permitted rules rather than inventing generic board-game rules. Because components and game names can vary by edition, the response must identify its edition and quote or paraphrase the manual accurately.",
    "hints": [
      "Define WFF before describing play.",
      "Do not confuse grammatical correctness of a formula with its truth.",
      "Use the rule manual for exact game names, legal moves, and scoring."
    ],
    "rubric": [
      "Identifies Layman Allen and accurately explains the educational purpose and basic components of WFF’N PROOF.",
      "Defines well-formed formulas and describes legal construction, turns/goals, and challenge or scoring mechanisms according to a cited rule set.",
      "Explains how proof-oriented play uses premises, inference rules, and goals without conflating syntax, truth, and derivability.",
      "Gives at least two accurately named examples of games or levels included in the cited set, including WFF construction and proof play, with a concrete example.",
      "Identifies the edition and relies on verifiable primary/manual sources for detailed rules, with complete outside citations."
    ],
    "startHere": "Write three headings—syntax, truth, proof—and place “p∧q is a WFF,” “p is true,” and “q follows from p→q and p” under the correct ideas.",
    "verify": "Cross-check every named game, component, turn rule, and scoring statement against the exact cited manual or reliable historical source. Replay the example move by move and remove any rule details that cannot be supported for the identified edition."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-007",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay draws on Lewis Carroll’s The Game of Logic and Symbolic Logic. It explains his proposition notation and biliteral/triliteral diagrams, whose compartments represent combinations of attributes and their negations, and how counters mark empty or nonempty regions according to his convention. It shows how premises are transferred to a diagram, how a middle term is eliminated in a sorites, and how the remaining relation yields a conclusion. A worked categorical example, rules such as conversion/contraposition where applicable, and Carroll’s treatment of existence are discussed in his terminology rather than replaced entirely by modern notation.",
    "solution": "Choose actual examples from Carroll and cite their location. A clear modern cross-check can be supplied, but the main task is Carroll’s model. Explain primes such as x′ as negation when used, distinguish a diagram representing two attributes from one representing three, and state precisely which counter convention the cited edition uses. For inference, show each premise and the exact diagrammatic operation; do not claim that Carroll’s syllogistic system is simply modern first-order logic. Discuss existential import or empty-class assumptions if they affect the chosen example.",
    "hints": [
      "Use Carroll’s own example and notation before translating it into modern symbols.",
      "The middle term should disappear when the conclusion is formed.",
      "Check whether a universal premise is being treated as asserting existence; that assumption matters."
    ],
    "rubric": [
      "Engages directly with named writings by Lewis Carroll and accurately describes at least two diagrammatic or symbolic models in detail.",
      "Explains compartments, negation/prime notation, counters or markings, and the representation of premises according to the cited edition.",
      "Works through at least one complete Carroll argument or sorites, showing premise representation, middle-term elimination, and conclusion.",
      "Identifies the inference rules used and addresses existential assumptions where relevant instead of silently imposing modern conventions.",
      "Provides accurate diagrams/translations and precise outside citations to Carroll’s texts."
    ],
    "startHere": "Select one short Carroll syllogism, list its two premises and conclusion, and label each class term before drawing the appropriate diagram.",
    "verify": "Reconstruct the diagram from the cited text one premise at a time and confirm that the conclusion follows without reintroducing the middle term. Check counter meanings and existence assumptions against the edition, not against an unverified memory of modern Venn diagrams."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-008",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay explains Prolog execution as SLD resolution over Horn clauses. Facts and rules are clauses; a query is treated as a goal to refute. Prolog selects a goal, unifies it with a renamed clause head, applies the most general unifier, replaces the goal by the clause body, and continues until the empty goal yields success. It searches clauses top-to-bottom and goals left-to-right using depth-first search with backtracking, returning answer substitutions. A concrete ancestor example should show recursive resolution and unification, while cuts, negation as failure, and nontermination are distinguished from pure logical resolution.",
    "solution": "Use facts parent(ann,bob) and parent(bob,cid), plus ancestor(X,Y):-parent(X,Y) and ancestor(X,Y):-parent(X,Z),ancestor(Z,Y). For ?-ancestor(ann,cid), the recursive rule gives goals parent(ann,Z), ancestor(Z,cid); the first fact sets Z=bob; resolving ancestor(bob,cid) with the base rule gives parent(bob,cid), which succeeds. Explain that variable renaming avoids accidental capture and that resolution derives answers by unification, not by pattern matching alone. Operational search order can affect termination even when the logical meaning is unchanged.",
    "hints": [
      "Write the query and each remaining goal list at every resolution step.",
      "Unification can bind variables on both sides; matching alone is too weak.",
      "Separate Prolog’s depth-first control strategy from the logical resolution principle."
    ],
    "rubric": [
      "Accurately explains Horn clauses, goals, resolution, unification/most general unifiers, variable renaming, and answer substitutions.",
      "Provides a complete step-by-step Prolog query derivation showing clause selection, bindings, subgoals, and success.",
      "Describes leftmost goal selection, clause order, depth-first search, and backtracking correctly.",
      "Distinguishes pure resolution from operational features such as cut or negation as failure and mentions relevant termination/search limitations.",
      "Uses syntactically coherent examples and credible outside sources on Prolog/SLD resolution."
    ],
    "readAloud": "ancestor(X,Y):-parent(X,Z),ancestor(Z,Y) reads “X is an ancestor of Y if X is a parent of Z and Z is an ancestor of Y.” The comma is conjunction; :- reads “if.”",
    "startHere": "Copy the two parent facts and two ancestor rules, then write ?-ancestor(ann,cid) and track the current goal list and variable bindings in two columns.",
    "verify": "Replay the sample derivation to the empty goal and confirm the final query succeeds with the intended bindings. Check every clause head/body and cited claim against a Prolog reference; do not describe backtracking as part of the logical truth of a rule."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-009",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay surveys computational-logic techniques such as normal-form conversion, clausal form, unification, resolution, tableaux, and SAT methods. Its central Skolem example is correct: ∀x∃y L(x,y) becomes ∀x L(x,f(x)) for satisfiability analysis, because y may depend on x; an initial ∃x can use a fresh Skolem constant. It emphasizes that Skolemization preserves satisfiability, not equivalence or validity in general, and that fresh function symbols and dependencies on all relevant universal variables are essential. It then connects clausal form and unification to resolution and contrasts these with DPLL/CDCL or tableau search.",
    "solution": "A reliable pipeline is negation normal form, standardization apart, prenexing where applicable, Skolemization, and conversion to clauses. In ∀x∃y, y becomes f(x), not one global constant c. Dropping an existential quantifier without introducing the correct fresh function is not Skolemization. Resolution needs unification and clause renaming; propositional SAT methods operate after different modeling assumptions. Explain whether each transformation preserves equivalence, satisfiability, or only a search property.",
    "hints": [
      "Underline every universal variable on which an existential variable depends.",
      "Use a new Skolem symbol for each eliminated existential quantifier.",
      "Write “equisatisfiable,” not “logically equivalent,” unless you have proved the stronger claim."
    ],
    "rubric": [
      "Explains at least three computational-logic techniques with accurate purpose and relationships.",
      "Gives a correct Skolemization example with fresh constants/functions and correct universal dependencies.",
      "Explicitly distinguishes preservation of satisfiability from logical equivalence/validity.",
      "Explains how clausal form, unification, and resolution work together or accurately compares the chosen techniques.",
      "Includes correct notation, discusses soundness/completeness or efficiency where relevant without overclaiming, and cites credible outside sources."
    ],
    "readAloud": "For all x there exists y such that L(x,y) says each x gets its own y. Skolemization names that choice f(x), read “f of x.”",
    "startHere": "Compare ∀x∃y L(x,y) with ∃y∀x L(x,y). Only the second has one shared y independent of x; use this contrast to choose f(x) versus a constant.",
    "verify": "Check that every Skolem symbol is fresh and has exactly the universally quantified variables in scope as arguments. Test the example against a two-element model where different x values need different y values, and verify technical claims against a cited computational-logic text."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-010",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay defines automated theorem proving as machine-assisted derivation or verification of mathematical/logical theorems and distinguishes fully automatic provers from interactive proof assistants. It covers goals such as sound formal derivation, search efficiency, reusable proof objects, and reduced human error; applications include hardware/software verification, protocol and compiler checking, mathematical proofs, and SAT/SMT-based reasoning. Historical progress can be illustrated by resolution systems, the machine proof of the Robbins conjecture by EQP, and large formalizations such as the Four Color Theorem and Kepler conjecture, while discussing undecidability, combinatorial search, human guidance, and trust in kernels and encodings.",
    "solution": "Use a chronological structure but explain technical change, not just dates: resolution and unification, SAT/SMT advances, specialized decision procedures, and interactive formalization with checked proofs. Verify milestones and dates against primary project papers or proof-assistant documentation. Avoid saying that automation makes mathematics infallible: the specification, axioms, tooling, and trusted computing base still matter. Also distinguish finding a proof automatically from checking a proof supplied with substantial human guidance.",
    "hints": [
      "Make a two-column comparison of automatic proving and interactive proof assistance.",
      "For each milestone, state what was proved or formalized and what the machine actually did.",
      "Include theoretical and practical limits, not only success stories."
    ],
    "rubric": [
      "Defines automated theorem proving and accurately distinguishes automatic search, proof checking, and interactive assistance.",
      "Explains multiple goals and at least three application areas with concrete examples.",
      "Describes major technical approaches and at least two verified historical milestones showing progress.",
      "Discusses undecidability/search complexity, human modeling effort, and trusted assumptions without claiming infallibility.",
      "Uses current and historical outside sources with precise citations and accurately attributed dates/results."
    ],
    "startHere": "Draw a pipeline from formal statement and axioms through proof search or human guidance to a checked proof, marking where humans and computers contribute.",
    "verify": "For every milestone, confirm the theorem, system, date, and automation level from the cited source. Check that the essay’s claims about soundness refer to the formal system and implementation assumptions rather than guaranteeing that the real-world model is correct."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-011",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay explains DNA SAT experiments as combinatorial molecular search: design DNA sequences to encode variables, truth values, or candidate assignments; create a large library; use biochemical operations such as hybridization, ligation, PCR amplification, separation, and sequence-specific selection to remove assignments violating clauses; then read out surviving candidates. It should cite Lipton’s SAT proposal/experiment and may contrast Adleman’s earlier Hamiltonian-path experiment, without attributing the wrong problem to either. It evaluates the approach’s massive parallelism alongside exponential molecular requirements, laboratory errors, encoding/readout difficulty, and poor scalability to large practical SAT instances.",
    "solution": "Use a tiny SAT instance to map each laboratory stage to a logical operation. For example, strands represent assignments, and successive clause-selection steps retain only strands satisfying each clause. Make clear that the physical operations implement the experiment-specific encoding; there is no single universal DNA protocol for all SAT solvers. Report the scale actually demonstrated in cited experiments and separate theoretical proposals from laboratory demonstrations.",
    "hints": [
      "Explain what a strand encodes before naming laboratory procedures.",
      "Map each clause to a selection or filtering operation in a small example.",
      "Do not confuse Adleman’s Hamiltonian-path work with Lipton’s satisfiability work."
    ],
    "rubric": [
      "Accurately describes an encoding of SAT candidates in DNA and connects biochemical operations to generation, clause filtering, and readout.",
      "Includes a small coherent SAT example or step-by-step experimental workflow rather than a generic description of DNA computing.",
      "Correctly attributes relevant SAT work and distinguishes demonstrated experiments from proposals and related DNA-computing milestones.",
      "Analyzes parallelism, exponential resource scaling, laboratory errors, and practical limitations using quantitative claims only when sourced.",
      "Uses credible primary or scholarly outside sources and clearly distinguishes the model’s explanation from reported experimental results."
    ],
    "startHere": "Choose one clause, such as p∨¬q, list its four possible assignments on paper, and mark which assignments a molecular selection step would need to retain.",
    "verify": "Trace every claimed experiment to its original or scholarly source and confirm the problem, scale, and laboratory result. Walk the miniature encoding through every clause and ensure that exactly the satisfying assignments survive."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-012",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A strong essay presents documented case studies rather than a catalogue of alleged errors. One example is Kempe’s 1879 attempted Four Color Theorem proof: its Kempe-chain method was influential, but the argument failed when recoloring interactions for more complicated configurations did not preserve the claimed coloring; Heawood later exposed the gap. Another is the initial 1993 presentation of Wiles’s Fermat proof, where a gap in the Euler-system argument was subsequently repaired with Richard Taylor, leading to the accepted proof. For each case, the essay states the claimed theorem, locates the precise flawed lemma or unjustified step, explains why it fails, and separates the failed proof attempt from the theorem’s later status.",
    "solution": "Use primary papers where feasible and reliable historical or expert analyses for diagnosis. “Open question” is time-sensitive: state when the problem was open, when the attempted proof appeared, and what happened afterward. Do not call an entire research program wrong when only one lemma failed, and do not imply that a corrected proof remains an incorrect proof. At least two contrasting cases—an error found by a counterexample or gap that endured, and a repaired gap—make a coherent essay.",
    "hints": [
      "Create a timeline for each case: conjecture, attempted proof, discovered gap, and later resolution.",
      "Name the exact lemma or inference that fails instead of saying only “the proof had a mistake.”",
      "Distinguish a fatal flaw from a gap that was later repaired."
    ],
    "rubric": [
      "Examines at least two well-documented incorrect or incomplete proof attempts connected to famous problems open at the relevant time, including problems solved after 1970.",
      "States each theorem and proof attempt accurately with a clear chronology and current/historical status.",
      "Identifies and explains the specific mathematical error or gap in each attempt at an appropriate technical level.",
      "Distinguishes counterexamples, unjustified inferences, repaired gaps, and withdrawn claims without overstating their consequences.",
      "Relies on primary or authoritative scholarly sources, gives complete citations, and avoids unsupported anecdotes or accusations."
    ],
    "startHere": "Choose one case and make four columns: claimed result, proof strategy, exact gap, and later outcome. Fill them only from sources you can cite.",
    "verify": "Check dates and theorem status as of the relevant publication, then have the error explanation independently supported by an expert source. Ensure the essay does not use later correctness of a theorem as evidence that an earlier attempted proof was correct."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-013",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay states a precise Chomp convention and distinguishes existence results from constructive strategies. For every finite m×n rectangle except the poison-only 1×1 game, the first player has a winning strategy under normal play, proved by strategy stealing: consider removing only the cookie farthest from poison; if the supposed second-player winning reply were available, the first player could have made that reply initially. This argument does not identify a general winning move. Constructive examples include one-row boards, square boards using a diagonal-symmetry response after an appropriate first move, two-row formulas, and computer-analyzed small positions; the essay should also note that explicit general rectangular strategies remain difficult.",
    "solution": "Define P-positions (previous-player wins) and N-positions (next-player wins) and use them to organize examples. For an n×n square with n>1, removing the cookies at and above/right of (2,2) leaves two equal arms; the first player can mirror subsequent moves across the diagonal, forcing the opponent toward poison. For two-row boards, state the row-length convention carefully and verify any claimed formula by induction or computation. Do not turn strategy stealing into an algorithm or claim that all winning moves are known.",
    "hints": [
      "Write “there exists a winning strategy” separately from “this move is a winning move.”",
      "For strategy stealing, examine the smallest possible first move: remove only the far corner.",
      "A mirroring strategy requires equal arms after the first move."
    ],
    "rubric": [
      "Defines Chomp, poison, legal moves, and the winning/losing convention unambiguously.",
      "Presents a correct strategy-stealing proof for finite rectangles and explains its nonconstructive nature.",
      "Gives at least two correct explicit strategy families or rigorously verified computed examples, with sufficient detail to apply them.",
      "Accurately characterizes what is and is not known about general constructive strategies without overstating open problems or completeness.",
      "Uses reliable mathematical outside sources and checks coordinate conventions and examples consistently."
    ],
    "startHere": "Draw a 3×3 square, remove the upper-right 2×2 block selected at (2,2), and inspect the two remaining arms before reading about general rectangles.",
    "verify": "Test the strategy-stealing argument for hidden assumptions and replay each explicit strategy on a small board. In the square example, check that every mirrored reply remains available and that the opponent, not the mirroring player, is ultimately forced to take poison."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-014",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay organized around Pólya discusses understanding the problem, devising a plan, carrying out the plan, and looking back. It then explains heuristics such as drawing a figure, introducing notation, examining special cases, generalizing, solving a simpler or auxiliary problem, working backward, using analogy, induction, and plausible reasoning. At least one mathematical example should show several stages in action, and the essay should compare themes across the works identified by [Po62], [Po71], and [Po90], using the textbook bibliography to recover their exact titles and editions. Plausible reasoning is presented as a way to discover and assess conjectures, not as a substitute for rigorous proof.",
    "solution": "The four-stage scheme is an organizing framework, not a mechanical algorithm. “Look back” can mean checking the result, seeking another solution, generalizing, or extracting a reusable method. For analogy, identify what transfers and what might fail; for specialization, show how simple cases reveal structure. Connect each technique to the cited Pólya text with page or chapter references where possible, and distinguish discovery-oriented heuristics from deductive verification.",
    "hints": [
      "Resolve [Po62], [Po71], and [Po90] through the textbook bibliography before researching.",
      "Use one example through understand–plan–solve–review instead of defining heuristics in isolation.",
      "A convincing pattern is not yet a proof; explain what additional verification is needed."
    ],
    "rubric": [
      "Accurately explains Pólya’s four problem-solving stages and at least four additional proof/discovery strategies.",
      "Develops a coherent mathematical example showing how selected heuristics guide a solution and how looking back verifies or extends it.",
      "Engages substantively with all three referenced Pólya works and compares their relevant themes rather than citing them only in a bibliography.",
      "Distinguishes plausible reasoning and discovery from rigorous deductive proof, including limitations of analogy or pattern recognition.",
      "Identifies exact titles/editions from the references and supplies precise, credible citations."
    ],
    "startHere": "Choose a small problem such as finding 1+2+⋯+n. Write what is known and unknown, try n=1,2,3, and plan a pairing or induction argument before generalizing.",
    "verify": "Check the example algebraically and by substitution for several n, then explain what looking back adds. Cross-check every attributed heuristic and bibliographic detail against the specified Pólya sources, especially publication dates and edition titles."
  },
  {
    "id": "rosen-ch1-ex-writing-projects-015",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model essay defines polyominoes and tiling, then develops several problems and results with diagrams and proofs. Suitable examples are: a domino tiling of a rectangle requires even area but area alone is not sufficient for arbitrary boards; the standard chessboard with two opposite corners removed cannot be tiled by dominoes because the removed squares have the same color, leaving unequal color counts; and a 2^n×2^n board with any one square removed can be tiled by L triominoes, proved by dividing into four quadrants, placing one central L, and applying induction. It may also discuss pentomino rectangle packing and computational exact cover, while distinguishing necessary coloring/area invariants from sufficient constructions.",
    "solution": "Consult the references suggested by [Go94] and [Ma91], resolving their full bibliographic entries first. Present each result in the form claim, assumptions, proof or construction, and limitation. For the deficient-board induction, the base case is a 2×2 board with one square removed; at the inductive step the central L covers one square from each of the three initially nondeficient quadrants. For pentominoes, 12 pieces have area 60, so candidate rectangles must have area 60, but a packing algorithm is not a substitute for mathematical invariants or a checked tiling certificate.",
    "hints": [
      "State whether rotations/reflections and repeated pieces are allowed.",
      "Coloring usually proves impossibility; an explicit placement proves possibility.",
      "In the deficient-board proof, explain why all four quadrants become deficient boards."
    ],
    "rubric": [
      "Defines polyominoes, legal tilings, and relevant symmetry/reuse conventions clearly.",
      "Presents at least three substantive problems or results, including both an impossibility invariant and a constructive tiling theorem or packing result.",
      "Gives a correct chessboard-coloring argument and a complete induction for the deficient 2^n board if these standard examples are used.",
      "Explains why area/color conditions may be necessary but not sufficient and validates any computational tiling certificates.",
      "Engages with the suggested Golomb and Martin references or comparable authoritative sources, with diagrams, precise attribution, and complete citations."
    ],
    "startHere": "Draw an 8×8 board, remove two opposite corners, and count black and white squares; then separately draw the 2×2 base case of the deficient-board L-tromino theorem.",
    "verify": "For each impossibility claim, recheck the invariant under every allowed tile placement. For the induction, verify the base case, central placement, and all four recursive quadrant boards. Check every named result against the cited [Go94]/[Ma91] bibliography entries or other authoritative sources."
  }
];
