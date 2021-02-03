import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

class AnalyzeCB extends React.Component{
    state = {
        visible: false
    }

    openModal() {
        this.setState({ visible: true })
    }
    render () {
        return (
        <div className='solar-analyzecb analyze-cb'>
            <div className='casca-ana-cb'>
                <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                <Tabs tabPosition='left'>
                    <TabPane className="analise-cb-background" tab="Custos de instalação" key="1">
                        <div>
                            <p>
                            O custo de um sistema de energia solar fotovoltaica residencial (inclusos instalação e materiais) é de aproximadamente R$ 20.000 ou USD 3.600, considerando a utilização de um gerador de 3,46 kWp instalado em uma residência com o consumo médio mensal de 372,6 kWh.
                            </p>
                            <p>
                            Já com um investimento por volta de R$ 190.000,00 ou USD 35.000 em sistema solar fotovoltaico é possível obter um sistema comercial com geração esperada de energia de 585,000 kWh mensal.
                            </p>

                        </div>
                        
                    </TabPane>
                    <TabPane className="analise-cb-background" tab="Custos de manutenção" key="2">
                        <div>
                            <p>
                            O sistema domiciliar possui uma manutenção (após 25 anos) equivalente a R$ 5.000,00 ou USD 935, enquanto que, com o sistema comercial o custo com manutenção é representado pela substituição de inversores no 15º ano, no valor de R$ 22.131,40 ou cerca de USD 4.150 e a depreciação de 1,5% no primeiro ano e 0,7% do custo de aquisição nos demais.
                            </p>
                            <p>
                            * baseado na cotação do dólar em 02/02/21 = R$ 5,35/USD
                            </p>
                        </div>
                    </TabPane>
                    <TabPane tab="Tempo de vida útil da tecnologia" key="3">
                        <div className="site-statistic-demo-card">
                            <Row gutter={16}>
                                <Col span={6}></Col>
                                <Col span={12}>
                                    <Card>
                                        <Statistic
                                            title="Tempo de vida útil"
                                            value={"Cerca de 25 anos"}
                                            precision={2}
                                            valueStyle={{ color: '#E2AF28' }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            
                        </div>
                    </TabPane>
                    <TabPane tab="Impactos ambientais" key="4">
                        <div className="site-statistic-demo-card">
                            <Row gutter={16}>
                                <Col span={6}></Col>
                                <Col span={12}>
                                    <Card>
                                        <Statistic
                                            title="Impactos ambientais"
                                            value={"0"}
                                            valueStyle={{ color: '#E2AF28' }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            
                        </div>
                    </TabPane>
                    <TabPane className="analise-cb-background" tab="Impactos sociais" key="5">
                        <p> 
                            Nos investimentos FIDA busca-se a priorização dos grupos produtivos com foco nas mulheres, jovens, quilombolas, indígenas, população negra e parda. Com este foco, todo investimento que considere a melhoria na geração de renda, equidade de gênero, aumento na qualidade de vida e melhoria das condições de trabalho é priorizada enquanto política pública. Observa-se a energia solar como uma tecnologia que vai além da questão ambiental, pois ela é capaz de reduzir os custos de produção com potencial para aumento de auto investimentos em outras necessidades do grupo. Tal ação impacta positivamente na capacidade de geração de renda a estes grupos prioritários, melhorando o bem estar social na coletividade. 
                        </p>
                    </TabPane>
                    <TabPane className="analise-cb-background" tab="Adaptação à realidade da agricultura familiar" key="6">
                        <p>
                            A tecnologia disponível permite vários usos para a agricultura familiar, seja para redução dos custos de produção, seja para a substituição total da fonte de energia. Como exemplos práticos pode-se citar a implantação de painéis fotovoltaicos para bombeamento de água para diversos usos, entre eles a irrigação de campos de produção. Seu uso para captação de água tem a vantagem de poder ser instalada em locais com indisponibilidade da rede elétrica convencional. A presença de agroindústrias fazendo uso desta fonte energética vem ampliando no país, melhorando a competitividade e melhor inserção nos mercados.Trata-se de tecnologia de simples manejo e requer manutenção básica para o funcionamento e com grande potencial de uso na agricultura familiar e destaque para a região do Semiárido, com grande oferta da principal matéria prima, o Sol.
                        </p>
                    </TabPane>
                </Tabs>
               
            </div>
        </div>)
    }
}
export default AnalyzeCB
