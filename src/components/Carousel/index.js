// REACT
import React from 'react';
import './index.css';
import perfilTest from '../../utils/images/perfil_test.jpg';



function Carousel() {

    function back() {
        let a
    }
    function next() {
        let b

    }

    return (
        <div id='items-wrapper'>
            <button id='back' onClick={back}> ◂ </button>
            <div id='items'>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>

                <div className="item">
                    <div className="space">
                        <img alt='' src={perfilTest}></img>
                        <div>nome</div>
                    </div>
                </div>
            </div>

            <button id='next' onClick={next}> ▸ </button>


        </div>


    )
}

export default Carousel;