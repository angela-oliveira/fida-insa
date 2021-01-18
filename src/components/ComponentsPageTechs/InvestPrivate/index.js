import React from 'react';
import './index.css';

import { Table, Button, Modal  } from 'antd';



const columns = [
  {
    title: 'Instituição Financeira/Agente',
    dataIndex: 'institution',
    key: 'institution',
  },
  {
    title: 'Nome do Instrumento',
    dataIndex: 'instrument',
    key: 'instrument',
  },
  {
    title: 'Quem pode acessar (PF ou PJ)',
    dataIndex: 'access',
    key: 'access',
  },
  {
    title: 'Estado ou Região',
    key: 'local',
    dataIndex: 'local'
  },
  {
    title: 'Prazo de Pagamento',
    key: 'prazo',
    dataIndex: 'prazo'
  },
  {
    title: 'O que pode ser financiado',
    key: 'financing',
    dataIndex: 'financing'
    // render: (text, record) => (
    //   <Button onClick={() => this.openModal()}>Detalhes</Button>
    // ),
  },
];

const data = [
  {
    key: '1',
    institution: 'Santander',
    instrument: 'CDC Sustentável',
    access: 'PJ',
    local: 'Brasil',
    prazo: '60 meses',
    financing: '100% Bens',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Correntistas',
    limit: 'LIMITE DE FINANCIAMENTO: Limite de Crédito do Cliente',
    period: 'PRAZO DE CARÊNCIA: Até 03 meses',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: A solicitação de garantia ou não dependerá do relacionamento com o cliente, prazo e valor financiado - será solicitado investimentos, imóveis, bens alienáveis',
    interest: 'TAXA DE JUROS: A Partir de 0,99% a.m',
    link: 'https://www.santander.com.br/creditos-e-financiamentos-para-empresas/expansao-de-negocios/cdc-sustentavel-solar',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '2',
    institution: 'Santander',
    instrument: 'CDC Agro Socioambiental',
    access: 'Agronegócios',
    local: 'Brasil',
    prazo: '60 meses',
    financing: '100% Bens',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Não informado',
    limit: 'LIMITE DE FINANCIAMENTO: Limite de Crédito do Cliente',
    period: 'PRAZO DE CARÊNCIA: Pagamento das parcelas semestrais ou anuais',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: A solicitação de garantia ou não dependerá do relacionamento com o cliente, prazo e valor financiado - será solicitado investimentos, imóveis, bens alienáveis',
    interest: 'TAXA DE JUROS: A Partir de 0,99% a.m',
    link: 'https://www.santander.com.br/agronegocio/outros-financiamentos-e-emprestimos/cdc-agro-solar',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '3',
    institution: 'Santander Financeira',
    instrument: 'CDC Eficiência Energética',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 60 meses',
    financing: 'Até 100% dos itens financiáveis, limitado ao valor de R$ 500 mil',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Não informado',
    limit: 'LIMITE DE FINANCIAMENTO: Até R$ 500.000 não correntistas e R$ 1 milhão correntistas',
    period: 'PRAZO DE CARÊNCIA: Até 70 dias',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Equipamentos Financiados',
    interest: 'TAXA DE JUROS: A Partir de 0,99% p/ Correntista. A Partir de 1,37% p/ Não Correntista',
    link: 'https://www.santanderfinanciamentos.com.br/portal/wps/gcm/package/financiamentos/financeira_11012019_94442.zip/sustentabilidade.html',
    obs: 'OBSERVAÇÕES: Somente através das empresas Parceiras'
  },
  {
    key: '4',
    institution: 'Bradesco',
    instrument: 'Leasing Ambiental',
    access: 'PF/PJ',
    local: 'Nacional',
    prazo: 'Até 60 meses* *Possibilidade de extensão do prazo para até 120 meses, mediante tipo de bem e aprovação de crédito',
    financing: 'Até 100% do Projeto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Conforme aprovação de crédito',
    period: 'PRAZO DE CARÊNCIA: De 1 a 5 meses',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Conforme aprovação de crédito',
    interest: 'TAXA DE JUROS: A partir de 0,99 % a.m.',
    link: 'https://banco.bradesco/html/pessoajuridica/solucoes-integradas/emprestimo-e-financiamento/leasing-ambiental.shtm',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '5',
    institution: 'CREDCREA',
    instrument: 'Crédito Sustentável',
    access: 'PF',
    local: 'Brasil',
    prazo: 'Não informado',
    financing: 'Não informado',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Não informado',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Não informado',
    interest: 'TAXA DE JUROS: Não informado',
    link: 'https://www.credcrea.coop.br/para-voce/credito#!#emprestimos-e-financiamentos',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '6',
    institution: 'SICREDI',
    instrument: 'Consórcio Sustentável',
    access: 'PJ',
    local: 'Brasil',
    prazo: 'Até 60, 75, 100 e 120 meses.',
    financing: '< 100% dos itens financiáveis',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Associados do SICRED',
    limit: 'LIMITE DE FINANCIAMENTO: Não informado',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Sistema FV a ser financiado',
    interest: 'TAXA DE JUROS: Taxa Final: de 12.68% a 42.57%',
    link: 'https://www.sicredi.com.br/html/para-voce/consorcios/sustentavel/',
    obs: 'OBSERVAÇÕES: Sorteios Mensais'
  },
  {
    key: '7',
    institution: 'SEBRAE',
    instrument: 'FAMPE',
    access: 'PJ',
    local: 'Brasil',
    prazo: 'Pelo período da dívida contratada',
    financing: 'Até 80% do Financiamento, Limitado a Até R$ 30 mil para Microempreendedores Individuais, R$ 200 mil para Microempresas e R$ 300 mil para Pequenas Empresas',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: R$ 30.000 para MEI. R$ 200.000 para Microempresas. R$300.000 para Pequenas Empresas',
    period: 'PRAZO DE CARÊNCIA: De acordo com a linha de financiamento',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Podem ser requeridas garantias adicionais além do Fampe.',
    interest: 'TAXA DE JUROS: 0,1% a.m.',
    link: 'http://www.sebrae.com.br/sites/PortalSebrae/sebraeaz/ferramenta-facilita-acesso-ao-credito-para-os-pequenos-negocios,ac58742e7e294410VgnVCM2000003c74010aRCRD',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '8',
    institution: 'CREDCREA',
    instrument: 'Crédito Sustentável',
    access: 'PF',
    local: 'Brasil',
    prazo: 'Não informado',
    financing: 'Não informado',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Não informado',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Não informado',
    interest: 'TAXA DE JUROS: Não informado',
    link: 'https://www.credcrea.coop.br/para-voce/credito#!#emprestimos-e-financiamentos',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '9',
    institution: 'Consórcio Sustentável',
    instrument: 'INOVAGRO',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 50 meses',
    financing: 'Todo o sistema',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: R$ 25 a 50 mil',
    period: 'PRAZO DE CARÊNCIA: Não há',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Ser Cliente da empresa de seguros',
    interest: 'TAXA DE JUROS: Sistema de Consórcio',
    link: 'https://www.portoseguro.com.br/consorcio-sustentavel-de-placas-solares',
    obs: 'OBSERVAÇÕES: -'
  }
];
class InvestPrivate extends React.Component {

  listCase = document.getElementsByClassName('.list-cases')

  state = {
      visible: false
    }
  
    openModal() {
      this.setState({ visible: !this.state.visible })
    }
    render(){
    return (
        <div className='invest-private'> 
        <div><p className="invest-p">FINANCIAMENTOS PRIVADO</p></div>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{ pageSize: 7 }} 
            scroll={{ y: 450 }} 
            expandable={{
              expandedRowRender: record => <div className="expanded-table">
                <p style={{ margin: 0, marginBottom: 10 }}>{record.specifications}</p>
                <p style={{ margin: 0, marginBottom: 10 }}>{record.limit}</p>
                <p style={{ margin: 0, marginBottom: 10 }}>{record.period}</p>
                <p style={{ margin: 0, marginBottom: 10 }}>{record.warranty}</p>
                <p style={{ margin: 0, marginBottom: 10 }}>{record.interest}</p>
                <p style={{ margin: 0, marginBottom: 10 }}>LINK PARA MAIS INFORMAÇÕES: <a href={record.link}>{record.link}</a></p>
                <p style={{ margin: 0, marginBottom: 10 }}>{record.obs}</p>
                </div>,
              rowExpandable: record => record.key !== 'Not Expandable',
            }}
          />

          <Modal
            title='test'
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
          </Modal>
                  
        </div>
    )

    }
}
export default InvestPrivate
