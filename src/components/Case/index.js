import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import fototest from '../../utils/images/foto_test.jpg';
import solartest from '../../utils/images/solar_test1.jpg';

import Carousel from 'nuka-carousel'

class Case extends React.Component {

    render() {
        return (
            <div className='container-cases'>

                <Carousel

                    
                    slidesToShow={1}
                    slideWidth='700px'
                    cellAlign='center'
                    vertical={true}
                    defaultControlsConfig={{

                        nextButtonText: 'Ⅴ',
                        prevButtonText: 'Λ',
                        prevButtonStyle: {

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:'50%',
                            width:'50px',
                            height:'50px',
                            background: '#FAF238',
                            color: '#575757',
                            fontSize: '20px',
                            

                        },
                        nextButtonStyle: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:'50px',
                            height:'50px',
                            borderRadius:'50%',
                            background: '#FAF238',
                            color: '#575757',
                            fontSize: '20px',
                            top:'50px',

                        },
                        pagingDotsStyle: {
                            fill: '#11523b',
                            width: '30px',
                            right:'30px',
                        }
                    }}
                    autoGenerateStyleTag={true}
                >
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title' style={{ background: solartest }}>
                                <h2 className='top' >CASES</h2>
                                <h2>
                                    Energia Solar na comunidade Uruçu <br></br>em
                                                São joão do Cariri
                                            </h2>
                            </div>
                            <div className='img'>
                                <img src={fototest} alt='Energia solar'></img>
                            </div>
                            <article className='text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                            </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title' style={{ background: solartest }}>
                                <h2 className='top' >CASES</h2>
                                <h2>
                                    Energia Solar na comunidade Uruçu <br></br>em
                            São joão do Cariri
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={fototest} alt='Energia solar'></img>
                            </div>
                            <article className='text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                        </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>
                    <div className='case'>

                        <div className='case-content'>
                            <div className='title' style={{ background: solartest }}>
                                <h2 className='top' >CASES</h2>
                                <h2>
                                    Energia Solar na comunidade Uruçu <br></br>em
                            São joão do Cariri
                        </h2>
                            </div>
                            <div className='img'>
                                <img src={fototest} alt='Energia solar'></img>
                            </div>
                            <article className='text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                        </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link>
                    </div>


                </Carousel>

            </div>

        )
    }
}

export default Case;