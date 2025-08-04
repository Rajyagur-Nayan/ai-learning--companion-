"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Search, Upload, FileText, BookOpen, User, BookOpenText, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function App() {
  const sidebarNavItems = [
    { name: "Upload Material", icon: <Upload className="h-4 w-4" />, href: "input-page", current: true },
    { name: "My Notes", icon: <FileText className="h-4 w-4" />, href: "/notes-list", current: false },
    { name: "My Quizzes", icon: <BookOpen className="h-4 w-4" />, href: "/quiz", current: false },
    { name: "My Profile", icon: <User className="h-4 w-4" />, href: "/profile", current: false },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            <a href="input-page" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500">
              Upload/Input
            </a>
            <a href="notes-list" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Notes
            </a>
            <a href="/quiz" className="text-sm font-medium text-gray-600 hover:text-gray-900">
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
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-2">Upload or Paste Study Material</h1>
          <p className="text-lg text-gray-600 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse mr-1"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse mr-1" style={{ animationDelay: '0.2s' }}></span>
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </p>

          
          {/* Paste Text Content Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-md p-6">
              <CardTitle className="text-xl font-bold mb-4">Paste Text Content</CardTitle>
              <Textarea
                placeholder="Paste your study notes, article content, or any text you want to summarize and quiz here..."
                className="min-h-[200px] bg-gray-50 resize-y"
              />
              <p className="text-xs text-gray-500 mt-2">
                The AI works best with structured text between 100 to 5000 words for optimal summary and quiz generation.
              </p>
            </Card>
          </motion.div>

          {/* Generate Button */}
          <div className="flex justify-center mt-8">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg">
              Generate Summary & Quiz
            </Button>
          </div>
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
