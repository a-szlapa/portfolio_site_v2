interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-8 ml-10">
      <p className="text-primary text-3xl font-semibold mb-5">{title}</p>
    </div>
  );
};

export default SectionHeader;
