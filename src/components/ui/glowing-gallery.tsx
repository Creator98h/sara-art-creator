import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GlowingGalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
  className?: string;
  onImageClick?: (index: number) => void;
}

export const GlowingGallery = ({ images, className, onImageClick }: GlowingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full relative glow-effect cursor-pointer"
              onClick={() => onImageClick?.(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl"
              />
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end">
                  <h3 className="text-white font-medium p-4">{image.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-200",
                  currentIndex === index ? "bg-accent w-8" : "bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};