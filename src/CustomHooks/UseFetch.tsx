import { useEffect, useState } from "react";
import { TABLEDATA } from "../data/TableData";
import { TableDataType } from "../types/CommonTypes";

export default function UseFetch(page: number) {
  const [data, setData] = useState<TableDataType | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const getData = () => {
    // get the first 10 only for the first page and 10 for each page
    setData(TABLEDATA.slice(page * 10 - 10, page * 10));
    setIsLoading(false);
    setNumberOfPages(Math.floor(TABLEDATA.length / 10) + 1);
  };

  useEffect(() => {
    let ismounted = true;
    // to prevent memory leaks
    if (ismounted) {
      // to simulate api call
      setTimeout(getData, 500);
    }

    return () => {
      ismounted = false;
    };
  }, [page]);

  return { isLoading, data, numberOfPages };
}
