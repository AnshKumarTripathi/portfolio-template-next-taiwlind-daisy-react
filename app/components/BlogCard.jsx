import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ 
  title, 
  excerpt, 
  image, 
  date, 
  readTime, 
  slug,
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
        <h3 className="card-title text-xl font-bold text-primary group-hover:text-primary-focus transition-colors duration-300">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-base-content/60">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-base-content/30"></span>
          <span>{readTime} min read</span>
        </div>
        <p className="mt-3 text-base-content/80 leading-relaxed line-clamp-3">{excerpt}</p>
        
        <div className="card-actions justify-end mt-6">
          <Link 
            href={`/blogs/${slug}`} 
            className="btn btn-primary btn-sm hover:btn-primary-focus transition-colors duration-200"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 