import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  alt: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  alt,
  onClose,
  onNavigate,
}) => {
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      if (e.key === "ArrowRight") onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-secondary"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {hasMultiple && (
        <button
          className="absolute left-4 text-white hover:text-secondary"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      <img
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      {hasMultiple && (
        <button
          className="absolute right-4 text-white hover:text-secondary"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
          }}
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;