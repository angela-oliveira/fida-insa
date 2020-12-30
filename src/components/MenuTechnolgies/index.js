import React, { useEffect, useRef, useState } from 'react'

import {
  Card
} from 'antd';
import 'antd/dist/antd.css';
import '../../utils/styles/utils.module.css'
import { Link } from 'react-router-dom'
import './index.css'

import bgTechnology from "../../utils/images/bg_technology.svg";
import $ from 'jquery';
import iconSolar from "../../utils/images/1.png";
import iconEcoFogao from "../../utils/images/2.png";
import iconEolica from "../../utils/images/3.png";
import iconBioAgua from "../../utils/images/4.png";
import iconBioDigestor from "../../utils/images/5.png";
// import path from "../../utils/images/Path 34.svg"

function MenuTechnologies() {

  const selectRef = useRef(null);

  const eolica = {
    nome: "ENERGIA EÓLICA",
    style: { background: "#329BA3", color: "#329BA3" },
    link: "/energia-eolica"
  }
  const bioAgua = {
    nome: "BIOÁGUA",
    style: { background: "#1AC3E2", color: "#1AC3E2" },
    link: "/bio-agua"
  }
  const ecoFogao = {
    nome: "ECOFOGÃO",
    style: { background: "#89773C", color: "#89773C" },
    link: "/eco-fogao"
  }
  const bioDigestor = {
    nome: "BIODIGESTOR",
    style: { background: " #FF7907", color: "#FF7907" },
    link: "/bio-digestor"
  }
  const solar = {
    nome: "ENERGIA SOLAR",
    style: { background: "#EFB802", color: "#EFB802" },
    link: "/energia-solar"
  }


  const [button, setButton] = useState(eolica)
  const [BGMenu, setBGMenu] = useState()


  useEffect(() => {

    // REFERENCIAS DE TAG
    const menu = selectRef.current

    // ÂNGULO INICIAL
    var angleStart = -360;

    // jquery rotate animation
    function rotate(li, d) {
      $({ d: angleStart }).animate({ d: d }, {
        step: function (now) {
          $(li)
            .css({ transform: 'rotate(' + now + 'deg)' })
            .find('label')
            .css({ transform: 'rotate(' + (-now) + 'deg)' });
        }, duration: 0
      });
    }

    // show the options
    function toggleOptions(s) {
      $(s).addClass('open');
      var li = $(s).find('li');
      // var deg = 360/li.length
      var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 356 / li.length;
      for (var i = 0; i < li.length; i++) {
        var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
      }
    }


    // DETERMINA MOMENTO ATIVAÇÃO DA ANIMAÇÃO DO MENU TECNOLOGIAS
    function animateScroll() {
      const windowsTop = (window.pageYOffset) / 3;
      if ((windowsTop) > menu.offsetTop) {
        toggleOptions('.selector')
      }
    }


    window.addEventListener('scroll', function () {
      // setTimeout(function () { toggleOptions('.selector'); }, 300);
      animateScroll();
    })




  })




  return (

    <Card className="menu-tecnologias" >
      <div className='bg-menu-tech' style={{ color: `${button.style.color}` }} data-anime="left">
        {button.nome}
      </div>
      <img src={bgTechnology}></img>
      <div className='selector' ref={selectRef}>
        <ul>
          <li className="c1">
            <Link to='/energia-eolica/#'>
              <input id='c1' type='checkbox'></input>
              <label className="label-c1"

                onMouseEnter={() => {
                  setButton(eolica)
                  setBGMenu()
                }}

                for='c1'><img style={{ width: "35px" }} src={iconEolica}></img></label>
            </Link>
          </li>
          <li className="c2">
            <Link to='/bio-agua'>
              <input id='c2' type='checkbox'></input>
              <label for='c2' onMouseEnter={() => { setButton(bioAgua) }}><img style={{ width: "45px" }} src={iconBioAgua}></img></label>
            </Link>
          </li>
          <li className="c3">
            <Link to='/eco-fogao'>
              <input id='c3' type='checkbox'></input>
              <label for='c3' onMouseEnter={() => { setButton(ecoFogao) }} ><img style={{ width: "40px" }} src={iconEcoFogao}></img></label>
            </Link>
          </li>
          <li className="c4">
            <Link to='/bio-digestor'>
              <input id='c4' type='checkbox'></input>
              <label for='c4' onMouseEnter={() => { setButton(bioDigestor) }}><img style={{ width: "50px" }} src={iconBioDigestor}></img></label>
            </Link>
          </li>
          <li className="c5">
            <Link to='/energia-solar'>
              <input id='c5' type='checkbox'></input>
              <label for='c5' onMouseEnter={() => { setButton(solar) }}><img style={{ width: "40px" }} src={iconSolar}></img></label>
            </Link>
          </li>

          <button className="button" style={button.style}>{button.nome}
            <Link to={button.link}>
              <div className='more' style={{ color: `${button.style.color}` }}>+</div>
            </Link>
          </button>
        </ul>
      </div>
    </Card>
  );
}


export default MenuTechnologies