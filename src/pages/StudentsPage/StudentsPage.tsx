import { Box, Button, Divider } from "@mui/material";
import MenuStyled from "../../components/StyledMenu";
import { StyledHeader } from "../../components/StyledHeader";
import { StyledTypography } from "../RegistrationPage/style";
import { CalendarIcon } from "../ProfilePage/svg/calendarIcon.tsx";
import { StudentsPageWrapper } from "./style.tsx";
import SelectGroup from "./components/StyledGroupList.tsx";
import SelectCurrentGroup from "./components/StyledCurrentGroupList.tsx";
import SelectStudent from "./components/StyledStudentsList.tsx";
import { SearchIcon } from "../ProfilePage/svg/searchIcon.tsx";
import { ResetIcon } from "../ProfilePage/svg/resetIcon.tsx";
import SwitchDeleted from "./components/StyledSwitch.tsx";
import DataTable from "./components/StyledTable.tsx";
import SelectCurrentProgramTrack from "./components/StyledCurrentGroupList.tsx";
import SelectCourse from "./components/StyledStudentsList.tsx";
import SelectProgramTrack from "./components/StyledCurrentGroupList.tsx";
import { PlusCircleIcon } from "../ProfilePage/svg/plusCircleIcon.tsx";

export const StudentsPage = () => {
  return (
    <StudentsPageWrapper>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <CalendarIcon />
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
              Студенты
            </StyledTypography>
          </Box>
          <Divider
            variant="middle"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          ></Divider>
          <Box
            sx={{
              heigh: "300px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SelectGroup />
            <SelectProgramTrack />
            <SelectCourse />
            <Button sx={{width:"150px",height:"40px",background:"#267AFC",borderRadius:"12px"}} variant="contained" startIcon={<SearchIcon />}>
              <StyledTypography sx={{color:"#ffff"}}>Применить</StyledTypography>
            </Button>
            <Button sx={{width:"150px",height:"40px",background:"#7D8797",borderRadius:"12px"}} variant="contained" startIcon={<ResetIcon />}>
              <StyledTypography sx={{color:"#ffff"}}>Сбросить</StyledTypography>
            </Button>
          </Box>
          <SwitchDeleted/>
          <DataTable/>
          <Button sx={{width:"220px",height:"40px",background:"#267AFC",borderRadius:"12px"}} variant="contained">
            <StyledTypography sx={{color:"#ffff"}}>Добавить студента</StyledTypography>
          </Button>
        </Box>
      </Box>
    </StudentsPageWrapper>
  );
};
