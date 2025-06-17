import React, { useEffect } from 'react'

// components
import {PageTitle, Helmet, SectionTitle, ImgCard} from '../components'

// data
import LeaderData from "../data/LeaderData.json"
import LeaderTestimonial from "../data/LeaderTestimonial.json"

// dependience
import Aos from 'aos'
import 'aos/dist/aos.css'



const LeaderComp = ({ data, title }) => {
    const duration = 2000;
    return (
      <div className="w-100 mx-0 mt-3">
        <div className="text-left w-100" data-aos="fade-up" data-aos-duration={duration}>
          <SectionTitle title1={title} />
        </div>
        <div className="row">
          {data.map((value, index) => (
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 my-3" key={index} data-aos="fade-up" data-aos-duration={duration}>
              <ImgCard imgData={value.pic} alt={value.name} nameData={value.name} designationData={value.designation} companyData={value.company} />
            </div>
          ))}
        </div>
      </div>
    );
  };

const TestimonialComp = ({testimonialTitle, testimoinalData}) => {
  const duration = 2000;
    return(
      <>
      <div className="row mx-0 mt-3">
        <div className="text-left w-100" data-aos="fade-up" data-aos-duration={duration}>
          <SectionTitle title2={testimonialTitle} />
        </div>
      </div>
     <div className="row mx-0 mt-3">
    
          {testimoinalData.map((value, index) => (
            <div class='testimonial_list shadow-sm border p-3 quote mb-2 ' data-aos="fade-up" data-aos-duration={duration}>
              <p>{value.Message}</p>
              <span>---{value.Leader}</span>
            </div>
          ))}
     
        </div>
      </>
    )
}
  
function Profile() {
    useEffect(() => {
        Aos.init();
      }, []);

    return <Helmet title={"PROFILE"}>
        <>
            <section className="section" id='profile'>
                <div className="container">
                   <div className="row mx-0"> 
                    <SectionTitle title2="ANCHORING THE GLOBAL INNOVATOR" />
                    <p>Evolve Silicon Valley Foundation (Evolve SVF) is a non-profit foundation based in the U.S. Our primary mission is to empower today’s tech entrepreneurs with a research-based, data-driven, and action-oriented global playbook. Our programs are geared to inspire and equip a new generation of aspiring entrepreneurs with the right tools and impetus to overcome complex company building challenges. Our programs bring together all key anchoring facilitators including Corporates, Venture Capitalists, Angels, Academia, Governments, Media, and a multitude of related domain experts worldwide.</p>
                   </div>

                    <div className="row mx-0"> 
                    <SectionTitle title2="OUR DATA PLATFORM" />
                    <p >Our primary mission objective is to empower today's global technology innovator with market intelligence and engagement data. Our data platform and mobile app will be introduced in January 2025. With a freemium business model, we aspire to democratize engagements.</p>
                   <p>Artificial Intelligence (AI) innovations and enhancements are evolving at an exponential pace. Every individual, company, and country will be impacted. Those better equipped for this rapid transformation will thrive and succeed. Evolve SV's key objective is to create awareness and support member transitions by building a nexus between the facilitators and our member base. Preparedness is critical in the new world order where Evolve SVF will play a pivotal role. These innovative companies become staging grounds for long-term nation building. Nations that adapt to dynamic technology shifts and implement conducive policies will clearly have the edge and economic standing on the world theater.</p>
                   
                   
                   </div>

                </div>
            </section>

            <section className="section my-2 bg-light" id='leaderstestmonial'>
              <div className="container">
                          <div className='row mx-0'>
                           
                                 <TestimonialComp testimonialTitle="FROM THE LEADERSHIP" testimoinalData = {LeaderTestimonial.byleadership}/>
                                 <TestimonialComp testimonialTitle="AND,And, what they're saying about the new era of AI..." testimoinalData = {LeaderTestimonial.byothers}/>
                           
                           </div>
                  </div>
           </section>

            <section className="section my-2" id='leaders'>
                     <div className="container">
                             <div className="row mx-0 "> 
                                 <div className='text-center w-100' data-aos="fade-up" data-aos-duration="2000">
                                 <PageTitle title="Leaders"  />
                                </div>
                            </div>
                            <div>
                                <LeaderComp data={LeaderData.COCHAIRS} title="FOUNDERS" />
                                <LeaderComp data={LeaderData.ADVISORYCOUNCIL} title="ADVISORY BOARD" />
                            </div>
                    </div>
            </section>
        </>
   
    </Helmet>
}

export default Profile