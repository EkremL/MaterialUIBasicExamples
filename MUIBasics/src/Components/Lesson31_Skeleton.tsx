import { Skeleton, Box } from "@mui/material";
import { useState } from "react";

const Lesson31_Skeleton = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={150} animation="wave" />
      ) : (
        //false kısmı data çekme islemi bittiginde
        <img
          src="https://source.unsplash.com/random/256*144"
          alt="skeleton"
          width={250}
          height={150}
        />
      )}
    </Box>
  );
};

export default Lesson31_Skeleton;
