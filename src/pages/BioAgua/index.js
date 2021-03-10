import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';

import Description from '../../components/ComponentsPageBioAgua/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
// import Mapa from '../../components/ComponentsPageBioAgua/Mapa';
import AnalyzeCB from '../../components/ComponentsPageBioAgua/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageBioAgua/AnalyzeCO';
import Invest from '../../components/ComponentsPageBioAgua/Invest';
import Experience from '../../components/ComponentsPageBioAgua/Experience';
import Curiosities from '../../components/ComponentsPageBioAgua/Curiosities';
import Photos from '../../components/ComponentsPageBioAgua/Photos';

import bioAgua1 from '../../utils/images/photos/Bioágua/sobral_casaforte/Cleidiane - Bioágua 04.JPG';
import bioAgua2 from '../../utils/images/photos/Bioágua/sobral_santaluzia/Flaviana - Bioágua 13.JPG';
import bioAgua3 from '../../utils/images/photos/Bioágua/Robério - Bioágua 02.JPG';
import bioAgua4 from '../../utils/images/photos/Bioágua/sobral_santaluzia/Flaviana - Bioágua 01.JPG';
import bioAgua5 from '../../utils/images/photos/Bioágua/sobral_casaforte/Cleidiane - Bioágua 10.JPG';


import dataMap from '../../utils/filesJSON/bioagua/datamap/bioagua.json';


import icoFogao from '../../utils/images/2.png'
import icoEolica from '../../utils/images/3.png'
import footer from "../../utils/images/footer-agua.png";


function BioAgua() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='body' className='bioagua'>
            <HeaderTechs
                nameBack={'Energia Eólica'}
                nameNext={'Ecofogão'}
                linkBack='/energia-eolica'
                iconBack={icoEolica}
                linkNext='/eco-fogao'
                iconNext={icoFogao}
                idBack={'eolica'}
                idNext={'ecofogao'}
            ></HeaderTechs>
            <Description />
            <Mapa data={dataMap} 
                colorLight='#1ac3e2'
                colorMedium='#1593aa' 
                photo={[bioAgua1, bioAgua2, bioAgua3, bioAgua4, bioAgua5]} />
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