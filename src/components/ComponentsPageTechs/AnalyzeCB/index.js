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
            <div className='analyze-cb analyze-cb-eolica'>
                <div className='casca-ana-cb'>
                    <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                    <Tabs tabPosition='left'>
                        <TabPane className="analise-cb-background" tab="Custos de instalação" key="1">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={1}></Col>
                                    <Col span={22}>
                                        <Card>
                                            <Statistic
                                                title="Custo de instalação"
                                                value={"7.000,00 (compra + instalação)"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                                <p>É impreciso descrever sobre a produtividade de água bombeada típica no semiárido pois depende da capacidade e profundidade do poço, além da capacidade de bombeamento do catavento e da disponibilidade dos ventos. Contudo, um kit de irrigação composto por um catavento convencional de 18 pás, torre com 10 m de altura, bomba de pistão aspiro-premente e caixa d´água de 2m3 instalada a 6,8m de altura tem a capacidade nominal de bombear 1,8 m3/h. Essa capacidade é suficiente para irrigar uma área aproximada de 0,72 ha de diversos tipos de cultura. Em 30 anos, somado a previsão de manutenção ao valor de compra, os custos seriam de R$ 733,33 por ano, o que equivale a apenas R$ 0,047 por m3 de água bombeada. Esses custos são extremamente vantajosos quando comparado ao uso de bomba d´água elétrica onde os custos para bombear 1m3 de água chega a R$ 1,48/m3 e de R$ 2,03/m3 se o bombeamento for realizado por bomba a diesel.</p>

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
                                        title={'Custo de Manutenção'}
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
                        <TabPane className="analise-cb-background" tab="Impactos sociais" key="5">
                            <p>
                                Os longos períodos de estiagem, somado às altas temperaturas, fazem do convívio com o Semiárido brasileiro, um desafio para o agricultor familiar, especialmente de regiões mais pobres. Para aqueles que não abandonaram suas terras em busca de sustento nas grandes cidades, é comum andar quilômetros de distância à procura de água, nem sempre potável, carregada em cima de jumentos, ou mesmo ainda em latas pesadas sob a cabeça. Para as famílias, essa tarefa é quase sempre da mulher e das crianças, pois o homem é responsável pelo trabalho na roça, pela cria dos animais e pela comercialização dos produtos do trabalho familiar. Indiretamente, essas condições desafiadoras trazem consequências até mesmo para saúde e a redução do nível de escolaridade dessas populações. A ampliação da oferta de água promovida pelo FIDA, em parceria com os Governos Estaduais, impactou positivamente na vida dessas pessoas. Com a água, a produtividade agrícola e dos rebanhos aumentou nessas regiões e, com isso, a fixação do homem no campo, possibilitando a ampliação da área cultivada e, consequentemente, oferta de alimentos para a mesa de todos.
                        </p>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Adaptação à realidade da agricultura familiar" key="6">
                            <p>
                                Com o índice de desenvolvimento humano baixo em regiões interioranas do semiárido brasileiro, é esperado que o nível de escolaridade, de saneamento básico e financeiro dessas comunidades também sejam baixos. Consequentemente, o acesso a empresas que possam oferecer assistência técnica especializada também é limitado. Desta forma, para que uma determinada tecnologia possa ser adotada por essas comunidades, é imprescindível, que seja considerada a resistência/durabilidade, a simplicidade de operação e reparo, bem como o barateamento dos custos com a manutenção. Os cataventos cumprem com todas essas exigências, sendo uma tecnologia consolidada, um equipamento considerado resistente e duradouro, com baixo custo de aquisição e manutenção e com fácil manejo. Embora tenha algumas limitações, especialmente quanto à capacidade de uso e à necessidade de ventos constantes, tem sido uma alternativa barata e importante para proporcionar qualidade de vida ao homem do campo no Semiárido brasileiro.
                        </p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>)
    }
}
export default AnalyzeCB
