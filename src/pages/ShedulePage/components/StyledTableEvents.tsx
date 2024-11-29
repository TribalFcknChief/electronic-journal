import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  date: string,
  time: string,
  type: string,
  importance: string,
  event: string,
) {
  return { date, time, type, importance, event };
}

const rows = [
  createData("12.10.2024", "12:00", "","3", "День кафедры"),
  createData("12.10.2024", "12:00", "","3", "День кафедры"),
  createData("12.10.2024", "12:00", "","3", "День кафедры"),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>№ Аудитории</TableCell>
            <TableCell align="right">Группа</TableCell>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">Пара</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.event}>
              <TableCell component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.importance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}