import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import StatsStrip from "@/components/StatsStrip";


const Index = () => {
  return (
<div className="min-h-screen flex flex-col text-foreground">
      <Navbar />
      <main className="relative flex-grow w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-44 -right-44 h-[520px] w-[520px] rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,80,40,0.06),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(30,90,60,0.05),transparent_45%)]" />
        </div>

        {/* Your existing gradient (full width) */}
        <div className="w-full bg-gradient-to-b from-[#F7EFEA] via-[#F3E7E2] to-[#EFE4DF]">
          <div className="mx-auto w-full max-w-6xl px-6">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <StatsStrip />
          </div>
        </div>
      </main>
      <div className="w-full bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;