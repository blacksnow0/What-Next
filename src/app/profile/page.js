import TestAnimation from "@/components/landingPage/Test";
import AnimatedTitle from "@/components/landingPage/Test";
import HeadingWithStars from "@/components/landingPage/Test";
import React from "react";

function page() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        This is a profile page and this should come with default routing
        capabilites of nextJs
      </div>
      <AnimatedTitle />
    </div>
  );
}

export default page;
