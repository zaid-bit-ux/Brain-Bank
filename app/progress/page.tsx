"use client";

import Link from "next/link";
import { useState } from "react";

const courses = [
  { name: "Python Programming", progress: 78, color: "bg-blue-500" },
  { name: "Data Science", progress: 62, color: "bg-purple-500" },
  { name: "DBMS", progress: 55, color: "bg-green-500" },
  { name: "Computer Networks", progress: 42, color: "bg-orange-500" },
];

const weeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.1 },
  { day: "Fri", hours: 2.7 },
  { day: "Sat", hours: 3.8 },
  { day: "Sun", hours: 1.5 },
];

const quizResults = [
  {
    subject: "Python",
    topic: "Functions & Loops",
    score: 88,
    date: "Today",
  },
  {
    subject: "Data Science",
    topic: "Introduction to Data Science",
    score: 82,
    date: "Yesterday",
  },
  {
    subject: "DBMS",
    topic: "SQL Queries",
    score: 76,
    date: "2 days ago",
  },
  {
    subject: "Computer Networks",
    topic: "Network Basics",
    score: 71,
    date: "3 days ago",
  },
];

const achievements = [
  {
    icon: "🔥",
    title: "7 Day Streak",
    description: "Studied for 7 days in a row",
  },
  {
    icon: "🧠",
    title: "Quiz Master",
    description: "Completed 20 practice questions",
  },
  {
    icon: "📚",
    title: "Fast Learner",
    description: "Completed 3 course topics",
  },
  {
    icon: "⭐",
    title: "High Scorer",
    description: "Scored above 80% in a quiz",
  },
];

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Week");

  const totalHours = weeklyActivity.reduce(
    (total, item) => total + item.hours,
    0
  );

  const averageScore = Math.round(
    quizResults.reduce((total, item) => total + item.score, 0) /
      quizResults.length
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
              B
            </div>

            <div>
              <h1 className="text-lg font-bold">Brain-Bank</h1>
              <p className="text-xs text-slate-400">Progress Tracking</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
            >
              Dashboard
            </Link>

            <Link
              href="/planner"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
            >
              Study Planner
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-400">
            YOUR LEARNING JOURNEY
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Progress Tracking 📊
          </h2>

          <p className="mt-2 max-w-2xl text-slate-400">
            Track your learning progress, practice performance, study time,
            and achievements in one place.
          </p>
        </div>

        {/* Overview Cards */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Weekly Study Time
              </span>
              <span className="text-2xl">⏱️</span>
            </div>

            <p className="text-3xl font-bold">{totalHours.toFixed(1)}h</p>

            <p className="mt-2 text-sm text-green-400">
              +12% from last week
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Average Quiz Score
              </span>
              <span className="text-2xl">📝</span>
            </div>

            <p className="text-3xl font-bold">{averageScore}%</p>

            <p className="mt-2 text-sm text-green-400">
              Great performance
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Current Streak
              </span>
              <span className="text-2xl">🔥</span>
            </div>

            <p className="text-3xl font-bold">7 Days</p>

            <p className="mt-2 text-sm text-orange-400">
              Keep it going!
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Completed Quizzes
              </span>
              <span className="text-2xl">🏆</span>
            </div>

            <p className="text-3xl font-bold">20</p>

            <p className="mt-2 text-sm text-blue-400">
              Keep practicing
            </p>
          </div>
        </section>

        {/* Course Progress */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Course Progress</h3>
              <p className="mt-1 text-sm text-slate-400">
                Your current progress across all courses.
              </p>
            </div>

            <Link
              href="/courses"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              View Courses →
            </Link>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">{course.name}</span>

                  <span className="text-sm text-slate-400">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Activity */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">Weekly Study Activity</h3>

              <p className="mt-1 text-sm text-slate-400">
                Hours spent learning during the week.
              </p>
            </div>

            <div className="flex rounded-lg bg-slate-800 p-1">
              {["Week", "Month"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`rounded-md px-4 py-2 text-sm ${
                    selectedPeriod === period
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="flex h-72 items-end justify-between gap-3 border-b border-slate-800 px-2 pt-6">
            {weeklyActivity.map((item) => {
              const height = (item.hours / 5) * 100;

              return (
                <div
                  key={item.day}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div className="mb-2 text-xs text-slate-400">
                    {item.hours}h
                  </div>

                  <div
                    className="w-full max-w-12 rounded-t-lg bg-blue-600 transition-all hover:bg-blue-500"
                    style={{ height: `${height}%` }}
                    title={`${item.hours} hours`}
                  />

                  <div className="mt-3 text-xs text-slate-500">
                    {item.day}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Two Column Section */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {/* Quiz Results */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Recent Quiz Results</h3>

              <p className="mt-1 text-sm text-slate-400">
                Your latest practice performance.
              </p>
            </div>

            <div className="space-y-4">
              {quizResults.map((quiz) => (
                <div
                  key={`${quiz.subject}-${quiz.topic}`}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{quiz.subject}</p>

                      <p className="mt-1 text-sm text-slate-400">
                        {quiz.topic}
                      </p>

                      <p className="mt-2 text-xs text-slate-500">
                        {quiz.date}
                      </p>
                    </div>

                    <div
                      className={`text-xl font-bold ${
                        quiz.score >= 80
                          ? "text-green-400"
                          : quiz.score >= 60
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {quiz.score}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/practice"
              className="mt-5 block text-center text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Practice More →
            </Link>
          </section>

          {/* Achievements */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Achievements</h3>

              <p className="mt-1 text-sm text-slate-400">
                Milestones you have unlocked.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="mb-3 text-3xl">
                    {achievement.icon}
                  </div>

                  <h4 className="font-semibold">
                    {achievement.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Subject Breakdown */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Subject Breakdown</h3>

            <p className="mt-1 text-sm text-slate-400">
              See where you are spending your learning time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-blue-500/10 p-5">
              <p className="text-sm text-blue-400">Python</p>
              <p className="mt-2 text-2xl font-bold">35%</p>
              <p className="mt-1 text-xs text-slate-500">
                Main focus
              </p>
            </div>

            <div className="rounded-xl bg-purple-500/10 p-5">
              <p className="text-sm text-purple-400">Data Science</p>
              <p className="mt-2 text-2xl font-bold">28%</p>
              <p className="mt-1 text-xs text-slate-500">
                Growing steadily
              </p>
            </div>

            <div className="rounded-xl bg-green-500/10 p-5">
              <p className="text-sm text-green-400">DBMS</p>
              <p className="mt-2 text-2xl font-bold">22%</p>
              <p className="mt-1 text-xs text-slate-500">
                Regular practice
              </p>
            </div>

            <div className="rounded-xl bg-orange-500/10 p-5">
              <p className="text-sm text-orange-400">
                Computer Networks
              </p>
              <p className="mt-2 text-2xl font-bold">15%</p>
              <p className="mt-1 text-xs text-slate-500">
                Needs more study
              </p>
            </div>
          </div>
        </section>

        {/* Learning Tips */}
        <section className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">
                Keep Improving 🚀
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                You are making steady progress. Keep your study streak
                active, practice questions regularly, and use the planner
                to organize your next study sessions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/planner"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
              >
                Open Planner
              </Link>

              <Link
                href="/flashcards"
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-800"
              >
                Flashcards
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-slate-600">
          Brain-Bank Progress Tracking • Frontend demo data
        </div>
      </div>
    </main>
  );
}
