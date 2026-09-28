"use client";

import { useState } from "react";
import Link from "next/link";

type Flashcard = {
  question: string;
  answer: string;
};

const flashcardBank: Record<string, Flashcard[]> = {
  Python: [
    {
      question: "What is Python?",
      answer:
        "Python is a high-level, interpreted, general-purpose programming language known for its simple and readable syntax.",
    },
    {
      question: "What is a variable in Python?",
      answer:
        "A variable is a name used to store a value. Example: age = 20",
    },
    {
      question: "What is a list in Python?",
      answer:
        "A list is an ordered and mutable collection that can store multiple values. Example: numbers = [10, 20, 30]",
    },
    {
      question: "What is a function?",
      answer:
        "A function is a reusable block of code designed to perform a specific task. Python functions are commonly created using the def keyword.",
    },
    {
      question: "What is the difference between == and = in Python?",
      answer:
        "= is used for assignment, while == is used to compare two values.",
    },
    {
      question: "What is a dictionary in Python?",
      answer:
        "A dictionary is a collection of key-value pairs. Example: student = {'name': 'Zaid', 'age': 20}",
    },
    {
      question: "What is a loop?",
      answer:
        "A loop repeatedly executes a block of code. Common Python loops are for and while.",
    },
    {
      question: "What is an exception?",
      answer:
        "An exception is an error or unexpected event that occurs during program execution. It can be handled using try and except.",
    },
  ],

  "Data Science": [
    {
      question: "What is Data Science?",
      answer:
        "Data Science is a field that uses statistics, programming, mathematics and machine learning to extract useful insights from data.",
    },
    {
      question: "What is data?",
      answer:
        "Data is a collection of facts, observations, measurements or information that can be processed and analyzed.",
    },
    {
      question: "What is Pandas?",
      answer:
        "Pandas is a Python library widely used for data manipulation, analysis and working with structured data.",
    },
    {
      question: "What is NumPy?",
      answer:
        "NumPy is a Python library used mainly for numerical computing and working with arrays and mathematical operations.",
    },
    {
      question: "What is data visualization?",
      answer:
        "Data visualization is the graphical representation of data using charts, graphs and other visual methods.",
    },
    {
      question: "What is Machine Learning?",
      answer:
        "Machine Learning is a branch of AI where computers learn patterns from data and use those patterns to make predictions or decisions.",
    },
    {
      question: "What is a dataset?",
      answer:
        "A dataset is an organized collection of related data used for analysis, research or machine learning.",
    },
    {
      question: "What is data cleaning?",
      answer:
        "Data cleaning is the process of detecting and correcting inaccurate, incomplete, duplicate or inconsistent data.",
    },
  ],

  DBMS: [
    {
      question: "What is DBMS?",
      answer:
        "DBMS stands for Database Management System. It is software used to create, store, organize and manage data in databases.",
    },
    {
      question: "What is a database?",
      answer:
        "A database is an organized collection of related data that can be stored, accessed and managed efficiently.",
    },
    {
      question: "What is a primary key?",
      answer:
        "A primary key is a field or combination of fields that uniquely identifies each record in a table.",
    },
    {
      question: "What is a foreign key?",
      answer:
        "A foreign key is a field that creates a relationship between two tables by referring to the primary key of another table.",
    },
    {
      question: "What is SQL?",
      answer:
        "SQL stands for Structured Query Language. It is used to create, access, modify and manage relational databases.",
    },
    {
      question: "What is normalization?",
      answer:
        "Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity.",
    },
    {
      question: "What is a table?",
      answer:
        "A table is a database structure consisting of rows and columns used to store related data.",
    },
    {
      question: "What is a query?",
      answer:
        "A query is a request made to a database to retrieve or manipulate data.",
    },
  ],

  "Computer Networks": [
    {
      question: "What is a computer network?",
      answer:
        "A computer network is a group of interconnected computers and devices that communicate and share resources.",
    },
    {
      question: "What is LAN?",
      answer:
        "LAN stands for Local Area Network. It connects devices within a limited geographical area such as a home, office or college.",
    },
    {
      question: "What is WAN?",
      answer:
        "WAN stands for Wide Area Network. It connects networks across large geographical areas.",
    },
    {
      question: "What is an IP address?",
      answer:
        "An IP address is a numerical address used to identify a device on a network.",
    },
    {
      question: "What is a router?",
      answer:
        "A router is a networking device that forwards data packets between different networks.",
    },
    {
      question: "What is the OSI model?",
      answer:
        "The OSI model is a seven-layer reference model that explains how network communication takes place.",
    },
    {
      question: "What is HTTP?",
      answer:
        "HTTP stands for HyperText Transfer Protocol. It is used for communication between web clients and servers.",
    },
    {
      question: "What is a protocol?",
      answer:
        "A protocol is a set of rules that defines how devices communicate and exchange data over a network.",
    },
  ],
};

export default function FlashcardsPage() {
  const subjects = Object.keys(flashcardBank);

  const [subject, setSubject] = useState("Python");
  const [cards, setCards] = useState(flashcardBank.Python);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[currentCard];

  const changeSubject = (newSubject: string) => {
    setSubject(newSubject);
    setCards(flashcardBank[newSubject]);
    setCurrentCard(0);
    setFlipped(false);
  };

  const nextCard = () => {
    setCurrentCard((previous) =>
      previous === cards.length - 1 ? 0 : previous + 1
    );
    setFlipped(false);
  };

  const previousCard = () => {
    setCurrentCard((previous) =>
      previous === 0 ? cards.length - 1 : previous - 1
    );
    setFlipped(false);
  };

  const restartCards = () => {
    setCurrentCard(0);
    setFlipped(false);
  };

  const shuffleCards = () => {
    const shuffled = [...cards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    setCards(shuffled);
    setCurrentCard(0);
    setFlipped(false);
  };

  const progress = ((currentCard + 1) / cards.length) * 100;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
              🧠
            </div>

            <div>
              <h1 className="text-xl font-bold">Brain-Bank</h1>
              <p className="text-xs text-slate-400">
                Flashcards
              </p>
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
            Flashcards
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Learn faster with flashcards
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Review important concepts quickly and strengthen your memory
            with active recall.
          </p>
        </div>

        {/* Subject Selection */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Choose a subject
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Select a subject to study its flashcards.
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

        {/* Progress */}
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Card {currentCard + 1} of {cards.length}
            </span>

            <span className="font-medium text-blue-400">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div
          className="group mb-6 cursor-pointer"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative min-h-[390px] rounded-3xl border p-8 transition-all duration-300 md:min-h-[430px] md:p-12 ${
              flipped
                ? "border-blue-500 bg-blue-950/40"
                : "border-slate-700 bg-slate-900 hover:border-blue-500"
            }`}
          >
            {/* Card label */}
            <div className="absolute left-8 top-8 md:left-12 md:top-10">
              <span className="rounded-lg bg-blue-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                {flipped ? "Answer" : "Question"}
              </span>
            </div>

            {/* Card Content */}
            <div className="flex min-h-[330px] flex-col items-center justify-center text-center md:min-h-[350px]">
              <div className="mb-7 text-5xl">
                {flipped ? "💡" : "🧠"}
              </div>

              <h2
                className={`max-w-3xl font-bold leading-relaxed ${
                  flipped
                    ? "text-xl text-blue-100 md:text-2xl"
                    : "text-2xl md:text-3xl"
                }`}
              >
                {flipped ? card.answer : card.question}
              </h2>

              <p className="mt-8 text-sm text-slate-500">
                Click the card to {flipped ? "see the question" : "reveal the answer"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={previousCard}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white sm:w-auto"
          >
            ← Previous
          </button>

          <button
            onClick={() => setFlipped(!flipped)}
            className="w-full rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
          >
            {flipped ? "Show Question" : "Show Answer"}
          </button>

          <button
            onClick={nextCard}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white sm:w-auto"
          >
            Next →
          </button>
        </div>

        {/* Extra Controls */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={shuffleCards}
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            🔀 Shuffle
          </button>

          <button
            onClick={restartCards}
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            🔄 Restart
          </button>
        </div>

        {/* Study Tips */}
        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold">
            Study Tips
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">🧠</div>

              <h4 className="font-semibold">
                Active Recall
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Try answering the question yourself before revealing the
                answer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">🔁</div>

              <h4 className="font-semibold">
                Repeat
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Review difficult concepts multiple times to improve
                retention.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 text-2xl">🎯</div>

              <h4 className="font-semibold">
                Stay Focused
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Study one subject at a time and avoid switching between
                topics too frequently.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/practice"
            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            📝 Practice Questions
          </Link>

          <Link
            href="/ai-notes"
            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            ✨ AI Notes
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            🏠 Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
