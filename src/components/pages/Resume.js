import React from 'react';
import '../../App.css';

import Footer from '../Footer'
import resume from '../images/Resume_John.pdf'

 const Product = () => {

  return (
    <>
    <h1 className='products'>Innovation, Passion, Adaptability</h1>
    <div >
 
    <iframe src={resume} width="100%" height="1000px"></iframe>
    <Footer/>
  </div>
  </>
  );

}




export default Product