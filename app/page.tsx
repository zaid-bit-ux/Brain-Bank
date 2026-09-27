export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            StudyPilot
          </div>

          <div className="hidden gap-8 text-sm text-gray-600 md:flex">
            <a href="#features" className="hover:text-black">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-black">
              How it works
            </a>

            <a href="#about" className="hover:text-black">
              About
            </a>
          </div>

          <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
            Your AI-powered learning companion
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            Study smarter.
            <br />
            <span className="text-gray-500">Learn better.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            StudyPilot helps you understand your syllabus, create study
            material, practice questions, and track your learning with AI.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-black px-7 py-3.5 font-medium text-white hover:bg-gray-800">
              Start Learning
            </button>

            <a
              href="#features"
              className="rounded-xl border border-gray-200 px-7 py-3.5 font-medium text-gray-800 hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to learn
            </h2>

            <p className="mt-4 text-gray-600">
              One platform for understanding, practicing, planning, and
              improving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon="🤖"
              title="AI Tutor"
              description="Ask questions and get explanations tailored to your learning level."
            />

            <Feature
              icon="📚"
              title="Smart Notes"
              description="Turn topics into structured, easy-to-understand study notes."
            />

            <Feature
              icon="📝"
              title="Practice"
              description="Generate MCQs and practice questions for your subjects."
            />

            <Feature
              icon="🧠"
              title="Flashcards"
              description="Review important concepts with quick interactive flashcards."
            />

            <Feature
              icon="📅"
              title="Study Planner"
              description="Create a study plan based on your subjects and available time."
            />

            <Feature
              icon="📈"
              title="Progress Tracking"
              description="See your learning progress and identify topics that need more work."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Your learning journey
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Step
            number="01"
            title="Choose your subject"
            description="Select your course, semester, and subject."
          />

          <Step
            number="02"
            title="Learn with AI"
            description="Study notes, explanations, questions, and flashcards are generated around your topics."
          />

          <Step
            number="03"
            title="Track your progress"
            description="Practice regularly and monitor what you have mastered."
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="about"
        className="bg-black px-6 py-24 text-center text-white"
      >
        <h2 className="text-3xl font-bold md:text-5xl">
          Your studies. Your AI copilot.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          StudyPilot is being built to make learning more organized,
          personalized, and effective.
        </p>

        <button className="mt-8 rounded-xl bg-white px-7 py-3.5 font-medium text-black hover:bg-gray-200">
          Start with StudyPilot
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © 2026 StudyPilot. Built for learners.
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
    <div className="rounded-2xl border border-gray-200 bg-white p-7">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-8">
      <div className="text-sm font-semibold text-gray-400">{number}</div>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </div>
  );
}
