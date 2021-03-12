import React, { useEffect } from 'react'

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

import fogao1 from '../../utils/images/photos/Ecofogao/sobral/SOBRAL-Santa Luzia-Maria 01_1200.jpg';
import fogao2 from '../../utils/images/photos/Ecofogao/varjota_cajazeiras/02 VARJOTA-Cajazeiras-Nazaré e Luzanira 02_1200.jpg';
import fogao3 from '../../utils/images/photos/Ecofogao/sobral/SOBRAL-Santa Luzia-Valci e Isleane 08_1200.jpg';
import fogao4 from '../../utils/images/photos/Ecofogao/varjota_cajazeiras/02 VARJOTA-Cajazeiras-Nazaré e Luzanira 04_1200.jpg';
import fogao5 from '../../utils/images/photos/Ecofogao/varjota_varzea/02 VARJOTA-Várzea da Palha-Cida 06_1200.jpg';


import School from '../../components/ComponentsPageEcofogao/School'

import icoAgua from '../../utils/images/4.png';
import icoBioDigestor from '../../utils/images/5.png';

import dataMap from '../../utils/filesJSON/ecofogao/ecofogao.json';


function EcoFogao() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
            <Mapa data={dataMap}
                colorLight='#aea58a'
                colorMedium='#89773c'
                photo={[fogao1, fogao2, fogao3, fogao4, fogao5]}
            />
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

export default EcoFogao;