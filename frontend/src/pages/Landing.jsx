import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="BoardingFinder"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-gray-800 tracking-tight">
                Boarding<span className="text-indigo-600">Finder</span>
              </span>
            </div>

            {/* ✅ Sign In button - Correctly wrapped with Link */}
            <Link to="/login">
              <button className="px-5 py-2 text-sm font-semibold text-indigo-600 border border-indigo-200 rounded-full hover:bg-indigo-50 transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <main
        className="pt-20 md:pt-24 min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Find the perfect
            <span className="text-indigo-200 relative inline-block">
              boarding house
              <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-indigo-300/50" viewBox="0 0 200 12" fill="currentColor">
                <path d="M0 10 Q50 0 100 10 Q150 0 200 10 L200 12 L0 12 Z" />
              </svg>
            </span>
            <br />
            near your campus
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Connect with verified boarding house owners near top universities across the Philippines.
          </p>

          {/* STATS ROW */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <div className="stat-card flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-100/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl font-bold">
                1.2k+
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-800">Listings</div>
                <div className="text-xs text-gray-500">verified properties</div>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-100/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl font-bold">
                48
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-800">Universities</div>
                <div className="text-xs text-gray-500">nationwide</div>
              </div>
            </div>

            <div className="stat-card flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-100/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 text-xl font-bold">
                8.4k+
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-800">Students</div>
                <div className="text-xs text-gray-500">happy renters</div>
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
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </>
  );
};

export default LandingPage;