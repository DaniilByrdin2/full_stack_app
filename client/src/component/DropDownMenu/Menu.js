import React from "react";
import { Link } from "react-router-dom";

import "./menu.css"

export const Menu = () => {
    return (
        <div className="container_menu">
            <div><Link to="/bet365">bet365</Link></div>
            <div><Link to="/">Ставки</Link></div>
        </div>
    )
}