"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questionBank: Record<string, Question[]> = {
  Python: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "define"],
      answer: 1,
      explanation: "The `def` keyword is used to define a function in Python.",
    },
    {
      question: "Which of the following is a Python list?",
      options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
      answer: 1,
      explanation: "Square brackets [] are used to create a list in Python.",
    },
    {
      question: "What is the output of 2 + 3 * 4?",
      options: ["20", "14", "24", "10"],
      answer: 1,
      explanation: "Multiplication is performed before addition, so 3 × 4 = 12 and 2 + 12 = 14.",
    },
    {
      question: "Which symbol is used for a single-line comment in Python?",
      options: ["//", "/*", "#", "--"],
      answer: 2,
      explanation: "Python uses # for single-line comments.",
    },
    {
      question: "Which function is used to display output in Python?",
      options: ["display()", "show()", "output()", "print()"],
      answer: 3,
      explanation: "The print() function displays output in Python.",
    },
  ],

  "Data Science": [
    {
      question: "Which language is widely used in Data Science?",
      options: ["Python", "HTML", "CSS", "XML"],
      answer: 0,
      explanation: "Python is one of the most widely used programming languages for Data Science.",
    },
    {
      question: "What does CSV stand for?",
      options: [
        "Computer System Value",
        "Comma-Separated Values",
        "Common Storage Variable",
        "Central System Version",
      ],
      answer: 1,
      explanation: "CSV stands for Comma-Separated Values.",
    },
    {
      question: "Which library is commonly used for data manipulation in Python?",
      options: ["Pandas", "Flask", "Django", "Tkinter"],
      answer: 0,
      explanation: "Pandas is widely used for data manipulation and analysis.",
    },
    {
      question: "What is the average of 10, 20 and 30?",
      options: ["15", "20", "25", "30"],
      answer: 1,
      explanation: "(10 + 20 + 30) / 3 = 20.",
    },
    {
      question: "Which graph is commonly used to show trends over time?",
      options: ["Pie chart", "Line chart", "Histogram", "Scatter plot"],
      answer: 1,
      explanation: "Line charts are commonly used to visualize trends over time.",
    },
  ],

  DBMS: [
    {
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Backup Management Software",
        "Database Machine System",
        "Data Management Service",
      ],
      answer: 0,
      explanation: "DBMS stands for Database Management System.",
    },
    {
      question: "Which SQL command is used to retrieve data?",
      options: ["GET", "SELECT", "FETCH", "READ"],
      answer: 1,
      explanation: "SELECT is used to retrieve data from a database.",
    },
    {
      question: "Which key uniquely identifies a record?",
      options: ["Foreign key", "Primary key", "Candidate key", "Secondary key"],
      answer: 1,
      explanation: "A primary key uniquely identifies each record in a table.",
    },
    {
      question: "Which SQL command is used to add new records?",
      options: ["ADD", "INSERT", "CREATE", "UPDATE"],
      answer: 1,
      explanation: "INSERT INTO is used to add new records to a table.",
    },
    {
      question: "What is a collection of related tables called?",
      options: ["Database", "Column", "Record", "Query"],
      answer: 0,
      explanation: "A database can contain multiple related tables.",
    },
  ],

  "Computer Networks": [
    {
      question: "What does LAN stand for?",
      options: [
        "Large Area Network",
        "Local Area Network",
        "Linked Access Network",
        "Local Access Node",
      ],
      answer: 1,
      explanation: "LAN stands for Local Area Network.",
    },
    {
      question: "Which device connects different networks?",
      options: ["Switch", "Router", "Keyboard", "Monitor"],
      answer: 1,
      explanation: "A router forwards data between different networks.",
    },
    {
      question: "How many layers are there in the OSI model?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      explanation: "The OSI model consists of seven layers.",
    },
    {
      question: "Which protocol is commonly used to browse websites?",
      options: ["HTTP", "FTP", "SMTP", "SSH"],
      answer: 0,
      explanation: "HTTP is a protocol used for communication between web browsers and web servers.",
    },
    {
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internet Program",
        "Internal Process",
        "Information Protocol",
      ],
      answer: 0,
      explanation: "IP stands for Internet Protocol.",
    },
  ],
};

export default function PracticePage() {
  const subjects = Object.keys(questionBank);

  const [subject, setSubject] = useState("Python");
  const [questions, setQuestions] = useState(questionBank.Python);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  const changeSubject = (newSubject: string) => {
    setSubject(newSubject);
    setQuestions(questionBank[newSubject]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setQuizFinished(false);
  };

  const selectAnswer = (index: number) => {
    if (answered) return;

    setSelectedAnswer(index);
    setAnswered(true);

    if (index === question.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setQuizFinished(false);
  };

  const progress = ((currentQuestion + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
              🧠
            </div>

            <div>
              <h1 className="text-xl font-bold">Brain-Bank</h1>
              <p className="text-xs text-slate-400">Practice Center</p>
            </div>
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Practice
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Test your knowledge
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Practice important questions, improve your concepts, and track
            your score.
          </p>
        </div>

        {/* Subject Selection */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Choose a subject</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select a subject to start practicing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {subjects.map((item) => (
              <button
                key={item}
                onClick={() => changeSubject(item)}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  subject === item
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "border border-slate-700 bg-slate-950 text-slate-300 hover:border-blue-500 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Finished */}
        {quizFinished ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 text-4xl">
              🎉
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
              Quiz Complete
            </p>

            <h2 className="text-3xl font-bold">
              Great work!
            </h2>

            <p className="mt-3 text-slate-400">
              You completed the {subject} practice quiz.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <p className="text-sm text-slate-400">Your Score</p>

              <p className="mt-2 text-5xl font-bold text-blue-400">
                {score}/{questions.length}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {Math.round((score / questions.length) * 100)}% correct
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={restartQuiz}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Practice Again
              </button>

              <Link
                href="/dashboard"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Quiz Top Information */}
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-slate-400">
                  Question {currentQuestion + 1} of {questions.length}
                </p>

                <p className="mt-1 text-sm font-medium text-blue-400">
                  {subject}
                </p>
              </div>

              <div className="rounded-lg bg-slate-900 px-4 py-2 text-sm">
                Score:{" "}
                <span className="font-bold text-blue-400">{score}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-10">
              <div className="mb-8">
                <span className="inline-flex rounded-lg bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  Question {currentQuestion + 1}
                </span>

                <h2 className="mt-5 text-xl font-bold leading-relaxed md:text-2xl">
                  {question.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isCorrect = index === question.answer;
                  const isSelected = index === selectedAnswer;

                  let optionClass =
                    "border-slate-700 bg-slate-950 hover:border-blue-500 hover:bg-slate-800";

                  if (answered && isCorrect) {
                    optionClass =
                      "border-green-500 bg-green-500/10 text-green-300";
                  } else if (answered && isSelected && !isCorrect) {
                    optionClass =
                      "border-red-500 bg-red-500/10 text-red-300";
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => selectAnswer(index)}
                      disabled={answered}
                      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${optionClass}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                          answered && isCorrect
                            ? "bg-green-500 text-white"
                            : answered && isSelected
                            ? "bg-red-500 text-white"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="text-sm font-medium md:text-base">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <span className="ml-auto text-lg">✓</span>
                      )}

                      {answered && isSelected && !isCorrect && (
                        <span className="ml-auto text-lg">✕</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {answered && (
                <div
                  className={`mt-6 rounded-xl border p-5 ${
                    selectedAnswer === question.answer
                      ? "border-green-500/30 bg-green-500/10"
                      : "border-blue-500/30 bg-blue-500/10"
                  }`}
                >
                  <p className="font-semibold">
                    {selectedAnswer === question.answer
                      ? "✅ Correct!"
                      : "❌ Not quite"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question.explanation}
                  </p>
                </div>
              )}

              {/* Next Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextQuestion}
                  disabled={!answered}
                  className={`rounded-xl px-6 py-3 font-semibold transition ${
                    answered
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "cursor-not-allowed bg-slate-800 text-slate-500"
                  }`}
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question →"}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Tips */}
        {!quizFinished && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">🎯</div>
              <h3 className="font-semibold">Focus</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Read every question carefully before selecting your answer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">💡</div>
              <h3 className="font-semibold">Learn</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Check the explanation after every question to strengthen your
                concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">📈</div>
              <h3 className="font-semibold">Improve</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Repeat quizzes and try to improve your score each time.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
