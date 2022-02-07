import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/netflix.png';
import avatar from '../../assets/avatar.jpeg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);


    return (
        <div className={`navbar ${show && "navbar-black"}`}>
            <div className="nav_content">
                <Link to='/'>
                    <img src={logo} className='nav_logo' alt="" />
                </Link>
                <Link to='/profile'>
                    <img src={avatar} className='nav_avatar' alt="" />
                </Link>
            </div>
        </div>
    );
}
