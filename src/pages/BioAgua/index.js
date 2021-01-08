import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';

import Description from '../../components/ComponentsPageBioAgua/Description';
import Mapa from '../../components/ComponentsPageBioAgua/Mapa';
import AnalyzeCB from '../../components/ComponentsPageBioAgua/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageBioAgua/AnalyzeCO';
import Invest from '../../components/ComponentsPageBioAgua/Invest';
import Experience from '../../components/ComponentsPageBioAgua/Experience';
import Curiosities from '../../components/ComponentsPageBioAgua/Curiosities';

import dataMap from '../../utils/filesJSON/bioagua/datamap/bioagua.json';

function BioAgua() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div id='body'>
            <HeaderTechs></HeaderTechs>
            <Description />
            <Mapa data={dataMap}/>
            <AnalyzeCB />
            <AnalyzeCO />
            <Invest />
            <Experience />
            <Curiosities />

            {/* <Parceiros/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default BioAgua;