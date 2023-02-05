import {  useFilterType } from "../types/CommonTypes";

export default function UseFilter(props: useFilterType) {
  const { filterType, value, data } = props;

  let filteredData;
  if (filterType === "input") {
    filteredData = data?.filter((row) => {
      return (
        row.ticket.title.toLowerCase().includes(value.toLowerCase()) ||
        row.ticket.subtitle.toLowerCase().includes(value.toLowerCase())
      );
    });
  } else {
    if (value === "All Tickets") {
      filteredData = data;
    } else {
      filteredData = data?.filter((row) => {
        return row.status.toLowerCase().includes(value.toLowerCase());
      });
    }
  }

  return { filteredData };
}
