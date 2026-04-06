import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import headshoti from "../assets/Silhouette1.png";
import resumePdf from "../assets/resume.pdf?url";

function TypeName({
  text,
  className = "",
  speedMs = 85,
  startDelayMs = 150,
}: {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) return;

    let i = 0;
    let timeoutId: number;
    let intervalId: number;

    timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) window.clearInterval(intervalId);
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, reduceMotion]);

  const done = shown.length >= text.length;

  return (
    <h1 className={`relative ${className}`}>
      <span className="relative">
        {shown}
        <span className="absolute left-0 -bottom-2 h-[3px] w-1/3 bg-orange rounded-full" />
      </span>

      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="inline-block align-baseline ml-1"
          initial={{ opacity: 1 }}
          animate={{ opacity: done ? 0 : [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: done ? 0 : Infinity }}
        >
          |
        </motion.span>
      )}
    </h1>
  );
}

const HeroSection = () => {
  return (
    <section className="relative pt-20">
      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-orange" />
              Biomedical engineering • AI systems • Device development
            </motion.p>

            <div className="mt-5">
              <TypeName
                text={"AAHELI DAS"}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-primary"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 text-base sm:text-lg text-muted-foreground"
            >
              Biomedical Engineering Student & Researcher
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
            >
              I build practical, well-documented work at the intersection of biomechanics, medical devices,
              and data-driven research—focused on measurable outcomes and real constraints.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="gap-2 rounded-lg bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:ring-2 hover:ring-orange/40"
                >
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <a href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-lg border-border bg-card text-foreground shadow-sm hover:bg-muted"
                >
                  <Download className="h-5 w-5" />
                  View Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {[
                { k: "Devices", v: "Design + documentation" },
                { k: "Research", v: "Clear methods + results" },
                { k: "Leadership", v: "Teams + execution" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm hover:border-orange/40 transition-colors"
                >
                  <div className="text-sm font-medium text-foreground">{x.k}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{x.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:-mt-6">
            <div className="mt-8 mr-10 relative w-[430px] h-[560px] shrink-0">
              <motion.img
                src={headshoti}
                alt="Silhouette1"
                className="absolute top-0 right-0 w-96 h-auto object-contain block"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
              />
            
              <span className="absolute left-[18%] top-[74.5%] mt-2 h-[6px] w-96 bg-orange rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
