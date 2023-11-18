import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const Lesson32_LoadingButton = () => {
  //ikinci kez butonabasilmasini engellemek icin kullanilir
  //terminalde npm install @mui/lab yapilmalidir
  //importu mui labdan yapilir
  const [value, setValue] = useState(false);
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton loading variant="outlined">
        Kaydet
      </LoadingButton>
      <LoadingButton loading={false} variant="outlined">
        Kaydet
      </LoadingButton>
      <LoadingButton
        onClick={() => setValue(true)}
        loading={value}
        variant="outlined"
      >
        Kaydet
      </LoadingButton>
    </Stack>
  );
};

export default Lesson32_LoadingButton;
