import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
// Styles
import "./index.scss";
// Images
import Logo from "../../assets/images/svg/logo-white.svg";
import Social1 from "../../assets/images/svg/social-item-1.svg";
import Social2 from "../../assets/images/svg/social-item-2.svg";
import Social3 from "../../assets/images/svg/social-item-3.svg";
import Social4 from "../../assets/images/svg/social-item-4.svg";
import ButtonAppStore from "../../assets/images/svg/button-google-play.svg";
import ButtonGooglePlay from "../../assets/images/svg/button-google-play.svg";

export default () => {
    return (
        <footer className="app-footer">
            <div className="footer-menu">
                <Container className="container">
                    <Row>
                        <Col md={12} lg={5}>
                            <ul className="footer-menu-external">
                                <li>
                                    <a href="/#" title="App Store">
                                        <img src={ButtonAppStore} alt="App Store" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" title="Google Play">
                                        <img src={ButtonGooglePlay} alt="Google Play" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={12} lg={7}>
                            <ul className="footer-menu-internal">
                                <li>
                                    <Link to={`/sign-in`}>About</Link>
                                </li>
                                <li>
                                    <Link to={`/sign-in`}>Services</Link>
                                </li>
                                <li>
                                    <Link to={`/sign-in`}>Support</Link>
                                </li>
                                <li>
                                    <Link to={`/sign-in`}>Gallery</Link>
                                </li>
                                <li>
                                    <Link to={`/sign-in`}>Terms</Link>
                                </li>
                                <li>
                                    <Link to={`/sign-in`}>Locations</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <span className="footer-line" />
                </Container>
            </div>
            <div className="footer-widgets">
                <Container className="container">
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <div className="widget-logo">
                                    <span>Powered By</span>
                                    <img src={Logo} alt="Logo" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Main Menu</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Pickup</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Orders</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Upcoming Orders</a>
                                    </li>
                                    <li>
                                        <a href="/#">Recent Orders</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Reservation</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Recent Reservation</a>
                                    </li>
                                    <li>
                                        <a href="/#">Wait To Be Seated</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Profile</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Promos & Credits</a>
                                    </li>
                                    <li>
                                        <a href="/#">Rewards</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Special Offers</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Chief Special</a>
                                    </li>
                                    <li>
                                        <a href="/#">Breakfast Special</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                            <div className="widget">
                                <h3>Support</h3>
                                <ul>
                                    <li>
                                        <a href="/#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/#">Live Chat</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <span className="footer-line" />
                </Container>
            </div>
            <div className="footer-info">
                <Container className="container">
                    <p>
                        Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application. <br />
                        Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.
                    </p>
                    <Row>
                        <Col md={12} lg={6}>
                            <ul className="footer-info-internal">
                                <li>©2019 OPEQE INC</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Col>
                        <Col md={12} lg={6}>
                            <ul className="footer-info-external">
                                <li>
                                    <a href="/#" title="Social Links">
                                        <img src={Social1} alt="Social Links" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" title="Social Links">
                                        <img src={Social2} alt="Social Links" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" title="Social Links">
                                        <img src={Social3} alt="Social Links" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" title="Social Links">
                                        <img src={Social4} alt="Social Links" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};
