import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Divider } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { AttendanceIcon } from "../pages/ProfilePage/svg/attendanceIcon";
import { WorkersIcon } from "../pages/ProfilePage/svg/workersIcon";
import { GroupsIcon } from "../pages/ProfilePage/svg/groupsIcon";
import { StudentIcon } from "../pages/ProfilePage/svg/studentIcon";
import { GroupAutocompleteInput } from "./GroupAutocomplete";
import { StyledTypography } from "../pages/RegistrationPage/style";

function BasicSimpleTreeView() {
  const IconComponent = ({ label }) => (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem
          sx={{ color: "#267AFC", textAlign: "left", fontFamily: "Inter" }}
          itemId="grid"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              Студенты
              <StudentIcon />
            </Box>
          }
        >
          <Divider variant="middle"></Divider>
          <TreeItem
            sx={{ color: "#7D8797" }}
            itemId="grid-community"
            label="Список"
          />
          <TreeItem
            sx={{ color: "#7D8797" }}
            itemId="grid-pro"
            label="Перевод"
          />
          <TreeItem
            sx={{ color: "#7D8797" }}
            itemId="grid-premium"
            label="Добавление"
          />
        </TreeItem>
        <TreeItem
          sx={{ color: "#267AFC", textAlign: "left", fontFamily: "Inter" }}
          itemId="pickers"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <StyledTypography sx={{fontSize:"1rem"}}>Группы</StyledTypography>
                <GroupsIcon />
                </Box>
                <GroupAutocompleteInput></GroupAutocompleteInput>
              </Box>
            </Box>
          }
        >
        </TreeItem>
        <TreeItem
          sx={{ color: "#267AFC", textAlign: "left", fontFamily: "Inter" }}
          itemId="charts"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              Cотрудники
              <WorkersIcon />
            </Box>
          }
        >
          <Divider variant="middle"></Divider>
        </TreeItem>
        <TreeItem
          sx={{ color: "#267AFC", textAlign: "left", fontFamily: "Inter" }}
          itemId="tree-view"
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              Посещаемость
              <AttendanceIcon />
            </Box>
          }
        >
          <Divider variant="middle"></Divider>
          <TreeItem
            sx={{ color: "#7D8797" }}
            itemId="tree-view-community"
            label="По группам"
          />
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
}

export default BasicSimpleTreeView;
