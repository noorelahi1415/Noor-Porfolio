import React from 'react'
import SectionTitle from "../common/sectiontitle";
import CertificateCard from "../common/CertificateCard";
import certificates from "../../data/certificates";

function Certificates(){

return(

<section

id="certificates"

className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-32"

>

<SectionTitle

title="Certificates"

subtitle="Achievements"

/>

<div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">

{

certificates.map(item=>(

<CertificateCard

key={item.title}

certificate={item}

/>

))

}

</div>

</section>

)

}

export default Certificates;
