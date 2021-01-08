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

import footer from "../../utils/images/footer-agua.png";

import dataMap from '../../utils/filesJSON/bioagua.json';

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
            <div className="footer">
                <img src={footer}></img>
            </div>

        </div>
    )
}

export default BioAgua;