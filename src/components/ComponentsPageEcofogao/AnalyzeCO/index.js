import React from 'react';
import { Card, Table, Button, Modal, Tooltip } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor5.png"
import { PlusOutlined } from '@ant-design/icons';


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

const columnsTRL = [
    {
      title: 'Pedido',
      dataIndex: 'pedido',
      key: 'pedido',
      width: '200px'
    },
    {
      title: 'Depósito',
      dataIndex: 'deposito',
      key: 'deposito',
      width: '100px'
    },
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
      width: '650px'
    },
    {
      title: 'IPC',
      dataIndex: 'ipc',
      key: 'ipc',
    }
    
]
const dataTRL = [
    {
        key: '1',
        pedido: 'BR 20 2017 007797 2',
        deposito: '13/04/2017',
        titulo: 'Dispositivo acendedor para churrasqueira, fogão a lenha, lareira e similares',
        ipc: 'A47J 37/07',
    },
    {
        key: '2',
        pedido: 'BR 20 2017 006216 9',
        deposito: '27/03/2017',
        titulo: 'Disposição construtiva aplicada em churrasqueira pré-moldada com fogão à lenha embutido',
        ipc: 'A47J 37/07',
    },
    {
        key: '3',
        pedido: 'BR 20 2016 021093 9',
        deposito: '13/09/2016',
        titulo: 'Disposição em fecho para porta de fogão à lenha',
        ipc: 'A21B 3/00',
    },
    {
        key: '4',
        pedido: 'BR 10 2015 025786 4',
        deposito: '09/10/2015',
        titulo: 'Forno para fogão à lenha',
        ipc: 'F24B 13/00',
    },
    {
        key: '5',
        pedido: "BR 10 2012 021169 6",
        deposito: "23/08/2012",
        titulo: "Fogão a lenha galvanizado",
        ipc: "F24B 13/02"
      },
      {
        key: '6',
        pedido: "MU 9102351-3",
        deposito: "21/12/2011",
        titulo: "Gerador de eletricidade em um fogão a lenha através de células termoelétricas com efeito seebeck.",
        ipc: "F24B 1/20"
      },
      {
        key: '7',
        pedido: "MU 9102168-5",
        deposito: "11/11/2011",
        titulo: "Aperfeiçoamento introduzido em fogão à lenha e respectivo processo de construção",
        ipc: "F24B 1/20"
      },
      {
        key: '8',
        pedido: "PI 1105856-0",
        deposito: "08/09/2011",
        titulo: "Fogão à lenha gerador de energia elétrica",
        ipc: "F24B 1/20"
      },
      {
        key: '9',
        pedido: "PI 1003197-9",
        deposito: "31/08/2010",
        titulo: "Recuperador, com direcionadores de calor, para reaproveitar parte do calor desperdiçado pela chaminé do fogão a lenha no aquecimento de água em um reservatório térmico instalado acima do forro",
        ipc: "F24C 13/00"
      },
      {
        key: '10',
        pedido: "MU 9001305-0",
        deposito: "26/07/2010",
        titulo: "Fogão e forno à lenha com design moderno",
        ipc: "F24B 1/20"
      },
      {
        key: '11',
        pedido: "MU 8902457-5",
        deposito: "22/09/2009",
        titulo: "Fogão à lenha com turbina pelton para gerar eletricidade",
        ipc: 'F24B 13/00'
      },
      {
        key: '12',
        pedido: "MU 8901236-4",
        deposito: "29/06/2009",
        titulo: "Fogão e forno à lenha econômico",
        ipc: "F24B 1/20"
      },
      {
        key: '13',
        pedido: "MU 8900584-8",
        deposito: "08/04/2009",
        titulo: "Disposição em fogão à lenha",
        ipc: "F24B 1/02"
      },
      {
        key: '14',
        pedido: "MU 8803093-8",
        deposito: "18/07/2008",
        titulo: "Fogão à lenha gerador de energia elétrica",
        ipc: "F01D 13/00"
      },
      {
        key: '15',
        pedido: "MU 8800132-6",
        deposito: "12/02/2008",
        titulo: "Disposição em fogão a lenha com aquecimento de água integrado",
        ipc: "F24B 9/04"
      },
      {
        key: '16',
        pedido: "MU 8700932-3",
        deposito: "20/04/2007",
        titulo: "Disposição introduzida em fogão a lenha portátil",
        ipc: "F24B 1/20"
      },
      {
        key: '17',
        pedido: "PI 0603455-1",
        deposito: "25/07/2006",
        titulo: "Fogão a lenha gerador de energia elétrica",
        ipc: 'F24B 13/00'
      },
      {
        key: '18',
        pedido: "PI 0506392-2",
        deposito: "23/12/2005",
        titulo: "Chapa térmica de alumínio fundido para aquecimento de água no fogão a lenha",
        ipc: "F24B 9/04"
      },
      {
        key: '19',
        pedido: "PI 0504554-1",
        deposito: "07/10/2005",
        titulo: "Fogão a lenha modular, com sistema de montagem e revestimento externo simultâneos",
        ipc: "F24B 13/02"
      },
      {
        key: '20',
        pedido: "MU 8402784-3",
        deposito: "05/11/2004",
        titulo: "Disposição aplicada em fogão à lenha portátil",
        ipc: "F24C 1/00"
      },
      {
        key: '21',
        pedido: "PI 0303647-2",
        deposito: "14/10/2003",
        titulo: "Fogão de lenha ecológico, eficiente e sem fumaça",
        ipc: "F24C 1/08"
      },
      {
        key: '22',
        pedido: "PI 0303946-3",
        deposito: "03/10/2003",
        titulo: "Processo de fabricação de forno/fogão a lenha e produtos obtidos",
        ipc: 'F24B 13/00'
      },
      {
        key: '23',
        pedido: "MU 8102104-6",
        deposito: "12/06/2001",
        titulo: "Forno aquecido a chama de fogão a gás ou a lenha",
        ipc: "A21B 1/52"
      },
      {
        key: '24',
        pedido: "PI 0103632-7",
        deposito: "28/05/2001",
        titulo: "Sistema de reaproveitamento de calor por chapa metálica horizontal com serpentinas aquecedora de água para fogão a lenha",
        ipc: "F24C 15/00"
      },
      {
        key: '25',
        pedido: "MU 8002946-9",
        deposito: "04/12/2000",
        titulo: "Concepção aplicada em forno caipira e fogão a lenha ou carvão",
        ipc: "F24B 1/20"
      },
      {
        key: '26',
        pedido: "MU 7900010-0",
        deposito: "06/01/1999",
        titulo: "Churrasqueira móvel \"master grill\" com forno e fogão a lenha",
        ipc: "A47J 37/07"
      },
      {
        key: '27',
        pedido: "PI 9401760-3",
        deposito: "01/06/1994",
        titulo: "Conjunto de forno e acessórios para forno fogão a lenha modular",
        ipc: 'F24B 13/00'
      },
      {
        key: '28',
        pedido: "MI 5101369-0",
        deposito: "01/11/1991",
        titulo: "Disposição introduzida em fogão a lenha",
        ipc: "7.17"
      },
      {
        key: '29',
        pedido: "MU 7001680-1",
        deposito: "21/08/1990",
        titulo: "Geladeira de absorção acionada por fogão à lenha",
        ipc: "F25B 15/00"
      },
      {
        key: '30',
        pedido: "MU 6900752-7",
        deposito: "15/05/1989",
        titulo: "Queimador a gás para fogão a lenha",
        ipc: "F24B 1/20"
      },
      {
        key: '31',
        pedido: "MU 6801731-6",
        deposito: "05/08/1988",
        titulo: "Kit para fogão a lenha",
        ipc: "F24C 1/02"
      },
      {
        key: '32',
        pedido: "MU 6800313-7",
        deposito: "10/02/1988",
        titulo: "Adaptação em fogão a lenha",
        ipc: "F24C 1/02"
      },
      {
        key: '33',
        pedido: "PI 8605834-7",
        deposito: "28/11/1986",
        titulo: "Geladeira movida a fogão de lenha.",
        ipc: "F25D 23/12"
      },
      {
        key: '34',
        pedido: "MU 6602328-9",
        deposito: "28/11/1986",
        titulo: "Padaria caseira-churrasqueira-forno-fogão à lenha ou carvão",
        ipc: "A47J 37/04"
      },
      {
        key: '35',
        pedido: "MU 6401483-5",
        deposito: "13/09/1984",
        titulo: "Fogão a lenha",
        ipc: "F24B 1/28"
      },
      {
        key: '36',
        pedido: "PI 8102025-2",
        deposito: "30/03/1981",
        titulo: "Secador transformador de lenha lixo ou resíduos agrícolas em combustível próprio para a produção de gás combustível utilizável em forno fogão motores a explosão etc e no maçarico para gerar vapor empregado com forca motriz",
        ipc: "C10B 47/00"
      },
      {
        key: '00711',
        pedido: "PI 1004137-0",
        deposito: "15/10/2010",
        titulo: "Ecofogão aquecedor de água",
        ipc: "F24C 13/00"
      }
]
class AnalyzeCO extends React.Component {
    state = {
        visible: false
    }

    openModal() {
        this.setState({ visible: true })
    }
    render() {
        return (
            <div className='ecofogao-analyze-co analyze-co'>
                <div className='casca-ana-co'>
                    <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2</div>
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
                                title={'Pedidos de patentes depositados no INPI relacionados com fogão à lenha desenvolvidos no Brasil'}
                                visible={this.state.visible}
                                width={1200}
                                footer={null}
                                className="modal-ecofogao"
                                onCancel={() =>
                                    this.setState({
                                        visible: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                   
                                    <Table 
                                        className='table-ecofogao-analyzeco'
                                        columns={columnsTRL} 
                                        dataSource={dataTRL} 
                                        pagination={ false } 
                                    />
                                    
                                </div>
                            </Modal>
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
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AnalyzeCO; 