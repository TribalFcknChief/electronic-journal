import { Box, Divider} from "@mui/material";
import MenuStyled from "../../components/StyledMenu";
import {  ShedulePageWrapper, StyledCalendar} from "./style";
import { StyledHeader } from "../../components/StyledHeader";
import { StyledTypography } from "../RegistrationPage/style";
import { CalendarIcon } from "../ProfilePage/svg/calendarIcon";
import AccessibleTable from "./components/StyledTableEvents";
import CalendarWithTable from "./Cal";

export const ShedulePage = () => {
  return (
    <ShedulePageWrapper>
      <StyledHeader></StyledHeader>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          background: "#EAF0F4",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "90%",
            background: "#FFFF",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ width: "100%", height: "100px" }}></Box>
          <MenuStyled></MenuStyled>
        </Box>
        <Box
          sx={{
            width: "1160px",
            height: "90%",
            background: "#FFFF",
            borderRadius: "12px",
          }}
        >
          <Box sx={{display:"flex",flexDirection:"row", height:"50px",alignItems:"center", marginLeft:"20px"}}>
            <CalendarIcon/>
            <StyledTypography
              sx={{
                fontSize: "20px",
                fontWeight: "Bold",
                color: "#272727",
                marginLeft: "24px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Расписание
            </StyledTypography>
          </Box>
          <Divider
            variant="middle"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          ></Divider>
           <Box sx={{display:"flex", flexDirection:"row"}}>
              <CalendarWithTable/>
           </Box>
         </Box>
      </Box>
    </ShedulePageWrapper>
  );
};
