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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NewUser page components
import FormField from "/pagesComponents/pages/users/new-user/components/FormField";

function InfoUsuario({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { nome, apelido, dataNasc, email, telefone, celular, religiao, instagram } =
    formField;
  const {
    nome: nomeV,
    apelido: apelidoV,
    dataNasc: dataNascV,
    email: emailV,
    telefone: telefoneV,
    celular: celularV,
    religiao: religiaoV,
    instagram: instagramV,
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5">Dados Pessoais</MDTypography>
        <MDTypography variant="button" color="text">
          Informações básicas
        </MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={nome.type}
              label={nome.label}
              name={nome.name}
              value={nomeV}
              placeholder={nome.placeholder}
              error={errors.nome && touched.nome}
              success={nomeV.length > 0 && !errors.nome}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={apelido.type}
              label={apelido.label}
              name={apelido.name}
              value={apelidoV}
              placeholder={apelido.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={dataNasc.type}
              label={dataNasc.label}
              name={dataNasc.name}
              value={dataNascV}
              placeholder={dataNasc.placeholder}
              error={errors.dataNasc && touched.dataNasc}
              success={dataNascV.length > 0 && !errors.dataNasc}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={telefone.type}
              label={telefone.label}
              name={telefone.name}
              value={telefoneV}
              placeholder={telefone.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={celular.type}
              label={celular.label}
              name={celular.name}
              value={celularV}
              placeholder={celular.placeholder}
              error={errors.celular && touched.celular}
              success={celularV.length > 0 && !errors.celular}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={religiao.type}
              label={religiao.label}
              name={religiao.name}
              value={religiaoV}
              placeholder={religiao.placeholder}
              error={errors.religiao && touched.religiao}
              success={religiaoV.length > 0 && !errors.religiao}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={instagram.type}
              label={instagram.label}
              name={instagram.name}
              value={instagramV}
              placeholder={instagram.placeholder}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
InfoUsuario.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default InfoUsuario;
