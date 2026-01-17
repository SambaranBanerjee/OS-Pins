"use client";

import { useEffect, useState } from "react";

const navLinks = ["Product", "Integrations", "Pricing", "Docs"];

const quickStats = [
  { label: "Pins issued", value: "1.8M" },
  { label: "Communities", value: "9,300" },
  { label: "Embeds live", value: "6,200" }
];

const featureGrid = [
  {
    title: "Issue in seconds",
    description: "Create, mint, and ship badges by link, QR, API, or webhook.",
    tone: "from-cyan-400/40 via-transparent to-transparent"
  },
  {
    title: "Realtime wall",
    description: "A live dashboard that updates everywhere you embed it.",
    tone: "from-amber-300/40 via-transparent to-transparent"
  },
  {
    title: "Pixel+glass",
    description: "Retro charm layered with soft glass UI and neon gradients.",
    tone: "from-fuchsia-400/40 via-transparent to-transparent"
  }
];

const orbitBadges = [
  { id: 1, label: "Core Contributor", accent: "from-emerald-400 to-cyan-400" },
  { id: 2, label: "Release Hero", accent: "from-fuchsia-400 to-indigo-400" },
  { id: 3, label: "Community Star", accent: "from-amber-300 to-orange-500" },
  { id: 4, label: "Mentor Wave", accent: "from-sky-400 to-violet-400" }
];


export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("os-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("os-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),rgba(5,7,11,0)_70%)] blur-[10px]" />
          <div className="absolute -left-20 top-1/4 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.35),rgba(5,7,11,0)_70%)] blur-[30px]" />
          <div className="absolute right-0 top-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.28),rgba(5,7,11,0)_70%)] blur-[20px]" />
          <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.2),rgba(5,7,11,0)_70%)] blur-[24px]" />
          <div className="absolute inset-0 soft-grid" />
          <div className="absolute inset-0 scanline" />
          <div className="absolute left-16 top-20 h-2.5 w-2.5 rounded-full bg-white/70 shadow-lg shadow-cyan-300/70 twinkle" />
          <div className="absolute right-36 top-28 h-2 w-2 rounded-full bg-fuchsia-300/80 shadow-lg shadow-fuchsia-400/70 float-fast" />
          <div className="absolute bottom-32 left-1/4 h-3 w-3 rounded-full bg-emerald-300/70 shadow-lg shadow-emerald-300/60 float-medium" />
          <div className="absolute right-12 bottom-24 h-2.5 w-2.5 rounded-full bg-amber-200/70 shadow-lg shadow-amber-300/60 float-slow" />
        </div>

        <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10">
          <nav className="flex w-full items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3 text-base font-semibold tracking-wide">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--surface-strong)] text-lg">◎</span>
              OS-Pins
            </div>
            <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:flex">
              {navLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)] shadow-lg shadow-indigo-500/20 transition hover:shadow-indigo-500/40"
              >
                Sign in
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-[var(--text)] shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                {theme === "dark" ? "☾" : "☼"}
              </button>
            </div>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold leading-none tracking-[0.12em] text-[var(--text)] sm:text-6xl lg:text-7xl">
                OS•PINS
              </h1>
              <p className="text-sm uppercase tracking-[0.5em] text-[var(--muted)]">
                Free alternative for badges + stickers
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-indigo-500/30">
                <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),rgba(0,0,0,0)_70%)] blur-[24px]" />
                <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.35),rgba(0,0,0,0)_70%)] blur-[24px]" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    <span>Hero avatar</span>
                    <span>OS-Pins</span>
                  </div>
                  <div className="relative mx-auto grid h-52 w-52 place-items-center">
                    <div className="absolute h-52 w-52 rounded-full border border-[var(--border)] bg-white/20 animate-spin-slow" />
                    <div className="absolute h-36 w-36 rounded-full border border-[var(--border)] bg-white/10 animate-spin-reverse" />
                    <div className="relative h-28 w-28 rounded-[32px] bg-gradient-to-br from-[var(--accent)] via-sky-400 to-[var(--accent-2)] shadow-2xl shadow-indigo-500/40" />
                    <div className="absolute bottom-2 text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">orbital</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {orbitBadges.map((badge) => (
                      <div
                        key={badge.id}
                        className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3"
                      >
                        <div
                          className={`absolute inset-0 opacity-40 blur-2xl transition duration-500 group-hover:opacity-80 bg-gradient-to-br ${badge.accent}`}
                        />
                        <div className="relative text-xs font-semibold text-[var(--text)]">{badge.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-16 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-400/60 to-cyan-400/10 blur-2xl pulse-glow" />
              <div className="pointer-events-none absolute -bottom-6 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-400/50 to-indigo-400/10 blur-2xl float-slow" />
            </div>
          </div>
        </section>
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {featureGrid.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur"
            >
              <div
                className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70 bg-gradient-to-br ${item.tone}`}
              />
              <div className="relative space-y-2">
                <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="text-xs text-[var(--muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 text-center"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-[var(--muted-strong)]">{item.label}</div>
              <div className="mt-4 text-3xl font-semibold text-[var(--text)]">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-gradient-to-r from-white/20 via-white/0 to-white/10 px-8 py-16 text-center">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute left-0 top-1/3 h-40 w-40 rounded-full bg-amber-300/30 blur-[120px]" />
            <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-indigo-500/30 blur-[120px]" />
          </div>
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">Launch the wall.</h2>
            <p className="text-sm text-[var(--muted)] sm:text-base">Simple. Animated. Free.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-[var(--text)] shadow-xl shadow-indigo-500/20 transition hover:-translate-y-0.5">
                Join the waitlist
              </button>
              <button className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:shadow-lg hover:shadow-indigo-500/20">
                Request early access
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
