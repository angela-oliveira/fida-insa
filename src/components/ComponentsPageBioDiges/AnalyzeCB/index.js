import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;



class AnalyzeCB extends React.Component {
    state = {
        visible: false
    }

    openModal() {
        this.setState({ visible: true })
    }
    render() {
        return (
            <div className='analyze-cb'>
                <div className='casca-ana-cb'>
                    <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                    <Tabs tabPosition='left'>
                        <TabPane tab="Custos de instalação" key="1">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={1}></Col>
                                    <Col span={22}>
                                        <Card>
                                            <Statistic
                                                title="Compra + Instalação"
                                                value={"7.000,00 (compra + instalação)"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </TabPane>
                        <TabPane tab="Custos de manutenção" key="2">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={6}></Col>
                                    <Col span={12}>
                                        <Card>
                                            <Statistic
                                                title="Custos de Manutenção"
                                                value={"500,00/ano"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                                <div className=' tolltip-margin'>
                                    <Tooltip title="Ver mais" >
                                        <Button
                                            className='button-1'
                                            onClick={() => this.openModal()}
                                            type="primary"
                                            shape="circle"
                                            icon={<PlusOutlined />}
                                        />
                                    </Tooltip>
                                    <Modal
                                        title={'teste'}
                                        visible={this.state.visible}
                                        width={1000}
                                        footer={null}
                                        onCancel={() =>
                                            this.setState({
                                                visible: false
                                            })
                                        }
                                    >
                                        <div className='content-modal'>
                                            {/* <p>{this.desciption.content}</p> */}
                                            <p>Existem diversas empresas que fabricam, comercializam, instalam e fornecem serviço de manutenção de cataventos hidráulicos no Semiárido brasileiro. Não obstante, mesmo sendo uma obra da evolução tecnológica, os catavento são práticos, pois podem ser adaptados a diversas situações; duráveis, podem ter uma vida útil de até 30 anos; ecológicos pois não utilizam nenhuma fonte de energia acessória (apenas o movimento dos ventos); e de fácil manutenção, pois suas peças componentes são de fácil aquisição e o conserto pode ser feito em pequenas cidades.
                                        </p>
                                            <p>Os custos de aquisição e manutenção são proporcionais à necessidade de uso e, consequentemente, à vazão de bombeamento de água pretendida e à velocidade média dos ventos na localidade de instalação. No ano de 2020, o preço de aquisição dessa tecnologia pode variar de R$ 4.000,00 a R$ 10.000,00 dependendo da vazão. Por exemplo, um catavento montado em uma torre de 10 m de altura que fornece uma vazão de água entre 10.000 e 15.000 L/dia, pode chegar a R$ 4.900,00 reais. Para o uso de cataventos em sistemas de irrigação, um estudo feito em 2003 pela Embrapa Agroindústria Tropical estimou que para montar uma área irrigada de 6.000 m2 com catavento hidráulico seriam necessários em torno de R$ 15.500,00. Com o preço atualizado para o ano de 2020, esse mesmo sistema poderia custar cerca de R$ 19.300,00.
                                        </p>
                                        </div>
                                    </Modal>

                                </div>
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
                                                value={"30 Anos"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
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
                                                valueStyle={{ color: '#329BA3' }}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </TabPane>
                        <TabPane tab="Impactos sociais" key="5">
                            <p>
                                Os longos períodos de estiagem, somado às altas temperaturas, fazem do convívio com o Semiárido brasileiro, um desafio para o agricultor familiar, especialmente de regiões mais pobres. Para aqueles que não abandonaram suas terras em busca de sustento nas grandes cidades, é comum andar quilômetros de distância à procura de água, nem sempre potável, carregada em cima de jumentos, ou mesmo ainda em latas pesadas sob a cabeça. Para as famílias, essa tarefa é quase sempre da mulher e das crianças, pois o homem é responsável pelo trabalho na roça, pela cria dos animais e pela comercialização dos produtos do trabalho familiar. Indiretamente, essas condições desafiadoras trazem consequências até mesmo para saúde e a redução do nível de escolaridade dessas populações. A ampliação da oferta de água promovida pelo FIDA, em parceria com os Governos Estaduais, impactou positivamente na vida dessas pessoas. Com a água, a produtividade agrícola e dos rebanhos aumentou nessas regiões e, com isso, a fixação do homem no campo, possibilitando a ampliação da área cultivada e, consequentemente, oferta de alimentos para a mesa de todos.
                        </p>
                        </TabPane>
                        <TabPane tab="Adaptação à realidade da agricultura familiar" key="6">
                            <p>
                                Com o índice de desenvolvimento humano baixo em regiões interioranas do semiárido brasileiro, é esperado que o nível de escolaridade, de saneamento básico e financeiro dessas comunidades também sejam baixos. Consequentemente, o acesso a empresas que possam oferecer assistência técnica especializada também é limitado. Desta forma, para que uma determinada tecnologia possa ser adotada por essas comunidades, é imprescindível, que seja considerada a resistência/durabilidade, a simplicidade de operação e reparo, bem como o barateamento dos custos com a manutenção. Os cataventos cumprem com todas essas exigências, sendo uma tecnologia consolidada, um equipamento considerado resistente e duradouro, com baixo custo de aquisição e manutenção e com fácil manejo. Embora tenha algumas limitações, especialmente quanto à capacidade de uso e à necessidade de ventos constantes, tem sido uma alternativa barata e importante para proporcionar qualidade de vida ao homem do campo no Semiárido brasileiro.
                        </p>
                        </TabPane>
                    </Tabs>

                    {/* <div className='cb-graphic'>
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
                </div> */}
                </div>
            </div>)
    }
}
export default AnalyzeCB
