import React, { useState, useCallback }  from 'react';
import './index.css';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
// import "../../../utils/images/eolica"
import img1 from "../../../utils/images/photos/solar/SOLAR_EUCLIDES_E_PAINEL_SOLAR_1200.jpg"
import img2 from "../../../utils/images/photos/solar/SOLAR_FAMILIA_SEU_EUCLIDES_1200.jpg"
import img3 from "../../../utils/images/photos/solar/SOLAR_PAINEL_SOLAR_1200.jpg"
import img4 from "../../../utils/images/photos/solar/SOLAR_TECNOLOGIA_E_CAMPO_1200.jpg"
import img5 from "../../../utils/images/photos/solar/SOLAR_TECNOLOGIA_E_CAMPO_DISTANTE_1200.jpg"



// const photos_gallery = PhotosGallery
const photos= [
    {
      src: img1,
      width: 4,
      height: 3
    },
    {
      src: img2,
      width: 4,
      height: 3
    },
      {
        src: img3,
        width: 4,
        height: 3
      },
    {
        src: img4,
        width: 4,
        height: 3
    },
    {
        src: img5,
        width: 4,
        height: 3
    }
  ];

function Photos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return (
        <div className='Experience'> 
            <div className='photos'>

                <Gallery photos={photos} onClick={openLightbox} direction={"column"} />
                 <ModalGateway>
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
            </div>
        </div>
    )
}

export default Photos;