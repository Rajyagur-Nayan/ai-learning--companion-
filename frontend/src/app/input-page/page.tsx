"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const sidebarNavItems = [
    {
      name: "Upload Material",
      icon: <Upload className="h-4 w-4" />,
      href: "input-page",
      current: true,
    },
    {
      name: "My Notes",
      icon: <FileText className="h-4 w-4" />,
      href: "/notes-list",
      current: false,
    },
    {
      name: "My Quizzes",
      icon: <BookOpen className="h-4 w-4" />,
      href: "/quiz",
      current: false,
    },
    {
      name: "My Profile",
      icon: <User className="h-4 w-4" />,
      href: "/profile",
      current: false,
    },
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
                  item.current
                    ? "bg-blue-50 text-blue-500 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
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
          <h1 className="text-4xl font-bold mb-2">
            Upload or Paste Study Material
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse mr-1"></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse mr-1"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="inline-block w-2 h-2 rounded-full bg-gray-400 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </p>

          {/* Paste Text Content Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-md p-6">
              <CardTitle className="text-xl font-bold mb-4">
                Paste Text Content
              </CardTitle>
              <Textarea
                placeholder="Paste your study notes, article content, or any text you want to summarize and quiz here..."
                className="min-h-[200px] bg-gray-50 resize-y"
              />
              <p className="text-xs text-gray-500 mt-2">
                The AI works best with structured text between 100 to 5000 words
                for optimal summary and quiz generation.
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
    </div>
  );
}
