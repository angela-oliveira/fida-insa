import React, { useEffect } from 'react'
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
import Photos from '../../components/ComponentsPageBioAgua/Photos';

import dataMap from '../../utils/filesJSON/bioagua/datamap/bioagua.json';


import icoFogao from '../../utils/images/2.png'
import icoEolica from '../../utils/images/3.png'
import footer from "../../utils/images/footer-agua.png";


function BioAgua() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='body'>
            <HeaderTechs linkBack='/energia-eolica' iconBack={icoEolica} linkNext='/eco-fogao' iconNext={icoFogao} ></HeaderTechs>
            <Description />
            <Mapa data={dataMap} />
            <AnalyzeCB />
            <AnalyzeCO />
            <Invest />
            <Experience />
            <Photos />
            <Curiosities />
            <div className="footer">
                <img src={footer}></img>
            </div>

        </div>
    )
}

export default BioAgua;