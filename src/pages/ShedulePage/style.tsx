import { Grid2 } from "@mui/material";
import styled from "styled-components";
//import { Calendar } from "./components/StyledCalendar";

export const ShedulePageWrapper = styled(Grid2)(() => ({
    width: "100vw",
    height: "100vh",
    overflowY: "hidden",
  }));
/*
export const StyledCalendar = styled(Calendar)({
    '.MuiPickersToolbar-root': {
      borderRadius: '2px',
      borderWidth: '1px',
      borderColor: '#2196f3',
      border: '1px solid',
      backgroundColor: '#0d47a1',
    },
    '.MuiDateCalendar-root':{
    }
  })*/