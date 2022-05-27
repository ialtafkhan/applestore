import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import PageNotFound from './Componants/PageNotFound';
import Product from './Componants/Product';
import ProductDetails from './Componants/ProductDetails';
import 'font-awesome/css/font-awesome.min.css'
import './App.css'




function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<ProductDetails />} />

          <Route path={'*'} element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
