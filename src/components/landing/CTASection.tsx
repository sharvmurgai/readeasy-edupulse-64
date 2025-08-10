import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Reveal from "./Reveal";

const CTASection = () => {
  const { toast } = useToast();
  const onTry = () =>
    toast({
      title: "ReadEasy",
      description: "Interactive demo coming soon."
    });

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to try ReadEasy?</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-10 font-light">Make complex text easy today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="secondary" 
                  size="xl" 
                  onClick={onTry} 
                  className="bg-white text-brand hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg"
                >
                  Try ReadEasy Free
                </Button>
                <span className="text-white/80 text-sm">No signup required</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
