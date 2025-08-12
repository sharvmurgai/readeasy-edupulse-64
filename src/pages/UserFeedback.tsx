import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import FloatingShapes from "@/components/ui/FloatingShapes";

// Mock feedback data
const mockFeedbackData = [
  {
    id: 1,
    text: "Photosynthesis is the process by which plants use sunlight...",
    simplifiedText: "Plants make food from sunlight, water, and air...",
    feedback: "good",
    date: "2024-01-15",
    language: "English",
    targetAge: "8"
  },
  {
    id: 2,
    text: "The quantum mechanical model of the atom describes...",
    simplifiedText: "Atoms are made of tiny parts that move around...",
    feedback: "bad",
    date: "2024-01-14",
    language: "English",
    targetAge: "10"
  },
  {
    id: 3,
    text: "Economic inflation refers to the general increase...",
    simplifiedText: "When prices go up for everything, that's called inflation...",
    feedback: "good",
    date: "2024-01-13",
    language: "English",
    targetAge: "12"
  }
];

const UserFeedback = () => {
  const [feedbackData] = useState(mockFeedbackData);

  const getFeedbackIcon = (feedback: string) => {
    if (feedback === "good") {
      return <ThumbsUp className="h-4 w-4 text-green-500" />;
    } else if (feedback === "bad") {
      return <ThumbsDown className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  const getFeedbackBadge = (feedback: string) => {
    if (feedback === "good") {
      return <Badge className="bg-green-100 text-green-800 border-green-200">Good</Badge>;
    } else if (feedback === "bad") {
      return <Badge className="bg-red-100 text-red-800 border-red-200">Bad</Badge>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative">
      <InteractiveBackground />
      <FloatingShapes />
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Your Feedback History</h1>
              <p className="text-lg text-muted-foreground">
                Review your previous text simplifications and feedback
              </p>
            </div>

            <div className="space-y-6">
              {feedbackData.map((item) => (
                <Card key={item.id} className="shadow-lg border-0 bg-card/80 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Feedback #{item.id}
                      </CardTitle>
                      <div className="flex items-center gap-3">
                        {getFeedbackBadge(item.feedback)}
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <CardDescription>
                      Language: {item.language} | Target Age: {item.targetAge} years
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Original Text:</h4>
                      <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        {item.text}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Simplified Text:</h4>
                      <p className="text-sm text-foreground bg-background/50 p-3 rounded-lg border">
                        {item.simplifiedText}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Your Feedback:</span>
                        {getFeedbackIcon(item.feedback)}
                        <span className="text-sm text-muted-foreground capitalize">{item.feedback}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {feedbackData.length === 0 && (
              <Card className="shadow-lg border-0 bg-card/80 backdrop-blur">
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No feedback history yet</h3>
                  <p className="text-muted-foreground">
                    Start using ReadEasy to see your feedback history here
                  </p>
                  <Button className="mt-4">
                    Try ReadEasy
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;