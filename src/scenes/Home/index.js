import React from "react";
// Components
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Applications from "../../components/Applications";
// Styles
import "./index.scss";

export default () => {
    return (
        <>
            <Hero />
            <Offers />
            <Applications />
        </>
    );
};
