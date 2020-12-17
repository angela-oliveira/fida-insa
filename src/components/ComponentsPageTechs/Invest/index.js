import React from 'react';
import './index.css';

import Chart from 'react-apexcharts'

function Invest() {
    return (
        <div className='Invest'>
            <div className='casca-ana-cb'>
                <div className='cb-label'>OPORTUNIDADE DE INVESTIMENTO</div>
                <p>Entenda como estão divididos os investimentos</p>
                
                <div className='cb-graphic'>
                    <div className='cus-ins'><Chart
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invest;