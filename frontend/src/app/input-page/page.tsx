"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    language: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/form",
        {
          title: formData.title,
          description: formData.description,
        },
        {
          withCredentials: true, // ✅ sends and receives cookies
        }
      );
      toast.success("Login Success");
      setFormData({ title: "", description: "", language: "" }); // Reset form
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
    console.log("Submitted:", formData);
    // Handle upload logic here
  };

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
      {/* Main Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
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

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl  font-bold mb-10">
            Upload Your Study Material
          </h1>

          {/* Upload Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-md p-6 space-y-4 max-w-3xl mx-auto">
              <CardTitle className="text-xl font-bold">
                Material Upload Form
              </CardTitle>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Label>Title</Label>
                <Input
                  type="text"
                  placeholder="Enter Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <Label>description</Label>
                <Textarea
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="min-h-[120px]"
                />
                <Label>Language</Label>
                <Input
                  type="text"
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                />
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 text-md"
                  >
                    Upload & Generate
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </main>
      </div>
         
    </div>
  );
}
