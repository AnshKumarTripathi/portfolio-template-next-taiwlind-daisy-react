"use client";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

// Example blogs data with Unsplash images
const allBlogs = [
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
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the landscape of web development and what's coming next.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    date: "March 10, 2024",
    readTime: 12,
    slug: "ai-in-web-development",
    category: "AI/ML",
    tags: ["AI", "Machine Learning", "Web Development"],
  },
  {
    title: "Mastering TypeScript",
    excerpt:
      "A comprehensive guide to TypeScript features and best practices for modern web development.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    date: "March 5, 2024",
    readTime: 10,
    slug: "mastering-typescript",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Type Safety"],
  },
  {
    title: "Cloud Architecture Patterns",
    excerpt:
      "Understanding common cloud architecture patterns and when to use them in your applications.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    date: "February 28, 2024",
    readTime: 15,
    slug: "cloud-architecture-patterns",
    category: "Cloud",
    tags: ["Cloud", "Architecture", "AWS"],
  },
  {
    title: "React Performance Optimization",
    excerpt:
      "Tips and tricks for optimizing React applications for better performance and user experience.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    date: "February 20, 2024",
    readTime: 9,
    slug: "react-performance-optimization",
    category: "Web Development",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    title: "DevOps Best Practices",
    excerpt:
      "Essential DevOps practices for modern software development and deployment.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    date: "February 15, 2024",
    readTime: 11,
    slug: "devops-best-practices",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation"],
  },
];

const categories = [...new Set(allBlogs.map((blog) => blog.category))];
const tags = [...new Set(allBlogs.flatMap((blog) => blog.tags))];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(blog.category);
    const matchesTags =
      selectedTags.length === 0 ||
      blog.tags.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-base-100/95 backdrop-blur-[2px] rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">All Blogs</h1>

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
              <h3 className="font-semibold mb-3 text-primary">Tags</h3>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="checkbox checkbox-primary"
                    />
                    <span>{tag}</span>
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
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full bg-base-100/95 backdrop-blur-[2px]"
              />
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-8 bg-base-200/95 backdrop-blur-[2px] rounded-lg">
                <p className="text-lg text-base-content/80">
                  No blogs found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
