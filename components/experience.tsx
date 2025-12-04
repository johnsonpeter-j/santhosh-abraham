"use client";

import { motion } from "framer-motion";
import { Experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
    experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceProps) {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold">Experience</h2>
                    <p className="text-muted-foreground mt-2">My professional journey</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{job.role}</h3>
                                        <p className="text-primary font-medium">{job.company}</p>
                                    </div>
                                    <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {job.dates}
                                    </div>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
