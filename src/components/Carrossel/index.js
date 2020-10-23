// REACT
import React from 'react';
import './index.css';
import perfilTest from '../../utils/images/perfil_test.jpg';



function Carrossel() {


  function next(event) {
    if(event.type == 'click'){
      event.target.scrollBy(200, 0)
    }
  }

  function back(event){
    console.log(event)
    event.target.scrollBy(-200, 0)
  }

  return (
    <div id='items-wrapper'>
      <button id='back' onClick={back}> ◂ </button>
      <div id='items'>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>

        <div className="item">
          <div className="space">
            <img alt='' src={perfilTest}></img>
            <div>nome</div>
          </div>
        </div>
      </div>
          
      <button id='next' onClick={next}> ▸ </button>

      
    </div>

    
  )
}

export default Carrossel;