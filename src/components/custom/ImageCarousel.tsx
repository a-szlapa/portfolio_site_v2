"use client"

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Lightbox from "./Lightbox";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <>
        <div className="w-full">
          <img
            className="rounded-lg mt-4 w-full cursor-zoom-in"
            src={images[0]}
            alt={`${alt} screenshot`}
            onClick={() => setLightboxIndex(0)}
          />
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            alt={alt}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {images.map((imgUrl, idx) => (
            <CarouselItem key={imgUrl} className="w-full">
              <img
                className="rounded-lg mt-4 w-full cursor-zoom-in"
                src={imgUrl}
                alt={`${alt} screenshot ${idx + 1}`}
                onClick={() => setLightboxIndex(idx)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:text-foreground" />
        <CarouselNext className="hover:text-foreground" />
      </Carousel>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          alt={alt}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
};

export default ImageCarousel;