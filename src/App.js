// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <h1>App</h1>
//     </div>
//   );
// }

// export default App;

import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Google Logo */}
      <header className="flex justify-end p-4 pt-8">
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Gmail</a>
          <a href="#" className="text-sm hover:underline">Images</a>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
            Sign in
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <main className="flex flex-col items-center py-20 space-y-6">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" className="h-24" />
        <div className="w-full max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full p-4 pl-12 border border-gray-300 rounded-3xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search Google or type a URL"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-8 py-2 border border-gray-300 rounded-full text-sm hover:shadow-md transition-shadow">
            Google Search
          </button>
          <button className="px-8 py-2 border border-gray-300 rounded-full text-sm hover:shadow-md transition-shadow bg-white">
            I'm Feeling Lucky
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
