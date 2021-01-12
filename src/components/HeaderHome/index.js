import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { PageHeader, Button } from 'antd';

const HeaderHome = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
            >
            </PageHeader>
        </div>
        // <div>
        //     <img src="/images/logo_fida.svg"></img>
        //     <img src="/images/Icon ionic-md-mail.svg"></img>
        //     <img src="/images/brazil.svg"></img>
        //     <img src="/images/brazil.svg"></img>
        // </div>
    );
    
}

// export default HeaderHome;