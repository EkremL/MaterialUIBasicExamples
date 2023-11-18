import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Lesson36_Masonry = () => {
  return (
    <Masonry columns={3} spacing={5}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion sx={{minHeight:height}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                Accordion{index+1}
            </AccordionSummary>
            <AccordionDetails>
                My Content
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};

export default Lesson36_Masonry;
