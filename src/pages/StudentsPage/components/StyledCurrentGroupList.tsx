import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: '1',
    label: 'Программная инженерия',
  },
  {
    value: '2',
    label: 'Иинформатика и вычислительная техника',
  },
];

export default function SelectProgramTrack() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '180px'} }}
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