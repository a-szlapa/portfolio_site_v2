import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LinkItem from "./LinkItem";

interface Project {
  timeFrame: string;
  name: string;
  images: string[];
  description: string;
  links: string[];
  tags: string[];
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const hasImages = project.images.length > 0;

  return (
    <div className="flex flex-row">
        {/* {line} */}
      <div className="relative border-border border-1 w-0 h-fill flex items-center mx-15 ml-10">
        <div className="absolute -translate-x-1/2 border-border border-3 rounded-full w-4 h-4 bg-background" />
      </div>
      <div className="mb-10 w-full">
        <span className="font-semibold text-2xl text-secondary">
          {project.timeFrame}
        </span>
        <h2 className="font-semibold text-4xl">{project.name}</h2>

        {hasImages && project.images.length === 1 && (
          <div className="w-full">
            <img className="rounded-lg mt-4 w-full" src={project.images[0]} alt="Project image" />
          </div>
        )}

        {hasImages && project.images.length > 1 && (
          <Carousel className="w-full">
            <CarouselContent className="w-full">
              {project.images.map((imgUrl, idx) => (
                <CarouselItem key={idx} className="w-full">
                    <img className="rounded-lg mt-4 w-full" src={imgUrl} alt="Project image" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}

        <p className="text-xl max-w-[100ch] my-4 mb-6">{project.description}</p>
        <div className="flex flex-row flex-wrap max-w-[70ch] items-center gap-2">

            {project.links.map((link, index) => (<LinkItem link={link} key={index}/>))}
            <div className="rounded-full bg-primary w-2 h-2 mx-3">

            </div>
            {project.tags.map((link, index) => (<LinkItem link={link} key={index}/>))}

        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
