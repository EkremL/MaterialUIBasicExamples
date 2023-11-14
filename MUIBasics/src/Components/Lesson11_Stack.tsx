import { Stack, Divider } from "@mui/material";

const Lesson11_Stack = () => {
  return (
    //boxtan farki display ozelligi olmasidir ve default olarak column dur.
    <Stack
      //mobilde ve pcde farkli gorunum
      direction={{ xs: "column", md: "row" }} //small ve medium cihazlar xs mobil gibi
      spacing={{ xs: 1, sm: 2, md: 6 }}
      justifyContent="center"
      alignItems="center"
      //divider eklemek için dividerin icine orientation ve flexitem vermeliyiz
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
};

export default Lesson11_Stack;
