import React from 'react'

import {
    Row,
    Col,
    Button,
    Card
} from 'antd';
import 'antd/dist/antd.css';
import '../../utils/styles/utils.module.css'
import './index.css'
import HeaderPage from '../../components/HeaderPage';
import MenuTechnologies from '../../components/MenuTechnolgies'
import Case from '../../components/Case'
import Carousel from '../../components/Carousel'
import Parceiros from '../../components/Parceiros'


import blue from "../../utils/images/blue.png";
import imgMain from "../../utils/images/main.png";
import bgTechnology from "../../utils/images/bg_technology.svg";
import perfilTest from "../../utils/images/perfil_test.jpg";
import footer from "../../utils/images/Group 137.png";
// import paqtcpblogo from "../../utils/images/paqtcpblogo.png"
// import insalogo from "../../utils/images/insalogo.png"
// import ifpblogo from "../../utils/images/logo_ifpb.png"
// import ufcglogo from "../../utils/images/ufcglogo.jpg"
// import procaselogo from "../../utils/images/procaselogo.png"
// import fidalogo from "../../utils/images/P_g_web.jpg"


// import background from '../public/images/bg_main.png';

// const bgMain = {
//     backgroundImage: `url(${Background})`
// };
const { Meta } = Card;

function HomePage() {

    let listCase = document.getElementsByClassName('.list-cases')

    function back() {
        console.log("Back")
    }

    function next() {
        console.log("Next")
    }

    return (
        <div>
            {/* COMPONENTE DE CABEÇALHO */}
            <HeaderPage />

            {/* <HeaderHome /> */}
            {/* <div styles={{ backgroundImage:`url(${background})` }}></div> */}
            <div>

                {/* <img style={{width: 450, paddingLeft: 100, marginBottom: -50, marginTop: 50}} src="/images/blue.png"></img> */}
                <Row className='main-banner-page'>

                    <Col>

                        <img src={blue}></img>
                        <div className='banner-page'>
                            <h1 className='renova'>RENOVA</h1>
                            <h1 className='fida'>FIDA</h1>
                            <Row>

                                {/* <h1>FIDA</h1> */}

                                <div>
                                    {/* <img style={{width: 350, marginTop: 50 }} src="/images/yellow.png"></img> */}
                                </div>
                            </Row>

                            <p>Energias renováveis para<br /> o semiárido</p>

                            <Button>Conheça o Projeto +</Button>
                        </div>
                    </Col>


                    <div className="bg-main">
                        <img src={imgMain}></img>

                    </div>
                </Row>
            </div>
            <br></br>
            <div className="techs">
                <Card>
                    <div className="div-yellow"></div>
                    <h1>TECNOLOGIAS</h1>
                </Card>

                <p>Conheca as tecnologias desenvolvidas</p>

                <br></br>
                <MenuTechnologies></MenuTechnologies>

            </div>
            <br></br>

            <Case/>

            <div className="team">
                <Card>
                    <div className="div-yellow"></div>
                    <h1>EQUIPE</h1>
                    <p>Conheça quem está à frente desse projeto</p>
                </Card>

                <Carousel />

                <br></br>



            </div>
            <div className="parceiros">
                <Parceiros />
                {/* <Card >
                    <h2>Realização</h2>

                    <Row>

                        <Card>
                            <img alt="example" src={paqtcpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={insalogo} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <h2>Parceiros</h2>

                    <Row >

                        <Card hoverable >
                            <img alt="example" src={ifpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={ufcglogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={paqtcpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={procaselogo} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <h2>Patrocinador</h2>

                    <Row>

                        <Card hoverable >
                            <img alt="example" src={fidalogo} />
                            <Meta title="" description="" />
                        </Card>

                    </Row>
                </Card> */}
            </div>
            <div className="footer">
                <img src={footer}></img>
            </div>
        </div>
    );
}


// function HomePage(){
//     return(<h1>HomePage</h1>)
// }

export default HomePage;