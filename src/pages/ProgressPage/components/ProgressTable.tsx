import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'ФИО', width: 340 },
  { field: 'status', headerName: 'Статус', width: 240 },
  { field: 'average', headerName: 'Средний балл', width: 220 },
  {
    field: 'debts',
    headerName: 'Задолженности',
    type: 'number',
    width: 220,
  },
];

const rows = [
  { id: 1, status: 'Snow', fullName: 'Jon', debts: 35 },
  { id: 2, status: 'Lannister', fullName: 'Cersei', debts: 42 },
  { id: 3, status: 'Lannister', fullName: 'Jaime', debts: 45 },
  { id: 4, status: 'Stark', fullName: 'Arya', debts: 16 },
  { id: 5, status: 'Targaryen', fullName: 'Daenerys', debts: null },
  { id: 6, status: 'Melisandre', fullName: null, debts: 150 },
  { id: 7, status: 'Clifford', fullName: 'Ferrara', debts: 44 },
  { id: 8, status: 'Frances', fullName: 'Rossini', debts: 36 },
  { id: 9, status: 'Roxie', fullName: 'Harvey', debts: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
