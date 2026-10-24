// Generated deterministically by tools/build-rosen-ch2-answers.mjs. Do not hand-edit.
const ROSEN_CH2_ANSWERS = [
  {
    "id": "rosen-ch2-ex-2-1-001",
    "mode": "auto",
    "answer": "a) {−1, 1}. b) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}. c) {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}. d) ∅.",
    "solution": "The vertical bar means ‘such that.’ Solve x² = 1 over the real numbers, list the positive integers below 12, and square integers until the squares reach 100; because squares are nonnegative, (c) is exactly 0² through 9². No integer squares to 2.",
    "hints": [
      "Read each condition before listing: note the domain, whether 0 is allowed, and whether the inequality is strict."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{−1, 1}",
        "accepted": [
          "{-1,1}",
          "{1,-1}"
        ],
        "checker": "set",
        "solution": "x² = 1 gives x = ±1, so the members are −1 and 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}",
        "checker": "set",
        "solution": "Positive integers start at 1, and ‘less than 12’ stops at 11."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{0, 1, 4, 9, 16, 25, 36, 49, 64, 81}",
        "checker": "set",
        "solution": "Integer squares are nonnegative. Those below 100 are n² for n = 0,1,…,9; negative integers contribute the same squares."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "The real solutions are ±√2, which are not integers, so the set is empty."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-002",
    "mode": "rubric",
    "answer": "a) {3k ∣ k ∈ ℤ and 0 ≤ k ≤ 4}. b) {x ∈ ℤ ∣ −3 ≤ x ≤ 3}. c) {x ∣ x is a lowercase letter from m through p, inclusive}.",
    "solution": "Set-builder notation {x ∣ condition on x} is read ‘the set of all x such that the condition holds.’ For (a), every listed number is a multiple of 3 from 3·0 through 3·4. For (b), use one integer inequality chain. For (c), state the consecutive-letter range explicitly.",
    "hints": [
      "Find a rule that includes every listed member and excludes everything else; specify the domain of the variable."
    ],
    "rubric": [
      "Gives a valid set-builder description for each part, not merely a restatement by roster.",
      "Part (a) uses exactly the multiples of 3 from 0 through 12; part (b) uses exactly the integers from −3 through 3; part (c) uses exactly m, n, o, p."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "{3k ∣ k ∈ ℤ, 0 ≤ k ≤ 4}",
        "solution": "The values 3k for k = 0,1,2,3,4 are 0,3,6,9,12.",
        "rubric": [
          "Uses a parameter and conditions producing exactly 0, 3, 6, 9, 12 in set-builder notation."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "{x ∈ ℤ ∣ −3 ≤ x ≤ 3}",
        "solution": "The chained inequality includes both endpoints and every integer between them.",
        "rubric": [
          "Specifies integers x with −3 ≤ x ≤ 3, or an equivalent condition."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "{x ∣ x is a lowercase letter from m through p, inclusive}",
        "solution": "Alphabetical succession gives m, n, o, p and no other letters.",
        "rubric": [
          "Describes exactly the four consecutive letters m through p using set-builder notation."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-003",
    "mode": "rubric",
    "answer": "a) [0, 5), [0, 5]. b) (0, 5), (0, 5], [0, 5), [0, 5]. c) (0, 5), (0, 5], [0, 5), [0, 5], [2, 3]. d) (0, 5), (0, 5], [0, 5), [0, 5], [2, 3]. e) (0, 5), (0, 5], [0, 5), [0, 5], (1, 4]. f) (0, 5], [0, 5].",
    "solution": "A square bracket includes its endpoint; a parenthesis excludes it. Test each number against both endpoint conditions. Thus 0 needs a closed left endpoint at 0, 1 is excluded from (1,4], 2 and 3 are excluded from (2,3), 4 is included in (1,4], and 5 needs a closed right endpoint at 5.",
    "hints": [
      "Translate [a,b] to a ≤ x ≤ b and (a,b) to a < x < b; apply the same endpoint rule to half-open intervals."
    ],
    "rubric": [
      "Lists exactly the stated intervals for each of (a)–(f).",
      "Correctly excludes open endpoints and includes closed endpoints, especially 2 and 3 in [2,3] but not (2,3)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[0, 5), [0, 5]",
        "solution": "Only these two intervals include their left endpoint 0.",
        "rubric": [
          "Lists exactly [0,5) and [0,5]."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(0, 5), (0, 5], [0, 5), [0, 5]",
        "solution": "The number 1 lies strictly between 0 and 5, but is the excluded left endpoint of (1,4].",
        "rubric": [
          "Lists exactly the four intervals with endpoints 0 and 5."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(0, 5), (0, 5], [0, 5), [0, 5], [2, 3]",
        "solution": "The first four contain 2; [2,3] includes its left endpoint, while (2,3) does not.",
        "rubric": [
          "Lists the four 0-to-5 intervals and [2,3], with no others."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(0, 5), (0, 5], [0, 5), [0, 5], [2, 3]",
        "solution": "The first four contain 3; [2,3] includes its right endpoint, while (2,3) does not.",
        "rubric": [
          "Lists the four 0-to-5 intervals and [2,3], with no others."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "(0, 5), (0, 5], [0, 5), [0, 5], (1, 4]",
        "solution": "The first four contain 4, and (1,4] includes its right endpoint.",
        "rubric": [
          "Lists the four 0-to-5 intervals and (1,4], with no others."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "(0, 5], [0, 5]",
        "solution": "Only intervals with 5 as a closed right endpoint contain 5.",
        "rubric": [
          "Lists exactly (0,5] and [0,5]."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-004",
    "mode": "auto",
    "answer": "a) {a}. b) ∅. c) ∅. d) ∅. e) ∅. f) ∅.",
    "solution": "Write the endpoint inequalities. In (a), a ≤ x ≤ a forces x = a. In (b)–(d), at least one strict inequality makes x = a impossible. In (e) and (f), a > b makes the required lower bound greater than the upper bound, so no real x can satisfy them.",
    "hints": [
      "Turn each pair of brackets into inequalities; check whether the two endpoints can equal one another."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{a}",
        "checker": "set",
        "solution": "Both endpoints are included, and a ≤ x ≤ a gives exactly x = a."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "The condition a ≤ x < a is impossible."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "The condition a < x ≤ a is impossible."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "The condition a < x < a is impossible."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "It would require a < x < b although a > b, so no x exists."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "It would require a ≤ x ≤ b although a > b, so no x exists."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-005",
    "mode": "rubric",
    "answer": "a) The second set is a subset of the first. b) Neither is a subset of the other. c) The first set is a subset of the second.",
    "solution": "A ⊆ B means every member of A also belongs to B. Every nonstop New York–New Delhi flight is such a flight, but some flights have stops. English speakers need not speak Chinese and conversely. Every flying squirrel is a flying living creature, while many other flying creatures are not flying squirrels.",
    "hints": [
      "For each direction, ask whether membership automatically transfers; one member that fails is enough to disprove a subset claim."
    ],
    "rubric": [
      "Classifies all three pairs in the correct direction.",
      "Explains the subset decisions using membership, including counterexamples for the reverse or neither claims."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The second set is a subset of the first; the first is not a subset of the second.",
        "solution": "Nonstop flights are a special kind of New York–New Delhi flight; flights with stops show the reverse inclusion fails.",
        "rubric": [
          "States second ⊆ first and identifies why the reverse fails."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Neither set is a subset of the other.",
        "solution": "Some English speakers do not speak Chinese, and some Chinese speakers do not speak English.",
        "rubric": [
          "States neither and gives counterexamples in both directions."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "The first set is a subset of the second; the second is not a subset of the first.",
        "solution": "Flying squirrels belong to the broader collection of flying living creatures; other flying creatures show the reverse fails.",
        "rubric": [
          "States first ⊆ second and explains why the reverse fails."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-006",
    "mode": "rubric",
    "answer": "a) The second set is a subset of the first. b) The second set is a subset of the first. c) Neither is a subset of the other.",
    "solution": "An Australian-accented English speaker is an English speaker, and every citrus fruit is a fruit. Neither reverse inclusion holds. Discrete-mathematics students and data-structures students can belong to either course group without belonging to the other.",
    "hints": [
      "A more restrictive description usually gives the smaller set; course names alone do not make either student group contain the other."
    ],
    "rubric": [
      "Classifies (a) and (b) as second ⊆ first and (c) as neither.",
      "Supports the classifications with membership reasons or counterexamples."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The second set is a subset of the first, but not conversely.",
        "solution": "The accent condition is additional; English speakers with other accents prevent the reverse inclusion.",
        "rubric": [
          "States second ⊆ first and explains the failed reverse inclusion."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "The second set is a subset of the first, but not conversely.",
        "solution": "Citrus fruits are fruits, while non-citrus fruits prevent the reverse inclusion.",
        "rubric": [
          "States second ⊆ first and explains the failed reverse inclusion."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Neither set is a subset of the other.",
        "solution": "A student can study either subject without studying the other, so neither membership condition implies the other.",
        "rubric": [
          "States neither and explains both possible counterexamples."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-007",
    "mode": "auto",
    "answer": "a) True. b) False. c) False.",
    "solution": "Set equality ignores listing order and repetition. In (a), both sets reduce to {1,3,5}. In (b), the second set also contains the number 1. In (c), ∅ has no members, whereas {∅} has one member, namely ∅.",
    "hints": [
      "Compare actual elements, not how many times they are written; distinguish an empty container from a container whose element is ∅."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T",
          "true"
        ],
        "checker": "truth",
        "solution": "After removing repeated listings, both sets have exactly 1, 3, and 5."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F",
          "false"
        ],
        "checker": "truth",
        "solution": "{{1}} has only the element {1}, while {1,{1}} also has 1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F",
          "false"
        ],
        "checker": "truth",
        "solution": "The empty set has cardinality 0, but {∅} has cardinality 1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-008",
    "mode": "rubric",
    "answer": "B ⊆ A, C ⊆ A, and C ⊆ D. Also A ⊆ A, B ⊆ B, C ⊆ C, and D ⊆ D; there are no other inclusions between different listed sets.",
    "solution": "Check each element. B = {2,6} and C = {4,6} lie in A = {2,4,6}; C also lies in D = {4,6,8}. The reverse inclusions fail because 4 ∈ A∖B, 2 ∈ A∖C, and 8 ∈ D∖C. B is not contained in C or D because 2 is absent, and neither A nor D is contained in another listed set.",
    "hints": [
      "Make an element-membership table for 2, 4, 6, and 8; one missing element rules out an inclusion."
    ],
    "rubric": [
      "Identifies exactly B ⊆ A, C ⊆ A, and C ⊆ D among different listed sets.",
      "Does not claim any reverse or additional cross-set inclusion; acknowledging reflexive inclusions is optional."
    ],
    "verify": "The proper inclusions form B → A ← C → D; there is no inclusion between B and C or B and D."
  },
  {
    "id": "rosen-ch2-ex-2-1-009",
    "mode": "auto",
    "answer": "a) True. b) False. c) True. d) False. e) False. f) False.",
    "solution": "The symbol ∈ checks direct membership, not membership at a deeper brace level. The integer 2 exceeds 1, but is not an integer square. It is directly listed only in (c); the other sets contain sets such as {2} or {{2}}, not the number 2.",
    "hints": [
      "List only the elements at the outermost brace level; {2} and 2 are different objects."
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
        "solution": "2 is a real integer greater than 1, so it satisfies the defining property."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "No integer n satisfies n² = 2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "The two direct elements are 2 and {2}."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The direct elements are {2} and {{2}}, neither of which is 2."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The direct elements are {2} and {2,{2}}, not 2."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only direct element is {{2}}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-010",
    "mode": "auto",
    "answer": "a) False. b) False. c) True. d) True. e) True. f) False.",
    "solution": "Now the object sought is the singleton set {2}, not the number 2. It cannot be an integer in (a) or a square in (b). It occurs directly in (c), (d), and (e). In (f), the sole member is {{2}}, one nesting level deeper.",
    "hints": [
      "Use Exercise 9’s same six sets, but compare {2} with each outermost element."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "This set contains integers greater than 1, not the set {2}."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "This set contains real squares of integers, not the set {2}."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "{2} is explicitly the second element of {2,{2}}."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "{2} is explicitly the first element of {{2},{{2}}}."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "{2} is explicitly the first element of {{2},{2,{2}}}."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only element is {{2}}, which is not {2}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-011",
    "mode": "auto",
    "answer": "a) False. b) False. c) False. d) True. e) False. f) False. g) True.",
    "solution": "The empty set has no elements but is a subset of every set. It is a proper subset of every nonempty set. Also, {0} is not the number 0, and A ⊂ A is false because a proper subset must be unequal to A; by contrast, A ⊆ A is true.",
    "hints": [
      "Translate ∈ as ‘is a direct element of,’ ⊂ as ‘is a proper subset of,’ and ⊆ as ‘is a subset of, possibly equal.’"
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "∅ contains no elements, including 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only element of {0} is 0, not ∅."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "0 belongs to {0} but not to ∅, so {0} is not a subset of ∅."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "∅ is a subset of every set and is unequal to the nonempty set {0}."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only element is 0; the singleton {0} is a different object."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Although {0} ⊆ {0}, equality rules out a proper subset relation."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Every set is a subset of itself, including {∅}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-012",
    "mode": "auto",
    "answer": "a) True. b) True. c) False. d) True. e) True. f) False. g) False.",
    "solution": "Track brace depth and remove duplicate set elements. In (c), {∅} has only the element ∅, not {∅}; in (d), {{∅}} does have {∅} as its element. In (g), {{∅},{∅}} = {{∅}}, so the proposed proper subset relation is actually equality.",
    "hints": [
      "Write the direct elements of each side separately before deciding ∈; for ⊂, also check that the sets are unequal."
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
        "solution": "The only element of {∅} is ∅."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "∅ is explicitly the first direct element."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The element ∅ is not the singleton set {∅}."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "The sole element of {{∅}} is {∅}."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Every element of {∅} is in the larger set, and {∅} is an additional element of the latter."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "{∅}, the element of {{∅}}, is not an element of {∅,{∅}}, whose only element is ∅."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Because {∅} is repeated on the right, both sides equal {{∅}}; equality excludes proper inclusion."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-013",
    "mode": "auto",
    "answer": "a) True. b) True. c) False. d) True. e) True. f) False.",
    "solution": "For any object x, {x} has exactly the element x. Thus x ∈ {x}, but {x} ∈ {x} would require {x} = x. In contrast, {{x}} contains {x}. The empty set is a subset of {x}, but is not its element.",
    "hints": [
      "Do not assume x and {x} are interchangeable; braces create a new singleton object."
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
        "solution": "By definition, the singleton {x} contains x."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "Every set is a subset of itself."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only element of {x} is x, not the distinct singleton {x}."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "The only element of {{x}} is {x}."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "∅ is a subset of every set."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "The only element of {x} is x, not ∅."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-014",
    "mode": "rubric",
    "answer": "Draw a rectangle U = {1,2,3,4,5,6,7,8,9,10}. Inside it draw a circle O = {1,3,5,7,9}; place 2,4,6,8,10 inside the rectangle but outside the circle.",
    "solution": "The rectangle is the universal set of positive integers not exceeding 10. The circle represents the odd integers, read O = {x ∈ U ∣ x is odd}. Placing every element in exactly one region shows O ⊆ U and displays both O and U∖O.",
    "hints": [
      "List U first, then put the odd members inside the circle and the even members outside it but still inside U."
    ],
    "rubric": [
      "Uses a rectangle for U = {1,…,10} and an internal circle for the odd integers.",
      "Places 1,3,5,7,9 inside the circle and 2,4,6,8,10 outside it but inside the rectangle."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-015",
    "mode": "rubric",
    "answer": "Draw a rectangle U containing all 12 months and an inner circle N = {May, June, July, August}. Put January, February, March, April, September, October, November, and December inside U but outside N.",
    "solution": "N means the months whose names do not contain R. Checking month by month leaves May, June, July, and August inside the circle. Every remaining month contains R and belongs in the rectangular region outside N.",
    "hints": [
      "Scan each month name for R before placing it; August belongs inside the no-R circle."
    ],
    "rubric": [
      "Shows the 12-month universal set with an inner no-R subset.",
      "Places exactly May, June, July, and August inside and the other eight months outside the circle but inside U."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-016",
    "mode": "rubric",
    "answer": "Draw three nested regions with the A circle inside B and the B circle inside C; enclose them in the universal-set rectangle. Thus A ⊆ B ⊆ C.",
    "solution": "A ⊆ B means every point in A must also be in B, so A’s circle goes inside B’s. Similarly B ⊆ C places B inside C. Non-strict subset notation permits equality, but nested circles are the standard general illustration.",
    "hints": [
      "Draw the largest stated set C first, then B inside it, then A inside B."
    ],
    "rubric": [
      "Shows A entirely inside B and B entirely inside C.",
      "Labels all three sets and does not place any part of A outside B or any part of B outside C."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-017",
    "mode": "rubric",
    "answer": "Draw nested circles A inside B inside C, with nonempty regions B∖A and C∖B (for example, mark a point in each). This illustrates A ⊂ B ⊂ C.",
    "solution": "Proper inclusion A ⊂ B requires both containment and an element of B outside A. Likewise, C must have an element outside B. The marked extra regions distinguish this diagram from mere non-strict nesting.",
    "hints": [
      "Proper subset means containment plus something extra in the larger set."
    ],
    "rubric": [
      "Shows A contained in B and B contained in C.",
      "Indicates that B∖A and C∖B are nonempty, thereby showing both inclusions are proper."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-018",
    "mode": "rubric",
    "answer": "Draw overlapping circles B and C, and place A inside their intersection B∩C. Show nonempty regions B∖A and C∖A; no additional inclusion between B and C is required.",
    "solution": "Because A is a proper subset of both B and C, every element of A lies in both larger sets, and each larger set has an element outside A. B and C may overlap in other ways; the two hypotheses do not determine their relationship.",
    "hints": [
      "A must be in the common region of B and C, but neither B nor C has to contain the other."
    ],
    "rubric": [
      "Places A entirely within both B and C.",
      "Shows B and C each have an element or region outside A and does not impose an unjustified relation between B and C."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-019",
    "mode": "rubric",
    "answer": "A ⊆ C.",
    "solution": "Take an arbitrary x ∈ A. Since A ⊆ B, x ∈ B. Since B ⊆ C, it follows that x ∈ C. Thus every element of A is an element of C, which is exactly the definition of A ⊆ C.",
    "hints": [
      "Start with an arbitrary x ∈ A and apply the two subset hypotheses in order."
    ],
    "rubric": [
      "Chooses an arbitrary element of A and derives its membership first in B and then in C.",
      "Concludes A ⊆ C from the definition of subset; the argument applies even when A is empty."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-020",
    "mode": "rubric",
    "answer": "One example is A = ∅ and B = {∅}.",
    "solution": "Read A ∈ B as ‘A is an element of B’ and A ⊆ B as ‘every element of A is in B.’ Here ∅ is explicitly the sole element of {∅}, so A ∈ B. Also ∅ ⊆ B vacuously because ∅ has no element that could violate the subset condition.",
    "hints": [
      "Try A = ∅; then choose B so that ∅ itself appears as an element."
    ],
    "rubric": [
      "Supplies two explicit sets satisfying both A ∈ B and A ⊆ B.",
      "Verifies the membership and subset claims separately."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-021",
    "mode": "auto",
    "answer": "a) 1. b) 1. c) 2. d) 3.",
    "solution": "Cardinality |S| counts distinct direct elements, not elements nested inside them. The first two are singletons. In (c), a and {a} are two different elements; in (d), a, {a}, and {a,{a}} are three different elements.",
    "hints": [
      "Count only commas at the outermost brace level and treat differently nested objects as distinct."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "The set has one element, a."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "The set has one element, namely {a}."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "Its distinct elements are a and {a}."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "Its distinct direct elements are a, {a}, and {a,{a}}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-022",
    "mode": "auto",
    "answer": "a) 0. b) 1. c) 2. d) 3.",
    "solution": "The empty set has no elements, while {∅} has one. The two elements in (c) are ∅ and {∅}; adding {∅,{∅}} in (d) gives a third distinct direct element.",
    "hints": [
      "Do not count nested contents separately: ∅ and {∅} have different cardinalities."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "0",
        "checker": "number",
        "solution": "By definition, ∅ has no elements."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "This singleton contains ∅ as its only element."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "The direct elements ∅ and {∅} are distinct."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "The direct elements are ∅, {∅}, and {∅,{∅}}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-023",
    "mode": "auto",
    "answer": "a) {∅, {a}}. b) {∅, {a}, {b}, {a,b}}. c) {∅, {∅}, {{∅}}, {∅,{∅}}}.",
    "solution": "The power set 𝒫(S) is the set of all subsets of S. Always include ∅ and S. A one-element set has 2¹ = 2 subsets and a two-element set has 2² = 4; in (c), the two elements are ∅ and {∅}.",
    "hints": [
      "Systematically list subsets by size: empty, singletons, then the full set."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{∅, {a}}",
        "checker": "set",
        "solution": "The subsets of {a} are ∅ and {a}."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{∅, {a}, {b}, {a,b}}",
        "checker": "set",
        "solution": "There are one empty, two singleton, and one two-element subset."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{∅, {∅}, {{∅}}, {∅,{∅}}}",
        "checker": "set",
        "solution": "Taking no elements, only ∅, only {∅}, or both elements gives the four displayed subsets."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-024",
    "mode": "rubric",
    "answer": "Yes. If 𝒫(A) = 𝒫(B), then A = B.",
    "solution": "For any x, x ∈ A exactly when {x} ∈ 𝒫(A). Since the power sets are equal, this is equivalent to {x} ∈ 𝒫(B), which in turn is equivalent to x ∈ B. Thus A and B have exactly the same elements. Equivalently, A = ⋃𝒫(A) = ⋃𝒫(B) = B.",
    "hints": [
      "Use singleton subsets: membership of {x} in a power set tells you where x belongs."
    ],
    "rubric": [
      "Concludes yes and proves that x ∈ A if and only if x ∈ B using singleton subsets or unions.",
      "Does not assume the desired equality A = B in the argument."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-025",
    "mode": "auto",
    "answer": "a) 8. b) 16. c) 2.",
    "solution": "A set with n elements has 2ⁿ subsets, so its power set has cardinality 2ⁿ. The original sets in (a) and (b) have 3 and 4 elements, respectively. In (c), 𝒫(∅) = {∅} has one element, so 𝒫(𝒫(∅)) has 2¹ = 2 elements.",
    "hints": [
      "First count the set inside the power-set notation, then apply |𝒫(S)| = 2^|S|."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "8",
        "checker": "number",
        "solution": "The set {a,b,{a,b}} has three distinct elements, giving 2³ = 8 subsets."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "16",
        "checker": "number",
        "solution": "The set has four distinct direct elements, giving 2⁴ = 16 subsets."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "Since 𝒫(∅) has one element, its power set has 2¹ = 2 elements."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-026",
    "mode": "auto",
    "answer": "a) False. b) True. c) False. d) True.",
    "solution": "Every power set is nonempty because it contains ∅, and a finite power set has 2ⁿ elements. Part (b) is 𝒫({a}); part (d) is 𝒫({a,b}). Part (c) has three elements, not a power of 2, and also does not contain all subsets of one underlying set.",
    "hints": [
      "A power set must contain ∅ and have 1, 2, 4, 8, … elements in the finite case."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Every power set contains at least ∅, so ∅ itself cannot be a power set."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "It equals 𝒫({a})."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "False",
        "accepted": [
          "F"
        ],
        "checker": "truth",
        "solution": "Its three elements cannot form a finite power set, whose size must be a power of 2."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "True",
        "accepted": [
          "T"
        ],
        "checker": "truth",
        "solution": "It contains exactly the four subsets of {a,b}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-027",
    "mode": "rubric",
    "answer": "𝒫(A) ⊆ 𝒫(B) if and only if A ⊆ B.",
    "solution": "Forward: if 𝒫(A) ⊆ 𝒫(B), then A ∈ 𝒫(A) implies A ∈ 𝒫(B), so A ⊆ B. Reverse: if A ⊆ B and X ∈ 𝒫(A), then X ⊆ A ⊆ B, hence X ∈ 𝒫(B). Therefore 𝒫(A) ⊆ 𝒫(B). The notation X ⊆ A means X is a subset, whereas X ∈ 𝒫(A) says the same thing as membership in the power set.",
    "hints": [
      "For the forward direction, use the especially useful subset A ⊆ A; for the reverse, take an arbitrary X ∈ 𝒫(A)."
    ],
    "rubric": [
      "Proves the forward implication by using A ∈ 𝒫(A) or an equivalent element argument.",
      "Proves the reverse implication by taking an arbitrary subset X of A and showing X ⊆ B.",
      "Correctly translates between X ⊆ S and X ∈ 𝒫(S)."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-028",
    "mode": "rubric",
    "answer": "If A ⊆ C and B ⊆ D, then A×B ⊆ C×D.",
    "solution": "Take an arbitrary (a,b) ∈ A×B. By the definition of Cartesian product, a ∈ A and b ∈ B. The subset hypotheses give a ∈ C and b ∈ D, so (a,b) ∈ C×D. Since the ordered pair was arbitrary, A×B ⊆ C×D; this remains true when either product is empty.",
    "hints": [
      "Start with an arbitrary ordered pair and unpack what its two coordinates tell you."
    ],
    "rubric": [
      "Takes an arbitrary (a,b) in A×B and identifies a ∈ A, b ∈ B.",
      "Uses both subset hypotheses and concludes (a,b) ∈ C×D, hence the required inclusion."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-029",
    "mode": "auto",
    "answer": "a) {(a,y), (a,z), (b,y), (b,z), (c,y), (c,z), (d,y), (d,z)}. b) {(y,a), (y,b), (y,c), (y,d), (z,a), (z,b), (z,c), (z,d)}.",
    "solution": "A×B means all ordered pairs whose first coordinate comes from A and second from B. Pair each of a,b,c,d with y and then z. For B×A, reverse the coordinate roles; order within each pair matters.",
    "hints": [
      "Hold the first coordinate fixed while cycling through all choices for the second."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{(a,y), (a,z), (b,y), (b,z), (c,y), (c,z), (d,y), (d,z)}",
        "checker": "set",
        "solution": "Each of four A-elements is paired with each of two B-elements, giving eight ordered pairs."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{(y,a), (y,b), (y,c), (y,d), (z,a), (z,b), (z,c), (z,d)}",
        "checker": "set",
        "solution": "Each B-element now comes first and is paired with all four A-elements."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-030",
    "mode": "rubric",
    "answer": "A×B = {(c,p) ∣ c is a mathematics course offered by the university and p is a mathematics professor there}. It represents all possible course–professor pairings; for example, a subset of A×B can record actual teaching assignments.",
    "solution": "The first coordinate is a course and the second is a professor. The full Cartesian product includes every allowable pairing, not just pairings that actually occur. Choosing only pairs in which professor p teaches course c gives a useful subset representing a teaching schedule.",
    "hints": [
      "Name the type of each coordinate, then distinguish all possible pairings from a useful subset of them."
    ],
    "rubric": [
      "Defines A×B as all ordered course–professor pairs in the correct coordinate order.",
      "Gives a valid use such as representing possible or actual teaching assignments."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-031",
    "mode": "rubric",
    "answer": "A×B×C = {(a,b,c) ∣ a is an airline and b,c are U.S. cities}. Its ordered triples can represent an airline together with a departure city b and an arrival city c; a subset can list the routes actually offered.",
    "solution": "The triple (airline, city₁, city₂) keeps the two city roles in order. Thus (Delta, Boston, Miami) differs from (Delta, Miami, Boston). The full product gives every possible airline–origin–destination combination, and actual routes form a subset.",
    "hints": [
      "Interpret B as possible origins and C as possible destinations; preserve the order of the two cities."
    ],
    "rubric": [
      "Defines all ordered airline–city–city triples.",
      "Uses the triples for ordered route or service possibilities, distinguishing origin and destination."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-032",
    "mode": "auto",
    "answer": "A = ∅ or B = ∅",
    "accepted": [
      "A=∅ or B=∅",
      "B = ∅ or A = ∅",
      "B=∅ or A=∅",
      "A is empty or B is empty"
    ],
    "checker": "text",
    "solution": "At least one set must be empty. If both were nonempty, choosing a ∈ A and b ∈ B would produce (a,b) ∈ A×B, contradicting A×B = ∅.",
    "hints": [
      "Suppose both sets had elements; what ordered pair would you be forced to construct?"
    ],
    "readAloud": "The Cartesian product is empty exactly when A is empty or B is empty, possibly both."
  },
  {
    "id": "rosen-ch2-ex-2-1-033",
    "mode": "rubric",
    "answer": "∅×A = ∅ and A×∅ = ∅ for every set A.",
    "solution": "An element of ∅×A would be an ordered pair (x,a) with x ∈ ∅ and a ∈ A; no such x exists, so ∅×A = ∅. Likewise, an element of A×∅ would require its second coordinate to belong to ∅, which is impossible, so A×∅ = ∅. These are proofs by the absence of any possible ordered pair.",
    "hints": [
      "Use the coordinate conditions in the definition of Cartesian product; the empty coordinate set supplies no choice."
    ],
    "rubric": [
      "Proves ∅×A = ∅ using the missing first coordinate.",
      "Proves A×∅ = ∅ using the missing second coordinate."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-034",
    "mode": "auto",
    "answer": "a) {(a,x,0), (a,x,1), (a,y,0), (a,y,1), (b,x,0), (b,x,1), (b,y,0), (b,y,1), (c,x,0), (c,x,1), (c,y,0), (c,y,1)}. b) {(0,x,a), (0,x,b), (0,x,c), (0,y,a), (0,y,b), (0,y,c), (1,x,a), (1,x,b), (1,x,c), (1,y,a), (1,y,b), (1,y,c)}. c) {(0,a,x), (0,a,y), (0,b,x), (0,b,y), (0,c,x), (0,c,y), (1,a,x), (1,a,y), (1,b,x), (1,b,y), (1,c,x), (1,c,y)}. d) {(x,x,x), (x,x,y), (x,y,x), (x,y,y), (y,x,x), (y,x,y), (y,y,x), (y,y,y)}.",
    "solution": "An ordered triple lists one coordinate from each factor in the stated order. Systematically fix the first coordinate, then the second, and cycle through the third. Parts (a)–(c) each have 3·2·2 = 12 triples; part (d) has 2³ = 8.",
    "hints": [
      "Use nested loops on paper: outer loop for the first factor, middle loop for the second, inner loop for the third."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{(a,x,0), (a,x,1), (a,y,0), (a,y,1), (b,x,0), (b,x,1), (b,y,0), (b,y,1), (c,x,0), (c,x,1), (c,y,0), (c,y,1)}",
        "checker": "set",
        "solution": "The coordinate order is A then B then C; cycling through 0,1 last gives all 12 triples."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{(0,x,a), (0,x,b), (0,x,c), (0,y,a), (0,y,b), (0,y,c), (1,x,a), (1,x,b), (1,x,c), (1,y,a), (1,y,b), (1,y,c)}",
        "checker": "set",
        "solution": "The coordinate order is C then B then A; each 0 or 1 is paired with x or y and then a,b,c."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{(0,a,x), (0,a,y), (0,b,x), (0,b,y), (0,c,x), (0,c,y), (1,a,x), (1,a,y), (1,b,x), (1,b,y), (1,c,x), (1,c,y)}",
        "checker": "set",
        "solution": "The coordinate order is C then A then B; each 0 or 1 is paired with a,b,c and then x or y."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{(x,x,x), (x,x,y), (x,y,x), (x,y,y), (y,x,x), (y,x,y), (y,y,x), (y,y,y)}",
        "checker": "set",
        "solution": "Each of the three positions independently contains x or y, giving 2³ = 8 triples."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-035",
    "mode": "auto",
    "answer": "a) {(0,0), (0,1), (0,3), (1,0), (1,1), (1,3), (3,0), (3,1), (3,3)}. b) {(1,1), (1,2), (1,a), (1,b), (2,1), (2,2), (2,a), (2,b), (a,1), (a,2), (a,a), (a,b), (b,1), (b,2), (b,a), (b,b)}.",
    "solution": "Here A² means A×A, not numerical squaring. Every element of A can occupy each coordinate independently. Thus (a) has 3² = 9 ordered pairs and (b) has 4² = 16; pairs such as (0,1) and (1,0) are distinct.",
    "hints": [
      "Read A² as A cross A: choose the first coordinate from A, then independently choose the second from A."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{(0,0), (0,1), (0,3), (1,0), (1,1), (1,3), (3,0), (3,1), (3,3)}",
        "checker": "set",
        "solution": "Pair each of 0,1,3 as first coordinate with each as second coordinate."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{(1,1), (1,2), (1,a), (1,b), (2,1), (2,2), (2,a), (2,b), (a,1), (a,2), (a,a), (a,b), (b,1), (b,2), (b,a), (b,b)}",
        "checker": "set",
        "solution": "Pair each of 1,2,a,b with every one of the same four elements, preserving order."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-036",
    "mode": "auto",
    "answer": "a) {(a,a,a)}. b) {(0,0,0), (0,0,a), (0,a,0), (0,a,a), (a,0,0), (a,0,a), (a,a,0), (a,a,a)}.",
    "solution": "A³ = A×A×A consists of ordered triples with every coordinate in A. A singleton permits only one triple. A two-element set permits two independent choices in each of three positions, giving 2³ = 8 triples.",
    "hints": [
      "Fill three positions independently; list them like three-letter binary strings using the two available elements."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{(a,a,a)}",
        "checker": "set",
        "solution": "Every coordinate must be a, so only one ordered triple exists."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{(0,0,0), (0,0,a), (0,a,0), (0,a,a), (a,0,0), (a,0,a), (a,a,0), (a,a,a)}",
        "checker": "set",
        "solution": "Each coordinate independently takes 0 or a, producing all eight triples."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-037",
    "mode": "auto",
    "answer": "mn",
    "accepted": [
      "m*n",
      "m × n",
      "m·n",
      "nm",
      "n*m",
      "n × m",
      "n·m"
    ],
    "checker": "text",
    "solution": "There are m choices for the first coordinate and, independently, n choices for the second. By the multiplication principle, |A×B| = mn. This also gives 0 when either set is empty.",
    "hints": [
      "Count first-coordinate choices and second-coordinate choices independently."
    ],
    "readAloud": "The cardinality of A cross B is m times n."
  },
  {
    "id": "rosen-ch2-ex-2-1-038",
    "mode": "auto",
    "answer": "mnp",
    "accepted": [
      "m*n*p",
      "m × n × p",
      "m·n·p",
      "mpn",
      "nmp",
      "npm",
      "pmn",
      "pnm"
    ],
    "checker": "text",
    "solution": "An ordered triple requires independent choices from A, B, and C. There are m, n, and p choices respectively, so |A×B×C| = mnp by the multiplication principle.",
    "hints": [
      "Extend the two-factor multiplication rule to three independent coordinate choices."
    ],
    "readAloud": "The number of ordered triples is m times n times p."
  },
  {
    "id": "rosen-ch2-ex-2-1-039",
    "mode": "auto",
    "answer": "m^n",
    "accepted": [
      "mⁿ",
      "m**n",
      "m raised to n",
      "m to the n"
    ],
    "checker": "text",
    "solution": "Aⁿ consists of ordered n-tuples. Each of the n coordinate positions has m independent choices, giving m factors of m and hence mⁿ different elements.",
    "hints": [
      "There are n coordinate positions, not n copies of one fixed choice; multiply m once per position."
    ],
    "readAloud": "The cardinality of A to the n is m raised to the n-th power."
  },
  {
    "id": "rosen-ch2-ex-2-1-040",
    "mode": "rubric",
    "answer": "For nonempty A and B, A×B ≠ B×A unless A = B.",
    "solution": "Suppose A ≠ B. Then some element belongs to one set but not the other. If a ∈ A∖B, choose any b ∈ B, possible because B is nonempty. Then (a,b) ∈ A×B, but (a,b) ∉ B×A because its first coordinate a is not in B. The case b ∈ B∖A is symmetric, using a nonempty A. Hence equality of the products forces A = B.",
    "hints": [
      "When A ≠ B, choose an element in their difference and use it in a coordinate that exposes the mismatch."
    ],
    "rubric": [
      "Uses nonemptiness to select a valid second coordinate.",
      "Constructs an ordered pair in one product but not the other when A ≠ B.",
      "Handles either direction of the set difference or explicitly invokes symmetry."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-041",
    "mode": "rubric",
    "answer": "A×B×C contains ordered triples (a,b,c), whereas (A×B)×C contains ordered pairs ((a,b),c) whose first coordinate is itself an ordered pair.",
    "solution": "An ordered triple has three coordinates, but ((a,b),c) has two coordinates: (a,b) and c. Their grouping and element types therefore differ, even though the assignment (a,b,c) ↦ ((a,b),c) gives a natural one-to-one correspondence when the underlying sets are nonempty.",
    "hints": [
      "Count coordinates at the outermost level and notice the extra parentheses around (a,b)."
    ],
    "rubric": [
      "Identifies (a,b,c) as an ordered triple and ((a,b),c) as an ordered pair with nested first coordinate.",
      "Explains that different grouping makes the element types different, without claiming no natural correspondence exists."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-042",
    "mode": "rubric",
    "answer": "(A×B)×(C×D) contains ordered pairs ((a,b),(c,d)), while A×(B×C)×D contains ordered triples (a,(b,c),d). Their outermost structures and coordinate groupings differ.",
    "solution": "In the first product there are two coordinates, each an ordered pair. In the second there are three coordinates, with only the middle coordinate an ordered pair. Equal letters a,b,c,d do not make these different kinds of tuples literally equal.",
    "hints": [
      "Read the outermost multiplication sign first, then describe the type of each coordinate."
    ],
    "rubric": [
      "Correctly describes ((a,b),(c,d)) as a pair of pairs.",
      "Correctly describes (a,(b,c),d) as a triple with a nested middle pair and distinguishes the two structures."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-043",
    "mode": "rubric",
    "answer": "False. A counterexample is A = B = {1}.",
    "solution": "Then A×B = {(1,1)}, so 𝒫(A×B) = {∅,{(1,1)}} has 2 elements. But 𝒫(A) = 𝒫(B) = {∅,{1}}, so 𝒫(A)×𝒫(B) = {(∅,∅),(∅,{1}),({1},∅),({1},{1})} has 2·2 = 4 elements. Different cardinalities prove the proposed equality is false.",
    "hints": [
      "Try small singleton sets and compare the cardinalities of the two sides."
    ],
    "rubric": [
      "States that the claim is false and gives a valid explicit counterexample.",
      "Correctly computes or counts both sides for that example and explains why they cannot be equal."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-044",
    "mode": "rubric",
    "answer": "True. If A, B, and C are nonempty and A×B = A×C, then B = C.",
    "solution": "Fix a ∈ A, using nonemptiness of A. For any b ∈ B, (a,b) ∈ A×B = A×C, so b ∈ C; therefore B ⊆ C. Conversely, for any c ∈ C, (a,c) ∈ A×C = A×B, so c ∈ B; therefore C ⊆ B. The two inclusions give B = C. The same fixed a works in both directions.",
    "hints": [
      "Cancel A by fixing one actual element a ∈ A, then compare ordered pairs with that same first coordinate."
    ],
    "rubric": [
      "Fixes an element of the nonempty set A.",
      "Proves both B ⊆ C and C ⊆ B using equality of the Cartesian products.",
      "Concludes B = C from mutual inclusion."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-045",
    "mode": "rubric",
    "answer": "a) For every real number x, x² ≠ −1; true. b) There exists an integer x such that x² = 2; false. c) For every integer x, x² > 0; false. d) There exists a real number x such that x² = x; true.",
    "solution": "Read ∀ as ‘for every’ and ∃ as ‘there exists,’ with the stated domain. Real squares are nonnegative, proving (a); ±√2 are not integers, disproving (b). In (c), x = 0 is a counterexample because 0² = 0. In (d), x = 0 or x = 1 is a witness.",
    "hints": [
      "A universal claim needs proof for every domain element or one counterexample; an existential claim needs just one witness."
    ],
    "rubric": [
      "Translates all four quantified statements with the correct quantifier, domain, and predicate.",
      "Gives truth values true, false, false, true in order.",
      "Justifies the values using nonnegativity, irrationality of ±√2, counterexample 0, and a witness 0 or 1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For every real number x, x² ≠ −1. True.",
        "solution": "For real x, x² ≥ 0, so x² can never equal −1.",
        "rubric": [
          "Gives the English translation and true, citing nonnegativity of real squares."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There exists an integer x such that x² = 2. False.",
        "solution": "The only real solutions are ±√2, neither an integer.",
        "rubric": [
          "Gives the translation and false, explaining that no integer square equals 2."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For every integer x, x² > 0. False.",
        "solution": "The integer 0 satisfies 0² = 0, not 0² > 0.",
        "rubric": [
          "Gives the translation and false with the counterexample x = 0."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "There exists a real number x such that x² = x. True.",
        "solution": "For example, x = 0 gives 0² = 0; x = 1 also works.",
        "rubric": [
          "Gives the translation and true with a valid witness."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-046",
    "mode": "rubric",
    "answer": "a) There exists a real number x such that x³ = −1; true. b) There exists an integer x such that x+1 > x; true. c) For every integer x, x−1 is an integer; true. d) For every integer x, x² is an integer; true.",
    "solution": "For (a), x = −1 is a witness because (−1)³ = −1. For (b), every integer works since subtracting x gives 1 > 0; choose 0 as a concrete witness. The integers are closed under subtraction and multiplication, proving (c) and (d).",
    "hints": [
      "After translating, look for a simple existential witness; for the universal statements, use closure properties of ℤ."
    ],
    "rubric": [
      "Translates all four statements with the correct quantifier, domain, and predicate.",
      "Marks all four true.",
      "Supplies witnesses for (a) and (b) and integer-closure reasoning for (c) and (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There exists a real number x such that x³ = −1. True.",
        "solution": "The real number −1 works because (−1)³ = −1.",
        "rubric": [
          "Gives the translation and true with the witness −1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "There exists an integer x such that x+1 > x. True.",
        "solution": "Any integer works; for example, 0+1 > 0.",
        "rubric": [
          "Gives the translation and true with a valid integer witness."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For every integer x, x−1 is an integer. True.",
        "solution": "Subtracting the integer 1 from an integer always leaves an integer.",
        "rubric": [
          "Gives the translation and true using closure under subtraction."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For every integer x, x² is an integer. True.",
        "solution": "Squaring means multiplying an integer by itself, and integers are closed under multiplication.",
        "rubric": [
          "Gives the translation and true using closure under multiplication."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-047",
    "mode": "mixed",
    "answer": "a) {−1,0,1}. b) {x ∈ ℤ ∣ x < 0 or x > 1}, equivalently ℤ∖{0,1}. c) ∅.",
    "solution": "The truth set contains exactly the domain elements making the predicate true. In (a), x² < 3 means −√3 < x < √3, leaving −1,0,1 among integers. In (b), x² > x becomes x(x−1) > 0, which holds when both factors are negative (x < 0) or both positive (x > 1). In (c), x = −1/2 is not an integer.",
    "hints": [
      "Solve each condition over the real numbers first, then keep only integers in the stated domain."
    ],
    "rubric": [
      "Part (b) gives exactly the integers x < 0 or x > 1, excluding both 0 and 1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{−1, 0, 1}",
        "accepted": [
          "{-1,0,1}"
        ],
        "checker": "set",
        "solution": "Testing the integers in (−√3,√3) gives exactly −1,0,1."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "{x ∈ ℤ ∣ x < 0 or x > 1} = ℤ∖{0,1}",
        "solution": "Factor x²−x = x(x−1). The product is positive for x < 0 or x > 1 and is zero at x = 0,1.",
        "rubric": [
          "Gives all integers except 0 and 1, using set-builder, interval, or equivalent roster-pattern notation.",
          "Explains the sign analysis or an equivalent complete algebraic argument."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "Solving gives x = −1/2, which lies outside the integer domain."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-048",
    "mode": "mixed",
    "answer": "a) {x ∈ ℤ ∣ x ≥ 1} = ℤ⁺. b) ∅. c) {x ∈ ℤ ∣ x < 0 or x > 1} = ℤ∖{0,1}.",
    "solution": "For (a), over real numbers x³ ≥ 1 is equivalent to x ≥ 1 because cubing is increasing; restricting to ℤ gives the positive integers. For (b), ±√2 are not integers. For (c), rewrite x < x² as x(x−1) > 0 and use the sign chart: true for x < 0 or x > 1.",
    "hints": [
      "Keep the integer domain in view; for (c), move all terms to one side and factor rather than dividing by x."
    ],
    "rubric": [
      "Part (a) gives exactly all integers x ≥ 1 and part (c) gives exactly all integers x < 0 or x > 1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "{x ∈ ℤ ∣ x ≥ 1} = ℤ⁺",
        "solution": "The cube function is increasing, so x³ ≥ 1 = 1³ exactly when x ≥ 1; integer solutions are 1,2,3,….",
        "rubric": [
          "Gives exactly the positive integers and justifies the inequality without including 0 or negatives."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "No integer has square 2, so the truth set is empty."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "{x ∈ ℤ ∣ x < 0 or x > 1} = ℤ∖{0,1}",
        "solution": "The inequality becomes x²−x = x(x−1) > 0. Both factors have the same sign exactly when x < 0 or x > 1.",
        "rubric": [
          "Gives exactly all integers except 0 and 1 and supports the result by factoring or an equivalent sign argument."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-049",
    "mode": "rubric",
    "answer": "With (a,b) := {{a},{a,b}}, the equality (a,b) = (c,d) holds if and only if a = c and b = d.",
    "solution": "If a = c and b = d, substitution immediately makes the defining sets equal. Conversely, suppose {{a},{a,b}} = {{c},{c,d}}. The singleton {a} must equal {c} or {c,d}. Case 1: {a} = {c}, so a = c. If b = a, the left defining set is {{a}}; equality forces d = a too, hence b = d. If b ≠ a, then {a,b} has two elements and must equal {a,d}, giving b = d. Case 2: {a} = {c,d}; then c = d = a and the right defining set is {{a}}. Equality forces {a,b} = {a}, so b = a; again a = c and b = d. Thus equality of the constructed sets is equivalent to equality of both coordinates, so this definition faithfully encodes ordered pairs.",
    "hints": [
      "Compare the singleton {a} with the two sets on the right, and handle the degenerate case a = b separately."
    ],
    "rubric": [
      "Proves the reverse direction (equal coordinates imply equal constructed sets) by substitution.",
      "For the forward direction, derives a = c by comparing singleton elements of the defining sets.",
      "Derives b = d while correctly handling a = b or c = d degeneracies as well as the two-element case.",
      "Concludes the required biconditional using the displayed definition of ordered pair."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-050",
    "mode": "rubric",
    "answer": "a) If S ∈ S, the defining property of S gives S ∉ S, a contradiction. b) If S ∉ S, then S satisfies the defining property for membership in S, so S ∈ S, again a contradiction.",
    "solution": "Read S = {x ∣ x ∉ x} as ‘S contains exactly those sets x that are not members of themselves.’ Applying this rule to x = S itself produces both directions of Russell’s paradox. Since S ∈ S and S ∉ S each imply the other’s negation, no set with this unrestricted defining property can exist.",
    "hints": [
      "Substitute S for x in the membership rule: S ∈ S if and only if S ∉ S."
    ],
    "rubric": [
      "Shows that S ∈ S implies S ∉ S in part (a).",
      "Shows that S ∉ S implies S ∈ S in part (b).",
      "Uses S’s defining property in both directions and identifies both results as contradictions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Assume S ∈ S. By the defining property of S, every member x of S satisfies x ∉ x; taking x = S gives S ∉ S, contradicting the assumption.",
        "solution": "The assumption of membership triggers the stated exclusion rule for S itself.",
        "rubric": [
          "Derives S ∉ S from S ∈ S and explicitly identifies the contradiction."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Assume S ∉ S. Then S has exactly the property x ∉ x required for membership in S, so S ∈ S, contradicting the assumption.",
        "solution": "Failure to belong to itself is precisely the condition that would put S into S.",
        "rubric": [
          "Derives S ∈ S from S ∉ S and explicitly identifies the contradiction."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-1-051",
    "mode": "rubric",
    "answer": "If S has n elements, label them s₁,…,sₙ. For every integer k from 0 through 2ⁿ−1, write k as an n-bit binary string. Form the subset that includes sᵢ exactly when bit i is 1. Listing these subsets for all k gives every subset of S exactly once.",
    "solution": "Each subset is determined by an independent include/exclude decision for each element, so there are 2ⁿ subsets. The binary strings of length n encode all such decision lists: the all-zero string gives ∅, the all-one string gives S, and distinct strings omit at least one different element and therefore produce distinct subsets. This procedure is finite and can be reproduced manually by counting in binary.",
    "hints": [
      "For each element, record 1 if it is included and 0 if it is excluded; enumerate all binary decision strings."
    ],
    "rubric": [
      "Gives a finite systematic procedure that makes an include/exclude choice for every element, such as binary counting.",
      "Enumerates all 2ⁿ decision patterns without omissions or duplicates.",
      "Identifies the empty set and full set and explains why the output is exactly the collection of all subsets."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-001",
    "mode": "rubric",
    "answer": "a) Students who live within one mile of school and walk to classes. b) Students who live within one mile of school or walk to classes (or both). c) Students who live within one mile of school but do not walk to classes. d) Students who walk to classes but do not live within one mile of school.",
    "solution": "Read ∩ as ‘and,’ ∪ as inclusive ‘or,’ and A − B as ‘in A but not in B.’ Apply those meanings to the two student descriptions, keeping B − A in the opposite order from A − B.",
    "hints": [
      "Translate each operator into English before translating A and B."
    ],
    "rubric": [
      "Correctly describes both conditions in (a), inclusive or in (b), and the correctly ordered exclusions in (c) and (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Students who live within one mile of school and walk to classes.",
        "solution": "Intersection keeps students satisfying both conditions.",
        "rubric": [
          "Includes both conditions with and."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Students who live within one mile of school or walk to classes, including those who do both.",
        "solution": "Union includes either condition and does not exclude the overlap.",
        "rubric": [
          "Uses inclusive or and does not exclude students satisfying both."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Students who live within one mile of school but do not walk to classes.",
        "solution": "A − B keeps A and removes membership in B.",
        "rubric": [
          "Requires proximity and excludes walking."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Students who walk to classes but live more than one mile from school.",
        "solution": "B − A keeps B and removes A; not in A here means not within one mile.",
        "rubric": [
          "Requires walking and excludes living within one mile."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-002",
    "mode": "rubric",
    "answer": "a) A ∩ B. b) A − B, equivalently A ∩ B̅. c) A ∪ B. d) A̅ ∪ B̅, equivalently (A ∩ B)̅.",
    "solution": "Let membership in A mean ‘sophomore’ and membership in B mean ‘taking discrete mathematics.’ Both gives intersection; A but not B gives difference; either gives union. In (d), ‘not A or not B’ is A̅ ∪ B̅, which excludes only students in both A and B.",
    "hints": [
      "In (d), negate each membership separately; the English connective remains or."
    ],
    "rubric": [
      "Gives all four expressions, with inclusive union in (c) and A̅ ∪ B̅ or its De Morgan equivalent in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∩ B.",
        "solution": "A sophomore taking the course belongs to both sets.",
        "rubric": [
          "Uses A ∩ B."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A − B = A ∩ B̅.",
        "solution": "Keep sophomores and remove those taking the course.",
        "rubric": [
          "Uses A − B or A ∩ B̅."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A ∪ B.",
        "solution": "Union includes students satisfying either condition or both.",
        "rubric": [
          "Uses A ∪ B."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A̅ ∪ B̅ = (A ∩ B)̅.",
        "solution": "A student qualifies by failing at least one of the two memberships.",
        "rubric": [
          "Uses A̅ ∪ B̅ or (A ∩ B)̅, not A̅ ∩ B̅."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-003",
    "mode": "mixed",
    "answer": "a) {0, 1, 2, 3, 4, 5, 6}. b) {3}. c) {1, 2, 4, 5}. d) {0, 6}.",
    "solution": "The only common element is 3. Combine all distinct elements for the union; remove 3 from A for A − B, and remove 3 from B for B − A.",
    "hints": [
      "Mark the shared element 3 first; it stays in the union and intersection but in neither difference."
    ],
    "rubric": [
      "All four resulting sets are correct."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{0, 1, 2, 3, 4, 5, 6}",
        "checker": "set",
        "solution": "List every element occurring in A or B, without repeating 3."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{3}",
        "checker": "set",
        "solution": "Only 3 appears in both sets."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{1, 2, 4, 5}",
        "checker": "set",
        "solution": "Delete the shared element 3 from A."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{0, 6}",
        "checker": "set",
        "solution": "Delete the shared element 3 from B."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-004",
    "mode": "mixed",
    "answer": "a) {a, b, c, d, e, f, g, h}. b) {a, b, c, d, e}. c) ∅. d) {f, g, h}.",
    "solution": "Here A ⊆ B. Therefore the union is B, the intersection is A, no element of A lies outside B, and B − A consists of the three extra elements f, g, h.",
    "hints": [
      "Notice that every element of A is already in B."
    ],
    "rubric": [
      "All four resulting sets are correct, including the empty difference in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{a, b, c, d, e, f, g, h}",
        "checker": "set",
        "solution": "A ∪ B = B because A ⊆ B."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{a, b, c, d, e}",
        "checker": "set",
        "solution": "A ∩ B = A because A ⊆ B."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "∅",
        "checker": "set",
        "solution": "Every element of A is also in B."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{f, g, h}",
        "checker": "set",
        "solution": "These are precisely the elements of B not in A."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-005",
    "mode": "rubric",
    "answer": "The double complement of A equals A: (A̅)̅ = A.",
    "solution": "For any x in the universal set U, x ∈ (A̅)̅ means x ∉ A̅, which means it is false that x ∉ A. Hence x ∈ A. Every step is reversible, so the two sets have exactly the same members.",
    "hints": [
      "Unwrap one complement at a time: outside the outside of A is inside A."
    ],
    "rubric": [
      "Uses the definition of complement twice, in both directions or as reversible equivalences, to conclude membership in A."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-006",
    "mode": "rubric",
    "answer": "a) A ∪ ∅ = A. b) A ∩ U = A.",
    "solution": "a) x ∈ A ∪ ∅ means x ∈ A or x ∈ ∅; the second is impossible, so this is equivalent to x ∈ A. b) x ∈ A ∩ U means x ∈ A and x ∈ U; the second is always true, so this is also equivalent to x ∈ A.",
    "hints": [
      "Membership in ∅ is always false; membership in U is always true."
    ],
    "rubric": [
      "Proves both identities from membership, using emptiness in (a) and universality in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ ∅ = A.",
        "solution": "‘x ∈ A or false’ is equivalent to ‘x ∈ A.’",
        "rubric": [
          "Justifies that adding ∅ changes no memberships."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ U = A.",
        "solution": "‘x ∈ A and true’ is equivalent to ‘x ∈ A.’",
        "rubric": [
          "Justifies that intersecting with U changes no memberships."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-007",
    "mode": "rubric",
    "answer": "a) A ∪ U = U. b) A ∩ ∅ = ∅.",
    "solution": "a) Every member of A ∪ U lies in U because A ⊆ U; conversely every x ∈ U lies in A ∪ U. b) If x belonged to A ∩ ∅, then x ∈ ∅, impossible. Therefore the intersection has no members.",
    "hints": [
      "For (a), prove both subset inclusions; for (b), derive a contradiction from any supposed member."
    ],
    "rubric": [
      "Proves both inclusions for (a) and shows no element can belong to the intersection in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ U = U.",
        "solution": "A ∪ U ⊆ U since A ⊆ U, and U ⊆ A ∪ U by the definition of union.",
        "rubric": [
          "Establishes both subset inclusions."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ ∅ = ∅.",
        "solution": "An element of the intersection would have to belong to ∅, which is impossible.",
        "rubric": [
          "Shows the intersection is empty."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-008",
    "mode": "rubric",
    "answer": "a) A ∪ A = A. b) A ∩ A = A.",
    "solution": "For (a), x ∈ A ∪ A means x ∈ A or x ∈ A, equivalent to x ∈ A. For (b), x ∈ A ∩ A means x ∈ A and x ∈ A, also equivalent to x ∈ A. Repeating a condition does not change it.",
    "hints": [
      "Use the logical facts p ∨ p ≡ p and p ∧ p ≡ p, where p is x ∈ A."
    ],
    "rubric": [
      "Reduces both repeated unions and repeated intersections to the single membership condition x ∈ A."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ A = A.",
        "solution": "The disjunction of x ∈ A with itself is just x ∈ A.",
        "rubric": [
          "Uses idempotence of or."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ A = A.",
        "solution": "The conjunction of x ∈ A with itself is just x ∈ A.",
        "rubric": [
          "Uses idempotence of and."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-009",
    "mode": "rubric",
    "answer": "a) A ∪ A̅ = U. b) A ∩ A̅ = ∅.",
    "solution": "For every x ∈ U, exactly one of x ∈ A and x ∉ A holds. Thus every x belongs to A ∪ A̅, proving (a). No x can satisfy both x ∈ A and x ∉ A, so A ∩ A̅ has no members, proving (b).",
    "hints": [
      "For each fixed x, decide whether x ∈ A; exactly one of A and A̅ contains it."
    ],
    "rubric": [
      "Uses exhaustive membership for the union and mutually exclusive membership for the intersection."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ A̅ = U.",
        "solution": "Every element of U is in A or its complement.",
        "rubric": [
          "Covers every element of U."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ A̅ = ∅.",
        "solution": "No element can simultaneously belong to A and not belong to A.",
        "rubric": [
          "Identifies the membership contradiction."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-010",
    "mode": "rubric",
    "answer": "a) A − ∅ = A. b) ∅ − A = ∅.",
    "solution": "a) x ∈ A − ∅ means x ∈ A and x ∉ ∅. Since x ∉ ∅ is always true, this is equivalent to x ∈ A. b) A member of ∅ − A would first have to belong to ∅, which is impossible.",
    "hints": [
      "Read X − Y as ‘x ∈ X and x ∉ Y,’ then simplify each impossible or automatic condition."
    ],
    "rubric": [
      "Correctly simplifies both difference membership conditions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A − ∅ = A.",
        "solution": "Requiring x ∉ ∅ adds no restriction to x ∈ A.",
        "rubric": [
          "Explains why every member of A remains and nothing else enters."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∅ − A = ∅.",
        "solution": "There is no element in ∅ available to survive the subtraction.",
        "rubric": [
          "Shows the difference has no members."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-011",
    "mode": "rubric",
    "answer": "a) A ∪ B = B ∪ A. b) A ∩ B = B ∩ A.",
    "solution": "Membership on the left of (a) is x ∈ A or x ∈ B; on the right it is x ∈ B or x ∈ A, and disjunction is commutative. Membership on the left of (b) is x ∈ A and x ∈ B; conjunction is likewise commutative. Thus corresponding sides have identical members.",
    "hints": [
      "Translate union and intersection to or and and, then commute the logical conditions."
    ],
    "rubric": [
      "Proves both equalities using commutativity of disjunction and conjunction."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ B = B ∪ A.",
        "solution": "‘x ∈ A or x ∈ B’ is equivalent to ‘x ∈ B or x ∈ A.’",
        "rubric": [
          "Uses commutativity of or."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ B = B ∩ A.",
        "solution": "‘x ∈ A and x ∈ B’ is equivalent to ‘x ∈ B and x ∈ A.’",
        "rubric": [
          "Uses commutativity of and."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-012",
    "mode": "rubric",
    "answer": "A ∪ (A ∩ B) = A.",
    "solution": "If x ∈ A, then x belongs to the union. Conversely, if x ∈ A ∪ (A ∩ B), either x ∈ A directly or x ∈ A ∩ B, which also gives x ∈ A. Hence both sides have exactly the same members. Informally, A ∩ B is already contained in A, so adding it changes nothing.",
    "hints": [
      "The added set A ∩ B is a subset of A."
    ],
    "rubric": [
      "Proves both directions, including that membership in A ∩ B implies membership in A."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-013",
    "mode": "rubric",
    "answer": "A ∩ (A ∪ B) = A.",
    "solution": "If x belongs to the left side, then by intersection x ∈ A. Conversely, if x ∈ A, then x ∈ A ∪ B and also x ∈ A, so x belongs to the left side. Therefore the two sets are equal.",
    "hints": [
      "Every member of A automatically belongs to A ∪ B."
    ],
    "rubric": [
      "Proves both subset directions using the definitions of union and intersection."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-014",
    "mode": "rubric",
    "answer": "A = {1, 3, 5, 6, 7, 8, 9} and B = {2, 3, 6, 9, 10}.",
    "solution": "The three displayed regions are disjoint: A − B belongs only to A, B − A belongs only to B, and A ∩ B belongs to both. Therefore A = (A − B) ∪ (A ∩ B) = {1,5,7,8} ∪ {3,6,9}, while B = (B − A) ∪ (A ∩ B) = {2,10} ∪ {3,6,9}.",
    "hints": [
      "Rebuild A from its A-only part plus the overlap; do the same for B."
    ],
    "rubric": [
      "Forms A from {1,5,7,8} and {3,6,9}, and B from {2,10} and {3,6,9}, with no misplaced elements."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-015",
    "mode": "rubric",
    "answer": "(A ∪ B)̅ = A̅ ∩ B̅. a) The two sides are subsets of each other. b) For A,B rows 11,10,01,00, both (A ∪ B)̅ and A̅ ∩ B̅ have membership columns 0,0,0,1.",
    "solution": "a) If x ∈ (A ∪ B)̅, then x ∉ A ∪ B, so x ∉ A and x ∉ B; hence x ∈ A̅ ∩ B̅. Conversely, if x ∈ A̅ ∩ B̅, then x belongs to neither A nor B, so x ∉ A ∪ B and x ∈ (A ∪ B)̅. b) Evaluate rows (A,B)=(1,1),(1,0),(0,1),(0,0): A ∪ B is 1,1,1,0; its complement is 0,0,0,1; A̅ ∩ B̅ is also 0,0,0,1.",
    "hints": [
      "Being outside a union means failing both memberships, not merely failing one."
    ],
    "rubric": [
      "Part (a) proves both subset inclusions and part (b) gives all four rows with identical final columns 0,0,0,1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(A ∪ B)̅ ⊆ A̅ ∩ B̅ and A̅ ∩ B̅ ⊆ (A ∪ B)̅, so the sets are equal.",
        "solution": "Outside A ∪ B means outside both A and B; conversely, outside both means outside their union.",
        "rubric": [
          "Supplies both directions with correct negation of union membership."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Rows AB = 11, 10, 01, 00: A ∪ B = 1,1,1,0; (A ∪ B)̅ = 0,0,0,1; A̅ = 0,0,1,1; B̅ = 0,1,0,1; A̅ ∩ B̅ = 0,0,0,1.",
        "solution": "The two target columns agree in every membership case.",
        "rubric": [
          "Includes four rows and matching target columns 0,0,0,1."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-016",
    "mode": "rubric",
    "answer": "All five statements hold: a) A ∩ B ⊆ A. b) A ⊆ A ∪ B. c) A − B ⊆ A. d) A ∩ (B − A) = ∅. e) A ∪ (B − A) = A ∪ B.",
    "solution": "In (a), intersection membership includes A; in (b), membership in A guarantees membership in the union; in (c), difference membership includes A. In (d), a supposed member would require x ∈ A and x ∉ A. For (e), x ∈ A ∪ (B − A) iff x ∈ A or (x ∈ B and x ∉ A), which is equivalent to x ∈ A or x ∈ B.",
    "hints": [
      "For (e), split into x ∈ A and x ∉ A; in the second case only B can supply membership."
    ],
    "rubric": [
      "Gives valid membership arguments for all five statements, including the contradiction in (d) and equivalence in (e)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∩ B ⊆ A.",
        "solution": "x ∈ A ∩ B implies x ∈ A.",
        "rubric": [
          "Uses the first conjunct of intersection."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ⊆ A ∪ B.",
        "solution": "x ∈ A implies x ∈ A or x ∈ B.",
        "rubric": [
          "Uses the definition of union."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A − B ⊆ A.",
        "solution": "x ∈ A − B means x ∈ A and x ∉ B, hence x ∈ A.",
        "rubric": [
          "Retains the positive A condition."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A ∩ (B − A) = ∅.",
        "solution": "A member would require both x ∈ A and x ∉ A.",
        "rubric": [
          "Identifies the contradiction."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "A ∪ (B − A) = A ∪ B.",
        "solution": "If x ∉ A, membership on either side reduces to x ∈ B; if x ∈ A, both sides contain x.",
        "rubric": [
          "Proves equivalence in both membership cases."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-017",
    "mode": "rubric",
    "answer": "A ⊆ B if and only if A̅ ∪ B = U.",
    "solution": "Suppose A ⊆ B. For any x ∈ U, either x ∉ A, so x ∈ A̅, or x ∈ A, whence x ∈ B; thus A̅ ∪ B = U. Conversely suppose A̅ ∪ B = U and x ∈ A. Then x ∉ A̅, so the union condition forces x ∈ B. Therefore A ⊆ B.",
    "hints": [
      "For the forward direction, split on x ∈ A; for the converse, an element of A cannot be supplied by A̅."
    ],
    "rubric": [
      "Proves both directions and correctly uses the hypothesis A̅ ∪ B = U in the converse."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-018",
    "mode": "rubric",
    "answer": "a) A → B = A̅ ∪ B: shade everything outside A together with all of B; equivalently, leave only A − B unshaded. b) A ↔ B = (A ∩ B) ∪ (A̅ ∩ B̅): shade the overlap A ∩ B and the region outside both circles; leave the two one-set-only regions unshaded.",
    "solution": "The conditional x ∈ A → x ∈ B is false only in the case x ∈ A and x ∉ B. The biconditional is true when the two membership bits match: both 1 in A ∩ B or both 0 outside A ∪ B. These regions specify exactly what to shade in a two-circle Venn diagram.",
    "hints": [
      "Use the four regions A ∩ B, A − B, B − A, and outside both; implication excludes only A − B."
    ],
    "rubric": [
      "Part (a) shades all but A − B; part (b) shades exactly A ∩ B and the exterior of A ∪ B."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Shade A̅ ∪ B, leaving only A − B unshaded.",
        "solution": "Implication fails only for membership pattern A=1, B=0.",
        "rubric": [
          "Selects exactly membership patterns 11, 01, and 00."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Shade (A ∩ B) ∪ (A ∪ B)̅.",
        "solution": "Biconditional requires equal membership bits, 11 or 00.",
        "rubric": [
          "Selects exactly the overlap and exterior."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-019",
    "mode": "rubric",
    "answer": "(A ∩ B ∩ C)̅ = A̅ ∪ B̅ ∪ C̅. a) Prove both inclusions. b) In ABC order 111,110,101,100,011,010,001,000, both target columns are 0,1,1,1,1,1,1,1.",
    "solution": "a) If x is outside the triple intersection, it fails at least one of x ∈ A, x ∈ B, x ∈ C, so it belongs to at least one complement. Conversely, membership in any complement prevents membership in the triple intersection. b) A ∩ B ∩ C is 1 only in row 111, so its complement is 0 followed by seven 1s. At least one of A̅,B̅,C̅ is 1 in every row except 111, giving the same column.",
    "hints": [
      "The triple intersection fails as soon as any one membership fails."
    ],
    "rubric": [
      "Part (a) proves both directions using at least one failed membership; part (b) gives all eight rows and matching columns 0,1,1,1,1,1,1,1."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Each side is a subset of the other, so (A ∩ B ∩ C)̅ = A̅ ∪ B̅ ∪ C̅.",
        "solution": "Outside the intersection means outside at least one atomic set; outside any atomic set means outside the intersection.",
        "rubric": [
          "Proves both inclusions without requiring all three memberships to fail."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For ABC = 111,110,101,100,011,010,001,000, both (A ∩ B ∩ C)̅ and A̅ ∪ B̅ ∪ C̅ equal 0,1,1,1,1,1,1,1.",
        "solution": "Only 111 belongs to A ∩ B ∩ C; every other row has at least one zero.",
        "rubric": [
          "Covers all eight rows and obtains matching columns."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-020",
    "mode": "rubric",
    "answer": "a) A ∪ B ⊆ A ∪ B ∪ C. b) A ∩ B ∩ C ⊆ A ∩ B. c) (A − B) − C ⊆ A − C. d) (A − C) ∩ (C − B) = ∅. e) (B − A) ∪ (C − A) = (B ∪ C) − A.",
    "solution": "a) Membership in A or B implies membership in A or B or C. b) Triple intersection membership implies the first two memberships. c) The left side means x ∈ A, x ∉ B, x ∉ C, which implies x ∈ A and x ∉ C. d) The first factor requires x ∉ C and the second x ∈ C. e) Both sides mean (x ∈ B or x ∈ C) and x ∉ A, by distribution of and over or.",
    "hints": [
      "Write each difference as a positive membership and a negative membership before comparing sides."
    ],
    "rubric": [
      "Proves all five statements; in particular, (d) uses the contradiction on C and (e) preserves x ∉ A on both sides."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ B ⊆ A ∪ B ∪ C.",
        "solution": "Adding C as another union alternative cannot remove members.",
        "rubric": [
          "Justifies inclusion from union membership."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ B ∩ C ⊆ A ∩ B.",
        "solution": "The triple condition includes x ∈ A and x ∈ B.",
        "rubric": [
          "Derives both required memberships."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(A − B) − C ⊆ A − C.",
        "solution": "The left side gives x ∈ A and x ∉ C, exactly the conditions needed on the right.",
        "rubric": [
          "Retains A and not C."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "(A − C) ∩ (C − B) = ∅.",
        "solution": "Membership would require x ∉ C and x ∈ C simultaneously.",
        "rubric": [
          "Identifies contradictory conditions on C."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "(B − A) ∪ (C − A) = (B ∪ C) − A.",
        "solution": "(B and not A) or (C and not A) is equivalent to (B or C) and not A.",
        "rubric": [
          "Uses distribution to prove equality in both directions."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-021",
    "mode": "rubric",
    "answer": "a) A − B = A ∩ B̅. b) (A ∩ B) ∪ (A ∩ B̅) = A.",
    "solution": "a) By definition, x ∈ A − B means x ∈ A and x ∉ B; x ∉ B is exactly x ∈ B̅. b) Factor the common A condition: (x ∈ A and x ∈ B) or (x ∈ A and x ∉ B) is equivalent to x ∈ A and (x ∈ B or x ∉ B). The latter parenthesis is always true, leaving x ∈ A.",
    "hints": [
      "In (b), partition A into the part in B and the part outside B."
    ],
    "rubric": [
      "Translates difference correctly in (a) and uses the exhaustive B/B̅ split in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A − B = A ∩ B̅.",
        "solution": "Both sides require x ∈ A and x ∉ B.",
        "rubric": [
          "Equates nonmembership in B with membership in B̅."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(A ∩ B) ∪ (A ∩ B̅) = A.",
        "solution": "The left side is A ∩ (B ∪ B̅) = A ∩ U = A.",
        "rubric": [
          "Uses distribution and B ∪ B̅ = U."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-022",
    "mode": "rubric",
    "answer": "Given A ⊆ B: a) A ∪ B = B. b) A ∩ B = A.",
    "solution": "a) Always B ⊆ A ∪ B. Conversely, any member of A ∪ B is in A or B; if it is in A, the hypothesis A ⊆ B puts it in B. b) Always A ∩ B ⊆ A. Conversely, if x ∈ A, then x ∈ B by hypothesis, so x ∈ A ∩ B.",
    "hints": [
      "One inclusion in each part is automatic; use A ⊆ B for the other."
    ],
    "rubric": [
      "Proves both nonautomatic inclusions using A ⊆ B and states the automatic inclusions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ B = B.",
        "solution": "B ⊆ A ∪ B always, and A ∪ B ⊆ B because A ⊆ B.",
        "rubric": [
          "Shows both inclusions."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ B = A.",
        "solution": "A ∩ B ⊆ A always, and A ⊆ A ∩ B because every member of A is also in B.",
        "rubric": [
          "Shows both inclusions."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-023",
    "mode": "rubric",
    "answer": "A ∪ (B ∪ C) = (A ∪ B) ∪ C.",
    "solution": "For any x, membership on the left is x ∈ A or (x ∈ B or x ∈ C); on the right it is (x ∈ A or x ∈ B) or x ∈ C. Both are equivalent to ‘x belongs to at least one of A, B, C.’ Hence the sets are equal.",
    "hints": [
      "Remove the grouping after translating union to inclusive or."
    ],
    "rubric": [
      "Shows both membership conditions are equivalent to membership in at least one of the three sets."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-024",
    "mode": "rubric",
    "answer": "A ∩ (B ∩ C) = (A ∩ B) ∩ C.",
    "solution": "Membership on the left is x ∈ A and (x ∈ B and x ∈ C); on the right it is (x ∈ A and x ∈ B) and x ∈ C. Both mean x belongs to all three sets, so the groupings define the same set.",
    "hints": [
      "Translate intersection to and; conjunction is associative."
    ],
    "rubric": [
      "Shows both sides require all three memberships."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-025",
    "mode": "rubric",
    "answer": "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).",
    "solution": "Let p,q,r mean x ∈ A, x ∈ B, x ∈ C. The left membership is p ∨ (q ∧ r); the right is (p ∨ q) ∧ (p ∨ r). These are equivalent by distributivity of disjunction over conjunction. Therefore an arbitrary x belongs to one side exactly when it belongs to the other.",
    "hints": [
      "Use p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r), with p meaning x ∈ A."
    ],
    "rubric": [
      "Correctly translates both sides and applies the distributive equivalence to arbitrary membership."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-026",
    "mode": "rubric",
    "answer": "(A − B) − C = (A − C) − (B − C).",
    "solution": "Membership on the left is x ∈ A, x ∉ B, and x ∉ C. On the right, x ∈ A − C means x ∈ A and x ∉ C; subtracting B − C removes only elements that are in B and outside C. Since x is already outside C, requiring x ∉ B − C is equivalent to x ∉ B. Thus both sides have the same three membership conditions.",
    "hints": [
      "On the right, x is already known to be outside C; use that to simplify x ∉ B − C."
    ],
    "rubric": [
      "Shows both sides are equivalent to x ∈ A, x ∉ B, and x ∉ C."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-027",
    "mode": "mixed",
    "answer": "a) {4, 6}. b) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. c) {4, 5, 6, 8, 10}. d) {0, 2, 4, 5, 6, 7, 8, 9, 10}.",
    "solution": "A ∩ B = {0,2,4,6}, and intersecting with C leaves {4,6}. A ∪ B = {0,1,2,3,4,5,6,8,10}; intersect this with C for (c). For (d), add all of C to A ∩ B. The full union contains every integer from 0 through 10.",
    "hints": [
      "Compute A ∩ B and A ∪ B once, then reuse them."
    ],
    "rubric": [
      "All four sets match the element-by-element calculations."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{4, 6}",
        "checker": "set",
        "solution": "Only 4 and 6 occur in all three sets."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
        "checker": "set",
        "solution": "Combining all distinct entries gives every integer 0 through 10."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{4, 5, 6, 8, 10}",
        "checker": "set",
        "solution": "A ∪ B = {0,1,2,3,4,5,6,8,10}; retain only its members that are also in C."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{0, 2, 4, 5, 6, 7, 8, 9, 10}",
        "checker": "set",
        "solution": "A ∩ B = {0,2,4,6}; union it with C."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-028",
    "mode": "rubric",
    "answer": "a) Shade A ∩ (B ∪ C): the parts of A that lie in B or C, including A ∩ B ∩ C but excluding A alone. b) Shade A̅ ∩ B̅ ∩ C̅ = (A ∪ B ∪ C)̅: only the region outside all three circles. c) Shade (A − B) ∪ (A − C) ∪ (B − C): A-only, A ∩ C outside B, B-only, and B ∩ A outside C; in membership terms, every region except A ∩ B ∩ C, B ∩ C outside A, C-only, and the exterior.",
    "solution": "a) First shade B ∪ C, then keep only its overlap with A. b) The three complements mean simultaneously outside A, outside B, and outside C. c) The three differences are A outside B, A outside C, and B outside C. Their union includes A-only, the A∩B-only region, A∩C-only, and B-only; it excludes any region contained in C without A, the triple overlap, and the exterior. Label the seven inner regions by ABC membership bits: shade 100,110,101,010.",
    "hints": [
      "Use membership bits ABC; for (c), test each of the eight regions against at least one difference."
    ],
    "rubric": [
      "Gives exactly the requested shading for each part; (b) is exterior only and (c) shades exactly 100,110,101,010."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Shade A ∩ (B ∪ C), with ABC membership patterns 110,101,111.",
        "solution": "Require A and at least one of B,C.",
        "rubric": [
          "Shades exactly 110,101,111."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Shade only (A ∪ B ∪ C)̅, the exterior of all three sets.",
        "solution": "The printed expression is A̅ ∩ B̅ ∩ C̅, not A ∩ B ∩ C.",
        "rubric": [
          "Uses all three complements and shades only 000."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Shade ABC regions 100,110,101,010.",
        "solution": "These and only these satisfy A outside B, A outside C, or B outside C.",
        "rubric": [
          "Shades exactly 100,110,101,010."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-029",
    "mode": "rubric",
    "answer": "a) Shade A ∩ (B − C): the region in A and B but outside C, pattern 110 only. b) Shade (A ∩ B) ∪ (A ∩ C): patterns 110,101,111. c) Shade (A ∩ B̅) ∪ (A ∩ C̅) = A ∩ (B ∩ C)̅: patterns 100,110,101, excluding 111.",
    "solution": "For each part, require A first. In (a), also require B and not C. In (b), require at least one of B,C. In (c), require outside B or outside C, so within A only the triple overlap is excluded. The complement bars in (c) apply separately to B and C.",
    "hints": [
      "All three answers lie inside A; distinguish (c) from (b) by checking A-only and the triple overlap."
    ],
    "rubric": [
      "Shades exactly 110 in (a), 110/101/111 in (b), and 100/110/101 in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Shade only A ∩ B ∩ C̅ (pattern 110).",
        "solution": "B − C requires B and not C; intersect with A.",
        "rubric": [
          "Selects 110 only."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Shade A ∩ (B ∪ C) (patterns 110,101,111).",
        "solution": "Union the portions of A overlapping B and C.",
        "rubric": [
          "Selects exactly 110,101,111."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Shade A ∩ (B ∩ C)̅ (patterns 100,110,101).",
        "solution": "Inside A, exclude only elements simultaneously in B and C.",
        "rubric": [
          "Selects exactly 100,110,101."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-030",
    "mode": "rubric",
    "answer": "a) Shade (A ∩ B) ∪ (C ∩ D): all regions where A and B both occur, together with all where C and D both occur. b) Shade A̅ ∪ B̅ ∪ C̅ ∪ D̅ = (A ∩ B ∩ C ∩ D)̅: everything except the four-way overlap. c) Shade A − (B ∩ C ∩ D): every part of A except A ∩ B ∩ C ∩ D.",
    "solution": "a) Use a four-set diagram and mark both pairwise overlaps before taking their union. b) The printed bars complement each set separately; by De Morgan, the union excludes only membership in all four sets. c) Begin inside A and remove only the portion simultaneously in B,C,D. Other portions of A remain shaded.",
    "hints": [
      "In (b), the expression is a union of complements, not a complement of a union."
    ],
    "rubric": [
      "Part (a) includes both complete pairwise overlaps, (b) excludes only ABCD, and (c) stays inside A while excluding only ABCD."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Shade every four-set membership region containing AB or containing CD.",
        "solution": "The union includes both overlaps, including their common region.",
        "rubric": [
          "Selects exactly regions with A=B=1 or C=D=1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Shade every region except A ∩ B ∩ C ∩ D.",
        "solution": "A̅ ∪ B̅ ∪ C̅ ∪ D̅ includes an element whenever at least one membership fails.",
        "rubric": [
          "Shades all but 1111."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Within A, shade every region except A ∩ B ∩ C ∩ D.",
        "solution": "Set difference retains A and removes the triple intersection B ∩ C ∩ D.",
        "rubric": [
          "Selects exactly A regions other than 1111."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-031",
    "mode": "rubric",
    "answer": "a) B ⊆ A. b) A ⊆ B. c) A ∩ B = ∅. d) No additional restriction; the equality holds for all sets A and B. e) A = B.",
    "solution": "a) Union with B adds nothing to A, so B is contained in A. b) Intersection with B retains all A, so A is contained in B. c) A − B = A says no element of A is removed, hence no element lies in both. d) Intersection is always commutative. e) Equality of the two differences forces both to be empty: if x ∈ A − B, equality puts x ∈ B − A, contradicting x ∉ B. Thus A − B = B − A = ∅, giving A ⊆ B and B ⊆ A.",
    "hints": [
      "For (e), first show the common difference must be empty, then use both subset inclusions."
    ],
    "rubric": [
      "States all five conclusions and, for (e), proves equality rather than merely disjointness."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "B ⊆ A.",
        "solution": "Every member of B belongs to A ∪ B = A.",
        "rubric": [
          "Concludes B subset A."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ⊆ B.",
        "solution": "Every x ∈ A belongs to A ∩ B, hence to B.",
        "rubric": [
          "Concludes A subset B."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A ∩ B = ∅.",
        "solution": "A shared element would be removed from A when forming A − B.",
        "rubric": [
          "Concludes disjointness."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Nothing beyond the given: A and B may be any sets.",
        "solution": "A ∩ B = B ∩ A is the commutative law and imposes no restriction.",
        "rubric": [
          "Recognizes the identity is automatic."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "A = B.",
        "solution": "The equal differences must both be ∅, so A ⊆ B and B ⊆ A.",
        "rubric": [
          "Proves mutual inclusion and equality."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-032",
    "mode": "rubric",
    "answer": "a) No. b) No. c) Yes. Counterexamples: for (a), A={1}, B=∅, C={1}; for (b), A={1}, B=∅, C=∅. Under both hypotheses in (c), A=B.",
    "solution": "a) Both unions are {1}, although A≠B. b) Both intersections are ∅, although A≠B. c) Let x ∈ A. If x ∈ C, then x ∈ A ∩ C = B ∩ C, so x ∈ B. If x ∉ C, then x ∈ A ∪ C = B ∪ C, and x ∉ C forces x ∈ B. Thus A ⊆ B; swapping A and B gives B ⊆ A.",
    "hints": [
      "For (c), split according to whether x belongs to C; use intersection in one case and union in the other."
    ],
    "rubric": [
      "Provides valid counterexamples for (a) and (b), and a two-case mutual-inclusion proof for (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "No: A={1}, B=∅, C={1} gives A ∪ C = B ∪ C = {1}, but A≠B.",
        "solution": "C masks the difference between A and B in the union.",
        "rubric": [
          "Gives a valid counterexample."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "No: A={1}, B=∅, C=∅ gives A ∩ C = B ∩ C = ∅, but A≠B.",
        "solution": "C masks the difference in the intersection.",
        "rubric": [
          "Gives a valid counterexample."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Yes: A=B.",
        "solution": "For x ∈ A, use the equal intersections if x ∈ C and the equal unions if x ∉ C; either way x ∈ B. Reverse the roles for the other inclusion.",
        "rubric": [
          "Proves both inclusions using both hypotheses."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-033",
    "mode": "rubric",
    "answer": "A ⊆ B if and only if B̅ ⊆ A̅.",
    "solution": "If A ⊆ B and x ∈ B̅, then x ∉ B; x cannot belong to A, since A ⊆ B would then force x ∈ B. Hence x ∈ A̅. Conversely, if B̅ ⊆ A̅ and x ∈ A, then x ∉ A̅, so x cannot belong to B̅; therefore x ∈ B. This proves both directions.",
    "hints": [
      "Complement reverses inclusion: prove each direction by ruling out the contradictory membership."
    ],
    "rubric": [
      "Proves both directions using the universal-set complements and the respective subset hypotheses."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-034",
    "mode": "rubric",
    "answer": "(A − B) ∩ (B − C) ∩ (A − C) = ∅.",
    "solution": "Replace differences by intersections with complements: (A ∩ B̅) ∩ (B ∩ C̅) ∩ (A ∩ C̅). By commutativity and associativity this contains B̅ ∩ B as a subexpression, and B̅ ∩ B = ∅. Intersection with ∅ gives ∅. The same contradiction is visible directly: the first factor requires x ∉ B and the second x ∈ B.",
    "hints": [
      "After rewriting differences, look for both B and B̅ among the factors."
    ],
    "rubric": [
      "Uses A − B = A ∩ B̅ and valid set identities to expose B ∩ B̅, concluding ∅."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-035",
    "mode": "rubric",
    "answer": "(A ∪ B)̅ ∩ (B ∪ C)̅ ∩ (A ∪ C)̅ = A̅ ∩ B̅ ∩ C̅.",
    "solution": "Apply De Morgan's law separately to each complemented union: (A ∪ B)̅ = A̅ ∩ B̅, (B ∪ C)̅ = B̅ ∩ C̅, and (A ∪ C)̅ = A̅ ∩ C̅. Their intersection is (A̅ ∩ B̅) ∩ (B̅ ∩ C̅) ∩ (A̅ ∩ C̅). Associativity, commutativity, and idempotence remove grouping and repeated factors, leaving A̅ ∩ B̅ ∩ C̅. Equivalently, an element on the left is outside every union, which forces it outside A, B, and C; the converse is immediate.",
    "hints": [
      "Each overbar covers one parenthesized union; simplify the three complements separately."
    ],
    "rubric": [
      "Applies De Morgan to all three unions and uses valid set identities to obtain A̅ ∩ B̅ ∩ C̅."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-036",
    "mode": "rubric",
    "answer": "Both identities are true: a) A × (B ∪ C) = (A × B) ∪ (A × C). b) A × (B ∩ C) = (A × B) ∩ (A × C).",
    "solution": "An element of a Cartesian product is an ordered pair (x,y). For (a), (x,y) belongs to the left iff x ∈ A and y ∈ B ∪ C, iff x ∈ A and (y ∈ B or y ∈ C), iff (x,y) ∈ A × B or (x,y) ∈ A × C. For (b), replace ‘or’ by ‘and’: the left requires x ∈ A, y ∈ B, and y ∈ C, exactly the condition for membership in both A × B and A × C.",
    "hints": [
      "Track the ordered pair (x,y); x stays in A while y is tested against B and C."
    ],
    "rubric": [
      "Proves both identities with ordered-pair membership, distributing over union in (a) and intersection in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True for all sets.",
        "solution": "(x,y) ∈ A × (B ∪ C) iff x ∈ A and (y ∈ B or y ∈ C), iff (x,y) ∈ (A × B) ∪ (A × C).",
        "rubric": [
          "Gives a reversible ordered-pair argument."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "True for all sets.",
        "solution": "The left requires x ∈ A and y in both B,C; this is membership in both Cartesian products on the right.",
        "rubric": [
          "Gives a reversible ordered-pair argument."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-037",
    "mode": "rubric",
    "answer": "a) True: A × (B − C) = (A × B) − (A × C). b) False in general: A̅ × (B ∪ C)̅ need not equal (A × (B ∪ C))̅.",
    "solution": "a) (x,y) ∈ A × (B − C) iff x ∈ A, y ∈ B, y ∉ C. This is exactly membership in A × B but not A × C. b) Use U={1,2}, A={1}, B={1}, C=∅. Then A̅={2}, B ∪ C={1}, and its complement is {2}; the left side is {(2,2)}. But A × (B ∪ C)={(1,1)}, whose complement in U × U is {(1,2),(2,1),(2,2)}. These are unequal.",
    "hints": [
      "For (b), complements of sets of ordered pairs live in U × U; test a small two-element universe."
    ],
    "rubric": [
      "Proves (a) by ordered-pair membership and gives a valid counterexample to the complemented products in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True for all sets.",
        "solution": "Both sides require x ∈ A, y ∈ B, and y ∉ C.",
        "rubric": [
          "Proves equality of the Cartesian-product difference."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "False: with U={1,2}, A=B={1}, C=∅, the left is {(2,2)} but the right is {(1,2),(2,1),(2,2)}.",
        "solution": "Compute the complements relative to U and U × U respectively.",
        "rubric": [
          "Supplies sets and correct unequal sides."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-038",
    "mode": "auto",
    "answer": "{2, 5}",
    "solution": "Symmetric difference keeps elements in exactly one set. The shared elements 1 and 3 are removed; 5 occurs only in the first set and 2 only in the second, so the answer is {2,5}.",
    "hints": [
      "Delete the intersection {1,3} from the union {1,2,3,5}."
    ],
    "checker": "set",
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-039",
    "mode": "rubric",
    "answer": "The set of students who major in computer science or mathematics, but not both: computer-science-only majors together with mathematics-only majors. Double majors in both subjects are excluded.",
    "solution": "Let C be computer science majors and M mathematics majors. C ⊕ M = (C − M) ∪ (M − C), so include each one-major group and exclude C ∩ M.",
    "hints": [
      "Symmetric difference means exactly one major category, not inclusive or."
    ],
    "rubric": [
      "Includes both single-major groups and explicitly excludes students majoring in both."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-040",
    "mode": "rubric",
    "answer": "In a two-circle Venn diagram, shade A − B and B − A, the two nonoverlapping crescents. Leave A ∩ B and the exterior of A ∪ B unshaded.",
    "solution": "The membership bit for symmetric difference is 1 when the A and B bits differ. Thus shade patterns 10 and 01 only; 11 and 00 remain unshaded.",
    "hints": [
      "Shade where exactly one of the two membership bits is 1."
    ],
    "rubric": [
      "Shades exactly the two one-set-only regions and leaves overlap and exterior unshaded."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-041",
    "mode": "rubric",
    "answer": "A ⊕ B = (A ∪ B) − (A ∩ B).",
    "solution": "By definition, x ∈ A ⊕ B means x belongs to A or B but not both. Membership in A ∪ B says x belongs to at least one; removing A ∩ B removes precisely the both case. Conversely, any member of the difference belongs to at least one set and not both, so it belongs to A ⊕ B.",
    "hints": [
      "Start with at least one set, then remove the both-set region."
    ],
    "rubric": [
      "Shows both sides mean membership in at least one set but not in their intersection."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-042",
    "mode": "rubric",
    "answer": "A ⊕ B = (A − B) ∪ (B − A).",
    "solution": "A − B contains elements in A only, and B − A contains elements in B only. Their union is therefore membership in exactly one set. Conversely, if x ∈ A ⊕ B, either x ∈ A and x ∉ B, placing it in A − B, or x ∈ B and x ∉ A, placing it in B − A.",
    "hints": [
      "The two differences are the two exclusive-or cases."
    ],
    "rubric": [
      "Proves both directions using the A-only and B-only cases."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-043",
    "mode": "rubric",
    "answer": "a) A ⊕ A = ∅. b) A ⊕ ∅ = A. c) A ⊕ U = A̅. d) A ⊕ A̅ = U.",
    "solution": "a) Membership in A agrees with itself everywhere, so no element is in exactly one copy. b) Only A can supply membership, and no element is in ∅. c) Every x ∈ U belongs to U, so exactly-one membership holds precisely when x ∉ A. d) Every x belongs to exactly one of A and A̅, so the symmetric difference is U.",
    "hints": [
      "Test the four membership patterns and remember U contains every element under discussion."
    ],
    "rubric": [
      "Proves all four identities, especially the exactly-one reasoning in (c) and exhaustive exclusive split in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ⊕ A = ∅.",
        "solution": "No element can belong to exactly one of two identical sets.",
        "rubric": [
          "Uses identical membership bits."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ⊕ ∅ = A.",
        "solution": "Exactly-one membership is equivalent simply to membership in A.",
        "rubric": [
          "Uses emptiness of the second set."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A ⊕ U = A̅.",
        "solution": "Because U-membership is always true, exactly one is true exactly when A-membership is false.",
        "rubric": [
          "Derives complement membership."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A ⊕ A̅ = U.",
        "solution": "Each element belongs to exactly one of A and its complement.",
        "rubric": [
          "Covers every element of U."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-044",
    "mode": "rubric",
    "answer": "a) A ⊕ B = B ⊕ A. b) (A ⊕ B) ⊕ B = A.",
    "solution": "a) ‘Exactly one of x ∈ A and x ∈ B is true’ does not depend on their order. b) Membership is parity of the membership bits. (a_bit ⊕ b_bit) ⊕ b_bit = a_bit because b_bit ⊕ b_bit = 0. Alternatively, symmetric difference with B toggles membership in B; toggling twice restores the original membership in A.",
    "hints": [
      "Think of ⊕ as exclusive-or on membership bits; x ⊕ x = 0 and x ⊕ 0 = x."
    ],
    "rubric": [
      "Uses symmetry for (a) and correct cancellation or double-toggle reasoning for (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ⊕ B = B ⊕ A.",
        "solution": "Exactly-one membership is symmetric in A and B.",
        "rubric": [
          "Justifies commutativity."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(A ⊕ B) ⊕ B = A.",
        "solution": "(a ⊕ b) ⊕ b = a for membership bits, so all original memberships are restored.",
        "rubric": [
          "Correctly cancels the repeated B."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-045",
    "mode": "rubric",
    "answer": "B = ∅.",
    "solution": "Symmetric difference with A on both sides gives (A ⊕ B) ⊕ A = A ⊕ A. Hence B ⊕ (A ⊕ A) = ∅, so B = ∅. Elementwise, any x ∈ B would make exactly-one membership differ from A whether x ∈ A or not, contradicting A ⊕ B = A.",
    "hints": [
      "Use the cancellation property from Exercise 44, or test both cases x ∈ A and x ∉ A."
    ],
    "rubric": [
      "Concludes B is empty and justifies why no element can belong to B."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-046",
    "mode": "rubric",
    "answer": "Yes. Symmetric difference is associative: A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C.",
    "solution": "Let a,b,c be the 0/1 membership bits of an element. Exclusive-or on bits is associative, and both expressions equal a ⊕ b ⊕ c. Their membership is 1 exactly when an odd number of a,b,c are 1: patterns 111,100,010,001. Since every element has the same status on both sides, the sets are equal.",
    "hints": [
      "Check the eight ABC membership rows; both sides are 1 exactly for odd parity."
    ],
    "rubric": [
      "Establishes associativity using membership-bit parity or an equivalent complete eight-row argument."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-047",
    "mode": "rubric",
    "answer": "Yes. If A ⊕ C = B ⊕ C, then A = B.",
    "solution": "Take symmetric difference with C on both sides: (A ⊕ C) ⊕ C = (B ⊕ C) ⊕ C. By Exercise 44(b), the left is A and the right is B. Thus A = B. This is cancellation of C under symmetric difference.",
    "hints": [
      "Apply ⊕ C to both sides and cancel the repeated C."
    ],
    "rubric": [
      "Uses valid symmetric-difference cancellation to conclude A=B."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-048",
    "mode": "rubric",
    "answer": "Yes. (A ⊕ B) ⊕ (C ⊕ D) = (A ⊕ C) ⊕ (B ⊕ D); both equal A ⊕ B ⊕ C ⊕ D.",
    "solution": "Symmetric difference is commutative and associative, so parentheses may be moved and terms reordered. The left is A ⊕ B ⊕ C ⊕ D and the right is A ⊕ C ⊕ B ⊕ D, which is the same expression. Equivalently, both membership bits are a ⊕ b ⊕ c ⊕ d.",
    "hints": [
      "Remove parentheses, swap B and C, and regroup."
    ],
    "rubric": [
      "Justifies equality using associativity and commutativity, not merely a single example."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-049",
    "mode": "rubric",
    "answer": "Yes. (A ⊕ B) ⊕ (C ⊕ D) = (A ⊕ D) ⊕ (B ⊕ C); both equal A ⊕ B ⊕ C ⊕ D.",
    "solution": "By associativity and commutativity, the left reduces to A ⊕ B ⊕ C ⊕ D. The right reduces to A ⊕ D ⊕ B ⊕ C, which differs only in the order of terms. Therefore they define the same odd-parity membership condition.",
    "hints": [
      "Both sides contain each of A,B,C,D exactly once under associative, commutative ⊕."
    ],
    "rubric": [
      "Shows both expressions are the same fourfold symmetric difference for all sets."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-050",
    "mode": "rubric",
    "answer": "If A and B are finite, then A ∪ B is finite.",
    "solution": "Write A={a1,…,am} and B={b1,…,bn}. Every element of A ∪ B occurs in the finite list a1,…,am,b1,…,bn. After deleting duplicates, at most m+n distinct elements remain, so A ∪ B is finite and |A ∪ B| ≤ |A|+|B|.",
    "hints": [
      "Concatenate the two finite lists; duplicates do not make the list infinite."
    ],
    "rubric": [
      "Exhibits a finite containing list or finite cardinality bound for A ∪ B."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-051",
    "mode": "rubric",
    "answer": "If A is infinite, then A ∪ B is infinite for every set B.",
    "solution": "A ⊆ A ∪ B by the definition of union. If A ∪ B were finite, every subset of it, including A, would be finite, contradicting the hypothesis. Therefore A ∪ B must be infinite.",
    "hints": [
      "Use proof by contradiction and the fact that a subset of a finite set is finite."
    ],
    "rubric": [
      "Uses A ⊆ A ∪ B and derives a contradiction from assuming the union finite."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-052",
    "mode": "rubric",
    "answer": "For finite A,B,C, |A ∪ B ∪ C| = |A|+|B|+|C|−|A ∩ B|−|A ∩ C|−|B ∩ C|+|A ∩ B ∩ C|. (For arbitrary sets, the same identity holds whenever the displayed cardinalities are finite.)",
    "solution": "Track how many times an element is counted on the right. If it lies in exactly one set, it is counted once. If it lies in exactly two, it contributes 2 from the single-set terms and −1 from their pairwise intersection, for a net 1. If it lies in all three, it contributes 3−3+1=1. If it lies in none, it contributes 0. Thus the right side counts each member of the union exactly once.",
    "hints": [
      "Classify an element by whether it belongs to zero, one, two, or all three sets."
    ],
    "rubric": [
      "Accounts correctly for all four membership multiplicities, including net count 3−3+1=1 in the triple overlap."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-053",
    "mode": "mixed",
    "answer": "a) A_n = {1,2,…,n}. b) A_1 = {1}.",
    "solution": "The sets are nested: A_1 ⊆ A_2 ⊆ … ⊆ A_n. A union of nested sets is the largest, A_n. Their intersection is the smallest, A_1, because every later set contains 1.",
    "hints": [
      "Write the first few: A_1={1}, A_2={1,2}, A_3={1,2,3}."
    ],
    "rubric": [
      "Uses the nested order to identify the largest union and smallest intersection."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A_n = {1,2,3,…,n}.",
        "solution": "Every A_i for i≤n is contained in A_n, and A_n itself occurs in the union.",
        "rubric": [
          "Identifies A_n and explains nesting."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{1}",
        "checker": "set",
        "solution": "A_1={1} is contained in every A_i, so it is the common intersection."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-054",
    "mode": "rubric",
    "answer": "a) A_n = {x ∈ ℤ : x ≤ n} = {…,−2,−1,0,1,…,n}. b) A_1 = {x ∈ ℤ : x ≤ 1} = {…,−2,−1,0,1}.",
    "solution": "As i increases, only a new largest integer i is added; all integers below it were already present. Thus A_1 ⊆ A_2 ⊆ … ⊆ A_n. The union is A_n and the intersection is A_1.",
    "hints": [
      "Each A_i contains all integers up to i, with no lower cutoff."
    ],
    "rubric": [
      "Gives the correct integer intervals and justifies them by nesting."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A_n = {x ∈ ℤ : x ≤ n}.",
        "solution": "The largest nested set supplies the union.",
        "rubric": [
          "Includes all integers ≤n and no others."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A_1 = {x ∈ ℤ : x ≤ 1}.",
        "solution": "The smallest nested set supplies the intersection.",
        "rubric": [
          "Includes all integers ≤1 and no others."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-055",
    "mode": "mixed",
    "answer": "a) A_n, the set of all nonempty bit strings of length at most n. b) A_1 = {0,1}.",
    "solution": "A_i contains bit strings of lengths 1 through i, so A_1 ⊆ A_2 ⊆ … ⊆ A_n. Therefore the union is A_n. A string in every A_i must in particular belong to A_1, so its length is 1; both length-one strings 0 and 1 occur in every set.",
    "hints": [
      "The intersection cannot contain a string of length 2 because A_1 excludes it."
    ],
    "rubric": [
      "Identifies A_n for the union and exactly {0,1} for the intersection."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A_n = {w : w is a bit string and 1 ≤ |w| ≤ n}.",
        "solution": "Nested sets make the largest one the union.",
        "rubric": [
          "Includes exactly nonempty bit strings of length at most n."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{0, 1}",
        "checker": "set",
        "solution": "Only length-one strings occur in A_1, and both occur in all A_i."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-056",
    "mode": "rubric",
    "answer": "a) ⋃A_i = {1,2,3,…} = ℤ⁺; ⋂A_i = ∅. b) ⋃A_i = {0,1,2,3,…}; ⋂A_i = {0,1}. c) ⋃A_i = (0,∞); ⋂A_i = (0,1). d) ⋃A_i = (1,∞); ⋂A_i = ∅.",
    "solution": "a) A_1 supplies all positive integers; any integer m is absent from A_{m+1}, so none survives every intersection. b) A_1={0,1} is contained in every A_i, and all nonnegative integers eventually occur. c) The intervals grow; every positive x belongs once i>x, while membership in all requires 0<x<1. d) All sets contain (1,∞), which already occurs when i=1; any real x has an integer i≥x, so x cannot be in every (i,∞).",
    "hints": [
      "For an infinite intersection, test whether each candidate can eventually be excluded by a larger index."
    ],
    "rubric": [
      "Gives both correct sets for all four parts, with endpoints and empty infinite intersections handled correctly."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Union ℤ⁺; intersection ∅.",
        "solution": "The union is A_1; every positive integer is eventually omitted.",
        "rubric": [
          "Correct union and empty intersection with eventual-exclusion reasoning."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Union {0} ∪ ℤ⁺; intersection {0,1}.",
        "solution": "Every nonnegative integer appears eventually, and A_1 gives exactly the common elements.",
        "rubric": [
          "Correct union and intersection."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Union (0,∞); intersection (0,1).",
        "solution": "The growing intervals cover every positive real, and the smallest interval is (0,1).",
        "rubric": [
          "Correct open intervals."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Union (1,∞); intersection ∅.",
        "solution": "A_1 supplies the union; for any x, choosing i≥x excludes it from A_i.",
        "rubric": [
          "Correct union and empty intersection."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-057",
    "mode": "rubric",
    "answer": "a) ⋃A_i = ℤ; ⋂A_i = {−1,0,1}. b) ⋃A_i = ℤ − {0}; ⋂A_i = {−1,1}. c) ⋃A_i = ℝ; ⋂A_i = [−1,1]. d) ⋃A_i = [1,∞); ⋂A_i = ∅.",
    "solution": "a) Every integer eventually lies between −i and i; A_1 gives the common part. b) Every nonzero integer appears as ±i, and only ±1 occur in all sets. c) Every real x satisfies |x|≤i for sufficiently large i, while common membership requires |x|≤1. d) A_1 supplies the union; no real x satisfies x≥i for every positive integer i.",
    "hints": [
      "Distinguish finite indexed intersections, where the smallest set often survives, from infinite intersections with eventual exclusion."
    ],
    "rubric": [
      "Gives both correct sets in every part, including ℤ−{0} in (b) and closed endpoints in (c) and (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Union ℤ; intersection {−1,0,1}.",
        "solution": "Every integer eventually occurs; A_1 is the common subset.",
        "rubric": [
          "Correct integer sets."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Union ℤ − {0}; intersection {−1,1}.",
        "solution": "Each nonzero integer appears as one of ±i; zero never appears.",
        "rubric": [
          "Excludes zero from union and gives correct intersection."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Union ℝ; intersection [−1,1].",
        "solution": "Every real eventually belongs; only absolute value at most 1 belongs to all.",
        "rubric": [
          "Correct real sets and endpoints."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Union [1,∞); intersection ∅.",
        "solution": "A_1 gives the union, and every real is excluded once i>x.",
        "rubric": [
          "Correct union and empty intersection."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-058",
    "mode": "mixed",
    "answer": "a) 0011100000. b) 1010010001. c) 0111001110.",
    "solution": "Write ten positions corresponding to 1,2,…,10. Place 1 exactly at each listed element and 0 elsewhere. For example, {3,4,5} has zeros in positions 1–2, ones in positions 3–5, then zeros.",
    "hints": [
      "Count the bits in pairs from left to right; position i represents element i, not the ith listed member."
    ],
    "rubric": [
      "Each ten-bit string has ones at exactly the requested positions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "0011100000",
        "checker": "text",
        "solution": "Positions 3,4,5 are 1; all others are 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1010010001",
        "checker": "text",
        "solution": "Positions 1,3,6,10 are 1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "0111001110",
        "checker": "text",
        "solution": "Positions 2,3,4,7,8,9 are 1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-059",
    "mode": "mixed",
    "answer": "a) {1, 2, 3, 4, 7, 8, 9, 10}. b) {2, 4, 5, 6, 7}. c) {1, 10}.",
    "solution": "Read 1 as membership and record its position. Removing visual spacing, the strings are 1111001111, 0101111000, and 1000000001. Their 1-positions give the three sets.",
    "hints": [
      "Number the ten bit positions before converting each string to a set."
    ],
    "rubric": [
      "Decodes all three strings into exactly the listed 1-positions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{1, 2, 3, 4, 7, 8, 9, 10}",
        "checker": "set",
        "solution": "The ones occupy positions 1–4 and 7–10."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{2, 4, 5, 6, 7}",
        "checker": "set",
        "solution": "The ones occupy positions 2 and 4–7."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{1, 10}",
        "checker": "set",
        "solution": "Only the first and last bits are one."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-060",
    "mode": "mixed",
    "answer": "a) ∅. b) U, the entire finite universal set.",
    "solution": "A zero in every position says no universal element belongs, so the subset is empty. A one in every position says every universal element belongs, so the subset is U.",
    "hints": [
      "Each bit answers membership for one universal element."
    ],
    "rubric": [
      "Identifies the empty set and full universal set correctly."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "∅",
        "checker": "set",
        "solution": "No position indicates membership."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "U",
        "checker": "text",
        "solution": "Every position indicates membership, so every universal element is included."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-061",
    "mode": "rubric",
    "answer": "If a_i and b_i are the bits for A and B, then the bit for A − B is a_i AND (NOT b_i), equivalently a_i ∧ ¬b_i. It is 1 exactly when a_i=1 and b_i=0.",
    "solution": "The ith universal element belongs to A − B precisely when it belongs to A and not B. Apply this rule independently to every bit position; there is no borrowing or arithmetic subtraction.",
    "hints": [
      "Keep a 1 from A only where B has 0."
    ],
    "rubric": [
      "Gives the bitwise formula a_i AND NOT b_i and explains the 10 membership case."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-062",
    "mode": "rubric",
    "answer": "The bit string is the bitwise XOR of the strings for A and B: a_i XOR b_i. Each output bit is 1 exactly when the two input bits differ.",
    "solution": "Symmetric difference contains an element exactly when it belongs to one set but not both. Thus input pairs 01 and 10 produce 1, while 00 and 11 produce 0.",
    "hints": [
      "Use exclusive-or, not ordinary inclusive OR."
    ],
    "rubric": [
      "Specifies bitwise XOR and the correct behavior for equal and unequal input bits."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-063",
    "mode": "rubric",
    "answer": "Using alphabetical universal order a,b,…,z: a) A OR B = {a,b,c,d,e,g,p,t,v}. b) A AND B = {b,c,d}. c) (A OR D) AND (B OR C) = {b,c,d,e,i,o,t,u,x,y}. d) A OR B OR C OR D = {a,b,c,d,e,g,h,i,n,o,p,t,u,v,x,y,z}.",
    "solution": "Encode each set as a 26-bit string in alphabetical order. Use OR for union and AND for intersection. In (c), first form A OR D={a,b,c,d,e,h,i,n,o,t,u,x,y} and B OR C={b,c,d,e,g,i,o,p,t,u,v,x,y,z}; their AND gives the stated set. In (d), OR all four strings. Decode 1-positions back to letters.",
    "hints": [
      "Fix the alphabetical bit order before operating; in (c), finish both ORs before the AND."
    ],
    "rubric": [
      "Uses the correct bitwise operations and decodes all four exact resulting sets."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A OR B gives {a,b,c,d,e,g,p,t,v}.",
        "solution": "A contributes a–e; B adds g,p,t,v to b,c,d.",
        "rubric": [
          "Correct operation and resulting set."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A AND B gives {b,c,d}.",
        "solution": "Only b,c,d have 1 in both bit strings.",
        "rubric": [
          "Correct operation and resulting set."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(A OR D) AND (B OR C) gives {b,c,d,e,i,o,t,u,x,y}.",
        "solution": "Intersect the two intermediate unions and retain only common letters.",
        "rubric": [
          "Correct intermediate operations and final set."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A OR B OR C OR D gives {a,b,c,d,e,g,h,i,n,o,p,t,u,v,x,y,z}.",
        "solution": "A bit is 1 if at least one input set has a 1 there.",
        "rubric": [
          "Correct full union."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-064",
    "mode": "rubric",
    "answer": "Encode every set with bit strings in the same fixed ordering of U. The union is the bitwise OR of all n strings: bit i is 1 if at least one input bit is 1. The intersection is the bitwise AND of all n strings: bit i is 1 only if every input bit is 1. For n=0 under the usual conventions, the union is ∅ and the intersection within universe U is U.",
    "solution": "For each universal element, membership in a union is an OR of its n membership indicators, and membership in an intersection is an AND. Compute position by position, then decode the resulting string.",
    "hints": [
      "Union needs at least one 1; intersection needs all 1s at each position."
    ],
    "rubric": [
      "Correctly defines n-way bitwise OR and AND with a common bit ordering and membership interpretation."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-065",
    "mode": "mixed",
    "answer": "a) {1,2,3,{1,2,3}}. b) {∅}. c) {∅,{∅}}. d) {∅,{∅},{∅,{∅}}}.",
    "solution": "The successor operation is S(A)=A ∪ {A}: retain all old elements and add the original set A itself as one new element. In (a), {1,2,3} becomes an element, not three more numbers. In (b), ∅ ∪ {∅}={∅}. The nested braces in (c) and (d) distinguish elements from the sets containing them.",
    "hints": [
      "Add the entire original set as a single element; do not flatten its braces."
    ],
    "rubric": [
      "All four successors retain the original members and add exactly the original set as a new member."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{1, 2, 3, {1, 2, 3}}",
        "checker": "set",
        "solution": "Add {1,2,3} itself to its three original elements."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{∅}",
        "checker": "set",
        "solution": "S(∅)=∅ ∪ {∅}={∅}."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{∅, {∅}}",
        "checker": "set",
        "solution": "Retain ∅ and add {∅} as an element."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{∅, {∅}, {∅, {∅}}}",
        "checker": "set",
        "solution": "Retain ∅ and {∅}, then add the whole original set {∅,{∅}}."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-066",
    "mode": "auto",
    "answer": "n + 1",
    "solution": "The successor S(A)=A ∪ {A} adds A itself as one new element. Because A is a set, A ∉ A (standard well-founded sets), so this element was not already counted. Thus an n-element set has n+1 elements in its successor.",
    "hints": [
      "The original set contributes one additional element, namely the set itself."
    ],
    "checker": "text",
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-067",
    "mode": "rubric",
    "answer": "a) {3·a,3·b,1·c,4·d}. b) {2·a,2·b}. c) {1·a,1·c}. d) {1·b,4·d}. e) {5·a,5·b,1·c,4·d}.",
    "solution": "For each type, absent means multiplicity 0. Union uses max, intersection min, difference max(m_A−m_B,0), and sum m_A+m_B. For example, a has multiplicities 3 and 2, giving max=3, min=2, differences 1 and 0, and sum 5. Zero-multiplicity terms are omitted.",
    "hints": [
      "Make a small multiplicity table for a,b,c,d before applying max, min, truncated subtraction, or addition."
    ],
    "rubric": [
      "All five multisets have the correct types and multiplicities, with zero terms omitted."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "{3·a,3·b,1·c,4·d}.",
        "solution": "Take maxima (3,3,1,4) across the two multisets.",
        "rubric": [
          "Correct maximum multiplicities."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "{2·a,2·b}.",
        "solution": "Minima for a,b are 2,2; c,d have minimum 0.",
        "rubric": [
          "Correct minimum multiplicities and omissions."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "{1·a,1·c}.",
        "solution": "Residuals max(A−B,0) are a:1,b:0,c:1,d:0.",
        "rubric": [
          "Correct positive residuals."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "{1·b,4·d}.",
        "solution": "Residuals max(B−A,0) are a:0,b:1,c:0,d:4.",
        "rubric": [
          "Correct positive residuals."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "{5·a,5·b,1·c,4·d}.",
        "solution": "Add corresponding multiplicities.",
        "rubric": [
          "Correct summed multiplicities."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-068",
    "mode": "rubric",
    "answer": "a) True. b) True. c) True. d) True. e) False. In ordinary sets, {a,a}={a,a,a}={a,a,a,a,a}={a}; repeated listings do not create multiplicity.",
    "solution": "Collapse every displayed ordinary set to {a}. Then (a) and (b) both become {a} ∪ {a} = {a}, while (c) and (d) both become {a} ∩ {a} = {a}; all four are true. In (e), the left side is {a}−{a}=∅ but the right side is {a}, so it is false.",
    "hints": [
      "An ordinary set has distinct elements; rewrite every repeated-a set as {a} before operating, including the set on the right of each equality."
    ],
    "rubric": [
      "Gives true,true,true,true,false and explains that duplicates collapse and the difference in (e) is empty."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True: both sides equal {a}.",
        "solution": "The union is {a}, and {a,a,a,a,a} also collapses to {a}.",
        "rubric": [
          "Marks true and collapses duplicates on both sides."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "True: {a,a} ∪ {a,a,a} = {a}.",
        "solution": "Both inputs collapse to {a}.",
        "rubric": [
          "Marks true."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: both sides equal {a}.",
        "solution": "The intersection is {a}, and the ordinary set {a,a} also equals {a}.",
        "rubric": [
          "Marks true and collapses duplicates on both sides."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "True: {a,a} ∩ {a,a,a} = {a}.",
        "solution": "The common distinct element is a.",
        "rubric": [
          "Marks true."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "False: {a,a,a} − {a,a} = ∅.",
        "solution": "Both sides of the difference collapse to {a}, and {a}−{a} is empty.",
        "rubric": [
          "Marks false and identifies ∅."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-069",
    "mode": "rubric",
    "answer": "a) False. b) False. c) True. d) False. e) True. Multiplicities are 2 and 3: union takes max=3, intersection min=2, and difference max(3−2,0)=1.",
    "solution": "For multisets, {a,a} has multiplicity 2 and {a,a,a} multiplicity 3. Their union is multiplicity 3, not 5 or 1; their intersection is multiplicity 2, not 1; and the second minus the first is multiplicity 1. Therefore the truth values are F,F,T,F,T.",
    "hints": [
      "Do not add multiplicities for union: use maximum; intersection uses minimum."
    ],
    "rubric": [
      "Gives false,false,true,false,true with max/min/truncated-subtraction explanations."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "False: the union is {a,a,a}, multiplicity 3, not multiplicity 5.",
        "solution": "Multiset union takes max(2,3)=3.",
        "rubric": [
          "Marks false and uses maximum."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "False: the union has multiplicity 3, not 1.",
        "solution": "max(2,3)=3.",
        "rubric": [
          "Marks false."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: the intersection is {a,a}.",
        "solution": "Multiset intersection takes min(2,3)=2.",
        "rubric": [
          "Marks true and uses minimum."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "False: the intersection has multiplicity 2, not 1.",
        "solution": "min(2,3)=2.",
        "rubric": [
          "Marks false."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "True: {a,a,a} − {a,a} = {a}.",
        "solution": "The residual multiplicity is max(3−2,0)=1.",
        "rubric": [
          "Marks true and computes residual 1."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-070",
    "mode": "rubric",
    "answer": "a) A ∪ B (maximum multiplicity for each equipment type). b) A ∩ B (minimum multiplicity). c) B − A (residual multiplicity max(m_B−m_A,0)). d) A + B (sum of multiplicities).",
    "solution": "When equipment is shared, the university needs enough for the larger departmental requirement, hence union in (a). Equipment used by both is limited by the smaller available count, hence intersection in (b). Extra equipment used by the second but not the first is the positive residual B−A. Without sharing, requirements accumulate, so use multiset sum.",
    "hints": [
      "Decide for each scenario whether multiplicities should be maximized, minimized, subtracted, or added."
    ],
    "rubric": [
      "Selects A∪B, A∩B, B−A, A+B in order and ties each to the sharing interpretation."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A ∪ B.",
        "solution": "Maximum multiplicity covers both departments when they share.",
        "rubric": [
          "Uses multiset union."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A ∩ B.",
        "solution": "Minimum multiplicity gives equipment common to both departments.",
        "rubric": [
          "Uses multiset intersection."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "B − A.",
        "solution": "Only positive excess of B over A remains.",
        "rubric": [
          "Uses the correctly ordered difference."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A + B.",
        "solution": "Without sharing, add the requirements for every type.",
        "rubric": [
          "Uses multiset sum."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-071",
    "mode": "rubric",
    "answer": "a) J=0, d_J=1. b) J=2/6=1/3, d_J=2/3. c) J=1, d_J=0. d) J=1/6, d_J=5/6.",
    "solution": "Use J(A,B)=|A∩B|/|A∪B| and d_J=1−J. a) Intersection 0, union 6. b) Intersection {3,4} has size 2, union {1,2,3,4,5,6} size 6. c) Identical six-element sets give 6/6. d) Intersection {1} size 1 and union B size 6.",
    "hints": [
      "Count intersection and union separately before subtracting the ratio from 1."
    ],
    "rubric": [
      "All four similarity and distance pairs are correct, with (b) simplified to 1/3 and 2/3."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "J(A,B)=0 and d_J(A,B)=1.",
        "solution": "Disjoint sets give |∩|/|∪|=0/6.",
        "rubric": [
          "Both values correct."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "J(A,B)=1/3 and d_J(A,B)=2/3.",
        "solution": "The intersection size is 2 and union size 6.",
        "rubric": [
          "Both values correct."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "J(A,B)=1 and d_J(A,B)=0.",
        "solution": "The sets are identical, so intersection and union both have size 6.",
        "rubric": [
          "Both values correct."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "J(A,B)=1/6 and d_J(A,B)=5/6.",
        "solution": "Intersection size 1 and union size 6.",
        "rubric": [
          "Both values correct."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-072",
    "mode": "rubric",
    "answer": "For finite sets, with J(∅,∅)=1: a) J(A,A)=1 and d_J(A,A)=0. b) J and d_J are symmetric. c) J(A,B)=1 iff A=B, and d_J(A,B)=0 iff A=B. d) 0≤J≤1 and 0≤d_J≤1. e) d_J(A,C)≤d_J(A,B)+d_J(B,C).",
    "solution": "a) For A≠∅, numerator and denominator both equal |A|; for A=∅ use the stated convention. b) Intersection and union are commutative. c) Since A∩B⊆A∪B, their finite cardinalities are equal iff the sets are equal; distance zero is equivalent to similarity one. d) 0≤|A∩B|≤|A∪B| gives 0≤J≤1, and d_J=1−J gives the same bounds. e) Put X=A∪B∪C and choose a uniformly random total order of X. For nonempty S⊆X let h(S) be its least element in this order, and set h(∅)=*. For any S,T⊆X, Pr(h(S)≠h(T))=d_J(S,T). Indeed, if S∪T is nonempty, its earliest element is uniform; the two least-element values differ exactly when that element lies in S△T, giving probability |S△T|/|S∪T|. If S=T=∅, both sides are 0 by J(∅,∅)=1; if exactly one set is empty, both sides are 1. Finally, h(A)≠h(C) implies h(A)≠h(B) or h(B)≠h(C), since equality is transitive. Event inclusion gives Pr(h(A)≠h(C))≤Pr(h(A)≠h(B))+Pr(h(B)≠h(C)), which is exactly d_J(A,C)≤d_J(A,B)+d_J(B,C).",
    "hints": [
      "For (c), equal numerator and denominator force A∩B=A∪B. For (e), compare the least elements of the three sets in one random order of A∪B∪C; this preserves each Jaccard denominator as a probability."
    ],
    "rubric": [
      "Proves (a)–(d), including ∅ conventions, and for (e) establishes each distance as a least-element collision probability, uses event inclusion, and handles empty sets."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "J(A,A)=1 and d_J(A,A)=0.",
        "solution": "For nonempty A, J=|A|/|A|=1; J(∅,∅)=1 by definition. Then d=1−1=0.",
        "rubric": [
          "Handles empty and nonempty A."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "J(A,B)=J(B,A) and d_J(A,B)=d_J(B,A).",
        "solution": "A∩B=B∩A and A∪B=B∪A; subtraction from 1 preserves equality.",
        "rubric": [
          "Proves both symmetries."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "J(A,B)=1 if and only if A=B; d_J(A,B)=0 if and only if A=B.",
        "solution": "If A=B use (a). If J=1, then |A∩B|=|A∪B| (or both are empty), and finiteness plus A∩B⊆A∪B forces equality of these sets, hence A=B. Finally d=0 iff J=1.",
        "rubric": [
          "Proves both directions and connects the two conditions."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "0≤J(A,B)≤1 and 0≤d_J(A,B)≤1.",
        "solution": "The intersection cardinality lies between 0 and the union cardinality; apply d=1−J.",
        "rubric": [
          "Establishes all bounds."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "d_J(A,C)≤d_J(A,B)+d_J(B,C).",
        "solution": "Choose a uniform random order of the finite set X=A∪B∪C. Let h(S) be the least element of nonempty S, with h(∅)=*. For any S,T, if S∪T≠∅, its earliest element is uniform, and h(S)≠h(T) exactly when that element lies in S△T; hence Pr(h(S)≠h(T))=|S△T|/|S∪T|=d_J(S,T). The same formula holds when S=T=∅, where both sides are 0 because J(∅,∅)=1, and when just one set is empty, where both sides are 1. Since h(A)≠h(C) forces h(A)≠h(B) or h(B)≠h(C), the union bound for these events gives d_J(A,C)≤d_J(A,B)+d_J(B,C).",
        "rubric": [
          "Derives Pr(h(S)≠h(T))=d_J(S,T) with the correct union denominator, covers both-empty and one-empty cases, and applies event inclusion plus the union bound to A,B,C."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-2-073",
    "mode": "rubric",
    "answer": "F̅ = {0.4 Alice, 0.1 Brian, 0.6 Fred, 0.9 Oscar, 0.5 Rita}. R̅ = {0.6 Alice, 0.2 Brian, 0.8 Fred, 0.1 Oscar, 0.3 Rita}.",
    "solution": "Fuzzy complement replaces each membership degree μ by 1−μ. From F degrees (0.6,0.9,0.4,0.1,0.5), subtraction gives (0.4,0.1,0.6,0.9,0.5). From R degrees (0.4,0.8,0.2,0.9,0.7), subtraction gives (0.6,0.2,0.8,0.1,0.3), in Alice, Brian, Fred, Oscar, Rita order.",
    "hints": [
      "Subtract every original degree from 1; do not swap people or take maxima."
    ],
    "rubric": [
      "Both fuzzy complements list all five people with exactly the correct 1−μ degrees."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-074",
    "mode": "rubric",
    "answer": "F ∪ R = {0.6 Alice, 0.9 Brian, 0.4 Fred, 0.9 Oscar, 0.7 Rita}.",
    "solution": "Fuzzy union takes the maximum degree person by person: Alice max(0.6,0.4)=0.6; Brian max(0.9,0.8)=0.9; Fred max(0.4,0.2)=0.4; Oscar max(0.1,0.9)=0.9; Rita max(0.5,0.7)=0.7. This models rich or famous by retaining the stronger degree.",
    "hints": [
      "Compare F and R separately for each person and choose the larger number."
    ],
    "rubric": [
      "Lists all five people with degrees 0.6,0.9,0.4,0.9,0.7 in the stated order."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-2-075",
    "mode": "rubric",
    "answer": "F ∩ R = {0.4 Alice, 0.8 Brian, 0.2 Fred, 0.1 Oscar, 0.5 Rita}.",
    "solution": "Fuzzy intersection takes the minimum degree person by person: Alice min(0.6,0.4)=0.4; Brian min(0.9,0.8)=0.8; Fred min(0.4,0.2)=0.2; Oscar min(0.1,0.9)=0.1; Rita min(0.5,0.7)=0.5. This models rich and famous by retaining the weaker degree.",
    "hints": [
      "Use the smaller membership degree for each person, not the maximum used for union."
    ],
    "rubric": [
      "Lists all five people with degrees 0.4,0.8,0.2,0.1,0.5 in the stated order."
    ],
    "parts": []
  },
  {
    "id": "rosen-ch2-ex-2-3-001",
    "mode": "rubric",
    "answer": "a) f(0)=1/0 is undefined. b) √x is not real for x<0. c) ±√(x²+1) assigns two different real values to every x, rather than exactly one.",
    "solution": "A function from ℝ to ℝ must assign exactly one real output to every real input. Test that condition at every input: division fails at zero, the real square root fails on negative inputs, and the ± sign violates uniqueness.",
    "hints": [
      "Check both existence and uniqueness of the output for every real x."
    ],
    "rubric": [
      "Identifies the zero denominator in (a), negative radicands in (b), and two outputs in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Not a function from ℝ to ℝ because f(0) is undefined.",
        "solution": "At x=0 the denominator is zero, so no real output is assigned.",
        "rubric": [
          "Uses x=0 and the undefined quotient."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Not a function from ℝ to ℝ because √x is undefined in ℝ for every x<0.",
        "solution": "For example, x=−1 would require √−1, which is not real.",
        "rubric": [
          "Identifies some or all negative inputs and the non-real square root."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Not a function because the ± sign gives both √(x²+1) and −√(x²+1).",
        "solution": "Since x²+1>0, these are two distinct values for every x, violating unique assignment.",
        "rubric": [
          "States that every input receives two distinct outputs."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-002",
    "mode": "rubric",
    "answer": "a) No. b) Yes. c) No, because f(2) and f(−2) are undefined.",
    "solution": "For each integer input, require one real output. In (a), ±n gives two values when n≠0. In (b), n²+1≥1 always has a unique nonnegative real square root. In (c), n²−4=0 at n=±2.",
    "hints": [
      "Look first for multiple values and then for zero denominators."
    ],
    "rubric": [
      "Gives No, Yes, No and justifies each using uniqueness, the positive radicand, and n=±2 respectively."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "No; for example, n=1 is assigned both 1 and −1.",
        "solution": "The ± notation is not a single-valued rule except at n=0, so it is not a function on all ℤ.",
        "rubric": [
          "Rejects the rule using two outputs for a nonzero integer."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Yes; √(n²+1) is a unique real number for every integer n.",
        "solution": "The radicand n²+1 is always positive, and √ denotes the unique principal square root.",
        "rubric": [
          "Confirms total definition and single-valuedness."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "No; n=2 and n=−2 make the denominator zero.",
        "solution": "At these inputs 1/(n²−4)=1/0, so the rule does not assign real values throughout ℤ.",
        "rubric": [
          "Identifies both excluded integers."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-003",
    "mode": "rubric",
    "answer": "a) No; strings with no 0 bit have no such position. b) Yes. c) No; a nonempty all-0 string has no 1 bit and is not covered by the empty-string exception.",
    "solution": "The domain is all bit strings, including the empty string and strings containing only one bit value. Counting 1s always gives one integer. A position rule must also handle strings where the requested bit never occurs.",
    "hints": [
      "Test the empty string, all-0 strings, and all-1 strings before deciding."
    ],
    "rubric": [
      "Gives No, Yes, No and uses the missing-bit cases correctly, including the nonempty all-0 counterexample in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "No; for example, S=111 contains no 0 bit, so f(S) is undefined.",
        "solution": "The rule assigns a position only when a 0 occurs, but the domain includes strings with none.",
        "rubric": [
          "Supplies a string with no zero and explains the missing output."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Yes; counting the 1 bits assigns exactly one nonnegative integer to every bit string.",
        "solution": "Every finite bit string has a definite count, with count 0 for the empty string and all-0 strings.",
        "rubric": [
          "States that every bit string has a unique integer count."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "No; for example, S=000 is nonempty but has no first 1 bit.",
        "solution": "Only the empty string receives the fallback value 0, so nonempty all-0 strings remain undefined.",
        "rubric": [
          "Uses a nonempty all-0 counterexample and notes the exception does not cover it."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-004",
    "mode": "rubric",
    "answer": "a) Domain ℕ₀, range {0,1,…,9}. b) Domain ℤ⁺, range {2,3,4,…}. c) Domain all bit strings, range ℕ₀. d) Domain all bit strings, range ℕ₀.",
    "solution": "The domain is exactly the inputs named in the rule; the range is the outputs actually attained. Counting and length can be zero for the empty string, while every decimal last digit and every length can be produced by a suitable input.",
    "hints": [
      "List the allowed inputs first, then ask which output values can actually occur."
    ],
    "rubric": [
      "Each part gives the exact domain and range, including 0 for bit-string counts and lengths and the shifted range in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Domain ℕ₀={0,1,2,…}; range {0,1,2,3,4,5,6,7,8,9}.",
        "solution": "Every nonnegative integer has a last decimal digit, and each digit d occurs for the input d.",
        "rubric": [
          "Gives both sets exactly."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain ℤ⁺; range {n∈ℤ:n≥2}.",
        "solution": "The rule is n↦n+1 for n≥1, so the smallest output is 2 and every larger integer occurs.",
        "rubric": [
          "Uses positive inputs and outputs beginning at 2."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℕ₀.",
        "solution": "A string of k ones produces k for every k≥0, with k=0 given by the empty string.",
        "rubric": [
          "Includes all strings and all nonnegative counts."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℕ₀.",
        "solution": "The output is string length, and a string of k bits realizes every k≥0.",
        "rubric": [
          "Includes the empty string and zero length."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-005",
    "mode": "rubric",
    "answer": "a) Domain all bit strings, range ℤ. b) Domain all bit strings, range {0,2,4,…}. c) Domain all bit strings, range {0,1,…,7}. d) Domain ℤ⁺, range {1,4,9,16,…}.",
    "solution": "In (a), k ones give k and k zeros give −k, so every integer occurs. In (b), twice a zero count is even and nonnegative. In (c), the leftover is length modulo 8. In (d), every positive integer n yields ⌊√n⌋², and input k² yields output k².",
    "hints": [
      "Use simple strings to witness possible outputs; for (d), test inputs that are already squares."
    ],
    "rubric": [
      "All four domains and ranges are exact, including even nonnegative outputs in (b), residues 0–7 in (c), and only positive squares in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℤ.",
        "solution": "The empty string gives 0, k ones give k, and k zeros give −k.",
        "rubric": [
          "Gives all integers and explains attainability."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain all bit strings; range 2ℕ₀={0,2,4,…}.",
        "solution": "A string with k zeros has output 2k, and any k≥0 can be chosen.",
        "rubric": [
          "Gives exactly the even nonnegative integers."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Domain all bit strings; range {0,1,2,3,4,5,6,7}.",
        "solution": "After complete 8-bit blocks are removed, only 0 through 7 bits can remain; strings of each length realize these values.",
        "rubric": [
          "Identifies the length remainder modulo 8 and its full range."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain ℤ⁺; range {k²:k∈ℤ⁺}.",
        "solution": "The output is ⌊√n⌋², always a positive square, and n=k² produces k².",
        "rubric": [
          "Excludes 0 and includes exactly the positive perfect squares."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-006",
    "mode": "rubric",
    "answer": "a) Domain ℤ⁺×ℤ⁺, range ℤ⁺. b) Domain ℤ⁺, range {1,…,9}. c) Domain all bit strings, range ℤ. d) Domain ℤ⁺, range ℤ⁺. e) Domain all bit strings, range {1^k:k≥0}, including the empty string.",
    "solution": "Determine outputs by direct construction. A positive integer always has a nonzero largest digit. In (e), the longest run of ones is itself a string: if there are no ones it is empty, and a run of length k gives 1^k.",
    "hints": [
      "For (e), the output is a string, not the length of the run."
    ],
    "rubric": [
      "All domains and ranges are exact; (b) excludes 0 and (e) returns all finite strings consisting only of ones, including the empty string."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Domain ℤ⁺×ℤ⁺; range ℤ⁺.",
        "solution": "The output is the first coordinate, and (k,1) produces any positive integer k.",
        "rubric": [
          "Gives the product domain and positive-integer range."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain ℤ⁺; range {1,2,3,4,5,6,7,8,9}.",
        "solution": "Every positive integer has a nonzero leading digit, so 0 cannot be its largest digit; input d realizes each listed d.",
        "rubric": [
          "Excludes 0 and includes 1–9."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℤ.",
        "solution": "The empty string gives 0, while k ones and k zeros give k and −k respectively.",
        "rubric": [
          "Gives all bit strings and all integers."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain ℤ⁺; range ℤ⁺.",
        "solution": "The rule is n↦⌊√n⌋; this is at least 1, and n=k² gives k.",
        "rubric": [
          "Gives positive integers for both sets."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Domain all bit strings; range {ε,1,11,111,…}={1^k:k≥0}.",
        "solution": "A longest run of k ones is the string 1^k; with no ones the longest such string is ε, the empty string.",
        "rubric": [
          "Treats outputs as strings and includes the empty string."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-007",
    "mode": "rubric",
    "answer": "a) Domain ℤ⁺×ℤ⁺, range ℤ⁺. b) Domain ℤ⁺, range {0,1,…,9}. c) Domain all bit strings, range ℕ₀. d) Domain all bit strings, range ℕ₀.",
    "solution": "For (b), at most nine digits can be absent because at least one decimal digit occurs. For (c), a string of k copies of 11 realizes k occurrences (overlapping occurrences are counted). For (d), all-0 strings give 0 and 0^(k−1)1 gives first position k.",
    "hints": [
      "A positive integer cannot be missing all ten digits; an empty or all-0 bit string gives position 0 in (d)."
    ],
    "rubric": [
      "Each domain and range is exact, with 0–9 rather than 0–10 in (b) and nonnegative integers in (c) and (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Domain ℤ⁺×ℤ⁺; range ℤ⁺.",
        "solution": "The maximum is positive, and (k,k) produces every positive integer k.",
        "rubric": [
          "Gives both sets exactly."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain ℤ⁺; range {0,1,2,3,4,5,6,7,8,9}.",
        "solution": "The output is 10 minus the number of distinct digits present. At least one is present; 1234567890 gives 0 absent digits, and 111…1 with a suitable single nonzero digit gives 9.",
        "rubric": [
          "Gives 0 through 9 and explains why 10 is impossible."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℕ₀.",
        "solution": "Every occurrence count is nonnegative; the empty string gives 0 and a length-(k+1) all-1 string gives k overlapping blocks 11.",
        "rubric": [
          "Includes zero and shows every nonnegative count occurs."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain all bit strings; range ℕ₀.",
        "solution": "All-0 strings, including the empty string, give 0; for k≥1, the string 0^(k−1)1 has its first 1 at position k.",
        "rubric": [
          "Gives all strings and all nonnegative positions including the fallback 0."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-008",
    "mode": "auto",
    "answer": "a) 1; b) 2; c) −1; d) 0; e) 3; f) −2; g) 1; h) 2.",
    "solution": "Read ⌊x⌋ as the greatest integer at most x and ⌈x⌉ as the least integer at least x. Evaluate inner operations first: (g) ⌊1/2+1⌋=1, and (h) ⌈0+1+1/2⌉=2.",
    "hints": [
      "On the number line, floor moves left and ceiling moves right, including for negative numbers."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "The greatest integer ≤1.1 is 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "The least integer ≥1.1 is 2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "-1",
        "checker": "number",
        "solution": "The greatest integer ≤−0.1 is −1, not 0."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "0",
        "checker": "number",
        "solution": "The least integer ≥−0.1 is 0."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "The least integer ≥2.99 is 3."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "-2",
        "checker": "number",
        "solution": "The least integer ≥−2.99 is −2."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "⌈1/2⌉=1, so ⌊1/2+1⌋=⌊3/2⌋=1."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "⌊1/2⌋=0 and ⌈1/2⌉=1, so ⌈0+1+1/2⌉=2."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-009",
    "mode": "auto",
    "answer": "a) 1; b) 0; c) 0; d) −1; e) 3; f) −1; g) 2; h) 1.",
    "solution": "Use floor and ceiling directly, remembering that integers are unchanged. For (g), ⌊1/2+⌈3/2⌉⌋=⌊1/2+2⌋=2. For (h), ⌊(1/2)⌊5/2⌋⌋=⌊(1/2)·2⌋=1.",
    "hints": [
      "Simplify inside the brackets before applying the outer floor or ceiling."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "0<3/4<1, so its ceiling is 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "0",
        "checker": "number",
        "solution": "0<7/8<1, so its floor is 0."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "0",
        "checker": "number",
        "solution": "−1<−3/4<0, so its ceiling is 0."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "-1",
        "checker": "number",
        "solution": "−1<−7/8<0, so its floor is −1."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "The ceiling of an integer is itself."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "-1",
        "checker": "number",
        "solution": "The floor of an integer is itself."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "⌈3/2⌉=2 and ⌊1/2+2⌋=⌊5/2⌋=2."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "⌊5/2⌋=2, leaving ⌊(1/2)·2⌋=⌊1⌋=1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-010",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) No.",
    "solution": "A finite-table function is one-to-one exactly when its four listed outputs are distinct. In (b), a and b both map to b; in (c), a and d both map to d.",
    "hints": [
      "Compare the output list for repeated values."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "accepted": [
          "yes"
        ],
        "checker": "text",
        "solution": "The outputs b,a,c,d are all different."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "no"
        ],
        "checker": "text",
        "solution": "f(a)=f(b)=b, so distinct inputs share an output."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "no"
        ],
        "checker": "text",
        "solution": "f(a)=f(d)=d, so the function is not one-to-one."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-011",
    "mode": "auto",
    "answer": "a",
    "accepted": [
      "(a)",
      "Exercise 10(a)"
    ],
    "checker": "text",
    "solution": "Only (a) is onto. Its range is {a,b,c,d}; (b) has range {b,c,d} and (c) has range {b,c,d}, so both omit a.",
    "hints": [
      "List the actual outputs and check whether every element of {a,b,c,d} appears."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-012",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) Yes; d) No.",
    "solution": "For (a), n−1=m−1 implies n=m. For (b), f(1)=f(−1). For (c), integer cube roots are unique, or n³−m³=(n−m)(n²+nm+m²) forces n=m. For (d), f(1)=f(2)=1.",
    "hints": [
      "Try to recover n from the output; if that fails, look for two inputs with the same output."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "Adding 1 to both sides of n−1=m−1 gives n=m."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "f(1)=f(−1)=2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "Cubing is strictly increasing on ℤ, so equal cubes imply equal inputs."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "⌈1/2⌉=⌈2/2⌉=1, so inputs 1 and 2 collide."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-013",
    "mode": "auto",
    "answer": "a and d",
    "accepted": [
      "a,d",
      "a, d",
      "(a) and (d)"
    ],
    "checker": "text",
    "solution": "(a) is onto because k=f(k+1). (b) is not onto because n²+1≥1, so 0 has no preimage. (c) is not onto because 2 is not an integer cube. (d) is onto because f(2k)=k for every integer k.",
    "hints": [
      "For each target integer k, either solve f(n)=k or exhibit a k with no solution."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-014",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) Yes; d) Yes; e) No.",
    "solution": "Onto means every integer k is an output. Use (m,n)=(0,−k) in (a), (k,−1) in (c), and choose |m|−|n|=k by making one term zero in (d). In (b), m²−n²=(m−n)(m+n) has factors of equal parity, so 2 is unattainable. In (e), k=1 would require m²=5.",
    "hints": [
      "Try simple pairs with one coordinate zero; for failures, inspect parity or solve for a missing output."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "For any k∈ℤ, f(0,−k)=k."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "The factors m−n and m+n have the same parity, so their product cannot be 2 (which is 2 modulo 4)."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "For any k∈ℤ, f(k,−1)=k."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "If k≥0 use (k,0); if k<0 use (0,−k). Both give output k."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "The value 1 is omitted because m²−4=1 would require m²=5, impossible for an integer m."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-015",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) Yes; d) No; e) Yes.",
    "solution": "For any integer k, (a) uses (k,0), (c) uses (k,0), and (e) uses (k,0). Sums of squares and absolute values are nonnegative, so (b) and (d) omit every negative integer.",
    "hints": [
      "Check whether negative codomain elements can occur, and use n=0 for the simple linear rules."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "f(k,0)=k for every integer k."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "m²+n²≥0, so −1 has no preimage."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "f(k,0)=k for every integer k."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "|n|≥0, so no negative integer is in the range."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "f(k,0)=k for every integer k."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-016",
    "mode": "rubric",
    "answer": "a) No two students share a mobile phone number. b) All student identification numbers are distinct. c) No two students receive the same final grade. d) No two students have the same home town.",
    "solution": "One-to-one means different students must receive different assigned values. Translate that requirement separately for each kind of value; it does not require the values to have any special format beyond uniqueness within this class.",
    "hints": [
      "Negate a collision: two different students with the same assigned value."
    ],
    "rubric": [
      "Each part states the correct no-shared-value condition for the named attribute."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Exactly when every student in the class has a different mobile phone number.",
        "solution": "A shared number would give two distinct inputs the same output.",
        "rubric": [
          "Requires pairwise-distinct phone numbers within the class."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Exactly when no two students have the same student identification number.",
        "solution": "Distinct ID outputs for distinct students are precisely injectivity.",
        "rubric": [
          "Requires unique student IDs."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Exactly when all final grades in the class are distinct (there are no ties).",
        "solution": "Any tied grade produces a collision.",
        "rubric": [
          "Requires no equal final grades."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Exactly when no two students have the same home town.",
        "solution": "A shared home town would violate one-to-oneness.",
        "rubric": [
          "Requires pairwise-distinct home towns."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-017",
    "mode": "rubric",
    "answer": "a) No two teachers share an office. b) No two teachers are assigned the same bus. c) No two teachers have the same salary. d) All teachers have distinct social security numbers.",
    "solution": "For each rule, prohibit exactly the collisions that would map different teachers to the same output. The condition concerns teachers in this school, not uniqueness in the entire world unless the attribute already guarantees it.",
    "hints": [
      "Ask what must be unique among the school's teachers for each assignment."
    ],
    "rubric": [
      "States the correct distinct-office, distinct-bus, distinct-salary, and distinct-SSN conditions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Exactly when each teacher has a different office from every other teacher.",
        "solution": "An office shared by two teachers would be a repeated output.",
        "rubric": [
          "Requires distinct offices."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Exactly when no two teachers are assigned to chaperone the same bus.",
        "solution": "Different teachers must map to different buses.",
        "rubric": [
          "Requires distinct bus assignments."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Exactly when all teachers' salaries are different.",
        "solution": "Equal salaries for two teachers would violate injectivity.",
        "rubric": [
          "Requires pairwise-distinct salaries."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Exactly when no two teachers have the same social security number.",
        "solution": "Distinct teachers must have distinct SSN outputs.",
        "rubric": [
          "Requires unique social security numbers."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-018",
    "mode": "rubric",
    "answer": "One valid choice is: a) the set of all telephone numbers; onto iff every telephone number is some class student's mobile number. b) The set of all student ID numbers; onto iff every such ID belongs to some student in the class. c) The set of all possible final grades; onto iff every grade is earned by at least one student. d) The set of all towns; onto iff every town is the home town of at least one class student.",
    "solution": "A codomain may be any set containing all outputs. With each chosen codomain, onto means there are no unused codomain elements. Choosing the actual range instead would make each function onto automatically, but the larger sets above give a nontrivial condition.",
    "hints": [
      "After choosing a codomain, compare it with the set of values actually used by the class."
    ],
    "rubric": [
      "Provides a valid codomain for each of the four functions and states onto as exhaustion of that same chosen codomain; equivalent codomain choices are acceptable."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Codomain: all telephone numbers. Onto iff every telephone number is used as a mobile number by at least one student in the class.",
        "solution": "Every codomain element must have a student preimage.",
        "rubric": [
          "Pairs a valid telephone-number codomain with the exact coverage condition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Codomain: all student identification numbers. Onto iff every such number belongs to at least one student in the class.",
        "solution": "No ID in the chosen codomain may be left unused.",
        "rubric": [
          "Pairs a valid ID codomain with full coverage."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Codomain: all possible final grades. Onto iff every possible grade is received by at least one student.",
        "solution": "The range must equal the whole grade codomain.",
        "rubric": [
          "Pairs a valid grade codomain with the condition that every grade occurs."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Codomain: all towns. Onto iff every town is the home town of at least one student in the class.",
        "solution": "Onto requires every town in the selected codomain to be attained.",
        "rubric": [
          "Pairs a valid town codomain with the exact coverage condition."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-019",
    "mode": "rubric",
    "answer": "One valid choice is: a) the set of all offices; onto iff every office is assigned to at least one teacher. b) The set of all buses on the trip; onto iff every bus has at least one assigned teacher. c) The set of all possible salaries; onto iff every salary is earned by at least one teacher. d) The set of all social security numbers; onto iff every SSN belongs to at least one teacher at the school.",
    "solution": "Onto depends on the chosen codomain. For each choice, state that every element of that codomain occurs as an output. Restricting a codomain to the actual range would make the function onto without further conditions.",
    "hints": [
      "Use the same codomain in both halves of each answer, then require that none of its elements is unused."
    ],
    "rubric": [
      "Gives four valid codomains and the corresponding exhaustive-coverage conditions; other valid codomain choices are acceptable."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Codomain: all offices. Onto iff every office is assigned to at least one teacher at the school.",
        "solution": "This says the office range equals the chosen codomain.",
        "rubric": [
          "Gives a valid codomain and full office coverage."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Codomain: all buses used on the field trip. Onto iff every bus has at least one teacher assigned to chaperone it.",
        "solution": "No bus in the codomain may lack a teacher preimage.",
        "rubric": [
          "Gives a valid bus codomain and the every-bus condition."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Codomain: all possible salaries. Onto iff every possible salary is paid to at least one teacher.",
        "solution": "Every salary value in the codomain must occur.",
        "rubric": [
          "Gives a valid salary codomain and full coverage."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Codomain: all social security numbers. Onto iff every social security number belongs to at least one teacher at the school.",
        "solution": "The SSN range must equal the entire selected codomain.",
        "rubric": [
          "Gives a valid SSN codomain and the corresponding onto condition."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-020",
    "mode": "rubric",
    "answer": "Using ℕ={0,1,2,…}: a) f(n)=n+1. b) f(n)=⌊n/2⌋. c) Swap adjacent pairs: f(2k)=2k+1 and f(2k+1)=2k for k≥0. d) f(n)=0.",
    "solution": "Verify each example rather than relying on its label. (a) misses 0 but is injective. (b) hits every k at n=2k, while 0 and 1 collide. (c) is its own inverse, so it is a nonidentity bijection. (d) has collisions and misses every positive integer.",
    "hints": [
      "A shift can miss an output, pairing adjacent inputs can create collisions, and a transposition can be a nonidentity bijection."
    ],
    "rubric": [
      "Each supplied function maps ℕ to ℕ and is verified to have exactly the requested injectivity/onto properties; (c) is not the identity."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f(n)=n+1.",
        "solution": "If n+1=m+1 then n=m, so it is one-to-one; 0 has no preimage, so it is not onto.",
        "rubric": [
          "Gives and verifies an injective non-onto example."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f(n)=⌊n/2⌋.",
        "solution": "Every k∈ℕ equals f(2k), so it is onto; f(0)=f(1)=0, so it is not one-to-one.",
        "rubric": [
          "Gives and verifies an onto non-injective example."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "f(2k)=2k+1 and f(2k+1)=2k for every k∈ℕ.",
        "solution": "Applying f twice returns each input, so f is a bijection; f(0)=1 shows it is not the identity.",
        "rubric": [
          "Defines adjacent-pair swapping or an equivalent nonidentity bijection and verifies both properties."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "f(n)=0 for all n∈ℕ.",
        "solution": "Distinct inputs collide, and no positive output is attained.",
        "rubric": [
          "Gives and verifies an example with neither property."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-021",
    "mode": "rubric",
    "answer": "a) f(n)=4n+2 for n≥0 and f(n)=−4n for n<0. b) f(n)=|n|+1. c) f(n)=2n+1 for n≥0 and f(n)=−2n for n<0. d) f(n)=1.",
    "solution": "All formulas map ℤ into positive integers. In (a), nonnegative inputs give 2,6,10,… and negative inputs give 4,8,12,…, so outputs are unique but 1 is missed. In (b), k=f(k−1) for every positive k, while n and −n collide. In (c), positive odd outputs decode to n=(y−1)/2 and positive even outputs to n=−y/2. In (d), 2 is missed and all inputs collide.",
    "hints": [
      "Encode nonnegative and negative integers separately; scaling the encoding can leave gaps for (a)."
    ],
    "rubric": [
      "Every formula has domain ℤ and positive-integer outputs, and each is proved to have exactly the requested properties."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f(n)=4n+2 if n≥0; f(n)=−4n if n<0.",
        "solution": "The two branches give disjoint arithmetic progressions 2,6,10,… and 4,8,12,…, each strictly determined by n. Thus f is one-to-one, but 1 is not an output.",
        "rubric": [
          "Provides and verifies a positive-integer-valued injection that omits a positive integer."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f(n)=|n|+1.",
        "solution": "For every positive integer k, f(k−1)=k, so f is onto; f(1)=f(−1)=2, so it is not one-to-one.",
        "rubric": [
          "Provides and verifies an onto non-injective formula."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "f(n)=2n+1 if n≥0; f(n)=−2n if n<0.",
        "solution": "The outputs are respectively positive odd and positive even integers. Every positive y has exactly one preimage: (y−1)/2 if y is odd and −y/2 if y is even.",
        "rubric": [
          "Provides a bijective formula and a valid decoding argument."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "f(n)=1 for all n∈ℤ.",
        "solution": "It is not one-to-one because 0 and 1 collide, and not onto because 2 has no preimage.",
        "rubric": [
          "Provides and verifies a formula with neither property."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-022",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) No; d) Yes.",
    "solution": "(a) has inverse y↦(4−y)/3. (b) is not one-to-one because x and −x collide. (c) is not even a function from ℝ to ℝ because x=−2 is excluded. (d) has inverse y↦∛(y−1).",
    "hints": [
      "Check that the rule is defined on all ℝ, then try to solve y=f(x) uniquely for x."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "For each real y, exactly one x=(4−y)/3 satisfies y=−3x+4."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "f(1)=f(−1)=4, so it is not one-to-one."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "At x=−2 the denominator is zero, so this is not a function from all ℝ to ℝ and cannot be such a bijection."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "Every real y has exactly one preimage x=∛(y−1), making f both one-to-one and onto."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-023",
    "mode": "auto",
    "answer": "a) Yes; b) No; c) Yes; d) No.",
    "solution": "Solve y=f(x) for a unique real x where possible. (a) has inverse (y−1)/2 and (c) has inverse ∛y. (b) and (d) both collide at x and −x; additionally, (b) has range [1,∞) and (d) has range [1/2,1), not ℝ.",
    "hints": [
      "A pair x and −x with the same output immediately rules out a bijection."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "Each real y has the unique preimage x=(y−1)/2."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "f(1)=f(−1)=2, and values below 1 are also unattained."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "Yes",
        "checker": "text",
        "solution": "Each real y has exactly one real cube root, so x=∛y is its unique preimage."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "No",
        "checker": "text",
        "solution": "f(1)=f(−1)=2/3; moreover 0≤(x²+1)/(x²+2)<1 and the range is only [1/2,1)."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-024",
    "mode": "rubric",
    "answer": "For x<y, f(x)<f(y) iff 1/f(x)>1/f(y); hence f is strictly increasing iff g=1/f is strictly decreasing.",
    "solution": "Take arbitrary x<y. Because f(x),f(y)>0, taking reciprocals reverses a strict inequality: f(x)<f(y) ⇔ 1/f(x)>1/f(y) ⇔ g(x)>g(y). The middle equivalence is exactly the required monotonicity condition in both directions.",
    "hints": [
      "Fix x<y and take reciprocals of positive quantities, remembering that the inequality reverses."
    ],
    "rubric": [
      "Uses positivity to reverse strict inequalities under reciprocation and proves both directions of the iff for arbitrary x<y."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-025",
    "mode": "rubric",
    "answer": "For x<y, f(x)>f(y) iff 1/f(x)<1/f(y); hence f is strictly decreasing iff g=1/f is strictly increasing.",
    "solution": "For arbitrary x<y, positivity gives f(x)>f(y) ⇔ 1/f(x)<1/f(y) ⇔ g(x)<g(y). Thus strict decrease of f is equivalent, in both directions, to strict increase of g.",
    "hints": [
      "Reciprocation reverses order for positive values; write the equivalence for x<y."
    ],
    "rubric": [
      "Proves the equivalence for arbitrary x<y using positive reciprocals and obtains both monotonicity directions."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-026",
    "mode": "rubric",
    "answer": "a) If x≠y, order them so x<y; strict increase gives f(x)<f(y), hence f(x)≠f(y), so f is one-to-one. b) f(x)=0 is increasing (nondecreasing) but not one-to-one.",
    "solution": "Injectivity is proved by turning unequal inputs into unequal outputs. For the example, nondecreasing means x<y implies f(x)≤f(y), which a constant function satisfies with equality.",
    "hints": [
      "Strict monotonicity gives a strict output inequality; non-strict monotonicity permits plateaus."
    ],
    "rubric": [
      "Part (a) proves unequal outputs for either input order; part (b) supplies a valid nondecreasing non-injective example and verifies it."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Every strictly increasing f:ℝ→ℝ is one-to-one.",
        "solution": "If x≠y, assume without loss of generality that x<y. Then f(x)<f(y), so f(x)≠f(y).",
        "rubric": [
          "Uses strict increase to prove injectivity for arbitrary unequal inputs."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f(x)=0 for all real x.",
        "solution": "It is nondecreasing because 0≤0 whenever x<y, but f(0)=f(1), so it is not one-to-one.",
        "rubric": [
          "Gives a nondecreasing function with an explicit collision."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-027",
    "mode": "rubric",
    "answer": "a) If x<y, strict decrease gives f(x)>f(y), so unequal inputs have unequal outputs and f is one-to-one. b) f(x)=0 is decreasing (nonincreasing) but not one-to-one.",
    "solution": "Order two unequal real inputs and apply the strict definition. For (b), nonincreasing allows equality everywhere, so a constant function works.",
    "hints": [
      "Use the output inequality in the decreasing direction; distinguish strictly decreasing from nonincreasing."
    ],
    "rubric": [
      "Proves injectivity in (a) and supplies and verifies a nonincreasing non-injective example in (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Every strictly decreasing f:ℝ→ℝ is one-to-one.",
        "solution": "For x≠y, take x<y without loss of generality. Strict decrease gives f(x)>f(y), hence f(x)≠f(y).",
        "rubric": [
          "Uses strict decrease to rule out equal outputs."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f(x)=0 for all real x.",
        "solution": "It is nonincreasing since 0≥0 for x<y, but f(0)=f(1) shows it is not one-to-one.",
        "rubric": [
          "Gives a nonincreasing function and a collision."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-028",
    "mode": "rubric",
    "answer": "eˣ:ℝ→ℝ is not onto (for example, 0 has no preimage), so it is not invertible. With codomain (0,∞), it is both one-to-one and onto, with inverse ln:(0,∞)→ℝ.",
    "solution": "Although eˣ is one-to-one, its outputs are always positive, so codomain ℝ contains unattained values. For every y>0, x=ln y is the unique real solution of eˣ=y; moreover e^(ln y)=y and ln(eˣ)=x.",
    "hints": [
      "Invertibility requires both injectivity and surjectivity onto the stated codomain."
    ],
    "rubric": [
      "Explains failure onto ℝ and proves the restricted function is bijective, including the logarithm inverse."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-029",
    "mode": "rubric",
    "answer": "|x|:ℝ→[0,∞) is not one-to-one because |1|=|−1|, so it is not invertible. Restricting the domain to [0,∞) gives the identity on [0,∞), which is invertible with inverse f⁻¹(y)=y.",
    "solution": "The original function is onto the nonnegative reals but identifies x and −x. After restriction, every y≥0 has exactly one preimage x=y in [0,∞), and composition in either order returns the input.",
    "hints": [
      "A codomain restriction cannot repair a collision; restricting the domain to one sign can."
    ],
    "rubric": [
      "Identifies the original ± collision and proves the nonnegative-domain restriction is bijective with the correct inverse."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-030",
    "mode": "auto",
    "answer": "a) {1}; b) {−1,1,5,9,15}; c) {0,1,2}; d) {0,1,5,16}.",
    "solution": "f(S) means the set of outputs, so evaluate at each element of S={−1,0,2,4,7} and remove duplicates. For (c), ceilings are 0,0,1,1,2. For (d), floors are 0,0,1,5,16.",
    "hints": [
      "Evaluate all five inputs, then write each distinct output only once."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{1}",
        "checker": "set",
        "solution": "Every input maps to 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{-1,1,5,9,15}",
        "checker": "set",
        "solution": "The values 2x+1 are −1,1,5,9,15 in input order."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{0,1,2}",
        "checker": "set",
        "solution": "The values ⌈x/5⌉ are 0,0,1,1,2; duplicates collapse."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{0,1,5,16}",
        "checker": "set",
        "solution": "The values ⌊(x²+1)/3⌋ are 0,0,1,5,16."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-031",
    "mode": "auto",
    "answer": "a) {0,1,3}; b) {0,1,3,5,8}; c) {0,8,16,40}; d) {1,12,33,65}.",
    "solution": "For each x, compute x², divide by 3, and take the floor; then collect distinct values. In input order the outputs are (a) 1,0,0,0,1,3; (b) 0,0,1,3,5,8; (c) 0,8,16,40; (d) 1,12,33,65.",
    "hints": [
      "Square first, then apply floor; do not round the quotient to the nearest integer."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{0,1,3}",
        "checker": "set",
        "solution": "The output list is 1,0,0,0,1,3, whose distinct values are 0,1,3."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "{0,1,3,5,8}",
        "checker": "set",
        "solution": "The output list is 0,0,1,3,5,8."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "{0,8,16,40}",
        "checker": "set",
        "solution": "⌊1/3⌋=0, ⌊25/3⌋=8, ⌊49/3⌋=16, and ⌊121/3⌋=40."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "{1,12,33,65}",
        "checker": "set",
        "solution": "⌊4/3⌋=1, ⌊36/3⌋=12, ⌊100/3⌋=33, and ⌊196/3⌋=65."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-032",
    "mode": "rubric",
    "answer": "a) f(ℤ)=2ℤ={2k:k∈ℤ}. b) f(ℕ)={2k:k∈ℕ}, the even natural numbers. c) f(ℝ)=ℝ.",
    "solution": "The image f(S) is {2x:x∈S}. Multiplying integers by 2 gives exactly even integers, and multiplying natural numbers by 2 gives even natural numbers. For any real y, y=f(y/2), so the real image is all ℝ.",
    "hints": [
      "Describe {2x:x∈S} for each S; for (c), divide an arbitrary target real by 2."
    ],
    "rubric": [
      "Gives exactly the even integers, even natural numbers, and all real numbers respectively, with correct image notation."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "2ℤ={…,−4,−2,0,2,4,…}.",
        "solution": "Every output is even, and every even integer 2k comes from k∈ℤ.",
        "rubric": [
          "Identifies all and only even integers."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "{2k:k∈ℕ}={0,2,4,…} when ℕ includes 0.",
        "solution": "These are exactly the doubles of natural numbers.",
        "rubric": [
          "Gives the even natural numbers with the same ℕ convention as the exercise."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "ℝ.",
        "solution": "For arbitrary y∈ℝ, y/2 is real and f(y/2)=y.",
        "rubric": [
          "Proves every real number is attained."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-033",
    "mode": "rubric",
    "answer": "a) If f(g(a₁))=f(g(a₂)), injectivity of f gives g(a₁)=g(a₂), then injectivity of g gives a₁=a₂. b) For c∈C, onto f gives b∈B with f(b)=c, and onto g gives a∈A with g(a)=b; hence (f∘g)(a)=c.",
    "solution": "Read f∘g from right to left: apply g first, then f. For injectivity, peel off f and then g. For surjectivity, construct a preimage by working backward from C through B to A.",
    "hints": [
      "For (a), start with equal composite outputs; for (b), start with an arbitrary element of C."
    ],
    "rubric": [
      "Part (a) applies both injectivity hypotheses in the correct order; part (b) constructs a composite preimage for every c∈C."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f∘g is one-to-one whenever f and g are one-to-one.",
        "solution": "Suppose f(g(a₁))=f(g(a₂)). Since f is one-to-one, g(a₁)=g(a₂); since g is one-to-one, a₁=a₂.",
        "rubric": [
          "Derives a₁=a₂ using f first and g second."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f∘g is onto whenever f and g are onto.",
        "solution": "Given c∈C, choose b∈B with f(b)=c, then a∈A with g(a)=b. Thus (f∘g)(a)=f(b)=c.",
        "rubric": [
          "Uses both onto hypotheses to produce a preimage of every c."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-034",
    "mode": "rubric",
    "answer": "a) Onto f∘g implies onto f. b) One-to-one f∘g implies one-to-one g. c) If f∘g is bijective, then g is onto iff f is one-to-one.",
    "solution": "For (a), a preimage under the composition supplies b=g(a) with f(b)=c. For (b), apply f to an equality g(a₁)=g(a₂). For (c), the composite hypotheses already make f onto and g one-to-one; combine these with the stated additional hypothesis in each direction.",
    "hints": [
      "In (c), separate what the bijectivity of f∘g already proves from what each extra assumption adds."
    ],
    "rubric": [
      "All three proofs use the composition order correctly; (c) proves both directions, not merely one implication."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If f∘g is onto, then f is onto.",
        "solution": "For c∈C, choose a∈A with f(g(a))=c. Then b=g(a)∈B satisfies f(b)=c.",
        "rubric": [
          "Constructs an f-preimage in B for every c∈C."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If f∘g is one-to-one, then g is one-to-one.",
        "solution": "If g(a₁)=g(a₂), then f(g(a₁))=f(g(a₂)). Injectivity of f∘g gives a₁=a₂.",
        "rubric": [
          "Derives injectivity of g from equal g outputs."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Assuming f∘g is bijective, g is onto iff f is one-to-one.",
        "solution": "If g is onto and f(b₁)=f(b₂), write bᵢ=g(aᵢ); composite injectivity gives a₁=a₂, hence b₁=b₂. Conversely, if f is one-to-one and b∈B, composite surjectivity gives a with f(g(a))=f(b), so g(a)=b.",
        "rubric": [
          "Proves both directions using composite injectivity/surjectivity and the respective added hypothesis."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-035",
    "mode": "rubric",
    "answer": "Take A=C={0}, B={0,1}, g:A→B with g(0)=0, and f:B→C with f(0)=f(1)=0. Then f∘g:A→C is the identity bijection, but g is not onto and f is not one-to-one.",
    "solution": "The element 1∈B has no g-preimage, so g is not onto. Also f(0)=f(1) with 0≠1, so f is not one-to-one. Yet (f∘g)(0)=0 on the one-element sets A and C, making the composite a bijection.",
    "hints": [
      "Let the unused element of B be hidden by a collapsing f after an injective but non-onto g."
    ],
    "rubric": [
      "Defines compatible domains, codomains, and both rules; verifies that the composite is bijective, g is not onto, and f is not one-to-one."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-036",
    "mode": "rubric",
    "answer": "Yes. If g(a₁)=g(a₂), then (f∘g)(a₁)=(f∘g)(a₂); injectivity of f∘g gives a₁=a₂. The assumption that f is one-to-one is not needed.",
    "solution": "Start with equal outputs of g and apply f to both sides. The resulting equal composite outputs force equal inputs because f∘g is one-to-one, proving g is one-to-one.",
    "hints": [
      "Only the composite's injectivity is needed; begin with g(a₁)=g(a₂)."
    ],
    "rubric": [
      "Answers yes and gives a valid direct proof, with or without noting that injectivity of f is redundant."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-037",
    "mode": "rubric",
    "answer": "No. With A=C={0}, B={0,1}, define g(0)=0 and f(0)=f(1)=0. Then f and f∘g are onto, but g is not onto because 1∈B has no preimage.",
    "solution": "Both f:B→C and f∘g:A→C attain the only element of C, so both are onto. However, g:A→B attains only 0, showing that onto hypotheses on f and the composite do not force g onto.",
    "hints": [
      "Try a one-element final codomain and let g omit an element of the intermediate set."
    ],
    "rubric": [
      "Answers no with compatible explicit functions and verifies both onto claims and the failure of g to be onto."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-038",
    "mode": "rubric",
    "answer": "(f∘g)(x)=(x+2)²+1=x²+4x+5 and (g∘f)(x)=x²+3.",
    "solution": "Composition means substitute the entire inner output. For f∘g, replace x in x²+1 by x+2. For g∘f, replace x in x+2 by x²+1, giving x²+1+2=x²+3.",
    "hints": [
      "Read f∘g as “g first, f second”; parentheses around the inner expression prevent order errors."
    ],
    "rubric": [
      "Gives both compositions in the correct order and correctly expands or equivalently expresses f∘g."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-039",
    "mode": "rubric",
    "answer": "As printed, Exercise 39 refers to Exercise 36, which gives no explicit formulas for f and g, so f+g and fg cannot be determined from that reference. If Exercise 38 was intended, then (f+g)(x)=x²+x+3 and (fg)(x)=(x²+1)(x+2)=x³+2x²+x+2.",
    "solution": "Preserve the source cross-reference: Exercise 36 concerns abstract one-to-one functions and does not define formulas, so no unique sum or product follows. Separately, using the explicit f(x)=x²+1 and g(x)=x+2 from Exercise 38 gives f+g=(x²+1)+(x+2) and fg=(x²+1)(x+2), simplified as above.",
    "hints": [
      "Check the referenced exercise before computing; do not silently change its number."
    ],
    "rubric": [
      "Explicitly preserves the Exercise 36 reference and states underdetermination; may additionally give the correct conditional formulas if Exercise 38 was intended."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-040",
    "mode": "rubric",
    "answer": "The necessary and sufficient condition is ad+b=bc+d, equivalently d(a−1)=b(c−1).",
    "solution": "Compute (f∘g)(x)=a(cx+d)+b=acx+ad+b and (g∘f)(x)=c(ax+b)+d=acx+bc+d. Their x coefficients already agree. Equality for every real x therefore holds exactly when the constant terms satisfy ad+b=bc+d.",
    "hints": [
      "Expand both composites and compare coefficients; the acx terms cancel."
    ],
    "rubric": [
      "Derives both composite formulas and gives exactly ad+b=bc+d (or an equivalent condition), with no extra restrictions on a or c."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-041",
    "mode": "rubric",
    "answer": "f(x)=ax+b with a≠0 is invertible, and f⁻¹(y)=(y−b)/a.",
    "solution": "For each real y, solve y=ax+b to obtain the unique x=(y−b)/a; this proves both one-to-one and onto. Verify f(f⁻¹(y))=a((y−b)/a)+b=y and f⁻¹(f(x))=((ax+b)−b)/a=x.",
    "hints": [
      "Solve y=ax+b for x; division is valid precisely because a≠0."
    ],
    "rubric": [
      "Finds the correct inverse and establishes invertibility by unique solution or both composition identities, using a≠0."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-042",
    "mode": "rubric",
    "answer": "a) f(S∪T)=f(S)∪f(T). b) f(S∩T)⊆f(S)∩f(T).",
    "solution": "For (a), y is in either side exactly when some input x with f(x)=y lies in S or in T. For (b), if y=f(x) with x∈S∩T, then the same x witnesses both y∈f(S) and y∈f(T). Reverse inclusion need not hold because the two witnesses might differ.",
    "hints": [
      "Translate image membership y∈f(U) into “some x∈U has f(x)=y.”"
    ],
    "rubric": [
      "Part (a) proves both directions of union equality; part (b) proves intersection inclusion using one common preimage."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f(S∪T)=f(S)∪f(T).",
        "solution": "y∈f(S∪T) iff ∃x(x∈S∪T and f(x)=y), which is iff (∃s∈S with f(s)=y) or (∃t∈T with f(t)=y), exactly y∈f(S)∪f(T).",
        "rubric": [
          "Uses existential witnesses and proves both inclusions."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f(S∩T)⊆f(S)∩f(T).",
        "solution": "If y∈f(S∩T), choose x∈S∩T with f(x)=y. Since x belongs to both S and T, y belongs to both f(S) and f(T).",
        "rubric": [
          "Shows membership in both images using the same x."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-043",
    "mode": "rubric",
    "answer": "a) Let f:{0,1}→{0} be constant, S={0}, T={1}; then f(S∩T)=∅ but f(S)∩f(T)={0}. b) If f is one-to-one, the inclusion is equality.",
    "solution": "In (a), S∩T is empty while each separate image is {0}. In (b), only the reverse inclusion remains: if y∈f(S)∩f(T), choose s∈S and t∈T with f(s)=f(t)=y. Injectivity gives s=t∈S∩T, so y∈f(S∩T).",
    "hints": [
      "For a proper inclusion, make two different inputs share an output; for equality, injectivity forces the witnesses to coincide."
    ],
    "rubric": [
      "Provides a correct proper-inclusion example and proves the reverse inclusion under injectivity."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f:{0,1}→{0}, f(0)=f(1)=0, with S={0}, T={1}.",
        "solution": "f(S∩T)=f(∅)=∅, whereas f(S)∩f(T)={0}∩{0}={0}.",
        "rubric": [
          "Gives explicit sets and a function with empty left side and nonempty right side."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If f is one-to-one, f(S∩T)=f(S)∩f(T).",
        "solution": "Exercise 42 gives ⊆. Conversely, y in the right side has witnesses s∈S and t∈T with f(s)=f(t)=y; injectivity gives s=t, so y∈f(S∩T).",
        "rubric": [
          "Proves the reverse inclusion by identifying the two witnesses."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-044",
    "mode": "mixed",
    "answer": "a) {−1,1}. b) (−1,0)∪(0,1). c) (−∞,−2)∪(2,∞).",
    "solution": "Here f⁻¹ denotes inverse image, not an inverse function. Solve x²∈S in each part: x²=1 gives x=±1; 0<x²<1 gives 0<|x|<1; x²>4 gives |x|>2.",
    "hints": [
      "Replace f⁻¹(S) by {x∈ℝ:x²∈S}, then solve the resulting inequality."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "{-1,1}",
        "checker": "set",
        "solution": "x²=1 exactly when x=−1 or x=1."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(−1,0)∪(0,1)={x:0<|x|<1}.",
        "solution": "The condition 0<x²<1 excludes 0 and requires |x|<1.",
        "rubric": [
          "Gives both open intervals and excludes 0 and both endpoints ±1."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(−∞,−2)∪(2,∞)={x:|x|>2}.",
        "solution": "Taking square roots in x²>4 gives |x|>2; ±2 are excluded.",
        "rubric": [
          "Gives both unbounded open intervals with strict endpoints."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-045",
    "mode": "mixed",
    "answer": "a) [0,1). b) [−1,2). c) ∅.",
    "solution": "Use ⌊x⌋=k exactly when k≤x<k+1. Thus (a) uses k=0. In (b), unite [−1,0),[0,1),[1,2). In (c), no integer k satisfies 0<k<1, so the inverse image is empty.",
    "hints": [
      "Convert each target integer k into the half-open interval [k,k+1)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[0,1).",
        "solution": "⌊x⌋=0 iff 0≤x<1.",
        "rubric": [
          "Includes 0 and excludes 1."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[−1,2).",
        "solution": "The three required intervals [−1,0),[0,1),[1,2) join continuously, giving −1≤x<2.",
        "rubric": [
          "Gives the full interval with the correct endpoints."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}",
          "empty set"
        ],
        "checker": "set",
        "solution": "A floor output is an integer, and no integer lies strictly between 0 and 1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-046",
    "mode": "rubric",
    "answer": "a) f⁻¹(S∪T)=f⁻¹(S)∪f⁻¹(T). b) f⁻¹(S∩T)=f⁻¹(S)∩f⁻¹(T).",
    "solution": "For any x∈A, inverse-image membership means f(x) belongs to the target set. In (a), f(x)∈S∪T iff f(x)∈S or f(x)∈T. In (b), f(x)∈S∩T iff f(x)∈S and f(x)∈T. These biconditionals prove both equalities at once.",
    "hints": [
      "Write a chain of “iff” statements for an arbitrary x instead of proving separate inclusions."
    ],
    "rubric": [
      "Both parts translate inverse images to membership conditions and use the correct union/intersection connective."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f⁻¹(S∪T)=f⁻¹(S)∪f⁻¹(T).",
        "solution": "x∈f⁻¹(S∪T) ⇔ f(x)∈S∪T ⇔ f(x)∈S or f(x)∈T ⇔ x∈f⁻¹(S)∪f⁻¹(T).",
        "rubric": [
          "Gives a valid biconditional union argument."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f⁻¹(S∩T)=f⁻¹(S)∩f⁻¹(T).",
        "solution": "x∈f⁻¹(S∩T) ⇔ f(x)∈S∩T ⇔ f(x)∈S and f(x)∈T ⇔ x∈f⁻¹(S)∩f⁻¹(T).",
        "rubric": [
          "Gives a valid biconditional intersection argument."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-047",
    "mode": "rubric",
    "answer": "f⁻¹(S̄)=overline{f⁻¹(S)}, where the first complement is in B and the second is in A.",
    "solution": "For x∈A, x∈f⁻¹(S̄) iff f(x)∈S̄ iff f(x)∉S iff x∉f⁻¹(S) iff x∈overline{f⁻¹(S)}. No invertibility of f is needed; this is the inverse-image notation from the preamble.",
    "hints": [
      "Track which universe contains each complement: S⊆B, but f⁻¹(S)⊆A."
    ],
    "rubric": [
      "States complement inverse image equals complement of inverse image and proves it using f(x)∉S, with complements taken in the correct universes."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-048",
    "mode": "rubric",
    "answer": "Write x=n+r with n=⌊x⌋ and 0≤r<1. Then ⌊x+1/2⌋ is n when r<1/2 and n+1 when r≥1/2; this is the nearest integer, with the larger integer chosen at the tie r=1/2.",
    "solution": "Since n is an integer, ⌊x+1/2⌋=n+⌊r+1/2⌋. The added floor is 0 for 0≤r<1/2 and 1 for 1/2≤r<1. In the first case x is closer to n; in the second it is closer to n+1; at r=1/2 both are equally close and the formula returns n+1.",
    "hints": [
      "Separate x into its integer floor n and fractional part r, then split at r=1/2."
    ],
    "rubric": [
      "Decomposes x correctly, handles both non-tie cases, and selects the larger integer at the midpoint."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-049",
    "mode": "rubric",
    "answer": "Write x=n+r with n=⌊x⌋ and 0≤r<1. Then ⌈x−1/2⌉ is n for 0≤r≤1/2 and n+1 for r>1/2, so it gives the nearest integer and chooses the smaller one at a midpoint.",
    "solution": "Now ⌈x−1/2⌉=n+⌈r−1/2⌉. The ceiling term is 0 when r≤1/2 and 1 when r>1/2. Thus the lower integer wins when r<1/2 and also at r=1/2, while the higher integer wins for r>1/2.",
    "hints": [
      "Use the same n,r decomposition as Exercise 48, but include the tie in the lower-integer case."
    ],
    "rubric": [
      "Correctly evaluates the ceiling in all fractional-part cases and proves nearest-integer rounding with ties downward."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-050",
    "mode": "rubric",
    "answer": "If x∈ℤ, then ⌈x⌉=⌊x⌋=x and their difference is 0. If x∉ℤ, then ⌊x⌋<x<⌈x⌉ and the two integers are consecutive, so their difference is 1.",
    "solution": "Use the two exhaustive cases. For noninteger x, put n=⌊x⌋; then n<x<n+1, which forces ⌈x⌉=n+1. Hence ⌈x⌉−⌊x⌋=(n+1)−n=1.",
    "hints": [
      "Split into integer and noninteger inputs; in the latter case the surrounding integers differ by one."
    ],
    "rubric": [
      "Handles both cases and shows why the ceiling is exactly one above the floor for nonintegers."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-051",
    "mode": "rubric",
    "answer": "For every real x, x−1<⌊x⌋≤x≤⌈x⌉<x+1.",
    "solution": "Let n=⌊x⌋. The defining floor inequalities are n≤x<n+1; the left half gives n≤x, and x<n+1 gives x−1<n. Let m=⌈x⌉. The defining ceiling inequalities are m−1<x≤m; thus x≤m, and m−1<x gives m<x+1.",
    "hints": [
      "Write the defining double inequality for each rounding function and rearrange only the needed side."
    ],
    "rubric": [
      "Derives all four inequalities from the floor and ceiling definitions with the strict and non-strict sides correct."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-052",
    "mode": "rubric",
    "answer": "⌈x+m⌉=⌈x⌉+m for real x and integer m.",
    "solution": "Let k=⌈x⌉, so k is an integer and k−1<x≤k. Adding m gives (k+m)−1<x+m≤k+m. Since k+m is an integer, the ceiling definition says it is exactly ⌈x+m⌉.",
    "hints": [
      "Set k=⌈x⌉ and add m throughout k−1<x≤k."
    ],
    "rubric": [
      "Uses the ceiling's defining inequalities and integrality of k+m to prove equality."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-053",
    "mode": "rubric",
    "answer": "a) x<n iff ⌊x⌋<n. b) n<x iff n<⌈x⌉.",
    "solution": "For (a), x<n implies ⌊x⌋≤x<n. Conversely, ⌊x⌋<n gives ⌊x⌋+1≤n because these are integers, and x<⌊x⌋+1≤n. For (b), n<x≤⌈x⌉ proves one direction. Conversely, n<⌈x⌉ gives n≤⌈x⌉−1<x by the ceiling inequality.",
    "hints": [
      "The integer assumption turns a strict inequality between integers into a gap of at least 1."
    ],
    "rubric": [
      "Proves both directions in each part using floor/ceil inequalities and integrality of n."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "x<n if and only if ⌊x⌋<n.",
        "solution": "Forward: ⌊x⌋≤x<n. Reverse: ⌊x⌋<n implies ⌊x⌋+1≤n, while x<⌊x⌋+1.",
        "rubric": [
          "Proves both implications with the correct floor bounds."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "n<x if and only if n<⌈x⌉.",
        "solution": "Forward: n<x≤⌈x⌉. Reverse: n<⌈x⌉ implies n≤⌈x⌉−1, and ⌈x⌉−1<x.",
        "rubric": [
          "Proves both implications with the correct ceiling bounds."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-054",
    "mode": "rubric",
    "answer": "a) x≤n iff ⌈x⌉≤n. b) n≤x iff n≤⌊x⌋.",
    "solution": "For (a), x≤⌈x⌉, so ⌈x⌉≤n implies x≤n; conversely, x≤n implies the least integer at least x is at most n. For (b), ⌊x⌋≤x, so n≤⌊x⌋ implies n≤x; conversely, n≤x implies the greatest integer at most x is at least n.",
    "hints": [
      "Use that ceiling is the least integer above x and floor is the greatest integer below x."
    ],
    "rubric": [
      "Proves both directions of each equivalence and preserves the non-strict inequalities."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "x≤n if and only if ⌈x⌉≤n.",
        "solution": "If x≤n, minimality of the ceiling gives ⌈x⌉≤n. If ⌈x⌉≤n, then x≤⌈x⌉≤n.",
        "rubric": [
          "Proves both implications using minimality and x≤⌈x⌉."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "n≤x if and only if n≤⌊x⌋.",
        "solution": "If n≤x, maximality of the floor gives n≤⌊x⌋. If n≤⌊x⌋, then n≤⌊x⌋≤x.",
        "rubric": [
          "Proves both implications using maximality and ⌊x⌋≤x."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-055",
    "mode": "rubric",
    "answer": "If n=2k, then ⌊n/2⌋=k=n/2. If n=2k+1, then ⌊n/2⌋=⌊k+1/2⌋=k=(n−1)/2.",
    "solution": "Every integer is either even or odd. Substitute n=2k in the even case and n=2k+1 in the odd case, where k∈ℤ; the floor then evaluates directly.",
    "hints": [
      "Write even and odd integers in the standard forms 2k and 2k+1 before dividing by 2."
    ],
    "rubric": [
      "Uses parity cases and obtains exactly n/2 for even n and (n−1)/2 for odd n."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-056",
    "mode": "rubric",
    "answer": "⌊−x⌋=−⌈x⌉ and ⌈−x⌉=−⌊x⌋.",
    "solution": "Let k=⌈x⌉, so k−1<x≤k. Multiplying by −1 reverses inequalities: −k≤−x<−k+1, so ⌊−x⌋=−k=−⌈x⌉. Applying this identity with x replaced by −x gives ⌊x⌋=−⌈−x⌉, hence ⌈−x⌉=−⌊x⌋.",
    "hints": [
      "Negation swaps the roles of the two rounding directions; reverse every inequality when multiplying by −1."
    ],
    "rubric": [
      "Proves both identities with correct inequality reversal or an equivalent substitution argument."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-057",
    "mode": "rubric",
    "answer": "INT(−x)=−INT(x) for every real x.",
    "solution": "If x≥0, then −x≤0 and INT(−x)=⌈−x⌉=−⌊x⌋=−INT(x), using Exercise 56 (at x=0 both definitions agree). If x<0, then −x>0 and INT(−x)=⌊−x⌋=−⌈x⌉=−INT(x). These cases cover all real x.",
    "hints": [
      "Split at zero and use the two negation identities from Exercise 56."
    ],
    "rubric": [
      "Handles nonnegative and negative inputs, including zero consistently, and applies the floor/ceiling negation identities correctly."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-058",
    "mode": "rubric",
    "answer": "⌊b⌋−⌈a⌉+1 integers.",
    "solution": "The integer condition a≤n≤b is equivalent to ⌈a⌉≤n≤⌊b⌋. Inclusive consecutive integers from L to U number U−L+1; substituting L=⌈a⌉ and U=⌊b⌋ gives the formula, which also correctly yields 0 when no integer occurs.",
    "hints": [
      "Move the lower endpoint upward to an integer and the upper endpoint downward, then count inclusively."
    ],
    "rubric": [
      "Gives exactly ⌊b⌋−⌈a⌉+1 and explains the inclusive integer endpoints."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-059",
    "mode": "rubric",
    "answer": "⌈b⌉−⌊a⌋−1 integers.",
    "solution": "For strict inequalities a<n<b, the smallest possible integer is ⌊a⌋+1 and the largest is ⌈b⌉−1. Counting inclusively gives (⌈b⌉−1)−(⌊a⌋+1)+1=⌈b⌉−⌊a⌋−1.",
    "hints": [
      "Strict bounds require one integer beyond ⌊a⌋ and one before ⌈b⌉."
    ],
    "rubric": [
      "Identifies both strict-bound integer endpoints and simplifies to the correct count."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-060",
    "mode": "auto",
    "answer": "a) 1; b) 2; c) 63; d) 375 bytes.",
    "solution": "A byte holds 8 bits, so the required number is ⌈n/8⌉. Thus ⌈4/8⌉=1, ⌈10/8⌉=2, ⌈500/8⌉=63, and ⌈3000/8⌉=375.",
    "hints": [
      "Divide by 8 and round up because a partial final byte still requires a whole byte."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "⌈4/8⌉=1 byte."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "⌈10/8⌉=⌈1.25⌉=2 bytes."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "63",
        "checker": "number",
        "solution": "⌈500/8⌉=⌈62.5⌉=63 bytes."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "375",
        "checker": "number",
        "solution": "3000/8=375 exactly."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-061",
    "mode": "auto",
    "answer": "a) 1; b) 3; c) 126; d) 3600 bytes.",
    "solution": "Use ⌈n/8⌉ for n bits. The calculations are ⌈7/8⌉=1, ⌈17/8⌉=3, ⌈1001/8⌉=126, and 28800/8=3600.",
    "hints": [
      "Round the bit count divided by 8 upward, not downward."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "Seven bits fit in one byte."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "⌈17/8⌉=⌈2.125⌉=3 bytes."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "126",
        "checker": "number",
        "solution": "1001=125·8+1, so 125 full bytes plus one more are needed."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "3600",
        "checker": "number",
        "solution": "28800/8=3600 exactly."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-062",
    "mode": "auto",
    "answer": "a) 3018; b) 7075; c) 23584 ATM cells.",
    "solution": "Example 30 gives 53·8=424 bits per cell. In 10 seconds the link carries 10R bits, so compute ⌊10R/424⌋: ⌊1,280,000/424⌋=3018, ⌊3,000,000/424⌋=7075, and ⌊10,000,000/424⌋=23584.",
    "hints": [
      "Use a floor because only complete 424-bit cells count."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "3018",
        "checker": "number",
        "solution": "10·128000=1,280,000 bits; 424·3018≤1,280,000<424·3019."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "7075",
        "checker": "number",
        "solution": "10·300000=3,000,000 bits; ⌊3,000,000/424⌋=7075."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "23584",
        "checker": "number",
        "solution": "10·1,000,000=10,000,000 bits; ⌊10,000,000/424⌋=23584."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-063",
    "mode": "auto",
    "answer": "a) 100; b) 256; c) 1030; d) 30200 blocks.",
    "solution": "Convert each amount to bytes using the stated decimal units and compute ceiling(bytes/1500). The quotients are 100, 256, 1029⅓, and 30200, so only (c) needs rounding upward.",
    "hints": [
      "Use 1000 bytes per kilobyte and 1,000,000 per megabyte, then round blocks upward."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "100",
        "checker": "number",
        "solution": "150,000/1500=100 blocks."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "256",
        "checker": "number",
        "solution": "384,000/1500=256 blocks."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1030",
        "checker": "number",
        "solution": "1,544,000/1500=1029⅓, so 1030 blocks are required."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "30200",
        "checker": "number",
        "solution": "45,300,000/1500=30,200 blocks exactly."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-064",
    "mode": "rubric",
    "answer": "The graph is {(n,1−n²):n∈ℤ}: isolated points on the downward parabola y=1−x² at integer x-coordinates, with vertex (0,1) and points (±1,0),(±2,−3),(±3,−8),….",
    "solution": "Make a table using n=0,±1,±2,… and plot only those integer-input points. Do not join them with a continuous curve, because the domain is ℤ rather than ℝ; the points are symmetric about the y-axis.",
    "hints": [
      "The graph is a set of ordered pairs (n,f(n)); integer domain means isolated points."
    ],
    "rubric": [
      "Plots or exactly describes (n,1−n²) for all integers, with no continuous curve and correct symmetry/sample points."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-065",
    "mode": "rubric",
    "answer": "For each k∈ℤ, draw y=k on [k/2,(k+1)/2), with a closed dot at x=k/2 and an open dot at x=(k+1)/2.",
    "solution": "The equation ⌊2x⌋=k is equivalent to k≤2x<k+1, hence k/2≤x<(k+1)/2. These half-open intervals give a staircase with horizontal steps of width 1/2 and successive integer heights.",
    "hints": [
      "Solve k≤2x<k+1 for x to locate one complete step."
    ],
    "rubric": [
      "Describes every step at the correct height and half-unit interval, including closed-left/open-right endpoints."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-066",
    "mode": "rubric",
    "answer": "For each k∈ℤ, draw y=k on [2k,2k+2), closed at x=2k and open at x=2k+2.",
    "solution": "From ⌊x/2⌋=k, obtain k≤x/2<k+1 and therefore 2k≤x<2k+2. The steps have width 2, and the height increases by 1 at every even integer.",
    "hints": [
      "One step comes from k≤x/2<k+1; multiply all parts by 2."
    ],
    "rubric": [
      "Gives all width-two steps at the correct integer heights and endpoint conventions."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-067",
    "mode": "rubric",
    "answer": "For every k∈ℤ, f(x)=3k on [2k,2k+1) and f(x)=3k+1 on [2k+1,2k+2), with closed left and open right endpoints.",
    "solution": "If 2k≤x<2k+1, then ⌊x⌋=2k and ⌊x/2⌋=k, so the sum is 3k. If 2k+1≤x<2k+2, the terms are 2k+1 and k, so the sum is 3k+1. Plot these two consecutive unit steps for each k.",
    "hints": [
      "Breakpoints occur at integers; split each even-to-next-even block at the odd integer."
    ],
    "rubric": [
      "Gives both step heights on the correct unit intervals for every integer k with correct endpoints."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-068",
    "mode": "rubric",
    "answer": "For every k∈ℤ: f(x)=3k−1 on (2k−1,2k); f(2k)=3k; and f(x)=3k+1 on (2k,2k+1]. Draw open/closed dots accordingly, including the isolated value at each even integer.",
    "solution": "On (2k−1,2k), ⌈x⌉=2k and ⌊x/2⌋=k−1. At x=2k the terms are 2k and k. On (2k,2k+1], the terms sum to 3k+1, including the odd endpoint. These cases cover ℝ without overlap.",
    "hints": [
      "Ceiling changes just after an integer, so treat even integer points separately from the intervals to their right."
    ],
    "rubric": [
      "Covers all real inputs with the three correct cases per k and accurately marks open, closed, and isolated points."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-069",
    "mode": "rubric",
    "answer": "a) y=k on [k−1/2,k+1/2). b) y=k on [(k−1)/2,k/2). c) y=k on (3k−3,3k]. d) For x>0: y=1 on [1,∞), and y=k≥2 on [1/k,1/(k−1)); for x<0: y=0 on (−∞,−1), and y=k≤−1 on [1/k,1/(k−1)); undefined at 0. e) y=2n at x=n∈ℤ and y=2n+1 on (n,n+1). f) Use the five-case pattern below. g) Same graph as (a).",
    "solution": "For (a)–(c), solve the defining floor/ceiling inequalities. For (d), invert k−1<1/x≤k separately by sign. For (e), integer translations reduce the formula to ⌈x⌉+⌊x⌋. For (g), ⌈⌊x−1/2⌋+1/2⌉=⌊x−1/2⌋+1=⌊x+1/2⌋. The full steps for (f) are in its part solution.",
    "hints": [
      "Mark all breakpoints before drawing; for reciprocal rules, analyze positive and negative x separately."
    ],
    "rubric": [
      "Every graph is drawn or described with correct domains, intervals, heights, and endpoint conventions; the reciprocal and product graphs receive special attention near their breakpoints."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For k∈ℤ, draw y=k on [k−1/2,k+1/2), closed left and open right.",
        "solution": "⌊x+1/2⌋=k iff k≤x+1/2<k+1, which gives the displayed interval.",
        "rubric": [
          "Correct nearest-integer steps and endpoints."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For k∈ℤ, draw y=k on [(k−1)/2,k/2), closed left and open right.",
        "solution": "k≤2x+1<k+1 is equivalent to (k−1)/2≤x<k/2.",
        "rubric": [
          "Correct half-unit steps and endpoints."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For k∈ℤ, draw y=k on (3k−3,3k], open left and closed right.",
        "solution": "k−1<x/3≤k is equivalent to 3k−3<x≤3k.",
        "rubric": [
          "Correct width-three ceiling steps and endpoints."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain ℝ∖{0}. Draw y=1 on [1,∞), y=k for each k≥2 on [1/k,1/(k−1)), y=0 on (−∞,−1), and y=k for each k≤−1 on [1/k,1/(k−1)); all listed step intervals include their left endpoint and exclude their right.",
        "solution": "The condition is k−1<1/x≤k. For positive x only k≥1 occurs, with k=1 giving x≥1. For negative x only k≤0 occurs, with k=0 giving x<−1; careful inversion gives the remaining intervals.",
        "rubric": [
          "Correct positive and negative step families, endpoint conventions, accumulation near zero, and exclusion of x=0."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For n∈ℤ, plot (n,2n) and draw y=2n+1 on the open interval (n,n+1).",
        "solution": "⌈x−2⌉=⌈x⌉−2 and ⌊x+2⌋=⌊x⌋+2, so f(x)=⌈x⌉+⌊x⌋. At an integer both terms equal n; between n and n+1 they are n+1 and n.",
        "rubric": [
          "Correct isolated even values and odd-valued open steps."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For each q∈ℤ: f(2q)=4q²; f=4q(q+1) on (2q,2q+1/2); f=(4q+1)(q+1) on [2q+1/2,2q+1); f=(4q+2)(q+1) on [2q+1,2q+3/2); f=(4q+3)(q+1) on [2q+3/2,2q+2). Use closed/open dots as shown.",
        "solution": "Breakpoints occur at half-integers for ⌊2x⌋ and even integers for ⌈x/2⌉. On each listed interval the two factors are constant: respectively 4q,q+1; 4q+1,q+1; 4q+2,q+1; and 4q+3,q+1. At x=2q they are 4q and q, giving the separate point.",
        "rubric": [
          "Uses all half-integer and even-integer breakpoints, correct products, and the separate even-point values."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "For k∈ℤ, draw y=k on [k−1/2,k+1/2), exactly as in part (a).",
        "solution": "Because ⌊x−1/2⌋ is an integer k−1, adding 1/2 and taking ceiling returns that integer plus 1. Thus f(x)=⌊x−1/2⌋+1=⌊x+1/2⌋.",
        "rubric": [
          "Simplifies correctly and gives the same steps and endpoints as (a)."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-070",
    "mode": "rubric",
    "answer": "a) y=k on ((k+1)/3,(k+2)/3]. b) y=k on (5k−5,5k]. c) Reflect the graph of Exercise 69(d) across the x-axis; x=0 is excluded. d) y=0 on (−1,1), and for k≥1, y=k on (−√(k+1),−√k]∪[√k,√(k+1)). e) At x=2k plot y=k²; on (2k,2k+2) draw y=k(k+1). f) At x=2k plot y=2k; on (2k,2k+2) draw y=2k+1. g) y=2k on (2k−2,2k].",
    "solution": "Use k≤t<k+1 for floors and k−1<t≤k for ceilings. In (c), ⌊−1/x⌋=−⌈1/x⌉. In (d), k≤x²<k+1 gives symmetric intervals. In (g), 2⌈x/2⌉+1/2 lies strictly between the integers 2⌈x/2⌉ and 2⌈x/2⌉+1, so its floor is 2⌈x/2⌉.",
    "hints": [
      "For products and sums, evaluate both factors on each interval and check integer points separately."
    ],
    "rubric": [
      "All seven graphs have correct domains, breakpoints, values, and endpoint conventions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For k∈ℤ, y=k on ((k+1)/3,(k+2)/3], open left and closed right.",
        "solution": "k−1<3x−2≤k becomes k+1<3x≤k+2.",
        "rubric": [
          "Correct intervals, heights, and ceiling endpoints."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For k∈ℤ, y=k on (5k−5,5k], open left and closed right.",
        "solution": "Since 0.2x=x/5, k−1<x/5≤k gives 5k−5<x≤5k.",
        "rubric": [
          "Correct width-five steps and endpoints."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Use the negative of Exercise 69(d): y=−1 on [1,∞); y=−k for k≥2 on [1/k,1/(k−1)); y=0 on (−∞,−1); and y=−k for k≤−1 on [1/k,1/(k−1)). Exclude x=0.",
        "solution": "Exercise 56 gives ⌊−1/x⌋=−⌈1/x⌉, so every height is the negative of the corresponding height in Exercise 69(d), on the same intervals.",
        "rubric": [
          "Correctly reflects all positive and negative reciprocal steps and excludes zero."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "y=0 on (−1,1). For each integer k≥1, y=k on (−√(k+1),−√k]∪[√k,√(k+1)), with left-closed/right-open behavior on the positive branch reversed on the negative branch as displayed.",
        "solution": "For k=0, 0≤x²<1 means −1<x<1. For k≥1, k≤x²<k+1 means √k≤|x|<√(k+1), producing two symmetric branches.",
        "rubric": [
          "Includes the zero step and both symmetric branches for every positive k with exact radical endpoints."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "For each k∈ℤ, plot (2k,k²) and draw y=k(k+1) on (2k,2k+2).",
        "solution": "At x=2k, both factors equal k. For 2k<x<2k+2, k<x/2<k+1, so the floor is k and the ceiling is k+1.",
        "rubric": [
          "Correct isolated square values and open-interval products."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "For each k∈ℤ, plot (2k,2k) and draw y=2k+1 on (2k,2k+2).",
        "solution": "At x=2k the floor and ceiling both equal k; strictly between 2k and 2k+2 they are k and k+1.",
        "rubric": [
          "Correct isolated even values and odd-valued open steps."
        ]
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "For each k∈ℤ, draw y=2k on (2k−2,2k], open left and closed right.",
        "solution": "The expression simplifies to ⌊2⌈x/2⌉+1/2⌋=2⌈x/2⌉. Then ⌈x/2⌉=k exactly for 2k−2<x≤2k.",
        "rubric": [
          "Simplifies the nested expression and gives correct even heights and endpoints."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-071",
    "mode": "rubric",
    "answer": "f⁻¹(x)=∛(x−1), with domain and codomain ℝ.",
    "solution": "Set y=x³+1 and solve for the original input: x³=y−1, so x=∛(y−1). Renaming the independent variable gives f⁻¹(x)=∛(x−1). Check that ((∛(x−1))³+1)=x and ∛((x³+1)−1)=x.",
    "hints": [
      "Interchange input and output, subtract 1, and take the real cube root."
    ],
    "rubric": [
      "Gives the real cube root of x−1 and verifies or derives it correctly on ℝ."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-072",
    "mode": "rubric",
    "answer": "(f∘g)⁻¹=g⁻¹∘f⁻¹.",
    "solution": "For z∈Z, let h=g⁻¹∘f⁻¹. Then (f∘g)(h(z))=f(g(g⁻¹(f⁻¹(z))))=f(f⁻¹(z))=z. Similarly, for x∈X, h((f∘g)(x))=g⁻¹(f⁻¹(f(g(x))))=g⁻¹(g(x))=x. Thus h is the two-sided inverse; the order reverses because g acts first in the original composition.",
    "hints": [
      "Compose the candidate on both sides and cancel adjacent inverse pairs from the inside out."
    ],
    "rubric": [
      "Verifies both composition identities and reverses the order to g⁻¹∘f⁻¹ with correct domains."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-073",
    "mode": "rubric",
    "answer": "All four identities hold for every x∈U: intersection corresponds to product, union to a+b−ab, complement to 1−a, and symmetric difference to a+b−2ab, where a=f_A(x), b=f_B(x)∈{0,1}.",
    "solution": "The characteristic function is a membership bit: 1 means x belongs to the set and 0 means it does not. In (a), ab=1 exactly when both bits are 1. In (b), a+b−ab is 0 for 00 and 1 for 01,10,11. In (c), 1−a switches 0 and 1. In (d), a+b−2ab gives 0 for 00 and 11, and 1 for 01 and 10, exactly membership in A⊕B.",
    "hints": [
      "Check the four membership possibilities (a,b)=00,01,10,11; each arithmetic expression then becomes simple."
    ],
    "rubric": [
      "Proves each identity for all x by membership logic or an exhaustive 0/1 table; (c) must use the complement of A and (d) the symmetric difference."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f_{A∩B}(x)=f_A(x)f_B(x).",
        "solution": "The product is 1 iff both factors are 1, which is iff x∈A and x∈B, exactly x∈A∩B.",
        "rubric": [
          "Connects product 1 with membership in both sets."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f_{A∪B}(x)=f_A(x)+f_B(x)−f_A(x)f_B(x).",
        "solution": "If x lies in neither set the expression is 0; otherwise it is 1+0−0,0+1−0,or1+1−1, all equal to 1.",
        "rubric": [
          "Covers membership in neither, exactly one, or both sets."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "f_{Ā}(x)=1−f_A(x).",
        "solution": "If x∈A then both sides are 0; if x∉A then x∈Ā and both sides are 1.",
        "rubric": [
          "Uses the complement and verifies both membership cases."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "f_{A⊕B}(x)=f_A(x)+f_B(x)−2f_A(x)f_B(x).",
        "solution": "The expression is 1 when exactly one membership bit is 1 and 0 when the bits agree, matching symmetric difference.",
        "rubric": [
          "Verifies the exactly-one-set condition, including the both-members case."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-074",
    "mode": "rubric",
    "answer": "For finite A,B with |A|=|B|, f:A→B is one-to-one iff it is onto.",
    "solution": "If f is one-to-one, its range has |A| distinct elements. Since f(A)⊆B and |A|=|B| is finite, the range must be all B. Conversely, if f is onto, its range has |B|=|A| elements; with only |A| inputs, any collision would leave fewer than |A| outputs, so no collision exists and f is one-to-one.",
    "hints": [
      "Compare the finite cardinality of the range first with |A| and then with |B|."
    ],
    "rubric": [
      "Proves both directions using finiteness and equal cardinalities; no infinite-set argument is substituted."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-075",
    "mode": "rubric",
    "answer": "a) True. b) False. c) True. d) False. e) False.",
    "solution": "(a) floors are integers and fixed by ceiling. (b) x=1/2 gives 1≠0. (c) fractional-part cases show the difference is 0 or 1. (d) x=y=3/2 gives 3≠4. (e) as printed, the statement is ⌈x/2⌉=⌊(x+1)/2⌋ for all real x; x=−3/2 gives 0≠−1.",
    "hints": [
      "Integer outputs are fixed by another floor or ceiling; for a claimed universal identity, test fractional and negative values too."
    ],
    "rubric": [
      "Gives the correct truth pattern T,F,T,F,F and supplies a proof or explicit counterexample for every part."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True: ⌈⌊x⌋⌉=⌊x⌋.",
        "solution": "⌊x⌋ is an integer, and the ceiling of any integer is itself.",
        "rubric": [
          "Proves the identity using integrality of the floor."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "False; x=1/2 is a counterexample.",
        "solution": "⌊2·1/2⌋=1, but 2⌊1/2⌋=0.",
        "rubric": [
          "Gives a valid counterexample and evaluates both sides."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: the difference is always 0 or 1.",
        "solution": "Write x=m+r,y=n+s with integer m,n and 0≤r,s<1. If neither or exactly one fractional part is nonzero, the difference is 0. If both are nonzero, the ceilings sum to m+n+2, while ⌈x+y⌉ is m+n+1 when r+s≤1 and m+n+2 when r+s>1; hence the difference is 1 or 0.",
        "rubric": [
          "Proves all fractional-part cases and obtains only 0 and 1."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "False; x=y=3/2 is a counterexample.",
        "solution": "⌈xy⌉=⌈9/4⌉=3, whereas ⌈x⌉⌈y⌉=2·2=4.",
        "rubric": [
          "Evaluates a valid counterexample correctly."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "False; x=−3/2 gives ⌈x/2⌉=0 but ⌊(x+1)/2⌋=−1.",
        "solution": "At x=−3/2, the left input is −3/4 and the right input is −1/4, whose ceiling and floor respectively are 0 and −1.",
        "rubric": [
          "Uses the printed real-variable statement and a correct negative counterexample."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-076",
    "mode": "rubric",
    "answer": "a) True. b) False. c) True. d) False. e) True.",
    "solution": "(a) ceilings are integers. (b) x=y=1/2 gives 1≠0. (c) use k=⌈x/4⌉ and bound ⌈x/2⌉ between 2k−1 and 2k. (d) x=1/4 gives 1≠0. (e) fractional parts reduce the claim to ⌊r+s⌋≤⌊2r⌋+⌊2s⌋, which follows by cases.",
    "hints": [
      "For nested rounding, name the outer target integer; for (e), separate integer parts from fractional parts."
    ],
    "rubric": [
      "Gives T,F,T,F,T with valid proofs for (a),(c),(e) and evaluated counterexamples for (b),(d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "True: ⌊⌈x⌉⌋=⌈x⌉.",
        "solution": "⌈x⌉ is an integer and is fixed by the floor function.",
        "rubric": [
          "Uses integrality to prove the identity."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "False; x=y=1/2.",
        "solution": "⌊x+y⌋=⌊1⌋=1 but ⌊x⌋+⌊y⌋=0+0=0.",
        "rubric": [
          "Gives and evaluates a valid counterexample."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "True: ⌈⌈x/2⌉/2⌉=⌈x/4⌉.",
        "solution": "Let k=⌈x/4⌉. Then k−1<x/4≤k, so 2k−2<x/2≤2k. Therefore ⌈x/2⌉ is either 2k−1 or 2k; dividing either by 2 and taking ceiling gives k.",
        "rubric": [
          "Derives the nested-ceiling identity for arbitrary real x."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "False; x=1/4.",
        "solution": "⌊√⌈1/4⌉⌋=⌊√1⌋=1, but ⌊√(1/4)⌋=⌊1/2⌋=0.",
        "rubric": [
          "Gives a positive counterexample and evaluates both radical expressions."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "True: ⌊x⌋+⌊y⌋+⌊x+y⌋≤⌊2x⌋+⌊2y⌋.",
        "solution": "Write x=m+r,y=n+s. After canceling 2m+2n, it remains to show ⌊r+s⌋≤⌊2r⌋+⌊2s⌋. The left side is 0 or 1; if it is 1 then r+s≥1, so at least one of r,s is ≥1/2 and the right side is at least 1.",
        "rubric": [
          "Reduces to fractional parts and proves both relevant cases."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-077",
    "mode": "rubric",
    "answer": "For x>0: a) ⌊√⌊x⌋⌋=⌊√x⌋. b) ⌈√⌈x⌉⌉=⌈√x⌉.",
    "solution": "In (a), let k=⌊√x⌋. Then k²≤x<(k+1)², so k²≤⌊x⌋≤x<(k+1)² and hence k≤√⌊x⌋<k+1. In (b), let k=⌈√x⌉. Then (k−1)²<x≤k², so (k−1)²<⌈x⌉≤k² and hence k−1<√⌈x⌉≤k.",
    "hints": [
      "Name the desired outer floor or ceiling k and compare perfect-square integers with x."
    ],
    "rubric": [
      "Both proofs use correct square bounds, integrality of the square endpoints, and the defining outer rounding inequalities."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "⌊√⌊x⌋⌋=⌊√x⌋ for x>0.",
        "solution": "With k=⌊√x⌋, k²≤x<(k+1)². Since k² is an integer, k²≤⌊x⌋; also ⌊x⌋≤x. Thus k≤√⌊x⌋<k+1, so its floor is k.",
        "rubric": [
          "Establishes both square bounds and concludes the correct floor."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "⌈√⌈x⌉⌉=⌈√x⌉ for x>0.",
        "solution": "With k=⌈√x⌉, (k−1)²<x≤k². Integrality gives (k−1)²<⌈x⌉≤k², so k−1<√⌈x⌉≤k and its ceiling is k.",
        "rubric": [
          "Establishes both square bounds and concludes the correct ceiling."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-078",
    "mode": "rubric",
    "answer": "⌊3x⌋=⌊x⌋+⌊x+1/3⌋+⌊x+2/3⌋ for every real x.",
    "solution": "Write x=n+r with n∈ℤ and 0≤r<1. Subtract 3n from both sides; it remains to compare ⌊3r⌋ with ⌊r⌋+⌊r+1/3⌋+⌊r+2/3⌋. For 0≤r<1/3 both are 0; for 1/3≤r<2/3 both are 1; for 2/3≤r<1 both are 2. These cases cover every fractional part.",
    "hints": [
      "Remove the integer part, then split the fractional part at 1/3 and 2/3."
    ],
    "rubric": [
      "Reduces to fractional parts and verifies all three intervals with the correct values 0,1,2."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-079",
    "mode": "rubric",
    "answer": "a) Domain ℤ, codomain ℝ, definition domain ℤ∖{0}, undefined {0}, not total. b) Domain ℤ, codomain ℤ, definition domain ℤ, undefined ∅, total. c) Domain ℤ×ℤ, codomain ℚ, definition domain {(m,n):n≠0}, undefined ℤ×{0}, not total. d) Domain ℤ×ℤ, codomain ℤ, definition domain ℤ×ℤ, undefined ∅, total. e) Domain ℤ×ℤ, codomain ℤ, definition domain {(m,n):m>n}, undefined {(m,n):m≤n}, not total.",
    "solution": "The declared domain and codomain come from f:A→B; the domain of definition contains only inputs where the rule produces a value. Exclude n=0 in (a), denominator n=0 in (c), and m≤n in (e). The ceiling in (b) and product in (d) are defined everywhere.",
    "hints": [
      "Do not confuse the declared domain with the smaller set on which a partial rule actually works."
    ],
    "rubric": [
      "For every part, gives all four requested sets and the correct total/partial classification."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Domain ℤ; codomain ℝ; domain of definition ℤ∖{0}; undefined at {0}; not total.",
        "solution": "1/n is real and unique exactly for nonzero integers n.",
        "rubric": [
          "Gives all sets and excludes exactly n=0."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain ℤ; codomain ℤ; domain of definition ℤ; undefined set ∅; total.",
        "solution": "For every integer n, n/2 is real and its ceiling is a uniquely defined integer.",
        "rubric": [
          "Recognizes total definition on all ℤ."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Domain ℤ×ℤ; codomain ℚ; domain of definition {(m,n)∈ℤ²:n≠0}; undefined set {(m,0):m∈ℤ}; not total.",
        "solution": "m/n is a rational number exactly when the integer denominator n is nonzero.",
        "rubric": [
          "Excludes exactly zero denominators and gives the declared sets."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Domain ℤ×ℤ; codomain ℤ; domain of definition ℤ×ℤ; undefined set ∅; total.",
        "solution": "The product mn is defined and an integer for every integer pair.",
        "rubric": [
          "Recognizes the product rule as total."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Domain ℤ×ℤ; codomain ℤ; domain of definition {(m,n)∈ℤ²:m>n}; undefined set {(m,n)∈ℤ²:m≤n}; not total.",
        "solution": "The rule explicitly applies only when m>n; all other pairs are undefined.",
        "rubric": [
          "Uses the strict condition and includes equality among undefined inputs."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-080",
    "mode": "rubric",
    "answer": "a) Sending every undefined input to a fresh symbol u makes f*:A→B∪{u} total and single-valued. b) Extend the five functions in Exercise 79 by their stated rules on their definition domains and by u at every undefined input; the ceiling and product functions never use u.",
    "solution": "For (a), each a∈A lies in exactly one of the two branches, so f*(a) is uniquely defined in B∪{u}. For (b), substitute each definition domain from Exercise 79: n≠0; all n; n≠0; all pairs; and m>n, respectively.",
    "hints": [
      "The new symbol u is a special output for “undefined,” not an element of the original codomain B."
    ],
    "rubric": [
      "Proves totality and uniqueness in (a) and gives all five explicit extended functions in (b), including the fresh-u codomain and correct branches."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The displayed f* is a total function from A to B∪{u}.",
        "solution": "If f is defined at a, the first branch returns its unique value f(a)∈B; otherwise the second returns u. Every a satisfies exactly one branch, and u∉B ensures undefined values are distinguished from genuine outputs.",
        "rubric": [
          "Checks exhaustive exclusive branches, uniqueness, and the fresh-symbol condition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(i) f*:ℤ→ℝ∪{u}: f*(n)=1/n if n≠0, u if n=0. (ii) f*:ℤ→ℤ∪{u}: f*(n)=⌈n/2⌉ for all n. (iii) f*:ℤ²→ℚ∪{u}: f*(m,n)=m/n if n≠0, u if n=0. (iv) f*:ℤ²→ℤ∪{u}: f*(m,n)=mn for all pairs. (v) f*:ℤ²→ℤ∪{u}: f*(m,n)=m−n if m>n, u if m≤n.",
        "solution": "These are exactly the original partial rules on their domains of definition, with u assigned precisely on the undefined sets found in Exercise 79. In (ii) and (iv) the undefined set is empty.",
        "rubric": [
          "Includes all five formulas with correct domains, codomains, branches, and total cases."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-081",
    "mode": "rubric",
    "answer": "a) List the m distinct elements of S as s₁,…,s_m; i↦s_i is a bijection from {1,…,m} to S. b) List S=s₁,…,s_m and T=t₁,…,t_m; s_i↦t_i is a bijection from S to T.",
    "solution": "Finite cardinality m means an exhaustive list with no repetitions exists. In (a), distinct indices have distinct listed elements and every element appears. In (b), matching corresponding positions is one-to-one because both lists have no repetitions and onto because the t-list exhausts T; the inverse is t_i↦s_i.",
    "hints": [
      "Turn finite cardinality into a no-repetition list, then use list positions as the correspondence."
    ],
    "rubric": [
      "Both constructions use exhaustive distinct-element lists and justify injectivity and surjectivity or give an inverse."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "There is a one-to-one correspondence between S and {1,2,…,m}.",
        "solution": "Write S={s₁,…,s_m} with distinct s_i. The map i↦s_i is injective because the entries are distinct and onto because the list exhausts S.",
        "rubric": [
          "Constructs and verifies the index-to-element bijection."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Any two m-element sets S and T are in one-to-one correspondence.",
        "solution": "List both sets without repetition and define f(s_i)=t_i for i=1,…,m. It has inverse f⁻¹(t_i)=s_i, so it is a bijection.",
        "rubric": [
          "Constructs a positional bijection and verifies it or its inverse."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-3-082",
    "mode": "rubric",
    "answer": "A set S is infinite iff it has a proper subset A with a bijection A↔S.",
    "solution": "If S is infinite, recursively choose distinct s₀,s₁,s₂,…∈S; at each stage finitely many chosen elements cannot exhaust S. Let A=S∖{s₀}, a proper subset. Define F:S→A by F(s_i)=s_{i+1} for i≥0 and F(x)=x for x not in this sequence. F is a bijection: on the sequence it shifts indices, off the sequence it is the identity. Conversely, if S were finite, every proper A⊂S would have |A|<|S|, so no bijection A↔S could exist. Therefore existence of such a proper subset forces S to be infinite.",
    "hints": [
      "For the infinite direction, remove the first element of a countably infinite sequence and shift the remaining sequence by one."
    ],
    "rubric": [
      "Constructs a valid proper-subset bijection for arbitrary infinite S and proves the converse using strict cardinality decrease for finite proper subsets."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-001",
    "mode": "auto",
    "answer": "a) 3. b) −1. c) 787. d) 2639.",
    "solution": "Read aₙ = 2·(−3)ⁿ + 5ⁿ as ‘two times negative three to the n, plus five to the n.’ Substitute the requested index in both powers: a₀ = 2 + 1 = 3; a₁ = −6 + 5 = −1; a₄ = 162 + 625 = 787; a₅ = −486 + 3125 = 2639.",
    "hints": [
      "Replace n by the subscript, and remember that any nonzero number to the power 0 is 1.",
      "Parenthesize −3 before raising it to a power."
    ],
    "checker": "text",
    "readAloud": "The subscript tells you which value of n to substitute into the formula.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "a₀ = 2(−3)⁰ + 5⁰ = 2 + 1 = 3."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "−1",
        "checker": "number",
        "solution": "a₁ = 2(−3)¹ + 5¹ = −6 + 5 = −1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "787",
        "checker": "number",
        "solution": "a₄ = 2(−3)⁴ + 5⁴ = 162 + 625 = 787."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "2639",
        "checker": "number",
        "solution": "a₅ = 2(−3)⁵ + 5⁵ = −486 + 3125 = 2639."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-002",
    "mode": "auto",
    "answer": "a) 128. b) 7. c) 2. d) −256.",
    "solution": "Set n = 8 in each formula. Thus 2⁸⁻¹ = 2⁷ = 128; the constant sequence remains 7; 1 + (−1)⁸ = 2; and −(−2)⁸ = −256. The outside minus sign in part (d) is applied after the power.",
    "hints": [
      "In part (a), the exponent is n − 1, not n.",
      "An even power of a negative number is positive; then apply any outside minus sign."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "128",
        "checker": "number",
        "solution": "a₈ = 2⁸⁻¹ = 2⁷ = 128."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "7",
        "checker": "number",
        "solution": "The formula aₙ = 7 does not depend on n, so a₈ = 7."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2",
        "checker": "number",
        "solution": "a₈ = 1 + (−1)⁸ = 1 + 1 = 2."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "−256",
        "checker": "number",
        "solution": "a₈ = −(−2)⁸ = −256."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-003",
    "mode": "auto",
    "answer": "a) 2, 3, 5, 9. b) 1, 4, 27, 256. c) 0, 0, 1, 1. d) 0, 1, 2, 3.",
    "solution": "For each part, substitute n = 0, 1, 2, 3 in that order. The floor ⌊x⌋ rounds down and the ceiling ⌈x⌉ rounds up. In part (d), their sum is n, which gives 0, 1, 2, 3.",
    "hints": [
      "Write a small four-row substitution table.",
      "For half-integers, the floor and ceiling are the integers immediately below and above."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "2, 3, 5, 9",
        "checker": "text",
        "solution": "The values of 2ⁿ + 1 are 1 + 1, 2 + 1, 4 + 1, 8 + 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1, 4, 27, 256",
        "checker": "text",
        "solution": "The values of (n + 1)ⁿ⁺¹ are 1¹, 2², 3³, 4⁴."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "0, 0, 1, 1",
        "checker": "text",
        "solution": "Floor n/2 for n = 0, 1, 2, 3 to obtain 0, 0, 1, 1."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "0, 1, 2, 3",
        "checker": "text",
        "solution": "For every integer n, ⌊n/2⌋ + ⌈n/2⌉ = n; substitute the four indices."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-004",
    "mode": "auto",
    "answer": "a) 1, −2, 4, −8. b) 3, 3, 3, 3. c) 8, 11, 23, 71. d) 2, 0, 8, 0.",
    "solution": "Substitute n = 0, 1, 2, 3. Powers of −2 alternate in sign, the constant sequence is unchanged, and part (c) uses 4ⁿ rather than 4n. In part (d), the two powers cancel for odd n and double for even n.",
    "hints": [
      "Evaluate 2ⁿ and (−2)ⁿ separately in part (d).",
      "The superscript n in 4ⁿ is an exponent."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1, −2, 4, −8",
        "checker": "text",
        "solution": "The first four powers of −2, starting at exponent 0, are 1, −2, 4, −8."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "3, 3, 3, 3",
        "checker": "text",
        "solution": "A constant rule gives 3 at every index."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "8, 11, 23, 71",
        "checker": "text",
        "solution": "Add 7 to 4⁰, 4¹, 4², 4³, namely 1, 4, 16, 64."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "2, 0, 8, 0",
        "checker": "text",
        "solution": "Compute 1 + 1, 2 − 2, 4 + 4, 8 − 8."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-005",
    "mode": "auto",
    "answer": "a) 2, 5, 8, 11, 14, 17, 20, 23, 26, 29. b) 1, 1, 1, 2, 2, 2, 3, 3, 3, 4. c) 1, 1, 3, 3, 5, 5, 7, 7, 9, 9. d) −1, −2, −2, 8, 88, 656, 4912, 40064, 362368, 3627776. e) 3, 6, 12, 24, 48, 96, 192, 384, 768, 1536. f) 2, 4, 6, 10, 16, 26, 42, 68, 110, 178. g) 1, 2, 2, 3, 3, 3, 3, 4, 4, 4. h) 3, 3, 5, 4, 4, 3, 5, 5, 4, 3.",
    "solution": "Build each list one index at a time. Use repeated addition in (a), the stated repetition rules in (b) and (c), n! − 2ⁿ in (d), doubling in (e), and addition of the previous two terms in (f). For (g), the bit lengths change at powers of 2; for (h), count letters in one through ten, ignoring no letters because none contains a space or hyphen.",
    "hints": [
      "Keep the term number beside each calculated term so that exactly ten entries remain.",
      "In part (d), n! means 1·2·…·n, whereas 2ⁿ is a power."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "2, 5, 8, 11, 14, 17, 20, 23, 26, 29",
        "checker": "text",
        "solution": "Start at 2 and add 3 nine times; equivalently, aₙ = 2 + 3(n − 1) for n ≥ 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1, 1, 1, 2, 2, 2, 3, 3, 3, 4",
        "checker": "text",
        "solution": "Write three copies of 1, then three each of 2 and 3; the tenth term starts the copies of 4."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1, 1, 3, 3, 5, 5, 7, 7, 9, 9",
        "checker": "text",
        "solution": "Write two copies of each odd positive integer, stopping after five odd integers."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "−1, −2, −2, 8, 88, 656, 4912, 40064, 362368, 3627776",
        "checker": "text",
        "solution": "Subtract 2ⁿ from n! for n = 1 through 10; for example, a₄ = 24 − 16 = 8 and a₁₀ = 3628800 − 1024 = 3627776."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "3, 6, 12, 24, 48, 96, 192, 384, 768, 1536",
        "checker": "text",
        "solution": "Start at 3 and double successively; aₙ = 3·2ⁿ⁻¹."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "2, 4, 6, 10, 16, 26, 42, 68, 110, 178",
        "checker": "text",
        "solution": "After 2 and 4, each term is the sum of the preceding pair: 2 + 4 = 6, 4 + 6 = 10, and so on."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "1, 2, 2, 3, 3, 3, 3, 4, 4, 4",
        "checker": "text",
        "solution": "The binary forms 1; 10, 11; 100, 101, 110, 111; 1000, 1001, 1010 have lengths 1; 2, 2; 3, 3, 3, 3; 4, 4, 4."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "3, 3, 5, 4, 4, 3, 5, 5, 4, 3",
        "checker": "text",
        "solution": "The words one, two, three, four, five, six, seven, eight, nine, ten contain 3, 3, 5, 4, 4, 3, 5, 5, 4, 3 letters."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-006",
    "mode": "auto",
    "answer": "a) 10, 7, 4, 1, −2, −5, −8, −11, −14, −17. b) 1, 3, 6, 10, 15, 21, 28, 36, 45, 55. c) 1, 5, 19, 65, 211, 665, 2059, 6305, 19171, 58025. d) 1, 1, 1, 2, 2, 2, 2, 2, 3, 3. e) 1, 5, 6, 11, 17, 28, 45, 73, 118, 191. f) 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023. g) 1, 2, 2, 4, 8, 11, 33, 37, 148, 153. h) 1, 2, 2, 2, 2, 3, 3, 3, 3, 3.",
    "solution": "Apply each rule sequentially for n = 1 through 10. In (b), use n(n + 1)/2; in (c), subtract powers; in (d), take the floor of the square root. In (f), the largest n-bit binary integer is 2ⁿ − 1. In (g), preserve the order add k, then multiply by k. In (h), compare n with the factorials 1, 2, 6, 24.",
    "hints": [
      "For part (g), write the operation beside every new term: +1, ×1, +2, ×2, and so on.",
      "For part (h), k! ≤ n does not require n itself to be a factorial."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "10, 7, 4, 1, −2, −5, −8, −11, −14, −17",
        "checker": "text",
        "solution": "Subtract 3 successively, continuing into negative values."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1, 3, 6, 10, 15, 21, 28, 36, 45, 55",
        "checker": "text",
        "solution": "Evaluate the triangular-number formula aₙ = 1 + 2 + … + n = n(n + 1)/2."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1, 5, 19, 65, 211, 665, 2059, 6305, 19171, 58025",
        "checker": "text",
        "solution": "Calculate 3ⁿ − 2ⁿ for each n; for example, a₄ = 81 − 16 = 65."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "1, 1, 1, 2, 2, 2, 2, 2, 3, 3",
        "checker": "text",
        "solution": "The floor is 1 for 1 ≤ n ≤ 3, 2 for 4 ≤ n ≤ 8, and 3 for 9 ≤ n ≤ 15."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "1, 5, 6, 11, 17, 28, 45, 73, 118, 191",
        "checker": "text",
        "solution": "Starting with 1 and 5, add the previous two terms at every step."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "1, 3, 7, 15, 31, 63, 127, 255, 511, 1023",
        "checker": "text",
        "solution": "The largest n-bit binary string contains n ones and has decimal value 2ⁿ − 1."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "1, 2, 2, 4, 8, 11, 33, 37, 148, 153",
        "checker": "text",
        "solution": "Starting from 1, perform +1, ×1, +2, ×2, +3, ×3, +4, ×4, +5 to obtain the nine new terms."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "1, 2, 2, 2, 2, 3, 3, 3, 3, 3",
        "checker": "text",
        "solution": "The largest k is 1 at n = 1, 2 for 2 ≤ n ≤ 5 because 2! = 2 but 3! = 6, and 3 for 6 ≤ n ≤ 23."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-007",
    "mode": "rubric",
    "answer": "Three examples, for n ≥ 1, are aₙ = 2ⁿ⁻¹; aₙ = (n² − n + 2)/2; and the recurrence a₁ = 1, a₂ = 2, a₃ = 4, aₙ = aₙ₋₁ + aₙ₋₂ + aₙ₋₃ for n ≥ 4. Their beginnings are 1, 2, 4, 8, …; 1, 2, 4, 7, …; and 1, 2, 4, 7, 13, …, respectively.",
    "solution": "A finite beginning does not determine a unique continuation. The first rule doubles each term. For the second, substitution gives 1, 2, 4, 7, with successive differences 1, 2, 3. For the third, each new term after the initial three is the sum of the previous three, giving 7 and then 13. The later terms show that the sequences differ.",
    "hints": [
      "Try doubling, then try a pattern in the differences.",
      "You may also specify three initial terms and a recurrence for later terms."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives at least three explicit formulas or unambiguous rules.",
      "Verifies that every proposed sequence begins 1, 2, 4.",
      "Shows that the sequences are genuinely different by giving a later differing term or otherwise distinguishing their rules."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-008",
    "mode": "rubric",
    "answer": "Three examples are the arithmetic sequence aₙ = 2n + 1, giving 3, 5, 7, 9, 11, …; the sequence of odd primes, giving 3, 5, 7, 11, 13, …; and a₁ = 3, a₂ = 5, a₃ = 7 with aₙ = aₙ₋₁ + aₙ₋₂ + aₙ₋₃ for n ≥ 4, giving 3, 5, 7, 15, 27, ….",
    "solution": "The first rule adds 2 each time. The second lists primes greater than 2 in increasing order. The third uses the previous three terms, so its fourth term is 3 + 5 + 7 = 15 and its fifth is 5 + 7 + 15 = 27. All three start as required but continue differently.",
    "hints": [
      "An arithmetic pattern is only one possible continuation.",
      "Odd primes give another simple rule; a recurrence can supply a third."
    ],
    "checker": "rubric",
    "rubric": [
      "Supplies three clear formulas or rules that each begin 3, 5, 7.",
      "Correctly continues each rule far enough to demonstrate the continuations.",
      "Ensures the three sequences are not merely different descriptions of the same sequence."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-009",
    "mode": "auto",
    "answer": "a) 2, 12, 72, 432, 2592. b) 2, 4, 16, 256, 65536. c) 1, 2, 5, 11, 26. d) 1, 1, 6, 27, 204. e) 1, 2, 0, 1, 3.",
    "solution": "A recurrence calculates a new term from earlier terms; retain the indexing used by the initial conditions. Part (b) starts at a₁, while the others start at a₀. Substitute one index at a time, including the n and n² coefficients in part (d).",
    "hints": [
      "Write the initial terms first, then calculate only the missing terms.",
      "In part (b), aₙ = aₙ₋₁² squares the preceding term; it does not multiply it by 2."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "2, 12, 72, 432, 2592",
        "checker": "text",
        "solution": "Starting with a₀ = 2, multiply by 6 four times."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "2, 4, 16, 256, 65536",
        "checker": "text",
        "solution": "Starting with a₁ = 2, square successively: 2² = 4, 4² = 16, 16² = 256, 256² = 65536."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1, 2, 5, 11, 26",
        "checker": "text",
        "solution": "a₂ = 2 + 3·1 = 5, a₃ = 5 + 3·2 = 11, and a₄ = 11 + 3·5 = 26."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "1, 1, 6, 27, 204",
        "checker": "text",
        "solution": "a₂ = 2·1 + 2²·1 = 6; a₃ = 3·6 + 3²·1 = 27; a₄ = 4·27 + 4²·6 = 204."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "1, 2, 0, 1, 3",
        "checker": "text",
        "solution": "The three initial terms are 1, 2, 0; then a₃ = a₂ + a₀ = 1 and a₄ = a₃ + a₁ = 3."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-010",
    "mode": "auto",
    "answer": "a) −1, 2, −4, 8, −16, 32. b) 2, −1, −3, −2, 1, 3. c) 1, 3, 27, 2187, 14348907, 617673396283947. d) −1, 0, 1, 3, 13, 74. e) 1, 1, 2, 2, 1, 0.",
    "solution": "Use the given initial terms and evaluate the recurrence in increasing index order. In (c), square before multiplying by 3. In (d), n multiplies aₙ₋₁ while aₙ₋₂ is squared. Stop after six terms, counting the initial terms.",
    "hints": [
      "Count a₀ as the first term whenever it is supplied.",
      "For recurrence terms with two operations, respect squaring and multiplication before addition."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "−1, 2, −4, 8, −16, 32",
        "checker": "text",
        "solution": "Multiply −1 successively by −2, producing alternating signs and doubling magnitudes."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "2, −1, −3, −2, 1, 3",
        "checker": "text",
        "solution": "a₂ = −1 − 2 = −3; a₃ = −3 − (−1) = −2; a₄ = −2 − (−3) = 1; a₅ = 1 − (−2) = 3."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1, 3, 27, 2187, 14348907, 617673396283947",
        "checker": "text",
        "solution": "Compute a₁ = 3·1² = 3, a₂ = 3·3² = 27, a₃ = 3·27² = 2187, a₄ = 3·2187² = 14348907, and a₅ = 3·14348907² = 617673396283947."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "−1, 0, 1, 3, 13, 74",
        "checker": "text",
        "solution": "a₂ = 2·0 + (−1)² = 1; a₃ = 3·1 + 0² = 3; a₄ = 4·3 + 1² = 13; a₅ = 5·13 + 3² = 74."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "1, 1, 2, 2, 1, 0",
        "checker": "text",
        "solution": "a₃ = 2 − 1 + 1 = 2; a₄ = 2 − 2 + 1 = 1; a₅ = 1 − 2 + 1 = 0."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-011",
    "mode": "mixed",
    "answer": "a) 6, 17, 49, 143, 421. b) 49 = 5·17 − 6·6, 143 = 5·49 − 6·17, and 421 = 5·143 − 6·49. c) aₙ = 5aₙ₋₁ − 6aₙ₋₂ for every n ≥ 2.",
    "solution": "First substitute n = 0 through 4 into aₙ = 2ⁿ + 5·3ⁿ. For the general identity, 5aₙ₋₁ − 6aₙ₋₂ = 5(2ⁿ⁻¹ + 5·3ⁿ⁻¹) − 6(2ⁿ⁻² + 5·3ⁿ⁻²) = 4·2ⁿ⁻² + 45·3ⁿ⁻² = 2ⁿ + 5·3ⁿ = aₙ.",
    "hints": [
      "Factor the powers so that every term has exponent n − 2.",
      "For part (b), use the five numerical terms from part (a)."
    ],
    "checker": "rubric",
    "rubric": [
      "Part (a) lists the five terms in the correct order.",
      "Part (b) verifies all three numerical recurrence instances.",
      "Part (c) gives a general algebraic derivation valid for every n ≥ 2, not only numerical examples."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "6, 17, 49, 143, 421",
        "checker": "text",
        "solution": "Evaluate 1 + 5, 2 + 15, 4 + 45, 8 + 135, and 16 + 405."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "a₂ = 49 = 5a₁ − 6a₀; a₃ = 143 = 5a₂ − 6a₁; a₄ = 421 = 5a₃ − 6a₂.",
        "checker": "rubric",
        "solution": "Calculate 5·17 − 6·6 = 49, 5·49 − 6·17 = 143, and 5·143 − 6·49 = 421."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = 5aₙ₋₁ − 6aₙ₋₂ for all n ≥ 2.",
        "checker": "rubric",
        "solution": "Rewrite 5aₙ₋₁ − 6aₙ₋₂ as (10 − 6)2ⁿ⁻² + (75 − 30)3ⁿ⁻² = 2ⁿ + 5·3ⁿ = aₙ."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-012",
    "mode": "rubric",
    "answer": "All four sequences satisfy aₙ = −3aₙ₋₁ + 4aₙ₋₂.",
    "solution": "For (a), both sides are 0. For (b), −3·1 + 4·1 = 1. For (c), −3(−4)ⁿ⁻¹ + 4(−4)ⁿ⁻² = (12 + 4)(−4)ⁿ⁻² = (−4)ⁿ. For (d), multiply the identity in (c) by 2 and use the constant identity in (b); adding gives 2(−4)ⁿ + 3 on both sides.",
    "hints": [
      "Substitute the proposed formula into the right-hand side and simplify to aₙ.",
      "Factor out (−4)ⁿ⁻² in part (c)."
    ],
    "checker": "rubric",
    "rubric": [
      "Checks all four lettered cases by substitution into the recurrence.",
      "Correctly handles the negative base and exponent shift in part (c).",
      "Justifies part (d) directly or by linear combination of the previous solutions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = 0 is a solution.",
        "checker": "rubric",
        "solution": "−3·0 + 4·0 = 0 = aₙ."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = 1 is a solution.",
        "checker": "rubric",
        "solution": "−3·1 + 4·1 = 1 = aₙ."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = (−4)ⁿ is a solution.",
        "checker": "rubric",
        "solution": "The right side is (12 + 4)(−4)ⁿ⁻² = 16(−4)ⁿ⁻² = (−4)ⁿ."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = 2(−4)ⁿ + 3 is a solution.",
        "checker": "rubric",
        "solution": "It is 2 times solution (c) plus 3 times solution (b); a homogeneous linear recurrence preserves such combinations."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-013",
    "mode": "auto",
    "answer": "a) Yes. b) No. c) No. d) Yes. e) Yes. f) Yes. g) No. h) No.",
    "solution": "For aₙ = rⁿ, the recurrence requires r² = 8r − 16, or (r − 4)² = 0; hence 4ⁿ works, while 2ⁿ and (−4)ⁿ do not. The zero sequence works. Also n4ⁿ works because 8(n − 1)4ⁿ⁻¹ − 16(n − 2)4ⁿ⁻² = n4ⁿ, so the combination in (f) works. Direct substitution at n = 2 rules out (b), and (h) fails at n = 2 because its left side is 2²·4² = 64 while its right side is 8a₁ − 16a₀ = 32.",
    "hints": [
      "For exponential candidates, divide by rⁿ⁻² and solve for r.",
      "A repeated characteristic root also permits the factor n in n4ⁿ."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Yes",
        "accepted": [
          "Y",
          "True"
        ],
        "checker": "text",
        "solution": "Both sides are identically 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "N",
          "False"
        ],
        "checker": "text",
        "solution": "For the constant sequence 1, the right side is 8 − 16 = −8, not 1."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "N",
          "False"
        ],
        "checker": "text",
        "solution": "At n = 2, a₂ = 4 but 8a₁ − 16a₀ = 16 − 16 = 0."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "Yes",
        "accepted": [
          "Y",
          "True"
        ],
        "checker": "text",
        "solution": "8·4ⁿ⁻¹ − 16·4ⁿ⁻² = (32 − 16)4ⁿ⁻² = 4ⁿ."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "Yes",
        "accepted": [
          "Y",
          "True"
        ],
        "checker": "text",
        "solution": "8(n − 1)4ⁿ⁻¹ − 16(n − 2)4ⁿ⁻² = [32(n − 1) − 16(n − 2)]4ⁿ⁻² = n4ⁿ."
      },
      {
        "label": "f",
        "mode": "auto",
        "answer": "Yes",
        "accepted": [
          "Y",
          "True"
        ],
        "checker": "text",
        "solution": "This is 2 times solution (d) plus 3 times solution (e), so linearity gives another solution."
      },
      {
        "label": "g",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "N",
          "False"
        ],
        "checker": "text",
        "solution": "At n = 2, the left side is 16 but the right side is 8(−4) − 16 = −48."
      },
      {
        "label": "h",
        "mode": "auto",
        "answer": "No",
        "accepted": [
          "N",
          "False"
        ],
        "checker": "text",
        "solution": "At n = 2, the left side is 2²·4² = 64, but 8a₁ − 16a₀ = 8·4 − 0 = 32."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-014",
    "mode": "rubric",
    "answer": "One valid set of recurrences is: a) aₙ = aₙ₋₁, a₀ = 3. b) aₙ = aₙ₋₁ + 2, a₀ = 0. c) aₙ = aₙ₋₁ + 2, a₀ = 3. d) aₙ = 5aₙ₋₁, a₀ = 1. e) aₙ = aₙ₋₁ + 2n − 1, a₀ = 0. f) aₙ = aₙ₋₁ + 2n, a₀ = 0. g) aₙ = 2n − 1 − aₙ₋₁, a₀ = 1. h) aₙ = naₙ₋₁, a₀ = 1.",
    "solution": "Compare consecutive terms. Constants have difference 0, linear sequences have constant differences, and geometric sequences have constant ratios. For (e), n² − (n − 1)² = 2n − 1; for (f), the difference is 2n. For (g), aₙ + aₙ₋₁ = 2n − 1 because the alternating powers cancel. For (h), n! = n(n − 1)!.",
    "hints": [
      "Calculate aₙ − aₙ₋₁ or aₙ/aₙ₋₁ before choosing a recurrence.",
      "Include an initial condition so the recurrence determines the intended sequence."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a recurrence for every part (a)–(h) and enough initial conditions to determine the sequence.",
      "Uses the correct difference, ratio, or index shift in each part.",
      "Recognizes that equivalent alternative recurrences are acceptable."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = aₙ₋₁, a₀ = 3.",
        "checker": "rubric",
        "solution": "Every term equals the preceding constant term."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = aₙ₋₁ + 2, a₀ = 0.",
        "checker": "rubric",
        "solution": "Consecutive values of 2n differ by 2."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = aₙ₋₁ + 2, a₀ = 3.",
        "checker": "rubric",
        "solution": "Consecutive values again differ by 2, but the initial value is 3."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = 5aₙ₋₁, a₀ = 1.",
        "checker": "rubric",
        "solution": "Each power 5ⁿ is 5 times the preceding power."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "aₙ = aₙ₋₁ + 2n − 1, a₀ = 0.",
        "checker": "rubric",
        "solution": "Use n² − (n − 1)² = 2n − 1."
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "aₙ = aₙ₋₁ + 2n, a₀ = 0.",
        "checker": "rubric",
        "solution": "The difference (n² + n) − ((n − 1)² + (n − 1)) is 2n."
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "aₙ = 2n − 1 − aₙ₋₁, a₀ = 1.",
        "checker": "rubric",
        "solution": "Since aₙ + aₙ₋₁ = n + (n − 1) + (−1)ⁿ + (−1)ⁿ⁻¹ = 2n − 1, rearrange."
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "aₙ = naₙ₋₁, a₀ = 1.",
        "checker": "rubric",
        "solution": "The factorial definition gives n! = n(n − 1)! and 0! = 1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-015",
    "mode": "rubric",
    "answer": "All four sequences satisfy aₙ = aₙ₋₁ + 2aₙ₋₂ + 2n − 9.",
    "solution": "First let pₙ = −n + 2. Then pₙ₋₁ + 2pₙ₋₂ + 2n − 9 = (−n + 3) + 2(−n + 4) + 2n − 9 = −n + 2 = pₙ, proving (a). The homogeneous additions satisfy hₙ = hₙ₋₁ + 2hₙ₋₂: for hₙ = (−1)ⁿ, the right side is −hₙ + 2hₙ = hₙ; for hₙ = 2ⁿ, it is 2ⁿ⁻¹ + 2·2ⁿ⁻² = 2ⁿ. Adding these homogeneous solutions to pₙ proves (b)–(d).",
    "hints": [
      "Verify the particular sequence −n + 2 once, then handle the added terms separately.",
      "For a linear recurrence, a particular solution plus a homogeneous solution remains a solution."
    ],
    "checker": "rubric",
    "rubric": [
      "Verifies the nonhomogeneous particular solution in part (a).",
      "Shows that (−1)ⁿ and 2ⁿ satisfy the associated homogeneous recurrence.",
      "Uses these facts or direct substitution to establish every part (b)–(d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = −n + 2 is a solution.",
        "checker": "rubric",
        "solution": "Substitution gives (−n + 3) + 2(−n + 4) + 2n − 9 = −n + 2."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = 5(−1)ⁿ − n + 2 is a solution.",
        "checker": "rubric",
        "solution": "The added 5(−1)ⁿ satisfies the homogeneous recurrence, so adding it preserves the calculation in (a)."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = 3(−1)ⁿ + 2ⁿ − n + 2 is a solution.",
        "checker": "rubric",
        "solution": "Both added terms satisfy the homogeneous recurrence; combine them with the particular solution from (a)."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = 7·2ⁿ − n + 2 is a solution.",
        "checker": "rubric",
        "solution": "The added 7·2ⁿ satisfies the homogeneous recurrence, so the full expression satisfies the original recurrence."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-016",
    "mode": "rubric",
    "answer": "a) aₙ = 5(−1)ⁿ. b) aₙ = 1 + 3n. c) aₙ = 4 − n(n + 1)/2. d) aₙ = 3 − 2ⁿ⁺². e) aₙ = 2(n + 1)!. f) aₙ = 3·2ⁿn!. g) aₙ = (2n − 1 + 29(−1)ⁿ)/4.",
    "solution": "Iterate and collect the accumulated sums or products. In (d), aₙ = −2ⁿ − 3(2ⁿ − 1) = 3 − 4·2ⁿ. In (e), the multiplier product is 2·3·…·(n + 1) = (n + 1)!. In (f), it is 2ⁿn!. In (g), write aₙ = C(−1)ⁿ + An + B; matching coefficients gives A = 1/2, B = −1/4, and a₀ = 7 gives C = 29/4.",
    "hints": [
      "Write the first few iterates without simplifying too early, then identify the pattern.",
      "For products such as 2·4·6·…·(2n), factor one 2 from every factor."
    ],
    "checker": "rubric",
    "rubric": [
      "Derives each closed form by iteration or an equivalent valid method.",
      "Includes the effect of every initial condition and all accumulated sums or products.",
      "Checks the n = 0 value and at least one recurrence step, especially for part (g)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = 5(−1)ⁿ.",
        "checker": "rubric",
        "solution": "Iteration gives 5, −5, 5, …, so aₙ = (−1)ⁿa₀."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = 1 + 3n.",
        "checker": "rubric",
        "solution": "The recurrence adds 3 exactly n times to the initial 1."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = 4 − n(n + 1)/2.",
        "checker": "rubric",
        "solution": "aₙ = 4 − ∑_{k=1}^{n} k = 4 − n(n + 1)/2."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = 3 − 2ⁿ⁺².",
        "checker": "rubric",
        "solution": "aₙ = 2ⁿ(−1) − 3(1 + 2 + … + 2ⁿ⁻¹) = −2ⁿ − 3(2ⁿ − 1) = 3 − 2ⁿ⁺²."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "aₙ = 2(n + 1)!.",
        "checker": "rubric",
        "solution": "aₙ = 2[(n + 1)n·…·2] = 2(n + 1)!."
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "aₙ = 3·2ⁿn!.",
        "checker": "rubric",
        "solution": "aₙ = 3(2n)(2(n − 1))·…·(2·1) = 3·2ⁿn!."
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "aₙ = (2n − 1 + 29(−1)ⁿ)/4.",
        "checker": "rubric",
        "solution": "Use aₙ = C(−1)ⁿ + n/2 − 1/4. The initial condition gives C − 1/4 = 7, hence C = 29/4. It also gives a₁ = −7 as required."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-017",
    "mode": "rubric",
    "answer": "a) aₙ = 2·3ⁿ. b) aₙ = 3 + 2n. c) aₙ = 1 + n(n + 1)/2. d) aₙ = (n + 2)². e) aₙ = 1. f) aₙ = (3ⁿ⁺¹ − 1)/2. g) aₙ = 5n!. h) aₙ = 2ⁿn!.",
    "solution": "Iteration gives a geometric product in (a), arithmetic sums in (b)–(d), and geometric sums in (e)–(f). In (d), aₙ = 4 + n(n + 1) + 3n = n² + 4n + 4. In (f), aₙ = 3ⁿ + (3ⁿ − 1)/(3 − 1). In (g) and (h), the accumulated multipliers are n! and 2ⁿn!.",
    "hints": [
      "After n steps, identify whether you have a sum of increments or a product of multipliers.",
      "Use 1 + r + … + rⁿ⁻¹ = (rⁿ − 1)/(r − 1) when r ≠ 1."
    ],
    "checker": "rubric",
    "rubric": [
      "Gives a correct closed form for all eight recurrences.",
      "Shows the iterative accumulation used, including arithmetic and geometric sums where needed.",
      "Verifies initial conditions and preserves the n-dependent multipliers in (g) and (h)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = 2·3ⁿ.",
        "checker": "rubric",
        "solution": "Each step multiplies by 3, so aₙ = 2·3ⁿ."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = 3 + 2n.",
        "checker": "rubric",
        "solution": "The initial 3 receives n increments of 2."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "aₙ = 1 + n(n + 1)/2.",
        "checker": "rubric",
        "solution": "aₙ = 1 + ∑_{k=1}^{n} k = 1 + n(n + 1)/2."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = (n + 2)².",
        "checker": "rubric",
        "solution": "aₙ = 4 + ∑_{k=1}^{n}(2k + 3) = 4 + n(n + 1) + 3n = (n + 2)²."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "aₙ = 1.",
        "checker": "rubric",
        "solution": "aₙ = 2ⁿ − (2ⁿ − 1) = 1; the initial value is the fixed point."
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "aₙ = (3ⁿ⁺¹ − 1)/2.",
        "checker": "rubric",
        "solution": "aₙ = 3ⁿ + (3ⁿ⁻¹ + … + 1) = 3ⁿ + (3ⁿ − 1)/2 = (3ⁿ⁺¹ − 1)/2."
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "aₙ = 5n!.",
        "checker": "rubric",
        "solution": "The product of multipliers is n·(n − 1)·…·1 = n!."
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "aₙ = 2ⁿn!.",
        "checker": "rubric",
        "solution": "The multipliers supply n copies of 2 as well as n!."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-018",
    "mode": "mixed",
    "answer": "a) A₀ = 1000 and Aₙ = 1.09Aₙ₋₁ for n ≥ 1. b) Aₙ = 1000(1.09)ⁿ dollars. c) Approximately $5,529,040.79 after 100 years.",
    "solution": "Annual compounding multiplies the previous balance by 1 + 0.09 = 1.09. Iterating n times multiplies the initial $1000 by (1.09)ⁿ. Therefore A₁₀₀ = 1000(1.09)¹⁰⁰ = 5529040.791825…, which rounds to $5,529,040.79.",
    "hints": [
      "The growth factor is 1.09, not 0.09.",
      "After 100 years, 100 annual multiplications have occurred."
    ],
    "checker": "rubric",
    "rubric": [
      "Includes both the initial balance and the annual recurrence in part (a).",
      "Derives the correct geometric explicit formula in part (b).",
      "Uses n = 100 and rounds the resulting dollar amount sensibly in part (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A₀ = 1000; Aₙ = 1.09Aₙ₋₁ for n ≥ 1.",
        "checker": "rubric",
        "solution": "Each year adds 9% of the previous balance, equivalent to multiplying that balance by 1.09."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Aₙ = 1000(1.09)ⁿ dollars.",
        "checker": "rubric",
        "solution": "Iteration gives Aₙ = 1000·1.09·…·1.09 with n factors."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "5529040.79",
        "accepted": [
          "5529040.79182587925544",
          "5529040.791825879"
        ],
        "checker": "number",
        "solution": "A₁₀₀ = 1000(1.09)¹⁰⁰ ≈ 5529040.791826, so the balance is $5,529,040.79 to the nearest cent."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-019",
    "mode": "mixed",
    "answer": "a) Bₙ = 3Bₙ₋₁ for n ≥ 1, where B₀ is the initial population. b) 5,904,900 bacteria.",
    "solution": "Tripling every hour gives three copies of the preceding population, so Bₙ = 3Bₙ₋₁ and Bₙ = B₀·3ⁿ. With B₀ = 100 and n = 10, B₁₀ = 100·3¹⁰ = 100·59049 = 5,904,900.",
    "hints": [
      "Use an exponent equal to the number of elapsed hours.",
      "Evaluate 3¹⁰ before multiplying by the initial 100."
    ],
    "checker": "rubric",
    "rubric": [
      "States the tripling recurrence and identifies the initial population in part (a).",
      "Uses ten tripling steps and obtains 5,904,900 in part (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Bₙ = 3Bₙ₋₁ for n ≥ 1, with B₀ equal to the starting population.",
        "checker": "rubric",
        "solution": "Each hourly population is three times the population one hour earlier."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "5904900",
        "checker": "number",
        "solution": "B₁₀ = 100·3¹⁰ = 100·59049 = 5904900."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-020",
    "mode": "mixed",
    "answer": "a) P₀ = 7.6 and Pₙ = 1.0112Pₙ₋₁, in billions. b) Pₙ = 7.6(1.0112)ⁿ billion. c) Approximately 10.98 billion people in 2050.",
    "solution": "A 1.12% increase corresponds to multiplication by 1 + 0.0112 = 1.0112. Thus Pₙ = 7.6(1.0112)ⁿ billion. Since 2050 − 2017 = 33, P₃₃ = 7.6(1.0112)³³ ≈ 10.975810576 billion, or about 10.98 billion.",
    "hints": [
      "Convert 1.12% to 0.0112 and add it to 1.",
      "Use n = 33 for 2050, not n = 2050."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses the correct 2017 initial population and yearly growth factor.",
      "Gives the explicit geometric formula in billions.",
      "Uses 33 years for 2050 and reports approximately 10.98 billion."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "P₀ = 7.6; Pₙ = 1.0112Pₙ₋₁ for n ≥ 1, measured in billions.",
        "checker": "rubric",
        "solution": "The new population is the old population plus 1.12% of it."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Pₙ = 7.6(1.0112)ⁿ billion.",
        "checker": "rubric",
        "solution": "Iterate the yearly multiplier n times."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "10.975810576",
        "accepted": [
          "10.98",
          "10.97581057622188"
        ],
        "checker": "number",
        "solution": "P₃₃ = 7.6(1.0112)³³ ≈ 10.975810576 billion, approximately 10.98 billion."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-021",
    "mode": "mixed",
    "answer": "a) C₀ = 0 and Cₙ = Cₙ₋₁ + n for n ≥ 1. b) 78 cars. c) Cₙ = n(n + 1)/2.",
    "solution": "The cumulative total Cₙ adds the n cars made in month n to the previous total. Hence Cₙ = Cₙ₋₁ + n = 1 + 2 + … + n. A year has 12 months, so C₁₂ = 12·13/2 = 78. The same sum gives the explicit formula Cₙ = n(n + 1)/2.",
    "hints": [
      "Distinguish monthly production n from cumulative production Cₙ.",
      "A first year contains 12 monthly increments."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines a cumulative recurrence with an appropriate initial condition.",
      "Computes the 12-month total as 78.",
      "Derives the triangular-number formula n(n + 1)/2."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "C₀ = 0; Cₙ = Cₙ₋₁ + n for n ≥ 1.",
        "checker": "rubric",
        "solution": "Add month n's n cars to the total through month n − 1."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "78",
        "checker": "number",
        "solution": "C₁₂ = 1 + 2 + … + 12 = 12·13/2 = 78."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Cₙ = n(n + 1)/2.",
        "checker": "rubric",
        "solution": "Iteration gives Cₙ = ∑_{k=1}^{n} k, whose arithmetic-series value is n(n + 1)/2."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-022",
    "mode": "mixed",
    "answer": "a) S₀ = 50000 and Sₙ = 1.05Sₙ₋₁ + 1000. b) $83,421.88 in 2025. c) Sₙ = 70000(1.05)ⁿ − 20000 dollars.",
    "solution": "The new salary is the old salary plus 5% of it plus $1000, giving Sₙ = 1.05Sₙ₋₁ + 1000. For the closed form, the constant −20000 is a fixed point because 1.05(−20000) + 1000 = −20000. Thus Sₙ + 20000 = 1.05(Sₙ₋₁ + 20000), so Sₙ = 70000(1.05)ⁿ − 20000. In 2025, n = 8 and S₈ ≈ $83,421.88.",
    "hints": [
      "The raise includes both a percentage and a fixed amount.",
      "For the explicit formula, examine Sₙ + 20000; 2025 is eight years after 2017."
    ],
    "checker": "rubric",
    "rubric": [
      "Includes the $50,000 initial salary and both raise components in the recurrence.",
      "Uses eight yearly raises for 2025 and obtains $83,421.88 to the nearest cent.",
      "Derives and checks the explicit formula Sₙ = 70000(1.05)ⁿ − 20000."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "S₀ = 50000; Sₙ = 1.05Sₙ₋₁ + 1000 for n ≥ 1.",
        "checker": "rubric",
        "solution": "Multiply the previous salary by 1.05, then add the fixed $1000 raise."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "83421.88",
        "accepted": [
          "83421.881065234375",
          "83421.8810652344"
        ],
        "checker": "number",
        "solution": "S₈ = 70000(1.05)⁸ − 20000 = 83421.881065…, so the 2025 salary is $83,421.88."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Sₙ = 70000(1.05)ⁿ − 20000 dollars.",
        "checker": "rubric",
        "solution": "Since Sₙ + 20000 = 1.05(Sₙ₋₁ + 20000), iterate to get Sₙ + 20000 = 70000(1.05)ⁿ."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-023",
    "mode": "rubric",
    "answer": "B(0) = 5000 and B(k) = (1 + 0.07/12)B(k − 1) − 100 for k ≥ 1, in dollars.",
    "solution": "Read B(k) as the balance after k monthly payments. Before payment, interest increases the old balance from B(k − 1) to B(k − 1) + (0.07/12)B(k − 1). Then subtract the $100 payment. The original loan supplies B(0) = 5000.",
    "hints": [
      "Apply monthly interest first and subtract the payment afterward.",
      "The annual rate is divided by 12; include the initial loan balance."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses monthly interest 0.07/12 on B(k − 1).",
      "Subtracts the $100 payment after interest and gives B(0) = 5000.",
      "Uses the balance indexing B(k) and B(k − 1) correctly."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-024",
    "mode": "rubric",
    "answer": "Let B(0) denote the original principal and q = 1 + r/12. a) B(k) = qB(k − 1) − P for k ≥ 1. b) For r > 0, P = B(0)rq^{T}/[12(q^{T} − 1)] = B(0)(r/12)/[1 − (1 + r/12)⁻ᵀ]. If r = 0, P = B(0)/T.",
    "solution": "Each month adds interest at rate r/12 and then subtracts P. Iterating gives B(k) = qᵏB(0) − P(qᵏ − 1)/(q − 1), because the payments form a geometric sum. Set B(T) = 0 and solve for P; using q − 1 = r/12 gives the stated payment. The zero-interest case follows by direct division because no interest accumulates. The source does not separately name the principal, so B(0) is defined here.",
    "hints": [
      "Set q = 1 + r/12 before iterating.",
      "To pay off the loan, impose B(T) = 0 and solve the resulting equation for P."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines the otherwise unnamed original principal as B(0) and gives the recurrence with monthly rate r/12.",
      "Derives the closed balance using a geometric sum or an equivalent method.",
      "Sets B(T) = 0 and solves correctly for P, with the r = 0 case handled or explicitly excluded."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "B(k) = (1 + r/12)B(k − 1) − P, k ≥ 1, with B(0) equal to the original principal.",
        "checker": "rubric",
        "solution": "Interest multiplies the previous balance by 1 + r/12, after which the payment P is subtracted."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P = B(0)(r/12)(1 + r/12)ᵀ/[(1 + r/12)ᵀ − 1] for r > 0; P = B(0)/T when r = 0.",
        "checker": "rubric",
        "solution": "From 0 = B(T) = qᵀB(0) − P(qᵀ − 1)/(q − 1), isolate P and substitute q − 1 = r/12."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-025",
    "mode": "rubric",
    "answer": "a) Blocks of 1s and 0s of increasing lengths: next 1, 1, 1. b) Odd integers once and even integers twice: next 9, 10, 10. c) Alternate 2ᵏ and 0: next 32, 0, 64. d) aₙ = 3·2ⁿ⁻¹: next 384, 768, 1536. e) Subtract 7 each time: next −34, −41, −48. f) aₙ = n(n + 1)/2 + 2: next 57, 68, 80. g) aₙ = 2n³: next 1024, 1458, 2000. h) aₙ = n! + 1: next 362881, 3628801, 39916801.",
    "solution": "Look for repetition, differences, ratios, or familiar factorial and power patterns. The successive differences in (f) are 2, 3, 4, …, so the next differences are 10, 11, 12. In (h), subtracting 1 gives 1!, 2!, 3!, … . Each proposed rule reproduces every listed term before it is used for the continuation.",
    "hints": [
      "Test simple differences and ratios first; if these fail, compare with n², n³, 2ⁿ, or n!.",
      "A correct rule must reproduce the entire displayed prefix, not just its last few terms."
    ],
    "checker": "rubric",
    "rubric": [
      "Provides an unambiguous generating formula or rule for every part.",
      "Checks each rule against the full given prefix.",
      "Continues every sequence with the correct next three terms under the stated rule."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Use alternating blocks of 1s and 0s, with block lengths 1, 2, 3, …; next: 1, 1, 1.",
        "checker": "rubric",
        "solution": "After 1; 0; 11; 00; 111; 000, the four-1 block has begun, so three more 1s complete it."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "List each odd positive integer once and each even positive integer twice; next: 9, 10, 10.",
        "checker": "rubric",
        "solution": "The groups are 1; 2, 2; 3; 4, 4; 5; 6, 6; 7; 8, 8; then 9; 10, 10."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Alternate successive powers of 2 with 0; next: 32, 0, 64.",
        "checker": "rubric",
        "solution": "The nonzero terms are 1, 2, 4, 8, 16, so doubling and alternating gives 32, 0, 64."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "aₙ = 3·2ⁿ⁻¹; next: 384, 768, 1536.",
        "checker": "rubric",
        "solution": "Each term doubles the preceding term; continue from 192."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "aₙ = 15 − 7(n − 1); next: −34, −41, −48.",
        "checker": "rubric",
        "solution": "The common difference is −7, so subtract 7 successively from −27."
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "aₙ = n(n + 1)/2 + 2; next: 57, 68, 80.",
        "checker": "rubric",
        "solution": "Differences increase by 1, hence 47 + 10 = 57, 57 + 11 = 68, and 68 + 12 = 80."
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "aₙ = 2n³; next: 1024, 1458, 2000.",
        "checker": "rubric",
        "solution": "Divide the listed terms by 2 to obtain 1, 8, 27, 64, …, the cubes; use n = 8, 9, 10 next."
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "aₙ = n! + 1; next: 362881, 3628801, 39916801.",
        "checker": "rubric",
        "solution": "The given terms are 1! + 1 through 8! + 1; evaluate 9! + 1, 10! + 1, and 11! + 1."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-026",
    "mode": "rubric",
    "answer": "a) aₙ = n² + 2: next 123, 146, 171. b) aₙ = 4n + 3: next 47, 51, 55. c) Positive integers in binary: next 1100, 1101, 1110. d) Supply the initial 1 separately, then list each prime p exactly 2p − 1 times: next 7, 7, 7. e) aₙ = 3ⁿ⁻¹ − 1: next 59048, 177146, 531440. f) a₁ = 1 and aₙ = (2n − 1)aₙ₋₁: next 654729075, 13749310575, 316234143225. g) Alternating blocks of 1s and 0s with lengths 1, 2, 3, …: next 0, 0, 0. h) a₁ = 2 and aₙ = aₙ₋₁²: next 18446744073709551616, 340282366920938463463374607431768211456, 115792089237316195423570985008687907853269984665640564039457584007913129639936.",
    "solution": "Match each prefix to a simple rule. In (a), subtract 2 to see squares; in (e), add 1 to see powers of 3. In (f), each term multiplies the previous one by the next odd integer. In (h), repeated squaring gives aₙ = 2^(2ⁿ⁻¹). The block, prime-repetition, and binary rules are read directly from the displayed terms.",
    "hints": [
      "Try adding or subtracting a constant to expose a familiar sequence.",
      "For (c), read the entries as binary numerals rather than decimal integers; for (h), square the previous term."
    ],
    "checker": "rubric",
    "rubric": [
      "States a simple, unambiguous rule for each of the eight prefixes.",
      "Verifies that every rule generates all displayed terms.",
      "Gives exactly three correct continuations for each part, preserving binary notation in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "aₙ = n² + 2; next: 123, 146, 171.",
        "checker": "rubric",
        "solution": "Subtracting 2 gives 1, 4, 9, 16, …; therefore continue with 11² + 2, 12² + 2, 13² + 2."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "aₙ = 4n + 3; next: 47, 51, 55.",
        "checker": "rubric",
        "solution": "The common difference is 4, so continue adding 4 to 43."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Write the positive integers successively in binary; next: 1100, 1101, 1110.",
        "checker": "rubric",
        "solution": "The list ends at binary 1011, which is decimal 11; the next integers 12, 13, 14 are 1100, 1101, 1110."
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Supply the initial 1 separately, then list each prime p exactly 2p − 1 times; next: 7, 7, 7.",
        "checker": "rubric",
        "solution": "The initial 1 is supplied separately. Thereafter, the rule gives three 2s, five 3s, and seven 5s; the next prime is 7, so the next three terms are 7, 7, 7."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "aₙ = 3ⁿ⁻¹ − 1; next: 59048, 177146, 531440.",
        "checker": "rubric",
        "solution": "Adding 1 produces 1, 3, 9, 27, …; use the next powers 3¹⁰, 3¹¹, 3¹² and subtract 1."
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "a₁ = 1, aₙ = (2n − 1)aₙ₋₁; next: 654729075, 13749310575, 316234143225.",
        "checker": "rubric",
        "solution": "The terms are the odd double factorials (2n − 1)!!; multiply the last displayed term successively by 19, 21, and 23."
      },
      {
        "label": "g",
        "mode": "rubric",
        "answer": "Alternate blocks of 1s and 0s whose lengths increase 1, 2, 3, …; next: 0, 0, 0.",
        "checker": "rubric",
        "solution": "After blocks 1; 00; 111; 0000; 11111, a block of six 0s begins."
      },
      {
        "label": "h",
        "mode": "rubric",
        "answer": "a₁ = 2 and aₙ = aₙ₋₁²; next: 18446744073709551616, 340282366920938463463374607431768211456, 115792089237316195423570985008687907853269984665640564039457584007913129639936.",
        "checker": "rubric",
        "solution": "Repeated squaring gives 2, 4, 16, 256, …, equivalently aₙ = 2^(2ⁿ⁻¹); the next terms are 2⁶⁴, 2¹²⁸, and 2²⁵⁶."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-027",
    "mode": "rubric",
    "answer": "If {x} denotes the integer nearest x, then aₙ = n + {√n}.",
    "solution": "Let k = {√n}. Because k is the nearest integer to √n, k − 1/2 < √n < k + 1/2. Squaring and using integrality gives k² − k + 1 ≤ n ≤ k² + k. Therefore k² + 1 ≤ n + k ≤ k² + 2k < (k + 1)², so n + k is not a square. Among the integers from 1 through n + k, exactly the k squares 1², …, k² are excluded. Thus n + k is the (n + k − k) = nth positive nonsquare, proving aₙ = n + k.",
    "hints": [
      "Set k equal to the nearest integer to √n and translate that choice into inequalities.",
      "Count how many perfect squares do not exceed the candidate n + k."
    ],
    "checker": "rubric",
    "rubric": [
      "Converts the nearest-integer condition into correct strict inequalities and then integer bounds on n.",
      "Shows n + k lies strictly between k² and (k + 1)², hence is nonsquare.",
      "Counts exactly k squares up to n + k and concludes that its nonsquare index is n."
    ],
    "readAloud": "The braces around square root of n mean the nearest integer, not the fractional part.",
    "verify": "For n = 5, k = 2 and n + k = 7; the nonsquares begin 2, 3, 5, 6, 7, so the fifth term is 7."
  },
  {
    "id": "rosen-ch2-ex-2-4-028",
    "mode": "rubric",
    "answer": "aₙ = ⌊√(2n) + 1/2⌋.",
    "solution": "Let Tₖ = k(k + 1)/2. Because k occurs k times, aₙ = k exactly when Tₖ₋₁ < n ≤ Tₖ. These inequalities are equivalent to k² − k < 2n ≤ k² + k. Since 2n is an integer, they are also equivalent to (k − 1/2)² ≤ 2n < (k + 1/2)², and hence to k ≤ √(2n) + 1/2 < k + 1. The floor is therefore k, as required.",
    "hints": [
      "The value k occupies positions after the triangular number Tₖ₋₁ through Tₖ.",
      "Translate k ≤ √(2n) + 1/2 < k + 1 back into bounds on n."
    ],
    "checker": "rubric",
    "rubric": [
      "Identifies the position range Tₖ₋₁ < n ≤ Tₖ for the repeated value k.",
      "Correctly transforms those bounds into k ≤ √(2n) + 1/2 < k + 1, including endpoint handling.",
      "Concludes that the floor expression equals aₙ."
    ],
    "verify": "At n = 4, the formula gives ⌊√8 + 1/2⌋ = 3, matching 1, 2, 2, 3."
  },
  {
    "id": "rosen-ch2-ex-2-4-029",
    "mode": "auto",
    "answer": "a) 20. b) 11. c) 30. d) 511.",
    "solution": "Sigma notation adds the indexed terms. Expand (a) as 2 + 3 + 4 + 5 + 6 = 20 and (b) as 1 − 2 + 4 − 8 + 16 = 11. In (c), the summand 3 is constant over ten indices. In (d), consecutive powers cancel, leaving 2⁹ − 2⁰ = 511.",
    "hints": [
      "Count indices inclusively: from 1 to 10 there are ten terms.",
      "For (d), write the first two and last two terms to see the telescoping."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "20",
        "checker": "number",
        "solution": "∑_{k=1}^{5}(k + 1) = 2 + 3 + 4 + 5 + 6 = 20."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "11",
        "checker": "number",
        "solution": "∑_{j=0}^{4}(−2)ʲ = 1 − 2 + 4 − 8 + 16 = 11."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "30",
        "checker": "number",
        "solution": "Ten copies of 3 sum to 10·3 = 30."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "511",
        "checker": "number",
        "solution": "The sum telescopes to 2⁹ − 2⁰ = 512 − 1 = 511."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-030",
    "mode": "auto",
    "answer": "a) 16. b) 84. c) 176/105. d) 4.",
    "solution": "The index j runs over the four elements of S = {1, 3, 5, 7}. Substitute each element once. The reciprocal sum is 1 + 1/3 + 1/5 + 1/7 = (105 + 35 + 21 + 15)/105 = 176/105; the constant summand 1 contributes once per set element.",
    "hints": [
      "There are exactly four terms in every part.",
      "For (c), use common denominator 105."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "16",
        "checker": "number",
        "solution": "1 + 3 + 5 + 7 = 16."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "84",
        "checker": "number",
        "solution": "1² + 3² + 5² + 7² = 1 + 9 + 25 + 49 = 84."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "176/105",
        "checker": "number",
        "solution": "1 + 1/3 + 1/5 + 1/7 = 176/105."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "4",
        "checker": "number",
        "solution": "Summing 1 over four elements gives 4."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-031",
    "mode": "auto",
    "answer": "a) 1533. b) 510. c) 4923. d) 9842.",
    "solution": "For a geometric sum with ratio r ≠ 1, use first·(rᴺ − 1)/(r − 1), where N is the number of terms. Thus (a) is 3(2⁹ − 1) = 1533; (b) is 2(2⁸ − 1) = 510. For (c), the first term is 9 and there are seven terms: 9((−3)⁷ − 1)/(−4) = 4923. For (d), 2∑_{j=0}^{8}(−3)ʲ = 2(1 − (−3)⁹)/(1 + 3) = 9842.",
    "hints": [
      "Count the terms before applying the geometric-sum formula.",
      "A sum starting at j = 2 has first term (−3)² = 9."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1533",
        "checker": "number",
        "solution": "3(2⁹ − 1)/(2 − 1) = 3·511 = 1533."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "510",
        "checker": "number",
        "solution": "This is ∑_{j=0}^{8}2ʲ − 1 = 511 − 1 = 510."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "4923",
        "checker": "number",
        "solution": "Seven terms starting at 9 give 9((−3)⁷ − 1)/(−3 − 1) = 4923."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "9842",
        "checker": "number",
        "solution": "2[1 − (−3)⁹]/[1 − (−3)] = 2(1 + 19683)/4 = 9842."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-032",
    "mode": "auto",
    "answer": "a) 10. b) 9330. c) 21215. d) 511.",
    "solution": "Split sums term by term. In (a), 1 + (−1)ʲ is 2 at even j and 0 at odd j; five even indices give 10. Use ∑3ʲ = 9841 and ∑2ʲ = 511 for j = 0 through 8. Then (b) is 9841 − 511 = 9330 and (c) is 2·9841 + 3·511 = 21215. Part (d) telescopes to 2⁹ − 1 = 511.",
    "hints": [
      "Use linearity: a sum of a combination equals the same combination of sums.",
      "For (a), list only the even indices j = 0, 2, 4, 6, 8."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "10",
        "checker": "number",
        "solution": "The five even indices contribute 2 each, and the four odd indices contribute 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "9330",
        "checker": "number",
        "solution": "(3⁹ − 1)/(3 − 1) − (2⁹ − 1)/(2 − 1) = 9841 − 511 = 9330."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "21215",
        "checker": "number",
        "solution": "2·9841 + 3·511 = 19682 + 1533 = 21215."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "511",
        "checker": "number",
        "solution": "Consecutive powers cancel, leaving 2⁹ − 2⁰ = 511."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-033",
    "mode": "auto",
    "answer": "a) 21. b) 78. c) 18. d) 18.",
    "solution": "Evaluate the inner sum first for each fixed outer index. In (a), the outer values are 9 and 12. In (b), separate terms to get 8∑i + 9∑j = 24 + 54 = 78. In (c), each inner sum is 3i. In (d), factor the double sum as (∑_{i=0}^{2}i)(∑_{j=1}^{3}j) = 3·6 = 18.",
    "hints": [
      "Hold i fixed while summing over j.",
      "When the summand is ij with independent index ranges, factor the double sum into two single sums."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "21",
        "checker": "number",
        "solution": "For i = 1 and 2, the inner sums are 2 + 3 + 4 = 9 and 3 + 4 + 5 = 12; their total is 21."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "78",
        "checker": "number",
        "solution": "∑ᵢ∑ⱼ(2i + 3j) = 8(0 + 1 + 2) + 9(0 + 1 + 2 + 3) = 24 + 54 = 78."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "18",
        "checker": "number",
        "solution": "Each inner sum is 3i, so the total is 3(1 + 2 + 3) = 18."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "18",
        "checker": "number",
        "solution": "(0 + 1 + 2)(1 + 2 + 3) = 3·6 = 18."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-034",
    "mode": "auto",
    "answer": "a) 3. b) 78. c) 9. d) 180.",
    "solution": "Work from the inner sum outward. In (a), the inner value is 2i − 3 for i = 1, 2, 3, giving −1 + 1 + 3 = 3. In (b), the two contributions total 54 + 24 = 78. In (c), every inner sum is 0 + 1 + 2 = 3. In (d), factor i²j³ to obtain (∑i²)(∑j³) = 5·36 = 180.",
    "hints": [
      "The outer and inner ranges are not always the same; copy the limits carefully.",
      "For (d), use 0³ + 1³ + 2³ + 3³ = 36."
    ],
    "checker": "text",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "3",
        "checker": "number",
        "solution": "For fixed i, ∑_{j=1}^{2}(i − j) = 2i − 3; summing over i gives −1 + 1 + 3 = 3."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "78",
        "checker": "number",
        "solution": "The 3i terms give 9(0 + 1 + 2 + 3) = 54; the 2j terms give 4·2(0 + 1 + 2) = 24."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "9",
        "checker": "number",
        "solution": "There are three identical inner sums, each 0 + 1 + 2 = 3, so the total is 9."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "180",
        "checker": "number",
        "solution": "(0² + 1² + 2²)(0³ + 1³ + 2³ + 3³) = 5·36 = 180."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-035",
    "mode": "rubric",
    "answer": "∑_{j=1}^{n}(aⱼ − aⱼ₋₁) = aₙ − a₀.",
    "solution": "Write the sum as (a₁ − a₀) + (a₂ − a₁) + (a₃ − a₂) + … + (aₙ₋₁ − aₙ₋₂) + (aₙ − aₙ₋₁). Each −aⱼ cancels with the +aⱼ in the following bracket for j = 1 through n − 1. Only −a₀ from the first bracket and +aₙ from the last remain. This cancellation is why the sum is called telescoping.",
    "hints": [
      "Expand at least the first two and last two terms.",
      "Track which terms cancel and which two endpoints survive."
    ],
    "checker": "rubric",
    "rubric": [
      "Expands the sum with correct indices and parentheses.",
      "Explains cancellation of every intermediate a₁ through aₙ₋₁.",
      "Identifies the surviving expression aₙ − a₀."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-036",
    "mode": "rubric",
    "answer": "∑_{k=1}^{n}1/[k(k + 1)] = n/(n + 1).",
    "solution": "Replace each term by 1/k − 1/(k + 1). The sum becomes (1 − 1/2) + (1/2 − 1/3) + … + (1/n − 1/(n + 1)). Every intermediate reciprocal cancels, leaving 1 − 1/(n + 1) = n/(n + 1). This is the telescoping pattern of Exercise 35 after reindexing.",
    "hints": [
      "Use the supplied partial-fraction identity before expanding.",
      "Only the first positive term and final negative term survive."
    ],
    "checker": "rubric",
    "rubric": [
      "Applies 1/[k(k + 1)] = 1/k − 1/(k + 1) to every term.",
      "Shows the telescoping cancellation and correct endpoints.",
      "Simplifies the result to n/(n + 1)."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-037",
    "mode": "rubric",
    "answer": "a) ∑_{k=1}^{n}(2k − 1) = n². b) ∑_{k=1}^{n}k = n(n + 1)/2.",
    "solution": "Summing k² − (k − 1)² = 2k − 1 from 1 to n gives n² − 0² = n² by telescoping, proving (a). Since the same sum equals 2∑k − ∑1 = 2∑k − n, we obtain 2∑k − n = n². Add n and divide by 2 to get ∑k = n(n + 1)/2.",
    "hints": [
      "The left side telescopes before you evaluate the right side.",
      "For (b), split 2k − 1 into 2k and the constant −1."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses telescoping to obtain n² for the sum in part (a).",
      "Rewrites the same sum as 2∑k − n.",
      "Solves for ∑k and gives n(n + 1)/2."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "∑_{k=1}^{n}(2k − 1) = n².",
        "checker": "rubric",
        "solution": "The summed left side is ∑[k² − (k − 1)²] = n², so the summed right side has the same value."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "∑_{k=1}^{n}k = n(n + 1)/2.",
        "checker": "rubric",
        "solution": "From n² = 2∑k − n, isolate ∑k = (n² + n)/2 = n(n + 1)/2."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-038",
    "mode": "rubric",
    "answer": "∑_{k=1}^{n}k² = n(n + 1)(2n + 1)/6.",
    "solution": "Take aₖ = k³ in Exercise 35. Then n³ = ∑_{k=1}^{n}[k³ − (k − 1)³] = ∑(3k² − 3k + 1) = 3∑k² − 3∑k + n. Substitute ∑k = n(n + 1)/2 and rearrange: 3∑k² = n³ + 3n(n + 1)/2 − n. Dividing by 3 and factoring gives ∑k² = n(n + 1)(2n + 1)/6.",
    "hints": [
      "Expand k³ − (k − 1)³; its quadratic coefficient is 3.",
      "Substitute the formula for ∑k before isolating ∑k²."
    ],
    "checker": "rubric",
    "rubric": [
      "Uses the telescoping choice aₖ = k³ and expands the difference correctly.",
      "Substitutes the known arithmetic-series formula and isolates the square sum.",
      "Obtains the factored formula n(n + 1)(2n + 1)/6."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-039",
    "mode": "auto",
    "answer": "15150",
    "solution": "Subtract the unwanted initial segment: ∑_{k=100}^{200}k = ∑_{k=1}^{200}k − ∑_{k=1}^{99}k = 200·201/2 − 99·100/2 = 20100 − 4950 = 15150.",
    "hints": [
      "Use the sum through 200 minus the sum through 99.",
      "Do not subtract the sum through 100, because 100 is included."
    ],
    "checker": "number",
    "verify": "There are 101 terms with average (100 + 200)/2 = 150, and 101·150 = 15150."
  },
  {
    "id": "rosen-ch2-ex-2-4-040",
    "mode": "auto",
    "answer": "380477799",
    "solution": "Use ∑_{k=1}^{n}k³ = [n(n + 1)/2]². The requested sum is (200·201/2)² − (98·99/2)² = 20100² − 4851² = 404010000 − 23532201 = 380477799. Subtract through 98 because the sum starts at 99.",
    "hints": [
      "The cube-sum formula is the square of the corresponding triangular number.",
      "The excluded lower segment ends at 98."
    ],
    "checker": "number"
  },
  {
    "id": "rosen-ch2-ex-2-4-041",
    "mode": "auto",
    "answer": "34320",
    "solution": "Expand k²(k − 3) = k³ − 3k². For 10 ≤ k ≤ 20, ∑k³ = 210² − 45² = 42075 and ∑k² = 20·21·41/6 − 9·10·19/6 = 2870 − 285 = 2585. Therefore the value is 42075 − 3·2585 = 34320.",
    "hints": [
      "Expand the polynomial before applying the standard sum formulas.",
      "Use upper bound 20 minus lower partial sum through 9."
    ],
    "checker": "number"
  },
  {
    "id": "rosen-ch2-ex-2-4-042",
    "mode": "auto",
    "answer": "79134",
    "solution": "Expand (k − 1)(2k² + 1) = 2k³ − 2k² + k − 1. Over 10 ≤ k ≤ 20, the sums of k³, k², and k are 42075, 2585, and 165, and there are 11 terms. Thus the value is 2·42075 − 2·2585 + 165 − 11 = 79134.",
    "hints": [
      "Expand fully, then evaluate each power sum separately.",
      "The constant −1 contributes −11, not −1."
    ],
    "checker": "number"
  },
  {
    "id": "rosen-ch2-ex-2-4-043",
    "mode": "rubric",
    "answer": "Let r = ⌊√m⌋. Then ∑_{k=0}^{m}⌊√k⌋ = r(m − r² + 1) + r(r − 1)(4r + 1)/6.",
    "solution": "For each j ≥ 1, the value ⌊√k⌋ = j occurs from k = j² through (j + 1)² − 1, a block of 2j + 1 indices. With r = ⌊√m⌋, the complete blocks j = 1 through r − 1 contribute ∑_{j=1}^{r−1}j(2j + 1) = r(r − 1)(4r + 1)/6. The final incomplete block has m − r² + 1 terms, each equal to r. Adding both contributions gives the formula.",
    "hints": [
      "Group indices into intervals between consecutive squares.",
      "Let r = ⌊√m⌋ and treat the final block separately because it may be incomplete."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines r = ⌊√m⌋ and identifies each constant-value block correctly.",
      "Sums all complete blocks with correct counts and standard power-sum formulas.",
      "Adds the final partial block r(m − r² + 1) and presents the complete closed formula."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-044",
    "mode": "rubric",
    "answer": "Let r = ⌊∛m⌋. Then ∑_{k=0}^{m}⌊∛k⌋ = r(m − r³ + 1) + r²(r − 1)(3r + 1)/4.",
    "solution": "The value ⌊∛k⌋ = j holds for j³ ≤ k ≤ (j + 1)³ − 1, so that block has (j + 1)³ − j³ = 3j² + 3j + 1 indices and contributes 3j³ + 3j² + j. Summing j = 1 through r − 1 gives r²(r − 1)(3r + 1)/4. The remaining indices r³ through m form a block of m − r³ + 1 terms of value r, which supplies the other term.",
    "hints": [
      "Use cubes, rather than squares, to delimit the constant-value blocks.",
      "The last block starts at r³ and includes m, so its size is m − r³ + 1."
    ],
    "checker": "rubric",
    "rubric": [
      "Defines r = ⌊∛m⌋ and uses correct cube-delimited blocks.",
      "Computes the complete-block contribution r²(r − 1)(3r + 1)/4.",
      "Includes the final partial block and combines both contributions without off-by-one errors."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-045",
    "mode": "auto",
    "answer": "a) 0. b) 1680. c) 1. d) 1024.",
    "solution": "Product notation multiplies rather than adds the indexed factors. In (a), the factor i = 0 makes the whole product 0. In (b), 5·6·7·8 = 1680. In (c), exactly 50 of the 100 factors are −1, so the product is 1. In (d), ten factors of 2 give 2¹⁰ = 1024.",
    "hints": [
      "Read ∏ as ‘product’ and include both endpoint indices.",
      "For (c), count negative factors instead of multiplying all 100 factors one at a time."
    ],
    "checker": "text",
    "readAloud": "The product from i equals m to n of a sub i multiplies one factor for every integer index from m through n.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "0",
        "checker": "number",
        "solution": "The index begins at 0, so one factor is 0 and the product is 0."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "1680",
        "checker": "number",
        "solution": "∏_{i=5}^{8}i = 5·6·7·8 = 1680."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "Odd indices supply 50 factors of −1; an even number of negative factors gives product 1."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "1024",
        "checker": "number",
        "solution": "∏_{i=1}^{10}2 = 2¹⁰ = 1024."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-4-046",
    "mode": "auto",
    "answer": "∏_{j=1}^{n} j",
    "accepted": [
      "∏_{j=1}^n j",
      "product_{j=1}^{n} j",
      "product(j=1 to n, j)"
    ],
    "solution": "For a positive integer n, n! = 1·2·…·n = ∏_{j=1}^{n}j: multiply the factor j once for every index from 1 through n. The separate convention 0! = 1 remains in force.",
    "hints": [
      "Use the successive integers 1 through n as the factors.",
      "The product index runs from 1 to n inclusive."
    ],
    "checker": "text",
    "readAloud": "n factorial is the product from j equals one to n of j."
  },
  {
    "id": "rosen-ch2-ex-2-4-047",
    "mode": "auto",
    "answer": "34",
    "solution": "Use 0! = 1 and evaluate each factorial: ∑_{j=0}^{4}j! = 0! + 1! + 2! + 3! + 4! = 1 + 1 + 2 + 6 + 24 = 34.",
    "hints": [
      "Remember the convention 0! = 1.",
      "There are five factorial terms, from j = 0 through j = 4."
    ],
    "checker": "number"
  },
  {
    "id": "rosen-ch2-ex-2-4-048",
    "mode": "auto",
    "answer": "288",
    "solution": "Use 0! = 1 and multiply the factorials: ∏_{j=0}^{4}j! = 0!·1!·2!·3!·4! = 1·1·2·6·24 = 288. This is a product, unlike the sum in Exercise 47.",
    "hints": [
      "The large Pi symbol means multiply all five factors.",
      "Since 0! = 1, it does not make the product zero."
    ],
    "checker": "number"
  },
  {
    "id": "rosen-ch2-ex-2-5-001",
    "mode": "rubric",
    "answer": "a) Countably infinite, with f(n) = −n. b) Countably infinite, with f(1) = 0, f(n) = n for even n, and f(n) = 1 − n for odd n ≥ 3. c) Countably infinite, with f(n) = 100 − n. d) Uncountable. e) Finite, with 999,999,999 elements. f) Countably infinite, with f(1) = 0, f(n) = 7n/2 for even n, and f(n) = 7(1 − n)/2 for odd n ≥ 3.",
    "solution": "A bijection is a pairing with no omissions and no repeats. For (a)–(c), read f(n) as the nth listed element. In (b), the list is 0, 2, −2, 4, −4, … . In (d), multiplication by 2 is a bijection from (0, 1/2) to the uncountable interval (0, 1). In (e), count 1 through 999,999,999. In (f), multiply every even integer in (b) by 7/2, giving 0, 7, −7, 14, −14, … .",
    "hints": [
      "For integer sets, try listing 0 first and then alternating positive and negative values.",
      "An interval obtained by rescaling (0, 1) is still uncountable."
    ],
    "rubric": [
      "Classifies all six sets correctly.",
      "Gives a genuine bijection from the positive integers for every countably infinite set.",
      "Justifies uncountability in (d) and gives the correct finite count in (e)."
    ],
    "readAloud": "f of n is a rule that assigns the nth positive integer to an element of the target set.",
    "verify": "Write the first five outputs of each proposed f and check that the rule also covers negative outputs where required.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Countably infinite; define f: ℤ⁺ → ℤ⁻ by f(n) = −n.",
        "solution": "The outputs are −1, −2, −3, … . Every negative integer −k appears as f(k), and distinct n give distinct −n.",
        "rubric": [
          "States countably infinite and verifies that n ↦ −n is one-to-one and onto the negative integers."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Countably infinite; use f(1) = 0, f(n) = n when n is even, and f(n) = 1 − n when n is odd and at least 3.",
        "solution": "This produces 0, 2, −2, 4, −4, … . Positive even integers come from even n, negative even integers from odd n ≥ 3, and 0 comes from n = 1, so the rule is a bijection.",
        "rubric": [
          "States countably infinite and supplies a bijection that includes zero and all positive and negative even integers."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Countably infinite; define f(n) = 100 − n.",
        "solution": "The outputs are 99, 98, 97, … . Any integer m < 100 is f(100 − m), and different n give different outputs.",
        "rubric": [
          "States countably infinite and gives a complete descending enumeration of all integers below 100."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Uncountable.",
        "solution": "The map x ↦ 2x is a bijection from (0, 1/2) onto (0, 1). Since (0, 1) is uncountable, so is (0, 1/2).",
        "rubric": [
          "States uncountable and connects the interval to an uncountable interval by a bijection or subset argument."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Finite; the set is {1, 2, …, 999,999,999}, so it has 999,999,999 elements.",
        "solution": "The strict upper bound 1,000,000,000 is excluded, leaving the positive integers from 1 through 999,999,999.",
        "rubric": [
          "States finite and, if a size is given, reports 999,999,999 elements."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Countably infinite; define f(1) = 0, f(n) = 7n/2 for even n, and f(n) = 7(1 − n)/2 for odd n ≥ 3.",
        "solution": "The outputs are 0, 7, −7, 14, −14, … . Every positive multiple 7k comes from n = 2k, every negative multiple −7k comes from n = 2k + 1, and zero comes from n = 1. Thus every integer multiple of 7 occurs exactly once.",
        "rubric": [
          "States countably infinite and gives an enumeration containing zero and every positive and negative multiple of 7 exactly once."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-002",
    "mode": "rubric",
    "answer": "a) Countably infinite, f(n) = n + 10. b) Countably infinite, f(n) = 1 − 2n. c) Finite, with 1,999,999 elements. d) Uncountable. e) Countably infinite, alternating pairs with first coordinate 2 and 3. f) Countably infinite, enumerated as 0, 10, −10, 20, −20, … .",
    "solution": "Translate each condition into a list or an explicit rule. The rule in (a) starts at 11; in (b) it gives −1, −3, −5, … . In (c), the integers run from −999,999 through 999,999. In (d), x ↦ x/2 maps (0, 2) bijectively to (0, 1). In (e), list (2, 1), (3, 1), (2, 2), (3, 2), … . In (f), reuse the enumeration of all integers and multiply by 10.",
    "hints": [
      "For A × ℤ⁺ with A = {2, 3}, alternate between the two possible first coordinates.",
      "For |x| < 1,000,000, remember to include zero and both endpoints ±999,999."
    ],
    "rubric": [
      "Classifies all six sets correctly.",
      "Supplies a complete bijection for each countably infinite set.",
      "Uses a rescaling argument in (d) and the correct count in (c)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Countably infinite; f(n) = n + 10.",
        "solution": "The list is 11, 12, 13, … . Every integer m > 10 equals f(m − 10), and the rule is injective.",
        "rubric": [
          "States countably infinite and gives a bijection beginning at 11."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Countably infinite; f(n) = 1 − 2n.",
        "solution": "The outputs are −1, −3, −5, … . Every odd negative integer −(2k − 1) is f(k), with no repeats.",
        "rubric": [
          "States countably infinite and enumerates every odd negative integer exactly once."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Finite, with 1,999,999 elements.",
        "solution": "The condition means −1,000,000 < x < 1,000,000. Thus x ranges from −999,999 to 999,999, giving 999,999 negative values, 999,999 positive values, and zero.",
        "rubric": [
          "States finite and obtains 1,999,999 without including ±1,000,000."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Uncountable.",
        "solution": "Division by 2 is a bijection from (0, 2) onto the uncountable interval (0, 1).",
        "rubric": [
          "States uncountable and justifies it by a bijection or an uncountable subset."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Countably infinite; for k ≥ 1, set f(2k − 1) = (2, k) and f(2k) = (3, k).",
        "solution": "Odd positions enumerate {2} × ℤ⁺ and even positions enumerate {3} × ℤ⁺. Every ordered pair in A × ℤ⁺ occurs once.",
        "rubric": [
          "States countably infinite and gives a bijection covering both first coordinates for every positive integer second coordinate."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Countably infinite; enumerate 0, 10, −10, 20, −20, …, equivalently f(n) = 5g(n), where g enumerates the even integers as in Exercise 1(b).",
        "solution": "Every multiple of 10 is 10k = 5(2k) for an integer k. Since g is a bijection onto the even integers, multiplication by 5 gives a bijection onto all multiples of 10.",
        "rubric": [
          "States countably infinite and supplies a bijection covering zero and all positive and negative multiples of 10."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-003",
    "mode": "rubric",
    "answer": "a) Countably infinite: list the empty string, 1, 11, 111, … . b) Countably infinite: filter a standard enumeration of positive rationals, keeping only reduced fractions p/q with q ≥ 4. c) Uncountable. d) Uncountable.",
    "solution": "In (a), there is exactly one allowed string of each finite length. In (b), the target is an infinite subset of the countable set ℚ⁺; deleting q < 4 leaves infinitely many values, including 1/4, 1/5, 1/6, … . In (c), numbers 0.d₁d₂… with every dᵢ ∈ {1, 2} already form an uncountable subset. In (d), even numbers with no digit 1 include all 0.d₁d₂… with dᵢ ∈ {2, 3}, again uncountable by diagonalization.",
    "hints": [
      "For (b), use reduced form to decide whether any representation could have denominator below 4.",
      "For (c) and (d), restrict to decimal digits from a two-digit set and diagonalize."
    ],
    "rubric": [
      "Classifies all four sets correctly.",
      "Gives complete enumerations in (a) and (b), including why (b) remains infinite.",
      "Provides a valid uncountability argument for (c) and (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Countably infinite; define f(1) = ε (the empty string), and for n ≥ 2 let f(n) be the string of n − 1 ones.",
        "solution": "The list is ε, 1, 11, 111, … . Length increases by one at each step, so every finite all-ones string occurs exactly once.",
        "rubric": [
          "States countably infinite and enumerates all finite all-ones strings, with or without the empty string according to the convention used."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Countably infinite; enumerate ℚ⁺, delete fractions whose reduced denominator is 1, 2, or 3, and let f(n) be the nth remaining rational.",
        "solution": "A rational has a representation with denominator below 4 exactly when its reduced denominator is below 4. The filtered list is infinite because 1/(k + 3) survives for every k ≥ 1, and it is a bijection onto the requested set by construction.",
        "rubric": [
          "States countably infinite, uses reduced denominators correctly, and gives a filtered enumeration with an infinitude check."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Uncountable.",
        "solution": "Consider only decimals 0.d₁d₂… with each digit dᵢ either 1 or 2. If they were listed, form a new sequence by changing each diagonal digit from 1 to 2 or from 2 to 1. It differs from every listed sequence and cannot end in repeating 0s or 9s, so it represents a new real in the subset.",
        "rubric": [
          "States uncountable and gives a correct diagonal or equivalent cardinality argument using decimals with no zero digit."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Uncountable.",
        "solution": "The smaller set of decimals 0.d₁d₂… with every dᵢ ∈ {2, 3} already has uncountably many elements: diagonalize by swapping 2 and 3. Every such decimal has zero digits equal to 1, hence only finitely many 1s.",
        "rubric": [
          "States uncountable and exhibits an uncountable subset whose decimal representations contain finitely many 1s."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-004",
    "mode": "rubric",
    "answer": "a) Countably infinite. b) Countably infinite. c) Countably infinite: enumerate terminating all-ones representations by digit length and decimal-point position, enumerate those with infinitely many fractional 1s by their number of integer digits, and interleave the two lists. d) Uncountable.",
    "solution": "For (a), list 0 and then positive and negative integers not divisible by 3. For (b), enumerate the multiples of 5 and delete multiples of 35; infinitely many remain, such as 5·2ᵏ. For (c), a terminating representation has only finitely many digits and finitely many possible decimal-point positions for each length; a nonterminating representation is determined by its finite number of integer digits. Thus both families are countable, and the first family is already infinite. For (d), diagonalize over infinite sequences of digits 1 and 9 by swapping these digits on the diagonal.",
    "hints": [
      "A filtered enumeration of a countable set remains countable, but check that infinitely many entries survive.",
      "In (d), changing one digit in each listed decimal creates a decimal absent from the list."
    ],
    "rubric": [
      "Classifies all four sets correctly.",
      "Provides complete countably infinite enumerations in (a), (b), and (c).",
      "Uses a valid diagonal argument in (d)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Countably infinite. Put pₖ = k + ⌊(k − 1)/2⌋, and define f(1) = 0, f(2k) = pₖ, and f(2k + 1) = −pₖ.",
        "solution": "The positive pₖ are 1, 2, 4, 5, 7, 8, …, precisely the positive integers not divisible by 3. The full list is 0, p₁, −p₁, p₂, −p₂, …, so every target integer appears once.",
        "rubric": [
          "States countably infinite and supplies a bijection covering zero and positive and negative nonmultiples of 3."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Countably infinite; enumerate all integer multiples of 5, omit multiples of 35, and take the nth remaining entry as f(n).",
        "solution": "A multiple of 5 is excluded exactly when it is also a multiple of 7, hence exactly when it is a multiple of 35. Infinitely many entries survive—for example, 5·2ᵏ for k ≥ 0—so the filtered list is countably infinite.",
        "rubric": [
          "States countably infinite, filters multiples of 35 from a complete multiple-of-5 enumeration, and verifies infinitude."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Countably infinite. Let c₁, c₂, … enumerate terminating all-ones decimal representations, and for k ≥ 1 let dₖ be the number with k digits 1 before the decimal point and infinitely many digits 1 after it. Interleave the lists as c₁, d₁, c₂, d₂, … .",
        "solution": "For c₁, c₂, …, first choose a finite total digit length L, then one of the finitely many decimal-point positions, and list these finitely many representations before passing to L + 1. The other list begins 1.111…, 11.111…, 111.111…, … and includes every nonterminating possibility. Interleaving covers both families without repetition; the c-list alone is infinite.",
        "rubric": [
          "States countably infinite and gives a complete enumeration using finite length and decimal-point position, including all nonterminating all-ones cases."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Uncountable.",
        "solution": "Consider decimals 0.d₁d₂… with every dᵢ ∈ {1, 9}. Given any alleged list, swap 1 and 9 in the nth digit of the nth decimal. The new decimal is in the set but differs from list entry n at digit n, so no list can be complete.",
        "rubric": [
          "States uncountable and constructs a diagonal decimal using only digits 1 and 9 that differs from every listed entry."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-005",
    "mode": "rubric",
    "answer": "If k new guests arrive, move the current guest in room n to room n + k for every n ≥ 1, and put the k new guests in rooms 1 through k.",
    "solution": "Room numbers n + k are still positive integers, and different old room numbers give different new room numbers. The old guests occupy exactly rooms k + 1, k + 2, …, leaving precisely the first k rooms free. Nobody is evicted.",
    "hints": [
      "Make one simultaneous shift by the fixed number k rather than moving guests one at a time."
    ],
    "rubric": [
      "Defines the old-guest move n ↦ n + k for a finite k.",
      "Assigns new guests to rooms 1 through k and confirms that no current guest is evicted."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-006",
    "mode": "rubric",
    "answer": "Move the guest currently in room n to room 2n − 1.",
    "solution": "The new room numbers are 1, 3, 5, …, all odd and all distinct. Conversely, every odd room 2k − 1 receives the guest from room k. Thus every guest remains in the hotel using only odd-numbered rooms, while the even rooms are closed.",
    "hints": [
      "Use a bijection between all positive integers and the odd positive integers."
    ],
    "rubric": [
      "Uses n ↦ 2n − 1 or an equivalent bijection onto the odd rooms.",
      "Checks both distinctness and coverage of all odd rooms without using closed even rooms."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-007",
    "mode": "rubric",
    "answer": "For each k ≥ 1, move the guest from room 2k − 1 to room k in Building 1 and the guest from room 2k to room k in Building 2.",
    "solution": "The odd-indexed old guests fill every room of Building 1, while the even-indexed old guests fill every room of Building 2. These two assignments are disjoint and cover all current guests, so every room in both buildings is occupied.",
    "hints": [
      "Split the current guests into odd-numbered and even-numbered rooms, then use each group to fill one building."
    ],
    "rubric": [
      "Maps odd and even old room numbers to the two buildings.",
      "Shows that the assignment is injective and fills every room in both countably infinite buildings."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-008",
    "mode": "rubric",
    "answer": "Move the current guest in room n to room 2n. Put the nth arriving guest in room 2n − 1.",
    "solution": "The current guests now occupy exactly the even rooms, and the countably many arriving guests occupy exactly the odd rooms. Both assignments are injective, no rooms collide, and nobody is evicted.",
    "hints": [
      "Double every current room number to free all the odd rooms."
    ],
    "rubric": [
      "Moves current guests bijectively into even rooms.",
      "Enumerates arriving guests into odd rooms and confirms no eviction or collision."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-009",
    "mode": "rubric",
    "answer": "Let p₁ = 2, p₂ = 3, p₃ = 5, … be the primes. Move the current guest from room n to room 2ⁿ, and put guest j from bus b into room p_{b+1}ʲ.",
    "solution": "Current guests use powers of 2. Arriving guests use powers of the other primes, with a different prime for each bus and the guest number as exponent. Unique prime factorization shows that all these room numbers are distinct: a number has only one prime base and one exponent in this construction. Everyone therefore receives a room without evicting a current guest.",
    "hints": [
      "Assign a different prime to the current guests, bus 1, bus 2, and so on.",
      "Use the guest index as the exponent and invoke uniqueness of prime factorization."
    ],
    "rubric": [
      "Gives an explicit injective room assignment for current guests and every bus–guest pair.",
      "Uses distinct primes or an equivalent pairing construction to prevent all collisions.",
      "States that all guests are accommodated without eviction."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-010",
    "mode": "rubric",
    "answer": "a) A = ℝ and B = ℝ ∖ {0}, so A − B = {0}. b) A = ℝ and B = ℝ ∖ ℤ⁺, so A − B = ℤ⁺. c) A = ℝ and B = (−∞, 0], so A − B = (0, ∞).",
    "solution": "Removing a finite or countable subset from ℝ leaves an uncountable set, so the sets B in (a) and (b) are uncountable. In (c), B is an entire interval and is uncountable. The set differences have exactly the requested sizes.",
    "hints": [
      "Keep A = ℝ in all three parts, and choose B by removing the desired difference from ℝ."
    ],
    "rubric": [
      "Both A and B are uncountable in every part.",
      "The three set differences are respectively finite, countably infinite, and uncountable."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Take A = ℝ and B = ℝ ∖ {0}; then A − B = {0}, which is finite.",
        "solution": "Both ℝ and ℝ with one point removed are uncountable, and their difference contains only 0.",
        "rubric": [
          "Gives uncountable A and B whose difference is a finite set."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Take A = ℝ and B = ℝ ∖ ℤ⁺; then A − B = ℤ⁺, which is countably infinite.",
        "solution": "Deleting the positive integers cannot make ℝ countable, so B is uncountable. The removed elements are precisely ℤ⁺.",
        "rubric": [
          "Gives uncountable A and B whose difference is countably infinite."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Take A = ℝ and B = (−∞, 0]; then A − B = (0, ∞), which is uncountable.",
        "solution": "The interval B is uncountable, and subtracting it from ℝ leaves the uncountable positive real interval.",
        "rubric": [
          "Gives uncountable A and B whose difference is uncountable."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-011",
    "mode": "rubric",
    "answer": "a) A = (−∞, 0] and B = [0, ∞), so A ∩ B = {0}. b) A = (−∞, 0] ∪ ℤ⁺ and B = [0, ∞), so A ∩ B = ℤ⁺. c) A = B = ℝ, so A ∩ B = ℝ.",
    "solution": "Each A and B contains an entire nondegenerate interval, so each is uncountable. Their intersections are respectively one point, the positive integers, and all real numbers, giving the three requested cardinalities.",
    "hints": [
      "Start with two intervals meeting at 0, then add ℤ⁺ to one set for part (b)."
    ],
    "rubric": [
      "Uses uncountable A and B in every part.",
      "Obtains intersections that are respectively finite, countably infinite, and uncountable."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A = (−∞, 0], B = [0, ∞); then A ∩ B = {0}.",
        "solution": "Both sets are uncountable intervals, and 0 is their only common element.",
        "rubric": [
          "Gives uncountable sets with a finite intersection."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A = (−∞, 0] ∪ ℤ⁺, B = [0, ∞); then A ∩ B = ℤ⁺.",
        "solution": "A contains (−∞, 0] and B contains [0, 1], so both are uncountable. Among nonnegative reals, A contains exactly the positive integers.",
        "rubric": [
          "Gives uncountable sets whose intersection is exactly a countably infinite set."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A = B = ℝ; then A ∩ B = ℝ, which is uncountable.",
        "solution": "The sets and their intersection are all the uncountable set of real numbers.",
        "rubric": [
          "Gives uncountable sets with an uncountable intersection."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-012",
    "mode": "rubric",
    "answer": "The inclusion function i: A → B, defined by i(a) = a, is an injection. Therefore |A| ≤ |B|.",
    "solution": "Read |A| ≤ |B| as “there is a one-to-one function from A into B.” Because A ⊂ B, every a ∈ A is also an element of B. If i(a₁) = i(a₂), then a₁ = a₂, so i is one-to-one.",
    "hints": [
      "Use the identity map on A; a proper subset still has an inclusion injection."
    ],
    "rubric": [
      "Defines the inclusion injection A → B and connects its existence to the definition |A| ≤ |B|."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-013",
    "mode": "rubric",
    "answer": "A is countable exactly when it is finite or countably infinite, and both cases are equivalent to the existence of an injection A → ℤ⁺, which means |A| ≤ |ℤ⁺|.",
    "solution": "If A is finite, list its elements and map them to distinct positive integers. If A is countably infinite, a bijection A → ℤ⁺ exists. Conversely, if |A| ≤ |ℤ⁺|, an injection identifies A with a subset of ℤ⁺. Every subset of ℤ⁺ is countable, and the identification preserves cardinality, so A is countable.",
    "hints": [
      "Translate the cardinal inequality into the existence of an injection, then handle finite and countably infinite A separately."
    ],
    "rubric": [
      "Proves both directions of the equivalence.",
      "Explains that an injection into ℤ⁺ identifies A with a countable subset and covers finite as well as infinite A."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-014",
    "mode": "rubric",
    "answer": "A bijection f: A → B is also an injection, so |A| ≤ |B|. Its inverse f⁻¹: B → A is an injection, so |B| ≤ |A|.",
    "solution": "Equal cardinality means that a one-to-one correspondence f exists. Read the two inequalities separately: f witnesses the first, and f⁻¹ witnesses the second.",
    "hints": [
      "A bijection and its inverse are both one-to-one functions."
    ],
    "rubric": [
      "Uses a bijection f and its inverse to witness both cardinal inequalities."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-015",
    "mode": "rubric",
    "answer": "If B were countable, then its subset A would also be countable, contradicting the assumption that A is uncountable. Hence B is uncountable.",
    "solution": "Use the contrapositive of “a subset of a countable set is countable”: containing an uncountable subset forces the larger set to be uncountable.",
    "hints": [
      "Suppose B were countable and apply the subset theorem to A ⊆ B."
    ],
    "rubric": [
      "Assumes B countable, derives that A is countable from A ⊆ B, and states the contradiction."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-016",
    "mode": "rubric",
    "answer": "Every subset of a countable set is countable.",
    "solution": "Let C be countable and A ⊆ C. If C is finite, A is finite. If C is countably infinite, list C as c₁, c₂, c₃, … and traverse this list, retaining only elements of A. The retained list is finite or infinite, has no repeats, and contains every element of A; thus A is countable.",
    "hints": [
      "Enumerate the larger set and skip entries that do not belong to the subset."
    ],
    "rubric": [
      "Handles finite C and countably infinite C.",
      "The filtered enumeration covers every subset element without repetition and allows a finite result."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-017",
    "mode": "rubric",
    "answer": "Yes. A − B must be uncountable.",
    "solution": "Suppose A − B were countable. Since B is countable, A ∩ B is also countable. Then A = (A − B) ∪ (A ∩ B) would be a union of two countable sets and hence countable, contradicting the hypothesis. Removing countably many elements cannot make an uncountable set countable.",
    "hints": [
      "Write A as the union of A − B and A ∩ B."
    ],
    "rubric": [
      "Answers yes and decomposes A into (A − B) ∪ (A ∩ B).",
      "Uses countability of both pieces and the countable-union theorem to obtain the contradiction."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-018",
    "mode": "rubric",
    "answer": "If f: A → B is a bijection, define F: 𝒫(A) → 𝒫(B) by F(X) = {f(x) : x ∈ X}. Then F is a bijection, so |𝒫(A)| = |𝒫(B)|.",
    "solution": "The notation F(X) means the image of the subset X under f. Its inverse is F⁻¹(Y) = {f⁻¹(y) : y ∈ Y}. These operations recover the original subset in either direction, so the power sets have equal cardinality.",
    "hints": [
      "Apply the given bijection element by element to each subset, rather than to the power set as a whole."
    ],
    "rubric": [
      "Defines the image map between power sets.",
      "Verifies bijectivity, for example by giving the inverse image map."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-019",
    "mode": "rubric",
    "answer": "Given bijections f: A → B and g: C → D, define H: A × C → B × D by H(a, c) = (f(a), g(c)). Then H is a bijection, so |A × C| = |B × D|.",
    "solution": "An ordered pair in A × C has first coordinate from A and second from C. The inverse is H⁻¹(b, d) = (f⁻¹(b), g⁻¹(d)), and composing H with this inverse in either order gives the identity.",
    "hints": [
      "Apply f to the first coordinate and g to the second coordinate."
    ],
    "rubric": [
      "Defines the coordinatewise map and proves it is a bijection, preferably by exhibiting its inverse."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-020",
    "mode": "rubric",
    "answer": "If f: A → B and g: B → C are bijections, then g ∘ f: A → C is a bijection. Therefore |A| = |C|.",
    "solution": "The composition means “first apply f, then apply g.” It is injective because two distinct elements of A remain distinct at each stage. It is onto because every c ∈ C is g(f(a)) for a = f⁻¹(g⁻¹(c)).",
    "hints": [
      "Compose the two bijections in the order A → B → C."
    ],
    "rubric": [
      "Uses g ∘ f and justifies or correctly cites that a composition of bijections is a bijection."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-021",
    "mode": "rubric",
    "answer": "Choose injections f: A → B and g: B → C. Then g ∘ f: A → C is an injection, so |A| ≤ |C|.",
    "solution": "The inequalities supply the two injections. If g(f(a₁)) = g(f(a₂)), injectivity of g gives f(a₁) = f(a₂), and injectivity of f then gives a₁ = a₂.",
    "hints": [
      "Compose injections and check the equality g(f(a₁)) = g(f(a₂)) one function at a time."
    ],
    "rubric": [
      "Chooses injections from both hypotheses and proves their composition is an injection from A to C."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-022",
    "mode": "rubric",
    "answer": "B is countable: an onto function from a countable A cannot have more elements in its codomain than A.",
    "solution": "Enumerate A. Traverse that enumeration and record f(a), deleting every value already recorded. Because f is onto, every b ∈ B eventually appears; because duplicates are deleted, the resulting list contains each b once. The list is finite or countably infinite, so B is countable.",
    "hints": [
      "List A, apply f to each entry, and keep only the first occurrence of each output."
    ],
    "rubric": [
      "Constructs a finite or infinite enumeration of B using onto f.",
      "Explains both coverage of every b and removal of duplicates."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-023",
    "mode": "rubric",
    "answer": "Every infinite set A contains a countably infinite subset {a₁, a₂, a₃, …}.",
    "solution": "Choose a₁ ∈ A. After distinct a₁, …, aₙ have been chosen, A ∖ {a₁, …, aₙ} is nonempty because A is infinite; choose aₙ₊₁ from it. The resulting elements are distinct by construction, so n ↦ aₙ is a bijection from ℤ⁺ onto C = {aₙ : n ∈ ℤ⁺} ⊆ A.",
    "hints": [
      "Choose elements one at a time, always avoiding every previously chosen element."
    ],
    "rubric": [
      "Constructs an infinite sequence of distinct elements using infinitude at every step.",
      "Identifies the resulting set as a countably infinite subset of A."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-024",
    "mode": "rubric",
    "answer": "No infinite set has cardinality smaller than ℵ₀.",
    "solution": "If A is infinite, Exercise 23 gives a countably infinite subset C ⊆ A. The inclusion C → A, together with a bijection ℤ⁺ → C, yields an injection ℤ⁺ → A. Hence ℵ₀ = |ℤ⁺| ≤ |A|, which rules out |A| < ℵ₀.",
    "hints": [
      "Use the countably infinite subset guaranteed by Exercise 23 to build an injection from ℤ⁺ into A."
    ],
    "rubric": [
      "Derives |ℤ⁺| ≤ |A| for every infinite A from a countably infinite subset or an equivalent injection."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-025",
    "mode": "rubric",
    "answer": "S is countably infinite because its distinct finite-string labels form an infinite subset of the countable set of all finite strings over a finite alphabet.",
    "solution": "Let the alphabet have k characters. For each length n there are at most kⁿ strings, a finite number. List all strings by length—length 0, then 1, then 2, and so on—using alphabetical order within each length. Now retain only strings actually used as labels. Distinct labels make this a list of elements of S without repetition, and every element appears. Since S is infinite, the filtered list is countably infinite.",
    "hints": [
      "Group strings by length; each length contributes only finitely many strings.",
      "Filter the master list to the labels actually used."
    ],
    "rubric": [
      "Explains why all finite strings over a finite alphabet can be enumerated by length.",
      "Uses distinct labels to transfer an enumeration to S without omissions or repeats.",
      "Uses infinitude of S to conclude countably infinite, not merely countable."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-026",
    "mode": "rubric",
    "answer": "Write each rational uniquely in lowest terms as p/q, with q > 0, and encode it by an optional minus sign, the decimal digits of |p|, a slash, and the decimal digits of q. Exercise 25 then shows that ℚ is countably infinite.",
    "solution": "The finite alphabet consists of the ten digits, slash, and minus sign. For example, −12/35 uses the label “-12/35”. Reduced form ensures that two different rationals receive different labels. These finite labels satisfy Exercise 25; ℚ is infinite, so it is countably infinite.",
    "hints": [
      "Use a unique reduced fraction so that different rationals cannot receive the same string."
    ],
    "rubric": [
      "Encodes every rational as a finite string over a finite alphabet.",
      "Uses lowest terms and q > 0 to make labels unique.",
      "Applies Exercise 25 and notes that ℚ is infinite."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-027",
    "mode": "rubric",
    "answer": "A countable union of countable sets is countable.",
    "solution": "If every set is empty, the union is ∅ and hence countable. Otherwise, write the nonempty sets as rows A₁, A₂, …, repeating a row if necessary to make countably many rows. Enumerate each nonempty row, repeating its last element when the row is finite; empty sets contribute nothing. The entries aᵢⱼ form a countable array. Traverse it by finite diagonals i + j = constant, skipping padding and duplicates. Every union element appears somewhere in the array, so this produces a finite or infinite enumeration of the union.",
    "hints": [
      "Arrange the sets as rows and their elements as columns.",
      "Diagonalize the array and skip repeated elements."
    ],
    "rubric": [
      "Enumerates both the collection of nonempty sets and the elements within each nonempty set, explicitly allowing finite collections, finite sets, empty sets, and an empty union.",
      "Uses diagonal or equivalent enumeration of the resulting countable array.",
      "Explains complete coverage and skips duplicate occurrences."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-028",
    "mode": "rubric",
    "answer": "ℤ⁺ × ℤ⁺ is countably infinite: list all pairs (m, n) by increasing sum m + n, and within each sum list m = 1, 2, … in order.",
    "solution": "For each s ≥ 2, the diagonal with m + n = s is the finite list (1, s − 1), (2, s − 2), …, (s − 1, 1). Traverse s = 2, 3, 4, … . Every positive-integer pair has one finite sum and hence appears exactly once. The set is infinite, so this enumeration is countably infinite.",
    "hints": [
      "Group pairs by m + n; each group is finite."
    ],
    "rubric": [
      "Gives a diagonal or equivalent enumeration and explains why every ordered pair occurs exactly once."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-029",
    "mode": "rubric",
    "answer": "List finite bit strings by length, using lexicographic order within each length. Therefore the set of all finite bit strings is countably infinite.",
    "solution": "There are exactly 2ⁿ strings of length n, a finite number. The list begins ε, 0, 1, 00, 01, 10, 11, 000, … . Every finite string appears when its length is reached, exactly once; arbitrarily long strings show that the set is infinite.",
    "hints": [
      "Do not list all strings beginning with 0 first; group by finite length instead."
    ],
    "rubric": [
      "Uses the finite count 2ⁿ at each length and an enumeration by increasing length.",
      "Addresses the empty string if included and concludes countably infinite."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-030",
    "mode": "rubric",
    "answer": "The set is countably infinite.",
    "solution": "Each quadratic with integer coefficients is determined by a triple (a, b, c) ∈ ℤ³ with a ≠ 0. The set ℤ³ is countable, so there are countably many coefficient triples. Each quadratic has at most two real roots; listing the coefficients and then the at most two roots therefore gives a countable collection of finite sets, whose union is countable. It is infinite because, for each n ∈ ℤ⁺, the equation (x − n)² = 0 has integer coefficients and root n.",
    "hints": [
      "Count coefficient triples first, not roots directly.",
      "Use the fact that one quadratic contributes at most two real roots."
    ],
    "rubric": [
      "Shows that the integer coefficient triples form a countable set.",
      "Uses at most two roots per quadratic and a countable-union argument.",
      "Verifies that the root set is infinite."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-031",
    "mode": "rubric",
    "answer": "The given f is a bijection because its values fill consecutive diagonal blocks: on m + n = s, it takes every integer from T_{s−2} + 1 through T_{s−1}, where Tₖ = k(k + 1)/2.",
    "solution": "Read f(m, n) = (m + n − 2)(m + n − 1)/2 + m as “triangular offset plus position along a diagonal.” Fix s = m + n. Then m ranges from 1 to s − 1 and n = s − m, so the diagonal has exactly s − 1 pairs and f ranges through T_{s−2} + 1, …, T_{s−2} + (s − 1) = T_{s−1}. For s = 2, 3, …, these blocks are {1}, {2, 3}, {4, 5, 6}, … . They partition ℤ⁺, proving one-to-one and onto.",
    "hints": [
      "Hold s = m + n fixed and see which values f takes on that diagonal.",
      "Check that the largest value on one diagonal immediately precedes the smallest on the next."
    ],
    "rubric": [
      "Computes the consecutive integer block for each fixed diagonal s.",
      "Shows that consecutive blocks partition ℤ⁺, establishing both injectivity and surjectivity."
    ],
    "verify": "The first diagonal blocks are f(1,1) = 1; f(1,2) = 2, f(2,1) = 3; then 4, 5, 6."
  },
  {
    "id": "rosen-ch2-ex-2-5-032",
    "mode": "rubric",
    "answer": "Define P: ℤ × ℤ → ℤ by P(m, n) = f((3m + 1)², (3n + 1)²), with f from Exercise 31. Then P is a one-to-one polynomial function.",
    "solution": "First, (3m + 1)² is a positive integer for every integer m, so the inputs to f are valid and P has integer values. To see that m ↦ (3m + 1)² is injective, suppose (3m₁ + 1)² = (3m₂ + 1)². Then either 3m₁ + 1 = 3m₂ + 1, giving m₁ = m₂, or 3m₁ + 1 = −(3m₂ + 1). The second case gives 3(m₁ + m₂) = −2, impossible for integers. The same argument applies to n, so the coordinate transformation is injective into ℤ⁺ × ℤ⁺. Exercise 31 says f is injective, so their composition P is injective. Substitution of polynomials produces a polynomial.",
    "hints": [
      "View the new function as a composition: first transform each coordinate, then apply Exercise 31's f.",
      "For injectivity of each coordinate map, use that both values 3m + 1 and 3n + 1 are squared, with no collision between different integers."
    ],
    "rubric": [
      "Shows the coordinate maps send integers injectively into positive integers.",
      "Composes this injection with the bijection from Exercise 31 to prove one-to-one.",
      "Notes that the substituted expression is a polynomial with integer outputs."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-033",
    "mode": "rubric",
    "answer": "The inclusion i: (0, 1) → [0, 1] is an injection, and g: [0, 1] → (0, 1), g(x) = (x + 1)/3, is also an injection. By the Schröder–Bernstein theorem, |(0, 1)| = |[0, 1]|.",
    "solution": "The first inequality is immediate because (0, 1) ⊆ [0, 1]. For the reverse direction, g maps [0, 1] into [1/3, 2/3] ⊆ (0, 1), and its formula is strictly increasing, hence injective. Injections in both directions give equal cardinality.",
    "hints": [
      "Shrink and translate the closed interval into the middle third of (0, 1)."
    ],
    "rubric": [
      "Provides injections in both directions with correct domains and codomains.",
      "Invokes Schröder–Bernstein to conclude equal cardinality."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-034",
    "mode": "rubric",
    "answer": "a) The given f is continuous and strictly increasing on (0, 1), with limits −∞ at 0⁺ and +∞ at 1⁻, so it is a bijection onto ℝ. b) The inclusion (0, 1) → ℝ and g(x) = 1/2 + (1/π) arctan x from ℝ to (0, 1) are injections, so Schröder–Bernstein gives equal cardinality.",
    "solution": "For (a), rewrite f(x) = 1/(2(1 − x)) − 1/(2x). Its derivative is 1/(2(1 − x)²) + 1/(2x²) > 0. Thus f is one-to-one; continuity and the two endpoint limits show that every real value is attained. For (b), arctan maps ℝ onto (−π/2, π/2), so g maps ℝ into (0, 1) and is injective. The theorem applies.",
    "hints": [
      "Split the fraction into two simpler terms before differentiating.",
      "For (b), compress ℝ into (0, 1) with arctangent."
    ],
    "rubric": [
      "Part (a) proves both injectivity and surjectivity, including monotonicity and endpoint behavior.",
      "Part (b) supplies injections in both directions and invokes Schröder–Bernstein."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f(x) = (2x − 1)/(2x(1 − x)) is a bijection from (0, 1) to ℝ.",
        "solution": "Write f(x) = 1/(2(1 − x)) − 1/(2x). Then f′(x) = 1/(2(1 − x)²) + 1/(2x²) > 0, so f is strictly increasing and injective. It is continuous, f(x) → −∞ as x → 0⁺, and f(x) → +∞ as x → 1⁻; hence its range is all ℝ.",
        "rubric": [
          "Shows strict increase or an equivalent inverse argument and uses limits plus continuity to prove onto ℝ."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Use inclusion i: (0, 1) → ℝ and g: ℝ → (0, 1), g(x) = 1/2 + (1/π) arctan x. Both are injections, so |(0, 1)| = |ℝ| by Schröder–Bernstein.",
        "solution": "Inclusion is injective. Since −π/2 < arctan x < π/2, we have 0 < g(x) < 1, and arctangent is strictly increasing. The two injections satisfy the theorem's hypotheses.",
        "rubric": [
          "Gives a valid injection ℝ → (0, 1), the reverse inclusion injection, and the Schröder–Bernstein conclusion."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-035",
    "mode": "rubric",
    "answer": "No bijection ℤ⁺ → 𝒫(ℤ⁺) exists; Cantor's diagonal construction always produces a subset omitted from any proposed list.",
    "solution": "Suppose every subset were listed as S₁, S₂, S₃, … . Define D = {n ∈ ℤ⁺ : n ∉ Sₙ}. If D appeared in the list, say D = Sₖ, then by definition k ∈ D exactly when k ∉ Sₖ. Since D = Sₖ, this says k ∈ Sₖ exactly when k ∉ Sₖ, a contradiction. Therefore the list cannot be complete.",
    "hints": [
      "For each listed subset Sₙ, look only at whether n belongs to Sₙ, and reverse that answer."
    ],
    "rubric": [
      "Assumes an enumeration of all subsets and defines the diagonal set D correctly.",
      "Tests membership at the same index k under the assumption D = Sₖ.",
      "States the contradiction and the no-bijection conclusion."
    ],
    "readAloud": "D is the set of positive integers n such that n is not an element of S sub n."
  },
  {
    "id": "rosen-ch2-ex-2-5-036",
    "mode": "rubric",
    "answer": "|𝒫(ℤ⁺)| = |[0, 1]| = |(0, 1)| = |ℝ|, and Exercise 35 gives ℵ₀ < |𝒫(ℤ⁺)|. Hence ℵ₀ < |𝒫(ℤ⁺)| = |ℝ|.",
    "solution": "First obtain a bijection between 𝒫(ℤ⁺) and [0, 1] by Schröder–Bernstein. The map S ↦ ∑_{n∈S} 2/3ⁿ is injective: its ternary digits are only 0 or 2, which are unique. In the other direction, for x < 1 choose the binary expansion that does not end in all 1s and define G(x) = {n + 1 : the nth fractional binary digit of x is 1}; separately define G(1) = {1}. The marker 1 occurs only in G(1), and the shifted digits distinguish every x < 1, so G is injective. Thus a bijection exists. Exercises 33 and 34 identify [0, 1], (0, 1), and ℝ up to cardinality. Finally, n ↦ {n} gives |ℤ⁺| ≤ |𝒫(ℤ⁺)|, while Exercise 35 excludes equality; therefore ℵ₀ < |𝒫(ℤ⁺)| = |ℝ|.",
    "hints": [
      "Binary expansions can repeat values; use ternary digits 0 and 2 for one injection and binary expansions for the other, then apply Schröder–Bernstein.",
      "Combine the interval equivalences from Exercises 33 and 34 with the diagonal result from Exercise 35."
    ],
    "rubric": [
      "Establishes equal cardinality of 𝒫(ℤ⁺) and an interval using injections or an explicit bijection while handling expansion ambiguity.",
      "Uses Exercises 33–34 to identify that interval's cardinality with |ℝ|.",
      "Uses Exercise 35 and the definition of strict cardinal inequality to conclude ℵ₀ < |ℝ|."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-037",
    "mode": "rubric",
    "answer": "The set of all computer programs in a fixed programming language is countable.",
    "solution": "A program is a finite string over the language's finite alphabet of source characters. List all finite strings by length and alphabetical order, as in Exercise 25, and retain only syntactically valid programs. Programs are distinct strings, so this filtered list contains every program at most once. The resulting set is finite or countably infinite, hence countable.",
    "hints": [
      "Programs form a subset of all finite strings over a finite alphabet; validity filtering cannot increase cardinality."
    ],
    "rubric": [
      "Models programs as finite strings over a finite alphabet.",
      "Enumerates strings by length and filters to programs, concluding countable without requiring infinitude."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-038",
    "mode": "rubric",
    "answer": "The set of functions ℤ⁺ → {0, 1, …, 9} is uncountable.",
    "solution": "Each function f is the infinite digit sequence f(1), f(2), f(3), … . Suppose all such functions were listed as f₁, f₂, f₃, … . Define g(n) = (fₙ(n) + 1) mod 10. Then g is a function of the required kind, but g(n) ≠ fₙ(n) for every n, so g differs from every listed fₙ. No complete list exists.",
    "hints": [
      "Change the nth output of the nth listed function, wrapping 9 to 0."
    ],
    "rubric": [
      "Represents functions as infinite digit sequences or an equivalent encoding.",
      "Constructs a valid diagonal function differing from list entry n at input n.",
      "Concludes uncountability."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-039",
    "mode": "rubric",
    "answer": "Noncomputable functions exist because there are only countably many programs but uncountably many digit-valued functions on ℤ⁺.",
    "solution": "By Exercise 37, all programs can be listed. Each program computes at most one function, so listing programs would list every computable function. If every function ℤ⁺ → {0, …, 9} were computable, this would enumerate that entire function set, contradicting Exercise 38. Therefore at least one such function has no computing program.",
    "hints": [
      "Compare the number of available programs with the number of functions, remembering that one program computes at most one function."
    ],
    "rubric": [
      "Uses countability of programs and uncountability of the specified function set.",
      "Explains why assigning at most one function per program cannot cover all functions."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-040",
    "mode": "rubric",
    "answer": "No onto function f: S → 𝒫(S) exists, and |S| < |𝒫(S)| (Cantor's theorem).",
    "solution": "Suppose f: S → 𝒫(S) were onto. Define T = {s ∈ S : s ∉ f(s)}. Since T ⊆ S and f is onto, T = f(t) for some t ∈ S. If t ∈ T, the definition of T gives t ∉ f(t) = T, a contradiction. If t ∉ T = f(t), the definition gives t ∈ T, again a contradiction. Thus no onto f exists. The injection s ↦ {s} gives |S| ≤ |𝒫(S)|; equality would yield an onto bijection, which is impossible, so the inequality is strict.",
    "hints": [
      "For the diagonal set T, ask whether a possible preimage t belongs to T.",
      "Prove strictness using both the singleton injection and the impossibility of a bijection."
    ],
    "rubric": [
      "Defines T = {s : s ∉ f(s)} and assumes an onto f.",
      "Derives a contradiction in both membership cases for t with f(t) = T.",
      "Uses s ↦ {s} for ≤ and excludes equality to obtain strict <."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-5-041",
    "mode": "rubric",
    "answer": "The alternating chains partition A ∪ B into loops, two-way infinite chains, chains starting in A, and chains starting in B. Define h(a) = f(a) on types 1–3 and h(a) = g⁻¹(a) on type 4. This h is a bijection A → B, proving Schröder–Bernstein.",
    "solution": "Read f⁻¹ and g⁻¹ here as partial predecessor maps, not globally defined inverses. Starting at any element, forward and backward steps are unique because f and g are injective. A type-4 chain starts in B, so every A-element in it has a g-predecessor, making h well-defined. Injectivity follows within each chain type and across types because a collision would merge two different chain types. Surjectivity follows by tracing any b ∈ B backward one appropriate step.",
    "hints": [
      "Draw each chain with alternating A and B elements and arrows a ↦ f(a), b ↦ g(b).",
      "For h onto, ask whether a given b has an f-predecessor; if not, its chain must be type 4."
    ],
    "rubric": [
      "Proves that chains exist, are unique, and exhaust A ∪ B.",
      "Classifies exactly the four chain types and defines h on each.",
      "Proves h is well-defined, one-to-one, and onto, including all cross-type cases."
    ],
    "readAloud": "g inverse of a means the unique b in B such that g of b equals a, when such a b exists.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Every element of A or B belongs to exactly one chain.",
        "solution": "Start with any element and apply f and g alternately forward, and the partial inverses alternately backward. Forward values are unique because functions are single-valued; backward values are unique because f and g are injective. If two chains shared an element, extending both from that shared element in either direction would make the chains identical. Thus chains are disjoint and every element generates one.",
        "rubric": [
          "Uses uniqueness of forward and backward steps to show that any two intersecting chains coincide and that every element generates a chain."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A chain is exactly one of: type 1, a loop; type 2, extending backward forever without repetition; type 3, ending backward at an A-element with no g-preimage; or type 4, ending backward at a B-element with no f-preimage.",
        "solution": "Follow a chain backward. Either an element repeats, giving a loop; or the backward process never stops, giving type 2; or it stops. If it stops at a ∈ A, there is no b with g(b) = a (type 3). If it stops at b ∈ B, there is no a with f(a) = b (type 4). These outcomes are mutually exclusive and exhaustive.",
        "rubric": [
          "Derives all four types from repeating, never stopping, stopping in A, or stopping in B, with correct missing-preimage conditions."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Define h(a) = f(a) for a in a chain of type 1, 2, or 3, and h(a) = g⁻¹(a) for a in a type-4 chain. This is well-defined for every a ∈ A.",
        "solution": "In types 1–3, f(a) is defined and lies in B. In type 4, a cannot be the backward endpoint in B; if g⁻¹(a) did not exist, a itself would be an endpoint in A, making the chain type 3. Therefore a has a predecessor b = g⁻¹(a) ∈ B, and h(a) = b is defined. Each a has exactly one chain type.",
        "rubric": [
          "Defines h on all four types and proves g⁻¹(a) exists for every A-element in a type-4 chain."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "h is one-to-one.",
        "solution": "On types 1–3, h = f is injective; on type 4, h = g⁻¹ is injective because g is a function. It remains to rule out a cross-type collision. Suppose a is in types 1–3, a′ is in type 4, and f(a) = g⁻¹(a′) = b. Then a, b, and a′ = g(b) are consecutive elements of one chain, forcing a and a′ to have the same chain type, a contradiction. Hence h(a₁) = h(a₂) implies a₁ = a₂.",
        "rubric": [
          "Checks injectivity within types 1–3 and type 4 and rules out a collision between those two cases by showing it would merge chain types."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "h is onto, so h is a bijection and |A| = |B|.",
        "solution": "Let b ∈ B. If b lies in a chain of type 1, 2, or 3, it cannot be a backward endpoint in B, so b = f(a) for some a ∈ A in that same chain; then h(a) = b. If b lies in a type-4 chain, put a = g(b) ∈ A. That chain has type 4 and h(a) = g⁻¹(a) = b. Every b is therefore hit; with part (d), h is a bijection.",
        "rubric": [
          "Finds an h-preimage for b in types 1–3 using f⁻¹ and in type 4 using g, then concludes equal cardinality."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-001",
    "mode": "mixed",
    "answer": "a) 3 × 4. b) The third column is [1, 4, 3]ᵀ. c) The second row is [2, 0, 4, 6]. d) a₃₂ = 1. e) Aᵀ = [[1, 2, 1], [1, 0, 1], [1, 4, 3], [3, 6, 7]].",
    "solution": "Read A by rows: [1, 1, 1, 3], [2, 0, 4, 6], [1, 1, 3, 7]. There are 3 rows and 4 columns. In aᵢⱼ, i is the row and j is the column, so a₃₂ = 1. To transpose, turn each row of A into the corresponding column of Aᵀ.",
    "hints": [
      "For size, count rows first and columns second; for a transpose, row i becomes column i."
    ],
    "verify": "Aᵀ has size 4 × 3, and transposing it again restores A.",
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "3 × 4",
        "accepted": [
          "3x4",
          "3 by 4"
        ],
        "checker": "text",
        "solution": "The matrix has 3 horizontal rows and 4 vertical columns, so its size is 3 × 4."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[1, 4, 3]ᵀ",
        "solution": "Move down column 3 and read the entries in row order: 1, 4, 3. Writing these vertically gives [1, 4, 3]ᵀ.",
        "rubric": [
          "Gives the column entries 1, 4, 3 in that order and presents them as a 3 × 1 column."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[2, 0, 4, 6]",
        "solution": "Read across row 2 from left to right: 2, 0, 4, 6.",
        "rubric": [
          "Gives exactly the row [2, 0, 4, 6] without reordering its entries."
        ]
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "1",
        "checker": "number",
        "solution": "The pair (3,2) means row 3, column 2. That entry is 1."
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Aᵀ = [[1, 2, 1], [1, 0, 1], [1, 4, 3], [3, 6, 7]]",
        "solution": "Row 1 of A, namely [1,1,1,3], becomes column 1 of Aᵀ; rows 2 and 3 become columns 2 and 3. Reading the resulting rows gives the displayed 4 × 3 matrix.",
        "rubric": [
          "Produces a 4 × 3 matrix whose columns are the rows of A in their original order.",
          "Every transposed entry satisfies (Aᵀ)ᵢⱼ = aⱼᵢ."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-002",
    "mode": "rubric",
    "answer": "a) A+B = [[0, 3, 9], [1, 4, −1], [2, −5, −3]]. b) A+B = [[−4, 9, 2, 10], [−4, −5, 4, 0]].",
    "solution": "Matrix addition is entry by entry: (A+B)ᵢⱼ = aᵢⱼ+bᵢⱼ. Add entries in the same row and column, preserving negative signs.",
    "hints": [
      "Add only entries occupying the same position; make a small position-by-position table if signs cause trouble."
    ],
    "rubric": [
      "Both sums have the same dimensions as their inputs.",
      "Every entry is the sum of the corresponding entries of A and B."
    ],
    "verify": "Subtracting B from each displayed sum entry by entry returns A.",
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[[0, 3, 9], [1, 4, −1], [2, −5, −3]]",
        "solution": "The first row is (1−1, 0+3, 4+5) = (0,3,9). The second is (−1+2, 2+2, 2−3) = (1,4,−1), and the third is (0+2, −2−3, −3+0) = (2,−5,−3).",
        "rubric": [
          "Computes all nine entrywise sums correctly, including 2+(−3)=−1 and −2+(−3)=−5."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[[−4, 9, 2, 10], [−4, −5, 4, 0]]",
        "solution": "Row 1 gives (−1−3, 0+9, 5−3, 6+4) = (−4,9,2,10). Row 2 gives (−4+0, −3−2, 5−1, −2+2) = (−4,−5,4,0).",
        "rubric": [
          "Computes all eight entrywise sums correctly in a 2 × 4 matrix."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-003",
    "mode": "rubric",
    "answer": "a) AB = [[1, 11], [2, 18]]. b) AB = [[2, −2, −3], [1, 0, 2], [9, −4, 4]]. c) AB = [[−4, 15, −4, 1], [−3, 10, 2, −3], [0, 2, −8, 6], [1, −8, 18, −13]].",
    "solution": "For each product, the (i,j) entry is row i of A dotted with column j of B: multiply corresponding entries and add. The outer dimensions give the size of AB.",
    "hints": [
      "Work one output cell at a time: choose a row of A and a column of B, then multiply and add."
    ],
    "rubric": [
      "Uses row-by-column multiplication rather than entrywise multiplication.",
      "All three products have the correct dimensions and entries."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[[1, 11], [2, 18]]",
        "solution": "The entries are 2·0+1·1=1, 2·4+1·3=11, 3·0+2·1=2, and 3·4+2·3=18, placed row by row.",
        "rubric": [
          "Obtains [[1,11],[2,18]] from four correct row-column dot products."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[[2, −2, −3], [1, 0, 2], [9, −4, 4]]",
        "solution": "For example, the top-left entry is 1·3+(−1)·1=2 and the bottom-right entry is 2·(−1)+3·2=4. Repeating this for each of the 3 rows of A and 3 columns of B gives the displayed 3 × 3 matrix.",
        "rubric": [
          "Produces a 3 × 3 result with all nine row-column dot products correct."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[[−4, 15, −4, 1], [−3, 10, 2, −3], [0, 2, −8, 6], [1, −8, 18, −13]]",
        "solution": "A is 4 × 2 and B is 2 × 4, so AB is 4 × 4. For example, row 1 of A with column 2 of B gives 4·3+(−3)(−1)=15. Applying the same multiply-then-add rule to every row-column pair gives the displayed matrix.",
        "rubric": [
          "Produces a 4 × 4 result with all sixteen entries computed by the row-column rule."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-004",
    "mode": "rubric",
    "answer": "a) AB = [[−1, 1, 0], [0, 1, −1], [1, −2, 1]]. b) AB = [[4, −1, −7, 6], [−7, −5, 8, 5], [4, 0, 7, 3]]. c) AB = [[2, 0, −3, −4, −1], [24, −7, 20, 29, 2], [−10, 4, −17, −24, −3]].",
    "solution": "Check that the inner dimensions agree, then compute each output entry as a row of A dotted with a column of B. Keep the output rows aligned with A and the output columns aligned with B.",
    "hints": [
      "Label the dimensions before multiplying; the two inner numbers must match, and the outer numbers remain."
    ],
    "rubric": [
      "All three products use the row-column rule and have dimensions 3 × 3, 3 × 4, and 3 × 5, respectively.",
      "Every matrix entry is correct, including signs."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[[−1, 1, 0], [0, 1, −1], [1, −2, 1]]",
        "solution": "The top row of AB is [1·0+0·1+1·(−1), 1·1+0·(−1)+1·0, 1·(−1)+0·0+1·1] = [−1,1,0]. Applying the same rule to rows 2 and 3 gives [0,1,−1] and [1,−2,1].",
        "rubric": [
          "Computes all nine entries correctly using three-term dot products."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[[4, −1, −7, 6], [−7, −5, 8, 5], [4, 0, 7, 3]]",
        "solution": "For instance, the (1,3) entry is 1·2+(−3)·3+0·0=−7, and the (3,4) entry is 2·3+1·(−1)+(−1)·2=3. Repeating for all 3 rows of A and 4 columns of B gives the displayed 3 × 4 matrix.",
        "rubric": [
          "Computes all twelve entries correctly with no row or column shifts."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[[2, 0, −3, −4, −1], [24, −7, 20, 29, 2], [−10, 4, −17, −24, −3]]",
        "solution": "Row 1 of A, [0,−1], dotted with the five columns of B gives [2,0,−3,−4,−1]. Doing the same for [7,2] and [−4,−3] gives the other two displayed rows.",
        "rubric": [
          "Produces a 3 × 5 matrix whose fifteen entries are the correct two-term dot products."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-005",
    "mode": "rubric",
    "answer": "A = [[9/5, −6/5], [−1/5, 4/5]].",
    "solution": "Let A=[[a,b],[c,d]]. Comparing columns gives 2a+3c=3, a+4c=1 and 2b+3d=0, b+4d=2. From the first pair, a=1−4c, so 2−5c=3; hence c=−1/5 and a=9/5. From the second, b=2−4d, so 4−5d=0; hence d=4/5 and b=−6/5.",
    "hints": [
      "Name the four unknown entries and compare the two columns of the product separately."
    ],
    "rubric": [
      "Sets up both two-equation systems from the row-column product.",
      "Solves for a=9/5, b=−6/5, c=−1/5, and d=4/5.",
      "Verifies or clearly implies verification by substitution into the original product."
    ],
    "verify": "Direct multiplication gives [[2,3],[1,4]]·[[9/5,−6/5],[−1/5,4/5]] = [[3,0],[1,2]]."
  },
  {
    "id": "rosen-ch2-ex-2-6-006",
    "mode": "rubric",
    "answer": "A = [[−1, 0, 1], [2, 1, 0], [1, −1, 1]].",
    "solution": "Treat the three columns separately. If M is the given 3 × 3 coefficient matrix, solving MX=[7,1,−1]ᵀ, MY=[1,0,−3]ᵀ, and MZ=[3,3,7]ᵀ by elimination gives X=[−1,2,1]ᵀ, Y=[0,1,−1]ᵀ, and Z=[1,0,1]ᵀ. Placing these solutions side by side gives A. Substitution confirms MA=[[7,1,3],[1,0,3],[−1,−3,7]].",
    "hints": [
      "Solve three systems with the same left-hand coefficient matrix, one for each target column."
    ],
    "rubric": [
      "Uses the three required right-hand columns and obtains the three correct solution columns.",
      "Assembles A=[[−1,0,1],[2,1,0],[1,−1,1]] and checks the original matrix equation."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-007",
    "mode": "rubric",
    "answer": "For every position (i,j), (0+A)ᵢⱼ=0+aᵢⱼ=aᵢⱼ and (A+0)ᵢⱼ=aᵢⱼ+0=aᵢⱼ. Therefore 0+A=A+0=A.",
    "solution": "Write A=[aᵢⱼ]. The zero matrix has the same m × n dimensions, so both sums are defined. Entrywise addition and the scalar identity 0+x=x+0=x prove equality in every position, which proves matrix equality.",
    "hints": [
      "Prove equality one entry at a time using 0+a=a+0=a."
    ],
    "rubric": [
      "Uses matching dimensions and compares an arbitrary (i,j) entry.",
      "Applies the additive identity property in both orders and concludes all three matrices are equal."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-008",
    "mode": "rubric",
    "answer": "Matrix addition is commutative because (A+B)ᵢⱼ=aᵢⱼ+bᵢⱼ=bᵢⱼ+aᵢⱼ=(B+A)ᵢⱼ for every i,j.",
    "solution": "Let A=[aᵢⱼ] and B=[bᵢⱼ] be m × n matrices. Addition of matrices is entrywise, while ordinary addition of their numerical entries is commutative. Since every corresponding entry agrees, A+B=B+A.",
    "hints": [
      "Reduce the matrix statement to ordinary addition in an arbitrary entry."
    ],
    "rubric": [
      "Compares the general entries of A+B and B+A.",
      "Uses commutativity of scalar addition and concludes equality for all positions."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-009",
    "mode": "rubric",
    "answer": "Matrix addition is associative because both (A+(B+C))ᵢⱼ and ((A+B)+C)ᵢⱼ equal aᵢⱼ+bᵢⱼ+cᵢⱼ.",
    "solution": "For an arbitrary entry, (A+(B+C))ᵢⱼ=aᵢⱼ+(bᵢⱼ+cᵢⱼ) and ((A+B)+C)ᵢⱼ=(aᵢⱼ+bᵢⱼ)+cᵢⱼ. These are equal by associativity of ordinary addition. All entries agree, so the matrices are equal.",
    "hints": [
      "Write the general entry on each side and move only the parentheses in the scalar sum."
    ],
    "rubric": [
      "Correctly expands both nested matrix sums entrywise.",
      "Uses scalar associativity and draws the matrix-wide conclusion."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-010",
    "mode": "rubric",
    "answer": "a) AB is defined and is 3 × 5. b) BA is undefined. c) AC is defined and is 3 × 4. d) CA is undefined. e) BC is undefined. f) CB is defined and is 4 × 5.",
    "solution": "For XY to be defined, the number of columns of X must equal the number of rows of Y. The result then has the row count of X and the column count of Y.",
    "hints": [
      "Write each pair of sizes side by side and compare the touching inner numbers."
    ],
    "rubric": [
      "Classifies all six products correctly and gives exactly the sizes 3 × 5, 3 × 4, and 4 × 5 for AB, AC, and CB."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "Defined; AB is 3 × 5.",
        "solution": "A is 3 × 4 and B is 4 × 5. The inner dimensions 4 and 4 agree, leaving outer dimensions 3 and 5.",
        "rubric": [
          "States defined and 3 × 5 with the inner-dimension check."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Undefined.",
        "solution": "B is 4 × 5 and A is 3 × 4; the inner dimensions are 5 and 3, which do not agree.",
        "rubric": [
          "States undefined and identifies the mismatch 5 ≠ 3."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Defined; AC is 3 × 4.",
        "solution": "A is 3 × 4 and C is 4 × 4, so the inner dimensions agree and the outer dimensions give 3 × 4.",
        "rubric": [
          "States defined and 3 × 4."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "Undefined.",
        "solution": "C is 4 × 4 and A is 3 × 4; the inner dimensions are 4 and 3, so multiplication is not defined.",
        "rubric": [
          "States undefined and identifies the mismatch 4 ≠ 3."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "Undefined.",
        "solution": "B is 4 × 5 and C is 4 × 4; the inner dimensions are 5 and 4, so BC is undefined.",
        "rubric": [
          "States undefined and identifies the mismatch 5 ≠ 4."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "Defined; CB is 4 × 5.",
        "solution": "C is 4 × 4 and B is 4 × 5, so the inner dimensions agree and the result is 4 × 5.",
        "rubric": [
          "States defined and 4 × 5."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-011",
    "mode": "rubric",
    "answer": "For some positive integers m and n, A must be m × n and B must be n × m. Then AB is m × m and BA is n × n; A and B need not themselves be square.",
    "solution": "Let A be m × n and B be r × s. AB defined requires n=r, while BA defined requires s=m. Thus B is n × m. Both orders can be defined even when m≠n, although then AB and BA have different sizes.",
    "hints": [
      "Give A general dimensions m × n and apply the inner-dimension rule in both orders."
    ],
    "rubric": [
      "Derives the reversed dimensions A: m × n and B: n × m.",
      "Does not incorrectly require A and B to be square; optionally notes the sizes of AB and BA."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-012",
    "mode": "rubric",
    "answer": "a) (A+B)C=AC+BC. b) C(A+B)=CA+CB.",
    "solution": "Both identities follow by expanding a general matrix entry and using distributivity of ordinary multiplication over addition.",
    "hints": [
      "Expand the (i,j) entry as a sum over the shared index, then split the sum."
    ],
    "rubric": [
      "Proves both left and right distributive laws entrywise without commuting matrix factors."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(A+B)C=AC+BC.",
        "solution": "The (i,j) entry on the left is Σᵣ(aᵢᵣ+bᵢᵣ)cᵣⱼ. Distribute each term and split the finite sum: Σᵣaᵢᵣcᵣⱼ+Σᵣbᵢᵣcᵣⱼ=(AC)ᵢⱼ+(BC)ᵢⱼ.",
        "rubric": [
          "Uses the shared index correctly and derives the two terms AC and BC in the same order."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "C(A+B)=CA+CB.",
        "solution": "The (i,j) entry on the left is Σᵣcᵢᵣ(aᵣⱼ+bᵣⱼ)=Σᵣcᵢᵣaᵣⱼ+Σᵣcᵢᵣbᵣⱼ=(CA)ᵢⱼ+(CB)ᵢⱼ.",
        "rubric": [
          "Keeps C on the left and obtains CA+CB by scalar distributivity."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-013",
    "mode": "rubric",
    "answer": "A(BC)=(AB)C because their (i,j) entries both equal ΣᵣΣₛ aᵢᵣbᵣₛcₛⱼ.",
    "solution": "For A(BC), the (i,j) entry is Σᵣaᵢᵣ(BC)ᵣⱼ=Σᵣaᵢᵣ(Σₛbᵣₛcₛⱼ)=ΣᵣΣₛaᵢᵣbᵣₛcₛⱼ. For (AB)C, it is Σₛ(AB)ᵢₛcₛⱼ=Σₛ(Σᵣaᵢᵣbᵣₛ)cₛⱼ, the same finite double sum with summation order interchanged. Hence every entry agrees.",
    "hints": [
      "Expand both sides into double sums and use associativity of scalar multiplication plus finite-sum rearrangement."
    ],
    "rubric": [
      "Expands both products with distinct summation indices.",
      "Shows both reduce to the same double sum and does not assume matrix commutativity."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-014",
    "mode": "rubric",
    "answer": "If A=diag(a₁₁,…,aₙₙ) and B=diag(b₁₁,…,bₙₙ), then AB=diag(a₁₁b₁₁,…,aₙₙbₙₙ). Thus multiply corresponding diagonal entries; every off-diagonal entry is 0.",
    "solution": "The (i,j) entry of AB is Σₖaᵢₖbₖⱼ. If i≠j, each term is zero: aᵢₖ=0 unless k=i, but then bₖⱼ=bᵢⱼ=0. If i=j, only k=i survives, giving aᵢᵢbᵢᵢ. Therefore AB is diagonal with the stated rule.",
    "hints": [
      "In Σₖaᵢₖbₖⱼ, use the diagonal condition to decide which terms can survive."
    ],
    "rubric": [
      "Shows all off-diagonal product entries vanish.",
      "Derives the diagonal entries aᵢᵢbᵢᵢ and states the corresponding-entry rule."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-015",
    "mode": "rubric",
    "answer": "For every positive integer n, Aⁿ = [[1, n], [0, 1]].",
    "solution": "Use induction. The formula is true for n=1. If Aⁿ=[[1,n],[0,1]], then Aⁿ⁺¹=AⁿA=[[1,n],[0,1]]·[[1,1],[0,1]]=[[1,n+1],[0,1]]. This completes the induction.",
    "hints": [
      "Compute A² and A³ to spot the pattern, then multiply the guessed Aⁿ by A for the induction step."
    ],
    "rubric": [
      "States the correct formula for all positive n.",
      "Supplies a valid induction base and row-column multiplication in the induction step."
    ],
    "verify": "The lower-left entry remains 0, the diagonal entries remain 1, and each multiplication adds 1 to the upper-right entry."
  },
  {
    "id": "rosen-ch2-ex-2-6-016",
    "mode": "rubric",
    "answer": "(Aᵀ)ᵀ=A.",
    "solution": "By definition, (Aᵀ)ᵢⱼ=aⱼᵢ. Applying the transpose rule again gives ((Aᵀ)ᵀ)ᵢⱼ=(Aᵀ)ⱼᵢ=aᵢⱼ. Every entry and the dimensions agree with A, so the matrices are equal.",
    "hints": [
      "Track what happens to the two indices after transposing twice."
    ],
    "rubric": [
      "Applies the transpose index rule twice and concludes equality of every entry and the original dimensions."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-017",
    "mode": "rubric",
    "answer": "a) (A+B)ᵀ=Aᵀ+Bᵀ. b) (AB)ᵀ=BᵀAᵀ; the order reverses.",
    "solution": "Compare general entries. Transposition swaps the row and column indices; for a product this turns the row-column sum for AB into the row-column sum for BᵀAᵀ.",
    "hints": [
      "For part (b), write ((AB)ᵀ)ᵢⱼ=(AB)ⱼᵢ and expand it."
    ],
    "rubric": [
      "Proves both identities entrywise and reverses the factors in the transpose of the product."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(A+B)ᵀ=Aᵀ+Bᵀ.",
        "solution": "The (i,j) entry of the left side is (A+B)ⱼᵢ=aⱼᵢ+bⱼᵢ. The right side has entry (Aᵀ)ᵢⱼ+(Bᵀ)ᵢⱼ=aⱼᵢ+bⱼᵢ, so all entries agree.",
        "rubric": [
          "Uses the swapped indices correctly in both terms."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(AB)ᵀ=BᵀAᵀ.",
        "solution": "((AB)ᵀ)ᵢⱼ=(AB)ⱼᵢ=Σₖaⱼₖbₖᵢ=Σₖbₖᵢaⱼₖ=Σₖ(Bᵀ)ᵢₖ(Aᵀ)ₖⱼ=(BᵀAᵀ)ᵢⱼ. Scalar multiplication commutes here, but the matrix factors remain in the required reversed order.",
        "rubric": [
          "Expands the product and obtains BᵀAᵀ, not AᵀBᵀ."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-018",
    "mode": "rubric",
    "answer": "Let P=[[2,3,−1],[1,2,1],[−1,−1,3]] and Q=[[7,−8,5],[−4,5,−3],[1,−1,1]]. Direct multiplication gives PQ=QP=I₃, so P=Q⁻¹.",
    "solution": "By the inverse preamble, both products must equal the identity. Row-column multiplication gives PQ=[[1,0,0],[0,1,0],[0,0,1]] and QP=[[1,0,0],[0,1,0],[0,0,1]]. For example, (PQ)₁₁=2·7+3·(−4)+(−1)·1=1 and (PQ)₁₂=2·(−8)+3·5+(−1)·(−1)=0; the remaining entries check similarly.",
    "hints": [
      "Call the two matrices P and Q, then compute both PQ and QP and compare them with I₃."
    ],
    "rubric": [
      "Checks both PQ=I₃ and QP=I₃ using correct row-column products.",
      "Concludes P is the inverse of Q from the definition, not from a one-sided product alone."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-019",
    "mode": "rubric",
    "answer": "If Δ=ad−bc≠0, then A⁻¹=(1/Δ)[[d,−b],[−c,a]].",
    "solution": "Let B=(1/Δ)[[d,−b],[−c,a]]. Then AB=(1/Δ)[[ad−bc,−ab+ba],[cd−dc,−cb+da]]=(1/Δ)[[Δ,0],[0,Δ]]=I₂. Similarly BA=(1/Δ)[[da−bc,db−bd],[ca−ac,−cb+ad]]=I₂. Since both products are I₂, B=A⁻¹; Δ≠0 makes the division valid.",
    "hints": [
      "Multiply the proposed inverse by A on both sides and factor out ad−bc."
    ],
    "rubric": [
      "Uses Δ=ad−bc and verifies both AB=I₂ and BA=I₂.",
      "Keeps the off-diagonal signs −b and −c and notes why Δ≠0 is needed."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-020",
    "mode": "rubric",
    "answer": "a) A⁻¹=[[−3/5,2/5],[1/5,1/5]]. b) A³=[[1,18],[9,37]]. c) (A⁻¹)³=[[−37/125,18/125],[9/125,−1/125]]. d) A³(A⁻¹)³=(A⁻¹)³A³=I₂, so (A⁻¹)³=(A³)⁻¹.",
    "solution": "Here ad−bc=−3−2=−5. Use the 2 × 2 inverse formula, then compute powers by repeated row-column multiplication.",
    "hints": [
      "Write A⁻¹=(1/5)[[−3,2],[1,1]] and A⁻³=(1/125)[[−37,18],[9,−1]] to keep the arithmetic integral until the final division."
    ],
    "rubric": [
      "All three requested matrices are correct.",
      "Part (d) verifies inverse status using identity products in both orders."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A⁻¹=[[−3/5,2/5],[1/5,1/5]].",
        "solution": "The determinant is (−1)(3)−(2)(1)=−5. Exercise 19 gives (1/(−5))[[3,−2],[−1,−1]]=[[−3/5,2/5],[1/5,1/5]].",
        "rubric": [
          "Computes determinant −5 and applies the swap-and-sign inverse formula correctly."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A³=[[1,18],[9,37]].",
        "solution": "First A²=AA=[[3,4],[2,11]]. Then A³=A²A=[[3,4],[2,11]]·[[−1,2],[1,3]]=[[1,18],[9,37]].",
        "rubric": [
          "Computes A² and then A³ with correct row-column products."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "(A⁻¹)³=[[−37/125,18/125],[9/125,−1/125]].",
        "solution": "Using A⁻¹=(1/5)C with C=[[−3,2],[1,1]], C²=[[11,−4],[−2,3]] and C³=[[−37,18],[9,−1]]. Dividing by 5³=125 gives the result.",
        "rubric": [
          "Cubes the inverse, not the original matrix, and obtains denominator 125 with all four signed numerators correct."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "A³(A⁻¹)³=(A⁻¹)³A³=I₂, hence (A⁻¹)³ is the inverse of A³.",
        "solution": "Direct multiplication gives [[1,18],[9,37]]·[[−37/125,18/125],[9/125,−1/125]]=I₂. Multiplying in the reverse order also gives I₂, satisfying the inverse definition.",
        "rubric": [
          "Checks identity products in both orders and states the inverse conclusion."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-021",
    "mode": "rubric",
    "answer": "For every positive integer n, (Aⁿ)⁻¹=(A⁻¹)ⁿ.",
    "solution": "Use induction. For n=1 the claim is immediate. If it holds for n, then (A⁻¹)ⁿ⁺¹Aⁿ⁺¹=(A⁻¹)ⁿ(A⁻¹A)Aⁿ=(A⁻¹)ⁿAⁿ=I, using associativity and AA⁻¹=A⁻¹A=I. The reverse product similarly equals I. Therefore (A⁻¹)ⁿ⁺¹ is the inverse of Aⁿ⁺¹, completing the induction.",
    "hints": [
      "In the induction step, place A⁻¹ next to A so their product cancels to I."
    ],
    "rubric": [
      "Uses a valid induction or equivalent telescoping argument for all positive n.",
      "Checks cancellation in both orders and preserves matrix multiplication order."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-022",
    "mode": "rubric",
    "answer": "AAᵀ is symmetric because (AAᵀ)ᵀ=AAᵀ.",
    "solution": "Using (XY)ᵀ=YᵀXᵀ and (Aᵀ)ᵀ=A, we get (AAᵀ)ᵀ=(Aᵀ)ᵀAᵀ=AAᵀ. A square matrix equal to its transpose is symmetric, which proves the claim for any matrix A for which the product is defined.",
    "hints": [
      "Transpose AAᵀ using the reverse-order product rule, then simplify the double transpose."
    ],
    "rubric": [
      "Applies the product-transpose rule in reverse order and the double-transpose rule.",
      "Concludes symmetry from equality with the transpose."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-023",
    "mode": "rubric",
    "answer": "A+Aᵀ is symmetric because (A+Aᵀ)ᵀ=A+Aᵀ.",
    "solution": "The transpose-of-sum and double-transpose rules give (A+Aᵀ)ᵀ=Aᵀ+(Aᵀ)ᵀ=Aᵀ+A=A+Aᵀ, with the last equality from commutativity of matrix addition. Thus A+Aᵀ equals its transpose.",
    "hints": [
      "Transpose the sum term by term, then use Aᵀ+A=A+Aᵀ."
    ],
    "rubric": [
      "Uses both transpose rules correctly and concludes A+Aᵀ equals its transpose."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-024",
    "mode": "rubric",
    "answer": "a) AX=B exactly encodes the n scalar equations. b) If A is invertible, X=A⁻¹B is the unique solution.",
    "solution": "Use the row-column meaning of AX and the defining identity products of A⁻¹.",
    "hints": [
      "For part (a), inspect row i of AX; for part (b), multiply AX=B on the left by A⁻¹."
    ],
    "rubric": [
      "Both parts are established with correct matrix dimensions and multiplication order."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The system is AX=B with A=[aᵢⱼ], X=[x₁,…,xₙ]ᵀ, and B=[b₁,…,bₙ]ᵀ.",
        "solution": "AX is n × 1. Its ith entry is the dot product of row i of A with X, namely aᵢ₁x₁+⋯+aᵢₙxₙ. Equality AX=B says this equals bᵢ for every i=1,…,n, exactly the given system.",
        "rubric": [
          "Derives every scalar equation from the corresponding row of AX and matches the right-hand entries bᵢ."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "X=A⁻¹B.",
        "solution": "Starting with AX=B, left-multiplication by A⁻¹ gives A⁻¹(AX)=A⁻¹B. Associativity and A⁻¹A=I yield X=A⁻¹B. Conversely, substituting this X gives A(A⁻¹B)=(AA⁻¹)B=B, so it is indeed a solution; the derivation also shows uniqueness.",
        "rubric": [
          "Multiplies on the left, uses A⁻¹A=I, and verifies substitution or otherwise establishes the solution correctly."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-025",
    "mode": "rubric",
    "answer": "(x₁,x₂,x₃)=(1,−1,−2).",
    "solution": "The coefficient matrix is Q from Exercise 18 and B=[5,−3,0]ᵀ. Its inverse is P=[[2,3,−1],[1,2,1],[−1,−1,3]]. Thus X=PB: x₁=2·5+3·(−3)+(−1)·0=1, x₂=1·5+2·(−3)+1·0=−1, and x₃=(−1)·5+(−1)·(−3)+3·0=−2.",
    "hints": [
      "Use X=A⁻¹B with B=[5,−3,0]ᵀ and the inverse verified in Exercise 18."
    ],
    "rubric": [
      "Forms the correct coefficient and constant matrices and computes X=A⁻¹B.",
      "Obtains x₁=1, x₂=−1, x₃=−2 and can verify all three original equations."
    ],
    "verify": "Substitution gives 7+8−10=5, −4−5+6=−3, and 1+1−2=0."
  },
  {
    "id": "rosen-ch2-ex-2-6-026",
    "mode": "rubric",
    "answer": "a) A∨B=[[1,1],[1,1]]. b) A∧B=[[0,1],[0,0]]. c) A⊙B=[[1,1],[1,0]].",
    "solution": "Join uses entrywise OR and meet uses entrywise AND. Boolean product uses row-column multiplication, but replaces addition by OR and multiplication by AND.",
    "hints": [
      "For ⊙, an output entry is 1 exactly when at least one corresponding pair in the chosen row and column is (1,1)."
    ],
    "rubric": [
      "All three 2 × 2 matrices are correct and the Boolean product is not confused with ordinary multiplication."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[[1,1],[1,1]]",
        "solution": "Apply OR in each position: 1∨0=1, 1∨1=1, 0∨1=1, and 1∨0=1.",
        "rubric": [
          "Gives the all-ones matrix from four entrywise OR operations."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[[0,1],[0,0]]",
        "solution": "Apply AND in each position; only the upper-right pair has both entries equal to 1.",
        "rubric": [
          "Gives exactly one 1 in position (1,2) and zeros elsewhere."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[[1,1],[1,0]]",
        "solution": "For example, (A⊙B)₁₁=(1∧0)∨(1∧1)=1 and (A⊙B)₂₂=(0∧1)∨(1∧0)=0. The other two row-column pairs similarly give 1.",
        "rubric": [
          "Uses OR of ANDed corresponding pairs and obtains [[1,1],[1,0]]."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-027",
    "mode": "rubric",
    "answer": "a) A∨B=[[1,1,1],[1,1,1],[1,0,1]]. b) A∧B=[[0,0,1],[1,0,0],[0,0,1]]. c) A⊙B=[[1,1,1],[1,1,1],[1,0,1]].",
    "solution": "Compute join and meet entry by entry. For the Boolean product, test each row of A against each column of B, recording 1 if any aligned pair consists of two 1s.",
    "hints": [
      "In A⊙B, stop evaluating a row-column entry as soon as one matching 1-and-1 pair is found."
    ],
    "rubric": [
      "Correctly distinguishes entrywise join, entrywise meet, and Boolean product.",
      "Every entry of all three 3 × 3 answers is correct."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "[[1,1,1],[1,1,1],[1,0,1]]",
        "solution": "Take the OR of corresponding entries. The only position where both matrices have 0 is (3,2), so that is the only 0 in the join.",
        "rubric": [
          "Places the sole zero at (3,2) and ones everywhere else."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "[[0,0,1],[1,0,0],[0,0,1]]",
        "solution": "Take the AND of corresponding entries. Both entries are 1 only in positions (1,3), (2,1), and (3,3).",
        "rubric": [
          "Places ones exactly at (1,3), (2,1), and (3,3)."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[[1,1,1],[1,1,1],[1,0,1]]",
        "solution": "Evaluate all nine row-column pairs with ORs of ANDs. Every pair contains a matching 1-and-1 except row 3 of A, [0,0,1], against column 2 of B, [1,0,0]ᵀ, which gives 0.",
        "rubric": [
          "Obtains ones everywhere except the (3,2) entry using Boolean, not arithmetic, products."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-028",
    "mode": "rubric",
    "answer": "A⊙B = [[1,0],[1,1],[1,1]].",
    "solution": "A is 3 × 4 and B is 4 × 2, so the Boolean product is 3 × 2. For each entry, take the OR over k=1,…,4 of aᵢₖ∧bₖⱼ. For example, (1,1) is 1 because a₁₁=b₁₁=1, while (1,2) is 0 because no k has both a₁ₖ=1 and bₖ₂=1. Repeating for the other rows gives [1,1] and [1,1].",
    "hints": [
      "There are four aligned pairs to inspect for each output entry; one matching pair of 1s makes the entry 1."
    ],
    "rubric": [
      "Produces a 3 × 2 matrix and applies OR over all four shared indices.",
      "Obtains exactly [[1,0],[1,1],[1,1]]."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-029",
    "mode": "rubric",
    "answer": "a) A[2]=[[1,0,0],[1,1,0],[1,0,1]]. b) A[3]=[[1,0,0],[1,0,1],[1,1,0]]. c) A∨A[2]∨A[3]=[[1,0,0],[1,1,1],[1,1,1]].",
    "solution": "Boolean powers use repeated Boolean product: A[2]=A⊙A and A[3]=A[2]⊙A. The final join is entrywise OR of the three matrices.",
    "hints": [
      "Do not use ordinary powers: compute A⊙A first, then Boolean-multiply that result by A."
    ],
    "rubric": [
      "Both Boolean powers and the final entrywise join are correct."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A[2]=[[1,0,0],[1,1,0],[1,0,1]]",
        "solution": "Compute A⊙A by inspecting each row-column pair for a matching 1-and-1. For example, (2,2) is 1 because a₂₃=1 and a₃₂=1, so the Boolean dot product contains 1∧1=1. The full product is the displayed matrix.",
        "rubric": [
          "Computes all nine entries of A⊙A correctly."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A[3]=[[1,0,0],[1,0,1],[1,1,0]]",
        "solution": "Boolean-multiply the matrix from part (a) by A. For instance, row 3 of A[2], [1,0,1], against column 2 of A, [0,0,1]ᵀ, gives 1 from the last aligned pair. The other row-column tests give the displayed matrix.",
        "rubric": [
          "Uses A[2]⊙A and obtains all nine entries correctly."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "[[1,0,0],[1,1,1],[1,1,1]]",
        "solution": "Take entrywise OR across A, A[2], and A[3]. A position is 0 only if all three matrices have 0 there; the remaining zeros are exactly (1,2) and (1,3).",
        "rubric": [
          "Combines all three matrices with entrywise OR and leaves zeros only in the first row's last two positions."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-030",
    "mode": "rubric",
    "answer": "a) A∨A=A. b) A∧A=A.",
    "solution": "For each entry x=aᵢⱼ∈{0,1}, idempotence gives x∨x=x and x∧x=x: explicitly 0∨0=0, 1∨1=1, 0∧0=0, and 1∧1=1. Thus both operations leave every entry unchanged.",
    "hints": [
      "Check the two possible values of a single entry, 0 and 1."
    ],
    "rubric": [
      "Proves both identities entrywise for both possible zero-one entries."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A∨A=A.",
        "solution": "At every position, aᵢⱼ∨aᵢⱼ=aᵢⱼ because 0∨0=0 and 1∨1=1.",
        "rubric": [
          "Uses scalar idempotence of OR for 0 and 1 and concludes matrix equality."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A∧A=A.",
        "solution": "At every position, aᵢⱼ∧aᵢⱼ=aᵢⱼ because 0∧0=0 and 1∧1=1.",
        "rubric": [
          "Uses scalar idempotence of AND for 0 and 1 and concludes matrix equality."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-031",
    "mode": "rubric",
    "answer": "a) A∨B=B∨A. b) B∧A=A∧B.",
    "solution": "Join and meet act independently in each position, so their commutativity follows directly from commutativity of Boolean OR and AND.",
    "hints": [
      "Compare arbitrary entries aᵢⱼ∨bᵢⱼ and aᵢⱼ∧bᵢⱼ with the operands reversed."
    ],
    "rubric": [
      "Proves both matrix identities entrywise using scalar commutativity."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A∨B=B∨A.",
        "solution": "For every i,j, (A∨B)ᵢⱼ=aᵢⱼ∨bᵢⱼ=bᵢⱼ∨aᵢⱼ=(B∨A)ᵢⱼ.",
        "rubric": [
          "Uses commutativity of OR in an arbitrary entry."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "B∧A=A∧B.",
        "solution": "For every i,j, (B∧A)ᵢⱼ=bᵢⱼ∧aᵢⱼ=aᵢⱼ∧bᵢⱼ=(A∧B)ᵢⱼ.",
        "rubric": [
          "Uses commutativity of AND in an arbitrary entry."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-032",
    "mode": "rubric",
    "answer": "a) (A∨B)∨C=A∨(B∨C). b) (A∧B)∧C=A∧(B∧C).",
    "solution": "At each position, the entries of both join expressions are (aᵢⱼ∨bᵢⱼ)∨cᵢⱼ and aᵢⱼ∨(bᵢⱼ∨cᵢⱼ), which are equal by associativity of OR. The meet proof is identical with ∧, using associativity of AND.",
    "hints": [
      "Move parentheses in the three-entry Boolean expression, not in a matrix product."
    ],
    "rubric": [
      "Proves associativity of both join and meet entrywise for arbitrary entries."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "(A∨B)∨C=A∨(B∨C).",
        "solution": "The general entries are (a∨b)∨c and a∨(b∨c), with a=aᵢⱼ, b=bᵢⱼ, c=cᵢⱼ. These are equal by OR associativity, so all matrix entries agree.",
        "rubric": [
          "Correctly applies scalar OR associativity at every position."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "(A∧B)∧C=A∧(B∧C).",
        "solution": "The general entries are (a∧b)∧c and a∧(b∧c), equal by AND associativity. Hence the two matrices are equal.",
        "rubric": [
          "Correctly applies scalar AND associativity at every position."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-033",
    "mode": "rubric",
    "answer": "a) A∨(B∧C)=(A∨B)∧(A∨C). b) A∧(B∨C)=(A∧B)∨(A∧C).",
    "solution": "Fix a position and write its entries simply as a,b,c. The two scalar distributive laws are a∨(b∧c)=(a∨b)∧(a∨c) and a∧(b∨c)=(a∧b)∨(a∧c). They hold for all Boolean values, so applying them independently at every matrix position proves both identities.",
    "hints": [
      "Prove the scalar identities with a small 0/1 check or Boolean algebra, then apply them entrywise."
    ],
    "rubric": [
      "Establishes both distributive laws, including OR distributing over AND as well as AND over OR."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A∨(B∧C)=(A∨B)∧(A∨C).",
        "solution": "For arbitrary entries a,b,c, the left entry is a∨(b∧c) and the right is (a∨b)∧(a∨c). These are equal by the Boolean distributive law; checking a=0 reduces to b∧c=b∧c, and a=1 gives 1=1.",
        "rubric": [
          "Uses a valid entrywise proof of OR over AND and covers the Boolean cases or cites the scalar law accurately."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A∧(B∨C)=(A∧B)∨(A∧C).",
        "solution": "For arbitrary entries a,b,c, a∧(b∨c)=(a∧b)∨(a∧c). If a=0 both sides are 0; if a=1 both sides are b∨c. Applying this in every position proves the matrix identity.",
        "rubric": [
          "Uses a valid entrywise proof of AND over OR and covers the Boolean cases or cites the scalar law accurately."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-034",
    "mode": "rubric",
    "answer": "A⊙I=I⊙A=A.",
    "solution": "Write I=[δᵢⱼ], where δᵢⱼ=1 if i=j and 0 otherwise. Then (A⊙I)ᵢⱼ=∨ₖ(aᵢₖ∧δₖⱼ). Only k=j can contribute, so this entry is aᵢⱼ∧1=aᵢⱼ. Similarly (I⊙A)ᵢⱼ=∨ₖ(δᵢₖ∧aₖⱼ) has only the k=i term, again aᵢⱼ. Therefore both products equal A.",
    "hints": [
      "In each Boolean row-column sum, the identity matrix eliminates every term except one."
    ],
    "rubric": [
      "Uses the identity matrix's zero-one entries to isolate the correct surviving term in each product.",
      "Proves both A⊙I=A and I⊙A=A entrywise."
    ]
  },
  {
    "id": "rosen-ch2-ex-2-6-035",
    "mode": "rubric",
    "answer": "A⊙(B⊙C)=(A⊙B)⊙C.",
    "solution": "The (i,j) entry of the left side is 1 exactly when there are indices r and s such that aᵢᵣ=1, bᵣₛ=1, and cₛⱼ=1: first choose r witnessing A against B⊙C, then s witnessing B against C. The right side is 1 under exactly the same condition, this time choosing s first and then r. Since all dimensions are compatible and the witness condition is identical for every entry, the two matrices are equal.",
    "hints": [
      "Describe when an entry is 1 using two intermediate indices; the two bracketings merely find those indices in different orders."
    ],
    "rubric": [
      "Gives an entrywise proof using two intermediate indices or equivalent finite Boolean sums.",
      "Shows both sides have the same 1-condition and respects all matrix dimensions without commuting factors."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-001",
    "mode": "rubric",
    "answer": "A is a subset of B, written A⊆B, when every element of A is also an element of B: ∀x(x∈A→x∈B). To prove it, let x be an arbitrary element of A and use the hypotheses to show x∈B.",
    "solution": "Read A⊆B aloud as “A is contained in B.” The proof must work for an arbitrary x, not merely a selected example. Once x∈A implies x∈B, universal generalization establishes the subset relation.",
    "hints": [
      "Translate the subset symbol into “every element of … is an element of ….”",
      "Start the proof with “Let x∈A.”"
    ],
    "rubric": [
      "States the universal membership condition ∀x(x∈A→x∈B).",
      "Gives an arbitrary-element proof rather than checking only examples."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-002",
    "mode": "rubric",
    "answer": "The empty set ∅ is the set with no elements. For any set A, the claim x∈∅→x∈A is vacuously true because x∈∅ is always false; therefore ∅⊆A.",
    "solution": "A conditional with an impossible hypothesis has no counterexample. Since no x can belong to ∅, there is no element of ∅ that fails to belong to A.",
    "hints": [
      "What is the truth value of x∈∅?",
      "Use the arbitrary-element definition of subset."
    ],
    "rubric": [
      "Defines ∅ as having no elements.",
      "Proves ∅⊆A for arbitrary A using vacuous truth or the absence of a counterexample."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-003",
    "mode": "mixed",
    "answer": "a) For a finite set S, |S| is the number of distinct elements in S. b) For finite A,B, |A∪B|=|A|+|B|−|A∩B|.",
    "solution": "Cardinality counts distinct members. Adding |A| and |B| counts every shared member twice, so subtract |A∩B| once.",
    "hints": [
      "Repeated listings do not create extra set elements.",
      "Which elements are counted twice in |A|+|B|?"
    ],
    "readAloud": "The cardinality of A union B equals cardinality A plus cardinality B minus cardinality A intersection B.",
    "rubric": [
      "Part (a) defines cardinality as the number of distinct elements of a finite set.",
      "Part (b) gives the inclusion–exclusion formula with the intersection subtracted."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For a finite set S, |S| is the number of distinct elements belonging to S.",
        "solution": "Vertical bars around a set denote its size; duplicates and order do not affect that size.",
        "rubric": [
          "Defines |S| correctly and refers to distinct elements."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "|A∪B|=|A|+|B|−|A∩B|",
        "accepted": [
          "|A∪B|=|A|+|B|-|A∩B|",
          "|A|+|B|-|A∩B|"
        ],
        "checker": "text",
        "solution": "Subtract the shared elements once because the first two terms count them twice."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-004",
    "mode": "mixed",
    "answer": "a) 𝒫(S)={X:X⊆S}, the set of all subsets of S. b) ∅∈𝒫(S) for every set S. c) If |S|=n, then |𝒫(S)|=2ⁿ.",
    "solution": "A subset is selected by deciding independently for each of the n elements whether to include it. These n binary choices give 2ⁿ subsets, including ∅ and S.",
    "hints": [
      "The elements of a power set are themselves sets.",
      "For each element of S, choose “in” or “out.”"
    ],
    "rubric": [
      "Defines the power set as the set of all subsets.",
      "States that ∅ belongs to every power set.",
      "Gives 2ⁿ subsets for an n-element set."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "The power set of S is 𝒫(S)={X:X⊆S}.",
        "solution": "Its members are precisely the subsets of S, including ∅ and S.",
        "rubric": [
          "Includes all and only subsets of S as members of 𝒫(S)."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Always: ∅∈𝒫(S) for every set S, because ∅⊆S.",
        "solution": "Membership in a power set means being a subset of the original set.",
        "rubric": [
          "Answers “for every S” and justifies it using ∅⊆S."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "2^n",
        "accepted": [
          "2ⁿ"
        ],
        "checker": "text",
        "solution": "There are two independent inclusion choices for each of n elements, so the total is 2ⁿ."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-005",
    "mode": "rubric",
    "answer": "a) A∪B={x:x∈A or x∈B}; A∩B={x:x∈A and x∈B}; A−B={x:x∈A and x∉B}; A⊕B={x:x belongs to exactly one of A,B}. b) Let P be the positive integers and O the odd integers. Then P∪O={n∈ℤ:n>0 or n is odd}; P∩O is the positive odd integers; P−O is the positive even integers; P⊕O is the union of the positive even integers and the negative odd integers.",
    "solution": "Translate union as “at least one,” intersection as “both,” difference as “in the first but not the second,” and symmetric difference as “exactly one.” Apply these tests to positive, negative, even, and odd integers. Zero is excluded from both P and O.",
    "hints": [
      "Symmetric difference is (A−B)∪(B−A).",
      "In part (b), remember that O also contains negative odd integers."
    ],
    "rubric": [
      "Part (a) correctly defines all four operations, including “exactly one” for symmetric difference.",
      "Part (b) gives the correct union and positive-odd intersection.",
      "Part (b) gives positive even integers for P−O and positive even together with negative odd integers for P⊕O."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A∪B contains elements in at least one set; A∩B contains elements in both; A−B contains elements in A but not B; A⊕B contains elements in exactly one of A and B.",
        "solution": "Equivalently, A⊕B=(A−B)∪(B−A)=(A∪B)−(A∩B).",
        "rubric": [
          "All four membership definitions are correct."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "P∪O={n∈ℤ:n>0 or n odd}; P∩O={1,3,5,…}; P−O={2,4,6,…}; P⊕O={2,4,6,…}∪{−1,−3,−5,…}.",
        "solution": "Positive integers split into positive odd and positive even. Odd integers split into positive odd and negative odd; symmetric difference removes the shared positive odd class.",
        "rubric": [
          "Gives all four sets with the correct treatment of negative odd integers and zero."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-006",
    "mode": "rubric",
    "answer": "a) A=B when A and B have exactly the same elements. b) Prove A⊆B and B⊆A; prove the membership equivalence x∈A↔x∈B; use a membership table for every combination of atomic-set memberships; or derive one set from the other using established set identities. c) Membership proof: x∈A−(B∩C) iff x∈A and ¬(x∈B∧x∈C), iff x∈A and (x∉B or x∉C), iff (x∈A and x∉B) or (x∈A and x∉C), iff x∈(A−B)∪(A−C). Identity proof: A−(B∩C)=A∩(B∩C)ᶜ=A∩(Bᶜ∪Cᶜ)=(A∩Bᶜ)∪(A∩Cᶜ)=(A−B)∪(A−C).",
    "solution": "Two sets are equal precisely when their membership tests always agree. The first proof uses De Morgan and distribution for propositions; the second uses their set-identity counterparts.",
    "hints": [
      "Read Xᶜ as “the complement of X.”",
      "Apply De Morgan to B∩C, then distribute A∩ over the union."
    ],
    "rubric": [
      "Part (a) defines equality by identical membership.",
      "Part (b) describes at least two valid general proof methods.",
      "Part (c) supplies a correct membership-equivalence proof.",
      "Part (c) supplies a second, genuinely different proof using set identities or a complete membership table."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A=B means ∀x(x∈A↔x∈B): the sets have exactly the same elements.",
        "solution": "Names, ordering, and repeated notation are irrelevant; only membership matters.",
        "rubric": [
          "Uses the membership biconditional or an equivalent exact statement."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Show mutual inclusion; show x∈A↔x∈B for arbitrary x; compare complete membership tables; or transform one expression into the other with established identities.",
        "solution": "Each method establishes that no element belongs to one set but not the other.",
        "rubric": [
          "Describes at least two correct methods and does not present a Venn diagram alone as a general formal proof."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "For arbitrary x, x∈A−(B∩C)↔x∈A∧¬(x∈B∧x∈C)↔x∈A∧(x∉B∨x∉C)↔x∈(A−B)∪(A−C). Separately, A−(B∩C)=A∩(Bᶜ∪Cᶜ)=(A∩Bᶜ)∪(A∩Cᶜ)=(A−B)∪(A−C).",
        "solution": "The membership chain uses De Morgan and propositional distribution. The algebraic chain uses complement, De Morgan for sets, and intersection distributing over union.",
        "rubric": [
          "Provides two complete valid derivations with all necessary grouping."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-007",
    "mode": "rubric",
    "answer": "Membership in a set expression is a proposition built from x∈A, x∈B, and so on. Union corresponds to ∨, intersection to ∧, complement to ¬, and set equality to logical equivalence. A logical equivalence that holds for every truth assignment yields a set identity for all sets, and conversely set identities mirror these equivalences.",
    "solution": "For example, x∈A∩(B∪C) means p∧(q∨r), where p,q,r are the three membership statements. Its equivalence to (p∧q)∨(p∧r) proves A∩(B∪C)=(A∩B)∪(A∩C).",
    "hints": [
      "Replace each statement x∈X by a propositional variable.",
      "Match ∪,∩,ᶜ with ∨,∧,¬."
    ],
    "rubric": [
      "Connects set operations with the correct logical connectives.",
      "Explains that universal logical equivalence corresponds to equality of membership conditions.",
      "Includes a correct example or otherwise makes the correspondence explicit."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-008",
    "mode": "rubric",
    "answer": "a) For f:A→B, the domain is A, the codomain is B, and the range is f(A)={f(a):a∈A}⊆B. b) For f:ℤ→ℤ with f(n)=n²+1, the domain and codomain are both ℤ, and the range is {n²+1:n∈ℤ}={1,2,5,10,17,26,…}, namely one more than an integer square.",
    "solution": "Domain is the set of allowed inputs; codomain is the declared target set; range is only the outputs actually attained. Since n² takes values 0,1,4,9,…, adding 1 gives the displayed range, not all integers.",
    "hints": [
      "The codomain need not equal the range.",
      "List n² for n=0,±1,±2,…, then add 1."
    ],
    "rubric": [
      "Part (a) distinguishes domain, codomain, and attained range.",
      "Part (b) identifies both domain and codomain as ℤ.",
      "Part (b) characterizes the range exactly as integers one greater than a square."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For f:A→B, domain=A, codomain=B, and range={f(a):a∈A}.",
        "solution": "The range consists of actual images and is a subset of the codomain.",
        "rubric": [
          "Defines all three terms without confusing codomain and range."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Domain=ℤ, codomain=ℤ, range={n²+1:n∈ℤ}={1,2,5,10,17,…}.",
        "solution": "Square every integer and add one. Repeated outputs such as f(1)=f(−1)=2 are listed only once in the range.",
        "rubric": [
          "Gives the exact domain, codomain, and range."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-009",
    "mode": "rubric",
    "answer": "For f:ℤ⁺→ℤ⁺: a) f is one-to-one when f(m)=f(n) implies m=n, equivalently distinct inputs have distinct outputs. b) f is onto when for every y∈ℤ⁺ there is some n∈ℤ⁺ with f(n)=y. c) f(n)=n is both. d) f(n)=n+1 is one-to-one but not onto because 1 is not attained. e) f(1)=1 and f(n)=n−1 for n≥2 is onto but not one-to-one because f(1)=f(2)=1. f) f(n)=1 is neither: it is not one-to-one and its range {1} is not ℤ⁺.",
    "solution": "One-to-one forbids collisions; onto forbids missed codomain elements. Each example is verified directly against those two conditions.",
    "hints": [
      "Use the identity, shift, predecessor-with-a-duplicate, and constant functions as four standard patterns.",
      "For every example, check both properties separately."
    ],
    "rubric": [
      "Parts (a) and (b) give correct definitions on the stated domain and codomain.",
      "Parts (c) and (d) give valid examples and identify the relevant attained or missed outputs.",
      "Part (e) gives an onto function with an actual collision.",
      "Part (f) gives a function that has both a collision and a missed positive integer."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "f is one-to-one if f(m)=f(n)⇒m=n for all positive integers m,n.",
        "solution": "This says no output comes from two distinct inputs.",
        "rubric": [
          "States the injective condition correctly."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "f is onto if every positive integer y equals f(n) for some positive integer n.",
        "solution": "This says the range is the entire codomain ℤ⁺.",
        "rubric": [
          "States the surjective condition correctly."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "f(n)=n.",
        "solution": "Equal outputs force equal inputs, and every y is hit by n=y.",
        "rubric": [
          "Gives and verifies a bijection."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "f(n)=n+1.",
        "solution": "It is injective, but 1 has no preimage in ℤ⁺.",
        "rubric": [
          "Gives and verifies an injective non-surjective function."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "f(1)=1 and f(n)=n−1 for n≥2.",
        "solution": "Every y≥1 is hit by n=y+1, while f(1)=f(2)=1.",
        "rubric": [
          "Gives and verifies a surjective non-injective function."
        ]
      },
      {
        "label": "f",
        "mode": "rubric",
        "answer": "f(n)=1 for every n∈ℤ⁺.",
        "solution": "Different inputs collide and 2 is never attained.",
        "rubric": [
          "Gives and verifies a function with neither property."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-010",
    "mode": "mixed",
    "answer": "a) If f:A→B is bijective, its inverse f⁻¹:B→A sends each b to the unique a with f(a)=b; equivalently f⁻¹(f(a))=a and f(f⁻¹(b))=b. b) A function has an inverse exactly when it is one-to-one and onto. c) Yes; f(n)=10−n on ℤ is its own inverse, so f⁻¹(n)=10−n.",
    "solution": "For f(n)=10−n, f(f(n))=10−(10−n)=n. It is bijective, and applying the same rule reverses it.",
    "hints": [
      "An inverse must undo the function in both directions.",
      "Compose 10−n with itself."
    ],
    "rubric": [
      "Defines the inverse using unique preimages or both composition identities.",
      "States that bijectivity is necessary and sufficient.",
      "Identifies f⁻¹(n)=10−n and verifies it."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "For bijective f:A→B, f⁻¹:B→A assigns to b the unique a satisfying f(a)=b.",
        "solution": "Consequently f⁻¹∘f is the identity on A and f∘f⁻¹ is the identity on B.",
        "rubric": [
          "Gives the correct reversed rule and uniqueness condition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "Exactly when f is a one-to-one correspondence (both one-to-one and onto).",
        "solution": "Onto supplies a preimage for every output; one-to-one makes that preimage unique.",
        "rubric": [
          "States both necessary properties."
        ]
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "f⁻¹(n)=10−n",
        "accepted": [
          "f^{-1}(n)=10-n",
          "10-n"
        ],
        "checker": "text",
        "solution": "Yes. Since f(f(n))=10−(10−n)=n, the function is self-inverse."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-011",
    "mode": "mixed",
    "answer": "a) ⌊x⌋ is the greatest integer ≤x; ⌈x⌉ is the least integer ≥x. b) ⌊x⌋=⌈x⌉ exactly when x∈ℤ.",
    "solution": "For integer x both values equal x. For noninteger x, x lies strictly between consecutive integers, so its floor is the lower one and its ceiling is the upper one.",
    "hints": [
      "Floor moves down to an integer; ceiling moves up.",
      "What happens when x already is an integer?"
    ],
    "readAloud": "Floor x is the greatest integer not exceeding x; ceiling x is the least integer greater than or equal to x.",
    "rubric": [
      "Defines floor and ceiling with the correct inequalities.",
      "Identifies precisely the integers in part (b)."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "⌊x⌋=max{k∈ℤ:k≤x}; ⌈x⌉=min{k∈ℤ:k≥x}.",
        "solution": "These definitions also handle negative x; for example ⌊−1.2⌋=−2 and ⌈−1.2⌉=−1.",
        "rubric": [
          "Gives both definitions with the correct direction of rounding."
        ]
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "x∈ℤ",
        "accepted": [
          "x is an integer",
          "all integers"
        ],
        "checker": "text",
        "solution": "If x is an integer, both brackets return x; otherwise they return consecutive, unequal integers."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-review-012",
    "mode": "rubric",
    "answer": "One natural rule is aₙ=3ⁿ+5 for n≥1. It gives 8,14,32,86,248, so the next three terms are 734,2192,6566.",
    "solution": "Subtract 5 from every displayed term to obtain 3,9,27,81,243, the powers 3¹ through 3⁵. Continue with 3⁶+5=734, 3⁷+5=2192, and 3⁸+5=6566. A finite beginning does not determine a unique sequence, but this rule fits all given terms.",
    "hints": [
      "Subtract the same constant from all five terms.",
      "Look for powers of 3."
    ],
    "readAloud": "a sub n equals 3 to the n plus 5, with n starting at 1.",
    "verify": "3⁵+5=248 and 3⁶+5=734.",
    "rubric": [
      "States an explicit indexing convention and a rule fitting all five given terms.",
      "Computes the next three terms from that rule; for aₙ=3ⁿ+5 they are 734,2192,6566.",
      "Recognizes that the formula is a conjecture or otherwise verifies every given term."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-013",
    "mode": "auto",
    "answer": "aₙ=a₀−5n",
    "accepted": [
      "a_n=a_0-5n",
      "a0-5n"
    ],
    "checker": "text",
    "solution": "Read aₙ=aₙ₋₁−5 as “each term is 5 less than the preceding term.” Starting at a₀, after n subtractions of 5 the value is a₀−5n. Check: a₀−5(n−1)−5=a₀−5n.",
    "hints": [
      "Start with a₀ and count n steps of −5.",
      "Substitute the proposed formula back into the recurrence."
    ],
    "readAloud": "a sub n equals a sub zero minus 5 n.",
    "verify": "At n=0 the formula gives a₀, and each increase of n by 1 subtracts another 5."
  },
  {
    "id": "rosen-ch2-ex-review-014",
    "mode": "auto",
    "answer": "a(rⁿ⁺¹−1)/(r−1)",
    "accepted": [
      "a(r^(n+1)-1)/(r-1)",
      "a(1-r^(n+1))/(1-r)"
    ],
    "checker": "text",
    "solution": "There are n+1 terms, from ar⁰ through arⁿ. If S=a+ar+⋯+arⁿ, then rS=ar+⋯+arⁿ⁺¹. Subtracting gives (1−r)S=a(1−rⁿ⁺¹), so S=a(rⁿ⁺¹−1)/(r−1) when r≠1.",
    "hints": [
      "Count the initial a as ar⁰.",
      "Multiply the sum by r and subtract."
    ],
    "readAloud": "a times open parenthesis r to the n plus 1 minus 1 close parenthesis, divided by r minus 1.",
    "verify": "For n=0 the formula reduces to a."
  },
  {
    "id": "rosen-ch2-ex-review-015",
    "mode": "rubric",
    "answer": "The odd integers are countably infinite. The map f:ℤ→O defined by f(n)=2n+1 is a bijection onto the set O of odd integers. It is one-to-one because 2m+1=2n+1 implies m=n, and onto because every odd integer has the form 2n+1 for some n∈ℤ. Since ℤ is countable, O is countable.",
    "solution": "Read 2n+1 as “an even integer plus one,” which always produces an odd integer. Solving y=2n+1 gives n=(y−1)/2, an integer exactly when y is odd, providing the inverse map.",
    "hints": [
      "Use the standard parametrization of odd integers.",
      "Prove both injectivity and surjectivity, or exhibit the inverse."
    ],
    "rubric": [
      "Gives a bijection between a known countable set and all odd integers, including negative odds.",
      "Verifies both one-to-one and onto, or gives a valid inverse.",
      "Concludes countability from the bijection."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-016",
    "mode": "auto",
    "answer": "ℝ",
    "accepted": [
      "R",
      "the set of real numbers",
      "(0,1)"
    ],
    "checker": "text",
    "solution": "The set ℝ of real numbers is uncountable by Cantor’s diagonal argument. The interval (0,1) is another valid example because it has the same cardinality as ℝ.",
    "hints": [
      "Use the standard uncountable set from Section 2.5.",
      "An open real interval also works."
    ],
    "readAloud": "The set of real numbers is uncountable."
  },
  {
    "id": "rosen-ch2-ex-review-017",
    "mode": "rubric",
    "answer": "If A=(aᵢₖ) is m×n and B=(bₖⱼ) is n×p, then AB=C=(cᵢⱼ) is the m×p matrix with cᵢⱼ=∑ₖ₌₁ⁿaᵢₖbₖⱼ. The product is defined exactly when the number of columns of A equals the number of rows of B.",
    "solution": "Read the entry formula as “multiply across row i of A and down column j of B, then add.” The shared index k runs through the n columns of A and n rows of B.",
    "hints": [
      "Write the dimensions in order: (m×n)(n×p).",
      "The two inner dimensions must match; the outer dimensions give the result."
    ],
    "rubric": [
      "States the inner-dimension compatibility condition.",
      "Gives the correct row-by-column sum for every entry.",
      "Identifies the product dimensions as m×p."
    ]
  },
  {
    "id": "rosen-ch2-ex-review-018",
    "mode": "rubric",
    "answer": "Matrix multiplication is not commutative. For A=[[1,1],[0,0]] and B=[[0,0],[1,1]], AB=[[1,1],[0,0]]=A but BA=[[0,0],[1,1]]=B. Since A≠B, AB≠BA.",
    "solution": "Compute each product row by column. One explicit counterexample disproves the universal claim AB=BA for all matrices.",
    "hints": [
      "Choose small matrices whose products are easy to compute.",
      "Calculate AB and BA separately; do not assume they agree."
    ],
    "verify": "The two products occupy different rows, so they cannot be equal.",
    "rubric": [
      "Provides explicit matrices for which both products exist.",
      "Computes AB and BA correctly.",
      "Concludes noncommutativity from the unequal products."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-001",
    "mode": "auto",
    "answer": "a) Aᶜ. b) A∩B. c) A−B. d) Aᶜ∩Bᶜ=(A∪B)ᶜ. e) A⊕B.",
    "solution": "Complement means the property fails in the universal set of English words. “Both” is intersection, “but not” is difference, “neither” is the complement of the union, and “one but not both” is symmetric difference.",
    "hints": [
      "Translate each wording into membership in A and B before choosing notation.",
      "“Not either” means not x and not q; “not both” would be different."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "Aᶜ",
        "accepted": [
          "U-A"
        ],
        "checker": "text",
        "solution": "These are precisely the words outside A."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "A∩B",
        "accepted": [
          "B∩A"
        ],
        "checker": "text",
        "solution": "The word must belong to both sets."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "A−B",
        "accepted": [
          "A∩Bᶜ"
        ],
        "checker": "text",
        "solution": "Keep words in A and remove those also in B."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "(A∪B)ᶜ",
        "accepted": [
          "Aᶜ∩Bᶜ",
          "U-(A∪B)"
        ],
        "checker": "text",
        "solution": "Containing neither letter is the negation of containing at least one, giving De Morgan’s equivalent forms."
      },
      {
        "label": "e",
        "mode": "auto",
        "answer": "A⊕B",
        "accepted": [
          "(A−B)∪(B−A)",
          "(A∪B)−(A∩B)"
        ],
        "checker": "text",
        "solution": "Symmetric difference selects membership in exactly one set."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-002",
    "mode": "rubric",
    "answer": "Assume A⊆B and let X∈𝒫(A). Then X⊆A. Since A⊆B, transitivity of inclusion gives X⊆B, so X∈𝒫(B). Therefore 𝒫(A)⊆𝒫(B).",
    "solution": "Read X∈𝒫(A) as “X is a subset of A.” Chain the two inclusions X⊆A and A⊆B for an arbitrary X.",
    "hints": [
      "Start with an arbitrary element X of 𝒫(A).",
      "Translate power-set membership into a subset statement."
    ],
    "rubric": [
      "Chooses an arbitrary X∈𝒫(A) and translates it to X⊆A.",
      "Uses A⊆B to conclude X⊆B.",
      "Converts back to X∈𝒫(B) and states the desired inclusion."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-003",
    "mode": "rubric",
    "answer": "Yes. Since A⊆A, we have A∈𝒫(A). The hypothesis 𝒫(A)⊆𝒫(B) then gives A∈𝒫(B), which means A⊆B.",
    "solution": "Use A itself as the witness in the power set. No proof by contradiction is needed.",
    "hints": [
      "Every set is a subset of itself.",
      "What does A∈𝒫(B) mean?"
    ],
    "rubric": [
      "Observes A∈𝒫(A).",
      "Applies the given power-set inclusion to obtain A∈𝒫(B).",
      "Concludes A⊆B and answers yes."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-004",
    "mode": "auto",
    "answer": "a) ℤ. b) ∅. c) O. d) E.",
    "solution": "Every integer is even or odd, no integer is both, removing all evens leaves odds, and removing all odds leaves evens.",
    "hints": [
      "Partition ℤ into E and O.",
      "Intersection asks for integers with both parities."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "ℤ",
        "accepted": [
          "Z"
        ],
        "checker": "text",
        "solution": "Every integer has exactly one of the two parities, so E∪O=ℤ."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "∅",
        "accepted": [
          "{}"
        ],
        "checker": "set",
        "solution": "No integer is simultaneously even and odd."
      },
      {
        "label": "c",
        "mode": "auto",
        "answer": "O",
        "checker": "text",
        "solution": "Deleting even integers from ℤ leaves exactly the odd integers."
      },
      {
        "label": "d",
        "mode": "auto",
        "answer": "E",
        "checker": "text",
        "solution": "Deleting odd integers from ℤ leaves exactly the even integers."
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-005",
    "mode": "rubric",
    "answer": "For arbitrary x, x∈A−(A−B) iff x∈A and x∉A−B. The latter means ¬(x∈A∧x∉B), which, together with x∈A, forces x∈B. Hence x∈A∩B. Conversely, if x∈A∩B, then x∈A and x∉A−B, so x∈A−(A−B). Thus the sets are equal.",
    "solution": "Read A−B as “in A but outside B.” Removing those elements from A leaves exactly the elements of A that are in B. The membership proof makes this verbal argument formal in both directions.",
    "hints": [
      "Expand both differences using x∈X−Y↔x∈X∧x∉Y.",
      "Remember that x∈A and x∉A−B force x∈B."
    ],
    "rubric": [
      "Correctly expands the nested set differences.",
      "Proves membership in A∩B from membership in the left side.",
      "Proves the reverse inclusion or gives a fully reversible equivalence chain."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-006",
    "mode": "rubric",
    "answer": "If A⊆B, then every x∈A also lies in B, so x∈A∩B; the reverse inclusion A∩B⊆A always holds. Hence A∩B=A. Conversely, if A∩B=A and x∈A, then x∈A∩B, so in particular x∈B. Hence A⊆B.",
    "solution": "An “if and only if” proof needs both directions. Intersecting A with a larger set B changes nothing; if intersection leaves A unchanged, no element of A can lie outside B.",
    "hints": [
      "Prove the forward and reverse implications separately.",
      "The inclusion A∩B⊆A is automatic."
    ],
    "rubric": [
      "Forward direction uses A⊆B to establish A∩B=A.",
      "Reverse direction derives x∈B from x∈A and the assumed equality.",
      "Clearly addresses both directions."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-007",
    "mode": "rubric",
    "answer": "Take A=B=C={1}. Then (A−B)−C=∅−{1}=∅, whereas A−(B−C)={1}−∅={1}. The two sets differ, so equality is not necessary.",
    "solution": "A single counterexample establishes “not necessarily.” Using the same one-element set for A,B,C makes the two groupings easy to evaluate.",
    "hints": [
      "Try A=B=C={1}.",
      "Evaluate the inner parentheses first on each side."
    ],
    "verify": "The left side is empty and the right side contains 1.",
    "rubric": [
      "Supplies explicit sets A,B,C.",
      "Evaluates both nested differences correctly.",
      "Obtains unequal results and states the conclusion."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-008",
    "mode": "rubric",
    "answer": "The identity is true. (A−B)−C=(A∩Bᶜ)∩Cᶜ=A∩Bᶜ∩Cᶜ. Similarly, (A−C)−B=(A∩Cᶜ)∩Bᶜ=A∩Bᶜ∩Cᶜ by commutativity and associativity of intersection. Therefore the two sides are equal.",
    "solution": "Both expressions select elements that are in A, outside B, and outside C; the order in which the two exclusions are written does not matter.",
    "hints": [
      "Rewrite X−Y as X∩Yᶜ.",
      "Use commutativity of intersection."
    ],
    "rubric": [
      "States that the proposed identity is true.",
      "Rewrites both sides correctly using complements.",
      "Uses associativity and commutativity, or an equivalent membership argument, to conclude equality."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-009",
    "mode": "rubric",
    "answer": "The claim is false. Let A=C=D={1} and B=∅. Then C−D=∅, so (A−B)−(C−D)={1}−∅={1}. But A−C=∅, so (A−C)−(B−D)=∅−∅=∅. Hence the identity does not hold in general.",
    "solution": "The counterexample makes the left subtraction remove nothing while the right side begins with an empty set. Evaluate each inner difference before subtracting again.",
    "hints": [
      "Try making A=C=D nonempty and B empty.",
      "Track the element 1 through all four inner differences."
    ],
    "rubric": [
      "States that the equation is not generally valid.",
      "Gives a concrete counterexample and evaluates both sides accurately.",
      "Identifies the resulting unequal sets."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-010",
    "mode": "rubric",
    "answer": "Since A∩B⊆A∪B and both sets are finite, |A∩B|≤|A∪B|. Equality holds exactly when A=B. Indeed, equal cardinalities together with A∩B⊆A∪B force A∩B=A∪B; then every element of either A or B lies in both, so A=B. Conversely, A=B immediately makes the intersection and union identical.",
    "solution": "For finite sets, a proper subset has strictly smaller cardinality. Thus equality of sizes rules out a proper inclusion. If the intersection equals the union, both original sets must equal that common set.",
    "hints": [
      "Start with the subset relation between intersection and union.",
      "For the equality case, use finiteness to turn equal sizes into equal sets."
    ],
    "rubric": [
      "Derives the inequality from A∩B⊆A∪B.",
      "States that equality occurs exactly when A=B.",
      "Proves both the forward equality condition and the easy converse."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-011",
    "mode": "rubric",
    "answer": "a) 0=|∅|≤|A∩B|≤|A|≤|A∪B|≤|U|. b) 0=|∅|≤|A−B|≤|A⊕B|≤|A∪B|≤|A|+|B|.",
    "solution": "Order sizes by subset chains, using ≤ rather than claiming strict increases. In (b), A−B⊆A⊕B⊆A∪B, and inclusion–exclusion gives |A∪B|=|A|+|B|−|A∩B|≤|A|+|B|.",
    "hints": [
      "Look for subset chains before comparing formulas.",
      "Some adjacent quantities can be equal, so use non-strict inequalities."
    ],
    "rubric": [
      "Part (a) gives the complete correct nondecreasing chain beginning with |∅| and ending with |U|.",
      "Part (b) places |A−B|, |A⊕B|, and |A∪B| in the correct order and ends with |A|+|B|.",
      "Uses ≤ and provides valid subset or cardinality reasoning."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "|∅|≤|A∩B|≤|A|≤|A∪B|≤|U|.",
        "solution": "The underlying subset chain is ∅⊆A∩B⊆A⊆A∪B⊆U.",
        "rubric": [
          "Gives the full correct chain with non-strict inequalities."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "|∅|≤|A−B|≤|A⊕B|≤|A∪B|≤|A|+|B|.",
        "solution": "Use ∅⊆A−B⊆A⊕B⊆A∪B and |A∪B|=|A|+|B|−|A∩B|.",
        "rubric": [
          "Gives the full correct chain and justifies the final inequality."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-012",
    "mode": "rubric",
    "answer": "By De Morgan, Aᶜ∩Bᶜ=(A∪B)ᶜ. Therefore |Aᶜ∩Bᶜ|=|U|−|A∪B|. Inclusion–exclusion gives |A∪B|=|A|+|B|−|A∩B|, so |Aᶜ∩Bᶜ|=|U|−|A|−|B|+|A∩B|.",
    "solution": "The left side counts elements outside both A and B. Read the complement as “everything in U except A∪B,” then substitute the union-size formula.",
    "hints": [
      "Apply De Morgan before counting.",
      "A subset X⊆U has |Xᶜ|=|U|−|X|."
    ],
    "rubric": [
      "Correctly identifies Aᶜ∩Bᶜ as the complement of A∪B.",
      "Uses the finite-complement cardinality rule and inclusion–exclusion.",
      "Simplifies to the exact displayed right side."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-013",
    "mode": "mixed",
    "answer": "a) f is one-to-one; g is not one-to-one. b) f is onto; g is not onto. c) Only f has an inverse: f⁻¹(a)=3, f⁻¹(b)=4, f⁻¹(c)=2, f⁻¹(d)=1. The function g has no inverse.",
    "solution": "List the outputs. f uses d,c,a,b, all four codomain values exactly once. g uses 2,1,3,2, so a and d collide and 4 is missed. Reverse each pair of f to obtain its inverse.",
    "hints": [
      "A repeated output proves not one-to-one; a missing output proves not onto.",
      "Invert f by reversing each input–output pair."
    ],
    "rubric": [
      "Correctly classifies both functions in parts (a) and (b).",
      "Identifies the collision g(a)=g(d)=2 and the missed value 4.",
      "States that only f has an inverse and gives all four inverse values."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "T,F",
        "accepted": [
          "true,false",
          "yes,no"
        ],
        "checker": "text",
        "solution": "In the order f,g: f has four distinct outputs, while g(a)=g(d)=2, so the answers are yes and no."
      },
      {
        "label": "b",
        "mode": "auto",
        "answer": "T,F",
        "accepted": [
          "true,false",
          "yes,no"
        ],
        "checker": "text",
        "solution": "In the order f,g: f hits a,b,c,d, while g never hits 4, so the answers are yes and no."
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "Only f has an inverse: f⁻¹(a)=3, f⁻¹(b)=4, f⁻¹(c)=2, f⁻¹(d)=1; g has none.",
        "solution": "Reverse f’s pairs (1,d),(2,c),(3,a),(4,b). g is not bijective, so no inverse function exists.",
        "rubric": [
          "Gives all four values of f⁻¹ correctly and states that g has no inverse."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-014",
    "mode": "rubric",
    "answer": "For each y∈f(S), choose one element x∈S with f(x)=y. Different chosen outputs require different chosen preimages, so this selection defines an injection from f(S) into S. Consequently |f(S)|≤|S|.",
    "solution": "A function gives each input only one output, so images can coincide but cannot multiply. Selecting one preimage per distinct output turns that observation into a precise cardinality argument.",
    "hints": [
      "Count distinct outputs, not the number of evaluations.",
      "Choose one preimage in S for each output."
    ],
    "rubric": [
      "Explains that distinct output values require distinct preimages in S.",
      "Constructs an injection or gives an equivalent rigorous counting argument.",
      "Concludes |f(S)|≤|S| for every S⊆A."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-015",
    "mode": "rubric",
    "answer": "If f is one-to-one and S⊆A, distinct elements of S have distinct images, so f restricted to S is a bijection onto f(S), giving |f(S)|=|S|. Conversely, suppose the equality holds for every S. If f(a)=f(b) with a≠b, take S={a,b}; then |S|=2 but |f(S)|=1, a contradiction. Therefore f is one-to-one.",
    "solution": "The forward direction preserves every finite count because there are no collisions. For the reverse direction, test the condition on two-element subsets; any collision immediately creates a strict loss of cardinality.",
    "hints": [
      "For the converse, use a two-element subset formed by a colliding pair.",
      "One-to-one means exactly that no images collide."
    ],
    "rubric": [
      "Proves that injectivity gives |f(S)|=|S| for every subset S.",
      "For the converse, assumes a collision and uses S={a,b} to violate the equality.",
      "Clearly establishes both directions of the biconditional."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-016",
    "mode": "rubric",
    "answer": "a) If f is injective and f(X)=f(Y), then for x∈X there is y∈Y with f(x)=f(y); injectivity gives x=y∈Y. Symmetrically Y⊆X, so X=Y. Thus Sf is injective. b) If f is onto and Y⊆B, put X=f⁻¹(Y). Surjectivity gives f(X)=Y, so Sf is onto. c) If f is onto and f⁻¹(Y₁)=f⁻¹(Y₂), any y∈Y₁ has x with f(x)=y. Then x lies in both displayed preimages, so y∈Y₂; symmetrically Y₂⊆Y₁. Thus Sf⁻¹ is injective. d) If f is injective and X⊆A, put Y=f(X). Then f⁻¹(Y)=X: the forward inclusion is automatic, and any x mapping into f(X) equals its preimage in X by injectivity. Thus Sf⁻¹ is onto. e) If f is bijective, parts (a)–(d) show that both induced maps are bijections.",
    "solution": "Read Sf(X)=f(X) as “apply f to every element of X and collect the images,” and Sf⁻¹(Y)=f⁻¹(Y) as “collect every element of A whose image lies in Y.” Each proof converts equality or surjectivity at the power-set level back into elementwise statements about f.",
    "hints": [
      "For (a), compare X and Y one element at a time.",
      "For (b), use X=f⁻¹(Y); for (d), use Y=f(X).",
      "In (c), onto supplies an x with f(x)=y."
    ],
    "rubric": [
      "Part (a) uses injectivity to recover X=Y from equal direct images.",
      "Part (b) uses f⁻¹(Y) and surjectivity to hit every Y⊆B.",
      "Part (c) proves equal inverse images imply Y₁=Y₂ using surjectivity.",
      "Part (d) proves f⁻¹(f(X))=X using injectivity.",
      "Part (e) combines the preceding parts for both induced functions."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "If f(X)=f(Y), injectivity gives X⊆Y and Y⊆X by comparing preimages of each element’s image; hence Sf is one-to-one.",
        "solution": "For x∈X, choose y∈Y with f(x)=f(y), so x=y. Repeat with X,Y interchanged.",
        "rubric": [
          "Proves both subset inclusions using f’s injectivity."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "For any Y⊆B, X=f⁻¹(Y) satisfies Sf(X)=f(X)=Y when f is onto.",
        "solution": "Always f(f⁻¹(Y))⊆Y; onto ensures every y∈Y has a preimage, proving the reverse inclusion.",
        "rubric": [
          "Uses the correct preimage subset and establishes equality with Y."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "If f⁻¹(Y₁)=f⁻¹(Y₂), onto implies every y can be tested through some x with f(x)=y, yielding Y₁=Y₂. Thus Sf⁻¹ is one-to-one.",
        "solution": "Membership of x in either equal preimage transfers membership of y between Y₁ and Y₂.",
        "rubric": [
          "Uses onto and proves both inclusions between Y₁ and Y₂."
        ]
      },
      {
        "label": "d",
        "mode": "rubric",
        "answer": "For every X⊆A, choose Y=f(X); injectivity gives f⁻¹(Y)=X, so Sf⁻¹ is onto.",
        "solution": "If f(x)=f(x′) for x′∈X, injectivity gives x=x′∈X; the other inclusion always holds.",
        "rubric": [
          "Constructs Y=f(X) and verifies both inclusions in f⁻¹(Y)=X."
        ]
      },
      {
        "label": "e",
        "mode": "rubric",
        "answer": "A bijective f is both injective and onto, so (a),(b) make Sf bijective and (c),(d) make Sf⁻¹ bijective.",
        "solution": "Apply the four preceding implications with both hypotheses available.",
        "rubric": [
          "Concludes bijectivity of both induced maps from the earlier parts."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-017",
    "mode": "rubric",
    "answer": "Fix any x∈A and apply the equal functions Sf and Sg to the singleton {x}. Then {f(x)}=Sf({x})=Sg({x})={g(x)}. Equality of these singleton sets gives f(x)=g(x). Since x was arbitrary, f=g.",
    "solution": "A direct image of a singleton contains exactly one element. Testing the induced functions on singletons therefore recovers the original function values.",
    "hints": [
      "Apply Sf=Sg to X={x}.",
      "What does equality of {f(x)} and {g(x)} imply?"
    ],
    "rubric": [
      "Applies the induced-function equality to an arbitrary singleton.",
      "Derives {f(x)}={g(x)} and hence f(x)=g(x).",
      "States that x was arbitrary, covering all of A."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-018",
    "mode": "rubric",
    "answer": "Write n by parity. If n=2k, then n/2=k and ⌈n/2⌉+⌊n/2⌋=k+k=2k=n. If n=2k+1, then n/2=k+1/2, so the ceiling is k+1, the floor is k, and their sum is 2k+1=n. These cases cover every integer.",
    "solution": "Parity expresses an integer as an exact half-integer grid point or halfway between two integers. The formulas also work for negative n because k may be any integer.",
    "hints": [
      "Split into n=2k and n=2k+1.",
      "Evaluate floor and ceiling of k+1/2."
    ],
    "rubric": [
      "Uses exhaustive even and odd cases.",
      "Evaluates both floor and ceiling correctly in each case.",
      "Sums the values to recover n."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-019",
    "mode": "rubric",
    "answer": "The equality holds exactly when {x}+{y}<1, where {t}=t−⌊t⌋ is the fractional part. Write x=m+r, y=n+s with m=⌊x⌋, n=⌊y⌋ and 0≤r,s<1. Then ⌊x+y⌋=m+n+⌊r+s⌋, while ⌊x⌋+⌊y⌋=m+n. They agree iff ⌊r+s⌋=0, which for 0≤r+s<2 is equivalent to r+s<1.",
    "solution": "Fractional parts are what remain after removing the integer floors. Their sum is below 1 exactly when it creates no extra carry into the floor.",
    "hints": [
      "Write each number as its floor plus a fractional part.",
      "When does r+s cross the next integer?"
    ],
    "verify": "x=y=0.5 has fractional-part sum 1 and the equality fails; x=y=0.25 has sum 0.5 and it holds.",
    "rubric": [
      "States the exact condition {x}+{y}<1.",
      "Decomposes x and y into integer and fractional parts.",
      "Justifies the equivalence using the range 0≤r+s<2."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-020",
    "mode": "rubric",
    "answer": "The equality holds exactly when at least one of x,y is an integer, or when {x}+{y}>1. To see this, put r={x},s={y}. If r=s=0, both sides agree. If exactly one fractional part is zero, ceil(r+s) equals the single nonzero ceiling contribution, so they also agree. If r,s>0, the right side exceeds ⌊x⌋+⌊y⌋ by 2; the left side exceeds it by 1 when r+s≤1 and by 2 when r+s>1.",
    "solution": "Ceiling adds zero for an integer and one for a noninteger after removing floors. Two nonintegral inputs agree precisely when their fractional parts push the sum above the next integer.",
    "hints": [
      "Separate the cases r=0, exactly one of r,s zero, and r,s>0.",
      "For positive r,s, compare r+s with 1; equality r+s=1 belongs to the failure case."
    ],
    "verify": "x=1.2,y=2 works; x=y=0.5 fails; x=0.2,y=0.8 fails; x=0.6,y=0.8 works.",
    "rubric": [
      "States the complete condition, including all pairs with an integer input.",
      "For two nonintegers, distinguishes fractional sum ≤1 from >1 correctly.",
      "Provides a valid case-based derivation."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-021",
    "mode": "rubric",
    "answer": "The equality holds exactly when either (i) x and y are both integers, or (ii) x is not an integer and {x}+{y}≤1. Write x=m+r, y=n+s with m=⌊x⌋, n=⌊y⌋. Then ⌈x⌉+⌊y⌋=m+n+δ, where δ=0 if r=0 and δ=1 if r>0, while ⌈x+y⌉=m+n+⌈r+s⌉. If r=0, equality requires ⌈s⌉=0, hence s=0. If r>0, it requires ⌈r+s⌉=1, equivalently r+s≤1.",
    "solution": "The mixed brackets make the integer cases asymmetric. An integer x forces y to be integer; a noninteger x permits equality exactly when the two fractional parts do not exceed 1.",
    "hints": [
      "Use the same fractional-part setup as for the previous two questions, but track ceiling and floor separately.",
      "Split into r=0 and r>0."
    ],
    "verify": "Both integers work; x integer and y noninteger fail; noninteger x with fractional sum at most 1 works.",
    "rubric": [
      "States both exact cases, including the requirement that y be integer when x is integer.",
      "Correctly handles noninteger x with fractional sum ≤1.",
      "Derives the cases using ceilings of r+s."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-022",
    "mode": "rubric",
    "answer": "If n=2k, then ⌊n/2⌋⌈n/2⌉=k·k=k² and ⌊n²/4⌋=⌊k²⌋=k². If n=2k+1, the product on the left is k(k+1)=k²+k, while n²/4=k²+k+1/4, whose floor is also k²+k. Hence equality holds for every integer n.",
    "solution": "Splitting by parity removes both types of brackets. In the odd case, the extra 1/4 disappears when the floor is taken.",
    "hints": [
      "Use n=2k and n=2k+1.",
      "Expand (2k+1)² as 4k²+4k+1."
    ],
    "rubric": [
      "Covers even and odd integers.",
      "Computes the floor–ceiling product correctly in each case.",
      "Computes ⌊n²/4⌋ correctly and obtains equality."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-023",
    "mode": "rubric",
    "answer": "If x∈ℤ, then m−x∈ℤ, so ⌊x⌋+⌊m−x⌋=x+(m−x)=m. Otherwise write x=k+r with k∈ℤ and 0<r<1. Then ⌊x⌋=k and m−x=(m−k−1)+(1−r), where 0<1−r<1, so ⌊m−x⌋=m−k−1. The sum is m−1.",
    "solution": "The integer case is direct. In the noninteger case, the two fractional parts r and 1−r are both positive and sum to 1, causing the combined floors to lose exactly 1.",
    "hints": [
      "Separate x∈ℤ from x∉ℤ.",
      "For noninteger x, write x=k+r with 0<r<1."
    ],
    "rubric": [
      "Handles integer x and obtains m.",
      "Uses a valid floor-plus-fraction decomposition for noninteger x.",
      "Evaluates the second floor correctly and obtains m−1."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-024",
    "mode": "rubric",
    "answer": "Let k=⌊x/4⌋, so 4k≤x<4k+4. Dividing by 2 gives 2k≤x/2<2k+2. Hence ⌊x/2⌋ is either 2k or 2k+1. Dividing either possibility by 2 and taking the floor gives k. Therefore ⌊⌊x/2⌋/2⌋=k=⌊x/4⌋.",
    "solution": "Group four consecutive integer units into two groups of two. The inner floor can discard at most the position within a pair; the outer floor then identifies the same block of four. The inequality proof also covers negative x.",
    "hints": [
      "Set k=⌊x/4⌋ and write the defining inequalities.",
      "List the only two possible integer values of ⌊x/2⌋."
    ],
    "rubric": [
      "Introduces k with the correct inequalities 4k≤x<4k+4.",
      "Shows the inner floor is 2k or 2k+1.",
      "Takes the outer floor and concludes equality with ⌊x/4⌋."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-025",
    "mode": "rubric",
    "answer": "Write n=2k+1. Then n²=4k²+4k+1=4k(k+1)+1, so n²/4=k(k+1)+1/4. Therefore ⌈n²/4⌉=k(k+1)+1. Also (n²+3)/4=k(k+1)+1, proving equality.",
    "solution": "An odd square is one more than a multiple of 4. Adding 3 before dividing by 4 exactly performs the ceiling operation on the remaining 1/4.",
    "hints": [
      "Write n=2k+1 and expand n².",
      "Compare n²/4 with (n²+3)/4."
    ],
    "rubric": [
      "Uses n=2k+1 and expands correctly.",
      "Evaluates the ceiling as k(k+1)+1.",
      "Shows the right side has the same value."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-026",
    "mode": "rubric",
    "answer": "Let q=⌊(x+n)/m⌋ and k=⌊x⌋. Then q≤(x+n)/m<q+1, hence qm−n≤x<(q+1)m−n. Both qm−n and (q+1)m−n are integers. Since k≤x<k+1, the first integer bound gives qm−n≤k, and the second gives k<(q+1)m−n. Thus q≤(k+n)/m<q+1, so ⌊(⌊x⌋+n)/m⌋=q=⌊(x+n)/m⌋.",
    "solution": "Replacing x by its floor changes the numerator by less than 1. Because n and the integer bounds align on the same integer grid, this cannot change the displayed integer quotient. The inequalities make that reasoning exact.",
    "hints": [
      "Name the right-hand floor q and write its two defining inequalities.",
      "Use that an integer ≤x is also ≤⌊x⌋."
    ],
    "rubric": [
      "Defines q and k and uses the floor inequalities in the correct directions.",
      "Uses integrality of the bounds to replace x by k without crossing an integer boundary.",
      "Derives q≤(k+n)/m<q+1 and concludes equality."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-027",
    "mode": "rubric",
    "answer": "Write x=k+r with k∈ℤ and 0≤r<1. Then ⌊mx⌋=mk+⌊mr⌋. Also each summand satisfies ⌊x+j/m⌋=k+⌊r+j/m⌋, so the right side is mk+∑ⱼ₌₀ᵐ⁻¹⌊r+j/m⌋. Let t=⌊mr⌋, with 0≤t≤m−1. Among j=0,…,m−1, exactly t values satisfy r+j/m≥1, namely the largest t values of j; for those j the floor is 1, and for all others it is 0. Hence the sum is t, and both sides equal mk+t.",
    "solution": "This is Hermite’s floor identity. Removing the common integer k reduces the claim to 0≤r<1. As j increases, r+j/m crosses 1 exactly ⌊mr⌋ times; each crossing contributes one to the sum, matching multiplication by m before flooring.",
    "hints": [
      "Write x=k+r and remove k from every floor.",
      "Count how many j satisfy r+j/m≥1."
    ],
    "verify": "For m=2 the identity becomes ⌊2x⌋=⌊x⌋+⌊x+1/2⌋.",
    "rubric": [
      "Reduces to x=k+r and correctly extracts mk from both sides.",
      "Introduces t=⌊mr⌋ and counts exactly t indices with r+j/m≥1.",
      "Converts that count into the sum t and completes the identity."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-028",
    "mode": "mixed",
    "answer": "a) The first 20 Ulam numbers are 1,2,3,4,6,8,11,13,16,18,26,28,36,38,47,48,53,57,62,69. b) There are infinitely many. If the list were finite, let M be its largest and L its second-largest Ulam number. N=M+L has a representation as a sum of two different Ulam numbers. Any other such representation using M would need a second term smaller than L and hence a smaller sum; one not using M would be at most L plus the third-largest Ulam number, again smaller than N. Thus N has exactly one representation and must itself be Ulam, contradicting maximality of M.",
    "solution": "For (a), test each integer in order and count unordered representations as sums of two distinct earlier Ulam numbers; keep it only when the count is one. For (b), the largest-plus-second-largest candidate cannot have an alternative representation, so a finite list always generates a larger Ulam number.",
    "hints": [
      "Count each sum once as an unordered pair of distinct earlier Ulam numbers.",
      "For infinitude, examine the sum of the two largest supposed Ulam numbers."
    ],
    "rubric": [
      "Part (a) gives the first 20 terms in the correct order.",
      "Part (b) assumes a finite list and tests the sum of its largest two terms.",
      "Part (b) rules out every alternative representation and derives a contradiction."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "auto",
        "answer": "1,2,3,4,6,8,11,13,16,18,26,28,36,38,47,48,53,57,62,69",
        "checker": "text",
        "solution": "Continue the unique-sum test after 8: the accepted next terms are 11,13,16,18,26,28,36,38,47,48,53,57,62,69."
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "If only finitely many existed, with largest M and second-largest L, then M+L would have exactly one representation as a sum of distinct Ulam numbers and would be a larger Ulam number, a contradiction.",
        "solution": "Any representation other than M+L either uses M with a smaller second term or excludes M and is bounded by the second- plus third-largest terms; both give a smaller sum. Therefore the list cannot be finite.",
        "rubric": [
          "Uses M+L and proves uniqueness by excluding both types of alternative representation.",
          "Concludes that a larger Ulam number contradicts finiteness."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-029",
    "mode": "auto",
    "answer": "101",
    "accepted": [
      "101.0"
    ],
    "checker": "number",
    "solution": "Read ∏ₖ₌₁¹⁰⁰(k+1)/k as “multiply (k+1)/k for k from 1 through 100.” It expands to (2/1)(3/2)(4/3)⋯(101/100). Every numerator except 101 cancels the preceding denominator, leaving 101.",
    "hints": [
      "Write the first three and last two factors.",
      "Cancel adjacent equal integers; do not cancel within a single fraction."
    ],
    "readAloud": "The product from k equals 1 to 100 of k plus 1 over k telescopes to 101.",
    "verify": "After the first two factors the value is 3; after the first three it is 4, matching the final pattern."
  },
  {
    "id": "rosen-ch2-ex-supplementary-030",
    "mode": "rubric",
    "answer": "One rule is a₁=1,a₂=3,a₃=4 and aₙ=aₙ₋₁+aₙ₋₂+aₙ₋₃ for n≥4: each term is the sum of the previous three. The next four terms are 169,311,572,1052.",
    "solution": "Check the recurrence: 8=4+3+1, 15=8+4+3, 27=15+8+4, 50=27+15+8, and 92=50+27+15. Continue: 92+50+27=169; 169+92+50=311; 311+169+92=572; 572+311+169=1052.",
    "hints": [
      "Test sums of consecutive earlier terms, starting with three terms.",
      "Carry the sliding window forward one term at a time."
    ],
    "readAloud": "Each new term is the sum of the previous three terms.",
    "verify": "The recurrence reproduces all five terms from 8 through 92 before it is extended.",
    "rubric": [
      "States a precise recurrence with sufficient initial terms and indexing.",
      "Verifies the rule against the displayed sequence.",
      "Computes 169,311,572,1052 in order."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-031",
    "mode": "rubric",
    "answer": "Use a₁=2 and, for k≥1, a₂ₖ=a₂ₖ₋₁+k and a₂ₖ₊₁=k·a₂ₖ. Thus alternate “add k” and “multiply by k,” increasing k after each pair. The next four terms are 5346,5353,37471,37479.",
    "solution": "The operations are +1,×1,+2,×2,+3,×3,+4,×4,+5,×5,+6. Continue ×6: 891·6=5346; +7: 5346+7=5353; ×7: 5353·7=37471; +8: 37471+8=37479.",
    "hints": [
      "Group the sequence in pairs after the initial 2.",
      "Track the operations separately: addition of k alternates with multiplication by k."
    ],
    "verify": "The same rule gives 177×5=885 and then 885+6=891, the final two supplied terms.",
    "rubric": [
      "States the alternating rule precisely, including how k increases and the initial value.",
      "Reproduces the supplied sequence with the rule.",
      "Computes 5346,5353,37471,37479 in the correct order."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-032",
    "mode": "rubric",
    "answer": "Let I be the irrational numbers. Then ℝ=ℚ∪I. The rationals ℚ are countable. If I were countable, the union of the two countable sets ℚ and I would be countable, contradicting the uncountability of ℝ. Therefore I is uncountable.",
    "solution": "A countable union of two countable sets is countable: alternate through their two enumerations and remove repetitions. Since the real numbers cannot result from such a union, the irrational component must be uncountable.",
    "hints": [
      "Write ℝ as the disjoint union of rationals and irrationals.",
      "Assume the irrationals are countable and derive a contradiction."
    ],
    "rubric": [
      "Decomposes ℝ into ℚ and the irrationals.",
      "Uses countability of ℚ and closure under finite countable unions.",
      "Derives a contradiction from uncountability of ℝ."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-033",
    "mode": "rubric",
    "answer": "For each positive integer j, the fiber f⁻¹(j)={s∈S:f(s)=j} is countable. Because f is a function on S, every s∈S belongs to exactly one such fiber, so S=⋃ⱼ₌₁∞f⁻¹(j). A countable union of countable sets is countable; enumerate the elements of each nonempty fiber and dovetail through the fibers. Therefore S is countable.",
    "solution": "The function sorts S into countably many labelled bins. Each bin is countable by hypothesis, and a diagonal enumeration covers every bin and every element within it.",
    "hints": [
      "Show that the fibers cover S.",
      "Use the countable-union theorem or describe a diagonal enumeration."
    ],
    "rubric": [
      "Identifies S as the union of the countably many inverse-image fibers.",
      "Uses the hypothesis that every fiber is countable.",
      "Correctly invokes or demonstrates countability of a countable union of countable sets."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-034",
    "mode": "rubric",
    "answer": "Map each nonempty finite subset {a₁,…,a_k} of ℤ⁺ to p₁^a₁⋯p_k^a_k, where pᵢ is the ith prime, and map ∅ to 1. Unique prime factorization makes this map injective: the exponent of pᵢ reveals exactly which positive integers belong to the subset. An injection into ℤ⁺ shows that the collection is countable.",
    "solution": "Read p₁^a₁⋯p_k^a_k as a code whose prime positions identify exponents. Different finite subsets produce different exponent patterns and therefore different positive integers. The coding works even if the subset’s elements are not listed in increasing order.",
    "hints": [
      "Use primes as fixed positions and subset elements as exponents.",
      "Why does unique factorization prevent two subsets from sharing a code?"
    ],
    "verify": "{1,3} maps to 2¹·3³=54, while {3,1} gives the same subset and code; no other subset can give 54.",
    "rubric": [
      "Defines an explicit coding of every finite subset, including ∅.",
      "Uses unique prime factorization to prove injectivity.",
      "Concludes countability from injection into the positive integers."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-035",
    "mode": "rubric",
    "answer": "First compare (0,1)×(0,1) with (0,1). Use decimal expansions not ending in all 9s. If x=0.x₁x₂… and y=0.y₁y₂…, define F(x,y)=0.x₁y₁x₂y₂…. The original digits can be recovered from alternating positions, so F is injective; its output also cannot end in all 9s, since that would force both input expansions to do so. The map z↦(z,z) is an injection in the reverse direction. Schröder–Bernstein therefore gives |(0,1)×(0,1)|=|(0,1)|. A bijection between ℝ and (0,1), such as x↦1/(1+e⁻ˣ), transfers this equality to |ℝ×ℝ|=|ℝ|.",
    "solution": "Interleaving is reversible, so it cannot identify two different ordered pairs. The no-trailing-9 convention prevents decimal-representation ambiguity. Injections in both directions are enough for Schröder–Bernstein; an explicit two-way formula is unnecessary. Finally apply the interval–real bijection coordinatewise.",
    "hints": [
      "Construct injections in both directions between the square and the interval.",
      "Explain why interleaving canonical decimal digits is reversible.",
      "Use a known bijection between ℝ and (0,1) for the final step."
    ],
    "rubric": [
      "Defines the alternating-digit injection with canonical decimal expansions and explains injectivity.",
      "Supplies a reverse injection and correctly applies Schröder–Bernstein.",
      "Transfers the interval-square result to ℝ×ℝ using a bijection between ℝ and (0,1).",
      "Addresses the trailing-9 convention sufficiently to avoid decimal ambiguity."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-036",
    "mode": "rubric",
    "answer": "Every complex number has a unique form a+bi with a,b∈ℝ. The map F:ℂ→ℝ×ℝ given by F(a+bi)=(a,b) is a bijection, with inverse (a,b)↦a+bi. By Supplementary Exercise 35, |ℝ×ℝ|=|ℝ|, so |ℂ|=|ℝ|.",
    "solution": "A complex number carries exactly the information of an ordered pair of real coordinates. This bijection changes the question to the cardinality result already proved for the real plane.",
    "hints": [
      "Separate a complex number into its real and imaginary parts.",
      "Use the previous exercise after constructing the coordinate bijection."
    ],
    "rubric": [
      "Defines the coordinate map between ℂ and ℝ×ℝ.",
      "Justifies bijectivity using uniqueness of real and imaginary parts or an inverse.",
      "Uses |ℝ×ℝ|=|ℝ| to conclude |ℂ|=|ℝ|."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-037",
    "mode": "rubric",
    "answer": "For A=[[0,1],[−1,0]], A²=−I, A³=−A=[[0,−1],[1,0]], and A⁴=I. Thus for n≥1, Aⁿ is I if n≡0 (mod 4), A if n≡1 (mod 4), −I if n≡2 (mod 4), and −A if n≡3 (mod 4).",
    "solution": "Compute powers until the identity repeats: A²=[[−1,0],[0,−1]], A³=A²A=−A, and A⁴=(A²)²=I. Thereafter the pattern repeats every four powers.",
    "hints": [
      "Compute A² before attempting a general formula.",
      "Use the remainder of n modulo 4."
    ],
    "verify": "A⁵=A⁴A=A, matching residue 1 modulo 4.",
    "rubric": [
      "Computes A²,A³,A⁴ correctly.",
      "States all four residue cases for Aⁿ.",
      "Explains the period-four repetition."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-038",
    "mode": "rubric",
    "answer": "For any n×n matrix B, AB=(cI)B=c(IB)=cB and BA=B(cI)=c(BI)=cB. Therefore AB=BA.",
    "solution": "The identity matrix satisfies IX=X and XI=X. Scalar c can be factored from either side of a matrix product, so cI commutes with every matrix of the same size.",
    "hints": [
      "Substitute cI on each side separately.",
      "Use IB=B and BI=B."
    ],
    "rubric": [
      "Computes AB=cB using the identity property.",
      "Computes BA=cB using the other identity property.",
      "Concludes commutativity for arbitrary B."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-039",
    "mode": "rubric",
    "answer": "Write A=[[a,b],[c,d]]. Taking B=E₁₂=[[0,1],[0,0]] gives AE₁₂=[[0,a],[0,c]] and E₁₂A=[[c,d],[0,0]]. Equality forces c=0 and a=d. Taking B=E₂₁=[[0,0],[1,0]] gives AE₂₁=[[b,0],[d,0]] and E₂₁A=[[0,0],[a,b]], forcing b=0. Hence A=[[a,0],[0,a]]=aI, the required scalar form.",
    "solution": "The hypothesis holds for every B, so choose matrices that isolate off-diagonal entries. The first choice equates the diagonal entries and kills c; the second kills b. Set c in the requested conclusion equal to the common diagonal entry a (the matrix entry c was only temporary notation).",
    "hints": [
      "Use elementary matrices with one entry 1 and the others 0.",
      "Compare all four entries of AB and BA."
    ],
    "rubric": [
      "Uses explicit test matrices and computes the products correctly.",
      "Derives that both off-diagonal entries of A are zero.",
      "Derives equal diagonal entries and concludes A is a scalar multiple of I."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-040",
    "mode": "rubric",
    "answer": "Compute in both orders: (AB)(B⁻¹A⁻¹)=A(BB⁻¹)A⁻¹=AIA⁻¹=AA⁻¹=I, and (B⁻¹A⁻¹)(AB)=B⁻¹(A⁻¹A)B=B⁻¹IB=B⁻¹B=I. Since B⁻¹A⁻¹ is both a right and left inverse of AB, (AB)⁻¹=B⁻¹A⁻¹.",
    "solution": "The inverse reverses product order so that adjacent inverse pairs cancel. Associativity lets you evaluate BB⁻¹ and A⁻¹A first without changing the matrix product.",
    "hints": [
      "Test B⁻¹A⁻¹ on both sides of AB.",
      "Cancel only adjacent inverse pairs after inserting identity matrices."
    ],
    "rubric": [
      "Verifies (AB)(B⁻¹A⁻¹)=I with correct association.",
      "Verifies the reverse product is also I.",
      "Uses the inverse definition and preserves the reversed order B⁻¹A⁻¹."
    ]
  },
  {
    "id": "rosen-ch2-ex-supplementary-041",
    "mode": "rubric",
    "answer": "a) Every entry of A⊙0 is ∨ₖ(aᵢₖ∧0)=0, and every entry of 0⊙A is ∨ₖ(0∧aₖⱼ)=0; hence both products are 0. b) Entrywise, aᵢⱼ∨0=0∨aᵢⱼ=aᵢⱼ, so A∨0=0∨A=A. c) Entrywise, aᵢⱼ∧0=0∧aᵢⱼ=0, so A∧0=0∧A=0.",
    "solution": "Read ⊙ as Boolean matrix product: each entry is an OR of ANDs along a row and column. Join ∨ and meet ∧ instead act entry by entry. With zero-one entries, x∧0=0 and x∨0=x, which proves all six equalities.",
    "hints": [
      "For (a), write one general Boolean-product entry.",
      "For (b) and (c), use x∨0=x and x∧0=0."
    ],
    "rubric": [
      "Part (a) uses the Boolean-product row-by-column definition in both orders.",
      "Part (b) applies the join identity x∨0=x entrywise in both orders.",
      "Part (c) applies the meet identity x∧0=0 entrywise in both orders."
    ],
    "parts": [
      {
        "label": "a",
        "mode": "rubric",
        "answer": "A⊙0=0⊙A=0 because every Boolean-product entry is an OR of terms x∧0 or 0∧x, all equal to 0.",
        "solution": "An OR of zeros is zero, so every entry of each product vanishes.",
        "rubric": [
          "Checks both product orders using the Boolean-product definition."
        ]
      },
      {
        "label": "b",
        "mode": "rubric",
        "answer": "A∨0=0∨A=A since aᵢⱼ∨0=0∨aᵢⱼ=aᵢⱼ for every entry.",
        "solution": "Join with zero leaves every zero-one entry unchanged.",
        "rubric": [
          "Proves both entrywise equalities."
        ]
      },
      {
        "label": "c",
        "mode": "rubric",
        "answer": "A∧0=0∧A=0 since aᵢⱼ∧0=0∧aᵢⱼ=0 for every entry.",
        "solution": "Meet with zero makes every entry zero.",
        "rubric": [
          "Proves both entrywise equalities."
        ]
      }
    ]
  },
  {
    "id": "rosen-ch2-ex-computer-projects-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model program fixes an ordering u₁,…,uₙ of the universal set and represents each subset by n membership bits. If aᵢ and bᵢ are the bits for A and B, then the requested output bits are Ā: ¬aᵢ; A∪B: aᵢ OR bᵢ; A∩B: aᵢ AND bᵢ; A−B: aᵢ AND ¬bᵢ; A⊕B: aᵢ XOR bᵢ. For U={1,2,3,4}, A=1010 and B=1100, the outputs are 0101, 1110, 1000, 0010, and 0110 respectively.",
    "solution": "Read a bit string as a membership list, not as a binary integer: position i says whether uᵢ belongs to the subset. Process each position independently, with no carrying. The symmetric difference A⊕B contains elements in exactly one input set, which is why XOR is the correct operation. A direct per-index loop is sufficient. The example represents A={1,3} and B={1,2}, so A−B={3}=0010 and A⊕B={2,3}=0110. Validate that both strings have length n and contain only 0 and 1.",
    "hints": [
      "Write the universal elements above the bit positions before choosing an operation.",
      "For A−B, retain a 1 only in a position where A has 1 and B has 0.",
      "The overbar means complement within U, so Ā flips every bit of A."
    ],
    "rubric": [
      "Documents the universal-set ordering and accepts two length-n bit strings with input validation or explicit preconditions.",
      "Computes Ā by bitwise NOT and A∪B and A∩B by inclusive OR and AND.",
      "Computes A−B as A AND NOT B, without reversing the operands.",
      "Computes A⊕B by XOR and preserves all n positions in every output.",
      "Includes the worked example and tests all four possible input-bit pairs, including empty and universal sets."
    ],
    "readAloud": "Read A bar as “the complement of A,” A minus B as “the elements in A but not B,” and A circle-plus B as “the symmetric difference: in exactly one of A and B.”",
    "startHere": "For U={1,2,3,4}, write A=1010 above B=1100 and solve one column at a time on paper.",
    "verify": "Decode every output bit string back into a set and compare it with a direct set calculation. In the example, confirm Ā={2,4}, A∪B={1,2,3}, A∩B={1}, A−B={3}, and A⊕B={2,3}."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Represent a multiset by nonnegative multiplicities over the common universe, treating an omitted element as multiplicity 0. For each element x with multiplicities a(x),b(x), output max(a,b) for A∪B, min(a,b) for A∩B, max(a−b,0) for A−B, and a+b for A+B, omitting zero multiplicities. With P={4·a,1·b,3·c} and Q={3·a,4·b,2·d}, the results are P∪Q={4·a,4·b,3·c,2·d}, P∩Q={3·a,1·b}, P−Q={1·a,3·c}, and P+Q={7·a,5·b,3·c,2·d}.",
    "solution": "Read 4·a as “four copies of a.” A multiplicity map or dictionary is a convenient representation, but the union operation must iterate over the union of keys in both inputs, not only their intersection. Multiset sum adds multiplicities; it is not the same operation as union. Difference is truncated subtraction because negative multiplicities are impossible. A manual table with columns a, b, max, min, max(a−b,0), and a+b makes every rule reproducible without code.",
    "hints": [
      "Supply multiplicity 0 when an element occurs in only one input.",
      "Union takes the larger count; sum adds the counts.",
      "After subtracting for A−B, replace every negative result by 0."
    ],
    "rubric": [
      "Uses a representation that preserves multiplicities and handles elements absent from either input as zero.",
      "Implements union and intersection with elementwise maximum and minimum.",
      "Implements difference with max(a−b,0) and sum with a+b, keeping the operations distinct.",
      "Omits or otherwise clearly identifies zero-multiplicity entries and does not silently collapse the multisets to ordinary sets.",
      "Checks the supplied worked example plus empty-multiset, disjoint, identical, and unequal-multiplicity cases."
    ],
    "readAloud": "a(x) is “the number of copies of x in A.” Read max(a−b,0) as “a minus b if positive, and zero otherwise.”",
    "startHere": "Make the four rows a,b,c,d and fill P’s counts 4,1,3,0 and Q’s counts 3,4,0,2 before applying the four formulas.",
    "verify": "Expand a small result into actual copies and count them. For example, P−Q leaves one a and all three c’s, while P+Q contains 7+5+3+2=17 total copies."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model implementation stores a membership degree μ_A(x)∈[0,1] for every relevant universe element and computes μ_Ā(x)=1−μ_A(x), μ_(A∪B)(x)=max(μ_A(x),μ_B(x)), and μ_(A∩B)(x)=min(μ_A(x),μ_B(x)). For Rosen’s famous/rich sets F and R, F̄={0.4 Alice,0.1 Brian,0.6 Fred,0.9 Oscar,0.5 Rita}; F∪R={0.6 Alice,0.9 Brian,0.4 Fred,0.9 Oscar,0.7 Rita}; and F∩R={0.4 Alice,0.8 Brian,0.2 Fred,0.1 Oscar,0.5 Rita}.",
    "solution": "The notation μ_A(x) reads “the degree to which x belongs to A”; it is a degree of membership, not a probability. Process every element of the stated universe. If an input omits an element, its degree is 0, so the union and intersection must use the combined key set. Complement is 1 minus the degree, union is maximum, and intersection is minimum. Do not round degrees to Boolean values. Zero-degree entries may be omitted in the printed fuzzy-set notation, as in the textbook.",
    "hints": [
      "For each person, make a column for μ_A, μ_B, 1−μ_A, max, and min.",
      "Union chooses the larger degree, not the sum of the degrees.",
      "Include an element listed in only one input by assigning it degree 0 in the other."
    ],
    "rubric": [
      "Accepts membership degrees in the closed interval [0,1] and preserves fractional values.",
      "Computes complement as 1−μ_A(x) for every universe element.",
      "Computes union and intersection with elementwise maximum and minimum, using degree 0 for omitted elements.",
      "Produces all three requested fuzzy sets with clear element-degree associations and defined zero-degree formatting.",
      "Includes the F/R worked example and tests endpoints, equal degrees, disjoint listings, and out-of-range input handling."
    ],
    "readAloud": "Read μ sub A of x as “the membership degree of x in A.” One minus that degree is its membership degree in the fuzzy complement.",
    "startHere": "For Alice, F gives 0.6 and R gives 0.4. Calculate complement 0.4, union 0.6, and intersection 0.4, then repeat for Brian.",
    "verify": "Check each output numerically against the three defining formulas and ensure every degree remains in [0,1]. In particular, Oscar has F-degree 0.1 and R-degree 0.9, giving F̄-degree 0.9, union 0.9, and intersection 0.1."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Read n and the integer values f(1),…,f(n). The function is one-to-one exactly when all n output values are distinct. A reference loop keeps a set called seen; for i=1,…,n, it returns false with witness (i,j) if f(i) already occurred at domain position j, and otherwise inserts f(i). Thus f=[2,5,2,9] is not one-to-one because f(1)=f(3)=2, while f=[3,1,4,0] is one-to-one.",
    "solution": "“One-to-one” or injective means f(i)=f(j) implies i=j. Equivalently, two different domain elements may not share an output. The codomain is all integers, so do not allocate an array indexed by output value: outputs may be negative, huge, or sparse. A hash set gives expected linear time, while sorting value-index pairs or comparing all pairs are valid alternatives. Returning a repeated value and its two domain positions makes a negative result independently checkable.",
    "hints": [
      "Look for repeated outputs, not repeated inputs.",
      "A set of previously seen integers works even when outputs are negative.",
      "If you report “not one-to-one,” give a concrete collision f(i)=f(j) with i≠j."
    ],
    "rubric": [
      "Accepts n and all n integer function values and correctly interprets the input order as f(1),…,f(n).",
      "Tests pairwise distinctness of outputs without imposing a bounded or nonnegative codomain.",
      "Returns the correct Boolean decision and, ideally, a valid collision witness for a noninjective function.",
      "Handles n=1, repeated adjacent and nonadjacent values, negative values, and large integers.",
      "Includes the two worked examples and explains or demonstrates that no collision was missed."
    ],
    "startHere": "Write the values 2,5,2,9 in a row and scan from left to right, listing the outputs already seen before each new value.",
    "verify": "For a true result, sort a copy of the outputs and confirm no adjacent equal values. For a false result, substitute the reported indices into the original list and check that they differ while their outputs agree."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Read n and f(1),…,f(n), where every value must lie in {1,…,n}. Mark seen[f(i)]=true for each i. The function is onto exactly when all n seen flags are true; equivalently, its range has n distinct values. For n=4, f=[2,4,2,3] is not onto because 1 has no preimage, whereas f=[2,4,1,3] is onto.",
    "solution": "“Onto” or surjective means every codomain element y has at least one domain element x with f(x)=y. The algorithm checks coverage, not distinctness of inputs. Initialize n flags false, scan the outputs once, and then search for an unmarked value. Because domain and codomain have the same finite size n, an onto function here is also one-to-one, but the implementation should directly test the requested coverage condition. An out-of-range value violates the promised function input and should be rejected rather than ignored.",
    "hints": [
      "Make one checkbox for each possible output 1 through n.",
      "A repeated output means that some other codomain value must be missed when there are exactly n inputs.",
      "Report a missing value as a witness that the function is not onto."
    ],
    "rubric": [
      "Reads n ordered function values and validates or explicitly assumes that each lies in {1,…,n}.",
      "Marks every attained output and returns onto exactly when all n codomain values occur.",
      "Does not confuse surjectivity with merely having valid outputs or with a different injectivity test.",
      "Identifies a missing codomain value for false cases and handles n=1 correctly.",
      "Includes both worked examples and tests repeated values, permutations, and invalid out-of-range input."
    ],
    "startHere": "For n=4, draw boxes labelled 1,2,3,4. Tick boxes as you read 2,4,2,3 and identify the untouched box.",
    "verify": "List the actual range as a set. Compare it with {1,…,n}; equality proves onto, and any omitted element proves not onto. Check the supplied false example has range {2,3,4}."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Store the bijection in an array f with f[i]=f(i). Construct the inverse array g by the assignment g[f[i]]=i for every i=1,…,n; then g=f⁻¹. For f(1)=3, f(2)=1, f(3)=4, f(4)=2, the inverse is f⁻¹(1)=2, f⁻¹(2)=4, f⁻¹(3)=1, f⁻¹(4)=3, so the output array is [2,4,1,3].",
    "solution": "Read f⁻¹(y)=x as “the inverse sends y back to x,” exactly when y=f(x). Each input pair (i,f[i]) therefore becomes an output pair (f[i],i). Since f is a bijection, every inverse position is filled exactly once. The notation f⁻¹ does not mean reciprocal 1/f. After construction, verify both compositions: f[g[y]]=y for every y and g[f[x]]=x for every x.",
    "hints": [
      "Swap the input and output columns of the function table.",
      "Use f[i] as the destination index when filling the inverse array.",
      "The superscript −1 denotes reversal of the function, not arithmetic division."
    ],
    "rubric": [
      "Accepts an n-element permutation representation of the bijection and validates it or states the precondition.",
      "Constructs every inverse entry using g[f[i]]=i without reversing the array merely by position.",
      "Returns the complete inverse in a clearly documented order.",
      "Checks at least one composition f∘f⁻¹ or f⁻¹∘f and includes identity, reversal, and non-self-inverse permutation tests.",
      "Reproduces the worked example and does not interpret f⁻¹ as a reciprocal."
    ],
    "readAloud": "Read f inverse of y equals x as “f inverse undoes f: if f sends x to y, then f inverse sends y to x.”",
    "startHere": "Make two columns x and f(x), fill (1,3),(2,1),(3,4),(4,2), and then sort the pairs by their second entry.",
    "verify": "Check all four compositions in the example: g[3]=1, g[1]=2, g[4]=3, and g[2]=4, so g[f[i]]=i for every i; also confirm f[g[y]]=y."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-007",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For A of size m×k and B of size k×n, return the m×n matrix C=AB with C[i,j]=Σ_(t=1)^k A[i,t]B[t,j]. Use three loops over i,j,t, initializing each C[i,j] to 0 before accumulating products. Example: A=[[1,2,0],[-1,3,4]] and B=[[2,1],[0,3],[5,-1]] give AB=[[2,7],[18,4]].",
    "solution": "Read C[i,j] as “row i of A dotted with column j of B.” The shared dimension k must match: A has k columns and B has k rows. In the example, C[2,1]=(−1)(2)+(3)(0)+(4)(5)=18 and C[2,2]=(−1)(1)+(3)(3)+(4)(−1)=4. Reset the accumulator for every new entry. Matrix multiplication is not elementwise multiplication, and the output dimensions are the outer dimensions m and n.",
    "hints": [
      "Write A’s row horizontally and B’s column vertically, then multiply matching entries.",
      "The summation index t runs over the shared dimension k.",
      "Check dimensions before multiplying: (m×k)(k×n)=(m×n)."
    ],
    "rubric": [
      "Validates matrix shapes and the shared dimension k or states these as enforced preconditions.",
      "Computes each output entry as the full sum of k products with the correct row and column indices.",
      "Returns an m×n matrix and initializes a fresh accumulator for every entry.",
      "Does not substitute elementwise multiplication or silently assume square matrices.",
      "Includes the worked example plus rectangular, one-by-one, zero-matrix, and identity-matrix tests."
    ],
    "readAloud": "The sigma expression reads “sum from t equals 1 to k of A i t times B t j.” It combines one row of A with one column of B.",
    "startHere": "Calculate only C[1,1] first: 1·2+2·0+0·5=2. Then calculate the remaining three entries in separate accumulators.",
    "verify": "Recompute every example entry by hand: 2,7 on the first row and 18,4 on the second. Also test AI=A and IA=A for a compatible identity matrix to catch index reversals."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-008",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For a square matrix A and positive integer n, compute Aⁿ by repeated matrix multiplication, preferably exponentiation by squaring: start with result=I and base=A; while n>0, if n is odd set result=result·base, then set base=base·base and n=floor(n/2). For A=[[1,1],[1,0]], A⁶=[[13,8],[8,5]]. A¹=A is the simplest boundary test.",
    "solution": "The superscript n means n factors A·A···A, not raising each entry to the nth power. Matrix multiplication is associative, so grouping factors by squaring is valid even though multiplication of different matrices need not commute. The identity matrix I is the neutral starting value. Manually, A²=[[2,1],[1,1]], A³=[[3,2],[2,1]], and continuing gives A⁶=[[13,8],[8,5]]. The entries also reveal Fibonacci numbers, providing a useful independent check.",
    "hints": [
      "Start with A¹ and compute A²=A·A to check that you are using matrix multiplication.",
      "In exponentiation by squaring, multiply into result only for a 1 bit in the exponent.",
      "Use I, not a zero matrix, as the multiplicative identity."
    ],
    "rubric": [
      "Computes true matrix powers for arbitrary positive n and handles n=1 without alteration.",
      "Uses compatible square-matrix multiplication and correct identity initialization.",
      "Implements repeated multiplication correctly or a correct exponentiation-by-squaring loop with odd/even exponent handling.",
      "Does not exponentiate entries individually and addresses numeric overflow or exact-integer policy where relevant.",
      "Includes the Fibonacci-matrix example and tests n=1, an even and odd exponent, identity, and zero matrices."
    ],
    "readAloud": "A to the n means “the product of n copies of the matrix A.” It does not mean A with every entry raised to the n.",
    "startHere": "Use A=[[1,1],[1,0]] and hand-multiply A², then A³=A²·A, before trying the faster binary method.",
    "verify": "For the example, compare a direct chain through A⁶ with exponentiation by squaring using 6=2+4. Confirm A⁶I=A⁶ and check the recurrence of its Fibonacci entries."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-009",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A square matrix A is symmetric exactly when A[i,j]=A[j,i] for every i,j; equivalently A=Aᵀ. A reference implementation loops only over i<j and returns false at the first unequal mirrored pair, otherwise true. For example, [[1,2,3],[2,0,4],[3,4,5]] is symmetric. Every 1×1 matrix and every diagonal matrix is symmetric.",
    "solution": "The transpose Aᵀ swaps rows and columns. Comparing entries above the main diagonal with their reflections below it checks every required equality once; diagonal entries always equal themselves and need no comparison. First reject a nonsquare input or document squareness as a precondition. For exact integer or symbolic entries use exact equality. If floating-point approximations are admitted, state and justify a tolerance rather than silently treating near equality as exact symmetry.",
    "hints": [
      "Reflect the matrix across its main diagonal.",
      "Check the pair A[1,2] against A[2,1], not A[1,2] against A[1,2].",
      "Only off-diagonal pairs can disprove symmetry."
    ],
    "rubric": [
      "Checks square shape and tests every mirrored off-diagonal pair with correct indices.",
      "Returns true exactly for A=Aᵀ and can identify an offending pair for false cases.",
      "Handles 1×1, diagonal, zero, negative-entry, and larger nonsymmetric matrices.",
      "Defines an appropriate exact-equality or documented floating-point tolerance policy.",
      "Includes the worked example and verifies a false case by locating the unequal mirrored entries."
    ],
    "readAloud": "A equals A transpose means “entry i,j is the same as entry j,i for every row-column pair.”",
    "startHere": "Copy the example matrix and draw its main diagonal. Match 2 with 2, 3 with 3, and 4 with 4 across that diagonal.",
    "verify": "Construct the transpose explicitly for the example and compare all entries. Then change only the lower-left 3 to 7; the test must report nonsymmetric because A[3,1]≠A[1,3]."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-010",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For equal-size Boolean matrices A and B, the meet A∧B applies AND entrywise and the join A∨B applies inclusive OR entrywise. If A=[[1,0,1],[0,1,1]] and B=[[1,1,0],[0,1,0]], then A∧B=[[1,0,0],[0,1,0]] and A∨B=[[1,1,1],[0,1,1]]. Both outputs have the same m×n shape.",
    "solution": "Meet and join use corresponding positions, with no summation and no matrix multiplication. At each (i,j), meet is 1 exactly when both entries are 1; join is 1 when at least one entry is 1. Read “inclusive OR” as allowing both inputs to be 1, so 1 OR 1=1. A double loop over rows and columns is sufficient. Validate equal dimensions and Boolean entries.",
    "hints": [
      "Line up the two matrices and compare one position at a time.",
      "Meet needs two 1s; join needs at least one 1.",
      "Do not use the Boolean matrix product: there is no row-column dot operation here."
    ],
    "rubric": [
      "Validates equal m×n dimensions and Boolean entries or documents equivalent preconditions.",
      "Computes meet by entrywise AND and join by entrywise inclusive OR.",
      "Preserves shape and position order and treats 1∨1 as 1.",
      "Does not confuse these operations with Boolean product or arithmetic addition/multiplication.",
      "Includes the worked example and tests all four bit pairs, zero, identity-like, and rectangular matrices."
    ],
    "startHere": "For the top row 1,0,1 and 1,1,0, make two output rows: keep common 1s for meet and combine all 1 positions for join.",
    "verify": "Check the four local rules 0∧0=0, 1∧0=0, 1∧1=1 and 0∨0=0, 1∨0=1, 1∨1=1, then compare every entry of the worked outputs."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-011",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For an m×k Boolean matrix A and k×n Boolean matrix B, the Boolean product C=A⊙B has C[i,j]=∨_(t=1)^k(A[i,t]∧B[t,j]). Thus C[i,j]=1 exactly when some t has both A[i,t]=1 and B[t,j]=1. With A=[[1,0,1],[0,1,1]] and B=[[1,0],[0,1],[0,0]], the product is [[1,0],[0,1]].",
    "solution": "The index pattern is the same as ordinary matrix multiplication, but multiplication becomes AND and addition becomes OR. Read the formula as “there exists an intermediate index t connecting row i of A to column j of B.” Stop scanning t as soon as one such pair is found, because OR can then never return to 0. Do not count paths numerically: two or more witnesses still produce only 1. In the example C[1,2]=(1∧0)∨(0∧1)∨(1∧0)=0.",
    "hints": [
      "Replace the ordinary dot product’s sum by “is there at least one matching pair of 1s?”",
      "The result stays Boolean even if several t values witness the same entry.",
      "Use AND inside each t and OR across the different t values."
    ],
    "rubric": [
      "Validates Boolean entries and compatible m×k and k×n dimensions.",
      "Uses the correct row-column-index pattern and computes AND within each term and OR across t.",
      "Returns an m×n matrix containing only Boolean values, including correct zero entries.",
      "Does not use ordinary arithmetic sums that could produce entries greater than 1.",
      "Includes the worked example and tests no-witness, multiple-witness, rectangular, zero, and Boolean identity cases."
    ],
    "readAloud": "Read the large OR as “for some t from 1 through k.” Entry i,j is 1 if at least one t makes both corresponding entries 1.",
    "startHere": "Compute C[1,2] for the example and evaluate all three conjunctions separately: 0,0,0; their OR is 0.",
    "verify": "For each output 1, write down at least one witnessing t. For each output 0, check that every t fails. Also test a case with two witnesses to ensure the output remains 1."
  },
  {
    "id": "rosen-ch2-ex-computer-projects-012",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A^[n] denotes the nth Boolean power: A^[1]=A and A^[n]=A⊙A^[n−1], using Boolean matrix product. Compute it by repeated Boolean multiplication or by exponentiation by squaring with the Boolean identity matrix as initial result. For A=[[0,1],[1,1]], A^[2]=[[1,1],[1,1]] and therefore A^[3]=[[1,1],[1,1]]. The bracketed [n] distinguishes this notation from an entry or an ordinary arithmetic power.",
    "solution": "At every multiplication use (C[i,j])=∨_t(A[i,t]∧B[t,j]); entrywise exponentiation and ordinary matrix powers are not substitutes. Exponentiation by squaring remains valid because Boolean matrix multiplication is associative. For the example, A^[2][1,1]=(0∧0)∨(1∧1)=1, and the other entries also have witnesses. Once the matrix is all 1s, further Boolean multiplication leaves it all 1s. The requested exponent is positive; optionally document A^[0]=I only as an extension.",
    "hints": [
      "First write a correct Boolean-product routine and test it before forming powers.",
      "A^[1] is A itself; do not automatically start by squaring.",
      "Keep every intermediate entry Boolean: OR of conjunctions, never a numerical path count."
    ],
    "rubric": [
      "Computes repeated Boolean matrix products with A^[1]=A and handles arbitrary positive n.",
      "Uses associative Boolean multiplication correctly in either direct repetition or exponentiation by squaring.",
      "Initializes any general power routine with the Boolean identity and does not confuse Boolean with arithmetic powers.",
      "Includes the worked example and tests n=1, n=2, a larger exponent, identity, zero, and a matrix whose higher power becomes zero.",
      "Provides independent witness-based checks for representative entries of a computed power."
    ],
    "readAloud": "A bracket n means “the nth power of A under Boolean matrix multiplication,” not ordinary multiplication and not power entry by entry.",
    "startHere": "Hand-compute A^[2] for [[0,1],[1,1]]. For each entry, look for one intermediate index that supplies two 1s.",
    "verify": "Compute A^[3] both as A⊙A^[2] and A^[2]⊙A and confirm all entries are 1. Separately test B=[[0,1],[0,0]]: B^[2] must be the zero matrix."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For finite sets A and B, enumerate A×B={(a,b):a∈A and b∈B} with a nested loop: for each a in A, for each b in B, output the ordered pair (a,b). If A={1,2} and B={x,y,z}, the complete list is (1,x),(1,y),(1,z),(2,x),(2,y),(2,z). It has |A||B|=6 elements.",
    "solution": "Read A×B as “A cross B,” the set of all ordered pairs whose first coordinate comes from A and whose second comes from B. Ordered means (a,b) is generally different from (b,a), and A×B is generally different from B×A. A set has no duplicate elements, so each legal pair appears once. If either input is empty, the product is empty. The nested-loop order is only a presentation choice; lexicographic order makes checking easier but is not part of the definition.",
    "hints": [
      "Fix one first coordinate and pair it with every second coordinate before moving on.",
      "Count the output pairs as a completeness check: there should be |A|·|B|.",
      "Do not output unordered braces {a,b}; Cartesian-product elements are ordered pairs."
    ],
    "rubric": [
      "Accepts two finite sets and generates exactly the ordered pairs with first coordinate in A and second in B.",
      "Covers every combination once without duplicates or cross-coordinate mistakes.",
      "Correctly handles singleton and empty inputs and reports or formats the empty product clearly.",
      "Includes the six-pair worked example and checks output cardinality |A×B|=|A||B|.",
      "Explains or demonstrates why A×B and B×A can differ."
    ],
    "readAloud": "A cross B means “every ordered pair whose first item is from A and whose second item is from B.”",
    "startHere": "Write 1 and 2 as row headings and x,y,z as column headings; each cell is one ordered pair.",
    "verify": "For the example, check two rows of three pairs and count six. Confirm no pair has a second coordinate from A or a first coordinate from B."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "For an n-element set S={s₁,…,sₙ}, enumerate every n-bit mask from 0 through 2ⁿ−1 and include sᵢ exactly when bit i is 1. This lists P(S), the power set of S. For S={a,b,c}, the eight subsets are ∅,{a},{b},{c},{a,b},{a,c},{b,c},{a,b,c}, in any clear order.",
    "solution": "Read P(S) as “the set of all subsets of S.” Each element makes an independent yes/no membership choice, giving 2ⁿ subsets. The empty set and S itself must both appear. An alternative recursive method starts with {∅}; for each new element x, append a copy of every currently listed subset with x added. For n=0 the correct output is P(∅)={∅}, a collection containing one subset, not an empty output.",
    "hints": [
      "For each subset, every element has two choices: absent or present.",
      "Use binary 000 through 111 for a three-element set.",
      "Do not forget ∅ or the full set S."
    ],
    "rubric": [
      "Generates all 2ⁿ subsets exactly once, including ∅ and S.",
      "Uses a correct mask, recursion, or equivalent membership-choice construction without confusing subsets with elements.",
      "Handles n=0 and n=1 correctly and supports distinct set elements without duplicate outputs.",
      "Includes the worked three-element example and verifies the count and membership of each generated subset.",
      "Recognizes or documents the exponential output size rather than implying a polynomial-time listing algorithm."
    ],
    "readAloud": "The power set of S is “the collection whose elements are all the subsets of S.” The empty set is one of those subsets.",
    "startHere": "For {a,b,c}, write bit labels a,b,c above 000,001,010,011 and decode those four masks before doing the remaining four.",
    "verify": "Group the eight example subsets by size: 1 empty set, 3 singletons, 3 two-element subsets, and 1 full set. These counts 1,3,3,1 sum to 8=2³."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Let m=|S| and n=|T|. The number of one-to-one functions S→T is 0 if m>n, and n(n−1)···(n−m+1)=n!/(n−m)! if m≤n. Sample values are (m,n)=(2,3):6, (2,4):12, (3,3):6, and (4,2):0. When m=n, the count is n!; under the standard empty-function convention, m=0 gives 1.",
    "solution": "Order the m domain elements temporarily. The first has n possible images, the second has n−1 because images may not repeat, and so on until the mth has n−m+1 choices. Multiply these independent-stage counts. If m>n, the choices cannot be completed without a collision, consistent with the pigeonhole principle. For |S|=2 and T={a,b,c}, the six functions have ordered images (a,b),(a,c),(b,a),(b,c),(c,a),(c,b); order matters because domain elements are different.",
    "hints": [
      "Assign images one domain element at a time and remove each used image from later choices.",
      "The product has m factors, beginning at n and decreasing by 1.",
      "If the domain is larger than the codomain, an injection is impossible."
    ],
    "rubric": [
      "Computes correct counts for several finite m,n pairs and explains the decreasing-choice product.",
      "States the complete piecewise formula, including the zero case m>n and falling-factorial length m.",
      "Correctly handles m=n and, if discussed, the empty-domain convention.",
      "Includes the stated sample values or equivalent verified values and distinguishes injections from arbitrary functions n^m.",
      "Provides a small enumeration or another independent check that exposes ordering and repeated-image errors."
    ],
    "readAloud": "n factorial over n minus m factorial is a falling product: start at n and multiply exactly m decreasing whole numbers.",
    "startHere": "For a two-element S and three-element T, choose the first image in three ways and the second, different image in two ways, obtaining 3·2=6.",
    "verify": "Check small cases by listing ordered image tuples with distinct coordinates. Also compare n!/(n−m)! with the explicit product for (m,n)=(3,5): both give 5·4·3=60."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Let m=|S| and n=|T|. Inclusion–exclusion gives the number of onto functions as Σ_(j=0)^n (−1)^j C(n,j)(n−j)^m. The value is 0 when m<n. Sample values are (m,n)=(3,2):2³−2·1³=6; (4,2):2⁴−2=14; (3,3):3³−3·2³+3·1³=6; and (2,3):0. For m=n≥1 the count is n!.",
    "solution": "Start with all n^m functions. For each codomain element, subtract the (n−1)^m functions that miss it. Functions missing two specified elements were subtracted twice, so add back (n−2)^m for every pair; continue alternating signs. The binomial coefficient C(n,j) counts which j codomain elements are excluded. This explains both the formula and its verification. For m=n, every onto function between equal finite sets is also one-to-one, hence there are n!. For n=0, the convention gives one empty function when m=0 and none when m>0.",
    "hints": [
      "Begin with all n^m functions and remove those whose range misses at least one target.",
      "Alternate subtract, add, subtract as you exclude 1,2,3 specified codomain elements.",
      "Onto is impossible when there are fewer domain elements than codomain elements."
    ],
    "rubric": [
      "Computes correct surjection counts for varied sizes and gives the full inclusion–exclusion formula.",
      "Explains why missing-target function sets are subtracted and pairwise overlaps added back.",
      "Handles m<n and m=n correctly and does not confuse onto functions with injections or arbitrary functions.",
      "Includes the stated 6,14,6,0 checks or equivalent independently verified examples.",
      "Uses binomial coefficients, powers, and alternating signs accurately, with sensible empty-set conventions if those cases are covered."
    ],
    "readAloud": "The sum reads “alternate minus and plus: choose j target elements to forbid, then count functions using only the remaining n minus j targets.”",
    "startHere": "For m=3,n=2, list all 2³=8 image triples and remove the two constant triples; the other six use both targets.",
    "verify": "For m=3,n=2, the six onto image triples are the permutations of (a,a,b) and (a,b,b), three of each. For m=n=3, check that the formula simplifies to 6=3!."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Using F₀=0 and F₁=1, generate Fₖ=Fₖ₋₁+Fₖ₋₂ iteratively. The first 12 terms from F₀ are 0,1,1,2,3,5,8,13,21,34,55,89. Defensible conjectures prompted by the terms include: every third term F₀,F₃,F₆,… is even; Σ_(k=0)^n Fₖ=F_(n+2)−1; Cassini’s identity F_(k−1)F_(k+1)−Fₖ²=(−1)^k for k≥1; and F_(k+1)/Fₖ approaches φ=(1+√5)/2. These can then be proved or investigated rather than treated as established by the printout alone.",
    "solution": "Keep two consecutive values previous=0 and current=1. Output previous, then update (previous,current) to (current,previous+current) until n terms have been produced; preserve the old previous value during the update. For a manual sum check, 0+1+1+2+3+5=12=F₇−1=13−1. For Cassini at k=4, F₃F₅−F₄²=2·5−3²=1=(−1)⁴. Ratios 13/8=1.625, 21/13≈1.615, and 34/21≈1.619 suggest convergence to φ≈1.618. Divisibility observations should be stated with indices, not merely “every third displayed row,” so the indexing convention is unambiguous.",
    "hints": [
      "Record two consecutive terms and carry both forward after each update.",
      "Compare sums of initial terms with later Fibonacci terms minus 1.",
      "Mark F₀,F₃,F₆,F₉ to investigate divisibility by 2."
    ],
    "rubric": [
      "Generates exactly n Fibonacci terms under a stated indexing convention with correct recurrence and initial values.",
      "Includes the correct initial sequence and handles n=1 and n=2 without out-of-range updates.",
      "Formulates at least three precise, mathematically valid conjectures about size, divisibility, sums, ratios, or identities.",
      "Tests conjectures on concrete indices and distinguishes numerical evidence from a proof.",
      "Uses exact integer arithmetic or documents overflow/precision limits and verifies updates without losing the previous term."
    ],
    "readAloud": "F sub k equals F sub k minus 1 plus F sub k minus 2 means “each term is the sum of the two immediately preceding terms.”",
    "startHere": "Write 0 and 1, then repeatedly append the sum of the last two numbers. Stop and count the terms to confirm you have n.",
    "verify": "Recompute each term from its two predecessors and test the identities at several indices. For example, F₉=34 is even and Σ_(k=0)^6Fₖ=20=F₈−1=21−1."
  },
  {
    "id": "rosen-ch2-ex-computations-explorations-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A model interactive program defines several sequence generators, randomly chooses a generator and valid parameters, displays a fixed number of initial terms, computes the generator’s intended next term, parses the player’s response, and reports whether it equals that term. Suitable rules are arithmetic aₖ=a+(k−1)d; geometric aₖ=ar^(k−1); squares aₖ=k²+c; triangular aₖ=k(k+1)/2; and Fibonacci-type aₖ=aₖ₋₁+aₖ₋₂ from two seeds. For example, an arithmetic round with a=3,d=4 displays 3,7,11,15 and expects 19.",
    "solution": "Give every generator the same interface, such as initial_state(parameters), next(state)→(term,new_state). Select a rule and parameters with an injectable random-number generator, then generate both the displayed prefix and one privately retained expected term. Read a response as an integer or rational number according to the documented rule set, compare it exactly, and allow another round without confusing the old state with the new one. A finite prefix never determines a unique mathematical sequence, so the prompt should say “the next term under the hidden selected rule.” For a manual trace of 3,7,11,15, the common difference is 4 and the next term is 15+4=19. Tests can seed random selection for reproducibility and should include both correct and incorrect responses.",
    "hints": [
      "Separate sequence generation from input/output so every rule can be tested independently.",
      "Generate the hidden answer with the same stateful generator that produced the displayed terms.",
      "Use a fixed random seed in tests; otherwise a failing round may be impossible to reproduce."
    ],
    "rubric": [
      "Implements at least four mathematically different sequence rules with correct indexing, parameters, and state updates.",
      "Randomly selects both a rule and a valid generated instance, with documented parameter ranges and no invalid starts.",
      "Displays a prefix, prompts for and parses a response, and compares it with the intended next term from the same generator.",
      "Supports repeated interactive rounds without leaking the rule or expected answer prematurely and reports correctness clearly.",
      "Includes deterministic tests for every rule, correct and incorrect answers, malformed input, random-selection reproducibility, and the worked arithmetic example.",
      "Acknowledges that a finite prefix alone does not force a unique mathematical continuation."
    ],
    "readAloud": "a sub k equals a plus k minus 1 times d means “start at a and add the common difference d for each step after the first.”",
    "startHere": "Implement and paper-test one arithmetic generator first. For 3,7,11,15, track current term and difference separately, then calculate the private next term 19.",
    "verify": "Hand-check the first six outputs of every generator against its formula. In an integration test, force the arithmetic rule with a=3,d=4, verify the displayed prefix and expected 19, then check that entering 18 is rejected and 19 accepted."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-001",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "Naive unrestricted comprehension says that for every property φ there is a set {x:φ(x)}. Taking φ(x) to be x∉x produces Russell’s class R={x:x∉x}, whose definition gives R∈R↔R∉R, a contradiction.[1] Zermelo–Fraenkel set theory avoids this construction by replacing unrestricted comprehension with separation: from an already given set A one may form R_A={x∈A:x∉x}. The same reasoning then proves only R_A∉A, not a contradiction about a universal set of all sets.[1] ZF/ZFC supplies specific existence and construction axioms—such as extensionality, pairing, union, power set, infinity, separation, and replacement—rather than allowing every property to create a set from the entire universe; Zermelo’s 1908 axiomatization was an early systematic formulation of this controlled approach.[2] Thus ordinary set operations remain available while the universal collection and Russell set needed for the paradox are not admitted as sets. Bibliography: [1] Harry Deutsch, “Russell’s Paradox,” Stanford Encyclopedia of Philosophy (1995, with revisions), https://plato.stanford.edu/entries/russell-paradox/; [2] Ernst Zermelo, “Untersuchungen über die Grundlagen der Mengenlehre I,” Mathematische Annalen 65 (1908), 261–281, https://doi.org/10.1007/BF01449999.",
    "solution": "The key manual argument is a membership test. If R_A∈R_A, then by its defining condition R_A∉R_A. Conversely, if R_A∈A and R_A∉R_A, then it satisfies the condition for membership in R_A, so R_A∈R_A. Therefore R_A∉A; there is no contradiction because R_A need not belong to the initially supplied A. This shows why restricting comprehension to an existing set blocks the paradox rather than merely declaring Russell’s set illegal. The axiom of foundation also rules out ordinary self-membership cycles in ZF, but separation is the central answer: foundation alone should not obscure the change in set-formation principles. A fuller essay can compare class theories such as NBG, where the Russell collection may be a proper class rather than a set, and should cite Zermelo’s 1908 axiomatization and a modern presentation of ZF.",
    "hints": [
      "Write the fatal biconditional R∈R↔R∉R before discussing any axioms.",
      "Ask “a subset of which already existing set?” whenever separation is used.",
      "Do not claim that ZF proves R_A∈R_A or that it simply bans the property x∉x."
    ],
    "rubric": [
      "States unrestricted comprehension and derives Russell’s contradiction accurately in both membership directions.",
      "Explains ZF separation with correct syntax and shows why R_A produces only R_A∉A rather than a paradox.",
      "Describes how several named ZF axioms permit controlled set construction without unrestricted comprehension or a universal set.",
      "Distinguishes separation from foundation and avoids claiming that the axioms have been proved consistent within ZF itself.",
      "Uses credible outside sources on Zermelo–Fraenkel set theory and, if class theories are discussed, distinguishes sets from proper classes accurately."
    ],
    "readAloud": "R sub A equals the set of x in A such that x is not a member of x. The words “in A” are the restriction that blocks unrestricted comprehension.",
    "startHere": "First derive Russell’s paradox using one unrestricted set R. Then repeat the same two cases with R_A and identify the extra assumption R_A∈A.",
    "verify": "Check both directions of the restricted argument and confirm that its conclusion R_A∉A is compatible with all defining conditions. Cross-check the names and purposes of the axioms against a standard ZF reference rather than attributing every construction to separation."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-002",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The function concept developed gradually rather than appearing in one modern definition. Ancient mathematical tables and Galileo’s study of varying quantities expressed dependencies, while Descartes’s analytic geometry related coordinates of curves, but these were not yet the general set-theoretic concept.[1] Leibniz introduced the mathematical term “function” in 1673 for geometric quantities associated with a curve, such as tangents and subtangents determined by a point. In correspondence and work around 1694–1718, Leibniz and Johann Bernoulli moved toward a quantity formed from a variable and constants; Bernoulli’s 1718 definition used this analytic-expression idea.[1] Euler used f(x) notation and made functions central to analysis in his 1748 Introductio in analysin infinitorum.[1][2] Dirichlet’s nineteenth-century dependence-based definition allowed arbitrary correspondences rather than requiring a formula, and Dedekind’s 1888 mapping definition led naturally to the modern idea: every element of a domain receives exactly one value.[1][3] Bibliography: [1] J. J. O’Connor and E. F. Robertson, “Function Concept,” MacTutor History of Mathematics (last updated October 2005), https://mathshistory.st-andrews.ac.uk/HistTopics/Functions/; [2] Leonhard Euler, Introductio in analysin infinitorum (1748); [3] Richard Dedekind, Was sind und was sollen die Zahlen? (1888).",
    "solution": "A strong response separates the first use of the word from earlier examples of dependence and from the later modern definition. Leibniz’s original usage was geometric and narrower than today’s f:A→B. Bernoulli and Euler still tied functions largely to analytic expressions; that would be too narrow for a function specified by an arbitrary lookup table. Dirichlet and Dedekind mark important broadening steps. The modern ordered-pair definition packages the same idea as a relation containing exactly one pair (x,y) for each x in the domain. Useful sources are the MacTutor history “function concept,” Euler’s Introductio, and scholarly histories that quote the original definitions; dates and attribution should be checked against those sources.",
    "hints": [
      "Use separate milestones for implicit dependence, the word function, analytic formulas, and arbitrary correspondence.",
      "Describe what Leibniz’s geometric functions actually measured instead of saying he used the modern definition.",
      "Explain why “a formula” is narrower than the modern function concept."
    ],
    "rubric": [
      "Presents an accurate chronological account without claiming a single inventor created the modern concept at one moment.",
      "Identifies Leibniz’s 1673 terminology and its geometric use with a concrete quantity such as tangent or subtangent.",
      "Explains Bernoulli’s and Euler’s analytic-expression stage, Euler’s notation, and the later broadening associated with Dirichlet and Dedekind.",
      "Connects the historical development to the modern unique-output rule and distinguishes it from earlier implicit dependencies.",
      "Uses credible historical outside sources with precise citations and verifies dates, quotations, and names."
    ],
    "readAloud": "f from A to B means “a rule assigning exactly one output in B to each input in A,” whether or not that rule has an algebraic formula.",
    "startHere": "Make four timeline rows: dependence before the term, Leibniz 1673, Bernoulli/Euler analytic expressions, and Dirichlet/Dedekind arbitrary mappings.",
    "verify": "For each milestone, ask whether the source describes the word, a definition, or merely an example of dependence. Check that no analytic-formula definition is mistakenly presented as today’s completely general definition."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-003",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The Encyclopedia of Integer Sequences, now the OEIS, is useful as an identification database: entering initial terms can reveal a sequence’s name, formula, recurrence, references, and related entries. It connects the same sequence arising in different fields, helps researchers avoid rediscovering known results, supplies data for testing conjectures and programs, and provides documented examples and open problems for teaching and research.[1] Unusual entries include Recamán’s sequence A005132, Van Eck’s sequence A181391, and look-and-say A005150. Recamán starts a₀=0 and sets aₙ=aₙ₋₁−n if that value is nonnegative and unused, otherwise aₙ=aₙ₋₁+n, beginning 0,1,3,6,2,7,13,20,12,21.[2] Van Eck begins 0,0,1,0,2,0,2,2,1,6: after a first occurrence write 0, otherwise write how many steps back the previous term last occurred.[3] Look-and-say describes runs in the preceding term, giving 1,11,21,1211,111221,….[4] Bibliography: [1] N. J. A. Sloane, “‘A Handbook of Integer Sequences’ Fifty Years Later,” The Mathematical Intelligencer (2023), https://doi.org/10.1007/s00283-023-10266-6; [2] OEIS Foundation, “A005132: Recamán’s sequence,” The On-Line Encyclopedia of Integer Sequences (continually updated), https://oeis.org/A005132; [3] OEIS Foundation, “A181391: Van Eck’s sequence,” The On-Line Encyclopedia of Integer Sequences (continually updated), https://oeis.org/A181391; [4] OEIS Foundation, “A005150: Look-and-say sequence,” The On-Line Encyclopedia of Integer Sequences (continually updated), https://oeis.org/A005150.",
    "solution": "The most instructive examples combine a simple rule with behavior that is difficult to predict. Recamán’s rule always prefers subtraction but adds when subtraction is illegal; its long-term coverage of the integers has been a famous question, so an essay should distinguish computed evidence from proof. Van Eck’s rule depends on memory of earlier positions, not on the size of the previous term. For look-and-say, 21 is read “one 2, one 1,” producing 1211. OEIS entries add bibliographic and cross-reference value beyond merely guessing the next term; matching a short prefix is evidence for identification, not proof that two infinite sequences agree. Sloane’s “A Handbook of Integer Sequences Fifty Years Later” and the individual OEIS entries A005132, A181391, and A005150 are appropriate outside sources.",
    "hints": [
      "Explain what an OEIS entry contributes beyond its initial terms: formulas, references, comments, and links.",
      "Generate each unusual sequence one step at a time before describing it.",
      "A matching finite prefix does not prove that two complete sequences are identical."
    ],
    "rubric": [
      "Explains at least four distinct research, educational, or computational uses of the encyclopedia with concrete examples.",
      "Accurately defines and gives correct initial terms for at least three unusual sequences, including their origins or generating rules.",
      "Correctly handles Recamán’s subtract-if-legal rule, Van Eck’s previous-occurrence distance, and run-length description if these examples are used.",
      "Distinguishes database identification and numerical evidence from proof and accurately labels any open questions.",
      "Cites Sloane’s historical account and the relevant OEIS entries or comparable authoritative outside sources."
    ],
    "readAloud": "Recamán’s rule reads “subtract n if the result is nonnegative and has not appeared; otherwise add n.” Van Eck asks “when did I last see this value?”",
    "startHere": "Generate Recamán through a₅ by hand: 0→1→3→6→2→7, recording at each step why subtraction was allowed or rejected.",
    "verify": "Regenerate every displayed term independently and check sequence IDs against the cited entries. For Van Eck, verify that after 0,0,1,0 the next term is 2 because the previous 0 occurred two positions earlier."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-004",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The EKG (or ECG) sequence A064413 is defined by a(1)=1, a(2)=2, and, for n≥3, a(n) is the smallest positive integer not already used for which gcd(a(n−1),a(n))>1. It begins 1,2,4,6,3,9,12,8,10,5,15,18,14,7,21,24,16,20,22,11,33,27, and its connected graph resembles an electrocardiogram.[1] Lagarias, Rains, and Sloane proved that it is a permutation of the positive integers, that primes occur in increasing order, and that its growth has positive linear upper and lower bounds.[1] Hofman and Pilipczuk (2008) subsequently proved that each odd prime p occurs in the consecutive pattern 2p,p,3p and established the leading three-curve asymptotics: away from the exceptional prime and 3p terms, a(n)∼n; if a(n)=p is prime, then a(n)∼n/2; and for an odd prime p, the following term a(n+1)=3p satisfies a(n+1)∼3n/2.[2] Only the finer correction a(n)=n(1+1/(3 log n))+o(n/log n) remains conjectural; the detailed cycle structure of the inverse permutation also remains unresolved.[1][2] Bibliography: [1] J. C. Lagarias, E. M. Rains, and N. J. A. Sloane, “The EKG Sequence,” Experimental Mathematics 11(3) (2002), 437–446, https://doi.org/10.1080/10586458.2002.10504486; [2] Piotr Hofman and Marcin Pilipczuk, “A Few New Facts about the EKG Sequence,” Journal of Integer Sequences 11 (2008), Article 08.4.2, https://cs.uwaterloo.ca/journals/JIS/VOL11/Hofman/hofman1.html.",
    "solution": "Read gcd(x,y)>1 as “x and y share a prime factor.” After 1,2, the smallest unused candidate sharing a factor with 2 is 4. After 4 comes 6; after 6, the smallest unused candidate sharing a factor is 3. These steps show why the sequence alternates between locally smooth growth and sharp drops. Known permutation status means every positive integer occurs exactly once, not merely that terms are distinct. Hofman–Pilipczuk established the leading asymptotics for the ordinary, prime, and 3-times-prime curves, so those leading slopes are proved rather than open. What remains conjectural is the finer central correction a(n)=n(1+1/(3 log n))+o(n/log n); do not replace this precise conjecture with a claim that the sequence has a known simple closed form. Appropriate sources are Lagarias–Rains–Sloane, “The EKG Sequence,” Experimental Mathematics 11 (2002), and Hofman–Pilipczuk, “A Few New Facts about the EKG Sequence,” Journal of Integer Sequences 11 (2008).",
    "hints": [
      "Maintain a used-number list and test candidates 2,3,4,… for both unused status and gcd>1.",
      "Separate the proved leading three-curve asymptotics from the conjectured finer 1/(3 log n) correction.",
      "The word “permutation” here means every positive integer eventually appears exactly once."
    ],
    "rubric": [
      "States both initial terms and the full least-unused, common-factor recurrence accurately.",
      "Provides a correct initial segment and works through at least two nontrivial next-term choices using gcd.",
      "Explains the EKG name and accurately describes proved properties, including permutation status, prime order, linear growth bounds, and the 2p,p,3p pattern for odd primes.",
      "Attributes the proved leading three-curve asymptotics to Hofman–Pilipczuk (2008), while distinguishing the conjectured finer correction and unresolved inverse-cycle questions.",
      "Cites both the Lagarias–Rains–Sloane paper and the 2008 Hofman–Pilipczuk paper with locatable bibliographic details."
    ],
    "readAloud": "g c d of a n minus 1 and a n greater than 1 means “consecutive terms must have a common factor larger than one.”",
    "startHere": "Start with used={1,2}. To find a(3), test 3 (gcd(2,3)=1, reject) and then 4 (gcd(2,4)=2, accept).",
    "verify": "Check every adjacent pair in the displayed segment has gcd>1 and every term is minimal among unused candidates. Verify the proved leading asymptotics against Hofman–Pilipczuk (2008), and verify that only the finer 1/(3 log n) correction—not the leading three-curve behavior—is labeled conjectural."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-005",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "A transcendental number is a real or complex number that is not algebraic: it is not a root of any nonzero polynomial with integer (equivalently rational) coefficients.[2] Cantor proved their existence by showing that algebraic numbers are countable while real numbers are uncountable, so transcendentals exist in great abundance.[1] Liouville gave explicit constructions such as L=Σ_(k=1)^∞10^(−k!)=0.110001000000000000000001…, whose ones occur in decimal positions 1!,2!,3!,…; its extraordinarily close rational approximations imply transcendence.[2] Famous proved examples include e (Hermite, 1873), π (Lindemann, 1882), ln2, 2^√2 by Gelfond–Schneider, and the Champernowne constant.[2][3] Transcendence remains unknown for the Euler–Mascheroni constant γ, Catalan’s constant, ζ(3), and individually for e+π and eπ; ζ(3) is known irrational, but that is weaker than transcendence.[3] Bibliography: [1] Robert Gray, “Georg Cantor and Transcendental Numbers,” The American Mathematical Monthly 101(9) (1994), 819–832, https://doi.org/10.2307/2975129; [2] Michel Waldschmidt, “Transcendental Number Theory: the State of the Art,” KIAS lecture notes, Seoul (February 2004), https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/KIAS-02-2004.pdf; [3] Eric W. Weisstein, “Transcendental Number,” MathWorld—A Wolfram Resource (continually updated), https://mathworld.wolfram.com/TranscendentalNumber.html.",
    "solution": "To understand the construction method, compare rational and algebraic numbers with roots of polynomials: √2 is irrational but algebraic because x²−2=0, whereas a transcendental satisfies no such nonzero integer polynomial. Liouville’s approach constructs a number with approximations |L−p/q| too small relative to powers of q for it to be algebraic of any degree; truncations of Σ10^(−k!) supply those approximations. Cantor’s cardinality proof is nonconstructive in the sense that it proves a vast set exists without naming each member, while Liouville names one explicitly. Hermite’s and Lindemann’s theorems supply famous examples, and Lindemann–Weierstrass yields e^α for nonzero algebraic α and logarithms such as ln2. Unknown status must not be inferred from complicated decimals: γ is not even known irrational, and ζ(3)’s Apéry irrationality result does not settle transcendence. Cite a standard transcendence text or authoritative number-theory reference for the theorems and current open examples.",
    "hints": [
      "Contrast √2, which is irrational but algebraic, with a transcendental number.",
      "Separate Cantor’s existence proof from Liouville’s explicit decimal construction.",
      "Irrational does not automatically mean transcendental, and a number can be known irrational while its transcendence remains open."
    ],
    "rubric": [
      "Defines algebraic and transcendental numbers correctly using nonzero integer or rational polynomial equations.",
      "Explains Cantor’s countable-versus-uncountable existence argument and Liouville’s explicit construction and approximation idea.",
      "Gives several correctly attributed famous transcendental examples and at least one theorem supporting them.",
      "Lists genuine open examples accurately and distinguishes irrationality from transcendence, especially for ζ(3) and γ.",
      "Includes the √2 contrast, avoids unsupported claims based on decimal appearance, and uses credible outside mathematical sources."
    ],
    "readAloud": "The Liouville sum reads “add ten to the power minus k factorial for k equals 1,2,3, and so on.” The factorial exponents place ones increasingly far apart.",
    "startHere": "Classify 1/2, √2, and π by asking whether each satisfies a nonzero integer polynomial; then write the positions 1,2,6,24 of the early ones in Liouville’s decimal.",
    "verify": "Confirm that every claimed algebraic example has an explicit polynomial and every claimed transcendental example has a named theorem or construction. Recheck open-status examples against a reliable current reference and do not upgrade irrationality results to transcendence."
  },
  {
    "id": "rosen-ch2-ex-writing-projects-006",
    "mode": "rubric",
    "checker": "rubric",
    "answer": "The continuum hypothesis (CH) concerns sizes of infinite sets. Cantor showed |ℕ|=ℵ₀<|ℝ|; also |ℝ|=|P(ℕ)|=2^ℵ₀=𝔠. CH says there is no set A with ℵ₀<|A|<𝔠. Since ℵ₁ is the next cardinal after ℵ₀, this is equivalent to 2^ℵ₀=ℵ₁.[4] Cantor formulated the hypothesis in the 1870s, and Hilbert made it the first problem on his 1900 list.[4] Gödel announced in 1938 that his constructible-universe work showed CH cannot be disproved in ZFC if ZF is consistent,[1] and he gave the book-length treatment in 1940.[2] Cohen’s forcing work in 1963 showed that CH cannot be proved in ZFC under the same consistency assumption.[3] Therefore CH is independent of ZFC, not a theorem that ZFC settles as true or false. Bibliography: [1] Kurt Gödel, “The Consistency of the Axiom of Choice and of the Generalized Continuum-Hypothesis,” Proceedings of the National Academy of Sciences 24(12) (1938), 556–557, https://doi.org/10.1073/pnas.24.12.556; [2] Kurt Gödel, The Consistency of the Axiom of Choice and of the Generalized Continuum-Hypothesis with the Axioms of Set Theory, Annals of Mathematics Studies 3, Princeton University Press (1940), https://doi.org/10.1515/9781400881635; [3] Paul J. Cohen, “The Independence of the Continuum Hypothesis,” Proceedings of the National Academy of Sciences 50(6) (1963), 1143–1148, https://doi.org/10.1073/pnas.50.6.1143; [4] Peter Koellner, “The Continuum Hypothesis,” Stanford Encyclopedia of Philosophy (2019), https://plato.stanford.edu/entries/continuum-hypothesis/.",
    "solution": "The cardinality chain explains the statement: ℵ₀ is countable infinity, 𝔠 is the size of the continuum, and ℵ₁ means the least uncountable cardinal, not automatically |ℝ| before CH is assumed. Cantor’s theorem gives |S|<|P(S)|, which establishes ℵ₀<2^ℵ₀. Gödel announced his relative-consistency result in 1938 and published its book-length development in 1940; it uses the inner model L, where CH holds. Cohen introduced forcing to build models where CH fails, including models with 𝔠 larger than ℵ₁. Together these show independence while assuming the base theory is consistent. The generalized continuum hypothesis asserts 2^κ=κ⁺ for every infinite cardinal κ and is stronger than CH. Independence does not make the question meaningless: set theorists study additional axioms and models, but an essay should distinguish that ongoing foundational research from an ordinary unresolved proof within ZFC. Cite Gödel’s 1938 announcement and 1940 monograph, Cohen’s 1963 paper, and a standard set-theory reference for the technical claims.",
    "hints": [
      "Define ℵ₀, ℵ₁, and 𝔠 separately before writing CH.",
      "Do not assume 2^ℵ₀=ℵ₁ when defining ℵ₁; that equality is exactly CH.",
      "State independence as two relative-consistency results: neither CH nor its negation is provable in ZFC, assuming consistency."
    ],
    "rubric": [
      "Defines cardinality, ℵ₀, ℵ₁, 𝔠, and the equality |ℝ|=|P(ℕ)|=2^ℵ₀ accurately.",
      "States CH both as no intermediate cardinality and as 2^ℵ₀=ℵ₁ without circular definitions.",
      "Gives an accurate Cantor/Hilbert history and explains Gödel’s 1938 announcement, his 1940 book-length treatment, and Cohen’s 1963 complementary relative-consistency result.",
      "Explains independence from ZFC with the consistency qualification and does not call CH simply true, false, or disproved.",
      "Expands the discussion with Cantor’s theorem, GCH, models or additional axioms, and credible outside sources without exaggerating consequences for ordinary mathematics."
    ],
    "readAloud": "Two to the aleph-null equals aleph-one means “the number of subsets of the natural numbers, and hence the size of the reals, is the very next infinite cardinal after countable infinity.”",
    "startHere": "Write three labels in order: ℵ₀ for ℕ, ℵ₁ for the next cardinal, and 𝔠=2^ℵ₀ for ℝ. Then state CH as 𝔠=ℵ₁.",
    "verify": "Check that Gödel’s 1938 announcement and 1940 book rule out a ZFC disproof and Cohen’s 1963 work rules out a ZFC proof, all conditionally on consistency. Ensure the essay never derives CH from Cantor’s theorem, which proves only that power-set cardinality is strictly larger."
  }
];
