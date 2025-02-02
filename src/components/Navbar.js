import React from "react";

function Navbar() {
  return (
    <header className="px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold ">
        What <span className="text-orange-600">Next!</span>
      </h1>

      <ul className="flex space-x-6">
        {["Job Search", "Career Guide", "Help-Center", "For Companies"].map(
          (item, index) => (
            <li
              key={index}
              className="relative text-md tracking-wider font-medium cursor-pointer transition-all duration-300 group"
            >
              {item}
              <span className="absolute left-0 top-6 w-0 h-[3px] bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          )
        )}
      </ul>
    </header>
  );
}

export default Navbar;
