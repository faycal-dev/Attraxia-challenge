import { TableDataType } from "../types/CommonTypes";

export default function UseStatusCount(TableData?: TableDataType) {
  function statusCount(element: string) {
    return TableData?.filter(
      (currentElement) =>
        currentElement.status.toLowerCase() === element.toLowerCase()
    ).length;
  }

  const options = [
    ["Open", "primary.main"],
    ["Feedback", "secondary.main"],
    ["Resolved", "success.main"],
  ];
  let STATUS_OPTIONS = [
    {
      value: "All Tickets",
      badgeNumber: TableData?.length ? TableData?.length : 0,
      badgeColor: "grey.300",
    },
  ];
  options.map((status) => {
    let count = statusCount(status[0]);
    STATUS_OPTIONS.push({
      value: status[0],
      badgeNumber: count ? count : 0,
      badgeColor: status[1],
    });
  });

  return STATUS_OPTIONS;
}
