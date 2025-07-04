// TODO: Validate questions with psychometrician for reliability and cultural bias.
export const questions = [
  // Numerical (Easy)
  {
    id: 1,
    text: "What comes next: 2, 4, 8, 16, ?",
    options: ["24", "32", "48", "64"],
    correct: "32",
    type: "numerical",
    points: 1,
  },
  {
    id: 2,
    text: "5 workers, 5 walls, 5 days. 1 worker, 1 wall?",
    options: ["1 day", "5 days", "10 days", "25 days"],
    correct: "5 days",
    type: "numerical",
    points: 1,
  },
  {
    id: 3,
    text: "Next: 100, 90, 80, 70, ?",
    options: ["60", "50", "40", "30"],
    correct: "60",
    type: "numerical",
    points: 1,
  },
  {
    id: 4,
    text: "Add: 7 + 8 = ?",
    options: ["13", "14", "15", "16"],
    correct: "15",
    type: "numerical",
    points: 1,
  },
  {
    id: 51,
    text: "What comes next: 3, 6, 9, 12, ?",
    options: ["15", "18", "21", "24"],
    correct: "15",
    type: "numerical",
    points: 1,
  },
  {
    id: 52,
    text: "Subtract: 20 - 9 = ?",
    options: ["10", "11", "12", "13"],
    correct: "11",
    type: "numerical",
    points: 1,
  },
  {
    id: 53,
    text: "Next: 1, 2, 3, 4, ?",
    options: ["5", "6", "7", "8"],
    correct: "5",
    type: "numerical",
    points: 1,
  },
  {
    id: 54,
    text: "Multiply: 4 × 3 = ?",
    options: ["10", "12", "14", "16"],
    correct: "12",
    type: "numerical",
    points: 1,
  },
  {
    id: 55,
    text: "Next: 10, 20, 30, 40, ?",
    options: ["50", "60", "70", "80"],
    correct: "50",
    type: "numerical",
    points: 1,
  },
  {
    id: 56,
    text: "Divide: 15 ÷ 3 = ?",
    options: ["3", "4", "5", "6"],
    correct: "5",
    type: "numerical",
    points: 1,
  },

  // Numerical (Medium)
  {
    id: 5,
    text: "Next: 1, 3, 6, 10, ?",
    options: ["12", "14", "15", "16"],
    correct: "15",
    type: "numerical",
    points: 2,
  },
  {
    id: 6,
    text: "If 2x + 3 = 7, x = ?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    type: "numerical",
    points: 2,
  },
  {
    id: 7,
    text: "Next: 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    correct: "25",
    type: "numerical",
    points: 2,
  },
  {
    id: 8,
    text: "If 4x - 5 = 11, x = ?",
    options: ["2", "3", "4", "5"],
    correct: "4",
    type: "numerical",
    points: 2,
  },
  {
    id: 41,
    text: "Next: 5, 10, 20, 40, ?",
    options: ["60", "80", "100", "120"],
    correct: "80",
    type: "numerical",
    points: 2,
  },
  {
    id: 46,
    text: "If 3x + 4 = 16, x = ?",
    options: ["3", "4", "5", "6"],
    correct: "4",
    type: "numerical",
    points: 2,
  },
  {
    id: 57,
    text: "Next: 2, 5, 11, 23, ?",
    options: ["35", "41", "47", "53"],
    correct: "47",
    type: "numerical",
    points: 2,
  },
  {
    id: 58,
    text: "If x/2 + 5 = 10, x = ?",
    options: ["8", "10", "12", "14"],
    correct: "10",
    type: "numerical",
    points: 2,
  },
  {
    id: 59,
    text: "Next: 3, 9, 27, 81, ?",
    options: ["162", "243", "324", "405"],
    correct: "243",
    type: "numerical",
    points: 2,
  },
  {
    id: 60,
    text: "If 5x - 10 = 15, x = ?",
    options: ["3", "4", "5", "6"],
    correct: "5",
    type: "numerical",
    points: 2,
  },

  // Numerical (Hard)
  {
    id: 9,
    text: "3 workers complete 6 tasks in 12 days. How many days for 2 workers to complete 4 tasks?",
    options: ["6", "8", "10", "12"],
    correct: "8",
    type: "numerical",
    points: 3,
  },
  {
    id: 10,
    text: "Pattern: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    correct: "30",
    type: "numerical",
    points: 3,
  },
  {
    id: 11,
    text: "10 books, 2 shelves, 5 days. 5 books, 1 shelf?",
    options: ["2 days", "2.5 days", "3 days", "4 days"],
    correct: "2.5 days",
    type: "numerical",
    points: 3,
  },
  {
    id: 61,
    text: "Pattern: 1, 2, 6, 24, ?",
    options: ["48", "72", "96", "120"],
    correct: "120",
    type: "numerical",
    points: 3,
  },
  {
    id: 62,
    text: "4 machines produce 8 parts in 16 hours. How many hours for 3 machines to produce 6 parts?",
    options: ["12", "14", "16", "18"],
    correct: "12",
    type: "numerical",
    points: 3,
  },
  {
    id: 63,
    text: "Solve: 2x² - 8 = 0, x = ?",
    options: ["2", "4", "6", "8"],
    correct: "2",
    type: "numerical",
    points: 3,
  },
  {
    id: 64,
    text: "Pattern: 3, 7, 15, 31, ?",
    options: ["47", "55", "63", "71"],
    correct: "63",
    type: "numerical",
    points: 3,
  },
  {
    id: 65,
    text: "If 2^x = 16, x = ?",
    options: ["2", "3", "4", "5"],
    correct: "4",
    type: "numerical",
    points: 3,
  },
  {
    id: 66,
    text: "6 workers build 12 houses in 24 days. How many days for 4 workers to build 8 houses?",
    options: ["16", "18", "20", "24"],
    correct: "16",
    type: "numerical",
    points: 3,
  },
  {
    id: 67,
    text: "Pattern: 5, 12, 26, 54, ?",
    options: ["96", "108", "110", "112"],
    correct: "110",
    type: "numerical",
    points: 3,
  },

  // Verbal (Easy)
  {
    id: 12,
    text: "Odd one out: Dog, Cat, Horse, Car",
    options: ["Dog", "Cat", "Horse", "Car"],
    correct: "Car",
    type: "verbal",
    points: 1,
  },
  {
    id: 13,
    text: "Synonym of Big?",
    options: ["Small", "Large", "Tiny", "Short"],
    correct: "Large",
    type: "verbal",
    points: 1,
  },
  {
    id: 14,
    text: "Antonym of Fast?",
    options: ["Quick", "Slow", "Rapid", "Swift"],
    correct: "Slow",
    type: "verbal",
    points: 1,
  },
  {
    id: 15,
    text: "Odd one out: Apple, Banana, Carrot, Orange",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    correct: "Carrot",
    type: "verbal",
    points: 1,
  },
  {
    id: 42,
    text: "Synonym of Happy?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correct: "Joyful",
    type: "verbal",
    points: 1,
  },
  {
    id: 47,
    text: "Odd one out: Chair, Table, Sofa, Lamp",
    options: ["Chair", "Table", "Sofa", "Lamp"],
    correct: "Lamp",
    type: "verbal",
    points: 1,
  },
  {
    id: 68,
    text: "Antonym of Big?",
    options: ["Large", "Small", "Tall", "Wide"],
    correct: "Small",
    type: "verbal",
    points: 1,
  },
  {
    id: 69,
    text: "Synonym of Quick?",
    options: ["Slow", "Fast", "Heavy", "Light"],
    correct: "Fast",
    type: "verbal",
    points: 1,
  },
  {
    id: 70,
    text: "Odd one out: Book, Pen, Paper, Table",
    options: ["Book", "Pen", "Paper", "Table"],
    correct: "Table",
    type: "verbal",
    points: 1,
  },
  {
    id: 71,
    text: "Antonym of Up?",
    options: ["Down", "High", "Top", "Over"],
    correct: "Down",
    type: "verbal",
    points: 1,
  },

  // Verbal (Medium)
  {
    id: 16,
    text: "Complete: Sun is to Day as Moon is to ?",
    options: ["Night", "Sky", "Star", "Cloud"],
    correct: "Night",
    type: "verbal",
    points: 2,
  },
  {
    id: 17,
    text: "Complete: Pen is to Write as Knife is to ?",
    options: ["Cut", "Cook", "Eat", "Slice"],
    correct: "Cut",
    type: "verbal",
    points: 2,
  },
  {
    id: 18,
    text: "Complete: Car is to Road as Plane is to ?",
    options: ["Sky", "Runway", "Airport", "Cloud"],
    correct: "Sky",
    type: "verbal",
    points: 2,
  },
  {
    id: 72,
    text: "Complete: Bird is to Fly as Fish is to ?",
    options: ["Swim", "Walk", "Jump", "Crawl"],
    correct: "Swim",
    type: "verbal",
    points: 2,
  },
  {
    id: 73,
    text: "Complete: Teacher is to Teach as Doctor is to ?",
    options: ["Heal", "Learn", "Study", "Care"],
    correct: "Heal",
    type: "verbal",
    points: 2,
  },
  {
    id: 74,
    text: "Complete: Foot is to Walk as Hand is to ?",
    options: ["Touch", "Run", "Kick", "Jump"],
    correct: "Touch",
    type: "verbal",
    points: 2,
  },
  {
    id: 75,
    text: "Complete: Clock is to Time as Thermometer is to ?",
    options: ["Temperature", "Weather", "Heat", "Cold"],
    correct: "Temperature",
    type: "verbal",
    points: 2,
  },
  {
    id: 76,
    text: "Complete: Book is to Read as Food is to ?",
    options: ["Eat", "Cook", "Taste", "Smell"],
    correct: "Eat",
    type: "verbal",
    points: 2,
  },
  {
    id: 77,
    text: "Complete: Eye is to See as Ear is to ?",
    options: ["Hear", "Speak", "Touch", "Smell"],
    correct: "Hear",
    type: "verbal",
    points: 2,
  },
  {
    id: 78,
    text: "Complete: Tree is to Forest as Drop is to ?",
    options: ["Ocean", "River", "Lake", "Pond"],
    correct: "Ocean",
    type: "verbal",
    points: 2,
  },

  // Verbal (Hard)
  {
    id: 19,
    text: "If APPLE is coded as CRRNG, ORANGE is?",
    options: ["QTGPI", "PSHUF", "QTFMJ", "RUGPK"],
    correct: "QTFMJ",
    type: "verbal",
    points: 3,
  },
  {
    id: 20,
    text: "If CAT is 3-1-20, DOG is?",
    options: ["4-15-7", "4-14-7", "5-15-7", "5-14-7"],
    correct: "4-15-7",
    type: "verbal",
    points: 3,
  },
  {
    id: 21,
    text: "If RED is 9-5-4, BLUE is?",
    options: ["2-12-21-5", "2-12-22-5", "2-13-21-5", "2-13-22-5"],
    correct: "2-12-21-5",
    type: "verbal",
    points: 3,
  },
  {
    id: 79,
    text: "If KING is coded as MJTK, QUEEN is?",
    options: ["SVJH", "TWIK", "SVKI", "TWJH"],
    correct: "SVKI",
    type: "verbal",
    points: 3,
  },
  {
    id: 80,
    text: "If SUN is 19-21-14, MOON is?",
    options: ["13-15-15-14", "14-15-15-14", "13-16-15-14", "14-16-15-14"],
    correct: "13-15-15-14",
    type: "verbal",
    points: 3,
  },
  {
    id: 81,
    text: "If LOVE is coded as ORYH, HATE is?",
    options: ["MFHL", "NGIM", "MFIM", "NGHL"],
    correct: "MFHL",
    type: "verbal",
    points: 3,
  },
  {
    id: 82,
    text: "If STAR is 20-19-1-18, PLANET is?",
    options: [
      "16-12-1-14-5-20",
      "17-12-1-14-5-20",
      "16-13-1-14-5-20",
      "17-13-1-14-5-20",
    ],
    correct: "16-12-1-14-5-20",
    type: "verbal",
    points: 3,
  },
  {
    id: 83,
    text: "If BIG is coded as ELJ, SMALL is?",
    options: ["XRFII", "YSFII", "XRGJJ", "YSGJJ"],
    correct: "XRFII",
    type: "verbal",
    points: 3,
  },
  {
    id: 84,
    text: "If JUMP is 10-21-13-16, RUN is?",
    options: ["18-21-14", "19-21-14", "18-22-14", "19-22-14"],
    correct: "18-21-14",
    type: "verbal",
    points: 3,
  },
  {
    id: 85,
    text: "If FIRE is coded as ILUJ, WATER is?",
    options: ["AFYJW", "BGZIX", "AFZIX", "BGYJW"],
    correct: "AFYJW",
    type: "verbal",
    points: 3,
  },

  // Spatial (Easy)
  {
    id: 22,
    text: "Pattern: Circle, Square, Triangle, Circle, ?",
    options: ["Square", "Circle", "Triangle", "Hexagon"],
    correct: "Square",
    type: "spatial",
    points: 1,
  },
  {
    id: 23,
    text: "Pattern: Red, Blue, Green, Red, ?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correct: "Blue",
    type: "spatial",
    points: 1,
  },
  {
    id: 43,
    text: "Pattern: Up, Down, Left, Right, ?",
    options: ["Up", "Down", "Left", "Right"],
    correct: "Up",
    type: "spatial",
    points: 1,
  },
  {
    id: 86,
    text: "Pattern: Big, Small, Big, Small, ?",
    options: ["Big", "Small", "Medium", "Large"],
    correct: "Big",
    type: "spatial",
    points: 1,
  },
  {
    id: 87,
    text: "Pattern: ●, ○, ●, ○, ?",
    options: ["●", "○", "□", "△"],
    correct: "●",
    type: "spatial",
    points: 1,
  },
  {
    id: 88,
    text: "Pattern: Square, Circle, Square, Circle, ?",
    options: ["Square", "Circle", "Triangle", "Pentagon"],
    correct: "Square",
    type: "spatial",
    points: 1,
  },
  {
    id: 89,
    text: "Pattern: Black, White, Black, White, ?",
    options: ["Black", "White", "Gray", "Red"],
    correct: "Black",
    type: "spatial",
    points: 1,
  },
  {
    id: 90,
    text: "Pattern: Left, Right, Left, Right, ?",
    options: ["Left", "Right", "Up", "Down"],
    correct: "Left",
    type: "spatial",
    points: 1,
  },
  {
    id: 91,
    text: "Pattern: ○, □, ○, □, ?",
    options: ["○", "□", "●", "△"],
    correct: "○",
    type: "spatial",
    points: 1,
  },
  {
    id: 92,
    text: "Pattern: Triangle, Square, Triangle, Square, ?",
    options: ["Triangle", "Square", "Circle", "Hexagon"],
    correct: "Triangle",
    type: "spatial",
    points: 1,
  },

  // Spatial (Medium)
  {
    id: 24,
    text: "Rotate a square 90° clockwise. New top-left corner?",
    options: ["Top-right", "Bottom-left", "Bottom-right", "Top-left"],
    correct: "Top-right",
    type: "spatial",
    points: 2,
  },
  {
    id: 25,
    text: "Mirror image of a right arrow?",
    options: ["Left arrow", "Up arrow", "Down arrow", "Right arrow"],
    correct: "Left arrow",
    type: "spatial",
    points: 2,
  },
  {
    id: 26,
    text: "Rotate triangle 180°. New base?",
    options: ["Top", "Left", "Right", "Bottom"],
    correct: "Top",
    type: "spatial",
    points: 2,
  },
  {
    id: 48,
    text: "Rotate a cube 90°. New top face?",
    options: ["Front", "Back", "Side", "Bottom"],
    correct: "Side",
    type: "spatial",
    points: 2,
  },
  {
    id: 93,
    text: "Mirror image of an upward arrow?",
    options: ["Downward arrow", "Left arrow", "Right arrow", "Upward arrow"],
    correct: "Downward arrow",
    type: "spatial",
    points: 2,
  },
  {
    id: 94,
    text: "Rotate a pentagon 72° clockwise. New top vertex?",
    options: ["Next vertex", "Same vertex", "Opposite vertex", "Second vertex"],
    correct: "Next vertex",
    type: "spatial",
    points: 2,
  },
  {
    id: 95,
    text: "Figural analogy: Square is to Circle as Triangle is to ?",
    options: ["Pentagon", "Hexagon", "Circle", "Square"],
    correct: "Circle",
    type: "spatial",
    points: 2,
  },
  {
    id: 96,
    text: "Rotate a rectangle 90° counterclockwise. New top side?",
    options: ["Left side", "Right side", "Bottom side", "Top side"],
    correct: "Right side",
    type: "spatial",
    points: 2,
  },
  {
    id: 97,
    text: "Mirror image of a diagonal line from top-left to bottom-right?",
    options: [
      "Top-right to bottom-left",
      "Top-left to bottom-right",
      "Horizontal",
      "Vertical",
    ],
    correct: "Top-right to bottom-left",
    type: "spatial",
    points: 2,
  },
  {
    id: 98,
    text: "Figural analogy: Big circle is to Small circle as Big square is to ?",
    options: ["Small square", "Big triangle", "Small triangle", "Big square"],
    correct: "Small square",
    type: "spatial",
    points: 2,
  },

  // Spatial (Hard)
  {
    id: 27,
    text: "Fold a cube net. Opposite face of 1?",
    options: ["2", "3", "5", "6"],
    correct: "6",
    type: "spatial",
    points: 3,
  },
  {
    id: 28,
    text: "Pattern: ○△□, △□○, □○△, ?",
    options: ["○△□", "△□○", "□△○", "○□△"],
    correct: "○△□",
    type: "spatial",
    points: 3,
  },
  {
    id: 99,
    text: "Matrix: [●○□, ○□●, □●?]",
    options: ["○", "●", "□", "△"],
    correct: "○",
    type: "spatial",
    points: 3,
  },
  {
    id: 100,
    text: "Fold a cube net. Opposite face of 2?",
    options: ["1", "3", "5", "6"],
    correct: "5",
    type: "spatial",
    points: 3,
  },
  {
    id: 101,
    text: "Matrix: [■□○, □○■, ○■?]",
    options: ["□", "■", "○", "●"],
    correct: "□",
    type: "spatial",
    points: 3,
  },
  {
    id: 102,
    text: "Figural analogy: Rotate square 90° is to Square as Rotate triangle 120° is to ?",
    options: ["Triangle", "Pentagon", "Square", "Hexagon"],
    correct: "Triangle",
    type: "spatial",
    points: 3,
  },
  {
    id: 103,
    text: "Matrix: [●■□, ■□●, □●?]",
    options: ["■", "●", "□", "○"],
    correct: "■",
    type: "spatial",
    points: 3,
  },
  {
    id: 104,
    text: "Fold a cube net. Opposite face of 3?",
    options: ["1", "2", "4", "6"],
    correct: "4",
    type: "spatial",
    points: 3,
  },
  {
    id: 105,
    text: "Matrix: [○□■, □■○, ■○?]",
    options: ["□", "○", "■", "●"],
    correct: "□",
    type: "spatial",
    points: 3,
  },
  {
    id: 106,
    text: "Figural analogy: Mirror circle is to Circle as Mirror pentagon is to ?",
    options: ["Pentagon", "Hexagon", "Square", "Triangle"],
    correct: "Pentagon",
    type: "spatial",
    points: 3,
  },

  // Logical (Easy)
  {
    id: 29,
    text: "All cats meow. Fluffy is a cat. Therefore:",
    options: [
      "Fluffy meows",
      "Fluffy barks",
      "Fluffy is a dog",
      "Fluffy is silent",
    ],
    correct: "Fluffy meows",
    type: "logical",
    points: 1,
  },
  {
    id: 30,
    text: "If it’s raining, the ground is wet. It’s raining. Therefore:",
    options: [
      "Ground is dry",
      "Ground is wet",
      "It’s sunny",
      "Cannot determine",
    ],
    correct: "Ground is wet",
    type: "logical",
    points: 1,
  },
  {
    id: 107,
    text: "All dogs bark. Rover is a dog. Therefore:",
    options: [
      "Rover barks",
      "Rover meows",
      "Rover is a cat",
      "Rover is silent",
    ],
    correct: "Rover barks",
    type: "logical",
    points: 1,
  },
  {
    id: 108,
    text: "If it’s sunny, the sky is clear. It’s sunny. Therefore:",
    options: [
      "Sky is cloudy",
      "Sky is clear",
      "It’s raining",
      "Cannot determine",
    ],
    correct: "Sky is clear",
    type: "logical",
    points: 1,
  },
  {
    id: 109,
    text: "All birds have wings. Sparrow is a bird. Therefore:",
    options: [
      "Sparrow has wings",
      "Sparrow flies",
      "Sparrow is a fish",
      "Cannot determine",
    ],
    correct: "Sparrow has wings",
    type: "logical",
    points: 1,
  },
  {
    id: 110,
    text: "If it’s cold, I wear a jacket. It’s cold. Therefore:",
    options: [
      "I wear a jacket",
      "I wear shorts",
      "It’s warm",
      "Cannot determine",
    ],
    correct: "I wear a jacket",
    type: "logical",
    points: 1,
  },
  {
    id: 111,
    text: "All fish swim. Nemo is a fish. Therefore:",
    options: ["Nemo swims", "Nemo flies", "Nemo is a bird", "Cannot determine"],
    correct: "Nemo swims",
    type: "logical",
    points: 1,
  },
  {
    id: 112,
    text: "If it’s night, the stars are visible. It’s night. Therefore:",
    options: [
      "Stars are visible",
      "Stars are hidden",
      "It’s day",
      "Cannot determine",
    ],
    correct: "Stars are visible",
    type: "logical",
    points: 1,
  },
  {
    id: 113,
    text: "All trees have leaves. Oak is a tree. Therefore:",
    options: [
      "Oak has leaves",
      "Oak has flowers",
      "Oak is a flower",
      "Cannot determine",
    ],
    correct: "Oak has leaves",
    type: "logical",
    points: 1,
  },
  {
    id: 114,
    text: "If it’s Monday, I go to work. It’s Monday. Therefore:",
    options: ["I go to work", "I stay home", "It’s Sunday", "Cannot determine"],
    correct: "I go to work",
    type: "logical",
    points: 1,
  },

  // Logical (Medium)
  {
    id: 31,
    text: "If A > B and B > C, then:",
    options: ["C > A", "A > C", "A = C", "Cannot determine"],
    correct: "A > C",
    type: "logical",
    points: 2,
  },
  {
    id: 32,
    text: "Some birds can fly. Sparrows are birds. Therefore:",
    options: [
      "Sparrows cannot fly",
      "Sparrows can fly",
      "Some birds are sparrows",
      "Cannot determine",
    ],
    correct: "Cannot determine",
    type: "logical",
    points: 2,
  },
  {
    id: 49,
    text: "All roses are flowers. Some flowers are red. Therefore:",
    options: [
      "All roses are red",
      "Some roses are red",
      "No roses are red",
      "Cannot determine",
    ],
    correct: "Cannot determine",
    type: "logical",
    points: 2,
  },
  {
    id: 115,
    text: "If X > Y and Y > Z, then:",
    options: ["Z > X", "X > Z", "X = Z", "Cannot determine"],
    correct: "X > Z",
    type: "logical",
    points: 2,
  },
  {
    id: 116,
    text: "Some dogs are black. Max is a dog. Therefore:",
    options: [
      "Max is black",
      "Max is not black",
      "Some dogs are Max",
      "Cannot determine",
    ],
    correct: "Cannot determine",
    type: "logical",
    points: 2,
  },
  {
    id: 117,
    text: "All cars have wheels. Some wheels are round. Therefore:",
    options: [
      "All cars are round",
      "Some cars have round wheels",
      "No cars are round",
      "Cannot determine",
    ],
    correct: "Some cars have round wheels",
    type: "logical",
    points: 2,
  },
  {
    id: 118,
    text: "If P > Q and Q > R, then:",
    options: ["R > P", "P > R", "P = R", "Cannot determine"],
    correct: "P > R",
    type: "logical",
    points: 2,
  },
  {
    id: 119,
    text: "Some cats are white. Fluffy is a cat. Therefore:",
    options: [
      "Fluffy is white",
      "Fluffy is not white",
      "Some cats are Fluffy",
      "Cannot determine",
    ],
    correct: "Cannot determine",
    type: "logical",
    points: 2,
  },
  {
    id: 120,
    text: "All books have pages. Some pages are numbered. Therefore:",
    options: [
      "All books have numbered pages",
      "Some books have numbered pages",
      "No books have pages",
      "Cannot determine",
    ],
    correct: "Some books have numbered pages",
    type: "logical",
    points: 2,
  },
  {
    id: 121,
    text: "If M > N and N > O, then:",
    options: ["O > M", "M > O", "M = O", "Cannot determine"],
    correct: "M > O",
    type: "logical",
    points: 2,
  },

  // Logical (Hard)
  {
    id: 33,
    text: "All birds can fly. Penguins are birds. Therefore:",
    options: [
      "Penguins can fly",
      "Some birds cannot fly",
      "The statement is contradictory",
      "Penguins are not birds",
    ],
    correct: "The statement is contradictory",
    type: "logical",
    points: 3,
  },
  {
    id: 34,
    text: "If X is true, then Y is false. Y is true. Therefore:",
    options: [
      "X is true",
      "X is false",
      "X and Y are true",
      "Cannot determine",
    ],
    correct: "X is false",
    type: "logical",
    points: 3,
  },
  {
    id: 44,
    text: "If P implies Q, and Q is false, then:",
    options: [
      "P is true",
      "P is false",
      "P and Q are true",
      "Cannot determine",
    ],
    correct: "P is false",
    type: "logical",
    points: 3,
  },
  {
    id: 122,
    text: "All fish can swim. Sharks are fish. Therefore:",
    options: [
      "Sharks can swim",
      "Some fish cannot swim",
      "The statement is contradictory",
      "Sharks are not fish",
    ],
    correct: "Sharks can swim",
    type: "logical",
    points: 3,
  },
  {
    id: 123,
    text: "If A implies B, and B is false, then:",
    options: [
      "A is true",
      "A is false",
      "A and B are true",
      "Cannot determine",
    ],
    correct: "A is false",
    type: "logical",
    points: 3,
  },
  {
    id: 124,
    text: "All mammals have fur. Whales are mammals. Therefore:",
    options: [
      "Whales have fur",
      "Some mammals do not have fur",
      "The statement is contradictory",
      "Whales are not mammals",
    ],
    correct: "The statement is contradictory",
    type: "logical",
    points: 3,
  },
  {
    id: 125,
    text: "If C is true, then D is false. D is true. Therefore:",
    options: [
      "C is true",
      "C is false",
      "C and D are true",
      "Cannot determine",
    ],
    correct: "C is false",
    type: "logical",
    points: 3,
  },
  {
    id: 126,
    text: "All plants need water. Cacti are plants. Therefore:",
    options: [
      "Cacti need water",
      "Some plants do not need water",
      "The statement is contradictory",
      "Cacti are not plants",
    ],
    correct: "Cacti need water",
    type: "logical",
    points: 3,
  },
  {
    id: 127,
    text: "If E implies F, and F is false, then:",
    options: [
      "E is true",
      "E is false",
      "E and F are true",
      "Cannot determine",
    ],
    correct: "E is false",
    type: "logical",
    points: 3,
  },
  {
    id: 128,
    text: "All insects have six legs. Spiders are insects. Therefore:",
    options: [
      "Spiders have six legs",
      "Some insects do not have six legs",
      "The statement is contradictory",
      "Spiders are not insects",
    ],
    correct: "The statement is contradictory",
    type: "logical",
    points: 3,
  },

  // Abstract (Easy)
  {
    id: 35,
    text: "Pattern: ★☆★, ☆★☆, ★☆★, ?",
    options: ["☆★☆", "★☆★", "★★★", "☆☆☆"],
    correct: "☆★☆",
    type: "abstract",
    points: 1,
  },
  {
    id: 36,
    text: "Sequence: ●○●, ○●○, ●○●, ?",
    options: ["○●○", "●○●", "○○○", "●●●"],
    correct: "○●○",
    type: "abstract",
    points: 1,
  },
  {
    id: 129,
    text: "Pattern: ■□■, □■□, ■□■, ?",
    options: ["□■□", "■□■", "□□□", "■■■"],
    correct: "□■□",
    type: "abstract",
    points: 1,
  },
  {
    id: 130,
    text: "Sequence: ▲▼▲, ▼▲▼, ▲▼▲, ?",
    options: ["▼▲▼", "▲▼▲", "▼▼▼", "▲▲▲"],
    correct: "▼▲▼",
    type: "abstract",
    points: 1,
  },
  {
    id: 131,
    text: "Pattern: ○●○, ●○●, ○●○, ?",
    options: ["●○●", "○●○", "○○○", "●●●"],
    correct: "●○●",
    type: "abstract",
    points: 1,
  },
  {
    id: 132,
    text: "Sequence: ★■★, ■★■, ★■★, ?",
    options: ["■★■", "★■★", "★★★", "■■■"],
    correct: "■★■",
    type: "abstract",
    points: 1,
  },
  {
    id: 133,
    text: "Pattern: □○□, ○□○, □○□, ?",
    options: ["○□○", "□○□", "□□□", "○○○"],
    correct: "○□○",
    type: "abstract",
    points: 1,
  },
  {
    id: 134,
    text: "Sequence: ●□●, □●□, ●□●, ?",
    options: ["□●□", "●□●", "□□□", "●●●"],
    correct: "□●□",
    type: "abstract",
    points: 1,
  },
  {
    id: 135,
    text: "Pattern: ▲○▲, ○▲○, ▲○▲, ?",
    options: ["○▲○", "▲○▲", "○○○", "▲▲▲"],
    correct: "○▲○",
    type: "abstract",
    points: 1,
  },
  {
    id: 136,
    text: "Sequence: ■●■, ●■●, ■●■, ?",
    options: ["●■●", "■●■", "■■■", "●●●"],
    correct: "●■●",
    type: "abstract",
    points: 1,
  },

  // Abstract (Medium)
  {
    id: 37,
    text: "Pattern: 1 star, 2 stars, 4 stars, ?",
    options: ["6 stars", "8 stars", "10 stars", "16 stars"],
    correct: "8 stars",
    type: "abstract",
    points: 2,
  },
  {
    id: 38,
    text: "Series: ■□■, □■□, ■□■, ?",
    options: ["□■□", "■□■", "□□□", "■■■"],
    correct: "□■□",
    type: "abstract",
    points: 2,
  },
  {
    id: 39,
    text: "Pattern: ○●○, ●○○, ○○□, ?",
    options: ["□●□", "●□□", "○□●", "□■□"],
    correct: "□●□",
    type: "abstract",
    points: 2,
  },
  {
    id: 40,
    text: "Series: 1●, 2○, 4★, 8■, ?",
    options: ["16□", "16●", "32○", "16★"],
    correct: "16□",
    type: "abstract",
    points: 2,
  },
  {
    id: 137,
    text: "Figural analogy: ● is to ○ as ■ is to ?",
    options: ["□", "●", "○", "△"],
    correct: "□",
    type: "abstract",
    points: 2,
  },
  {
    id: 138,
    text: "Figural analogy: ▲ is to ▼ as ○ is to ?",
    options: ["●", "□", "△", "○"],
    correct: "●",
    type: "abstract",
    points: 2,
  },
  {
    id: 139,
    text: "Pattern: △■○, ■○△, ○△■, ?",
    options: ["△■○", "■○△", "○△■", "●□★"],
    correct: "△■○",
    type: "abstract",
    points: 2,
  },
  {
    id: 140,
    text: "Series: ●■□, ■□●, □●■, ?",
    options: ["●■□", "■□●", "□●■", "○△□"],
    correct: "●■□",
    type: "abstract",
    points: 2,
  },

  // Abstract (Hard)
  {
    id: 141,
    text: "Matrix: [●○■, ○■●, ■●?]",
    options: ["○", "●", "■", "□"],
    correct: "○",
    type: "abstract",
    points: 3,
  },
  {
    id: 142,
    text: "Figural analogy: Rotate ● 90° is to ● as Rotate □ 90° is to ?",
    options: ["□", "○", "■", "●"],
    correct: "□",
    type: "abstract",
    points: 3,
  },
  {
    id: 143,
    text: "Matrix: [■○□, ○□■, □■?]",
    options: ["○", "■", "□", "●"],
    correct: "○",
    type: "abstract",
    points: 3,
  },
  {
    id: 144,
    text: "Figural analogy: Mirror ● is to ● as Mirror ■ is to ?",
    options: ["■", "□", "○", "●"],
    correct: "■",
    type: "abstract",
    points: 3,
  },
  {
    id: 145,
    text: "Matrix: [○■●, ■●○, ●○?]",
    options: ["■", "○", "●", "□"],
    correct: "■",
    type: "abstract",
    points: 3,
  },
  {
    id: 146,
    text: "Figural analogy: ● is to ○ as △ is to ?",
    options: ["▼", "□", "■", "●"],
    correct: "▼",
    type: "abstract",
    points: 3,
  },
  {
    id: 147,
    text: "Matrix: [□●○, ●○□, ○□?]",
    options: ["●", "□", "○", "■"],
    correct: "●",
    type: "abstract",
    points: 3,
  },
  {
    id: 148,
    text: "Pattern: 1●2○, 2○3●, 3●4○, ?",
    options: ["4○5●", "5●6○", "4●5○", "5○6●"],
    correct: "4○5●",
    type: "abstract",
    points: 3,
  },
  {
    id: 149,
    text: "Matrix: [●□■, □■●, ■●?]",
    options: ["□", "●", "■", "○"],
    correct: "□",
    type: "abstract",
    points: 3,
  },
  {
    id: 150,
    text: "Pattern: ○1●2, ●2○3, ○3●4, ?",
    options: ["●4○5", "○4●5", "●5○6", "○5●6"],
    correct: "●4○5",
    type: "abstract",
    points: 3,
  },
];
