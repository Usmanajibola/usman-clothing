import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartsHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';


const Header = ({ currentUser, hidden, cartItems }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div> :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
             <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
        
    </div>
    
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartsHidden,

})

export default connect(mapStateToProps) (Header);