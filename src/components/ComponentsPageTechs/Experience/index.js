import React, { useState, useCallback } from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';


function Experience() {

    const [video1Link, setVideo1Link] = useState("https://www.youtube.com/embed/ZTc-6xcWfQM");
    const [video2Link, setVideo2Link] = useState("https://www.youtube.com/embed/C7COS0jWgCI");

    function resetVideo() {

        if (video1Link == "") {
            setVideo1Link("https://www.youtube.com/embed/ZTc-6xcWfQM")
            setVideo2Link("")
        } else {
            setVideo2Link("https://www.youtube.com/embed/C7COS0jWgCI")
            setVideo1Link("")
        }
    }

    return (
        <div className='Experience experience-eolica'>
            <div className='casca-experience '>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p className='subtitle-eolica'>Veja os nosso registros</p>

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
                        height: '70px',
                        width: '35px',
                        background: '#FAF238',
                        color: '#575757',
                        fontSize: '30px',

                    },
                    nextButtonStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70px',
                        width: '35px',
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
                        <div className='experience-text-label'>Experiência na cidade Algodão de Jandaíra - PB</div>
                        <div className='experience-text-txt'>
                            <p>O FIDA foi até o Sítio Algodão na cidade de Algodão de Jandaíra para visitar Dona Fátima e sua família, que foi beneficiada em sua propriedade com a instalação de um kit de irrigação movido por catavento. O ambiente árido da localidade e a casa desprovida de eletrodomésticos como geladeira e fogão revela as dificuldades financeiras e de acesso à energia elétrica, água potável e segurança alimentarque aquelas pessoa enfrentam. Mas ao chegar e ouvir todas aquelas histórias, percebemos uma outra versão de vida que se formou após a instalação do catavento hidráulico e de um campo de palma forrageira.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video1Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                </div>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>Experiência na cidade Algodão de Jandaíra - PB</div>
                        <div className='experience-text-txt'>
                                <p>A Escola Cidadã Integral e Técnica Ezequiel Fernandes, localizada no município do Junco do Seridó - PB apresenta em sua proposta curricular o trabalho com Energias Renováveis, em especial: Energia Eólica. O Gestor Escolar José Diogens Torres da Silva e o professor Franciwily Donato dos Santos nos explicam o potencial energético que esta tecnologia pode oferecer, já que se trata de uma fonte de energia limpa e renovável. A preparação dos estudantes para este mercado de trabalho é um dos principais objetivos do Curso Técnico em Sistemas de Energia Renovável ofertado pela ECIT. As disciplinas que abrangem essa área se destacam nas ações pedagógicas desta escola, também pela existência do potencial eólico na região, onde já estão em operação três parques eólicos, dentre eles: Canoas, Lagoas 1 e Lagoas 2. Atualmente, o parque Complexo Chafariz está em ampliação, com a previsão de implementação de mais 15 parques eólicos até o ano de 2023. Estes investimentos reforçam o potencial da região para a Energia Eólica e Governo do estado da Paraíba fortalece, por meio da estruturação material e pedagógica, o ensino técnico voltando as energias renováveis.</p>
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