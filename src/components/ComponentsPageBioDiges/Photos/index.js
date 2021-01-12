import React, { useState, useCallback }  from 'react';
import './index.css';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
// import "../../../utils/images/eolica"
import img1 from "../../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 02.JPG"
import img2 from "../../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 04.JPG"
import img3 from "../../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 08.JPG"
import img4 from "../../../utils/images/photos/Biodigestor/Antônio Nazaré e Luzanira - Biodigestor 01.JPG"
import img5 from "../../../utils/images/photos/Biodigestor/sobral_casaforte/José Caetano e Rosa - Biodigestor 01.JPG"



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
                {/* Esse argumento PHOYO_SET será substituida para uma
                 pasta com as fotos */}
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