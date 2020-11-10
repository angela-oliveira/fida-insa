import React from 'react';
import './index.css';

function AnalyzeCO() {
    return (
        <div className='analyze-co'>
            <div className='casca-ana-co'>
                <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2 (-245KG/MÊS)</div>
                <div className='co-graphic'>
                    <div className='gra-label'>QUANTIDADE INSTALADA E NÚMERO DE BENEFICIÁRIOS</div>
                    <div className='casca-gra'>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE INSTALADA</div>
                                <div className='right'>12</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>NUMERO DE BENEFICIADOS</div>
                                <div className='right'>2.492</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>MUNICÍPIOS</div>
                                <div className='right'>234</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'> ************** </div>
                                <div className='right'> **** </div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='co-bottom'></div>
            </div>
        </div>
    )
}

export default AnalyzeCO; 