import React from "react";
// Components
import Carousel from "../../../../components/Carousel";
import Applications from "../../../../components/Applications";
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
                <Applications />
            </section>
        </>
    );
}