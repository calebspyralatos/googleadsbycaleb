import { useState, useRef } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

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

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className="w-full transition-transform duration-300 ease-out"
        style={{
          transform: isHovering
            ? `scale(1.6) translate(${(50 - mousePosition.x) * 0.5}%, ${(50 - mousePosition.y) * 0.5}%)`
            : "scale(1) translate(0, 0)",
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />
    </div>
  );
};
