import Sidebar from "@/components/layout/Sidebar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
