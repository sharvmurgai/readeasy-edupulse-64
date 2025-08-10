import { CheckCircle, X, Zap, Users, Target, Clock } from "lucide-react";
import Reveal from "./Reveal";

const comparisons = [
  {
    feature: "Purpose-built for education",
    readEasy: "Designed specifically for students and teachers",
    chatGPT: "General-purpose AI tool",
    icon: Target
  },
  {
    feature: "Age-appropriate content",
    readEasy: "Automatic age-based difficulty adjustment",
    chatGPT: "Requires manual prompting for age levels",
    icon: Users
  },
  {
    feature: "Consistent results",
    readEasy: "Same input always gives same output",
    chatGPT: "Results vary with each request",
    icon: CheckCircle
  },
  {
    feature: "No prompt engineering",
    readEasy: "Just paste text and choose age - that's it",
    chatGPT: "Need to learn complex prompting techniques",
    icon: Zap
  },
  {
    feature: "Image-to-text simplification",
    readEasy: "Built-in screenshot processing",
    chatGPT: "Requires separate tools and complex setup",
    icon: Clock
  }
];

const WhyBetterThanChatGPT = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why ReadEasy beats ChatGPT for education
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            ChatGPT is powerful, but ReadEasy is purpose-built for classrooms with consistent, reliable results.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {comparisons.map(({ feature, readEasy, chatGPT, icon: Icon }) => (
            <Reveal key={feature} className="grid md:grid-cols-3 gap-4 items-center p-6 rounded-xl border bg-card">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-brand flex-shrink-0" />
                <h3 className="font-semibold">{feature}</h3>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/30">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-green-800 dark:text-green-200">{readEasy}</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950/30">
                <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-800 dark:text-red-200">{chatGPT}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand/10 text-brand">
            <Zap className="h-5 w-5" />
            <span className="font-medium">Ready to use, no AI expertise required</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyBetterThanChatGPT;