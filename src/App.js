import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import CheckIn from './components/pages/CheckIn';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Product from './components/pages/Product';
// import SignIn from './components/pages/SignIn';

function App() {
  return ( // 이 안에 JSX 문법 적용
		<BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/check-in' element={<CheckIn/>}/>
        <Route path='/prduct/:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/sign-in' element={<SignIn/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;