// Simulating data fetching with caching
let projectsCache = null;
let blogsCache = null;
let certificationsCache = null;

export async function getProjects() {
  if (projectsCache) return projectsCache;

  // In a real app, this would be an API call
  const projects = [
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
      category: "Web Development",
    },
    // ... rest of the projects data
  ];

  projectsCache = projects;
  return projects;
}

export async function getBlogs() {
  if (blogsCache) return blogsCache;

  const blogs = [
    {
      title: "Building Scalable Web Applications",
      excerpt:
        "Learn the best practices for building and deploying scalable web applications using modern technologies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "March 15, 2024",
      readTime: 8,
      slug: "scalable-web-applications",
      category: "Web Development",
      tags: ["Scalability", "Performance", "Architecture"],
    },
    // ... rest of the blogs data
  ];

  blogsCache = blogs;
  return blogs;
}

export async function getCertifications() {
  if (certificationsCache) return certificationsCache;

  const certifications = [
    {
      title: "AWS Solutions Architect",
      description:
        "Professional certification in cloud architecture and AWS services.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      date: "December 2023",
      techStack: ["AWS", "Cloud Architecture", "DevOps"],
      verifyLink: "https://aws.amazon.com/certification",
      issuer: "Amazon Web Services",
    },
    // ... rest of the certifications data
  ];

  certificationsCache = certifications;
  return certifications;
}
