import { Link, Box } from "@mui/material";

const Lesson18_Link = () => {
  return (
    <Box>
      <Link href="https://www.instagram.com/?hl=tr">Go to Instagram</Link>
      <Link href="https://www.instagram.com/?hl=tr" color="error">
        Go to Instagram
      </Link>
      <Link href="https://www.instagram.com/?hl=tr" color="error" variant="h6">
        Go to Instagram
      </Link>
      <Link href="https://www.instagram.com/?hl=tr" underline="none">
        Go to Instagram
      </Link>
      <Link href="https://www.instagram.com/?hl=tr" underline="hover">
        Go to Instagram
      </Link>
      {/* default */}
      <Link href="https://www.instagram.com/?hl=tr" underline="always">
        Go to Instagram
      </Link>
      <Link href="https://www.instagram.com/?hl=tr" component="a" onClick={(e)=>{
        e.preventDefault();
        console.log("clicked");
      }}>
        Go to Instagram
      </Link>
    </Box>
  );
};

export default Lesson18_Link;
