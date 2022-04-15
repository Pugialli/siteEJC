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
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";

// NewUser page components
import FormField from "/pagesComponents/pages/users/new-user/components/FormField";

function OtherInfo({ formData }) {
  const { formField, values } = formData;
  const { bairroEncontro, tamanhoCamisa, restricoesAlimentares, observacoes } = formField;
  const {
    bairroEncontro: bairroEncontroV,
    inscricaoPorMim: inscricaoPorMimV,
    tamanhoCamisa: tamanhoCamisaV,
    restricoesAlimentares: restricoesAlimentaresV,
    observacoes: observacoesV,
  } = values;

  const [inscricaoPorMim, setInscricaoPorMim] = useState(true);
  const handleSetInscricaoPorMim = () => setInscricaoPorMim(!inscricaoPorMim);

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Outros
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDTypography variant="subtitle2" color="text">
                Inscrição feita
              </MDTypography>
              <MDBox
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <MDBox lineHeight={0} mx={2}>
                  <MDTypography variant="button" color="text">
                    {inscricaoPorMim ? "Por mim" : "Por outro"}
                  </MDTypography>
                </MDBox>
                <MDBox mr={1}>
                  <Switch checked={inscricaoPorMim} onChange={handleSetInscricaoPorMim} />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={bairroEncontro.type}
              label={bairroEncontro.label}
              name={bairroEncontro.name}
              value={bairroEncontroV}
              placeholder={bairroEncontro.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["P", "M", "G", "GG", "XGG"]}
              renderInput={(params) => (
                <MDInput {...params} variant="standard" label="Camisa"/>
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={restricoesAlimentares.type}
              label={restricoesAlimentares.label}
              name={restricoesAlimentares.name}
              value={restricoesAlimentaresV}
              placeholder={restricoesAlimentares.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={observacoes.type}
              label={observacoes.label}
              name={observacoes.name}
              value={observacoesV}
              placeholder={observacoes.placeholder}
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Profile
OtherInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default OtherInfo;
