import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import fototest from '../../utils/images/foto_test.jpg';
import solartest from '../../utils/images/solar_test1.jpg';

class Case extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            posi: 0

        }
    }

    back() {
        console.log("Back")
    }

    next() {
        console.log("Next")
    }

    render() {
        return (

            <div className="cases">
                <div className='container-cases'>
                    <div className='cases-body'>
                        <div className='carousel'>
                            <div className='list-cases'>
                                <div className='case'>
                                    <div className='case-content'>
                                        <div className='title' style={{ background: solartest }}>
                                            <h2>CASES</h2>
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


                            </div>
                        </div>
                        <div className='levels'>
                            <button className='button' onClick={this.back}> ▴ </button>
                            <div>
                                <div className='point-level'></div>
                                <div className='point-level'></div>
                                <div className='point-level'></div>
                            </div>
                            <button className='button' onClick={this.next}> ▾ </button>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default Case;