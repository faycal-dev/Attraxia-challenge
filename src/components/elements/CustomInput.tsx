import React from "react";
import { Box, TextField } from "@mui/material";

type inputTypes = {
  placeholder: string;
  OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  small?: boolean;
};

function CustomInput(props: inputTypes) {
  const { placeholder, OnChange, leftIcon, small, ...restProps } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        backgroundColor: "grey.200",
        pl: 2,
      }}
    >
      {leftIcon}
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "none",
            },
          },
          width: small ? "10rem" : { xs: "8rem", sm: "10rem", md: "18rem" },
        }}
        color="primary"
        size="small"
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        onChange={OnChange}
        {...restProps}
      />
    </Box>
  );
}

export default CustomInput;
