"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-6 mt-10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-600">
              Resources
            </a>
            <a href="#" className="hover:text-indigo-600">
              Company
            </a>
            <a href="#" className="hover:text-indigo-600">
              Legal
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-indigo-600">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-indigo-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-indigo-600">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
