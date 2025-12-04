import { getResumeData } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { Contact } from "@/components/contact";

export default async function Home() {
  const data = await getResumeData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero personalInfo={data.personalInfo} />
      <About summary={data.summary} />
      <ExperienceSection experience={data.experience} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <Contact personalInfo={data.personalInfo} />
    </main>
  );
}
