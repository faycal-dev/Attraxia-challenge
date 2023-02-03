import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomTableRow from "./TableRow";

type costumeTableType = {
  columns: string[];
  data: {
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
  }[];
};
function CustomTable(props: costumeTableType) {
  const { data, columns } = props;
  return (
    <TableContainer sx={{pb:2}} component={Paper}>
      <Table sx={{ minWidth: 650, mx:1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} align="left">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <CustomTableRow row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
