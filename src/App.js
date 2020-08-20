import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch,  Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth} from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div> 


);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
     this.setState({currentUser:user});
     console.log(user);
   })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route path="/signin" exact  component={SignInAndSignUpPage} />
      <Route path='/' exact  component={Homepage} />
      <Route path='/shop' exact  component={ShopPage} />
      
      </Switch>
  
      
      </div>
    );
  }
 
}

export default App;
