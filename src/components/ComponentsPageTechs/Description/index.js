import React from 'react';
import './index.css';

import LogoTech from '../../../utils/images/ic_eolica.png'
import Cor from '../../../utils/images/EOLICA-CATAVENTO ZOOM.jpg'

import { Button } from 'antd';

import { PlusCircleFilled, PlusOutlined, PlusCircleOutlined } from '@ant-design/icons';
function description() {
    return (
        <div className='description'>
            <div className='desc-top'>
                <div className='title-tech'>
                    <div className='logo-tech'>
                        <div className='casca-logo-tech'>
                            <img src={LogoTech} alt='logo da tecnologia'></img>
                        </div>
                        <div className='label-tech' >
                            <h2 className='labelA'>ENERGIA</h2>
                            <h2 className='labelB'>EÓLICA</h2>
                        </div>
                    </div>
                    <p>Cataventos são dispositivos que aproveitam a energia dos ventos. Eles podem ser usados para geração de energia elétrica ou para o bombeamento de água destinada ao armazenamento ou irrigação. É possível ainda que sejam utilizados para movimentar aeradores de tanques de tratamento de água ou na aquicultura.
                    <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }} />                 
                    </p>
                </div>
                <div className='justify'>
                    <div className='justify-label'>QUAL A JUSTIFICATIVA</div>
                    <div className='justify-txt'>
                        <p>Tanto o catavento destinado ao bombeamento de águas do subsolo, quanto aqueles destinados à produção de energia elétrica em pequena escala se adequam perfeitamente ao uso em comunidades agrícolas, pois fornecem meios necessários à subsistência humana, animal e vegetal. Deve-se também considerar que a diversificação da matriz energética rural é imprescindível, especialmente para ampliar o aproveitamento dos recursos naturais disponíveis nas propriedades rurais.</p>

                        <p>É importante também levar em consideração que o uso de tecnologias como essa melhoram a renda do agricultor, pois diminuem os custos de manutenção. Além disso, o catavento é uma tecnologia que não requer conhecimento técnico avançado e nem um custo de manutenção elevado para sua manutenção.
                        <PlusCircleFilled style={{ fontSize: '30px', color: '#08c' }} />
                        </p>
                    </div>
                </div>

                <div className='casca-img-tech'>
                    <img src={Cor}></img>
                </div>

            </div>
            {/* <Button><PlusOutlined /></Button> */}
            {/* <PlusCircleOutlined /> */}
            {/* <PlusOutlined type="desktop" style={{ marginRight: 8 }}></PlusOutlined> */}



            <div className='desc-bottom'>
                <div className='fatores-label'>FATORES QUE PROMOVEM OU LIMITAM A ADOÇÃO DA TECNOLOGIA</div>
                <div className='fato-txtA'>O uso da energia eólica, seja para o bombeamento hidráulico de poços, seja para a geração de energia elétrica, apresenta diversas vantagens de usos bem como desafios. Ao contrário de outras fontes de energia como o petróleo e até mesmo a água, o vento é simplesmente o ar em circulação e, em função disso, não há chances de acabar um dia. Por isso, não há restrição para o uso e aproveitamento dos benefícios da energia eólica.</div>
                <div className='fato-txtB'>Essa fonte energética é tão sustentável que não há emissão de quaisquer elementos que poluem o ar ou o meio ambiente. Se não bastassem a preservação do meio ambiente, a energia eólica é econômica. Na agricultura familiar o aproveitamento dos ventos ocorre principalmente com o uso de cataventos hidráulicos. A principal vantagem para o uso desses equipamentos na agricultura familiar do semiárido é que os cataventos funcionam sob condição de baixa e média pressão podendo, assim, ser utilizados para o bombeamento de fontes de água de pequena vazão. </div>
            </div>
        </div>
    )
}

export default description;