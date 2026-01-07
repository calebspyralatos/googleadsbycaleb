import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  interactive?: boolean; // Enable mouse-following zoom for project images
}

export const ProjectImage = ({ src, alt, className = "", interactive = false }: ProjectImageProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 50, y: 50 });
  };

  const handleClick = () => {
    if (interactive) {
      setIsModalOpen(true);
    }
  };

  if (!interactive) {
    // Simple static zoom for non-interactive images
    return (
      <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
    );
  }

  // Interactive mouse-following zoom for project images
  return (
    <>
      <div
        ref={imageRef}
        className={`relative overflow-hidden rounded-2xl cursor-pointer md:cursor-default ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className="w-full transition-transform duration-300 ease-out"
          style={{
            transform: isHovering
              ? `scale(5) translate(${(50 - mousePosition.x) * 0.7}%, ${(50 - mousePosition.y) * 0.7}%)`
              : "scale(1) translate(0, 0)",
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
      </div>

      {/* Mobile Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-0">
          <div className="relative w-full h-full overflow-auto">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto"
              style={{ touchAction: 'pinch-zoom' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
