import React from "react";
import Swiper from "react-id-swiper";
import { Container } from "react-grid-system";
// Styles
import "./index.scss";
// Images
import Image1 from "../../../../assets/images/hero/slide-1.jpg";
import Image2 from "../../../../assets/images/hero/slide-2.jpg";

export default () => {
    return (
        <section className="section section-hero">
            <div className="hero-carousel">
                <Carousel />
            </div>
        </section>
    );
};

function Carousel() {
    const settings = {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    };
    return (
        <Swiper {...settings}>
            <div>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(${Image1})` }} />
                    <div className="content">
                        <Container className="container" fluid>
                            <h2>Breakfast Special</h2>
                            <p>Get 15% off when you order 3 or more Blueberry Pancake Breakfast</p>
                            <button className="button button-lg button-radius button-dark">
                                <span>Use</span>
                                <span className="button-tag">Breakfast Special</span>
                            </button>
                        </Container>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(${Image2})` }} />
                    <div className="content">
                        <Container className="container" fluid>
                            <h2>Chief Special</h2>
                            <p>Get $10 off when you order $20 or more T-Bone Steak & Eggs</p>
                            <button className="button button-lg button-radius button-dark">
                                <span>Use</span>
                                <span className="button-tag">Chief Special</span>
                            </button>
                        </Container>
                    </div>
                </div>
            </div>
        </Swiper>
    );
}
