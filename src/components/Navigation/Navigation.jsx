import React, { Component } from 'react';
import CartDetails from './CartDetails.jsx';
import './Navigation.scss'

export default class Navigation extends Component {
    state = {
        cartDetails: false,
    }
    handleClick = () => {
        this.setState(state => ({
            cartDetails: !state.cartDetails
        })

        )
    }
    render() {
        return (
            <nav className="top-navigation">
                <span className="top-navigation--logo">LOGO</span>
                <ul>
                    <li><a href="">new</a></li>
                    <li><a href="">designers</a></li>
                    <li><a href="">women</a></li>
                    <li><a href="">men </a></li>
                    <li><a href="">clearence</a></li>
                </ul>

                <div class="bar-cart-container">
                    <div onClick={this.handleClick} className="bar-cart">
                        <span>Your cart</span>
                        <i class="fas fa-sort-down"></i>
                    </div>

                    <div className="bar-expense">
                        <i class="fas fa-shopping-bag"></i>
                        <div>
                            <span> {this.props.cartLenght} ITEMS</span>
                            <span>$0</span>
                        </div>

                    </div>
                    {this.state.cartDetails ?
                        <CartDetails cart={this.props.cart} /> : null}


                </div>

            </nav >
        )
    }
}