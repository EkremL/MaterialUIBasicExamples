import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Lesson13_Card = () => {
  return (
    <Card sx={{width:"350px"}}>
      <CardMedia height="150" component="img" 
      image="https://source.unsplash.com/random"/>
      <CardContent>
        <Typography variant="h5" component="div">
            {/* sayfa özelliklerinde div icinde gorulcek */}
          My Title
        </Typography>
        {/* body2 p görünümü saglar */}
        <Typography variant="body2" component="p">
            {/* sayfa özelliklerinde div icinde gorulcek */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit odit in assumenda fuga dolores perferendis saepe dolor. Quas, accusamus voluptates incidunt quia animi corporis laudantium praesentium ipsum sed enim?
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Delete</Button>
        <Button color="secondary">Save</Button>
      </CardActions>
    </Card>
  );
};

export default Lesson13_Card;
