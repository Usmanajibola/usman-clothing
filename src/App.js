import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch,  Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import SignInAndSignupPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div> 


);

class App extends React.Component {

 
  unsubscribeFromAuth = null;

  componentDidMount() {
  const {setCurrentUser} = this.props
  
  this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {

    if (userAuth) {
      console.log(userAuth)
      const userRef = await createUserProfileDocument(userAuth);
      console.log(userRef)
      userRef.onSnapshot(snapshot=> {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        })
        // this.setState({
        //   currentUser:{
        //     id: snapshot.id,
        //     ...snapshot.data()
        //   }
        // }, () => {
        //   console.log(this.state);
        // });
      });
     


    }
    setCurrentUser(userAuth);
    
   })
  
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path="/signin" exact  render = {() => this.props.currentUser ? <Redirect to="/" /> : (<SignInAndSignupPage />) } />
        <Route path='/' exact  component={Homepage} />
        <Route path='/shop'  component={ShopPage} />
        <Route path='/checkout' exact  component={CheckoutPage} />
      
      </Switch>
  
      
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
