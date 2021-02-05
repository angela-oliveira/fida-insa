import React from 'react';
import './index.css';

import { Button, Modal, Tooltip, Row, Col, Card } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

//projeto1
import img1 from '../../../utils/images/escolas/projeto1/image4.jpeg'
import img2 from '../../../utils/images/escolas/projeto1/image6.jpeg'
import img3 from '../../../utils/images/escolas/projeto1/image7.jpeg'
import img4 from '../../../utils/images/escolas/projeto1/image8.jpeg'
import img5 from '../../../utils/images/escolas/projeto1/image9.jpeg'
import img6 from '../../../utils/images/escolas/projeto1/image11.jpeg'
import img7 from '../../../utils/images/escolas/projeto1/image3.jpeg'

//projeto2
import img8 from '../../../utils/images/escolas/projeto2/image3.jpeg'
import img9 from '../../../utils/images/escolas/projeto2/image4.png'
import img10 from '../../../utils/images/escolas/projeto2/image5.jpeg'
import img11 from '../../../utils/images/escolas/projeto2/image6.jpeg'
import img12 from '../../../utils/images/escolas/projeto2/image7.jpeg'
import img13 from '../../../utils/images/escolas/projeto2/image8.jpeg'
import img14 from '../../../utils/images/escolas/projeto2/image9.png'
import img15 from '../../../utils/images/escolas/projeto2/image10.jpeg'
import img16 from '../../../utils/images/escolas/projeto2/image11.jpeg'
import img17 from '../../../utils/images/escolas/projeto2/image12.png'
import img18 from '../../../utils/images/escolas/projeto2/image13.png'

//projeto3
import img19 from '../../../utils/images/escolas/projeto3/image1.png'
import img20 from '../../../utils/images/escolas/projeto3/image2.png'
import img21 from '../../../utils/images/escolas/projeto3/image3.png'
import img22 from '../../../utils/images/escolas/projeto3/image4.png'
import img23 from '../../../utils/images/escolas/projeto3/image5.png'
import img24 from '../../../utils/images/escolas/projeto3/image6.png'
import img25 from '../../../utils/images/escolas/projeto3/image7.png'
import img26 from '../../../utils/images/escolas/projeto3/image8.png'

//projeto4
import img27 from '../../../utils/images/escolas/projeto4/image3.jpeg'
import img28 from '../../../utils/images/escolas/projeto4/image4.jpeg'
import img29 from '../../../utils/images/escolas/projeto4/image6.jpeg'



class School extends React.Component {

  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  }
  desciption = {
      title: 'PROJETO SER/TÃO PORTÁVEL',
      title2: 'ACENDEDOR DE FOGO SOLAR',
      title3: 'CAPTASOL - FOGÃO SOLAR',
      title4: 'FOGÃO SOLAR DE PAINEL TIPO CUBO'
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
  openModal4() {
    this.setState({ visible4: true })
  }
  render() {
    return (
      <div className='component-school'>
        <Row>
          <Col className='row-school'>
            <Card 
              title="Ser/tão Potável"
              cover={<img src={img7}></img>}
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
                className="modal-solar"
                onCancel={() =>
                    this.setState({
                        visible1: false
                    })
                }
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2019 Secretaria de Estado da Educação, da Ciência e da Tecnologia</p>
                    <p>Professor Ezequiel Sóstenes ECIT Pedro Bezerra Filho- Camalaú -  PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>O Dessalinizador Solar é uma tecnologia social de que tem proporcionado inúmeros benefícios socioeconômicos e ambientais: é uma tecnologia de baixo custo de implantação e manutenção; possibilita segurança hídrica através do fornecimento de água potável; promove a transformação social frente à gestão dos recursos hídricos locais; utiliza a energia solar (limpa e renovável) para a promoção de água potável; além de possibilitar a convivência com o semiárido. Resumidamente, o dessalinizador solar é uma tecnologia de fácil construção, o que favorece sua disseminação social; é de baixo custo, o que possibilita seu uso individual ou coletivo; e não causa impactos ambientais. O dessalinizador solar é uma tecnologia social de convivência com os longos períodos de estiagem, fornecendo às famílias água de boa qualidade. 
                    </p>
                    <p>O modelo de dessalinizador solar construído pelo professor Ezequiel Sóstenes e os estudantes do Projeto SERTÃO POTÁVEL, consiste em uma caixa construída com placas pré-moldadas de concreto, totalizando uma área de 4 m². A cobertura é composta de vidro, o qual possibilita a passagem da radiação solar (ondas curtas), mas inibe a saída das ondas longas para fora do dessalinizador solar. Com isso, aumenta-se a temperatura dentro do dessalinizador, fazendo com que ocorra a evaporação da água armazenada em uma “lona de caminhão” colocada como piso do dessalinizador. Em síntese, o que ocorre é que as altas temperaturas evaporam a água sobre a lona de caminhão; assim o vapor de água entra em contato com o superfície de vidro (que está a uma temperatura menor que o vapor) o que ocasiona a condensação do vapor de água, e com isso, produz-se uma água de qualidade para o consumo humano. Os dessalinizadores não só promovem a retirada dos sais dissolvidos na água, mas também elimina os microrganismo patógenos, especialmente as bactérias que causam doenças, a exemplo da Escherichia Coli. Neste sentido, as altas temperaturas (até 70°C) dentro do dessalinizador solar, elimina os patógenos, fazendo com que a água atendam as prerrequisitos de potabilidade. Por fim, o dessalinizador solar é uma tecnologia social que utiliza a energia solar (renovável e com grande potencial no Brasil) para a dessalinização e desinfecção de águas, o que tem contribuído para atender as necessidades hídricas das famílias rurais do semiárido paraibano.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>O Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O Projeto SERTÃO POTÁVEL, foi idealizado e realizado pelo professor Ezequiel Sóstenes, na Escola Cidadã Técnica Integral Pedro Bezerra Filho, no município de Camalaú – Paraíba, após o seu retorno do Programa GIRA MUNDO ISRAEL SEMIÁRIDO, do Governo do estado Paraíba. O Projeto visa contribuir com ações efetivas de impacto social na produção de água potável a ser consumida pelos estudantes da escola alvo do Projeto. Para muito além da escola, esta iniciativa detém o potencial de ajudar comunidades rurais que enfrentam dificuldades com armazenamento de água potável. O projeto teve grande repercussão na região do Cariri Ocidental, despertando o interesse de gestores municipais e escolas. 
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Recursos Necessários para a Implantação do Projeto</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Caixa d’água 250 l, mangueira cristal 3/4, mangueira cristal 3/4, adesivo poly tubes 75 g, registro de esfera pvc sold 25 mm joelho lr 20/1/2, joelho sold pvc 25 mm, luva sold pvc 25 mm, tubo sold pvc 25 mm, cap esg pvc 40 mm, adesivo pvc politubos 17g, arruela lisa galvanizada, luva sold 20 mm, registro de esfera pvc sold 25 mm, bucha giba, parafusos, joelho 90 esgoto 40, joelho 90 sold 20 mm, te pvc esgoto 40, veda calha, cimento, tubo esgoto 40 mm pvc, tubo pvc sold 20 mm, rodizio kmb rgb 1.1/4 preto, rodizio kmb rgb 1.1/4 cristal, chapa de alumínio lisa rolo, silicone vidro alumínio, lona lj 44 pt, veda calhas cinza 285 g alumínio perfil anodiz fs 6mts, alumínio perfil anodiz fs 6mts, chapa de alumínio lisa rolo, alumínio perfil anadoiz fs 6m, silicone incolor titan, rebite alum. new fix n-412, rebite alum. new fix n-308, barra cht em alumínio, ferro ca 60 4.2 mm, placa de sinalização 60 x 50 cm, vidro comum inc 4mm, mão de obra (pedreiro).
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Resultados Alcançados</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Com a implantação dos 10 (dez) dessalinizadores solar na ECIT Pedro Bezerra Filho, obtiveram-se os seguintes resultados:
                    </p>
                    <p>1) Uma produção média de 300 litros por dia, onde cada dessalinizador produziu em média de 10,7 litros de água potável por dia;
                    </p>
                    <p>2) Á água produzida, diariamente, foi suficiente para atender as necessidades de água potável de 150 pessoas distribuídas em 37 famílias rurais locais, isso no tocante ao que determina a ONU: cada indivíduo deve consumir 2 litros de água por dia;
                    </p>
                    <p>3) As análises laboratoriais das águas coletadas dos dessalinizadores mostraram que elas atenderam aos parâmetros físico-químicos e microbiológicos descritos por Leis Nacionais e pela ANVISA no tocante a potabilidade de águas;
                    </p>
                    <p>4) E possibilitou números benefícios socioeconômicos e ambientais: produz água potável suficiente para melhorar as condições de segurança hídrica; tem baixo custo de implantação e manutenção; facilita o acesso à água devido à proximidade dos dessalinizadores junto às residências; pode ser de uso individual ou coletivo; e é uma tecnologia social de fácil aprendizagem. Diante do exposto, o objetivo/resultado maior foi alcançado: utilizar a energia solar para fornecer água potável e com isso atender as necessidades hídricas de famílias rurais que convivem com a escassez de água potável.
                    </p>
                    <img className="image-school" src={img1}></img>
                  </Row>
                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>O espaço físico, nas escolas, para construção e instalação do dessanilizador  solar tem se destacado como m ponto de atenção. A qualidade da água desinfetada e dessanilizada agrada bastante e elimina problemas de consumo de água, nas escolas.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>1. Custos de instalação
                    </p>
                    <p>O custo médio de 01 (um) dessanilizador é de R$ 1.000,00.</p>
                    <p>2. Custos de manutenção
                    </p>
                    <p>A manutenção é realizada periodicamente apenas com a retirada do sal das gavetas</p>
                    <p>3. Tempo de vida útil da tecnologia
                    </p>
                    <p>Indeterminada.</p>
                    <p>4. Impactos ambientais
                    </p>
                    <p>Não existe impactos ambientais.</p>
                    <p>5. Adaptação à realidade da agricultura familiar.
                    </p>
                    <p>Este projeto transforma o cotidiano do homem do campo, principalmente nas localidade onde a água utilizada é apenas a  água de poços artesianos.</p>
                    
                  </Col>
                    <Row justify="space-around"><b>Site relacionado à Temática</b></Row>
                    
                  <br />
                  <Row justify="space-around">
                    <p><a target="_blanck" href='https://transforma.fbb.org.br/tecnologia-social/dessalinizadores-solar'>https://transforma.fbb.org.br/tecnologia-social/dessalinizadores-solar</a>
                    </p>
                    <img className="image-school"src={img2}></img>
                    <p>Nestas duas imagens, os dassanilizadores solar na propriedade do Sr Reginaldo, em Caraúbas (PB). Na imagem abaixo, a água produzida pela tecnologia social.
                    </p>
                    <img className="image-school"src={img3}></img>
                    <img className="image-school"src={img4}></img>
                    <p>Imagem do processo de montagem das placas de dão forma ao dessanilizador solar.
                    </p>
                    <img className="image-school"src={img5}></img>
                    <p>Imagem do rejeito retirada das gavetas dos dessanilizadores
                    </p>
                    <img className="image-school"src={img6}></img>
                    <p>Nas duas imagens, o projeto SER/TÃO Potável, na ECI Pedro Bezerra Filho - Camalaú
                    </p>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col>
          <Col className='row-school school-second'>
            <Card 
              title="Acendedor de Fogo Solar"
              cover={<img src={img8}></img>}
            >
              <p>Conheça mais sobre o projeto</p>
            <Tooltip title="Ver mais" >
                <Button
                    onClick={() => this.openModal2()}
                    className='button-1'
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                />
            </Tooltip>
            <Modal
                title={this.desciption.title2}
                visible={this.state.visible2}
                width={1000}
                footer={null}
                className="modal-solar"
                onCancel={() =>
                    this.setState({
                        visible2: false
                    })
                }
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2019 Secretaria de Estado da Educação da Ciência e da Tecnologia</p>
                    <p>Professor: Claudio Reinke ECIT Coronel Jacob Guilherme Frantz – São João do Rio do Peixe – PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>Desde os tempos mais remotos, a humanidade vem buscando fontes de energia para suprir as suas necessidades diárias. Várias foram as descobertas quanto a geração e o aproveitamento destas fontes, desde o fogo até a energia nuclear. Entretanto, muitas destas fontes energéticas são poluentes e afetam o equilíbrio ambiental do Planeta, liberando substâncias tóxicas como o CO2 e enxofre; além de constituírem fontes não renováveis a curto prazo, ou seja, são fontes com baixa capacidade produtiva e obrigam assim a procura por novas soluções para a geração de energia.
                    </p>
                    <p>Diante desse quadro a humanidade passa então a desenvolver pesquisas de busca por fontes energéticas que provocassem o mínimo de danos ao meio ambiente e que tivessem uma capacidade produtiva renovável dessa fonte em um curto espaço de tempo. Dessa maneira, foi descoberto que é possível se utilizar fontes das quais não fazia ideia até então, como a biomassa, a energia maremotriz, o hidrogênio utilizado em células de combustível, e, a energia solar, dentre outras.
                    </p>
                    <p>Uma solução viável para a demanda energética no Brasil, por exemplo, é a utilização da energia solar, visto que o país se localiza numa região do globo terrestre próxima à linha do Equador e que possui um excelente fluxo de incidência de radiação solar. Por simples comparação, a Alemanha, um dos países com maior percentual de utilização da energia solar, tem incidência solar 40% menor que a região com menor incidência solar no Brasil.
                    </p>
                    <p>A energia solar é compreendida como a capacidade de se converter a luz proveniente do sol em energia elétrica ou térmica por meio da utilização de painéis fotovoltaicos, de coletores solares e de concentradores solares por meio de lentes ou espelhos.
                    </p>
                    <p>O acendedor de fogo solar é um instrumento óptico construído a partir de uma lente de Fresnel extraída de um projetor de slides. Os raios luminosos provenientes de uma fonte distante como o sol são aproximadamente paralelos. Ao passar por uma lente convergente, esses raios paralelos convergem para um ponto específico, denominado de foco da lente. Quanto maior for a área da lente utilizada, maior será a intensidade luminosa que ela concentrará em seu foco. Dessa maneira, a temperatura de um corpo exposto ao foco de uma lente convergente de grande área pode atingir temperaturas muito elevadas, superando os 1000ºC, aproximadamente. A lente de Fresnel é um exemplo de lente convergente; ou seja, que concentra toda a radiação recebida em um único ponto comum próximo a lente. Nesse caso, quando exposta à radiação solar, a lente capta a luz e a concentra no foco da lente; gerando um ponto de alta concentração de energia na forma de luz e calor que por sua vez produz quase que instantaneamente a combustão de materiais como papel, papelão, madeira, palha, etc.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>Sobre o Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O protótipo do acendedor de fogo solar foi desenvolvido inicialmente dentro da perspectiva do Programa Gira Mundo Israel, que tem como seu objetivo principal a capacitação de professores da rede pública do Estado da Paraíba em um período de atividades de 4 semanas com foco na vida cooperativa e no desenvolvimento de habilidades por meio de trabalho prático, considerando o aprofundamento formativo nas temáticas relacionadas às Energias Renováveis, Tecnologias Alternativas e Manejo de Água e Irrigação através de aulas, vivências, workshops, visitas e outras atividades in loco por meio do Interdisciplinary Environmental Academic Course ofertado pelo Arava Institute for Environmental Studies, com sede no Kibbutz Ketura, deserto do Arava na região sul de Israel.
                    </p>
                    <p>Inicialmente, o protótipo visava servir de instrumento pedagógico de estudo das propriedades ópticas das lentes convergentes, e das transformações e aproveitamento da energia proveniente do sol junto aos educando da ECIT Coronel Jacob Guilherme Frantz; entretanto, durante as aulas observou-se a possibilidade de aplicação cotidiana do mesmo em diversas situações em que se necessite de uma fonte de aquecimento rápido e de baixo custo sem a utilização de combustíveis fósseis, não gerando a emissão de CO2, ou a necessidade de energia elétrica no local.
                    </p>
                    <p>Além da combustão, observou-se que é possível também com a utilização do acendedor solar, a transformação da matéria por meio do calor em diversas situações, como perfurar alguns materiais, derreter ou mesmo fundir alguns metais cujos pontos de fusão estejam abaixo de 600 ºC aproximadamente, como o estanho, chumbo e folhas de alumínio; o que de certo modo, pode ser utilizado em pequenos reparos ou atividades manufatureiras no âmbito de lares ou pequenas propriedades onde não houvesse a disponibilidade de recurso energéticos ou de instrumentos adequados para estas aplicações. Há também a possibilidade de adaptação do mesmo para o cozimento de alguns alimentos através da utilização de recipientes de cores escuras que absorvem melhor o calor.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>As possibilidades de uso desta forma de tecnologia estariam intimamente ligadas às comunidades ou famílias em situação de alta vulnerabilidade social, desprovidas de fontes energéticas convencionais; ou mesmo, para famílias e comunidades que adotam um sistema off-grid de aproveitamento das fontes alternativas de energia. Outra possibilidade de utilização do acendedor solar seria em práticas como acampamento, montanhismo ou atividades pedagógicas ligadas à sobrevivência em ambientes preservados com a utilização de instrumentos de captação e aproveitamento da energia solar.
                    </p>
                    <p>Alguns cuidados são necessários ao utilizar a lente de Fresnel quando exposta ao Sol; tais como, não deixar qualquer parte do corpo ficar exposta ao foco dessa lente; não tocar os objetos que ficaram expostos no foco dessa lente mesmo que por um curto intervalo de tempo; pois a temperatura obtida no foco da lente é muito alta, podendo causar queimaduras graves. Também não se deve olhar diretamente para o foco da lente, pois a luminosidade nessa região é muito intensa, sendo conveniente a utilização de óculos escuros durante o manuseio da mesma.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>As lentes de Fresnel podem ser encontradas em aparelhos retroprojetores antigos, muito utilizados em escolas e universidades antes das tecnologias modernas dos projetores multimídias, e também podem ser obtidas no mercado nacional com faixas de preço que variam de R$30,00 a R$120,00 a depender do tamanho da lente e do material utilizado na fabricação das lentes. Existem no mercado algumas lentes Fresnel compactas como um cartão de crédito, mais finas e muito baratas, custando menos de R$30,00 para serem carregadas no dia a dia como instrumento óptico de bolso. 
                    </p>
                    <p>O protótipo apresentado nesse projeto foi construído a partir do aproveitamento de uma lente de um retroprojetor que estava em desuso na Escola Estadual Coronel Jacob Guilherme Frantz e a base de madeira foi confeccionada a partir do reaproveitamento de restos de madeira tipo MDF de uma marcenaria da região; desse modo seu custo foi quase zero, sendo utilizado na sua fabricação alguns parafusos, cola de madeira e a energia para realização dos cortes das peças de madeira.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Você sabia que...</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>“A matriz energética mundial é composta, em sua maioria, por fontes não renováveis de energia e os combustíveis fósseis como petróleo, carvão mineral e gás natural ainda correspondem a aproximadamente 81% da energia utilizada em todo o mundo.”
                    </p>
                    <p><a target="_blanck" href='https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-matriz-energetica.htm'>https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-matriz-energetica.htm</a>
                    </p>
                    <br></br>
                    <p>“Cerca de 30% da radiação que recebemos do sol na atmosfera superior é refletida de volta para o espaço. O restante é absorvido pelas nuvens, oceanos e as massas de terra. No entanto, mesmo nestas condições, a energia que nosso planeta recebe a partir de uma só hora de exposição ao sol é igual à quantidade de energia que os seres humanos usam em um ano inteiro”.
                    </p>
                    <p><a target="_blanck" href='https://demaperenovaveis.com.br/top-10-curiosidades-sobre-energia-solar-fotovoltaica'>https://demaperenovaveis.com.br/top-10-curiosidades-sobre-energia-solar-fotovoltaica</a>
                    </p>
                    <br></br>
                    <p>“O Estádio do Mineirão, localizado na cidade de Belo Horizonte, foi o primeiro estádio do mundo que sediou uma partida da Copa do Mundo (Colômbia x Grécia, em 14 de junho de 2014) operando com uma usina solar. A usina, instalada no topo do estádio, possui 6 mil painéis que ocupam uma área de 11,5 mil m², tendo capacidade de produção de 1,42 MWp. Destas, apenas 10% é usada no estádio, enquanto o resto é distribuído pelo Estado através da rede elétrica da CEMIG (Companhia de Energia Elétrica de Minas Gerais)”.
                    </p>
                    <p><a target="_blanck" href='https://blog.bluesol.com.br/curiosidades-sobre-energia-solar/'>https://blog.bluesol.com.br/curiosidades-sobre-energia-solar/</a>
                    </p>
                    <br></br>
                  </Row>
                    <Row justify="space-around"><b>Imagens do Protótipo Construído</b></Row>

                    <br />
                  <Row justify="space-around">

                    <img className="image-school-p"src={img9}></img>
                    <img className="image-school-p"src={img10}></img>
                  </Row>
                  <Row justify="space-around">

                    <img className="image-school-p"src={img11}></img>
                    <img className="image-school-p"src={img12}></img>
                  </Row>
                  <Row justify="space-around">

                    <img className="image-school-p"src={img13}></img>
                    <img className="image-school-p"src={img14}></img>
                  </Row>
                  <br />
                  <br />
                  <br />
                    <Row justify="space-around"><b>Apresentação do Protótipo durante o Seminário Final do Programa Gira Mundo Israel</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <img className="image-school-p"src={img15}></img>
                    <img className="image-school-p"src={img16}></img>
                  </Row>
                  <Row justify="space-around">

                    <img className="image-school-p"src={img17}></img>
                    <img className="image-school-p"src={img18}></img>
                  </Row>
                  <Row justify="space-around"><b>Links de pesquisas:</b></Row>

                  <Row justify="space-around">
                    <p><a target="_blanck" href='http://demonstracoes.fisica.ufmg.br/artigos/ver/91/9.-A-lente-de-Fresnel'>http://demonstracoes.fisica.ufmg.br/artigos/ver/91/9.-A-lente-de-Fresnel</a>
                    </p>
                    <p><a target="_blanck" href='https://www.aventureirostore.com.br/produtos/lente-de-fresnel/'>https://www.aventureirostore.com.br/produtos/lente-de-fresnel/</a>
                    </p>
                    <p><a target="_blanck" href='https://youtu.be/jrje73EyKag'>https://youtu.be/jrje73EyKag</a>
                    </p>
                    <p><a target="_blanck" href='https://youtu.be/Xz7LmeywzH8'>https://youtu.be/Xz7LmeywzH8</a>
                    </p>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col>
          <Col className='row-school'>
            <Card 
              title="Captasol - Fogão Solar"
              cover={<img src={img19}></img>}
            >
              <p>Conheça mais sobre o projeto</p>
            <Tooltip title="Ver mais" >
                <Button
                    onClick={() => this.openModal3()}
                    className='button-1'
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                />
            </Tooltip>
            <Modal
                title={this.desciption.title}
                visible={this.state.visible3}
                width={1000}
                footer={null}
                className="modal-solar"
                onCancel={() =>
                    this.setState({
                        visible3: false
                    })
                }
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2018-2019 Secretaria de Estado da Educação da Ciência e da Tecnologia</p>
                    <p>Professor Helder Pablo Justino de Lima ECI Auzanir Lacerda - Patos - PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>O mundo desenvolvido vem optando pela utilização das energias limpas e  renováveis, dada a notoriedade da questão ambiental, que tem alcançando um caráter  essencial quando se procura meios/métodos de atenuar os efeitos do aquecimento  global. Nesse sentido a energia solar tem ganho um destaque especial, com todos os  países criando programas de incentivo a seu uso, abrindo linhas de financiamento com  pequenas taxas de juros e subsidiando os preços de aquisição dos equipamentos. O  Brasil, por sua vez, agora, que despertou para os elevados potenciais naturais com  relevante incidência solar, sendo assim e dentro dessa perspectiva, no tocante a  utilização de energia limpa, renovável e não-poluente criou-se a ideia de construção e  utilização do fogão solar. VIDAL; VASCONCELOS (2002) destacam que o aproveitamento da energia gerada pelo sol, inesgotável na escala terrestre de tempo,  tanto como fonte de calor quanto de luz, é hoje, sem sombra de dúvidas, uma das  alternativas energéticas mais promissoras. E quando se fala em energia, deve-se lembrar  que o sol é responsável pela origem de praticamente todas as outras fontes de energia.  Em outras palavras, as fontes de energia são, em última instância, derivadas da energia  do sol. 
                    </p>
                    <p>Os povos, da mais remota antiguidade, valiam-se da energia do sol para aquecer  água, secar frutas e cozer vegetais. Do mesmo modo, que, hoje, a utilizamos, contudo de  maneira mais eficaz. Na construção do CAPTASOL - fogão solar foi utilizado como molde uma sucata de antena parabólica apresentando uma área de reflexão em torno de  1,0 m². O protótipo tem o formato de uma antena parabólica e foi colocado sobre o  mesmo todo o material para moldagem, a princípio papel alumínio e, em seguida,  espelhos, porém foi agregado um suporte de chapa de ferro de 4 mm de diâmetro para  dar uma maior resistência ao modelo, que devido sua área se fez necessário uma maior  resistência para otimizar seu processo de obtenção. A estrutura de fixação para  acomodação da panela de cocção foi construída utilizando-se ferros, de sucatas na  forma retangular de 3 e 4 mm de diâmetro, o que promoveu a aproximação da panela ao  foco de incidência de calor no fogão, conforme figuras 1 e 2. 
                    </p>
                    <img className="image-school"src={img21}></img>
                    <p><b>Figura 1:</b> Esquema do CAPTASOL – fogão solar. A estrutura parabólica é a coletora dos raios  solares que ao incidirem na mesma concentram-se e refletem em seu foco a uma temperatura bastante  elevada. A parte maior é a onde se coloca a panela para cozer os alimentos.
                    </p>
                    <br></br>
                    <img className="image-school"src={img23}></img>
                    <p><b>Figura 2:</b> Representação da incidência solar do CAPTASOL – fogão solar.
                    </p>
                    <p>Ao captar a energia do sol, o fogão converte a irradiação solar em calor para o  cozimento de alimentos, assim o uso dessa tecnologia social busca reduzir o uso do gás  de cozinha, bem como da utilização de lenha nas comunidades rurais, o que vem  contribuir para a preservação da natureza, a diminuição da emissão de gases, permitindo  o aumento da capacidade de remoção do dióxido de carbono da atmosfera, bem como a  redução das concentrações deste gás de estufa na atmosfera.
                    </p>
                    <p>É interessante lembrar que áreas secas, semiáridas e áridas sofrem com sede e  fome devido à severidade do sol, o que produz, nestas, a saída de suas localidades. Portanto, a utilização de fogões solares nesses locais pode atenuar e/ou até mesmo  reverter essa situação permitindo aos povos dessas terras uma melhoria na condição e  condução de vida.
                    </p>
                    <p>Vale ressaltar um dado importante obtido por Bezerra (2001), 30% da madeira  retirada da caatinga do nordeste brasileiro transformam-se em lenha para cozimento de  alimentos. Com a utilização dos fogões solares será possível economizar até 55% dessa  lenha evitando o desmatamento. Acrescento, também, que além do desmatamento evita se a produção de fumaça na queima da lenha, diminuindo, assim, ainda, a emissão dos  gases. Logo evidencia-se que o uso dos fogões solares apresentam virtuosas vantagens,  dentre elas a disponibilidade de energia gratuita e abundante, além da ausência de  chamas e fumaça, o que evita poluição ambiental, bem como perigo de explosão e  incêndios, dentre outras.
                    </p>
                    <p>É importante destacar, aqui, a posição privilegiada do Brasil no tocante a  incidência solar, o que o coloca como grande potência energética nesse sentido devido  sua posição geográfica, o que o torna bastante pertinente a utilização de equipamentos  solares, mas especificamente, neste caso, os fogões solares. O país apresenta representativo potencial solar com disponibilidade equivalente a 1,13 x 1010 GWh, em quase todo o ano, como destaque para a região Nordeste, como mostra as figuras 3 e 4.  
                    </p>
                    <img className="image-school"src={img26}></img>
                    <p><b>Figura 3:</b> Variação da radiação solar no Brasil. Fonte: ANEEL (2018).
                    </p>
                    <p><b>Figura 4:</b> Índice de irradiação da região Nordeste. Fonte: Adaptado de Global Solar Atlas (2018).
                    </p>
                    <br></br>
                    <p>Por conseguinte, os resultados deste estudo evidenciam que técnicas que  utilizam a incidência solar como fonte de energia, como o caso do fogão solar, ocupem  lugar na sociedade, seja ela, urbana ou rural, é preciso, antes de tudo, propagar seu uso,  demonstrando, portanto, suas vantagens e desvantagens, assim como os cuidados que  devem ser a ele conferidos para que este possa, realmente, ser executado  adequadamente. 
                    </p>
                    <p>Segundo Ramos (2011) as principais vantagens do uso da energia solar estão  relacionadas a não poluição durante seu uso; as centrais solares necessitam de  manutenção mínima; fogões solares são a cada dia mais potentes; o custo de  implantação é cada vez menor; excelente para lugares de difícil acesso. As principais  desvantagens são a variação na produção de acordo com o clima e formas de  armazenamento pouco eficientes.
                    </p>
                    <p>Sendo assim, o uso dos fogões solares no cozimento de alimentos torna-se uma  alternativa ao uso do botijão de gás liquefeito de petróleo (GLP) que apresenta impactos  negativos nas dimensões social, econômica e ambiental, bem como a alternativa a ele - a  lenha, que, também, tem impactos negativos tanto no campo ambiental quando no da  saúde humana.
                    </p>
                    <p>Os fogões solares podem ser produzidos com os mais variados materiais de  fácil acesso e baixo custo, tais como, carcaças de antenas parabólicas, caixas de madeira  e/ou papelão, espelhos, papeis alumínio, filme, vidraçaria transparente, suportes de  ferro, tinta fosca-preta etc.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>Sobre o Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>A energia solar é vasta, abundante e durável, renovada a cada dia, não polui e  nem agride o ecossistema. Considerando esse cenário e a dificuldade, muitas vezes, encontrada pelas populações de baixa renda de nossa comunidade escolar, bem como as  demais populações que se enquadram nessa categoria para comprar um botijão de gás  (GLP) e/ou mesmo a lenha, substituta ao gás de cozinha, que construímos o projeto  CAPTASOL – fogão solar sob a perspectiva de estarmos sendo agentes propulsores,  modificadores e disseminadores de uma forma de vida sustentável, que vê na captação de energia proveniente do sol, para o cozimento de alimentos e aquecimento de água, um novo modelo de vida e uma facilitadora na produção de insumos que possam a vir  produzir algo concreto e efetivo, tendo sido as aulas sobre energias renováveis,  sustentabilidade e a construção desses fogões solares, essa ferramenta. Com esse  entendimento e por termos uma incidência solar intensa em nossa cidade, Patos-PB,  praticamente que os 365 dias do ano, abordamos em nosso estudo a obtenção de energia  solar e, trabalhamos seus tipos, captação, transformações, aliadas a uma vida  sustentável, o que nos propiciou o desenvolvimento e construção de um fogão solar com  materiais recicláveis para uso em nossa escola no aquecimento de água e cocção de  alimentação, assim como, para os estudantes, que, em suas residências, junto a suas  famílias pudessem fazer o uso do mesmo. Portanto, explorar o panorama geral das  potenciais aplicações da energia solar térmica e fotovoltaica, enfatizando aquelas que  melhor se adaptam às condições e necessidades da nossa cidade, bem como da nossa  unidade escolar foi nosso objetivo.
                    </p>
                    <p>Partindo, então, dos fundamentos físicos mais relevantes até os avanços  tecnológicos mais atuais e, assim, produzir conhecimento efetivo sobre energias  renováveis, na produção e confecção de um fogão solar reciclável, onde o educando (assim como os que com ele convivem e outros) obtenha as capacidades e habilidades  necessárias para definir e projetar, de forma elementar, esses sistemas energéticos que  aproveitem a energia radiante. Sendo de caráter social, cultural e mesmo econômico, o  seu desenvolvimento pode trazer benefícios diretos para a sociedade, ou para uma  pequena população (comunidade escolar), ao demonstrar e/ou encaminhar meios e  formas para uma necessidade então definida: a captação de energia – limpa, alternativa  e sustentável – solar, pois, utilizamos está para o cozimento de alimentos e aquecimento de água, a partir da aquisição do conhecimento em aulas sobre energias renováveis e a  construção do CAPTASOL (fogão solar reciclável). 
                    </p>
                    <p>É preciso pontuar que nossas atividades, após o retorno da captação em Israel pautaram-se na energia solar, na preservação do meio ambiente e na construção dos  fogões solares, tendo sido desenvolvidas aulas e pequenas oficinas com os discentes e  docentes (estes que promoveram e apoiaram o aplicação do projeto em toda nossa  comunidade), para o entendimento da construção do fogão solar reciclável, bem como  sua aplicabilidade, entendendo que esta forma de captação de energia para o cozimento  de alimentos e outros apresenta muitas vantagens sobre as outras formas de obtenção de  energia, como: não ser poluente, não influir no efeito estufa, ser uma tecnologia  totalmente limpa, compete com outro fogões que usa a queima da mateira como  combustível, ou seja, evita a poluição do ambiente, ainda contribui contra  desmatamento de árvores para uso de sua lenha pelos familiares dos estudantes, assim  como por moradores locais. A construção do fogão ficou condicionada ao recolhimento  dos materiais descartados na própria escola, como sucata de antena parabólica, tintas e,  ainda ao material recolhido pelos estudantes e professores em suas residências, sendo  estes, espelhos, papeis alumínio, sucatas e chapas de ferro, entre outros. Sendo, assim,  ao unirmos todas essas características ao nosso projeto estamos utilizando a energia  proveniente do sol sob um impacto positivo no campo socioambiental, já que para a sua  implantação não há a necessidade de grande infraestruturas, bem como estaremos  utilizando espaços da escola até então pouco aproveitado, para usos como salas de aula.
                    </p>
                    <p>Durante a aplicação das informações apreendidas em nossa escola, também, em  outros momentos houve a colaboração, bem como a participação de integrantes que  participaram da formação em Israel, o que promoveu uma real efetivação de  conhecimentos e ajuda mútua, experiência que rendeu frutos para propagação de outros  projetos, como, também, de uma rede de divulgação entre as instituições do nosso  estado. Assim, foi possível ampliarmos a nossa prática para a comunidade, escolas da  rede estadual (nossas parceiras) e municipal (em breve), bem como parcerias que  possam vir a serem firmadas com as instituições federais, universidades e empresas,  promovendo, assim, diversos benefícios para a sociedade, entre eles: melhoria na  eficiência dos sistemas e inclusão social, tornado nossa comunidade escolar referência  na utilização dessa prática, energia solar – fogão solar, demostrado na figura 6. Logo,  destaco ser fundamental abraçar essa ideia.
                    </p>
                    <img className="image-school"src={img25}></img>
                    <p><b>Figura 4:</b> Mostra do uso da tecnologia social – fogão solar na comunidade escolar.
                    </p>
                    <br></br>
                    <p>Destacar, ainda, que a construção do fogão solar proporcionou um espaço de  amplas discussões, as quais seriam difíceis serem abordadas com roteiros mais  tradicionais de experimentos de física para o ensino médio. A metodologia levou ao  tema das energias renováveis e não renováveis, discussões a respeito do efeito estufa  causado, principalmente, por gases emitidos na queima de combustíveis fosseis e biomassas. Outra discussão levantada pelos próprios alunos foi a questão da eficiência  que poderia ser alcançada usando parâmetros geométricos e conceitos da física.
                    </p>
                    <p>Por esse motivo, o fogão solar mostra-se como uma ferramenta viável para a cozimento de alimentos e aquecimento de água, o que foi evidenciado em nossa escola epor algumas famílias dos nossos estudantes, pretendendo que seja estendido as  comunidades carentes, pois apresenta resultados favoráveis como facilidade de uso e  confecção, podendo ser utilizado para cozinhar e assar alimentos simples (bolos, pães,  macarrão, arroz, fervura de água), construído com materiais de baixo custo e  melhorando o bem estar de quem o utiliza. Além disso, destacar que a incorporação  desta tecnologia social é sustentável e, contribui de forma satisfatória com os aspectos  econômicos, sociais e ambientais, uma vez que utiliza fonte renovável, abundante e  inesgotável. Ressalto, também, que o fogão solar é uma alternativa ao fogão  convencional, seja por uso de GLP ou lenha, contudo não pode ser um substituto, pois  este depende do clima e deve ser utilizado fora de casa para seu funcionamento, não  podendo ser utilizado em dias chuvosos ou à noite. Além disso, cada alimento tem seu  tempo de cocção. Contudo sua utilização apresenta excelentes resultados e essa  ferramenta destaca-se em meio a outras nessa finalidade, logo é de suma importância  sua propagação.
                    </p>
                    <p>Os estudantes atribuíam grande importância as práticas experimentais nesse  estilo em que as teorias ganham aplicações práticas e simples durante o desenvolvimento e construção do protótipo. Outra observação relevante dos discentes  foi o fato de que a interação em grupo também facilitou a assimilação dos conceitos da  física, pois dúvidas teóricas e eventuais problemas com a montagem do fogão  experimental foram solucionadas de um modo em que se sentiam confiantes.
                    </p>
                    <p>O experimento suscitou aos educandos o caráter investigativo, levantando hipóteses sobre a lei da conservação da energia, transferência e propagação do calor,  óptica e propagação da luz solar, entre outros. Quanto ao papel do docente nos trabalhos  experimentais, é importante ressaltar o dever de ser um mediador, ofertando um roteiro  de prática que seja simples e claro, isto é, retirando os passos demasiados complexos e  por vezes desnecessários durante a montagem e execução do experimento. O professor,  ao propor trabalhos experimentais que envolvam mais de um conceito físico, como é o  caso aqui, não deverá cair no erro de fornecer respostas fáceis aos questionamentos e  dificuldades. Em seu roteiro e atuação, tem o cargo de promover as descobertas dos alunos, os quais, por intermédio da interação social e conhecimento prévio, encontrarão suas respostas.
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Quando propusemos estudar e produzir uma tecnologia social que proporcione o cozimento de alimentos e aquecimento de água a partir de um sistema solar térmico,  bem como os impactos econômicos e ambientais gerados por esta, buscamos por informações para o avanço deste estudo, que facilitassem e/ou inovassem o ensino aprendizagem do mesmo, bem como o acesso a todos, o que despertou para os altos  custos de compra do botijão de gás ou mesmo do uso da lenha como fonte para algumas  famílias de nossa comunidade, nossa escola, assim como da zona rural de nossa cidade.  Muitas vezes, famílias (mais carentes ou de lugares mais distantes) não possuem o  mínimo para cocção de alimentos e, utilizam-se dos fogões de três pedras ou outros para  tal, por não disporem de fogões convencionais, o que acaba sendo prejudicial a suas  saúdes por produzir fumaça tóxica. Logo a utilização dos fogões solares promove essa  forma de cozinhar os alimentos ao apresentar características interessantes entre  sustentabilidade e direitos humanos, considerando-se que, além dos impactos  ambientais da queima do GLP e do material vegetal, há também um contexto de direito  à segurança alimentar e à saúde. Assim, o resultado desse estudo remeteu-nos a  construção de um fogão solar, bem como a associação com a forma sustentável de  (re)utilizar materiais como proposta e resposta ao enfrentamento a esta situação. 
                    </p>
                    <p>Evidencia-se, então, que o fogão solar reciclável é uma alternativa sustentável e  eficiente para a cocção de alimentos e o aquecimento de água, isso porque o custo do  botijão de gás no Brasil, que tem um preço médio de 7,5% a 8,5% do salário mínimo,  impacta as famílias de baixa de renda, tanto em nossa comunidade escolar como fora  dela, que utilizam como solução para cozinhar a lenha, ou mesmo comprometem sua renda familiar comprando o GLP em detrimento de outras necessidades básicas. 
                    </p>
                    <p>Logo, o trabalho desenvolvido, até o presente, promoveu mudanças nas ideias  sobre energias renováveis e tecnologia sociais, atendeu aos objetivos e despertou o uso  racional das fontes de energia e a sustentabilidade do nosso planeta. Gerou, ainda,  conhecimento efetivo e modelou alguns pensamentos quanto a expansão do  aprendizado, o que despertou para novas buscas e pesquisas acerca do tema proposto,  bem como ir além e buscar novas temáticas e discussões para serem desenvolvidas e  aplicadas.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>a. Custos de instalação 
                    </p>
                    <p>Não há necessidade de instalação pré-definida, uma vez que o CAPTASOL - fogão solar pode ser facilmente transportado ou deslocado de um local para outro. O  investimento para construir o fogão solar, é de aproximadamente R$ 100,00; pois, o equipamento é formado por um molde de sucata de antena parabólica revestido a  princípio de papel alumínio e, em seguida, espelhos, agregado a um suporte de chapa de  ferro de 4 mm de diâmetro para dar uma maior resistência ao modelo. Ainda, uma estrutura de fixação de ferro, para acomodação da panela de cocção, na forma retangular  de 3 e 4 mm de diâmetro. 
                    </p>
                    <p>b. Custos de manutenção 
                    </p>
                    <p>Não existe necessidade maior de manutenção, além de limpeza e/ou troca de um  espelho ou peça que venha a ser danificada durante seu uso. 
                    </p>
                    <p>c. Tempo de vida útil da tecnologia
                    </p>
                    <p>Por utilizar-se de materiais de baixo custo, muitas vezes, reciclados, em sua  construção, estimou-se um tempo de utilização mínimo de 20 anos, contudo o mesmo  apresenta um vida útil extensa, podendo perpassar os que dela utilizem.
                    </p>
                    <p>d. Impactos ambientais
                    </p>
                    <p>O impacto ambiental ocasionado pelo uso dos fogões solares é positivo, pois o  mesmo promove a preservação do meio ambiente, pois não há necessidade de  desmatamentos – uso de madeira como lenha e não utiliza recursos limitados no planeta – combustíveis fósseis, GLP. Outro fator importante a ser destacado é que os mesmos  usam energia limpa e renovável, e, dessa forma, aproveita uma energia naturalmente  fornecida à Terra. Poder captar e utilizar energia solar para cozimentos de alimentos e  aquecimento de água, mesmo em locais onde esse processo por meios tradicionais (lenha e botijão de gás) as vezes torna-se difícil e/ou inviável, permite a melhoria e  qualidade de vida e desenvolvimento sustentável a regiões mais remotas e desprovidas  de recursos.
                    </p>
                    <p>e. Adaptação à realidade da agricultura familiar 
                    </p>
                    <p>Sabe-se que na maioria das zonas rurais encontra-se famílias com menor poder  aquisitivo e, que tem seus direitos básicos violados, como por exemplo o direito a água  tratada, energia elétrica e, por consequência, o acesso a alguma forma de cocção de  alimento é extremamente difícil. Nessas residências, raramente são encontrados fogões  que utilizam GLP e, quando o tem, uma parte da renda dos moradores é comprometida,  logo é comumente encontrado fogões que utilizam a queima de material vegetal para  cozinhar alimentos, os conhecidos fogões a lenha, tal condição é prejudicial à saúde dos  indivíduos que nela habitam, assim como ao ambiente, visto que na queima do material  vegetal se produz gases nocivos à saúde humana, além de poluentes do meio ambiente. 
                    </p>
                    <p>Vale ressaltar, ainda, que muitas dessas famílias obtém seu sustento por meio da agricultura familiar e, que, há necessidade de associar a essa prática a sustentabilidade  no processo de cultivo, bem como no produção e cozimento dos alimentos. Logo torna se um meio bastante viável a inserção dos fogões solares nessas comunidades, uma vez  que o mesmo é produzido por meio da re(utilização) de materiais descartados, a custo  baixo, sana problemas de saúde e ambientais por não utilizar-se de madeira para  queima, assim como o botijão de gás em todo seu processo. Destacar, também, que a utilização da luz do sol para cozinhar é uma alternativa – às vezes, a única opção – para  quem não tem recursos. 
                    </p>
                    <p>Então, além da economia de dinheiro, o uso do fogão solar, nessas comunidades, traz benefícios para a saúde, porque reduz a incidência de problemas respiratórios ao  evitar a inalação da fumaça que vem da queima da lenha, além da substituição da  madeira pela energia solar ajudar a combater o desmatamento e a desertificação. Um  estudo recente da Cooperação Técnica Alemã (GTZ) sobre o uso do fogão solar  demonstrou que o aparelho poupa de 35% a 40% dos gastos das famílias com lenha ou  gás, sendo, portanto algo viável e de necessidade para essas comunidades. 
                    </p>
                  </Col>
                    <Row justify="space-around"><b>Você sabia que...</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Existem dois parâmetros que podemos variar na construção do fogão: o tamanho total da caixa e o tamanho de cada espelho. Se aumentarmos o  tamanho da caixa teremos uma maior quantidade de luz solar captada e uma  maior quantidade de calor para transferir ao objeto a aquecer. Se variarmos  o tamanho de cada espelho podemos mudar o grau de concentração da luz  solar. Exemplo: diminuindo o tamanho de cada espelho mas mantendo o  tamanho da caixa teremos maior número de espelhos o que aumenta o calor  no foco porém numa área menor. Resumindo: se você quer aquecer grande  quantidade de água necessita de uma caixa maior, se deseja muito calor  concentrado deve diminuir o tamanho de cada espelho aumentando, consequentemente, o número total de espelhos. 
                    </p>
                    <p>Fonte:<a target="_blanck" href='http://zeca.astronomos.com.br/sci/fogao/fogao_solar.htm'> http://zeca.astronomos.com.br/sci/fogao/fogao_solar.htm</a>
                    </p>
                    <br></br>
                    <p>A temperatura alcançada dependerá de dois fatores: a qualidade do material utilizado para revestir a parábola e sua correta posição em relação ao sol. A  temperatura chega a mais de 350 °C, mais do que suficiente para o  cozimento de alimentos ou aquecimento de água. Seu aproveitamento  máximo se dá entre 9 e 15 horas. Entre suas vantagens, destaca-se a  disponibilidade de energia gratuita e abundante, além da ausência de  chamas, fumaça, poluição atmosférica, incêndios e explosões. O preço da  instalação não chega a duzentos reais e sua manutenção tem custo mínimo.  Evita desmatamentos em busca de lenha. O engenheiro Arnaldo Moura, um  dos autores de um projeto, destaca: “30% da madeira retirada da caatinga transforma-se em lenha. Utilizando o fogão solar, será possível economizar até 55% dessa lenha”. 
                    </p>
                    <p>Fonte: <a target="_blanck" href='https://www.ecodebate.com.br/2010/04/29/fogao-solar-uma-riqueza dos-pobres-por-pedro-miskalo/'>https://www.ecodebate.com.br/2010/04/29/fogao-solar-uma-riqueza dos-pobres-por-pedro-miskalo/</a>
                    </p>
                    <br></br>
                    <p>O emprego do fogão solar como uma alternativa energética na cocção dos  alimentos e atualmente uma alternativa ecologicamente importante e  correta, sabe-se hoje que cerca de dois terços da população mundial (3  bilhões de pessoas), dependem diariamente de lenha para satisfação de suas  necessidades energéticas direcionadas para a utilização domiciliar (cocção  de alimentos e aquecimento). Isto representa nos dias atuais um  desmatamento anual das florestas tropicais da ordem de 25.000 a 30.000  Km2. Esta ocorrência se dá exatamente entre as populações que habitam as  regiões tropicais, portanto em áreas propícias ao uso da energia solar onde a  incidência solar chega, em alguns casos, a um potencial de 1 Kw/m2. 
                    </p>
                    <p>Fonte: <a target="_blanck" href='http://www.fogaosolar.net/introd.html)'>http://www.fogaosolar.net/introd.html)</a>
                    </p>
                    <br></br>
                    <p>Por fim, ressaltar que a energia proveniente do sol é por excelência a mais  ecologicamente correta, funcionando como um intenso reator à fusão e, que por sua vez o sol irradia na terra, diariamente, um potencial energético extremamente elevado,  incomparável a qualquer outro sistema de energia. Vale destacar, ainda, que o sol irradia  anualmente o equivalente a 10 mil vezes a energia consumida pela população mundial  neste mesmo período. 
                    </p>
                    <p>Portanto, os fogões solares despontam como protótipos ideais na captação da  energia solar, mesmo em meses ou dias de pouca incidência solar, sendo capaz de  atingir elevadas temperaturas em pouco tempo e, assim, realizar o cozimento dos  alimentos e aquecimento de água. Além disso, o uso destes fogões ao invés do fogão  convencional e/ou de lenha é importante para a conscientização socioambiental da  população sobre a utilização de energias limpas e que não atingem negativamente o  meio ambiente.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Anexos</b></Row>
                    
                  <br />
                  <Row justify="space-around">
                    <p>Socialização coma comunidade escolar do protótipo do CAPTASOL – fogão solar construído e desenvolvido pelo educador Helder Pablo e seus estudantes
                    </p>
                    <img className="image-school"src={img24}></img>
                    <p>Socialização dos protótipos dos fogões solares – parabólico e caixa – na E.E.E.F.M. Coriolano de Medeiros – Patos-PB, estudantes orientados pelo educador Helder Pablo
                    </p>
                    <img className="image-school"src={img22}></img>
                    <img className="image-school"src={img20}></img>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col>
          <Col className='row-school'>
            <Card 
              title="Fogão Solar de Painel Tipo Cubo"
              cover={<img src={img27}></img>}
            >
              <p>Conheça mais sobre o projeto</p>
            <Tooltip title="Ver mais" >
                <Button
                    onClick={() => this.openModal4()}
                    className='button-1'
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                />
            </Tooltip>
            <Modal
                title={this.desciption.title4}
                visible={this.state.visible4}
                width={1000}
                footer={null}
                className="modal-solar"
                onCancel={() =>
                    this.setState({
                        visible4: false
                    })
                }
            >
                <div className='content-modal'>

                    <p>Programa: GIRA MUNDO ISRAEL  2019 Secretaria de Estado da Educação, da Ciência e da Tecnologia</p>
                    <p>Professor Rafael Leal da Silva ECI Senador Humberto Lucena – Cacimba de Dentro - PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>O Sol é uma fonte de energia limpa, gratuito e inesgotável. O aproveitamento dessa fonte de energia vem sendo aplicada em sistemas de placas fotovoltaicas para produção de energia elétrica, aquecimento de água residencial e nos fogões solares. 
                    </p>
                    <p>Este trabalho apresenta o fogão solar de painel do tipo cubo. A tecnologia é um recurso de fácil produção, baixo custo, portátil e de manuseio acessível sem ser necessário grande experiência do usuário nesta tecnologia social. 
                    </p>
                    <p>O uso do fogão solar para a cocção de alimentos não é uma novidade, porém ainda é pouco utilizado no Brasil pela falta de popularização. Esses dispositivos de cocção são bastante utilizados em regiões pobres da Índia e vários países da África. Por não ser preciso a utilização de combustíveis como lenha e gás de cozinha, o fogão solar também favorece uma economia para várias famílias, além de ajudar a reduzir os problemas provenientes do desmatamento para obtenção de lenha e emissão de gases poluentes para a atmosfera.
                    </p>
                    <img className="image-school-p"src={img27}></img>
                    <img className="image-school-p"src={img28}></img>
                    <p><b>Figura 1:</b> Fogão solar de painel do tipo cubo. A estrutura foi produzida em madeira na dimensão de 45 cm2 de área para cada placa que foi revestida com 3 espelhos.
                    </p>
                    <br></br>
                    <p>Os fogões solares estão distribuídos em três tipos que são eles: os do tipo painel, do tipo caixa e parabólicos. Dentro destas três categorias há uma infinidade de designers que apresentam diferentes rendimentos. Mesmo alcançando menor potencial em relação aos demais tipos, foi escolhido para este trabalho o fogão solar de painel do tipo cubo pela maior facilidade em execução e ter o menor custo de produção dentre todos. Para que o fogão solar funcione, é necessário concentrar a radiação solar, isso é feito com a utilização de reflexivos. Depois um corpo negro, uma panela, onde são levados os alimentos. A panela absorve a radiação solar obtendo calor, e por fim, um efeito estufa com vidro que impede que o calor seja perdido em uma maior taxa do que a de entrada para o ambiente. Na figura 1, está o modelo produzido neste projeto para demonstrações em ensino. Atingiu a temperatura de 140 °C que foi suficiente para cocção de alimentos como legumes e carnes.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>Sobre o Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O projeto aqui apresentado é resultado da formação do programa do Governo Estadual da Paraíba, Gira Mundo Israel. Programa tem como principal finalidade a formação de professores do ensino básico em práticas exitosas para o ensino de Ciências e convivência com o semiárido através da aplicação de tecnologias sociais aprendidas nos kibutzim Lotan e Kentura.
                    </p>
                    <p>Entre as várias tecnologias sociais para o convívio em regiões áridas, a produção de fogões solares para a cocção de alimentos fez parte do programa de ensino. Na volta ao Brasil, foi elaborado um programa de ação com objetivo de divulgar os fogões solares no município de Cacimba de Dentro, na Paraíba. A tecnologia foi ensinada em uma escola estadual de tempo integral para os alunos em duas aulas e mais um minicurso on-line. Os encontros presenciais não foram possíveis devido à pandemia da COVID-19. Foram produzidos fogões solares do tipo cubo utilizando material de baixo custo como papelão e papel alumínio na produção dos painéis solares, como pode ser visto na figura 2.
                    </p>
                    <p>A avaliação dos alunos ocorreu por meio da produção de mapa conceitual e a criação de um vídeo onde deveriam explicar o funcionamento do fogão solar e a experiência da cocção de alimentos com essa técnica.
                    </p>
                    <img className="image-school-p"src={img29}></img>
                    <p><b>Figura 2:</b> Fogão solar de painel tipo cubo feito com papelão e utilizando como reflexivo o papel alumínio. A panela preta absorve a energia térmica proveniente do Sol e duas travessas de vidro retém o calor por efeito estufa. 
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Recursos Necessários para a Implantação do Projeto</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Caixa d’água 250 l, mangueira cristal 3/4, mangueira cristal 3/4, adesivo poly tubes 75 g, registro de esfera pvc sold 25 mm joelho lr 20/1/2, joelho sold pvc 25 mm, luva sold pvc 25 mm, tubo sold pvc 25 mm, cap esg pvc 40 mm, adesivo pvc politubos 17g, arruela lisa galvanizada, luva sold 20 mm, registro de esfera pvc sold 25 mm, bucha giba, parafusos, joelho 90 esgoto 40, joelho 90 sold 20 mm, te pvc esgoto 40, veda calha, cimento, tubo esgoto 40 mm pvc, tubo pvc sold 20 mm, rodizio kmb rgb 1.1/4 preto, rodizio kmb rgb 1.1/4 cristal, chapa de alumínio lisa rolo, silicone vidro alumínio, lona lj 44 pt, veda calhas cinza 285 g alumínio perfil anodiz fs 6mts, alumínio perfil anodiz fs 6mts, chapa de alumínio lisa rolo, alumínio perfil anadoiz fs 6m, silicone incolor titan, rebite alum. new fix n-412, rebite alum. new fix n-308, barra cht em alumínio, ferro ca 60 4.2 mm, placa de sinalização 60 x 50 cm, vidro comum inc 4mm, mão de obra (pedreiro).
                    </p>
                  </Row>
                    <Row justify="space-around"><b>FATORES QUE PROMOVEM OU LIMITAM A ADOÇÃO DAS TECNOLOGIAS</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Para a produção de um painel solar com finalidade de construção de um fogão, não se faz necessário materiais custosos e grandes conhecimentos de técnicas elaboradas de criação. Para o modelo de fogão tipo cubo são necessárias 3 placas de 45 cm2 de área, no mínimo. As placas devem ser de um material rígido suficiente para sustentar a colagem de um reflexivo que pode ser até mesmo papel alumínio. O fogão solar faz uso de uma energia inesgotável e gratuita. Uma vez o fogão produzido, não há custo para a cocção de alimentos.
                    </p>
                    <p>A falta de divulgação faz com que no Brasil, em especial no Nordeste, os fogões solares sejam quase que desconhecidos pela população, portanto, se faz necessário ampliar a divulgação, em especial nas escolas de ensino básico públicas e privadas.
                    </p>
                    <p>Em regiões com baixa incidência solar anual, os dias úteis para cocção solar são reduzidos. Em dias nublados não é possível cozinhar os alimentos sem a presença de luz solar direta pelo menos por 30 min. Durante a noite, deve haver uma segunda alternativa para a cocção. As travessas de vidro para fazer o efeito estufa são difíceis de encontrar em algumas regiões e relativamente onerosos.
                    </p>
                    <p>Apesar de algumas desvantagens como as citadas, o fogão solar de painel tipo cubo é uma alternativa ecológica para a cocção de alimentos. 
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>1. Custos de instalação
                    </p>
                    <p>O painel da figura 1 teve um custo de produção de R$ 160,00, com exceção das travessas de vidro que custam em média R$ 40,00 e da panela preta. Portanto, o custo total para o modelo apresentado chegará a um valor próximo a R$ 250,00. É importante ressaltar que após a produção inicial, não há custos adicionais com combustíveis para a cocção.</p>
                    <p>2. Custos de manutenção
                    </p>
                    <p>O modelo apresentado não fará uso de maiores manutenções além da limpeza das placas periodicamente e das panelas de uso.</p>
                    <p>3. Tempo de vida útil da tecnologia
                    </p>
                    <p>Indeterminada.</p>
                    <p>4. Impactos ambientais
                    </p>
                    <p>Os fogões solares não utilizam lenha para cocção, portanto, não emitem gases tóxicos para a atmosfera e melhora a qualidade de vida de seus usuários que não ficam expostos a nenhum tipo de fumaça. Não gera desmatamento para a produção de combustível e reduz a quantidade de consumo do gás butano.</p>
                    <p>5. Adaptação à realidade da agricultura familiar.
                    </p>
                    <p>É uma tecnologia social de fácil assimilação e de alto grau de replicabilidade. Os materiais onerosos como travessas de vidro para o efeito estufa podem ser substituídos por sacos de assar, que são menos custosos. As placas dos reflexivos podem ser produzidas com materiais de custo quase zero como papelão e papel alumínio, reduzindo os custos para um valor de produção menor do que R$ 15,00.
                    </p>
                    <p>No mês de produção deste texto, na região da cidade de Cacimba de Dentro, o preço do gás de cozinha está em média R$ 70,00. Ao longo de um ano, isto gerará um custo de R$ 840,00 considerando um botijão de gás de 13 kg por mês. Caso utilizem o fogão solar durante o dia e a noite, poderá ser feito uma economia de R$ 420,00 levando em conta 200 dias anuais de Sol plenos na região nordestina. O valor é suficiente para a produção de 28 fogões solares do tipo cubo utilizando papelão e papel alumínio. 
                    </p>
                    
                  </Col>
                    <Row justify="space-around"><b>Você sabia que...</b></Row>
                    
                  <br />
                  <Row justify="space-around">
                    <p>Arquimedes fez uso de concentradores solares dois séculos antes de Cristo para impedir um ataque romano a Siracusa. Os vikings ateavam fogo as embarcações dos inimigos utilizando equipamentos semelhante aos fogões solares parabólicos. Os experimentos com fogões solares tipo caixa remontam ao século XVIII. Leonardo da Vinci publicava projetos com concentradores solares parabólicos.
                    </p>
                  </Row>
                </div>
            </Modal>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}
export default School