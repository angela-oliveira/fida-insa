import React from 'react';
import './index.css';
import { Collapse } from 'antd';

import Parceiros from "../../../components/Parceiros"

const { Panel } = Collapse;

const text1 = `Na comunidade de Santa Luzia as agricultoras costumam secar as roupas lavadas perto do Ecofogão devido o calor emitido pela chapa de ferro e curiosamente a roupa não fica com cheiro de fumaça porque o Ecofogão não deixa escapar a fumaça a não ser pela chaminé, onde a saída fica para fora do telhado. Portanto, a secagem de roupas próxima ao Ecofogão não deixa cheiro de fumaça!`
const text2 = `Segundo a Envirofit®, os fogões ecológicos reduzem o consumo de combustível em até 60% e diminuem a emissão de poluentes em até 82%. A Envirofit calcula que, ao longo de cinco anos de ciclo de vida, os seus fogões vão propiciar uma redução na emissão de CO2 da ordem de 17 milhões de toneladas, o equivalente ao consumo anual estimado de mais de 1 milhão de automóveis.`
const text3 = `Hoje, 3 bilhões de pessoas em todo o mundo ainda cozinham em fogo aberto (pequenas fogueiras diretamente no chão) ou fogões rudimentares e altamente poluentes.`
const text4 = `Devido a exposição frequente à fumaça proveniente da queima da madeira nos fogões à lenha tradicionais, isso causa cerca de 4 milhões de mortes prematuras por ano, afetando especialmente mulheres e crianças, por serem os que mais tempo passam ao redor do fogão. As mulheres também são as mais afetadas pelos impactos sobre os meios de subsistência, uma vez que o tempo dedicado a cozinhar e coletar lenha pode ser usado em outras atividades produtivas. No caso da compra da lenha ou do carvão, o alto consumo de combustível pode representar um custo considerável para as famílias.`
const text5 = `A lenha tradicionalmente teve um papel importante como fonte de energia no Brasil, porém, nas últimas décadas ela vem sendo substituída por derivados de petróleo e pela eletricidade. A demanda do setor domiciliar, mesmo que tenha diminuído nas últimas décadas é equiparável à do setor industrial e concentra-se nas regiões rurais, principalmente para cozinhar. Porém, por ser esta uma demanda altamente dispersa, é muito difícil de quantificar. Segundo uma pesquisa realizada pela Associação de Plantas do Nordeste – APNE em 2017, os domicílios rurais nordestinos constituem a maior demanda de biomassa na região, representando em torno de 30% da demanda total.`
const text6 = `A Empresa de Pesquisa Energética (EPE), buscando continuamente inovar nas publicações e análises disponibilizadas à sociedade, apresenta o Balanço Energético Nacional Interativo. Uma ferramenta de visualização e análise de dados que permite ao usuário acessar, na íntegra, as séries históricas de energia nos moldes das versões anuais publicadas no balanço Energético Nacional (BEN).`
const text7 = `As informações tradicionais relativas à oferta e consumo de energia no Brasil, contemplando as atividades de extração de recursos energéticos primários, sua conversão em formas secundárias, a importação e exportação, a distribuição e o uso final da energia, agora podem ser acompanhadas na internet, seguindo a mesma lógica de organização do relatório já conhecido pela sociedade.`
// const textCuriosities = {
//     title:"" ,
//     text: ""
// }



function Curiosities() {
    return (
        <div className='ecofogao-analyze-curiosities Curiosities'> 
        
            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="Secando as roupas lavadas" key="1">
                    <p>{text1}</p>
                    </Panel>
                    <Panel header="Fogão ecológico reduz em até 82% a emissão de poluentes" key="2">
                    <p>{text2}</p>
                    <p>{text3}</p>
                    </Panel>
                    <Panel header="Fatos relevantes: Devido à exposição à fumaça, a queima de combustível também produz efeitos negativos para a saúde" key="3">
                    <p>{text4}</p>
                    </Panel>
                    <Panel header="Fatos relevantes: Devido à exposição à fumaça, a queima de combustível também produz efeitos negativos para a saúde" key="3">
                    <p>{text5}</p>
                    </Panel>
                    <Panel header="Fatos relevantes: Devido à exposição à fumaça, a queima de combustível também produz efeitos negativos para a saúde" key="3">
                    <p>{text6}</p>
                    <p>{text7}</p>
                    </Panel>
                </Collapse>

            </div>

            <Parceiros /> 
        </div>
    )
}

export default Curiosities;