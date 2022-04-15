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

function Filiation({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { moraCom, paiNome, paiContato, maeNome, maeContato } = formField;
  const {
    moraCom: moraComV,
    paiNome: paiNomeV,
    paiContato: paiContatoV,
    maeNome: maeNomeV,
    maeContato: maeContatoV,
  } = values;

  const [paisSeparados, setPaisSeparados] = useState(false);
  const handleSetPaisSeparados = () => setPaisSeparados(!paisSeparados);


  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Filiação
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["Pais", "Mãe", "Pai", "Parentes", "Amigos", "Sozinho", "Cônjuge"]}
              renderInput={(params) => (
                <MDInput {...params} variant="standard" label="Mora com" />
              )}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDTypography variant="subtitle2" color="text">
                Pais separados
              </MDTypography>
              <MDBox
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <MDBox lineHeight={0} mx={2}>
                  <MDTypography variant="button" color="text">
                    {paisSeparados ? "Sim" : "Não"}
                  </MDTypography>
                </MDBox>
                <MDBox mr={1}>
                  <Switch checked={paisSeparados} onChange={handleSetPaisSeparados} />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Autocomplete
              options={["Sim", "Não"]}
              renderInput={(params) => (
                <MDInput {...params} variant="standard" label="Pais separados" />
              )}
            /> */}
          {/* </Grid> */}
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={paiNome.type}
              label={paiNome.label}
              name={paiNome.name}
              value={paiNomeV}
              placeholder={paiNome.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={paiContato.type}
              label={paiContato.label}
              name={paiContato.name}
              value={paiContatoV}
              placeholder={paiContato.placeholder}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={maeNome.type}
              label={maeNome.label}
              name={maeNome.name}
              value={maeNomeV}
              placeholder={maeNome.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={maeContato.type}
              label={maeContato.label}
              name={maeContato.name}
              value={maeContatoV}
              placeholder={maeContato.placeholder}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Socials
Filiation.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Filiation;
