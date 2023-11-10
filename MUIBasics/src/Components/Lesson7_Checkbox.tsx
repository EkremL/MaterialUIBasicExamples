import {
  Box,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";



const Lesson7_Checkbox = () => {

  const [value, setValue] = useState(false)
  console.log(value);

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Eğitim durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="İlkokul" />
            {/* disabled */}
            <FormControlLabel disabled control={<Checkbox />} label="Lise" />
            {/* default checked */}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Üniversite"
            />
            <FormControlLabel control={<Checkbox />} label="Yüksek Lisans" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel  control={<Checkbox checked={value} onChange={(e)=>setValue(e.target.checked)}/>} label="Kullanim kosullarini kabul ediyorum." />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Lesson7_Checkbox;
