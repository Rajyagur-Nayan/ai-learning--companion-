"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home as HomeIcon,
  BookOpen,
  HelpCircle,
  User,
  FileUp,
  PencilLine,
  Award,
  Book,
} from "lucide-react"; // Using lucide-react for icons

// Define a simple data structure for notes and quiz scores
const latestNotes = [
  {
    topic: "Physics Basics",
    snippet: "Key concepts of Newtonian mechanics...",
    date: "2024-03-10",
  },
  {
    topic: "History of Rome",
    snippet: "From republic to empire...",
    date: "2024-03-09",
  },
  {
    topic: "Biology Cells",
    snippet: "Structure and function of eukaryotic cells...",
    date: "2024-03-08",
  },
  {
    topic: "Chemistry Reactions",
    snippet: "Types of chemical bonds and...",
    date: "2024-03-07",
  },
];

const quizScores = [
  { quizName: "Algebra I", score: "85%", date: "2024-03-11" },
  { quizName: "World Geography", score: "92%", date: "2024-03-10" },
  { quizName: "English Literature", score: "78%", date: "2024-03-09" },
  { quizName: "Computer Science Fund.", score: "95%", date: "2024-03-08" },
];

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white p-6 border-r border-gray-200 shadow-sm md:min-h-[calc(100vh-65px)]">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Upload Material
          </h3>
          <nav className="space-y-2">
            {[
              { name: "My Notes", icon: BookOpen },
              { name: "My Quizzes", icon: HelpCircle },
              { name: "My Profile", icon: User },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-10">
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome, John Doe!
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to simplify your learning? Get started by uploading materials
            or exploring your notes.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              { title: "Upload PDF / DOCX", icon: FileUp },
              { title: "Paste Text", icon: PencilLine },
              { title: "View Notes", icon: Book },
              { title: "Take a Quiz", icon: Award },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Card className="flex flex-col items-center justify-center p-6 text-center border-2 border-gray-200 hover:border-indigo-400 transition-all duration-300 cursor-pointer rounded-lg">
                  <item.icon className="h-10 w-10 text-indigo-500 mb-3" />
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </CardTitle>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Activity
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Notes Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Latest Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Topic
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Summary Snippet
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {latestNotes.map((note, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {note.topic}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                            {note.snippet}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {note.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quiz Scores Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Quiz Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quiz Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Score
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {quizScores.map((quiz, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {quiz.quizName}
                          </td>
                          <td
                            className="px-4 py-3 whitespace-nowrap text-sm font-semibold"
                            style={{
                              color:
                                quiz.score === "95%"
                                  ? "#22C55E"
                                  : quiz.score === "92%"
                                  ? "#22C55E"
                                  : quiz.score === "85%"
                                  ? "#22C55E"
                                  : "#EF4444",
                            }}
                          >
                            {quiz.score}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {quiz.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
