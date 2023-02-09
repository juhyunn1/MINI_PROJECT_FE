import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Product from './components/pages/Product';
import ProductList from './components/pages/ProductList';
import EventList from './components/pages/EventList';
import Join from './components/pages/Join';
import Profile from './components/pages/Profile';
import { RecoilRoot } from 'recoil';

function App() {
  return ( // 이 안에 JSX 문법 적용
    <RecoilRoot>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<ProductList/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/event' element={<EventList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;