import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
useState;

const Lesson14_Accordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  //callback
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <div>
        {/* <Accordion sx={{backgroundColor:"aqua"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First Section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore
          quaerat voluptatum totam, consequuntur error optio fuga magnam quas,
          dolorem vel? Numquam, repellendus! Eveniet magni culpa ad amet ratione
          maiores.
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second Section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore
          quaerat voluptatum totam, consequuntur error optio fuga magnam quas,
          dolorem vel? Numquam, repellendus! Eveniet magni culpa ad amet ratione
          maiores.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third Section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore
          quaerat voluptatum totam, consequuntur error optio fuga magnam quas,
          dolorem vel? Numquam, repellendus! Eveniet magni culpa ad amet ratione
          maiores.
        </AccordionDetails>
      </Accordion> */}
      </div>
      {/* birine basılınca diğerlerini kapatma örneği */}
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>First Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolore quaerat voluptatum totam, consequuntur error optio fuga
            magnam quas, dolorem vel? Numquam, repellendus! Eveniet magni culpa
            ad amet ratione maiores.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Second Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolore quaerat voluptatum totam, consequuntur error optio fuga
            magnam quas, dolorem vel? Numquam, repellendus! Eveniet magni culpa
            ad amet ratione maiores.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Third Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolore quaerat voluptatum totam, consequuntur error optio fuga
            magnam quas, dolorem vel? Numquam, repellendus! Eveniet magni culpa
            ad amet ratione maiores.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Lesson14_Accordion;
