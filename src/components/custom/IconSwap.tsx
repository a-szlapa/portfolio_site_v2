import Image from "next/image";

interface IconSwapProps {
  icon: string;
  hoverIcon: string;
  alt: string;
  size?: number;
}

/**
 * Two stacked images that crossfade on hover of a `group` ancestor.
 * Shared by LinkItem and the sidebar's social link so the swap
 * behavior only has to be implemented once.
 */
const IconSwap: React.FC<IconSwapProps> = ({ icon, hoverIcon, alt, size = 28 }) => {
  return (
    <span
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image
        src={icon}
        alt={`${alt} icon`}
        width={size}
        height={size}
        className="absolute opacity-100 group-hover:opacity-0"
      />
      <Image
        src={hoverIcon}
        alt={`${alt} hover icon`}
        width={size}
        height={size}
        className="absolute opacity-0 group-hover:opacity-100"
      />
    </span>
  );
};

export default IconSwap;
