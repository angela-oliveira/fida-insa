import React from 'react'

import {
  Card
} from 'antd';
import 'antd/dist/antd.css';
import '../../utils/styles/utils.module.css'
import './index.css'

import bgTechnology from "../../utils/images/bg_technology.svg";
import $ from 'jquery';
import iconSolar from "../../utils/images/1.png";
import iconEcoFogao from "../../utils/images/2.png";
import iconEolica from "../../utils/images/3.png";
import iconBioAgua from "../../utils/images/4.png";
import iconBioDigestor from "../../utils/images/5.png";
import path from "../../utils/images/Path 34.svg"

var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
  $({d:angleStart}).animate({d:d}, {
    step: function(now) {
    $(li)
      .css({ transform: 'rotate('+now+'deg)' })
      .find('label')
      .css({ transform: 'rotate('+(-now)+'deg)' });
    }, duration: 0
  });
}

// show the options
function toggleOptions(s) {
  $(s).addClass('open');
  var li = $(s).find('li');
  // var deg = 360/li.length
  var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
  for(var i=0; i<li.length; i++) {
    var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
    $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
  }
}

window.addEventListener('scroll', function(){
  setTimeout(function() { toggleOptions('.selector'); }, 300);
})

// const c1 = document.querySelectorAll('.label-c1')
// const c1 = document.getElementsByClassName('label-c1')
// console.log(c1)
// c1.addEventListener("mouseover", function(e) {
//   const buttonc = document.querySelector('.button')
//   buttonc.classList.add("buttonc1")
// })
// $('#c1').hover(function(){
//   $('.button').addClass('buttonc1')
// }, function(){
//   $('.button').removeClass('buttonc1')
// })
// $('.label-c1').click(function(){
//   console.log('teste')
//   // $('.button').css('background', '#EFB802')
//   $('.button').addClass('buttonc1')
// }, false)

const style = {
  //Not working
  backgroundImage: `url(${path})`,
  height: "100vh",
  backgroundSize: "cover",
}


function MenuTechnologies() {
  return (

    <Card className="menu-tecnologias" >

      <img src={bgTechnology}></img>
      <div className='selector'>
        <ul>
          <li className="c1">
            <input id='c1' type='checkbox'></input>
            <label className="label-c1" for='c1'><img style={{ width: "35px"}} src={iconEolica}></img></label>
          </li>
          <li className="c2">
            <input id='c2' type='checkbox'></input>
            <label for='c2'><img style={{ width: "45px"}} src={iconBioAgua}></img></label>
          </li>
          <li className="c3">
            <input id='c3' type='checkbox'></input>
            <label for='c3'><img style={{ width: "40px"}} src={iconEcoFogao}></img></label>
          </li>
          <li className="c4">
            <input id='c4' type='checkbox'></input>
            <label for='c4'><img style={{ width: "50px"}} src={iconBioDigestor}></img></label>
          </li>
          <li className="c5">
            <input id='c5' type='checkbox'></input>
            <label for='c5'><img style={{ width: "40px"}} src={iconSolar}></img></label>
          </li>
        
        <button className="button">ENERGIA<br></br> EÓLICA
        <div></div>
        </button>
        </ul>
      </div>
    </Card>
  );
}


export default MenuTechnologies