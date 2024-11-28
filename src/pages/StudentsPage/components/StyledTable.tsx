import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fio', headerName: 'ФИО', width: 300 },
  {
    field: 'groupNumber',
    headerName: 'Номер группы',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (value, row) => `${row.groupNumber || ''}`,
  },
  {
    field: 'course',
    headerName: 'Курс',
    type: 'number',
    width: 70,
  },
  {
    field: 'programTrack',
    headerName: 'Направление подготовки',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    //valueGetter: (value, row) => `${row.groupNumber || ''}`,
  },
];

const rows = [
  { id: 1, groupNumber: 'ПИ-б-о-211', fio: 'Петриков Саймон', course: 4, programTrack:'Программная инженерия' },
  { id: 2, groupNumber: 'ПИ-б-о-211', fio: 'Иагами Лайт', course: 2, programTrack:'Программная инженерия'},
  { id: 3, groupNumber: 'ПИ-б-о-211', fio: 'Яблочкин Рюк', course: 1, programTrack:'Программная инженерия' },
  { id: 4, groupNumber: 'ПИ-б-о-211', fio: 'Недотепкин Синдзик', course: 1, programTrack:'Программная инженерия' },
  { id: 5, groupNumber: 'ПИ-б-о-211', fio: 'Простофилин Дендзи', course: null, programTrack:'Программная инженерия' },
];

const paginationModel = { pcourse: 0, pcourseSize: 5 };

export default function DataTable() {
  return (
    <Box sx={{border:"1px solid gray", borderRadius:"12px", margin:"6px",paddingTop:"6px"}}>
        <Paper sx={{ height: 400, borderRadius:"12px", width: '100%',boxShadow:"none" }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pcourseSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0,
            }}
            
        />
        </Paper>
    </Box>
  );
}
