"use client";

import React, { useState } from "react";

function Hero() {
  const [input, setInput] = useState("");
  return (
    <main className="min-h-[40vh] flex justify-center items-center">
      <div>
        <h1 className="text-2xl">
          {" "}
          <span className="font-bold text-3xl text-orange-600">
            What Next !
          </span>{" "}
          - Find Your Dream Job Today
        </h1>

        <lable></lable>
        <input
          type="text"
          placeholder="JOB TITLE ..."
          className="w-full bg-transparent rounded-full px-10 py-4 mt-10 border border-orange-600 focus:outline-none"
        ></input>
      </div>
    </main>
  );
}

export default Hero;
