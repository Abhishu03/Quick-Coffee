import logo from './logo.svg';
import './App.css';
import ReactHelmet from 'react-helmet';
import { Route , Router, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
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
import AddProductsHolder from './Component/AddProduct/ProductAddHolder';
import ProductaddInstantCoffee from './Component/AddProduct/InstantcoffeeProductadd';
import ProductaddColdBrew from './Component/AddProduct/ColdBrewProductAdd';
import Productaddfiltercoffee from './Component/AddProduct/Filtercoffeeproductadd';
import ProductAddbundle from './Component/AddProduct/bundleproductadd';
import Adminauth from './Component/SuplimentryPage/adminauth';
import Testooo from './Component/textooo';
import ProductCatagory from './Component/AddProduct/ProductCatagory';
import Products from './Component/Getproduct/Products';
import PaymentGateway from './Component/PaymentGateway';
import Addcoupon from './Component/SuplimentryPage/newcouponadd';



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
      <Route path='/AddproductsHolder' exact element={<AddProductsHolder/>}/>
      <Route path='/AddProduct/instantcoffeeadd' exact element={<ProductaddInstantCoffee/>}/>
      <Route path='/AddProduct/coldbrewadd' exact element={<ProductaddColdBrew/>}/>
      <Route path='/AddProduct/filtercoffeeadd' exact element={<Productaddfiltercoffee/>}/>
      <Route path='/AddProduct/bundleadd' exact element={<ProductAddbundle/>}/>
      <Route path='/suplimentry/adminauth' exact element={<Adminauth/>}/>
      <Route path='/testooo' exact element={<Testooo/>}/>
      <Route path='/ProductCatagory/ProductCatagory' exact element={<ProductCatagory/>}/>
      <Route path='/Getproduct/products' exact element={<Products/>}/>
      <Route path='/paymentgateway' exact element={<PaymentGateway/>}/>
      <Route path='/suplimentry/addcoupon' exact element={<Addcoupon/>}/>
    </Routes>

    <div>
      <Footer/>
    </div>
    

   </>
  );
}

export default App;
