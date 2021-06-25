import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { PageHeader, Button, Modal } from 'antd';
import logoRenovaSemiarido from "../../utils/images/renova-semiarido.jpg";
import iconEmail from "../../utils/images/Icon ionic-md-mail.svg";
// import { MailOutlined } from '@ant-design/icons';
import ModalContact from "../ModalContact"
class HeaderPage extends React.Component {

    state = {
        visible: false
    }
    openModal() {
        this.setState({ visible: true })
    }
    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                        ghost={false}
                        title={
                            <Link to="/" className="fida">
                                <img src={logoRenovaSemiarido}></img>
                            </Link>}
                        extra={[
                            <Button
                            className='contato'
                                onClick={() => this.openModal()}
                            >
                                <b className='label' style={{paddingRight: '1rem'}}>Fale Conosco</b>
                                <img src={iconEmail}></img>
                            </Button>
                            // <Button key="2">PT</Button>,
                            // <Button key="1">EN</Button>,
                        ]}
                    >
                    </PageHeader>

                    <Modal
                        title={'Fale Conosco'}
                        visible={this.state.visible}
                        width={800}
                        footer={null}
                        className="modal-contact"
                        onCancel={() =>
                            this.setState({
                                visible: false
                            })
                        }
                        onOk={() =>
                            this.setState({
                                visible: false
                            })
                        }
                    >
                        <div className='content-modal-contact'>
                            <ModalContact />
                        </div>
                    </Modal>
            </div>

        );
    }

}

export default HeaderPage;




