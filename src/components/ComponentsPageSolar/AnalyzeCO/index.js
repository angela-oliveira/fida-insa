import React from 'react';
import { Card, Table } from 'antd'
import './index.css';
import TRL from "../../../utils/images/cor4.png"


const columns = [
    {
      title: 'Mês',
      dataIndex: 'mes',
      key: 'mes',
    },
    {
      title: 'Consumo (MWh)',
      dataIndex: 'consumo',
      key: 'consumo',
    },
    {
      title: 'Fator Médio de Emissão',
      dataIndex: 'medio',
      key: 'medio',
    },
    {
      title: 'Total de emissões (tCO2e)',
      dataIndex: 'total',
      key: 'total',
    }
    
]
const data = [
    {
        key: '1',
        mes: 'Agosto/2019',
        consumo: '2206',
        medio: '0,1070',
        total: '236',
      },
      {
        key: '2',
        mes: 'Agosto/2020',
        consumo: '0,165',
        medio: '0,01070',
        total: '0,018',
      },
]
class AnalyzeCO extends React.Component {
    render(){
        return(
            <div className='solar-analyzeco analyze-co'>
                <div className='casca-ana-co'>
                    <div className='co-label'>ANÁLISE DE EMISSÃO DE CO2</div>
                    <div className="site-card-border-less-wrapper">

                        <Card bordered={false}>
                            <p>A redução das emissões de CO2 com o uso de painéis fotovoltaicos foi calculada considerando as emissões indiretas pela compra alternativa de energia elétrica, na abordagem da escolha de compra. Sem considerar o ciclo de vida da fabricação dos painéis fotovoltaicos, existe uma redução de 99,9% nas emissões de CO2 em comparação com o consumo de eletricidade da rede convencional de energia elétrica.  
                            </p>
                            <p>O cálculo foi feito comparando o consumo de energia elétrica antes e depois da utilização de energia solar fotovoltaica em uma Cooperativa de Picuí -PB. Os fatores de emissão utilizados foram baseados na matriz energética brasileira.
                            </p>
                        </Card>
                        
                        <Table 
                            columns={columns} 
                            dataSource={data} 
                            pagination={ false } 
                        />
                    </div>

                    <div className='co-bottom'></div>
                    <br></br>
                    <div className='co-patente-trl'> 
                        <Card title="Quantidade de patentes" bordered={false}>
                            <p>Atualmente existem 27 processos de patente envolvendo painéis fotovoltaicos.
                            </p>
                        </Card>
                        <div className='img'>
                            <img src={TRL}></img>
                        </div>
                        <Card title="TRL da Tecnologia social" bordered={false}>
                            <p>Os painéis fotovoltaicos se enquadram na TRL 9 já que os mesmos já foram testados, bem como já são comercializados e usados pela comunidade com sucesso, tendo vista que esse nível é alcançado quando as tecnologias em questão são aplicadas em sistemas que sejam bem sucedidos em uma operação real. Destaca-se ainda que a diferença fundamental entre TRL 8 e 9 está relacionado à operação do sistema, sendo um exemplo básico de que a construção de uma nova aeronave se enquadra em uma TRL 8, mas voá-la a primeira vez de forma real é TRL 9.
                            </p>
                        </Card>
                        
                    </div>
                </div>
            </div>

        )
    }
}

export default AnalyzeCO; 