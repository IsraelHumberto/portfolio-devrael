import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { createClient } from "@/prismicio";
import { MainProjects } from "./components/MainProjects";
import { Project } from "./components/Project";
import { SkillsSection } from "./components/SkillsSection";
import { AboutMeSection } from "./components/AboutMeSection";

export default async function Home() {
  const prismic = createClient();

  const projects = await prismic.getByUID("projects", "projects-section");

  const skills = await prismic.getByUID("skills", "skills-home");

  const aboutMe = await prismic.getByUID("about_me", "about-me-home");

  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <MainProjects
        data={projects.data.all_projects}
        title={projects.data.title_section[0].text}
      />
      <SkillsSection data={skills.data} />
      <AboutMeSection data={aboutMe.data} />
    </main>
  );
}
