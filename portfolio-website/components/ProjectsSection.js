"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/components/data/projects";

export default function ProjectsSection() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="projects" className="p-12 bg-gray-800/50">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto md:flex-row md:justify-center">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="shadow-lg flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-xl w-full max-w-sm md:w-96"
            onClick={() => toggleCard(project.id)}
          >
            <div
              className="w-full h-56 mx-2 mt-2 mb-2 border-2 border-black overflow-hidden rounded-lg"
              style={{ width: "calc(100% - 16px)" }}
            >
              <img src={project.imageSrc} alt={project.imageAlt} className="w-full h-full object-cover object-center rounded-md" />
            </div>
            <CardContent className="px-4 pt-2 pb-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{project.title}</h3>
              <ul className="text-gray-700 mb-3 space-y-1 text-sm flex-1 list-none">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </CardContent>

            {expandedCard === project.id && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Images</h4>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {project.additionalImages.map((label) => (
                      <div key={label} className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Details</h4>
                  <ul className="text-gray-700 space-y-1 text-sm list-none">
                    {project.additionalDetails.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
