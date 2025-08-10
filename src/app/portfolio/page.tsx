"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Creative Website",
    category: "Web",
    image: "/image/coder.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile App",
    category: "App",
    image: "/image/coder1.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Branding Project",
    category: "Branding",
    image: "/image/coder2.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Another Website",
    category: "Web",
    image: "/image/coder3.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "More Branding",
    category: "Branding",
    image: "/image/coder4.jpg",
    link: "#",
  },
];

const categories = ["All", "Web", "App", "Branding"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black text-white min-h-screen px-4 py-12">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
        <p className="text-gray-400 mb-12">
          Some of our recent works that make us proud.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border rounded-full transition ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-600 hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
