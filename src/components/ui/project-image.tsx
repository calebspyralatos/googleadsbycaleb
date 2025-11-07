interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full transition-transform duration-300 ease-out group-hover:scale-110"
      />
    </div>
  );
};
