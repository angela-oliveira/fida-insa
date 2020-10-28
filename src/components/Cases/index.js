import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import fototest from '../../utils/images/foto_test.jpg';

function Cases() {
    return (
        <div className='container-cases'>
            <div className='cases-body'>
                <div className='carousel'>
                    <div className='case'>
                        <div className='case-content'>
                            <div className='title'>
                                <h2>CASES</h2>
                                <h2>
                                    Energia Solar na comunidade Uruçu em
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
                                    Ut enim ad minim veniam
                                </p>
                            </article>
                        </div>
                        <Link to='/'> <div className='more'>+</div></Link> 
                    </div>
                </div>
                <div className='levels'>
                    <button className='button'> ▴ </button>
                    <div>
                        <div className='point-level'></div>
                        <div className='point-level'></div>
                        <div className='point-level'></div>
                    </div>
                    <button className='button'> ▾ </button>
                </div>
            </div>

        </div>)
}

export default Cases;