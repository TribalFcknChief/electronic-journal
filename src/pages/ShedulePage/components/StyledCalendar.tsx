import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box } from "@mui/material";

export const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru-RU">
      <Box
        sx={{
          border: "1px solid #7D8797",
          display: "inline-block", // Убедитесь, что контейнер занимает только нужное место
          padding: "10px", // Добавьте отступы, если необходимо
        }}
      >
        <StaticDatePicker
          sx={{
            "& .MuiPickersCalendarHeader-root": {
              color: "gray",
            },
            "& .MuiPickersYear-yearButton": {
              color: "gray",
            },
            "& .MuiDayCalendarSkeleton-root": {
              width: "320px", // Установите ширину по необходимости
            },
            "& .MuiPickersToolbar-root": {
              visibility: "visible", // Убедитесь, что панель инструментов видима
            },
          }}
          defaultValue={dayjs("2022-04-17")}
        />
      </Box>
    </LocalizationProvider>
  );
};