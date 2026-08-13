export type tool = {
  name: string;
  url: string;
  icon: string;
  hoverIcon: string;
};

export type link = {
  name: string;
  url: string;
  icon: string;
  hoverIcon: string;
};

export type Project = {
  name: string;
  timeFrame: string;
  description: string;
  images: string[];
  tools: tool[];
  links: link[];
};
