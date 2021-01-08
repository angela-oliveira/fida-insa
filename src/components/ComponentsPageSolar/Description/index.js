import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/ic_solar.png'
import Cor from '../../../utils/images/SOLAR-principal.jpg'

import { Button, Modal, Tooltip } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

class Description extends React.Component {
    // listCase = document.getElementsByClassName('.list-cases')
    
    state = {
        visible1: false,
        visible2: false,
        visible3: false
    }
    desciption = {
        title: 'Energia Solar'
    }
    justify = {
        title: 'Justificativa'
    }
    factors = {
        title: 'Fatores de promovem ou limitam a adoção da tecnologia'
    }
    modal = () => {
        const p = []
        p.push(
            <Modal
                title={this.desciption.title}
                visible={this.state.visible}
                width={1000}
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
                <div className='content-modal'>
                    <p>Os principais investimentos realizados pelo FIDA estão voltados para a implantação de sistemas fotovoltaicos em agroindústrias e comunidades no semiárido brasileiro. Os sistemas fotovoltaicos são compostos por painéis solares fotovoltaicos, que são, basicamente, dispositivos utilizados na conversão da luz do Sol em energia elétrica em células fotovoltaicas. As células solares ou fotovoltaicas são as responsáveis pela captação e conversão dos raios solares em energia elétrica.
                    </p>
                    <p>Os sistemas ainda aportam um módulo fotovoltaico que é o componente responsável por gerar a energia, sendo basicamente uma placa protegida por vidro onde as células solares são colocadas e conectadas umas às outras por fios, completando a montagem de um módulo. Para a montagem de um sistema fotovoltaico autônomo com a finalidade de utilização na irrigação de áreas agrícolas, além dos equipamentos citados acima, é necessário um regulador de carga, uma bateria ou banco de baterias e um inversor de corrente contínua para corrente alternada, a fim de atender ao conjunto motobomba e aos possíveis equipamentos elétricos do sistema de automação da irrigação alimentados com corrente alternada, havendo alguns casos em que não se utiliza bateria.
                    </p>
                    <p>Quando conectado à rede elétrica, existe a necessidade de um inversor solar para promover a inversão da energia elétrica gerada pelo painel solar de corrente contínua (CC) para corrente alternada (CA), demandada pela maioria dos equipamentos elétricos, além de um quadro de luz que recebe a energia que sai do inversor solar e a distribui para sua casa ou empresa, bem como de um relógio que calcula e faz com que o excesso de eletricidade produzida quando houver muito sol ou pouco consumo volte para a rede elétrica. Essa energia elétrica adicional é inserida na rede da distribuidora, se tornando "créditos de energia" que podem ser utilizados de noite, em dias nublados ou nos próximos meses. Além disso, esse relógio também mede a entrada de energia pública que é consumida quando não houver sol, calculando o saldo devedor de energia a distribuidora, nesses casos. Diferentemente dos meios convencionais na produção de eletricidade que utilizam do princípio da indução eletromagnética para gerar uma corrente alternada no circuito, a conversão fotovoltaica se dá de forma direta, em que os fótons provenientes do Sol interagem diretamente com os elétrons das células do material semicondutor, gerando uma corrente de sentido único, ou seja, uma corrente contínua.
                    </p>
                </div>
            </Modal>
        )
        return p
    }

    openModal() {
        this.setState({ visible1: true })
    }

    openModal2() {
        this.setState({ visible2: true })
    }

    openModal3() {
        this.setState({ visible3: true })
    }
    render() {
        return (
            <div className='solar-curiosities description'>
                <div className='desc-top'>
                    <div className='title-tech'>
                        <div className='logo-tech'>
                            <div className='casca-logo-tech'>
                                <img src={LogoTech} alt='logo da tecnologia'></img>
                            </div>
                            <div className='label-tech' >
                                <h2 className='labelA'>ENERGIA</h2>
                                <h2 className='labelB'>SOLAR</h2>
                            </div>
                        </div>
                        <br></br>
                        <p>A Energia Solar é uma energia alternativa, sustentável e renovável, tendo como fonte o Sol e podendo ser aproveitada principalmente como energia elétrica fotovoltaica e térmica. A energia fotovoltaica é a conversão direta dos raios solares em eletricidade e a energia térmica faz uso do calor do Sol para o aquecimento da água ou para a sua transformação em energia elétrica.          
                        </p>
                        <div className='tooltip tolltip-margin'>
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
                                title={this.desciption.title}
                                visible={this.state.visible1}
                                width={1000}
                                footer={null}
                                onCancel={() =>
                                    this.setState({
                                        visible1: false
                                    })
                                }
                                onOk={() =>
                                    this.setState({
                                        visible1: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    <p>Os principais investimentos realizados pelo FIDA estão voltados para a implantação de sistemas fotovoltaicos em agroindústrias e comunidades no semiárido brasileiro. Os sistemas fotovoltaicos são compostos por painéis solares fotovoltaicos, que são, basicamente, dispositivos utilizados na conversão da luz do Sol em energia elétrica em células fotovoltaicas. As células solares ou fotovoltaicas são as responsáveis pela captação e conversão dos raios solares em energia elétrica.
                                    </p>
                                    <p>Os sistemas ainda aportam um módulo fotovoltaico que é o componente responsável por gerar a energia, sendo basicamente uma placa protegida por vidro onde as células solares são colocadas e conectadas umas às outras por fios, completando a montagem de um módulo. Para a montagem de um sistema fotovoltaico autônomo com a finalidade de utilização na irrigação de áreas agrícolas, além dos equipamentos citados acima, é necessário um regulador de carga, uma bateria ou banco de baterias e um inversor de corrente contínua para corrente alternada, a fim de atender ao conjunto motobomba e aos possíveis equipamentos elétricos do sistema de automação da irrigação alimentados com corrente alternada, havendo alguns casos em que não se utiliza bateria.
                                    </p>
                                    <p>Quando conectado à rede elétrica, existe a necessidade de um inversor solar para promover a inversão da energia elétrica gerada pelo painel solar de corrente contínua (CC) para corrente alternada (CA), demandada pela maioria dos equipamentos elétricos, além de um quadro de luz que recebe a energia que sai do inversor solar e a distribui para sua casa ou empresa, bem como de um relógio que calcula e faz com que o excesso de eletricidade produzida quando houver muito sol ou pouco consumo volte para a rede elétrica. Essa energia elétrica adicional é inserida na rede da distribuidora, se tornando "créditos de energia" que podem ser utilizados de noite, em dias nublados ou nos próximos meses. Além disso, esse relógio também mede a entrada de energia pública que é consumida quando não houver sol, calculando o saldo devedor de energia a distribuidora, nesses casos. Diferentemente dos meios convencionais na produção de eletricidade que utilizam do princípio da indução eletromagnética para gerar uma corrente alternada no circuito, a conversão fotovoltaica se dá de forma direta, em que os fótons provenientes do Sol interagem diretamente com os elétrons das células do material semicondutor, gerando uma corrente de sentido único, ou seja, uma corrente contínua.
                                    </p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                    <div className='justify'>
                        <div className='justify-label'>QUAL A JUSTIFICATIVA</div>
                        <div className='justify-txt'>
                            <p>O Semiárido brasileiro tem um grande potencial para produção de energia solar fotovoltaica, podendo ser melhor explorado para transformar esse potencial em oportunidades reais, capazes de gerar emprego e renda, sendo que as maiores irradiações solares no Brasil estão em áreas de baixo desenvolvimento econômico, principalmente as encontradas nesta região.</p>

                            <p>Outro fator importante está ligado à redução dos impactos ambientais quando comparada com os meios de produção de energia elétrica convencionais, sendo que na produção de energia fotovoltaica não há emissão de CO2 e outros gases, sequer de poluentes líquidos ou sólidos durante a geração de energia elétrica. Com a grande disponibilidade de fonte energética solar no semiárido, o FIDA têm fomentado o uso da energia fotovoltaica na região por meio dos diversos projetos com os Estados.

                            </p>
                        </div>
                            <div className='tooltip'>
                                <Tooltip title="Ver mais">
                                    <Button 
                                        className='button-1' 
                                        onClick={() => this.openModal2()} 
                                        type="primary" 
                                        shape="circle" 
                                        icon={<PlusOutlined />} 
                                    />
                                </Tooltip>

                                <Modal
                                title={this.justify.title}
                                visible={this.state.visible2}
                                width={1000}
                                footer={null}
                                onCancel={() =>
                                    this.setState({
                                        visible2: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    <p>A implantação de placas solares em sistemas agroindustriais e nas comunidades rurais vem impactando na redução no custo da energia elétrica, aumentando a competitividade dos negócios rurais e aumentando a renda e a sustentabilidade dos empreendimentos. Foram identificados 33 investimentos envolvendo sistemas fotovoltaicos nos Estados da Paraíba, Piauí e Sergipe, englobando 14 associações/cooperativas e beneficiando 5.676 famílias, sendo que todos esses projetos são financiados pelo FIDA e em parceria com outros órgãos públicos.
                                    </p>
                                </div>
                            </Modal>
                            </div>
                    </div>

                    <div className='casca-img-tech'>
                        <img src={Cor}></img>
                    </div>

                </div>


                <div className='desc-bottom'>
                    <div className='fatores-label'>FATORES QUE PROMOVEM OU LIMITAM A ADOÇÃO DA TECNOLOGIA</div>
                    <div className='fato-txtA'><p>A energia solar é uma fonte inesgotável e de baixo impacto ambiental, podendo complementar satisfatoriamente a oferta da energia gerada a partir das hidrelétricas, cuja oferta é diminuída pelas recorrentes baixas do nível de água nos reservatórios, impactando de forma negativa a geração de energia e requerendo o acionamento e uso das termelétricas, o que aumenta a liberação de gases de efeito estufa. </p></div>
                    <div className='fato-txtB'><p>Os custos para a implantação de sistemas com energia solar relativamente altos; no entanto, a economia gerada pode ser de até 5 vezes em relação ao sistema convencional, fazendo com que, apesar do entrave existente para aquisição dos sistemas solares, a sua implementação seja economicamente interessante com o passar do tempo. Desta forma, a economia gerada pode ser equivalente ao valor do investimento realizado com amortização que ocorre ao longo dos meses de uso, e com alta durabilidade e baixo custo de manutenção.</p> </div>
                </div>

                <div className='tooltip tolltip-margin'>
                    <Tooltip title="Ver mais" >
                        <Button 
                            className='button-1' 
                            onClick={() => this.openModal3()} 
                            type="primary" 
                            shape="circle" 
                            icon={<PlusOutlined />} 
                        />
                    </Tooltip>
                    <Modal
                        title={this.factors.title}
                        visible={this.state.visible3}
                        width={1000}
                        footer={null}
                        onCancel={() =>
                            this.setState({
                                visible3: false
                            })
                        }
                    >
                        <div className='content-modal'>
                            <p>Ainda assim, além de não haver emissão de CO2 e outros gases, sequer de poluentes líquidos ou sólidos durante a geração de energia elétrica, os volumes de emissão nas etapas de fabricação dos equipamentos utilizados no setor fotovoltaico são baixos e a quantidade de energia gerada ao longo da vida útil dos sistemas fotovoltaicos é de 8 a 17 vezes maior que a energia consumida em sua fabricação, sendo então uma alternativa viável nesse segmento. É importante destacar também que, no final do ciclo de vida de um sistema fotovoltaico, cerca de 85% de seus componentes podem ser reciclados e reaproveitados, de forma que os impactos ambientais, já bastante reduzidos, tendem a se tornar ainda menores no longo prazo</p>
                        </div>
                    </Modal>

                </div>
            </div>
        )
    }
}

export default Description;