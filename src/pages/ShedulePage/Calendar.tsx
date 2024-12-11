import React, { useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { StyledTypography } from '../RegistrationPage/style';

function createData(date, time, type, importance, event) {
  return { date, time, type, importance, event };
}

const CalendarWithTable = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ time: "", type: "", importance: "", event: "" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewingEvents, setViewingEvents] = useState(false);

  const handleAddEvent = () => {
    if (newEvent.time && newEvent.type && newEvent.importance && newEvent.event) {
      setEvents([...events, { ...newEvent, date: selectedDate.format("DD.MM.YYYY") }]);
      setNewEvent({ time: "", type: "", importance: "", event: "" }); // Сброс формы
      setDialogOpen(false); // Закрыть диалог
    }
  };

  const filteredEvents = events.filter(event => event.date === selectedDate.format("DD.MM.YYYY"));

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    setDialogOpen(true); // Открыть диалог при выборе даты
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru-RU">
      <Box sx={{ marginBottom: 2 }}>
        <StaticDatePicker
          sx={{
            "& .MuiPickersCalendarHeader-root": {
              color: "gray",
            },
            "& .MuiPickersYear-yearButton": {
              color: "gray",
            },
          }}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Box>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle><StyledTypography>Выберите действие</StyledTypography></DialogTitle>
        <DialogContent sx={{display:"flex", justifyContent:"space-around", width:"480px"}}>
          <Button onClick={() => { setViewingEvents(false); setDialogOpen(false);}} variant="contained" color="primary">Добавить событие</Button>
          <Button onClick={() => { setViewingEvents(true); setDialogOpen(false);}} variant="contained">Посмотреть событие</Button>
        </DialogContent>
      </Dialog>

      {viewingEvents ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>События на {selectedDate.format("DD.MM.YYYY")}</caption>
            <TableHead>
              <TableRow>
                <TableCell>Событие</TableCell>
                <TableCell align="right">№ Аудитории</TableCell>
                <TableCell align="right">Группа</TableCell>
                <TableCell align="right">Время</TableCell>
                <TableCell align="right">Пара</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.event}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.importance}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">Нет событий на выбранную дату</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ marginBottom: 2 , width:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
          <TextField
            label="№ Аудитории"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            sx={{ marginRight: 1 , width:"480px"}}
          />
          <TextField
            label="№ Группы"
            value={newEvent.type}
            onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
            sx={{ marginRight: 1 , width:"480px"}}
          />
          <TextField
            label="Время"
            value={newEvent.importance}
            onChange={(e) => setNewEvent({ ...newEvent, importance: e.target.value })}
            sx={{ marginRight: 1 , width:"480px"}}
          />
          <TextField
            label="Пара"
            value={newEvent.event}
            onChange={(e) => setNewEvent({ ...newEvent, event: e.target.value })}
            sx={{ marginRight: 1 , width:"480px"}}
          />
          <Button variant="contained" sx={{ width:"460px"}} onClick={handleAddEvent}>Добавить событие</Button>
        </Box>
      )}
    </LocalizationProvider>
  );
};

export default CalendarWithTable;