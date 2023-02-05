import { Box, Pagination } from "@mui/material";
import EmptyData from "../elements/EmptyData";
import Header from "../elements/Header";
import { ReactComponent as CalendarIcon } from "../../assets/Calendar.svg";
import { ReactComponent as SearchNotFoundIcon } from "../../assets/Search_No_Ticket.svg";
import CustomTable from "./Table";
import UseFetch from "../../CustomHooks/UseFetch";
import Loading from "../elements/Loading";
import { TableDataType } from "../../types/CommonTypes";
import UseFilter from "../../CustomHooks/UseFilter";
import { useState } from "react";
import UseStatusCount from "../../CustomHooks/UseStatusCount";

let COLUMNS = ["TICKET", "STATUS", "CRATED ON", "REPLIES"];

function Tickets() {
  const [page, setPage] = useState(1);
  const [filteredData, setFiltredData] = useState<TableDataType | undefined>();
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, data, numberOfPages } = UseFetch(page);
  const STATUS_OPTIONS = UseStatusCount(data);

  const filter = (
    filterType: "input" | "select",
    value: string,
    data?: TableDataType
  ) => {
    const { filteredData } = UseFilter({
      filterType: filterType,
      value: value,
      data: data,
    });
    setFiltredData(filteredData);
  };

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    setFiltredData(undefined);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (data?.length === 0) {
    return (
      <EmptyData
        icon={<CalendarIcon />}
        title="No Tickets Found!"
        subtitle="Your support tickets or feature requests will appear here."
      />
    );
  }
  return (
    <>
      <Box sx={{ backgroundColor: "common.white", borderRadius: "4px", mt: 3 }}>
        <Header
          headerType="filters"
          supportText="My Tickets"
          SelectItems={STATUS_OPTIONS}
          SelectChangeHandler={(e) => {
            filter("select", e.target.value, data);
          }}
          SearchInputChangeHandler={(e) => {
            setSearchValue(e.target.value);
            filter("input", e.target.value, data);
          }}
        />
        {filteredData?.length === 0 ? (
          <EmptyData
            icon={<SearchNotFoundIcon />}
            title={`No tickets found for "${searchValue}"`}
            subtitle="Please adjust your search term and try again."
          />
        ) : (
          <CustomTable
            columns={COLUMNS}
            data={filteredData ? filteredData : data}
          />
        )}
      </Box>
      <Pagination
        count={numberOfPages}
        size="small"
        page={page}
        onChange={handlePagination}
        sx={{
          mt: 2,
          display:
            !filteredData || filteredData.length === data?.length
              ? "block"
              : "none",
        }}
      />
    </>
  );
}

export default Tickets;
