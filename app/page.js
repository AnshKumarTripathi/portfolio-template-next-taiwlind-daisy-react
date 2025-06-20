import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";

// Lazy load components
const ProjectCardLazy = dynamic(() => import("./components/ProjectCard"), {
  loading: () => (
    <div className="card bg-base-100 shadow-xl animate-pulse h-96"></div>
  ),
});

const BlogCardLazy = dynamic(() => import("./components/BlogCard"), {
  loading: () => (
    <div className="card bg-base-100 shadow-xl animate-pulse h-96"></div>
  ),
});

export default function Home() {
  // Example projects data with Unsplash images
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "March 2024",
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/username/ecommerce",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool using Stable Diffusion API with custom model fine-tuning.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      date: "February 2024",
      techStack: ["React", "Python", "TensorFlow", "AWS"],
      demoLink: "https://ai-image-demo.com",
      videoLink: "https://youtube.com/watch?v=example",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop",
      date: "January 2024",
      techStack: ["Vue.js", "Firebase", "TailwindCSS"],
      demoLink: "https://task-manager-demo.com",
      githubLink: "https://github.com/username/task-manager",
    },
  ];

  // Example certifications data with Unsplash images
  const certifications = [
    {
      title: "AWS Solutions Architect",
      description:
        "Professional certification in cloud architecture and AWS services.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      date: "December 2023",
      techStack: ["AWS", "Cloud Architecture", "DevOps"],
      demoLink: "https://aws.amazon.com/certification",
    },
    {
      title: "Google Cloud Professional",
      description:
        "Expert-level certification in Google Cloud Platform services and solutions.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      date: "November 2023",
      techStack: ["GCP", "Cloud Computing", "Kubernetes"],
      demoLink: "https://cloud.google.com/certification",
    },
    {
      title: "Microsoft Azure Developer",
      description:
        "Professional certification in Azure development and cloud solutions.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      date: "October 2023",
      techStack: ["Azure", "C#", ".NET"],
      demoLink: "https://microsoft.com/certification",
    },
  ];

  // Example blogs data with Unsplash images
  const featuredBlogs = [
    {
      title: "Building Scalable Web Applications",
      excerpt:
        "Learn the best practices for building and deploying scalable web applications using modern technologies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "March 15, 2024",
      readTime: 8,
      slug: "scalable-web-applications",
    },
    {
      title: "The Future of AI in Web Development",
      excerpt:
        "Exploring how artificial intelligence is transforming the landscape of web development and what's coming next.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      date: "March 10, 2024",
      readTime: 12,
      slug: "ai-in-web-development",
    },
  ];

  return (
    <div className="container mx-auto px-4 relative">
      {/* Grid Background - Full Page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-24 grid-rows-24">
          {Array.from({ length: 24 }).map((_, row) =>
            Array.from({ length: 24 }).map((_, col) => (
              <div key={`${row}-${col}`} className="relative group">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-base-content/10 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)] dark:group-hover:bg-secondary dark:group-hover:shadow-[0_0_10px_rgba(var(--secondary),0.5)] transition-all duration-300" />
                {/* Horizontal Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-base-content/10 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(var(--primary),0.5)] dark:group-hover:bg-secondary dark:group-hover:shadow-[0_0_10px_rgba(var(--secondary),0.5)] transition-all duration-300" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center py-10 md:py-20 relative bg-base-100/95 backdrop-blur-[2px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto px-4 w-full">
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Your Name"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 section-content max-w-2xl pr-0 md:pr-12 text-justify">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-6">
              I'm a passionate full-stack developer with 5+ years of experience
              in building modern web applications. My journey in tech started
              with a curiosity about how things work on the internet, which led
              me to explore various technologies and frameworks. I specialize in
              JavaScript ecosystem and cloud technologies, always eager to learn
              and adapt to new challenges.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "AWS"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-2 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=24&h=24&fit=crop"
                      alt={skill}
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="min-h-screen flex flex-col justify-center py-10 md:py-20 relative bg-base-200/95 backdrop-blur-[2px]">
        <div className="max-w-5xl mx-auto w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Maker Portfolio
            </h2>
            <p className="text-base md:text-lg text-base-content/80 max-w-2xl mx-auto">
              Watch how I bring ideas to life through code, design, and
              innovation. Each project is a story of problem-solving and
              creative thinking.
            </p>
          </div>

          <div className="relative group mb-8 md:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent z-10"></div>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Maker Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card bg-base-100/95 backdrop-blur-[2px] shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body">
                <h3 className="card-title text-primary group-hover:text-primary-focus transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Quick Projects
                </h3>
                <p className="text-base-content/80">
                  Watch how I build and deploy projects in record time while
                  maintaining quality.
                </p>
              </div>
            </div>

            <div className="card bg-base-100/95 backdrop-blur-[2px] shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body">
                <h3 className="card-title text-primary group-hover:text-primary-focus transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Problem Solving
                </h3>
                <p className="text-base-content/80">
                  See my approach to tackling complex technical challenges and
                  finding elegant solutions.
                </p>
              </div>
            </div>

            <div className="card bg-base-100/95 backdrop-blur-[2px] shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="card-body">
                <h3 className="card-title text-primary group-hover:text-primary-focus transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  Best Practices
                </h3>
                <p className="text-base-content/80">
                  Learn about the coding standards and development practices I
                  follow in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center py-10 md:py-20 relative bg-base-100/95 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/projects" className="btn btn-outline btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="min-h-screen flex flex-col justify-center py-10 md:py-20 relative bg-base-200/95 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-300"
              >
                <figure className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </figure>

                <div className="card-body">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="card-title text-lg md:text-xl font-bold text-primary group-hover:text-primary-focus transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-base-content/60">
                      {cert.date}
                    </span>
                  </div>
                  <p className="mt-2 text-base-content/80 leading-relaxed text-justify">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="badge badge-primary badge-outline hover:badge-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-end mt-6">
                    <Link
                      href={cert.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm hover:btn-primary-focus transition-colors duration-200"
                    >
                      Verify Certificate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/certifications"
              className="btn btn-outline btn-primary"
            >
              View All Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="min-h-screen flex flex-col justify-center py-10 md:py-20 relative bg-base-100/95 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blogs" className="btn btn-outline btn-primary">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
