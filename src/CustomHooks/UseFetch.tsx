import { useEffect, useState } from "react";
import { TABLEDATA } from "../data/TableData";
import { TableDataType } from "../types/CommonTypes";

export default function UseFetch() {
  const [data, setData] = useState<TableDataType | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    // get the first 10 only for the first page
    setData(TABLEDATA.slice(0, 10));
    setIsLoading(false);
  };

  useEffect(() => {
    let ismounted = true;
    // to prevent memory leaks
    if (ismounted) {
      // to simulate api call
      setTimeout(getData, 1000);
    }

    return () => {
      ismounted = false;
    };
  }, []);

  return { isLoading, data };
}
