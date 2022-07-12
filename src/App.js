import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import ProductDetails from './Pages/Products/ProductDetails';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div  className='max-w-7xl mx-auto px-12'>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='products' element={<Products></Products>}></Route>

          <Route path='/product/:productId' element={
            <ProductDetails></ProductDetails>
          }></Route>

          <Route path='blogs' element={<Blogs></Blogs>}  ></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
