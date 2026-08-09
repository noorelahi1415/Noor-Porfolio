import React from 'react'
import SectionTitle from "../common/sectiontitle";
import ExperienceCard from "../common/ExperienceCard";
import experience from "../../data/experience.js";

function Experience(){

return(

<section
id="experience"
className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"
>

<SectionTitle

title="Experience"

subtitle="Career"

/>

{

experience.map(job=>(

<ExperienceCard

key={job.company}

item={job}

/>

))

}

</section>

)

}

export default Experience;
