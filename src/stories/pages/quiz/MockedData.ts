export const MockedQuestions_OK = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Geography",
      question: "How many rivers are in Saudi Arabia?",
      correct_answer: "0",
      incorrect_answers: ["1", "2", "3"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Television",
      question:
        "Alan Reed is known for providing the voice of which character?",
      correct_answer: "Fred Flintstone",
      incorrect_answers: ["Bugs Bunny", "Fangface", "G.I. Joe"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question: "In Dota 2, what is Earthshaker&#039;s real name?",
      correct_answer: "Raigor Stonehoof",
      incorrect_answers: ["Banehallow Ambry", "Carl", "Barathrum"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Video Games",
      question:
        "What was the first &quot;Team Fortress 2&quot; update to include a war?",
      correct_answer: "Sniper vs. Spy Update",
      incorrect_answers: [
        "WAR! Update",
        "Meet Your Match Update",
        "Spy Vs. Engineer Update",
      ],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Comics",
      question:
        "Who was the first American Vampire (Scott Snyder&#039;s American Vampire)?",
      correct_answer: "Skinner Sweet",
      incorrect_answers: [
        "Hattie Hargrove",
        "Pearl Jones",
        "James &quot;Jim&quot; Book",
      ],
    },
  ],
};

export const MockedQuestions_TooManyRequests = {
  response_code: 5,
  result: [],
};
