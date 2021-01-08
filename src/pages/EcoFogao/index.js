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
import Photos from '../../components/ComponentsPageEcofogao/Photos'
import footer from "../../utils/images/footer-fogao.png";

import dataMap from '../../utils/filesJSON/ecofogao.json'

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
            <Photos />
            <Curiosities />
            <div className="footer">
                <img src={footer}></img>
            </div>
        </div>
    )
}

export default EcoFogao;