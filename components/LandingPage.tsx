"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LandingPage: React.FC = () => {
  const [padId, setPadId] = useState<string>('');
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <main className="grow flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold tracking-tight mb-2">
          NOTEPAD
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          The simplest way to share text online
        </p>

        <form
          className="flex flex-col items-center w-full max-w-2xl"
        >
          <div className="flex w-full border border-gray-400 rounded-md overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
            <input
              type="text"
              value={padId}
              placeholder="your-secret-page"
              className="grow px-4 py-3 outline-none italic text-gray-700"
              autoFocus
            />
            <button onClick={() => {
              router.push(`/${padId}`)
            }}
              type="submit"
              className="bg-gray-50 px-6 py-3 border-l border-gray-300 hover:bg-gray-100 transition-colors text-gray-700 font-medium"
            >
              Go!
            </button>
          </div>

          <p className="mt-4 text-gray-500 text-sm">
            No login required
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="py-8 flex flex-col items-center text-sm text-gray-600">
        <div className="flex space-x-4 mb-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Content Policy</a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Jux
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;