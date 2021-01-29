import React, { useEffect } from 'react'

import {
    Row,
    Col,
    Button,
    Card,
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import HeaderPage from '../../components/HeaderPage';
import MenuTechnologies from '../../components/MenuTechnolgies'
import Case from '../../components/Case'
import Equipe from '../../components/Equipe'
import Parceiros from '../../components/Parceiros'

import blue from "../../utils/images/blue.png";
import imgMain from "../../utils/images/logotechrenovafida.jpg";
import bgTechnology from "../../utils/images/bg_technology.svg";
import perfilTest from "../../utils/images/perfil_test.jpg";
import footer from "../../utils/images/Group 137.png";

import '../../utils/styles/utils.module.css'

export default class extends React.Component {

    listCase = document.getElementsByClassName('.list-cases')
    state = {
        visible: false
    }

    openModal() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <div className='main'>
                {/* <div className='path1'></div> */}
                {/* COMPONENTE DE CABEÇALHO */}
                <HeaderPage />


                <Row className='main-banner-page'>

                    <Col>

                        <img src={blue}></img>
                        <div className='banner-page'>
                            <h1 className='renova'>RENOVA</h1>
                            <h1 className='fida'>SEMIÁRIDO</h1>

                            <div className="text-p">Energias renováveis</div>

                            <Button onClick={() => this.openModal()}>Conheça o Projeto +</Button>
 

                            <Modal
                                className="modal-home-page"
                                title='Olá, sejam bem-vindos!'
                                visible={this.state.visible}
                                width={800}
                                footer={null}
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
                                <img style={{ width: '100%' }} src={this.state.image} alt="" />
                                <div className='content-modal-home'>
                                    <p>O RENOVA-SEMIÁRIDO é uma plataforma digital de projetos com energia solar, energia eólica, biodigestores, bioágua e ecofogão na região Semiárida, destinada a produtores, agentes públicos, profissionais de órgãos de fomento, educadores e sociedade civil em geral. A plataforma oferece um mapa interativo com a localização dos casos de sucesso com informações, fotografias e vídeos com depoimentos reais. 
                                        </p>
                                    <p>Foram incluídos no RENOVA-SEMIÁRIDO alguns produtos e protótipos desenvolvidos por professores e estudantes da rede pública, como dessalinizadores, fogões e fornos solares, apresentando exemplos relevantes de uma educação voltada para o Semiárido. 
                                        </p>
                                    <p>O RENOVA-SEMIÁRIDO foi fomentado pelo Fundo Internacional de Desenvolvimento Agrícola (FIDA) da Organização das Nações Unidas (ONU) e desenvolvido pelo INSA (Instituto Nacional do Semiárido), sendo também apresentado em língua inglesa como uma plataforma bilíngue.
                                        </p>
                                </div>

                            </Modal>
                        </div>
                    </Col>

                    <div className="bg-main">
                        <img src={imgMain}></img>

                    </div>
                            </Row>

                <br></br>
                <div className="techs">
                    {/* <div className="path2"></div> */}
                    <Card>
                        <div className="div-yellow"></div>
                        <h1>TECNOLOGIAS</h1>
                    </Card>

                    <p>Conheca as tecnologias desenvolvidas</p>

                    <br></br>
                    <MenuTechnologies></MenuTechnologies>

                </div>
                <br></br>

                <Case />

                <div className="team">
                    {/* <div className='path3'></div> */}
                    <Card>
                        <div className="div-yellow"></div>
                        <h1>EQUIPE</h1>
                        <p>Conheça quem está à frente desse projeto</p>
                    </Card>

                    {/* <Equipe /> */}

                    <br></br>



                </div>
                {/* <div className="parceiros">
                    <Parceiros />

                </div> */}

                <div className="footer">
                    {/* <div className='path4'></div> */}
                    <img src={footer}></img>
                </div>
            </div>
        );
    }
}