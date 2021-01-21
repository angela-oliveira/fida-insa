import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Button } from 'antd';
import 'antd/dist/antd.css';


import './index.css'
import logoRenovaSemiarido from "../../utils/images/renova-semiarido.png"; 


const HeaderTechs = (props) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader

                ghost={false}
                title={<Link to="/" className="fida"><img src={logoRenovaSemiarido}></img></Link>}

            >
            </PageHeader>
            <div className="nave-left nave">
                <Link to={props.linkBack}>
                    <button>
                        <img src={props.iconBack} alt=''></img>
                    </button>
                </Link>
            </div>

            <div className="nave-right nave">
                <Link to={props.linkNext}>
                    <button>
                        <img src={props.iconNext} alt=''></img>
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default HeaderTechs;