"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {  Upload, FileText, BookOpen, User, Plus } from 'lucide-react';
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

    
    </div>
  );
}
