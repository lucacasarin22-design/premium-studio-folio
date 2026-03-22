import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import AcademicBackground from "@/components/AcademicBackground";
import ProjectsSection from "@/components/ProjectsSection";
import GapYearSection from "@/components/GapYearSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalBackground />
        <AcademicBackground />
        <ProjectsSection />
        <GapYearSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
