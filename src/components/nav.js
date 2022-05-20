import React from 'react'
import '../assets/css/nav.css'
import logo from '../assets/img/szlylw1so3ukzg87c1rq.png'
import pic1  from '../assets/img/coin.png'
import pic2  from '../assets/img/Equalizer_1_.png'
import pic3  from '../assets/img/corporate.png'
import pic4  from '../assets/img/solid.png'
import pic5  from '../assets/img/information-button.png'
import pic6  from '../assets/img/Page-1.png'
const Nav = () => {
  return (
    <div>
        <nav className='navElement'>
        <div className='logo'>
            <img src={logo} alt='yz' className='logoo'/>
        </div>
        <div>
            <div className='launching'>Launching Soon</div>
        
        
        <div className='NavLink'>
            
            
            
            <ul className='m-2'>
                <li className='nav-item'><img src={pic1} alt='yz' /> Buy coins</li>
                <li className='nav-item'><img src={pic2} alt='yz' />Customized Coins</li>
                <li className='nav-item'><img src={pic3} alt='yz' />Corporate Deals</li>
                <li className='nav-item'><img src={pic4} alt='yz' />Digital gold</li>
                <li className='nav-item'><img src={pic5} alt='yz' />About Us</li>
                <li className='nav-item'><img src={pic6} alt='yz' />Contact Us</li>
            </ul>
           
        </div>
        </div>
        <div className='NavLogin'>
            <button>
                Login
            </button>
        </div>
        </nav>
    </div>
  )
}

export default Nav