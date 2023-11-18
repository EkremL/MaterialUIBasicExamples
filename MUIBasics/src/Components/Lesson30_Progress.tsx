import { CircularProgress,Stack,LinearProgress } from "@mui/material"

const Lesson30_Progress = () => {
  return (
    <Stack spacing={2}>
         <CircularProgress/>
         <CircularProgress color="error"/>
         <CircularProgress color="warning"/>
         <CircularProgress variant="determinate" value={50} color="warning"/>
         <LinearProgress/>
         <LinearProgress color="success"/>
         <LinearProgress variant="determinate" value={60} color="secondary"/>
    </Stack>

  )
}

export default Lesson30_Progress
