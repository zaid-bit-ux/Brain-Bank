"use client";

import Link from "next/link";

const courses = [
  {
    title: "Python Programming",
    category: "Programming",
    progress: 78,
    icon: "🐍",
  },
  {
    title: "Database Management",
    category: "Computer Science",
    progress: 62,
    icon: "🗄️",
  },
  {
    title: "Data Science",
    category: "Data & AI",
    progress: 45,
    icon: "📊",
  },
];

const activities = [
  {
    icon: "🐍",
    title: "Completed Python Functions",
    time: "Today, 10:30 AM",
  },
  {
    icon: "📝",
    title: "Created Data Science notes",
    time: "Yesterday, 6:20 PM",
  },
  {
    icon: "🎯",
    title: "Completed 20 practice questions",
    time: "Yesterday, 4:10 PM",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-white/10 bg-slate-900/80 md:block">
          <div className="sticky top-0 flex h-screen flex-col">

            {/* Logo */}
            <div className="border-b border-white/10 px-6 py-6">
              <Link href="/" className="text-2xl font-bold">
                🧠 Brain-Bank
              </Link>

              <p className="mt-1 text-xs text-slate-500">
                AI Learning Platform
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">

              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Main Menu
              </p>

              <div className="space-y-1">

                <NavItem
                  href="/dashboard"
                  icon="🏠"
                  label="Dashboard"
                  active
                />

                <NavItem
                  href="/courses"
                  icon="📚"
                  label="My Courses"
                />

                <NavItem
                  href="/ai-tutor"
                  icon="🤖"
                  label="AI Tutor"
                />

                <NavItem
                  href="/ai-notes"
                  icon="📝"
                  label="AI Notes"
                />

                <NavItem
                  href="/practice"
                  icon="🎯"
                  label="Practice"
                />

                <NavItem
                  href="/flashcards"
                  icon="🧠"
                  label="Flashcards"
                />

                <NavItem
                  href="/planner"
                  icon="📅"
                  label="Study Planner"
                />

                <NavItem
                  href="/progress"
                  icon="📊"
                  label="Progress"
                />

              </div>
            </nav>

            {/* Bottom */}
            <div className="border-t border-white/10 p-4">
              <div className="rounded-xl bg-blue-500/10 p-4">
                <div className="text-sm font-semibold">
                  🚀 Keep learning!
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Consistency is the key to reaching your goals.
                </p>
              </div>

              <Link
                href="/"
                className="mt-4 block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">

          {/* Top bar */}
          <header className="border-b border-white/10 bg-slate-950/80">
            <div className="flex items-center justify-between px-6 py-5">

              <div>
                <p className="text-sm text-slate-500">
                  Wednesday, September 24, 2026
                </p>

                <h1 className="mt-1 text-xl font-bold">
                  Dashboard
                </h1>
              </div>

              <div className="flex items-center gap-4">

                <button className="relative rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white">
                  🔔
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-500" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                    Z
                  </div>

                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold">
                      Student
                    </p>

                    <p className="text-xs text-slate-500">
                      BCA Student
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-6 py-8">

            {/* Welcome */}
            <section className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-8">

              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-blue-400">
                  👋 Welcome back!
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Ready to continue learning?
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Keep building your knowledge with Brain-Bank.
                  Continue your courses, practice concepts, and use AI
                  tools to study smarter.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  <Link
                    href="/courses"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                  >
                    Continue Learning →
                  </Link>

                  <Link
                    href="/ai-tutor"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                  >
                    Ask AI Tutor
                  </Link>

                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mt-8">

              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  Quick Actions
                </h2>

                <span className="text-sm text-slate-500">
                  Study tools
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <QuickAction
                  href="/ai-tutor"
                  icon="🤖"
                  title="AI Tutor"
                  description="Ask questions"
                />

                <QuickAction
                  href="/ai-notes"
                  icon="📝"
                  title="AI Notes"
                  description="Create study notes"
                />

                <QuickAction
                  href="/practice"
                  icon="🎯"
                  title="Practice"
                  description="Test yourself"
                />

                <QuickAction
                  href="/flashcards"
                  icon="🧠"
                  title="Flashcards"
                  description="Review concepts"
                />

              </div>
            </section>

            {/* Statistics */}
            <section className="mt-8">

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <StatCard
                  icon="📚"
                  title="Courses"
                  value="6"
                  subtitle="Active courses"
                />

                <StatCard
                  icon="🔥"
                  title="Study Streak"
                  value="7 days"
                  subtitle="Keep it going!"
                />

                <StatCard
                  icon="⏱️"
                  title="Study Time"
                  value="24.5h"
                  subtitle="This month"
                />

                <StatCard
                  icon="🎯"
                  title="Questions"
                  value="248"
                  subtitle="Completed"
                />

              </div>
            </section>

            {/* Courses + Today's Plan */}
            <section className="mt-8 grid gap-8 lg:grid-cols-3">

              {/* Courses */}
              <div className="lg:col-span-2">

                <div className="mb-4 flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-bold">
                      My Courses
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Continue where you left off
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    View all →
                  </Link>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  {courses.map((course) => (
                    <CourseCard
                      key={course.title}
                      course={course}
                    />
                  ))}

                </div>
              </div>

              {/* Today's Plan */}
              <div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold">
                    Today&apos;s Plan
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your study schedule
                  </p>
                </div>

                <div className="space-y-3">

                  <StudyTask
                    time="09:00 AM"
                    title="Python Practice"
                    duration="45 min"
                    completed
                  />

                  <StudyTask
                    time="11:00 AM"
                    title="Data Science"
                    duration="60 min"
                  />

                  <StudyTask
                    time="03:00 PM"
                    title="DBMS Revision"
                    duration="45 min"
                  />

                  <StudyTask
                    time="07:00 PM"
                    title="Practice Questions"
                    duration="30 min"
                  />

                </div>

              </div>
            </section>

            {/* Overall Progress */}
            <section className="mt-8">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                  <div>
                    <h2 className="text-xl font-bold">
                      Overall Progress
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Keep working toward your learning goals.
                    </p>
                  </div>

                  <div className="text-3xl font-bold text-blue-400">
                    58%
                  </div>

                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">

                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: "58%" }}
                  />

                </div>

                <div className="mt-3 flex justify-between text-xs text-slate-500">
                  <span>Learning progress</span>
                  <span>58% completed</span>
                </div>

              </div>

            </section>

            {/* Recent Activity */}
            <section className="mt-8">

              <div className="mb-4">
                <h2 className="text-xl font-bold">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your latest learning activity
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

                {activities.map((activity, index) => (
                  <div
                    key={activity.title}
                    className={`flex items-center gap-4 p-5 ${
                      index !== activities.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                      {activity.icon}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {activity.time}
                      </p>
                    </div>

                    <span className="text-green-400">
                      ✓
                    </span>

                  </div>
                ))}

              </div>

            </section>

            {/* AI Tutor Banner */}
            <section className="mt-8">

              <div className="rounded-2xl border border-purple-400/20 bg-purple-500/10 p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-2xl">
                      🤖
                    </div>

                    <div>
                      <h2 className="font-bold">
                        Need help with something?
                      </h2>

                      <p className="mt-1 text-sm text-slate-400">
                        Ask Brain-Bank AI Tutor about any topic you&apos;re studying.
                      </p>
                    </div>

                  </div>

                  <Link
                    href="/ai-tutor"
                    className="whitespace-nowrap rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold transition hover:bg-purple-500"
                  >
                    Ask AI →
                  </Link>

                </div>

              </div>

            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

/* ---------------- Components ---------------- */

function NavItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      <span className="text-lg">{icon}</span>

      <span>{label}</span>
    </Link>
  );
}

function QuickAction({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </Link>
  );
}

function StatCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="flex items-center justify-between">

        <span className="text-2xl">
          {icon}
        </span>

        <span className="text-xs text-slate-500">
          {title}
        </span>

      </div>

      <div className="mt-5 text-2xl font-bold">
        {value}
      </div>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}

function CourseCard({
  course,
}: {
  course: {
    title: string;
    category: string;
    progress: number;
    icon: string;
  };
}) {
  return (
    <Link
      href="/courses"
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
    >

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
          {course.icon}
        </div>

        <span className="text-xs font-semibold text-blue-400">
          {course.progress}%
        </span>

      </div>

      <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">
        {course.category}
      </p>

      <h3 className="mt-1 font-semibold">
        {course.title}
      </h3>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${course.progress}%` }}
        />

      </div>

      <p className="mt-2 text-xs text-slate-500">
        Continue learning →
      </p>

    </Link>
  );
}

function StudyTask({
  time,
  title,
  duration,
  completed = false,
}: {
  time: string;
  title: string;
  duration: string;
  completed?: boolean;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">

      <div className="w-16 shrink-0">
        <p className="text-xs font-semibold text-blue-400">
          {time}
        </p>
      </div>

      <div className="flex-1">

        <div className="flex items-center justify-between gap-2">

          <h3
            className={`text-sm font-semibold ${
              completed
                ? "text-slate-500 line-through"
                : "text-white"
            }`}
          >
            {title}
          </h3>

          {completed && (
            <span className="text-green-400">
              ✓
            </span>
          )}

        </div>

        <p className="mt-1 text-xs text-slate-500">
          {duration}
        </p>

      </div>

    </div>
  );
}
