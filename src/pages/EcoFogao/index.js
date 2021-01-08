import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageEcofogao/Description';
import Mapa from '../../components/ComponentsPageEcofogao/Mapa';
import AnalyzeCB from '../../components/ComponentsPageEcofogao/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageEcofogao/AnalyzeCO';
import Invest from '../../components/ComponentsPageEcofogao/Invest';
import Experience from '../../components/ComponentsPageEcofogao/Experience';
import Curiosities from '../../components/ComponentsPageEcofogao/Curiosities';

import dataMap from '../../utils/filesJSON/ecofogao.json'

// console.log(dataMap)

function EcoFogao() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id='body'>
            <HeaderTechs></HeaderTechs>
            <Description />
            <Mapa data={dataMap}/>
            <AnalyzeCB/>
            <AnalyzeCO/>
            <Invest />
            <Experience />
            <Curiosities />

            {/* <Parceiros/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default EcoFogao;