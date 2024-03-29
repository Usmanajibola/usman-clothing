import React from "react";
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={ toggleCartHidden }>
        <ShoppingIcon  className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
)

const matchDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps =createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(CartIcon)