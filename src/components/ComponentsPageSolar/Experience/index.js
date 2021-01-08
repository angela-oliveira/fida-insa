import React, { useState, useCallback }  from 'react';
import './index.css';
import { Pagination } from 'antd';

import Carousel, { NextButton } from 'nuka-carousel';
import Gallery from 'react-photo-gallery';
// import { Modal, ModalGateway } from "react-images";

// const photos= [
//     {
//       src: 'data:image/jpeg;base64,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',
//       width: 4,
//       height: 3
//     },
//     {
//       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq0isDevc5ojwxxZoxxRgZrRUEbLkNj02tLA&usqp=CAU',
//       width: 1,
//       height: 1
//     },
//       {
//         src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq0isDevc5ojwxxZoxxRgZrRUEbLkNj02tLA&usqp=CAU',
//         width: 1,
//         height: 1
//       },
//     {
//         src: 'data:image/jpeg;base64,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',
//         width: 4,
//         height: 3
//       }
//   ];

function Experience() {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

    return (
        <div className='solar-experience Experience'> 
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
                      <div className='experience-text-label'>EXPERIÊNCIA NA COMUNIDADE RIBEIRA DE CABACEIRAS</div>
                      <div className='experience-text-txt'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet mauris nulla, et gravida dui faucibus vitae. Suspendisse pellentesque lobortis lorem id tempus. Mauris sed viverra dolor. Sed non mollis purus, eu tincidunt dui.</p>
                      </div>
                  </div> 
                  <div className='video'>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/JTqz_xzozl0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>  
                
                  {/* <Pagination size="small" total={50} />  */}
              </div>
              <div className='experience-content'>
                
                  <div className='experience-text'>
                      <div className='experience-text-label'>EXPERIÊNCIA NA COMUNIDADE RIBEIRA DE CABACEIRAS</div>
                      <div className='experience-text-txt'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet mauris nulla, et gravida dui faucibus vitae. Suspendisse pellentesque lobortis lorem id tempus. Mauris sed viverra dolor. Sed non mollis purus, eu tincidunt dui.</p>
                      </div>
                  </div> 
                  <div className='video'>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/JTqz_xzozl0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>  
                
              </div>
            </Carousel>
        </div>
    )
}

export default Experience;