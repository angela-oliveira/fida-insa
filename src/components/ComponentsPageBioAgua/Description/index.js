import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/4.png'
import Cor from '../../../utils/images/bioagua-descricao.JPG'

import { Button, Modal, Tooltip, Row } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';

class Description extends React.Component {
    // listCase = document.getElementsByClassName('.list-cases')
    
    state = {
        visible1: false,
        visible2: false,
        visible3: false
    }
    desciption = {
        title: 'Bioágua'
    }
    justify = {
        title: 'Justificativa'
    }
    factors = {
        title: 'Fatores de promovem ou limitam a adoção da tecnologia'
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
            <div className='bioagua-description description'>
                <div className='desc-top'>
                    <div className='title-tech'>
                        <div className='logo-tech'>
                            <div className='casca-logo-tech'>
                                <img src={LogoTech} alt='logo da tecnologia'></img>
                            </div>
                            <div className='label-tech' >
                                <h2 className='labelA'>BIO</h2>
                                <h2 className='labelB'>ÁGUA</h2>
                            </div>
                        </div>
                        <br></br>
                        <p>
                        O Sistema Bioágua Familiar é uma tecnologia social de tratamento de águas e saneamento rural que possibilita gerar água para irrigação e outros usos menos nobres. Esse sistema tem como finalidade tratar e disponibilizar a água que foi utilizada em atividades como banho, lavagem de roupas, pratos e panelas. A água proveniente dessas atividades é denominada de água cinza.          
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
                                className="modal-bioagua"
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
                                    {/* <p>{this.desciption.content}</p> */}
                                    <p>O tratamento da água cinza por esse tipo de tecnologia ocorre a partir de mecanismos de filtragem e por processos físicos e biológicos. No tratamento, são removidos os resíduos mais grosseiros através de um componente do sistema denominado caixa de gordura. Em seguida, a água cinza prossegue passando por uma rede hidráulica que a distribui para um filtro biológico, no qual  ocorre uma ação de organismos e microrganismos que atuam em compartimentos filtrantes, onde a água passa pelo processo de depuração. Após a filtragem, a água cinza tratada é armazenada para ser bombeada para um sistema de irrigação por gotejamento. Essa tecnologia social é considerada uma alternativa adequada para a destinação dos efluentes, auxiliando no suprimento de exigências nutricionais das plantas, reduzindo os custos de produção e aumentando a atividade biológica do solo.
                                    </p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                    <div className='justify'>
                        <div className='justify-label'>JUSTIFICATIVA</div>
                        <div className='justify-txt'>
                            <p>O Sistema Bioágua promove a economia de água, permitindo ao usuário a sua reutilização para fins não potáveis, como o cultivo de plantas, a lavagem de calçadas e pisos, entre outros usos. Isso é fundamental em períodos de crise hídrica, ainda mais no Semiárido brasileiro, que tem como característica climática uma intensa evaporação de água e precipitação média anual menor que 800 mm. Os Projetos financiados pelo FIDA que envolvem a instalação e a implantação de tecnologias sociais como o Sistema Bioágua são bastante relevantes, pois o reúso da água cinza tratada para fins agrícolas é uma alternativa viável que aumenta a disponibilidade hídrica e ajuda a superar a escassez, mitigando os impactos severos da seca.</p>

                            <p>A implantação do Sistema Bioágua em consonância com a vivência do agricultor familiar permite um manejo mais sustentável e cuidadoso com a terra, garante a segurança alimentar e comercialização dos excedentes da produção. Com isso, durante os períodos de chuva, as famílias podem armazenar a água cinza tratada, e nos períodos críticos, terá o benefício de irrigar as culturas, e consequentemente, manter a renda familiar. Diante desse cenário, a convivência com o Semiárido permite às comunidades rurais se adaptarem e aprenderem a utilizar os recursos naturais de maneira mais racional, especialmente a água, que é o recurso mais limitante na região.

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
                                className="modal-bioagua"
                                onCancel={() =>
                                    this.setState({
                                        visible2: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    {/* <p>{this.desciption.content}</p> */}
                                    <p>A implantação do Sistema Bioágua em consonância com a vivência do agricultor familiar permite um manejo mais sustentável e cuidadoso com a terra, garante a segurança alimentar e comercialização dos excedentes da produção. Com isso, durante os períodos de chuva, as famílias podem armazenar a água cinza tratada, e nos períodos críticos, terá o benefício de irrigar as culturas, e consequentemente, manter a renda familiar. Diante desse cenário, a convivência com o Semiárido permite às comunidades rurais se adaptarem e aprenderem a utilizar os recursos naturais de maneira mais racional, especialmente a água, que é o recurso mais limitante na região.
                                    </p>
                                    <p>A possibilidade de rentabilizar os recursos financeiros do agricultor, evitando que ele invista em equipamentos que requeiram conhecimento técnico específico e elevado custo de aquisição, como é o caso de painéis fotovoltáicos, oportunizou a centenas de propriedades rurais a melhoria na qualidade de vida através da cessão de kits de catavento com sistemas de irrigação pelo FIDA. Atualmente no Semiárido brasileiro, os cataventos rurais mais utilizados são aqueles destinados ao bombeamento de água para consumo e irrigação. Na Paraíba, por exemplo, foram instalados 498 cataventos entre os anos de 2016 e 2019, uma parceria do Governo da Paraíba e o FIDA, em comunidades beneficiadas pelo Procase (Projeto de Desenvolvimento Sustentável do Cariri, Seridó e Curimataú), em 56 municípios do semiárido paraibano. Em geral, esses equipamentos são populares e quase sempre possuem o mesmo design, seguindo o modelo americano e realizam o trabalho mecânico de bombear água e, por serem populares, após instalados, sua manutenção é fácil e com frequência espaçada.
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
                    <div className='fato-txtA'><p>O Sistema Bioágua é uma ação complementar que pode assegurar uma melhor oferta de água a baixo custo, a partir do uso racional da água, destinação adequada de efluentes, principalmente regiões em que o acesso a água é um fator limitante. </p></div>
                    <div className='fato-txtB'><p>De modo geral, a tecnologia é acompanhada de capacitação e colabora para a segurança hídrica e alimentar dentro do conceito da economia circular. Em relação aos fatores limitantes da tecnologia,  está a possibilidade de contaminação por microrganismos patogênicos, sendo necessário o manejo da tecnologia seguindo as boas práticas de uso do Bioágua  e  o monitoramento periódico da qualidade da água cinza tratada.</p> </div>
                </div>

                <div className='co-graphic'>
                    <div className='gra-label'>PANORAMA DOS PROJETOS FIDA</div>
                    <div className='casca-gra'>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>QUANTIDADE INSTALADA</div>
                                <div className='right'>494</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>NÚMERO DE BENEFICIADOS</div>
                                <div className='right'> 494 famílias</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                        <div className='graphic'>
                            <div className='label'>
                                <div className='left'>MUNICÍPIOS</div>
                                <div className='right'>21</div>
                            </div>
                            <div className='line-gra'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Description;