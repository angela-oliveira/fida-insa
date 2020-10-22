import React from 'react'
import { Link } from 'react-router-dom'

import {
    Row,
    Col,
    Button,
    PageHeader,
    Card
} from 'antd';
import 'antd/dist/antd.css';
import '../../utils/styles/utils.module.css'
import './index.css'
import HeaderPage from '../../components/HeaderPage';



import blue from "../../utils/images/blue.png";
import imgMain from "../../utils/images/main.png";
import bgTechnology from "../../utils/images/bg_technology.svg";
import perfilTest from "../../utils/images/perfil_test.jpg";
import footer from "../../utils/images/Group 137.png";



// import background from '../public/images/bg_main.png';

// const bgMain = {
//     backgroundImage: `url(${Background})`
// };
const { Meta } = Card; 

function HomePage() {
    return (
        <div>
            {/* COMPONENTE DE CABEÇALHO */}
            <HeaderPage />

            {/* <HeaderHome /> */}
            {/* <div styles={{ backgroundImage:`url(${background})` }}></div> */}
            <div>

                {/* <img style={{width: 450, paddingLeft: 100, marginBottom: -50, marginTop: 50}} src="/images/blue.png"></img> */}
                <Row>

                    <Col>

                        <img src={blue}></img>
                        <div className='banner-page'>
                            <h1>RENOVA</h1>
                            <Row>

                                <h1>FIDA</h1>

                                <div>
                                    {/* <img style={{width: 350, marginTop: 50 }} src="/images/yellow.png"></img> */}
                                </div>
                            </Row>

                            <p >Energias renováveis para<br /> o semiárido</p>

                            <Button>Conheça o Projeto +</Button>
                        </div>
                    </Col>


                    <div className="bg-main">
                        <img src={imgMain}></img>

                    </div>
                </Row>
            </div>
            <div className="techs">
                <Card>
                    <div ></div>
                    <h1 >TECNOLOGIAS</h1>
                </Card>

                <p>Conheca as tecnologias desenvolvidas</p>

                <br></br>

                <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}>

                    <img style={{
                        width: 500
                    }} src={bgTechnology}></img>
                </Card>
            </div>
            <div className="cases"></div>
            <div className="team">
                <Card>
                    <div></div>
                    <h1>EQUIPE</h1>
                    <p>Conheça quem está à frente desse projeto</p>
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
                        <img style={{ width: 100 }} alt="example" src={perfilTest} />
                        <Meta title="Nome" description="Função" />
                    </Card>

                    <Card
                        hoverable
                        style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                    >
                        <img style={{ width: 100 }} alt="example" src={perfilTest} />
                        <Meta title="Nome" description="Função" />
                    </Card>
                    <Card
                        hoverable
                        style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                    >
                        <img style={{ width: 100 }} alt="example" src={perfilTest} />
                        <Meta title="Nome" description="Função" />
                    </Card>
                    <Card
                        hoverable
                        style={{ height: 240, width: 240, margin: 10 }}
                    // cover={<img alt="example" src="/images/perfil_test.jpg" />}
                    >
                        <img style={{ width: 100 }} alt="example" src={perfilTest} />
                        <Meta title="Nome" description="Função" />
                    </Card>
                </Row>
            </div>
            <div className="parceiros">
                <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}>
                    <h2>Realização</h2>

                    <Row style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>
                    {/* </Card>
                <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}> */}
                    <h2>Parceiros</h2>

                    <Row style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>
                    {/* </Card>
                <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}> */}
                    <h2>Patrocinador</h2>

                    <Row style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>

                        <Card
                            hoverable
                            style={{ height: 50, width: 100, margin: 10 }}
                        >
                            <img style={{ width: 20 }} alt="example" src={perfilTest} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>
                </Card>
            </div>
            <div className="footer">
                <img style={{ width: "100%" }} src={footer}></img>
            </div>
        </div>
    );
}


// function HomePage(){
//     return(<h1>HomePage</h1>)
// }

export default HomePage;