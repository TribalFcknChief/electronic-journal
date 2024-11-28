import { Box, Divider, Typography } from "@mui/material";
import MenuStyled from "../../components/StyledMenu";
import { DataBox, HeadBox, ProfilePageWrapper, StyledTextField } from "./style";
import { StyledHeader } from "../../components/StyledHeader";
import { StyledTypography } from "../RegistrationPage/style";
import SelectTextFields from "./components/StyledTextFieldList";
import { StyledProfileTextField } from "./components/StyledProfileTextField";
import { LockOpenIcon } from "./svg/lockOpenIcon";
import { MailIcon } from "./svg/mailIcon";
import { PhoneIcon } from "./svg/phoneIcon";
import { StyledProfileMultilineTextField } from "./components/StyledProfileMultilineTextField";
import { PlusCircleIcon } from "./svg/plusCircleIcon";
import { CalendarIcon } from "./svg/calendarIcon";
import { UserIcon } from "./svg/userIcon";
import { PersonalDataIcon, WorkersIcon } from "./svg/workersIcon";
import { WorksDataIcon } from "./svg/worksDataIcon";

export const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
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
              Профиль пользователя
            </StyledTypography>
          </Box>
          <Divider
            variant="middle"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          ></Divider>
          <Box
            sx={{
              height: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <DataBox
              sx={{
                width: "340px",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "70px",
              }}
            >
              <HeadBox>
                <UserIcon/>
                <StyledTypography sx={{color:"#ffff", marginLeft:"10px", fontSize:"15px"}}>Аккаунт</StyledTypography>
              </HeadBox>
              <Box
                sx={{
                  width: "78.5px",
                  height: "78.5px",
                  borderRadius: "100%",
                  border: "1px solid blue",
                  mt: "10px",
                }}
              ></Box>
              <Box>
                <StyledTypography>Телефон *</StyledTypography>
                <StyledProfileTextField
                  icon={<PhoneIcon />}
                  placeholder="+7(000) 000 00 00"
                />
                <StyledTypography>Электронная почта</StyledTypography>
                <StyledProfileTextField
                  icon={<MailIcon />}
                  placeholder="ivanov@gmail.com"
                />
                <StyledTypography>Пароль *</StyledTypography>
                <StyledProfileTextField
                  placeholder="********"
                  icon={<LockOpenIcon />}
                />
                <StyledTypography>Трудовой стаж *</StyledTypography>
                <StyledProfileMultilineTextField
                  icon={<PlusCircleIcon />}
                  placeholder="Заведующий кафедрой ядерной физики, 10 лет"
                />
              </Box>
            </DataBox>
            <Box
              sx={{
                width: "584px",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                marginRight: "70px",
              }}
            >
              <DataBox sx={{ width: "100%", height: "48%" }}>
                <HeadBox>
                  <PersonalDataIcon/>
                  <StyledTypography sx={{color:"#ffff", marginLeft:"10px", fontSize:"15px"}}>Персональные данные</StyledTypography>
                </HeadBox>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <StyledTypography>Фамилия *</StyledTypography>
                    <StyledProfileTextField placeholder="Иванов" />
                    <StyledTypography>Имя *</StyledTypography>
                    <StyledProfileTextField placeholder="Иван" />
                    <StyledTypography>Отчество *</StyledTypography>
                    <StyledProfileTextField placeholder="Иванович" />
                  </Box>
                  <Box>
                    <StyledTypography>Дата рождения *</StyledTypography>
                    <StyledProfileTextField placeholder="дд.мм.гггг" />
                    <StyledTypography>Пол *</StyledTypography>
                    <SelectTextFields />
                  </Box>
                </Box>
              </DataBox>
              <DataBox sx={{ width: "100%", height: "48%" }}>
                <HeadBox>
                  <WorksDataIcon/>
                  <StyledTypography sx={{color:"#ffff", marginLeft:"10px", fontSize:"15px"}}>Данные о работе</StyledTypography>
                </HeadBox>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingTop: "5%",
                  }}
                >
                  <Box>
                    <StyledTypography>Должности *</StyledTypography>
                    <StyledProfileMultilineTextField />
                  </Box>
                  <Box>
                    <StyledTypography>Группы</StyledTypography>
                    <StyledProfileMultilineTextField />
                  </Box>
                </Box>
              </DataBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </ProfilePageWrapper>
  );
};
