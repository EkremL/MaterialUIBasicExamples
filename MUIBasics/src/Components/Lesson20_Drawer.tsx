import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Lesson20_Drawer = () => {
    const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <IconButton size="large" onClick={()=> setIsClicked(true)}>
        <MenuIcon />
      </IconButton>
      {/* default olarak left yani soldan acılır
      left-right-top-bottom degerleri anchora verilebilir */}
      <Drawer anchor="top" open={isClicked} onClose={()=> setIsClicked(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Left Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Lesson20_Drawer;
