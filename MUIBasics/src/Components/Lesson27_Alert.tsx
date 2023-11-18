import { Alert, Stack, AlertTitle } from "@mui/material";

const Lesson27_Alert = () => {
  return (
    <Stack spacing={5}>
      <Alert>
        <AlertTitle>SUCCESS :)</AlertTitle> My Alert
      </Alert>
      <Alert severity="error">My Alert</Alert>
      <Alert severity="warning">My Alert</Alert>
      <Alert severity="info">My Alert</Alert>
    </Stack>
  );
};

export default Lesson27_Alert;
