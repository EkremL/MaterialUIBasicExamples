import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";
import { useState } from "react";

const Lesson28_Dialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(dialogOpen);
  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Click Me</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Which one is your favourite?</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose please</DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>JavaScript</Button>
            <Button onClick={() => setDialogOpen(false)}>Python</Button>
            <Button onClick={() => setDialogOpen(false)}>C</Button>
            <Button onClick={() => setDialogOpen(false)}>C++</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Lesson28_Dialog;
