import fs from "fs";
import path from "path";

export interface PersonalInfo {
    name: string;
    title: string;
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
}

export interface Experience {
    company: string;
    role: string;
    dates: string;
    description: string[];
}

export interface Education {
    institution: string;
    year: number;
    degree?: string;
    qualification?: string;
    score: string;
}

export interface Project {
    title: string;
    year: number | string;
    domain: string;
    description: string;
    link?: string;
}

export interface Skills {
    hardSkills: string[];
    softSkills: string[];
}

export interface ResumeData {
    personalInfo: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    leadership: string[];
    certifications: string[];
    skills: Skills;
    interests: string[];
}

export async function getResumeData(): Promise<ResumeData> {
    const filePath = path.join(process.cwd(), "data", "resume.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
}
