import React from 'react';

const navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 z-[100] absolute">
      <h1 className="text-4xl text-red-600 font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default navbar;
