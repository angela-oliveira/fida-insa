// REACT
import React, { Component } from 'react';
import './index.css';
import perfilTest from '../../utils/images/perfil_test.jpg';
import Carousel, { NextButton } from 'nuka-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// Equipe

import Alexandre from '../../utils/images/photos/equipe/Alexandre.jpeg';
import Daniel from '../../utils/images/photos/equipe/Daniel.JPG';
import Josemir from '../../utils/images/photos/equipe/Josemir.jpg';




class Equipe extends React.Component {

    render() { 

        return (
            <div className='equipe'>
                <Carousel
                    slidesToShow={4}
                    cellSpacing={47}
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
                    autoGenerateStyleTag={true}
                >
                    <div className="item">
                        <div className='img'>
                            <img src={Alexandre} alt='Alexandre Fonseca'></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Alexandre Fonseca</div>
                            <div className='function'>função</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className='img'>
                            <img src={Daniel} alt='Daniel Casimiro'></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Daniel Casimiro</div>
                            <div className='function'>função</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className='img'>
                            <img src={Josemir} alt=''></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Josemir Moura</div>
                            <div className='function'>função</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className='img'>
                            <img src={perfilTest} alt=''></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Nome</div>
                            <div className='function'>função</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className='img'>
                            <img src={perfilTest} alt=''></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Nome</div>
                            <div className='function'>função</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className='img'>
                            <img src={perfilTest} alt=''></img>
                        </div>
                        <div className='label'>
                            <div className='name'>Nome</div>
                            <div className='function'>função</div>
                        </div>
                    </div>

                </Carousel>
            </div>
        );
    }



    // <button id='next' onClick={''}> ▸ </button>
}

export default Equipe;