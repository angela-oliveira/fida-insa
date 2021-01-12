import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { PageHeader, Button } from 'antd';

import logoRenovaSemiarido from "../../utils/images/renova-semiarido.png";
import iconEmail from "../../utils/images/Icon ionic-md-mail.svg";

function HeaderPage() {

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                    ghost={false}
                    title={<Link to="/" className="fida"><img src={logoRenovaSemiarido}></img></Link>}
                    extra={[
                        // <Button key="3"><img src={iconEmail}></img></Button>,
                        // <Button key="2">PT</Button>,
                        // <Button key="1">EN</Button>,
                    ]}
                >
                </PageHeader>
        </div>

    )

}

export default HeaderPage;




