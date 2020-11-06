import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/ic_eolica.png'

function description() {
    return (
        <div className='description'>
            <div className='desc-top'>
                <div className='title-tech'>
                    <div className='logo-tech'>
                        <div className='casca-logo-tech'>
                            <img src={LogoTech} alt='logo da tecnologia'></img>
                        </div>
                        <div className='label-tech' >
                            <h2 className='labelA'>ENERGIA</h2>
                            <h2 className='labelB'>EÓLICA</h2>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur
                    adipiscing elit natoque phasellus congue,
                    dis blandit id aliquet morbi felis litora iaculis.
                    Lorem ipsum dolor sit amet consectetur
                    adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.</p>
                </div>
                <div className='justify'>
                    <div className='justify-label'>QUAL A JUSTIFICATIVA</div>
                    <div className='justify-txt'>
                        <p>Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.</p>

                        <p>Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.</p>
                    </div>
                </div>

                <div className='casca-img-tech'>
                    <img alt=''></img>
                </div>
            </div>

            <div className='desc-bottom'>
                <div className='fatores-label'>FATORES QUE PROMOVEM OU LIMITAM A ADOÇÃO DA TECNOLOGIA</div>
                <div className='fato-txtA'>Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.
                        Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.
                        </div>
                <div className='fato-txtB'>Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.
                        Lorem ipsum dolor sit amet consectetur
                        adipiscing elit natoque phasellus congue,
                        dis blandit id aliquet morbi felis litora iaculis.
                        </div>
            </div>
        </div>
    )
}

export default description;