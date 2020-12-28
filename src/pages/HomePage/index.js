import React from 'react'

import {
    Row,
    Col,
    Button,
    Card,
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import '../../utils/styles/utils.module.css'
import './index.css'
import HeaderPage from '../../components/HeaderPage';
import MenuTechnologies from '../../components/MenuTechnolgies'
import Case from '../../components/Case'
import Equipe from '../../components/Equipe'
import Parceiros from '../../components/Parceiros'

import blue from "../../utils/images/blue.png";
import imgMain from "../../utils/images/main.png";
import bgTechnology from "../../utils/images/bg_technology.svg";
import perfilTest from "../../utils/images/perfil_test.jpg";
import footer from "../../utils/images/Group 137.png";


// import background from '../public/images/bg_main.png';

// const bgMain = {
//     backgroundImage: `url(${Background})`
// };
const { Meta } = Card;

// function HomePage() {

//     let listCase = document.getElementsByClassName('.list-cases')

//     function back() {
//         console.log("Back")
//     }

//     function next() {
//         console.log("Next")
//     }

    

//     return (
//         <div>
//             {/* COMPONENTE DE CABEÇALHO */}
//             <HeaderPage />

//             {/* <HeaderHome /> */}
//             {/* <div styles={{ backgroundImage:`url(${background})` }}></div> */}
//             <div>

//                 {/* <img style={{width: 450, paddingLeft: 100, marginBottom: -50, marginTop: 50}} src="/images/blue.png"></img> */}
//                 <Row className='main-banner-page'>

//                     <Col>

//                         <img src={blue}></img>
//                         <div className='banner-page'>
//                             <h1 className='renova'>RENOVA</h1>
//                             <h1 className='fida'>FIDA</h1>
//                             <Row>

//                                 {/* <h1>FIDA</h1> */}

//                                 <div>
//                                     {/* <img style={{width: 350, marginTop: 50 }} src="/images/yellow.png"></img> */}
//                                 </div>
//                             </Row>

//                             <p>Energias renováveis para<br /> o semiárido</p>

//                             <Button >Conheça o Projeto +</Button>
//                             {/* <Modal
//                                 title="Basic Modal"
//                                 visible='false'
//                                 >
//                                 <p>Some contents...</p>
//                                 <p>Some contents...</p>
//                                 <p>Some contents...</p>
//                             </Modal> */}

//         <Modal
//           title='test'
//           visible={this.state.visible}
//           width={720}
//           footer={null}
//           onCancel={() =>
//             this.setState({
//               visible: false
//             })
//           }
//           onOk={() =>
//             this.setState({
//               visible: false
//             })
//           }
//         >
//           <img style={{ width: '100%' }} src={this.state.image} alt="" />
//         </Modal>
//                         </div>
//                     </Col>


//                     <div className="bg-main">
//                         <img src={imgMain}></img>

//                     </div>
//                 </Row>
//             </div>
//             <br></br>
//             <div className="techs">
//                 <Card>
//                     <div className="div-yellow"></div>
//                     <h1>TECNOLOGIAS</h1>
//                 </Card>

//                 <p>Conheca as tecnologias desenvolvidas</p>

//                 <br></br>
//                 <MenuTechnologies></MenuTechnologies>

//             </div>
//             <br></br>

//             <Case/>

//             <div className="team">
//                 <Card>
//                     <div className="div-yellow"></div>
//                     <h1>EQUIPE</h1>
//                     <p>Conheça quem está à frente desse projeto</p>
//                 </Card>

//                 <Equipe />

//                 <br></br>



//             </div>
//             <div className="parceiros">
//                 <Parceiros />
//                 {/* <Card >
//                     <h2>Realização</h2>

//                     <Row>

//                         <Card>
//                             <img alt="example" src={paqtcpblogo} />
//                             <Meta title="" description="" />
//                         </Card>

//                         <Card hoverable >
//                             <img alt="example" src={insalogo} />
//                             <Meta title="" description="" />
//                         </Card>
//                     </Row>

//                     <h2>Parceiros</h2>

//                     <Row >

//                         <Card hoverable >
//                             <img alt="example" src={ifpblogo} />
//                             <Meta title="" description="" />
//                         </Card>

//                         <Card hoverable >
//                             <img alt="example" src={ufcglogo} />
//                             <Meta title="" description="" />
//                         </Card>

//                         <Card hoverable >
//                             <img alt="example" src={paqtcpblogo} />
//                             <Meta title="" description="" />
//                         </Card>

//                         <Card hoverable >
//                             <img alt="example" src={procaselogo} />
//                             <Meta title="" description="" />
//                         </Card>
//                     </Row>

//                     <h2>Patrocinador</h2>

//                     <Row>

//                         <Card hoverable >
//                             <img alt="example" src={fidalogo} />
//                             <Meta title="" description="" />
//                         </Card>

//                     </Row>
//                 </Card> */}
//             </div>
//         </div>
//     );
// }

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
    
    render() {
        return (
            <div>
                {/* COMPONENTE DE CABEÇALHO */}
                <HeaderPage />
    
                {/* <HeaderHome /> */}
                {/* <div styles={{ backgroundImage:`url(${background})` }}></div> */}
                <div>
    
                    {/* <img style={{width: 450, paddingLeft: 100, marginBottom: -50, marginTop: 50}} src="/images/blue.png"></img> */}
                    <Row className='main-banner-page'>
    
                        <Col>
    
                            <img src={blue}></img>
                            <div className='banner-page'>
                                <h1 className='renova'>RENOVA</h1>
                                <h1 className='fida'>FIDA</h1>
                                <Row>
    
                                    <div>
                                        {/* <img style={{width: 350, marginTop: 50 }} src="/images/yellow.png"></img> */}
                                    </div>
                                </Row>
    
                                <p>Energias renováveis para<br /> o semiárido</p>
    
                                <Button onClick={() => this.openModal()}>Conheça o Projeto +</Button>
                            
    
                                <Modal
                                title='Olá, sejam bem vindos!'
                                visible={this.state.visible}
                                width={720}
                                footer={null}
                                onCancel={() =>
                                    this.setState({
                                    visible: false
                                    })
                                }
                                onOk={() =>
                                    this.setState({
                                    visible: false
                                    })
                                }
                                >
                                <img style={{ width: '100%' }} src={this.state.image} alt="" />
                                Temos a satisfação de apresentar a todos o RENOVA-FIDA, a plataforma digital de projetos de energias renováveis que possibilitam alternativas de convivência com a região Semiárida e que foram fomentados pelo Fundo Internacional de Desenvolvimento Agrícola (FIDA) da Organização das Nações Unidas (ONU) e  implantados em parceria com órgãos governamentais, ONGs, agências de assistência técnica, agricultores familiares, instituições públicas de ensino e professores inovadores. 

O desenvolvimento do RENOVA-FIDA foi conduzido pelo INSA (Instituto Nacional do Semiárido), responsável por reunir especialistas em tecnologias renováveis para apresentar projetos de grande destaque na região Semiárida com energia solar, energia eólica, biodigestores, bioágua e ecofogões. A plataforma digital também oferece ao usuário um mapa interativo com a localização dos casos de sucesso das tecnologias estudadas, com informações, fotografias e vídeos com depoimentos reais. Além disso, foram incluídos no RENOVA-FIDA exemplos de produtos e protótipos que utilizam energias renováveis e que foram desenvolvidos por professores e estudantes do ensino fundamental e médio da rede pública, como dessalinizadores, fogões e fornos solares, completando as informações da plataforma digital com a apresentação de exemplos relevantes de uma educação voltada para o Semiárido. 

O RENOVA-FIDA também é apresentado em língua inglesa, aumentando as possibilidades de visibilidade por estar disponível como uma plataforma bilíngue. Esperamos que os usuários do RENOVA-FIDA, sejam eles produtores, agentes públicos, representantes de órgãos de fomento, educadores e sociedade civil, possam aproveitar as informações e conhecer os projetos sustentáveis apoiados pelo FIDA.
                                </Modal>
                            </div>
                        </Col>
    
    
                        <div className="bg-main">
                            <img src={imgMain}></img>
    
                        </div>
                    </Row>
                </div>
                <br></br>
                <div className="techs">
                    <Card>
                        <div className="div-yellow"></div>
                        <h1>TECNOLOGIAS</h1>
                    </Card>
    
                    <p>Conheca as tecnologias desenvolvidas</p>
    
                    <br></br>
                    <MenuTechnologies></MenuTechnologies>
    
                </div>
                <br></br>
    
                <Case/>
    
                <div className="team">
                    <Card>
                        <div className="div-yellow"></div>
                        <h1>EQUIPE</h1>
                        <p>Conheça quem está à frente desse projeto</p>
                    </Card>
    
                    <Equipe />
    
                    <br></br>
    
    
    
                </div>
                <div className="parceiros">
                    <Parceiros />
                   
                </div>

            <div className="footer">
                <img src={footer}></img>
            </div> 
            </div>
        );
    }
}

// function HomePage(){
//     return(<h1>HomePage</h1>)
// }

// export default HomePage;