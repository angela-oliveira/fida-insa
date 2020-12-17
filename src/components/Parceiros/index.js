import React from 'react';
import { Row, Card } from 'antd';
import paqtcpblogo from "../../utils/images/paqtcpblogo.png"
import insalogo from "../../utils/images/insalogo.png"
import ifpblogo from "../../utils/images/logo_ifpb.png"
import ufcglogo from "../../utils/images/ufcglogo.jpg"
import procaselogo from "../../utils/images/procaselogo.png"
import fidalogo from "../../utils/images/P_g_web.jpg"

const { Meta } = Card;

function Parceiros() {

  return (
        <div className="parceiros">

                <Card >
                    <h2>Realização</h2>

                    <Row>

                        <Card>
                            <img alt="example" src={paqtcpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={insalogo} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <h2>Parceiros</h2>

                    <Row >

                        <Card hoverable >
                            <img alt="example" src={ifpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={ufcglogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={paqtcpblogo} />
                            <Meta title="" description="" />
                        </Card>

                        <Card hoverable >
                            <img alt="example" src={procaselogo} />
                            <Meta title="" description="" />
                        </Card>
                    </Row>

                    <h2>Patrocinador</h2>

                    <Row>

                        <Card hoverable >
                            <img alt="example" src={fidalogo} />
                            <Meta title="" description="" />
                        </Card>

                    </Row>
                </Card>
            </div>

   
  );
            
}
export default Parceiros;