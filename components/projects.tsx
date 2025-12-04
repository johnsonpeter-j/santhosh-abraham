"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectsProps {
    projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <p className="text-muted-foreground mt-2">Selected works and contributions</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="w-8 h-8 text-primary" />
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                <span className="bg-secondary px-2 py-1 rounded">{project.domain}</span>
                                <span>•</span>
                                <span>{project.year}</span>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
