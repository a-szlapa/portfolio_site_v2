
type tool = {
  name: string;
  url: string;
  icon: string;
  hoverIcon: string;
}

type link = {
  name: string;
  url: string;
  icon: string;
  hoverIcon: string;
}

type Project = {
  name: string;
  timeFrame: string;
  description: string;
  tools: tool[];
  links: link[];
}