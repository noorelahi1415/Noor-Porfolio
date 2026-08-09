import React from 'react'

import SectionTitle from "../common/sectiontitle";
import ProjectCard from "../common/ProjectCard";
import projects from "../../data/projects";
import useGithubRepos from "../../hooks/useGithubRepos";
function Projects(){

    const { repos, loading } = useGithubRepos();

return(

<section
id="projects"
className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"
>

<SectionTitle

title="Featured Projects"

subtitle="Portfolio"

/>

<div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">

{loading ? (
  <p className="text-center text-slate-600 dark:text-[#A0A0A0]">
    Loading GitHub repositories...
  </p>
) : (
  repos.map((repo) => (
    <ProjectCard
      key={repo.id}
      project={{
        title: repo.name,
        description:
          repo.description || "No description available.",

        github: repo.html_url,

        demo: repo.homepage,

        tech: [],

        image:
          "https://placehold.co/600x400/png",
      }}
    />
  ))
)}

</div>

</section>

)

}

export default Projects;
