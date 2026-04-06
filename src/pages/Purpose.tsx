import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PassionScrollSection from "@/components/PassionScrollSection";
import paper1 from "../assets/Essay1.pdf?url";
import paper2 from "../assets/Essay2.pdf?url";

const beforeAllText = `Before hospitals, before research papers, before nanotechnology, I was just a kid who liked to take things apart.

I broke toys. I opened remotes. I disassembled gadgets I probably should not have touched. To some people, I was just being wild or difficult. But I was not trying to destroy anything. I wanted to see what was inside. I wanted to understand what failed first. And most importantly, I wanted to know if I could put it back together better than before.

That is also why I loved LEGOS. Not just building what the instructions told me to build, but rebuilding it into something else. Tearing it down. Iterating. Fixing what did not feel right.

Looking back, I was not breaking things for chaos. I was studying failure.

Now the things I want to understand are not toys. They are systems. Bodies. Diseases. Healthcare infrastructure. And I still ask the same question I asked as a child:

What is breaking, and how do we rebuild it better?`;

type Paper = {
  title: string;
  description: string;
  href: string; // where the PDF lives
  downloadName?: string; // optional
};

const papers: Paper[] = [
  {
    title: "Ayurveda to the Rescue",
    description:
      "Ancient Ayurvedic suturing methods show how early Indian medicine used natural materials to inspire modern biodegradable surgical technologies.",
    href: paper1,
    downloadName: "Aaheli_Das_Paper_1.pdf",
  },

  {
    title: "The Cost of a Heartbeat",
    description:
      "Healthcare innovation must reduce cost and design barriers so life-saving treatments like mechanical heart valves are accessible to all patients.",
    href: paper2,
    downloadName: "Aaheli_Das_Paper_2.pdf",
  },
];

function PapersSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-primary">Engineering in a Global Context</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          I care about engineering that survives outside perfect conditions. This
          is where I dig into the real-world impact, tradeoffs, and what changes
          when technology meets infrastructure gaps.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {papers.map((p) => (
            <div
              key={p.title}
              className="flat-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* View */}
                <a
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-border hover:border-accent/30 transition-colors"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>

                {/* Download */}
                <a
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  href={p.href}
                  download={p.downloadName ?? true}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Purpose() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* 1) First thing you see */}
        <section className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-5xl font-bold leading-tight text-primary">Before All of This</h1>
            <p className="mt-8 text-muted-foreground leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
              {beforeAllText}
            </p>
          </div>
        </section>

        {/* 2) Scroll animation sections */}
        <PassionScrollSection />

        {/* 3) Global impact + papers */}
        <PapersSection />
      </main>
      <Footer />
    </div>
  );
}