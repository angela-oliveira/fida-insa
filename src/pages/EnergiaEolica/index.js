import React from 'react'
import { Link  } from 'react-router-dom'
import { Col } from 'antd'

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
import footer from "../../utils/images/Group 137.png";
import Parceiros from "../../components/Parceiros";

function Eolica() {
    return (
        <div id='body'>
            
            <HeaderTechs></HeaderTechs>
            <Description />
            <Mapa />
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

export default Eolica;