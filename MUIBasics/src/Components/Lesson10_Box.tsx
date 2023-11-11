import { Box } from "@mui/material";

const Lesson10_Box = () => {
  return (
    //bu renk kodu palette kısmından alınmistir orda farkli kodlar da vardir
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100px",
        height: "100px",
        color: "white",
        padding:"20px",
        //hover kullanim ornegi
        '&:hover':{
          backgroundColor: "blueviolet",
          color: "orange",
        },
        textAlign: "center",
        margin:"100px",
      }}
    >
      MyBox
    </Box>
  );
};

export default Lesson10_Box;
