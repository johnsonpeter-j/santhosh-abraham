"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PersonalInfo } from "@/lib/data";

interface HeroProps {
    personalInfo: PersonalInfo;
}

export function Hero({ personalInfo }: HeroProps) {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-medium text-primary mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I&apos;m
                    </motion.h2>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {personalInfo.name}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {personalInfo.title}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
                        >
                            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Santhosh_Resume.pdf"
                            className="group inline-flex items-center gap-2 border border-input bg-background px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105 hover:shadow-lg"
                        >
                            Download Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl absolute inset-0 -z-10 animate-pulse-glow animate-gradient" />
                    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex items-center justify-center border-4 border-background shadow-2xl overflow-hidden relative animate-float hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/san_photo.png"
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
