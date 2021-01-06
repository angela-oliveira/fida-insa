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
            <div className="nave-left">
                <Link></Link>
                <button>
                </button>
            </div>

            <div className="nave-right">
                <button>
                    
                </button>
            </div>
        </div>
    );
}
export default HeaderTechs;