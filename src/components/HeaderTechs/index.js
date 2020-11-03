import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Button } from 'antd';
import 'antd/dist/antd.css';


import './index.css'
import logoFida from "../../utils/images/logo_fida.png";


const HeaderTechs = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader

                ghost={false}
                title={<Link to="/" className="fida"><img src={logoFida}></img></Link>}

            >
            </PageHeader>
        </div>
    );
}
export default HeaderTechs;