import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;



class AnalyzeCB extends React.Component {
    state = {
        visible: false,
        visible1: false
    }

    openModal() {
        this.setState({ visible: true })
    }

    openModal1(){
        this.setState({visible1: true})
    }
    render() {
        return (
            <div className='biodigestor analyze-cb'>
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
                                                value={" 3.529,00"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
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
                                                value={"5 a  R$ 200,00"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                                
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
                                                value={"10 Anos"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </TabPane>
                        <TabPane className='key4' tab="Impactos ambientais" key="4">
                            <b>Problema:</b>
                            <p>
                            Segundo a Food and Agriculture Organization of the United Nations (2014), a maior fonte de emissão de gases do efeito estufa na agricultura é proveniente da fermentação entérica, em razão da produção de metano por meio da digestão dos animais ruminantes e expulsão por eructação.
                            </p>
                            
                            <b>Solução:</b>
                            <p>A produção animal é uma atividade econômica muito recorrente e existe em diversos lugares onde a agricultura pode ser praticada, mesmo em regiões que não são favorecidas por recursos naturais hídricos ou vegetais, como as regiões áridas ou semiáridas nordestinas. Com o objetivo de diminuir o impacto que essa atividade causa ao meio ambiente, podem ser utilizadas tecnologias sustentáveis, como o biodigestor, para fins de tratamento dos resíduos dos animais, como também agregar valor ao resíduo que antes seria descartado.</p>
                            
                            <b>Problema:</b>
                            <p>Os dejetos expelidos pelos animais são depositados no solo, servindo de nutrientes para plantas. No entanto, no caso dos recursos hídricos em geral, pode haver contaminação pelo excesso desse material, principalmente em locais com elevadas taxas de evaporação e difícil renovação hídrica. Nas redondezas das fontes de abastecimento de água acumulam-se muitos animais, como nos cursos de águas e açudes, por razão da falta de mata ciliares, o que facilita o acesso às águas.</p>

                            <b>Solução:</b>

                            <p>De forma geral, verifica-se que a biodigestão anaeróbia é uma prática que auxilia na minimização da poluição que é causada por resíduos animais e vegetais, ajuda na eliminação de ervas daninhas e também de bactérias causadoras de doenças, eliminação de maus odores e moscas tradicionais esterqueiras, entre outros. </p>

                            <b>Problema:</b>

                            <p>O resíduo resultante do processamento da mandioca para fabricação da farinha é chamado de manipueira e é obtido na etapa de prensagem da mandioca. Esse efluente possui um impacto negativo no meio ambiente, aos seres humanos e animais, devido a um composto encontrado em sua composição chamado de ácido cianídrico, e que se trata de uma substância venenosa e nociva. </p>

                            <b>Solução:</b>

                            <p>Para diminuir o impacto ambiental que esse efluente causa, é necessário realizar o seu tratamento por meio do uso de biodigestores, com a consequente produção de biogás, que pode ser utilizado pelos produtores em diversas atividades, inclusive como fonte de energia para a secagem da mandioca, diminuindo também o impacto que o forno a lenha causa à natureza.</p>

                        </TabPane>
                        <TabPane tab="Impactos sociais" key="5">
                            <p>
                            No cotidiano dos grandes centros urbanos, as tecnologias são utilizadas para auxiliar e trazer retorno no âmbito econômico ou de bem-estar, facilitando o trabalho das pessoas. O uso de tecnologias adaptadas também deve ser estendido para o meio rural, com o intuito de ajudar o pequeno agricultor nas suas tarefas. Devido a várias dificuldades de trabalho que surgem no campo, o pequeno produtor rural, em muitos casos, necessita buscar sua fonte de renda nas cidades, tendo que abandonar o local em que viveu grande parte de sua vida, na maioria das situações. Pensando nisso, as tecnologias podem ser empregadas para diminuir ou erradicar possíveis problemas que impeçam o desenvolvimento do trabalho no campo, como também, podem ser benéficas em termos econômicos e ambientais. A maior parte da produção dos alimentos disponibilizados para a população brasileira é produzida pela agricultura familiar, constituída por pequenos produtores rurais, povos e comunidades tradicionais.  Diante disso, verifica-se a importância que a pessoa do campo tem para a sociedade e, por isso, mais ferramentas devem ser disponibilizadas com o fim de agregar valor ao trabalho rural.
                        </p>
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
                                        title={'Impactos sociais'}
                                        visible={this.state.visible}
                                        width={1000}
                                        footer={null}
                                        className="modal-biodigestor"
                                        onCancel={() =>
                                            this.setState({
                                                visible: false
                                            })
                                        }
                                    >
                                        <div className='content-modal'>
                                           <p>Projetos como os que o FIDA apoia, além de levarem auxílio tecnológico e conhecimento à pessoa que trabalha no campo, também impactam positivamente a vida de mulheres. A instalação do biodigestor, além do retorno econômico e sustentável, traz uma qualidade de vida e gera uma fonte de renda para as agricultoras por meio, por exemplo, da fabricação de bolos e pães a partir da utilização do biogás gerado em sua propriedade, em substituição ao gás de cozinha (GLP). Esses projetos também estimulam a criação ou fortalecimento de grupos de mulheres nas comunidades, para que possam gerar renda juntas. O biofertilizante produzido no biodigestor pode ser utilizado como adubo orgânico nas árvores frutíferas, hortaliças e viveiros de mudas, cujo produto pode ser vendido ou submetido a um processamento, como na produção de doces e polpas a partir de frutas produzidas na propriedade dessas mulheres. Além disso, o procedimento de fabricação é realizado em cozinhas comunitárias em que todas participam da elaboração dos produtos secundários. </p>
                                            <p>Em Pajeú II, localizada na comunidade Poço Redondo do município de Tabira – PE, há um grupo de mulheres que é beneficiado pelas ações diretas do projeto Dom Helder Câmara (PDHC) e outros projetos. Trata-se de um exemplo de impacto social positivo utilizando biodigestores e outras tecnologias.  O uso do biodigestor influencia positivamente na segurança alimentar das famílias rurais beneficiadas. Um dos produtos gerados, o biofertilizante, é utilizado nos quintais produtivos como defensor natural e adubo orgânico fornecendo os nutrientes necessários para as plantas, tendo como consequência o aumento da produção e melhora nas refeições da família, devido a diversidade e qualidade dos produtos produzidos.</p>
                                            
                                        </div>
                                    </Modal>

                                </div>
                        </TabPane>
                        <TabPane tab="Adaptação à realidade da agricultura familiar" key="6">
                            <p>
                            No ano de 2008, um projeto piloto utilizando o modelo de biodigestor sertanejo foi implementado na comunidade de Santo Antônio II, em Afogados da Ingazeira (PE). Esse programa foi desenvolvido pela Diaconia e o Projeto Dom Helder Câmara, contando com o apoio do Fundo Internacional de Desenvolvimento Agrícola (FIDA). Por meio desse projeto foram realizadas modificações no biodigestor com o objetivo de torná-lo mais acessível à comunidade rural.
                        </p>
                        <div className=' tolltip-margin'>
                                <Tooltip title="Ver mais" >
                                    <Button
                                        className='button-1'
                                        onClick={() => this.openModal1()}
                                        type="primary"
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                    />
                                </Tooltip>
                                <Modal
                                    title={'Adaptação à realidade da agricultura familiar'}
                                    visible={this.state.visible1}
                                    width={1000}
                                    footer={null}
                                    onCancel={() =>
                                        this.setState({
                                            visible1: false
                                        })
                                    }
                                >
                                    <div className='content-modal'>
                                        {/* <p>{this.desciption.content}</p> */}
                                        <p>O biodigestor sertanejo, conforme a ilustração a seguir, se originou a partir do modelo indiano e aadaptação foi realizada visando questões como a disponibilidade de materiais para sua construção em lojas de materiais de construção nas cidades do interior.</p>

                                        <p>O biodigestor sertanejo compreende as seguintes partes:</p>
                                        <ol type='1'>
                                            <li>Caixa de alimentação;</li>
                                            <li>Fermentador;</li>
                                            <li>Gasômetro;</li>
                                            <li>Adaptador/filtro primário de água;</li>
                                            <li>Tanque de saída do biogás;</li>
                                            <li>Saída dos resíduos.</li>
                                        </ol>
                                        <p>Na caixa de alimentação, é colocado o material orgânico que abastecerá, posteriormente, o tanque de fermentação (fermentador), no qual será produzido o biogás. Esse ficará armazenado no gasômetro. No tanque de saída, será eliminado um produto líquido ou matéria residual que pode ser denominado de biofertilizante, isto é, um fertilizante orgânico que pode ser utilizado para adubação líquida ou sólida. Obiogás produzido pode ser utilizado para o aquecimento térmico, como combustível para motores e geradores e como gás para cozinha.</p>
                                        <b>Tem curiosidade ou deseja saber como construir um biodigestor? </b><a href='https://issuu.com/diaconia_web/docs/manual_do_biodigestor'>Saiba mais</a>


                                    </div>
                                </Modal>

                            </div>
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
