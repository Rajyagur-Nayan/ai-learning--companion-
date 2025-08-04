"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "./auth/AuthContext";

const Navbar = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Upload/Input", "Notes", "Quiz", "Profile"];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xl">
          <span className="text-3xl">✨</span>
          <span>logo</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className={`hover:text-indigo-600 transition-colors duration-200 ${
                item === "Home" ? "text-indigo-600 font-semibold" : ""
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {isAuthenticated ? (
            <Button onClick={logout} className="bg-red-600">
              Logout
            </Button>
          ) : (
            <>
              <Button
                className="bg-blue-600"
                onClick={() => setIsLoginDialogOpen(true)}
              >
                Login
              </Button>
              <Button
                className="bg-green-600"
                onClick={() => setIsRegisterDialogOpen(true)}
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium ${
                  item === "Home" ? "text-indigo-600" : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 pt-4 border-t">
            {isAuthenticated ? (
              <Button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="bg-red-600 w-full"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setIsLoginDialogOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-blue-600 w-full"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setIsRegisterDialogOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-green-600 w-full"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
