import { Box, Button, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const RegistrationPageWrapper = styled(Grid2)(() => ({
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  background: "#EAF0F4",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
}));

export const RegistrationButton = styled(Button)(() => ({
  width: "200px",
  height: "52px",
  
}));
export const FormContainer = styled(Box)(() => ({
  height: "30%",
  width: "20%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledTypography = styled(Box)(() => ({
  color: "#267AFC",
  fontSize: "13px",
  fontFamily: "Inter",
  textAlign: "left",
}));
export const PasswordTextBox = styled(TextField)(() => ({
  width: "90%",
  "& .MuiInputBase-input": {
    backgroundColor: "#F7F7FC",
    color: "#ADB5BD",
    padding: 5,
  },
  "& .MuiOutlinedInput-root": {
    height: "36px",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0)",
    },
  },
}));
