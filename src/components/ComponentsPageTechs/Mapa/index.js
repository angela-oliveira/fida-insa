import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoMercator, svg } from "d3";
import useResizeObserver from 'use-resize-observer';
import { Modal } from 'antd';

import drawMap from '../../../utils/filesJSON/mapa/semiarido.geo.json';

import icoPoint from '../../../utils/images/place_01.svg';

import eolica1 from '../../../utils/images/photos/eólica_fotos/EOLICA-FAMILIA-1200.jpg';
import eolica2 from '../../../utils/images/photos/eólica_fotos/EOLICA-PANORAMICA CATAVENTO-1200.jpg';
import eolica3 from '../../../utils/images/photos/eólica_fotos/EOLICA-CATAVENTO-1200.jpg';
import eolica4 from '../../../utils/images/photos/eólica_fotos/EOLICA-CAMPO SECO-1200.jpg';
import eolica5 from '../../../utils/images/photos/eólica_fotos/a.jpg';

import './index.css';
import Carousel from 'nuka-carousel';





function Mapa(props) {

    // referencia os elementos
    // const pointRef = useRef(null);
    const svgRef = useRef(null);
    const svgPointRef = useRef(null);

    const wrapperRef = useRef(null);
    // const infoCityRef = useRef(null);
    const midiaRef = useRef(null);

    const zoomRef = useRef(null);

    // adquirindo a proporção dada pelo css
    const { widthRef, heightRef } = useResizeObserver({ wrapperRef });

    // ESTADOS

    const [selectedEstados, setSelectedEstados] = useState(drawMap);
    const [selectedCity, setSelectedCity] = useState(props.data.features[0]);

    const [agulha, setagulha] = useState(icoPoint);
    const [estado, setEstado] = useState(props.data.features[0].properties.Estado);
    const [cidade, setCidade] = useState(props.data.features[0].properties.municipio);
    const [text, setText] = useState(props.data.features[0].properties.text);
    const [beneficio, setBeneficio] = useState(props.data.features[0].properties.NumBenef)
    const [instalacao, setInstalacao] = useState(props.data.features[0].properties.QtInstal)
    const [tecnologia, setTecnologia] = useState(props.data.features[0].properties.Tecnologia)
    const [projeto, setProjeto] = useState(props.data.features[0].properties.Projeto)

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);


    useEffect(() => {

        // REFERENCIAS
        const svg = select(svgRef.current);
        const svgPoint = select(svgPointRef.current);




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
            .attr("d", features => pathGenerator(features));



        svgPoint

            .selectAll(".city")
            .data(props.data.features)
            .join("svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("class", "city")
            .attr("width", "44")
            .attr("height", "63")
            .attr("viewBox", "0 -10 15 20")

            .attr("key", (d) => d.properties.id)

            // .append("g")
            .append('path')
            .attr("top", "0")
            .attr("d", "M-15.734-63.086A21.446,21.446,0,0,1,0-69.617,21.325,21.325,0,0,1,15.66-63.16,21.325,21.325,0,0,1,22.117-47.5a29.685,29.685,0,0,1-2.3,10.539A64.971,64.971,0,0,1,14.25-25.828q-3.266,5.2-6.457,9.723t-5.418,7.2L0-6.383Q-.891-7.422-2.375-9.129t-5.344-6.828A114.4,114.4,0,0,1-14.473-25.9a72.229,72.229,0,0,1-5.27-10.91A30.031,30.031,0,0,1-22.117-47.5,21.2,21.2,0,0,1-15.734-63.086Z")
            .attr("transform", "translate(0.62725830078125, 10.0411834716797)")
            .attr("fill", "#ddd456")
            .attr("stroke-width", 1)
            .attr("width", 10)

            // .append("foreignObject")
            // .attr("x", -5)
            // .attr("y", -20)
            // .attr("width", 15)
            // .attr("height", 17)
            // .append("xhtml:img")
            // .attr("class", "agulha")
            // .attr("src", icoPoint)
            .on("click", (d, i) => {
                setSelectedCity(selectedCity === i ? i : i)
            });

    }, [wrapperRef, widthRef, heightRef])

    useEffect(() => {


        const { width, height } = wrapperRef.current.getBoundingClientRect();
        const projection = geoMercator().fitSize([width, height], selectedEstados);
        let pathGenerator = geoPath().projection(projection);
        const svg = select(svgRef.current);
        const svgPoint = select(svgPointRef.current);

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
        <div className='eolica-map map-container'>
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
                                nextButtonText: ' ',
                                prevButtonText: ' ',
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
                                <img src={eolica1}></img>
                                <div className='zoom-image' onClick={() => { setVisible1(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={eolica2}></img>
                                <div className='zoom-image' onClick={() => { setVisible2(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={eolica3}></img>
                                <div className='zoom-image' onClick={() => { setVisible3(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={eolica4}></img>
                                <div className='zoom-image' onClick={() => { setVisible4(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={eolica5}></img>
                                <div className='zoom-image' onClick={() => { setVisible5(true) }}></div>
                            </div>
                        </Carousel>
                    </div>

                    <Modal
                        // title={this.justify.title}
                        visible={visible1}
                        width={750}
                        footer={null}
                        onCancel={() => setVisible1(false)
                        }
                    >
                        <div className='content-modal modal-img'>
                            <img src={eolica1}></img>
                        </div>
                    </Modal>
                    <Modal
                        // title={this.justify.title}
                        visible={visible2}
                        width={750}
                        footer={null}
                        onCancel={() => setVisible2(false)
                        }
                    >
                        <div className='content-modal modal-img'>
                            <img src={eolica2}></img>
                        </div>
                    </Modal>
                    <Modal
                        // title={this.justify.title}
                        visible={visible3}
                        width={750}
                        footer={null}
                        onCancel={() => setVisible3(false)
                        }
                    >
                        <div className='content-modal modal-img'>
                            <img src={eolica3}></img>
                        </div>
                    </Modal>
                    <Modal
                        // title={this.justify.title}
                        visible={visible4}
                        width={750}
                        footer={null}
                        onCancel={() => setVisible4(false)
                        }
                    >
                        <div className='content-modal modal-img'>
                            <img src={eolica4}></img>
                        </div>
                    </Modal>
                    <Modal
                        // title={this.justify.title}
                        visible={visible5}
                        width={750}
                        footer={null}
                        onCancel={() => setVisible5(false)
                        }
                    >
                        <div className='content-modal modal-img'>
                            <img src={eolica5}></img>
                        </div>
                    </Modal>

                </div>
                <div className='map' ref={wrapperRef}>
                    <div className='zoom-out' onClick={() => {
                        setSelectedEstados(drawMap)
                    }}>
                        Mapa completo
                    </div>
                    <svg ref={svgRef}></svg>
                    <div className='citys' ref={svgPointRef}></div>
                </div>
            </div>
        </div>
    )
}

export default Mapa; 