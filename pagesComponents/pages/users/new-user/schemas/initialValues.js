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

import checkout from "/pagesComponents/pages/users/new-user/schemas/form";

const {
  formField: {
    nome,
    apelido,
    dataNasc,
    email,
    telefone,
    celular,
    instagram,
    religiao,

    cep,
    estado,
    cidade,
    bairro,
    endereco,
    numero,
    complemento,

    moracom,
    paisseparados,
    paiNome,
    paiContato,
    maeNome,
    maeContato,

    indicadoNome,
    indicadoApelido,
    indicadoContato,
    indicadoEmail,

    bairroEncontro,
    inscricaoPorMim,
    tamanhoCamisa,
    restricoesAlimentares,
    observacoes,
  },
} = checkout;

const initialValues = {
  [nome.name]: "",
  [apelido.name]: "",
  [dataNasc.name]: "",
  [email.name]: "",
  [telefone.name]: "",
  [celular.name]: "",
  [instagram.name]: "",
  [religiao.name]: "",

  [cep.name]: "",
  [estado.name]: "",
  [cidade.name]: "",
  [bairro.name]: "",
  [endereco.name]: "",
  [numero.name]: "",
  [complemento.name]: "",

  [moracom.name]: "",
  [paisseparados.name]: "",
  [paiNome.name]: "",
  [paiContato.name]: "",
  [maeNome.name]: "",
  [maeContato.name]: "",

  [indicadoNome.name]: "",
  [indicadoApelido.name]: "",
  [indicadoContato.name]: "",
  [indicadoEmail.name]: "",

  [bairroEncontro.name]: "",
  [inscricaoPorMim.name]: "",
  [tamanhoCamisa.name]: "",
  [restricoesAlimentares.name]: "",
  [observacoes.name]: "",
};

export default initialValues;
