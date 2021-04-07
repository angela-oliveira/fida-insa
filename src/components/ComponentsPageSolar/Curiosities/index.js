import React from 'react';
import './index.css';
import { Collapse, Button, Tabs } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import Parceiros from "../../../components/Parceiros"
import cartilhasolar from '../../../utils/pdf/Cartilha Solar-compactado.pdf'
import cartilhasolarEspanhol from '../../../utils/pdf/Cartilha Solar Espanhol_compressed.pdf'
import cartilhasolarIngles from '../../../utils/pdf/Cartilha Solar INGLÊS_compressed.pdf'

const { Panel } = Collapse;

const text1 = `O francês Alexandre Edmond Becquerel descobriu o efeito fotovoltaico em 1939, enquanto realizava experiências eletroquímicas na oficina de seu pai. Em 1873 foi criada a primeira célula fotovoltaica que era feita de selênio. Atualmente quase 80% dos painéis solares são compostos por alguma variação de silício graças a Calvin Fuller que, em 1954, desenvolveu as células fotovoltaicas de silício. No ano de 1973, foi construída a primeira casa abastecida por energia solar, fato realizado pela Universidade de Delaware nos EUA. Mas, foi em 2004 que foram produzidas mundialmente milhões de células com eficiência na ordem dos 16%, ultrapassando pela primeira vez a barreira de 1 gigawatt de potência elétrica anual.`
const text2 = `“Aqualuz”: tecnologia voltada para o tratamento de cisternas, usando apenas o Sol, sem haver a necessidade de usar substâncias químicas, filtros sofisticados, nem intervenções na cisterna. Sua montagem acontece em apenas 10 minutos, com uso diário por 20 anos, sendo sua baixa manutenção feita apenas com água e sabão. A tecnologia é constituída por uma caixa de inox coberta por um vidro e uma tubulação simples ligada à cisterna.`
const text3 = `Destilador solar: é um protótipo (DSR) robotizado de baixo custo e de fácil operacionalização, com sistema de rastreio solar, visando aplicações residenciais, laboratoriais e industriais, para destilação de água. O equipamento é composto por quatro partes fundamentais: calha receptora; tubo absorvedor; sistema robotizado de mobilidade da antena e sistema de arrefecimento da condensadora.`
const text4 = `Dessalinizador solar: a tecnologia promove a destilação solar eliminando completamente todos os sais, metais pesados, bactérias e micróbios presentes em águas poluídas, assim também como a remoção de vários pesticidas, devido às altas temperaturas e a radiação ultravioleta. No final do processo, é feita facilmente uma reconstituição simples de sais para uso como água potável.`
const text5 = `Secador solar: composto por uma peça que desempenha simultaneamente a função de coletar a energia solar e de servir como câmara de secagem, onde a radiação solar incide diretamente sobre o produto colocado no secador. O ar é aquecido e a circulação é feita por convecção natural, sendo uma secagem rápida e de baixo custo.`
// const textCuriosities = {
//     title:"" ,
//     text: ""
// }

const { TabPane } = Tabs;



function Curiosities() {
    return (
        <div className='solar-curiosities Curiosities'> 
        
            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header=" Você sabia que a energia fotovoltaica vem desde 1839?" key="1">
                    <p>{text1}</p>
                    </Panel>
                    <Panel header="Você sabia que além da energia solar outros dispositivos são utilizados para aproveitar energia proveniente do sol?" key="2">
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>
                    <p>{text5}</p>
                    </Panel>
                </Collapse>

            </div>

            <div className='curiosities-label'>Cartilha Solar</div>
                <div className='subtitle'><p>Informações resumidas sobre a tecnologia Solar</p>
            </div>

            <div className='tabs-cartilha'>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Português" key="1">

                        <div className="component-cartilha">
                            <center>
                            <iframe src={cartilhasolar}></iframe>

                            </center>
                            <br></br>
                            
                        </div>
                        <div className="component-cartilha">
                        <a target="_blank" className="" 
                        href={cartilhasolar}
                        >
                                <Button 
                                                className='button-download-cartilha-solar' 
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
                            <iframe src={cartilhasolarEspanhol}></iframe>

                            </center>
                            <br></br>
                            
                        </div>
                        <div className="component-cartilha">
                        <a target="_blank" className="" 
                        href={cartilhasolarEspanhol}
                        >
                                <Button 
                                                className='button-download-cartilha-solar' 
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
                            <iframe src={cartilhasolarIngles}></iframe>

                            </center>
                            <br></br>
                            
                        </div>
                        <div className="component-cartilha">
                        <a target="_blank" className="" 
                        href={cartilhasolarIngles}
                        >
                                <Button 
                                                className='button-download-cartilha-solar' 
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