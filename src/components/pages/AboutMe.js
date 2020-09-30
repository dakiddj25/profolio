import React from 'react';
import './page.css';
import Skills from '../Skills'
import Footer from '../Footer'

 const Services =() =>{

  return(
<>
  <h1 className='AboutMe'>John Jones Jr</h1>
    <div className ='page'>
      <p>Born and raised in Brooklyn, New York</p>
        
      <p>Currently, I am a Middle School After School Program Coordinator.
       Prior to this position, I was a Technology Teacher teaching Middle School 
       grades 6-8th!

       </p>

       <p>I'm passionate about programming, especially using technology 
       applications to make life a little bit easier. Whether it be engaging 
       my students in the lesson by using Kahoot, or helping my Mother catch the 
       7 am train using MTA Transit App. This is one of the reasons why I became a 
       Full-stack developer, to build projects and applications that can help people
       all over the world and make their lives easier!

       </p>

       <p>Alongside being a full-time employee I am also enrolled in an intensive 
       12-month, Google-funded software engineering fellowship with a 9% acceptance 
       rate, at Pursuit in Long Island City, Queens.
       </p>

    </div>
    {/* <Skills/> */}
    <Footer/>
</>
  ) 

}

export default Services