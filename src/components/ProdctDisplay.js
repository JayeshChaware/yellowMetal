import React from 'react'
import '../assets/css/ProductDisplay.css'
 import Offer from '../assets/img/Product Display/Group 13326.png'
 import Wishlist from '../assets/img/Product Display/Group 13909.png'
 import Rupee from '../assets/img/Product Display/rupee.png'
 import Add from '../assets/img/Product Display/Icon ionic-ios-add.png'
 import { AiFillStar } from "react-icons/ai";
function Product(props){
  return(
    <div>
    
      <div className='DiplayElement' >
          <div className={props.
            Coin}>

              <img src={Offer} className='Offers'/>

                <img src={Wishlist} className='Wishlist '/>

          </div>
          <div className='description'>
          <div className='Amount'>
            <img src={Rupee} />
            1,09,179 
            <button className='AddBTN'>Add <img src={Add}/></button>
          </div>
          <div className='CoinDetail'>20g, 24Kt Lord Balaji Silver Coin</div>
          <div className='discription'>
            <button >Purity 916</button>
            <button className='Carat'>24k Carat</button>
            <button >Approx.Weight - 20 g</button>
          </div>
          </div>
          
      
      </div>
    </div>

  )
}
function BestSeller(props){
  return(
    <div>
    
      <div className='DiplayElement' >
          <div className={props.
            Coin}>

              <label className='BestSeller'><AiFillStar/>BestSeller</label>

                <img src={Wishlist} className='Wishlist '/>

          </div>
          <div className='description'>
          <div className='Amount'>
            <img src={Rupee} />
            1,09,179 
            <button className='AddBTN'>Add <img src={Add}/></button>
          </div>
          <div className='CoinDetail'>20g, 24Kt Lord Balaji Silver Coin</div>
          <div className='discription'>
            <button >Purity 916</button>
            <button className='Carat'>24k Carat</button>
            <button >Approx.Weight - 20 g</button>
          </div>
          </div>
          
      
      </div>
    </div>

  )
}

const ProdctDisplay = () => {
  return (<>
  <div className='DisplayRow'>
    <Product Coin="GoldCoin" />
    <Product Coin="SilverCoin" />
    <BestSeller Coin="GoldCoin" />
    <Product Coin="PlatinumCoin" />
  </div>
  <div className='DisplayRow'>
    <Product Coin="GoldCoin" />
    <Product Coin="SilverCoin" />
    <BestSeller Coin="GoldCoin" />
    <Product Coin="PlatinumCoin" />
  </div>
  <div className='DisplayRow'>
    <Product Coin="GoldCoin" />
    <Product Coin="SilverCoin" />
    <BestSeller Coin="GoldCoin" />
    <Product Coin="PlatinumCoin" />
  </div>
    <div className='DisplayRow'>
    <Product Coin="GoldCoin" />
    <Product Coin="SilverCoin" />
    <BestSeller Coin="GoldCoin" />
    <Product Coin="PlatinumCoin" />
  </div>
  </>
  )
}

export default ProdctDisplay