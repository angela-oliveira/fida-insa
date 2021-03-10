import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageEcofogao/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
// import Mapa from '../../components/ComponentsPageEcofogao/Mapa';
import AnalyzeCB from '../../components/ComponentsPageEcofogao/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageEcofogao/AnalyzeCO';
import Invest from '../../components/ComponentsPageEcofogao/Invest';
import Experience from '../../components/ComponentsPageEcofogao/Experience';
import Curiosities from '../../components/ComponentsPageEcofogao/Curiosities';
import Photos from '../../components/ComponentsPageEcofogao/Photos'
import footer from "../../utils/images/footer-fogao.png";

import School from '../../components/ComponentsPageEcofogao/School'

import icoAgua from '../../utils/images/4.png';
import icoBioDigestor from '../../utils/images/5.png';

import dataMap from '../../utils/filesJSON/ecofogao/ecofogao.json';


function EcoFogao() {

    useEffect(()=>{
        window.scrollTo(0, 0) 
    },[])

    return (
        <div id='body' className='ecofogao'>
            <HeaderTechs 
                nameBack={'Bioágua'} 
                nameNext={'Biodigestor'} 
                linkBack='/bio-agua' 
                iconBack={icoAgua} 
                linkNext='/bio-digestor' 
                iconNext={icoBioDigestor} 
                idBack={'bioagua'}
                idNext={'biodigestor'}
            ></HeaderTechs>
            <Description />
            <Mapa data={dataMap} colorLight='#aea58a' colorMedium='#89773c'/>
            <AnalyzeCB/>
            <AnalyzeCO/>
            <Invest />
            <Experience />
            <School />
            <Photos />
            <Curiosities />
            <div className="footer">
                <img src={footer}></img>
            </div>
        </div>
    )
}

export default EcoFogao;