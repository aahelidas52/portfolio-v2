import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillCategoryCard from "@/components/SkillCategoryCard";
import { Wrench, FlaskConical, Code, Users } from "lucide-react";
import useSectionFocus from "@/hooks/useSectionFocus";

const skillCategories = [
  {
    title: "Engineering + CAD + Design",
    description: "Mechanical design, modeling, and build workflows",
    icon: Wrench,
    skills: [
      "SolidWorks",
      "Fusion 360",
      "AutoCAD",
      "Revit",
      "Rhino 3D",
      "Slicer",
      "Adobe Illustrator/Express",
      "3D Printing",
      "Prototyping",
    ],
  },
  {
    title: "Lab + Testing + Instrumentation",
    description: "Hands-on lab work, measurement, and validation tools",
    icon: FlaskConical,
    skills: [
      "Microscope",
      "Centrifuge",
      "Oscilloscope",
      "Instron",
      "Pulsatile Flow Simulator",
      "ImageJ",
      "Minitab",
      "LabQuest",
      "ELISA",
      "Gage R&R",
    ],
  },
  {
    title: "Programming + Data",
    description: "Software, scripting, and analysis for engineering work",
    icon: Code,
    skills: [
      "Python",
      "MATLAB",
      "Java",
      "SQL",
      "HTML",
      "NetLogo",
      "Pandas",
      "Git",
      "Linux",
      "Oracle",
    ],
  },
  {
    title: "Regulatory + Professional",
    description: "Quality systems, risk, documentation, and leadership",
    icon: Users,
    skills: [
      "ISO 13485",
      "ISO 14971",
      "21 CFR 820",
      "DHR/DMR",
      "FMEA",
      "Hazard Analysis",
      "V&V Planning",
      "Technical Communication",
      "Cross-functional Collaboration",
      "Leadership",
    ],
  },
];

const highlightedSkills = [
  { name: "CAD (Computer-Aided Design)", level: 85 },
  { name: "COMSOL", level: 80 },
  { name: "FMEA / Risk", level: 80 },
  { name: "ISO 13485 / QMS", level: 75 },
];

const Skills = () => {
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
              Skills
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Engineering design, lab testing, software, and medical-device quality systems.
            </p>
            <div className="w-16 h-0.5 bg-accent/60 rounded-full mt-8" />
          </div>

          {/* Skill Categories */}
          <section
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`section-focusable ${isFocused ? "section-focused" : ""} mb-16`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <SkillCategoryCard {...category} />
                </div>
              ))}
            </div>
          </section>

          {/* Proficiency Section — light bars */}
          <section
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flat-card rounded-2xl p-8 lg:p-12 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Key Proficiencies
              </h2>

              <div className="max-w-2xl mx-auto space-y-6">
                {highlightedSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary/60">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/40 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${0.7 + index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
