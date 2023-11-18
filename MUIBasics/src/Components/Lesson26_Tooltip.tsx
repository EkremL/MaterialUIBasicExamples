import { Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Lesson26_Tooltip = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Tooltip title="Sil butonu hakkinda bilgi">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        sx={{ position: "absolute", bottom: 0 }}
        placement="top"
        title="Sil butonu hakkinda bilgi"
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        sx={{ position: "absolute", bottom: 50 }}
        placement="top-end"
        title="Sil butonu hakkinda bilgi"
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Lesson26_Tooltip;
