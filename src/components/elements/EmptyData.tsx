import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

type emptyDataType = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

function EmptyData(props: emptyDataType) {
  const { title, subtitle, icon } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 6,
        backgroundColor: "common.white",
        borderRadius: "4px",
        mt: 3,
      }}
    >
      <Avatar sx={{ bgcolor: "info.main", p: 3, pl: 3.7 }}>{icon}</Avatar>
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", mt: 3, mb: 1 }}
        color={"common.dark"}
      >
        {title}
      </Typography>{" "}
      <Typography variant="body2" color={"grey.600"}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default EmptyData;
