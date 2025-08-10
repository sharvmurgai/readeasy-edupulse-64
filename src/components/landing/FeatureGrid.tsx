import { BadgeCheck, Gauge, Camera, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    title: "Age-based reading levels",
    desc: "Consistent difficulty for every student, from early readers to adults.",
    Icon: Gauge,
  },
  {
    title: "One step. No prompts.",
    desc: "Type or paste text, and get instant, clear results.",
    Icon: BadgeCheck,
  },
  {
    title: "Image → text simplification",
    desc: "Snap textbook pages and get simplified explanations.",
    Icon: Camera,
  },
  {
    title: "Classroom-ready dashboards",
    desc: "Built for teachers and students - no setup hassle.",
    Icon: LayoutDashboard,
  },
];

const FeatureGrid = () => {
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why educators choose ReadEasy</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Not another chatbot. Purpose-built for consistent, trusted results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, Icon }) => (
            <Reveal key={title} className="group rounded-xl border bg-card p-6 hover-scale shadow-elevated text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
