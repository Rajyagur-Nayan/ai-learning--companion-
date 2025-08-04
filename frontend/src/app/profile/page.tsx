"use client"

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import {  Upload, FileText, BookOpen, User, Edit, Eye } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const quizHistoryData = [
  { name: "Chapter 1: AI Fundamentals", date: "2024-03-10", score: "92/100" },
  { name: "Python Programming Basics", date: "2024-03-05", score: "88/100" },
  { name: "Data Structures & Algorithms", date: "2024-02-28", score: "75/100" },
  { name: "Machine Learning Concepts", date: "2024-02-20", score: "95/100" },
  { name: "Neural Networks Intro", date: "2024-02-15", score: "80/100" },
  { name: "Web Development Essentials", date: "2024-02-10", score: "70/100" },
  { name: "Database Management", date: "2024-02-01", score: "85/100" },
];

export default function App() {
  const sidebarNavItems = [
    { name: "Upload Material", icon: <Upload className="h-4 w-4" />, href: "/input-page", current: false },
    { name: "My Notes", icon: <FileText className="h-4 w-4" />, href: "/notes-list", current: false },
    { name: "My Quizzes", icon: <BookOpen className="h-4 w-4" />, href: "/quiz", current: false },
    { name: "My Profile", icon: <User className="h-4 w-4" />, href: "/profile", current: true },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">My Profile</h1>

          {/* User Information */}
          <motion.div
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-md p-6">
              <CardTitle className="text-xl font-bold mb-4">User information</CardTitle>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://placehold.co/64x64/e2e8f0/64748b?text=AJ" alt="Alex Johnson" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">Alex Johnson</p>
                  <p className="text-sm text-gray-500">alex.johnson@example.com</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto text-gray-500">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Performance Overview */}
          <h2 className="text-2xl font-bold mb-6">Performance Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ delay: 0.1, duration: 0.5 }}>
              <Card className="rounded-xl shadow-md p-6">
                <CardTitle className="text-xl font-bold mb-4">Monthly Quiz Scores</CardTitle>
                {/* Placeholder for Line Chart */}
                <div className="relative h-48 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <div className="absolute top-0 left-0 w-full h-full p-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-around text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                    </div>
                    {/* Line path (simplified for placeholder) */}
                    <svg className="absolute top-0 left-8 right-0 bottom-8" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        points="0,70 20,60 40,55 60,40 80,30 100,25"
                      />
                      <circle cx="0" cy="70" r="2" fill="#3B82F6" />
                      <circle cx="20" cy="60" r="2" fill="#3B82F6" />
                      <circle cx="40" cy="55" r="2" fill="#3B82F6" />
                      <circle cx="60" cy="40" r="2" fill="#3B82F6" />
                      <circle cx="80" cy="30" r="2" fill="#3B82F6" />
                      <circle cx="100" cy="25" r="2" fill="#3B82F6" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                  Score
                </div>
              </Card>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ delay: 0.2, duration: 0.5 }}>
              <Card className="rounded-xl shadow-md p-6">
                <CardTitle className="text-xl font-bold mb-4">Average Score by Topic</CardTitle>
                {/* Placeholder for Bar Chart */}
                <div className="relative h-48 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <div className="absolute top-0 left-0 w-full h-full p-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-2">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>
                    {/* Bars (simplified for placeholder) */}
                    <div className="absolute bottom-0 left-8 right-0 h-[calc(100%-32px)] flex items-end justify-around space-x-2">
                      <div className="w-10 bg-teal-500 rounded-t-lg" style={{ height: '80%' }}></div>
                      <div className="w-10 bg-teal-500 rounded-t-lg" style={{ height: '90%' }}></div>
                      <div className="w-10 bg-teal-500 rounded-t-lg" style={{ height: '70%' }}></div>
                      <div className="w-10 bg-teal-500 rounded-t-lg" style={{ height: '85%' }}></div>
                      <div className="w-10 bg-teal-500 rounded-t-lg" style={{ height: '75%' }}></div>
                    </div>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-around text-xs text-gray-500 mt-2">
                      <span>AI</span>
                      <span>ML</span>
                      <span>Web Dev</span>
                      <span>DB</span>
                      <span>Data Sci</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  <div className="h-2 w-2 bg-teal-500 rounded-full mr-2"></div>
                  Average Score
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Quiz History */}
          <h2 className="text-2xl font-bold mb-6">Quiz History</h2>
          <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ delay: 0.3, duration: 0.5 }}>
            <Card className="rounded-xl shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quiz Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {quizHistoryData.map((quiz, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quiz.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quiz.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quiz.score}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </main>
      </div>

    
    </div>
  );
}
