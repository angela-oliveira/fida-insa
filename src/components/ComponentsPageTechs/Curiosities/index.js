import React from 'react';
import './index.css';
import { Collapse, Button, Tabs } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import cartilhaeolica from '../../../utils/pdf/Cartilha-compactado.pdf'
import cartilhaeolicaEspanhol from '../../../utils/pdf/Cartilha Eólica Espanhol_compressed.pdf'
import cartilhaeolicaIngles from '../../../utils/pdf/Cartilha Eólica INGLÊS_compressed.pdf'
import Parceiros from "../../../components/Parceiros"

const { Panel } = Collapse;

const text1 = `A origem do catavento remonta aos antigos moinhos de vento. Essa origem não está realmente clara, mas alguns estudiosos acreditam ter originado na Pérsia de 915 a.C, hoje Irã. Entretanto, existem indicações sobre o emprego de moinhos de vento mais remotos no Iraque, Egito e China. Na Europa, os moinhos de vento foram introduzidos no século XII, mas somente no século XV se espalharam pelo continente. Ao longo dos séculos, o uso da energia dos ventos se prestou a muitas aplicações como na moagem de grãos, extração de óleo, bombeamento de água, dentre outras.`
const text2 = `O funcionamento do catavento baseia-se no movimento das massas de ar, que, ao passar pelas hélices fazem com que suas pás girem. Para bombeamento de água, o catavento deve ser instalado em conjunto com uma bomba do tipo pistão. Para fins de irrigação, é geralmente utilizado para bombear água para reservatórios elevados. Do reservatório, a água pode então ser distribuída por gravidade a sistemas de irrigação por gotejamento, microaspersão ou superfície. É um sistema de alto custo de aquisição em comparação ao sistema de bombeamento elétrico, mas de baixo custo de operação e manutenção.`
const text3 = `Charles Francis Brush (1849-1929), um dos fundadores da indústria elétrica dos Estados Unidos, construiu um grande moinho de vento na sua propriedade, em Cleveland. Esse foi o primeiro registro de uma turbina movida pelo vento para produção de eletricidade. O diâmetro do rotor era de 17 metros, com 144 lâminas feitas de madeira. A turbina funcionou por 20 anos e era usada para carregar baterias que ficavam no celeiro de sua mansão. Essa primeira versão gerava apenas 12 quilowatts (kW).`
// const textCuriosities = {
//     title:"" ,
//     text: ""
// }

const { TabPane } = Tabs;


function Curiosities() {
    return (
        <div className='Curiosities'>

            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="A origem do catavento é datada de 915 a.C" key="1">
                        <p>{text1}</p>
                    </Panel>
                    <Panel header="Uma tecnologia simples com uma fonte energética inesgotável para a agricultura" key="2">
                        <p>{text2}</p>
                    </Panel>
                    <Panel header="A transição de um moinho de vento para a geração de energia elétrica" key="3">
                        <p>{text3}</p>
                    </Panel>
                </Collapse>

            </div>
            <div className='curiosities-label'>Cartilha Eólica</div>
            <div className='subtitle'><p>Informações resumidas sobre a tecnologia Eólica</p>
            </div>

            <div className='tabs-cartilha'>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Português" key="1">
                        <div className="component-cartilha">
                            <center>
                                <iframe src={cartilhaeolica}></iframe>

                            </center>
                            <br></br>

                        </div>
                        <div className="component-cartilha">
                            <a target="_blank" className=""
                                href={cartilhaeolica}
                            >
                                <Button
                                    className='button-download-cartilha-eolica'
                                    onClick={() => this.openModal()}
                                    type="primary"
                                    shape="circle"
                                    icon={<DownloadOutlined />}
                                >Download Cartilha</Button></a>
                        </div>
                    </TabPane>
                    <TabPane tab="Espanhol" key="2">
                        <div className="component-cartilha">
                            <center>
                                <iframe src={cartilhaeolicaEspanhol}></iframe>

                            </center>
                            <br></br>

                        </div>
                        <div className="component-cartilha">
                            <a target="_blank" className=""
                                href={cartilhaeolicaEspanhol}
                            >
                                <Button
                                    className='button-download-cartilha-eolica'
                                    onClick={() => this.openModal()}
                                    type="primary"
                                    shape="circle"
                                    icon={<DownloadOutlined />}
                                >Download Cartilha</Button></a>
                        </div>
                    </TabPane>
                    <TabPane tab="Inglês" key="3">
                        <div className="component-cartilha">
                            <center>
                                <iframe src={cartilhaeolicaIngles}></iframe>

                            </center>
                            <br></br>

                        </div>
                        <div className="component-cartilha">
                            <a target="_blank" className=""
                                href={cartilhaeolicaIngles}
                            >
                                <Button
                                    className='button-download-cartilha-eolica'
                                    onClick={() => this.openModal()}
                                    type="primary"
                                    shape="circle"
                                    icon={<DownloadOutlined />}
                                >Download Cartilha</Button></a>
                        </div>
                    </TabPane>
                </Tabs>

            </div>

            <Parceiros />
        </div>
    )
}

export default Curiosities;