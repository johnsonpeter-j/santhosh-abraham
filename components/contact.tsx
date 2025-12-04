"use client";

import { motion } from "framer-motion";
import { PersonalInfo } from "@/lib/data";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface ContactProps {
    personalInfo: PersonalInfo;
}

export function Contact({ personalInfo }: ContactProps) {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        I&apos;m always open to discussing new projects, creative ideas or
                        opportunities to be part of your visions.
                    </motion.p>

                    <div className="grid gap-6 md:grid-cols-2">
                        <motion.a
                            href={`mailto:${personalInfo.contact.email}`}
                            className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <motion.div
                                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Mail className="w-6 h-6" />
                            </motion.div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-muted-foreground text-sm">
                                {personalInfo.contact.email}
                            </p>
                        </motion.a>

                        <motion.a
                            href={`tel:${personalInfo.contact.phone}`}
                            className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <motion.div
                                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Phone className="w-6 h-6" />
                            </motion.div>
                            <h3 className="font-medium mb-1">Phone</h3>
                            <p className="text-muted-foreground text-sm">
                                {personalInfo.contact.phone}
                            </p>
                        </motion.a>
                    </div>

                    <motion.div
                        className="mt-12 flex justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.a
                            href={personalInfo.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{
                                scale: 1.3,
                                rotate: 360,
                                y: -5
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href={personalInfo.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{
                                scale: 1.3,
                                rotate: 360,
                                y: -5
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </motion.a>
                    </motion.div>

                    <motion.footer
                        className="mt-20 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    </motion.footer>
                </motion.div>
            </div>
        </section>
    );
}
