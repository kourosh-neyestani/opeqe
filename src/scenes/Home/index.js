import React from "react";
// Components
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import GiftCards from "../../components/GiftCards";
import SearchForm from "../../components/SearchForm";
// Styles
import "./index.scss";

export default () => {
    return (
        <>
            <Hero />
            <SearchForm />
            <Offers />
            <GiftCards />
        </>
    );
};
