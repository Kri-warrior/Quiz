const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//questions list
const questions = [
  {
    question: 'What is 36 + 64?',
    answers: [
      { text: '100', correct: true },
      { text: '75', correct: false }
    ]
  },
  {
    question: 'What is 12 * 2?',
    answers: [
      { text: '14', correct: false },
      { text: '24', correct: true }
    ]
  },
  {
    question: 'What is the Square of 10',
    answers: [
      { text: '9', correct: false },
      { text: '100', correct: true },
      { text: '1000', correct: false },
      { text: '400', correct: false }
    ]
  },
  {
    question: 'An Angle More Than 90 degree is called...',
    answers: [
      { text: 'Obtuse angle', correct: true },
      { text: 'Right angle', correct: false },
      { text: 'Complete angle', correct: false },
      { text: 'Straight angle', correct: false }
    ]
  },
  {
    question: 'What Is a Right Angle?',
    answers: [
      { text: 'An Angle With 90 degree', correct: true },
      { text: 'An Angle With 180 degree', correct: false },
      { text: 'An Angle With 360 degree', correct: false },
      { text: 'An Angle With 0 degree', correct: false }
    ]
  },
  {
    question: 'What Is a Straight Angle?',
    answers: [
      { text: 'An Angle With 90 degree', correct: false },
      { text: 'An Angle With 180 degree', correct: true },
      { text: 'An Angle With 360 degree', correct: false },
      { text: 'An Angle With 0 degree', correct: false }
    ]
  },
  {
    question: 'What Is Html?',
    answers: [
      { text: 'Programming language', correct: false },
      { text: 'Markup language', correct: true },
      { text: 'Database', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'What Is the full form of "Css"?',
    answers: [
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Colorful Style Sheets', correct: false },
      { text: 'Creative Style Sheets', correct: false }
    ]
  },
  {
    question: 'MS-Word is an example of.....',
    answers: [
      { text: 'Application software', correct: true },
      { text: 'An input device', correct: false },
      { text: 'A processing device', correct: false },
      { text: 'An operating system', correct: false }
    ]
  },
  {
    question: 'How Many GB are there is 1 TB?',
    answers: [
      { text: '1024', correct: true },
      { text: '100', correct: false },
      { text: '1000', correct: false },
      { text: '512', correct: false }
    ]
  },
  {
    question: 'Bulb Was Invented by.....',
    answers: [
      { text: 'Thomas Edison', correct: true },
      { text: 'Ralph H Baer', correct: false },
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: false }
    ]
  },
  {
    question: 'Which of these is not a programming language?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'Javascript', correct: false },
      { text: 'PHP', correct: false },
      { text: 'Css', correct: true }
    ]
  },
  {
    question: 'How many Continents are there in the World?',
    answers: [
      { text: '1', correct: false },
      { text: '10', correct: false },
      { text: '7', correct: true },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'How many planets are there in Solar System?',
    answers: [
      { text: '8', correct: true },
      { text: '7', correct: false },
      { text: '9', correct: false },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'Sun is a.....',
    answers: [
      { text: 'Star', correct: true },
      { text: 'Planet', correct: false },
      { text: 'Galaxy', correct: false },
      { text: 'Universe', correct: false }
    ]
  },
  {
    question: 'Who is the CEO Tesla?',
    answers: [
      { text: 'Elon Musk', correct: true },
      { text: 'Pm Modi', correct: false },
      { text: 'Joe Biden', correct: false },
      { text: 'Gautam Adani', correct: false }
    ]
  },
  {
    question: 'Who is The CEO of Apple?',
    answers: [
      { text: 'Tim Cook', correct: true },
      { text: 'Steve Jobs', correct: false },
      { text: 'Elon Musk', correct: false },
      { text: 'Sundar Pichai', correct: false }
    ]
  }
]

//we can add questions anytime

