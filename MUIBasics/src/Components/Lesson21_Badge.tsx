import { Badge, Button, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const Lesson21_Badge = () => {
  const [value, setValue] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(value + 1);
  };

  return (
    <Stack direction="row" spacing={5}>
      <Badge badgeContent={50} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={50} max={9} color="secondary">
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color="secondary"
      >
        <MailIcon />
      </Badge>
      <Button onClick={handleClick}>
        <Badge
          badgeContent={value}
          max={9}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          color="secondary"
        >
          <MailIcon />
        </Badge>
      </Button>
    </Stack>
  );
};

export default Lesson21_Badge;
