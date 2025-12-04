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
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
                        {personalInfo.title}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Santhosh_Resume.pdf"
                            className="inline-flex items-center gap-2 border border-input bg-background px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            Download Resume <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl absolute inset-0 -z-10" />
                    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex items-center justify-center border-4 border-background shadow-2xl overflow-hidden relative">
                        <Image
                            src="/profile-v2.png"
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
