import React from 'react';
import { Card, Row, Col } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor3.png"

function AnalyzeCO() {
    return (
        <div className='analyze-co'>
            <div className='casca-ana-co'>
                <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2 (KG/mês)</div>
                <div className="site-card-border-less-wrapper">

                    <Card bordered={false}>
                        <p>O biodigestor apresenta a vantagem de gerar biogás (CH4) pela digestão anaeróbica da matéria orgânica animal e vegetal. Dentre os combustíveis domésticos, o biogás é considerado o que possui menor impacto ambiental. </p>

                        <p>Para a obtenção das emissões de CO2 pelo biodigestor, é necessário um estudo caso a caso para realizar um inventário considerando a quantidade e o tipo de material orgânico adicionado (esterco de aves, suínos, bovinos, material vegetal) e as análises químicas do biofertilizante produzido. </p>

                        <p>O cálculo da redução das emissões de CO2 no biodigestor deve levar em conta a quantidade emitida pela queima do biogás em comparação com o gás de cozinha tradicional (GLP) para cocção, no escopo da combustão estacionária. </p>
                    </Card>
                </div>
                <div className='co-graphic'>
                    <div className='gra-label'>QUANTIDADE INSTALADA E NÚMERO DE BENEFICIÁRIOS</div>
                    <div className='casca-gra'>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE INSTALADA</div>
                                <div className='right'>258</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>

                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE A SER INSTALADA</div>
                                <div className='right'> 255</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>

                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>NUMERO DE BENEFICIADOS</div>
                                <div className='right'> 1308</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>MUNICÍPIOS</div>
                                <div className='right'>25</div>
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
                        <p>Quantidade de patentes depositadas no Brasil: 101 patentes.
                            A pesquisa foi realizada utilizando como palavra-chave “biodigestor”. Em 1980, foi registrado pelo Escritório Europeu de Patentes o pedido de depósito da patente intitulada “Cuba de fermentação para biodigestores” (do inglês Fermentation vat for biodigesters) com número de registro EP0051082, tendo como inventores Josef Neubauer, J. Sigmund Buchner e Albert Strasser.
                        </p>
                    </Card>
                    <div className='img'>
                        <img src={TRL}></img>
                    </div>
                    <Card title="TRL da Tecnologia social" bordered={false}>
                        <p>A TRL (do inglês, Technology Readiness Level) trata-se de uma escala que informa o nível de maturidade tecnológica. A escala em questão é dividida em nove níveis, e cada nível corresponde a uma fase do desenvolvimento da tecnologia. No caso do biodigestor, pode-se classificá-lo com número de TRL entre 8 e 9, visto que o TRL 8 corresponde a um sistema qualificado e testado estando na fase de industrialização, e o TRL 9, consiste em classificar a tecnologia como um sistema em operação que possui comprovação do que se propõe a realizar; sendo assim a tecnologia está pronto para ser produzida e comercializada. Os primeiros registros da implementação e utilização de biodigestores no Brasil se deram por volta da década de 70, após a crise do petróleo, iniciada no final de 1973. Desde lá, a comercialização é realizada, e os equipamentos podem ser adquiridos por intermédio de empresas especializadas nesse tipo de tecnologia. Por isso, o biodigestor possui maturidade tecnológica, de acordo com a TRL, entre 8 e 9. 
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