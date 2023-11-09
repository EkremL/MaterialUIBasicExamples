import {
  Box,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";

const Lesson7_Checkbox = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Eğitim durumu</FormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="İlkokul" />
          {/* disabled */}
          <FormControlLabel disabled control={<Checkbox />} label="Lise" />
          {/* default checked */}
          <FormControlLabel control={<Checkbox defaultChecked />} label="Üniversite" />
          <FormControlLabel control={<Checkbox />} label="Yüksek Lisans" />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Lesson7_Checkbox;
