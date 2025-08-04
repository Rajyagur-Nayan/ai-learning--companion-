"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Upload, FileText, BookOpen, User, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function App() {

  const [notes, setNotes] = useState<{ title: string; detail: string }[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:4000/form", {
          withCredentials: true, // send cookies for auth
        })
        setNotes(res.data.data.rows) // Adjust based on your backend response
      } catch (error) {
        console.error("Error fetching notes:", error)
      }
    }

    fetchNotes()
  }, [])

  const sidebarNavItems = [
    { name: "Upload Material", icon: <Upload className="h-4 w-4" />, href: "/input-page", current: false },
    { name: "My Notes", icon: <FileText className="h-4 w-4" />, href: "/notes-list", current: true },
    { name: "My Quizzes", icon: <BookOpen className="h-4 w-4" />, href: "/quiz", current: false },
    { name: "My Profile", icon: <User className="h-4 w-4" />, href: "/profile", current: false },
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
                className={`flex items-center space-x-3 p-3 rounded-lg ${item.current ? 'bg-blue-50 text-blue-500 font-semibold' : 'text-gray-600 hover:bg-gray-100'
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
            {notes.map((note, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="rounded-xl shadow-md h-full flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-gray-800 mb-4 flex-grow">{note.detail}</p>
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


    </div>
  );
}
``