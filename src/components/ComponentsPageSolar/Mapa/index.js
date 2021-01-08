import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoMercator, svg } from "d3";
import useResizeObserver from 'use-resize-observer';
import drawMap from '../../../utils/filesJSON/semiarido.geo.json';

import icoPoint from '../../../utils/images/place_01.svg';
import ecoTest from '../../../utils/images/photos/ecotest.jpg';

import './index.css';
import Carousel from 'nuka-carousel';





function Mapa(props) {

    // referencia os elementos
    // const pointRef = useRef(null);
    const svgRef = useRef(null);
    const wrapperRef = useRef(null);
    // const infoCityRef = useRef(null);
    const midiaRef = useRef(null);

    // adquirindo a proporção dada pelo css
    const { widthRef, heightRef } = useResizeObserver({ wrapperRef });

    // ESTADOS

    const [selectedEstados, setSelectedEstados] = useState(drawMap);
    const [selectedCity, setSelectedCity] = useState(props.data.features[0]);


    const [estado, setEstado] = useState(props.data.features[0].properties.Estado);
    const [cidade, setCidade] = useState(props.data.features[0].properties.municipio);
    const [text, setText] = useState(props.data.features[0].properties.text);
    const [beneficio, setBeneficio] = useState(props.data.features[0].properties.NumBenef)
    const [instalacao, setInstalacao] = useState(props.data.features[0].properties.QtInstal)
    const [tecnologia, setTecnologia] = useState(props.data.features[0].properties.Tecnologia)
    const [projeto, setProjeto] = useState(props.data.features[0].properties.Projeto)


    useEffect(() => {

        // REFERENCIAS
        const svg = select(svgRef.current);
        const svgPoint = select(svgRef.current);



        // const infoCity = select(infoCityRef.current);

        const { width, height } = wrapperRef.current.getBoundingClientRect();
        // console.log('>>: ' + width, height)

        const projection = geoMercator().fitSize([width, height], selectedEstados);
        // console.log('projeção: ' + projection)

        let pathGenerator = geoPath().projection(projection);
        // console.log("path: " + pathGenerator)

        svg
            .selectAll(".estado")
            .data(drawMap.features)
            .join("path")
            .on("click", (d, features) => {
                setSelectedEstados(selectedEstados === features ? drawMap : features);
            })
            .attr("class", "estado")

            // .transition(700)
            .attr("d", features => pathGenerator(features))
            // .append("foreignObject")
            // .attr("x", 0)
            // .attr("y", 0)
            // .attr("width", 15)
            // .attr("height", 17)
            // .append("xhtml:div")
            // .text("BH");


        svgPoint

            .selectAll(".city")
            .data(props.data.features)
            .join("g")
            .attr("class", "city")
            .attr("transform", function (d) {
                return "translate(" + projection(d.geometry.coordinates) + ")"
            })
            .attr("key", (d) => d.properties.id)
            // .append("path")
            // .attr("d", "M-15.734-63.086A21.446,21.446,0,0,1,0-69.617,21.325,21.325,0,0,1,15.66-63.16,21.325,21.325,0,0,1,22.117-47.5a29.685,29.685,0,0,1-2.3,10.539A64.971,64.971,0,0,1,14.25-25.828q-3.266,5.2-6.457,9.723t-5.418,7.2L0-6.383Q-.891-7.422-2.375-9.129t-5.344-6.828A114.4,114.4,0,0,1-14.473-25.9a72.229,72.229,0,0,1-5.27-10.91A30.031,30.031,0,0,1-22.117-47.5,21.2,21.2,0,0,1-15.734-63.086Z")
            // .attr("fill", "#ddd456")
            // .attr("stroke-width", 1)
            // .attr("width", 10)
            .append("foreignObject")
            .attr("x", -5)
            .attr("y", -20)
            .attr("width", 15)
            .attr("height", 17)
            .append("xhtml:img")
            .attr("class", "agulha")
            .attr("src", icoPoint)
            .on("click", (d, i) => {
                setSelectedCity(selectedCity === i ? i : i)
            });

    }, [wrapperRef, widthRef, heightRef])

    useEffect(() => {

        const { width, height } = wrapperRef.current.getBoundingClientRect();
        const projection = geoMercator().fitSize([width, height], selectedEstados);
        let pathGenerator = geoPath().projection(projection);
        const svg = select(svgRef.current);
        const svgPoint = select(svgRef.current);

        svg
            .selectAll(".estado")
            .data(drawMap.features)
            .join("path")
            .on("click", (d, features) => {
                setSelectedEstados(selectedEstados === features ? drawMap : features);
            })
            .attr("class", "estado")

            .transition()
            .attr("d", features => pathGenerator(features));

        svgPoint
            .selectAll(".city")
            .data(props.data.features)
            .transition()
            .attr("transform", function (d) {
                return "translate(" + projection(d.geometry.coordinates) + ")"
            })

    })

    useEffect(() => {

        const svgPoint = select(svgRef.current);

        svgPoint
            .selectAll(".labelCity")
            .data([selectedCity])
            .join("text")
            .attr("class", "labelCity")
            .text(
                (d) => {
                    setText(d.properties.text)
                    setEstado(d.properties.Estado)
                    setCidade(d.properties.municipio)
                    setInstalacao(d.properties.QtInstal)
                    setBeneficio(d.properties.NumBenef)
                    setTecnologia(d.properties.Tecnologia)
                    setProjeto(d.properties.Projeto)
                }
            )


    }, [selectedCity])



    return (
        <div className='map-container'>
            <div className='casca-map'>
                <div className='info'>
                    <div className='title-map'>MAPA DO SEMIÁRIDO </div>
                    <div className='info-text' >
                        {/* <div className='txt-title'>COMUNIDADE DE RIBEIRINHA</div> */}
                        <div className='txt-sub'>{cidade} - {estado} </div>
                        <div>Beneficiados: {beneficio} pessoas</div>
                        <div>Instalações: {instalacao}</div>
                        <div>Tecnologia: {tecnologia} </div>
                        <div>Projeto: {projeto} </div>
                        <div className='txt'>
                            {text}
                        </div>
                    </div>
                    <div className='info-media' ref={midiaRef}>
                        <Carousel

                            slidesToShow={3}
                            cellSpacing={10}
                            defaultControlsConfig={{
                                nextButtonText: '>',
                                prevButtonText: '<',
                                prevButtonStyle: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: '#FAF238',
                                    color: '#575757',
                                    fontSize: '30px',

                                },
                                nextButtonStyle: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: '#FAF238',
                                    color: '#575757',
                                    fontSize: '30px',

                                }
                            }}


                        >
                            <div className='img'>
                                <img src={ecoTest}></img>
                            </div>
                            <div className='img'>
                                <img src={ecoTest}></img>
                            </div>
                            <div className='img'>
                                <img src={ecoTest}></img>
                            </div>
                            <div className='img'>
                                <img src={ecoTest}></img>
                            </div>
                            <div className='img'>
                                <img src={ecoTest}></img>
                            </div>
                        </Carousel>
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