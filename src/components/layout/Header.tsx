import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Header = () => {
  const { toast } = useToast();
  const onTry = () =>
    toast({
      title: "ReadEasy",
      description: "Interactive demo coming soon."
    });

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/lovable-uploads/0f26c994-17fb-4b2f-bd82-597275724835.png" alt="ReadEasy" className="h-8 w-8" />
          ReadEasy
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">Why</a>
          <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#proof" className="text-muted-foreground hover:text-foreground transition-colors">Recognition</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="hero" size="sm" onClick={onTry}>Try ReadEasy</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
