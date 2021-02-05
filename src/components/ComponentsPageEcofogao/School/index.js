import React from 'react';
import './index.css';

import { Button, Modal, Tooltip, Row, Col, Card } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

//projeto6
import img1 from '../../../utils/images/escolas/projeto6/image4.jpeg'
import img2 from '../../../utils/images/escolas/projeto6/image5.jpeg'

//projeto7
// import img3 from '../../../utils/images/escolas/projeto7/image3.png'
// import img4 from '../../../utils/images/escolas/projeto7/image4.png'
// import img5 from '../../../utils/images/escolas/projeto7/image5.png'
// import img6 from '../../../utils/images/escolas/projeto7/image6.png'
// import img7 from '../../../utils/images/escolas/projeto7/image7.png'
// import img8 from '../../../utils/images/escolas/projeto7/image8.jpeg'



class School extends React.Component {

  state = {
    visible1: false,
    visible2: false
  }
  desciption = {
      title: 'PROJETO FOGÃO FOGUETE',
      title2: 'PROJETO FOGÃO FOGUETE'
  }
  
  openModal() {
    this.setState({ visible1: true })
  }
  openModal2() {
    this.setState({ visible2: true })
  }
  render() {
    return (
      <div className='component-school-ecofogao'>
        <Row>
          <Col className='row-school'>
            <Card 
              title="Fogão Foguete"
              cover={<img src={img2}></img>}
            >
              <p>Conheça mais sobre o projeto</p>
            <Tooltip title="Ver mais" >
                <Button
                  onClick={() => this.openModal()}
                    className='button-1'
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
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2019 Secretaria de Estado da Educação da Ciência e da Tecnologia</p>
                    <p>Professor Rafael Leal da Silva ECI Senador Humberto Lucena – Cacimba de Dentro - PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>Dentro da perspectiva de abordagem do laboratório divergente, fez-se a escolha de uma prática que envolvessem os fogões foguetes. Eles seguem os princípios de designe de Winiarski (1982) e do trabalho conjunto de Still e Winiarski (2001) que auxiliam na eficiência enérgica em comparação com outros fogões que utilizam biomassas como fontes de energia. Os tamanhos das aberturas do fogão são importantes, pois devem ser dimensionadas. Caso as aberturas sejam pequenas, a biomassa não poderá ser queimada apropriadamente e a fumaça poderá retornar ao local da combustão. Do mesmo modo, se as aberturas forem grandes, o calor não será transmitido para a panela escapando através da exaustão. Neste trabalho, utilizamos o modelo de fogão foguete tipo joelho, conforme o esquema da figura 1.
                    </p>
                    <img className="image-school" src={img1}></img>
                    <p><b>Figura 1:</b> Esquema do fogão foguete tipo joelho. A base menor é composta por uma prateleira que serve como suporte para o combustível e uma entrada para o fluxo de ar. A parte maior e interna é a câmara de combustão onde o fluxo de ar se encontra com a chama. A parte de fora, neste exemplo, é de metal e, no topo, a saída para a chama e abertura para colocar a panela.
                    </p>
                    <br></br>
                    <p>Os resultados deste estudo evidenciam que o uso de biomassas como combustível em cozinhas eleva os níveis de CO no interior das residências. Esse tipo de uso é bastante comum em domicílios rurais no oeste do Quênia. Embora a concentração de CO seja menor em domicílios que usam fogões foguetes, elas permanecem altas no geral, sugerindo que eles podem não produzir benefício significativo para a saúde respiratória. A redução substancial de concentrações de CO pode ter consequências para a saúde como resultado dos níveis de exposição de CO. Essas consequências precisam de uma investigação mais aprofundada.
                    </p>
                    <p>Winiarski (1982) apresenta princípios para otimizar os fogões que utilizam madeira como combustível. O fogão foguete utilizados aqui, se baseiam neles. São eles:
                    </p>
                    <p>1) Isolar ao redor do fogo utilizando materiais leves e resistentes ao calor;
                    </p>
                    <p>2) Coloque uma chaminé isolante acima do fogo para redirecionar a fumaça;
                    </p>
                    <p>3) Aqueça as pontas das varas, gravetos e lenhas antes de colocá-las ao fogo para que façam chamas e não fumaça;
                    </p>
                    <p>4) Mais calor ou menos calor dependem de quantos gravetos são colocados no fogo;
                    </p>
                    <p>5) Manter um bom graveto sob o fogo, através das brasas. Evite permitir muito ar extra acima do fogo para esfriá-lo;
                    </p>
                    <p>6) Pouco graveto sendo puxado para o fogo resultará em fumaça e excesso de carvão;
                    </p>
                    <p>7) Mantenha o fluxo de ar para o fogo, o espaço dentro do fogão, através do qual o ar quente flui e a chaminé deve ser da mesma espessura;
                    </p>
                    <p>8) Usar uma grade sobre o fogo;
                    </p>
                    <p>9) Isolar o caminho do fluxo de calor do fogo ao redor da panela;
                    </p>
                    <p>10) Maximize a transferência de calor para a panela com aberturas de tamanho adequado. (WINIARSKI, 1982)
                    </p>
                    <br></br>

                    <p>Os fogões foguetes podem ser produzidos com os mais variados materiais de fácil acesso e baixo custo, tais como, latas de metal, barro, tijolos, madeira, etc. Gandigue e Nagarhalli (2018) apresentam uma revisão dos principais tipos de fogões foguetes e parâmetros que influenciam nas melhorias de eficiência em cada modelo.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>Sobre o Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O presente trabalho foi desenvolvido nas aulas de práticas experimentais em um município da Paraíba. Os resultados apresentados aqui, constituem uma pesquisa qualitativa com intuito de apresentar uma abordagem experimental de tópicos de Física que dialoguem com outras disciplinas e se conecte ao contexto social dos alunos do sertão paraibano. O projeto que deu origem a este trabalho faz parte das ações realizadas em parceria com o Kibbutz Lotan, em Israel, como projeto de formação continuada de professores no âmbito do programa Gira Mundo Israel financiado pelo Governo do Estado da Paraíba com finalidade de treinar professores da rede estadual em práticas exitosas para o ensino de ciências e convívio com o semiárido.
                    </p>
                    <p>Inicialmente, os alunos foram expostos aos conteúdos de termologia, calorimetria e termodinâmica e aos princípios de funcionamento do designer do fogão foguete nas aulas teóricas de Física. Foram distribuídas 2 seções de aulas experimentais no primeiro bimestre letivo de 2020, sendo que em cada seção era realizada 4 aulas experimentais. Os alunos se dividiram em 5 grupos e produziram o total de 5 fogões foguetes. A figura 2 exibe um dos fogões montados durante a aula. O material necessário para a produção dos fogões foi encontrado no próprio laboratório de ciências e os restos de resíduos sólidos (tijolos) encontrados no pátio da escola que estava passando por uma reforma.
                    </p>
                    <p>A construção dos fogões ocorreu na área externa da escola onde os alunos ficaram livres para coletar o material necessário, seguindo assim os princípios de Winiarski e os parâmetros geométricos de Dana (2009) e Okonkwo (2017) para otimizar o funcionamento do aparato.
                    </p>
                    <img className="image-school" src={img2}></img>
                    <p><b>Figura 2:</b> Fogão foguete construído com tijolos de restos da reforma da escola
                    </p>
                    <br></br>
                    <p>A construção do fogão foguete proporcionou um espaço de amplas discussões, as quais seriam difíceis serem abordadas com roteiros mais tradicionais de experimentos de física para o ensino médio. A metodologia levou ao tema das energias renováveis e não renováveis, discussões a respeito do efeito estufa causado, principalmente, por gases emitidos na queima de biomassas. Outra discussão levantada pelos próprios alunos foi a questão da eficiência que poderia ser alcançada usando parâmetros geométricos e conceitos da física.
                    </p>
                    <p>Nos relatórios finais da prática, os alunos atribuíam grande importância das práticas experimentais nesse estilo em que as teorias ganham aplicações práticas e simples. Outra observação relevante dos discentes foi o fato de que a interação em grupo também facilitou a assimilação dos conceitos da física, pois dúvidas teóricas e eventuais problemas com a montagem do fogão experimental foram solucionadas de um modo em que se sentiam confiantes.
                    </p>
                    <p>O experimento suscitou nos estudantes o caráter investigativo, levantando hipóteses sobre a lei da conservação da energia, transferência e propagação do calor. Quanto ao papel do docente nos trabalhos experimentais, é importante ressaltar o dever de ser um mediador, ofertando um roteiro de prática que seja simples e claro, isto é, retirando os passos demasiados complexos e por vezes desnecessários durante a montagem e execução do experimento. O professor, ao propor trabalhos experimentais que envolvam mais de um conceito físico, como é o caso aqui, não deverá cair no erro de fornecer respostas fáceis aos questionamentos e dificuldades. Em seu roteiro e atuação, tem o cargo de promover as descobertas dos alunos, os quais, por intermédio da interação social e conhecimento prévio, encontrarão suas respostas.
                    </p>
                    <p>A demonstração qualitativa da eficiência do fogão, em comparação com o tradicional fogão de três pedras, foi realizada pelos alunos de um modo prático e simples por comparação. Após a construção dos dois modelos de fogões (o de três pedras e fogão foguete), houve um debate reflexivo onde os grupos chegaram à conclusão que o melhor modo de testar a eficiência sem fazer cálculos, seria pesando, com auxílio de uma balança, quantidades iguais de madeira para os dois fogões. Desse modo, duas panelas iguais de alumínio, contendo quantidades iguais de água seriam postas simultaneamente nos dois fogões. Concluíram que o fogão que fizesse a água ferver primeiro e com menor quantidade de combustível queimado, seria o de melhor eficiência. Com o teste e afirmação positiva da hipótese comprovada, foi notório a empolgação dos alunos com o produto de seus esforços experimentais e teóricos.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>A funcionalidade do fogão foguete depende do tipo de material que é feito. Ele poderá ser fixo ou portátil dependendo para tanto de suas dimensões. Por ser de fácil execução e depender quase que simplesmente de um material isolante térmico para sua construção e fatores geométricos representa uma excelente opção para famílias carentes.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>1. Custos de instalação
                    </p>
                    <p>Os blocos de cimento utilizados são das proporções retangular de 10x20x08 cm. No modelo feito foram necessários em média 50 blocos de cimento para uma boa eficiência. Os blocos são de fácil transporte e manuseio, não há necessidade de concretagem podendo deixar os blocos livres caso haja necessidades de mudanças de posicionamento do fogão foguete. O valor para 50 blocos é de R$ 40,00.</p>
                    <p>O ideal para comunidades rurais é que se utilize os recursos naturais disponíveis no ambiente para a produção do fogão foguete. Os requisitos mais essenciais são a manutenção das dimensões geométricas obedecendo as fórmulas de Dana e Okonkwo para as aberturas e tamanhos de chaminé e câmara de combustão, e um revestimento isolante que resista ao calor.  O fogão poderá ser produzido com restos de latas, tijolos, barro e outros materiais de baixo custo e acessíveis, podendo chegar ao fim da produção com custo zero.</p>

                    <p>2. Custos de manutenção
                    </p>
                    <p>O modelo apresentado não exige grandes manutenções além da limpeza e possível ajustes de posições para um melhor aproveitamento das condições de circulação de ar para a câmara de combustão.</p>
                    <p>3. Tempo de vida útil da tecnologia
                    </p>
                    <p>Indeterminada.</p>
                    <p>4. Impactos ambientais
                    </p>
                    <p>O fogão foguete é mais eficiente do que os fogões à lenha utilizados em comunidades rurais do Brasil. Podendo ter eficiência energética superior a 30%, isso significa um menor consumo de biomassas reduzindo o impacto ambiental devido ao desmatamento para a produção de combustível, e economia para as populações mais carentes.  O fogão foguete pode reduzir em até 40% as emissões de gases de CO contribuindo para a diminuição dos impactos nos efeitos do aquecimento global e melhorando a saúde de seus usuários pois emite menor quantidade de gases nocivos à saúde humana.</p>
                    <p>5. Adaptação à realidade da agricultura familiar.
                    </p>
                    <p> É uma tecnologia simples, que reduz consideravelmente o uso de gás de cozinha. Pode ser gerada a combustão com lenha, carvão e gravetos. É vantajosa, pois exige menos consumo de biomassas para a produção de calor, desse modo, ajudando a reduzir o impacto ambiental decorrente deste consumo, o que o torna mais alinhado à realidade da agricultura familiar.</p>
                    
                  </Col>
                    <Row justify="space-around"><b>Você sabia que...</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>O desflorestamento é um problema em muitos países do sul da Ásia.  A substituição de fogões tradicionais de três bocas por fogões foguetes, reduziu em média o consumo de madeira de 3,68 toneladas para 2,706 toneladas por ano em cada casa. É grande a demanda por energia de pessoas vivendo em zonas rurais do Nepal dependentes de fontes de biomassas. Aproximadamente 64% da população do Nepal utiliza madeira como sua principal fonte de energia para cozinhar (SUBEDEE et al, 2017) 
                    </p>
                    <p>Fonte:<a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete'> https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete</a>
                    </p>
                    <br></br>
                    <p>Em algumas regiões do mundo, devido ao desmatamento e outros fatores, o principal combustível utilizado para os fogões é o esterco seco. Porém, ele é menos energeticamente eficiente do que a madeira e o carvão (WITT et al, 2006). Como resultado do protótipo de fogão foguete que usa como combustível o esterco, em comparação com outros fogões que não seguem os princípios de Larry Winiarski (1982), o artigo apresenta que no teste da fervura da água, o protótipo é mais energeticamente eficiente e reduziu as emissões de CO em 44% comparado com o fogo diretamente na madeira. Mostrando que é um protótipo promissor ao baixar os níveis de poluição e reduzindo os prejuízos econômicos do uso de grandes quantidades de combustível;
                    </p>
                    <p>Fonte: <a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete'>https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete</a>
                    </p>
                    <br></br>
                    <p>Ochieng et al. (2013) e seus colaboradores, investigaram a emissão de monóxido de carbono (CO) em 102 residências para comparar as diferenças de emissão entre três tipos de fogões utilizados nessa região, sendo os tradicionais fogões de três pedras e fogão foguete de barro. Fazendo medidas contínuas durante 48h nas cozinhas dessas residências, enquanto as concentrações da cozinha e pessoal de CO foram 7.3 e 6.5 ppm, respectivamente, para os fogões de três pedras, as concentrações correspondentes para os fogões foguetes foram 5,8 e 4,4 ppm. Levando-se em consideração a localização da cozinha, ventilação, status socioeconômico e concentração da mistura de combustível, o uso dos fogões foguetes de barro reduziram os níveis de CO associados à cozinha em 33% e os níveis pessoais em 42% comparado ao fogão de três pedras.
                    </p>
                    <p>Fonte: <a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete)'>https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete)</a>
                    </p>
                    <br></br>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col>
          {/* <Col className='row-school'>
            <Card 
              title="Fogão Foguete"
              cover={<img src={img2}></img>}
            >
              <p>Conheça mais sobre o projeto</p>
            <Tooltip title="Ver mais" >
                <Button
                  onClick={() => this.openModal()}
                    className='button-1'
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
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2019 Secretaria de Estado da Educação da Ciência e da Tecnologia</p>
                    <p>Professor Rafael Leal da Silva ECI Senador Humberto Lucena – Cacimba de Dentro - PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>Dentro da perspectiva de abordagem do laboratório divergente, fez-se a escolha de uma prática que envolvessem os fogões foguetes. Eles seguem os princípios de designe de Winiarski (1982) e do trabalho conjunto de Still e Winiarski (2001) que auxiliam na eficiência enérgica em comparação com outros fogões que utilizam biomassas como fontes de energia. Os tamanhos das aberturas do fogão são importantes, pois devem ser dimensionadas. Caso as aberturas sejam pequenas, a biomassa não poderá ser queimada apropriadamente e a fumaça poderá retornar ao local da combustão. Do mesmo modo, se as aberturas forem grandes, o calor não será transmitido para a panela escapando através da exaustão. Neste trabalho, utilizamos o modelo de fogão foguete tipo joelho, conforme o esquema da figura 1.
                    </p>
                    <img className="image-school" src={img1}></img>
                    <p><b>Figura 1:</b> Esquema do fogão foguete tipo joelho. A base menor é composta por uma prateleira que serve como suporte para o combustível e uma entrada para o fluxo de ar. A parte maior e interna é a câmara de combustão onde o fluxo de ar se encontra com a chama. A parte de fora, neste exemplo, é de metal e, no topo, a saída para a chama e abertura para colocar a panela.
                    </p>
                    <br></br>
                    <p>Os resultados deste estudo evidenciam que o uso de biomassas como combustível em cozinhas eleva os níveis de CO no interior das residências. Esse tipo de uso é bastante comum em domicílios rurais no oeste do Quênia. Embora a concentração de CO seja menor em domicílios que usam fogões foguetes, elas permanecem altas no geral, sugerindo que eles podem não produzir benefício significativo para a saúde respiratória. A redução substancial de concentrações de CO pode ter consequências para a saúde como resultado dos níveis de exposição de CO. Essas consequências precisam de uma investigação mais aprofundada.
                    </p>
                    <p>Winiarski (1982) apresenta princípios para otimizar os fogões que utilizam madeira como combustível. O fogão foguete utilizados aqui, se baseiam neles. São eles:
                    </p>
                    <p>1) Isolar ao redor do fogo utilizando materiais leves e resistentes ao calor;
                    </p>
                    <p>2) Coloque uma chaminé isolante acima do fogo para redirecionar a fumaça;
                    </p>
                    <p>3) Aqueça as pontas das varas, gravetos e lenhas antes de colocá-las ao fogo para que façam chamas e não fumaça;
                    </p>
                    <p>4) Mais calor ou menos calor dependem de quantos gravetos são colocados no fogo;
                    </p>
                    <p>5) Manter um bom graveto sob o fogo, através das brasas. Evite permitir muito ar extra acima do fogo para esfriá-lo;
                    </p>
                    <p>6) Pouco graveto sendo puxado para o fogo resultará em fumaça e excesso de carvão;
                    </p>
                    <p>7) Mantenha o fluxo de ar para o fogo, o espaço dentro do fogão, através do qual o ar quente flui e a chaminé deve ser da mesma espessura;
                    </p>
                    <p>8) Usar uma grade sobre o fogo;
                    </p>
                    <p>9) Isolar o caminho do fluxo de calor do fogo ao redor da panela;
                    </p>
                    <p>10) Maximize a transferência de calor para a panela com aberturas de tamanho adequado. (WINIARSKI, 1982)
                    </p>
                    <br></br>

                    <p>Os fogões foguetes podem ser produzidos com os mais variados materiais de fácil acesso e baixo custo, tais como, latas de metal, barro, tijolos, madeira, etc. Gandigue e Nagarhalli (2018) apresentam uma revisão dos principais tipos de fogões foguetes e parâmetros que influenciam nas melhorias de eficiência em cada modelo.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>Sobre o Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O presente trabalho foi desenvolvido nas aulas de práticas experimentais em um município da Paraíba. Os resultados apresentados aqui, constituem uma pesquisa qualitativa com intuito de apresentar uma abordagem experimental de tópicos de Física que dialoguem com outras disciplinas e se conecte ao contexto social dos alunos do sertão paraibano. O projeto que deu origem a este trabalho faz parte das ações realizadas em parceria com o Kibbutz Lotan, em Israel, como projeto de formação continuada de professores no âmbito do programa Gira Mundo Israel financiado pelo Governo do Estado da Paraíba com finalidade de treinar professores da rede estadual em práticas exitosas para o ensino de ciências e convívio com o semiárido.
                    </p>
                    <p>Inicialmente, os alunos foram expostos aos conteúdos de termologia, calorimetria e termodinâmica e aos princípios de funcionamento do designer do fogão foguete nas aulas teóricas de Física. Foram distribuídas 2 seções de aulas experimentais no primeiro bimestre letivo de 2020, sendo que em cada seção era realizada 4 aulas experimentais. Os alunos se dividiram em 5 grupos e produziram o total de 5 fogões foguetes. A figura 2 exibe um dos fogões montados durante a aula. O material necessário para a produção dos fogões foi encontrado no próprio laboratório de ciências e os restos de resíduos sólidos (tijolos) encontrados no pátio da escola que estava passando por uma reforma.
                    </p>
                    <p>A construção dos fogões ocorreu na área externa da escola onde os alunos ficaram livres para coletar o material necessário, seguindo assim os princípios de Winiarski e os parâmetros geométricos de Dana (2009) e Okonkwo (2017) para otimizar o funcionamento do aparato.
                    </p>
                    <img className="image-school" src={img2}></img>
                    <p><b>Figura 2:</b> Fogão foguete construído com tijolos de restos da reforma da escola
                    </p>
                    <br></br>
                    <p>A construção do fogão foguete proporcionou um espaço de amplas discussões, as quais seriam difíceis serem abordadas com roteiros mais tradicionais de experimentos de física para o ensino médio. A metodologia levou ao tema das energias renováveis e não renováveis, discussões a respeito do efeito estufa causado, principalmente, por gases emitidos na queima de biomassas. Outra discussão levantada pelos próprios alunos foi a questão da eficiência que poderia ser alcançada usando parâmetros geométricos e conceitos da física.
                    </p>
                    <p>Nos relatórios finais da prática, os alunos atribuíam grande importância das práticas experimentais nesse estilo em que as teorias ganham aplicações práticas e simples. Outra observação relevante dos discentes foi o fato de que a interação em grupo também facilitou a assimilação dos conceitos da física, pois dúvidas teóricas e eventuais problemas com a montagem do fogão experimental foram solucionadas de um modo em que se sentiam confiantes.
                    </p>
                    <p>O experimento suscitou nos estudantes o caráter investigativo, levantando hipóteses sobre a lei da conservação da energia, transferência e propagação do calor. Quanto ao papel do docente nos trabalhos experimentais, é importante ressaltar o dever de ser um mediador, ofertando um roteiro de prática que seja simples e claro, isto é, retirando os passos demasiados complexos e por vezes desnecessários durante a montagem e execução do experimento. O professor, ao propor trabalhos experimentais que envolvam mais de um conceito físico, como é o caso aqui, não deverá cair no erro de fornecer respostas fáceis aos questionamentos e dificuldades. Em seu roteiro e atuação, tem o cargo de promover as descobertas dos alunos, os quais, por intermédio da interação social e conhecimento prévio, encontrarão suas respostas.
                    </p>
                    <p>A demonstração qualitativa da eficiência do fogão, em comparação com o tradicional fogão de três pedras, foi realizada pelos alunos de um modo prático e simples por comparação. Após a construção dos dois modelos de fogões (o de três pedras e fogão foguete), houve um debate reflexivo onde os grupos chegaram à conclusão que o melhor modo de testar a eficiência sem fazer cálculos, seria pesando, com auxílio de uma balança, quantidades iguais de madeira para os dois fogões. Desse modo, duas panelas iguais de alumínio, contendo quantidades iguais de água seriam postas simultaneamente nos dois fogões. Concluíram que o fogão que fizesse a água ferver primeiro e com menor quantidade de combustível queimado, seria o de melhor eficiência. Com o teste e afirmação positiva da hipótese comprovada, foi notório a empolgação dos alunos com o produto de seus esforços experimentais e teóricos.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>A funcionalidade do fogão foguete depende do tipo de material que é feito. Ele poderá ser fixo ou portátil dependendo para tanto de suas dimensões. Por ser de fácil execução e depender quase que simplesmente de um material isolante térmico para sua construção e fatores geométricos representa uma excelente opção para famílias carentes.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>1. Custos de instalação
                    </p>
                    <p>Os blocos de cimento utilizados são das proporções retangular de 10x20x08 cm. No modelo feito foram necessários em média 50 blocos de cimento para uma boa eficiência. Os blocos são de fácil transporte e manuseio, não há necessidade de concretagem podendo deixar os blocos livres caso haja necessidades de mudanças de posicionamento do fogão foguete. O valor para 50 blocos é de R$ 40,00.</p>
                    <p>O ideal para comunidades rurais é que se utilize os recursos naturais disponíveis no ambiente para a produção do fogão foguete. Os requisitos mais essenciais são a manutenção das dimensões geométricas obedecendo as fórmulas de Dana e Okonkwo para as aberturas e tamanhos de chaminé e câmara de combustão, e um revestimento isolante que resista ao calor.  O fogão poderá ser produzido com restos de latas, tijolos, barro e outros materiais de baixo custo e acessíveis, podendo chegar ao fim da produção com custo zero.</p>

                    <p>2. Custos de manutenção
                    </p>
                    <p>O modelo apresentado não exige grandes manutenções além da limpeza e possível ajustes de posições para um melhor aproveitamento das condições de circulação de ar para a câmara de combustão.</p>
                    <p>3. Tempo de vida útil da tecnologia
                    </p>
                    <p>Indeterminada.</p>
                    <p>4. Impactos ambientais
                    </p>
                    <p>O fogão foguete é mais eficiente do que os fogões à lenha utilizados em comunidades rurais do Brasil. Podendo ter eficiência energética superior a 30%, isso significa um menor consumo de biomassas reduzindo o impacto ambiental devido ao desmatamento para a produção de combustível, e economia para as populações mais carentes.  O fogão foguete pode reduzir em até 40% as emissões de gases de CO contribuindo para a diminuição dos impactos nos efeitos do aquecimento global e melhorando a saúde de seus usuários pois emite menor quantidade de gases nocivos à saúde humana.</p>
                    <p>5. Adaptação à realidade da agricultura familiar.
                    </p>
                    <p> É uma tecnologia simples, que reduz consideravelmente o uso de gás de cozinha. Pode ser gerada a combustão com lenha, carvão e gravetos. É vantajosa, pois exige menos consumo de biomassas para a produção de calor, desse modo, ajudando a reduzir o impacto ambiental decorrente deste consumo, o que o torna mais alinhado à realidade da agricultura familiar.</p>
                    
                  </Col>
                    <Row justify="space-around"><b>Você sabia que...</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>O desflorestamento é um problema em muitos países do sul da Ásia.  A substituição de fogões tradicionais de três bocas por fogões foguetes, reduziu em média o consumo de madeira de 3,68 toneladas para 2,706 toneladas por ano em cada casa. É grande a demanda por energia de pessoas vivendo em zonas rurais do Nepal dependentes de fontes de biomassas. Aproximadamente 64% da população do Nepal utiliza madeira como sua principal fonte de energia para cozinhar (SUBEDEE et al, 2017) 
                    </p>
                    <p>Fonte:<a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete'> https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete</a>
                    </p>
                    <br></br>
                    <p>Em algumas regiões do mundo, devido ao desmatamento e outros fatores, o principal combustível utilizado para os fogões é o esterco seco. Porém, ele é menos energeticamente eficiente do que a madeira e o carvão (WITT et al, 2006). Como resultado do protótipo de fogão foguete que usa como combustível o esterco, em comparação com outros fogões que não seguem os princípios de Larry Winiarski (1982), o artigo apresenta que no teste da fervura da água, o protótipo é mais energeticamente eficiente e reduziu as emissões de CO em 44% comparado com o fogo diretamente na madeira. Mostrando que é um protótipo promissor ao baixar os níveis de poluição e reduzindo os prejuízos econômicos do uso de grandes quantidades de combustível;
                    </p>
                    <p>Fonte: <a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete'>https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete</a>
                    </p>
                    <br></br>
                    <p>Ochieng et al. (2013) e seus colaboradores, investigaram a emissão de monóxido de carbono (CO) em 102 residências para comparar as diferenças de emissão entre três tipos de fogões utilizados nessa região, sendo os tradicionais fogões de três pedras e fogão foguete de barro. Fazendo medidas contínuas durante 48h nas cozinhas dessas residências, enquanto as concentrações da cozinha e pessoal de CO foram 7.3 e 6.5 ppm, respectivamente, para os fogões de três pedras, as concentrações correspondentes para os fogões foguetes foram 5,8 e 4,4 ppm. Levando-se em consideração a localização da cozinha, ventilação, status socioeconômico e concentração da mistura de combustível, o uso dos fogões foguetes de barro reduziram os níveis de CO associados à cozinha em 33% e os níveis pessoais em 42% comparado ao fogão de três pedras.
                    </p>
                    <p>Fonte: <a target="_blanck" href='https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete)'>https://www.nucleodoconhecimento.com.br/fisica/fogao-foguete)</a>
                    </p>
                    <br></br>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col> */}
        </Row>
      </div>

    )
  }
}
export default School