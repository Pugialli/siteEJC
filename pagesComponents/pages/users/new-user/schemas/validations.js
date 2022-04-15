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

import * as Yup from "yup";
import checkout from "/pagesComponents/pages/users/new-user/schemas/form";

const {
  formField: {
    nome,
    dataNasc,
    celular,
    cep,
    cidade,
    bairro,
    endereco,
    numero,
    inscricaoPorMim,
  },
} = checkout;

const validations = [
  // Yup.object().shape({
  //   [nome.name]: Yup.string().required(nome.errorMsg),
  //   [dataNasc.name]: Yup.string().required(dataNasc.errorMsg),
  //   [celular.name]: Yup.string().required(celular.errorMsg).min(10, celular.invalidMsg),
  // }),
  // Yup.object().shape({
  //   [cep.name]: Yup.string().required(cep.errorMsg).min(8, cep.invalidMsg),
  //   [cidade.name]: Yup.string().required(cidade.errorMsg),
  //   [bairro.name]: Yup.string().required(bairro.errorMsg),
  //   [endereco.name]: Yup.string().required(endereco.errorMsg),
  //   [numero.name]: Yup.string().required(numero.errorMsg),
  // }),
  // Yup.object().shape({
  //   [inscricaoPorMim.name]: Yup.string().required(inscricaoPorMim.errorMsg),
  // }),
];

export default validations;
