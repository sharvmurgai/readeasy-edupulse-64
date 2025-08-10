import { Award, Building, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import mitLogo from "@/assets/mit-logo.webp";

const SocialProof = () => {
  return (
    <section id="proof" className="py-16 md:py-20">
      <div className="container">
        <Reveal className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-8">Trusted by educators worldwide</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">200+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">10,000+</div>
              <p className="text-muted-foreground">Texts Simplified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">10+</div>
              <p className="text-muted-foreground">Schools in US & India</p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border hover-scale">
              <img src={mitLogo} alt="MIT" className="h-20 w-auto object-contain" />
              <span className="text-sm font-medium text-muted-foreground text-center">Featured at MIT Beaver Works CREATE Challenge</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border hover-scale">
              <div className="h-16 flex items-center justify-center">
                <span className="text-3xl font-bold text-brand">IEEE</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground text-center">IEEE ANTS (Best Demo Award)</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border hover-scale">
              <GraduationCap className="h-16 w-16 text-brand" />
              <span className="text-sm font-medium text-muted-foreground text-center">K-12 School Districts</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;
