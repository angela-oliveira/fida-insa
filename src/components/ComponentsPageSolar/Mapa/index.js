import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoMercator, svg } from "d3";
import useResizeObserver from 'use-resize-observer';
import { Modal } from 'antd';
import $ from 'jquery';

import drawMap from '../../../utils/filesJSON/mapa/semiarido.geo.json';
import drawAL from '../../../utils/filesJSON/mapa/al.json'
import drawBA from '../../../utils/filesJSON/mapa/ba.json'
import drawCE from '../../../utils/filesJSON/mapa/ce.json'
import drawMA from '../../../utils/filesJSON/mapa/ma.json'
import drawMG from '../../../utils/filesJSON/mapa/mg.json'
import drawPB from '../../../utils/filesJSON/mapa/pb.json'
import drawPE from '../../../utils/filesJSON/mapa/pe.json'
import drawPI from '../../../utils/filesJSON/mapa/pi.json'
import drawRN from '../../../utils/filesJSON/mapa/rn.json'
import drawSE from '../../../utils/filesJSON/mapa/se.json'

import icoPoint from '../../../utils/images/place_01.svg';



import './index.css';
import Carousel from 'nuka-carousel';

function Mapa(props) {
    // referencia os elementos
    const svgRef = useRef(null);
    const svgPointRef = useRef(null);
    const wrapperRef = useRef(null); 
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

    // const [selectEs, setSelectEs] = useState(drawMap);
    // const [colorEs, setColorEs] = useState('#bbFF93');

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);

    const widthWindow = window.innerWidth;

    // Desmarca o input radio
    function desmarc() {
        console.log("entrou!")
        document.querySelector("input").checked = false
        setTimeout(() => {
            document.querySelector("input").checked = false
        }, 1000)

    }

    const div = select(wrapperRef);
    const canvasRef = select(svgRef);

    // Gera a lista de projetos no campo projetos na versão mobile.
    const selectTech = document.getElementsByClassName('.projects');

    // ALTERANDO INFORMA
    function updateInfo(e) {
        for (let project of props.data.features) {
            if (project.properties.id == e) {

                document.querySelector("input").checked = true

                setText(project.properties.text)
                setEstado(project.properties.Estado)
                setCidade(project.properties.municipio)
                setInstalacao(project.properties.QtInstal)
                setBeneficio(project.properties.NumBenef)
                setTecnologia(project.properties.Tecnologia)
                setProjeto(project.properties.Projeto)

                setTimeout(() => {
                    document.querySelector("input").checked = false
                }, 1500)

            }
        }
    }

    useEffect(() => {

        // INSERÇÃO DE OPTION NO SELECT
        props.data.features.forEach((project) => {
            $('.projects').append(`<option value='${project.properties.id}' > ${project.properties.municipio} - ${project.properties.Estado} </option>`)

        })

        // REFERENCIAS
        const svgPoint = select(svgRef.current);
        const svg = select(svgRef.current);
        const map = document.querySelector('.map');
        let canvas = canvasRef.current;

        // TAMANHO DO CANVAS
        const [width, height] = [(map.clientWidth), (map.clientHeight)]
        canvas.width = width * 4;
        canvas.height = height * 4;
        let ctx = canvas.getContext("2d");

        if (widthWindow <= 1023) {

            // PROJEÇÃO DE MAPA
            const projection = geoMercator().fitSize([width * 4, height * 4], selectedEstados);

            // GERADOR DE CAMINHOS COM BASE NA PROJEÇÃO
            let pathGenerator = geoPath().projection(projection);

            // GERAÇÃO DOS OBJ PATHS2D DOS ESTADOS COM BASE NO CAMINHO GERADO

            let mapa = new Path2D(pathGenerator(drawMap));
            let AL = new Path2D(pathGenerator(drawAL));
            let BA = new Path2D(pathGenerator(drawBA));
            let CE = new Path2D(pathGenerator(drawCE));
            let MA = new Path2D(pathGenerator(drawMA));
            let MG = new Path2D(pathGenerator(drawMG));
            let PB = new Path2D(pathGenerator(drawPB));
            let PE = new Path2D(pathGenerator(drawPE));
            let PI = new Path2D(pathGenerator(drawPI));
            let RN = new Path2D(pathGenerator(drawRN));
            let SE = new Path2D(pathGenerator(drawSE));
            let test = new Path2D(pathGenerator(props.data))

            // FILTRO PARA CAPTURAR A COORDENADA DE CADA PROJETO
            let path = pathGenerator(props.data).split(/(?=[Mm])/).filter(val => /(?=[M])/.test(val))
            let paths = []
            path.forEach((val) => { paths.push((val.substr(1).split(','))) })

            // DESENHANDO O MAPA NO CANVAS
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.fillStyle = 'blue';
            ctx.fill(mapa);
            // DESENHANDO O CONTORNO DO MAPA NO CANVAS
            ctx.strokeStyle = '#329ba3'
            ctx.lineWidth = 6
            ctx.stroke(mapa);

            // DESENHANDO A LOCALIZAÇÃO DOS PROJETOS
            ctx.beginPath();
            ctx.fillStyle = 'green';
            paths.forEach((a) => {
                ctx.moveTo(a[0], a[1])
                ctx.arc(a[0], a[1], 8, 0, 2 * Math.PI)
                ctx.fill();
            })

            // console.log(paths)

            canvas.addEventListener('mousemove', (event) => {
                ctx.fillStyle = 'blue';
                ctx.fill(mapa);

                if (ctx.isPointInPath(AL, event.offsetX, event.offsetY)) {
                    // ctx.fillStyle = 'blue';
                    // ctx.fill(mapa);
                    ctx.fillStyle = 'red';
                    ctx.fill(AL);

                } else if (ctx.isPointInPath(BA, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(BA);

                } else if (ctx.isPointInPath(CE, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(CE);

                } else if (ctx.isPointInPath(MA, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(MA);

                } else if (ctx.isPointInPath(MG, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(MG);

                } else if (ctx.isPointInPath(PB, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(PB);

                } else if (ctx.isPointInPath(PE, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(PE);

                } else if (ctx.isPointInPath(PI, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(PI);

                } else if (ctx.isPointInPath(RN, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(RN);

                } else if (ctx.isPointInPath(SE, event.offsetX, event.offsetY)) {
                    ctx.fillStyle = 'red';
                    ctx.fill(SE);

                } else {
                    // console.log("não")
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = 'blue';
                    ctx.fill(mapa);
                    // ctx.fill(test);
                    ctx.beginPath();
                    ctx.fillStyle = 'green';
                    paths.forEach((a) => {
                        ctx.moveTo(a[0], a[1])
                        ctx.arc(a[0], a[1], 8, 0, 2 * Math.PI)
                        ctx.fill();
                    })
                }

                ctx.strokeStyle = '#329ba3'
                ctx.stroke(mapa);


                ctx.beginPath();
                ctx.fillStyle = 'green';
                paths.forEach((a) => {
                    ctx.moveTo(a[0], a[1])
                    ctx.arc(a[0], a[1], 8, 0, 2 * Math.PI)
                    ctx.fill();
                })
            })


        } else {

            const { width, height } = wrapperRef.current.getBoundingClientRect();

            const projection = geoMercator().fitSize([width, height], selectedEstados);

            const pathGenerator = geoPath().projection(projection);

            svg
                .selectAll(".estado")
                .data(drawMap.features)
                .join("path")
                .on("click", (d, features) => {
                    setSelectedEstados(selectedEstados === features ? drawMap : features);
                })
                .attr("class", "estado")
                .attr("d", features => pathGenerator(features))


            svgPoint

                .selectAll(".city")
                .data(props.data.features)
                .join("g")
                .attr("class", "city")
                .attr("transform", function (d) {
                    return "translate(" + projection(d.geometry.coordinates) + ")"
                })

                .append("foreignObject")
                .attr("x", -5)
                .attr("y", -20)
                .attr("width", 15)
                .attr("height", 17)
                .append("xhtml:label")
                .attr("for", "animar")
                .on("click", () => {
                    desmarc()
                })
                .append("xhtml:img")
                .attr("class", "agulha")
                .attr("src", icoPoint)
                .on("click", (d, i) => {
                    setSelectedCity(selectedCity === i ? i : i)
                })


        }
        // console.log(pathGenerator(drawMap.features))

    }, [wrapperRef, widthRef, heightRef])

    useEffect(() => {
        // const map = document.querySelector('.map');
        // let canvas = canvasRef.current;

        // // TAMANHO DO CANVAS
        // const [width, height] = [(map.clientWidth), (map.clientHeight)]
        // canvas.width = width * 4;
        // canvas.height = height * 4;
        // let ctx = canvas.getContext("2d");

        // if (widthWindow <= 1023) {
        //     let PB = new Path2D(pathGenerator(drawPB));
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);

        // }
    },[cidade])


    useEffect(() => {
        if (widthWindow > 1023) {

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
        }
    })

    useEffect(() => {
        if (widthWindow > 1023) {

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
            }

    }, [selectedCity])

    return (
        <div className='solar-map map-container'>
            <div class="title-map2">MAPA DO SEMIÁRIDO </div>
            <div className='aviso-map'></div>
            <div className='casca-map'>
                <div className='info'>
                    <div className='title-map'>MAPA DO SEMIÁRIDO </div>
                    <input type="checkbox" id="animar"></input>
                    <select className='projects' onChange={(e) => { updateInfo(e.target.value) }}>
                        <option value=''>Selecione um municipio</option>


                    </select>
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
                                <img src={solar1}></img>
                                <div className='zoom-image' onClick={() => { setVisible1(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={solar2}></img>
                                <div className='zoom-image' onClick={() => { setVisible2(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={solar3}></img>
                                <div className='zoom-image' onClick={() => { setVisible3(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={solar4}></img>
                                <div className='zoom-image' onClick={() => { setVisible4(true) }}></div>
                            </div>
                            <div className='img'>
                                <img src={solar5}></img>
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
                            <img src={solar1}></img>
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
                            <img src={solar2}></img>
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
                            <img src={solar3}></img>
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
                            <img src={solar4}></img>
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
                            <img src={solar5}></img>
                        </div>
                    </Modal>

                </div>
                <div className='map' ref={wrapperRef}>
                    <canvas
                        id='map-canva'
                        ref={canvasRef}
                    ></canvas>
                    <svg ref={svgRef}></svg>
                </div>
            </div>
        </div>
    )
}

export default Mapa; 