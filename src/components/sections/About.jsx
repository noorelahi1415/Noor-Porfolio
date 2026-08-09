import profile from "../../data/profile";
import profileImage from "../../assets/profile.jpeg";
import SectionTitle from "../common/sectiontitle";

import StatCard from "../common/StatCard";
import GlassCard from '../common/Glasscard';

function About() {

return(
<GlassCard className='p-4 sm:p-6 lg:p-8'>
<section
id="about"
className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"
>

<div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

<div>

<img
src={profileImage}
alt="Profile"
className="w-full rounded-3xl shadow-2xl"
/>

</div>

<div className="lg:translate-x-6">

<SectionTitle
title="About Me"
subtitle="Who I Am"
className="mb-8 px-0 sm:mb-10 lg:mb-10"
/>

<h3 className="text-2xl font-bold sm:text-3xl">

Software Engineer & DevOps Enthusiast

</h3>

<p className="mt-6 text-sm leading-7 text-slate-600 dark:text-[#A0A0A0] sm:mt-8 sm:text-base sm:leading-8">

{profile.description}

</p> 
<div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">

<StatCard
number={profile.projectsCompleted}
label="Projects"
/>

<StatCard
number={profile.yearsExperience}
label="Years"
/>

<StatCard
number={profile.certifications}
label="Certificates"
/>

<StatCard
number={profile.technologies}
label="Technologies"
/>

</div>

</div>

</div>

</section>

</GlassCard>

)

}

export default About;
