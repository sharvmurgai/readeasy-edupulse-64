import React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ as = "div", className, children }) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Comp: any = as;
  return (
    <Comp
      ref={ref as any}
      className={cn(
        "opacity-0 translate-y-3 will-change-transform",
        visible && "opacity-100 translate-y-0 animate-enter",
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
