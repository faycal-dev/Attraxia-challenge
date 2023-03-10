import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

type HeaderType = {
  supportText: string;
  headerType?: "button" | "filters" | "none";
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  SelectItems?: { value: string; badgeNumber: number; badgeColor: string }[];
  handleButtonClick?: () => void;
  SelectChangeHandler?: (event: SelectChangeEvent) => void;
  SearchInputChangeHandler?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Header(props: HeaderType) {
  const {
    supportText,
    buttonText,
    headerType = "button",
    buttonIcon,
    SelectItems = [{ value: "empty", badgeNumber: 0, badgeColor: "grey.200" }],
    handleButtonClick,
    SelectChangeHandler,
    SearchInputChangeHandler,
  } = props;
  return (
    <Box
      sx={{
        p: "1.5rem",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #EDEDED",
        backgroundColor: "common.white",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold" }}
        color={"common.dark"}
      >
        {supportText}
      </Typography>
      {headerType === "button" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color={"grey.600"}>
            Need Help?
          </Typography>
          {buttonText && (
            <Button
              variant="contained"
              startIcon={buttonIcon ? buttonIcon : null}
              sx={{ marginLeft: "1rem" }}
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      )}
      {headerType === "filters" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <CustomSelect OnChange={SelectChangeHandler} items={SelectItems} />
          <CustomInput
            placeholder="Search Tickets"
            OnChange={SearchInputChangeHandler}
            leftIcon={<SearchIcon />}
            small={true}
          />
        </Box>
      )}
    </Box>
  );
}

export default Header;
