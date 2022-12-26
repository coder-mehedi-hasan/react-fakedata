import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="container">
                <div className="main">
                    <div className="logo">
                        <Link to="/">navbar</Link>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/" 
                            className={({ isActive}) => {
                                return isActive ? "active":""}}>home</NavLink></li>
                            <li><NavLink to="/about"
                            className={({ isActive}) => {
                                return isActive ? "active":""}}>about</NavLink></li>
                            <li><NavLink to="/products"
                            className={({ isActive}) => {
                                return isActive ? "active":""}}>products</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;