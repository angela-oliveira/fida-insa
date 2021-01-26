import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ods1 from '../../../utils/images/biodigestor/ODS1.png'
import ods2 from '../../../utils/images/biodigestor/ODS2.png'
import ods3 from '../../../utils/images/biodigestor/ODS3.png'
import ods4 from '../../../utils/images/biodigestor/ODS4.png'
import ods5 from '../../../utils/images/biodigestor/ODS5.png'
import ods6 from '../../../utils/images/biodigestor/ODS6.png'
import ods8 from '../../../utils/images/biodigestor/ODS8.png'
import ods10 from '../../../utils/images/biodigestor/ODS10.png'
import ods11 from '../../../utils/images/biodigestor/ODS11.png'
import ods12 from '../../../utils/images/biodigestor/ODS12.png'
import ods13 from '../../../utils/images/biodigestor/ODS13.png'

const { TabPane } = Tabs;


const data = [
    {
      title: 'ERRADICAÇÃO DA POBREZA',
      avatar: ods1,
      description: 'Contribui para a erradicação da pobreza, permite o acesso a serviços essenciais, estimula o mercado local e reduz a exposição a vulnerabilidades auxiliando no enfrentamento das crises hídricas recorrentes no Semiárido.'
    },
    {
      title: 'FOME ZERO E AGRICULTURA SUSTENTÁVEL',
      avatar: ods2,
      description: 'Permite o acesso à alimentação segura, adequada e saudável para o ano, devido ao aumento da produtividade agrícola, disponibilizando renda a pequenos produtores e garantindo o autoconsumo dos agricultores familiares. Promove a segurança alimentar a partir de uma agricultura sustentável.'
    },
    {
      title: 'SAÚDE E BEM-ESTAR',
      avatar: ods3,
      description: 'Reduz o número de doenças de veiculação hídrica e de vetores provenientes da falta de saneamento.'
    },
    {
      title: 'EDUCAÇÃO DE QUALIDADE',
      avatar: ods4,
      description: 'Difunde o conhecimento permitindo a troca de saberes a grupos em situação de vulnerabilidade.'
    },
    {
      title: 'IGUALDADE DE GÊNERO',
      avatar: ods5,
      description: 'Discute as formas de discriminação de gênero para as mulheres do campo, como forma de eliminar a desigualdade nos trabalhos do campo que são remunerados ou não, com a participação plena e efetiva das mulheres nos processos de decisão.'
    },
    {
      title: 'ÁGUA POTÁVEL E SANEAMENTO',
      avatar: ods6,
      description: 'Melhora a qualidade de água reduzindo a poluição ao minimizar o lançamento indiscriminado de efluentes não tratados. Aumento do reúso seguro localmente, principalmente na região rural do Semiárido o que permite o acesso a água de reuso para irrigação.'
    },
    {
      title: 'TRABALHO DECENTE E CRESCIMENTO ECONÔMICO',
      avatar: ods8,
      description: 'Aumento da diversificação de produtos agrícolas, agregando valor e incentivando o empreendedorismo rural.'
    },
    {
      title: 'REDUÇÃO DAS DESIGUALDADES',
      avatar: ods10,
      description: 'Promove a inclusão social, econômica e política com a finalidade de reduzir as desigualdades.'
    },
    {
      title: 'CIDADES E COMUNIDADES SUSTENTÁVEIS',
      avatar: ods11,
      description: 'Melhoria da habitação aumentando a resiliência de áreas afetadas por desastres naturais de origem hidrometeorológica e climatológica.'
    },
    {
      title: 'CONSUMO E PRODUÇÃO RESPONSÁVEIS',
      avatar: ods12,
      description: 'Redução da geração de resíduos por meio da Economia Circular.'
    },
    {
      title: 'AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA',
      avatar: ods13,
      description: 'Amplia a resiliência e a capacidade adaptativa a riscos e impactos resultantes da mudança do clima e desastres naturais.'
    },
  ];

class AnalyzeCB extends React.Component {
    state = {
        visible: false,
        visible1: false
    }

    openModal() {
        this.setState({ visible: true })
    }

    openModal1() {
        this.setState({ visible1: true })
    }
    render() {
        return (
            <div className='bioagua-analysecb analyze-cb'>
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
                                                value={"3.500,00 à R$ 7.500,00"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
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
                                                value={"Até R$ 600,00"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
                                                prefix={"R$"}
                                            />
                                        </Card>
                                    </Col>
                                </Row>


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
                                                value={"20 Anos"}
                                                precision={2}
                                                valueStyle={{ color: '#329BA3' }}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Impactos ambientais" key="4">
                            <div className="">
                                <p>Segundo o Sistema Nacional de Informações Saneamento (SNIS), no Brasil o atendimento da população à coleta de esgoto corresponde a 53%. A partir desse cenário, é possível observar uma cadeia de possíveis impactos negativos. Em locais que não possuem saneamento, o principal problema está relacionado ao fato de que os esgotos não tratados são lançados sem nenhum critério. Essa ação gera um efeito dominó, pois com o aumento indiscriminado de carga orgânica no solo, pode ocorrer infiltração pelo lençol freático atingindo os corpos hídricos e com isso, aumentando as taxas de nitrogênio e fósforo na água,. O excesso desses elementos  causam reações químicas, físicas e biológicas e pode ocasionar a morte dos organismos aquáticos, doenças de veiculação hídrica, entre outros problemas. Embora a água tenha um poder incrível de se recuperar, que é o de autodepuração, uma grande quantidade de esgoto lançado dificulta o tratamento para que ela se torne potável novamente.</p>

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
                                        title={'Impactos Ambientais'}
                                        visible={this.state.visible}
                                        width={1000}
                                        footer={null}
                                        onCancel={() =>
                                            this.setState({
                                                visible: false
                                            })
                                        }
                                    >
                                        <div className='content-modal'>
                                            {/* <p>{this.desciption.content}</p> */}
                                            <p>Com o tratamento pelo Sistema bioágua é possível diminuir esse lançamento indiscriminado de esgoto, aproveitando a matéria orgânica presente na água cinza tratada para irrigar culturas. Alguns estudos mostram a importância da matéria orgânica e outros elementos presentes na água de reúso e sua aplicação na agricultura por melhorar as condições físicas, biológicas e químicas do solo. Um dos fatores está relacionado ao aumento de alguns elementos químicos como o fósforo e nitrogênio, que são problema para os corpos hídricos por causa da eutrofização, mas que, para algumas classes de solos da região Semiárida brasileira, como por exemplo o Neossolo litólico,  seriam uma solução, pois são elementos pouco encontrados nessas localidades e são nutrientes importantes para o desenvolvimento das culturas.</p>
                                        </div>
                                    </Modal>

                                </div>

                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Impactos sociais" key="5">
                            <p>
                                Quando comparado ao reúso no descarte da água cinza, o Sistema bioágua facilita o trabalho da família agricultora, pois para fazer o reúso de descarte eles teriam que reunir as águas após cada uso na cozinha e lavagem das roupas e armazenar esse volume em baldes ou compartimentos, geralmente, de 100 ou 200 litros. Após todo esse trabalho, as águas cinzas podem ser utilizadas nas regas das plantas no entorno das casas, ainda que de maneira manual, sendo planta por planta, tornando ainda mais cansativa a atividade. No sistema bioágua, as águas usadas são destinadas por tubulações hidráulicas até os filtros biológicos e físicos, onde ocorre o tratamento e armazenamento posterior em reservatórios maiores e apropriados. Desse reservatório, a água pode ser bombeada para um sistema de irrigação por gotejo, simplificando todo o trabalho com o reúso de água de descarte domiciliar e ainda possibilita ampliar o sistema de produção de plantas, proporcionando mais tempo livre para outras atividades, inclusive para geração de mais renda.

                        </p>
                            {/* <div className=' tolltip-margin'>
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
                                    title={'Impactos sociais'}
                                    visible={this.state.visible1}
                                    width={1000}
                                    footer={null}
                                    onCancel={() =>
                                        this.setState({
                                            visible1: false
                                        })
                                    }
                                >
                                    <div className='content-modal'>
                                        <p>Ao levar em consideração 17 objetivos do Desenvolvimento Sustentável da ONU o Sistema Bioágua se enquadra nos seguintes objetivos:</p>

                                        <p>Contribui para a erradicação da pobreza, permite o acesso a serviços essenciais, estimula o mercado local e reduz a exposição a vulnerabilidades auxiliando no enfrentamento das crises hídricas recorrentes no Semiárido.</p>

                                        <p>Permite o acesso à alimentação segura, adequada e saudável para o ano, devido ao aumento da produtividade agrícola, disponibilizando renda a pequenos produtores e garantindo o autoconsumo dos agricultores familiares.Promove a segurança alimentar a partir de uma agricultura sustentável </p>

                                        <p>Reduz o número de doenças de veiculação hídrica e de vetores provenientes da falta de saneamento.</p>

                                        <p>Difunde o conhecimento permitindo a troca de saberes a grupos em situação de vulnerabilidade.</p>

                                        <p>Discute as formas de discriminação de gênero para as mulheres do campo, como forma de eliminar a desigualdade nos trabalhos do campo que são remunerados ou não, com a participação plena e efetiva das mulheres nos processos de decisão.</p>

                                        <p>Melhora a qualidade de água reduzindo a poluição ao minimizar o lançamento indiscriminado de efluentes não tratados. Aumento do reúso seguro localmente, principalmente na região rural do Semiárido o que permite o acesso a água de reuso para irrigação.</p>

                                        <p>Aumento da diversificação de produtos agrícolas, agregando valor e incentivando o empreendedorismo rural.</p>

                                        <p>Promove a inclusão social, econômica e política com a finalidade de reduzir as desigualdades.</p>

                                        <p>Melhoria da habitação aumentando a resiliência de áreas afetadas por desastres naturais de origem hidrometeorológica e climatológica.</p>

                                        <p>Redução da geração de resíduos por meio da Economia Circular.</p>

                                        <p>Amplia a resiliência e a capacidade adaptativa a riscos e impactos resultantes da mudança do clima e desastres naturais.</p>

                                    </div>
                                </Modal>

                            </div> */}
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Adaptação à realidade da agricultura familiar" key="6">
                            <p>
                                A adaptação do agricultor à nova rotina se dá por meio das ações de capacitação e troca de saberes que acontecem durante as etapas de implantação da tecnologia. A partir de visitas a propriedades que já utilizam a tecnologia, o agricultor tem a oportunidade de experienciar a rotina da tecnologia e tirar dúvidas em relação à sua manutenção.  Com a implantação do sistema e todo o procedimento de preparação, bem como, o comprometimento do agricultor com a tecnologia, é possível obter os resultados desejados.
                        </p>
                        </TabPane>
                    </Tabs>

                </div>

                <div className=''>                    
                 
                    <Card className="list-ods">
                        <div className="title-card-ods">
                        <div className='title-ods'>Ao levar em consideração 17 objetivos do Desenvolvimento Sustentável da ONU o Sistema Bioágua se enquadra nos seguintes objetivos:</div>

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
            </div>)
    }
}
export default AnalyzeCB
