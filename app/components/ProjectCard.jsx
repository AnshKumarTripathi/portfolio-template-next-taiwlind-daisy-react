import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  date, 
  techStack, 
  demoLink, 
  demoLinkText = "Live Demo",
  videoLink, 
  githubLink,
  priority = false 
}) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <figure className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading={priority ? 'eager' : 'lazy'}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>
      
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h3 className="card-title text-xl font-bold text-primary group-hover:text-primary-focus transition-colors duration-300">{title}</h3>
          <span className="text-sm text-base-content/60">{date}</span>
        </div>
        <p className="mt-2 text-base-content/80 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span key={index} className="badge badge-primary badge-outline hover:badge-primary transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="card-actions justify-end mt-6 gap-2">
          {demoLink && (
            <Link 
              href={demoLink} 
              className="btn btn-primary btn-sm hover:btn-primary-focus transition-colors duration-200"
            >
              {demoLinkText}
            </Link>
          )}
          {videoLink && (
            <Link 
              href={videoLink} 
              className="btn btn-secondary btn-sm hover:btn-secondary-focus transition-colors duration-200"
            >
              Watch Video
            </Link>
          )}
          {githubLink && (
            <Link 
              href={githubLink} 
              className="btn btn-ghost btn-sm hover:btn-ghost-focus transition-colors duration-200"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 