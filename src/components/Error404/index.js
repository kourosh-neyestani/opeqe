import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// Styles
import "./index.scss";

export default () => {
    return (
        <>
            <Header />
            <section className="section section-error section-error-404">
                <div className="display-center">
                    <h1>404</h1>
                    <p>We couldn't find the page you're looking for!</p>
                </div>
            </section>
            <Footer />
        </>
    );
};
