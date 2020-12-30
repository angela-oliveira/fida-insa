import React from 'react';
import './index.css';
import { Collapse } from 'antd';

import Parceiros from "../../../components/Parceiros"

const { Panel } = Collapse;

const text1 = `
A origem do catavento não está claramente sinalizada na história.
Mas alguns estudiosos acreditam ter originado na Pérsia de 915 a.C, hoje Irã, os mais antigos registros sobre moinhos de vento. Entretanto, existem indicações sobre o emprego de moinhos de vento mais remotos no Iraque, Egito e China. Na Europa, os moinhos de vento foram introduzidos no século XII, mas apenas no século XV, se espalharam pelo continente. Se prestou a muitas aplicações no passado, como na moagem de grãos, extração de óleo, bombeamento de água, dentre outras (BARROS, 2007).
`;
const text2 = `Seu funcionamento baseia-se no movimento da massa de ar, que é o vento, que ao passar pela hélice faz com que suas pás girem. Com o torque existente em seu eixo transferindo a bomba eleva a água ao reservatório (BARROS, 2007).`
const text3 = `Para bombeamento de água, o cata-vento deve ser instalado em conjunto com
uma bomba do tipo pistão (BARROS, 2007). Para fins de irrigação, é geralmente utilizado para bombear água para reservatórios posicionados a uma certa altitude. Do reservatório a água pode então ser distribuída por gravidade a sistemas de irrigação por gotejamento, microaspersão ou superficial. É um sistema de alto custo de aquisição em comparação ao sistema de bombeamento elétrico, mas de baixo custo de operação e manutenção. Uma necessidade básica para a instalação do sistema é que na região tenha ventos acima de 2 m/s (EMBRAPA CNPAT, 2004).`
// const textCuriosities = {
//     title:"" ,
//     text: ""
// }



function Curiosities() {
    return (
        <div className='Curiosities'> 
        
            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="Curiosidades" key="1">
                    <p>{text1}</p>
                    </Panel>
                    <Panel header="Fatos relevantes" key="2">
                    <p>{text2}</p>
                    <p>{text3}</p>
                    </Panel>
                </Collapse>

            </div>

            <Parceiros /> 
        </div>
    )
}

export default Curiosities;