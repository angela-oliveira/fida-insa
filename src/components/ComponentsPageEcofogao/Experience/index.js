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
                      <div className='experience-text-label'>EXPERIÊNCIA NA COMUNIDADE RIBEIRA DE CABACEIRAS</div>
                      <div className='experience-text-txt'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet mauris nulla, et gravida dui faucibus vitae. Suspendisse pellentesque lobortis lorem id tempus. Mauris sed viverra dolor. Sed non mollis purus, eu tincidunt dui.</p>
                      </div>
                  </div> 
                  <div className='video'>
                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JTqz_xzozl0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  </div>  
                
                  {/* <Pagination size="small" total={50} />  */}
              </div>
            </Carousel>
        </div>
    )
}

export default Experience;