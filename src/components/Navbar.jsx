import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="tabs">
                <div className="tab-nav">
                    <NavLink to="/presentation"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" }>presentation</NavLink>
                </div>
                <div className="tab-nav">
                    <NavLink to="/about-author"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" }>about author</NavLink>
                </div>
                <div className="tab-nav">
                    <NavLink to="/overview"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" }>overview</NavLink>
                </div>
                <div className="tab-nav">
                    <NavLink to="/similar-books"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" }>similar books</NavLink>
                </div>
                <div className="tab-nav">
                    <NavLink to="/"  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" }>back to map</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;