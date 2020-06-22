import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./index.scss";
// Images
import MobileIcon1 from "../../assets/images/svg/mobile-icon-1.svg";
import MobileIcon2 from "../../assets/images/svg/mobile-icon-2.svg";
import MobileIcon3 from "../../assets/images/svg/mobile-icon-3.svg";
import MobileIcon4 from "../../assets/images/svg/mobile-icon-4.svg";
import MobileIcon5 from "../../assets/images/svg/mobile-icon-5.svg";

const links = [
    {
        path: "sign-in",
        icon: MobileIcon1,
        title: "sign-in",
    },
    {
        path: "sign-in",
        icon: MobileIcon2,
        title: "sign-in",
    },
    {
        path: "sign-in",
        icon: MobileIcon3,
        title: "sign-in",
    },
    {
        path: "sign-in",
        icon: MobileIcon4,
        title: "sign-in",
    },
    {
        path: "sign-in",
        icon: MobileIcon5,
        title: "sign-in",
    },
];

export default function MobileMenu() {
    return (
        <div className="app-mobile-menu">
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        <Link to={`${item.path}`}>
                            <img src={item.icon} alt={item.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
