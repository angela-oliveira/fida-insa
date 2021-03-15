import React, { useEffect } from 'react'
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
import Photos from '../../components/ComponentsPageTechs/Photos'
import footer from "../../utils/images/footer-eolica.png";
import Parceiros from "../../components/Parceiros";


import eolica1 from '../../utils/images/photos/eólica_fotos/EOLICA-FAMILIA-1200.jpg';
import eolica2 from '../../utils/images/photos/eólica_fotos/EOLICA-PANORAMICA CATAVENTO-1200.jpg';
import eolica3 from '../../utils/images/photos/eólica_fotos/EOLICA-CATAVENTO-1200.jpg';
import eolica4 from '../../utils/images/photos/eólica_fotos/EOLICA-CAMPO SECO-1200.jpg';
import eolica5 from '../../utils/images/photos/eólica_fotos/a.jpg';

import dataMap from "../../utils/filesJSON/eolica/datamap/eolica.json";


import icoSolar from '../../utils/images/1.png';
import icoAgua from '../../utils/images/4.png';
import infoEolica from "../../utils/filesJSON/eolica/infoEolica.json";

function Eolica() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <div id='body' className='eolica'>
            <HeaderTechs 
                linkBack='/energia-solar' 
                nameBack={'Energia Solar'} 
                nameNext={'Bioágua'} 
                iconBack={icoSolar} 
                linkNext='/bio-agua' 
                iconNext={icoAgua} 
                idBack={'solar'}
                idNext={'bioagua'}
            ></HeaderTechs>
            <Description data={infoEolica.descricao}/>
            <Mapa data={dataMap} 
            colorLight='#30d1c5' 
            colorMedium='#329ba3'
            photo={[eolica1, eolica2, eolica3, eolica4, eolica5]}
            />
            <AnalyzeCB data={infoEolica.analiseCusto}/>
            <AnalyzeCO data={infoEolica.analiseCO2}/>
            <Invest data={infoEolica}/>
            <Experience />
            <Photos />
            <Curiosities data={infoEolica.voceSabia}/>
            <div className="footer">
                <img src={footer}></img>
            </div>
        </div>
    )
}

export default Eolica;