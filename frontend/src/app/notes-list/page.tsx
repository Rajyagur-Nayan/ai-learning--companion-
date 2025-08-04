"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Upload, FileText, BookOpen, User, Settings, Filter, ArrowDownWideNarrow, MoreHorizontal, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const notesData = [
  {
    title: "A summary of the impressionism art movement, highlighting its origins in 19th-century France, its break from traditional painting, and key artists like Monet and Renoir.",
    date: "2024-04-12",
    words: "1300 words",
  },
  {
    title: "This note provides an overview of fundamental cybersecurity principles, covering concepts like confidentiality, integrity, and availability. It also touches on common threats and best practices for digital security.",
    date: "2024-03-20",
    words: "1800 words",
  },
  {
    title: "A concise summary of the primary causes leading to the French Revolution, including social inequality, economic crisis, and Enlightenment ideas. It also outlines the major events and outcomes of the revolution.",
    date: "2024-03-05",
    words: "1450 words",
  },
  {
    title: "This note details the measurable impacts of global climate change, including rising sea levels, extreme weather events, biodiversity loss, and ocean acidification. It also discusses potential mitigation strategies and adaptation measures.",
    date: "2024-02-28",
    words: "1900 words",
  },
  {
    title: "A critical examination of the defining characteristics of Shakespearean tragedies. This note explores themes like fate versus free will, the role of tragic flaws, and the dramatic structure of plays such as Hamlet and Macbeth.",
    date: "2024-01-10",
    words: "1720 words",
  },
  {
    title: "This summary introduces core machine learning algorithms such as linear regression, decision trees, support vector machines, and neural networks. It also covers basic concepts like supervised and unsupervised learning.",
    date: "2023-12-03",
    words: "1850 words",
  },
  {
    title: "An overview of the profound economic transformations brought about by the Industrial Revolution. It discusses the shift from agrarian to industrial economies, technological innovations, and social impacts.",
    date: "2023-11-15",
    words: "1500 words",
  },
  {
    title: "This note covers the fundamental concepts of quantum mechanics, including wave-particle duality, quantum entanglement, and the Schrödinger equation. It also touches on the implications for modern technology.",
    date: "2023-10-26",
    words: "1800 words",
  },
];

export default function App() {
  const sidebarNavItems = [
    { name: "Upload Material", icon: <Upload className="h-4 w-4" />, href: "#", current: false },
    { name: "My Notes", icon: <FileText className="h-4 w-4" />, href: "#", current: true },
    { name: "My Quizzes", icon: <BookOpen className="h-4 w-4" />, href: "#", current: false },
    { name: "My Profile", icon: <User className="h-4 w-4" />, href: "#", current: false },
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
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Upload/Input
            </a>
            <a href="#" className="text-sm font-medium text-blue-500 border-b-2 border-blue-500">
              Notes
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Quiz
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
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
          <h1 className="text-4xl font-bold mb-2">My Study Notes</h1>
          <p className="text-lg text-gray-600 mb-8">
            Effortlessly manage your summarized learning materials.
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search notes by keyword..." className="pl-9 w-full" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="math">Math</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Date (Newest First)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {notesData.map((note, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="rounded-xl shadow-md h-full flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-gray-800 mb-4 flex-grow">{note.title}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                      <span>{note.date}</span>
                      <span>{note.words}</span>
                    </div>
                  </CardContent>
                  <div className="p-4 border-t border-gray-100 flex justify-end">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
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
``