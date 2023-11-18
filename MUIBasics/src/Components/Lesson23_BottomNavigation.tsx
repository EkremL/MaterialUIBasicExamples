import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Lesson23_BottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <BottomNavigation
      showLabels
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      //value ile geçişler yapınca yanma oluyor en baştaki 0. index
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Previous" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Favourites" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Location" />
    </BottomNavigation>
  );
};

export default Lesson23_BottomNavigation;
