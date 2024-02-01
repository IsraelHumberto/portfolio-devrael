import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { createClient } from "@/prismicio";
import { MainProjects } from "./components/MainProjects";
import { Project } from "./components/Project";

export default async function Home() {
  const prismic = createClient();

  const projects = await prismic.getByUID("projects", "projects-section");
  console.log("🚀 ~ Home ~ projects:", projects.data.all_projects[0]);

  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <MainProjects
        data={projects.data.all_projects}
        title={projects.data.title_section[0].text}
      />
    </main>
  );
}
