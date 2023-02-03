import { Box } from "@mui/material";
import Header from "../elements/Header";
import Body from "./Body";
import { ReactComponent as SupportButtonIcon } from "../../assets/SupportButtonIcon.svg";

function SupportComponent() {
  return (
    <Box sx={{ backgroundColor: "common.white", borderRadius: "4px" }}>
      <Header
        supportText="Support Resources"
        buttonText="Get Support"
        buttonIcon={<SupportButtonIcon />}
      />
      <Body />
    </Box>
  );
}

export default SupportComponent;
