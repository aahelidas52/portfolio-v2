"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

type SectionItem = {
  title: string;
  eyebrow: string;
  content: string;
};

function Step({
  item,
  active,
  index,
  onEnter,
}: {
  item: SectionItem;
  active: boolean;
  index: number;
  onEnter: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    amount: 0.3,
  });

  useEffect(() => {
    if (inView) {
      onEnter();
    }
  }, [inView, onEnter]);

  return (
    <div
      ref={ref}
      className="min-h-[70vh] snap-start shrink-0 w-[85vw] sm:w-[70vw] lg:w-[55vw] flex items-center opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.15 + index * 0.15}s` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={
          active
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl flat-card rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm px-6 py-8 lg:px-8 lg:py-10 shadow-sm"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70 mb-3">
          {item.eyebrow}
        </p>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-5 text primary">
          {item.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {item.content}
        </p>
      </motion.div>
    </div>
  );
}

export default function PassionScrollSection() {
  const items = useMemo<SectionItem[]>(
    () => [
      {
        eyebrow: "Chapter 01",
        title: "Why I Chose Biomedical Engineering",
        content: `Illness stopped being a concept when it entered my family. Both of my grandmothers are sick, fighting very different battles. One is slowly losing parts of her mind. Conversations repeat. Memories fade. The person she has always been feels like she is slipping away in pieces.

My other grandmother is fighting a condition attacking her body. Pain, weakness, limitations that were not there before. Watching strength disappear is a different kind of heartbreak.

Their conditions are progressing faster than the system around them can respond. In India, where much of their care happens, healthcare is uneven. Not fully digitalized. Not always coordinated. Appointments are delayed. Information moves slowly. The disease does not.

I have sat in rooms where the unspoken feeling is that there is nothing more to do. That silence changes you. It forces you to confront how fragile both the brain and the body truly are.

I chose biomedical engineering because I refuse to accept that edge. I want to build solutions that move faster than decline and restore independence when function begins to fade.`,
      },
      {
        title: "What I Am Working Toward",
        eyebrow: "Chapter 02",
        content: `Everything I pursue traces back to them. I have watched my family live in a cycle of “hurry up and wait.” Hurry to secure appointments. Hurry to gather reports. Hurry to try another treatment. Then wait while progression continues.

I do not want temporary relief that only slows deterioration for a moment. I want meaningful shifts in trajectory. Solutions that restore real function rather than compensate for loss. Systems designed to adapt alongside the person using them, not remain fixed while needs evolve.

That is why I am committed to intelligent assistive systems and adaptive prosthetics that return autonomy. Technology should protect dignity, not simply manage limitation. It should support daily life in ways that feel natural, not clinical.

I am also deeply interested in nanoplatforms, particularly graphene quantum dots for targeted therapies in neurodegenerative disease. If advanced delivery systems can slow biological progression, they deserve serious translational development. Ideas in a lab only matter if they eventually reach the people waiting for them.`,
      },
      {
        title: "The Standard I Hold",
        eyebrow: "Chapter 03",
        content: `Waiting while decline continues is not acceptable to me. Promising science should not remain theoretical.
        
It should move toward implementation with intention and care. I would actively pursue collaboration on patent development and protection for graphene quantum dot technologies if given the opportunity. Breakthroughs should not stall between publication and practice. Research without translation leaves families in the same uncertain position.

At the core of my work is something personal. I have seen what it feels like to wait for answers that do not come fast enough. Innovation must move faster than deterioration. Research must translate into tools that preserve identity, mobility, and cognitive function.

I refuse to accept a future defined by passive observation while capability disappears.`,
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#F7EFEA] via-[#F3E7E2] to-background py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 opacity-0 animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70 mb-4">
            My Purpose
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-primary">
            Why this work matters to me.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Swipe or scroll horizontally to move through each chapter. Start
            with why this work became personal, then move right into what I&apos;m
            building toward.
          </p>
          <div className="mt-8 h-px w-16 bg-primary/40 rounded-full" />
        </div>

        {/* Horizontal scroll chapters */}
        <div className="relative -mx-6 lg:-mx-12">
          <div className="flex gap-6 lg:gap-8 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth px-6 lg:px-12 pb-4">
            {items.map((item, index) => (
              <Step
                key={item.title}
                item={item}
                index={index}
                active={activeIndex === index}
                onEnter={() => handleEnter(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}