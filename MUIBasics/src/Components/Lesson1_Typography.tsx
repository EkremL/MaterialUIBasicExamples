//import Typography from '@mui/material/Typography';
// or
import { Typography } from "@mui/material";

const Lesson1_Typography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reprehenderit laudantium debitis explicabo? Animi sint accusamus quaerat
        dignissimos. Quisquam facere eaque tempore mollitia veritatis aliquid
        deleniti, enim dolores repudiandae! Commodi, voluptas!
      </Typography>
      {/* small */}
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reprehenderit laudantium debitis explicabo? Animi sint accusamus quaerat
        dignissimos. Quisquam facere eaque tempore mollitia veritatis aliquid
        deleniti, enim dolores repudiandae! Commodi, voluptas!
      </Typography>
      <Typography variant="h1"> H1 variant </Typography>
      <Typography variant="h2"> H2 variant </Typography>
      <Typography variant="h3"> H3 variant </Typography>
      <Typography variant="h4"> H4 variant </Typography>
      <Typography variant="h5"> H5 variant </Typography>
      <Typography variant="h6"> H6 variant </Typography>
      <Typography variant="h1" component="h4">
        H1 css geçerli ama html'de h4 e çevir.
      </Typography>
      <Typography variant="h1" component="h6" align="left">
        Align left
      </Typography>
      <Typography variant="h1" component="h6" align="right">
        Align right
      </Typography>
      <Typography variant="subtitle1"> SubTitle1 </Typography>
      <Typography variant="subtitle2"> SubTitle2 </Typography>
    </div>
  );
};

export default Lesson1_Typography;
