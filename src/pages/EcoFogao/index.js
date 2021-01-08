import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageTechs/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
import AnalyzeCB from '../../components/ComponentsPageTechs/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageTechs/AnalyzeCO';
import Invest from '../../components/ComponentsPageTechs/Invest';
import Experience from '../../components/ComponentsPageTechs/Experience';
import Curiosities from '../../components/ComponentsPageTechs/Curiosities';

import dataMap from '../../utils/filesJSON/ecofogao/ecofogao.json'

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