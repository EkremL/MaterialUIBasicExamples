import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const Lesson4_RadioGroup = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); //bu uzun yöntemidir, kısa yöntem olarak onchange içinde tek satırda da halledilebilirdi
  };

  return (
    <FormControl>
      <FormLabel>Salary Expectation</FormLabel>
      <RadioGroup
        row
        name="expected-salary"
        value={value}
        onChange={handleChange}
      >
        {/* label gösterilen kisim,  value => secildiginde tuttu değer*/}
        <FormControlLabel
          label="2000$"
          value="2000"
          //   color="success"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          label="3000$"
          value="3000"
          control={<Radio color="success" />}
        />
        <FormControlLabel
          label="4000$"
          value="4000"
          control={<Radio color="warning" />}
        />
      </RadioGroup>
      <FormHelperText>Secim yapiniz</FormHelperText>
    </FormControl>
  );
};

export default Lesson4_RadioGroup;
