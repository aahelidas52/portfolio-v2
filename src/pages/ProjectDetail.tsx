import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, FileText, Image as ImageIcon } from "lucide-react";
/* ===================== IMPORTS ===================== */

// Exoskeleton
import exoFigure from "../assets/Projects/robotic-hip-exoskeleton/01-exoskeleton-figure.png";
import exoSlides from "../assets/Projects/robotic-hip-exoskeleton/01-exoskeleton-slides.pdf?url";

// Heart Valve
import leafletReport from "../assets/Projects/monoleaflet-heart-valve/01-leaflet-report.pdf?url";
import leafletSlides from "../assets/Projects/monoleaflet-heart-valve/01-leaflet-slides.pdf?url";
import leafletPoster from "../assets/Projects/monoleaflet-heart-valve/01-leaflet-poster.pdf?url";
import leafletImg1 from "../assets/Projects/monoleaflet-heart-valve/01-leaflet-base-butterfly-hinge.jpg";
import leafletImg2 from "../assets/Projects/monoleaflet-heart-valve/02-final-leaflet-circular-rod.jpg";

// Laparoscopy
import laparoscopySlides from "../assets/Projects/steerable-laparoscopy-instrument/01-laparoscopy-slides.pdf?url";
import lap1 from "../assets/Projects/steerable-laparoscopy-instrument/01-napkin-design.png";
import lap2 from "../assets/Projects/steerable-laparoscopy-instrument/02-final-design-composite.jpg";
import lap3 from "../assets/Projects/steerable-laparoscopy-instrument/03-left-drawings.jpg";
import lap4 from "../assets/Projects/steerable-laparoscopy-instrument/04-right-drawings.jpg";
import lap5 from "../assets/Projects/steerable-laparoscopy-instrument/05-steering-mechanism.jpg";

// Kidney (kept consistent)
import kidneyImg1 from "../assets/Projects/kidney-on-a-chip/01-kidney-geometry.jpg";
import kidneyImg2 from "../assets/Projects/kidney-on-a-chip/02-kidney-zoomed-in-geometry.png";
import kidneyImg3 from "../assets/Projects/kidney-on-a-chip/03-kidney-velocity-magnitude.png";
import kidneyImg4 from "../assets/Projects/kidney-on-a-chip/04-kidney-shear-stress.png";
import kidneySlides from "../assets/Projects/kidney-on-a-chip/01-kidney-slides.pdf?url";

// Scaffold
import scaffoldSlides from "../assets/Projects/cartilage-scaffold-fabrication/01-scaffold-slides.pdf?url";

// Microfluidics (µPAD)
import microImg1 from "../assets/Projects/paper-based-microfluidics/01-procedure-stencil.jpg";
import microImg2 from "../assets/Projects/paper-based-microfluidics/02-procedure-setup.png";
import microSlides from "../assets/Projects/paper-based-microfluidics/01-procedure-slides.pdf?url";
import microReport from "../assets/Projects/paper-based-microfluidics/02-procedure-report.pdf?url";

/* ===================== TYPES ===================== */

type Project = {
  title: string;
  role: string;
  timeline: string;
  tags: string[];
  overview: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  contributions: string[];
  tools: string[];
  links: { label: string; url: string; icon: typeof Github }[];
  images: { src: string; caption: string }[];
};

/* ===================== DATA ===================== */

const projectsData: Record<string, Project> = {
  "robotic-hip-exoskeleton": {
    title: "Robotic Hip Exoskeleton (Assist-as-Needed Control)",
    role: "Researcher · Controls & Systems",
    timeline: "2025 – Present",
    tags: ["Rehab Robotics", "Controls", "Wearables", "Human Factors"],
    overview:
      "Designed a robotic hip exoskeleton concept centered on Assist-as-Needed control, with the goal of making lower-limb assistance more adaptive, efficient, and personalized. The project focused on how multimodal sensing, including EMG and IMU data, could be used to estimate user intent and modulate support in real time instead of relying on rigid predefined assistance levels.",
    problem:
      "Many exoskeleton systems still depend on static or minimally adaptive control strategies that do not respond well to variation between users or even variation within the same user over time. This can reduce comfort, increase fatigue, and make the device feel unnatural. A more responsive control strategy is needed to improve both usability and rehabilitation relevance.",
    approach: [
      "Defined the overall control problem and compared adaptive assistance against fixed-assistance modes",
      "Outlined a sensing strategy using EMG and IMU inputs, with future consideration of BIA and fNIRS for richer physiological feedback",
      "Developed a system concept that incorporated torque limits, user safety constraints, and fallback operating modes",
      "Structured a within-subject testing plan to compare performance, comfort, and gait-related outcomes across assistance conditions",
    ],
    outcomes: [
      "Produced a full concept framework for an assist-as-needed hip exoskeleton",
      "Established a testing strategy for comparing adaptive and static control approaches",
      "Linked multimodal sensing inputs to practical control decisions and safety requirements",
      "Created a foundation for future implementation and experimental validation",
    ],
    contributions: [
      "Developed the control-system concept and sensing strategy",
      "Mapped safety requirements into the proposed system design",
      "Designed the experimental comparison structure and evaluation logic",
      "Documented future development directions and validation priorities",
    ],
    tools: ["MATLAB", "Python", "PsychoPy", "Minitab", "Raspberry Pi"],
    links: [{ label: "Slides", url: exoSlides, icon: FileText }],
    images: [
      {
        src: exoFigure,
        caption: "Initial robotic hip exoskeleton concept figure",
      },
    ],
  },

  "monoleaflet-heart-valve": {
    title: "Monoleaflet Mechanical Heart Valve",
    role: "Design & Testing Engineer",
    timeline: "2024",
    tags: ["Cardiovascular Devices", "Fluid Mechanics", "Design Iteration"],
    overview:
      "Designed and evaluated a monoleaflet mechanical heart valve prototype with an emphasis on flow behavior, leaflet motion, and overall hydrodynamic performance. The project combined CAD iteration, physical prototyping, and mock circulatory loop testing to study how design choices affected regurgitation and resistance.",
    problem:
      "Mechanical heart valves must maintain durability while also preserving physiologic flow patterns. Small geometric issues in the leaflet, hinge, or sealing surfaces can increase flow resistance, create leakage, and reduce functional performance. The challenge was to understand how the design could be improved through testing instead of relying only on theory.",
    approach: [
      "Iterated leaflet and hinge geometry in CAD to explore different opening and closing behaviors",
      "Fabricated valve prototypes through 3D printing for physical evaluation",
      "Tested the valve in a mock circulatory loop under controlled pressure and stroke conditions",
      "Compared observed behavior against expected performance targets to identify sources of inefficiency",
    ],
    outcomes: [
      "Demonstrated stable leaflet motion under test conditions",
      "Identified regurgitation and flow-resistance limitations in the prototype design",
      "Generated concrete redesign recommendations tied to hinge and leaflet behavior",
      "Strengthened understanding of the relationship between geometry and cardiovascular flow performance",
    ],
    contributions: [
      "Supported CAD iteration and prototype refinement",
      "Contributed to test setup and interpretation of valve performance",
      "Translated fluid-mechanics observations into actionable design improvements",
      "Documented limitations and next-step recommendations",
    ],
    tools: ["SolidWorks", "3D Printing", "Mock Circulatory Loop"],
    links: [
      { label: "Slides", url: leafletSlides, icon: FileText },
      { label: "Poster", url: leafletPoster, icon: FileText },
      { label: "Report", url: leafletReport, icon: FileText },
    ],
    images: [
      {
        src: leafletImg1,
        caption: "Leaflet base with butterfly hinge design",
      },
      {
        src: leafletImg2,
        caption: "Final leaflet design with circular shaped rod",
      },
    ],
  },

  "steerable-laparoscopy-instrument": {
    title: "Steerable Laparoscopy Instrument Concept",
    role: "Design Engineer",
    timeline: "2024",
    tags: ["Surgical Devices", "Human Factors", "SolidWorks"],
    overview:
      "Developed a steerable laparoscopic instrument concept intended to improve maneuverability and reduce surgeon fatigue during minimally invasive procedures. The project focused on the limitations of conventional rigid tools and explored how steerability could expand access while preserving usability and control.",
    problem:
      "Traditional laparoscopic instruments offer limited degrees of freedom, which can make navigation and targeting more difficult in constrained surgical environments. This limitation can increase surgeon fatigue, reduce precision, and sometimes require less efficient procedural workarounds. A steerable concept was needed to improve motion control without making the device overly complex.",
    approach: [
      "Mapped user needs and procedural constraints into design requirements",
      "Explored a guidewire-based steering mechanism to enable directional control at the distal end",
      "Modeled the system and core components in SolidWorks",
      "Outlined verification, usability, and safety considerations for future testing",
    ],
    outcomes: [
      "Produced a complete steerable instrument concept model",
      "Demonstrated how steerability could address maneuverability limitations in standard tools",
      "Defined a practical usability and verification plan for next-stage development",
      "Balanced mechanical functionality with human-factors considerations",
    ],
    contributions: [
      "Led documentation of design rationale and development direction",
      "Contributed to concept generation and mechanism refinement",
      "Integrated usability concerns into the design process",
      "Supported regulatory and safety-oriented thinking during development",
    ],
    tools: ["SolidWorks", "Rapid Prototyping"],
    links: [{ label: "Slides", url: laparoscopySlides, icon: FileText }],
    images: [
      { src: lap1, caption: "Initial napkin sketch of concept" },
      { src: lap2, caption: "Final composite CAD design" },
      { src: lap3, caption: "Left-side technical drawings" },
      { src: lap4, caption: "Right-side technical drawings" },
      { src: lap5, caption: "Internal steering mechanism design" },
    ],
  },

  "kidney-on-a-chip": {
    title: "Kidney Organoid-on-a-Chip (Microfluidic Flow Modeling)",
    role: "Modeling, Analysis & COMSOL Simulation",
    timeline: "2025",
    tags: ["Microfluidics", "COMSOL", "Organ-on-Chip", "Fluid Mechanics"],
    overview:
      "Modeled and analyzed a kidney organoid-on-a-chip system to study how microfluidic shear stress influences vascularization and organoid maturation under physiologically relevant flow conditions. The project emphasized how device geometry and well arrangement affect the flow environment surrounding embedded organoids.",
    problem:
      "Static organoid cultures lack the biomechanical cues present in vivo, especially fluid-induced shear stress that contributes to vascular development and maturation. Without controlled perfusion, these systems may fail to recreate the functional environment needed for more realistic kidney models. The challenge was to understand how channel and well design influence local flow conditions.",
    approach: [
      "Analyzed a microfluidic channel design containing cylindrical microwells for kidney organoids",
      "Derived analytical expressions for velocity profile and wall shear stress using simplified fluid-mechanics relationships",
      "Built a COMSOL model with parametric sweeps over well count, viscosity, and density",
      "Evaluated shear stress at well bottoms, walls, and the channel lid using probes and simulation outputs",
      "Compared how different geometries changed flow uniformity and localized stress exposure",
    ],
    outcomes: [
      "Observed higher shear stress near the inlet, outlet, and around solid boundaries",
      "Confirmed that shear stress generally decreased along the channel length",
      "Found that reducing well count improved flow uniformity but also changed local shear exposure patterns",
      "Identified design tradeoffs between maintaining laminar flow and achieving biologically meaningful stress levels",
    ],
    contributions: [
      "Connected fluid-mechanics behavior to biological implications for vascularization",
      "Built and interpreted COMSOL simulations of the device geometry",
      "Critically evaluated limitations in flow distribution and organoid exposure",
      "Proposed design-improvement directions based on simulation results",
    ],
    tools: ["COMSOL", "Analytical Modeling", "SolidWorks", "Microfluidics"],
    links: [{ label: "Slides", url: kidneySlides, icon: FileText }],
    images: [
      {
        src: kidneyImg1,
        caption:
          "Microfluidic channel geometry with evenly spaced microwells for kidney organoids",
      },
      {
        src: kidneyImg2,
        caption:
          "Zoomed-in view of microwell showing organoid placement within flow region",
      },
      {
        src: kidneyImg3,
        caption:
          "Velocity magnitude distribution across the microchannel highlighting flow gradients",
      },
      {
        src: kidneyImg4,
        caption:
          "Wall shear stress distribution on organoid and channel surfaces under perfusion",
      },
    ],
  },

  "cartilage-scaffold-fabrication": {
    title: "Scaffold Fabrication for Cartilage Regeneration",
    role: "Research Analyst",
    timeline: "2024",
    tags: ["Biomaterials", "Tissue Engineering", "3D Printing"],
    overview:
      "Compared scaffold fabrication strategies for cartilage regeneration, focusing on how different materials and processing methods influence mechanical performance, surface properties, degradation behavior, and biological usefulness. The project synthesized design tradeoffs rather than treating scaffold selection as a one-variable problem.",
    problem:
      "Cartilage has very limited regenerative capacity, so scaffold design is critical for supporting cell growth and tissue formation. The challenge is that no single material or fabrication method optimizes every performance category at once. A useful comparison needed to connect processing choices directly to engineering and biological outcomes.",
    approach: [
      "Compared fibrous, hybrid hydrogel, and extrusion-based scaffold strategies",
      "Related fabrication methods to stiffness, porosity, wettability, and degradation behavior",
      "Reviewed morphology and mechanical-testing approaches used to assess scaffold performance",
      "Mapped major tradeoffs between manufacturability, mechanical support, and cell compatibility",
    ],
    outcomes: [
      "Created a structured comparison of scaffold fabrication strategies",
      "Identified recurring design principles linking material choice to performance outcomes",
      "Clarified where different scaffold types are strong or weak depending on the application goal",
      "Built a framework for evaluating biomaterial tradeoffs more systematically",
    ],
    contributions: [
      "Synthesized literature into a decision-oriented engineering comparison",
      "Connected scaffold fabrication choices to measurable outcomes",
      "Organized material-performance tradeoffs into a clearer framework",
      "Highlighted practical limitations and future optimization directions",
    ],
    tools: ["Literature Review", "SEM (reported)", "Mechanical Testing (reported)"],
    links: [{ label: "Slides", url: scaffoldSlides, icon: FileText }],
    images: [],
  },

  "paper-based-microfluidics": {
    title: "Paper-Based Microfluidics (µPAD Barrier Design)",
    role: "Experimental Design, Fabrication & Analysis",
    timeline: "2025",
    tags: ["Microfluidics", "Design of Experiments", "ImageJ", "Diagnostics"],
    overview:
      "Designed and tested paper-based microfluidic devices to compare how wax, marker, and pencil barriers affect fluid containment and transport in low-cost diagnostic platforms. The project focused on how barrier choice changes the reliability and reproducibility of paper-based flow systems used in point-of-care applications.",
    problem:
      "Paper-based diagnostics depend on barriers that control liquid movement through a defined channel. Weak or inconsistent barriers can increase leakage, distort wicking behavior, and reduce the reliability of the device. The challenge was to determine whether barrier material significantly affects performance and to quantify those differences experimentally.",
    approach: [
      "Designed circular paper-based test devices using a stencil-guided fabrication approach",
      "Created barrier patterns with wax, marker, and pencil on Whatman chromatography paper",
      "Included positive and negative controls to strengthen comparison quality",
      "Recorded dyed-water spreading and measured leakage area and wicking speed using ImageJ",
      "Used a comparative Design of Experiments framework with randomized replicated trials",
      "Applied one-way ANOVA and Tukey HSD to compare barrier performance statistically",
    ],
    outcomes: [
      "Found statistically significant differences in leakage area across barrier types",
      "Found statistically significant differences in wicking speed between at least two barrier conditions",
      "Observed that pencil produced the lowest average leakage area in the final report",
      "Observed that marker showed the strongest wicking-speed performance among the tested barriers",
      "Rejected the null hypothesis that barrier type does not affect device performance",
    ],
    contributions: [
      "Helped design the experimental workflow and testing logic",
      "Supported physical fabrication of the paper-based devices",
      "Performed ImageJ-based measurement and analysis of flow behavior",
      "Interpreted statistical results to evaluate barrier-performance tradeoffs",
    ],
    tools: ["ImageJ", "Design of Experiments", "ANOVA", "Tukey HSD", "µPAD Fabrication"],
    links: [
      { label: "Slides", url: microSlides, icon: FileText },
      { label: "Report", url: microReport, icon: FileText },
    ],
    images: [
      {
        src: microImg1,
        caption:
          "3D-printed stencil and barrier fabrication setup for paper-based microfluidic devices",
      },
      {
        src: microImg2,
        caption:
          "Experimental setup with randomized runs, controlled imaging, and ImageJ-based measurement workflow",
      },
    ],
  },
};

/* ===================== COMPONENT ===================== */

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Project Not Found
            </h1>
            <Link to="/projects">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4">

          {/* BACK BUTTON */}
          <Link to="/projects" className="inline-block mb-6">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-muted-foreground">
              {project.role} · {project.timeline}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-8">

              {/* OVERVIEW */}
              <section>
                <h2 className="font-bold text-xl mb-2">Overview</h2>
                <p className="text-muted-foreground">{project.overview}</p>
              </section>

              {/* PROBLEM */}
              <section>
                <h2 className="font-bold text-xl mb-2">Problem</h2>
                <p className="text-muted-foreground">{project.problem}</p>
              </section>

              {/* APPROACH */}
              <section>
                <h2 className="font-bold text-xl mb-2">Approach</h2>
                <ul className="space-y-2">
                  {project.approach.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </section>

              {/* OUTCOMES */}
              <section>
                <h2 className="font-bold text-xl mb-2">Outcomes</h2>
                <ul className="space-y-2">
                  {project.outcomes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </section>

              {/* 🔥 GALLERY (YOUR OLD STYLE, FIXED) */}
              <section>
                <h2 className="font-bold text-xl mb-4">Gallery</h2>

                {project.images.length === 0 ? (
                  <div className="border p-6 text-center rounded-lg">
                    <ImageIcon className="mx-auto mb-2" />
                    <p>No images</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((image, i) => (
                      <div key={i}>
                        <div className="border rounded-lg p-2">
                          <img
                            src={image.src}
                            className="w-full max-h-[420px] object-contain"
                          />
                        </div>
                        <p className="text-xs mt-2 text-center">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              {/* CONTRIBUTIONS */}
              <div className="border p-6 rounded-lg">
                <h3 className="font-bold mb-3">Contributions</h3>
                <ul className="space-y-2">
                  {project.contributions.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* TOOLS */}
              <div className="border p-6 rounded-lg">
                <h3 className="font-bold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs bg-muted rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              {project.links.length > 0 && (
                <div className="border p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Links</h3>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      className="flex items-center gap-2 mb-2"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;