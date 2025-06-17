"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

// Example projects data with Unsplash images
const allProjects = [
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
    category: "AI/ML",
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
    category: "Web Development",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A fitness tracking application with workout plans and progress monitoring.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    date: "December 2023",
    techStack: ["React Native", "Firebase", "Redux"],
    demoLink: "https://fitness-app-demo.com",
    category: "Mobile Development",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop",
    date: "November 2023",
    techStack: ["Solidity", "Web3.js", "React"],
    githubLink: "https://github.com/username/blockchain-voting",
    category: "Blockchain",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "October 2023",
    techStack: ["D3.js", "React", "Node.js"],
    demoLink: "https://dashboard-demo.com",
    category: "Data Science",
  },
];

const categories = [...new Set(allProjects.map((project) => project.category))];
const techStacks = [
  ...new Set(allProjects.flatMap((project) => project.techStack)),
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category);
    const matchesTechStack =
      selectedTechStacks.length === 0 ||
      project.techStack.some((tech) => selectedTechStacks.includes(tech));

    return matchesSearch && matchesCategory && matchesTechStack;
  });

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTechStack = (tech) => {
    setSelectedTechStacks((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-base-100/95 backdrop-blur-[2px] rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">All Projects</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-6">
            <div className="bg-base-200/95 backdrop-blur-[2px] p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="checkbox checkbox-primary"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-base-200/95 backdrop-blur-[2px] p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">Tech Stack</h3>
              <div className="space-y-2">
                {techStacks.map((tech) => (
                  <label key={tech} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedTechStacks.includes(tech)}
                      onChange={() => toggleTechStack(tech)}
                      className="checkbox checkbox-primary"
                    />
                    <span>{tech}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full bg-base-100/95 backdrop-blur-[2px]"
              />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-8 bg-base-200/95 backdrop-blur-[2px] rounded-lg">
                <p className="text-lg text-base-content/80">
                  No projects found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
