import {
  Box,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const Lesson8_MultipleCheckbox = () => {
  const [knowledge, setKnowledge] = useState<string[]>([]);
  console.log(knowledge);

  const handleKnowledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowledge.indexOf(e.target.value);
    //eğer eleman yoksa yani -1 ise ekleme işlemi yapcaz
    if (index === -1) {
      //içerisindeki tüm elemanmları döndürmek icin spread, ikinci kısım yeni eleman ve arraya eklenmiş olcak
      setKnowledge([...knowledge, e.target.value]);
    }
    //silme işlemi
    else {
      setKnowledge(knowledge.filter((item) => item !== e.target.value));
    }
  };

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Eğitim durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="React Js"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Vue Js"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default Lesson8_MultipleCheckbox;
