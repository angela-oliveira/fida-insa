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
                            <p></p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video1Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>

                    {/* <Pagination size="small" total={50} />  */}
                </div>
                <div className='experience-content'>

                    <div className='experience-text'>
                        <div className='experience-text-label'>EXPERIÊNCIA BIODIGESTOR</div>
                        <div className='experience-text-txt'>
                            <p></p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="560" height="315" src={video2Link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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