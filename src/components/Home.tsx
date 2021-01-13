import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray-200">
      <header className="bg-red-400 h-20 flex justify-center items-center">
        <h1 className="text-3xl">Learn React Query</h1>
      </header>

      <div className="flex flex-col max-w-xl mx-auto m-3 space-y-3">
        <Link
          to="/ghusers"
          className="bg-gray-50 p-10 hover:border-red-400 border-l-4 transition-border duration-500"
        >
          <p className="text-xl">GHUsers Demo</p>
        </Link>

        <Link
          to="/ghsearch"
          className="bg-gray-50 p-10 hover:border-red-400 border-l-4 transition-border duration-500"
        >
          <p className="text-xl">GHSearch Demo</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
