import React from 'react';
import './index.css';

import { Button, Modal, Tooltip } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import img1 from '../../../utils/images/escolas/image4.jpeg'
import img2 from '../../../utils/images/escolas/image6.jpeg'
import img3 from '../../../utils/images/escolas/image7.jpeg'
import img4 from '../../../utils/images/escolas/image8.jpeg'
import img5 from '../../../utils/images/escolas/image9.jpeg'
import img6 from '../../../utils/images/escolas/image11.jpeg'

class School extends React.Component {

  state = {
    visible1: true
  }
  desciption = {
      title: 'PROJETO SER/TÃO PORTÁVEL'
  }
  
  openModal() {
    this.setState({ visible1: true })
}
  render() {
    return (
      <div>
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
                <h4><b>Descrição da Tecnologia Social e Justificativa</b></h4>
                <p>O Dessalinizador Solar é uma tecnologia social de que tem proporcionado inúmeros benefícios socioeconômicos e ambientais: é uma tecnologia de baixo custo de implantação e manutenção; possibilita segurança hídrica através do fornecimento de água potável; promove a transformação social frente à gestão dos recursos hídricos locais; utiliza a energia solar (limpa e renovável) para a promoção de água potável; além de possibilitar a convivência com o semiárido. Resumidamente, o dessalinizador solar é uma tecnologia de fácil construção, o que favorece sua disseminação social; é de baixo custo, o que possibilita seu uso individual ou coletivo; e não causa impactos ambientais. O dessalinizador solar é uma tecnologia social de convivência com os longos períodos de estiagem, fornecendo às famílias água de boa qualidade. 
                </p>
                <p>O modelo de dessalinizador solar construído pelo professor Ezequiel Sóstenes e os estudantes do Projeto SERTÃO POTÁVEL, consiste em uma caixa construída com placas pré-moldadas de concreto, totalizando uma área de 4 m². A cobertura é composta de vidro, o qual possibilita a passagem da radiação solar (ondas curtas), mas inibe a saída das ondas longas para fora do dessalinizador solar. Com isso, aumenta-se a temperatura dentro do dessalinizador, fazendo com que ocorra a evaporação da água armazenada em uma “lona de caminhão” colocada como piso do dessalinizador. Em síntese, o que ocorre é que as altas temperaturas evaporam a água sobre a lona de caminhão; assim o vapor de água entra em contato com o superfície de vidro (que está a uma temperatura menor que o vapor) o que ocasiona a condensação do vapor de água, e com isso, produz-se uma água de qualidade para o consumo humano. Os dessalinizadores não só promovem a retirada dos sais dissolvidos na água, mas também elimina os microrganismo patógenos, especialmente as bactérias que causam doenças, a exemplo da Escherichia Coli. Neste sentido, as altas temperaturas (até 70°C) dentro do dessalinizador solar, elimina os patógenos, fazendo com que a água atendam as prerrequisitos de potabilidade. Por fim, o dessalinizador solar é uma tecnologia social que utiliza a energia solar (renovável e com grande potencial no Brasil) para a dessalinização e desinfecção de águas, o que tem contribuído para atender as necessidades hídricas das famílias rurais do semiárido paraibano.
                </p>
                <h4><b>O Projeto</b></h4>
                <p>O Projeto SERTÃO POTÁVEL, foi idealizado e realizado pelo professor Ezequiel Sóstenes, na Escola Cidadã Técnica Integral Pedro Bezerra Filho, no município de Camalaú – Paraíba, após o seu retorno do Programa GIRA MUNDO ISRAEL SEMIÁRIDO, do Governo do estado Paraíba. O Projeto visa contribuir com ações efetivas de impacto social na produção de água potável a ser consumida pelos estudantes da escola alvo do Projeto. Para muito além da escola, esta iniciativa detém o potencial de ajudar comunidades rurais que enfrentam dificuldades com armazenamento de água potável. O projeto teve grande repercussão na região do Cariri Ocidental, despertando o interesse de gestores municipais e escolas. 
                </p>
                <h4><b>Recursos Necessários para a Implantação do Projeto</b></h4>
                <p>Caixa d’água 250 l, mangueira cristal 3/4, mangueira cristal 3/4, adesivo poly tubes 75 g, registro de esfera pvc sold 25 mm joelho lr 20/1/2, joelho sold pvc 25 mm, luva sold pvc 25 mm, tubo sold pvc 25 mm, cap esg pvc 40 mm, adesivo pvc politubos 17g, arruela lisa galvanizada, luva sold 20 mm, registro de esfera pvc sold 25 mm, bucha giba, parafusos, joelho 90 esgoto 40, joelho 90 sold 20 mm, te pvc esgoto 40, veda calha, cimento, tubo esgoto 40 mm pvc, tubo pvc sold 20 mm, rodizio kmb rgb 1.1/4 preto, rodizio kmb rgb 1.1/4 cristal, chapa de alumínio lisa rolo, silicone vidro alumínio, lona lj 44 pt, veda calhas cinza 285 g alumínio perfil anodiz fs 6mts, alumínio perfil anodiz fs 6mts, chapa de alumínio lisa rolo, alumínio perfil anadoiz fs 6m, silicone incolor titan, rebite alum. new fix n-412, rebite alum. new fix n-308, barra cht em alumínio, ferro ca 60 4.2 mm, placa de sinalização 60 x 50 cm, vidro comum inc 4mm, mão de obra (pedreiro).
                </p>
                <h4><b>Resultados Alcançados</b></h4>
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
                <img src={img1}></img>
                <h4><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></h4>
                <p>O espaço físico, nas escolas, para construção e instalação do dessanilizador  solar tem se destacado como m ponto de atenção. A qualidade da água desinfetada e dessanilizada agrada bastante e elimina problemas de consumo de água, nas escolas.
                </p>
                <h4><b>Análise Custo Benefício</b></h4>
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
                <h4><b>Site relacionado à Temática</b></h4>
                <p><a>https://transforma.fbb.org.br/tecnologia-social/dessalinizadores-solar</a>
                </p>
                <img src={img2}></img>
                <p>Nestas duas imagens, os dassanilizadores solar na propriedade do Sr Reginaldo, em Caraúbas (PB). Na imagem abaixo, a água produzida pela tecnologia social.
                </p>
                <img src={img3}></img>
                <img src={img4}></img>
                <p>Imagem do processo de montagem das placas de dão forma ao dessanilizador solar.
                </p>
                <img src={img5}></img>
                <p>Imagem do rejeito retirada das gavetas dos dessanilizadores
                </p>
                <img src={img6}></img>
                <p>Nas duas imagens, o projeto SER/TÃO Potável, na ECI Pedro Bezerra Filho - Camalaú
                </p>

            </div>
        </Modal>
      </div>

    )
  }
}
export default School