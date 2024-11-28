import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FormContainer,
  RegistrationButton,
  RegistrationPageWrapper,
  StyledTypography,
} from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const RegistrationPage = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const nav = useNavigate(); //Позволяет переходить между страницами useNavigate

  //если пользователь существует, то перход на главную страницу
  useEffect(() => {
    console.log(step);
    if (localStorage.getItem("user")) {
      nav("/Profile");
    }
  });

  interface User {
    id: number;
    name: string;
    email: string;
  }

  function handleVerificationEmail(email: string): Promise<User | null> {
    return new Promise((resolve) => {
      // Проверка формата email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error("Неверный формат email");
        resolve(null);
        return;
      }

      // Отправка запроса на сервер
      axios
        .post("/api/verify-email", { email })
        .then((response) => {
          if (response.data.success) {
            // Сохранение данных пользователя в localStorage
            localStorage.setItem("user", JSON.stringify(response.data.user));
            resolve(response.data.user);
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          console.error("Ошибка при верификации email:", error);
          resolve(null);
        });
    });
  }

  const handleStepForward = () => {
    setStep(step + 1);
  };

  const handleStepBack = () => {
    setStep(step - 1);
  };
  //обработка почты
  const handleChangeEmailText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.value.toLowerCase();
    val = val.replace(/[^\w\s@.-]/g, ""); // Разрешаем только буквы, цифры, символы @.,-
    if (val.includes("@") && val.split("@").length === 2) {
      setEmail(val);
    }
    let parts = val.split("@");
    if (parts.length > 1) {
      let localPart = parts[0];
      let domain = parts[1];

      let formattedLocalPart = localPart.replace(/\./g, "\u200B"); // Заменяет точки на нон-брейкинг спейсы
      let formattedDomain = domain.replace(/\./g, " "); // Заменяет точки на пробелы

      let formattedEmail = `${formattedLocalPart}@${formattedDomain}`;
      e.currentTarget.value = formattedEmail;
    }
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.currentTarget.value);
  };

  const handleVerificationPin = () => {
    if (password.length >= 8) {
      setInvalidEmail(false);
      setStep(step + 1);
    } else {
      setInvalidPassword(true);
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  /*
    const handleSaveClick = () => {
        postNewUser(email, name, lastname);
        nav(`/`);//в клиенты
    }*/

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await handleVerificationEmail(email);
      if (user) {
        setIsVerified(true);
        // Здесь можно выполнить переход на другую страницу или другие действия
      }
    } catch (error) {
      console.error("Произошла ошибка:", error);
      // Обработка ошибки для пользователя
    }
  };

  // В JSX
  <form onSubmit={handleSubmit}>
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button type="submit">Отправить</button>
  </form>;

  {
    isVerified ? (
      <p>Email успешно подтвержден!</p>
    ) : (
      <p>Пожалуйста, введите ваш email</p>
    );
  }
  switch (step) {
    case 0:
      return (
        <RegistrationPageWrapper>
          <FormContainer sx={{border:"1px solid gray", borderRadius:"12px",paddingTop:"50px",paddingBottom:"50px",}}>
          <StyledTypography sx={{fontSize:"20px", fontWeight:"Bold"}}>
              Вход в личный кабинет
            </StyledTypography>
            <TextField
              id="outlined-size-normal"
              error={invalidEmail}
              placeholder={"Введите свой email"}
              onChange={handleChangeEmailText}
              sx={{ width: "90%",background:"#ffff", borderRadius:"5px" }}
            />
            <FormControl sx={{ width: "90%" }} variant="outlined">
              <InputLabel  sx={{color:"#8e8e8e"}}htmlFor="outlined-adornment-password">
                Введите пароль
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{background:"#ffff", borderRadius:"5px"}}
              />
            </FormControl>
            <RegistrationButton variant="contained">
              Подтвердить
            </RegistrationButton>
          </FormContainer>
        </RegistrationPageWrapper>
      );
    case 1:
      return <RegistrationPageWrapper></RegistrationPageWrapper>;
  }
};
