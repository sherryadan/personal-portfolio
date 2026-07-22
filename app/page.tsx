import Navigation from "./components/Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <div className="pt-24">
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <EducationSection id="education" />
        <ContactSection id="contact" />
      </div>
    </div>
  );
}
