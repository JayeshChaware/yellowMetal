import React from 'react'
import '../assets/css/social_media.css'
import img1 from '../assets/img/social-media/facebook (1).png'
import img2 from '../assets/img/social-media/twitter (1).png'
import img3 from '../assets/img/social-media/linkedin (1).png'
import img4 from '../assets/img/social-media/google-plus (1).png'
import img5 from '../assets/img/social-media/instagram (1).png'
import img6 from '../assets/img/social-media/pinterest (2).png'
const social_media = () => {
  return (
    <div className='social'>
  
      <p>
        Social Media
      </p>
     
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
        <img src={img6}/>
      
      </div>
    
  )
}

export default social_media