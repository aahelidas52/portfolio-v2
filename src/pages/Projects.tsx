import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import {
  Cpu,
  Activity,
  Stethoscope,
  Syringe,
  Microscope,
  Dna,
  Wrench,
  Thermometer,
} from "lucide-react";
import useSectionFocus from "@/hooks/useSectionFocus";

const projects = [
  {
    title: "Robotic Hip Exoskeleton (Assist-as-Needed Control)",
    summary:
      "Adaptive hip-assist concept using EMG + IMU sensing with a safety-first testing and evaluation plan.",
    tags: ["Rehab Robotics", "Controls", "Wearables"],
    icon: Stethoscope,
    slug: "robotic-hip-exoskeleton",
  },
  {
    title: "Monoleaflet Mechanical Heart Valve",
    summary:
      "Designed and tested a monoleaflet valve using a mock circulatory loop to evaluate flow resistance and regurgitation.",
    tags: ["Cardio Devices", "Fluid Mechanics", "Testing"],
    icon: Activity,
    slug: "monoleaflet-heart-valve",
  },
  {
    title: "Steerable Laparoscopy Instrument Concept",
    summary:
      "Steerability + ergonomics concept to reduce surgeon fatigue and improve maneuverability in minimally invasive tools.",
    tags: ["Surgical Devices", "Human Factors", "SolidWorks"],
    icon: Wrench,
    slug: "steerable-laparoscopy-instrument",
  },
  {
    title: "Kidney Organoid-on-a-Chip (Microfluidic Flow Modeling)",
    summary:
      "Microfluidic kidney organoid model analyzing shear stress and flow behavior under controlled perfusion.",
    tags: ["Microfluidics", "COMSOL", "Organ-on-Chip", "Fluid Mechanics"],
    icon: Activity, // ✅ replaced Kidney (doesn't exist)
    slug: "kidney-on-a-chip",
  },
  {
    title: "Scaffold Fabrication for Cartilage Regeneration",
    summary:
      "Compared scaffold materials and fabrication methods and mapped tradeoffs across mechanics, wettability, and bio-compatibility.",
    tags: ["Biomaterials", "Tissue Engineering", "3D Printing"],
    icon: Dna,
    slug: "cartilage-scaffold-fabrication",
  },
  {
    title: "Paper-Based Microfluidics (µPAD Barrier Design)",
    summary:
      "Designed and tested paper-based microfluidic devices comparing wax, marker, and pencil barriers using leakage area and wicking speed.",
    tags: ["Microfluidics", "Design of Experiments", "ImageJ", "Diagnostics"],
    icon: Microscope,
    slug: "paper-based-microfluidics",
  },
];

const Projects = () => {
  const { sectionRef, isFocused } = useSectionFocus();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className="mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Projects
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A collection of my key projects spanning biomedical device
              development, research initiatives, and healthcare technology
              innovations.
            </p>

            <div className="w-16 h-0.5 bg-accent rounded-full mt-8" />
          </div>

          {/* Project Grid */}
          <section
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`section-focusable ${
              isFocused ? "section-focused" : ""
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.slug}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;