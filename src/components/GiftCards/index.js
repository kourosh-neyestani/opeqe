import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Images
import Logo from "../../assets/images/svg/logo.svg";
import Gifts from "../../assets/images/other/gift-cards.jpg";
// Styles
import "./index.scss";

export default () => {
    return (
        <section className="section section-gift-cards">
            <Container className="container" fluid>
                <div className="el-vertical-line"></div>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="git-card-image">
                            <img src={Gifts} alt="Gift Cards" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="content">
                            <div className="content-logo">
                                <div className="logo">
                                    <p>
                                        Branded
                                        <span> Gift Card</span>
                                    </p>
                                    <img src={Logo} alt="logo" />
                                </div>
                            </div>
                            <p>Opeqe provides a wide range of customizable products for reward and incentive programs that can meet your restaurant’s goals.</p>
                            <p>Whether you are looking to drive the addition of new customers, increase the loyalty of existing ones we have a customized solution for you.</p>
                            <button className="button button-lg button-radius button-dark" type="button">
                                GET ONLINE QUOTE
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
