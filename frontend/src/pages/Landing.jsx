import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 shadow-[0_8px_30px_rgba(2,6,23,0.35)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20">
                <span className="text-sm font-black text-white">BF</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Boarding<span className="text-cyan-300">Finder</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 sm:inline-flex"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-20 md:pt-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.72) 45%, rgba(8, 47, 73, 0.8) 100%), url('/background.jpg')",
            }}
          />
          <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-[-8%] right-[-5%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            A smarter way to find a place near campus
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Find the perfect
            <span className="mx-2 inline-block bg-gradient-to-r from-cyan-200 via-sky-100 to-indigo-200 bg-clip-text text-transparent">
              boarding house
            </span>
            <br />
            near your campus
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200/90 sm:text-xl">
            Connect with verified boarding house owners and discover comfortable stays across the Philippines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Explore Listings
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="stat-card flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-xl font-bold text-cyan-300">
                1.2k+
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Listings</div>
                <div className="text-xs text-slate-400">verified properties</div>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-xl font-bold text-emerald-300">
                48
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Universities</div>
                <div className="text-xs text-slate-400">nationwide</div>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-xl font-bold text-amber-300">
                8.4k+
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">Students</div>
                <div className="text-xs text-slate-400">happy renters</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .stat-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(2, 6, 23, 0.35);
        }
      `}</style>
    </>
  );
};

export default LandingPage;