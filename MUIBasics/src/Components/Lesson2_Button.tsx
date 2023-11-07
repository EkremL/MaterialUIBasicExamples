import { Button, Stack, ButtonGroup } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"; //material icon import for alarm

const Lesson2_Button = () => {
  return (
    //stack div görevi görmektedir ve defaultunda flexi columndur
    //direction row ve spacingle de gap verebiliriz
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text"> Text</Button>
        <Button variant="outlined"> Outlined</Button>
        <Button variant="contained"> Contained</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* colors */}
        <Button variant="text" color="primary">
          Mavi
        </Button>
        <Button variant="text" color="secondary">
          Mor
        </Button>
        <Button variant="text" color="success">
          Yesil
        </Button>
        <Button variant="text" color="error">
          Kirmizi
        </Button>
        <Button variant="text" color="warning">
          Sari
        </Button>
        <Button variant="text" color="info">
          Acik Mavi
        </Button>
        <Button variant="outlined" color="secondary">
          Btntype2
        </Button>
        <Button variant="contained" color="success">
          Btntype
        </Button>
      </Stack>
      {/* size */}
      <Stack direction={"row"} display="block" spacing={2}>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>
      {/* icon */}
      <Stack direction={"row"} spacing={2}>
        <AddAPhotoIcon color="secondary" />
        <Button variant="contained" startIcon={<AddAPhotoIcon />}>
          Add Alarm
        </Button>
        <Button variant="contained" endIcon={<AddAPhotoIcon />}>
          Add Alarm
        </Button>
        <Button
          variant="contained"
          endIcon={<AddAPhotoIcon />}
          onClick={() => alert("merhaba")}
        >
          Add Alarm
        </Button>
      </Stack>
      {/* ButtonGroup */}
      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="contained" color="secondary">
          <Button>My Btn</Button>
          <Button>My Btn</Button>
          <Button>My Btn</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          orientation="vertical"
        >
          <Button>My Btn</Button>
          <Button>My Btn</Button>
          <Button>My Btn</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Lesson2_Button;
