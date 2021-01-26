import React, { useState, useCallback } from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';

function Experience() {

    const [video1Link, setVideo1Link] = useState("https://www.youtube.com/embed/Va6AKffc5no");
    const [video2Link, setVideo2Link] = useState("https://www.youtube.com/embed/DyCBYDgA01s");

    function resetVideo() {

        if (video1Link == "") {
            setVideo1Link("https://www.youtube.com/embed/Va6AKffc5no")
            setVideo2Link("")
        } else {
            setVideo2Link("https://www.youtube.com/embed/DyCBYDgA01s")
            setVideo1Link("")
        }
    }

    return (
        <div className='biodigestor-experience Experience'>
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p className="subtitle-biodigestor">Veja os nosso registros</p>

            </div>
            <Carousel
                afterSlide={()=>{
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
                        <div className='experience-text-label'>EXPERIÊNCIA BIODIGESTOR</div>
                        <div className='experience-text-txt'>
                            <p>O FIDA foi até os municípios de Varjota e Sobral no estado do Ceará para visitar alguns agricultores beneficiados pela tecnologia biodigestor. No Assentamento Cajazeiras na cidade de Varjota, o agricultor Antônio de Nazaré Mesquita utiliza o Biodigestor para produção de biogás e biofertilizante, e, com essa tecnologia, ele consegue destinar adequadamente os resíduos orgânicos produzidos em sua propriedade. No Sítio Cajazeiras, município de Varjota - CE, o casal de agricultores José Caetano Alves e Rosa Rodrigues Alves utilizam o Biodigestor para produção de biogás que é usado no fogão da cozinha, e para abastecer o sistema de digestão dos resíduos orgânicos que geram o biogás, eles utilizam o esterco comprado na comunidade rural onde residem, fomentando dessa forma a economia local. No Sítio Casa Forte, localizado no município de Sobral, o agricultor Vanderlei Alves Pereira utiliza o Biodigestor para produção de biogás para cozinhar, e o rejeito deste sistema ele utiliza como adubo orgânico, tornando desnecessário o uso de fertilizantes comerciais, e consequentemente, economiza na aquisição de insumos agrícolas e do gás de cozinha tradicional.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video1Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                    {/* <Pagination size="small" total={50} />  */}
                </div>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>PROJETO BIODIGESTOR CASEIRO – ECIT Chiquinho Cartaxo</div>
                        <div className='experience-text-txt'>
                            <p>O projeto, Biodigestor Caseiro, é mais um dentre os projetos envolvendo Energias Renováveis, na Escola Cidadã Integral Técnica Estadual Chiquinho Cartaxo, na cidade de Sousa, PB. Tendo como núcleo gestor Francisca Salete de Sousa, Cátia Larissi Mendes Dias e Guilherme Damião Pedrosa. O mesmo foi idealizado e construído pelos professores da Área Técnica José Joaquim de Souza Neto, Giordano Oliveira, Anderson Tôrres e Wagner Vinícius, assim como, por 20 (vinte) estudantes do primeiro ano do Ensino Médio, durante as aulas da disciplina de Inovação Social e Científica. Durante o processo de imersão do Desing Thinking - uma das etapas da disciplina de ISC, os alunos analisaram as problemáticas existentes na escola e perceberam que a demanda por gás de cozinha (GLP) e o desperdício de comida durante as refeições eram elevados. Diante deste cenário, a ideia sugerida pelos alunos para solucionar ambos os problemas foi desenvolver um biodigestor de pequeno porte, utilizando material alternativo e de fácil aquisição na comunidade local. Proporcionando o reaproveitamento dos resíduos orgânicos, produzindo biogás para o fogão utilizado na cantina e o biofertilizante, como adubo, nas áreas verdes da Escola Técnica. Representando o equivalente a 5,88 créditos de carbono anuais e 1 botijão de gás GLP/mês, proporcionando uma economia anual significativa aos cofres públicos.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video2Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                    {/* <Pagination size="small" total={50} />  */}
                </div>
            </Carousel>
        </div>
    )
}

export default Experience;