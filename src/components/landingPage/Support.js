import React from "react";
import Image from "next/image";
import support from "../../../public/images/support.jpeg";

function Support() {
  return (
    <section className="section-toggle rounded-lg flex flex-col md:flex-row items-center justify-around px-8 md:px-32 py-20 space-y-8 md:space-y-0 md:space-x-16">
      <div className="flex-1">
        <Image
          src={support}
          alt="west-side group"
          className="rounded-lg shadow-lg"
          width={400}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-semibold">
          Real <span className="text-orange-700">Support</span>, Real{" "}
          <span className="text-orange-700">Listings</span>
        </h2>
        <p className="text-lg">
          Our job listings are verified and authentic, ensuring you get the most
          up-to-date and real job opportunities. We provide exceptional customer
          support with a team ready to assist you at every step, ensuring a
          seamless experience.
        </p>
        <button className="px-6 py-3 bg-orange-700 font-semibold rounded-full hover:bg-orange-800 transition-all duration-300">
          Contact Support
        </button>
      </div>
    </section>
  );
}

export default Support;
