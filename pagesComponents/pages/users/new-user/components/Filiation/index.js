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

function Filiation({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { moracom, paisseparados, paiNome, paiContato, maeNome, maeContato } = formField;
  const {
    moracom: moracomV,
    paisseparados: paisseparadosV,
    paiNome: paiNomeV,
    paiContato: paiContatoV,
    maeNome: maeNomeV,
    maeContato: maeContatoV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Filiação
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={moracom.type}
              label={moracom.label}
              name={moracom.name}
              value={moracomV}
              placeholder={moracom.placeholder}
              error={errors.moracom && touched.moracom}
              success={moracomV.length > 0 && !errors.moracom}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={paisseparados.type}
              label={paisseparados.label}
              name={paisseparados.name}
              value={paisseparadosV}
              placeholder={paisseparados.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={paiNome.type}
              label={paiNome.label}
              name={paiNome.name}
              value={paiNomeV}
              placeholder={paiNome.placeholder}
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
