import React from "react";
// Components
import Carousel from "../../../../components/Carousel";
// Styles
import "./index.scss";

export default function Offers() {
    return (
        <>
            <section className="section section-offers">
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
            </section>
        </>
    );
}