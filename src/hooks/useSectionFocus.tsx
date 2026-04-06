import { useEffect, useRef, useState } from "react";

interface UseSectionFocusOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useSectionFocus = (options: UseSectionFocusOptions = {}) => {
  const { threshold = 0.4, rootMargin = "-10% 0px -10% 0px" } = options;
  const sectionRef = useRef<HTMLElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFocused(entry.isIntersecting && entry.intersectionRatio >= threshold);
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin,
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [threshold, rootMargin]);

  return { sectionRef, isFocused };
};

export default useSectionFocus;