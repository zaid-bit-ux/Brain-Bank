import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold">
            🧠 Brain-Bank
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🚀 Your AI-powered learning companion
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Learn smarter with{" "}
            <span className="text-blue-400">Brain-Bank</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Your personal study platform for AI-powered notes, courses,
            practice, flashcards, study planning, and progress tracking.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Open Dashboard →
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-white/10 px-7 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Everything you need
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            One place for your entire study journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Brain-Bank brings your learning tools together in one simple
            platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon="📚"
            title="My Courses"
            description="Organize your subjects, courses, and learning materials."
          />

          <Feature
            icon="🤖"
            title="AI Tutor"
            description="Ask questions and get help while studying."
          />

          <Feature
            icon="📝"
            title="AI Notes"
            description="Create clear and useful study notes faster."
          />

          <Feature
            icon="🧠"
            title="Flashcards"
            description="Remember important concepts with active recall."
          />

          <Feature
            icon="🎯"
            title="Practice"
            description="Test your knowledge with practice questions."
          />

          <Feature
            icon="📅"
            title="Study Planner"
            description="Plan your study sessions and stay consistent."
          />

          <Feature
            icon="📊"
            title="Progress"
            description="Track your learning progress and achievements."
          />

          <Feature
            icon="⚡"
            title="Smart Learning"
            description="Use AI-powered tools to make studying more efficient."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-10 text-center sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Open your Brain-Bank dashboard and start building your learning
            system.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
          >
            Go to Brain-Bank →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Brain-Bank. Learn. Practice. Grow.
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
      <div className="mb-4 text-3xl">{icon}</div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}
