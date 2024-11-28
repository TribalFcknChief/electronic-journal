import { Box, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const ProfilePageWrapper = styled(Grid2)(() => ({
  width: "100vw",
  height: "100vh",
  overflowY: "hidden",
}));

export const DataBox = styled(Box)(() => ({
  border: "1.5px solid #7D8797",
  borderRadius: "12px",
}));

export const HeadBox = styled(Box)(() => ({
  width: "100%",
  height: "34px",
  display:"flex",
  flexDirection:"row",
  borderRadius: "10px",
  background: "#267AFC",
  alignItems: "flex-start",
  paddingTop:"4px"
}));

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    borderColor: "#267AFC",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderRadius: "12px",
    height: "40px",
    width: "250px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));