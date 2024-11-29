import { Box, Divider } from "@mui/material";
import { StyledTypography } from "../pages/RegistrationPage/style";
import { SettingsIcon } from "../pages/ProfilePage/svg/settingsIcon";
import { LogoutIcon } from "../pages/ProfilePage/svg/logoutIcon";
import { NotificationIcon } from "../pages/ProfilePage/svg/notificationIcon";
import BackgroundLetterAvatars from "../pages/ProfilePage/components/Avatar";


export const StyledHeader = () => {
  return (
    <Box
      sx={{ display: "flex", background: "#EAF0F4", flexDirection: "column" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "50px",
          }}
        >
          <BackgroundLetterAvatars/>
          <StyledTypography
            sx={{ fontWeight: "600", color: "#343333", fontSize: "14px", marginLeft:"20px" }}
          >
            Имя Фамилия
          </StyledTypography>
        </Box>
        <Box
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "50px",
          }}
        >
          <NotificationIcon/>
          <StyledTypography sx={{ fontSize: "15px" }}>
            Настройки
          </StyledTypography>
          <SettingsIcon/>
          
          <StyledTypography sx={{ fontSize: "15px" }}>Выйти</StyledTypography>
          <LogoutIcon/>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ marginBottom: "10px" }}></Divider>
    </Box>
  );
};
