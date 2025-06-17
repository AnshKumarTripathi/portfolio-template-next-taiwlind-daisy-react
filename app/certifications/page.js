"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

// Example certifications data with Unsplash images
const allCertifications = [
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
  {
    title: "Google Cloud Professional",
    description:
      "Expert-level certification in Google Cloud Platform services and solutions.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "November 2023",
    techStack: ["GCP", "Cloud Computing", "Kubernetes"],
    verifyLink: "https://cloud.google.com/certification",
    issuer: "Google Cloud",
  },
  {
    title: "Microsoft Azure Developer",
    description:
      "Professional certification in Azure development and cloud solutions.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "October 2023",
    techStack: ["Azure", "C#", ".NET"],
    verifyLink: "https://microsoft.com/certification",
    issuer: "Microsoft",
  },
  {
    title: "Kubernetes Administrator",
    description:
      "Certified Kubernetes Administrator (CKA) demonstrating expertise in container orchestration.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "September 2023",
    techStack: ["Kubernetes", "Docker", "DevOps"],
    verifyLink: "https://www.cncf.io/certification/cka/",
    issuer: "Cloud Native Computing Foundation",
  },
  {
    title: "Red Hat Certified Engineer",
    description:
      "Advanced certification in Linux system administration and automation.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "August 2023",
    techStack: ["Linux", "Automation", "System Administration"],
    verifyLink: "https://www.redhat.com/en/services/certification/rhce",
    issuer: "Red Hat",
  },
  {
    title: "Oracle Certified Professional",
    description:
      "Professional certification in Java programming and enterprise development.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "July 2023",
    techStack: ["Java", "Enterprise Development", "Database"],
    verifyLink: "https://education.oracle.com/java-certification",
    issuer: "Oracle",
  },
];

const issuers = [...new Set(allCertifications.map((cert) => cert.issuer))];
const techStacks = [
  ...new Set(allCertifications.flatMap((cert) => cert.techStack)),
];

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuers, setSelectedIssuers] = useState([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);

  const filteredCertifications = allCertifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIssuer =
      selectedIssuers.length === 0 || selectedIssuers.includes(cert.issuer);
    const matchesTechStack =
      selectedTechStacks.length === 0 ||
      cert.techStack.some((tech) => selectedTechStacks.includes(tech));

    return matchesSearch && matchesIssuer && matchesTechStack;
  });

  const toggleIssuer = (issuer) => {
    setSelectedIssuers((prev) =>
      prev.includes(issuer)
        ? prev.filter((i) => i !== issuer)
        : [...prev, issuer]
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
        <h1 className="text-4xl font-bold mb-8 text-primary">
          All Certifications
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-6">
            <div className="bg-base-200/95 backdrop-blur-[2px] p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">Issuers</h3>
              <div className="space-y-2">
                {issuers.map((issuer) => (
                  <label key={issuer} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedIssuers.includes(issuer)}
                      onChange={() => toggleIssuer(issuer)}
                      className="checkbox checkbox-primary"
                    />
                    <span>{issuer}</span>
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
                placeholder="Search certifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full bg-base-100/95 backdrop-blur-[2px]"
              />
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertifications.map((cert, index) => (
                <ProjectCard
                  key={index}
                  {...cert}
                  demoLink={cert.verifyLink}
                  demoLinkText="Verify Certificate"
                />
              ))}
            </div>

            {filteredCertifications.length === 0 && (
              <div className="text-center py-8 bg-base-200/95 backdrop-blur-[2px] rounded-lg">
                <p className="text-lg text-base-content/80">
                  No certifications found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
