import React from 'react';
import './index.css';

function Mapa() {
    return (
        <div className='map-container'>
            <div className='casca-map'>
                <div className='info'>

                    <div className='title-map'>MAPA DO SEMIÁRIDO</div>
                    <div className='info-text'>
                        <div className='txt-title'>COMUNIDADE RIBEIRINHA</div>
                        <div className='txt-sub'>Cabaceira, Paraiba</div>
                        <div className='txt'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras imperdiet mauris nulla, et gravida dui faucibus
                            vitae. Suspendisse pellentesque lobortis lorem id tempus.
                            Mauris sed viverra dolor. Sed non mollis purus,
                            eu tincidunt dui. Pellentesque tempor enim in accumsan
                            elementum. Vestibulum dictum metus id tempus laoreet.
                            Morbi in tellus hendrerit, placerat magna viverra,
                            auctor quam.
                        </div>
                    </div>
                    <div className='info-media'></div>

                </div>
                <div className='map'></div>
            </div>
        </div>
    )
}

export default Mapa; 