import "./Main.css";

import { AboutMe } from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Project/Project";

const template = () => {
  return `
  <main class="container">

    <!-- ABOUT ME -->
    <section id="aboutme">
      ${AboutMe()}
    </section>

    <!-- EDUCATION -->
    <section id="education">
      ${Education()}
    </section>

    <!-- EXPERIENCE -->
    <section id="experience">
      ${Experience()}
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      ${Projects()}
    </section>

  </main>
  `;
};

export const Main = () => template();


export const addMainListeners = () => {
  const navAbout = document.querySelector("#nav-about");
  const navEducation = document.querySelector("#nav-education");
  const navExperience = document.querySelector("#nav-experience");
  const navProjects = document.querySelector("#nav-projects");

  // 🔥 ABOUT ME
  navAbout?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#aboutme")
      ?.scrollIntoView({ behavior: "smooth" });
  });

  // 🔥 EDUCATION
  navEducation?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#education")
      ?.scrollIntoView({ behavior: "smooth" });
  });

  // 🔥 EXPERIENCE
  navExperience?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#experience")
      ?.scrollIntoView({ behavior: "smooth" });
  });

  // 🔥 PROJECTS
  navProjects?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  });
};
