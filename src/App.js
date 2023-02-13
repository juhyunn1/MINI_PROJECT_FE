import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import Cart from './component/page/Cart';
import Footer from './component/layout/Footer';
import Login from './component/page/Login';
import Main from './component/page/Main';
import Product from './component/page/Product';
import ProductList from './component/page/ProductList';
import EventList from './component/page/EventList';
import Join from './component/page/Join';
import Profile from './component/page/Profile';
import { RecoilRoot } from 'recoil';
import Event from './component/page/Event';
import ChangePassword from './component/page/ChangePassword';
// import './App.css';

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
          <Route path='/event/:eventId' element={<Event/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/password-change' element={<ChangePassword/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;