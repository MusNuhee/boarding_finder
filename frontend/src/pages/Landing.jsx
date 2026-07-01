import React from "react";

const Landing = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side - Content */}
        <div className="flex-1 text-center lg:text-left">
        <h1 className="bg-red-500 text-4xl ... ">perfect</h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
            Connect with verified boarding house owners near top universities
            across the Philippines.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 mb-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">1,240+</p>
              <p className="text-sm text-blue-500 font-medium">Listings</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">48</p>
              <p className="text-sm text-gray-500 font-medium">Universities</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">8,400+</p>
              <p className="text-sm text-gray-500 font-medium">Students</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              Search Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold rounded-full transition-all duration-200 transform hover:-translate-y-1">
              List Your Property
            </button>
          </div>
        </div>

        {/* Right Side - Image / Illustration */}
        <div className="flex-1 w-full max-w-md lg:max-w-full">
          <div className="relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-white/50">
            {/* Decorative Background Dots */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-300/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl"></div>
            
            {/* Icon */}
            <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4">
              <svg
                className="w-16 h-16 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            
            <p className="relative z-10 text-indigo-800 font-bold text-xl tracking-wider bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full shadow-inner">
              🏠 Boarding House
            </p>
            <p className="relative z-10 text-gray-500 text-sm mt-2 font-medium">
              Safe & Verified
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Landing;