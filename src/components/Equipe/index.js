// REACT
import React from 'react';
import './index.css';
import perfilTest from '../../utils/images/perfil_test.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Equipe() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div id='items-wrapper'>
            <button id='back' onClick={''}> ◂ </button>

            <Carousel
                // className='items' 
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div className="name">nome</div>
                        <div className="func">coordenador</div>
                    </div>
                </div>


            </Carousel>
            <button id='next' onClick={''}> ▸ </button>


        </div>


    )
}

export default Equipe;