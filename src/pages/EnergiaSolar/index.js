import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageSolar/Description';
import Mapa from '../../components/ComponentsPageSolar/Mapa';
import AnalyzeCB from '../../components/ComponentsPageSolar/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageSolar/AnalyzeCO';
import Invest from '../../components/ComponentsPageSolar/Invest';
import Experience from '../../components/ComponentsPageSolar/Experience';
import Curiosities from '../../components/ComponentsPageSolar/Curiosities';

import dataMap from '../../utils/filesJSON/solar.json'

function Solar() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id='body'>
            <HeaderTechs nomeBack={"Biodigestor"} nomeNext={"Energia Eólica"} linkBack="/bio-digestor" linkNext="/energia-eolica"></HeaderTechs>
            <Description />
            <Mapa data={dataMap}/>
            <AnalyzeCB />
            <AnalyzeCO/>
            <Invest />
            <Experience />
            <Curiosities />
        </div>
    )
}

export default Solar;