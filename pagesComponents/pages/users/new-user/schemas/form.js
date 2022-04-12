/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const form = {
  formId: "new-user-form",
  formField: {
    //UserInfo
    nome: {
      name: "nome",
      label: "Nome",
      type: "text",
      errorMsg: "Nome é obrigatório.",
    },
    apelido: {
      name: "apelido",
      label: "Apelido",
      type: "text",
    },
    dataNasc: {
      name: "dataNasc",
      label: "Nascimento",
      type: "date",
      errorMsg: "Data de nascimento é obrigatório.",
      invalidMsg: "Seu data de nascimento não é válida.",
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
    },
    telefone: {
      name: "telefone",
      label: "Telefone",
      type: "text",
    },
    celular: {
      name: "celular",
      label: "Celular",
      type: "text",
      errorMsg: "Celular é obrigatório.",
      invalidMsg: "Celular não é válido.",
    },
    religiao: {
      name: "religiao",
      label: "Religião",
      type: "text",
    },
    instagram: {
      name: "instagram",
      label: "Instagram",
      type: "text",
    },

    //Adress
    cep: {
      name: "cep",
      label: "CEP",
      type: "number",
      errorMsg: "CEP é obrigatório.",
      invalidMsg: "CEP não é válido (ex. 20000000).",
    },
    estado: {
      name: "estado",
      label: "Estado",
      type: "text",
      errorMsg: "Estado é obrigatório.",
    },
    cidade: {
      name: "cidade",
      label: "Cidade",
      type: "text",
      errorMsg: "Cidade é obrigatório.",
    },
    endereco: {
      name: "endereco",
      label: "Endereço",
      type: "text",
      errorMsg: "Endereço é obrigatório.",
    },
    numero: {
      name: "numero",
      label: "Número",
      type: "number",
      errorMsg: "Número é obrigatório.",
    },
    complemento: {
      name: "complemento",
      label: "Complemento",
      type: "text",
    },
    bairro: {
      name: "bairro",
      label: "Bairro",
      type: "text",
      errorMsg: "Bairro é obrigatório.",
    },

    //Filiação
    moracom: {
      name: "moracom",
      label: "Mora Com",
      type: "text",
    },
    paisseparados: {
      name: "paisseparados",
      label: "Pais Separados",
      type: "text",
    },
    paiNome: {
      name: "paiNome",
      label: "Nome do Pai",
      type: "text",
    },
    paiContato: {
      name: "paiContato",
      label: "Contato do Pai",
      type: "text",
    },
    maeNome: {
      name: "maeNome",
      label: "Nome da Mãe",
      type: "text",
    },
    maeContato: {
      name: "maeContato",
      label: "Contato da Mãe",
      type: "text",
    },
    //Indicação
    indicadoNome: {
      name: "indicadoNome",
      label: "Nome",
      type: "text",
    },
    indicadoApelido: {
      name: "indicadoApelido",
      label: "Apelido",
      type: "text",
    },
    indicadoContato: {
      name: "indicadoContato",
      label: "Contato",
      type: "text",
    },
    indicadoEmail: {
      name: "indicadoEmail",
      label: "Email",
      type: "email",
    },
    //Outros
    bairroEncontro: {
      name: "bairroEncontro",
      label: "Bairro durante o Encontro",
      type: "text",
    },
    inscricaoPorMim: {
      name: "inscricaoPorMim",
      label: "Inscrição Efetuada",
      type: "text",
    },
    tamanhoCamisa: {
      name: "tamanhoCamisa",
      label: "Tamanho da Camisa",
      type: "text",
    },
    restricoesAlimentares: {
      name: "restricoesAlimentares",
      label: "Restrições Alimentares",
      type: "text",
    },
    observacoes: {
      name: "observacoes",
      label: "Observações",
    },
  },
};

export default form;
