import { Grid, Box } from "@mui/material";

const Lesson12_Grid = () => {
  return (
    <Box>
      {/* row gibi algılanmasi icin container verdik
    12 birim düsün */}
      <Grid container>
        {/* hem masaüstünde hom mobilde geçerli : xs */}
        <Grid sx={{ border: "1px solid blue" }} xs={8}>
          8 birimlik yer
        </Grid>
        <Grid sx={{ border: "1px solid red" }} xs={4}>
          4 birimlik yer
        </Grid>
        <Grid sx={{ border: "1px solid blue" }} xs={8}>
          8 birimlik yer
        </Grid>
        <Grid sx={{ border: "1px solid red" }} xs={4}>
          4 birimlik yer
        </Grid>
      </Grid>
      <Grid container>
        <Grid sx={{ border: "1px solid blue" }} xs={12} md={8}>
          8 birimlik yer
        </Grid>
        <Grid sx={{ border: "1px solid red" }} xs={12} md={4}>
          4 birimlik yer
        </Grid>
      </Grid>
    </Box>
  );
};
  
export default Lesson12_Grid;
