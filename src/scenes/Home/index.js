import React from "react";
// Components
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import GiftCards from "../../components/GiftCards";
// Styles
import "./index.scss";

export default () => {
    return (
        <>
            <Hero />
            <Offers />
            <GiftCards />
        </>
    );
};
