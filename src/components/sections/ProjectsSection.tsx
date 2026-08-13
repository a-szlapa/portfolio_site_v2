import ProjectItem from "@/components/custom/ProjectItem";
import SectionHeader from "@/components/custom/SectionHeader";
import { projects } from "@/lib/projects";

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-4xl p-8">
      <SectionHeader title="Projects & Experience" />
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
