import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';

import logoFida from "../../utils/images/logo_fida.png";
import iconEmail from "../../utils/images/Icon ionic-md-mail.svg";

function HeaderPage() {

    return (
        <div className="site-page-header-ghost-wrapper">
            <Link to="/" className="fida">
                <img src={logoFida}></img>
            </Link>
            <button key="3">
                <img src={iconEmail}></img>
            </button>

            <button key="2"> PT </button> 

            <button key="1"> EN </button>
        </div>

    )

}

export default HeaderPage;




