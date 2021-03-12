import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';
import Description from '../../components/ComponentsPageSolar/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
// import Mapa from '../../components/ComponentsPageSolar/Mapa';
import AnalyzeCB from '../../components/ComponentsPageSolar/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageSolar/AnalyzeCO';
import Invest from '../../components/ComponentsPageSolar/Invest';
import Experience from '../../components/ComponentsPageSolar/Experience';
import Curiosities from '../../components/ComponentsPageSolar/Curiosities';
import Photos from '../../components/ComponentsPageSolar/Photos'
import footer from "../../utils/images/footer-solar.png";
import School from '../../components/ComponentsPageSolar/School'

import solar1 from '../../utils/images/photos/solar/SOLAR_PAINEL_SOLAR_1200.jpg'
import solar2 from '../../utils/images/photos/solar/SOLAR_FAMILIA_SEU_EUCLIDES_1200.jpg'
import solar3 from '../../utils/images/photos/solar/SOLAR_TECNOLOGIA_E_CAMPO_DISTANTE_1200.jpg'
import solar4 from '../../utils/images/photos/solar/SOLAR_TECNOLOGIA_E_CAMPO_1200.jpg'
import solar5 from '../../utils/images/photos/solar/SOLAR_EUCLIDES_E_PAINEL_SOLAR_1200.jpg'

import icoDigestor from '../../utils/images/5.png'
import icoEolica from '../../utils/images/3.png'

import dataMap from '../../utils/filesJSON/solar/solar.json'

function Solar() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id='body' className='solar'>
            <HeaderTechs
                nameBack={'Biodigestor'}
                nameNext={'Energia Eólica'}
                linkBack="/bio-digestor"
                iconBack={icoDigestor}
                linkNext="/energia-eolica"
                iconNext={icoEolica}
                idBack={'biodigestor'}
                idNext={'eolica'}
            ></HeaderTechs>
            <Description />
            <Mapa data={dataMap}
                colorLight='#faf238'
                colorMedium='#e3ca2e'
                photo={[solar1, solar2, solar3, solar4, solar5]}/>
            <AnalyzeCB />
            <AnalyzeCO />
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

export default Solar;