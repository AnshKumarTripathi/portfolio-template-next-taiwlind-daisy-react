import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";

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
    <div className="container mx-auto px-4">
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center py-20 relative bg-base-100"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Your Name"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience
              in building modern web applications. My journey in tech started
              with a curiosity about how things work on the internet, which led
              me to explore various technologies and frameworks. I specialize in
              JavaScript ecosystem and cloud technologies, always eager to learn
              and adapt to new challenges.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      <section className="min-h-screen flex flex-col justify-center py-20 bg-base-200">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">
            Maker Portfolio
          </h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Maker Portfolio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 relative bg-base-100">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 relative bg-base-200">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-300"
              >
                <figure className="relative h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </figure>

                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h3 className="card-title text-xl font-bold text-primary group-hover:text-primary-focus transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-base-content/60">
                      {cert.date}
                    </span>
                  </div>
                  <p className="mt-2 text-base-content/80 leading-relaxed">
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
        </div>
      </section>

      {/* Blogs Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 relative bg-base-100">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/5 to-red-50/5 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Get in Touch
              </h3>
              <p className="mb-4">
                Let's connect and discuss how we can work together to bring your
                ideas to life! I'm always excited to hear about new projects and
                opportunities.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="modern-button"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="modern-button"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="modern-button"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Automation Tools Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left text-gradient">
                Recent Automation Tools
              </h3>
              <ul className="space-y-2">
                <li className="text-center md:text-left">
                  <a
                    href="/automation-tools/social-media-scheduler"
                    className="footer-link"
                  >
                    Social Media Scheduler
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a
                    href="/automation-tools/data-backup-tool"
                    className="footer-link"
                  >
                    Data Backup Tool
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a
                    href="/automation-tools/content-generator"
                    className="footer-link"
                  >
                    AI Content Generator
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a
                    href="/automation-tools/email-marketing"
                    className="footer-link"
                  >
                    Email Marketing Automation
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a
                    href="/automation-tools/seo-analyzer"
                    className="footer-link"
                  >
                    SEO Analyzer
                  </a>
                </li>
              </ul>
            </div>

            {/* Startups Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left text-gradient">
                Popular Startups
              </h3>
              <ul className="space-y-2">
                <li className="text-center md:text-left">
                  <a href="/startups/eco-tech" className="footer-link">
                    EcoTech Solutions
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a href="/startups/health-tech" className="footer-link">
                    HealthTech Innovations
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a href="/startups/fintech" className="footer-link">
                    FinTech Revolution
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a href="/startups/edtech" className="footer-link">
                    EduTech Platform
                  </a>
                </li>
                <li className="text-center md:text-left">
                  <a href="/startups/ai-startup" className="footer-link">
                    AI Startup Hub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
