import React from "react";
import { Container } from "react-grid-system";
// Styles
import "./index.scss";
// Images
import SearchIcon from "../../../../assets/images/svg/search.svg";

export default function Offers() {
    return (
        <section className="section section-offers">
            <div className="search-offers">
                <Container>
                    <div className="search-offers-wrap">
                        <div className="search-offers-info">
                            <div className="info">
                                <p className="info-1">
                                    <span className="title">ASAP Pickup</span>
                                    <span className="subtitle text-gray">Beverly Hills - 1008 Elden Way</span>
                                </p>
                                <p className="info-2">
                                    <span className="title">ASAP Delivery</span>
                                    <span className="subtitle tag">What's Your Address ?</span>
                                </p>
                            </div>
                            <div className="options">
                                <span className="label">Change</span>
                                <span className="title active">Delivery</span>
                                <span className="divider">or</span>
                                <span className="title">Pickup</span>
                            </div>
                        </div>
                        <div className="search-offers-form">
                            <button className="button button-select">
                                <span>ALL</span>
                            </button>
                            <input type="text" placeholder="Looking for something?" />
                            <button className="button bg-primary button-search">
                                <img src={SearchIcon} alt="icon" />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
