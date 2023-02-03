import { Box, Typography, Avatar, Link } from "@mui/material";
import CustomInput from "../elements/CustomInput";
import { ReactComponent as ChatIcon } from "../../assets/Chat.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

function SupportBody() {
  return (
    <Box
      sx={{
        p: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar sx={{ bgcolor: "grey.900", p: "0.1rem" }}>
        <ChatIcon width={25} />
      </Avatar>
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", my: 1 }}
        color={"common.dark"}
      >
        Support Forums
      </Typography>{" "}
      <Typography variant="body2" color={"grey.600"}>
        Search the topic you need help with in our support forums.{" "}
      </Typography>{" "}
      <Link href="#" underline="none" sx={{ mt: 1, mb: 3 }}>
        Browse Forums <ArrowRight height={10} />
      </Link>
      <CustomInput
        placeholder="Search support forum"
        OnChange={(event) => console.log(event.target.value)}
        leftIcon={<SearchIcon />}
      />
    </Box>
  );
}

export default SupportBody;
