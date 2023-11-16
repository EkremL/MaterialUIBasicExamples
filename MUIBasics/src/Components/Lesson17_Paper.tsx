import { Paper, Box } from "@mui/material";

const Lesson17_Paper = () => {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <Paper sx={{ width: "100px", height: "100px" }} />
      {/* elevation gölgelendirme icin kullanilir 0 dersek itemin golgesi gozukmez default hali 1 dir */}
      <Paper sx={{ width: "100px", height: "100px" }} elevation={0} />
      <Paper sx={{ width: "100px", height: "100px" }} elevation={1} />
      <Paper sx={{ width: "100px", height: "100px" }} elevation={2} />
      <Paper sx={{ width: "100px", height: "100px" }} elevation={3} />
      <Paper sx={{ width: "100px", height: "100px" }} variant="outlined" />
      {/* variant ile border verilir, square ile border radiusu 0 lar */}
      <Paper
        sx={{ width: "100px", height: "100px" }}
        variant="outlined"
        square
      />
      <Paper sx={{ width: "100px", height: "100px" }} variant="elevation" />
      <Paper
        sx={{ width: "100px", height: "100px" }}
        elevation={3}
        variant="elevation"
      />
    </Box>
  );
};

export default Lesson17_Paper;
