import React from 'react'
import '../assets/css/Review.css'
import Dash from '../assets/img/costomer Review/Line 513.png'
import Rating from '../assets/img/costomer Review/Group 13900.png'
import quotes from '../assets/img/costomer Review/quote.png'

const Review = () => {
  return (
    <div>
        <div className=' FloatContainer'>
            <div className='container1'>
                <img src={Dash}  className='container1-img'/>
                <div className='container1elements'>
                    <p className='reviewHeading'>Check what our client Says about us</p>
                    <img src={quotes} />
                    <p className='review-content'>I was looking to buy Gold/Silver coins & bars to buy on festivals season in Deepawali with quickest delivery. I found Yellowmetals.in as one of the most adorable site to get it during very high demanding festivals seasons.</p>
                    <h4 className='reviewer-name'>Mr Sachindra Pandey</h4>
                    <p className='reviewer-position'>Customer</p>
                </div>
            </div>
            <div className='container2'><img src={Rating} /></div>
        </div>
    </div>
  )
}

export default Review