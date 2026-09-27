"use client";

import { useState } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function AITutorPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! 👋 I'm your Brain-Bank AI Tutor. Ask me anything you're studying, and I'll help explain it step by step.",
    },
  ]);

  const sendMessage = () => {
    const question = input.trim();

    if (!question) return;

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: question,
      },
      {
        role: "assistant",
        text: `I understand your question about "${question}". The AI Tutor backend isn't connected yet, but this chat interface is ready. We'll connect real AI responses in the next stage.`,
      },
    ]);

    setInput("");
  };

  const askExample = (question: string) => {
    setInput(question);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Dashboard
          </Link>

          <Link href="/" className="text-xl font-bold">
            🧠 Brain-Bank
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col px-6 py-8">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl">
            🤖
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            AI Tutor
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Ask questions, understand difficult concepts, and learn
            step by step with your personal AI tutor.
          </p>
        </div>

        {/* Example Questions */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <ExampleButton
            text="Explain Python loops"
            onClick={() => askExample("Explain Python loops")}
          />

          <ExampleButton
            text="What is DBMS?"
            onClick={() => askExample("What is DBMS?")}
          />

          <ExampleButton
            text="Explain machine learning"
            onClick={() => askExample("Explain machine learning")}
          />
        </div>

        {/* Chat */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="h-[500px] overflow-y-auto p-5 sm:p-6">
            <div className="space-y-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-2 font-semibold text-blue-400">
                        🤖 Brain-Bank AI
                      </div>
                    )}

                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask your AI Tutor anything..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <button
                onClick={sendMessage}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
              >
                Send
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-slate-600">
              Press Enter to send
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <TutorFeature
            icon="💡"
            title="Simple Explanations"
            description="Understand difficult topics in simple language."
          />

          <TutorFeature
            icon="📚"
            title="Study Help"
            description="Get help with your courses and concepts."
          />

          <TutorFeature
            icon="🎯"
            title="Exam Preparation"
            description="Practice important questions and concepts."
          />
        </div>
      </div>
    </main>
  );
}

function ExampleButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm text-slate-300 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
    >
      💬 {text}
    </button>
  );
}

function TutorFeature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}
