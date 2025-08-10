import { Upload, Sparkles, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Add text or a screenshot",
    desc: "Paste text or upload an image - ReadEasy captures it instantly.",
    Icon: Upload,
  },
  {
    title: "Choose the reader's age",
    desc: "We adapt vocabulary and structure for consistent difficulty.",
    Icon: Sparkles,
  },
  {
    title: "Get a clear explanation",
    desc: "Simple, accurate, and ready to learn or teach.",
    Icon: CheckCircle2,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-4 text-xl text-muted-foreground">Three steps. No prompts. Instant clarity.</p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ title, desc, Icon }, i) => (
            <Reveal key={title} className="relative rounded-xl border bg-card p-8 text-center hover-scale">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <Icon className="h-8 w-8" />
              </div>
              <div className="mb-2 inline-flex items-center justify-center rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                Step {i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
