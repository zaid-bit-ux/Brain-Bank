"use client";

import { useState } from "react";
import Link from "next/link";

export default function AINotesPage() {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("Computer Science");
  const [length, setLength] = useState("Medium");
  const [notes, setNotes] = useState("");

  const generateNotes = () => {
    if (!topic.trim()) return;

    const generatedNotes = `
${topic}

1. Introduction
${topic} is an important concept in ${subject}. Understanding this topic helps students build a strong foundation for further learning.

2. Key Concepts

• Definition
${topic} refers to the main principles and ideas associated with this subject.

• Important Points
- Understand the basic terminology.
- Learn the main concepts and their relationships.
- Practice examples to improve understanding.
- Review the topic regularly.

3. Why is it Important?

Learning ${topic} helps students understand practical applications and prepares them for exams, assignments, and further studies.

4. Quick Revision

✓ Learn the definition.
✓ Understand the core concepts.
✓ Study important examples.
✓ Practice questions.
✓ Revise regularly.

5. Exam Tip

Focus on definitions, key points, examples, advantages, disadvantages, and applications when preparing ${topic} for an examination.
`;

    setNotes(generatedNotes.trim());
  };

  const copyNotes = async () => {
    if (!notes) return;

    await navigator.clipboard.writeText(notes);
    alert("Notes copied!");
  };

  const clearNotes = () => {
    setTopic("");
    setNotes("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-sm text-slate-400 hover:text-white"
          >
            ← Dashboard
          </Link>

          <Link href="/" className="text-xl font-bold">
            🧠 Brain-Bank
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl">
            📝
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            AI Notes
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Create organized study notes from any topic in seconds.
          </p>
        </div>

        {/* Generator */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Input panel */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold">
              Create Notes
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Enter the topic you want to study.
            </p>

            {/* Topic */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                Topic
              </label>

              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Example: Normalization in DBMS"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Subject
              </label>

              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option>Computer Science</option>
                <option>Programming</option>
                <option>Data Science</option>
                <option>Artificial Intelligence</option>
                <option>Database Management</option>
                <option>Computer Networks</option>
                <option>Cloud Computing</option>
              </select>
            </div>

            {/* Length */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Note Length
              </label>

              <div className="grid grid-cols-3 gap-2">
                {["Short", "Medium", "Detailed"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLength(option)}
                    className={`rounded-lg px-3 py-3 text-sm transition ${
                      length === option
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={generateNotes}
                className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
              >
                ✨ Generate Notes
              </button>

              <button
                onClick={clearNotes}
                className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                Clear
              </button>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Selected length: {length}
            </p>
          </section>

          {/* Notes panel */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Generated Notes
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your study notes will appear here.
                </p>
              </div>

              {notes && (
                <button
                  onClick={copyNotes}
                  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 hover:bg-white/[0.05] hover:text-white"
                >
                  📋 Copy
                </button>
              )}
            </div>

            <div className="mt-6 min-h-[500px] rounded-xl border border-white/10 bg-slate-900 p-5">

              {notes ? (
                <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-300">
                  {notes}
                </pre>
              ) : (
                <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                  <div className="text-5xl">
                    📚
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    No notes yet
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Enter a topic on the left and click
                    &quot;Generate Notes&quot; to create your study material.
                  </p>
                </div>
              )}

            </div>
          </section>

        </div>

        {/* Tips */}
        <section className="mt-8 grid gap-4 sm:grid-cols-3">

          <Tip
            icon="🎯"
            title="Exam Focused"
            text="Organize important concepts for revision."
          />

          <Tip
            icon="⚡"
            title="Save Time"
            text="Create structured notes faster."
          />

          <Tip
            icon="🧠"
            title="Better Revision"
            text="Keep your study material organized."
          />

        </section>

      </div>
    </main>
  );
}

function Tip({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}
