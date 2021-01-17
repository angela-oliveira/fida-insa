import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/ic_eolica.png'
import Cor from '../../../utils/images/EOLICA-CATAVENTO ZOOM.jpg'

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
        title: 'Energia Eólica',
        content: `Cataventos são dispositivos que aproveitam a energia dos ventos. Eles podem ser usados para geração de energia elétrica ou para o bombeamento de água destinada ao armazenamento ou irrigação. É possível ainda que sejam utilizados para movimentar aeradores de tanques de tratamento de água ou na aquicultura.\n \r 
        Para o bombeamento de água, o catavento deve ser instalado em conjunto com uma bomba do tipo pistão. Para fins de irrigação, é geralmente utilizado para bombear água para reservatórios posicionados numa cota maior do terreno. Do reservatório, a água pode então ser distribuída por gravidade a sistemas de irrigação por gotejamento, microaspersão ou superfície. É um sistema de alto custo de aquisição em comparação ao sistema de bombeamento elétrico, mas de baixo custo de operação e manutenção. Uma necessidade básica para a instalação do sistema é que na região tenha ventos acima de 2 m/s.
        Já no uso para geração de energia elétrica, os cataventos são acoplados a geradores elétricos (aerogeradores) que são ligados à rede pública de eletricidade, ou ainda utilizados para alimentar um banco de baterias. A energia gerada por esses dispositivos é então denominada de Energia Eólica. Embora o potencial brasileiro para a geração de energia eólica seja elevado, as regiões com maior percentual da agricultura familiar instalada não apresentam potencial para a geração de energia por grandes parques eólicos. No entanto, há potencial eólico suficiente para geração de energia elétrica a ser utilizada no processo produtivo da agricultura familiar com uso da irrigação.
        Como visto, são diversas as aplicações dos cataventos, que variam de acordo com a necessidade, principalmente em áreas remotas, onde são utilizados para geração doméstica de energia elétrica e para bombear água. Também são empregados em sítios turísticos ou naqueles longe das redes elétricas, para a geração de energia elétrica para operar todos os equipamentos de apoio e máquinas de processamento. Os aerogeradores de pequeno porte são utilizados para provimento de energia em escalas variadas, para atendimento desde uma comunidade isolada, até pequenos arranjos para gerar eletricidade em parques eólicos compostos por pequenos aerogeradores. Nestas escalas, os aerogeradores de pequeno porte são usados para suprimento de água, dessedentação de animais, irrigação e drenagem de várzeas, podendo ou não estar associados a outros dispositivos de geração e armazenamento de energia em sistemas híbridos, ou seja, sistemas com mais de uma fonte de energia. Formas de produção local, a exemplo, pequenos aerogeradores, poderiam vir também a representar uma solução definitiva para suas necessidades de energia elétrica ou ainda a utilização de cataventos no bombeamento de água do subsolo para o uso agrícola e doméstico.`
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
            <div className='description'>
                <div className='desc-top'>
                    <div className='title-tech'>
                        <div className='logo-tech'>
                            <div className='casca-logo-tech'>
                                <img src={LogoTech} alt='logo da tecnologia'></img>
                            </div>
                            <div className='label-tech' >
                                <h2 className='labelA'>ENERGIA</h2>
                                <h2 className='labelB'>EÓLICA</h2>
                            </div>
                        </div>
                        <br></br>
                        <p>Cataventos são dispositivos que aproveitam a energia dos ventos. Eles podem ser usados para geração de energia elétrica ou para o bombeamento de água destinada ao armazenamento ou irrigação. É possível ainda que sejam utilizados para movimentar aeradores de tanques de tratamento de água ou na aquicultura.
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
                                    {/* <p>{this.desciption.content}</p> */}
                                    <p>Cataventos são dispositivos que aproveitam a energia dos ventos. Eles podem ser usados para geração de energia elétrica ou para o bombeamento de água destinada ao armazenamento ou irrigação. É possível ainda que sejam utilizados para movimentar aeradores de tanques de tratamento de água ou na aquicultura.
                                    </p>
                                    <p>Para o bombeamento de água, o catavento deve ser instalado em conjunto com uma bomba do tipo pistão. Para fins de irrigação, é geralmente utilizado para bombear água para reservatórios posicionados numa cota maior do terreno. Do reservatório, a água pode então ser distribuída por gravidade a sistemas de irrigação por gotejamento, microaspersão ou superfície. É um sistema de alto custo de aquisição em comparação ao sistema de bombeamento elétrico, mas de baixo custo de operação e manutenção. Uma necessidade básica para a instalação do sistema é que na região tenha ventos acima de 2 m/s.
                                    </p>
                                    <p>Já no uso para geração de energia elétrica, os cataventos são acoplados a geradores elétricos (aerogeradores) que são ligados à rede pública de eletricidade, ou ainda utilizados para alimentar um banco de baterias. A energia gerada por esses dispositivos é então denominada de Energia Eólica. Embora o potencial brasileiro para a geração de energia eólica seja elevado, as regiões com maior percentual da agricultura familiar instalada não apresentam potencial para a geração de energia por grandes parques eólicos. No entanto, há potencial eólico suficiente para geração de energia elétrica a ser utilizada no processo produtivo da agricultura familiar com uso da irrigação.
                                    </p>
                                    <p>Como visto, são diversas as aplicações dos cataventos, que variam de acordo com a necessidade, principalmente em áreas remotas, onde são utilizados para geração doméstica de energia elétrica e para bombear água. Também são empregados em sítios turísticos ou naqueles longe das redes elétricas, para a geração de energia elétrica para operar todos os equipamentos de apoio e máquinas de processamento. Os aerogeradores de pequeno porte são utilizados para provimento de energia em escalas variadas, para atendimento desde uma comunidade isolada, até pequenos arranjos para gerar eletricidade em parques eólicos compostos por pequenos aerogeradores. Nestas escalas, os aerogeradores de pequeno porte são usados para suprimento de água, dessedentação de animais, irrigação e drenagem de várzeas, podendo ou não estar associados a outros dispositivos de geração e armazenamento de energia em sistemas híbridos, ou seja, sistemas com mais de uma fonte de energia. Formas de produção local, a exemplo, pequenos aerogeradores, poderiam vir também a representar uma solução definitiva para suas necessidades de energia elétrica ou ainda a utilização de cataventos no bombeamento de água do subsolo para o uso agrícola e doméstico.
                                    </p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                    <div className='justify'>
                        <div className='justify-label'>QUAL A JUSTIFICATIVA</div>
                        <div className='justify-txt'>
                            <p>Tanto o catavento destinado ao bombeamento de águas do subsolo, quanto aqueles destinados à produção de energia elétrica em pequena escala se adequam perfeitamente ao uso em comunidades agrícolas, pois fornecem meios necessários à subsistência humana, animal e vegetal. Deve-se também considerar que a diversificação da matriz energética rural é imprescindível, especialmente para ampliar o aproveitamento dos recursos naturais disponíveis nas propriedades rurais.</p>

                            <p>É importante também levar em consideração que o uso de tecnologias como essa melhoram a renda do agricultor, pois diminuem os custos de manutenção. Além disso, o catavento é uma tecnologia que não requer conhecimento técnico avançado e nem um custo de manutenção elevado para sua manutenção.

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
                                    {/* <p>{this.desciption.content}</p> */}
                                    <p>Tanto o catavento destinado ao bombeamento de águas do subsolo, quanto aqueles destinados à produção de energia elétrica em pequena escala se adequam perfeitamente ao uso em comunidades agrícolas, pois fornecem meios necessários à subsistência humana, animal e vegetal. Deve-se também considerar que a diversificação da matriz energética rural é imprescindível, especialmente para o aproveitamento dos recursos naturais disponíveis nas propriedades rurais. É importante também levar em consideração que o uso de tecnologias como essa melhoram a renda do agricultor, pois diminuem os custos de manutenção. O catavento é uma tecnologia que traz consigo a perspectiva do agricultor adquirir um recurso tecnológico importante que não requer conhecimento técnico avançado e nem apresenta um custo de manutenção elevado para sua manutenção.
                                    </p>
                                    <p>A possibilidade de rentabilizar os recursos financeiros do agricultor, evitando que ele invista em equipamentos que requeiram conhecimento técnico específico e elevado custo de aquisição, como é o caso de painéis fotovoltáicos, oportunizou a centenas de propriedades rurais a melhoria na qualidade de vida através da cessão de kits de catavento com sistemas de irrigação pelo FIDA. Atualmente no Semiárido brasileiro, os cataventos rurais mais utilizados são aqueles destinados ao bombeamento de água para consumo e irrigação. Na Paraíba, por exemplo, foram instalados 498 cataventos entre os anos de 2016 e 2019, uma parceria do Governo da Paraíba e o FIDA, em comunidades beneficiadas pelo Procase (Projeto de Desenvolvimento Sustentável do Cariri, Seridó e Curimataú), em 56 municípios do semiárido paraibano. Em geral, esses equipamentos são populares e quase sempre possuem o mesmo design, seguindo o modelo americano. Realizam o trabalho mecânico de bombear água e, por serem populares, após instalados, sua manutenção é fácil e com frequência espaçada.
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
                    <div className='fato-txtA'><p>O uso da energia eólica, seja para o bombeamento hidráulico de poços, seja para a geração de energia elétrica, apresenta diversas vantagens de usos bem como desafios. Ao contrário de outras fontes de energia como o petróleo e até mesmo a água, o vento é simplesmente o ar em circulação e, em função disso, não há chances de acabar um dia. Por isso, não há restrição para o uso e aproveitamento dos benefícios da energia eólica.</p></div>
                    <div className='fato-txtB'><p>Essa fonte energética é tão sustentável que não há emissão de quaisquer elementos que poluem o ar ou o meio ambiente. Se não bastassem a preservação do meio ambiente, a energia eólica é econômica. Na agricultura familiar o aproveitamento dos ventos ocorre principalmente com o uso de cataventos hidráulicos. A principal vantagem para o uso desses equipamentos na agricultura familiar do semiárido é que os cataventos funcionam sob condição de baixa e média pressão podendo, assim, ser utilizados para o bombeamento de fontes de água de pequena vazão.</p> </div>
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
                            {/* <p>{this.desciption.content}</p> */}
                            <p>O uso da energia eólica, seja para o bombeamento hidráulico de poços, seja para a geração de energia elétrica, apresenta diversas vantagens de usos e bem como desafios. Ao contrário de outras fontes de energia como o petróleo e até mesmo a água, o vento é simplesmente o ar em circulação e, em função disso, não há chances de acabar um dia. Por isso, não há restrição para o uso e aproveitamento dos benefícios da energia eólica. Essa fonte energética é tão sustentável que não há emissão de quaisquer elementos que poluem o ar ou o meio ambiente. Se não bastassem a preservação do meio ambiente, a energia eólica é econômica. Na agricultura familiar o aproveitamento dos ventos ocorre principalmente com o uso de cataventos hidráulicos. A principal vantagem para o uso desses equipamentos na agricultura familiar do semiárido é que os cataventos funcionam sob condição de baixa e média pressão podendo, assim, ser utilizados para o bombeamento de fontes de água de pequena vazão. Além disso, não requer a filtração da água para o seu bombeamento e permite a aplicação localizada da água, com um menor custo de investimento em relação aos demais sistemas de irrigação.
                            </p>
                            <p>Contudo, algumas dessas vantagens apresentadas podem tranquilamente também serem desvantagens, pois esse tipo de tecnologia é limitada a regiões com disponibilidade de ventos. Esse fato é ainda mais importante quando se trata do uso de cataventos para a irrigação, onde o bombeamento precisa ser mais constante. Além disso, o uso para bombeamento de águas salobras também aumenta os custos com a manutenção, pois o equipamento é constantemente afetado por incrustação e ferrugem. Assim, esse sistema é indicado para irrigação de áreas menores que 3 ha, o que limita a expansão das áreas produtivas.
                            </p>
                            <p>Em geral o custo x benefício é maior do que a instalação de eletrobombas. Nos testes realizados pela Embrapa em Pacajus-CE, o sistema apresentou eficiência para pequenas áreas. Na comparação com o sistema de bombeamento elétrico, a utilização do catavento apresentou um custo inicial maior. Mas, a médio e longo prazos, o sistema de irrigação utilizando energia eólica apresentou vantagens, uma vez que não é preciso pagar pela fonte de energia, a manutenção dos equipamentos também tem um custo menor, além de ser um sistema não poluidor do meio ambiente. Levando em conta o volume diário médio de água bombeado, a utilização de um conjunto eletrobomba de 1.0 CV monofásica seria suficiente para atender a demanda hídrica de uma área de 6.000 m2 irrigados. Contudo, deve ser levada em consideração a necessidade da existência de rede elétrica e, ainda, ao pagamento mensal da conta de energia. Qualquer que seja o sistema de acionamento da bomba, pequenos agricultores descapitalizados não podem arcar com as despesas de implantação.
                            </p>
                            <p>Mas não é apenas o processo de aquisição que pode ser considerado um desafio transponível para o uso dessa tecnologia por agricultores familiares no Semiárido brasileiro. Embora seja uma tecnologia popular e muito conhecida no meio rural, em geral o equipamento requer manutenção rotineira e o reparo deve ser feito por pessoal especializado. Isso pode dificultar a manutenção, especialmente em comunidades mais afastadas de zonas urbanas. Além disso, com o bombeamento de águas pesadas o equipamento é frequentemente afetado por incrustação de ferrugem. Assim, capacitar minimamente o agricultor para realizar a manutenção e executar pequenos reparos, é crucial para a independência tecnológica, empoderamento e, consequentemente a redução significativa de custos com assistência técnica.
                            </p>
                            <p>Um outro desafio, que se torna mais uma limitação da tecnologia, é que para seu uso, se faz necessário existir na localidade a disponibilidade permanente de ventos, especialmente quando a destinação do catavento é para o bombeamento de água para irrigação, o que exige um fluxo de ventos mais constante. Além disso, o uso do catavento para irrigação é comprovadamente eficaz para pequenas áreas produtivas, o que pode auxiliar na operação de pequenos produtores, mas é um desafio a ser considerado, quando se trata do seu uso em comunidades.
                            </p>
                        </div>
                    </Modal>

                </div>
            </div>
        )
    }
}

export default Description;