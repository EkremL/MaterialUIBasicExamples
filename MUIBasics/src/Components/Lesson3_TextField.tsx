import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const Lesson3_TextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="ad" />
        <TextField label="ad" variant="outlined" />
        <TextField label="ad" variant="filled" />
        <TextField label="ad" variant="standard" />
        <TextField label="ad" variant="outlined" size="small" color="error" />
        <TextField
          label="ad"
          variant="outlined"
          helperText="Lütfen adinizi giriniz"
        />
        <TextField
          type="password"
          label="sifre"
          variant="outlined"
          helperText="Lütfen sifrenizi giriniz"
        />
        <TextField
          disabled
          type="password"
          label="sifre"
          variant="outlined"
          helperText="Lütfen sifrenizi giriniz"
        />
        <TextField
          inputProps={{ readOnly: true }}
          type="password"
          label="sifre"
          variant="outlined"
          helperText="Lütfen sifrenizi giriniz"
        />
        {/* texfielde kalıcı yazı verme */}
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="toplam"
          variant="outlined"
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
          label="toplam"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row">
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="password"
          label="sifre"
          variant="outlined"
          helperText={
            !value //value yoksa / value varsa
              ? "Lütfen sifrenizi giriniz"
              : " Sifrenizi kimseyle paylasmayiniz"
          }
        />
      </Stack>
    </Stack>
  );
};

export default Lesson3_TextField;
