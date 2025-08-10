import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

const AnimatedTextInput = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const sampleTexts = [
    "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.",
    "Ocean waves are created by wind energy transferring to the water surface, causing rhythmic movements that travel across vast distances.",
    "Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape once it crosses the event horizon.",
    "Quantum entanglement is a phenomenon where particles become interconnected and instantly affect each other regardless of the distance between them."
  ];

  useEffect(() => {
    const currentText = sampleTexts[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        // Pause at the end before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        // Move to next text and start typing
        setCurrentIndex((prev) => (prev + 1) % sampleTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentIndex, sampleTexts]);

  return (
    <div className="w-full max-w-2xl">
      <Textarea
        value={displayText}
        readOnly
        placeholder="Type your text here..."
        className="h-32 p-4 text-base leading-relaxed resize-none bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
      />
      <div className="flex items-center mt-4 text-sm text-white/60">
        <span>Ask ReadEasy to simplify this text</span>
        <div className="w-2 h-2 bg-white/60 rounded-full ml-2 animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedTextInput;