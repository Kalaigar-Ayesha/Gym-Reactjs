import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-12">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
        {/* Footer Top - Logo and Information */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-semibold text-red-400">FutureCent Gym</h2>
            <p className="text-sm text-neutralGrey mt-2">
              Your journey to a healthier, stronger you starts here.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-red-400 mb-4">Contact Us</h4>
            <p className="text-sm text-neutralGrey">123 Fitness St, City, Country</p>
            <p className="text-sm text-neutralGrey">Phone: (123) 456-7890</p>
            <p className="text-sm text-neutralGrey">Email: contact@futurecentgym.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutralGrey hover:text-red-400"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutralGrey hover:text-red-400"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutralGrey hover:text-red-400"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-8 text-sm text-neutralGrey text-center">
          <p>&copy; {new Date().getFullYear()} FutureCent Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
