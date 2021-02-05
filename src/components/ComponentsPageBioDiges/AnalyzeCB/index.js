import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import img1 from '../../../utils/images/biodigestor/23.png'
import img2 from '../../../utils/images/biodigestor/24.png'
import img3 from '../../../utils/images/biodigestor/25.png'

import ods1 from '../../../utils/images/biodigestor/ODS1.png'
import ods2 from '../../../utils/images/biodigestor/ODS2.png'
import ods3 from '../../../utils/images/biodigestor/ODS3.png'
import ods4 from '../../../utils/images/biodigestor/ODS4.png'
import ods5 from '../../../utils/images/biodigestor/ODS5.png'
import ods6 from '../../../utils/images/biodigestor/ODS6.png'
import ods7 from '../../../utils/images/biodigestor/ODS7.png'
import ods8 from '../../../utils/images/biodigestor/ODS8.png'
import ods10 from '../../../utils/images/biodigestor/ODS10.png'
import ods11 from '../../../utils/images/biodigestor/ODS11.png'
import ods12 from '../../../utils/images/biodigestor/ODS12.png'
import ods13 from '../../../utils/images/biodigestor/ODS13.png'
import biodigest from '../../../utils/images/biodigestor/biodigest.png'

const { TabPane } = Tabs;

const data = [
    {
      title: 'ERRADICAÇÃO DA POBREZA',
      avatar: ods1,
      description: 'Contribui para a erradicação da pobreza, permite o acesso a serviços essenciais, estimula o mercado local e reduz a exposição inadequada aos resíduos.'
    },
    {
      title: 'FOME ZERO E AGRICULTURA SUSTENTÁVEL',
      avatar: ods2,
      description: 'Permite o acesso à alimentação segura, adequada e saudável para o ano, devido ao aumento da produtividade agrícola, disponibilizando renda a pequenos produtores e garantindo o autoconsumo, promovendo a segurança alimentar a partir de uma agricultura sustentável'
    },
    {
      title: 'SAÚDE E BEM-ESTAR',
      avatar: ods3,
      description: 'Reduz o número de doenças de veiculação hídrica, de vetores provenientes da falta de saneamento e outros.'
    },
    {
      title: 'EDUCAÇÃO DE QUALIDADE',
      avatar: ods4,
      description: 'Difunde o conhecimento permitindo a troca de saberes a grupos em situação de vulnerabilidade.'
    },
    {
      title: 'IGUALDADE DE GÊNERO',
      avatar: ods5,
      description: 'Discute as formas de discriminação de gênero para as mulheres do campo, como forma de eliminar a desigualdade nos trabalhos do campo, sendo remunerados ou não, com a participação plena e efetiva das mulheres.'
    },
    {
      title: 'ÁGUA POTÁVEL E SANEAMENTO',
      avatar: ods6,
      description: 'Melhora a qualidade do ambiente evitando a poluição dos recursos hídricos ao destinar adequadamente os resíduos sólidos vegetais e animais. Também há um aumento na utilização do biofertilizante como defensor agrícola e adubo orgânico, diminuindo ou eliminando o uso de produtos sintéticos prejudiciais à saúde do agricultor, do consumidor e do meio ambiente, principalmente na região rural do Semiárido o que permite o acesso a produtos cultivados de forma agroecológica.'
    },
    {
      title: 'ENERGIA LIMPA E ACESSÍVEL',
      avatar: ods7,
      description: 'Permite o acesso à energia limpa e de baixo custo proveniente da biomassa. O biogás pode ser utilizado para cocção e como combustível para bombas de irrigação em áreas rurais de países em desenvolvimento.'
    },
    {
      title: 'TRABALHO DECENTE E CRESCIMENTO ECONÔMICO',
      avatar: ods8,
      description: 'Promove o aumento da modernização tecnológica sustentável, geração de emprego, e consequentemente, diversificação de produtos agrícolas, agregando valor ao trabalho e incentivando o empreendedorismo rural.'
    },
    {
      title: 'REDUÇÃO DAS DESIGUALDADES',
      avatar: ods10,
      description: 'Promove a inclusão social, econômica e política com a finalidade de reduzir as desigualdades.'
    },
    {
      title: 'CIDADES E COMUNIDADES SUSTENTÁVEIS',
      avatar: ods11,
      description: 'Reduz o impacto ambiental negativo, com ênfase na gestão dos resíduos sólidos animais e vegetais e aumento da qualidade do ar, evitando dessa forma a emissão de gases de efeito estufa e disposição irregular de efluentes em locais em que não há aterros sanitários. Tais tratamentos podem ser realizados através de um biodigestor. '
    },
    {
      title: 'CONSUMO E PRODUÇÃO RESPONSÁVEIS',
      avatar: ods12,
      description: 'Constitui um exemplo de manejo correto dos resíduos sólidos orgânicos, por meio da reciclagem desses em biodigestores. Com isso, evita-se a liberação de gases de efeito estufa para o ar e contaminação das águas superficiais e subterrâneas.'
    },
    {
      title: 'AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA',
      avatar: ods13,
      description: 'A mudança do clima é decorrente dos gases liberados de forma irregular, e a partir da conscientização e a capacidade humana e institucional sobre mitigação, adaptação e redução de impacto, é possível, através da utilização de tecnologias sustentáveis, como o biodigestor, reduzir tais mudanças que afetam o meio ambiente e a sociedade.'
    },
  ];

class AnalyzeCB extends React.Component {
    state = {
        visible: false,
        visible1: false,
        visible2: false,
        visible3: false
    }

    openModal() {
        this.setState({ visible: true })
    }

    openModal1(){
        this.setState({visible1: true})
    }

    openModal2(){
        this.setState({visible2: true})
    }

    openModal3(){
        this.setState({visible3: true})
    }
    render() {
        return (
            <div className='biodigestor analyze-cb'>
                <div className='casca-ana-cb'>
                    <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                    <Tabs tabPosition='left'>
                        <TabPane tab="Custos de instalação" key="1">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={1}></Col>
                                    <Col span={22}>
                                        <Card>
                                            <Statistic
                                                title="Compra + Instalação"
                                                value={"R$ 3.529,00 (660 USD)"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </TabPane>
                        <TabPane tab="Custos de manutenção" key="2">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={6}></Col>
                                    <Col span={12}>
                                        <Card>
                                            <Statistic
                                                title="Custos de Manutenção"
                                                value={"R$ 5 (1 USD) a R$ 200,00 (40 USD)"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                                
                            <div className='tolltip-margin'>
                                    <Tooltip title="Ver mais" >
                                        <Button
                                            className='button-1'
                                            onClick={() => this.openModal2()}
                                            type="primary"
                                            shape="circle"
                                            icon={<PlusOutlined />}
                                        />
                                    </Tooltip>
                                    <Modal
                                        title={'Check list para manutenção'}
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
                                            <ul>
                                                <li>25 m de cano PVC rígido (20 mm);</li>
                                                <li>7 joelhos PVC rígido (20 mm);</li>
                                                <li>2 adaptadores com Flange (20 mm);</li>
                                                <li>1 adaptador longo com Flange livre;</li>
                                                <li>5 m Mangueira plástica para a tubulação de gás de 25 mm;</li>
                                                <li>3 abraçadeiras rosca sem fim ½’’;</li>
                                                <li>1 Garrafão de acrílico de água mineral;</li>
                                            </ul>
                                           <p>O ptojeto do biodigestor está disponivel no link <a target="_blank" href='https://issuu.com/diaconia_web/docs/manual_do_biodigestor'>https://issuu.com/diaconia_web/docs/manual_do_biodigestor</a></p>
                                            <p>Alguns agricultores preferem adquirir esterco para alimentar o biodigestor, em média, o saco de 30 Kg de esterco custa R$ 25,00.</p>
                                            
                                        </div>
                                    </Modal>

                                </div>
                            </div>

                        </TabPane>
                        <TabPane tab="Tempo de vida útil da tecnologia" key="3">
                            <div className="site-statistic-demo-card">
                                <Row gutter={16}>
                                    <Col span={6}></Col>
                                    <Col span={12}>
                                        <Card>
                                            <Statistic
                                                title="Tempo de vida útil"
                                                value={"10 Anos"}
                                                precision={2}
                                                valueStyle={{ color: '#FF7907' }}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            
                                <div className='tolltip-margin'>
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
                                        title={'Tempo de vida útil'}
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
                                            
                                           <p>O tempo de vida útil dos biodigestores pode variar bastante devido a alguns fatores, um deles é a manutenção. Uma estimativa é de uma depreciação de 10 anos, porém, devido ao uso diário, o biodigestor necessitará passar por manutenções semanais, podendo requerer troca dos componentes que compõem a estrutura, como as tubulações de PVC, as mangueiras, as válvulas entre outros, para que tenha uma vida útil como designado ou maior.</p>
                                            
                                            
                                        </div>
                                    </Modal>

                                </div>
                            </div>
                        </TabPane>
                        <TabPane className='key4' tab="Impactos ambientais" key="4">
                            
                            <Row justify="space-around">

                            <div>
                                <img className="image-impactos" src={img1} alt=''></img>
                            </div>
                            </Row>
                            <b>Problema:</b>
                            <p>
                            Segundo a Food and Agriculture Organization of the United Nations (2014), a maior fonte de emissão de gases do efeito estufa na agricultura é proveniente da fermentação entérica, em razão da produção de metano por meio da digestão dos animais ruminantes e expulsão por eructação.
                            </p>
                            
                            <b>Solução:</b>
                            <p>A produção animal é uma atividade econômica muito recorrente e existe em diversos lugares onde a agricultura pode ser praticada, mesmo em regiões que não são favorecidas por recursos naturais hídricos ou vegetais, como as regiões áridas ou semiáridas nordestinas. Com o objetivo de diminuir o impacto que essa atividade causa ao meio ambiente, podem ser utilizadas tecnologias sustentáveis, como o biodigestor, para fins de tratamento dos resíduos dos animais, como também agregar valor ao resíduo que antes seria descartado.</p>
                            
                            <Row justify="space-around">

                            <div>
                                <img className="image-impactos" src={img2} alt=''></img>
                            </div>
                            </Row>
                            <b>Problema:</b>
                            <p>Os dejetos expelidos pelos animais são depositados no solo, servindo de nutrientes para plantas. No entanto, no caso dos recursos hídricos em geral, pode haver contaminação pelo excesso desse material, principalmente em locais com elevadas taxas de evaporação e difícil renovação hídrica. Nas redondezas das fontes de abastecimento de água acumulam-se muitos animais, como nos cursos de águas e açudes, por razão da falta de mata ciliares, o que facilita o acesso às águas.</p>

                            <b>Solução:</b>

                            <p>De forma geral, verifica-se que a biodigestão anaeróbia é uma prática que auxilia na minimização da poluição que é causada por resíduos animais e vegetais, ajuda na eliminação de ervas daninhas e também de bactérias causadoras de doenças, eliminação de maus odores e moscas tradicionais esterqueiras, entre outros. </p>

                            <Row justify="space-around">

                            <div>
                                <img className="image-impactos" src={img3} alt=''></img>
                            </div>
                            </Row>
                            <b>Problema:</b>

                            <p>O resíduo resultante do processamento da mandioca para fabricação da farinha é chamado de manipueira e é obtido na etapa de prensagem da mandioca. Esse efluente possui um impacto negativo no meio ambiente, aos seres humanos e animais, devido a um composto encontrado em sua composição chamado de ácido cianídrico, e que se trata de uma substância venenosa e nociva. </p>

                            <b>Solução:</b>

                            <p>Para diminuir o impacto ambiental que esse efluente causa, é necessário realizar o seu tratamento por meio do uso de biodigestores, com a consequente produção de biogás, que pode ser utilizado pelos produtores em diversas atividades, inclusive como fonte de energia para a secagem da mandioca, diminuindo também o impacto que o forno a lenha causa à natureza.</p>

                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Impactos sociais" key="5">
                            <p>
                            No cotidiano dos grandes centros urbanos, as tecnologias são utilizadas para auxiliar e trazer retorno no âmbito econômico ou de bem-estar, facilitando o trabalho das pessoas. O uso de tecnologias adaptadas também deve ser estendido para o meio rural, com o intuito de ajudar o pequeno agricultor nas suas tarefas. Devido a várias dificuldades de trabalho que surgem no campo, o pequeno produtor rural, em muitos casos, necessita buscar sua fonte de renda nas cidades, tendo que abandonar o local em que viveu grande parte de sua vida, na maioria das situações. Pensando nisso, as tecnologias podem ser empregadas para diminuir ou erradicar possíveis problemas que impeçam o desenvolvimento do trabalho no campo, como também, podem ser benéficas em termos econômicos e ambientais. A maior parte da produção dos alimentos disponibilizados para a população brasileira é produzida pela agricultura familiar, constituída por pequenos produtores rurais, povos e comunidades tradicionais.  Diante disso, verifica-se a importância que a pessoa do campo tem para a sociedade e, por isso, mais ferramentas devem ser disponibilizadas com o fim de agregar valor ao trabalho rural.
                        </p>
                        <div className=' tolltip-margin'>
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
                                        title={'Impactos sociais'}
                                        visible={this.state.visible}
                                        width={1000}
                                        footer={null}
                                        className="modal-biodigestor"
                                        onCancel={() =>
                                            this.setState({
                                                visible: false
                                            })
                                        }
                                    >
                                        <div className='content-modal'>
                                           <p>Projetos como os que o FIDA apoia, além de levarem auxílio tecnológico e conhecimento à pessoa que trabalha no campo, também impactam positivamente a vida de mulheres. A instalação do biodigestor, além do retorno econômico e sustentável, traz uma qualidade de vida e gera uma fonte de renda para as agricultoras por meio, por exemplo, da fabricação de bolos e pães a partir da utilização do biogás gerado em sua propriedade, em substituição ao gás de cozinha (GLP). Esses projetos também estimulam a criação ou fortalecimento de grupos de mulheres nas comunidades, para que possam gerar renda juntas. O biofertilizante produzido no biodigestor pode ser utilizado como adubo orgânico nas árvores frutíferas, hortaliças e viveiros de mudas, cujo produto pode ser vendido ou submetido a um processamento, como na produção de doces e polpas a partir de frutas produzidas na propriedade dessas mulheres. Além disso, o procedimento de fabricação é realizado em cozinhas comunitárias em que todas participam da elaboração dos produtos secundários. </p>
                                            <p>Em Pajeú II, localizada na comunidade Poço Redondo do município de Tabira – PE, há um grupo de mulheres que é beneficiado pelas ações diretas do projeto Dom Helder Câmara (PDHC) e outros projetos. Trata-se de um exemplo de impacto social positivo utilizando biodigestores e outras tecnologias.  O uso do biodigestor influencia positivamente na segurança alimentar das famílias rurais beneficiadas. Um dos produtos gerados, o biofertilizante, é utilizado nos quintais produtivos como defensor natural e adubo orgânico fornecendo os nutrientes necessários para as plantas, tendo como consequência o aumento da produção e melhora nas refeições da família, devido a diversidade e qualidade dos produtos produzidos.</p>
                                            
                                        </div>
                                    </Modal>

                                </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Adaptação à realidade da agricultura familiar" key="6">
                            <p>
                            No ano de 2008, um projeto piloto utilizando o modelo de biodigestor sertanejo foi implementado na comunidade de Santo Antônio II, em Afogados da Ingazeira (PE). Esse programa foi desenvolvido pela Diaconia e o Projeto Dom Helder Câmara, contando com o apoio do Fundo Internacional de Desenvolvimento Agrícola (FIDA). Por meio desse projeto foram realizadas modificações no biodigestor com o objetivo de torná-lo mais acessível à comunidade rural.
                        </p>
                        <div className='tolltip-margin'>
                                <Tooltip title="Ver mais" >
                                    <Button
                                        className='button-1'
                                        onClick={() => this.openModal1()}
                                        type="primary"
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                    />
                                </Tooltip>
                                <Modal
                                    title={'Adaptação à realidade da agricultura familiar'}
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
                                        {/* <p>{this.desciption.content}</p> */}
                                        <p>O biodigestor sertanejo, conforme a ilustração a seguir, se originou a partir do modelo indiano e aadaptação foi realizada visando questões como a disponibilidade de materiais para sua construção em lojas de materiais de construção nas cidades do interior.</p>

                                        <p>O biodigestor sertanejo compreende as seguintes partes:</p>
                                        <ol type='1'>
                                            <li>Caixa de alimentação;</li>
                                            <li>Fermentador;</li>
                                            <li>Gasômetro;</li>
                                            <li>Adaptador/filtro primário de água;</li>
                                            <li>Tanque de saída do biogás;</li>
                                            <li>Saída dos resíduos.</li>
                                        </ol>
                                        <div className='div-modal-img'>
                                            <img className='img-biodigest-modal' src={biodigest} alt='Biodigestor'></img>
                                        </div>
                                        
                                        <p>Na caixa de alimentação, é colocado o material orgânico que abastecerá, posteriormente, o tanque de fermentação (fermentador), no qual será produzido o biogás. Esse ficará armazenado no gasômetro. No tanque de saída, será eliminado um produto líquido ou matéria residual que pode ser denominado de biofertilizante, isto é, um fertilizante orgânico que pode ser utilizado para adubação líquida ou sólida. Obiogás produzido pode ser utilizado para o aquecimento térmico, como combustível para motores e geradores e como gás para cozinha.</p>
                                        <b>Tem curiosidade ou deseja saber como construir um biodigestor? </b><a href='https://issuu.com/diaconia_web/docs/manual_do_biodigestor'>Saiba mais</a>


                                    </div>
                                </Modal>

                            </div>
                        </TabPane>
                    </Tabs>

                   
                </div>
                <div className=''>                    
                 
                    <Card className="list-ods">
                        <div className="title-card-ods">
                        <div className='title-ods'>Considerando os 17 Objetivos do Desenvolvimento Sustentável da ONU, o Biodigestor se enquadra nos seguintes objetivos:</div>

                        </div>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<img className="image-ods" src={item.avatar} alt=''></img>}
                                // avatar={<Avatar src={item.avatar} />}
                                title={item.title}
                                description={item.description}
                                />
                                {/* <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                /> */}
                            </List.Item>
                            )}
                        />

                    </Card>
                </div>
                
            </div>
            )
    }
}
export default AnalyzeCB
