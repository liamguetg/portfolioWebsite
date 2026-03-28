"use client";

import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/components/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="p-12 bg-gray-800/50">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-2">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`shadow-lg transition-all duration-300 hover:shadow-xl w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:items-stretch`}
          >
            <div className="w-full md:w-5/12 p-3">
              <div className="w-full h-56 md:h-full min-h-64 border-2 border-black overflow-hidden rounded-lg">
                <img src={project.imageSrc} alt={project.imageAlt} className="w-full h-full object-cover object-center rounded-md" />
              </div>
            </div>
            <CardContent className="w-full md:w-7/12 md:flex-1 px-5 pt-5 pb-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs md:text-sm text-gray-700 border border-gray-400 rounded-md px-2 py-1 bg-gray-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-700 mb-4 space-y-2 text-sm list-none">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline font-medium text-base"
                >
                  Live project →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  View on GitHub →
                </a>
                {project.liveCredentialNote ? (
                  <p className="text-gray-600 text-xs leading-snug">
                    <strong>Note:</strong> {project.liveCredentialNote}
                  </p>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
