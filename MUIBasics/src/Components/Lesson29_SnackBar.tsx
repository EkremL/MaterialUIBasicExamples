import React from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Lesson29_SnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose = () => {
    setOpenSnackBar(false);
  }
  //normalde disarda olsa <></> ile yapardik ama degiskene atadigimiz icin elle yaziyoruz
  const action = (
    <React.Fragment>
      <Button
        sx={{
          bgcolor: "bisque",
          "&:hover": {
            color: "orange",
          },
        }}
        color="secondary"
        size="small"
        onClick={handleClose}
      >
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{color:'white'}} onClick={handleClose}/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Snackbari Ac</Button>
      <Snackbar
        open={openSnackBar}
        message="Hata, islem gerceklestirilemedi !"
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        //autohidedurationun calismasi icin onclose da kullanilmalidir
        anchorOrigin={{vertical:"top", horizontal:"center"}}
      />
    </div>
  );
};

export default Lesson29_SnackBar;
