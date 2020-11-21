import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from 'use-resize-observer';
import data from '../../../utils/filesJSON/semiarido.geo.json'

import './index.css';

function Mapa() {

    // referencia os elementos
    const svgRef = useRef();
    const wrapperRef = useRef(); 

    // adquirindo a proporção dada pelo css
    const dimensions = useResizeObserver(wrapperRef);
    console.log(dimensions)

    const [selectedEstados, setSelectedEstados] = useState(); 

    useEffect(() => {


        const svg = select(svgRef.current);

        const { width, height } = dimensions || wrapperRef.current.getBoundingClientRects();
        console.log()


        const projection = geoMercator().fitSize([400, 620], selectedEstados || data);
        console.log(projection)

        const pathGenerator = geoPath().projection(projection);
        console.log(pathGenerator)
        svg
            .selectAll(".estado")
            .data(data.features)
            .join("path")
            .on("click", features => {
                setSelectedEstados(features);
            })
            .attr("class", "estado")
            .transition()
            .attr("d", features => pathGenerator(features));
        }, [data, dimensions])

        
    return (
        <div className='map-container'>
            <div className='casca-map'>
                <div className='info'>

                    <div className='title-map'>MAPA DO SEMIÁRIDO</div>
                    <div className='info-text'>
                        <div className='txt-title'>COMUNIDADE DE RIBEIRINHA</div>
                        <div className='txt-sub'>Cabaceira, Paraiba</div>
                        <div className='txt'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras imperdiet mauris nulla, et gravida dui faucibus
                            vitae. Suspendisse pellentesque lobortis lorem id tempus.
                            Mauris sed viverra dolor. Sed non mollis purus,
                            eu tincidunt dui. Pellentesque tempor enim in accumsan
                            elementum. Vestibulum dictum metus id tempus laoreet.
                            Morbi in tellus hendrerit, placerat magna viverra,
                            auctor quam.
                        </div>
                    </div>
                    <div className='info-media'>
                        <b>MÍDIA EM BREVE! 😉</b>
                    </div>

                </div>
                <div className='map' ref={wrapperRef}>
                    <svg ref={svgRef}></svg>
                </div>
            </div>
        </div>
    )
}

export default Mapa; 