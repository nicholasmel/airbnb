import React, { useState, useEffect } from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    const [show, handleShow] = useState();

    // scroll listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`header ${show && "header__white"}`} onClick={() => history.push('/')}>
            <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            <div className='header__center'>
                <p>Places to stay</p>
                <p>Experiences</p>
                <p>Online Experiences</p>
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header
