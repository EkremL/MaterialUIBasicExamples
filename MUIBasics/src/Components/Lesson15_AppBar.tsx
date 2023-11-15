import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import React, { useState } from "react";

const Lesson15_AppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //anchor element var mi yok mu onu kontrol ediyoruz casting yapıyoruz varsa true döncek
  const openControl = Boolean(anchorEl);
  console.log(openControl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = ()=>{
    setAnchorEl(null);
  }

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        {/* //!itemleri saga yaslamak icin margin right auto verdik, stacka margin left auto versek de olurdu */}
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Example
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }}>Ürünler</Button>
          <Button sx={{ color: "white" }}>Fiyatlar</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            İndirimdekiler
          </Button>
        </Stack>
        {/* //indirimler butonunun altında acılmasını istiyoruz bunun icin anchorEl kullaniriz acilis icin open*/}
        {/* kapanis icin ise onclose kullaniriz */}
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Parfümler</MenuItem>
          <MenuItem onClick={handleClose}>Saatler</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Lesson15_AppBar;
