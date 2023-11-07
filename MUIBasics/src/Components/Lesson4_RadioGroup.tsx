import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

const Lesson4_RadioGroup = () => {
  return (
    <FormControl>
      <FormLabel>Salary Expectation</FormLabel>
      <RadioGroup row>
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
    </FormControl>
  );
};

export default Lesson4_RadioGroup;
