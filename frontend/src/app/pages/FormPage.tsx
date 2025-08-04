"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type QuizQuestion = {
  question: string;
  options: string[];
};

type Results = {
  summary: string;
  quiz: QuizQuestion[];
};

function FormPage() {
  const [studyText, setStudyText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Results | null>(null); // To store AI response
  const [quizMode, setQuizMode] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!studyText) return;

    setLoading(true);
    // Here you would make an API call to your backend
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: studyText }),
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching AI data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              AI Learning Companion 🧠
            </CardTitle>
            <p className="text-sm text-gray-500">
              Summarize your notes and generate quizzes instantly.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="study-text" className="text-lg">
                  Paste Your Study Material
                </Label>
                <Textarea
                  id="study-text"
                  placeholder="Paste your lecture notes, article text, or any study material here..."
                  className="mt-2 min-h-[200px]"
                  value={studyText}
                  onChange={(e) => setStudyText(e.target.value)}
                  disabled={loading}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Generating..." : "Generate Notes & Quiz"}
                </Button>
              </motion.div>
            </form>
            {results && (
              <>
                <Separator className="my-8" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Tabs defaultValue="notes">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="notes">Notes</TabsTrigger>
                      <TabsTrigger value="quiz">Quiz</TabsTrigger>
                    </TabsList>
                    <TabsContent value="notes" className="mt-4">
                      {/* Placeholder for AI-generated summary */}
                      <div className="prose max-w-none p-4 rounded-md bg-gray-50 border">
                        <h3 className="font-semibold text-lg">Summary</h3>
                        <p>{results.summary}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="quiz" className="mt-4">
                      {/* Placeholder for AI-generated quiz */}
                      <div className="p-4 space-y-4">
                        {results.quiz.map((question, index) => (
                          <div key={index} className="space-y-2">
                            <p className="font-medium">{question.question}</p>
                            <ul className="space-y-1 ml-4 list-disc">
                              {question.options.map((option, optIndex) => (
                                <li key={optIndex}>{option}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4 w-full">Take Quiz</Button>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}

export default FormPage;
