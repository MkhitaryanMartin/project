import {NavLink } from "react-router-dom";
import "./style.scss";

const Category = ({text, href})=>{
    return (
        <NavLink to={href} className="category">{text}</NavLink>
    )
}

export default Category;