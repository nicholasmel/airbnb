import React, { useState, useEffect } from "react";
import './HeaderSearch.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

function HeaderSearch() {
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
        <div className={`headersearch ${show && "headersearch__white"}`} onClick={() => history.push('/')}>
            <img className="headersearch__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            <div className='headersearch__center'>
                <p>Places to stay</p>
                <p>Experiences</p>
                <p>Online Experiences</p>
            </div>

            <div className='headersearch__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default HeaderSearch
