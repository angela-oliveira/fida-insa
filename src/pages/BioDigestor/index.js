import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import HeaderTechs from '../../components/HeaderTechs';

import Description from '../../components/ComponentsPageBioDiges/Description';
import Mapa from '../../components/ComponentsPageTechs/Mapa';
// import Mapa from '../../components/ComponentsPageBioDiges/Mapa';
import AnalyzeCB from '../../components/ComponentsPageBioDiges/AnalyzeCB';
import AnalyzeCO from '../../components/ComponentsPageBioDiges/AnalyzeCO';
import Invest from '../../components/ComponentsPageBioDiges/Invest';
import Experience from '../../components/ComponentsPageBioDiges/Experience';
import Curiosities from '../../components/ComponentsPageBioDiges/Curiosities';
import Photos from '../../components/ComponentsPageBioDiges/Photos';
import School from '../../components/ComponentsPageBioDiges/School';

import icoFogao from '../../utils/images/2.png'
import icoSolar from '../../utils/images/1.png';

import dataMapa from '../../utils/filesJSON/biodigestor/biodigestor.json';

import footer from "../../utils/images/footer-digestor.png";

import bioDige1 from '../../utils/images/photos/Biodigestor/capa_Biodigestor.JPG';
import bioDige2 from '../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 02.JPG';
import bioDige3 from '../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 04.JPG';
import bioDige4 from '../../utils/images/photos/Biodigestor/sobral_casaforte/Vanderlei e Márcia - Biodigestor 08.JPG';
import bioDige5 from '../../utils/images/photos/Biodigestor/Antônio Nazaré e Luzanira - Biodigestor 01.JPG';



function BioDigestor() {

    const fotoDiges= {
        "bio1":bioDige1,
        "bio2":bioDige2,
        "bio3":bioDige3,
        "bio4":bioDige4,
        "bio5":bioDige5
    }

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div id='body' className='biodigestor'>
            <HeaderTechs 
                nameBack={'Ecofogão'} 
                nameNext={'Energia Solar'} 
                linkBack='/eco-fogao' 
                iconBack={icoFogao} 
                linkNext='/energia-solar' 
                iconNext={icoSolar} 
                idBack={'ecofogao'}
                idNext={'solar'}
            ></HeaderTechs>
            <Description />
            <Mapa data={dataMapa} foto={fotoDiges} colorLight='#e5ae89' colorMedium='#ff791e'/>
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

export default BioDigestor;