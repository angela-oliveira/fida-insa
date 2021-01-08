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
                        <p>A redução das emissões de CO2 nos sistemas com cataventos pode ser calculada a partir da comparação com o consumo de energia elétrica para o bombeamento de volume de água equivalente (no caso de bombas elétricas) ou pela comparação com o consumo de diesel no caso de conjuntos motobomba a combustível. Apesar de ser necessário um estudo caso a caso para verificar a redução das emissões de CO2 com cataventos, a substituição do bombeamento elétrico ou a combustível pelo bombeamento por cataventos pode mitigar as emissões de CO2 para a atmosfera. A tecnologia se enquadra no escopo 2, que se refere à compra de energia, de acordo com o inventário de emissões do GHG Protocol.</p>
                    </Card>
                </div>
                <div className='co-graphic'>
                    <div className='gra-label'>QUANTIDADE INSTALADA E NÚMERO DE BENEFICIÁRIOS</div>
                    <div className='casca-gra'>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE INSTALADA</div>
                                <div className='right'>498</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>NUMERO DE BENEFICIADOS</div>
                                <div className='right'> 3671 famílias</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>MUNICÍPIOS</div>
                                <div className='right'>56</div>
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
                        <p>Embora o catavento seja considerado uma invenção muito antiga, ao longo da história ele tem recebido diversos aprimoramentos direcionados a aumentar a eficiência desta tecnologia. Por exemplo, pesquisando a palavra-chave “catavento” na base do Instituto Nacional de Propriedade Industrial (INPI) de 1992 a 2015 registraram-se 27 pedidos de patentes. Contudo, destas, contabilizaram-se apenas 10 pedidos que efetivamente se relacionam com melhorias voltadas para o bombeamento de água e irrigação de lavouras para comunidades rurais. Destas, os documentos das patentes PI 0012810-4 e PI 0000092-2 não estão disponíveis no banco de dados do INPI. O documento PI 0805788-5 A2 refere-se a uma tecnologia para geração de energia elétrica para pequenas comunidades, devido a isso, foi também considerada relevante. Outras tecnologias como a patente BR 20 2012 012558 2, por exemplo, trata de melhorias na estrutura da bomba d´água acoplada ao catavento. Nesta tecnologia, a bomba tem sua eficiência aumentada pela utilização de um pistão de dupla ação proporcionando uma redução de potência e disponibilizando segurança ao sistema de rotor eólico e bomba. Outro benefício a desta invenção é que o recalque da água pode atingir até 150 metros.
                        </p>
                    </Card>
                    <div className='img'>
                        <img src={TRL}></img>
                    </div>
                    <Card title="TRL da Tecnologia social" bordered={false}>
                        <p>A escala dos níveis de maturidade tecnológica (Technology Readiness Level - TRL) permite classificar e acompanhar o grau de maturidade do desenvolvimento de uma tecnologia, além de possibilitar a comparação direta entre diferentes ativos. Para produtos que já estão no mercado esses ativos devem ser classificados na escala a partir de 7 até 9. O catavento em seu formato atual já é uma tecnologia estável, aprimorada, amplamente comercializada e popular. Embora seja popularizado e considerado simples para uso e manutenção, o catavento hidráulico passou por muitos aprimoramentos tecnológicos ao longos dos anos, desde a sua idealização na Pérsia, 915 a.C. Mesmo assim, toda e qualquer tecnologia ainda é passível de ser aperfeiçoada, ou reformulada para otimizar sua performance ou destiná-la a outro uso. Para os projetos apoiados pelo FIDA, o catavento tem sido associado especialmente ao cultivo de palma e hortas, promovendo alimentação para os pequenos rebanhos e a população agrícola do semiárido.
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