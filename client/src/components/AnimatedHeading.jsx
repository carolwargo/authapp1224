import React, { useRef } from 'react';
import '../App.css'; // Import your CSS file
import { useInView } from "framer-motion";


const PinkAnimatedHeading = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  

  return (
    <div className='w3-marin-top'>
    <h1 ref={ref}
      style={{
        fontSize: "5.5rem" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className='mb-3'>
      <span><i style={{fontFamily:'Raleway',fontSize:'4.5rem', textShadow:'1px 1px 4px black'}}>Con</i></span>
      <span className=' fw-bold' style={{ fontFamily:"Dancing Script", marginLeft:'-10px', color:' #e9008c', textShadow:'2px 2px 5px black'}}>Scribe</span>
    
   </h1>
   
 

    </div>
  );
};

export default PinkAnimatedHeading;


/**
 *     <h1 ref={ref}
      style={{
        fontSize: "6.5rem" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className=''>
      <span><i style={{fontFamily:"Carattere", letterSpacing:'-3px', fontSize:'6.5rem', textShadow:'4px 4px 8px black'}}>con</i></span>
      <span className=' text-opacity-50' style={{ fontFamily:"Carattere", letterSpacing:'-2px', marginLeft:'-5px', color:'white',  textShadow: `
    -2px -2px 8px rgb(30, 30, 30),  
    2px -2px 8px rgb(30, 30, 30),  
    -2px  2px 8px rgb(30, 30, 30), 
     2px  2px 8px rgb(30, 30, 30)   
  `,}}>scribe</span>
    
   </h1>
 */


   /** -2px -2px 8px rgb(30, 30, 30),  Top-left */
   /** 2px -2px 8px rgb(30, 30, 30),   Top-right */
   /** -2px  2px 8px rgb(30, 30, 30),   Bottom-left */
    /** 2px  2px 8px rgb(30, 30, 30)    Bottom-right */
