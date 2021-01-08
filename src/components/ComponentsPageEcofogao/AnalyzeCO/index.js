import React from 'react';
import { Card, Table } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor5.png"

const columns = [
    {
      title: 'Gás',
      dataIndex: 'gas',
      key: 'gas',
    },
    {
      title: 'Fogão a lenha tradicional tCO2e',
      dataIndex: 'fogao',
      key: 'fogao',
    },
    {
      title: 'Ecofogão tCO2e',
      dataIndex: 'ecofogao',
      key: 'ecofogao',
    }
    
]
const data = [
    {
        key: '1',
        gas: 'CO2',
        fogao: '22,169020',
        ecofogao: '9,232757',
      },
      {
        key: '2',
        gas: 'CH4',
        fogao: '1,654500',
        ecofogao: '0,689238',
      },
      {
        key: '2',
        gas: 'N2O',
        fogao: '0,262955',
        ecofogao: '0,109543',
      },
      {
        key: '2',
        gas: 'Total',
        fogao: '24,086475',
        ecofogao: '10,031537',
      },
]
function AnalyzeCO() {
    return (
        <div className='ecofogao-analyze-co analyze-co'>
            <div className='casca-ana-co'>
                <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2 (-245KG/MÊS)</div>
                <div className="site-card-border-less-wrapper">

                    <Card bordered={false}>
                        <p>A redução das emissões de CO2 com o ecofogão foi calculada em comparação com o fogão a lenha tradicional. O ecofogão tem a vantagem de utilizar uma menor quantidade de lenha, produzir menos fuligem e fumaça. Com isso, o ecofogão é a melhor alternativa para a cocção de alimentos com o uso de lenha, reduzindo em 58,4% a emissão de CO2. </p>
                    </Card>
                        <Table 
                            className='table-ecofogao-analyzeco'
                            columns={columns} 
                            dataSource={data} 
                            pagination={ false } 
                        />
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
                        <p>A Ecofogão® foi a pioneira no desenvolvimento do fogão a lenha ecológico no Brasil e sua história vem da PROLEÑA uma ONG na América Central que foi pioneira a nível global no desenvolvimento do fogão a lenha ecológico. O desenvolvimento do fogão a lenha ecológico veio da observação do Rogério Carneiro de Miranda que é engenheiro florestal.
                        </p>
                        <p>
                        Assim começou a partir de 1994 os primeiros passos no desenvolvimento do fogão a lenha ecológico. Atualmente, um fogão a lenha ecológico tem uma alta eficiência energética, com a transformação da lenha em mais energia e em menos fumaça.
                        </p>
                        <p>
                        A partir de 2003 de volta ao Brasil, começou a desenvolver a empresa Ecofogão Indústria de Fogões Ltda a qual adaptou os Ecofogões às condições brasileiras, com melhores materiais, novos modelos e novas aplicações como forno e serpentina.
                        </p>
                    </Card>
                    <div className='img'>
                        <img src={TRL}></img>
                    </div>
                    <Card title="TRL da Tecnologia social" bordered={false}>
                        <p>O grau de maturidade tecnológica – TRL – do ecofogão está classificado entre o grau 8 e 9 pois o sistema real foi desenvolvido e aprovado através de operações bem-sucedidas. O TRL 9 é alcançado quando o elemento está integrado no sistema final e operando.
                        </p>
                        <p>
                        Percebe-se, através dos conceitos estudados, que os níveis de maturidade tecnológica de um elemento não são delimitados em relação às atividades realizadas. Além disso, vale destacar que um mesmo elemento pode apresentar diferentes níveis de maturidade tecnológica, pois depende da sua aplicação e do sistema final a ser integrado.
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