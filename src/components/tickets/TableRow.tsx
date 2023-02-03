import { Avatar, Box, Chip, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { format } from "timeago.js";

type customRowType = {
  row: {
    ticket: {
      title: string;
      subtitle: string;
    };
    status: string;
    createdAt: Date;
    replies: {
      userImg: string;
      userName: string;
      isStaf: boolean;
    }[];
  };
  index: number;
};

function CustomTableRow(props: customRowType) {
  const { row, index } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        component="th"
        scope="row"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="caption" sx={{ color: "primary.main" }}>
          {row.ticket.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "common.black", fontWeight: 300, mt: 1 }}
        >
          {row.ticket.subtitle}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Box
          sx={{
            color: "common.white",
            px: 0,
            py: 0.5,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              row.status === "OPEN"
                ? "primary.main"
                : row.status === "RESOLVED"
                ? "success.main"
                : "secondary.main",
          }}
        >
          <Typography variant="caption" sx={{fontSize:"0.6rem"}}>{row.status}</Typography>
        </Box>
      </TableCell>
      <TableCell align="left">{format(row.createdAt)}</TableCell>
      <TableCell align="left">Last by Staff Name</TableCell>
      {/* <TableCell align="right">{row.protein}</TableCell> */}
    </TableRow>
  );
}

export default CustomTableRow;
