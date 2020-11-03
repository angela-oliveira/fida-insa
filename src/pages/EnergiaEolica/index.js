import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageTechs/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
import Analyze from '../../components/ComponentsPageTechs/Analyze';
import Invest from '../../components/ComponentsPageTechs/Invest';
import Experience from '../../components/ComponentsPageTechs/Experience';
import Curiosities from '../../components/ComponentsPageTechs/Curiosities';

function Eolica() {
    return (
        <div id='body'>
            <HeaderTechs></HeaderTechs>
            <Description />
            <Mapa />
            <Analyze />
            <Invest />
            <Experience />
            <Curiosities />

            {/* <Parceiros/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default Eolica;