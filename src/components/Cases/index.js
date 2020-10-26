import React from 'react';
import './index.css';

function Cases() {
    return (
        <div className='container-cases'>
            <div className='cases-body'>
                <div className='carousel'>
                    <div className='case'>

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