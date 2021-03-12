import React, { useState, useCallback, useRef } from 'react';
import './index.css';
import { Pagination } from 'antd';

import $ from 'jquery';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';
import { select } from 'd3';




function Experience() {

    const [video1Link, setVideo1Link] = useState("https://www.youtube.com/embed/Z_2zhb4JxBg")
    const [video2Link, setVideo2Link] = useState("https://www.youtube.com/embed/RMeXQCTpMx4")
    const [page, setPage] = useState(0);

    const vid1Ref = useRef(null)

    const vid1 = select(vid1Ref)

    function resetVideo() {

        if(video1Link == ""){
            setVideo1Link("https://www.youtube.com/embed/Z_2zhb4JxBg")
            setVideo2Link("")
        }else{
            setVideo2Link("https://www.youtube.com/embed/RMeXQCTpMx4")
            setVideo1Link("")
        }

    }


    return (
        <div className='ecofogao-analyze-experience Experience'>
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p>Veja os nosso registros</p>

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
                        <div className='experience-text-label'>Município de Sobral-CE</div>
                        <div className='experience-text-txt'>
                            <p>Na Serra do Rosário, município de Sobral-CE, na comunidade Santa Luzia, mora o agricultor Gerardo Elias da Silva, 61 anos, com sua esposa Maria de Lima Silva, de 59 anos e seus filhos e netos. As famílias foram contempladas com a implantação do Ecofogão onde este equipamento eliminou a fumaça que, antes, circulava por dentro da casa contribuindo para preservação do meio ambiente e melhorando a saúde dos agricultores no município de Sobral-CE. Outro benefício foi o econômico, onde o consumo de gás de cozinha reduziu em decorrência do maior uso do Ecofogão, já que o gás que custava R$ 75,00/mês para família e, hoje, um botijão dura em torno de 2-3 meses. Seu Gerardo representa uma das 25 famílias contempladas com o Ecofogão que também foram contemplados com projeto produtivo em avicultura caipira e quintais produtivos, além do reuso d´água de cinzas domiciliares.</p>
                        </div>
                    </div>


                    <div className='video'>
                        <iframe className='video-frame' ref={vid1} width="560" height="315" src={video1Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                </div>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>Município de Sobral-CE</div>
                        <div className='experience-text-txt'>
                            <p>Nestes vídeos podemos observar as experiências dos beneficiados pelo ecofogão no município de Varjota-CE onde na comunidade de Várzea da Palha a senhora Maria Aparecida Xavier Lemos e sua mãe Maria Alcides Xavier Lemos fazem uso constante do ecofogão e contam suas vantagens. Ao percorrermos o município, na comunidade Cajazeiras conhecemos a família de seu Antônio Nazaré e Dona Luzanira que criam bovinos, ovinos e galinhas caipiras e receberam as tecnologias do ecofogão de do biodigestor e continuam fazendo uso dos equipamentos com muita responsabilidade e zelo.</p>
                        </div>
                    </div>


                    <div className='video'>
                        <iframe className='video-frame' width="560" height="315" src={video2Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Experience;