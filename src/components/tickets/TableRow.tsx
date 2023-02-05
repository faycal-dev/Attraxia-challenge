import { Avatar, Box, Chip, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { format } from "timeago.js";
import { ReactComponent as StaffIcon } from "../../assets/StaffIcon.svg";

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
      <TableCell align="left" sx={{ display: "flex", flexDirection: "column" }}>
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
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.55rem",
            backgroundColor:
              row.status === "OPEN"
                ? "primary.main"
                : row.status === "RESOLVED"
                ? "success.main"
                : "secondary.main",
            px: 1,
            py: 0.5,
            borderRadius: "10px",
            color: "common.white",
          }}
        >
          {row.status}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="caption" sx={{ fontWeight: 300 }}>
          {format(row.createdAt)}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 24, height: 24, mr: 1 }}
            alt={row.replies[0].userName}
            src={row.replies[0].userImg}
          />
          <Typography variant="caption">
            Last By {row.replies[0].userName}
          </Typography>
          <Avatar
            sx={{ width: 24, height: 24, color: "common.black", mx: 1, bgcolor:"grey.200" }}
            variant="rounded"
          >
            <Typography variant="caption">{row.replies.length}</Typography>
          </Avatar>
          {row.replies[0].isStaf && (
            <Chip
              size="small"
              icon={<StaffIcon />}
              label="STAFF"
              sx={{ fontWeight: 700, fontSize: "0.55rem" }}
            />
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default CustomTableRow;
