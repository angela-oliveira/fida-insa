import React from 'react';
import './index.css';

import Chart from 'react-apexcharts'
import { Table, Tag, Space, Button, Modal  } from 'antd';


const columns = [
  {
    title: 'Instituição Financeira/Agente',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Nome do Instrumento',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Quem pode acessar (PF ou PJ)',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Estado ou Região',
    key: 'action',
    dataIndex: 'action'
  },
  {
    title: 'Prazo de Pagamento',
    key: 'prazo',
    dataIndex: 'prazo'
  },
  {
    title: 'Mais informações',
    key: 'more',
    render: (text, record) => (
      <Button onClick={() => this.openModal()}>Detalhes</Button>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Agência de Fomento do Estado de Pernambuco (AGEFEPE)',
    age: 'PE Solar',
    address: 'PJ/PF',
    action: 'PE',
    prazo: 'Até 60 meses',
  },
  {
    key: '2',
    name: 'Banco do Brasil (BB - Consórcios)',
    age: 'Consórcio Placas Fotovoltaicas',
    address: 'PJ',
    action: 'Brasil',
    prazo: 'Até 72 meses',
  },
  {
    key: '3',
    name: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    age: 'PRODECOOP',
    address: 'PJ',
    action: 'Brasil',
    prazo: 'De 30 a 144 meses',
  },
];


// function Invest() {
export default class extends React.Component {

  listCase = document.getElementsByClassName('.list-cases')

  back() {
      console.log("Back")
  }

  next() {
      console.log("Next")
  }
  state = {
      visible: false
    }
  
    openModal() {
      this.setState({ visible: !this.state.visible })
    }
    render(){
    return (
        <div className='Invest'>
            <div className='casca-ana-cb'>
                <div className='cb-label'>OPORTUNIDADE DE INVESTIMENTO</div>
                <p>Entenda como estão divididos os investimentos</p>
                
                <div className='cb-graphic'>
                <Table columns={columns} dataSource={data} />

                <Modal
                  title='test'
                  visible={this.state.visible}
                  width={720}
                  footer={null}
                  onCancel={() =>
                      this.setState({
                      visible: false
                      })
                  }
                  onOk={() =>
                      this.setState({
                      visible: false
                      })
                  }
                  >
                  <img style={{ width: '100%' }} src={this.state.image} alt="" />
                </Modal>
                    {/* <div className='cus-ins'><Chart
                  options={{
                    dataLabels: {
                      enabled: false
                    },
                    colors: ["#329BA3"],
                    plotOptions: {
                      pie: {
                        donut: {
                          labels: {
                            show: true,
                            value: {
                              show: true,
                              formatter: data => `${data}%`
                            }
                          },
                          total: {
                            show: true,
                            formatter: () => { }
                          }
                        }
                      },
                      radialBar: {
                        dataLabels: {
                          showOn: "always",
                          name: {
                            show: true
                          },
                          value: {
                            fontSize: 22,
                            show: true
                          }
                        }
                      }
                    },
                    labels: ['']
                  }}
                  series={[90]}
                  type="radialBar"
                  width="250"
                />
                        <div className='cb-gra-label'>FUNDOS PRIVADOS</div>
                    </div>
                    <div className='cus-man'><Chart
                  options={{
                    dataLabels: {
                      enabled: false
                    },
                    colors: ["#329BA3"],
                    plotOptions: {
                      pie: {
                        donut: {
                          labels: {
                            show: true,
                            value: {
                              show: true,
                              formatter: data => `${data}%`
                            }
                          },
                          total: {
                            show: true,
                            formatter: () => { }
                          }
                        }
                      },
                      radialBar: {
                        dataLabels: {
                          showOn: "always",
                          name: {
                            show: true
                          },
                          value: {
                            fontSize: 22,
                            show: true
                          }
                        }
                      }
                    },
                    labels: ['']
                  }}
                  series={[55]}
                  type="radialBar"
                  width="250"
                />
                        <div className='cb-gra-label'>AGÊNCIA DE FOMENTO</div>
                    </div>
                    <div className='tem-vid'><Chart
                  options={{
                    dataLabels: {
                      enabled: false
                    },
                    colors: ["#329BA3"],
                    plotOptions: {
                      pie: {
                        donut: {
                          labels: {
                            show: true,
                            value: {
                              show: true,
                              formatter: data => `${data}%`
                            }
                          },
                          total: {
                            show: true,
                            formatter: () => { }
                          }
                        }
                      },
                      radialBar: {
                        dataLabels: {
                          showOn: "always",
                          name: {
                            show: true
                          },
                          value: {
                            fontSize: 22,
                            show: true
                          }
                        }
                      }
                    },
                    labels: ['']
                  }}
                  series={[34]}
                  type="radialBar"
                  width="250"
                />
                        <div className='cb-gra-label'>FINANCIAMENTO PÚBLICO</div>
                    </div>
                    <div className='imp-amb'> 
                        <Chart
                            options={{
                                dataLabels: {
                                enabled: false
                                },
                                colors: ["#329BA3"],
                                plotOptions: {
                                pie: {
                                    donut: {
                                    labels: {
                                        show: true,
                                        value: {
                                        show: true,
                                        formatter: data => `${data}%`
                                        }
                                    },
                                    total: {
                                        show: true,
                                        formatter: () => { }
                                    }
                                    }
                                },
                                radialBar: {
                                    dataLabels: {
                                    showOn: "always",
                                    name: {
                                        show: true
                                    },
                                    value: {
                                        fontSize: 22,
                                        show: true
                                    }
                                    }
                                }
                                },
                                labels: ['']
                            }}
                            series={[83]}
                            type="radialBar"
                            width="250"
                            />
                        <div className='cb-gra-label'>FUNDOS INTERNACIONAIS</div>
                    </div>*/}
                </div>
            </div>
        </div>
    )

    }
}

// export default Invest;