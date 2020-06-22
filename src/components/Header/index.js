import React, { useState } from "react";
import { Container } from "react-grid-system";
import { useRouteMatch, NavLink } from "react-router-dom";
// Styles
import "./index.scss";
// Images
import Logo from "../../assets/images/logo/logo.svg";
import ShoppingCartIcon from "../../assets/images/svg/shopping-cart.svg";
import ShoppingCartIcon2 from "../../assets/images/svg/shopping-cart-2.svg";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Orders",
        path: "orders",
    },
    {
        title: "Shop",
        path: "shop",
    },
    {
        title: "News",
        path: "news",
    },
];

export default (props) => {
    let { url } = useRouteMatch();
    const { className } = props;
    const [displayCart, setDisplayCart] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplayCart(!displayCart);
    };

    const handleClickCheckout = (e) => {
        alert("Add some product in the cart!");
    };

    return (
        <>
            <header className={`app-header app-header-1 ${className}`}>
                <Container className="container" fluid>
                    <div className="header-wrap">
                        <div className="header-left header-logo">
                            <div className="logo">
                                <img src={Logo} alt="Opeqe Logo" />
                            </div>
                        </div>
                        <div className="header-center header-menu">
                            <ul>
                                {links.map((item, index) => (
                                    <li key={index}>
                                        <NavLink to={`${url}${item.path}`} activeClassName="active">
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-right header-links">
                            <div className="button-shopping-cart" onClick={(e) => handleClick(e)}>
                                <img src={ShoppingCartIcon} alt="Opeqe | Shopping Cart" />
                                <div className="count">
                                    <span>$0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <aside className={`app-shopping-cart ${displayCart && "active"}`}>
                <div className="shopping-cart-menu">
                    <button className="button button-close" onClick={(e) => handleClick(e)}></button>
                    <div className="display-center">
                        <div className="shopping-cart-inner">
                            <div className="cart-count">
                                <img src={ShoppingCartIcon2} alt="Opeqe | Shopping Cart" />
                            </div>
                            <h3>Add some products in the cart.</h3>
                        </div>
                    </div>
                    <div className="shopping-cart-footer">
                        <ul>
                            <li>Subtotal</li>
                            <li>
                                <span className="price">$ 0.00</span>
                            </li>
                        </ul>
                        <button className="button button-dark button-lg button-block" onClick={(e) => handleClickCheckout(e)}>
                            CHECKOUT
                        </button>
                    </div>
                </div>
                <span className="close-area" onClick={(e) => handleClick(e)} />
            </aside>
        </>
    );
};
