const easy_questions = {
    en: [
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "What is the capital of Jamaica?",
            correct_answer: "Kingston",
            incorrect_answers: [
                "San Juan",
                "Port-au-Prince",
                "Bridgetown"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "What is the capital of Denmark?",
            correct_answer: "Copenhagen",
            incorrect_answers: [
                "Aarhus",
                "Odense",
                "Aalborg"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Which of the following former Yugoslavian states is landlocked?",
            correct_answer: "Serbia",
            incorrect_answers: [
                "Bosnia and Herzegovina",
                "Montenegro",
                "Croatia"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
            correct_answer: "Qatar",
            incorrect_answers: [
                "Kuwait",
                "United Arab Emirates",
                "Jordan"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Which of these African countries list &quot;Spanish&quot; as an official language?",
            correct_answer: "Equatorial Guinea",
            incorrect_answers: [
                "Guinea",
                "Cameroon",
                "Angola"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "What is the capital of the US State of New York?",
            correct_answer: "Albany",
            incorrect_answers: [
                "Buffalo",
                "New York",
                "Rochester"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "What is the name of New Zealand&#039;s indigenous people?",
            correct_answer: "Maori",
            incorrect_answers: [
                "Vikings",
                "Polynesians",
                "Samoans"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "What is the largest country in the world?",
            correct_answer: "Russia",
            incorrect_answers: [
                "Canada",
                "China",
                "United States"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Which small country is located between the borders of France and Spain?",
            correct_answer: "Andorra",
            incorrect_answers: [
                "San Marino",
                "Vatican City",
                "Lichtenstein"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "The Alps are a mountain range on which continent?",
            correct_answer: "Europe",
            incorrect_answers: [
                "North America",
                "Asia",
                "Africa"
            ]
        }
    ],
    ro: [
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care este capitala Jamaicii?",
            correct_answer: "Kingston",
            incorrect_answers: [
                "San Juan",
                "Port-au-Prince",
                "Bridgetown"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care este capitala Danemarcei?",
            correct_answer: "Copenhaga",
            incorrect_answers: [
                "Aarhus",
                "Odense",
                "Aalborg"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care dintre următoarele state foste iugoslave este fără ieșire la mare?",
            correct_answer: "Serbia",
            incorrect_answers: [
                "Bosnia și Herzegovina",
                "Muntenegru",
                "Croația"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care dintre următoarele țări arabe NU are un steag care conține doar culori panarabe?",
            correct_answer: "Qatar",
            incorrect_answers: [
                "Kuwait",
                "Emiratele Arabe Unite",
                "Iordania"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care dintre aceste țări africane listează „spaniola” ca limbă oficială?",
            correct_answer: "Guineea Ecuatorială",
            incorrect_answers: [
                "Guineea",
                "Camerun",
                "Angola"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care este capitala statului american New York?”",
            correct_answer: "Albany",
            incorrect_answers: [
                "Buffalo",
                "New York",
                "Rochester"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care este numele indigenilor din Noua Zeelandă?",
            correct_answer: "Maori",
            incorrect_answers: [
                "Vikingii",
                "Polinezienii",
                "Samoans"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Care este cea mai mare țară din lume?",
            correct_answer: "Rusia",
            incorrect_answers: [
                "Canada",
                "China",
                "Statele unite"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Ce țară mică este situată între granițele Franței și Spaniei?",
            correct_answer: "Andorra",
            incorrect_answers: [
                "San Marino",
                "Orașul Vatican",
                "Lichtenstein"
            ]
        },
        {
            category: "Geography",
            type: "multiple",
            difficulty: "easy",
            question: "Alpii sunt un lanț muntos pe ce continent?",
            correct_answer: "Europa",
            incorrect_answers: [
                "America de Nord",
                "Asia",
                "Africa"
            ]
        }
    ],
  };
  
  
const quizContainer = document.getElementById("quiz-container");
const roButton = document.getElementById("ro");
const enButton = document.getElementById("en");
const submitButton = document.getElementById("submit-button");

let selectedLanguage = "ro";

function createQuestionElement(index, questionData) {
  const questionContainer = document.createElement("div");
  questionContainer.className = "question-container";

  const questionElement = document.createElement("p");
  questionElement.className = "question";
  questionElement.textContent = `${index + 1}. ${questionData.question}`;
  questionContainer.appendChild(questionElement);

  return questionContainer;
}

function createAnswerList(allAnswers) {
  const answersList = document.createElement("ul");
  answersList.className = "answers";

  for (const answer of allAnswers) {
    const answerItem = document.createElement("li");
    const answerLabel = document.createElement("label");
    answerLabel.className = "answer-label";

    const answerInput = document.createElement("input");
    answerInput.type = "checkbox";
    answerInput.value = answer;
    answerLabel.appendChild(answerInput);
    answerLabel.append(` ${answer}`);

    answerItem.appendChild(answerLabel);
    answersList.appendChild(answerItem);
  }

  return answersList;
}

function generateQuiz(language) {
  selectedLanguage = language;
  quizContainer.innerHTML = "";

  const questions = easy_questions[language];
  
  for (let i = 0; i < questions.length; i++) {
    const questionData = questions[i];
    const questionContainer = createQuestionElement(i, questionData);
    const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
    const answersList = createAnswerList(allAnswers);
    
    questionContainer.appendChild(answersList);
    quizContainer.appendChild(questionContainer);
  }
}

roButton.addEventListener("click", () => generateQuiz("ro"));
enButton.addEventListener("click", () => generateQuiz("en"));

function showResults() {
  let score = 0;
  const questions = easy_questions[selectedLanguage];

  for (let i = 0; i < questions.length; i++) {
    const questionData = questions[i];
    const questionContainer = quizContainer.querySelectorAll(".question-container")[i];
    const answerInputs = questionContainer.querySelectorAll("input[type='checkbox']");
    let correct = true;

    for (let j = 0; j < answerInputs.length; j++) {
      const input = answerInputs[j];
      const isCorrect = questionData.correct_answer === input.value;
      if (input.checked !== isCorrect) {
        correct = false;
        break;
      }
    }

    if (correct) {
      score++;
    }
  }

  alert(`Rezultatul tău este: ${score} din ${questions.length}`);
}

submitButton.addEventListener("click", showResults);


