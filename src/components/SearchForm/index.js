import React from "react";
import { Container, Hidden } from "react-grid-system";
// Images
import SearchIcon from "../../assets/images/svg/search.svg";
// Styles
import "./index.scss";

export default () => {
    return (
        <section className="section section-search">
            <div className="search-offers">
                <Container className="container" fluid>
                    <div className="search-offers-wrap">
                        <div className="search-offers-info">
                            <div className="info">
                                <p className="info-1 active">
                                    <span className="title">ASAP Pickup</span>
                                    <span className="subtitle text-gray">Beverly Hills - 1008 Elden Way</span>
                                </p>
                                <p className="info-2">
                                    <span className="title">ASAP Delivery</span>
                                    <span className="subtitle tag">What's Your Address ?</span>
                                </p>
                            </div>
                            <Hidden xs sm md>
                                <div className="options">
                                    <span className="label">Change</span>
                                    <span className="title active">Delivery</span>
                                    <span className="divider">or</span>
                                    <span className="title">Pickup</span>
                                </div>
                            </Hidden>
                        </div>
                        <Hidden xs sm md>
                            <div className="search-offers-form">
                                <button className="button button-select">
                                    <span>ALL</span>
                                </button>
                                <input type="text" placeholder="Looking for something?" />
                                <button className="button bg-primary button-search">
                                    <img src={SearchIcon} alt="icon" />
                                </button>
                            </div>
                        </Hidden>
                    </div>
                </Container>
            </div>
        </section>
    );
};
