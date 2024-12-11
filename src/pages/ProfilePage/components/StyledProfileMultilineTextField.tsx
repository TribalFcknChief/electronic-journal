import { InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";

interface Props {
  icon?: React.ReactNode;
  placeholder?: string;
}

export const StyledProfileMultilineTextField: FC<Props> = ({
  icon,
  placeholder,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "250px", background: "#F6F6F6" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {icon ? icon : null}
              </InputAdornment>
            ),
          },
        }}
        id="outlined-multiline-flexible"
        multiline
        sx={{
          ".MuiSelect-root": {},
          ".MuiOutlinedInput-notchedOutline": {
            borderRadius: "12px",
            borderColor: "#267AFC",
          },
        }}
        maxRows={4}
        placeholder={placeholder}
      ></TextField>
    </Box>
  );
};
