import { cn } from "@/lib/utils";

interface TimelineRowProps {
  children: React.ReactNode;
  /** Horizontal spacing around the connector line; ProjectItem and ContactSection use slightly different values. */
  lineSpacingClassName?: string;
}

/**
 * Renders the vertical connector line + dot alongside its content.
 * Shared by ProjectItem and ContactSection so the timeline look stays
 * in one place instead of being copy-pasted per section.
 */
const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  lineSpacingClassName = "mx-15 ml-10",
}) => {
  return (
    <div className="flex flex-row">
      <div
        className={cn(
          "relative border-border border-1 w-0 h-fill flex items-center",
          lineSpacingClassName
        )}
      >
        <div className="absolute -translate-x-1/2 border-border border-3 rounded-full w-4 h-4 bg-background" />
      </div>
      {children}
    </div>
  );
};

export default TimelineRow;
