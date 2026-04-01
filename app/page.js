import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
