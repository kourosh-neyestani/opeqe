import React from "react";
import "./index.scss";

export default (props) => {
    const { title, children } = props;
    return (
        <header className="el-heading">
            {title && (
                <h2>
                    <span>{title}</span>
                </h2>
            )}
            {children && children}
        </header>
    );
};
