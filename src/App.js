import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch,  Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div> 


);

function App() {
  return (
    <div className="App">
      
    <Switch>
    <Route path='/' exact  component={Homepage} />
    <Route path='/shop' exact  component={ShopPage} />
    
    </Switch>

    
    </div>
  );
}

export default App;
