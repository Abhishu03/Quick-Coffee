import logo from './logo.svg';
import './App.css';
import ReactHelmet from 'react-helmet';
import { Route , Router, Routes} from 'react-router-dom';
import Home from './Component/Home';
import ProductOne from './Component/Productpage';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Aboutus from './Component/Aboutus';
import Bestseller from './Component/Bestseller';
import Bundle from './Component/ProductCatogory/Bundle';
import Coldbrewc from './Component/ProductCatogory/ColdBrew';
import FilterCoffee from './Component/ProductCatogory/FilterCoffee';
import InstantCoffee from './Component/ProductCatogory/InstantCoffee';
import CostomerReview from './Component/ProductCatogory/Review';
import Userlogin from './Component/ULogin/Userlogin';
import Userregister from './Component/ULogin/Userregister';
import PasswordHolder from './Component/ULogin/PasswordHolder';
import Productimgin from './Component/Productdtin';
import Cart from './Component/Cart';
import ProductaddInstantCoffee from './Component/AddProduct/InstantcoffeeProductadd';
import AddProductsHolder from './Component/AddProduct/ProductAddHolder';



function App() {
  return (
   <>
    <ReactHelmet>
      <title>Real Coffee</title>
    </ReactHelmet>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' exact element= {<Home/>}/>
      <Route path='/product' exact element= {<ProductOne/>}/>
      <Route path='/aboutus' exact element={<Aboutus/>}/>
      <Route path='/bestseller' exact element={<Bestseller/>}/>
      <Route path='/ProductCatagory/Bundle' exact element={<Bundle/>}/>
      <Route path='/ProductCatagory/ColdBrew' exact element={<Coldbrewc/>}/>
      <Route path='/ProductCatagory/FilterCoffee' exact element={<FilterCoffee/>}/>
      <Route path='/ProductCatagory/InstantCoffee' exact element={<InstantCoffee/>}/>
      <Route path='/ProductCatagory/CostomerReview' exact element={<CostomerReview/>}/>
      <Route path='/ULogin/Userlogin' exact element={<Userlogin/>}/>
      <Route path='/ULogin/Userregister' exact element={<Userregister/>}/>
      <Route path='/ULogin/passwordholder' exact element={<PasswordHolder/>}/>
      <Route path='/ProductDetailsIn' exact element={<Productimgin/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      <Route path='/AddProduct/instantcoffeeadd' exact element={<ProductaddInstantCoffee/>}/>
      <Route path='/AddproductsHolder' exact element={<AddProductsHolder/>}/>
    </Routes>

    <div>
      <Footer/>
    </div>


   </>
  );
}

export default App;
