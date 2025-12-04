"use client";

import { motion } from "framer-motion";

interface AboutProps {
    summary: string;
}

export function About({ summary }: AboutProps) {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {summary ||
                            "I am a dedicated Business Analyst with a strong background in data analytics, marketing strategies, and technical implementation. My passion lies in bridging the gap between business requirements and technical solutions to drive operational efficiency and growth."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
