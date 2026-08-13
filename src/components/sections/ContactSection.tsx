import SectionHeader from "@/components/custom/SectionHeader";
import TimelineRow from "@/components/custom/TimelineRow";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl p-8" id="contact">
      <SectionHeader title="Contact" />

      <div>
        <TimelineRow lineSpacingClassName="mx-10 ml-10">
          <div className="my-10 w-full h-full flex flex-col gap-4">
            <a
              href="mailto:szlapaaleksy@gmail.com"
              className="font-semibold text-2xl text-secondary hover:underline"
            >
              szlapaaleksy@gmail.com
            </a>

            <a
              href="tel:+48 535 626 687"
              className="font-semibold text-2xl text-secondary hover:underline"
            >
              +48 535 626 687
            </a>
          </div>
        </TimelineRow>
      </div>
    </div>
  );
};

export default ContactSection;