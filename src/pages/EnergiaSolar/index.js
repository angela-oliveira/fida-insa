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
import Photos from '../../components/ComponentsPageSolar/Photos'
import footer from "../../utils/images/footer-solar.png";

import dataMap from '../../utils/filesJSON/solar/solar.json'

function Solar() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id='body'>
            <HeaderTechs linkBack="/bio-digestor" linkNext="/energia-eolica"></HeaderTechs>
            <Description />
            <Mapa data={dataMap}/>
            <AnalyzeCB />
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

export default Solar;