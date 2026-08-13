import SectionHeader from "@/components/custom/SectionHeader";
import TimelineRow from "@/components/custom/TimelineRow";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl p-8">
      <SectionHeader title="Contact" />
      <div>
        <TimelineRow lineSpacingClassName="mx-10 ml-10">
          <div className="my-10 w-full h-full">
            <span className="font-semibold text-2xl text-secondary">
              e-mail
            </span>
          </div>
        </TimelineRow>
      </div>
    </div>
  );
};

export default ContactSection;
