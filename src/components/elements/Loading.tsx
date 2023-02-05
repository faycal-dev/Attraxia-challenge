import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "20rem",
        bgcolor: "common.white",
        borderRadius: "4px",
        mt: 3,
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default Loading;
