"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Task = {
  id: number;
  title: string;
  subject: string;
  date: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Revise Python functions",
    subject: "Python",
    date: "Today",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Practice SQL queries",
    subject: "DBMS",
    date: "Today",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Read Data Science notes",
    subject: "Data Science",
    date: "Tomorrow",
    priority: "Medium",
    completed: true,
  },
];

const subjects = [
  "Python",
  "Data Science",
  "DBMS",
  "Computer Networks",
  "Computer Graphics",
  "Other",
];

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Python");
  const [date, setDate] = useState("Today");
  const [priority, setPriority] =
    useState<"Low" | "Medium" | "High">("Medium");

  const completedTasks = tasks.filter((task) => task.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const todayTasks = tasks.filter((task) => task.date === "Today");

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High" && !task.completed
  );

  const sortedTasks = useMemo(() => {
    const priorityOrder = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    return [...tasks].sort((a, b) => {
      if (a.completed !== b.completed) {
        return Number(a.completed) - Number(b.completed);
      }

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }, [tasks]);

  const addTask = () => {
    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      subject,
      date,
      priority,
      completed: false,
    };

    setTasks((previous) => [newTask, ...previous]);

    setTitle("");
    setSubject("Python");
    setDate("Today");
    setPriority("Medium");
    setShowForm(false);
  };

  const toggleTask = (id: number) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  };

  const clearCompleted = () => {
    setTasks((previous) =>
      previous.filter((task) => !task.completed)
    );
  };

  const getPriorityClass = (taskPriority: Task["priority"]) => {
    if (taskPriority === "High") {
      return "bg-red-500/10 text-red-400 border-red-500/20";
    }

    if (taskPriority === "Medium") {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    return "bg-green-500/10 text-green-400 border-green-500/20";
  };

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
              <h1 className="text-xl font-bold">
                Brain-Bank
              </h1>

              <p className="text-xs text-slate-400">
                Study Planner
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

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
              Study Planner
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Plan your study day
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Organize your tasks, stay consistent, and keep track
              of your study progress.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            + Add Task
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Total Tasks
            </p>

            <p className="mt-2 text-3xl font-bold">
              {tasks.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              All planned tasks
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Today
            </p>

            <p className="mt-2 text-3xl font-bold">
              {todayTasks.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Tasks scheduled today
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-400">
              {completedTasks}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Tasks completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              High Priority
            </p>

            <p className="mt-2 text-3xl font-bold text-red-400">
              {highPriorityTasks.length}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Need your attention
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                Overall Progress
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Keep completing your tasks to reach your study goal.
              </p>
            </div>

            <span className="text-2xl font-bold text-blue-400">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Add Task Form */}
        {showForm && (
          <div className="mb-8 rounded-2xl border border-blue-500/30 bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Add Study Task
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Create a task for your study plan.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-xl text-slate-400 transition hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Task name
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      addTask();
                    }
                  }}
                  placeholder="Example: Revise DBMS Unit 2"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <select
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  {subjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Date
                </label>

                <select
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Priority
                </label>

                <select
                  value={priority}
                  onChange={(event) =>
                    setPriority(
                      event.target.value as
                        | "Low"
                        | "Medium"
                        | "High"
                    )
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={addTask}
                  disabled={!title.trim()}
                  className={`w-full rounded-xl px-5 py-3 font-semibold transition ${
                    title.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "cursor-not-allowed bg-slate-800 text-slate-500"
                  }`}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-800 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold">
                My Study Tasks
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Complete your tasks and build a consistent study habit.
              </p>
            </div>

            {completedTasks > 0 && (
              <button
                onClick={clearCompleted}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                Clear Completed
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-800">
            {sortedTasks.length === 0 ? (
              <div className="p-10 text-center">
                <div className="mb-4 text-5xl">
                  📚
                </div>

                <h3 className="text-lg font-semibold">
                  No study tasks
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Add your first task to start planning.
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                  + Add Your First Task
                </button>
              </div>
            ) : (
              sortedTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-5 transition ${
                    task.completed
                      ? "bg-slate-950/40"
                      : "hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition ${
                        task.completed
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-slate-600 hover:border-blue-500"
                      }`}
                      aria-label={
                        task.completed
                          ? "Mark task incomplete"
                          : "Mark task complete"
                      }
                    >
                      {task.completed ? "✓" : ""}
                    </button>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                        <div>
                          <h4
                            className={`font-semibold ${
                              task.completed
                                ? "text-slate-500 line-through"
                                : "text-white"
                            }`}
                          >
                            {task.title}
                          </h4>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                              {task.subject}
                            </span>

                            <span className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400">
                              📅 {task.date}
                            </span>

                            <span
                              className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${getPriorityClass(
                                task.priority
                              )}`}
                            >
                              {task.priority} Priority
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteTask(task.id)}
                          className="self-start rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                          aria-label="Delete task"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-3 text-2xl">
              🎯
            </div>

            <h3 className="font-semibold">
              Set clear goals
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Break large subjects into smaller tasks that are easier
              to complete.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-3 text-2xl">
              ⏱️
            </div>

            <h3 className="font-semibold">
              Study consistently
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Regular study sessions can help you maintain your
              learning progress.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-3 text-2xl">
              ✅
            </div>

            <h3 className="font-semibold">
              Track completion
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Mark tasks complete as you finish them and monitor
              your overall progress.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/practice"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            📝 Practice
          </Link>

          <Link
            href="/flashcards"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            🧠 Flashcards
          </Link>

          <Link
            href="/ai-notes"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            ✨ AI Notes
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            🏠 Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
