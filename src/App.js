import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
