import { InputAdornment} from "@mui/material";
import { FC } from "react";
import { StyledTextField } from "../style";

interface Props {
  icon?: React.ReactNode;
  placeholder?: string;
}

export const StyledProfileTextField: FC<Props> = ({ icon, placeholder }) => {
  return (
    <StyledTextField
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {icon ? icon : null}
            </InputAdornment>
          ),
        },
      }}
      placeholder={placeholder}
    ></StyledTextField>
  );
};

/*<TextField
        placeholder={placeholder}
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
        ></TextField>*/
