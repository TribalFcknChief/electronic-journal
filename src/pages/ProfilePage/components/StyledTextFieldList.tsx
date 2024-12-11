import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'woman',
    label: 'женский',
  },
  {
    value: 'man',
    label: 'мужской',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { width: '250px'} }}
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