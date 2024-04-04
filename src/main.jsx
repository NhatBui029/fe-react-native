import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import GlobalStyles from './Components/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import ShopCategory from './Pages/ShopCategory/ShopCategory'
import ProductsProvider from './Context/ProductsContext'
import kidBanner from './assets/banner_kids.png'
import menBanner from './assets/banner_mens.png'
import womenBanner from './assets/banner_women.png'
import Footer from './Components/Footer/Footer'
import LoginSignup from './Pages/LoginSignup/LoginSignUp'
import Product from './Pages/Product/Product'
import Observer from './Observer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles>
      <BrowserRouter>
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory category="men" banner={menBanner} />} />
            <Route path='/women' element={<ShopCategory category="women" banner={womenBanner} />} />
            <Route path='/kid' element={<ShopCategory category="kid" banner={kidBanner} />} />

            <Route path='/product' element={<Product />} >
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/login' element={<LoginSignup type="login" />} />
            <Route path='/signup' element={<LoginSignup type="signup" />} />
          </Routes>         
        </ProductsProvider>
      </BrowserRouter>
    </GlobalStyles>
  </>,
)
