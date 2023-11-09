import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const Lesson6_MultipleSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  return (
    <Box width="250px">
      {/* MULTI SELECTION  (selectprops) ve array tanimlanmalidir*/}
      <TextField
        SelectProps={{
          multiple: true,
        }}
        select
        label="Ülke Seciniz"
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            typeof e.target.value === "string"
              ? e.target.value.split(" , ")
              : e.target.value
          )
        }
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>
    </Box>
  );
};

export default Lesson6_MultipleSelect;
