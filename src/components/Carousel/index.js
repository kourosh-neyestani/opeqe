import React from "react";
import Swiper from "react-id-swiper";
import { Container } from "react-grid-system";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import "./index.scss"

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
    {
        type: "Fastfood",
        time: "5-7 Mins",
        title: "Avocado Bacon Cheeseburger",
        price: "$32.0",
        image: "https://cdn.opeqe.com/image/menu/l/7.jpg",
        subtitle: "American, Main Course",
        freeDelivery: false,
    },
    {
        type: "Pancake",
        time: "15-30 Mins",
        title: "Cinnamon Roll Pancake",
        price: "$18.0",
        image: "https://cdn.opeqe.com/image/menu/l/8.jpg",
        subtitle: "French, Main Course",
        freeDelivery: false,
    },
    {
        type: "Fastfood",
        time: "5-7 Mins",
        title: "Avocado Bacon Cheeseburger",
        price: "$32.0",
        image: "https://cdn.opeqe.com/image/menu/l/9.jpg",
        subtitle: "American, Main Course",
        freeDelivery: false,
    },
    {
        type: "Pancake",
        time: "15-30 Mins",
        title: "Cinnamon Roll Pancake",
        price: "$18.0",
        image: "https://cdn.opeqe.com/image/menu/l/10.jpg",
        subtitle: "French, Main Course",
        freeDelivery: false,
    },
];

export default () => {
    const sliderSettings = {
        spaceBetween: 50,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 9,
            },
            690: {
                slidesPerView: 1,
                spaceBetween: 90,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 12,
            },
        },
    };
    return (
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
    );
};
