import React from 'react';
import './index.css';

import { Table, Modal  } from 'antd';



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
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'PRODECOOP',
    access: 'PJ',
    local: 'Brasil',
    prazo: 'De 30 a 144 meses',
    financing: 'Até 90% do valor do projeto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Cooperativas Agropecuária',
    limit: 'LIMITE DE FINANCIAMENTO: Até R$ 110 milhões, podendo chegar a R$ 200 milhões quando os recursos forem destinados a cooperativas centrais em projetos de industrialização de produtos prontos para o consumo humano, processados e embalados.',
    period: 'PRAZO DE CARÊNCIA: Até 36 meses',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: As admitidas pelo banco. É obrigatória a vinculação dos bens objetos do financiamento.',
    interest: 'TAXA DE JUROS: 9,5 % a.a.',
    link: 'https://www.bb.com.br/pbb/pagina-inicial/cooperativas/cooperativas-rurais/investimentos/bb-prodecoop#/',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '2',
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'PRONAMP',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 8 anos',
    financing: 'Até 100% do valor proposto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Produtores Rurais (PF e PJ)',
    limit: 'LIMITE DE FINANCIAMENTO: Até R$ 430 mil, por beneficiário, por ano agrícola, para empreendimento individual e para empreendimento coletivo, é limitado a 10 beneficiários, respeitado o teto individual por participante.',
    period: 'PRAZO DE CARÊNCIA: Até 3 anos',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: As admitidas pelo banco',
    interest: 'TAXA DE JUROS: 6 % a.a.',
    link: 'https://www.bb.com.br/pbb/pagina-inicial/agronegocios/agronegocio---produtos-e-servicos/credito/investir-em-sua-atividade/pronamp-investimento#/',
    obs: 'OBSERVAÇÕES: O seguro é obrigatório para os bens oferecidos em garantia da operação.'
  },
  {
    key: '3',
    institution: 'Banco do Brasil (BB)',
    instrument: 'INVESTE AGRO',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 5 anos',
    financing: 'Até 100% do valor proposto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Produtores rurais, pessoas físicas ou jurídicas, exceto agricultores familiares ou iniciantes e cooperativas de produção agropecuária, singulares ou centrais.',
    limit: 'LIMITE DE FINANCIAMENTO: Não há teto',
    period: 'PRAZO DE CARÊNCIA: Até 1 ano',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: As admitidas pelo banco',
    interest: 'TAXA DE JUROS: Taxas de Mercado',
    link: 'https://www.bb.com.br/pbb/s001t006p006,500971,505224,1,1,1,1.bb#/',
    obs: 'OBSERVAÇÕES: O seguro é obrigatório para os bens oferecidos em garantia da operação.'
  },
  {
    key: '4',
    institution: 'Banco do Nordeste do Brasil (BNB)',
    instrument: 'CDC Energias Renováveis',
    access: 'PF',
    local: 'SUDENE',
    prazo: 'Até 72 meses',
    financing: 'Até 100% dos itens financiáveis desde que haja existência de margem disponível nos limites calculados pelo banco',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: PF que possua conta corrente no Banco do Nordeste;*',
    limit: 'LIMITE DE FINANCIAMENTO: Até 100% dos itens financiáveis',
    period: 'PRAZO DE CARÊNCIA: Até 06 meses',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Próprio sistema para geração de energia',
    interest: 'TAXA DE JUROS: Não informado',
    link: 'https://www.bnb.gov.br/credito/cdc-energias-renovaveis',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '5',
    institution: 'Banco Nacional do Desenvolvimento Econômico e Social (BNDES)',
    instrument: 'Cartão BNDES',
    access: 'PJ',
    local: 'Brasil',
    prazo: 'Até 48 Prestações Fixas, Mensais e Iguais',
    financing: 'Até 100% dos itens financiáveis. Regras do PNP se aplicam para definir o volume de alavancagem',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Até R$ 2 milhões por banco emissor. Os limites de crédito disponíveis em diferentes emissores poderão ser somados para realizar compras',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: O banco emissor do Cartão BNDES pode, a seu critério, estabelecer a necessidade de constituição de garantias reais ou pessoais para a emissão do Cartão BNDES',
    interest: 'TAXA DE JUROS: Taxa de juros de acordo com taxas mensais do Cartão BNDES (como referência a taxa de juros para novembro de 2018 é de 1.43% a.m., equivalente a 18.58% a.a.)',
    link: 'https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/cartao-bndes',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '6',
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'PRONAF AGROINDÚSTRIA INVESTIMENTO',
    access: 'PF ou PJ',
    local: 'Brasil',
    prazo: 'Até 10 anos',
    financing: 'Até 100% do valor proposto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Agricultores familiares, seus Empreendimentos familiares rurais (pessoa jurídica), cooperativas. APLICAM-SE EXCEÇÕES.',
    limit: 'LIMITE DE FINANCIAMENTO: Pessoa física: R$ 165 mil por beneficiário, por ano agrícola; Empreendimento familiar rural - pessoa jurídica: R$ 330 mil por beneficiário, por ano agrícola; Cooperativa - pessoa jurídica: R$ 35 milhões.',
    period: 'PRAZO DE CARÊNCIA: Até 3 anos',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: As admitidas pelo banco',
    interest: 'TAXA DE JUROS: 4,0 % a.a.',
    link: 'https://www.bb.com.br/pbb/pagina-inicial/agronegocios/agronegocio---produtos-e-servicos/credito/investir-em-sua-atividade/pronaf-agroindustria-investimento#/',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '7',
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'PRONAF MAIS ALIMENTOS',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 10 anos',
    financing: 'Até 100% dos Itens Financiáveis',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Agricultores e produtores rurais familiares, pessoas físicas, que apresentem Declaração de Aptidão ao PRONAF (DAP) válida e que cumpram os requisitos para enquadramento.',
    limit: 'LIMITE DE FINANCIAMENTO: Limites por ano agrícola: R$ 330 mil (Individual) para suinocultura, avicultura, aquicultura, carcinicultura e fruticultura. R$ 165 mil demais atividade. R$ 20 milhões (coletivo)',
    period: 'PRAZO DE CARÊNCIA: Até 03 anos',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Negociadas entre a instituição financeira credenciada e o cliente.',
    interest: 'TAXA DE JUROS: até 4,6% a.a.',
    link: 'https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/pronaf-mais-alimentos',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '8',
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'PRONAF BIOECONOMIA',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'De 10 a 20 anos, dependendo do empreendimento financiado',
    financing: 'Até 100% dos Itens Financiáveis',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Agricultores e produtores rurais familiares, pessoas físicas, que apresentem Declaração de Aptidão ao PRONAF (DAP) válida e que cumpram os requisitos para enquadramento.',
    limit: 'LIMITE DE FINANCIAMENTO: R$ 165 mil por beneficiário, por ano agrícola',
    period: 'PRAZO DE CARÊNCIA: De 3 a 8 anos, dependendo do empreendimento financiado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Negociadas entre a instituição financeira credenciada e o cliente.',
    interest: 'TAXA DE JUROS: Pré-fixada de 2,75% ao ano',
    link: 'https://sistema.ouvidorias.gov.br/Login/Identificacao.aspx?idFormulario=3&tipo=8&ReturnUrl=%2fpublico%2fManifestacao%2fRegistrarManifestacao.aspx%3fidFormulario%3d3%26tipo%3d8%26origem%3didp%26modo%3d',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '9',
    institution: 'Banco do Nordeste, Banco da Amazônia, Banco do Brasil',
    instrument: 'INOVAGRO',
    access: 'PF/PJ',
    local: 'Brasil',
    prazo: 'Até 10 anos',
    financing: 'Até 100% do valor do projeto',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Produtores rurais (pessoas físicas, pessoas jurídicas e cooperativas de produtores);',
    limit: 'LIMITE DE FINANCIAMENTO: Até R$ 1.3 milhões para projetos individuais. Até R$ 3.9 millions para projetos coletivos',
    period: 'PRAZO DE CARÊNCIA: Até 3 anos',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Negociadas entre a instituição financeira credenciada e o cliente.',
    interest: 'TAXA DE JUROS: Taxa pré-fixada: até 6,0% ao ano. Taxa pós-fixada: até 0,33% ao ano acrescida de atualização monetária.',
    link: 'https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/inovagro',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '10',
    institution: 'Caixa Econômica Federal (Caixa)',
    instrument: 'BCD Ecoeficiência',
    access: 'PJ',
    local: 'Brasil',
    prazo: 'Até 60 meses',
    financing: 'Até 100% do Valor dos Equipamentos',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Não informado',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Sistema FV a ser financiado',
    interest: 'TAXA DE JUROS: Taxa Final: até 11.76%',
    link: 'http://www.caixa.gov.br/sustentabilidade/produtos-servicos/ecoeficiencia-empresarial/Paginas/default.aspx',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '11',
    institution: 'Caixa Econômica Federal (Caixa)',
    instrument: 'Construcard',
    access: 'PF',
    local: 'Brasil',
    prazo: 'Até 240 meses',
    financing: 'Até 100% dos Itens Financiáveis',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: N/A',
    limit: 'LIMITE DE FINANCIAMENTO: Variável Caso a Caso',
    period: 'PRAZO DE CARÊNCIA: Não informado',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: Garantias: aval, alienação fiduciária de bem móvel, caução de depósito/aplicação financeira ou alienação fiduciária de bem imóvel.',
    interest: 'TAXA DE JUROS: Não informado',
    link: 'http://www.caixa.gov.br/voce/cartoes/casa/construcard/Paginas/default.aspx',
    obs: 'OBSERVAÇÕES: -'
  },
  {
    key: '12',
    institution: 'Banco do Nordeste do Brasil (BNB)',
    instrument: 'FNE Água',
    access: 'PF/PJ',
    local: 'Semiárido',
    prazo: 'Até 10 anos',
    financing: '-',
    specifications: 'ESPECIFICAÇÕES DE QUEM PODE ACESSAR: Empresas de todos os portes e setores, produtores rurais, agricultores familiares, cooperativas e associações.',
    limit: 'LIMITE DE FINANCIAMENTO: Até 100% do valor do investimento financiado, a depender do porte e localização',
    period: 'PRAZO DE CARÊNCIA: Com até 3 anos de carência.',
    warranty: 'GARANTIAS EXIGIDAS DO TOMADOR DO CRÉDITO: - ',
    interest: 'TAXA DE JUROS: Com até 3 anos de carência.',
    link: 'https://www.bnb.gov.br/fne-agua',
    obs: 'OBSERVAÇÕES: -'
  },
];
class InvestPublic extends React.Component {

  listCase = document.getElementsByClassName('.list-cases')

  state = {
      visible: false
    }
  
    openModal() {
      this.setState({ visible: !this.state.visible })
    }
    render(){
    return (
        <div className='ecofogao-analyze-investpublic invest-public'> 
        <div><p className="invest-p">FINANCIAMENTOS PÚBLICOS</p></div>
          <Table 
            className="table-responsive"
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
                <p className="link-table-invest" style={{ margin: 0, marginBottom: 10 }}>LINK PARA MAIS INFORMAÇÕES: <a target="_blank" href={record.link}>{record.link}</a></p>
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
export default InvestPublic
