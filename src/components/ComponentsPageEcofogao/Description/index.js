import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/ic_ecofogao.png'
import Cor from '../../../utils/images/ecofogao_principal.jpg'

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
            <div className='ecofogao-analyze-description description'>
                <div className='desc-top'>
                    <div className='title-tech'>
                        <div className='logo-tech'>
                            <div className='casca-logo-tech'>
                                <img src={LogoTech} alt='logo da tecnologia'></img>
                            </div>
                            <div className='label-tech' >
                                <h2 className='labelA'>ECO</h2>
                                <h2 className='labelB'>FOGÃO</h2>
                            </div>
                        </div>
                        <br></br>
                        <p>O ecofogão é uma tecnologia composta por uma base de tijolos onde está embutida uma câmara de combustão fechada por uma placa metálica de ferro fundido com aberturas (bocas) para encaixe das panelas. Ao lado, tem-se o forno feito de ferro em formato retangular por onde circula externamente o calor produzido na câmara de combustão, seguindo para a chaminé junto com a fumaça.
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
                                className="modal-ecofogao"
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
                                    <p>O fogão ecológico ou ecofogão utilizado nos projetos financiados pelo FIDA tratam-se de um melhoramento do fogão a lenha tradicional, que consome menos lenha e tem acoplado um forno. Para o uso e confecção do fogão ecológico são usados menos recursos financeiros e menos recursos naturais, além de preservar uma das tradições camponesas, as comidas preparadas no forno à lenha.
                                    </p>
                                    <p>Em relação ao fogão a lenha tradicional, a câmara fechada do ecofogão possibilita um processo de produção de mais calor, aproveitando melhor a queima da madeira, tornando-se mais eficiente e com o mínimo de produção de fumaça, que é expelida por meio de uma chaminé de cerâmica até a parte de fora do telhado das casas, reduzindo o consumo de lenha e, consequentemente a emissão de fumaça.
                                    </p>
                                    <p>A tecnologia social dos ecofogões/fogões ecológicos é apresentada como a alternativa mais eficiente aos fogões a lenha tradicionais. Esta tecnologia foi empregada por vários projetos de energias renováveis e de fortalecimento da agricultura familiar, como exemplo no Projeto Paulo Freire (PPF) no Ceará, para facilitar e melhorar a vida do homem no campo e preservar mais a natureza.
                                    </p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                    <div className='justify'>
                        <div className='justify-label'>QUAL A JUSTIFICATIVA?</div>
                        <div className='justify-txt'>
                            <p>Na região Nordeste do Brasil, 85% das famílias da zona rural utilizam a lenha para o cozimento de alimentos. O modelo dos fogões ecológicos instalados nas comunidades através do CETRA (Centro de Estudos do Trabalho e de Assessoria ao Trabalhador) pelo Projeto Paulo Freire é baseado no ecofogão desenvolvido pela AS-PTA (Associação para a Agricultura Familiar e Agro­ecologia) para diminuir os efeitos prejudiciais causados pelo uso frequente dos fogões à lenha convencionais, pensando no desmatamento da vegetação nativa e nos problemas respiratórios oriundos da inalação da fumaça liberada pelo fogão.</p>

                            <p>O principal objetivo é tornar sustentável o uso da madeira, evitando os problemas de saúde, melhorando a qualidade de vida das famílias e evitando a emissão de gases causadores do efeito estufa.

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
                                className="modal-ecofogao"
                                onCancel={() =>
                                    this.setState({
                                        visible2: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    <p>Os fogões a lenha utilizados para a cocção, na sua maioria, possuem baixa eficiência energética, geralmente menor que 10%. Por ser incompleta, a queima da lenha potencializa emissões de dióxido de carbono, dióxido de enxofre, monóxido de carbono, dióxido de nitrogênio, além de compostos orgânicos particulados aos quais a exposição provoca doenças respiratórias.
                                    </p>
                                    <p>Pensando em aplicar e melhorar uma tecnologia para a inclusão social das populações com menor condição financeira, iniciou-se a propagação da utilização de tecnologias sustentáveis. As tecnologias sociais podem ser definidas como técnicas, produtos e métodos multiplicados, testados e comprovados, como parte da solução de uma demanda social e sua respectiva capacidade de solução e transformação, dentro da coletividade.
                                    </p>
                                    <p>Afora a necessidade de um manejo adequado para extração da lenha, o modo de preparação dos alimentos nesses fogões necessita de uma atenção especial, uma vez que causam danos à saúde, devido ao alto índice de emissão de fumaça. Outra preocupação relacionada ao uso de fogões a lenha é a relação da mulher que dedica em torno de 18 horas semanais na busca de lenha para o preparo dos alimentos, expostas a situações que trazem riscos de vida por acidentes.
                                    </p>
                                    <p>Pensando no meio ambiente, as formas tradicionais de cozinhar alimentos envolvem um alto consumo de combustíveis vegetais como lenha e carvão vegetal, resultando em uma combustão incompleta, onde são emitidos gases que agravam o efeito estufa e outros produtos que contribuem para o aquecimento global. Além disso, cerca de 30% da lenha consumida é coletada de forma não sustentável, resultando em emissões que equivalem a 2% das emissões globais de CO2 e no desmatamento causando perda de biodiversidade local.
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
                    <div className='fato-txtA'><p>Como fator que promove a adoção do ecofogão, destaca-se a sua maior eficiência em relação ao fogão a lenha tradicional por utilizar menos lenha e ser mais ecológico do ponto de vista da emissão de gases tóxicos e de efeito estufa, tornando-se uma tecnologia ideal para a convivência sustentável do agricultor com o ambiente onde vive. Considerando que o fogão é um dos objetos mais utilizados e importantes da nossa casa, pois é nele que se prepara a comida da família todos os dias, algumas agricultoras destacam que preferem usar o fogão à lenha para cozinhar em relação ao fogão a gás, pois dizem que a comida fica muito mais saborosa e ainda não precisam gastar dinheiro comprando gás. Este fato torna ainda mais relevante a vantagem do ecofogão em relação ao fogão a lenha tradicional.</p></div>
                    <div className='fato-txtB'><p>Por outro lado, as agricultoras ou seus filhos enfrentam algumas dificuldades para continuar usando o seu fogão a lenha, pois conseguir a madeira requer um trabalho pesado e cansativo, chegando a ser perigoso. Ultimamente, as mulheres precisam andar cada vez mais longe para juntar um feixe de lenha. Se já é trabalhoso ir longe, pior ainda é ter que trazer o peso para a porta de casa, processo muitas vezes feito de forma manual e até com a ajuda das crianças. O mais grave disso é que essa atividade repetidamente por dias está contribuindo ainda mais para diminuir as matas e a vegetação nativa. Usar lenha retirada em grande quantidade prejudica o equilíbrio do ecossistema e a população que vive e depende daquele local.</p> </div>
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
                        className="modal-ecofogao"
                        onCancel={() =>
                            this.setState({
                                visible3: false
                            })
                        }
                    >
                        <div className='content-modal'>
                            <p>Existem pontos positivos e negativos da tecnologia do Ecofogão, sendo positivo quando o equipamento elimina o escape de fumaça que, antes, circulava por dentro da cozinha e até da casa; utiliza menor quantidade lenha e consequentemente contribui para preservação do meio ambiente; emite menos gases tóxicos à atmosfera, diminuindo o efeito estufa; traz um benefício econômico pois diminui o consumo de gás de cozinha (GLP-Butano); diminui o risco de acidentes de trabalho no manejo; evita o trabalho exaustivo na extração de madeira do meio ambiente e não passa gosto de fumaça para as comidas, pois utiliza uma chaminé para jogar a fumaça pra fora da casa. Os pontos negativos são que, infelizmente, ainda utiliza lenha na geração de calor; produz de fuligem e CO2; ainda traz riscos de queimaduras e requer manutenção de limpeza da fuligem na chaminé quando entope.
                            </p>
                        </div>
                    </Modal>

                </div>
            </div>
        )
    }
}

export default Description;