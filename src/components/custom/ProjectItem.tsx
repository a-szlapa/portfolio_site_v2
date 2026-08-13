import ImageCarousel from "./ImageCarousel";
import LinkItem from "./LinkItem";
import TimelineRow from "./TimelineRow";
import { Project } from "@/lib/types";

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <TimelineRow>
      <div className="mb-10 w-full">
        <span className="font-semibold text-2xl text-secondary">
          {project.timeFrame}
        </span>
        <h2 className="font-semibold text-4xl">{project.name}</h2>

        <ImageCarousel images={project.images} alt={project.name} />

        <p className="text-xl max-w-[100ch] my-4 mb-6">{project.description}</p>
        <div className="flex flex-row flex-wrap max-w-[70ch] items-center gap-2">
          {project.links.map((link) => (
            <LinkItem item={link} key={link.url} />
          ))}
          <div className="rounded-full bg-primary w-2 h-2 mx-3" />
          {project.tools.map((tool) => (
            <LinkItem item={tool} key={tool.url} />
          ))}
        </div>
      </div>
    </TimelineRow>
  );
};

export default ProjectItem;