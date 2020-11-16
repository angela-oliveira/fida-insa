import React from 'react';
import './index.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



function Curiosities() {
    return (
        <div className='Curiosities'> 
            <div className='casca-curiosities'>
                <div className='curiosities-label'>VOCÊ SABIA?</div>
                <div className='subtitle'><p>Veja algumas dúvidas e curiosidades</p>
                </div>
                <Collapse accordion>
                    <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                    </Panel>
                </Collapse>

            </div>
        </div>
    )
}

export default Curiosities;