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
import Autocomplete from "@mui/material/Autocomplete";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";

// NewUser page components
import FormField from "/pagesComponents/pages/users/new-user/components/FormField";

function Address({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { cep, cidade, endereco, numero, complemento, bairro } = formField;
  const {
    cep: cepV,
    cidade: cidadeV,
    endereco: enderecoV,
    numero: numeroV,
    complemento: complementoV,
    bairro: bairroV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Endereço
      </MDTypography>
      <MDBox mt={1.625}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
            <FormField
              type={endereco.type}
              label={endereco.label}
              name={endereco.name}
              value={enderecoV}
              placeholder={endereco.placeholder}
              error={errors.endereco && touched.endereco}
              success={enderecoV.length > 0 && !errors.endereco}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={numero.type}
              label={numero.label}
              name={numero.name}
              value={numeroV}
              placeholder={numero.placeholder}
              error={errors.numero && touched.numero}
              success={numeroV.length > 0 && !errors.numero}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={complemento.type}
              label={complemento.label}
              name={complemento.name}
              value={complementoV}
              placeholder={complemento.placeholder}
              success={complementoV.length > 0}
            />
          </Grid>
          <Grid item xs={12}>
            <MDBox mt={-1.625}>
              <FormField
                type={bairro.type}
                label={bairro.label}
                name={bairro.name}
                value={bairroV}
                placeholder={bairro.placeholder}
                error={bairro.numero && touched.bairro}
                success={bairroV.length > 0 && !bairro.numero}
                />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={cep.type}
              label={cep.label}
              name={cep.name}
              value={cepV}
              placeholder={cep.placeholder}
              error={errors.cep && touched.cep}
              success={cepV.length > 0 && !errors.cep}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Autocomplete
              options={["RJ", "SP", "Outros"]}
              renderInput={(params) => (
                <MDInput {...params} variant="standard" label="Estado" />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={cidade.type}
              label={cidade.label}
              name={cidade.name}
              value={cidadeV}
              placeholder={cidade.placeholder}
              error={errors.cidade && touched.cidade}
              success={cidadeV.length > 0 && !errors.cidade}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
