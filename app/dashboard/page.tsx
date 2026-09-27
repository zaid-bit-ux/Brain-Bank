"use client";

import { useState } from "react";

const courses = [
  {
    name: "Data Science",
    code: "DS",
    progress: 72,
    topics: "18 / 25 topics",
  },
  {
    name: "Cloud Computing",
    code: "CC",
    progress: 48,
    topics: "12 / 25 topics",
  },
  {
    name: "Computer Graphics",
    code: "CG",
    progress: 35,
    topics: "7 / 20 topics",
  },
];

const activities = [
  {
    icon: "📝",
    title: "Completed Data Science notes",
    time: "Today, 10:30 AM",
  },
  {
    icon: "🎯",
    title: "Completed 20 practice questions",
    time: "Yesterday, 6:20 PM",
  },
  {
    icon: "📚",
    title: "Started Cloud Computing",
    time: "Yesterday, 4:10 PM",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-gray-100 px-6">
          <div>
            <div className="text-xl font-bold tracking-tight">
              Brain-Bank
            </div>
            <div className="text-xs text-gray-500">
              AI Learning Platform
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main
          </p>

          <NavItem icon="🏠" label="Dashboard" active />
          <NavItem icon="📚" label="My Courses" />
          <NavItem icon="🤖" label="AI Tutor" />
          <NavItem icon="📝" label="AI Notes" />
          <NavItem icon="🎯" label="Practice" />
          <NavItem icon="🧠" label="Flashcards" />

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Planning
          </p>

          <NavItem icon="📅" label="Study Planner" />
          <NavItem icon="📊" label="Progress" />
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-gray-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
              Z
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Student</p>
              <p className="truncate text-xs text-gray-500">
                Free account
              </p>
            </div>

            <span className="ml-auto text-gray-400">⋮</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-gray-200 p-2.5 hover:bg-gray-50 md:hidden"
                aria-label="Open menu"
              >
                ☰
              </button>

              <div>
                <p className="text-sm text-gray-500">
                  Sunday, September 27, 2026
                </p>
                <h1 className="text-lg font-semibold">Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="rounded-xl border border-gray-200 p-2.5 hover:bg-gray-50"
                aria-label="Notifications"
              >
                🔔
              </button>

              <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white sm:flex">
                Z
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome */}
          <section className="rounded-3xl bg-gray-900 p-7 text-white sm:p-9">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-gray-400">
                Welcome back 👋
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to keep learning?
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Continue where you left off or use Brain-Bank to plan your
                next study session.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">
                  Continue Learning →
                </button>

                <button className="rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
                  Ask AI Tutor
                </button>
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section className="mt-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Quick Actions</h2>
              <p className="mt-1 text-sm text-gray-500">
                Jump directly into your study tools.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <QuickAction
                icon="🤖"
                title="Ask AI Tutor"
                description="Get help with a topic"
              />

              <QuickAction
                icon="📝"
                title="Generate Notes"
                description="Create study material"
              />

              <QuickAction
                icon="🎯"
                title="Practice"
                description="Test your knowledge"
              />

              <QuickAction
                icon="📅"
                title="Study Planner"
                description="Plan your study time"
              />
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon="📚"
              label="Courses"
              value="3"
              detail="Active courses"
            />

            <StatCard
              icon="✅"
              label="Topics Completed"
              value="37"
              detail="This semester"
            />

            <StatCard
              icon="🔥"
              label="Study Streak"
              value="7"
              detail="Days"
            />

            <StatCard
              icon="🎯"
              label="Practice Score"
              value="82%"
              detail="Average"
            />
          </section>

          {/* Courses + Study plan */}
          <section className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Courses */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">My Courses</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Continue learning your subjects.
                  </p>
                </div>

                <button className="text-sm font-semibold text-gray-700 hover:text-black">
                  View all →
                </button>
              </div>

              <div className="mt-6 space-y-5">
                {courses.map((course) => (
                  <CourseCard
                    key={course.name}
                    name={course.name}
                    code={course.code}
                    progress={course.progress}
                    topics={course.topics}
                  />
                ))}
              </div>
            </div>

            {/* Today's plan */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div>
                <h2 className="text-xl font-bold">Today&apos;s Plan</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Your study schedule
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <StudyTask
                  time="10:00 AM"
                  subject="Data Science"
                  task="Time Series Analysis"
                  completed
                />

                <StudyTask
                  time="2:00 PM"
                  subject="Cloud Computing"
                  task="Cloud Architecture"
                />

                <StudyTask
                  time="7:00 PM"
                  subject="Computer Graphics"
                  task="Transformation"
                />
              </div>

              <button className="mt-6 w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold hover:bg-gray-50">
                View Full Planner
              </button>
            </div>
          </section>

          {/* Bottom section */}
          <section className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Progress */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold">Overall Progress</h2>
              <p className="mt-1 text-sm text-gray-500">
                Your semester progress
              </p>

              <div className="mt-7 flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border-[18px] border-gray-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold">52%</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800">
                View Progress
              </button>
            </div>

            {/* Recent activity */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Recent Activity</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your latest learning activity
                  </p>
                </div>

                <button className="text-sm font-semibold text-gray-700 hover:text-black">
                  View all →
                </button>
              </div>

              <div className="mt-6 divide-y divide-gray-100">
                {activities.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-lg">
                      {activity.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="font-medium">{activity.title}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI banner */}
          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  <h2 className="text-xl font-bold">
                    Need help with something?
                  </h2>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                  Ask Brain-Bank&apos;s AI Tutor to explain a concept,
                  summarize a topic, create questions, or help you prepare
                  for your exam.
                </p>
              </div>

              <button className="shrink-0 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
                Open AI Tutor →
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* Navigation item */

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-gray-900 text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

/* Quick action */

function QuickAction({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <button className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-gray-500">{description}</p>

      <div className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-black">
        Open →
      </div>
    </button>
  );
}

/* Statistics */

function StatCard({
  icon,
  label,
  value,
  detail,
}: {
  icon: string;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
          {icon}
        </div>

        <span className="text-xs text-gray-400">{detail}</span>
      </div>

      <p className="mt-5 text-sm text-gray-500">{label}</p>

      <p className="mt-1 text-3xl font-bold">{value}</p>
    </div>
  );
}

/* Course card */

function CourseCard({
  name,
  code,
  progress,
  topics,
}: {
  name: string;
  code: string;
  progress: number;
  topics: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
          {code}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="truncate font-semibold">{name}</h3>

            <span className="shrink-0 text-sm font-semibold">
              {progress}%
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500">{topics}</p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gray-900"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Study task */

function StudyTask({
  time,
  subject,
  task,
  completed = false,
}: {
  time: string;
  subject: string;
  task: string;
  completed?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          completed
            ? "border-gray-900 bg-gray-900 text-xs text-white"
            : "border-gray-300"
        }`}
      >
        {completed && "✓"}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-400">{time}</p>

        <p
          className={`mt-1 font-medium ${
            completed ? "text-gray-400 line-through" : "text-gray-900"
          }`}
        >
          {task}
        </p>

        <p className="mt-1 text-xs text-gray-500">{subject}</p>
      </div>
    </div>
  );
}
