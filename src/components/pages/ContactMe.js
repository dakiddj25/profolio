import React from 'react';
import '../../App.css';
import { MdPhoneIphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Footer from '../Footer';


 const SignUp = () =>{
  return(
    <>
    
    <h1 className='sign-up'>Let's Talk</h1>
    <div className='contact'> 
      <div className='connect'>
        <p>I'd love to hear from you! Please feel free to
          send an email and I'll get back to you as soon as possible!
        </p>
      </div>

      <div className='phone'>
        <MdPhoneIphone/>
        <p>(201) 824 - 4244</p>
      </div>

      <div className='email'>
        <GrMail/>
        <p>
        <a href = 'mailto:johnjones@pursuit.org?subject=From%20JohnJones.org'>Johnjones@pursuit.org</a>
        
        </p>
      </div>      
    </div>
    <Footer />
      </>
  ) 
}

export default SignUp