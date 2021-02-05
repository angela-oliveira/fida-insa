import React from 'react';
import './index.css';

import { Button, Modal, Tooltip, Row, Col, Card } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

//projeto1
import img1 from '../../../utils/images/escolas/projeto5/image2.jpg'
import img2 from '../../../utils/images/escolas/projeto5/image5.png'
import img3 from '../../../utils/images/escolas/projeto5/image6.jpg'
import img4 from '../../../utils/images/escolas/projeto5/image8.jpg'
import img5 from '../../../utils/images/escolas/projeto5/image9.jpg'



class School extends React.Component {

  state = {
    visible1: false
  }
  desciption = {
      title: 'PROJETO BIODIGESTOR CASEIRO'
  }
  
  openModal() {
    this.setState({ visible1: true })
  }
  render() {
    return (
      <div className='component-school-biodigestor'>
        <Row>
          <Col className='row-school'>
            <Card 
              title="Biodigestor Caseiro"
              cover={<img src={img1}></img>}
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
                className="modal-biodigestor"
                onCancel={() =>
                    this.setState({
                        visible1: false
                    })
                }
            >
                <div className='content-modal'>

                    <p>Professor José Joaquim de Souza Neto ECIT Chiquinho Cartaxo - Sousa - PB
                    </p>
                    <br /><br />
                  <Row justify="space-around"><b>Descrição da Tecnologia Social e Justificativa</b></Row>
                    
                  <br />
                  <Row justify="space-around">

                    <p>Os biodigestores são equipamentos utilizados para promover a digestão anaeróbica e a retenção do biogás, os quais apresentam um compartimento isolado que não permite a presença de oxigênio no seu interior (CÓRDOVA; PASSOS; CHAMY, 2018). Os mesmos surgem como uma alternativa para pequenos, médios e grandes produtores rurais, assim como para agroindústrias e residências que necessitam de uma grande quantidade de lenha e/ou gás GLP (ALBUQUERQUE; ARAÚJO, 2016). Associado à necessidade de obtenção de uma fonte de energia renovável, barata, abundante e que atenda a demanda energética local, com viabilidade econômica, ambiental e social (KOVAČIĆ et al., 2018).
                    </p>
                    <p>Essa tecnologia tem sido implantada principalmente devido ao interesse econômico, associado à redução de custos com a compra do gás de cozinha. Sendo também, utilizada na substituição da lenha em fogões/fornos, a qual proporciona impactos ao meio ambiente (SCHWINGEL et al., 2016). 
                    </p>
                    <p>Segundo Morgan JN et al. (2018), os biodigestores produzem biogás e biofertilizante, em quantidade muitas vezes superior a necessidade da propriedade, garantindo uma gestão ambientalmente adequada e economicamente lucrativa em pouco tempo de operação. Reduzindo os custos de todo o processo produtivo e contribuindo para a sustentabilidade e desenvolvimento socioeconômico local. De acordo com Arelli et al. (2018), os modelos mais difundidos e conhecidos são o canadense, indiano e o chinês. Além desses há o modelo sertanejo bastante implantado no Nordeste brasileiro.
                    </p>
                    <p>O projeto Biodigestor Caseiro tem como finalidade o aproveitamento dos restos de alimentos coletados na cantina da escola, bem como contribuir para a eficiência energética local. Economizando recursos públicos na compra do gás de cozinha, além de evitar a contaminação do solo, água, ar e a proliferação de insetos com o descarte dos resíduos a céu aberto.
                    </p>
                  </Row>

                  <Row justify="space-around"><b>O Projeto</b></Row>

                  <br />
                  <Row justify="space-around">
                    <p>O projeto Biodigestor Caseiro foi idealizado e construído pelos professores da Área Técnica Joaquim Souza, Giordano Oliveira, Anderson Tôrres e Wagner Vinícius, assim como, pelos alunos do primeiro ano do ensino médio, durante as aulas da disciplina de Inovação Social e Científica. Durante o processo de imersão do Desing Thinking, uma das etapas da disciplina de ISC, os alunos analisaram as problemáticas existentes na escola e perceberam que a demanda por gás de cozinha (GLP) e o desperdício de comida durante as refeições eram elevados. 
                    </p>
                    <p>Diante deste cenário, a ideia sugerida pelos alunos para solucionar ambos os problemas foi construir um biodigestor de pequeno porte (Figura 1). Proporcionando o reaproveitamento dos resíduos orgânicos, produzindo biogás para um dos fogões utilizado na cantina e o biofertilizante, como adubo, nas áreas verdes da Escola Técnica.
                    </p>
                    <img className="image-school" src={img2}></img>
                    <p><b>Figura 1:</b> Corte longitudinal do biodigestor caseiro.
                    </p>
                    <br></br>
                    <p>Esse equipamento é composto por um tubo de alimentação (I) de 100 mm, um fermentador (II) com capacidade de 180 litros, um gasômetro (III) de 100 litros, um filtro primário de palha de aço (IV) e um filtro secundário de água (V).
                    </p>
                  </Row>

                    <Row justify="space-around"><b>Recursos Necessários para a Implantação do Projeto</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Na construção do Biodigestor Caseiro foram utilizados materiais reciclados e de fácil aquisição na comunidade local. São eles: bombonas de 150 e 180 litros, caibro, ripa, tubos PVC de 20 e 25 mm, joelho de 50 mm, registros de 20 e 50 mm, tubos de esgoto de 100 mm e flanges de 20 e 25 mm. Inicialmente, os alunos cortaram as bombonas com serra de cano, para que fosse possível acoplar a campânula e os registros para a saída do biogás e do biofertilizante, como mostrado na figura 2. 
                    </p>
                    <img className="image-school" src={img3}></img>
                    <p><b>Figura 2:</b> Corte das bombonas e fixação das conexões
                    </p>
                    <br></br>
                    <img className="image-school" src={img4}></img>
                    <p><b>Figura 3:</b> Finalização do projetoApós as medições, foram cortadas as ripas que servem como apoio para o movimento vertical do gasômetro. Por fim, o sistema foi montado, com a ligação do tanque de digestão a câmara de biogás, utilizando 1 metro de mangueira de jardim, figura 3.
                    </p>
                    <br></br>
                  </Row>
                    <Row justify="space-around"><b>Resultados Alcançados</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>No primeiro ano de implantação do Biodigestor Caseiro na ECIT Chiquinho Cartaxo, obtivemos os seguintes resultados:
                    </p>
                    <p>1) Produção média mensal de 1,5 botijões de gás de cozinha, representando economia anual significativa para os cofres públicos;
                    </p>
                    <p>2) Redução de 95% do resíduo orgânico descartado a céu aberto, proveniente da Escola Cidadã Integral Técnica Chiquinho Cartaxo, e sem nenhum tratamento;
                    </p>
                    <p>3) Produção mensal de 200 litros de biofertilizante, rico em micro e macronutrientes;
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Fatores que Promovem ou Limitam a Adoção das Tecnologias</b></Row>

                    <br />
                  <Row justify="space-around">
                    <p>Materiais alternativos e de fácil aquisição na comunidade local são dois pontos importantes e determinantes para que a tecnologia do biodigestor caseiro possa ser utilizada com um case de sucesso. Além, da farta quantidade de material orgânico disponível na região, resíduos alimentares e agropecuários.
                    </p>
                  </Row>
                    <Row justify="space-around"><b>Análise Custo Benefício</b></Row>

                    <br />
                  <Col justify="space-around">
                    <p>1. Custos de instalação
                    </p>
                    <p>O custo médio de 01 (um) Biodigestor Caseiro é de R$ 1.100,00;</p>
                    <p>2. Custos de manutenção
                    </p>
                    <p>A manutenção é realizada periodicamente durante o processo de abastecimento, retirada do biofertilizante e consumo do biogás;</p>
                    <p>3. Tempo de vida útil da tecnologia
                    </p>
                    <p>Indeterminada.</p>
                    <p>4. Impactos ambientais
                    </p>
                    <p>Resíduos sólidos resultantes da construção do equipamento;</p>
                    <p>5. Adaptação à realidade da agricultura familiar.
                    </p>
                    <p> Biodigestor Caseiro permite a redução dos custos unitários mensais no campo ou na cidade com a compra do gás de cozinha. Proporcionando autonomia energética, aumento da renda mensal e qualidade de vida, principalmente em regiões pouco assistidas pelos programas sociais. </p>
                    
                  </Col>
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