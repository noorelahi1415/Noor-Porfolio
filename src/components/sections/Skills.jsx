import React from 'react'
import SectionTitle from "../common/sectiontitle";
import SkillCard from "../common/SkillCard";
import skills from "../../data/skills";

function Skills(){

return(

<section
id="skills"
className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"
>

<SectionTitle
title="My Skills"
subtitle="Technologies"
/>

<div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">

{

skills.map(skill=>(

<SkillCard

key={skill.name}

skill={skill}

/>

))

}

</div>

</section>

)

}

export default Skills;
