import { Box } from "@mui/material";
import React from "react";
import EmptyData from "../elements/EmptyData";
import Header from "../elements/Header";
import { ReactComponent as CalendarIcon } from "../../assets/Calendar.svg";
import CustomTable from "./Table";
import { TABLEDATA } from "../../data/TableData";

let COLUMNS = ["TICKET", "STATUS", "CRATED ON", "REPLIES"];

function Tickets() {
  return (
    <Box sx={{ backgroundColor: "common.white", borderRadius: "4px", mt: 3 }}>
      <Header
        headerType="filters"
        supportText="My Tickets"
        SelectChangeHandler={(e) => {
          console.log(e.target.value);
        }}
        SearchInputChangeHandler={(e) => {
          console.log(e.target.value);
        }}
      />
      <CustomTable columns={COLUMNS} data={TABLEDATA} />
      {/* <EmptyData
        icon={<CalendarIcon />}
        title="No Tickets Found!"
        subtitle="Your support tickets or feature requests will appear here."
      /> */}
    </Box>
  );
}

export default Tickets;
