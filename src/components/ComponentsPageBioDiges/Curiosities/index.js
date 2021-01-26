import React from 'react';
import './index.css';
import { Collapse, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import Parceiros from "../../../components/Parceiros"
import cartilhabiodigestor from '../../../utils/pdf/Cartilha Biod-compactado.pdf'

const { Panel } = Collapse;

const text1 = `A implementação dos primeiros biodigestores no Brasil ocorreu na década de 1970 após a crise do petróleo iniciada no final de 1973. Essa crise atingiu muitos países importadores de petróleo, principalmente aqueles em desenvolvimento, como o Brasil. Diante disso, houve uma necessidade de recorrer a outros métodos para se obter energia.`
const text2 = `Em Brasília no ano 1979, foram construídos os primeiros biodigestores por meio do projeto do Programa de Mobilização Energética (PME) que consistia em um conjunto de ações voltadas à conservação de energia e à substituição dos derivados de petróleo por combustíveis alternativos.`
const text3 = `A Política Nacional de Resíduos Sólidos (PNRS) é instituída pela Lei n° 12.305/10 e possui instrumentos relevantes para o País enfrentar os principais problemas ambientais, sociais e econômicos consequente do manejo inadequado dos resíduos sólidos com o objetivo de combater a poluição.`
const text4 = `A PNRS ressalta a distinção entre resíduo, isto é, aquilo que possui um valor agregado podendo ser reciclado ou reaproveitado, e rejeito, esse consiste em um material sem valor econômico não podendo ser submetido a tratamento e recuperação através dos processamentos.`

// const textCuriosities = {
//     title:"" ,
//     text: ""
// }



function Curiosities() {
    return (
        <div className='biodigestor-curiosities Curiosities'>

            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="História dos Biodigestores no Brasil" key="1">
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </Panel>
                    <Panel header="Política Nacional de Resíduos Sólidos (PNRS)" key="2">
                        <p>{text3}</p>
                        <p>{text4}</p>
                        Os principais objetivos da PNRS são:
                            <ul>
                                <li>Extinção, redução, reutilização, reciclagem e tratamento de resíduos sólidos;</li>
                                <li>Os rejeitos devem ser descartados de forma adequada;</li>
                                <li>Realizar a intensificação da educação ambiental;</li>
                            </ul>
                    </Panel>
                    <Panel header="Cada tipo de animal produz uma quantidade diferente de metano" key="3">
                        A produção de biogás varia de acordo com o tipo de esterco que se coloca no biodigestor.
                        <ul>
                            <li>Com isso, estima-se que: AVES podem produzir cerca de 0,014 (m3/cabeça/dia) de biogás, levando em consideração que o animal tenha uma massa de 2,5 kg.</li>
                            <li>SUÍNOS podem produzir cerca de 0,240 (m3/cabeça/dia) de biogás, levando em consideração que o animal tenha um massa de 90 kg.</li>
                            <li>BOVINOS podem produzir cerca de 0,240 (m3/cabeça/dia) de biogás, levando em consideração que o animal tenha uma massa de 500 kg.</li>
                        </ul>
                    </Panel>
                </Collapse>

            </div>

            <div className='curiosities-label'>Cartilha Biodigestor</div>
                <div className='subtitle'><p>Informações resumidas sobre a tecnologia Biodigestor</p>
                </div>
            <div className="component-cartilha">
                <center>
                <iframe src={cartilhabiodigestor}></iframe>

                </center>
                <br></br>
                
            </div>
            <div className="component-cartilha">
            <a target="_blank" className="" 
            href={cartilhabiodigestor}
            >
                    <Button 
                                    className='button-download-cartilha-biodigestor' 
                                    onClick={() => this.openModal()} 
                                    type="primary" 
                                    shape="circle" 
                                    icon={<DownloadOutlined />} 
                                >Download Cartilha</Button></a>
            </div>

            <Parceiros />
        </div>
    )
}

export default Curiosities;