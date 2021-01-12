import React, { useState, useCallback }  from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';

function Experience() {

    return (
        <div className='ecofogao-analyze-experience Experience'> 
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p>Veja os nosso registros</p>
                
            </div>
            <Carousel
                    slidesToShow={1}
                    cellSpacing={63}
                    defaultControlsConfig={{
                        nextButtonText: '>',
                        prevButtonText: '<',
                        prevButtonStyle: {
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',

                            background: '#89773C',
                            color:'#575757',
                            fontSize:'30px',
                                                        
                        },
                        nextButtonStyle: {
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            background: '#FAF238',
                            color:'#575757',
                            fontSize:'30px',
                            
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
                          <p>Na Serra do Rosário, município de Sobral-CE, na comunidade Santa Luzia, mora o agricultor Gerardo Elias da Silva, 61 anos, com sua esposa Maria de Lima Silva, de 59 anos e seus filhos e netos. As famílias foram contempladas com a implantação do Ecofogão onde este equipamento eliminou a fumaça que, antes, circulava por dentro da casa contribuindo para preservação do meio ambiente e melhorando a saúde dos agricultores no município de Sobral-CE. Outro benefício foi o econômico, onde o consumo de gás de cozinha reduziu em decorrência do maior uso do Ecofogão, já que o gás que custava R$ 75,00/mês para família e, hoje, um botijão dura em torno de 2-3 meses. Seu Gerardo representa uma das 25 famílias contempladas com o ecofogão que também foram contemplados com projeto produtivo em avicultura caipira e quintais produtivos, além do reuso d´água de cinzas domiciliares.</p>
                      </div>
                  </div> 
                  <div className='video'>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/2olpnzhpRVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
                  </div>  
                
              </div>
              <div className='experience-content'>
                
                  <div className='experience-text'>
                      <div className='experience-text-label'>Município de Sobral-CE</div>
                      <div className='experience-text-txt'>
                          <p>Na Serra do Rosário, município de Sobral-CE, na comunidade Santa Luzia, mora o agricultor Gerardo Elias da Silva, 61 anos, com sua esposa Maria de Lima Silva, de 59 anos e seus filhos e netos. As famílias foram contempladas com a implantação do Ecofogão onde este equipamento eliminou a fumaça que, antes, circulava por dentro da casa contribuindo para preservação do meio ambiente e melhorando a saúde dos agricultores no município de Sobral-CE. Outro benefício foi o econômico, onde o consumo de gás de cozinha reduziu em decorrência do maior uso do Ecofogão, já que o gás que custava R$ 75,00/mês para família e, hoje, um botijão dura em torno de 2-3 meses. Seu Gerardo representa uma das 25 famílias contempladas com o ecofogão que também foram contemplados com projeto produtivo em avicultura caipira e quintais produtivos, além do reuso d´água de cinzas domiciliares.</p>
                      </div>
                  </div> 
                  <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mlzqDEGTFcg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
                  </div>                
                </div>
            </Carousel>
        </div>
    )
}

export default Experience;