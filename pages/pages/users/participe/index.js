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

import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO examples
import PublicLayout from "/pagesComponents/pages/users/new-user/components/PublicLayout";
import Footer from "/pagesComponents/authentication/components/Footer";

// NewUser page components
import InfoUsuario from "/pagesComponents/pages/users/new-user/components/InfoUsuario";
import Address from "/pagesComponents/pages/users/new-user/components/Address";
import Filiation from "/pagesComponents/pages/users/new-user/components/Filiation";
import Invite from "/pagesComponents/pages/users/new-user/components/Invite";
import OtherInfo from "/pagesComponents/pages/users/new-user/components/OtherInfo";

// NewUser layout schemas for form and form feilds
import validations from "/pagesComponents/pages/users/new-user/schemas/validations";
import form from "/pagesComponents/pages/users/new-user/schemas/form";
import initialValues from "/pagesComponents/pages/users/new-user/schemas/initialValues";

// Images
import bgImage from "/assets/images/bg-sign-in-basic.jpeg";

function getSteps() {
  return ["Dados Pessoais", "Endereço", "Filiação", "Indicação", "Outros"];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <InfoUsuario formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <Filiation formData={formData} />;
    case 3:
      return <Invite formData={formData} />;
    case 4:
      return <OtherInfo formData={formData} />;
    default:
      return null;
  }
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <PublicLayout image={bgImage}>
      <MDBox py={5} mb={20} height="65vh">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", mt: 8 }}
        >
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <MDBox mx={2} mt={-3}>
                      <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </MDBox>
                    <MDBox p={3}>
                      <MDBox>
                        {getStepContent(activeStep, {
                          values,
                          touched,
                          formField,
                          errors,
                        })}
                        <MDBox
                          mt={2}
                          width="100%"
                          display="flex"
                          justifyContent="space-between"
                        >
                          {activeStep === 0 ? (
                            <MDBox />
                          ) : (
                            <MDButton
                              variant="gradient"
                              color="light"
                              onClick={handleBack}
                            >
                              Anterior
                            </MDButton>
                          )}
                          <MDButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            {isLastStep ? "Enviar Cadastro" : "Próximo"}
                          </MDButton>
                        </MDBox>
                      </MDBox>
                    </MDBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </MDBox>
      <Footer light />
    </PublicLayout>
    
  );
}

export default NewUser;
