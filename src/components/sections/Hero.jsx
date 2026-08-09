import React from 'react'

import profile from "../../data/profile";
// import typewriter 
import { Typewriter } from "react-simple-typewriter";
// importing icons
import {

FaGithub,

FaLinkedin,

FaEnvelope

} from "react-icons/fa";

// Adding Framer Motion
import { motion } from "framer-motion";



function Hero(){

return(

<section
id="home"
className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
>

    {/* This creates a modern glowing background without using images. */}
            <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20 sm:left-20 sm:top-32 sm:h-72 sm:w-72 sm:blur-[140px]"/>

        <div className="absolute bottom-8 right-[-8rem] h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/20 sm:bottom-20 sm:right-20 sm:h-96 sm:w-96 sm:blur-[170px]"/>

        </div>
    {/* This creates a modern glowing background without using images. */}

<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

 className="mx-auto w-full max-w-7xl px-5 sm:px-6">

<h2 className="text-lg text-blue-600 dark:text-blue-400 sm:text-2xl">

Hello, I'm

</h2>

<h1 className="mt-3 break-words text-4xl font-bold sm:text-5xl lg:text-6xl">

{profile.name}

</h1>

<p className="mt-5 text-xl text-blue-600 dark:text-blue-400 sm:mt-6 sm:text-2xl">

<Typewriter

words={[

"AWS Engineer",

"DevOps Engineer",

"Cloud Enthusiast",



]}

loop

cursor

cursorStyle="|"

typeSpeed={70}

deleteSpeed={40}

/>

</p>



<p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-[#A0A0A0] sm:mt-8 sm:text-base sm:leading-8">

{profile.description}

</p>
<div className="mt-8 flex gap-5 sm:mt-10 sm:gap-6">

<a

href={profile.github}

target="_blank"

rel="noreferrer"

>

<FaGithub size={28}/>

</a>

<a

href={profile.linkedin}

target="_blank"

rel="noreferrer"

>

<FaLinkedin size={28}/>

</a>

<a

href={`mailto:${profile.email}`}

>

<FaEnvelope size={28}/>

</a>



</div>
<a

href={profile.resume}

download

className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-blue-700 sm:mt-10 sm:px-8 sm:py-4 sm:text-base"

>

Download Resume

</a>

</motion.div>

</section>

)

}

export default Hero;
