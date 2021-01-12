import React from 'react';
import './index.css';
import { Collapse } from 'antd';

import Parceiros from "../../../components/Parceiros"

const { Panel } = Collapse;

const text1 = `A água é um bem vital para diferentes culturas, e, desde a antiguidade, as civilizações se desenvolvem em locais próximos aos cursos d’água, como rios, lagos, mar e outros. 
`

const text2 = `A qualidade da água já era uma preocupação há 2.000 a.C., pois os persas puniam quem poluísse os recursos hídricos.
`
const text3 = `
O tratamento de água tem registro no antigo Egito, há cerca de 1.500 a.C. Havia uma preocupação por parte dos egípcios com a água imprópria, devido a transmissão de doenças. Por isso, eles realizavam o tratamento da água utilizando sulfato de alumínio com o objetivo de clarificar a água.
`
const text4 = `

A origem da palavra saneamento deriva do latim e pode ter vários significados, dentre eles está: tornar saudável, habitável, curar, sarar e restituir.

`
const text5 = `Há registros que os gregos utilizavam as águas dispostas nos esgotos para irrigar as plantações, realizando dessa forma o reuso das águas.

`




function Curiosities() {
    return (
        <div className='bioagua-curiosities Curiosities'> 
        
            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="A origem do catavento é datada de 915 a.C" key="1">
                    <p>{text1}</p>
                    </Panel>
                    <Panel header="História e a Qualidade da Água" key="2">
                    <p>{text2}</p>
                    </Panel>
                    <Panel header="Tratamento de Água" key="3">
                    <p>{text3}</p>
                    <p>Os antigos Sânscritos e Gregos recomendavam o tratamento da água. Eles realizavam o armazenamento em vasos de cobre, removiam a “nebulosidade” da água por processos de filtração, exposição à luz do sol e ebulição.</p>
                    <p>
                    Em 1855, John Snow conseguiu provar que a cólera era uma doença de veiculação hídrica. Isso ocorreu através de um estudo de caso em que observou uma rua onde havia um poço que era contaminado com águas de um esgoto, e no outro lado, as águas escorriam para longe. Ele percebeu que as pessoas que bebiam a água contaminada com água de esgoto quase todos adoeciam, e com isso, ele conseguiu comprovar sua teoria. (Local: Tâmisa)

                    </p>

                    <p>No final da década de 1880, Louis Pasteur demonstrou a “Teoria do Germe” para doenças. Essa teoria explica como organismos microscópicos podem transmitir doenças a partir da água.

                    </p>
                    </Panel>
                    <Panel header="Saneamento e Uso da Água" key="4">
                    <p>{text4}</p>
                    
                    <p>
                    No Brasil, o saneamento básico é um direito assegurado pela Constituição e pela Lei nº. 11.445/2007. O saneamento consiste em conjunto de serviços, infraestruturas e instalações operacionais de abastecimento de água potável, esgotamento sanitário, limpeza urbana, manejo de resíduos sólidos e drenagem de águas pluviais.

                    </p>
                    <p>Uso da água é necessário para as mais diversas finalidades, inclusive para fins potáveis, como: higiene básica, tarefas domésticas, irrigação, cozimento e higienização de alimentos, entre outros. 

                    </p>
                    </Panel>
                    <Panel header="Reuso de Água" key="5">
                    <p>{text5}</p>
                    </Panel>
                </Collapse>

            </div>

            <Parceiros /> 
        </div>
    )
}

export default Curiosities;