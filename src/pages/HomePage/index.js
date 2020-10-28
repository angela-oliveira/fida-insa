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
import Cases from '../../components/Cases';



import blue from "../../utils/images/blue.png";
import imgMain from "../../utils/images/main.png";
import bgTechnology from "../../utils/images/bg_technology.svg";
import perfilTest from "../../utils/images/perfil_test.jpg";
import footer from "../../utils/images/Group 137.png";
import Carousel from '../../components/carousel';



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
            {/* <div className="techs">
                <Card>
                    <div ></div>
                    <h1 >TECNOLOGIAS</h1>
                </Card>

                <p>Conheca as tecnologias desenvolvidas</p>

                <br></br>

                <Card>
                    <img src={bgTechnology}></img>
                </Card>
            </div> */}
            <div className="cases">

                <Cases/>

            </div>
            {/* <div className="team">
                <Card>
                    <div></div>
                    <h1>EQUIPE</h1>
                    <p>Conheça quem está à frente desse projeto</p>
                </Card>
                <br></br>

                    
                
            </div> */}
            <div className="parceiros">
                <Card >
                    <h2>Realização</h2>

                    <h2>...</h2>
                    
                    <h2>Parceiros</h2>

                    <h2>...</h2>
                    
                    <h2>Patrocinador</h2>

                    <h2>...</h2>
                </Card>
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