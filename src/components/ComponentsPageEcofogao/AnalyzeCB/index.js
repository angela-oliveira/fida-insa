import React from 'react';
import './index.css';
import { Tabs, Statistic, Card, Row, Col, Tooltip, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

class AnalyzeCB extends React.Component{
    state = {
        visible: false
    }

    openModal() {
        this.setState({ visible: true })
    }
    render () {
        return (
            <div className='analyze-cb'>
                <div className='casca-ana-cb'>
                    <div className='cb-label'>ANÁLISE CUSTO BENEFÍCIO</div>
                    <Tabs tabPosition='left'>
                        <TabPane className="analise-cb-background" tab="Custos de instalação" key="1">
                            <div>
                                <p>
                                    O FIDA através do Projeto Paulo Freire no Ceará investiu por meio dos Planos de Investimentos Produtivos em tecnologias sociais que possibilitou de forma agroecológica o desenvolvimento sustentável e social de práticas de produção (agrícola e não agrícola) para consumo das famílias e comercialização, gerando assim renda e bem viver ao homem do campo. Neste sentido, foram  financiados investimentos produtivos para implementação de fogões ecológicos.
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
                                        title={'Custos de instalação'}
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
                                            <p>
                                                A implantação de um ecofogão pode custar em torno de R$ 1.150,00. Os valores variam de acordo com a tabela de preço dos materiais e mão de obra do local da residência a ser implantada.
                                            </p>
                                            <p>
                                                Para construir um fogão ecológico de 2 metros de comprimento, 50 centímetros de largura e de altura variando entre 80 a 90 centímetros, precisamos em média dos seguintes materiais:
                                            </p>
                                            <ul>
                                                <li>Entre 300 a 350 tijolos do tipo manual maciço. Irá depender do tamanho da forma do tijolo</li>
                                                <li>10 latas de massame ou barro saibre</li>
                                                <li>1 saco de cimento</li>
                                                <li>20 latas de areia para encher a parte oca do fogão</li>
                                                <li>1 Forno construído com chapa 16 de 40 centímetros de comprimento, por 40 centímetros de profundidade e 35 centímetros de altura. Quando mandar fazer o forno no serralheiro, é bom encomendar duas grelhas: a primeira com 2 centímetros de altura para que não coloque os alimentos direto na chapa e outra na metade do forno. Por fim, é importante que o serralheiro construa hastes em cima em baixo de 5 centímetros de altura.</li>
                                                <li>3 manilhas de barro de 50 centímetros de comprimento e 100 milímetros de diâmetro para a chaminé - Para o acabamento da chaminé, use um joelho de barrou ou uma toca de zinco</li>
                                                <li>Chapa mineira com 3 bocas</li>
                                                <li>Um litro de verniz incolor ou resina para acabamento do fogão</li>
                                                
                                            </ul>
                                            <p>
                                            E para o acabamento da porta do forno, pode-se usar tinta apropriada para alta temperatura.
                                            </p>
                                            
                                        </div>
                                    </Modal>

                                </div>
                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Custos de manutenção" key="2">
                            <div>
                                <p>
                                    De acordo com os usuários a manutenção no ecofogão é mínima e varia conforme o uso e a forma de manuseio com a lenha na câmara de combustão. Outro acessório que requer cuidados é a chaminé que deve ser limpa a cada 6 meses devido o acúmulo de fuligem que pode entupir e fazer a fumaça voltar para dentro de casa. A manutenção pode ser feita pelo próprio beneficiário a medida da necessidade e do uso do ecofogão onde normalmente se precisa consertar as rachaduras na alvenaria provocada pelo calor e na chaminé que pode descolar da alvenaria. Também e em menor frequência, nas peças de ferro (chapa e forno) devido uma maior durabilidade do material. É muito relativa a manutenção pelo uso, já que alguns beneficiários também possuem fogão a gás.
                                </p>     
                                <p>
                                O custo da manutenção varia conforme a peça que estragou, variando de R$ 15,00 à 300,00, conforme nos declarou um usuário que recebeu a capacitação para construir os ecofogões nas comunidades.
                                </p>
                            </div>

                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Tempo de vida útil da tecnologia" key="3">
                            <div>
                                <p>
                                    A tecnologia social do Ecofogão possui uma vida útil de mais de 10 anos, porém nenhum dos que foram visitados possui esse tempo de uso. Esse tempo de vida útil foi analisado visto que ele é feito de alvenaria, ferro e cerâmica. Segundo depoimentos de usuários e construtor esse período pode variar para mais ou menos dependendo dos cuidados, zelo e da manutenção com seu equipamento. Com o Ecofogão tudo é muito relativo ao seu uso e cuidados feitos pelo usuário.
                                </p>     
                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Impactos ambientais" key="4">
                            <div>
                                <p>
                                Estudos e pesquisas em comparação com o fogão a lenha convencional mostraram que o Ecofogão apresentou uma economia de 53,4% no consumo de madeira. O Ecofogão produz mais calor com menor quantidade de lenha e carvão protegendo assim o meio-ambiente. O consumo de madeira por família caiu de 270 para 135 quilos, por ano, redução equivalente a 50%.
                                </p> 
                                <p>
                                A principal diferença do fogão convencional para o ecofogão está no uso da lenha, onde a quantidade utilizada é maior e a madeira fica mais exposta, emitindo mais fuligem. O convencional não tem forno e aquece menos, a câmara de combustão é mais aberta e emite mais fumaça e fuligem, poluindo mais a cozinha e o meio ambiente.
                                </p>
                                <p>
                                Os estudos mostraram um aumento na eficiência de 64% no Ecofogão comparado com o fogão convencional e também indicaram que o Ecofogão usou entre 53 e 57% menos lenha que o fogão convencional. Como consequência, reduziu o trabalho de coletar e armazenar a lenha em casa.
                                </p>   
                                <p>
                                Os depoimentos dos familiares referem que o Ecofogão pode trabalhar com vegetação secundária, resto de madeira e materiais alternativos como sabugo de milho, casca de coco, gravetos e cascas mais grossas de árvores. Também foi visível que o Ecofogão produz menos fumaça do que o normal.
                                </p>  
                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Impactos sociais" key="5">
                            <div>
                                <p>
                                Além de ser uma demanda para a preservação ambiental, a utilização do Ecofogão também é uma questão de saúde pública, pois boa parte das mulheres e crianças, que estão condicionadas às atividades de casa e são usuárias do fogão a lenha convencional adoecem com problemas respiratórios devido a inalação da fuligem expelida. Estudos dizem que respirar a fumaça nesses casos é equivalente a fumar dois maços de cigarro por dia. No Brasil registra-se 21 mortes por ano pela aspiração da fumaça.
                                </p>
                                <p>
                                Melhoria da qualidade de vida das famílias com a redução de fuligem que causam danos à saúde, especialmente a das mulheres e crianças, também está associada a diminuição da carga de trabalho para procurar lenha nas matas.
                                </p>
                                <p>
                                Diante dessas observações concluímos que a distribuição e uso dessa tecnologia social do Ecofogão na região semiárida deve trazer impactos positivos para o meio ambiente e melhorar a qualidade de vida das famílias rurais.
                                </p>
                                <p>
                                Outro benefício é econômico. O consumo de gás de cozinha reduziu em decorrência do maior uso do fogão agroecológico: o gás custava R$ 75,00 ao mês para família e, hoje, meio botijão é mais que suficiente para dar conta da cozinha.
                                </p>

                            </div>
                        </TabPane>
                        <TabPane className="analise-cb-background" tab="Adaptação à realidade da agricultura familiar" key="6">
                            <div>
                                <p>
                                O fogão ecológico tem como objetivo evitar fumaças dentro da casa, melhorar o aquecimento propiciando rapidez no preparo dos alimentos, queimar a lenha por completo, ser resistente evitando o aparecimento de rachaduras, ser adequado ao trabalho devido altura e superfície tecnicamente recomendáveis e, ainda, ter boa aparência e satisfazer toda a família.
                                </p>
                                <p>
                                Para as famílias beneficiadas, o equipamento trouxe muitas vantagens, sobretudo para a saúde, em função da diminuição da fumaça e da fuligem, além de não sujarem as panelas e as paredes das cozinhas. Também os ecofogões permitem uma economia financeira para as famílias por reduzir o uso de lenha, gás e carvão.
                                </p>
                                <p>
                                As famílias do semiárido brasileiro usam como combustíveis para cozinhar o gás de cozinha, o carvão e a lenha. Isso foi confirmado nas visitas de campo realizadas. O uso de um ou outro depende do tipo de alimento que vai ser preparado, da disponibilidade e do preço de cada tipo de combustível, e da situação econômica da família em cada momento.
                                </p>
                                <p>
                                O Projeto Paulo Freire tem como objetivo reduzir a pobreza e elevar o padrão de vida de agricultores e agricultoras familiares em 31 municípios cearenses, através da inclusão social e econômica de forma sustentável. As comunidades rurais possuem alguns dos mais baixos Índices de Desenvolvimento Humano (IDH), critério adotado pelo Fundo Internacional de Desenvolvimento da Agricultura (FIDA), e o público prioritário do projeto são jovens, mulheres, povo e comunidades tradicionais.
                                </p>

                            </div>
                        </TabPane>
                    </Tabs>
                
                </div>
            </div>
        )
    }
}
export default AnalyzeCB
