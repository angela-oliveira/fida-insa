import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import eolica from '../../utils/images/photos/eólica_fotos/EOLICA-PANORAMICA CATAVENTO-1200.jpg';
import bioagua from '../../utils/images/photos/Bioágua/sobral_santaluzia/Flaviana - Bioágua 01.JPG';
import ecofogao from '../../utils/images/photos/Ecofogao/sobral/SOBRAL-Santa Luzia-Maria 01_1200.jpg';
import biodigestor from '../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 02.JPG';
import solar from '../../utils/images/photos/solar/SOLAR_PAINEL_SOLAR_1200.jpg';


// import solartest from '../../utils/images/solar_test1.jpg';

import Carousel from 'nuka-carousel'

class Case extends React.Component {

    render() {
        return (
            <div className='container-cases'>

                <Carousel


                    slidesToShow={1}
                    slideWidth='700px'
                    cellAlign='center'
                    vertical={true}
                    defaultControlsConfig={{

                        nextButtonText: 'Ⅴ',
                        prevButtonText: 'Λ',
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
                                    Projeto aplicado no sítio do Algodão no município de Algodão de Jandaíra - PB
                                            </h2>
                            </div>
                            <div className='img'>
                                <img src={eolica} alt='Energia Eólica'></img>
                            </div>
                            <article className='text'>

                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Bioágua</h2>
                                <h2>
                                    Sistema reuso de água cinza no sítio Capoeiras do Asfalto localizado na cidade de Varjota - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={bioagua} alt='Energia solar'></img>
                            </div>
                            <article className='text'>
                          
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
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
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Biodigestor</h2>
                                <h2>
                                    Sistema para a produção de Biogás no Sítio Cajazeira no município de Varjota - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={biodigestor} alt='Biodigestor'></img>
                            </div>
                            <article className='text'>
                                
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title'  >
                                <h2 className='top' >Energia solar</h2>
                                <h2>
                                    Sistema para a produção de Biogás no Sítio Cajazeira no município de Varjota - CE
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={solar} alt='Energia solar'></img>
                            </div>
                            <article className='text'>
                                
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>


                </Carousel>

            </div>

        )
    }
}

export default Case;