import React from "react";

function TrustCards() {
  return (
    <section className="py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transform hover:scale-105 cursor-pointer transition-all duration-300 p-6  rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-check-circle w-12 h-12 text-4xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
            <p className="text-gray-600 text-sm">
              Get matched with jobs instantly based on your skills and
              experience.
            </p>
          </div>

          <div className="transform hover:scale-105 cursor-pointer transition-all duration-300 p-6  rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-mouse-pointer w-12 h-12 text-4xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600 text-sm">
              Our platform is simple, user-friendly, and designed to save your
              time.
            </p>
          </div>

          <div className="transform hover:scale-105 cursor-pointer transition-all duration-300 p-6  rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-user-shield w-12 h-12 text-4xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Trusted by Professionals
            </h3>
            <p className="text-gray-600 text-sm">
              Thousands of users trust our platform to find their dream job
              every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustCards;
