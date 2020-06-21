import React from "react";
import Swiper from "react-id-swiper";
import { Container } from "react-grid-system";
// Components
import Card from "../../../../components/Card";
import Heading from "../../../../components/Heading";
import Applications from "../../../../components/Applications";
// Styles
import "./index.scss";
// Images
import SearchIcon from "../../../../assets/images/svg/search.svg";

const offers1 = [
    {
        type: "Salad",
        time: "5-9 Mins",
        title: "My Hammy & Cheese Omelette",
        price: "$6.0",
        image: "https://cdn.opeqe.com/image/menu/l/1.jpg",
        subtitle: "American, Main Course",
        freeDelivery: false,
    },
    {
        type: "Fastfood",
        time: "6-12 Mins",
        title: "Quarter Dark and Leg",
        price: "$12.0",
        image: "https://cdn.opeqe.com/image/menu/l/2.jpg",
        subtitle: "Italian, Main Course",
        freeDelivery: true,
    },
    {
        type: "Fastfood",
        time: "5-7 Mins",
        title: "Avocado Bacon Cheeseburger",
        price: "$32.0",
        image: "https://cdn.opeqe.com/image/menu/l/3.jpg",
        subtitle: "American, Main Course",
        freeDelivery: false,
    },
    {
        type: "Pancake",
        time: "15-30 Mins",
        title: "Cinnamon Roll Pancake",
        price: "$18.0",
        image: "https://cdn.opeqe.com/image/menu/l/4.jpg",
        subtitle: "French, Main Course",
        freeDelivery: false,
    },
    {
        type: "Salad",
        time: "5-7 Mins",
        title: "Roasted Chicken Salad",
        price: "$12.0",
        image: "https://cdn.opeqe.com/image/menu/l/5.jpg",
        subtitle: "Italian, Main Course",
        freeDelivery: true,
    },
    {
        type: "Pancake",
        time: "3-9 Mins",
        title: "Fastfood & Cheese Salad",
        price: "$14.0",
        image: "https://cdn.opeqe.com/image/menu/l/6.jpg",
        subtitle: "American, Main Course",
        freeDelivery: true,
    },
];

export default function Offers() {
    const sliderSettings = {
        spaceBetween: 50,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 9,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    };

    return (
        <>
            <section className="section section-offers">
                <SearchForm />
                <div className="carousel-products">
                    <Container className="container" fluid>
                        <Heading title="Special Offers" />
                        <Swiper {...sliderSettings}>
                            {offers1.map((item, index) => (
                                <div className="slide" key={index}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </Swiper>
                    </Container>
                </div>
                <div className="carousel-products">
                    <Container className="container" fluid>
                        <Heading title="Salad" />
                        <Swiper {...sliderSettings}>
                            {offers1.map((item, index) => (
                                <div className="slide" key={index}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </Swiper>
                    </Container>
                </div>
                <div className="carousel-products">
                    <Container className="container" fluid>
                        <Heading title="Appetizer" />
                        <Swiper {...sliderSettings}>
                            {offers1.map((item, index) => (
                                <div className="slide" key={index}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </Swiper>
                    </Container>
                </div>
                <div className="carousel-products">
                    <Container className="container" fluid>
                        <Heading title="Main Course" />
                        <Swiper {...sliderSettings}>
                            {offers1.map((item, index) => (
                                <div className="slide" key={index}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </Swiper>
                    </Container>
                </div>
                <Applications />
                <div className="carousel-products">
                    <Container className="container" fluid>
                        <Heading title="Main Course" />
                        <Swiper {...sliderSettings}>
                            {offers1.map((item, index) => (
                                <div className="slide" key={index}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </Swiper>
                    </Container>
                </div>
            </section>
        </>
    );
}

function SearchForm() {
    return (
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
    );
}
