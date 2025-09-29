'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !text) return;

    const el = ref.current;
    
    // Ensure the element is ready for splitting
    gsap.set(el, { autoAlpha: 1 });

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      linesClass: "split-line",
    });

    let targets;
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "chars":
      default:
        targets = splitter.chars;
        break;
    }

    if (!targets || targets.length === 0) {
      return;
    }

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.from(targets, {
      ...from,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: {
        trigger: el,
        start: start,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        onLetterAnimationComplete?.();
      },
    });

    // Cleanup function
    return () => {
      // Kill the timeline and its ScrollTrigger instance
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
      // Revert the SplitText instance to restore the original HTML
      if (splitter) {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <div
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
        visibility: 'hidden', // Hide until animation starts via autoAlpha
      }}
    >
      {text}
    </div>
  );
};

export default SplitText;
