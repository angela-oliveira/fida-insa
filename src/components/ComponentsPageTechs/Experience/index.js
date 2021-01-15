import React, { useState, useCallback }  from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';

function Experience() {

    return (
        <div className='Experience'> 
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p className='subtitle-eolica'>Veja os nosso registros</p>
                
            </div>
            <Carousel
                    slidesToShow={1}
                    cellSpacing={63}
                    defaultControlsConfig={{
                        nextButtonText: ' ',
                        prevButtonText: ' ',
                        prevButtonStyle: {
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height:'70px',
                            width:'35px',
                            background: '#FAF238',
                            color:'#575757',
                            fontSize:'30px',
                                                        
                        },
                        nextButtonStyle: {
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height:'70px',
                            width:'35px',
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
                      <div className='experience-text-label'>Experiência na cidade Algodão de Jandaíra - PB</div>
                      <div className='experience-text-txt'>
                          <p>O FIDA foi até o sítio Algodão na cidade de Algodão de Jandaíra para visitar Dona Fátima e sua família, que foi beneficiada em sua propriedade com a instalação de um kit de irrigação movido por catavento. O ambiente árido da localidade e a casa humilde revelou como a vida daquelas pessoas era difícil. Mas ao chegar e ouvir todas aquelas histórias, percebemos uma outra versão de vida que se formou após a instalação do catavento hidráulico e de um campo de palma forrageira.</p>
                      </div>
                  </div> 
                  <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yKXuhUajMUo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                  </div>  
                
              </div>
            </Carousel>
        </div>
    )
}

export default Experience;