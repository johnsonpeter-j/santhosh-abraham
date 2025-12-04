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
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-muted-foreground mb-12">
                        I&apos;m always open to discussing new projects, creative ideas or
                        opportunities to be part of your visions.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                        <a
                            href={`mailto:${personalInfo.contact.email}`}
                            className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-muted-foreground text-sm">
                                {personalInfo.contact.email}
                            </p>
                        </a>

                        <a
                            href={`tel:${personalInfo.contact.phone}`}
                            className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-medium mb-1">Phone</h3>
                            <p className="text-muted-foreground text-sm">
                                {personalInfo.contact.phone}
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <a
                            href={personalInfo.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href={personalInfo.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>

                    <footer className="mt-20 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
