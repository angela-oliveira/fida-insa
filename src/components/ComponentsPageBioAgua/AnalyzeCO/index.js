import React from 'react';
import { Card, Row, Col } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor3.png"

function AnalyzeCO() {
    return (
        <div className='analyze-co'>
            <div className='casca-ana-co'>
                <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2 (-245KG/MÊS)</div>
                <div className="site-card-border-less-wrapper">

                    <Card bordered={false}>
                        <p>Para o cálculo das emissões de CO2 no sistema bioágua, devem ser realizadas análises químicas da água de reúso, para comparação com adubações realizadas com fertilizantes industriais. Outra possibilidade é a utilização de sensores nos locais onde há o lançamento de efluentes no sistema bioágua para obtenção do índice de emissões. </p>
                        <p>
                        A redução das emissões de CO2 relacionadas ao sistema bioágua deve ser calculada caso a caso, levando em consideração as emissões pelo lançamento de efluentes na ausência dessa tecnologia. O grande destaque do sistema bioágua é a economia de água pelo reúso, reduzindo gastos com a utilização de água tratada, que pode também servir de base para o cálculo das reduções das emissões de CO2. 
                        </p>
                    </Card>
                </div>
                <div className='co-graphic'>
                    <div className='gra-label'>QUANTIDADE INSTALADA E NÚMERO DE BENEFICIÁRIOS</div>
                    <div className='casca-gra'>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE INSTALADA</div>
                                <div className='right'>494</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>NUMERO DE BENEFICIADOS</div>
                                <div className='right'> 494 famílias</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>MUNICÍPIOS</div>
                                <div className='right'>21</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='co-bottom'></div>
                <div className='co-patente-trl'> 
                    <Card title="Quantidade de patentes" bordered={false}>
                        <p>A pesquisa sobre sistema de reuso de água, também denominado de bioágua, foi realizada no banco de dados do Instituto Nacional de Propriedade Industrial (INPI) com o objetivo de verificar a ocorrência de depósitos sobre o tema a nível nacional, como exposto no mapa. Das patentes encontradas nas buscas, duas são de origem de instituições de ensino superior, como Instituto Federal da Paraíba (IFPB) e Universidade Estadual de Campinas (Unicamp).

                        </p>
                    </Card>
                    <div className='img'>
                        <img src=""></img>
                    </div>
                    <Card title="TRL da Tecnologia social" bordered={false}>
                        <p>Para avaliar a maturidade tecnológica do Sistema Bioágua utilizou-se a  Technology Readiness Level -TRL que é uma metodologia que mensura  essa maturidade, utilizando uma escala com nove níveis, e cada nível corresponde a uma fase de desenvolvimento. A partir desse conceito é possível avaliar que o Sistema Bioágua se enquadra na TRL de 7 a 8, pois a TRL 7 consiste na demonstração do protótipo do sistema/subsistema em ambiente operacional e a TRL 8 trata-se de um sistema real desenvolvido e aprovado.
                        </p>
                    </Card>
                    {/* <div className="site-card-wrapper">
                        <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                            Card content
                            </Card>
                        </Col>
                        <Col className="trl-img" span={8}>
                            
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                            Card content
                            </Card>
                        </Col>
                        </Row>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default AnalyzeCO; 