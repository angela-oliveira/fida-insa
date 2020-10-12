import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderHome from '../components/HeaderHome';
import {
    Row,
    Col,
    Button,
    PageHeader,
    Card
} from 'antd';
import 'antd/dist/antd.css';
import '../styles/utils.module.css'
import Colors from '../Utils/Colors'

// import background from '../public/images/bg_main.png';

// const bgMain = {
//     backgroundImage: `url(${Background})`
// };
const { Meta } = Card;

function HomePage() {
    return (
        <div>
            <div className="site-page-header-ghost-wrapper" style={{ paddingLeft: 150, paddingTop: 10 }}>
                <PageHeader
                    ghost={false}
                    title={<img src="/images/logo_fida.png"></img>}
                    extra={[
                        <Button key="3"><img src="/images/Icon ionic-md-mail.svg"></img></Button>,
                        <Button key="2">PT</Button>,
                        <Button key="1">EN</Button>,
                    ]}
                >
                </PageHeader>
            </div>
            {/* <HeaderHome /> */}
            {/* <div styles={{ backgroundImage:`url(${background})` }}></div> */}
            <div>

                {/* <img style={{width: 450, paddingLeft: 100, marginBottom: -50, marginTop: 50}} src="/images/blue.png"></img> */}
                <Row className="main" style={{ paddingLeft: 150 }}>

                    <Col style={{ marginTop: 100 }}>

                        <img style={{ width: 450, paddingLeft: -200, marginBottom: -50 }} src="/images/blue.png"></img>
                        <div>
                            <h1 style={{
                                // fontFamily: Raleway,
                                fontSize: 80,
                                fontWeight: 700,
                                letterSpacing: 13.3,
                                marginBottom: -50,
                                color: Colors.BLACK,
                                opacity: 1
                            }}>RENOVA</h1>
                            <Row>

                                <h1 style={{
                                    fontSize: 80,
                                    marginBottom: -30,
                                    fontWeight: 700,
                                    color: Colors.GREEN_LIGHT,
                                    letterSpacing: 13.3,
                                }}>FIDA</h1>
                                <div>
                                    {/* <img style={{width: 350, marginTop: 50 }} src="/images/yellow.png"></img> */}
                                </div>
                            </Row>
                            <p style={{
                                color: Colors.BLACK_TEXT,
                                fontWeight: 300,
                                fontSize: 30
                            }}>Energias renováveis para<br /> o semiárido</p>
                            <Button style={{
                                border: 'solid',
                                borderRadius: '0px 16px',
                                color: Colors.GREEN_DARK,
                                height: 72,
                                width: 250,
                                fontSize: 17,
                                borderColor: Colors.GREEN_BORDER
                            }}>Conheça o Projeto +</Button>
                        </div>
                    </Col>


                    <div style={{ position: "relative", backgroundImage: `url(require("images/bg_main.png"))` }}>
                        <img style={{ width: 600 }} src="/images/main.png"></img>

                    </div>
                </Row>
            </div>
            <div className="techs">
                <Card style={{
                    display: "flex",
                    // paddingBottom: '0px', 
                    // flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center"
                }}>
                    <div style={{
                        backgroundColor: Colors.YELLOW,
                        width: '210px',
                        height: '20px'
                    }}></div>
                    <h1 style={{
                        color: Colors.GREEN_DARK,
                        fontWeight: 700,
                        marginTop: -20,
                        marginBottom: -20
                    }}>TECNOLOGIAS</h1>
                </Card>
                <p style={{
                    color: Colors.BLACK_TEXT,
                    textAlign: "center"
                }}>Conheca as tecnologias desenvolvidas</p>
                <br></br>
                <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}>

                    <img style={{
                        width: 500
                    }} src="/images/bg_technology.svg"></img>
                </Card>
            </div>
            <div className="cases"></div>
            <div className="team">
                <Card style={{
                }}>
                    <div style={{
                        backgroundColor: Colors.YELLOW,
                        width: '210px',
                        height: '20px'
                    }}></div>
                    <h1 style={{
                        color: Colors.GREEN_DARK,
                        fontWeight: 700,
                        marginTop: -20,
                        paddingLeft: 150,
                        marginBottom: -10
                    }}>EQUIPE</h1>
                <p style={{
                    color: Colors.BLACK_TEXT,
                    paddingLeft: 150,
                    // textAlign: "center"
                }}>Conheça quem está à frente desse projeto</p>
                </Card>
                <br></br>
                <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}>

                <Card
                    hoverable
                    style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                >
                    <img style={{ width: 100 }} alt="example" src="/images/perfil_test.jpg" />
                    <Meta title="Nome" description="Função" />
                </Card>
                <Card
                    hoverable
                    style={{height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                >
                    <img style={{ width: 100 }} alt="example" src="/images/perfil_test.jpg" />
                    <Meta title="Nome" description="Função" />
                </Card>
                <Card
                    hoverable
                    style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                >
                    <img style={{ width: 100 }} alt="example" src="/images/perfil_test.jpg" />
                    <Meta title="Nome" description="Função" />
                </Card>
                <Card
                    hoverable
                    style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                >
                    <img style={{ width: 100 }} alt="example" src="/images/perfil_test.jpg" />
                    <Meta title="Nome" description="Função" />
                </Card>
                </Row>
            </div>
            <div className="parceiros"></div>
            <div className="footer"></div>
        </div>
    );
}

export default HomePage;