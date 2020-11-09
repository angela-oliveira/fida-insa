import React from 'react';
import './index.css';

function AnalyzeCB() {
    return (
        <div className='analyze-cb'>
            <div className='casca-ana-cb'>
                <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                <div className='cb-graphic'>
                    <div className='cus-ins'>
                        <div className='c-i-gra'>R$0</div>
                        <div className='cb-gra-label'>Custo de instalação</div>
                    </div>
                    <div className='cus-man'>
                        <div className='c-m-gra'>R$0</div>
                        <div className='cb-gra-label'>Custo de manutenção por ano</div>
                    </div>
                    <div className='tem-vid'>
                        <div className='t-m-gra'>0 anos</div>
                        <div className='cb-gra-label'>Tempo de vida útil da tecnologia</div>
                    </div>
                    <div className='imp-amb'>
                        <div className='i-m-gra'>0%</div>
                        <div className='cb-gra-label'>Impactos ambientais</div>
                    </div>
                </div>
                <div className='cb-bottom'>
                    <div className='txt-left'>
                        <div className='txt-label'> IMPACTOS SOCIAIS</div>
                        <div className='cb-txt'>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit natoque phasellus congue, dis blandit id aliquet
                            morbi felis litora iaculis. Nisl sociosqu justo phasellus
                            vitae risus nunc vel mattis eu, ultrices feugiat malesuada
                            eleifend dui pretium duis posuere nascetur,
                            faucibus sapien natoque velit dis quis ex tempor.
                        </div>
                    </div>
                    <div className='txt-right'>
                        <div className='txt-label'>ADAPTAÇÃO Á REALIDADE DA AGRICULTURA FAMILIAR</div>
                        <div className='cb-txt'>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit natoque phasellus congue, dis blandit id aliquet
                            morbi felis litora iaculis. Nisl sociosqu justo phasellus
                            vitae risus nunc vel mattis eu, ultrices feugiat malesuada
                            eleifend dui pretium duis posuere nascetur,
                            faucibus sapien natoque velit dis quis ex tempor.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyzeCB;