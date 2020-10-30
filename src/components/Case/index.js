import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import fototest from '../../utils/images/foto_test.jpg';
import solartest from '../../utils/images/solar_test1.jpg';

function Case() {
    return (
        <div className='case'>
            <div className='case-content'>
                <div className='title' style={{ background: solartest }}>
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
    )
}

export default Case;