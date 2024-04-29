import React from 'react'
import Mainbnaaer from '../Banner/BannerMainPage.jpg';
import Instantcoffee from '../Banner/instantcoffee.jpg';
import Coldbrew from '../Banner/ColdBrew.jpg';
import Bundle from '../Banner/Bundle.jpg';
import Filtercoffee from '../Banner/filtercoffee.jpg';
import Clogo from '../Banner/logo-color.png';
import { Link , useNavigation } from 'react-router-dom';
import axios from 'axios';
import './css/home.css';

function Home() {
  return (
    <div className='HomeBody'>
      <div className='Banner'>
       <img className='mainbnaaerr' src={Mainbnaaer}></img>
        <p>Taste the best</p>
        <button><Link to='/bestseller'><a>Shop Now</a></Link></button>
      </div>
      <div className='text-after-banner'>
        Home Grown brands making best coffee
      </div>
      <div className='product-group'>
        <div className='product-box'>
          <img className='productimg' src={Instantcoffee}></img>
          <p className='product-name'>Instant Coffee</p>
          <button><Link to='/ProductCatagory/InstantCoffee'><a>Shop now</a></Link></button>
        </div>
        <div className='product-box'>
          <img className='productimg' src={Coldbrew}></img>
          <p className='product-name'>Cold Brew</p>
          <button><Link to='/ProductCatagory/ColdBrew'><a>Shop now</a></Link></button>
        </div>
        <div className='product-box'>
          <img className='productimg' src={Filtercoffee}></img>
          <p className='product-name'>Filter Coffee</p>
          <button><Link to='/ProductCatagory/FilterCoffee'><a>Shop now</a></Link></button>
        </div>
        <div className='product-box'>
          <img className='productimg' src={Bundle}></img>
          <p className='product-name'>Bundle</p>
          <button><Link to='/ProductCatagory/Bundle'><a>Shop now</a></Link></button>
        </div>
      </div>
      <div className='text-b'>
        <div>Highest Grade coffee</div>
        <div>Packed in environment safe material</div>
      </div>
      <div className='reviewbox'>
        <div>

        <div className='review'>Reviews</div>
        <div className='text'>Bold and aromatic, this coffee captivates with its rich flavor profile and smooth texture. Perfectly roasted beans deliver a satisfying brew, making each sip a delightful experience worth savoring."</div>
        <div className='text'>Indulge in the velvety bliss of this coffee, boasting a harmonious blend of robust notes and subtle sweetness. Its unparalleled taste elevates mornings, evoking pure satisfaction with every sip."
        </div>
        <button className='reviewbt'><Link to='/ProductCatagory/CostomerReview'><a>Add Review</a></Link></button>

</div>
      </div>
    </div>
  )
}

export default Home
