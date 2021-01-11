import React from 'react';
import { Row, Card } from 'antd';
import paqtcpblogo from "../../utils/images/parceiros/paqtcpblogo.png"
import insalogo from "../../utils/images/parceiros/insalogo.png"
import fidalogo from "../../utils/images/parceiros/logo fida.png"
import iacoc from "../../utils/images/parceiros/iacoc.png"

// Parceiros

import ifpblogo from "../../utils/images/parceiros/logo_ifpb.png"
import ufcglogo from "../../utils/images/parceiros/ufcglogo.jpg"
import procaselogo from "../../utils/images/parceiros/procaselogo.png"

// uepb

import uepb from "../../utils/images/parceiros/uepb.jpg"
//laprov
import laprov from "../../utils/images/parceiros/LAPROV.jpg"
// cetra 
import cetra from "../../utils/images/parceiros/cetra.png"
// pdhc dom helder

// viva o semiario 
import vivasemiarido from "../../utils/images/parceiros/viva-semiarido.png"
// pro semiarido pro-semiarido.jpg
import prosemiarido from "../../utils/images/parceiros/pro-semiarido.jpg"
// ceara
import ceara from "../../utils/images/parceiros/Logo-ceara.png"
// piaui
import piaui from "../../utils/images/parceiros/Logo-Piaui.png"
// bahia 
import bahia from "../../utils/images/parceiros/Logo-Bahia.jpeg"
// paraiba 
import paraiba from "../../utils/images/parceiros/logo-Paraiba.jpeg"

// outros   
import aksaam from "../../utils/images/parceiros/AKSAAM.png"
import funarbe from "../../utils/images/parceiros/Funarbe.png"
import ippds from "../../utils/images/parceiros/ippds.png"
import ufv from "../../utils/images/parceiros/UFV.png"

const { Meta } = Card;

function Parceiros() {
 
  return (
        <div className="parceiros">

                <Card >
                    <h2>Realização</h2>

                    <Row>

                        <Card>
                            <img alt="example" src={iacoc} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={paqtcpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card>
                            <img alt="example" src={insalogo} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <h2>Parceiros</h2>
                    <Row>
                        <Card>
                            <img alt="example" src={procaselogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card>
                            <img alt="example" src={vivasemiarido} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={laprov} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={cetra} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={prosemiarido} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={aksaam} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <Row >

                        <Card>
                            <img alt="example" src={ifpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card>
                            <img alt="example" src={ufcglogo} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={uepb} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={ufv} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={funarbe} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={ippds} />
                            <Meta title="" description="" />
                        </Card>

                    </Row>
                    <Row >

                        <Card>
                            <img alt="example" src={ceara} />
                            <Meta title="" description="" />
                        </Card>

                        <Card>
                            <img alt="example" src={piaui} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={paraiba} />
                            <Meta title="" description="" />
                        </Card>
                        <Card>
                            <img alt="example" src={bahia} />
                            <Meta title="" description="" />
                        </Card>

                    </Row>

                    <h2>Patrocinador</h2>

                    <Row>

                        <Card>
                            <img alt="example" src={fidalogo} />
                            <Meta title="" description="" />
                        </Card>

                    </Row>
                </Card>
            </div>

   
  );
            
}
export default Parceiros;