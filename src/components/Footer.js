import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-8 border-t-gray-500">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <span>
              What <span className="text-orange-700">Next! </span>
            </span>
          </div>

          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-orange-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-700">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-700">
              Contact
            </a>
          </div>

          <div className="space-x-6">
            <a href="#" className="hover:text-orange-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} What Next!. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
