import React from "react";
import { Container } from "react-grid-system";
import "./index.scss";

export default () => {
    return (
        <section className="section section-auth section-sign-in">
            <div className="display-spacing">
                <Container>
                    <div className="section-auth-form">
                        <h3>Please Enter Your Phone Number To Continue</h3>
                        <input type="text" placeholder="Your Phone Number" />
                        <button className="button button-radius button-dark button-lg button-block">Next</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};
