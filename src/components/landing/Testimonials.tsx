import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "I finally understand my science textbook. It explains it like my teacher would.",
    name: "8th grade student",
  },
  {
    quote: "No more prompt templates. My class gets consistent results every time.",
    name: "High school teacher",
  },
  {
    quote: "It adjusts for age perfectly. My 9-year-old and I can learn together.",
    name: "Parent",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What students and teachers say</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name} className="relative rounded-xl border bg-card p-6 hover-scale">
              <Quote className="absolute top-4 right-4 h-6 w-6 text-brand/30" />
              <div className="pr-8">
                <p className="text-base leading-relaxed italic">"{t.quote}"</p>
                <p className="mt-4 text-sm font-medium text-brand">- {t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;