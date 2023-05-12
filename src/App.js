import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkUserSession } from './features/user/userSlice';

import MainPage from './routes/main-page.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import About from './routes/about/about.component';
import Authentication from './routes/authentication/authentication.component';
import Contacts from './routes/contacts/contacts.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='about' element={<About />} />
          <Route path='sign-in' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
