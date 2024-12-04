import { Box, Button, Divider, Typography } from "@mui/material";
import MenuStyled from "../../components/StyledMenu";
import { DataBox, HeadBox, ProfilePageWrapper } from "../ProfilePage/style";
import { StyledHeader } from "../../components/StyledHeader";
import { CalendarIcon } from "@mui/x-date-pickers/icons";
import { StyledTypography } from "../RegistrationPage/style";
import { UserIcon } from "../ProfilePage/svg/userIcon";
import { StyledProfileTextField } from "../ProfilePage/components/StyledProfileTextField";
import { PhoneIcon } from "../ProfilePage/svg/phoneIcon";
import { MailIcon } from "../ProfilePage/svg/mailIcon";
import { LockOpenIcon } from "../ProfilePage/svg/lockOpenIcon";
import { PlusCircleIcon } from "../ProfilePage/svg/plusCircleIcon";
import { StyledProfileMultilineTextField } from "../ProfilePage/components/StyledProfileMultilineTextField";
import { PersonalDataIcon } from "../ProfilePage/svg/workersIcon";
import SelectTextFields from "../ProfilePage/components/StyledTextFieldList";
import { WorksDataIcon } from "../ProfilePage/svg/worksDataIcon";
import { Padding } from "@mui/icons-material";
import { CustomAvatar } from "../ProfilePage/components/Avatar";

export const StudentProfilePage = () => {
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
              justifyContent: "space-between",
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
                <Box ml={2}>
                  <UserIcon />
                </Box>
                <StyledTypography
                  sx={{ color: "#ffff", marginLeft: "10px", fontSize: "15px" }}
                >
                  Аккаунт
                </StyledTypography>
              </HeadBox>
              <Box sx={{mt:"20px"}}>
                <CustomAvatar name="Иванов Иван" size={78} />
              </Box>
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
                <StyledTypography>ЭЭЭээээ *</StyledTypography>
              </Box>
            </DataBox>
            <Box
              sx={{
                width: "620px",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                marginRight: "70px",
              }}
            >
              <DataBox
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <HeadBox>
                  <Box ml={2}>
                    <PersonalDataIcon />
                  </Box>
                  <StyledTypography
                    sx={{
                      color: "#ffff",
                      marginLeft: "10px",
                      fontSize: "15px",
                    }}
                  >
                    Персональные данные
                  </StyledTypography>
                </HeadBox>
                <Box
                  sx={{
                    width: "100%",
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
                //стилизовать
                <Box
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #c9c5c7",
                    width: "90%",
                    height: "30%",
                  }}
                >
                  <StyledTypography sx={{color:"#c9c5c7", fontSize:"18px"}}>Группа:</StyledTypography>
                  <StyledTypography sx={{color:"#c9c5c7", fontSize:"18px"}}>Куратор:</StyledTypography>
                  <StyledTypography sx={{color:"#c9c5c7", fontSize:"18px"}}>Направление:</StyledTypography>
                </Box>
                <Box sx={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"80px"}}>
                  <Button
                    sx={{
                      width: "300px",
                      height: "40px",
                      background: "#267AFC",
                      borderRadius: "12px",
                    }}
                    variant="contained"
                  >
                    <StyledTypography sx={{ color: "white" }}>
                      Перейти к списку курсов
                    </StyledTypography>
                  </Button>
                  <Button
                    sx={{
                      width: "220px",
                      height: "40px",
                      background: "#267AFC",
                      borderRadius: "12px",
                    }}
                    variant="contained"
                  >
                    <StyledTypography sx={{ color: "white" }}>
                      Просмотр расписания
                    </StyledTypography>
                  </Button>
                </Box>
              </DataBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </ProfilePageWrapper>
  );
};
