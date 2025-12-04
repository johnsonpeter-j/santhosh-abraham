"use client";

import { motion } from "framer-motion";
import { Skills } from "@/lib/data";
import { Cpu, Users } from "lucide-react";

interface SkillsProps {
    skills: Skills;
}

export function SkillsSection({ skills }: SkillsProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        show: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <p className="text-muted-foreground mt-2">
                        Technical and Professional Expertise
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Hard Skills Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                className="p-3 bg-primary/10 rounded-lg text-primary"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Cpu className="w-6 h-6" />
                            </motion.div>
                            <h3 className="text-2xl font-bold">Hard Skills</h3>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {skills.hardSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    variants={item}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-background border border-border px-4 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary hover:shadow-lg transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Soft Skills Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                className="p-3 bg-secondary rounded-lg text-secondary-foreground"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Users className="w-6 h-6" />
                            </motion.div>
                            <h3 className="text-2xl font-bold">Soft Skills</h3>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {skills.softSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    variants={item}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-secondary/50 text-secondary-foreground border border-transparent px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary hover:shadow-lg transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
