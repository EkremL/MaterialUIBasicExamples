import { Avatar, Stack, AvatarGroup } from "@mui/material";

const Lesson24_Avatar = () => {
  return (
    <Stack direction="row" spacing={4}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: "50px" }}
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
      </AvatarGroup>
      <AvatarGroup max={4}>
        <Avatar
          sx={{
            marginRight: "50px",
            bgcolor: "seagreen",
            height: 50,
            width: 50,
          }}
        >
          Ekrem
        </Avatar>
        <Avatar
          sx={{
            marginRight: "50px",
            bgcolor: "primary.light",
            height: 50,
            width: 50,
          }}
          variant="square"
        >
          Saga
        </Avatar>
        <Avatar
          sx={{
            marginRight: "50px",
            bgcolor: "error.light",
            height: 50,
            width: 50,
          }}
          variant="rounded"
        >
          Hasan
        </Avatar>
        <Avatar
          sx={{
            marginRight: "50px",
            bgcolor: "warning.light",
            height: 50,
            width: 50,
          }}
          variant="rounded"
        >
          Can
        </Avatar>
        <Avatar
          sx={{
            marginRight: "50px",
            bgcolor: "success.light",
            height: 50,
            width: 50,
          }}
          variant="rounded"
        >
          Hüseyin
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};

export default Lesson24_Avatar;
