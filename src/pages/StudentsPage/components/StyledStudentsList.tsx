import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: '1',
    label: '1 курс',
  },
  {
    value: '2',
    label: '1 курс',
  },
  {
    value: '3',
    label: '3 курс',
  },
  {
    value: '4',
    label: '4 курс',
  },
];

export default function SelectCourse() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '240px'} }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          sx={{
            height: '44px',
            '.MuiSelect-root': {
              height: '12px',
              
            },
            '.MuiOutlinedInput-notchedOutline': {
              height: '44px',
              borderRadius: '12px',
              borderColor:'#267AFC',
              
            },
          }}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
);}