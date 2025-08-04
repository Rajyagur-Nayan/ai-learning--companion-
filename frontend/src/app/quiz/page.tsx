"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Upload, FileText, BookOpen, User, Plus, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function App() {
  const sidebarNavItems = [
    { name: "Upload Material", icon: <Upload className="h-4 w-4" />, href: "/input-page", current: false },
    { name: "My Notes", icon: <FileText className="h-4 w-4" />, href: "/notes-list", current: false },
    { name: "My Quizzes", icon: <BookOpen className="h-4 w-4" />, href: "/quiz", current: true },
    { name: "My Profile", icon: <User className="h-4 w-4" />, href: "profile", current: false },
  ];

  const quizOptions = [
    "Monitor",
    "Keyboard",
    "Printer",
    "Speaker",
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-full items-center justify-between p-4 px-8">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-blue-500">::</span>
            <span>logo</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/input-page" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Upload/Input
            </a>
            <a href="/notes-list" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Notes
            </a>
            <a href="/quiz" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500">
              Quiz
            </a>
            <a href="/profile" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Profile
            </a>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-600" />
              <Input placeholder="Search notes or quizzes..." className="w-48" />
            </div>
            <Button variant="outline" className="text-gray-600">
              Logout
            </Button>
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40/e2e8f0/64748b?text=JD" alt="User Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white p-4 pt-6 shadow-md">
          <div className="space-y-2">
            {sidebarNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  item.current ? 'bg-blue-50 text-blue-500 font-semibold' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="rounded-xl shadow-lg p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg font-semibold text-gray-600 mb-4">Question 1 of 5</CardTitle>
                <h2 className="text-2xl font-bold">Which of the following is an input device?</h2>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {quizOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full justify-start text-lg py-6 px-4 rounded-lg border ${
                      selectedOption === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </Button>
                ))}
                <div className="flex justify-end pt-4">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3">
                    Next Question
                    <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-white p-4 text-sm text-gray-500 shadow-sm border-t border-gray-200">
        <div className="mx-auto flex max-w-full items-center justify-between px-8">
          <div className="flex space-x-6">
            <a href="#">Resources</a>
            <a href="#">Company</a>
            <a href="#">Legal</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
