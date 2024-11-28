import { FormControl, FormControlLabel, FormGroup,Switch } from "@mui/material";
import React from "react";
import { StyledTypography } from "../../RegistrationPage/style";

export default function SwitchDeleted() {
    const [state, setState] = React.useState({
        deleted: true,
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
  
    return (
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={state.deleted} onChange={handleChange} name="deleted" />
            }
            label={<StyledTypography>Показывать удаленных</StyledTypography>}
            sx={{marginLeft:"20px"}}
          />
        </FormGroup>
      </FormControl>
    );
  }