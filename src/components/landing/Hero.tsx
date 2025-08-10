import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal";
import AuthButtons from "../auth/AuthButtons";

const Hero = () => {
  const { toast } = useToast();

  const onTry = () =>
    toast({
      title: "ReadEasy",
      description: "Interactive demo coming soon."
    });

  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient signature */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[80vw] rounded-full bg-gradient-primary opacity-30 blur-3xl" aria-hidden="true" />
      <div className="container py-20 md:py-28">
        <Reveal className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/8c2ba20e-e28d-472e-aa5a-e38d3679dd37.png" alt="ReadEasy" className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Make complex text <span className="text-brand">easy</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI for education. Simple, consistent, classroom-ready.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-brand" />
              <span>Age-based levels</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" />
              <span>One-step results</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand" />
              <span>Classroom dashboards</span>
            </div>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={onTry}>Try ReadEasy Free</Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#how">How it works</a>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Already have an account or want to sign up?
            </p>
            <AuthButtons />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
