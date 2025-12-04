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
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Folder className="w-8 h-8 text-primary" />
                                </motion.div>
                                {project.link && (
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </motion.a>
                                )}
                            </div>

                            <motion.h3
                                className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                {project.title}
                            </motion.h3>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                <motion.span
                                    className="bg-secondary px-2 py-1 rounded"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {project.domain}
                                </motion.span>
                                <span>•</span>
                                <span>{project.year}</span>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Animated background glow on hover */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
