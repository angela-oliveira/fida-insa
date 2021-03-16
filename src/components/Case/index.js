import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tabs } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import './index.css';

import cartilhastodas from '../../utils/pdf/Cartilhas compactadas.pdf'
import cartilhasEspanhol from '../../utils/pdf/Cartilhas compactadas-Espanhol.pdf'

import eolica from '../../utils/images/photos/eólica_fotos/EOLICA-PANORAMICA CATAVENTO-1200.jpg';
import bioagua from '../../utils/images/photos/Bioágua/sobral_santaluzia/Flaviana - Bioágua 01.JPG';
import ecofogao from '../../utils/images/photos/Ecofogao/sobral/SOBRAL-Santa Luzia-Maria 01_1200.jpg';
import biodigestor from '../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 02.JPG';
import solar from '../../utils/images/photos/solar/SOLAR_PAINEL_SOLAR_1200.jpg';
import seta from '../../utils/images/arrow.svg'
import Carousel from 'nuka-carousel';

const { TabPane } = Tabs;

// import solartest from '../../utils/images/solar_test1.jpg';


class Case extends React.Component {

    render() {
        return (
            <div className='container-cases'>

                <Carousel


                    slidesToShow={1}
                    slideWidth='700px'
                    cellAlign='center'
                    cellSpacing={1}
                    vertical={true}
                    defaultControlsConfig={{
                        nextButtonText: ' ',
                        prevButtonText: ' ',
                        prevButtonStyle: {

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            background: '#FAF238',
                            color: '#575757',
                            fontSize: '20px',


                        },
                        nextButtonStyle: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: '#FAF238',
                            color: '#575757',
                            fontSize: '20px',
                            top: '50px',

                        },
                        pagingDotsStyle: {
                            fill: '#11523b',
                            width: '30px',
                            right: '30px',
                        }
                    }}
                    autoGenerateStyleTag={true}
                >
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Energia Eólica</h2>
                                <h2>
                                    Projeto aplicado no Sítio do Algodão, no município de Algodão de Jandaíra - PB
                                            </h2>
                            </div>
                            <div className='img'>
                                <img src={eolica} alt='Energia Eólica'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>

                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Bioágua</h2>
                                <h2>
                                    Sistema reuso de água cinza no Sítio Capoeiras do Asfalto, localizado na cidade de Varjota - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={bioagua} alt='Energia solar'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>

                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Ecofogão</h2>
                                <h2>
                                    Fogão a lenha instalado no município de Sobral - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={ecofogao} alt='Energia solar'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>

                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Biodigestor</h2>
                                <h2>
                                    Sistema para a produção de Biogás no Sítio Cajazeira, no município de Varjota - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={biodigestor} alt='Biodigestor'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>

                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Energia solar</h2>
                                <h2>
                                    Painel solar instalado  no Sítio Saquinho, no município de Nova Palmeira -PB
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={solar} alt='Energia solar'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>

                    </div>


                </Carousel>
                <div>

                    <div className='curiosities-label'>Cartilha Completa</div>
                    <div className='subtitle'><p>Informações resumidas sobre todas as tecnologias</p>
                    </div>
                </div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Português" key="1">
                        <div className="component-cartilha">
                            <center>
                                <iframe src={cartilhastodas}></iframe>

                            </center>
                            <br></br>

                        </div>
                        <div className="component-cartilha">
                            <a target="_blank" className=""
                                href={cartilhastodas}
                            >
                                <Button
                                    className='button-download-cartilha-todos'
                                    onClick={() => this.openModal()}
                                    type="primary"
                                    shape="circle"
                                    icon={<DownloadOutlined />}
                                >Download Cartilha</Button></a>
                        </div>
                    </TabPane>
                    <TabPane tab="Espanhol" key="2">
                        <div className="component-cartilha">
                            <center>
                                <iframe src={cartilhasEspanhol}></iframe>

                            </center>
                            <br></br>

                        </div>
                        <div className="component-cartilha">
                            <a target="_blank" className=""
                                href={cartilhasEspanhol}
                            >
                                <Button
                                    className='button-download-cartilha-todos'
                                    onClick={() => this.openModal()}
                                    type="primary"
                                    shape="circle"
                                    icon={<DownloadOutlined />}
                                >Download Cartilha</Button></a>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        )
    }
}

export default Case;