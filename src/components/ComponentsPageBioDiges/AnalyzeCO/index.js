import React from 'react';
import { Card, Row, Col, Tooltip, Modal, Button, Table } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor2.png"
import { PlusOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado'
    },
    {
        title: 'Número de Registro',
        dataIndex: 'numero',
        key: 'numero'
    },
    {
        title: 'Título',
        dataIndex: 'titulo',
        key: 'titulo'
    }
]
const data = [
    {
        key: 1,
        estado: 'Paraíba',
        numero: 'MU 8402415-1',
        titulo: 'Projeto Mandalla Desenvolvimento Holístico Sistêmico Ambiental'
    },
    {
        key: 2,
        estado: 'Pernambuco',
        numero: 'BR 102018007348-6',
        titulo: 'Dispositivo para Biodigestão Anaeróbia'
    },
    {
        key: 3,
        estado: 'Pernambuco',
        numero: 'BR 102014027203-8',
        titulo: 'Processo de produção e purificação em escala de celulose bacteriana obtida pela polimerização da glicose a partir de açúcares de fontes renováveis via biotecnologia por meio da propagação de gluconoacetobacter hansenii lmspe em reatores e obtenção da celulose purificada para aplicação nas áreas de saúde, farmacotécnica e cosmiatria'
    },
    {
        key: 4,
        estado: 'Pernambuco',
        numero: 'MU 9102060-3',
        titulo: 'Biodigestor com monitoramento contínuo'
    },
    {
        key: 5,
        estado: 'Alagoas',
        numero: 'BR102017007228',
        titulo: 'Aspectos construtivos e disposição de um biossistema integrado para geração de gás metano e biofertilizante'
    },
    {
        key: 6,
        estado: 'Sergipe',
        numero: 'BR102013032975',
        titulo: 'Biodigestor com gasômetro de volume variável integrado e selo hidráulico'
    },
    {
        key: 7,
        estado: 'Bahia',
        numero: 'BR 10 2013 021110 9',
        titulo: 'Biodigestor compacto'
    },
    {
        key: 8,
        estado: 'Bahia',
        numero: 'PI 0703021-5',
        titulo: 'Aperfeiçoamento em biodigestor anaeróbico utilizado para captação de biogás'
    },
    {
        key: 9,
        estado: 'Bahia',
        numero: 'MU 8400518-1',
        titulo: 'Disposições construtivas introduzidas na montagem e na fixação da manta de revestimento e na manta de cobertura para armazenagem de biogás em biodigestor'
    },
    {
        key: 10,
        estado: 'Maranhão',
        numero: 'BR 20 2012 021339 2',
        titulo: 'Biodigestor de recipientes interligados para resíduos orgânicos domésticos'
    },
    {
        key: 11,
        estado: 'Ceará',
        numero: 'BR 10 2014 033127 1',
        titulo: 'Sistema de biodigestão de batelada para bancada de laboratórios'
    },
]
class AnalyzeCO extends React.Component {
    state = {
        visible: false
    }
    openModal() {
        this.setState({ visible: true })
    }
    render (){
        return (
            <div className='biodigestor-analyzeco analyze-co'>
                <div className='casca-ana-co'>
                    <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2</div>
                    <div className="site-card-border-less-wrapper">

                        <Card bordered={false}>
                            <p>O biodigestor apresenta a vantagem de gerar biogás (CH4) pela digestão anaeróbica da matéria orgânica animal e vegetal. Dentre os combustíveis domésticos, o biogás é considerado o que possui menor impacto ambiental. </p>

                            <p>Para a obtenção das emissões de CO2 pelo biodigestor, é necessário um estudo caso a caso para realizar um inventário considerando a quantidade e o tipo de material orgânico adicionado (esterco de aves, suínos, bovinos, material vegetal) e as análises químicas do biofertilizante produzido. </p>

                            <p>O cálculo da redução das emissões de CO2 no biodigestor deve levar em conta a quantidade emitida pela queima do biogás em comparação com o gás de cozinha tradicional (GLP) para cocção, no escopo da combustão estacionária. </p>
                        </Card>
                    </div>
                    <div className='co-bottom'></div>
                    <br></br>
                    <div className='co-patente-trl'> 
                        <Card title="Quantidade de patentes" bordered={false}>
                            <p>Quantidade de patentes depositadas no Brasil: <b>101 patentes.</b></p>
                            
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
                                title={'Pedidos de patentes depositados no INPI relacionados com fogão a lenha desenvolvidos no Brasil'}
                                visible={this.state.visible}
                                width={1200}
                                footer={null}
                                className="modal-biodigestor"
                                onCancel={() =>
                                    this.setState({
                                        visible: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    <h4><b>REGISTRO DA PRIMEIRA PATENTE DEPOSITADA NO MUNDO:</b></h4>
                                    <p>A pesquisa foi realizada utilizando como palavra-chave “biodigestor”.</p>
                                    <p> Em 1980, foi registrado pelo Escritório Europeu de Patentes o pedido de depósito da patente intitulada “Cuba de fermentação para biodigestores” (do inglês Fermentation vat for biodigesters) com número de registro EP0051082, tendo como inventores Josef Neubauer, J. Sigmund Buchner e Albert Strasser.</p>
                                    <p>Para mais informações sobre a patente citada entre em: <a target="_blanck" href='https://patentscope.wipo.int/search/pt/detail.jsf?docId=EP11330695&_cid=P10-KIC237-83867-1'>Clique aqui</a></p>
                                    <h4><b>PATENTES DEPOSITADAS DESENVOLVIDAS POR OU EM PARCERIA COM ESTADOS DO NORDESTE BRASILEIRO:</b></h4>
                                    <p>A pesquisa sobre biodigestor realizada no banco de dados do Instituto Nacional de Propriedade Industrial (INPI) apresentou patentes depositadas nacionalmente, das quais, foram selecionadas as de origem da região Nordeste (indicadas no mapa), depositadas por instituições públicas, privadas e de outras categorias. Das patentes apresentadas, algumas foram depositadas por instituições de ensino superior, como Universidade Federal de Pernambuco (UFPE), Universidade Federal de Alagoas (UFAL) e Universidade Federal do Sergipe (UFS).</p>
                                
                                   
                                    <Table 
                                        className='table-biodigestor-analyzeco'
                                        columns={columns} 
                                        dataSource={data} 
                                        pagination={ false } 
                                    />
                                    
                                </div>
                            </Modal>

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
}

export default AnalyzeCO; 