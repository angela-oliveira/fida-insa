import React, { useState, useCallback }  from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';

function Experience() {

    return (
        <div className='biodigestor-experience Experience'> 
            <div className='casca-experience'>
                <div className='experience-label'>EXPERIÊNCIAS REAIS</div>
                <p className="subtitle-biodigestor">Veja os nosso registros</p>
                
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

                            background: '#FAF238',
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
                      <div className='experience-text-label'>EXPERIÊNCIA BIODIGESTOR</div>
                      <div className='experience-text-txt'>
                          <p></p>
                      </div>
                  </div> 
                  <div className='video'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/i9ICihT9ncE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                  </div>  
                
                  {/* <Pagination size="small" total={50} />  */}
              </div>
            </Carousel>
            {/* <div className='photos'>

                <Gallery photos={photos} onClick={openLightbox} direction={"column"} /> */}
                {/* Esse argumento PHOYO_SET será substituida para uma
                 pasta com as fotos */}
                 {/* <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
            </div> */}
        </div>
    )
}

export default Experience;