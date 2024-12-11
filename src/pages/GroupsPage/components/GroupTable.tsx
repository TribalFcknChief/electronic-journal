import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  group: string,
  direction:string,
  course: number,
  tutor: string,
  institute: string,
  shedule: string,
) {
  return {  group, direction, course, tutor, institute, shedule };
}

const rows = [
  createData('Пи-б-о-211', 'Программная инженерия', 1, 'Петров Кирилл Александрович', 'Физико-технический институт','https://vk.com/shedule'),
  createData('Пи-б-о-211', 'Программная инженерия', 1, 'Петров Кирилл Александрович', 'Физико-технический институт','https://vk.com/shedule'),
  createData('Пи-б-о-211', 'Программная инженерия', 1, 'Петров Кирилл Александрович', 'Физико-технический институт','https://vk.com/shedule'),
  createData('Пи-б-о-211', 'Программная инженерия', 1, 'Петров Кирилл Александрович', 'Физико-технический институт','https://vk.com/shedule'),
  createData('Пи-б-о-211', 'Программная инженерия', 1, 'Петров Кирилл Александрович', 'Физико-технический институт','https://vk.com/shedule'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">№ Группы</TableCell>
            <TableCell align="center">Направление</TableCell>
            <TableCell align="center">Курс</TableCell>
            <TableCell align="center">Куратор</TableCell>
            <TableCell align="center">Подразделение</TableCell>
            <TableCell align="center">Расписание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.group}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.group}
              </TableCell>
              <TableCell align="right">{row.direction}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.tutor}</TableCell>
              <TableCell align="right">{row.institute}</TableCell>
              <TableCell align="right">{row.shedule}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
