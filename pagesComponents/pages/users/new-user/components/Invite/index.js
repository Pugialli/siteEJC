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

function Invite({ formData }) {
  const { formField, values } = formData;
  const { indicadoNome, indicadoApelido, indicadoContato, indicadoEmail} = formField;
  const {
    indicadoNome: indicadoNomeV,
    indicadoApelido: indicadoApelidoV,
    indicadoContato: indicadoContatoV,
    indicadoEmail: indicadoEmailV,
  } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Quem te convidou?
      </MDTypography>
      <MDBox mt={1.625}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={indicadoNome.type}
              label={indicadoNome.label}
              name={indicadoNome.name}
              value={indicadoNomeV}
              placeholder={indicadoNome.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={indicadoApelido.type}
              label={indicadoApelido.label}
              name={indicadoApelido.name}
              value={indicadoApelidoV}
              placeholder={indicadoApelido.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={indicadoContato.type}
              label={indicadoContato.label}
              name={indicadoContato.name}
              value={indicadoContatoV}
              placeholder={indicadoContato.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={indicadoEmail.type}
              label={indicadoEmail.label}
              name={indicadoEmail.name}
              value={indicadoEmailV}
              placeholder={indicadoEmail.placeholder}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Profile
Invite.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Invite;
