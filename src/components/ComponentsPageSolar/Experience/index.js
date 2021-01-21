import React, { useState, useCallback } from 'react';
import './index.css';
import { Pagination } from 'antd';

import $ from 'jquery';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';

function Experience() {

    const [video1Link, setVideo1Link] = useState("https://www.youtube.com/embed/QE6rfwwQasE");
    const [video2Link, setVideo2Link] = useState("https://www.youtube.com/embed/MdxGCto4o68");


    // let btNext = document.getElementsByClassName("")

    function resetVideo() {

        if (video1Link == "") {
            setVideo1Link("https://www.youtube.com/embed/QE6rfwwQasE")
            setVideo2Link("")
        } else {
            setVideo2Link("https://www.youtube.com/embed/MdxGCto4o68")
            setVideo1Link("")
        }


    }

    return (
        <div className='solar-experience Experience'>
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p className='subtitle-solar'>Veja os nosso registros</p>

            </div>
            <Carousel
                afterSlide={() => {
                    resetVideo()
                }}
                slidesToShow={1}
                cellSpacing={63}
                defaultControlsConfig={{
                    nextButtonText: ' ',
                    prevButtonText: ' ',
                    prevButtonStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        background: '#FAF238',
                        color: '#575757',
                        fontSize: '30px',

                    },
                    nextButtonStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#FAF238',
                        color: '#575757',
                        fontSize: '30px',

                    },
                    pagingDotsStyle: {
                        fill: '#11523b',
                        width: '30px',
                    }
                }}
                autoGenerateStyleTag={true}>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>Sítio Saquinho, Município Nova Palmeira - PB</div>
                        <div className='experience-text-txt'>
                            <p>Fomos até Picuí e Nova palmeira visualizar as ações realizadas com financiamento FIDA. Em
                            Picuí, visitamos a Cooperativa Agroindustrial do Seridó e Curimataú Paraibano - COOASC, que
                            foi beneficiada com a instalação de um sistema solar fotovoltaico para redução dos custos no
                            processamento de polpas de frutas. Já em Nova palmeira, na comunidade Saquinho, visitamos
                            a propriedade do Sr. Euclides e família, que foram beneficiados com um kit solar fotovoltaico
                            para fins de irrigação da sua propriedade. Todas famílias beneficiadas com as experiências se
mostraram satisfeitas e agradecidas pela concessão das tecnologias.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video1Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                    {/* <Pagination size="small" total={50} />  */}
                </div>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>Sítio Saquinho, Município Nova Palmeira - PB</div>
                        <div className='experience-text-txt'>
                            <p>Fomos até Picuí e Nova palmeira visualizar as ações realizadas com financiamento FIDA. Em
                            Picuí, visitamos a Cooperativa Agroindustrial do Seridó e Curimataú Paraibano - COOASC, que
                            foi beneficiada com a instalação de um sistema solar fotovoltaico para redução dos custos no
                            processamento de polpas de frutas. Já em Nova palmeira, na comunidade Saquinho, visitamos
                            a propriedade do Sr. Euclides e família, que foram beneficiados com um kit solar fotovoltaico
                            para fins de irrigação da sua propriedade. Todas famílias beneficiadas com as experiências se
mostraram satisfeitas e agradecidas pela concessão das tecnologias.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video2Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                </div>
            </Carousel>
        </div>
    )
}

export default Experience;