import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
const Lesson5_Select = () => {
  const [country, setCountry] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  console.log(country);
  return (
    <Box width="250px">
      {/* her secimde degismemesi icin sabit bir width degeri verdik ve daha sonra fullwidth ile sabit kalmasini sagladik */}
      {/* select true vermek icin */}
      <TextField
        select
        label="Ülke Seciniz"
        fullWidth
        value={country}
        onChange={handleChange}
      >
        {/* arkada value kısmında tutulcak önce ise tagların arasindaki yazi  */}
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>     
    </Box>
  );
};

export default Lesson5_Select;
