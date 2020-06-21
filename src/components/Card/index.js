import React from "react";
import "./index.scss";
// Images
import Watch from "../../assets/images/svg/watch.svg";

export default function Card(props) {
    const { type, time, title, price, image, subtitle, freeDelivery } = props;
    return (
        <div className="el-card">
            <div className="card-image">
                <img src={image} alt={title} />
                <span className="price">{price}</span>
            </div>
            <div className="card-details">
                <h3>{title}</h3>
                <p>
                    <span className="type">{type}</span>
                    <span className="subtitle">{subtitle}</span>
                </p>
                <ul>
                    <li>
                        <img src={Watch} alt="time" />
                        <span className="time">{time}</span>
                    </li>
                </ul>
                {freeDelivery && <span className="free-delivery">Free Delivery</span>}
            </div>
        </div>
    );
}
