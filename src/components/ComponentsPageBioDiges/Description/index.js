import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/5.png'
import Cor from '../../../utils/images/photos/Biodigestor/capa_Biodigestor.JPG'

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
        content: `Catavento são dispositivos que aproveitam a energia dos ventos. Eles podem ser usados para geração de energia elétrica ou para o bombeamento de água destinada ao armazenamento ou irrigação. É possível ainda que sejam utilizados para movimentar aeradores de tanques de tratamento de água ou na aquicultura.\n \r 
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
            <div className='biodigestor-description description'>
                <div className='desc-top'>
                    <div className='title-tech'>
                        <div className='logo-tech'>
                            <div className='casca-logo-tech'>
                                <img src={LogoTech} alt='logo da tecnologia'></img>
                            </div>
                            <div className='label-tech' >
                                <h2 className='labelA'>BIO</h2>
                                <h2 className='labelB'>DIGESTOR</h2>
                            </div>
                        </div>
                        <br></br>
                        <p>Biodigestor é um equipamento utilizado para a produção de biogás e de biofertilizante pelo processo de decomposição da matéria orgânica, como esterco animal (bovino, equino, suíno e de aves), restos vegetais (palha, grama, folhas) e excremento humano. O biogás produzido no biodigestor é formado, principalmente, por metano e gás carbônico e, devido a essa composição, pode ser utilizado para substituir o gás de cozinha tradicional (GLP), trazendo um retorno econômico para o usuário e impactando positivamente o meio ambiente, por se tratar de uma tecnologia sustentável.
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
                                className="modal-biodigestor"
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
                                    <p>Biodigestor é um equipamento utilizado para a produção de biogás e de biofertilizante pelo processo de decomposição da matéria orgânica, como esterco animal (bovino, equino, suíno e de aves), restos vegetais (palha, grama, folhas) e excremento humano. O biogás produzido no biodigestor é formado, principalmente, por metano e gás carbônico e, devido a essa composição, pode ser utilizado para substituir o gás de cozinha tradicional (GLP), trazendo um retorno econômico para o usuário e impactando positivamente o meio ambiente, por se tratar de uma tecnologia sustentável.
                                    </p>
                                    <b>Como é feito um biodigestor?</b>
                                    <p> Existem diversos modelos disponíveis no mercado, porém a escolha do modelo mais adequado de biodigestor dependerá da necessidade do produtor, considerando, por exemplo, a quantidade de matéria orgânica a ser processada, o custo de investimento e outros fatores. Os modelos de biodigestores mais conhecidos no mundo são os chineses, indianos e canadenses.
                                    </p>
                                    <div>
                                        O funcionamento dos biodigestores possui as seguintes etapas:
                                    </div>
                                    <ul>
                                        <li>Entrada do material orgânico;</li>
                                        <li>Tanque de fermentação;</li>
                                        <li>Saídas para o biogás e os resíduos processados.</li>
                                    </ul>

                                    <p>De acordo com as etapas mostradas, a estrutura física de um biodigestor modelo indiano é ilustrada a seguir: <br></br>
                                    <img src='' alt='img'></img>
                                    </p>
                                    <p>Existe uma entrada para os resíduos orgânicos, local onde o agricultor coloca diariamente dejetos de origem animal ou vegetal; um tanque de fermentação, que é onde a mágica da transformação de matéria orgânica em biogás acontece; e duas saídas: uma para coletar o biogás produzido no tanque de fermentação e o outro para retirar o resto de matéria orgânica que passou pela transformação. Com isso, o produtor pode recolher o biogás pela parte superior do biodigestor e utilizá-lo como gás no fogão da sua cozinha. O restante da matéria orgânica, chamada de biofertilizante, pode ser aplicado em sua plantação, agindo como defensivo agrícola, evitando pragas, doenças e insetos, e funcionando como repositor de matéria orgânica do solo, suprindo, principalmente, nitrogênio e fósforo, favorecendo dessa forma o crescimento saudável das plantas.
                                    </p>
                                    <b>Como é feito o biogás?</b>
                                    <p>Como citado, a mágica da produção do biogás ocorre no tanque de fermentação. Mas quem são os responsáveis por esse processo? Os mágicos desse espetáculo são chamados de microrganismos, seres vivos muito numerosos, mas tão pequenos que não podemos enxergar com nossos olhos, somente com a ajuda de um microscópio. Cada grupo desses microrganismos tem um trabalho especial nas etapas do processo de transformação da matéria orgânica em metano e dióxido de carbono, e para tal, é necessário fornecer um ambiente anaeróbio, isto é, sem oxigênio. Na ilustração a seguir é possível analisar as etapas envolvidas nesse processo e o que ocorre em cada uma delas.


                                    </p>
                                    <img img='' alt='img'></img>
                                    <p>
                                    É importante ressaltar que somente bactérias anaeróbias participam da fase de metanogênese (formação do metano), na qual é produzido o gás metano. Essas bactérias possuem uma sensibilidade a variações de temperatura, operando em uma temperatura entre 10 e 45°C.
                                    </p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                    <div className='justify'>
                        <div className='justify-label'>QUAL A JUSTIFICATIVA?</div>
                        <div className='justify-txt'>
                            <p>Considerando a missão e os desafios do FIDA e ressaltando a tecnologia em questão, tem-se que o biodigestor consiste em uma tecnologia sustentável e economicamente viável para produtores rurais com um retorno econômico e ambiental. O biofertilizante pode ser utilizado para potencializar as lavouras dispensando a necessidade de compra de fertilizantes industriais e o biogás produzido pode ser utilizado para substituir o gás de cozinha (GLP), o que representa uma economia de recursos financeiros para os usuários.</p>

                            <p>Além disso, a utilização do biodigestor pode contribuir para redução das emissões dos gases do efeito estufa quando comparado com fontes energéticas utilizadas pela agricultura familiar (como a queima de lenha), seguindo os objetivos da Convenção-Quadro das Nações Unidas em mitigar emissões de gases responsáveis pelas alterações climáticas e colaborando para reduzir problemas com questões como a desertificação do bioma Caatinga, com a busca de alternativas energéticas.

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
                                className="modal-biodigestor"
                                onCancel={() =>
                                    this.setState({
                                        visible2: false
                                    })
                                }
                            >
                                <div className='content-modal'>
                                    {/* <p>{this.desciption.content}</p> */}
                                    <p>O Fundo Internacional de Desenvolvimento Agrícola (FIDA) tem como objetivo auxiliar populações mais pobres de países em desenvolvimento. Em relação aos desafios que o FIDA busca superar, estão a pobreza extrema e má-nutrição, a escassez de água para consumo humano e uso produtivo, a baixa renda agropecuária, as mudanças climáticas e os riscos ambientais, as dificuldades de acesso a mercados, políticas e programas públicos com problemas de coordenação, as poucas atividades não agrícolas para famílias rurais, a falta de acesso às políticas e programas agrícolas e de bem-estar social, entre outros.
                                    </p>
                                    
                                </div>
                            </Modal>
                        </div>
                    </div>

                    <div className='casca-img-tech'>
                        <img src={Cor} alt=''></img>
                    </div>

                </div>


                <div className='desc-bottom'>
                    <div className='fatores-label'>FATORES QUE PROMOVEM OU LIMITAM A ADOÇÃO DA TECNOLOGIA</div>
                    <div className='fato-txtA'><p>Parâmetros como temperatura, pH, concentração de nutrientes, manutenção frequente e outros fatores, influenciam diretamente no desempenho do biodigestor e são fundamentais e úteis para o projeto e operação de digestores eficientes e na compreensão de como as condições adversas podem ocorrer e como contorná-las É importante enfatizar que os fatores citados são passíveis de controle externo no processo de digestão anaeróbia.</p></div>
                    <div className='fato-txtB'><p></p> </div>
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
                        className="modal-biodigestor"
                        onCancel={() =>
                            this.setState({
                                visible3: false
                            })
                        }
                    >
                        <div className='content-modal'>
                            {/* <p>{this.desciption.content}</p> */}
                            <b>Temperatura</b>
                            <p>
                                A temperatura é um fator importante para a produção do biogás, principal produto gerado no biodigestor. O processo pode ocorrer em uma temperatura entre 10° e 60°C, dependendo do tipo de bactéria.
                            </p>

                            

                            <p>O processo de produção de biogás não é afetado com o aumento da temperatura em poucos graus, porém, um decréscimo em alguns graus pode prejudicar a produção de metano. Vale enfatizar que a ação de bactérias acidificantes não é afetada pelo decréscimo da temperatura, e devido a isso, poderá ocorrer uma possível acumulação de ácidos tendo como consequência uma falha estrutural no biodigestor.
                            </p>



                            <p>
                                Durante as estações frias, pode ocorrer uma diminuição na produção de biogás devido a faixa de operação dos microrganismos envolvidos no processo de digestão anaeróbia. Os sistemas mesofílicos são bastante sensíveis quanto à questão de variação da temperatura ambiente, podendo ocorrer a parada ou diminuição da produção de biogás no período de inverno em climas mais frios.

                            </p>


                            <b>pH</b>
                            <p>O processo anaeróbio é afetado diretamente quando ocorrem pequenas oscilações nos valores de pH. Os microrganismos metanogênicos, os responsáveis pela produção de metano, são mais suscetíveis a essas variações de pH, do que os demais microrganismos.
                            </p>
                            <b>Local de coleta da biomassa</b>
                            <p>Em currais em que o chão é feito de terra, pode haver contaminação do biodigestor com outros materiais, e, influenciar na produção de biogás.
                            </p>

                            <b>Agitação da Biomassa</b>

                            <p>É necessário agitar o material orgânico para facilitar o contato dos microrganismos com a biomassa. Porém, agitar muito pode causar arraste da biomassa, e com isso, tem-se perda de eficiência de produção.</p>

                            <b>GUIA DE MANUTENÇÃO PREVENTIVA</b>

                            <br/><br/>
                            
                            <b>Manutenção do Equipamento</b>
                            
                            <p>A manutenção da estrutura do biodigestor é importante devido ao desgaste das partes integrantes do biodigestor, como por exemplo, válvulas, tubulações e tanques, que podem ocasionar vazamentos do biogás.</p>

                            <p>Como o biogás consiste é uma mistura de gases, em que o metano e dióxido de carbono estão em maiores quantidades. A concentração de metano  CH4 está entre 40 a 75%, variando de acordo com o tipo de biomassa empregada, e o dióxido de carbono (CO2) entre 25 a 40% .</p>

                            <p>O metano em condições normais de temperatura e pressão, consiste em um gás incolor, inodoro, inflamável e o vazamento desse gás em contato com o ar poderá ocorrer explosões, se manuseado em local fechado e na presença de uma fonte de ignição</p>

                            <p>O metano em sua forma gasosa pode ser tóxico ao ser humano, se inalado em altas concentrações pode causar vertigem e sonolência, asfixia, parada cardíaca, danos no sistema nervoso e outros danos à saúde. Por isso, deve-se evitar contato com o biogás caso ocorra vazamentos no biodigestor.
                            </p>

                            <b>Como identificar vazamentos no biodigestor?</b>

                            <p>O vazamento pode ser identificado caso o operador sinta um cheiro de ovo podre nas proximidades do biodigestor significa que há vazamentos no gasômetro e que devem ser eliminados.
                            </p>

                            <p>Outra forma de identificar o local do vazamento é utilizar espuma de sabão neutro, de forma abundante, com auxílio de uma esponja nas tubulações, conexões e válvulas que transportam o gás. Caso ocorra formação de bolhas, significa que há vazamento naquele local.</p>

                            <b>Providências a serem tomadas em caso de vazamentos:</b>
                            
                            <p>Providenciar ventilação nas redondezas das linhas de gás.</p>
                            
                            <p>Já em relação à propriedade inflamável que o biogás possui, deve-se evitar fumar e acender fósforos ou isqueiro. Também, deve-se evitar utilizar aparelhos elétricos, fontes de ignição e não acionar nenhum interruptor próximo a área do biodigestor.</p>

                            <p>Fechar as válvulas de fornecimento de gás, se possível.</p>
                            
                            <p>Os aparelhos queimadores, como o fogão, devem ser protegidos de correntes de ar contaminado com o biogás.</p>

                            <p>Caso ocorra vazamentos, e seja necessário ir ao local onde se encontra o gás, utilize máscara para proteção respiratória. Recomenda-se que se utilize respirador semifacial com suprimento de ar.</p>

                            <p>Devido aos riscos citados anteriormente, é fundamental a manutenção frequente para manter a conservação dos tanques, tubulações de máquinas e equipamentos, e dessa forma, garantir que não ocorram vazamentos que possam resultar em contaminação ambiental e danos à saúde humana e animal.</p>

                            <b>Como identificar que as peças do biodigestor necessitam passar por manutenção?</b>

                            <p>Como o biodigestor fica exposto ao sol e a maioria das partes integrantes do biodigestor são fabricadas de plástico, como mangueiras de borracha, canos PVC, válvulas e outros, com o passar dos anos, o sol provocará descoloração e ressecamento da tubulação, tornando a sua estrutura frágil. Diante disso, qualquer impacto externo pode acarretar trinca, quebra ou algum dano a estrutura da tubulação, válvula, mangueira e afins.                            
                            </p>
                                Dessa forma, é necessário realizar uma inspeção visual externa, verificando:
                            <ul>

                                <li>A condição física das partes integrantes, como mangueiras, canos PVC, válvulas e outros, do biodigestor;</li>
                                <li>Verificar se as conexões (joelho (cotovelo), Tê e outros) e tubos estão sempre bem conectados e se não há vazamento nessas;</li>
                            </ul>

                            <b>Manejo do Biodigestor</b>

                            <p>O manejo do biodigestor pode ser considerado um fator limitante pelo fato de requerer tempo e cuidado para que se tenha um ótimo funcionamento diário. De forma geral, o biodigestor sertanejo, que é do tipo batelada, funciona compreendendo quatro etapas, conforme apresentado a seguir.</p>

                            <ol type='a'>
                                <li>
                                Inicia-se o processo adicionando o resíduo orgânico e a água apenas uma vez na câmara de digestão. É necessário realizar a maceração (esmagar) para dissolver o material orgânico em água, no caso do estrume, sabe-se que esse tem a superfície externa mais dura, por isso necessita realizar tal processo, para melhorar a homogeneização; 
                                </li>

                                <li>Após o processo de alimentação da tecnologia, realiza-se o fechamento dessa câmara para que possa iniciar-se o processo de digestão;</li>

                                <li>Ao se concluir o processo de biodigestão, é necessário realizar a retirada do biofertilizante gerado;</li>

                                <li>Retorna a etapa (a).</li>
                            </ol>

                            <b>Quantidade de matéria:</b>

                            <p>O carregamento do biodigestor deve ser realizado de acordo com as especificações de projeto para evitar problemas posteriores. Por exemplo, a sobrecarga do biodigestor pode fazer com que ocorra uma acidificação do meio, isso ocorre devido a ação das bactérias responsáveis pela degradação dos polímeros grandes, por possuírem atividade com maior formação de ácidos orgânicos;</p>
                            <p>Em virtude disso, as quantidades de resíduos orgânicos e água a serem inseridos na caixa de entrada do biodigestor é de 1:1.  Para as condições do Semiárido, dois carrinhos de mão de esterco bovino por dia é uma quantidade suficiente para uma propriedade com cinco habitantes. Outro fator relevante está relacionado à necessidade de adição de água, pois ajuda a homogeneizar a biomassa, proporcionando  um ambiente adequado para que os organismos presentes acelerem o processo de fermentação. </p>

                            <b>Tempo de Operação:</b>

                            <p>A biomassa contida no biodigestor passa por um processo chamado retenção hidráulica que representa o tempo suficiente para ocorrer a fermentação para a geração do biogás (MACHADO, 2011). O tempo para esse processo ocorrer, varia de acordo com: o modelo do biodigestor, temperatura, umidade, entre outros fatores (MACHADO, 2011).  Em condições adequadas, o biodigestor pode gerar biogás com até 45 dias (QUADROS et al, 2007) .</p>

                            <b>Pontos cruciais para o manejo do biodigestor:</b>

                            <ol type='1'>
                                <li>Devido às condições térmicas de funcionamento do biodigestor, é fundamental que o local onde o equipamento esteja seja exposto ao sol em abundância;</li>

                                <li>O local onde o biodigestor estiver instalado deve ser mantido limpo para que se tenha acesso fácil ao equipamento;</li>

                                <li>Próximo ao biodigestor deve haver disponibilidade de água para facilitar o carregamento e a limpeza; </li>

                                <li>Substâncias como desinfetante, bactericidas, resíduos de antibióticos e água tratada com cloro (Cl) não podem estar presentes nos dejetos ou na água para alimentação do biodigestor, pois, possivelmente, promoverão a morte das bactérias no interior do biodigestor, tendo como consequência uma má performance na produção de biogás.</li>

                            </ol>

                        </div>
                    </Modal>

                </div>
            </div>
        )
    }
}

export default Description;