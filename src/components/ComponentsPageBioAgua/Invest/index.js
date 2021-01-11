import React from 'react';
import './index.css';

import { Row  } from 'antd';
import InvestPrivate from '../InvestPrivate'
import InvestPublic from '../InvestPublic'


export default class extends React.Component {

  listCase = document.getElementsByClassName('.list-cases')

  back() {
      console.log("Back")
  }

  next() {
      console.log("Next")
  }
  state = {
      visible: false
    }

    openModal() {
      this.setState({ visible: !this.state.visible })
    }
    render(){
    return (
        <div className='bioagua-invest Invest'>
            <div className='casca-ana-cb'>
                <div className='cb-label'>OPORTUNIDADE DE INVESTIMENTO</div>
                <p className='p-invest'>Entenda como estão divididos os investimentos</p>

                <div className='cb-graphic'>
                
                <Row>
                  <InvestPublic></InvestPublic>
                </Row>
                <br></br>
                <Row>
                  <InvestPrivate></InvestPrivate>
                </Row>
                
                
                </div>
            </div>
        </div>
    )

    }
}

// export default Invest;