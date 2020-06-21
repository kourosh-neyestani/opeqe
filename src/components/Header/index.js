import React, { useState } from "react";
import { Container } from "react-grid-system";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
// Styles
import "./index.scss";
// Images
import Logo from "../../assets/images/logo/logo.svg";
import ShoppingCartIcon from "../../assets/images/icons/shopping-cart.svg";

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

    return (
        <>
            <header className={`app-header app-header-1 ${className}`}>
                <Container className="container">
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
                </div>
                <span className="close-area" onClick={(e) => handleClick(e)}/>
            </aside>
        </>
    );
};
