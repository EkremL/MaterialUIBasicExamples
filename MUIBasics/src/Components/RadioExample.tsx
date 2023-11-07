import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  Button,
} from "@mui/material";
import { useState } from "react";

const RadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "js") {
      setHelperText("Doğru cevap");
      setError(false);
    } else if (value === "py") {
      setHelperText("Yanlis cevap");
      setError(false);
    } else {
      setHelperText("Lütfen seçim yapiniz");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        {/* sadece error yazsaydik da kirmizi alicaktik ama biz istedigimiz rengi vermek icin bir state daha tanimladik */}
      <FormControl error={error}> 
        <FormLabel color="secondary">En yazilim dili hangisi?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel value="js" label="JavaScript" control={<Radio />} />
          <FormControlLabel value="py" label="Python" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="secondary">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};

export default RadioExample;
