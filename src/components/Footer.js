import React from 'react'
import './Footer.css'
import logoOni from '../assets/logoOni.png'


const Footer = () => {
  return (
   
  <footer className='footer'>
     <div className='group_1'>
       
        <div className='box'>
           <figure>
             
               <img style=
              {{width:'200px'}} 
              src={logoOni} alt=''></img>
           
              
           </figure>
           </div>
           <div className='box'>
             <h2>ABOUT US</h2>
             <p className='pfooter'>loremjsdfduahsoisajdoihfihdecoijwpiodejsfdhbk</p>
             <p className='pfooter'>loremjsdfduahsoisajdoihfihdecoijwpiodejsfdhbc</p>
             <p className='pfooter'>loremjsdfduahsoisajdoihfihdecoijwpiodejsfdhbc</p>
            
             
           </div>

           <div className='box'>
             <h2>FOLLOW</h2>
             <div className='social_network'> 
             <i class="fa-brands fa-facebook-square fa-3x"></i>
             <i class="fa-brands fa-instagram-square fa-3x"></i>
             <i class="fa-brands fa-twitter-square fa-3x"></i>
              
             </div>
           </div> 
           </div>

           <div className='group_2 '>
             <small>&copy; 2021 <b>tattoo Studio</b> - Todos los derechos reservados.</small>
           </div>
  </footer>


           

        
    
   
  )
}

export default Footer

