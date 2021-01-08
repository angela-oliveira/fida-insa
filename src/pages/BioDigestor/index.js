import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';

import Description from '../../components/ComponentsPageBioDiges/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
import AnalyzeCB from '../../components/ComponentsPageBioDiges/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageBioDiges/AnalyzeCO';
import Invest from '../../components/ComponentsPageBioDiges/Invest';
import Experience from '../../components/ComponentsPageBioDiges/Experience';
import Curiosities from '../../components/ComponentsPageBioDiges/Curiosities';

import dataMapa from '../../utils/filesJSON/biodigestor/biodigestor.json';

import footer from "../../utils/images/footer-digestor.png";


function BioDigestor() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id='body'>
            <HeaderTechs></HeaderTechs>
            <Description />
            <Mapa data={dataMapa}/>
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

export default BioDigestor;