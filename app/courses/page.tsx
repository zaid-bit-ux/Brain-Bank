"use client";

import { useState } from "react";
import Link from "next/link";

const courses = [
  {
    title: "Python Programming",
    category: "Programming",
    icon: "🐍",
    progress: 78,
    lessons: 24,
    completed: 19,
    level: "Beginner",
  },
  {
    title: "Database Management",
    category: "Computer Science",
    icon: "🗄️",
    progress: 62,
    lessons: 20,
    completed: 12,
    level: "Intermediate",
  },
  {
    title: "Data Science",
    category: "Data & AI",
    icon: "📊",
    progress: 45,
    lessons: 30,
    completed: 14,
    level: "Intermediate",
  },
  {
    title: "Machine Learning",
    category: "Artificial Intelligence",
    icon: "🤖",
    progress: 32,
    lessons: 28,
    completed: 9,
    level: "Intermediate",
  },
  {
    title: "Computer Networks",
    category: "Computer Science",
    icon: "🌐",
    progress: 25,
    lessons: 22,
    completed: 6,
    level: "Beginner",
  },
  {
    title: "Cloud Computing",
    category: "Technology",
    icon: "☁️",
    progress: 18,
    lessons: 25,
    completed: 4,
    level: "Beginner",
  },
];

const categories = ["All", "Programming", "Computer Science", "Data & AI", "Technology"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to Dashboard
          </Link>

          <div className="text-xl font-bold">🧠 Brain-Bank</div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Learning
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              My Courses
            </h1>

            <p className="mt-3 text-slate-400">
              Continue learning and track your progress.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500">
            + Add Course
          </button>
        </div>

        {/* Search */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/[0.05] text-slate-400 hover:bg-white/[0.10] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course count */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Your Courses
          </h2>

          <span className="text-sm text-slate-500">
            {filteredCourses.length} courses
          </span>
        </div>

        {/* Courses */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              {/* Icon */}
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                  {course.icon}
                </div>

                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-400">
                  {course.level}
                </span>
              </div>

              {/* Course information */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-400">
                {course.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {course.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {course.completed} of {course.lessons} lessons completed
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="font-semibold text-white">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-semibold transition hover:bg-blue-600 hover:text-white">
                Continue Learning →
              </button>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <div className="text-4xl">🔎</div>

            <h3 className="mt-4 text-xl font-semibold">
              No courses found
            </h3>

            <p className="mt-2 text-slate-500">
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
